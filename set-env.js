const fs = require('node:fs');
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
// Load node modules
require('dotenv').config();
// `environment.ts` file structure
const envConfigFile = `export const environment = {
    apiUrl: '${process.env.DOMAIN_NAME}',
    appName: '${process.env.APP_NAME}',
	openid4vpDraft: '${process.env.OPENID4VP_DRAFT}',
};`;

console.log(envConfigFile);
fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    throw console.error(err);
  }
  console.log(
    `Angular environment.ts file generated correctly at ${targetPath} \n`
  );
});
