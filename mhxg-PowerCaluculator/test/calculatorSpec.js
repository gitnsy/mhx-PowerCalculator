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
                expect(calc.critical(weapon, attack1)).toBe(0);
            });
            it('期待値', function () {
                expect(calc.expected(weapon, attack1)).toBe(210);
            });
            it('増加率', function () {
                fail("未実装");
                expect(calc.increaceRate(weapon, attack1, attack1)).toBe(1.05);
            });
            it('増加量', function () {
                fail("未実装");
                expect(calc.increaceValue(weapon, attack1, attack1)).toBe(10);
            });
        });
        describe('挑戦者2', function () {
            var calc = new mhxgcalc.Calculator();
            var challenger2_attack = new mhxgcalc.Skill(mhxgcalc.AdjustTarget.attack, 25);
            var challenger2_critical = new mhxgcalc.Skill(mhxgcalc.AdjustTarget.critical, 20);
            var challenger2 = [challenger2_attack, challenger2_critical];
            var weapon = new mhxgcalc.Weapon(200, 0);
            it('物理', function () {
                expect(calc.power.apply(calc, [weapon].concat(challenger2))).toBe(225);
            });
            it('会心', function () {
                expect(calc.critical.apply(calc, [weapon].concat(challenger2))).toBe(20);
            });
            it('期待値', function () {
                expect(calc.expected.apply(calc, [weapon].concat(challenger2))).toBe(236.25);
            });
            it('増加率', function () {
                fail("未実装");
                //expect(calc.zoukaritsu(weapon, ...challenger2)).toBe(210);
            });
        });
    });
});
//# sourceMappingURL=calculatorSpec.js.map