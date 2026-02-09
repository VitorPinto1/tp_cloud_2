# tp_cloud_2
Application NestJS minimale pour GCP

# Docker run
docker run -d -p 8080:8080 --name tp2-container tp_cloud_2

# Gcloud selection projet
gcloud config set project tp-cloud-2-480808

# Gcloud activer cloud build
gcloud services enable cloudbuild.googleapis.com

# Gcloud build manuel

local il faut metre le id projet en dur

gcloud builds submit --config=cloudbuild.yaml .

ou 

gcloud builds submit --config cloudbuild.yaml --project tp-cloud-2-480808 .

# Gcloud artifacts - À créer la première fois

  gcloud artifacts repositories create tp-cloud-2-docker \
    --repository-format=docker \
    --location=europe-west9

# gcloud artifacts authentification, build, push, déploiement (si besoin, optionnel)

  gcloud auth configure-docker europe-west9-docker.pkg.dev

  docker build -t europe-west9-docker.pkg.dev/tp-cloud-2-480808/tp-cloud-2-docker/tp_cloud_2:latest .
  
  docker push europe-west9-docker.pkg.dev/tp-cloud-2-480808/tp-cloud-2-docker/tp_cloud_2:latest

# Gcloud RUN

gcloud run deploy tp-cloud-2 --image europe-west9-docker.pkg.dev/tp-cloud-2-480808/tp-cloud-2-docker/tp_cloud_2:latest --region europe-west9

# lien 
https://tp-cloud-2-426914906044.europe-west9.run.app


# liste des images

gcloud artifacts docker images list europe-west9-docker.pkg.dev/tp-cloud-2-480808/tp-cloud-2-docker --include-tags

# Compte de service
Agent de service Cloud Build
Éditeur Cloud Build
