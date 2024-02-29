// publish.js
import fs from 'fs';
import { execSync } from 'child_process';

const basePackageName = "@avencastf/slidev-theme-hep";
const packageNameForRegistry = {
  github: "@avencastf/slidev-theme-hep",
  npmjs: "slidev-theme-hep",
};

const registryUrls = {
  github: "https://npm.pkg.github.com/",
  npmjs: "https://registry.npmjs.org/",
};

function publishToRegistry(registry) {
  const packageJsonPath = './package.json';
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath).toString());
  const originalName = packageJson.name;
  
  // Update package name for the target registry
  packageJson.name = packageNameForRegistry[registry];
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  try {
    // Publish the package
    console.log(`Publishing ${packageJson.name} to ${registry}`);
    execSync(`npm publish --registry ${registryUrls[registry]} ${(registry === 'npmjs') ? '--access public' : ''}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to publish to ${registry}: ${error}`);
  } finally {
    // Revert changes to package.json
    packageJson.name = originalName;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }
}

const registry = process.argv[2];
if (!registry || !(registry in registryUrls)) {
  console.error('Please specify a valid target registry: github or npmjs');
  process.exit(1);
}

publishToRegistry(registry);
