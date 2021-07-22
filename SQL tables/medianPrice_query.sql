--SELECT * FROM medianPrice;

SELECT medianPrice.*, countyCoor.lat, countyCoor.lng
FROM medianPrice
INNER JOIN countyCoor ON medianPrice.county = countyCoor.county;

