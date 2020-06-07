const Legion = (function () {
  function Legion(leader, adjutants, army) {
    this.leader = leader;
    this.adjutants = adjutants || null;
    this.army = army || 0;
  }
  Legion.prototype.attack = function (target) {
    console.log(`${this.leader} attacks ${target.leader}`);
  };

  return Legion;
})();

const makeLegion = function (leader) {
  let army = 0;
  let adjutants = null;
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
  .setAdjutant(["otho", "balt", "estonia"])
  .setArmy(8000)
  .build();

const rufusLegion = makeLegion("rufus").setArmy(10000).build();
