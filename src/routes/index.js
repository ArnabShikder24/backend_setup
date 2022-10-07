const express = require('express');

const router = express.Router({ mergeParams: true });
const exampleRoute = require('./example.route');
const contactRoute = require('./contact.route');
const freeAuditRoute = require('./freeAudit.route');

const defaultRoutes = [
  {
    path: '/examples',
    route: exampleRoute,
  },
  {
    path: '/contacts',
    route: contactRoute,
  },
  {
    path: '/free-audits',
    route: freeAuditRoute,
  },
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
