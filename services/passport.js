const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    // (acessToken, refreshToken, profile, done) => {
    //   //console.log('access token', acessToken);
    //   //console.log('refresh token', refreshToken);
    //   //console.log('profile', profile);
    //   User.findOne({ googleId: profile.id }).then(existingUser => {
    //     if (existingUser) {
    //       // we already have a record with the given id
    //       done(null, existingUser);
    //     } else {
    //       // we don't have a user record with this id, make a new record
    //       new User({ googleId: profile.id })
    //         .save()
    //         .then(user => done(null, user));
    //     }
    //   });
    // }
    async (acessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // we already have a record with the given id
        return done(null, existingUser);
      }
      // we don't have a user record with this id, make a new record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
