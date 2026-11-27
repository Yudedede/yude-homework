# homework 里的 JS：所有方法 + 知识点 + 拓展

> 读法：每个方法只给两样东西 —— **一句内涵**（它是干嘛的、返回什么）+ **一段能直接跑的示例**（注释就是输出）。
> 文件位置：`homework/week2`、`homework/week3`，用 `node 文件名.js` 就能跑。

## 0. 先说结论

17 个有内容的 `.js` 文件里（另有一个 0 字节空文件），真正"反复出现"的东西只有五类：

- **数组方法**：`push`、`unshift`、`pop`、`filter`、`sort`、`includes`、`concat`、`reduce`、`some`
- **对象/原型**：`Object.keys`、`prototype`、`class`、`this`、`get`
- **函数与作用域**：回调、箭头函数、递归、默认参数、闭包
- **算法套路**：计数、双指针、Kadane、排序后扫描、前缀积
- **几个坑**：隐式全局变量、`==`、`pop` 传参、重复代码、空数组的 `every`

下面先按文件过一遍，再按方法系统展开（含 `push` 的兄弟们）。

## 1. 文件总览

| 文件 | 一句话在做什么 | 涉及的方法 / 语法 |
|---|---|---|
| week2/最小值.js | 返回两个数里小的那个 | 函数声明、三元运算符、比较 |
| week2/豆子计数.js | 数字符串里某个字符出现几次 | `length`、`s[i]`、for、`==`、计数 |
| week2/递归.js | 用递归判断偶数 | 递归、终止条件、`else if` |
| week2/范围内总合.js | 生成 start 到 end 的数组再求和 | 默认参数、`push`、`for...of` |
| week2/反转数组.js | 两种反转：返回新数组 / 原地交换 | `unshift`、`Math.floor`、双指针 |
| week2/列表.js | 深比较两个对象是否"长得一样" | `Object.keys`、`includes`、递归、`===` |
| week2/炸金花.js | 判断 7 张牌里有没有同花顺 | `filter`、`sort` 比较器、`push`、`%`、连号计数 |
| week3/分组.js | 手写一个集合类 Group | `class`、`constructor`、`this`、`push`、`includes`、`filter` |
| week3/所有.js | 手写 every（两种写法） | 回调、箭头函数、`some`、德摩根律 |
| week3/扁平化.js | 二维数组拍平 | `reduce`、`concat` |
| week3/自己的循环.js | 用递归模拟 for 循环 | 高阶函数、递归、函数当参数 |
| week3/原型的一些应用.JS | 构造函数 + 原型方法管理学生成绩 | `prototype`、`new`、`this`、展开拷贝、`push` |
| week3/向量类型.js | 二维向量类：加、减、求长度 | `class`、getter、`**`、`Math.sqrt` |
| week3/主要书写方向.js | 空文件（0 字节） | 无 |
| week3/力扣4/合并区间.js | 排序后合并区间（没写完） | 二维 `sort` 比较器、`const` |
| week3/力扣4/子数列最大值.js | 最大子序和 | Kadane、`Math.max` |
| week3/力扣4/轮转数组.js | 数组右移 k 次 | `unshift`、`pop`、`length - 1` |
| week3/力扣4/除自己外乘积.js | 每个位置"除自己以外"的乘积 | `new Array`、双层循环、`continue` |

## 2. 逐个文件：它教了什么

下面按文件过一遍（`week3/主要书写方向.js` 是 0 字节空文件，没有内容可拆，见第 5 节）。

### 2.1 week2/最小值.js

知识点：**函数声明**、**三元运算符**、比较运算。

```js
function min(a, b) {
  return a <= b ? a : b;   // 条件 ? 成立时的值 : 不成立时的值
}
console.log(min(0, 10));   // 0
console.log(min(0, -10));  // -10
```

拓展：原生 `Math.min` 直接就有，而且能接任意多个参数。

```js
console.log(Math.min(3, 1, 2));      // 1
console.log(Math.min(...[3, 1, 2])); // 1 ← 数组要先展开
```

### 2.2 week2/豆子计数.js

知识点：字符串的 `length`、用下标 `s[i]` 取字符、for 计数、**把"数某个字符"抽象成带参数的函数**。

```js
function countChar(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) count++;   // 原代码用的是 ==，建议 ===
  }
  return count;
}
console.log(countChar('kakkerlak', 'k')); // 4
console.log(countChar('B0B', 'B'));       // 2 ← countBs 就是它的特例
```

拓展：`split` 也能数，一行搞定。

```js
console.log('kakkerlak'.split('k').length - 1); // 4
```

### 2.3 week2/递归.js

知识点：**递归三件套** —— 终止条件、缩小规模、调用自己。

```js
function isEven(n) {
  if (n === 0) return true;          // 终止条件
  if (n === 1) return false;         // 终止条件
  if (n < 0) return '应输入正整数';
  return isEven(n - 2);              // 规模缩小 2
}
console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // 应输入正整数
```

注意：每次只减 2，n 很大时调用栈会撑爆。判断偶数有 O(1) 写法：

```js
const isEven = n => Math.abs(n) % 2 === 0;   // 负数取绝对值，因为 -3 % 2 是 -1
```

### 2.4 week2/范围内总合.js

知识点：**默认参数**、`push` 建数组、`for...of` 遍历、函数组合（先 range 再 sum）。

```js
function range(start, end, step = 1) {   // 不传 step 就是 1
  const result = [];                     // 原代码没写 const/let，会变成全局变量
  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    result.push(i);
  }
  return result;
}
function sum(numbers) {
  let total = 0;
  for (const n of numbers) total += n;   // for...of 直接拿值
  return total;
}
console.log(range(5, 2, -1));  // [5, 4, 3, 2]
console.log(sum(range(1, 10))); // 55
```

原版把 start 和 end 的大小关系拆成两个 `for`，这里合成一个条件判断；另外原版如果 `start < end` 又传了负的 step，会死循环。

### 2.5 week2/反转数组.js

知识点：`unshift` 往头上插 → 天然倒序；**原地交换**（首尾对调）。

