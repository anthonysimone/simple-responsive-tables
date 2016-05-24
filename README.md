#Simple Responsive Tables

##Installation
You'll need to install this similarly to how you would Foundation.

- Run `bower install --save urlhere`
- Add `paths.bowerDir + '/simple-responsive-tables/sass'` to the `includePaths` array in `gulpfile.js`. This gives you access to the mixin in your theme sass.
- Add `paths.bowerDir + '/ResponseKit/js/responseKit.js'` to the `scriptsSrc` array in `gulpfile.js`.


##Use

###The Sass
Simple Responsive Tables provides you with one jQuery plugin and one partial. Include the partial at the breakpoint you'd like the table to become responsive. It's probably easiest to include this the old styles of doing max-width instead of min-width, so you don't have to worry about trying to reset table behavior back to normal.

The mixin takes two selector parameters incase you need to use different selectors, `$responsive-table-selector` and `$legacy-ie-selector`.

```
your-favorite-breakpoint(small down) {
	@include simple-responsive-table();
}
```
You can also override the default variables for some simple styles on the labels.

###The JS
Simply call the plugin on any table you want to take the responsive behavior. The only option is a different class name if you'd like to use something aside from `responsive-table`.
```
var options = { responsiveTableClass: 'new-class-name-here' };
$('.my-favorite-table').responsiveTables();
```