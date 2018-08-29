import {readFile} from "fs";
import {promisify} from "util";
import {MetadataAttributeEnum} from "./MetadataAttributeEnum";

const readFilePromise = promisify(readFile);

export class PropertiesDeserialiser {

    public static readAttributesDataFromFile(pathToFile: string): Promise<MetadataAttributeEnum[]> {
        const metadata: MetadataAttributeEnum[] = [];
        return readFilePromise(pathToFile)
            .then((data) => {
                return JSON.parse(data.toString());
            })
            .then((enums) => {
                enums.forEach((enumData: any) => {
                    enumData.trait_values.forEach((traitValue: any) => {
                        const temp = Object.create(MetadataAttributeEnum.prototype);
                        Object.assign(temp, traitValue);
                        metadata.push(temp);
                    });
                });
                return metadata;
            })
            .catch((error) => {
                console.error(`Unable to read the MetadataAttributeMetadata from the file ${pathToFile}: ${error}`);
                return metadata;
            });
    }
}