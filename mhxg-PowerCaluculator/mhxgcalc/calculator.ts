/// <reference path="weapon.ts"/>

module mhxgcalc {

    /**
     * ダメージ計算器 
     */
    export class Calculator {
        sum(items: any[], numberSelector: (e: any) => number): number {
            return items.length == 0 ? 0 : items.map(e => numberSelector(e)).reduce((n, c) => n + c);
        }
        /**
         * 最終期待値
         * @return
         */
        expected(weapon: Weapon, ...skills: Skill[]): number {
            return this.power(weapon, ...skills) * (1 + (0.25 * this.critical(weapon, ...skills))/100)
        }

        /**
         * 物理
         * @param weapon
         */
        power(weapon: Weapon, ...skills: Skill[]): number {
            return weapon.atack + this.sum(skills.filter(e => e.target == AdjustTarget.attack), e => e.attack);
        }

        /**
         * 会心
         * @param weapon
         */
        critical(weapon: Weapon, ...skills: Skill[]): number {
            return weapon.critical + this.sum(skills.filter(e => e.target == AdjustTarget.critical), e => e.attack);
        }

        /**
         * スキルがそのスキルセットから導き出される火力に対してどの程度の増加率を上げたか
         */
        increaceRate(weapon: Weapon, checkSkill, ...skills: Skill[]): number {
            // 攻撃増加
            return this.expected(weapon, ...skills);

            // 会心増加
            // 倍率増加
        }

        /**
         * スキルがそのスキルセットから導き出される火力に対してどの程度の実増加値となったか
         */
        increaceValue(weapon: Weapon, checkSkill, ...skills: Skill[]): number {
            // 攻撃増加
            return this.expected(weapon, ...skills);

            // 会心増加
            // 倍率増加
        }
    }

}