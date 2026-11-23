type DeviceInfo = {
  deviceModelName?: string | undefined
  languageCode?: string | undefined
  languageCodeFromWebview?: string | undefined
  languageCodeRaw?: string | undefined
  screenResolutionHeight?: string | undefined
  screenResolutionWidth?: string | undefined
  timezone?: string | undefined
}
type GetIosPostInstallAttributionRequest = {
  appInstallationTime?: string | undefined
  bundleId?: string | undefined
  device?: DeviceInfo | undefined
  iosVersion?: string | undefined
  retrievalMethod?:
    | 'UNKNOWN_PAYLOAD_RETRIEVAL_METHOD'
    | 'IMPLICIT_WEAK_MATCH'
    | 'EXPLICIT_WEAK_MATCH'
    | 'EXPLICIT_STRONG_AFTER_WEAK_MATCH'
    | undefined
  sdkVersion?: string | undefined
  uniqueMatchLinkToCheck?: string | undefined
  visualStyle?: 'UNKNOWN_VISUAL_STYLE' | 'DEFAULT_STYLE' | 'CUSTOM_STYLE' | undefined
}
type GetIosPostInstallAttributionResponse = {
  appMinimumVersion?: string | undefined
  attributionConfidence?:
    | 'UNKNOWN_ATTRIBUTION_CONFIDENCE'
    | 'WEAK'
    | 'DEFAULT'
    | 'UNIQUE'
    | undefined
  deepLink?: string | undefined
  externalBrowserDestinationLink?: string | undefined
  fallbackLink?: string | undefined
  invitationId?: string | undefined
  isStrongMatchExecutable?: boolean | undefined
  matchMessage?: string | undefined
  requestIpVersion?: 'UNKNOWN_IP_VERSION' | 'IP_V4' | 'IP_V6' | undefined
  requestedLink?: string | undefined
  resolvedLink?: string | undefined
  utmCampaign?: string | undefined
  utmContent?: string | undefined
  utmMedium?: string | undefined
  utmSource?: string | undefined
  utmTerm?: string | undefined
}
type GooglePlayAnalytics = {
  gclid?: string | undefined
  utmCampaign?: string | undefined
  utmContent?: string | undefined
  utmMedium?: string | undefined
  utmSource?: string | undefined
  utmTerm?: string | undefined
}
type ITunesConnectAnalytics = {
  at?: string | undefined
  ct?: string | undefined
  mt?: string | undefined
  pt?: string | undefined
}
type AnalyticsInfo = {
  googlePlayAnalytics?: GooglePlayAnalytics | undefined
  itunesConnectAnalytics?: ITunesConnectAnalytics | undefined
}
type AndroidInfo = {
  androidFallbackLink?: string | undefined
  androidLink?: string | undefined
  androidMinPackageVersionCode?: string | undefined
  androidPackageName?: string | undefined
}
type DesktopInfo = { desktopFallbackLink?: string | undefined }
type IosInfo = {
  iosAppStoreId?: string | undefined
  iosBundleId?: string | undefined
  iosCustomScheme?: string | undefined
  iosFallbackLink?: string | undefined
  iosIpadBundleId?: string | undefined
  iosIpadFallbackLink?: string | undefined
  iosMinimumVersion?: string | undefined
}
type NavigationInfo = { enableForcedRedirect?: boolean | undefined }
type SocialMetaTagInfo = {
  socialDescription?: string | undefined
  socialImageLink?: string | undefined
  socialTitle?: string | undefined
}
type DynamicLinkInfo = {
  analyticsInfo?: AnalyticsInfo | undefined
  androidInfo?: AndroidInfo | undefined
  desktopInfo?: DesktopInfo | undefined
  domainUriPrefix?: string | undefined
  dynamicLinkDomain?: string | undefined
  iosInfo?: IosInfo | undefined
  link?: string | undefined
  navigationInfo?: NavigationInfo | undefined
  socialMetaTagInfo?: SocialMetaTagInfo | undefined
}
type Suffix = {
  customSuffix?: string | undefined
  option?: 'OPTION_UNSPECIFIED' | 'UNGUESSABLE' | 'SHORT' | 'CUSTOM' | undefined
}
type CreateManagedShortLinkRequest = {
  dynamicLinkInfo?: DynamicLinkInfo | undefined
  longDynamicLink?: string | undefined
  name?: string | undefined
  sdkVersion?: string | undefined
  suffix?: Suffix | undefined
}
type ManagedShortLink = {
  creationTime?: string | undefined
  flaggedAttribute?: ('UNSPECIFIED_ATTRIBUTE' | 'SPAM')[] | undefined
  info?: DynamicLinkInfo | undefined
  link?: string | undefined
  linkName?: string | undefined
  visibility?: 'UNSPECIFIED_VISIBILITY' | 'UNARCHIVED' | 'ARCHIVED' | 'NEVER_SHOWN' | undefined
}
type DynamicLinkWarning = {
  warningCode?:
    | 'CODE_UNSPECIFIED'
    | 'NOT_IN_PROJECT_ANDROID_PACKAGE_NAME'
    | 'NOT_INTEGER_ANDROID_PACKAGE_MIN_VERSION'
    | 'UNNECESSARY_ANDROID_PACKAGE_MIN_VERSION'
    | 'NOT_URI_ANDROID_LINK'
    | 'UNNECESSARY_ANDROID_LINK'
    | 'NOT_URI_ANDROID_FALLBACK_LINK'
    | 'BAD_URI_SCHEME_ANDROID_FALLBACK_LINK'
    | 'NOT_IN_PROJECT_IOS_BUNDLE_ID'
    | 'NOT_IN_PROJECT_IPAD_BUNDLE_ID'
    | 'UNNECESSARY_IOS_URL_SCHEME'
    | 'NOT_NUMERIC_IOS_APP_STORE_ID'
    | 'UNNECESSARY_IOS_APP_STORE_ID'
    | 'NOT_URI_IOS_FALLBACK_LINK'
    | 'BAD_URI_SCHEME_IOS_FALLBACK_LINK'
    | 'NOT_URI_IPAD_FALLBACK_LINK'
    | 'BAD_URI_SCHEME_IPAD_FALLBACK_LINK'
    | 'BAD_DEBUG_PARAM'
    | 'BAD_AD_PARAM'
    | 'DEPRECATED_PARAM'
    | 'UNRECOGNIZED_PARAM'
    | 'TOO_LONG_PARAM'
    | 'NOT_URI_SOCIAL_IMAGE_LINK'
    | 'BAD_URI_SCHEME_SOCIAL_IMAGE_LINK'
    | 'NOT_URI_SOCIAL_URL'
    | 'BAD_URI_SCHEME_SOCIAL_URL'
    | 'LINK_LENGTH_TOO_LONG'
    | 'LINK_WITH_FRAGMENTS'
    | 'NOT_MATCHING_IOS_BUNDLE_ID_AND_STORE_ID'
    | undefined
  warningDocumentLink?: string | undefined
  warningMessage?: string | undefined
}
type CreateManagedShortLinkResponse = {
  managedShortLink?: ManagedShortLink | undefined
  previewLink?: string | undefined
  warning?: DynamicLinkWarning[] | undefined
}
type GetIosReopenAttributionRequest = {
  bundleId?: string | undefined
  requestedLink?: string | undefined
  sdkVersion?: string | undefined
}
type GetIosReopenAttributionResponse = {
  deepLink?: string | undefined
  invitationId?: string | undefined
  iosMinAppVersion?: string | undefined
  resolvedLink?: string | undefined
  utmCampaign?: string | undefined
  utmContent?: string | undefined
  utmMedium?: string | undefined
  utmSource?: string | undefined
  utmTerm?: string | undefined
}
type CreateShortDynamicLinkRequest = {
  dynamicLinkInfo?: DynamicLinkInfo | undefined
  longDynamicLink?: string | undefined
  sdkVersion?: string | undefined
  suffix?: Suffix | undefined
}
type CreateShortDynamicLinkResponse = {
  previewLink?: string | undefined
  shortLink?: string | undefined
  warning?: DynamicLinkWarning[] | undefined
}
type DynamicLinkEventStat = {
  count?: string | undefined
  event?:
    | 'DYNAMIC_LINK_EVENT_UNSPECIFIED'
    | 'CLICK'
    | 'REDIRECT'
    | 'APP_INSTALL'
    | 'APP_FIRST_OPEN'
    | 'APP_RE_OPEN'
    | undefined
  platform?:
    | 'DYNAMIC_LINK_PLATFORM_UNSPECIFIED'
    | 'ANDROID'
    | 'IOS'
    | 'DESKTOP'
    | 'OTHER'
    | undefined
}
type DynamicLinkStats = { linkEventStats?: DynamicLinkEventStat[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/installAttribution': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GetIosPostInstallAttributionRequest }
        output: GetIosPostInstallAttributionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/managedShortLinks:create': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CreateManagedShortLinkRequest }
        output: CreateManagedShortLinkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reopenAttribution': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GetIosReopenAttributionRequest }
        output: GetIosReopenAttributionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/shortLinks': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CreateShortDynamicLinkRequest }
        output: CreateShortDynamicLinkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:dynamicLink/linkStats': {
      $get: {
        input: { param: { dynamicLink: string } } & {
          query: {
            durationDays?: string | undefined
            sdkVersion?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DynamicLinkStats
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
