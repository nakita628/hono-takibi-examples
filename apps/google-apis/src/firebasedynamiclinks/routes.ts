import { createRoute, z } from '@hono/zod-openapi'

const GooglePlayAnalyticsSchema = z
  .object({
    gclid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated; FDL SDK does not process nor log it.' }),
    utmCampaign: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Campaign name; used for keyword analysis to identify a specific product promotion or strategic campaign.',
      }),
    utmContent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Campaign content; used for A/B testing and content-targeted ads to differentiate ads or links that point to the same URL.',
      }),
    utmMedium: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Campaign medium; used to identify a medium such as email or cost-per-click.',
      }),
    utmSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Campaign source; used to identify a search engine, newsletter, or other source.',
      }),
    utmTerm: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Campaign term; used with paid search to supply the keywords for ads.',
      }),
  })
  .openapi({
    description:
      'Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)',
    required: [],
  })
  .openapi('GooglePlayAnalytics')

const ITunesConnectAnalyticsSchema = z
  .object({
    at: z
      .string()
      .exactOptional()
      .openapi({ description: 'Affiliate token used to create affiliate-coded links.' }),
    ct: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Campaign text that developers can optionally add to any link in order to track sales from a specific marketing campaign.',
      }),
    mt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'iTune media types, including music, podcasts, audiobooks and so on.',
      }),
    pt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provider token that enables analytics for Dynamic Links from within iTunes Connect.',
      }),
  })
  .openapi({ description: 'Parameters for iTunes Connect App Analytics.', required: [] })
  .openapi('ITunesConnectAnalytics')

const AnalyticsInfoSchema = z
  .object({
    googlePlayAnalytics: GooglePlayAnalyticsSchema.exactOptional().openapi({
      description: 'Google Play Campaign Measurements.',
    }),
    itunesConnectAnalytics: ITunesConnectAnalyticsSchema.exactOptional().openapi({
      description: 'iTunes Connect App Analytics.',
    }),
  })
  .openapi({ description: 'Tracking parameters supported by Dynamic Link.', required: [] })
  .openapi('AnalyticsInfo')

const AndroidInfoSchema = z
  .object({
    androidFallbackLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to open on Android if the app is not installed.' }),
    androidLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'If specified, this overrides the ‘link’ parameter on Android.' }),
    androidMinPackageVersionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Minimum version code for the Android app. If the installed app’s version code is lower, then the user is taken to the Play Store.',
      }),
    androidPackageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Android package name of the app.' }),
  })
  .openapi({ description: 'Android related attributes to the Dynamic Link.', required: [] })
  .openapi('AndroidInfo')

const DesktopInfoSchema = z
  .object({
    desktopFallbackLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to open on desktop.' }),
  })
  .openapi({ description: 'Desktop related attributes to the Dynamic Link.', required: [] })
  .openapi('DesktopInfo')

const IosInfoSchema = z
  .object({
    iosAppStoreId: z.string().exactOptional().openapi({ description: 'iOS App Store ID.' }),
    iosBundleId: z.string().exactOptional().openapi({ description: 'iOS bundle ID of the app.' }),
    iosCustomScheme: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Custom (destination) scheme to use for iOS. By default, we’ll use the bundle ID as the custom scheme. Developer can override this behavior using this param.',
      }),
    iosFallbackLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to open on iOS if the app is not installed.' }),
    iosIpadBundleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'iPad bundle ID of the app.' }),
    iosIpadFallbackLink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If specified, this overrides the ios_fallback_link value on iPads.',
      }),
    iosMinimumVersion: z.string().exactOptional().openapi({ description: 'iOS minimum version.' }),
  })
  .openapi({ description: 'iOS related attributes to the Dynamic Link..', required: [] })
  .openapi('IosInfo')

const NavigationInfoSchema = z
  .object({
    enableForcedRedirect: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this option is on, FDL click will be forced to redirect rather than show an interstitial page.',
      }),
  })
  .openapi({ description: 'Information of navigation behavior.', required: [] })
  .openapi('NavigationInfo')

const SocialMetaTagInfoSchema = z
  .object({
    socialDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of the link. Optional.' }),
    socialImageLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'An image url string. Optional.' }),
    socialTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title to be displayed. Optional.' }),
  })
  .openapi({
    description:
      'Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.',
    required: [],
  })
  .openapi('SocialMetaTagInfo')

