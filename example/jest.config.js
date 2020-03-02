module.exports = {
    testRunner: 'jest-circus/runner',
    reporters: [
        'default',
        [
            './../index',
            {
                token: '00000000-0000-0000-0000-000000000000',
                endpoint: 'http://dev.epm-rpp.projects.epam.com:8080/api/v1',
                launch: 'jest',
                project: 'JAVASCRIPT-AGENT-JEST-JASMINE',
                description: 'YOUR_DESCRIPTION',
                attributes: [
                    {
                        'key': 'YourKey',
                        'value': 'YourValue'
                    },
                    {
                        'value': 'YourValue'
                    },
                ]
            }
        ]
    ],
};