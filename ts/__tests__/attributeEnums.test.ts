import {MetadataAttributeEnum} from "../MetadataAttributeEnum";
import {PropertiesDeserialiser} from "../PropertiesDeserialiser";

const pathToDataFile = "../../test/data/simple_metadata_attribute_enums.json";

test("it is possible to parse the json into an array of enum objects", async () => {
    const dataRetrieved = await PropertiesDeserialiser.readAttributesDataFromFile(pathToDataFile);
    console.log(dataRetrieved);
    expect(dataRetrieved).toBeInstanceOf(Map);
    expect(dataRetrieved.get("rarity")).toBeInstanceOf(Array);
    const metadataArray = dataRetrieved.get("rarity");
    expect(metadataArray).toBeDefined();
    expect(metadataArray.length).toBeGreaterThan(0);
    expect(metadataArray[0]).toBeInstanceOf(MetadataAttributeEnum);
});
