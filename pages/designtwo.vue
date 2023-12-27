<script setup></script>

<template>
  <div class="bg-slate-900 h-screen">
    <div class="mainDiv text-white">
      <div class="mt-8">
        <h2 class="text-7xl font-semibold">Play And Run Different FPS Test</h2>
        
        <p class="text-2xl font-Mukta">Your Screen Working On <span class="font-bold text-3xl"> {{ myFps }} </span> FPS</p>
        <p class="mt-3 text-xl">
          Warning: It often returns an incorrect FPS because sometimes an animation frame is skipped when your CPU is busy with other tasks.
        </p>
        <p class="mt-3 text-xl">
          Refresh Page To Get Exact FPS of Screen
        </p>
        <div class="mt-4">
          <button class="rounded-md px-2 border-blue-800 border-2 text-white font-semibold text-lg"> RUN </button>
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<style scoped></style>
