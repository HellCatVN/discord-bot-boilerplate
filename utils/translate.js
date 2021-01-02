const i18next = require('i18next');

module.exports = Translate = {
  trans: function(key, lng = null, opts = null) {
    let options = {
      lng: lng,
      ns: null
    };
    if (opts) {
      var objArr = Object.entries(opts).map(([key, value]) => ({ key, value }));
      objArr.forEach(val => {
        options[val.key] = val.value;
      });
    }
    let content = i18next.t(key, options);
    return content;
  },
  full: function(key, lng = null, ns = null, opts = null) {
    let options = {
      lng: lng,
      ns: ns
    };
    if (opts) {
      var objArr = Object.entries(opts).map(([key, value]) => ({ key, value }));
      objArr.forEach(val => {
        options[val.key] = val.value;
      });
    }
    let content = i18next.t(key, options);
    return content;
  },
  emoji: function(key) {
    let options = {
      lng: 'cat',
      ns: 'emoji'
    };
    let content = i18next.t(key, options);
    return content;
  },
  config: function(key) {
    let options = {
      lng: 'cat',
      ns: 'config'
    };
    let content = i18next.t(key, options);
    return content;
  }
};
