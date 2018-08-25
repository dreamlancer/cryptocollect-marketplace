import {readFile} from "fs";
import {promisify} from "util";
import {MetadataAttributeMetadata} from "./MetadataAttributeMetadata";

const readFilePromise = promisify(readFile);

export class MetadataGenerator {
    public readMetadataAttributesMetadataFromFile(pathToFile: string): Promise<MetadataAttributeMetadata[]> {
        const metadata: MetadataAttributeMetadata[] = [];
        return readFilePromise(pathToFile)
            .then((data) => {
                return data.toJSON()
                    .data.map((element) => MetadataAttributeMetadata.apply(element));
            })
            .catch((error) => {
                console.error(`Unable to read the MetadataAttributeMetadata from the file ${pathToFile}: ${error}`);
                return metadata;
            });
    }
}
