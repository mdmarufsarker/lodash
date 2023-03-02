const _ = require('lodash');


// Array

const chunk = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(chunk); // => [['a', 'b'], ['c', 'd']]

const compact = _.compact([0, 1, false, 2, '', 3]);
console.log(compact); // => [1, 2, 3]

const concat = _.concat([1], 2, [3], [[4]]);
console.log(concat); // => [1, 2, 3, [4]]

const difference = _.difference([2, 1], [2, 3]);
console.log(difference); // => [1]

const differenceBy = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
console.log(differenceBy); // => [1.2]

const differenceWith = _.differenceWith([2.1, 1.2], [2.3, 3.4], (a, b) => Math.floor(a) === Math.floor(b));
console.log(differenceWith); // => [1.2]

const drop = _.drop([1, 2, 3]);
console.log(drop); // => [2, 3]

const dropRight = _.dropRight([1, 2, 3]);
console.log(dropRight); // => [1, 2]

const dropRightWhile = _.dropRightWhile([1, 2, 3, 4], n => n > 2);
console.log(dropRightWhile); // => [1, 2]

const dropWhile = _.dropWhile([1, 2, 3, 4], n => n < 3);
console.log(dropWhile); // => [3, 4]

const fill = _.fill([1, 2, 3], 'a');
console.log(fill); // => ['a', 'a', 'a']

const fillWith = _.fill(Array(3), 2);
console.log(fillWith); // => [2, 2, 2]

const findIndex = _.findIndex([1, 2, 3, 4], n => n % 2 === 1);
console.log(findIndex); // => 0

const findLastIndex = _.findLastIndex([1, 2, 3, 4], n => n % 2 === 1);
console.log(findLastIndex); // => 2

const firstHead = _.first([1, 2, 3]);
console.log(firstHead); // => 1

const flatten = _.flatten([1, [2, [3, [4]], 5]]);
console.log(flatten); // => [1, 2, [3, [4]], 5]

const flattenDeep = _.flattenDeep([1, [2, [3, [4]], 5]]);
console.log(flattenDeep); // => [1, 2, 3, 4, 5]

const flattenDepth = _.flattenDepth([1, [2, [3, [4]], 5]], 2);
console.log(flattenDepth); // => [1, 2, 3, [4], 5]

const fromPairs = _.fromPairs([['a', 1], ['b', 2]]);
console.log(fromPairs); // => { 'a': 1, 'b': 2 }

const head = _.head([1, 2, 3]);
console.log(head); // => 1

const indexOf = _.indexOf([1, 2, 1, 2], 2);
console.log(indexOf); // => 1

const initial = _.initial([1, 2, 3]);
console.log(initial); // => [1, 2]

const intersection = _.intersection([2, 1], [2, 3]);
console.log(intersection); // => [2]

const intersectionBy = _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
console.log(intersectionBy); // => [2.1]

const intersectionWith = _.intersectionWith([2.1, 1.2], [2.3, 3.4], (a, b) => Math.floor(a) === Math.floor(b));
console.log(intersectionWith); // => [2.1]

const join = _.join(['a', 'b', 'c'], '~');
console.log(join); // => 'a~b~c'

const last = _.last([1, 2, 3]);
console.log(last); // => 3

const lastIndexOf = _.lastIndexOf([1, 2, 1, 2], 2);
console.log(lastIndexOf); // => 3

const nth = _.nth(['a', 'b', 'c', 'd'], 1);
console.log(nth); // => 'b'

const pull = _.pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c');
console.log(pull); // => ['b', 'b']

const pullAll = _.pullAll(['a', 'b', 'c', 'a', 'b', 'c'], ['a', 'c']);
console.log(pullAll); // => ['b', 'b']

const pullAllBy = _.pullAllBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(pullAllBy); // => [{ 'x': 2 }]

const pullAllWith = _.pullAllWith([{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }], [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(pullAllWith); // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

const pullAt = _.pullAt(['a', 'b', 'c', 'd'], [1, 3]);
console.log(pullAt); // => ['b', 'd']

const remove = _.remove([1, 2, 3, 4], n => n % 2 === 0);
console.log(remove); // => [2, 4]

const reverse = _.reverse([1, 2, 3]);
console.log(reverse); // => [3, 2, 1]

const slice = _.slice([1, 2, 3, 4], 2, 4);
console.log(slice); // => [3, 4]

const sortedIndex = _.sortedIndex([30, 50], 40);
console.log(sortedIndex); // => 1

const sortedIndexBy = _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, o => o.x);
console.log(sortedIndexBy); // => 0

const sortedIndexOf = _.sortedIndexOf([4, 5, 5, 5, 6], 5);
console.log(sortedIndexOf); // => 1

const sortedLastIndex = _.sortedLastIndex([4, 5, 5, 5, 6], 5);
console.log(sortedLastIndex); // => 4

const sortedLastIndexBy = _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, o => o.x);
console.log(sortedLastIndexBy); // => 1

