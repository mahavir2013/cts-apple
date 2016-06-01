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

	app.b.doWork();

	var mod = {
		doWork : function() {
			console.log('im A');
		}
	};

	app.a = mod;

})();