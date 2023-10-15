// This is the Debian specific preferences file for Firefox ESR
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/firefox-esr directory, override any preference you can see in
// about:config.
//
// Note that pref("name", value, locked) is allowed in these
// preferences files if you don't want users to be able to override
// some preferences.

pref("extensions.update.enabled", true);

// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Disable openh264.
pref("media.gmp-gmpopenh264.enabled", false);

// Default to classic view for about:newtab
pref("browser.newtabpage.enhanced", false, sticky);

// Disable health report upload
pref("datareporting.healthreport.uploadEnabled", false);

// Default to no suggestions in the urlbar. This still brings a panel asking
// the user whether they want to opt-in on first use.
pref("browser.urlbar.suggest.searches", false);

// No titlebar
pref("browser.tabs.drawInTitlebar", true);

// No bookmarks toolbar
pref("browser.toolbars.bookmarks.visibility", "never");

// Skip first run telemetry screen
pref("toolkit.telemetry.reportingpolicy.firstRun", false);
pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);

// Disable home page sponsored shortcuts
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Set new tab default top sites
pref("browser.topsites.useRemoteSetting", false);
pref("browser.newtabpage.activity-stream.default.sites", "https://www.youtube.com/,https://gmail.com/,https://www.twitter.com/,https://www.wikipedia.org/,https://www.amazon.com/,https://github.com/");

// Compact UI mode
pref("browser.compactmode.show", true);
pref("browser.uidensity", 1);