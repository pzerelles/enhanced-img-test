function readPackage(pkg) {
	if (pkg.name === '@sveltejs/enhanced-img') {
		pkg.dependencies['vite-imagetools'] = 'npm:@pz-mxu/vite-imagetools@^6.2.10';
	}
	return pkg;
}

module.exports = {
	hooks: {
		readPackage
	}
};
