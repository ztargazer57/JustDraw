
document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.masonry-grid');

    var msnry = new Masonry(grid, {
        itemSelector: '.card',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 16
    });

    imagesLoaded(grid).on('progress', function () {
        msnry.layout();
    });
});
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

window.addEventListener("load", function () {
    const grid = document.querySelector('.masonry-grid');
    if (!grid) return;

    const msnry = new Masonry(grid, {
        itemSelector: '.card',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 16
    });

    imagesLoaded(grid).on('progress', function () {
        msnry.layout();
    });
});
