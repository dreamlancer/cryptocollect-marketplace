export class MetadataAttribute {
    public readonly trait_type: string;
    public readonly value: any;
    public readonly display_type: string;
    public readonly max_value?: any;
    constructor(traitType: string, attributeValue: any, displayType: string, maxValue?: any) {
        this.trait_type = traitType;
        this.value = attributeValue;
        this.display_type = displayType;
        this.max_value = maxValue;
    }
}
