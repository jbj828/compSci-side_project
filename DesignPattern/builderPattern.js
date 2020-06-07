// Builder Pattern : 옵션이 많을 때 사용
// 큰 유형은 같지만 세부적인 사항이 다를 때 빌더 패턴이 유용
// 옵션을 바꿔가며 객체를 만들 수 있다

const Legion = (function () {
  function Legion(leader, adjutants, army) {
    this.leader = leader;
    this.adjutants = adjutants || null;
    this.army = army || 0;
  }

  Legion.prototype.attack = function (target) {
    console.log(`${this.leader} attacks ${target.leader}.`);
  };
  return Legion;
})();

const makeLegion = function (leader) {
  let adjutants = null;
  let army = 0;
  return {
    setAdjutant: function (list) {
      adjutants = list;
      return this;
    },
    setArmy: function (number) {
      army = number;
      return this;
    },
    build: function () {
      return new Legion(leader, adjutants, army);
    },
  };
};

const galbaLegion = makeLegion("galba")
  .setAdjutant(["otho", "vindex", "vitellius"])
  .setArmy(8000)
  .build();
const rufusLegion = makeLegion("rufus").setArmy(10000).build();

console.log(galbaLegion);
console.log(rufusLegion);
galbaLegion.attack(rufusLegion);
