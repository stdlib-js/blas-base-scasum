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

var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @returns {number} result
*
* @example
* var Complex64Array = require( '@stdlib/array-complex64' );
*
* var x = new Complex64Array( [ 5.0, -3.0, 6.0, 4.0 ] );
*
* var out = scasum( x.length, x, 1 );
* // returns 18.0
*/
function scasum( N, x, strideX ) {
	var ox = stride2offset( N, strideX );
	return ndarray( N, x, strideX, ox );
}


// EXPORTS //

module.exports = scasum;
