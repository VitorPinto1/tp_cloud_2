# tp_cloud_2
Application NestJS minimale pour GCP

# Docker run
docker run -d -p 3000:3000 --name tp2-container tp_cloud_2

# Gcloud selection projet
gcloud config set project tp-cloud-2-480808

# Gcloud avtiver cloud build
gcloud services enable cloudbuild.googleapis.com
# Gcloud build manuel
gcloud builds submit --config=.yaml .