const DynamicLinkInfoSchema = z
  .object({
    analyticsInfo: AnalyticsInfoSchema.exactOptional().openapi({
      description:
        'Parameters used for tracking. See all tracking parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).',
    }),
    androidInfo: AndroidInfoSchema.exactOptional().openapi({
      description:
        'Android related information. See Android related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).',
    }),
    desktopInfo: DesktopInfoSchema.exactOptional().openapi({
      description:
        'Desktop related information. See desktop related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).',
    }),
    domainUriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps More examples can be found in description of getNormalizedUriPrefix in j/c/g/firebase/dynamiclinks/uri/DdlDomain.java Will fallback to dynamic_link_domain is this field is missing',
      }),
    dynamicLinkDomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl [Learn more](https://firebase.google.com/docs/dynamic-links/android/receive) on how to set up Dynamic Link domain associated with your Firebase project. Required if missing domain_uri_prefix.',
      }),
    iosInfo: IosInfoSchema.exactOptional().openapi({
      description:
        'iOS related information. See iOS related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).',
    }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The link your app will open, You can specify any URL your app can handle. This link must be a well-formatted URL, be properly URL-encoded, and use the HTTP or HTTPS scheme. See 'link' parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). Required.",
      }),
    navigationInfo: NavigationInfoSchema.exactOptional().openapi({
      description: 'Information of navigation behavior of a Firebase Dynamic Links.',
    }),
    socialMetaTagInfo: SocialMetaTagInfoSchema.exactOptional().openapi({
      description:
        'Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.',
    }),
  })
  .openapi({ description: 'Information about a Dynamic Link.', required: [] })
  .openapi('DynamicLinkInfo')

const SuffixSchema = z
  .object({
    customSuffix: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only applies to Option.CUSTOM.' }),
    option: z
      .enum(['OPTION_UNSPECIFIED', 'UNGUESSABLE', 'SHORT', 'CUSTOM'])
      .exactOptional()
      .openapi({ description: 'Suffix option.' }),
  })
  .openapi({ description: 'Short Dynamic Link suffix.', required: [] })
  .openapi('Suffix')

const CreateManagedShortLinkRequestSchema = z
  .object({
    dynamicLinkInfo: DynamicLinkInfoSchema.exactOptional().openapi({
      description:
        'Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).',
    }),
    longDynamicLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Link name to associate with the link. It's used for marketer to identify manually-created links in the Firebase console (https://console.firebase.google.com/). Links must be named to be tracked.",
      }),
    sdkVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Google SDK version. Version takes the form "$major.$minor.$patch"',
      }),
    suffix: SuffixSchema.exactOptional().openapi({
      description: 'Short Dynamic Link suffix. Optional.',
    }),
  })
  .openapi({ description: 'Request to create a managed Short Dynamic Link.', required: [] })
  .openapi('CreateManagedShortLinkRequest')

const ManagedShortLinkSchema = z
  .object({
    creationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Creation timestamp of the short link.' }),
    flaggedAttribute: z
      .array(z.enum(['UNSPECIFIED_ATTRIBUTE', 'SPAM']))
      .exactOptional()
      .openapi({ description: 'Attributes that have been flagged about this short url.' }),
    info: DynamicLinkInfoSchema.exactOptional().openapi({ description: 'Full Dyamic Link info' }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Short durable link url, for example, "https://sample.app.goo.gl/xyz123". Required.',
      }),
    linkName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link name defined by the creator. Required.' }),
    visibility: z
      .enum(['UNSPECIFIED_VISIBILITY', 'UNARCHIVED', 'ARCHIVED', 'NEVER_SHOWN'])
      .exactOptional()
      .openapi({ description: 'Visibility status of link.' }),
  })
  .openapi({ description: 'Managed Short Link.', required: [] })
  .openapi('ManagedShortLink')

