export class MetadataAttributeEnum {
    public readonly traitValue: string;
    public readonly probability: number;
    constructor(trait: string, prob: number) {
        this.traitValue = trait;
        this.probability = prob;
    }
}
