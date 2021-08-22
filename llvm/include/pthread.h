#ifdef __wasi__
#include "wasi-pthread.h"
#else
#pragma clang diagnostic ignored "-Wgnu-include-next"
#include_next <pthread.h>
#endif
