# usará como base a imagem do nodejs versão 15
FROM node:16.13-alpine3.15
# comando para instalar o bash
RUN apk add bash
# diretório que será criado logo enquanto buildamos a imagem
WORKDIR /usr/src/app
# gambiarra para manter o container de pé
CMD [ "tail", "-f",  "/dev/null" ]