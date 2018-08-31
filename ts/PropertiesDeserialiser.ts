import {readFile} from "fs";
import {promisify} from "util";
import {MetadataAttributeEnum} from "./MetadataAttributeEnum";
import {MetadataAttributeMetadata} from "./MetadataAttributeMetadata";

const readFilePromise = promisify(readFile);

export class PropertiesDeserialiser {

    public static readAttributesDataFromFile(pathToFile: string): Promise<Map<string, MetadataAttributeEnum[]>> {
        return readFilePromise(pathToFile)
            .then((data) => {
                return JSON.parse(data.toString());
            })
            .then((enums) => {
                const enumMap: Map<string, MetadataAttributeEnum[]> = new Map<string, MetadataAttributeEnum[]>();
                enums.forEach((enumData: any) => {
                    const metadata: MetadataAttributeEnum[] = [];
                    enumData.trait_values.forEach((traitValue: any) => {
                        metadata.push(new MetadataAttributeEnum(traitValue.trait_value, traitValue.probability_range_end));
                    });
                    enumMap.set(enumData.trait_name, metadata);
                });
                return enumMap;
            })
            .catch((error) => {
                console.error(`Unable to read the MetadataAttributeMetadata from the file ${pathToFile}: ${error}`);
                throw error;
            });
    }

    public static readMetadataAttributesMetadataFromFile(pathToFile: string): Promise<MetadataAttributeMetadata[]> {
        const metadata: MetadataAttributeMetadata[] = [];
        return readFilePromise(pathToFile)
            .then((data) => {
                return JSON.parse(data.toString()).map((element: any) => {
                    return Object.assign(Object.create(MetadataAttributeMetadata.prototype), element);
                });
            })
            .catch((error) => {
                console.error(`Unable to read the MetadataAttributeMetadata from the file ${pathToFile}: ${error}`);
                return metadata;
            });
    }
}
