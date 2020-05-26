// eslint-disable-next-line
const database = require('../src/database.json');
// eslint-disable-next-line
const fs = require('fs');
console.log();
let errors = 0;
let missingImages = 0;
database.forEach((car, i) => 
{
	const discriminator = car.name && car.plate ? `${car.name}(${car.plate})` : `index(${i})`; 
	if(Object.keys(car).length != 4)
	{
		console.log(`Error: ${discriminator} expected 4 keys found ${Object.keys(car).length}`);
		errors++;
	}
	if(car.name === undefined)
	{
		console.log(`Error: ${discriminator} expected name property`);
		errors++;
	}
	if(car.plate === undefined) 
	{
		console.log(`Error: ${discriminator} expected plate property`);
		errors++;
	}
	if(car.collection === undefined) 
	{
		console.log(`Error: ${discriminator} expected collection property`);
		errors++;
	}
	// eslint-disable-next-line
	if(!fs.existsSync(process.argv[1].replace('scripts\\validate-database.js', `/public/car-img/${car.plate}.jpg`)))
	{
		missingImages++;
	}
});
console.log();

console.log(`There are currently ${missingImages} image${missingImages > 0 ? 's' : ''} missing`);
console.log(`Done! Found ${errors} error${errors > 0 ? 's' : ''} in ${database.length} entries`);
if(errors > 0)
{
	// eslint-disable-next-line
	process.exit(1);
}
