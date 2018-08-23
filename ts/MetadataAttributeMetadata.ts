export class MetadataAttribute {
    public readonly traitType: string;
    public readonly displayType: string;
    public readonly probability: number;
    public readonly minValue?: number;
    public readonly maxValue?: number;
    constructor(trait: string, display: string, prob: number, min = -1, max = -1) {
        this.traitType = trait;
        this.displayType = display;
        this.probability = prob;
        this.minValue = min;
        this.maxValue = max;
    }
}