```js
function reverseArray(a) {
  const result = [];
  for (const m of a) result.unshift(m);  // 每个都插到最前 → 顺序反了
  return result;
}
function reverseArrayInplace(a) {
  for (let i = 0, j = a.length - 1; i < j; i++, j--) {
    [a[i], a[j]] = [a[j], a[i]];         // 解构交换，不用中间变量
  }
  return a;
}
console.log(reverseArray(['a', 'b', 'c']));      // ['c', 'b', 'a']
console.log(reverseArrayInplace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
```

上面原地版把你原来那段"按长度奇偶分情况"的循环条件换成了双指针，效果一样但好读很多。

拓展：内置 `a.reverse()` 就是原地反转（见 3.6）。

### 2.6 week2/列表.js

知识点：`Object.keys` 拿属性名数组、`includes` 判断存在、递归比较、`===` 比较引用。

```js
function deepEqual(a, b) {
  if (a === b) return true;                       // 基本类型 / 同一个引用
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  const ka = Object.keys(a), kb = Object.keys(b);
  if (ka.length !== kb.length) return false;      // 属性个数不一样
  return ka.every(k => Object.hasOwn(b, k) && deepEqual(a[k], b[k]));
}
const obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));                                    // true
console.log(deepEqual(obj, { here: 1, object: 2 }));                  // false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));       // true
```

注意：上面的 `deepEqual` 是修好的版本。你原版里 `deepEqual(1, 2)` 会返回 `true`（两边 `Object.keys` 都是空数组），`deepEqual(null, {})` 会直接抛错。原因见第 5 节，修法见第 4 节。

### 2.7 week2/炸金花.js

知识点：`filter` 按花色分桶、`sort` 传比较器、`% 13` 把 0~51 的牌号映射成点数、连号计数、提前 `return`。

```js
// 牌号 0~51：花色 = Math.floor(牌号 / 13)，点数 = 牌号 % 13（0 当 A）
function hasStraightFlush(cards) {
  for (let suit = 0; suit < 4; suit++) {
    const ranks = cards
      .filter(c => Math.floor(c / 13) === suit)   // 先取同一花色
      .map(c => c % 13)                           // 再换成点数
      .sort((x, y) => x - y);                     // 数字必须给比较器
    if (ranks.length < 5) continue;               // 不够 5 张不用看
    if (ranks[0] === 0) ranks.push(13);           // A 也能当最大牌
    let run = 1;
    for (let i = 0; i < ranks.length - 1; i++) {
      run = ranks[i] + 1 === ranks[i + 1] ? run + 1 : 1;
      if (run >= 5) return true;
    }
  }
  return false;
}
console.log(hasStraightFlush([1, 2, 5, 8, 12, 20, 33]));  // false：同花但凑不出五连
console.log(hasStraightFlush([1, 4, 5, 6, 7, 8, 20]));    // true：跳过散牌后有五连
console.log(hasStraightFlush([0, 3, 6, 9, 10, 11, 12]));  // true：10-J-Q-K-A
```

你原来的版本把四段一模一样的代码抄了四遍，这里用「循环花色 + `continue`」压成一份 —— 这就是"提取重复代码"的思路。

### 2.8 week3/分组.js

知识点：`class` + `constructor` + `this`、方法里操作实例数组、`includes` 判重、`filter` 删除。

```js
class Group {
  constructor() { this.m = []; }
  from([x, y]) {                    // 参数解构：直接拿数组的两个值
    for (let i = x; i <= y; i++) this.m.push(i);
    return this.m;
  }
  add(x) {
    if (!this.m.includes(x)) this.m.push(x);   // 有就不加 → 天然去重
  }
  has(x) {
    return this.m.includes(x);                 // 直接返回布尔值就行
  }
  delete(x) {
    this.m = this.m.filter(n => n !== x);      // filter 生成新数组再赋值
  }
}
const group = new Group();
group.from([10, 12]);
group.add(11);
console.log(group.has(10));  // true
console.log(group.m);        // [10, 11, 12]
```

注意：`from()` 每次调用都会**追加**，你连续调两次就出现了两遍 10~20。另外这个类的 `add / has / delete` 正好就是原生 `Set` 的接口（见 3.16）。

### 2.9 week3/所有.js

知识点：`every` 的语义、把函数当参数传（回调）、箭头函数、用 `some` 取反。

```js
function every(array, test) {
  for (const x of array) {
    if (!test(x)) return false;   // 出现一个不满足就 false
  }
  return true;                    // 空数组走到这里 → true
}
console.log(every([1, 3, 5], n => n < 10)); // true
console.log(every([2, 4, 16], n => n < 10)); // false
console.log(every([], n => n < 10));         // true ← 没有反例
```

第二种写法用的就是德摩根律：**"不是全都满足" ⟺ "存在一个不满足"**，所以 `array.some(n => !test(n))` 为真就返回 false。

```js
function every2(array, test) {
  return !array.some(n => !test(n));   // 有一个不满足 → some 为 true → 取反就是 false
}
console.log(every2([1, 3, 5], n => n < 10)); // true
```

### 2.10 week3/扁平化.js

知识点：`reduce` 累加器 + `concat` 拼接。两行就把二维拍平了。

```js
const arr = [[1, 2, 3], [4, 5], [6]];
const flat = arr.reduce((acc, cur) => acc.concat(cur), []);  // [] 是初始累加器
console.log(flat); // [1, 2, 3, 4, 5, 6]
```

拓展：只能拍一层；更深的用 `flat(Infinity)`。

```js
console.log([1, [2, [3, [4]]]].flat(Infinity)); // [1, 2, 3, 4]
```

### 2.11 week3/自己的循环.js

知识点：**把"循环"拆成四件套再递归** —— 初值、继续条件、下一步、循环体，四个都能是函数。

```js
function loop(value, test, update, body) {
  if (!test(value)) return;   // 条件不成立就停
  body(value);                // 做一次
  loop(update(value), test, update, body);  // 再拿新值重来
}
loop(3, n => n > 0, n => n - 1, console.log); // 3 2 1
```

这其实就是 `for (let n = 3; n > 0; n--) console.log(n)` 的函数式写法。

