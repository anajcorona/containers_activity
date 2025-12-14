# Etapa de construcción: instalar dependencias
FROM python:3.10-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --prefix=/install --no-cache-dir -r requirements.txt
COPY . .
FROM python:3.10-slim
WORKDIR /app
COPY --from=builder /app /app
COPY --from=builder /install /usr/local
ARG PORT=5000
ENV PORT=${PORT}
EXPOSE ${PORT}
CMD ["sh", "-c", "python app.py"]
