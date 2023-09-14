console.time('d');

export function sleep(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t);
    });
}

console.timeEnd('d');
