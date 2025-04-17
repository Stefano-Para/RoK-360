<script setup>

</script>

<template>
  <div class="flex h-screen bg-[#1f1b24] text-white">
    <!-- Sidebar -->
    <motion
      tag="aside"
      class="w-64 bg-gradient-to-b from-yellow-800 to-yellow-900 shadow-lg flex flex-col"
      :initial="{ x: -300, opacity: 0 }"
      :enter="{ x: 0, opacity: 1, transition: { duration: 0.5 } }"
    >
        <!-- HEADER -->
        <div class="p-6 text-2xl font-bold text-yellow-300">
          Rise of Kingdoms
        </div>
        <!-- MAIN -->
        <nav class="flex-1 space-y-2 p-4">

          <NuxtLink
          to="/"
            class="block p-2 rounded transition-all duration-300 hover:bg-yellow-700 hover:shadow-[0_0_10px_#facc15]"
            :class="{ 'bg-yellow-700': $route.path === '/' }"
          >
            <span class="inline-block transition-transform group-hover:scale-105">
              🏠 Home
            </span>
          </NuxtLink>

          <NuxtLink
          to="/guides"
            class="block p-2 rounded transition-all duration-300 hover:bg-yellow-700 hover:shadow-[0_0_10px_#facc15]"
            :class="{ 'bg-yellow-700': $route.path === '/guides' }"
          >
            <span class="inline-block transition-transform group-hover:scale-105">
              📘 Guide
            </span>
          </NuxtLink>

          <NuxtLink
          to="/commanders"
            class="block p-2 rounded transition-all duration-300 hover:bg-yellow-700 hover:shadow-[0_0_10px_#facc15]"
            :class="{ 'bg-yellow-700': $route.path === '/commanders' }"
          >
            <span class="inline-block transition-transform group-hover:scale-105">
              ⚔️ Comandanti
            </span>
          </NuxtLink>

          <NuxtLink
          to="/builds"
            class="block p-2 rounded transition-all duration-300 hover:bg-yellow-700 hover:shadow-[0_0_10px_#facc15]"
            :class="{ 'bg-yellow-700': $route.path === '/builds' }"
          >
            <span class="inline-block transition-transform group-hover:scale-105">
              🏛️ Build
            </span>
          </NuxtLink>

          <NuxtLink
          to="/aboutUs"
            class="block p-2 rounded transition-all duration-300 hover:bg-yellow-700 hover:shadow-[0_0_10px_#facc15]"
            :class="{ 'bg-yellow-700': $route.path === '/aboutUs' }"
          >
            <span class="inline-block transition-transform group-hover:scale-105">
              📜 Info
            </span>
          </NuxtLink>
        </nav>
        <!-- FOOTER -->
        <div class="p-4 text-sm text-yellow-200">
          © 2025 RoK Guide
        </div>
    </motion>
    <!-- Contenuto -->
    <main class="flex-1 overflow-y-auto p-6 bg-[#121015]">
      <slot />
    </main>
  </div>
</template>
  