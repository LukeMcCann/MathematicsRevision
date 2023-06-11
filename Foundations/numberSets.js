const numberSets = (() => {
  const sets = {
    rational: {
      description: "Rational numbers",
      properties: "Numbers that can be expressed as a fraction of two integers.",
      limitations: "Rational numbers include integers, fractions, and terminating or repeating decimals.",
      includes: [],
      canHaveNegatives: true,
      includesZero: true,
    },
    irrational: {
      description: "Irrational numbers",
      properties: "Numbers that cannot be expressed as a fraction of two integers.",
      limitations: "Irrational numbers include non-repeating, non-terminating decimals, and numbers like pi (π) and e.",
      includes: [],
      canHaveNegatives: true,
      includesZero: false,
    },
    integer: {
      description: "Integer numbers",
      properties: "Numbers without fractional or decimal parts.",
      limitations: "Integer numbers include positive numbers, negative numbers, and zero.",
      includes: ["rational"],
      canHaveNegatives: true,
      includesZero: true,
    },
    whole: {
      description: "Whole numbers",
      properties: "Non-negative numbers without fractional or decimal parts.",
      limitations: "Whole numbers include positive numbers and zero.",
      includes: ["integer", "rational"],
      canHaveNegatives: false,
      includesZero: true,
    },
    natural: {
      description: "Natural numbers",
      properties: "Positive numbers without fractional or decimal parts.",
      limitations: "Natural numbers include positive integers greater than zero.",
      includes: ["whole", "integer", "rational"],
      canHaveNegatives: false,
      includesZero: false,
    },
  };

  const getSetInfo = (setName) => {
    return sets[setName] || "Invalid set name";
  };

  return {
    getSetInfo,
  };
})();

console.log(numberSets.getSetInfo("rational"));
console.log(numberSets.getSetInfo("irrational"));
console.log(numberSets.getSetInfo("integer"));
console.log(numberSets.getSetInfo("whole"));
console.log(numberSets.getSetInfo("natural"));
console.log(numberSets.getSetInfo("invalidSetName"));
