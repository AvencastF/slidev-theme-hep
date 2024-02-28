<template>
    <div class="text-box-container" :style="boxStyles">
      <!-- Use v-html to render processedText with line breaks -->
      <div class="text-content" :class="labelClass" v-html="processedText"></div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  // Props
  const props = defineProps({
    text: String,
    position: {
      type: Object,
      default: () => ({ top: '0px', left: '0px', right: '0px', bottom: '0px' })
    },
    customStyles: Object,
    label: {
      type: String,
      default: 'info', // Default label
    }
  });
  
  // Computed style for the text box container
  const boxStyles = computed(() => ({
    position: 'absolute',
    ...props.position,
    ...props.customStyles,
  }));
  
  // Computed class for text content based on label
  const labelClass = computed(() => {
    switch (props.label) {
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
      default:
        return ''; // Default class or no class
    }
  });
  
  // Process text to convert newline characters to HTML line breaks
  const processedText = computed(() => {
    // Ensure text is defined and replace newline characters with <br> tags
    return props.text ? props.text.replace(/\n/g, '<br>') : '';
  });
  </script>
<style scoped>
.text-box-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text-input {
    margin: 0.5rem;
}

.text-content {
    padding: 0.5rem;
}


/* Preset styles for labels */
.warning {
    background-color: #ffcc00;
    /* Yellow */
    color: red;
    /* Black text color for warning */
}

.info {
    background-color: transparent;
    /* Blue */
    color: #0FA3B1;
    /* White text color for info */
    font-weight: 550;
    font-size: 1.5em;
}
</style>
  