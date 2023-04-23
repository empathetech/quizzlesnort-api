# quizzlesnort-api

An API for a community flash card app that was solely named to entice one engineer to contribute code.

## Setup

### Yarn Plug'n'Play (PnP)

(Feel free to skip if you've worked on a Yarn PnP codebase before)

**Never set up a Yarn PnP repo before?**
Here's a quickstart from the Yarn folks on how to set this up:
https://yarnpkg.com/getting-started/recipes#typescript--pnp-quick-start

**Why don't I see a node_modules/ folder when I run `yarn`?**
Good question! Yarn 2+ with Plug'n'Play (PnP) removes the need for a `node_modules` folder as a way to address some of its inherent issues, such as disk space usage, slow installations, and non-deterministic dependency resolutions. PnP offers a more efficient alternative to manage dependencies in a Yarn 2+ project.

Here's how Yarn 2+ PnP works without a `node_modules` folder:

1. **Virtual file system**: Instead of extracting and storing each dependency package inside the `node_modules` folder, Yarn 2+ PnP creates a virtual file system. It stores the packages as compressed archives in the `.yarn/cache` directory. This approach reduces disk space usage and improves installation times.

2. **PnP resolver**: When your application requires a dependency, Yarn PnP steps in as a custom resolver. It reads the `.pnp.js` or `.pnp.cjs` file (which is generated during the installation) to determine the exact location of the package in the virtual file system. This approach ensures deterministic dependency resolution and avoids conflicts between different dependency versions.

3. **PnP API**: The Plug'n'Play API in Yarn 2+ provides programmatic access to the virtual file system and the dependency graph. This allows tools and scripts to work seamlessly with the PnP infrastructure.

By using a virtual file system and custom resolver, Yarn 2+ PnP improves upon the traditional `node_modules` approach. It results in faster installations, reduced disk space usage, and deterministic dependency resolutions, ultimately leading to a more efficient and reliable development experience.

**Why are we committing the .yarn/ folder?**
When using Yarn 2+ with Plug'n'Play (PnP), it is recommended to commit the `.yarn` subfolder to your version control system, such as Git. This is because the `.yarn` folder contains important files related to your project's configuration and dependencies.

The `.yarn` folder typically contains the following items:

1. `.yarn/cache`: This directory holds the package cache, which includes the compressed archives of your dependencies. Committing this folder ensures that every contributor to the project will have the same dependency versions and can work offline.
2. `.yarn/releases`: This directory contains the Yarn release binary, which helps to ensure that everyone working on the project uses the same Yarn version. This is important for consistency and avoiding issues due to version differences.
3. `.yarn/plugins`: This directory contains any plugins that you've added to your Yarn installation. Committing this folder ensures that everyone working on the project has access to the same plugins and their specific versions.
4. `.yarnrc.yml`: This file contains the Yarn configuration for your project. It is important to commit this file to ensure consistent behavior across all development environments.

However, you should add `.yarn/unplugged` and `.yarn/build-state.yml` to your `.gitignore` file, as they are generated during the build process and can vary between different environments.

In summary, committing the `.yarn` folder to your version control system helps ensure a consistent development environment for all team members and can prevent issues related to dependency version mismatches.

**What if I'm unsure that the changes made to `.yarn/` are in fact safe?**

1. **Always rely on strict code review!**
2. **Run `yarn npm audit` (Yarn 3+) to double-check your dependencies!**
3. **Maintain our CI/CD pipelines!**
