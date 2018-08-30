import {MetadataAttributeEnum} from "../MetadataAttributeEnum";
import {MetadataAttributeMetadata} from "../MetadataAttributeMetadata";
import {PropertiesDeserialiser} from "../PropertiesDeserialiser";

const pathToEnumDataFile = "../../test/data/simple_metadata_attribute_enums.json";
const pathToAttributeDataFile = "../../test/data/simple_metadata_attributes_metadata.json";

test("it is possible to parse the json into an array of enum objects", async () => {
    const dataRetrieved = await PropertiesDeserialiser.readAttributesDataFromFile(pathToEnumDataFile);
    console.log(dataRetrieved);
    expect(dataRetrieved).toBeInstanceOf(Map);
    const metadataArray = dataRetrieved.get("rarity");
    expect(metadataArray).toBeDefined();
    expect(metadataArray).toBeInstanceOf(Array);
    expect(metadataArray.length).toBeGreaterThan(0);
    expect(metadataArray[0]).toBeInstanceOf(MetadataAttributeEnum);
});

test("it is possible to parse the json into an array of typed objects", async () => {
    const propertiesDeserialiser = new PropertiesDeserialiser();
    const dataRetrieved = await propertiesDeserialiser.readMetadataAttributesMetadataFromFile(pathToAttributeDataFile);
    expect(dataRetrieved).toBeInstanceOf(Array);
    expect(dataRetrieved[0]).toBeInstanceOf(MetadataAttributeMetadata);
});