const sortedLastIndexOf = _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
console.log(sortedLastIndexOf); // => 3

const sortedUniq = _.sortedUniq([1, 1, 2]);
console.log(sortedUniq); // => [1, 2]

const sortedUniqBy = _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
console.log(sortedUniqBy); // => [1.1, 2.3]

const tail = _.tail([1, 2, 3]);
console.log(tail); // => [2, 3]

const take = _.take([1, 2, 3]);
console.log(take); // => [1]

const takeRight = _.takeRight([1, 2, 3]);
console.log(takeRight); // => [3]

const takeRightWhile = _.takeRightWhile([1, 2, 3], n => n > 1);
console.log(takeRightWhile); // => [2, 3]

const takeWhile = _.takeWhile([1, 2, 3], n => n < 3);
console.log(takeWhile); // => [1, 2]

const union = _.union([2], [1, 2]);
console.log(union); // => [2, 1]

const unionBy = _.unionBy([2.1], [1.2, 2.3], Math.floor);
console.log(unionBy); // => [2.1, 1.2]

const unionWith = _.unionWith([2.1], [1.2, 2.3], (a, b) => Math.floor(a) === Math.floor(b));
console.log(unionWith); // => [2.1, 1.2]

const uniq = _.uniq([2, 1, 2]);
console.log(uniq); // => [2, 1]

const uniqBy = _.uniqBy([2.1, 1.2, 2.3], Math.floor);
console.log(uniqBy); // => [2.1, 1.2]

const uniqWith = _.uniqWith([2.1, 1.2, 2.3], (a, b) => Math.floor(a) === Math.floor(b));
console.log(uniqWith); // => [2.1, 1.2]

const unzip = _.unzip([['a', 1, true], ['b', 2, false]]);
console.log(unzip); // => [['a', 'b'], [1, 2], [true, false]]

const unzipWith = _.unzipWith([[1, 10, 100], [2, 20, 200]], (...arrays) => _.sum(arrays));
console.log(unzipWith); // => [3, 30, 300]

const without = _.without([2, 1, 2, 3], 1, 2);
console.log(without); // => [3]

const xor = _.xor([2, 1], [2, 3]);
console.log(xor); // => [1, 3]

const xorBy = _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
console.log(xorBy); // => [1.2, 3.4]

const xorWith = _.xorWith([2.1, 1.2], [2.3, 3.4], (a, b) => Math.floor(a) === Math.floor(b));
console.log(xorWith); // => [1.2, 3.4]

const zip = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log(zip); // => [['a', 1, true], ['b', 2, false]]

const zipObject = _.zipObject(['a', 'b'], [1, 2]);
console.log(zipObject); // => { 'a': 1, 'b': 2 }

const zipObjectDeep = _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
console.log(zipObjectDeep); // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }

const zipWith = _.zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
console.log(zipWith); // => [111, 222]


// Collection

const countBy = _.countBy([6.1, 4.2, 6.3], Math.floor);
console.log(countBy); // => { '4': 1, '6': 2 }

const each = _.each([1, 2], value => console.log(value));

const eachRight = _.eachRight([1, 2], value => console.log(value));

const every = _.every([true, 1, null, 'yes'], Boolean);
console.log(every); // => false

const filter = _.filter([4, 5, 6], n => n % 2 == 0);
console.log(filter); // => [4, 6]

const find = _.find([4, 5, 6], n => n % 2 == 0);
console.log(find); // => 4

const findLast = _.findLast([4, 5, 6], n => n % 2 == 0);
console.log(findLast); // => 6

const flatMap = _.flatMap([1, 2], n => [n, n]);
console.log(flatMap); // => [1, 1, 2, 2]

const flatMapDeep = _.flatMapDeep([1, 2], n => [[n, n]]);
console.log(flatMapDeep); // => [1, 1, 2, 2]

const flatMapDepth = _.flatMapDepth([1, 2], (n) => [[[n, n]]], 2);
console.log(flatMapDepth); // => [1, 1, 2, 2]

const forEach = _.forEach([1, 2], value => console.log(value));

