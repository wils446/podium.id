import { User } from "./model";

export default class UserService {
    async getCurrentUser(userId: number) {
        const user = await User.findOne({ where: { id: userId } });
        return user;
    }
}
