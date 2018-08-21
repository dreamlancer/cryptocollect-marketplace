export class Metadata {
    readonly description:   String;
    readonly externalUrl:   String;
    readonly image:         String;
    readonly name:          String;
    readonly attributes:    [Attribute];

    constructor(public itemDescription: String, public itemExternalUrl: String, public itemImageUrl: String,
                public itemName: String, public itemAttributes: [Attribute]) {
        this.description = itemDescription;
        this.externalUrl = itemExternalUrl;
        this.image = itemImageUrl;
        this.name = itemName;
        this.attributes = itemAttributes;
    }

}

class Attribute {
    readonly trait_type:    String;
    readonly value:         any;
    readonly display_type:  String;
    readonly max_value:     any;

    constructor(public traitType: String, public attributeValue: any, public displayType: String, public maxValue: any) {
        this.trait_type = traitType;
        this.value = attributeValue;
        this.display_type = displayType;
        this.max_value = maxValue;
    }
}