### 2.12 week3/原型的一些应用.JS

知识点：**构造函数 + prototype** 共享方法、`new`、`this`、展开运算符做浅拷贝。

```js
function GradeManager() {
  this.students = [];
}
GradeManager.prototype.addStudent = function (s) {
  this.students.push(s);          // this 指向 new 出来的实例
};
GradeManager.prototype.getAll = function () {
  return [...this.students];      // 展开 → 返回副本，外面 push 不影响内部
};
const manager = new GradeManager();
manager.addStudent({ name: '张三', math: 100 });
console.log(manager.getAll());    // [{ name: '张三', math: 100 }]
```

等价的 `class` 写法（现代写法，本质一样）：

```js
class GradeManager {
  constructor() { this.students = []; }
  addStudent(s) { this.students.push(s); }
  getAll() { return [...this.students]; }
}
```

### 2.13 week3/向量类型.js

知识点：`class`、构造器、方法返回**新实例**（不可变）、`get` 定义只读属性、`**` 幂运算、`Math.sqrt`。

```js
class Vec {
  constructor(x, y) { this.x = x; this.y = y; }
  plus(v) { return new Vec(this.x + v.x, this.y + v.y); }  // 不改自己，返回新向量
  minus(v) { return new Vec(this.x - v.x, this.y - v.y); }
  get length() {                                            // 用的时候不加括号
    return Math.sqrt(this.x ** 2 + this.y ** 2);            // 3²+4² 开根号 = 5
  }
}
console.log(new Vec(3, 4).length);          // 5
console.log(new Vec(1, 2).plus(new Vec(2, 3))); // Vec { x: 3, y: 5 }
```

拓展：加个 `toString` 打印会好看很多。

```js
class Vec {
  constructor(x, y) { this.x = x; this.y = y; }
  toString() { return `(${this.x}, ${this.y})`; }   // 打印 / 拼字符串时自动调用
}
console.log(String(new Vec(1, 2))); // (1, 2)
```

### 2.14 week3/力扣4/合并区间.js

知识点：二维数组按首元素排序、`const` 不保护内容。这个文件只写了排序，合并逻辑没写完。

```js
const intervals = [[1, 3], [9, 6], [8, 10], [15, 18]];
intervals.sort((a, b) => a[0] - b[0]);   // 按每项的起点排；sort 会改原数组
console.log(intervals); // [[1,3],[8,10],[9,6],[15,18]] ← [9,6] 只按 9 排过去了
```

完整解法见第 4 节。

### 2.15 week3/力扣4/子数列最大值.js

知识点：**Kadane 算法**（最大子序和）—— 用一个"以当前元素结尾的最大和"滚动更新。

```js
function maxSubArray(nums) {
  let now = nums[0];    // 以 i 结尾的最大和
  let best = nums[0];   // 全局最大
  for (let i = 1; i < nums.length; i++) {
    now = now < 0 ? nums[i] : now + nums[i];   // 前面是负的，不如从自己重新开始
    best = Math.max(now, best);
  }
  return best;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([5, 4, -1, 7, 8]));                // 23
```

### 2.16 week3/力扣4/轮转数组.js

知识点：`unshift` + `pop` 组合实现"把最后一个搬到最前面"、循环 k 次、`nums.length - 1` 取末尾。

```js
const nums = [-1, -100, 3, 99];
for (let i = 0; i < 2; i++) {
  nums.unshift(nums[nums.length - 1]);  // 尾巴搬到头上
  nums.pop();                           // 再把多出来的尾巴删掉（pop 不接参数！）
}
console.log(nums); // [3, 99, -1, -100]
```

更快的写法（一次 `splice` 切走尾巴再塞回头）：

```js
function rotate(nums, k) {
  k %= nums.length;                                  // k 可能比长度大
  nums.unshift(...nums.splice(nums.length - k, k));   // 切下最后 k 个，塞到前面
  return nums;
}
```

### 2.17 week3/力扣4/除自己外乘积.js

知识点：`new Array(n)` 建定长数组、双层循环、`continue` 跳过自己、乘积累乘。

```js
function productExceptSelf(nums) {
  const res = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 0; i < nums.length; i++) {   // 第一遍：左边所有数的积
    res[i] = left;
    left *= nums[i];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) { // 第二遍：再乘上右边所有数的积
    res[i] *= right;
    right *= nums[i];
  }
  return res;
}
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
```

你的原版是每个位置都重新遍历一遍（O(n²)），而且结果里出现 `-0`（因为 `-1 * 0` 带符号位）。这个写法是 O(n)，也不用除法（题目要求）。

## 3. 方法手册（含拓展）

### 3.1 数组的四个角：push / pop / unshift / shift

这四个最容易混：看**改头还是改尾**、**加还是删**、**返回长度还是元素**。

| 方法 | 位置 | 操作 | 返回值 | 改原数组 |
|---|---|---|---|---|
| `push(x)` | 尾部 | 加 | 新长度 | 是 |
| `pop()` | 尾部 | 删 | 被删的元素 | 是 |
| `unshift(x)` | 头部 | 加 | 新长度 | 是 |
| `shift()` | 头部 | 删 | 被删的元素 | 是 |

**`push(值1, 值2, ...)`** — 往数组尾巴追加元素，返回加完之后的长度。

```js
const a = [1, 2];
a.push(3);        // 3  ← 返回的是长度，不是数组
console.log(a);   // [1, 2, 3]
console.log(a.push(4, 5)); // 5 ← 一次可以加多个
```

**`pop()`** — 从尾巴取走一个，返回取走的那个；空数组返回 `undefined`。

```js
const a = [1, 2, 3];
const last = a.pop();   // 3
console.log(a);         // [1, 2]
console.log([].pop());  // undefined ← 不会报错
```

**`unshift(值)`** — 往头部塞，返回新长度。你反转数组用的就是它。

```js
const a = [1, 2];
a.unshift(0);     // 3
console.log(a);   // [0, 1, 2]
```

**`shift()`** — 从头部取走一个，返回取走的那个。

```js
const a = [1, 2, 3];
console.log(a.shift()); // 1
console.log(a);         // [2, 3]
```

