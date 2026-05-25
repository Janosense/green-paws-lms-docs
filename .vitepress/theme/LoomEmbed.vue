<script setup lang="ts">
const props = defineProps<{
  id?: string
  title?: string
}>()
</script>

<template>
  <div class="loom-embed">
    <div v-if="props.id" class="loom-embed__frame">
      <iframe
        :src="`https://www.loom.com/embed/${props.id}`"
        :title="props.title || 'Відео-інструкція'"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </div>
    <div v-else class="loom-embed__placeholder">
      <span class="loom-embed__icon">🎬</span>
      <span>Відео-інструкція скоро з'явиться</span>
    </div>
  </div>
</template>

<style scoped>
.loom-embed {
  margin: 1.5rem 0;
}

.loom-embed__frame {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.loom-embed__frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.loom-embed__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 200px;
  padding: 2rem;
  border: 2px dashed var(--vp-c-divider);
  border-radius: 12px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  font-size: 0.95rem;
}

.loom-embed__icon {
  font-size: 2rem;
}
</style>
