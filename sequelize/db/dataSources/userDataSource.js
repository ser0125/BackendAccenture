'use strict';

const models = require('../../models/');
const UserDatabaseModel = models.User;

module.exports = {

        findAllUsers: async function () {
                try {
                    this.users = await UserDatabaseModel.findAll()
                    return this.users;
                } catch (error) {
                    return error;
                }
            },
            findUserByIdentification: async function(identification) {
                try {
                    this.user = await UserDatabaseModel.findAll({
                        where: {
                            identification: identification
                        }
                    });
                    return this.user;
                } catch (error) {
                    return(error);
                }
            },

            saveUser: async function (user) {
                try {
                    await UserDatabaseModel.create(user);
                    this.dataBaseResult = await UserDatabaseModel.findOrCreate({
                        where: {
                            identification: user.identification
                        }
                    })
                    this.user = this.dataBaseResult[0].get({
                        plain: true
                    });
                    return this.user;
                } catch (error) {
                    return error;
                }
            }
        }