**用它们做栈 / 队列** — 记住一句：栈用 `push + pop`，队列用 `push + shift`。

```js
const stack = [];
stack.push(1); stack.push(2);
console.log(stack.pop());   // 2 ← 后进先出

const queue = [];
queue.push(1); queue.push(2);
console.log(queue.shift()); // 1 ← 先进先出
```

性能提醒：`push/pop` 只动尾巴，很快；`unshift/shift` 要把后面所有元素整体挪一位，数组大时慢。

### 3.2 任意位置增删：splice / slice

**`splice(起点, 删除个数, ...要插入的东西)`** — 在任意位置挖掉 / 塞入，返回被挖掉的部分，原数组被改。

```js
const a = [1, 2, 3, 4];
console.log(a.splice(1, 2, 'x')); // [2, 3] ← 被删掉的部分
console.log(a);                   // [1, 'x', 4]

const b = [1, 2, 3];
b.splice(1, 0, 'new');            // 删除 0 个 = 纯插入
console.log(b);                   // [1, 'new', 2, 3]
```

**`slice(起点, 终点)`** — 复印一段（含起点、不含终点），原数组不动。

```js
const a = [1, 2, 3, 4];
console.log(a.slice(1, 3)); // [2, 3]
console.log(a);             // [1, 2, 3, 4] ← 没变
console.log(a.slice());     // [1, 2, 3, 4] ← 空参 = 整个复制
```

一句记忆：**splice 是剪刀（改原数组），slice 是复印机（不改）**。

### 3.3 拼接、拍平、转字符串：concat / flat / join / Array.from

**`concat(...)`** — 把东西接在屁股后面，返回新数组（不会拍平二维）。

```js
console.log([1, 2].concat([3], 4));     // [1, 2, 3, 4]
console.log([1].concat([[2, 3]]));      // [1, [2, 3]] ← 只是接上去
```

**`flat(层数)`** — 把嵌套数组压平，默认只压 1 层。

```js
console.log([[1, [2]], [3]].flat());             // [1, [2], 3]
console.log([1, [2, [3, [4]]]].flat(Infinity));  // [1, 2, 3, 4]
```

**`join(分隔符)`** — 把数组拼成一个字符串。

```js
console.log([1, 2, 3].join('-')); // "1-2-3"
console.log([1, 2, 3].join(''));  // "123"
```

**`Array.from({ length: n }, 回调)`** — 造一个长度 n 的满数组（比 `new Array` 好用，因为没有空位）。

```js
console.log(Array.from({ length: 3 }, (_, i) => i)); // [0, 1, 2]
console.log(Array.from('abc'));                     // ['a', 'b', 'c'] ← 字符串也能转
```

### 3.4 查找与判断：includes / indexOf / find / findIndex / some / every

**`includes(值)`** — 数组里有没有这个值，返回 true/false；`NaN` 也能正确找到。

```js
console.log([1, 2, 3].includes(2));       // true
console.log([1, 2, NaN].includes(NaN));   // true
```

**`indexOf(值)`** — 第一次出现的下标，找不到返回 -1；`NaN` 永远找不到。

```js
console.log(['a', 'b'].indexOf('b')); // 1
console.log(['a'].indexOf('z'));      // -1
console.log([1, NaN].indexOf(NaN));   // -1 ← 这是它和 includes 最大的差别
```

**`find(条件)`** — 找第一个满足条件的元素本身，没有就 `undefined`。

```js
const users = [{ id: 1 }, { id: 2 }];
console.log(users.find(u => u.id === 2)); // { id: 2 }
console.log(users.find(u => u.id === 9)); // undefined
```

**`findIndex(条件)`** — 同上，但返回下标，没有就 -1。

```js
const users = [{ id: 1 }, { id: 2 }];
console.log(users.findIndex(u => u.id === 2)); // 1
```

**`some(条件)`** — 只要有一个满足就 true（空数组返回 false）。

```js
console.log([1, 2, 3].some(x => x > 2)); // true
console.log([].some(x => x > 2));        // false
```

**`every(条件)`** — 全部满足才 true（空数组返回 true —— 这就是你 `every` 里空数组返回 true 的原因）。

```js
console.log([1, 2, 3].every(x => x > 0)); // true
console.log([].every(x => x > 0));        // true ← 空数组"没有反例"
```

你手写的 `every` 就是原生 `Array.prototype.every` 的原理，实际项目里直接 `array.every(test)` 就够了。

### 3.5 遍历与变换：for...of / forEach / map / filter / reduce

**`for...of`** — 直接拿到每个值，能 `break`、能 `continue`。

```js
for (const x of [1, 2, 3]) {
  if (x === 2) continue;
  console.log(x);   // 1 3
}
```

**`forEach(回调)`** — 只是遍历，没有返回值（返回 undefined），也**不能** `break`。

```js
[1, 2].forEach((x, i) => console.log(i, x)); // 0 1 / 1 2
```

**`map(回调)`** — 每个元素变出一个新值，返回等长新数组。

```js
console.log([1, 2, 3].map(x => x * 2));        // [2, 4, 6]
console.log([{ n: 1 }].map(o => o.n));         // [1] ← 常用：只取字段
```

**`filter(回调)`** — 只留下回调返回 true 的元素，返回新数组（不改原数组，你 Group.delete 用的就是它）。

```js
console.log([1, 2, 3, 4].filter(x => x % 2 === 0)); // [2, 4]
```

**`reduce(回调, 初始值)`** — 把整个数组压成一个值（求和、求积、拍平、分组都靠它）。

```js
console.log([1, 2, 3].reduce((sum, x) => sum + x, 0)); // 6
console.log([1, 2, 3, 4].reduce((p, x) => p * x, 1));  // 24
```

**`reduce` 拍平**（你扁平化.js 的写法）：

```js
console.log([[1, 2], [3]].reduce((acc, cur) => acc.concat(cur), [])); // [1, 2, 3]
```

