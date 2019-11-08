const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const UserService = require('../../../services/users');
const { config } = require('../../../config/index');

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function(tokenPayload, cb) {
      const usersService = new UserService();

      try {
        const user = await usersService.getUSer({ email: tokenPayload.email });

        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        delete user.password;

        return cb(null, { ...user, scopes: tokenPayload.scopes });
      } catch (error) {
        return cb(error);
      }
    }
  )
);
