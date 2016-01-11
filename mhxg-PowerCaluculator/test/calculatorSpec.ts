/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../mhxgcalc/calculator.ts" />
 
describe('mhxgのスキル期待値計算', () => {

    beforeEach(() => {

    });
    describe("倍率200,会心0武器", () => {
        describe('攻撃小', () => {
            var calc = new mhxgcalc.Calculator();

            var attack1 = new mhxgcalc.Skill(mhxgcalc.AdjustTarget.attack, 10);
            var weapon = new mhxgcalc.Weapon(200,0)

            it('物理', () => {
                expect(calc.power(weapon,attack1)).toBe(210);
            });
            it('会心', () => {
                expect(calc.critical(weapon, attack1)).toBe(0);
            });
            it('期待値', () => {
                expect(calc.expected(weapon, attack1)).toBe(210);
            });
            it('増加率', () => {
                expect(calc.increaceRate(weapon, attack1, attack1)).toBe(1.05);
            });
            it('増加量', () => {
                expect(calc.increaceValue(weapon, attack1, attack1)).toBe(10);
            });
        });

        describe('見切り1', () => {
            var calc = new mhxgcalc.Calculator();

            var critical1 = new mhxgcalc.Skill(mhxgcalc.AdjustTarget.critical, 10);
            var weapon = new mhxgcalc.Weapon(200, 0)

            it('物理', () => {
                expect(calc.power(weapon, critical1)).toBe(200);
            });
            it('会心', () => {
                expect(calc.critical(weapon, critical1)).toBe(10);
            });
            it('期待値', () => {
                expect(calc.expected(weapon, critical1)).toBe(205);
            });
            it('増加率', () => {
                fail("未実装");
                expect(calc.increaceRate(weapon, critical1, critical1)).toBe(1.025);
            });
            it('増加量', () => {
                fail("未実装");
                expect(calc.increaceValue(weapon, critical1, critical1)).toBe(5);
            });
        });

        describe('挑戦者2', () => {

            var calc = new mhxgcalc.Calculator();

            var challenger2_attack = new mhxgcalc.Skill(mhxgcalc.AdjustTarget.attack, 25);
            var challenger2_critical = new mhxgcalc.Skill(mhxgcalc.AdjustTarget.critical, 20);
            var challenger2 = [challenger2_attack, challenger2_critical]

            var weapon = new mhxgcalc.Weapon(200, 0)

            it('物理', () => {
                expect(calc.power(weapon, ...challenger2)).toBe(225);
            });
            it('会心', () => {
                expect(calc.critical(weapon, ...challenger2)).toBe(20);
            });
            it('期待値', () => {
                expect(calc.expected(weapon, ...challenger2)).toBe(236.25);
            });
            it('増加率', () => {
                fail("未実装");
                expect(calc.increaceRate(weapon, ...challenger2)).toBe(210);
            });
            it('増加量', () => {
                fail("未実装");
                expect(calc.increaceValue(weapon, attack1, attack1)).toBe(10);
            });
        });
    });
});