// @flow
function cube(x: number) {
    return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

let graph = {
    options: {
        color: 'white',
        thickness: '2px'
    },
    draw: function () {
        console.log('From graph draw function');
    }
};

// @flow
export { cube, foo, graph };