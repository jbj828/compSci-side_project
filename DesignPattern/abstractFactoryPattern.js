// 추상 팩토리 패턴 : 여러 팩토리를 동시에 사용하고 싶을 때
const abstractCharacterFactory = (function () {
  const jobs = {};
  return {
    addJob: function (job, Character) {
      if (Character.prototype.attack) {
        jobs[job] = Character;
      }
    },
    create: function (job, options) {
      const Character = jobs[job];
      return Character ? new Character(options) : null;
    },
  };
})();

const Emperor = (function () {
  function Emperor(options) {
    this.name = options.name;
  }
  Emperor.prototype.attack = function (target) {
    console.log(`${this.name} attacks ${target}`);
  };
  Emperor.prototype.proclaim = function () {
    console.log(`${this.name} proclaims himself as King`);
  };
  return Emperor;
})();

const Governer = (function () {
  function Governer(options) {
    this.name = options.name;
  }
  Governer.prototype.attack = function (target) {
    console.log(`${this.name} attacks ${target.name}`);
  };
  Governer.prototype.betray = function () {
    console.log(`${this.name} betrays King`);
  };
  return Governer;
})();

abstractCharacterFactory.addJob("emperor", Emperor);
abstractCharacterFactory.addJob("governer", Governer);

const nero = abstractCharacterFactory.create("emperor", { name: "Nero" });
const vindex = abstractCharacterFactory.create("governer", { name: "Vindex" });
const galba = abstractCharacterFactory.create("governer", { name: "Galba" });
const otho = abstractCharacterFactory.create("governer", { name: "Otho" });
const vitellius = abstractCharacterFactory.create("governer", {
  name: "Vitellius",
});
const rufus = abstractCharacterFactory.create("governer", { name: "Rufus" });

vindex.betray();
vindex.attack(galba);
