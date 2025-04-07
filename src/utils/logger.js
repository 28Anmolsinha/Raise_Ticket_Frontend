const LOG_API_URL = "http://localhost:8082/logs";

async function sendLogToBackend(log) {
  try {
    await fetch(LOG_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log),
    });
  } catch (error) {
    console.error("Failed to send log to backend:", error);
  }
}

const log = {
  info(message, data = null) {
    console.info("[INFO]", message, data);
    sendLogToBackend({ level: "INFO", message, data });
  },
  warn(message, data = null) {
    console.warn("[WARN]", message, data);
    sendLogToBackend({ level: "WARN", message, data });
  },
  error(message, data = null) {
    console.error("[ERROR]", message, data);
    sendLogToBackend({ level: "ERROR", message, data });
  },
  debug(message, data = null) {
    console.debug("[DEBUG]", message, data);
    sendLogToBackend({ level: "DEBUG", message, data });
  },
};

export default log;
