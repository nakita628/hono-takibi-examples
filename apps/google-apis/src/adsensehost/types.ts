type Account = {
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  status?: string | undefined
}
type Accounts = {
  etag?: string | undefined
  items?: Account[] | undefined
  kind?: string | undefined
}
type AdClient = {
  arcOptIn?: boolean | undefined
  id?: string | undefined
  kind?: string | undefined
  productCode?: string | undefined
  supportsReporting?: boolean | undefined
}
type AdClients = {
  etag?: string | undefined
  items?: AdClient[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type AdStyle = {
  colors?:
    | {
        background?: string | undefined
        border?: string | undefined
        text?: string | undefined
        title?: string | undefined
        url?: string | undefined
      }
    | undefined
  corners?: string | undefined
  font?: { family?: string | undefined; size?: string | undefined } | undefined
  kind?: string | undefined
}
type AdUnit = {
  code?: string | undefined
  contentAdsSettings?:
    | {
        backupOption?:
          | { color?: string | undefined; type?: string | undefined; url?: string | undefined }
          | undefined
        size?: string | undefined
        type?: string | undefined
      }
    | undefined
  customStyle?: AdStyle | undefined
  id?: string | undefined
  kind?: string | undefined
  mobileContentAdsSettings?:
    | {
        markupLanguage?: string | undefined
        scriptingLanguage?: string | undefined
        size?: string | undefined
        type?: string | undefined
      }
    | undefined
  name?: string | undefined
  status?: string | undefined
}
type AdUnits = {
  etag?: string | undefined
  items?: AdUnit[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type AdCode = { adCode?: string | undefined; kind?: string | undefined }
type Report = {
  averages?: string[] | undefined
  headers?:
    | { currency?: string | undefined; name?: string | undefined; type?: string | undefined }[]
    | undefined
  kind?: string | undefined
  rows?: string[][] | undefined
  totalMatchedRows?: string | undefined
  totals?: string[] | undefined
  warnings?: string[] | undefined
}
type CustomChannel = {
  code?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type CustomChannels = {
  etag?: string | undefined
  items?: CustomChannel[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type UrlChannel = {
  id?: string | undefined
  kind?: string | undefined
  urlPattern?: string | undefined
}
type UrlChannels = {
  etag?: string | undefined
  items?: UrlChannel[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type AssociationSession = {
  accountId?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  productCodes?: string[] | undefined
  redirectUrl?: string | undefined
  status?: string | undefined
  userLocale?: string | undefined
  websiteLocale?: string | undefined
  websiteUrl?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts': {
      $get: {
        input: {
          query: {
            filterAdClientId: string[]
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Accounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/adclients': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdClients
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/adclients/:adClientId': {
      $get: {
        input: { param: { accountId: string; adClientId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdClient
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/adclients/:adClientId/adunits': {
      $get: {
        input: { param: { accountId: string; adClientId: string } } & {
          query: {
            includeInactive?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdUnits
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { accountId: string; adClientId: string } } & {
          query: {
            adUnitId: string
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AdUnit }
        output: AdUnit
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; adClientId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AdUnit }
        output: AdUnit
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; adClientId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AdUnit }
        output: AdUnit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId': {
      $delete: {
        input: { param: { accountId: string; adClientId: string; adUnitId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdUnit
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { accountId: string; adClientId: string; adUnitId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdUnit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId/adcode': {
      $get: {
        input: { param: { accountId: string; adClientId: string; adUnitId: string } } & {
          query: {
            hostCustomChannelId?: string[] | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdCode
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/reports': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            startDate: string
            endDate: string
            dimension?: string[] | undefined
            filter?: string[] | undefined
            locale?: string | undefined
            maxResults?: number | undefined
            metric?: string[] | undefined
            sort?: string[] | undefined
            startIndex?: number | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/adclients': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdClients
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/adclients/:adClientId': {
      $get: {
        input: { param: { adClientId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdClient
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/adclients/:adClientId/customchannels': {
      $get: {
        input: { param: { adClientId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CustomChannels
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { adClientId: string } } & {
          query: {
            customChannelId: string
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CustomChannel }
        output: CustomChannel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { adClientId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CustomChannel }
        output: CustomChannel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { adClientId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CustomChannel }
        output: CustomChannel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/adclients/:adClientId/customchannels/:customChannelId': {
      $delete: {
        input: { param: { adClientId: string; customChannelId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CustomChannel
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { adClientId: string; customChannelId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CustomChannel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/adclients/:adClientId/urlchannels': {
      $get: {
        input: { param: { adClientId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: UrlChannels
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { adClientId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: UrlChannel }
        output: UrlChannel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/adclients/:adClientId/urlchannels/:urlChannelId': {
      $delete: {
        input: { param: { adClientId: string; urlChannelId: string } } & {
          query: {
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: UrlChannel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/associationsessions/start': {
      $get: {
        input: {
          query: {
            productCode: ('AFC' | 'AFG' | 'AFMC' | 'AFS' | 'AFV')[]
            websiteUrl: string
            callbackUrl?: string | undefined
            userLocale?: string | undefined
            websiteLocale?: string | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AssociationSession
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/associationsessions/verify': {
      $get: {
        input: {
          query: {
            token: string
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AssociationSession
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports': {
      $get: {
        input: {
          query: {
            startDate: string
            endDate: string
            dimension?: string[] | undefined
            filter?: string[] | undefined
            locale?: string | undefined
            maxResults?: number | undefined
            metric?: string[] | undefined
            sort?: string[] | undefined
            startIndex?: number | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
