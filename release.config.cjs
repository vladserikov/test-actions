/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: ['main', 'develop'],
    repositoryUrl: 'https://github.com/vladserikov/test-actions.git',
    plugins: [
        [
            '@semantic-release/git',
            {
                assets: ['index.cjs', 'package.json'],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
};
