import passport from "passport";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "vincentisgay",
};

passport.use(
    new Strategy(options, function (jwtPayload, done) {
        done(null, jwtPayload);
    })
);

export default passport;
