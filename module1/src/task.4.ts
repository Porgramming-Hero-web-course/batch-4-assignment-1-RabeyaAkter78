// Q:4:Ans:


type circle = {
    shape: "circle";
    radius: number;
};
type rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

type shape = circle | rectangle;


const area = (value: shape): number => {
    if (value.shape === "circle") {
        const circleArea = 3.1416 * value.radius * value.radius;
        return circleArea;
    } else {
        const rectangleArea = value.width * value.height;
        return rectangleArea;
    }
};


console.log(`Area Of Circle is ${area({
    shape: "circle",
    radius: 5
})}`
);

console.log(`Area Of Rectangle is ${area({
    shape: "rectangle",
    width: 5,
    height: 5,
})}`
);