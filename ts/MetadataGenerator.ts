import {readFile} from "fs";
import {promisify} from "util";
import {MetadataAttributeMetadata} from "./MetadataAttributeMetadata";

const readFilePromise = promisify(readFile);

export class MetadataGenerator {
    public readMetadataAttributesMetadataFromFile(pathToFile: string): Promise<MetadataAttributeMetadata[]> {
        const metadata: MetadataAttributeMetadata[] = [];
        return readFilePromise(pathToFile)
            .then((data) => {
                return JSON.parse(data.toString()).map((element) => {
                    return Object.assign(Object.create(MetadataAttributeMetadata.prototype), element);
                });
            })
            .catch((error) => {
                console.error(`Unable to read the MetadataAttributeMetadata from the file ${pathToFile}: ${error}`);
                return metadata;
            });
    }
}
