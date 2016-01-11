/// <reference path="weapon.ts"/>
var mhxgcalc;
(function (mhxgcalc) {
    /**
     * ダメージ計算器
     */
    var Calculator = (function () {
        function Calculator() {
        }
        Calculator.prototype.sum = function (items, numberSelector) {
            return items.length == 0 ? 0 : items.map(function (e) { return numberSelector(e); }).reduce(function (n, c) { return n + c; });
        };
        /**
         * 最終期待値
         * @return
         */
        Calculator.prototype.expected = function (weapon) {
            var skills = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                skills[_i - 1] = arguments[_i];
            }
            return this.power.apply(this, [weapon].concat(skills)) * (1 + (0.25 * this.critical.apply(this, [weapon].concat(skills))) / 100);
        };
        /**
         * 物理
         * @param weapon
         */
        Calculator.prototype.power = function (weapon) {
            var skills = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                skills[_i - 1] = arguments[_i];
            }
            return weapon.atack + this.sum(skills.filter(function (e) { return e.target == mhxgcalc.AdjustTarget.attack; }), function (e) { return e.attack; });
        };
        /**
         * 会心
         * @param weapon
         */
        Calculator.prototype.critical = function (weapon) {
            var skills = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                skills[_i - 1] = arguments[_i];
            }
            return weapon.critical + this.sum(skills.filter(function (e) { return e.target == mhxgcalc.AdjustTarget.critical; }), function (e) { return e.attack; });
        };
        /**
         * スキルがそのスキルセットから導き出される火力に対してどの程度の増加率を上げたか
         */
        Calculator.prototype.increaceRate = function (weapon, checkSkill) {
            var skills = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                skills[_i - 2] = arguments[_i];
            }
            switch (checkSkill.target) {
                case mhxgcalc.AdjustTarget.attack: return this.expected.apply(this, [weapon].concat(skills)) / (this.expected.apply(this, [weapon].concat(skills)) - checkSkill.attack);
                // 会心増加
                // 倍率増加
                default: return 0;
            }
        };
        /**
         * スキルがそのスキルセットから導き出される火力に対してどの程度の実増加値となったか
         */
        Calculator.prototype.increaceValue = function (weapon, checkSkill) {
            var skills = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                skills[_i - 2] = arguments[_i];
            }
            switch (checkSkill.target) {
                case mhxgcalc.AdjustTarget.attack: return checkSkill.attack;
                // 会心増加
                // 倍率増加
                default: return 0;
            }
        };
        return Calculator;
    })();
    mhxgcalc.Calculator = Calculator;
})(mhxgcalc || (mhxgcalc = {}));
//# sourceMappingURL=calculator.js.map