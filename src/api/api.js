"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
var axios_1 = require("axios");
var instance = axios_1.default.create({
    baseURL: 'https://api.github.com/',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
});
exports.API = {
    findUsers: function (term) {
        return instance.get("search/users?q=" + term + "&per_page=100").then(function (res) { return res.data; });
    },
    getUser: function (user) {
        return instance.get("users/" + user).then(function (res) { return res.data; });
    },
    getRepos: function (user) {
        return instance.get("users/" + user + "/repos").then(function (res) { return res.data; });
    },
};
