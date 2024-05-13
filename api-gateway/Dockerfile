FROM docker.tyk.io/tyk-gateway/tyk-gateway:v5.1.0

COPY tyk.conf /opt/tyk-gateway/tyk.conf
COPY apps /opt/tyk-gateway/apps
COPY certs /opt/tyk-gateway/certs
COPY policies /opt/tyk-gateway/policies
COPY middleware /opt/tyk-gateway/middleware

ENTRYPOINT [ "/opt/tyk-gateway/tyk" ]