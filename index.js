const translateAwsError = error => {
    const translations = {
        'UserNotFoundException': 'Incorrect username or password.'
    };

    if (typeof translations[error.code] !== 'undefined') {
        error.message = translations[error.code];
    }

    return error;
}

export default translateAwsError;