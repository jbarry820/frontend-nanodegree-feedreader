$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('URL is defined and the URL is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var allFeedsUrl = allFeeds[i].url;
                expect(allFeedsUrl).toBeDefined();
                expect(allFeedsUrl.length).not.toBe(0);
            }
         });

        it('name is defined and the name is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var allFeedsName = allFeeds[i].name;
                expect(allFeedsName).toBeDefined();
                expect(allFeedsName.length).not.toBe(0);
            }
         });
    });

    describe('The Menu', function() {

        it('element is hidden by default', function() {
            var hideMenu = $('body').hasClass('menu-hidden');
            expect(hideMenu).toEqual(true);
        });

        it('menu changes visibility when menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        it('loadFeed function is called', function(done) {
            var articles = $('.entry');
            expect(articles.length).toBeGreaterThan(0);
            done();
        });
     });

    describe('New Feed Selection', function() {
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
