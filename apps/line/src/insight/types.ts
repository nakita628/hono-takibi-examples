type GenderTile = {
  gender?: 'male' | 'female' | 'unknown' | undefined
  percentage?: number | undefined
}
type AgeTile = {
  age?:
    | 'from0to14'
    | 'from15to19'
    | 'from20to24'
    | 'from25to29'
    | 'from30to34'
    | 'from35to39'
    | 'from40to44'
    | 'from45to49'
    | 'from50'
    | 'from50to54'
    | 'from55to59'
    | 'from60to64'
    | 'from65to69'
    | 'from70'
    | 'unknown'
    | undefined
  percentage?: number | undefined
}
type AreaTile = { area?: string | undefined; percentage?: number | undefined }
type AppTypeTile = {
  appType?: 'ios' | 'android' | 'others' | undefined
  percentage?: number | undefined
}
type SubscriptionPeriodTile = {
  subscriptionPeriod?:
    | 'within7days'
    | 'within30days'
    | 'within90days'
    | 'within180days'
    | 'within365days'
    | 'over365days'
    | 'unknown'
    | undefined
  percentage?: number | undefined
}
type GetFriendsDemographicsResponse = {
  available?: boolean | undefined
  genders?: GenderTile[] | undefined
  ages?: AgeTile[] | undefined
  areas?: AreaTile[] | undefined
  appTypes?: AppTypeTile[] | undefined
  subscriptionPeriods?: SubscriptionPeriodTile[] | undefined
}
type GetNumberOfMessageDeliveriesResponse = {
  status?: 'ready' | 'unready' | 'out_of_service' | undefined
  broadcast?: bigint | undefined
  targeting?: bigint | undefined
  autoResponse?: bigint | undefined
  welcomeResponse?: bigint | undefined
  chat?: bigint | undefined
  apiBroadcast?: bigint | undefined
  apiPush?: bigint | undefined
  apiMulticast?: bigint | undefined
  apiNarrowcast?: bigint | undefined
  apiReply?: bigint | undefined
}
type GetNumberOfFollowersResponse = {
  status?: 'ready' | 'unready' | 'out_of_service' | undefined
  followers?: bigint | undefined
  targetedReaches?: bigint | undefined
  blocks?: bigint | undefined
}
type GetMessageEventResponseOverview = {
  requestId?: string | undefined
  timestamp?: bigint | undefined
  delivered?: bigint | undefined
  uniqueImpression?: (bigint | null) | undefined
  uniqueClick?: (bigint | null) | undefined
  uniqueMediaPlayed?: (bigint | null) | undefined
  uniqueMediaPlayed100Percent?: (bigint | null) | undefined
}
type GetMessageEventResponseMessage = {
  seq?: number | undefined
  impression?: (bigint | null) | undefined
  mediaPlayed?: (bigint | null) | undefined
  mediaPlayed25Percent?: (bigint | null) | undefined
  mediaPlayed50Percent?: (bigint | null) | undefined
  mediaPlayed75Percent?: (bigint | null) | undefined
  mediaPlayed100Percent?: (bigint | null) | undefined
  uniqueMediaPlayed?: (bigint | null) | undefined
  uniqueMediaPlayed25Percent?: (bigint | null) | undefined
  uniqueMediaPlayed50Percent?: (bigint | null) | undefined
  uniqueMediaPlayed75Percent?: (bigint | null) | undefined
  uniqueMediaPlayed100Percent?: (bigint | null) | undefined
}
type GetMessageEventResponseClick = {
  seq?: number | undefined
  url?: string | undefined
  click?: (bigint | null) | undefined
  uniqueClick?: (bigint | null) | undefined
  uniqueClickOfRequest?: (bigint | null) | undefined
}
type GetMessageEventResponse = {
  overview?: GetMessageEventResponseOverview | undefined
  messages?: GetMessageEventResponseMessage[] | undefined
  clicks?: GetMessageEventResponseClick[] | undefined
}
type GetStatisticsPerUnitResponseOverview = {
  uniqueImpression?: (bigint | null) | undefined
  uniqueClick?: (bigint | null) | undefined
  uniqueMediaPlayed?: (bigint | null) | undefined
  uniqueMediaPlayed100Percent?: (bigint | null) | undefined
}
type GetStatisticsPerUnitResponseMessage = {
  seq: number
  impression?: (bigint | null) | undefined
  mediaPlayed?: (bigint | null) | undefined
  mediaPlayed25Percent?: (bigint | null) | undefined
  mediaPlayed50Percent?: (bigint | null) | undefined
  mediaPlayed75Percent?: (bigint | null) | undefined
  mediaPlayed100Percent?: (bigint | null) | undefined
  uniqueImpression?: (bigint | null) | undefined
  uniqueMediaPlayed?: (bigint | null) | undefined
  uniqueMediaPlayed25Percent?: (bigint | null) | undefined
  uniqueMediaPlayed50Percent?: (bigint | null) | undefined
  uniqueMediaPlayed75Percent?: (bigint | null) | undefined
  uniqueMediaPlayed100Percent?: (bigint | null) | undefined
}
type GetStatisticsPerUnitResponseClick = {
  seq: bigint
  url: string
  click?: (bigint | null) | undefined
  uniqueClick?: (bigint | null) | undefined
  uniqueClickOfRequest?: (bigint | null) | undefined
}
type GetStatisticsPerUnitResponse = {
  overview: GetStatisticsPerUnitResponseOverview
  messages: GetStatisticsPerUnitResponseMessage[]
  clicks: GetStatisticsPerUnitResponseClick[]
}
type GetRichMenuInsightSummaryResponseMetrics = { count: bigint; uniqueUsers: bigint }
type GetRichMenuInsightSummaryResponseImpression = {
  metrics: GetRichMenuInsightSummaryResponseMetrics
}
type GetRichMenuInsightSummaryResponseBounds = {
  x: number
  y: number
  width: number
  height: number
}
type GetRichMenuInsightSummaryResponseClick = {
  bounds: GetRichMenuInsightSummaryResponseBounds
  metrics: GetRichMenuInsightSummaryResponseMetrics
}
type GetRichMenuInsightSummaryResponse = {
  richMenuId: string
  metricsFrom?: (string | null) | undefined
  metricsTo?: (string | null) | undefined
  impression?: GetRichMenuInsightSummaryResponseImpression | undefined
  clicks?: GetRichMenuInsightSummaryResponseClick[] | undefined
}
type ErrorDetail = { message?: string | undefined; property?: string | undefined }
type ErrorResponse = { message: string; details?: ErrorDetail[] | undefined }
type GetRichMenuInsightDailyResponseDailyMetrics = {
  date: string
  count: bigint
  uniqueUsers: bigint
}
type GetRichMenuInsightDailyResponseImpression = {
  metrics: GetRichMenuInsightDailyResponseDailyMetrics[]
}
type GetRichMenuInsightDailyResponseBounds = { x: number; y: number; width: number; height: number }
type GetRichMenuInsightDailyResponseClick = {
  bounds: GetRichMenuInsightDailyResponseBounds
  metrics: GetRichMenuInsightDailyResponseDailyMetrics[]
}
type GetRichMenuInsightDailyResponse = {
  richMenuId: string
  metricsFrom?: (string | null) | undefined
  metricsTo?: (string | null) | undefined
  impression?: GetRichMenuInsightDailyResponseImpression | undefined
  clicks?: GetRichMenuInsightDailyResponseClick[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/bot/insight/demographic': {
      $get: { input: {}; output: GetFriendsDemographicsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/bot/insight/message/delivery': {
      $get: {
        input: { query: { date: string } }
        output: GetNumberOfMessageDeliveriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/insight/followers': {
      $get: {
        input: { query: { date?: string | undefined } }
        output: GetNumberOfFollowersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/insight/message/event': {
      $get: {
        input: { query: { requestId: string } }
        output: GetMessageEventResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/insight/message/event/aggregation': {
      $get: {
        input: { query: { customAggregationUnit: string; from: string; to: string } }
        output: GetStatisticsPerUnitResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/insight/richmenu/:richMenuId/summary': {
      $get:
        | {
            input: { param: { richMenuId: string } } & { query: { from: string; to: string } }
            output: GetRichMenuInsightSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { richMenuId: string } } & { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { richMenuId: string } } & { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/bot/insight/richmenu/:richMenuId/daily': {
      $get:
        | {
            input: { param: { richMenuId: string } } & { query: { from: string; to: string } }
            output: GetRichMenuInsightDailyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { richMenuId: string } } & { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { richMenuId: string } } & { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