const forEachRight = _.forEachRight([1, 2], value => console.log(value));

const groupBy = _.groupBy([6.1, 4.2, 6.3], Math.floor);
console.log(groupBy); // => { '4': [4.2], '6': [6.1, 6.3] }

const includes = _.includes([1, 2, 3], 1);
console.log(includes); // => true

const invokeMap = _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
console.log(invokeMap); // => [[1, 5, 7], [1, 2, 3]]

const keyBy = _.keyBy([{ 'dir': 'left', 'code': 97 }, { 'dir': 'right', 'code': 100 }], object => String.fromCharCode(object.code));
console.log(keyBy); // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

const map = _.map([4, 8], n => n * n);
console.log(map); // => [16, 64]

const orderBy = _.orderBy(['a', 'b', 'c'], ['c', 'a'], ['desc', 'asc']);
console.log(orderBy); // => ['c', 'a', 'b']

const partition = _.partition([1, 2, 3], n => n % 2);
console.log(partition); // => [[1, 3], [2]]

const reduce = _.reduce([1, 2], (sum, n) => sum + n, 0);
console.log(reduce); // => 3

const reduceRight = _.reduceRight([1, 2], (sum, n) => sum + n, 0);
console.log(reduceRight); // => 3

const reject = _.reject([4, 5, 6], n => n % 2 == 0);
console.log(reject); // => [5]

const sample = _.sample([1, 2, 3, 4]);
console.log(sample); // => 2

const sampleSize = _.sampleSize([1, 2, 3, 4], 2);
console.log(sampleSize); // => [3, 1]

const shuffle = _.shuffle([1, 2, 3, 4]);
console.log(shuffle); // => [4, 1, 3, 2]

const size = _.size([1, 2, 3]);
console.log(size); // => 3

const some = _.some([null, 0, 'yes', false], Boolean);
console.log(some); // => true

const sortBy = _.sortBy([1, 2, 3], n => Math.sin(n));
console.log(sortBy); // => [3, 1, 2]


// Date

const now = _.now();
console.log(now); // => 1490719810000


// Function

const after = _.after(2, () => console.log('hello'));
after();

const ary = _.ary(Math.max, 1);
console.log(ary(1, 2, 3)); // => 1

const before = _.before(2, () => console.log('hello'));
before();

const bind = _.bind(console.log, console, 'hello');
bind(); // => 'hello'

const bindKey = _.bindKey(console, 'log', 'hello');
bindKey(); // => 'hello'

const curry = _.curry((a, b, c) => a + b + c);
console.log(curry(1)(2)(3)); // => 6

const curryRight = _.curryRight((a, b, c) => a + b + c);
console.log(curryRight(3)(2)(1)); // => 6

const debounce = _.debounce(() => console.log('hello'), 100);
debounce();

const defer = _.defer(() => console.log('hello'));
defer();

const delay = _.delay(() => console.log('hello'), 100);
delay();

const flip = _.flip((a, b, c) => [a, b, c]);
console.log(flip(1, 2, 3)); // => [2, 1, 3]

const memoize = _.memoize((a, b) => a + b);
console.log(memoize(1, 2)); // => 3

const negate = _.negate(n => n > 0);
console.log(negate(1)); // => false

const once = _.once(() => console.log('hello'));
once();

const overArgs = _.overArgs((x, y) => [x, y], [n => n + 1, n => n + 2]);
console.log(overArgs(1, 2)); // => [2, 4]

const partial = _.partial((a, b, c) => a + b + c, 1, 2);
console.log(partial(3)); // => 6

const partialRight = _.partialRight((a, b, c) => a + b + c, 1, 2);
console.log(partialRight(3)); // => 6

const rearg = _.rearg((a, b, c) => [a, b, c], [2, 0, 1]);
console.log(rearg(1, 2, 3)); // => [3, 1, 2]

const rest = _.rest((a, b, ...c) => [a, b, c]);
console.log(rest(1, 2, 3, 4)); // => [1, 2, [3, 4]]

const spread = _.spread((a, b, c) => a + b + c);
console.log(spread([1, 2, 3])); // => 6

const throttle = _.throttle(() => console.log('hello'), 100);
throttle();

const unary = _.unary(n => n + 1);
console.log(unary(1, 2)); // => 2

const wrap = _.wrap(n => n + 1, n => n * 2);
console.log(wrap(1)); // => 4


// Lang

const castArray = _.castArray(1);
console.log(castArray); // => [1]

const clone = _.clone({ 'a': 1 });
console.log(clone); // => { 'a': 1 }

