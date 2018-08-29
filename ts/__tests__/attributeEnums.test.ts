import {MetadataAttributeEnum} from "../MetadataAttributeEnum";
import {PropertiesDeserialiser} from "../PropertiesDeserialiser";

const pathToDataFile = "../../test/data/simple_metadata_attribute_enums.json";

test("it is possible to parse the json into an array of enum objects", async () => {
    const dataRetrieved = await PropertiesDeserialiser.readAttributesDataFromFile(pathToDataFile);
    expect(dataRetrieved).toBeInstanceOf(Array);
    expect(dataRetrieved[0]).toBeInstanceOf(MetadataAttributeEnum);
});
