var keystone = require('keystone');

keystone.init({

	'name': 'test',
	'brand': 'test',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '9faafd3922f58430665a2b129364c10a14cdc89495db420b67d2a18db2352a9f91697cf495fd06345a7d4d6302133773be184f9baa28fb78a33a29945e9426b5',

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users'
});

keystone.start();
