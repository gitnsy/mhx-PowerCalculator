/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../mhxgcalc/calculator.ts" />
describe('mhxgのスキル期待値計算', function () {
    beforeEach(function () {
    });
    describe("倍率200,会心0武器", function () {
        describe('攻撃小', function () {
            var calc = new mhxgcalc.Calculator();
            var attack1 = new mhxgcalc.Skill(mhxgcalc.AdjustTarget.attack, 10);
            var weapon = new mhxgcalc.Weapon(200, 0);
            it('物理', function () {
                expect(calc.power(weapon, attack1)).toBe(210);
            });
            it('会心', function () {
                expect(calc.power(weapon)).toBe(0);
            });
            it('期待値', function () {
                expect(calc.power(weapon)).toBe(210);
            });
            it('増加率', function () {
                expect(calc.power(weapon)).toBe(210);
            });
        });
        describe('闘魂', function () {
            it('挑戦者2', function () {
                return fail("未実装");
            });
        });
    });
});
//# sourceMappingURL=calculatorSpec.js.map