<template>
    <div class="connect-container">
      <h2 class="connect-title">Connect With Me</h2>
      <p>Let's build a connection! Reach out to me on any of the following platforms:</p>
      
      <div class="social-links">
        <a href="https://www.linkedin.com/in/anmolsinha28/" target="_blank" class="linkedin">
            <i class="fab fa-linkedin"></i> LinkedIn
        </a>
       
        <a href="https://www.instagram.com/_anmolsinha" target="_blank" class="instagram">
            <i class="fab fa-instagram"></i> Instagram</a>


        <a href="https://github.com/28Anmolsinha" target="_blank" class="github">
           <i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConnectWithMe",
  };
  </script>
  
  <style scoped>
  .connect-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background: #222;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 255, 127, 0.3);
    text-align: center;
  }
  .connect-title {
    margin-bottom: 15px;
  }
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .social-links a {
    display: block;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  .linkedin { background: #0e76a8; }
  .instagram { background: #e4405f; }
  .github { background: #333; }
  
  .social-links a:hover {
    opacity: 0.8;
  }
  </style>