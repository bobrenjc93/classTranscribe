const uuid = require('uuid/v4');
'use strict';
// var models = require('../models');
module.exports = (sequelize, DataTypes) => {
    var Role = sequelize.define('Role', {
        id: { type: DataTypes.UUID, primaryKey: true },
        // Administrator - [View, Edit, Delete]
        // Instructor - [View, Edit]
        // Student - [View]
        roleName: DataTypes.TEXT,
    });

    return Role;
};
