export class MetadataAttributeEnum {
    public readonly traitValue: string;
    public readonly probabilityRangeEnd: number;
    public readonly probabilityRangeStart?: number;
    constructor(trait: string, probabilityEnd: number, probabilityStart?: number) {
        this.traitValue = trait;
        this.probabilityRangeEnd = probabilityEnd;
        this.probabilityRangeStart = probabilityStart;
    }
}
