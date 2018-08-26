import {MetadataAttributeMetadata} from "../MetadataAttributeMetadata";
import {MetadataGenerator} from "../MetadataGenerator";

const pathToDataFile = "../../test/data/simple_metadata_attributes_metadata.json";

test("it is possible to parse the json into an array of typed objects", async () => {
    const metadataGenerator = new MetadataGenerator();
    const dataRetrieved = await metadataGenerator.readMetadataAttributesMetadataFromFile(pathToDataFile);
    expect(dataRetrieved).toBeInstanceOf(Array);
    expect(dataRetrieved[0]).toBeInstanceOf(MetadataAttributeMetadata);
});
