/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Complex64Array = require( '@stdlib/array-complex64' );
var EPS = require( '@stdlib/constants-float32-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var scasum = require( './../lib/ndarray.js' );


// FUNCTIONS //

/**
* Tests for element-wise approximate equality.
*
* @private
* @param {Object} t - test object
* @param {number} actual - actual value
* @param {number} expected - expected value
* @param {number} rtol - relative tolerance
*/
function isApprox( t, actual, expected, rtol ) {
	var delta;
	var tol;

	if ( actual === expected ) {
		t.strictEqual( actual, expected, 'returns expected value' );
	} else {
		delta = abs( actual - expected );
		tol = rtol * EPS * abs( expected );
		t.ok( delta <= tol, 'within tolerance. actual: '+actual+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scasum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( scasum.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2, // 4
		2.0,
		3.0
	]);
	expected = 1.6;

	actual = scasum( 4, x, 1, 0 );
	isApprox( t, actual, expected, 2.0 );

	x = new Complex64Array([
		0.1,  // 1
		0.1,  // 1
		-0.6, // 2
		0.1,  // 2
		0.1,  // 3
		-0.3, // 3
		7.0,
		8.0
	]);
	expected = 1.3;

	actual = scasum( 3, x, 1, 0 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0
	]);
	expected = 0.0;

	actual = scasum( 0, x, 1, 0 );
	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0
	]);
	expected = 0.0;

	actual = scasum( -1, x, 1, 0 );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		0.3, // 1
		0.1, // 1
		5.0,
		8.0,
		0.5, // 2
		0.0, // 2
		6.0,
		9.0,
		0.0, // 3
		0.5, // 3
		8.0,
		3.0,
		0.0, // 4
		0.2, // 4
		9.0,
		4.0
	]);
	expected = 1.6;

	actual = scasum( 4, x, 2, 0 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		0.3, // 4
		0.1, // 4
		5.0, // 3
		8.0, // 3
		0.5, // 2
		0.0, // 2
		6.0, // 1
		9.0, // 1
		0.0,
		0.5,
		8.0,
		3.0,
		0.0,
		0.2,
		9.0,
		4.0
	]);
	expected = 28.9;

	actual = scasum( 4, x, -1, 3 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0, // 1
		4.0, // 1
		5.0, // 2
		6.0, // 2
		7.0, // 3
		8.0, // 3
		9.0,
		10.0
	]);
	expected = 33.0;

	actual = scasum( 3, x, 1, 1 );
	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying complex access patterns', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		0.3, // 4
		0.1, // 4
		5.0,
		8.0,
		0.5, // 3
		0.0, // 3
		6.0,
		9.0,
		0.0, // 2
		0.5, // 2
		8.0,
		3.0,
		0.0, // 1
		0.2, // 1
		9.0,
		4.0
	]);
	expected = 1.6;

	actual = scasum( 4, x, -2, 6 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});
