fis.match('/html/*.html', {
    release: 'distTeml/$0'
});

fis.match('/admin-html/*.html', {
    release: 'adminTeml/$0'
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js'),
    release: '$0'
});

fis.match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css'),
    release: '$0'
});

fis.match('/static/images/(*.{png,gif,jpg})', {
    //发布到/static/pic/xxx目录下
    release: '$0'
});