const cloneDeep = _.cloneDeep({ 'a': 1 });
console.log(cloneDeep); // => { 'a': 1 }

const cloneDeepWith = _.cloneDeepWith({ 'a': 1 }, value => value === 1 ? 2 : value);
console.log(cloneDeepWith); // => { 'a': 2 }

const cloneWith = _.cloneWith({ 'a': 1 }, value => value === 1 ? 2 : value);
console.log(cloneWith); // => { 'a': 2 }

const conformsTo = _.conformsTo({ 'a': 1 }, { 'a': n => n === 1 });
console.log(conformsTo); // => true

const eq = _.eq(1, 1);
console.log(eq); // => true

const gt = _.gt(3, 1);
console.log(gt); // => true

const gte = _.gte(3, 3);
console.log(gte); // => true

const isArguments = _.isArguments(() => {});
console.log(isArguments); // => false

const isArray = _.isArray([1, 2, 3]);
console.log(isArray); // => true

const isArrayBuffer = _.isArrayBuffer(new ArrayBuffer(2));
console.log(isArrayBuffer); // => true

const isArrayLike = _.isArrayLike([1, 2, 3]);
console.log(isArrayLike); // => true

const isArrayLikeObject = _.isArrayLikeObject([1, 2, 3]);
console.log(isArrayLikeObject); // => true

const isBoolean = _.isBoolean(false);
console.log(isBoolean); // => true

const isBuffer = _.isBuffer(new Buffer(2));
console.log(isBuffer); // => true

const isDate = _.isDate(new Date);
console.log(isDate); // => true

const isElement = _.isElement(document.body);
console.log(isElement); // => true

const isEmpty = _.isEmpty({});
console.log(isEmpty); // => true

const isEqual = _.isEqual({ 'a': 1 }, { 'a': 1 });
console.log(isEqual); // => true

const isEqualWith = _.isEqualWith({ 'a': 1 }, { 'a': 1 }, (a, b) => a === b);
console.log(isEqualWith); // => true

const isError = _.isError(new Error);
console.log(isError); // => true

const isFinite = _.isFinite(1);
console.log(isFinite); // => true

const isFunction = _.isFunction(() => {});
console.log(isFunction); // => true

const isInteger = _.isInteger(1);
console.log(isInteger); // => true

const isLength = _.isLength(3);
console.log(isLength); // => true

const isMap = _.isMap(new Map);
console.log(isMap); // => true

const isMatch = _.isMatch({ 'a': 1 }, { 'a': 1 });
console.log(isMatch); // => true

const isMatchWith = _.isMatchWith({ 'a': 1 }, { 'a': 1 }, (a, b) => a === b);
console.log(isMatchWith); // => true

const isNaN = _.isNaN(NaN);
console.log(isNaN); // => true

const isNative = _.isNative(Array.prototype.push);
console.log(isNative); // => true

const isNil = _.isNil(null);
console.log(isNil); // => true

const isNull = _.isNull(null);
console.log(isNull); // => true

const isNumber = _.isNumber(1);
console.log(isNumber); // => true

const isObject = _.isObject({});
console.log(isObject); // => true

const isObjectLike = _.isObjectLike({});
console.log(isObjectLike); // => true

const isPlainObject = _.isPlainObject({});
console.log(isPlainObject); // => true

const isRegExp = _.isRegExp(/abc/);
console.log(isRegExp); // => true

const isSafeInteger = _.isSafeInteger(1);
console.log(isSafeInteger); // => true

const isSet = _.isSet(new Set);
console.log(isSet); // => true

const isString = _.isString('abc');
console.log(isString); // => true

const isSymbol = _.isSymbol(Symbol.iterator);
console.log(isSymbol); // => true

const isTypedArray = _.isTypedArray(new Uint8Array);
console.log(isTypedArray); // => true

const isUndefined = _.isUndefined(undefined);
console.log(isUndefined); // => true

const isWeakMap = _.isWeakMap(new WeakMap);
console.log(isWeakMap); // => true

const isWeakSet = _.isWeakSet(new WeakSet);
console.log(isWeakSet); // => true

const lt = _.lt(1, 3);
console.log(lt); // => true

const lte = _.lte(1, 1);
console.log(lte); // => true

const toArray = _.toArray({ 'a': 1, 'b': 2 });
console.log(toArray); // => [1, 2]

const toFinite = _.toFinite(3.2);
console.log(toFinite); // => 3.2

const toInteger = _.toInteger(3.2);
console.log(toInteger); // => 3