**`continue` / `break`** — 跳过本次 / 跳出整个循环（用在 for、for...of、while 里）。

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;  // 跳过 2
  if (i === 4) break;     // 到 4 就停
  console.log(i);         // 0 1 3
}
```

### 3.6 排序与反转：sort / reverse / toSorted / at

**`sort(比较器)`** — 原地排序；不传比较器时按**字符串**排，所以数字必须传 `(a, b) => a - b`。

```js
console.log([10, 3, 1].sort());                // [1, 10, 3] ← "10" < "3"
console.log([10, 3, 1].sort((a, b) => a - b));   // [1, 3, 10] 升序
console.log([10, 3, 1].sort((a, b) => b - a));   // [10, 3, 1] 降序
```

**比较器的含义**：返回负数 → `a` 排前面；返回正数 → `b` 排前面；返回 0 → 保持不动。

```js
[3, 1, 2].sort((a, b) => a - b);   // 就是"a 比 b 小就 a 在前"
```

**二维数组排序**（合并区间用的）：

```js
const iv = [[9, 6], [1, 3], [8, 10]];
iv.sort((a, b) => a[0] - b[0]);   // 按每项的第 0 个元素排
console.log(iv); // [[1, 3], [8, 10], [9, 6]]
```

**`reverse()`** — 原地反转，返回原数组（原数组被改）。

```js
const a = [1, 2, 3];
a.reverse();
console.log(a); // [3, 2, 1]
```

**`toSorted()` / `toReversed()`** — 新版方法，返回新数组、不动原数组（Node 20+、现代浏览器）。

```js
const a = [3, 1, 2];
console.log(a.toSorted()); // [1, 2, 3]
console.log(a);            // [3, 1, 2] ← 没被改
```

**`at(下标)`** — 支持负数，取倒数第几个，比 `a[a.length - 1]` 短。

```js
console.log([1, 2, 3].at(-1)); // 3
console.log([1, 2, 3].at(0));  // 1
```

### 3.7 数组的其它常识

**`Array.isArray(x)`** — 判断是不是数组（`typeof []` 是 `'object'`，判断不了）。

```js
console.log(Array.isArray([]));   // true
console.log(Array.isArray('[]')); // false
```

**`new Array(n)`** — 造长度为 n 的「空位」数组，注意空位不参与 `map`。

```js
const a = new Array(3);
console.log(a.length);      // 3
console.log(a.map(x => 1)); // [ <3 empty items> ] ← 回调根本没执行
console.log(a.fill(0));     // [0, 0, 0] ← 先 fill 再 map 就没坑
```

**`fill(值)`** — 用同一个值填满（原地改）。

```js
console.log([1, 2, 3].fill(0)); // [0, 0, 0]
console.log(new Array(3).fill(0)); // [0, 0, 0] ← 初始化数组常用
```

**展开运算符 `...`** — 把数组拆成一个个元素（做浅拷贝、传参数）。

```js
const a = [1, 2];
console.log([...a, 3]);         // [1, 2, 3]
console.log(Math.max(...a));    // 2
```

**`length`** — 数组长度，可读**也可写**。

```js
const a = [1, 2, 3];
console.log(a.length); // 3
a.length = 1;          // 直接改长度 → 后面的元素被丢掉
console.log(a);        // [1]
```

### 3.8 字符串

**`str.length`** — 字符个数（按 UTF-16 码元算，所以一个 emoji 可能算 2 个）。

```js
console.log('abc'.length); // 3
```

**`str[i]` / `charAt(i)` / `at(i)`** — 取第 i 个字符。

```js
console.log('abc'[1]);      // "b"
console.log('abc'.charAt(1)); // "b"
console.log('abc'.at(-1));  // "c" ← 支持负数
```

**`split(分隔符)`** — 把字符串切成数组（`join` 的逆操作）。

```js
console.log('a,b,c'.split(',')); // ["a", "b", "c"]
console.log('abc'.split(''));    // ["a", "b", "c"]
```

**`repeat(n)`** — 重复 n 遍。

```js
console.log('ab'.repeat(2)); // "abab"
console.log('-'.repeat(10)); // "----------" ← 画分隔线
```

**`padStart(总长, 填充字符)`** — 不够长就在前面补（`padEnd` 在后面补）。

```js
console.log('1'.padStart(3, '0')); // "001"
console.log('1'.padEnd(3, '0'));   // "100"
```

**`trim()`** — 去掉首尾空格。

```js
console.log('  x  '.trim()); // "x"
```

**`toUpperCase()` / `toLowerCase()`** — 转大写 / 小写。

```js
console.log('abc'.toUpperCase()); // "ABC"
```

**`includes` / `startsWith` / `endsWith`** — 包含 / 以…开头 / 以…结尾。

```js
console.log('hello'.includes('ell'));  // true
console.log('hello'.startsWith('he')); // true
```

**模板字符串** — 用反引号，`${}` 里可以放表达式。

```js
const name = '小明', age = 18;
console.log(`我叫${name}，今年${age}岁，明年${age + 1}岁`);
```

**字符串 ↔ 数字** — `Number()` 严格、`parseInt()` 宽容。

```js
console.log(Number('12'));      // 12
console.log(Number('12px'));    // NaN ← 有一个字符不对就整个 NaN
console.log(parseInt('12px'));  // 12  ← 能读多少读多少
console.log(String(12) + 'px'); // "12px"
```

### 3.9 Object：keys / values / entries / in / hasOwn / delete

**`Object.keys(obj)`** — 返回所有**可枚举自身属性名**组成的数组（你深比较就靠它）。

```js
console.log(Object.keys({ a: 1, b: 2 })); // ["a", "b"]
console.log(Object.keys([10, 20]));       // ["0", "1"] ← 数组下标是字符串
```

**`Object.values(obj)`** — 只要值。

```js
console.log(Object.values({ a: 1, b: 2 })); // [1, 2]
```

**`Object.entries(obj)`** — 变成 `[键, 值]` 的数组，配合解构遍历。

```js
Object.entries({ a: 1, b: 2 }).forEach(([k, v]) => console.log(k, v)); // a 1 / b 2
```

**`"key" in obj`** — 属性存不存在（**包括原型链上的**）。

```js
console.log('toString' in {}); // true ← 继承来的也算
```

**`Object.hasOwn(obj, "key")`** — 只看**自己**的属性，不受原型链影响。

```js
console.log(Object.hasOwn({ a: 1 }, 'a'));      // true
console.log(Object.hasOwn({}, 'toString'));     // false
```

**`delete obj.key`** — 删掉一个属性，返回 true/false。

```js
const o = { a: 1, b: 2 };
delete o.a;
console.log(o); // { b: 2 }
```

注意：`delete` 是运算符，不能给变量用；你 Group 里那个 `delete` 是**方法名**，同名不冲突。

**展开 `{...obj}`** — 浅拷贝 / 合并。

```js
const base = { a: 1 };
console.log({ ...base, b: 2 });   // { a: 1, b: 2 }
```

**对象解构** — 把属性直接取成变量。

```js
const user = { name: '张三', age: 18 };
const { name, age } = user;
const { name: n, ...rest } = user;  // 重命名 + 剩下的打包
console.log(n, rest); // 张三 { age: 18 }
```

**`for...in`** — 遍历键（会带上原型链上的可枚举属性，所以一般配 `hasOwn` 用）。

```js
for (const k in { a: 1, b: 2 }) console.log(k); // a b
```

### 3.10 Math 与数字

**`Math.max(...)` / `Math.min(...)`** — 求最大 / 最小；接受多个参数，不吃数组。

```js
console.log(Math.max(1, 5, 2));         // 5
console.log(Math.max(...[1, 5, 2]));    // 5
console.log(Math.max());                // -Infinity ← 空参的默认值
```

**`Math.floor` / `Math.ceil` / `Math.round`** — 向下取整 / 向上取整 / 四舍五入。

```js
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.round(4.5)); // 5
```

**`Math.abs(x)`** — 绝对值。

```js
console.log(Math.abs(-4)); // 4
```

**`Math.sqrt(x)` / `2 ** 3`** — 开平方 / 幂。

```js
console.log(Math.sqrt(3 ** 2 + 4 ** 2)); // 5
```

**`Math.random()`** — 0 到 1 之间的小数（含 0、不含 1）。

```js
console.log(Math.floor(Math.random() * 10) + 1); // 1~10 的整数
```

### 3.11 类型与比较：=== / == / typeof / NaN

**`===`（严格相等）** — 类型和值都要一样，日常一律用它。

```js
console.log(1 === '1');  // false
console.log(1 == '1');   // true ← == 会先转类型，容易出事
```

**`==` 的几个坑**：

```js
console.log(0 == '');             // true
console.log(null == undefined);   // true
console.log([] == false);         // true
console.log(NaN == NaN);          // false ← NaN 和谁都不等
```

**`typeof`** — 看类型，但 `null` 会返回 `'object'`（历史遗留 bug）。

```js
console.log(typeof 1, typeof 'a', typeof true, typeof undefined); // number string boolean undefined
console.log(typeof null);   // "object"
console.log(typeof []);     // "object" ← 所以判断数组要用 Array.isArray
console.log(typeof function () {}); // "function"
```

**`NaN`** — 不是数字的"数字"，用 `Number.isNaN` 判断。

```js
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN('abc'));    // false ← 它不做类型转换
```

**浮点数** — 小数运算有精度误差，比较时用差值。

```js
console.log(0.1 + 0.2);              // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);      // false
console.log(Math.abs(0.1 + 0.2 - 0.3) < 1e-9); // true ← 这样比
```

### 3.12 函数：声明 / 表达式 / 箭头 / 默认参数 / 剩余参数

**函数声明** — 会"提升"，写在调用后面也能用。

```js
console.log(add(1, 2)); // 3 ← 提前调用也 OK
function add(a, b) { return a + b; }
```

**函数表达式** — 赋给变量，不会提升。

```js
const add2 = function (a, b) { return a + b; };
```

**箭头函数** — 更短的写法；没有自己的 `this` 和 `arguments`，不能当构造函数。

```js
const double = x => x * 2;              // 一个参数可省括号，单表达式可省 return
const add3 = (a, b) => { return a + b; };
console.log(double(3)); // 6
```

**默认参数** — 没传（或传 `undefined`）时才用默认值。

```js
function greet(name = '陌生人') { return 'hi ' + name; }
console.log(greet());        // hi 陌生人
console.log(greet('小明'));   // hi 小明
```

**剩余参数 `...args`** — 把多出来的参数收成数组（比 `arguments` 好用，`arguments` 是类数组）。

```js
function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3)); // 6
```

**回调函数** — 把函数当参数传进去，让别的函数"在合适的时候调用它"。

```js
[1, 2, 3].forEach(x => console.log(x));  // 箭头函数就是回调
setTimeout(() => console.log('1 秒后'), 1000);
```

**`return` 与 `undefined`** — 函数没写 `return` 就返回 `undefined`；`return` 之后的代码不执行。

```js
function noReturn() { const x = 1; }
console.log(noReturn()); // undefined
function early(n) {
  if (n < 0) return '负数';
  return n;              // 这行不会在 n < 0 时执行
}
```

### 3.13 作用域与闭包

**`let` / `const` / `var`** — `let`/`const` 是块级作用域（`{}` 内有效），`var` 是函数级；`const` 只保证"不能重新赋值"，对象内容照样能改。

```js
{
  let a = 1;
  var b = 2;
}
// console.log(a); // 报错：a 只在块里
console.log(b);    // 2 ← var 漏出来了
```

**隐式全局变量** — 非严格模式下，给没声明的变量赋值会**偷偷创建全局变量**（你 `range` 里的 `result` 就是）。

```js
function bad() { total = 0; }   // 没有 let/const → 偷偷建了全局变量
bad();
console.log(globalThis.total);  // 0
```

**严格模式** — 加了 `'use strict'` 之后，上面这种写法直接报错；`class` 内部、ES module 默认就是严格模式。

```js
'use strict';
// result = [];  // ReferenceError: result is not defined
```

**闭包** — 内层函数记住了外层函数的变量，外层执行完变量也不消失。

```js
function counter() {
  let n = 0;
  return () => ++n;   // 这个箭头函数"抱着" n 不放
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
```

你 `列表.js` 里嵌套的 `shuxing()` 能直接用外层 `x`、`y`、`a`、`b`，也是作用域链的作用。

### 3.14 对象、new、原型、class、getter

**`new` 做了四件事** — 建空对象 → 把原型指向构造函数的 `prototype` → 用 `this` 执行构造函数 → 返回这个对象。

```js
function Person(name) { this.name = name; }
const p = new Person('张三');
console.log(p.name);              // 张三
console.log(p instanceof Person); // true ← 原型链上有 Person.prototype
```

**`prototype`** — 放在原型上的方法**所有实例共享一份**，省内存。

```js
function Person(name) { this.name = name; }
Person.prototype.say = function () { return '我是' + this.name; };
console.log(new Person('张三').say());  // 我是张三 ← 实例上找不到 say，就去原型上找
```

**`class`** — 就是"构造函数 + 原型"的语法糖，写着更像 Java。

```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name + ' 叫了一声'; }
}
console.log(new Animal('猫').speak()); // 猫 叫了一声
```

**`this` 指向** — 谁调用方法，`this` 就是谁；箭头函数没有自己的 `this`（沿用外层的）。

```js
const obj = {
  n: 1,
  normal() { return this.n; },   // this = obj
  arrow: () => this,             // 箭头函数的 this 是外层的，不是 obj
};
console.log(obj.normal()); // 1
```

**getter** — 用 `get` 定义"看起来像属性、其实是算出来的"值，访问时**不加括号**。

```js
class Circle {
  constructor(r) { this.r = r; }
  get area() { return 3.14 * this.r ** 2; }
}
const c1 = new Circle(2);
console.log(c1.area);    // 12.56
// console.log(c1.area()); // 报错：不是函数
```

### 3.15 递归

**递归** — 函数调用自己，必须有**终止条件**，否则栈溢出。

```js
function fact(n) {
  if (n <= 1) return 1;   // 终止条件
  return n * fact(n - 1); // 缩小规模 + 调用自己
}
console.log(fact(5)); // 120
```

**栈溢出** — 每次调用占一层栈，约一万层就爆。

```js
function infinite(n) { return infinite(n + 1); }
// infinite(0); // RangeError: Maximum call stack size exceeded
```

### 3.16 Set / Map（你那个 Group 的"正规"写法）

**`Set`** — 不重复的集合，接口正好是 `add / has / delete / size`，和你写的 `Group` 一模一样。

```js
const s = new Set();
s.add(1);
s.add(1);              // 重复加没用
console.log(s.has(1)); // true
console.log(s.size);   // 1
s.delete(1);
console.log(s.size);   // 0

