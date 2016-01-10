/**
 * 
 */
module mhxgcalc {

    export class Skill {
        /**武器倍率(非表示火力。係数除算済み) */
        attack: number
        /**武器倍率(非表示火力。係数除算済み) */
        target: AdjustTarget

        constructor(target: AdjustTarget, value: number) {
            this.attack = value; this.target = target;
        }
    }

    export enum AdjustTarget {
        attack, critical
    }
}
