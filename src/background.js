// Param values from https://developer.mozilla.org/Add-ons/WebExtensions/API/contextualIdentities/create
const FACEBOOK_CONTAINER_NAME = "Google";
const FACEBOOK_CONTAINER_COLOR = "orange";
const FACEBOOK_CONTAINER_ICON = "dollar";
const FACEBOOK_DOMAINS = [
  "google.com",
  "google.ac",
  "google.ad",
  "google.ae",
  "google.com.af",
  "google.com.ag",
  "google.com.ai",
  "google.al",
  "google.am",
  "google.co.ao",
  "google.com.ar",
  "google.as",
  "google.at",
  "google.com.au",
  "google.az",
  "google.ba",
  "google.com.bd",
  "google.be",
  "google.bf",
  "google.bg",
  "google.com.bh",
  "google.bi",
  "google.bj",
  "google.com.bn",
  "google.com.bo",
  "google.com.br",
  "google.bs",
  "google.bt",
  "google.co.bw",
  "google.by",
  "google.com.bz",
  "google.ca",
  "google.com.kh",
  "google.cc",
  "google.cd",
  "google.cf",
  "google.cat",
  "google.cg",
  "google.ch",
  "google.ci",
  "google.co.ck",
  "google.cl",
  "google.cm",
  "google.cn",
  "google.com.co",
  "google.co.cr",
  "google.com.cu",
  "google.cv",
  "google.com.cy",
  "google.cz",
  "google.de",
  "google.dj",
  "google.dk",
  "google.dm",
  "google.com.do",
  "google.dz",
  "google.com.ec",
  "google.ee",
  "google.com.eg",
  "google.es",
  "google.com.et",
  "google.fi",
  "google.com.fj",
  "google.fm",
  "google.fr",
  "google.ga",
  "google.ge",
  "google.gf",
  "google.gg",
  "google.com.gh",
  "google.com.gi",
  "google.gl",
  "google.gm",
  "google.gp",
  "google.gr",
  "google.com.gt",
  "google.gy",
  "google.com.hk",
  "google.hn",
  "google.hr",
  "google.ht",
  "google.hu",
  "google.co.id",
  "google.iq",
  "google.ie",
  "google.co.il",
  "google.im",
  "google.co.in",
  "google.io",
  "google.is",
  "google.it",
  "google.je",
  "google.com.jm",
  "google.jo",
  "google.co.jp",
  "google.co.ke",
  "google.ki",
  "google.kg",
  "google.co.kr",
  "google.com.kw",
  "google.kz",
  "google.la",
  "google.com.lb",
  "google.com.lc",
  "google.li",
  "google.lk",
  "google.co.ls",
  "google.lt",
  "google.lu",
  "google.lv",
  "google.com.ly",
  "google.co.ma",
  "google.md",
  "google.me",
  "google.mg",
  "google.mk",
  "google.ml",
  "google.com.mm",
  "google.mn",
  "google.ms",
  "google.com.mt",
  "google.mu",
  "google.mv",
  "google.mw",
  "google.com.mx",
  "google.com.my",
  "google.co.mz",
  "google.com.na",
  "google.ne",
  "google.com.nf",
  "google.com.ng",
  "google.com.ni",
  "google.nl",
  "google.no",
  "google.com.np",
  "google.nr",
  "google.nu",
  "google.co.nz",
  "google.com.om",
  "google.com.pk",
  "google.com.pa",
  "google.com.pe",
  "google.com.ph",
  "google.pl",
  "google.com.pg",
  "google.com.pr",
  "google.ps",
  "google.pt",
  "google.com.py",
  "google.com.qa",
  "google.ro",
  "google.rs",
  "google.ru",
  "google.rw",
  "google.com.sa",
  "google.com.sb",
  "google.sc",
  "google.se",
  "google.com.sg",
  "google.sh",
  "google.si",
  "google.sk",
  "google.com.sl",
  "google.sn",
  "google.sm",
  "google.so",
  "google.st",
  "google.sr",
  "google.com.sv",
  "google.td",
  "google.tg",
  "google.co.th",
  "google.com.tj",
  "google.tk",
  "google.tl",
  "google.tm",
  "google.to",
  "google.tn",
  "google.com.tr",
  "google.tt",
  "google.com.tw",
  "google.co.tz",
  "google.com.ua",
  "google.co.ug",
  "google.co.uk",
  "google.com.uy",
  "google.co.uz",
  "google.com.vc",
  "google.co.ve",
  "google.vg",
  "google.co.vi",
  "google.com.vn",
  "google.vu",
  "google.ws",
  "google.co.za",
  "google.co.zm",
  "google.co.zw",
  "admob.com",
  "adsense.com",
  "adwords.com",
  "abc.xyz",
  "android.com",
  "blogger.com",
  "blogspot.com",
  "chromium.org",
  "chrome.com",
  "hromebook.com",
  "cobrasearch.com",
  "com.google",
  "feedburner.com",
  "doubleclick.com",
  "igoogle.com",
  "foofle.com",
  "froogle.com",
  "googleanalytics.com",
  "google-analytics.com",
  "googletagmanager.com",
  "googlecode.com",
  "googlesource.com",
  "googledrive.com",
  "googlearth.com",
  "googleearth.com",
  "googlemaps.com",
  "googlepagecreator.com",
  "googlescholar.com",
  "gmail.com",
  "googlemail.com",
  "keyhole.com",
  "madewithcode.com",
  "panoramio.com",
  "picasa.com",
  "urchin.com",
  "waze.com",
  "youtube.com",
  "youtu.be",
  "yt.be",
  "ytimg.com",
  "youtubeeducation.com",
  "youtube-nocookie.com",
  "like.com",
  "google.org",
  "google.net",
  "gooogle.com",
  "gogle.com",
  "ggoogle.com",
  "gogole.com",
  "goolge.com",
  "googel.com",
  "duck.com",
  "googlee.com",
  "googil.com",
  "googlr.com",
  "googl.com",
  "gmodules.com",
  "googleadservices.com",
  "googleapps.com",
  "googleapis.com",
  "goo.gl",
  "googlebot.com",
  "googlecommerce.com",
  "googlesyndication.com",
  "g.co",
  "whatbrowser.org",
  "withgoogle.com",
  "ggpht.com",
  "googleusercontent.com",
  "youtubegaming.com",
  "domains.google",
  "googlecapital.com",
  "gv.com",
  "blog.google"
];

