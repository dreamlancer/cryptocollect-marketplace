import {readFile} from "fs";
import {promisify} from "util";
import {MetadataAttributeEnum} from "./MetadataAttributeEnum";

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
                        metadata.push(new MetadataAttributeEnum(traitValue.trait_value, traitValue.probability.end, traitValue.probability.start));
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
}
