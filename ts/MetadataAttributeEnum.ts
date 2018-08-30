export class MetadataAttributeEnum {
    public readonly traitValue: string;
    public readonly probabilityRangeEnd: number;
    constructor(trait: string, probabilityEnd: number) {
        this.traitValue = trait;
        this.probabilityRangeEnd = probabilityEnd;
    }
}
