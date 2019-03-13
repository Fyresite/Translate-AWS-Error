const translateAwsError = require('./index');

test('Test a code that doesn\'t exist', () => {
    const error = {
        code: 'ThisCodeWillNeverExistPorkrinds',
        message: 'Hey, great job. This is the correct message'
    };

    expect(translateAwsError(error)).toEqual({
        code: 'ThisCodeWillNeverExistPorkrinds',
        message: 'Hey, great job. This is the correct message'
    });
});

test('tests a User not found exception', () => {
    const error = {
        code: 'UserNotFoundException'
    };

    expect(translateAwsError(error)).toEqual({
        code: 'UserNotFoundException',
        message: 'Incorrect username or password.'
    });
});