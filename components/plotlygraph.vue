<template>
  <div id="container">
    <div ref="plotDiv" id="plotdiv">
    </div>
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {
  props: {
    filePath: String,
    graphWidth: Number,
    graphHeight: Number,
    xTitleFontSize: Number,
    yTitleFontSize: Number,
    tickFontSize: Number,
    annotationFontSizeScale: Number,
  },
  data() {
    return {
      plotlyConfig: null,
    };
  },

  mounted() {

    this.createPlot();

    // this.loadPlotlyScript().then(() => {

    //   console.log('Plotly:', Plotly);

    //   console.log('Plotly loaded', window.Plotly);

      
    // }).catch(error => {
    //   console.error('Error loading Plotly:', error);
    // });
  },

  methods: {
    loadPlotlyScript() {
      return new Promise((resolve, reject) => {
        if (window.Plotly) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = 'https://cdn.plot.ly/plotly-latest.min.js';
          script.onload = () => resolve();
          script.onerror = () => reject('Failed to load Plotly script.');
          document.head.appendChild(script);
        }
      });
    },

    async createPlot() {
      if (!this.filePath) return;

      try {
        const response = await fetch(this.filePath);
        if (!response.ok) {
          throw new Error('Failed to load plotly configuration');
        }
        this.plotlyConfig = await response.json();

        console.log('Plotly config:', this.plotlyConfig.data);

        this.drawPlot();
      } catch (error) {
        console.error('Error loading plotly configuration:', error);
      }
    },
    drawPlot() {
      if (this.plotlyConfig && Plotly) {

        console.log('Drawing plot', this.filePath);

        // Ensure data and layout are correctly extracted from plotlyConfig
        const { data, layout } = this.plotlyConfig;

        console.log('Data:', data);
        console.log('Layout:', layout);

        // Modify layout here before rendering
        if (this.graphWidth !== undefined) {
          this.plotlyConfig.layout.width = this.graphWidth;
        }
        if (this.graphHeight !== undefined) {
          this.plotlyConfig.layout.height = this.graphHeight;
        }
        if (this.xTitleFontSize !== undefined) {
          this.plotlyConfig.layout.xaxis.titlefont = { size: this.xTitleFontSize };
        }
        if (this.yTitleFontSize !== undefined) {
          this.plotlyConfig.layout.yaxis.titlefont = { size: this.yTitleFontSize };
        }
        if (this.tickFontSize !== undefined) {
          // Assuming you want to set the tick font size for both axes
          this.plotlyConfig.layout.xaxis.tickfont = { size: this.tickFontSize };
          this.plotlyConfig.layout.yaxis.tickfont = { size: this.tickFontSize };
        }
        if (this.annotationFontSizeScale !== undefined) {
          this.plotlyConfig.layout.annotations.forEach(annotation => {
            annotation.font.size *= this.annotationFontSizeScale;
          });
        }

        Plotly.newPlot(this.$refs.plotDiv, data, layout, { displayModeBar: false });
      }
    }
  }
}
</script>


<style>

</style>
