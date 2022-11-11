const Manager = require("../lib/Manager");

test("Can set officenumber via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", testValue);
  expect(e.id).toBe(testValue);
});
test("Can get offficenumber via getOfficeNumber()", () => {
  const testValue = 100;
  const e = new Manager("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});
test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Aegon", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
