//For Loop

const forLoop = {
    name: "Mohanraj",
    age: 31,
    city: "Chennai"
};

const keys = Object.keys(forLoop);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = forLoop[key];
    console.log(key + ": " + value);
}

// For in

const forIn = {
    name: "Yogi",
    age: 31,
    city: "Chennai"
};

for (let key in forIn) {
    console.log(key + ": " + forIn[key]);
}

// For of

const forOF = {
    name: "Mohanraj",
    age: 31,
    city: "Chennai"
};

const a = Object.entries(forOF);

for (let [key, value] of a) {
    console.log(key + ": " + value);
}

// For Each

const foreach = {
    name: "Mohanraj",
    age: 31,
    city: "Chennai"
};

Object.keys(foreach).forEach(key => {
    console.log(key + ": " + foreach[key]);
});