const DynamicLinkWarningSchema = z
  .object({
    warningCode: z
      .enum([
        'CODE_UNSPECIFIED',
        'NOT_IN_PROJECT_ANDROID_PACKAGE_NAME',
        'NOT_INTEGER_ANDROID_PACKAGE_MIN_VERSION',
        'UNNECESSARY_ANDROID_PACKAGE_MIN_VERSION',
        'NOT_URI_ANDROID_LINK',
        'UNNECESSARY_ANDROID_LINK',
        'NOT_URI_ANDROID_FALLBACK_LINK',
        'BAD_URI_SCHEME_ANDROID_FALLBACK_LINK',
        'NOT_IN_PROJECT_IOS_BUNDLE_ID',
        'NOT_IN_PROJECT_IPAD_BUNDLE_ID',
        'UNNECESSARY_IOS_URL_SCHEME',
        'NOT_NUMERIC_IOS_APP_STORE_ID',
        'UNNECESSARY_IOS_APP_STORE_ID',
        'NOT_URI_IOS_FALLBACK_LINK',
        'BAD_URI_SCHEME_IOS_FALLBACK_LINK',
        'NOT_URI_IPAD_FALLBACK_LINK',
        'BAD_URI_SCHEME_IPAD_FALLBACK_LINK',
        'BAD_DEBUG_PARAM',
        'BAD_AD_PARAM',
        'DEPRECATED_PARAM',
        'UNRECOGNIZED_PARAM',
        'TOO_LONG_PARAM',
        'NOT_URI_SOCIAL_IMAGE_LINK',
        'BAD_URI_SCHEME_SOCIAL_IMAGE_LINK',
        'NOT_URI_SOCIAL_URL',
        'BAD_URI_SCHEME_SOCIAL_URL',
        'LINK_LENGTH_TOO_LONG',
        'LINK_WITH_FRAGMENTS',
        'NOT_MATCHING_IOS_BUNDLE_ID_AND_STORE_ID',
      ])
      .exactOptional()
      .openapi({ description: 'The warning code.' }),
    warningDocumentLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The document describing the warning, and helps resolve.' }),
    warningMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The warning message to help developers improve their requests.' }),
  })
  .openapi({ description: 'Dynamic Links warning messages.', required: [] })
  .openapi('DynamicLinkWarning')

const CreateManagedShortLinkResponseSchema = z
  .object({
    managedShortLink: ManagedShortLinkSchema.exactOptional().openapi({
      description: 'Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz',
    }),
    previewLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Preview link to show the link flow chart. (debug info.)' }),
    warning: z
      .array(DynamicLinkWarningSchema)
      .exactOptional()
      .openapi({ description: 'Information about potential warnings on link creation.' }),
  })
  .openapi({ description: 'Response to create a short Dynamic Link.', required: [] })
  .openapi('CreateManagedShortLinkResponse')

const CreateShortDynamicLinkRequestSchema = z
  .object({
    dynamicLinkInfo: DynamicLinkInfoSchema.exactOptional().openapi({
      description:
        'Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).',
    }),
    longDynamicLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).',
      }),
    sdkVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Google SDK version. Version takes the form "$major.$minor.$patch"',
      }),
    suffix: SuffixSchema.exactOptional().openapi({
      description: 'Short Dynamic Link suffix. Optional.',
    }),
  })
  .openapi({ description: 'Request to create a short Dynamic Link.', required: [] })
  .openapi('CreateShortDynamicLinkRequest')

const CreateShortDynamicLinkResponseSchema = z
  .object({
    previewLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Preview link to show the link flow chart. (debug info.)' }),
    shortLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz' }),
    warning: z
      .array(DynamicLinkWarningSchema)
      .exactOptional()
      .openapi({ description: 'Information about potential warnings on link creation.' }),
  })
  .openapi({ description: 'Response to create a short Dynamic Link.', required: [] })
  .openapi('CreateShortDynamicLinkResponse')

const DeviceInfoSchema = z
  .object({
    deviceModelName: z.string().exactOptional().openapi({ description: 'Device model name.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device language code setting.' }),
    languageCodeFromWebview: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Device language code setting obtained by executing JavaScript code in WebView.',
      }),
    languageCodeRaw: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Device language code raw setting. iOS does returns language code in different format than iOS WebView. For example WebView returns en_US, but iOS returns en-US. Field below will return raw value returned by iOS.',
      }),
    screenResolutionHeight: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device display resolution height.' }),
    screenResolutionWidth: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device display resolution width.' }),
    timezone: z.string().exactOptional().openapi({ description: 'Device timezone setting.' }),
  })
  .openapi({ description: 'Signals associated with the device making the request.', required: [] })
  .openapi('DeviceInfo')

const DynamicLinkEventStatSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of times this event occurred.' }),
    event: z
      .enum([
        'DYNAMIC_LINK_EVENT_UNSPECIFIED',
        'CLICK',
        'REDIRECT',
        'APP_INSTALL',
        'APP_FIRST_OPEN',
        'APP_RE_OPEN',
      ])
      .exactOptional()
      .openapi({ description: 'Link event.' }),
    platform: z
      .enum(['DYNAMIC_LINK_PLATFORM_UNSPECIFIED', 'ANDROID', 'IOS', 'DESKTOP', 'OTHER'])
      .exactOptional()
      .openapi({ description: 'Requested platform.' }),
  })
  .openapi({ description: 'Dynamic Link event stat.', required: [] })
  .openapi('DynamicLinkEventStat')

