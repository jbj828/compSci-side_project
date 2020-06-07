// 추상 팩토리나 빌더 패턴 처럼 객체를 생성하는 패턴이 아니다.
// 기존에 있던 구조를 새 구조로 유연하게 전환하거나 새 구조에서 기존의 구조로 전환하는 데 사용하는 패턴이다.

// 현재 시스템은 현 황제를 자동적으로 지지하는 시스템이고,
// 신규 시스템은 새 황제를 추대할 수 있게 하는 시스템이다.

// let currentSystem = new SenateSystem(currentAdapter);
// let newSystem = new SenateSystem(rufusAdapter);

const SenateSystem = (function () {
  function SenateSystem(adapter) {
    this.adapter = adapter;
  }
  SenateSystem.prototype.vote = function () {
    this.adapter.vote();
  };
  return SenateSystem;
})();

const currentAdapter = {
  vote: function () {
    console.log("Backing up current senater");
  },
};

const rufusAdapter = {
  vote: function () {
    console.log("Backing up Rufus as a Senater!");
  },
};

let senateSystem = new SenateSystem(currentAdapter);
senateSystem.vote();
senateSystem = new SenateSystem(rufusAdapter);
senateSystem.vote();

var galbaAdapter = {
  vote: function () {
    console.log("Backing up Galba as a Senater");
  },
};

senateSystem = new SenateSystem(galbaAdapter);
senateSystem.vote();
