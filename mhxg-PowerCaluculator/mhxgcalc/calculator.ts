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
        kitaichi(weapon: Weapon, ...skills: Skill[]): number {
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
         * スキルセットから導き出される火力増加率
         */
        zoukaritsu(weapon: Weapon, ...skills: Skill[]): number {
            return ;
        }
    }

}