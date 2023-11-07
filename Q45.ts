function createCarInfo(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, extras: { [key: string]: any } } {
    const carInfo:any = {
        manufacturer: manufacturer,
        model: model,
        extras: {}
    };

    for (const extra of extras) {
        for (const key in extra) {
            if (extra.hasOwnProperty(key)) {
                carInfo.extras[key] = extra[key];
            }
        }
    }

    return carInfo;
}

const car = createCarInfo("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });

console.log(car);
