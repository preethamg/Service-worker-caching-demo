var _workerDemo = $.extend({
    statusText: $('#statueText'),

    IsOnline: function isOnline() {
        if (navigator.onLine) {
            return true;
        }
        else {
            return false;
        }
    },

    OnlineText:function onlineText(){
        $('#statueText').html('Online')
        $('#statueText').removeClass('offline');
        $('#statueText').addClass('online');
    },

    OfflineText:function offlineText(){
        $('#statueText').html('Offline')
        $('#statueText').removeClass('online');
        $('#statueText').addClass('offline');
    },

    CacheText:function cacheText(){
        $('.imgLoad').removeClass('displaynone');
    }
});

$(window).on('load', function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    }
    else {
        console.log('Service worker is not supported in your browser');
    }

    if (_workerDemo.IsOnline()) {
        _workerDemo.OnlineText();
    }
    else {
        _workerDemo.OfflineText();
        _workerDemo.CacheText();
    }
});

$(window).on('online', function () {
    console.log('online');
    _workerDemo.OnlineText();
})

$(window).on('offline', function () {
    console.log('offline');
    _workerDemo.OfflineText();
})