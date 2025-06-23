# CloudWatchr
CloudWatchr is a full-stack monitoring and alerting system for modern DevOps workflows.

## Key Features
- **Infrastructure Monitoring:** CPU, memory, disk, and network usage via Node Exporter.
- **Application Monitoring:** Custom metrics exposed via Prometheus endpoints.
- **Dashboarding:** Grafana dashboards visualizing metrics and system health.
- **Alerting System:** Alertmanager integration for sending Slack/email alerts on thresholds.
- **Centralized Log Monitoring:** Loki + Promtail stack for collecting, aggregating, and querying logs from all services.
- **Dockerized Stack:** Each service containerized and orchestrated with Docker Compose or Kubernetes.

## 🧰 Tech Stack
- **Prometheus** (Metric collection)
- **Grafana** (Dashboards)
- **Alertmanager** (Alerts routing)
- **Node Exporter** (System metrics)
- **Loki** (Centralized log aggregation)
- **Promtail** (Log shipping)
- **Docker / Docker Compose** (Container orchestration)
- **Nginx / Traefik** (Optional Ingress/Reverse Proxy)
- **Slack / Gmail API** (For alerts)
