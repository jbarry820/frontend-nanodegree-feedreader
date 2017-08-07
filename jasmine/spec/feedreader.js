/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         * We get the error "Expected 0 not to be 0."
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URL is defined and the URL is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var allFeedsUrl = allFeeds[i].url;
                expect(allFeedsUrl).toBeDefined();
                expect(allFeedsUrl.length).not.toBe(0);
            }
         });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name is defined and the name is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var allFeedsName = allFeeds[i].name;
                expect(allFeedsName).toBeDefined();
                expect(allFeedsName.length).not.toBe(0);
            }
         });
    });


    /* This is a new test suite named "The menu" */
    describe('The Menu', function() {
         /* This is a test that ensures the menu element is
         * hidden by default. Note that we are looking through
         * the boddy to find the 'menu-hidden class'
         */

        it('element is hidden by default', function() {
            var hideMenu = $('body').hasClass('menu-hidden');
            expect(hideMenu).toEqual(true);
        });

         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu changes visibility when menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* This is a test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Note that loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        it('loadFeed function is called', function() {
            var articles = $('.feed .entry-link .entry');
            expect(articles.length).toBeGreaterThan(0);

        });
     });

    /* This is a test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Note that loadFeed() is asynchronous.
         */
         var oldFeed;
         var currentFeed;

         beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function(){
                oldFeed = $('.feed').html();
                loadFeed(1, done);
            });

         });

        it('ensures content actually changes whne loadFeed() is run', function() {
            currentFeed = $('.feed').html();
            expect(oldFeed).not.toBe(currentFeed);
        });

     });


}());
