document.querySelectorAll('.pw-code').forEach(function (el) {
  el.addEventListener('click', function () {
    var code = (el.getAttribute('data-code') || el.textContent).trim();
    var done = function () {
      var old = el.textContent;
      el.textContent = '已复制 ' + code;
      setTimeout(function () { el.textContent = old; }, 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(done, function () {});
    } else {
      var t = document.createElement('textarea');
      t.value = code; document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(t);
    }
  });
});