console.log([...new Set([1, 1, 2])]); // [1, 2] ← 一行去重
```

**`Map`** — 键值对，键可以是任何类型（普通对象只认字符串键）。

```js
const m = new Map();
m.set('a', 1);
m.set(1, '数字键');
console.log(m.get('a'), m.get(1), m.size); // 1 数字键 2
```

## 4. 算法知识点

**双指针原地反转** — 一头一尾往中间走，边走边换。

```js
function reverse(a) {
  for (let i = 0, j = a.length - 1; i < j; i++, j--) {
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
console.log(reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
```

**计数** — 遍历 + 计数器，是最基础的套路（豆子计数、连号计数都是它）。

```js
function countChar(str, ch) {
  let count = 0;
  for (const c of str) if (c === ch) count++;
  return count;
}
console.log(countChar('kakkerlak', 'k')); // 4
```

**合并区间** — 先按起点排序，再扫描；能接上就扩展右端点，接不上就开新的。

```js
function merge(intervals) {
  if (intervals.length === 0) return [];
  const sorted = intervals.map(iv => [...iv]).sort((a, b) => a[0] - b[0]);
  const out = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const last = out[out.length - 1];
    if (sorted[i][0] <= last[1]) {              // 有重叠
      last[1] = Math.max(last[1], sorted[i][1]); // 右端点取更远的
    } else {
      out.push(sorted[i]);                       // 没有重叠，开新区间
    }
  }
  return out;
}
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
```

**Kadane 最大子序和** — 滚动的"以 i 结尾的最大和"，前面是负的就重新开始。

```js
function maxSubArray(nums) {
  let now = nums[0], best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    now = now < 0 ? nums[i] : now + nums[i];
    best = Math.max(now, best);
  }
  return best;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
```

**轮转数组（三种解法）** — 从"用 API 凑"到"原地三步反转"。写法一就是你原来的 `unshift` + `pop` 循环（O(k·n)），写法二是下面的 `splice`。

```js
// 写法二：splice 一次切走尾巴再塞回头（O(n)）
function rotate(nums, k) {
  k %= nums.length;
  nums.unshift(...nums.splice(nums.length - k, k));
  return nums;
}
console.log(rotate([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]
```

```js
// 写法三：三次反转（全部反转 → 前 k 个反转 → 剩下反转），O(n) 且不用额外数组
function rotate2(nums, k) {
  k %= nums.length;
  const rev = (arr, i, j) => {
    while (i < j) { [arr[i], arr[j]] = [arr[j], arr[i]]; i++; j--; }
  };
  rev(nums, 0, nums.length - 1);
  rev(nums, 0, k - 1);
  rev(nums, k, nums.length - 1);
  return nums;
}
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
```

**除自己以外乘积** — 每个位置 = 左边所有数的积 × 右边所有数的积，两趟搞定，不用除法。

```js
function productExceptSelf(nums) {
  const res = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 0; i < nums.length; i++) { res[i] = left; left *= nums[i]; }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) { res[i] *= right; right *= nums[i]; }
  return res;
}
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
```

**深比较** — 先比基本值和引用，再比类型、属性个数、每个属性递归。

```js
function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  const ka = Object.keys(a), kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  return ka.every(k => Object.hasOwn(b, k) && deepEqual(a[k], b[k]));
}
console.log(deepEqual(1, 2));  // false ← 你原来这里返回 true
console.log(deepEqual([1, [2]], [1, [2]])); // true
```

**去重** — 两种写法，从笨到快。

```js
const arr = [1, 2, 2, 3];
console.log(arr.filter((x, i) => arr.indexOf(x) === i)); // [1, 2, 3] ← 第一次出现才留
console.log([...new Set(arr)]);                           // [1, 2, 3] ← 最简单
```

## 5. 你代码里的坑（按文件）

| 文件 | 问题 | 怎么改 |
|---|---|---|
| week2/列表.js | 第 29 行 `let key in a` 是语法错误，整个文件都不执行（连前面的 log 都没有） | 删掉最后三行 |
| week2/列表.js | `deepEqual(1, 2)` 返回 true；`deepEqual(null, {})` 直接抛错 | 先判 `typeof` 和 `null`，见第 4 节 |
| week2/反转数组.js | 循环条件用长度奇偶分情况，绕 | 双指针：`for (let i = 0, j = a.length - 1; i < j; i++, j--)` |
| week2/范围内总合.js | `result = []` 没声明 → 隐式全局变量 | 加 `const`；`start < end` 时传负 step 会死循环，要判断方向 |
| week2/豆子计数.js | 用 `==` 比较 | 一律 `===`；`countBs` 可以直接 `const countBs = s => countChar(s, 'B')` |
| week2/递归.js | 负数返回字符串，`if (isEven(-1))` 会成立（非空字符串是 truthy） | 统一返回布尔值，或直接 `Math.abs(n) % 2 === 0` |
| week2/炸金花.js | 四段一模一样的代码；`count` 跨花色没重置 | 用循环花色 + `continue` 合并成一份，见 2.7 |
| week3/分组.js | `from()` 每调一次就追加一次 → 数据重复两遍 | 先清空 `this.m = []`，或改名叫 `addRange` |
| week3/分组.js | `this.m` 对外开放，外部能绕过 `add` 直接 push | 返回副本 / 用 `Set` |
| week3/所有.js | 每个元素调了两次 `test`，回调有副作用就出错 | 只调一次：`if (!test(x)) return false` |
| week3/原型的一些应用.JS | `[...this.students]` 只是浅拷贝，学生对象还是同一个 | 要彻底隔离用 `structuredClone(this.students)` |
| week3/向量类型.js | 没有 `toString`，打印出来是一坨对象 | 加一个 `toString()` 方法，返回 `(x, y)` 这样的字符串 |
| week3/力扣4/合并区间.js | 只排了序，没写合并 | 见第 4 节完整版；`const` 不阻止 `sort` 改内容 |
| week3/力扣4/子数列最大值.js | 空数组会返回 undefined | 开头加 `if (nums.length === 0) return 0` |
| week3/力扣4/轮转数组.js | `pop([nums.length - 1])` 参数无效；`let last` 没用上；k 大时慢 | `k %= nums.length` + `unshift(...splice(...))` |
| week3/力扣4/除自己外乘积.js | O(n²)；`cheng` 依赖外部 `answer`；结果有 `-0` | 前后缀积 O(n)；把 `answer` 当参数传 |
| week3/主要书写方向.js | 0 字节空文件 | 没有内容可总结 |

## 6. 速查表：增删改查一张表

| 想做的事 | 方法 | 改原数组？ | 返回什么 |
|---|---|---|---|
| 尾部加 | `push` | 是 | 新长度 |
| 尾部删 | `pop` | 是 | 被删元素 |
| 头部加 | `unshift` | 是 | 新长度 |
| 头部删 | `shift` | 是 | 被删元素 |
| 任意位置增删 | `splice` | 是 | 被删元素组成的数组 |
| 截一段 | `slice` | 否 | 新数组 |
| 拼接 | `concat` | 否 | 新数组 |
| 拍平 | `flat` | 否 | 新数组 |
| 转字符串 | `join` | 否 | 字符串 |
| 有没有某个值 | `includes` | 否 | true / false |
| 找下标 | `indexOf` | 否 | 下标 / -1 |
| 找元素 | `find` | 否 | 元素 / undefined |
| 找元素下标 | `findIndex` | 否 | 下标 / -1 |
| 有一个满足吗 | `some` | 否 | true / false |
| 全部满足吗 | `every` | 否 | true / false |
| 每个都变 | `map` | 否 | 等长新数组 |
| 筛一部分 | `filter` | 否 | 新数组 |
| 压成一个值 | `reduce` | 否 | 任意值 |
| 排序 | `sort` | 是 | 排好的原数组 |
| 反转 | `reverse` | 是 | 反转后的原数组 |
| 取倒数第 n 个 | `at(-n)` | 否 | 元素 |

## 7. 建议的练习

1. 把 `列表.js` 的 `deepEqual` 补全，加上数组、`NaN`、`null`、日期，再和 `assert.deepStrictEqual` 对照。
2. 用 `Set` 重写 `Group`，比较一下 40 多行和 5 行的差别。
3. 把 `炸金花.js` 重构成「按花色分组」的一层循环，跑通文件里全部测试数据。
4. 轮转数组分别用 `splice` 和「三次反转」写一遍，测 `k = 0`、`k = 数组长度`、`k > 数组长度`。
5. 把「除自己以外乘积」从 O(n²) 改到 O(n)，再加一条限制：不许多开一个数组。
6. 给 `Vec` 加上 `toString`、`static zero`、`equals(other)`。
7. 用 `map / filter / reduce / every / some` 各写一行代码，过程中不许出现 `for`。

## 附录：几个 HTML 里的 JS（不是 .js 文件，顺手补上）

**`#三角.html`** — 字符串 `+=` 累加，每次多一个 `#`，就是一个直角三角形。

```js
let result = '';
for (let i = 0; i <= 7; i++) {
  result += '#';      // 字符串拼接
  console.log(result);
}
```

**`fizzbuzz.html`** — `%` 判断整除；条件要从"最特殊"往"最普通"写，`15` 的倍数必须放最前面。

```js
for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) console.log('FizzBuzz');   // 3 和 5 的公倍数
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}
```

**`棋盘.html`** — 8×8 棋盘，用"行号 + 列号"的奇偶性判断交替，比原代码用两个计数器简单。

```js
let board = '';
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    board += (row + col) % 2 === 0 ? '#' : ' ';
  }
  board += '\n';
}
console.log(board);
```
