<template>
    <div
      class="footnote-container absolute bottom-0 left-0 w-full"
      v-bind:class="{
        'bg-main': filled,
      }"
    >
      <hr v-if="separator" />
      <ul
        class="!list-none p-2"
        v-bind:class="{
          'justify-start': x === 'l',
          'justify-end': x === 'r',
        }"
      >
        <li v-for="(footnote, index) in footnotes" :key="index" class="whitespace-nowrap pl-25">
          <sup v-if="footnote.number">{{ footnote.number }}</sup>
          {{ footnote.content }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { PropType } from 'vue';
  
  interface Footnote {
    number?: number;
    content: string;
  }
  
  defineProps({
    filled: {
      default: false,
      type: Boolean,
    },
    separator: {
      default: false,
      type: Boolean,
    },
    x: {
      default: 'r',
      type: String as PropType<'l' | 'r'>,
      validator: (value) => ['l', 'r'].includes(value),
    },
    footnotes: {
      type: Array as PropType<Footnote[]>,
      default: () => [],
    },
  });
  </script>
  
<style scoped>
.footnote-container .bg-main {
  background-color: #f0f0f0;
}

.footnote-container hr {
  margin: 0.25rem 0;
  border-top: 1px solid #cccccccf;
}

.footnote-container ul {
  list-style-type: none;
  padding: 1px;
  margin: 0;
}

.footnote-container li {
  color: gray;
  margin: 0.05rem 3.5rem;
  font-size: 1.25rem;
}

.footnote-container sup {
  font-weight: light;
  color: gray;
  margin-right: 4px;

}
</style>