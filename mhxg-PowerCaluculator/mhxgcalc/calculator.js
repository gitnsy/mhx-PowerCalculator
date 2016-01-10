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
        Calculator.prototype.kitaichi = function (weapon) {
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
         * スキルセットから導き出される火力増加率
         */
        Calculator.prototype.zoukaritsu = function (weapon) {
            var skills = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                skills[_i - 1] = arguments[_i];
            }
            return;
        };
        return Calculator;
    })();
    mhxgcalc.Calculator = Calculator;
})(mhxgcalc || (mhxgcalc = {}));
//# sourceMappingURL=calculator.js.map