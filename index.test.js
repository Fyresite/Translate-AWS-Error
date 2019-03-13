const translateAwsError = require('./index');

test('tests a User not found exception', () => {
    const error = {
        code: 'UserNotFoundException'
    };

    expect(translateAwsError(error)).toEqual({
        code: 'UserNotFoundException',
        message: 'Incorrect username or password.'
    });
});