const geoip = require('geoip-lite');

const ip = '2409:4050:2e1c:c2ea:6c7d:5293:12b:f2d9';
const geo = geoip.lookup(ip);

console.log(geo);
