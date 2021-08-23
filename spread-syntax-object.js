// Spread Syntax - Object
const item = { type: '😀', size: 'M' };
const detail = { price: 20, made: 'korea', gender: 'M' };

// ❌ Bad Code
const newObj = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
  gender: detail.gender,
};

// ✅ Good Code
const shirt0 = Object.assign(item, detail);

// ✅ Better Code
const shirt = { ...item, ...detail };
const shirt1 = { ...item, ...detail, price: 40000 };
console.log(shirt1);
