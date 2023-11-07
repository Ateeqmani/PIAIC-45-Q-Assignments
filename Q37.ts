function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}`);
    console.log(`Message: ${message}`);
    console.log(`T-shirt summary: This is a ${size} T-shirt with the message '${message}'.`);
}
make_shirt(); 

make_shirt("Medium"); 

make_shirt("Small", "TypeScript is awesome!");
