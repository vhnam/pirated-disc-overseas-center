module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3e1ce01d8340da1367dd7e17cc0cefe1'),
  },
});
