module.exports = function (requireDirectory) {
    requireDirectory(module, {
        exclude: /\/(mock_routes|utils?)(\/|$)/,
        recurse: false,
        visit: (file) => file()
    });
};
