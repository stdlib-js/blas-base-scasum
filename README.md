<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# scasum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.



<section class="usage">

## Usage

```javascript
import scasum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-scasum@v0.2.1-esm/index.mjs';
```

#### scasum( N, x, strideX )

Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var x = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2 ] );

var out = scasum( 4, x, 1 );
// returns ~1.6
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to traverse every other value,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var out = scasum( 2, x, 2 );
// returns 7.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

// Initial array:
var x0 = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Compute the sum of absolute values:
var out = scasum( 2, x1, 1 );
// returns 18.0
```

#### scasum.ndarray( N, x, strideX, offset )

Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector using alternative indexing semantics.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var x = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2 ] );

var out = scasum.ndarray( 4, x, 1, 0 );
// returns ~1.6
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to start from the second index,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var x = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var out = scasum.ndarray( 2, x, 1, 1 );
// returns 18.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   `scasum()` corresponds to the [BLAS][blas] level 1 function [`scasum`][scasum].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import scasum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-scasum@v0.2.1-esm/index.mjs';

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex64', rand );
console.log( x.toString() );

// Compute the sum of the absolute values of real and imaginary components:
var out = scasum( x.length, x, 1 );
console.log( out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-scasum.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-scasum

[test-image]: https://github.com/stdlib-js/blas-base-scasum/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/blas-base-scasum/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-scasum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-scasum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-scasum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-scasum/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-scasum/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-scasum/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-scasum/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-scasum/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-scasum/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-scasum/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-scasum/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-scasum/main/LICENSE

[blas]: http://www.netlib.org/blas

[scasum]: https://www.netlib.org/lapack/explore-html/d5/d72/group__asum_ga89c76eef329f84ba9ed106b34fedab16.html#ga89c76eef329f84ba9ed106b34fedab16

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
