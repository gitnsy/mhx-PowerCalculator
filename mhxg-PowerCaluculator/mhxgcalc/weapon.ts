/**
 * 
 */
module mhxgcalc {

    export class Weapon {
    /**武器倍率(非表示火力。係数除算済み) */
        atack: number
        /**会心率 */
        critical: number

        constructor(attack:number,critical:number) {
            this.atack = attack; this.critical = critical;
        }
    }
}