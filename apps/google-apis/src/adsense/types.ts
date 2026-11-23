type Account = {
  creation_time?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  premium?: boolean | undefined
  subAccounts?: Account[] | undefined
  timezone?: string | undefined
}
type Accounts = {
  etag?: string | undefined
  items?: Account[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
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
type AdCode = {
  adCode?: string | undefined
  ampBody?: string | undefined
  ampHead?: string | undefined
  kind?: string | undefined
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
  feedAdsSettings?:
    | {
        adPosition?: string | undefined
        frequency?: number | undefined
        minimumWordCount?: number | undefined
        type?: string | undefined
      }
    | undefined
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
  savedStyleId?: string | undefined
  status?: string | undefined
}
type AdUnits = {
  etag?: string | undefined
  items?: AdUnit[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CustomChannel = {
  code?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  targetingInfo?:
    | {
        adsAppearOn?: string | undefined
        description?: string | undefined
        location?: string | undefined
        siteLanguage?: string | undefined
      }
    | undefined
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
type Alert = {
  id?: string | undefined
  isDismissible?: boolean | undefined
  kind?: string | undefined
  message?: string | undefined
  severity?: string | undefined
  type?: string | undefined
}
type Alerts = { items?: Alert[] | undefined; kind?: string | undefined }
type Payment = {
  id?: string | undefined
  kind?: string | undefined
  paymentAmount?: string | undefined
  paymentAmountCurrencyCode?: string | undefined
  paymentDate?: string | undefined
}
type Payments = { items?: Payment[] | undefined; kind?: string | undefined }
type AdsenseReportsGenerateResponse = {
  averages?: string[] | undefined
  endDate?: string | undefined
  headers?:
    | { currency?: string | undefined; name?: string | undefined; type?: string | undefined }[]
    | undefined
  kind?: string | undefined
  rows?: string[][] | undefined
  startDate?: string | undefined
  totalMatchedRows?: string | undefined
  totals?: string[] | undefined
  warnings?: string[] | undefined
}
type SavedReport = { id?: string | undefined; kind?: string | undefined; name?: string | undefined }
type SavedReports = {
  etag?: string | undefined
  items?: SavedReport[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type SavedAdStyle = {
  adStyle?: AdStyle | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type SavedAdStyles = {
  etag?: string | undefined
  items?: SavedAdStyle[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type ReportingMetadataEntry = {
  compatibleDimensions?: string[] | undefined
  compatibleMetrics?: string[] | undefined
  id?: string | undefined
  kind?: string | undefined
  requiredDimensions?: string[] | undefined
  requiredMetrics?: string[] | undefined
  supportedProducts?: string[] | undefined
}
type Metadata = { items?: ReportingMetadataEntry[] | undefined; kind?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts': {
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
            tree?: boolean | undefined
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
    '/accounts/:accountId/adclients/:adClientId/adcode': {
      $get: {
        input: { param: { accountId: string; adClientId: string } } & {
          query: {
            tagPartner?: string | undefined
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
    }
  } & {
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId': {
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
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId/customchannels': {
      $get: {
        input: { param: { accountId: string; adClientId: string; adUnitId: string } } & {
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
    }
  } & {
    '/accounts/:accountId/adclients/:adClientId/customchannels': {
      $get: {
        input: { param: { accountId: string; adClientId: string } } & {
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
    }
  } & {
    '/accounts/:accountId/adclients/:adClientId/customchannels/:customChannelId': {
      $get: {
        input: { param: { accountId: string; adClientId: string; customChannelId: string } } & {
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
    '/accounts/:accountId/adclients/:adClientId/customchannels/:customChannelId/adunits': {
      $get: {
        input: { param: { accountId: string; adClientId: string; customChannelId: string } } & {
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
    }
  } & {
    '/accounts/:accountId/adclients/:adClientId/urlchannels': {
      $get: {
        input: { param: { accountId: string; adClientId: string } } & {
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
    }
  } & {
    '/accounts/:accountId/alerts': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            locale?: string | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Alerts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/alerts/:alertId': {
      $delete: {
        input: { param: { accountId: string; alertId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/payments': {
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
        output: Payments
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
            currency?: string | undefined
            dimension?: string[] | undefined
            filter?: string[] | undefined
            locale?: string | undefined
            maxResults?: number | undefined
            metric?: string[] | undefined
            sort?: string[] | undefined
            startIndex?: number | undefined
            useTimezoneReporting?: boolean | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdsenseReportsGenerateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/reports/saved': {
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
        output: SavedReports
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/reports/:savedReportId': {
      $get: {
        input: { param: { accountId: string; savedReportId: string } } & {
          query: {
            locale?: string | undefined
            maxResults?: number | undefined
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
        output: AdsenseReportsGenerateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/savedadstyles': {
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
        output: SavedAdStyles
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/savedadstyles/:savedAdStyleId': {
      $get: {
        input: { param: { accountId: string; savedAdStyleId: string } } & {
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
        output: SavedAdStyle
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
    '/adclients/:adClientId/adunits': {
      $get: {
        input: { param: { adClientId: string } } & {
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
    }
  } & {
    '/adclients/:adClientId/adunits/:adUnitId': {
      $get: {
        input: { param: { adClientId: string; adUnitId: string } } & {
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
    '/adclients/:adClientId/adunits/:adUnitId/adcode': {
      $get: {
        input: { param: { adClientId: string; adUnitId: string } } & {
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
        output: AdCode
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/adclients/:adClientId/adunits/:adUnitId/customchannels': {
      $get: {
        input: { param: { adClientId: string; adUnitId: string } } & {
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
    }
  } & {
    '/adclients/:adClientId/customchannels/:customChannelId': {
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
    '/adclients/:adClientId/customchannels/:customChannelId/adunits': {
      $get: {
        input: { param: { adClientId: string; customChannelId: string } } & {
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
    }
  } & {
    '/alerts': {
      $get: {
        input: {
          query: {
            locale?: string | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Alerts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alerts/:alertId': {
      $delete: {
        input: { param: { alertId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/metadata/dimensions': {
      $get: {
        input: {
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
        output: Metadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metadata/metrics': {
      $get: {
        input: {
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
        output: Metadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payments': {
      $get: {
        input: {
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
        output: Payments
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
            accountId?: string[] | undefined
            currency?: string | undefined
            dimension?: string[] | undefined
            filter?: string[] | undefined
            locale?: string | undefined
            maxResults?: number | undefined
            metric?: string[] | undefined
            sort?: string[] | undefined
            startIndex?: number | undefined
            useTimezoneReporting?: boolean | undefined
            alt?: 'csv' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AdsenseReportsGenerateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports/saved': {
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
        output: SavedReports
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports/:savedReportId': {
      $get: {
        input: { param: { savedReportId: string } } & {
          query: {
            locale?: string | undefined
            maxResults?: number | undefined
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
        output: AdsenseReportsGenerateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/savedadstyles': {
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
        output: SavedAdStyles
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/savedadstyles/:savedAdStyleId': {
      $get: {
        input: { param: { savedAdStyleId: string } } & {
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
        output: SavedAdStyle
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
