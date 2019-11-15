if(process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.exception = () => {};
    console.assert = () => {};
    console.trace = () => {};
    console.info = () => {};
}else{
    module.exports = require('./configureStore.dev');
}