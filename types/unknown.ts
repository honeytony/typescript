let input: unknown;

input = 3;
input = ['123', '12'];

function run(i: unknown) {
    if (typeof i == 'number') {
        i++;
    } else {
        i;
    }
}

run(input);

async function getData() {
    try {
        await fetch('vk.com');
    } catch (error) {
        if (typeof error == 'object') {
        }
    }
}
