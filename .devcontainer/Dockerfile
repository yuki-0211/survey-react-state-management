# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.217.4/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT=${VARIANT}
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

EXPOSE 5173
RUN su node -c "npm install -g vite env-cmd"