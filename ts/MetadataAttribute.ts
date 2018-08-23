export class MetadataAttribute {
    public readonly trait_type: string;
    public readonly value: any;
    public readonly display_type: string;
    public readonly max_value: any;
    constructor(public traitType: string, public attributeValue: any, public displayType: string,
                public maxValue: any) {
        this.trait_type = traitType;
        this.value = attributeValue;
        this.display_type = displayType;
        this.max_value = maxValue;
    }
}
