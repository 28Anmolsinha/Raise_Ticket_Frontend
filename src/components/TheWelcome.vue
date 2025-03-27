<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Follow the service</template>

    Vue's
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    has helped me to create this website from scratch and solve a real-world issue.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Infrastructure issues</template>

    If you are facing any of the Infrastructural issues , need not to worry now !!!. You are just a click away 
    from solving the problem. <br />
    Refer to the <a href="about" >Raise Complaint section </a>and report your issue.


  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Electricity and water supply problems</template>
    If you are facing regular Electricity and water supply problems , Just Relax !!.
    As you are just a step away to get rid of it. <br />
    Refer to the <a href="about" >Raise Complaint section </a>and report your issue. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Legal and administrative grievances</template>
    Facing any Legal and administrative grievances, Time to get rid of it!!!.
    You are just a single step away to report your issue. <br />
    Refer to the <a href="about" >Raise Complaint section </a>and report your issue.


    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Connect With me</template>

    Let us built the relationship between us. <br />
    <a href="/connect">Connect with me </a> and help me built more 
    
  </WelcomeItem>
</template>
