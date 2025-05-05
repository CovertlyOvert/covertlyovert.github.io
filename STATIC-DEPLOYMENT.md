
# Deploying "Ankit's Lab" to GitHub Pages

This guide explains how to deploy the pre-built static site to GitHub Pages.

## Deployment Steps

1. **Create a GitHub Repository**
   - Create a new repository on GitHub (e.g., `username.github.io` for a user site or any name for a project site)

2. **Upload the Static Site Files**
   - Copy all files from the `dist` directory to your repository
   - Make sure to include:
     - `index.html` (in the root)
     - `/assets` folder
     - All CSS and JavaScript files
     - All image files

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to the "Pages" section
   - Select the branch where you uploaded the files (usually `main` or `master`)
   - Save the changes

4. **Access Your Site**
   - Your site will be available at `https://username.github.io` (for a user site) or `https://username.github.io/repository-name` (for a project site)
   - It may take a few minutes for the site to deploy

## Important Notes

- This is a pre-built static site, so no build step is required on GitHub
- All paths are relative, so the site should work regardless of the repository name
- If your site isn't displaying correctly, check the browser console for any path-related errors

## Updating the Site

To update the site:

1. Make changes to the source code
2. Rebuild the static site using `node build-static.js`
3. Replace the files in your GitHub repository with the new build output