const MAC_ADDON_ID = "@testpilot-containers";

let macAddonEnabled = false;
let facebookCookieStoreId = null;

const canceledRequests = {};
const tabsWaitingToLoad = {};
const facebookHostREs = [];

async function isMACAddonEnabled () {
  try {
    const macAddonInfo = await browser.management.get(MAC_ADDON_ID);
    if (macAddonInfo.enabled) {
      sendJailedDomainsToMAC();
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
}

async function setupMACAddonListeners () {
  browser.runtime.onMessageExternal.addListener((message, sender) => {
    if (sender.id !== "@testpilot-containers") {
      return;
    }
    switch (message.method) {
    case "MACListening":
      sendJailedDomainsToMAC();
      break;
    }
  });
  function disabledExtension (info) {
    if (info.id === MAC_ADDON_ID) {
      macAddonEnabled = false;
    }
  }
  function enabledExtension (info) {
    if (info.id === MAC_ADDON_ID) {
      macAddonEnabled = true;
    }
  }
  browser.management.onInstalled.addListener(enabledExtension);
  browser.management.onEnabled.addListener(enabledExtension);
  browser.management.onUninstalled.addListener(disabledExtension);
  browser.management.onDisabled.addListener(disabledExtension);
}

async function sendJailedDomainsToMAC () {
  try {
    return await browser.runtime.sendMessage(MAC_ADDON_ID, {
      method: "jailedDomains",
      urls: FACEBOOK_DOMAINS.map((domain) => {
        return `https://${domain}/`;
      })
    });
  } catch (e) {
    // We likely might want to handle this case: https://github.com/mozilla/contain-facebook/issues/113#issuecomment-380444165
    return false;
  }
}

async function getMACAssignment (url) {
  if (!macAddonEnabled) {
    return false;
  }

  try {
    const assignment = await browser.runtime.sendMessage(MAC_ADDON_ID, {
      method: "getAssignment",
      url
    });
    return assignment;
  } catch (e) {
    return false;
  }
}

function cancelRequest (tab, options) {
  // we decided to cancel the request at this point, register canceled request
  canceledRequests[tab.id] = {
    requestIds: {
      [options.requestId]: true
    },
    urls: {
      [options.url]: true
    }
  };

  // since webRequest onCompleted and onErrorOccurred are not 100% reliable
  // we register a timer here to cleanup canceled requests, just to make sure we don't
  // end up in a situation where certain urls in a tab.id stay canceled
  setTimeout(() => {
    if (canceledRequests[tab.id]) {
      delete canceledRequests[tab.id];
    }
  }, 2000);
}

function shouldCancelEarly (tab, options) {
  // we decided to cancel the request at this point
  if (!canceledRequests[tab.id]) {
    cancelRequest(tab, options);
  } else {
    let cancelEarly = false;
    if (canceledRequests[tab.id].requestIds[options.requestId] ||
        canceledRequests[tab.id].urls[options.url]) {
      // same requestId or url from the same tab
      // this is a redirect that we have to cancel early to prevent opening two tabs
      cancelEarly = true;
    }
    // register this requestId and url as canceled too
    canceledRequests[tab.id].requestIds[options.requestId] = true;
    canceledRequests[tab.id].urls[options.url] = true;
    if (cancelEarly) {
      return true;
    }
  }
  return false;
}

function generateFacebookHostREs () {
  for (let facebookDomain of FACEBOOK_DOMAINS) {
    facebookHostREs.push(new RegExp(`^(.*\\.)?${facebookDomain}$`));
  }
}

async function clearFacebookCookies () {
  // Clear all facebook cookies
  const containers = await browser.contextualIdentities.query({});
  containers.push({
    cookieStoreId: "firefox-default"
  });

  let macAssignments = [];
  if (macAddonEnabled) {
    const promises = FACEBOOK_DOMAINS.map(async facebookDomain => {
      const assigned = await getMACAssignment(`https://${facebookDomain}/`);
      return assigned ? facebookDomain : null;
    });
    macAssignments = await Promise.all(promises);
  }

  FACEBOOK_DOMAINS.map(async facebookDomain => {
    const facebookCookieUrl = `https://${facebookDomain}/`;

    // dont clear cookies for facebookDomain if mac assigned (with or without www.)
    if (macAddonEnabled &&
        (macAssignments.includes(facebookDomain) ||
         macAssignments.includes(`www.${facebookDomain}`))) {
      return;
    }

    containers.map(async container => {
      const storeId = container.cookieStoreId;
      if (storeId === facebookCookieStoreId) {
        // Don't clear cookies in the Facebook Container
        return;
      }

      const cookies = await browser.cookies.getAll({
        domain: facebookDomain,
        storeId
      });

      cookies.map(cookie => {
        browser.cookies.remove({
          name: cookie.name,
          url: facebookCookieUrl,
          storeId
        });
      });
      // Also clear Service Workers as it breaks detecting onBeforeRequest
      await browser.browsingData.remove({hostnames: [facebookDomain]}, {serviceWorkers: true});
    });
  });
}

async function setupContainer () {
  // Use existing Facebook container, or create one
  const contexts = await browser.contextualIdentities.query({name: FACEBOOK_CONTAINER_NAME});
  if (contexts.length > 0) {
    facebookCookieStoreId = contexts[0].cookieStoreId;
  } else {
    const context = await browser.contextualIdentities.create({
      name: FACEBOOK_CONTAINER_NAME,
      color: FACEBOOK_CONTAINER_COLOR,
      icon: FACEBOOK_CONTAINER_ICON
    });
    facebookCookieStoreId = context.cookieStoreId;
  }
}

function reopenTab ({url, tab, cookieStoreId}) {
  browser.tabs.create({
    url,
    cookieStoreId,
    active: tab.active,
    index: tab.index,
    windowId: tab.windowId
  });
  browser.tabs.remove(tab.id);
}

function isFacebookURL (url) {
  const parsedUrl = new URL(url);
  for (let facebookHostRE of facebookHostREs) {
    if (facebookHostRE.test(parsedUrl.host)) {
      return true;
    }
  }
  return false;
}

function shouldContainInto (url, tab) {
  if (!url.startsWith("http")) {
    // we only handle URLs starting with http(s)
    return false;
  }

  if (isFacebookURL(url)) {
    if (tab.cookieStoreId !== facebookCookieStoreId) {
      // Facebook-URL outside of Facebook Container Tab
      // Should contain into Facebook Container
      return facebookCookieStoreId;
    }
  } else if (tab.cookieStoreId === facebookCookieStoreId) {
    // Non-Facebook-URL inside Facebook Container Tab
    // Should contain into Default Container
    return "firefox-default";
  }

  return false;
}

async function maybeReopenAlreadyOpenTabs () {
  const maybeReopenTab = async tab => {
    const macAssigned = await getMACAssignment(tab.url);
    if (macAssigned) {
      // We don't reopen MAC assigned urls
      return;
    }
    const cookieStoreId = shouldContainInto(tab.url, tab);
    if (!cookieStoreId) {
      // Tab doesn't need to be contained
      return;
    }
    reopenTab({
      url: tab.url,
      tab,
      cookieStoreId
    });
  };

  const tabsOnUpdated = (tabId, changeInfo, tab) => {
    if (changeInfo.url && tabsWaitingToLoad[tabId]) {
      // Tab we're waiting for switched it's url, maybe we reopen
      delete tabsWaitingToLoad[tabId];
      maybeReopenTab(tab);
    }
    if (tab.status === "complete" && tabsWaitingToLoad[tabId]) {
      // Tab we're waiting for completed loading
      delete tabsWaitingToLoad[tabId];
    }
    if (!Object.keys(tabsWaitingToLoad).length) {
      // We're done waiting for tabs to load, remove event listener
      browser.tabs.onUpdated.removeListener(tabsOnUpdated);
    }
  };

  // Query for already open Tabs
  const tabs = await browser.tabs.query({});
  tabs.map(async tab => {
    if (tab.incognito) {
      return;
    }
    if (tab.url === "about:blank") {
      if (tab.status !== "loading") {
        return;
      }
      // about:blank Tab is still loading, so we indicate that we wait for it to load
      // and register the event listener if we haven't yet.
      //
      // This is a workaround until platform support is implemented:
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1447551
      // https://github.com/mozilla/multi-account-containers/issues/474
      tabsWaitingToLoad[tab.id] = true;
      if (!browser.tabs.onUpdated.hasListener(tabsOnUpdated)) {
        browser.tabs.onUpdated.addListener(tabsOnUpdated);
      }
    } else {
      // Tab already has an url, maybe we reopen
      maybeReopenTab(tab);
    }
  });
}

function stripFbclid(url) {
  const strippedUrl = new URL(url);
  strippedUrl.searchParams.delete("fbclid");
  return strippedUrl.href;
}

async function tabUpdateListener (tabId, changeInfo, tab) {
  await updateBrowserActionIcon(tab);
}

async function areAllStringsTranslated () {
  const browserUILanguage = browser.i18n.getUILanguage();
  if (browserUILanguage && browserUILanguage.startsWith("en")) {
    return true;
  }
  const enMessagesPath = browser.extension.getURL("_locales/en/messages.json");
  const resp = await fetch(enMessagesPath);
  const enMessages = await resp.json();

  for (const key of Object.keys(enMessages)){
    // TODO: this doesn't check if the add-on messages are translated into
    // any other browser.i18n.getAcceptedLanguages() options ... but then,
    // I don't think browser.i18n let's us get messages in anything but the
    // primary language anyway? Does browser.i18n.getMessage automatically
    // check for secondary languages?
    const enMessage = enMessages[key].message;
    const translatedMessage = browser.i18n.getMessage(key);
    if (translatedMessage == enMessage) {
      return false;
    }
  }
  return true;
}

async function updateBrowserActionIcon (tab) {
  const url = tab.url;
  const fullyTranslated = await areAllStringsTranslated();
  if (!fullyTranslated) {
    browser.browserAction.disable();
    return;
  }
  if (isFacebookURL(url)) {
    browser.browserAction.setPopup({tabId: tab.id, popup: "./panel1.html"});
    const fbcStorage = await browser.storage.local.get();
    if (fbcStorage.PANEL_SHOWN !== true) {
      await browser.browserAction.setBadgeBackgroundColor({
        tabId: tab.id,
        color: "#3B5998"
      });
      browser.browserAction.setBadgeText({tabId: tab.id, text: " "});
    }
  } else {
    browser.browserAction.setPopup({tabId: tab.id, popup: "./panel2.html"});
    browser.browserAction.setBadgeText({tabId: tab.id, text: ""});
  }
}

async function containFacebook (options) {
  const tab = await browser.tabs.get(options.tabId);
  await updateBrowserActionIcon(tab);

  const url = new URL(options.url);
  const urlSearchParm = new URLSearchParams(url.search);
  if (urlSearchParm.has("fbclid")) {
    return {redirectUrl: stripFbclid(options.url)};
  }
  // Listen to requests and open Facebook into its Container,
  // open other sites into the default tab context
  if (options.tabId === -1) {
    // Request doesn't belong to a tab
    return;
  }
  if (tabsWaitingToLoad[options.tabId]) {
    // Cleanup just to make sure we don't get a race-condition with startup reopening
    delete tabsWaitingToLoad[options.tabId];
  }

  // We have to check with every request if the requested URL is assigned with MAC
  // because the user can assign URLs at any given time (needs MAC Events)
  const macAssigned = await getMACAssignment(options.url);
  if (macAssigned) {
    // This URL is assigned with MAC, so we don't handle this request
    return;
  }

  if (tab.incognito) {
    // We don't handle incognito tabs
    return;
  }

  // Check whether we should contain this request into another container
  const cookieStoreId = shouldContainInto(options.url, tab);
  if (!cookieStoreId) {
    // Request doesn't need to be contained
    return;
  }

  if (shouldCancelEarly(tab, options)) {
    // We need to cancel early to prevent multiple reopenings
    return {cancel: true};
  }
  // Decided to contain
  reopenTab({
    url: options.url,
    tab,
    cookieStoreId
  });
  return {cancel: true};
}

(async function init () {
  await setupMACAddonListeners();
  macAddonEnabled = await isMACAddonEnabled();

  try {
    await setupContainer();
  } catch (error) {
    // TODO: Needs backup strategy
    // See https://github.com/mozilla/contain-facebook/issues/23
    // Sometimes this add-on is installed but doesn't get a facebookCookieStoreId ?
    // eslint-disable-next-line no-console
    console.log(error);
    return;
  }
  clearFacebookCookies();
  generateFacebookHostREs();

  // Clean up canceled requests
  browser.webRequest.onCompleted.addListener((options) => {
    if (canceledRequests[options.tabId]) {
      delete canceledRequests[options.tabId];
    }
  },{urls: ["<all_urls>"], types: ["main_frame"]});
  browser.webRequest.onErrorOccurred.addListener((options) => {
    if (canceledRequests[options.tabId]) {
      delete canceledRequests[options.tabId];
    }
  },{urls: ["<all_urls>"], types: ["main_frame"]});

  // Add the request listener
  browser.webRequest.onBeforeRequest.addListener(containFacebook, {urls: ["<all_urls>"], types: ["main_frame"]}, ["blocking"]);

  browser.tabs.onUpdated.addListener(tabUpdateListener);

  maybeReopenAlreadyOpenTabs();
})();
