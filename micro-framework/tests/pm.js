const expect = require('chai').expect;
require('colors');

const msgSuccess = 'La prueba pasó';
const msgFail = 'La prueba falló';

const show = (msg, type = undefined) => {
    if ( type === undefined) {
        console.log(`${msg}\n`.green);
    } else {
        console.log(`${msg}\n`.red);
    }
    
}

const pm = {
    test: (msg, callback) => {
        console.log(msg);
        callback();
    },
    expect: expected => {
        return {
            to: {
                be: {
                    a: (result) => {
                        try {
                            expect(expected).to.be.a(result);
                            show(msgSuccess);
                        } catch (error) {
                            show(msgFail, 'error');
                        }
                        
                    }
                },
                have: {
                    lengthOf: (number) => {
                        try {
                            expect(expected).to.have.lengthOf(number);
                            show(msgSuccess);
                        } catch (error) {
                            show(msgFail, 'error');
                        }
                       
                    }
                }
            }
        }
    }
}

// pm.test('Hola mundo', () => {
//     console.log('Testing 1');
// });

pm.test('Prueba 1', () => {
    pm.expect('carlos').to.be.a('string');
});

pm.test('Prueba 2', () => {
    pm.expect('carlos').to.have.lengthOf(5);
});






