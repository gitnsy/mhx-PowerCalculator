/**
 *
 */
var mhxgcalc;
(function (mhxgcalc) {
    var Weapon = (function () {
        function Weapon(attack, critical) {
            this.atack = attack;
            this.critical = critical;
        }
        return Weapon;
    })();
    mhxgcalc.Weapon = Weapon;
})(mhxgcalc || (mhxgcalc = {}));
//# sourceMappingURL=weapon.js.map