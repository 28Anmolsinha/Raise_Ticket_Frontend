<template>
  <div class="notice-board-container">
    <h2 class="notice-title">Complaint Notice Board</h2>
    <div v-if="complaints.length" class="notice-list">
      <div v-for="complaint in complaints" :key="complaint.id" class="notice-item">
        <h3 class="complaint-title">{{ complaint.name }}</h3>
        <p class="complaint-description">{{ complaint.description }}</p>
      </div>
    </div>
    <p v-else class="no-issues">No complaints at the moment!</p>
  </div>
</template>

<script>
import axios from "axios";
import log from "@/utils/logger.js";

export default {
  data() {
    return {
      complaints: [],
    };
  },
  methods: {
    async fetchTopComplaints() {
      log.info("Initiating fetch for top complaints...");

      try {
        const response = await axios.get("http://10.200.208.98:32452/api/complaints/top");

        if (response.status === 200 && response.data.length > 0) {
          this.complaints = response.data;
          log.info("Successfully fetched top complaints.");
          log.debug("Complaints data:", response.data);
        } else {
          this.complaints = [];
          log.warn("No complaints found or unexpected response:", response.status);
        }
      } catch (error) {
        log.error("Error fetching top complaints.", {
          message: error.message,
          response: error.response ? error.response.data : "No response from server",
        });
      }
    },
  },
  mounted() {
    log.debug("NoticeBoard component mounted.");
    this.fetchTopComplaints();
  },
};
</script>

<style scoped>
.notice-board-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #222;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 255, 127, 0.3);
  text-align: center;
}

.notice-title {
  text-align: center;
  font-size: 22px;
  margin-bottom: 15px;
  color: #42b983;
}

.notice-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.notice-item {
  padding: 15px;
  background: #333;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 255, 127, 0.2);
  transition: transform 0.3s ease-in-out;
}

.notice-item:hover {
  transform: scale(1.03);
}

.complaint-title {
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #42b983;
}

.complaint-description {
  font-size: 14px;
  color: #ddd;
}

.no-issues {
  font-size: 16px;
  color: #888;
  margin-top: 20px;
}
</style>
