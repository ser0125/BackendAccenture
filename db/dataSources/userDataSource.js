'use strict';

const models = require('../../models/');
const UserDatabaseModel = models.User;

module.exports = {

        findAllUsers: async function () {
                try {
                    this.users = await UserDatabaseModel.findAll()
                    return this.users;
                } catch (error) {
                    console.log(error);
                }
            },

            saveTicket: async function (user) {
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
                    console.log(error);
                }
            }
        }