const toLength = _.toLength(3.2);
console.log(toLength); // => 3

const toNumber = _.toNumber('3.2');
console.log(toNumber); // => 3.2

const toPlainObject = _.toPlainObject([1, 2, 3]);
console.log(toPlainObject); // => { '0': 1, '1': 2, '2': 3 }

const toSafeInteger = _.toSafeInteger(3.2);
console.log(toSafeInteger); // => 3

const toString = _.toString(null);
console.log(toString); // => 'null'


// Math

const add = _.add(6, 4);
console.log(add); // => 10

const ceil = _.ceil(4.006);
console.log(ceil); // => 5

const divide = _.divide(6, 4);
console.log(divide); // => 1.5

const floor = _.floor(4.006);
console.log(floor); // => 4

const max = _.max([4, 2, 8, 6]);
console.log(max); // => 8

const maxBy = _.maxBy([{ 'n': 1 }, { 'n': 2 }], o => o.n);
console.log(maxBy); // => { 'n': 2 }

const mean = _.mean([4, 2, 8, 6]);
console.log(mean); // => 5

const meanBy = _.meanBy([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], o => o.n);
console.log(meanBy); // => 5

const min = _.min([4, 2, 8, 6]);
console.log(min); // => 2

const minBy = _.minBy([{ 'n': 1 }, { 'n': 2 }], o => o.n);
console.log(minBy); // => { 'n': 1 }

const multiply = _.multiply(6, 4);
console.log(multiply); // => 24

const round = _.round(4.006);
console.log(round); // => 4

const subtract = _.subtract(6, 4);
console.log(subtract); // => 2

const sum = _.sum([4, 2, 8, 6]);
console.log(sum); // => 20

const sumBy = _.sumBy([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], o => o.n);
console.log(sumBy); // => 20


// Number

const clamp = _.clamp(-10, -5, 5);
console.log(clamp); // => -5

const inRange = _.inRange(3, 2, 4);
console.log(inRange); // => true

const random = _.random(0, 5);
console.log(random); // => 4


// Object

const assign = _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
console.log(assign); // => { 'a': 1, 'b': 2, 'c': 3 }

