// some exemple

Message.belongsTo(Project, {
    as: 'project',
    foreignKey: 'project_id',
});

Project.hasMany(Message, {
    as: 'messages',
    foreignKey: 'project_id',
});

Style.belongsToMany(Pro, {
    as: 'pros',
    through: 'categorise',
    foreignKey: 'style_id',
    otherKey: 'pro_id',
    updatedAt: false,
});

Pro.belongsToMany(Style, {
    as: 'styles',
    through: 'categorise',
    foreignKey: 'pro_id',
    otherKey: 'style_id',
    updatedAt: false,
});