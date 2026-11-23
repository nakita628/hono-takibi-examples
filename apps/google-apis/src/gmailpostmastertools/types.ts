type Domain = {
  createTime?: string | undefined
  name?: string | undefined
  permission?: 'PERMISSION_UNSPECIFIED' | 'OWNER' | 'READER' | 'NONE' | undefined
}
type ListDomainsResponse = { domains?: Domain[] | undefined; nextPageToken?: string | undefined }
type DeliveryError = {
  errorClass?:
    | 'DELIVERY_ERROR_CLASS_UNSPECIFIED'
    | 'PERMANENT_ERROR'
    | 'TEMPORARY_ERROR'
    | undefined
  errorRatio?: number | undefined
  errorType?:
    | 'DELIVERY_ERROR_TYPE_UNSPECIFIED'
    | 'RATE_LIMIT_EXCEEDED'
    | 'SUSPECTED_SPAM'
    | 'CONTENT_SPAMMY'
    | 'BAD_ATTACHMENT'
    | 'BAD_DMARC_POLICY'
    | 'LOW_IP_REPUTATION'
    | 'LOW_DOMAIN_REPUTATION'
    | 'IP_IN_RBL'
    | 'DOMAIN_IN_RBL'
    | 'BAD_PTR_RECORD'
    | undefined
}
type IpReputation = {
  ipCount?: string | undefined
  numIps?: string | undefined
  reputation?: 'REPUTATION_CATEGORY_UNSPECIFIED' | 'HIGH' | 'MEDIUM' | 'LOW' | 'BAD' | undefined
  sampleIps?: string[] | undefined
}
type FeedbackLoop = { id?: string | undefined; spamRatio?: number | undefined }
type TrafficStats = {
  deliveryErrors?: DeliveryError[] | undefined
  dkimSuccessRatio?: number | undefined
  dmarcSuccessRatio?: number | undefined
  domainReputation?:
    | 'REPUTATION_CATEGORY_UNSPECIFIED'
    | 'HIGH'
    | 'MEDIUM'
    | 'LOW'
    | 'BAD'
    | undefined
  inboundEncryptionRatio?: number | undefined
  ipReputations?: IpReputation[] | undefined
  name?: string | undefined
  outboundEncryptionRatio?: number | undefined
  spammyFeedbackLoops?: FeedbackLoop[] | undefined
  spfSuccessRatio?: number | undefined
  userReportedSpamRatio?: number | undefined
}
type ListTrafficStatsResponse = {
  nextPageToken?: string | undefined
  trafficStats?: TrafficStats[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/domains': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $get: {
        input: { param: { name: string } } & {
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
        }
        output: TrafficStats
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/trafficStats': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            'endDate.day'?: number | undefined
            'endDate.month'?: number | undefined
            'endDate.year'?: number | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            'startDate.day'?: number | undefined
            'startDate.month'?: number | undefined
            'startDate.year'?: number | undefined
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
        output: ListTrafficStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
