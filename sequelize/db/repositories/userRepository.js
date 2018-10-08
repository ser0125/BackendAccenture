'use strict';

class UserRepository {
    constructor(userDataSource) {
        this._userDataSource = userDataSource;
    }

    async findAllUsers() {
        const users = await this._userDataSource.findAllUsers();
        return users;
    }

    async saveUser(user) {
        const userSaved = await this._userDataSource.saveUser(user);
        return userSaved;
    }
    async findUserByIdentification(identification) {
        const user = await this._userDataSource.findUserByIdentification(identification);
        return user;
    }
}

module.exports = UserRepository;