const generateUniqueId = require("../../src/utils/generateUniqueld");

describe("Generete Unique ID", () => {
  it("should generate an unique ID", () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
    expect(id).toBeInstanceOf(String);
  });
});
