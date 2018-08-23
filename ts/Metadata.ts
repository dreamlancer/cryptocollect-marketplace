import {MetadataAttribute} from "./MetadataAttribute";

export class Metadata {
    public readonly description: string;
    public readonly externalUrl: string;
    public readonly image: string;
    public readonly name: string;
    public readonly attributes: [MetadataAttribute];

    constructor(public itemDescription: string, public itemExternalUrl: string, public itemImageUrl: string,
                public itemName: string, public itemAttributes: [MetadataAttribute]) {
        this.description = itemDescription;
        this.externalUrl = itemExternalUrl;
        this.image = itemImageUrl;
        this.name = itemName;
        this.attributes = itemAttributes;
    }
}
