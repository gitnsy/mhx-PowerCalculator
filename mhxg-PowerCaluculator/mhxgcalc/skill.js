/**
 *
 */
var mhxgcalc;
(function (mhxgcalc) {
    var Skill = (function () {
        function Skill(target, value) {
            this.attack = value;
            this.target = target;
        }
        return Skill;
    })();
    mhxgcalc.Skill = Skill;
    (function (AdjustTarget) {
        AdjustTarget[AdjustTarget["attack"] = 0] = "attack";
        AdjustTarget[AdjustTarget["critical"] = 1] = "critical";
    })(mhxgcalc.AdjustTarget || (mhxgcalc.AdjustTarget = {}));
    var AdjustTarget = mhxgcalc.AdjustTarget;
})(mhxgcalc || (mhxgcalc = {}));
//# sourceMappingURL=skill.js.map