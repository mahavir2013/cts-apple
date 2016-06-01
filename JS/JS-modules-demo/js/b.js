/**
 * http://usejsdoc.org/
 */

// var mod = {
// doWork : function() {
// console.log('im A');
// }
// };

// way-1
(function() {

	var mod = {
		doWork : function() {
			console.log('im B');
		}
	};
	
	app.b = mod;
	
})();