import {MetadataAttributeEnum} from "./MetadataAttributeEnum";

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
}
