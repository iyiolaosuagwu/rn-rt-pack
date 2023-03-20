export const logger = (message?: any, ...optionalParams: any[]) => {
    const DEBUG = process.env.NODE_ENV === 'development';

    if (DEBUG) {
        return console.log(message, ...optionalParams);
    }

    return () => {};
};
