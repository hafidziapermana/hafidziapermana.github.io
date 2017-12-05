(function() {
  "use strict";

  var _hasOwnProperty = Object.prototype.hasOwnProperty;

  var linkActions = {
    'comments': function() {
      document.getElementById('comments').classList.toggle('hidden');
    }
  };

  var pushState = function(pathName) {
    history.pushState(
      {scrollX: window.pageXOffset, scrollY: window.pageYOffset},
      null,
      pathName
    );
    window.scrollTo(0, 0);
  };
  window.addEventListener('popstate', function(event) {
    var state = event.state || {};
    if (state.scrollX != null && state.scrollY != null) {
      window.scrollTo(event.state.scrollX, event.state.scrollY);
    }
  });

  // Restore pathname from 404 redirect;
  (function() {
    if (!history.replaceState) {
      return;
    }
    var ref = document.referrer;
    if (~ref.indexOf('//' + location.host + '/')) {
      var i = ref.indexOf('/', ref.indexOf('//'));
      history.replaceState({}, null, ref.slice(i));
    }
  })();

  document.addEventListener('click', function(event) {
    var link = closest(event.target, 'a');
    var href = (link) ? link.getAttribute('href') : null;
    if (href == null) {
      return;
    }
    if (href === '#') {
      event.preventDefault();
      return;
    }
    if (href.charAt(0) === '/') {
      event.preventDefault();
      var name = href.slice(1);
      if (_hasOwnProperty.call(linkActions, name)) {
        linkActions[name].call(link);
      } else {
        pushState(href);
      }
    }
  });

  (function(shortName) {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = 'http://' + shortName + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })('sstur');

  getScript('http://max.jotfor.ms/min/g=feedback2', function() {
    //'<a class="lightbox-22743331397455" style="cursor:pointer;color:blue;text-decoration:underline;">Contact</a>'
    var link = document.querySelector('#mylinks .contact');
    link.addEventListener('click', function(event) {
      event.preventDefault();
    });
    link.classList.add('lightbox-22743331397455');
    new JotformFeedback({
      formId: '22743331397455',
      base: 'http://jotform.me/',
      windowTitle: 'Contact',
      background: '#FFA500',
      fontColor: '#FFFFFF',
      type: 1,
      width: 510,
      height: 360
    });
  });

  function closest(element, nodeName) {
    while (element != null) {
      if (element.nodeName.toLowerCase() === nodeName) {
        return element;
      }
      element = element.parentNode;
    }
  }

  function getScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    var existing = document.getElementsByTagName('script')[0];
    existing.parentNode.insertBefore(script, existing);
    if (callback) {
      var done = false;
      script.onload = script.onreadystatechange = function() {
        if (!script.readyState || script.readyState in {loaded: 1, complete: 1}) {
          if (!done) callback();
          done = true;
        }
      };
    }
  }

})();
