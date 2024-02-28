---
theme: ./
layout: cover
class: text-left
backgroud: '/ATLAS/ATLAS-Logo.png'
authors:  # First author should be the presenter
  - First Author: ["Institution 1", "Institution 2"]
  - Second Author: ["Institution 3"]
  - Third Author: ["Institution 1", "Institution 3"] 

meeting: "presentation meeting"
preTitle: "An Example Title"
---

<br>
<p style="color:#0FA3B1;">Don't explicitly put title on cover page 🥳 </p>
<p style="color:#0FA3B1;">Put your own logo somewhere </p>

<img id="ATLAS" src="/ATLAS/ATLAS-Logo.png"> </img>

<style scoped>
#ATLAS {
  width: 180px;
  position: absolute;
  right: 3%;
  bottom: 4%;
  /* background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 15%, #146b8c 50%); */
}
</style>

---
layout: pageBar
---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---
layout: pageBar
---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: pageBar
---

# The Lagrangian

The mathematical formulation of the Standard Model of particle physics


The Standard Model of particle physics is a **quantum field theory**. 
Therefore, its <span style="color:#ac1944;">fundamental elements are quantum fields</span> and the excitations of these fields are *identified* as **particles**.
All information is encoded in a compact description—the so-called ‘Lagrangian’ ( $\mathcal{L}$ ), which is an extremely compact notation.

In the physics classroom, however, it is very difficult to achieve a deep-level understanding because the required mathematics skills go far beyond high-school level. Hence, we will only treat the ultra-short Lagrangian as below:
$$
\mathcal{L} = \color{#9d6fa5}{ -\frac{1}{4} F_{\mu\nu} F^{\mu\nu} } 
              + \color{#c90024}{ i\bar{\psi} {\mathcal{D}}\!\!\!\!/ \psi }
              + \mathrm{h.c.} 
              + \color{#296b4c}{ \psi_i y_{ij} \psi_j \phi }
              + \mathrm{h.c.} 
              + \color{#4d45cc}{ |\mathcal{D}_{\mu} \phi |{ }^2 }
              - \color{#fe7b26}{ V(\phi) }
$$

<div class="grid grid-cols-3 gap-5 items-center justify-center">

<div class="col-span-2">

> - <span style="color: #9d6fa5"> $F_{\mu\nu} F^{\mu\nu}$: This term is the scalar product of the field strength tensor $F_{\mu\nu}$ containing the mathematical encoding of all interaction particles except the Higgs boson. It contains the necessary formulation for these particles to even exist, and describes how they interact with each other. </span>
> - <span style="color: #c90024"> $i\bar{\psi} {\mathcal{D}}\!\!\!\!/ \psi$: This term describes how interaction particles interact with matter particles. The fields $\psi$ and $\bar{\psi}$ describe (anti)quarks and (anti)leptons. </span>
> - <span style="color: #296b4c"> $\psi_i y_{ij} \psi_j \phi$: This term describes how matter particles couple to the Brout–Englert–Higgs field $\psi$ and thereby obtain mass. </span>
> - <span style="color: #4d45cc"> $|\mathcal{D}_{\mu} \phi |{ }^2$: This term describes how the interaction particles couple to the BEH field. This applies only to the interaction particles of the weak interaction ($W^{\pm}, Z$), which thereby obtain their mass. </span>
> - <span style="color: #fe7b26"> $V(\phi)$: This term describes the potential of the BEH field.  </span>

</div>
<div class="col-span-1">

<Transform :scale="1.0">
<img src="https://www.quantumdiaries.org/wp-content/uploads/2011/06/cernmug.jpg"/>
</Transform>

</div>

</div>

<style scoped>
.slidev-layout blockquote {
  font-size: 1rem;
}

li {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

</style>

---
layout: pageBar
---

# 2-D Plotly Examples

Two 2D plots for display

Try to interact with the graphs 🥰

<div grid="~ cols-2 gap-20">

<Transform :scale="0.75">
<PlotlyGraph filePath="Graph/plotly1.json" tickFontSize="18" graphWidth="800"/>
</Transform>

<Transform :scale="0.75">
<PlotlyGraph filePath="Graph/plotly1.json" tickFontSize="18" graphWidth="800"/>
</Transform>

</div>


---
layout: pageBar
---

# 3-D Plotly Examples

Two 3D plots for display

Try to interact with the graphs 🥰

<div grid="~ cols-2 gap-20">

<Transform :scale="0.65">
<PlotlyGraph filePath="Graph/plotly2.json" graphWidth="900"/>
</Transform>

<Transform :scale="0.65">
<PlotlyGraph filePath="Graph/plotly3.json" graphWidth="900"/>
</Transform>

</div>


---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)


---
layout: pageBar
---
