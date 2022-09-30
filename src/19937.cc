#include <random>

struct MyRand {
  std::mt19937_64 gen;
  std::uniform_int_distribution<uint64_t> dis;

  MyRand(uint64_t min, uint64_t max, uint32_t seed) : dis(min, max) { gen.seed(seed); }
};

extern "C" {

const uint64_t NUMERIC_LIMITS = std::numeric_limits<uint64_t>::max();

MyRand* CreateRand(uint64_t min = 0, uint64_t max = NUMERIC_LIMITS, uint32_t seed = 0) {
  MyRand* rand = new MyRand(min, max, seed);
  return rand;
}

uint64_t Generate(MyRand* rand) {
  return rand->dis(rand->gen);
}

void FreeRand(MyRand* rand) {
  delete rand;
}
}
