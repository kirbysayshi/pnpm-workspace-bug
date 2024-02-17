# pnpm workspace bug

pnpm does not create node_modules folders within a workspace if the enclosing folder and package.json is not present. This defeats a Docker pattern when dealing with monorepos:

```dockerfile
FROM node:20-slim as pnpm-base
# assume there is a repo layout like this repo, with workspace packages
COPY .npmrc .pnpmfile.cjs package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# then copy in sources since they change frequently
COPY . .
```

# Reproducing

```sh
pnpm run trigger-bug
```