const assignIn = _.assignIn({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
console.log(assignIn); // => { 'a': 1, 'b': 2, 'c': 3 }

const assignInWith = _.assignInWith({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }, (a, b) => a + b);
console.log(assignInWith); // => { 'a': 1, 'b': 2, 'c': 3 }

const assignWith = _.assignWith({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }, (a, b) => a + b);
console.log(assignWith); // => { 'a': 1, 'b': 2, 'c': 3 }

const at = _.at({ 'a': [{ 'b': { 'c': 3 } }, 4] }, ['a[0].b.c', 'a[1]']);
console.log(at); // => [3, 4]

const create = _.create({ 'a': 1 }, { 'b': 2 });
console.log(create); // => { 'a': 1, 'b': 2 }

const defaults = _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
console.log(defaults); // => { 'a': 1, 'b': 2 }

const defaultsDeep = _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
console.log(defaultsDeep); // => { 'a': { 'b': 2, 'c': 3 } }

const entries = _.entries({ 'a': 1, 'b': 2 });
console.log(entries); // => [['a', 1], ['b', 2]]

const entriesIn = _.entriesIn({ 'a': 1, 'b': 2 });
console.log(entriesIn); // => [['a', 1], ['b', 2]]

const extend = _.extend({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
console.log(extend); // => { 'a': 1, 'b': 2, 'c': 3 }

const extendWith = _.extendWith({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }, (a, b) => a + b);
console.log(extendWith); // => { 'a': 1, 'b': 2, 'c': 3 }

const findKey = _.findKey({ 'a': 1, 'b': 2, 'c': 3 }, o => o === 2);
console.log(findKey); // => 'b'

const findLastKey = _.findLastKey({ 'a': 1, 'b': 2, 'c': 3 }, o => o === 2);
console.log(findLastKey); // => 'b'

const forIn = _.forIn({ 'a': 1, 'b': 2 }, (value, key) => console.log(key));
// => Logs 'a' then 'b'.

const forInRight = _.forInRight({ 'a': 1, 'b': 2 }, (value, key) => console.log(key));
// => Logs 'b' then 'a'.

const forOwn = _.forOwn({ 'a': 1, 'b': 2 }, (value, key) => console.log(key));
// => Logs 'a' then 'b'.

const forOwnRight = _.forOwnRight({ 'a': 1, 'b': 2 }, (value, key) => console.log(key));
// => Logs 'b' then 'a'.

const functions = _.functions(_);
console.log(functions); // => ['add', 'after', 'ary', 'assign', ...]

const functionsIn = _.functionsIn(_);
console.log(functionsIn); // => ['add', 'after', 'ary', 'assign', ...]

const get = _.get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c');
console.log(get); // => 3

const has = _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
console.log(has); // => true

const hasIn = _.hasIn({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
console.log(hasIn); // => true

const invert = _.invert({ 'a': 1, 'b': 2, 'c': 1 });
console.log(invert); // => { '1': 'c', '2': 'b' }

const invertBy = _.invertBy({ 'a': 1, 'b': 2, 'c': 1 });
console.log(invertBy); // => { '1': ['a', 'c'], '2': ['b'] }

const invoke = _.invoke({ 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }, 'a[0].b.c.slice', 1, 3);
console.log(invoke); // => [2, 3]

const keys = _.keys({ 'a': 1, 'b': 2 });
console.log(keys); // => ['a', 'b']

const keysIn = _.keysIn({ 'a': 1, 'b': 2 });
console.log(keysIn); // => ['a', 'b']

const mapKeys = _.mapKeys({ 'a': 1, 'b': 2 }, (value, key) => key + value);
console.log(mapKeys); // => { 'a1': 1, 'b2': 2 }

const mapValues = _.mapValues({ 'a': 1, 'b': 2 }, (value, key) => key + value);
console.log(mapValues); // => { 'a': 'a1', 'b': 'b2' }

const merge = _.merge({ 'a': [{ 'b': 1 }, { 'd': 2 }] }, { 'a': [{ 'c': 3 }, { 'e': 4 }] });
console.log(merge); // => { 'a': [{ 'b': 1, 'c': 3 }, { 'd': 2, 'e': 4 }] }

const mergeWith = _.mergeWith({ 'a': [{ 'b': 1 }, { 'd': 2 }] }, { 'a': [{ 'c': 3 }, { 'e': 4 }] }, (a, b) => a + b);
console.log(mergeWith); // => { 'a': [{ 'b': 1, 'c': 3 }, { 'd': 2, 'e': 4 }] }

const omit = _.omit({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']);
console.log(omit); // => { 'b': '2' }

const omitBy = _.omitBy({ 'a': 1, 'b': '2', 'c': 3 }, _.isNumber);
console.log(omitBy); // => { 'b': '2' }

const pick = _.pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']);
console.log(pick); // => { 'a': 1, 'c': 3 }

const pickBy = _.pickBy({ 'a': 1, 'b': '2', 'c': 3 }, _.isNumber);
console.log(pickBy); // => { 'a': 1, 'c': 3 }

const result = _.result({ 'a': { 'b': () => 2 } }, 'a.b');
console.log(result); // => 2

const set = _.set({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c', 4);
console.log(set); // => { 'a': [{ 'b': { 'c': 4 } }] }

const setWith = _.setWith({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c', 4, Object);
console.log(setWith); // => { 'a': [{ 'b': { 'c': 4 } }] }

const toPairs = _.toPairs({ 'a': 1, 'b': 2 });
console.log(toPairs); // => [['a', 1], ['b', 2]]

const toPairsIn = _.toPairsIn({ 'a': 1, 'b': 2 });
console.log(toPairsIn); // => [['a', 1], ['b', 2]]

const transform = _.transform({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
    (result[value] || (result[value] = [])).push(key);
    }, {});
console.log(transform); // => { '1': ['a', 'c'], '2': ['b'] }

const unset = _.unset({ 'a': [{ 'b': { 'c': 7 } }] }, 'a[0].b.c');
console.log(unset); // => true

const update = _.update({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c', n => n * n);
console.log(update); // => { 'a': [{ 'b': { 'c': 9 } }] }

const updateWith = _.updateWith({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c', n => n * n, Object);
console.log(updateWith); // => { 'a': [{ 'b': { 'c': 9 } }] }

const values = _.values({ 'a': 1, 'b': 2, 'c': 3 });
console.log(values); // => [1, 2, 3]

const valuesIn = _.valuesIn({ 'a': 1, 'b': 2, 'c': 3 });
console.log(valuesIn); // => [1, 2, 3]


// Seq

const chain = _.chain([1, 2, 3, 4])
    .filter(n => n % 2 == 0)
    .map(n => n * n)
    .value();
console.log(chain); // => [4, 16]

const tap = _.tap([1, 2, 3], array => console.log(array));
console.log(tap); // => [1, 2, 3]

const thru = _.thru([1, 2, 3], array => array.slice(1, 2));
console.log(thru); // => [2]

const prototypeIterator = _.prototype[Symbol.iterator];
console.log(prototypeIterator); // => [Function: wrapperValue]

const prototypeAt = _.prototype.at;
console.log(prototypeAt); // => [Function: wrapperAt]

const prototypeChain = _.prototype.chain;
console.log(prototypeChain); // => [Function: wrapperChain]

const prototypeCommit = _.prototype.commit;
console.log(prototypeCommit); // => [Function: wrapperCommit]

const prototypeNext = _.prototype.next;
console.log(prototypeNext); // => [Function: wrapperNext]

const prototypePlant = _.prototype.plant;
console.log(prototypePlant); // => [Function: wrapperPlant]

const prototypeReverse = _.prototype.reverse;
console.log(prototypeReverse); // => [Function: wrapperReverse]

const prototypeToJSON = _.prototype.toJSON;
console.log(prototypeToJSON); // => [Function: wrapperValue]

const prototypeValue = _.prototype.value;
console.log(prototypeValue); // => [Function: wrapperValue]

const prototypeValueOf = _.prototype.valueOf;
console.log(prototypeValueOf); // => [Function: wrapperValue]


// String

const camelCase = _.camelCase('--foo-bar--');
console.log(camelCase); // => 'fooBar'

const capitalize = _.capitalize('FRED');
console.log(capitalize); // => 'Fred'

const deburr = _.deburr('déjà vu');
console.log(deburr); // => 'deja vu'

const endsWith = _.endsWith('abc', 'c');
console.log(endsWith); // => true

const escape = _.escape('fred, barney, & pebbles');
console.log(escape); // => 'fred, barney, & pebbles'

const escapeRegExp = _.escapeRegExp('[lodash](https://lodash.com/)');
console.log(escapeRegExp); // => '\[lodash\]\(https://lodash\.com/\)'

const kebabCase = _.kebabCase('Foo Bar');
console.log(kebabCase); // => 'foo-bar'

const lowerCase = _.lowerCase('--Foo-Bar--');
console.log(lowerCase); // => 'foo bar'

const lowerFirst = _.lowerFirst('Fred');
console.log(lowerFirst); // => 'fred'

const pad = _.pad('abc', 8);
console.log(pad); // => '  abc   '

const padEnd = _.padEnd('abc', 6, '_-');
console.log(padEnd); // => 'abc_-_'

const padStart = _.padStart('abc', 6, '_-');
console.log(padStart); // => '_-abc'

const parseInt = _.parseInt('08');
console.log(parseInt); // => 8

const repeat = _.repeat('*', 3);
console.log(repeat); // => '***'

const replace = _.replace('Hi Fred', 'Fred', 'Barney');
console.log(replace); // => 'Hi Barney'

const snakeCase = _.snakeCase('Foo Bar');
console.log(snakeCase); // => 'foo_bar'

const split = _.split('a-b-c', '-', 2);
console.log(split); // => ['a', 'b']

const startCase = _.startCase('--foo-bar--');
console.log(startCase); // => 'Foo Bar'

const startsWith = _.startsWith('abc', 'a');
console.log(startsWith); // => true

const template = _.template('hello <%= user %>!');
console.log(template({ 'user': 'fred' })); // => 'hello fred!'

const toLower = _.toLower('--Foo-Bar--');
console.log(toLower); // => '--foo-bar--'

const toUpper = _.toUpper('--foo-bar--');
console.log(toUpper); // => '--FOO-BAR--'

const trim = _.trim('  abc  ');
console.log(trim); // => 'abc'

const trimEnd = _.trimEnd('  abc  ');
console.log(trimEnd); // => '  abc'

const trimStart = _.trimStart('  abc  ');
console.log(trimStart); // => 'abc  '

const truncate = _.truncate('hi-diddly-ho there, neighborino');
console.log(truncate); // => 'hi-diddly-ho there, neighbo...'

const unescape = _.unescape('fred, barney, &amp; pebbles');
console.log(unescape); // => 'fred, barney, & pebbles'

const upperCase = _.upperCase('--foo-bar--');
console.log(upperCase); // => 'FOO BAR'

const upperFirst = _.upperFirst('fred');
console.log(upperFirst); // => 'Fred'

const words = _.words('fred, barney, & pebbles');
console.log(words); // => ['fred', 'barney', 'pebbles']


// Util

const attempt = _.attempt(function() { return _.divide(1, 0); });
console.log(attempt); // => [Error: Divide by zero.]

const bindAll = _.bindAll(object, ['increment', 'square']);
console.log(bindAll); // => { 'increment': [Function: increment], 'square': [Function: square] }

const cond = _.cond([
    [_.matches({ 'a': 1 }),           _.constant('matches A')],
    [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
    [_.stubTrue,                      _.constant('no match')]
]);
console.log(cond({ 'a': 1, 'b': 2 })); // => 'matches A'

const constant = _.constant(1);
console.log(constant); // => 1

const defaultTo = _.defaultTo(1, 10);
console.log(defaultTo); // => 1

const flow = _.flow([function(n) { return n * 3; }, function(n) { return n + 1; }]);
console.log(flow(1)); // => 4

const flowRight = _.flowRight([function(n) { return n * 3; }, function(n) { return n + 1; }]);
console.log(flowRight(1)); // => 4

const identity = _.identity(1);
console.log(identity); // => 1

const iteratee = _.iteratee({ 'a': 1 });
console.log(iteratee); // => [Function: matches]

const matches = _.matches({ 'a': 1, 'b': 2 });
console.log(matches({ 'a': 1, 'b': 2, 'c': 3 })); // => true

const matchesProperty = _.matchesProperty('a', 1);
console.log(matchesProperty({ 'a': 1, 'b': 2 })); // => true

const method = _.method('a.b');
console.log(method({ 'a': { 'b': _.constant(2) } })); // => 2

const methodOf = _.methodOf({ 'a': { 'b': _.constant(2) } }, 'a.b');
console.log(methodOf()); // => 2

const mixin = _.mixin({ 'foo': _.constant('foo') });
console.log(mixin.foo()); // => 'foo'

const noConflict = _.noConflict();
console.log(noConflict); // => undefined

const noop = _.noop();
console.log(noop); // => undefined

const nthArg = _.nthArg(1);
console.log(nthArg('a', 'b', 'c', 'd')); // => 'b'

const over = _.over([Math.max, Math.min]);
console.log(over(1, 2, 3, 4)); // => [4, 1]

const overEvery = _.overEvery([Boolean, isFinite]);
console.log(overEvery('1')); // => true

const overSome = _.overSome([Boolean, isFinite]);
console.log(overSome('1')); // => true

const property = _.property('a');
console.log(property({ 'a': 1 })); // => 1

const propertyOf = _.propertyOf({ 'a': { 'b': 2 } });
console.log(propertyOf({ 'a': { 'b': 2 } })); // => 2

const range = _.range(4);
console.log(range); // => [0, 1, 2, 3]

const rangeRight = _.rangeRight(-4);
console.log(rangeRight); // => [0, -1, -2, -3]

const runInContext = _.runInContext();
console.log(runInContext); // => [Function: runInContext]

const stubArray = _.stubArray();
console.log(stubArray); // => []

const stubFalse = _.stubFalse();
console.log(stubFalse); // => false

const stubObject = _.stubObject();
console.log(stubObject); // => {}

const stubString = _.stubString();
console.log(stubString); // => ''

const stubTrue = _.stubTrue();
console.log(stubTrue); // => true

const times = _.times(3, String);
console.log(times); // => ['0', '1', '2']

const toPath = _.toPath('a.b.c');
console.log(toPath); // => ['a', 'b', 'c']

const uniqueId = _.uniqueId('contact_');
console.log(uniqueId); // => 'contact_104'


// Properties

const VERSION = _.VERSION;
console.log(VERSION); // => '4.17.4'

const templateSettings = _.templateSettings;
console.log(templateSettings); // => { 'escape': /<%-([\s\S]+?)%>/g, 'evaluate': /<%([\s\S]+?)%>/g, 'interpolate': /<%=([\s\S]+?)%>/g, 'variable': '', 'imports': { '_': { 'escape': [Function: escape] } } }

const templateSettingsEscape = _.templateSettings.escape;
console.log(templateSettingsEscape); // => /<%-([\s\S]+?)%>/g

const templateSettingsEvaluate = _.templateSettings.evaluate;
console.log(templateSettingsEvaluate); // => /<%([\s\S]+?)%>/g

const templateSettingsImports = _.templateSettings.imports;
console.log(templateSettingsImports); // => { '_': { 'escape': [Function: escape] } }

const templateSettingsInterpolate = _.templateSettings.interpolate;
console.log(templateSettingsInterpolate); // => /<%=([\s\S]+?)%>/g

const templateSettingsVariable = _.templateSettings.variable;
console.log(templateSettingsVariable); // => ''
