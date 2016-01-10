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
                expect(calc.kitaichi(weapon, attack1)).toBe(210);
            });
            it('増加率', () => {
                fail("未実装");
                //expect(calc.zoukaritsu(weapon, attack1)).toBe(210);
            });
        });

        describe('闘魂', () => {

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
                expect(calc.kitaichi(weapon, ...challenger2)).toBe(236.25);
            });
            it('増加率', () => {
                fail("未実装");
                //expect(calc.zoukaritsu(weapon, ...challenger2)).toBe(210);
            });
        });
    });
});