function addPeerDependency(pkg, context, dependentName, peerName, peerVersion) {
  if (pkg.name === dependentName) {
    pkg.peerDependencies = {
      ...pkg.peerDependencies,
      [peerName]: peerVersion,
    };
    context.log(`adding ${peerName} as peerDependency of ${pkg.name}`);
  }
}

function addProdDependency(
  pkg,
  context,
  dependentName,
  dependencyName,
  dependencyVersion
) {
  if (pkg.name === dependentName) {
    pkg.dependencies = {
      ...pkg.dependencies,
      [dependencyName]: dependencyVersion,
    };
    context.log(`adding ${dependencyName} as dependency of ${pkg.name}`);
  }
}

function addDevDependency(
  pkg,
  context,
  dependentName,
  dependencyName,
  dependencyVersion
) {
  if (pkg.name === dependentName) {
    pkg.devDependencies = {
      ...pkg.devDependencies,
      [dependencyName]: dependencyVersion,
    };
    context.log(`adding ${dependencyName} as devDependency of ${pkg.name}`);
  }
}

function readPackage(pkg, context) {
  // If any packages need an override or dependency fixup, do it here. BUT
  // PREFER pnpm Package Extensions if possible:
  // https://pnpm.io/package_json#pnpmpackageextensions. Remember that pnpm will
  // never give a package access to a dependency unless it is explicitly a
  // dependency: peerDependencies do not count.
  // https://pnpm.io/blog/2020/10/17/node-modules-configuration-options-with-pnpm#a-strict-traditional-modules-directory.
  // So it's best to use prod dep and version=*. See
  // (https://github.com/pnpm/pnpm/discussions/3995#discussioncomment-1647416)

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
