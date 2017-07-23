fis.match('/html/*.html', {
    release: 'distTeml/$0'
});

fis.match('/admin-html/*.html', {
    release: 'adminTeml/$0'
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js'),
    release: 'dist/$0'
});

fis.match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css'),
    release: 'dist/$0'
});