const DynamicLinkStatsSchema = z
  .object({
    linkEventStats: z
      .array(DynamicLinkEventStatSchema)
      .exactOptional()
      .openapi({ description: 'Dynamic Link event stats.' }),
  })
  .openapi({
    description: 'Analytics stats of a Dynamic Link for a given timeframe.',
    required: [],
  })
  .openapi('DynamicLinkStats')

const GetIosPostInstallAttributionRequestSchema = z
  .object({
    appInstallationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'App installation epoch time (https://en.wikipedia.org/wiki/Unix_time). This is a client signal for a more accurate weak match.',
      }),
    bundleId: z.string().exactOptional().openapi({ description: 'APP bundle ID.' }),
    device: DeviceInfoSchema.exactOptional().openapi({ description: 'Device information.' }),
    iosVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'iOS version, ie: 9.3.5. Consider adding "build".' }),
    retrievalMethod: z
      .enum([
        'UNKNOWN_PAYLOAD_RETRIEVAL_METHOD',
        'IMPLICIT_WEAK_MATCH',
        'EXPLICIT_WEAK_MATCH',
        'EXPLICIT_STRONG_AFTER_WEAK_MATCH',
      ])
      .exactOptional()
      .openapi({
        description:
          'App post install attribution retrieval information. Disambiguates mechanism (iSDK or developer invoked) to retrieve payload from clicked link.',
      }),
    sdkVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Google SDK version. Version takes the form "$major.$minor.$patch"',
      }),
    uniqueMatchLinkToCheck: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Possible unique matched link that server need to check before performing fingerprint match. If passed link is short server need to expand the link. If link is long server need to vslidate the link.',
      }),
    visualStyle: z
      .enum(['UNKNOWN_VISUAL_STYLE', 'DEFAULT_STYLE', 'CUSTOM_STYLE'])
      .exactOptional()
      .openapi({
        description:
          'Strong match page information. Disambiguates between default UI and custom page to present when strong match succeeds/fails to find cookie.',
      }),
  })
  .openapi({
    description:
      'Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.',
    required: [],
  })
  .openapi('GetIosPostInstallAttributionRequest')

const GetIosPostInstallAttributionResponseSchema = z
  .object({
    appMinimumVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum version for app, specified by dev through ?imv= parameter. Return to iSDK to allow app to evaluate if current version meets this.',
      }),
    attributionConfidence: z
      .enum(['UNKNOWN_ATTRIBUTION_CONFIDENCE', 'WEAK', 'DEFAULT', 'UNIQUE'])
      .exactOptional()
      .openapi({ description: 'The confidence of the returned attribution.' }),
    deepLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The deep-link attributed post-install via one of several techniques (fingerprint, copy unique).',
      }),
    externalBrowserDestinationLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-agent specific custom-scheme URIs for iSDK to open. This will be set according to the user-agent tha the click was originally made in. There is no Safari-equivalent custom-scheme open URLs. ie: googlechrome://www.example.com ie: firefox://open-url?url=http://www.example.com ie: opera-http://example.com',
      }),
    fallbackLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The link to navigate to update the app if min version is not met. This is either (in order): 1) fallback link (from ?ifl= parameter, if specified by developer) or 2) AppStore URL (from ?isi= parameter, if specified), or 3) the payload link (from required link= parameter).',
      }),
    invitationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Invitation ID attributed post-install via one of several techniques (fingerprint, copy unique).',
      }),
    isStrongMatchExecutable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Instruction for iSDK to attemmpt to perform strong match. For instance, if browser does not support/allow cookie or outside of support browsers, this will be false.',
      }),
    matchMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Describes why match failed, ie: "discarded due to low confidence". This message will be publicly visible.',
      }),
    requestIpVersion: z
      .enum(['UNKNOWN_IP_VERSION', 'IP_V4', 'IP_V6'])
      .exactOptional()
      .openapi({ description: 'Which IP version the request was made from.' }),
    requestedLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Entire FDL (short or long) attributed post-install via one of several techniques (fingerprint, copy unique).',
      }),
    resolvedLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long. Parameters from this should not be used directly (ie: server can default utm_[campaign|medium|source] to a value when requested_link lack them, server determine the best fallback_link when requested_link specifies >1 fallback links).',
      }),
    utmCampaign: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion campaign value to be propagated by iSDK to Scion at post-install.',
      }),
    utmContent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion content value to be propagated by iSDK to Scion at app-reopen.',
      }),
    utmMedium: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion medium value to be propagated by iSDK to Scion at post-install.',
      }),
    utmSource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion source value to be propagated by iSDK to Scion at post-install.',
      }),
    utmTerm: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion term value to be propagated by iSDK to Scion at app-reopen.',
      }),
  })
  .openapi({
    description: 'Response for iSDK to execute strong match flow for post-install attribution.',
    required: [],
  })
  .openapi('GetIosPostInstallAttributionResponse')

