<template>
  <div class="form-container">
    <h2 class="form-title">Report Complaint</h2>
    <form @submit.prevent="submitForm" class="issue-form">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        v-model="formData.name"
        required
      />

      <label for="issueType">Issue Type:</label>
      <select id="issueType" v-model="formData.issueType" required>
        <option value="infrastructure">Infrastructure Issue</option>
        <option value="electricity">Electricity and Water Supply Problems</option>
        <option value="legal">Legal and Administrative Grievances</option>
      </select>

      <label for="description">Issue Description:</label>
      <textarea
        id="description"
        v-model="formData.description"
        placeholder="Describe your issue"
        rows="4"
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        id: 0,
        name: "",
        issueType: "",
        description: "",
      },
    };
  },

  methods: {
    getNextId() {
      let lastId = parseInt(localStorage.getItem("lastComplaintId")) || 0;
      let newId = lastId + 1;
      localStorage.setItem("lastComplaintId", newId); 
      return newId;
    },

    async submitForm() {
      this.formData.id = this.getNextId(); 

      try {
        const response = await axios.post("http://localhost:8080/api/complaints", this.formData);
        console.log("Response:", response.data);
        alert("Issue submitted successfully!");
        this.formData = { id: 0, name: "", issueType: "", description: "" }; 
      } catch (error) {
        console.error("Error submitting complaint:", error);
        alert("Failed to submit issue. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #222;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 255, 127, 0.3);
}
.form-title {
  text-align: center;
  margin-bottom: 20px;
}
.issue-form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 10px;
}
input, select, textarea {
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  border: none;
  background: #333;
  color: white;
}
button {
  margin-top: 15px;
  padding: 10px;
  background: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background: #369f77;
}
</style>
