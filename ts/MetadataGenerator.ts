import {MetadataAttribute} from "./MetadataAttribute";
import {MetadataAttributeEnum} from "./MetadataAttributeEnum";
import {MetadataAttributeMetadata} from "./MetadataAttributeMetadata";

export class MetadataGenerator {
    public selectTraitValue(traitType: string, enumMap: Map<string, MetadataAttributeEnum[]>): string {
        const enums = enumMap.get(traitType);
        if (enums) {
            const randomNumber = Math.random();
            let index;
            for (index = 0; index < enums.length; index++) {
                const metadataAttribute = enums[index];
                if (randomNumber < metadataAttribute.probabilityRangeEnd) {
                    break;
                }
            }
            return enums[index].traitValue;
        }
        throw new Error("Invalid Enum");
    }

    public generateMetadataAttribute(traitAttributeMetadata: MetadataAttributeMetadata): MetadataAttribute | undefined {
        if (this.isTraitExpressed(traitAttributeMetadata)) {
            return this.generateMetadataAttributeWithBoundedValue(traitAttributeMetadata);
        }
        return undefined;
    }

    private generateMetadataAttributeWithBoundedValue(traitAttributeMetadata: MetadataAttributeMetadata): MetadataAttribute {
        const value = this.selectValueInRange(traitAttributeMetadata.minValue || 0, traitAttributeMetadata.maxValue || 1);
        return new MetadataAttribute(traitAttributeMetadata.traitType, value, traitAttributeMetadata.displayType, traitAttributeMetadata.maxValue);
    }

    private selectValueInRange(min: number, max: number): number {
        if (min > max) {
            return 0;
        } else if (min === max) {
            return min;
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private isTraitExpressed(traitAttributeMetadata: MetadataAttributeMetadata): boolean {
        return Math.random() <= traitAttributeMetadata.probability;
    }
}
