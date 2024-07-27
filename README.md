<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# iterLucasSeq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates a [Lucas sequence][lucas-number].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [Lucas numbers][lucas-number] are the integer sequence

<!-- <equation class="equation" label="eq:lucas_sequence" align="center" raw="2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots" alt="Lucas sequence"> -->

```math
2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots
```

<!-- <div class="equation" align="center" data-raw-text="2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots" data-equation="eq:lucas_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/lucas/docs/img/equation_lucas_sequence.svg" alt="Lucas sequence">
    <br>
</div> -->

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:lucas_recurrence_relation" align="center" raw="L_n = \begin{cases}2 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} & \textrm{if}\ n > 1\end{cases}" alt="Lucas sequence recurrence relation"> -->

```math
L_n = \begin{cases}2 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} & \textrm{if}\ n > 1\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="L_n = \begin{cases}2 &amp; \textrm{if}\ n = 0\\1 &amp; \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} &amp; \textrm{if}\ n &gt; 1\end{cases}" data-equation="eq:lucas_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/lucas/docs/img/equation_lucas_recurrence_relation.svg" alt="Lucas sequence recurrence relation">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterLucasSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-lucas@esm/index.mjs';
```

#### iterLucasSeq( \[options] )

Returns an iterator which generates a [Lucas sequence][lucas-number].

```javascript
var it = iterLucasSeq();
// returns <Object>

var v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

v = it.next().value;
// returns 3

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `77`.

The returned iterator can only generate the first `77` [Lucas numbers][lucas-number], as larger [Lucas numbers][lucas-number] cannot be safely represented in [double-precision floating-point format][ieee754]. By default, the function returns an iterator which generates all `77` numbers. To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterLucasSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import iterLucasSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-lucas@esm/index.mjs';

// Create an iterator:
var it = iterLucasSeq();

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/lucas`][@stdlib/math/base/special/lucas]</span><span class="delimiter">: </span><span class="description">compute the nth Lucas number.</span>
-   <span class="package-name">[`@stdlib/math-iter/sequences/fibonacci`][@stdlib/math/iter/sequences/fibonacci]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Fibonacci sequence.</span>
-   <span class="package-name">[`@stdlib/math-iter/sequences/negalucas`][@stdlib/math/iter/sequences/negalucas]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a negaLucas sequence.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-sequences-lucas.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-sequences-lucas

[test-image]: https://github.com/stdlib-js/math-iter-sequences-lucas/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/math-iter-sequences-lucas/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-sequences-lucas/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-sequences-lucas?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-sequences-lucas.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-sequences-lucas/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-sequences-lucas/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-iter-sequences-lucas/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-iter-sequences-lucas/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-iter-sequences-lucas/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-iter-sequences-lucas/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-iter-sequences-lucas/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-iter-sequences-lucas/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-sequences-lucas/main/LICENSE

[lucas-number]: https://en.wikipedia.org/wiki/Lucas_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/lucas]: https://github.com/stdlib-js/math-base-special-lucas/tree/esm

[@stdlib/math/iter/sequences/fibonacci]: https://github.com/stdlib-js/math-iter-sequences-fibonacci/tree/esm

[@stdlib/math/iter/sequences/negalucas]: https://github.com/stdlib-js/math-iter-sequences-negalucas/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
