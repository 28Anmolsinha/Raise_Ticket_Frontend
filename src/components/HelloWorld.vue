<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h4>
       Raise Ticket is a website which helps the user to list down the problems and submit for future actions.
    </h4>
    <h4>
      More instructions are available in
      <a href="javascript:void(0)" @click="openReadmeInEditor"><code>Run Project</code></a>
    </h4>
    
    
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3
  .greetings h4 {
    text-align: left;
  }
}
</style>
