const Intern = require("../lib/Intern");

test("Can set school via constructor argument", () => {
  const testValue = 100;
  const e = new Intern("Foo", testValue);
  expect(e.id).toBe(testValue);
});
test("Can get school via getSchool()", () => {
  const testValue = 100;
  const e = new Intern("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});
test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Aegon", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