const GetIosReopenAttributionRequestSchema = z
  .object({
    bundleId: z.string().exactOptional().openapi({ description: 'APP bundle ID.' }),
    requestedLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'FDL link to be verified from an app universal link open. The FDL link can be one of: 1) short FDL. e.g. .page.link/, or 2) long FDL. e.g. .page.link/?{query params}, or 3) Invite FDL. e.g. .page.link/i/',
      }),
    sdkVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Google SDK version. Version takes the form "$major.$minor.$patch"',
      }),
  })
  .openapi({
    description:
      'Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.',
    required: [],
  })
  .openapi('GetIosReopenAttributionRequest')

const GetIosReopenAttributionResponseSchema = z
  .object({
    deepLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The deep-link attributed the app universal link open. For both regular FDL links and invite FDL links.',
      }),
    invitationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional invitation ID, for only invite typed requested FDL links.',
      }),
    iosMinAppVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'FDL input value of the "&imv=" parameter, minimum app version to be returned to Google Firebase SDK running on iOS-9.',
      }),
    resolvedLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long.',
      }),
    utmCampaign: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion campaign value to be propagated by iSDK to Scion at app-reopen.',
      }),
    utmContent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion content value to be propagated by iSDK to Scion at app-reopen.',
      }),
    utmMedium: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion medium value to be propagated by iSDK to Scion at app-reopen.',
      }),
    utmSource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion source value to be propagated by iSDK to Scion at app-reopen.',
      }),
    utmTerm: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Scion term value to be propagated by iSDK to Scion at app-reopen.',
      }),
  })
  .openapi({
    description:
      'Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.',
    required: [],
  })
  .openapi('GetIosReopenAttributionResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1InstallAttributionRoute = createRoute({
  method: 'post',
  path: '/v1/installAttribution',
  tags: ['v1'],
  description: 'Get iOS strong/weak-match info for post-install attribution.',
  operationId: 'firebasedynamiclinks.installAttribution',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: GetIosPostInstallAttributionRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetIosPostInstallAttributionResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1ManagedShortLinksCreateRoute = createRoute({
  method: 'post',
  path: '/v1/managedShortLinks:create',
  tags: ['managedShortLinks'],
  description:
    "Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.",
  operationId: 'firebasedynamiclinks.managedShortLinks.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: CreateManagedShortLinkRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateManagedShortLinkResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1ReopenAttributionRoute = createRoute({
  method: 'post',
  path: '/v1/reopenAttribution',
  tags: ['v1'],
  description: 'Get iOS reopen attribution for app universal link open deeplinking.',
  operationId: 'firebasedynamiclinks.reopenAttribution',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: GetIosReopenAttributionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetIosReopenAttributionResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1ShortLinksRoute = createRoute({
  method: 'post',
  path: '/v1/shortLinks',
  tags: ['shortLinks'],
  description:
    "Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.",
  operationId: 'firebasedynamiclinks.shortLinks.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: CreateShortDynamicLinkRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateShortDynamicLinkResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1DynamicLinkLinkStatsRoute = createRoute({
  method: 'get',
  path: '/v1/{dynamicLink}/linkStats',
  tags: ['v1'],
  description:
    'Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.',
  operationId: 'firebasedynamiclinks.getLinkStats',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      durationDays: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The span of time requested in days.',
            in: 'query',
            name: 'durationDays',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sdkVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Google SDK version. Version takes the form "$major.$minor.$patch"',
            in: 'query',
            name: 'sdkVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      dynamicLink: z
        .string()
        .openapi({
          param: {
            description: 'Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz',
            in: 'path',
            name: 'dynamicLink',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DynamicLinkStatsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})
