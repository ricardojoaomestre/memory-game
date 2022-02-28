export function getNRandomItems(originalArray: Array<any>, count: number):Array<any> {
    const sample:Array<any> = [...originalArray];
    const result:Array<any> = [];

    let size:number = sample.length;

    if (size <= count) {
        return sample;
    }
    if (count <= 0) return [];

    for (var i:number = 0; i < count; i++, size-- ) {
        const position: number = Math.floor(Math.random() * (size + 1) );
        const item:any = sample.splice(position, 1)[0];
        result.push(item);
    }
    
    return result;
}