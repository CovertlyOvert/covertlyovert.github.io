
// This script can be executed with Node.js to build the static site
console.log('Building static site for GitHub Pages...');

const { execSync } = require('child_process');

try {
  // Run the Vite build command
  console.log('Running production build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Static site build complete!');
  console.log('The static site files are in the "dist" directory.');
  console.log('To deploy to GitHub Pages, copy all files from "dist" to your GitHub Pages repository.');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
