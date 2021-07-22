--SELECT * FROM percentChange;

SELECT percentChange.*, countyCoor.lat, countyCoor.lng
FROM percentChange
INNER JOIN countyCoor ON percentChange.county = countyCoor.county;