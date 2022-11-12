type paymentAction = 'refund' | 'checkout';
const checkNever = (message: string): never => {
    throw new Error(message);
};

function proccessAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            // ...
            break;
        case 'checkout':
            //..
            break;
        default: // тчтобы словить ошибку если забыли указать case для нового параметра union
            const _: never = action;
            break;
    }
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    checkNever('non type');
}
