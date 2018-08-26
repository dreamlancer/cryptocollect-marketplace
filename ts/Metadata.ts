import {MetadataAttribute} from "./MetadataAttribute";

export class Metadata {
    public readonly id: number;
    public readonly description: string;
    public readonly external_url: string;
    public readonly image: string;
    public readonly name: string;
    public readonly attributes: [MetadataAttribute];
    public readonly background_color?: string;

    constructor(idValue: number, itemDescription: string, itemExternalUrl: string, itemImageUrl: string,
                itemName: string, itemAttributes: [MetadataAttribute], backgroundColor?: string) {
        this.id = idValue;
        this.description = itemDescription;
        this.external_url = itemExternalUrl;
        this.image = itemImageUrl;
        this.name = itemName;
        this.attributes = itemAttributes;
        this.background_color = backgroundColor;
    }
}
