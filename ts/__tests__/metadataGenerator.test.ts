import {MetadataGenerator} from "../MetadataGenerator";
import {PropertiesDeserialiser} from "../PropertiesDeserialiser";

const pathToEnumDataFile = "../../test/data/simple_metadata_attribute_enums.json";
const pathToAttributeDataFile = "../../test/data/simple_metadata_attributes_metadata.json";

test("it is possible to get a random trait from an enum", async () => {
    const dataRetrieved = await PropertiesDeserialiser.readAttributesDataFromFile(pathToEnumDataFile);
    const traitValue = new MetadataGenerator().selectTraitValue("rarity", dataRetrieved);
    expect(traitValue).toBeDefined();
});

test("distribution is roughly as expected", async () => {
    const dataRetrieved = await PropertiesDeserialiser.readAttributesDataFromFile(pathToEnumDataFile);
    const numberOfIterations = 10000;
    const traitValueMap: Map<string, number> = new Map<string, number>();
    traitValueMap.set("common", 0);
    traitValueMap.set("epic", 0);
    traitValueMap.set("legendary", 0);
    traitValueMap.set("rare", 0);
    let selectionNumber = 0;
    while (selectionNumber < numberOfIterations) {
        const traitValue = new MetadataGenerator().selectTraitValue("rarity", dataRetrieved);
        const value = traitValueMap.get(traitValue);
        if (value !== undefined) {
            traitValueMap.set(traitValue, value + 1);
        }
        selectionNumber++;
    }
    console.log(traitValueMap);
    expect(traitValueMap.get("common")).toBeGreaterThan(traitValueMap.get("rare") || 0);
    expect(traitValueMap.get("rare")).toBeGreaterThan(traitValueMap.get("epic") || 0);
    expect(traitValueMap.get("epic")).toBeGreaterThan(traitValueMap.get("legendary") || 0);
});

/**
 * Calculating attribute values based on the details read from a file.
 * Possible will be moved to its own suite of tests as it grows.
 */

test("can generate a simple attribute value based on a range", async () => {
    const dataRetrieved = await PropertiesDeserialiser.readMetadataAttributesMetadataFromFile(pathToAttributeDataFile);
    const metadataShape = dataRetrieved[0];
    const metadata = new MetadataGenerator().generateMetadataAttribute(metadataShape);
    expect(metadata).toBeDefined();
    expect(metadata.value).toBeGreaterThanOrEqual(metadataShape.minValue || 99999);
    expect(metadata.value).toBeLessThanOrEqual(metadataShape.maxValue || -1);
});
