type GoogleTypeMoney = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type GoogleCloudRecommenderV1beta1CostProjection = {
  cost?: GoogleTypeMoney | undefined
  duration?: string | undefined
}
type GoogleCloudRecommenderV1beta1ReliabilityProjection = {
  details?: { [x: string]: { [x: string]: unknown } } | undefined
  risks?:
    | ('RISK_TYPE_UNSPECIFIED' | 'SERVICE_DISRUPTION' | 'DATA_LOSS' | 'ACCESS_DENY')[]
    | undefined
}
type GoogleCloudRecommenderV1beta1SecurityProjection = {
  details?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudRecommenderV1beta1SustainabilityProjection = {
  duration?: string | undefined
  kgCO2e?: number | undefined
}
type GoogleCloudRecommenderV1beta1Impact = {
  category?:
    | 'CATEGORY_UNSPECIFIED'
    | 'COST'
    | 'SECURITY'
    | 'PERFORMANCE'
    | 'MANAGEABILITY'
    | 'SUSTAINABILITY'
    | 'RELIABILITY'
    | undefined
  costProjection?: GoogleCloudRecommenderV1beta1CostProjection | undefined
  reliabilityProjection?: GoogleCloudRecommenderV1beta1ReliabilityProjection | undefined
  securityProjection?: GoogleCloudRecommenderV1beta1SecurityProjection | undefined
  sustainabilityProjection?: GoogleCloudRecommenderV1beta1SustainabilityProjection | undefined
}
type GoogleCloudRecommenderV1beta1RecommendationInsightReference = { insight?: string | undefined }
type GoogleCloudRecommenderV1beta1ValueMatcher = { matchesPattern?: string | undefined }
type GoogleCloudRecommenderV1beta1Operation = {
  action?: string | undefined
  path?: string | undefined
  pathFilters?: { [x: string]: { [x: string]: unknown } } | undefined
  pathValueMatchers?: { [x: string]: GoogleCloudRecommenderV1beta1ValueMatcher } | undefined
  resource?: string | undefined
  resourceType?: string | undefined
  sourcePath?: string | undefined
  sourceResource?: string | undefined
  value?: { [x: string]: unknown } | undefined
  valueMatcher?: GoogleCloudRecommenderV1beta1ValueMatcher | undefined
}
type GoogleCloudRecommenderV1beta1OperationGroup = {
  operations?: GoogleCloudRecommenderV1beta1Operation[] | undefined
}
type GoogleCloudRecommenderV1beta1RecommendationContent = {
  operationGroups?: GoogleCloudRecommenderV1beta1OperationGroup[] | undefined
  overview?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudRecommenderV1beta1RecommendationStateInfo = {
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'CLAIMED'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'DISMISSED'
    | undefined
  stateMetadata?: { [x: string]: string } | undefined
}
type GoogleCloudRecommenderV1beta1Recommendation = {
  additionalImpact?: GoogleCloudRecommenderV1beta1Impact[] | undefined
  associatedInsights?: GoogleCloudRecommenderV1beta1RecommendationInsightReference[] | undefined
  content?: GoogleCloudRecommenderV1beta1RecommendationContent | undefined
  description?: string | undefined
  etag?: string | undefined
  lastRefreshTime?: string | undefined
  name?: string | undefined
  primaryImpact?: GoogleCloudRecommenderV1beta1Impact | undefined
  priority?: 'PRIORITY_UNSPECIFIED' | 'P4' | 'P3' | 'P2' | 'P1' | undefined
  recommenderSubtype?: string | undefined
  stateInfo?: GoogleCloudRecommenderV1beta1RecommendationStateInfo | undefined
  xorGroupId?: string | undefined
}
type GoogleCloudRecommenderV1beta1RecommenderGenerationConfig = {
  params?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudRecommenderV1beta1RecommenderConfig = {
  annotations?: { [x: string]: string } | undefined
  displayName?: string | undefined
  etag?: string | undefined
  name?: string | undefined
  recommenderGenerationConfig?: GoogleCloudRecommenderV1beta1RecommenderGenerationConfig | undefined
  revisionId?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest = {
  etag?: string | undefined
  stateMetadata?: { [x: string]: string } | undefined
}
type GoogleCloudRecommenderV1beta1InsightRecommendationReference = {
  recommendation?: string | undefined
}
type GoogleCloudRecommenderV1beta1InsightStateInfo = {
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'ACCEPTED' | 'DISMISSED' | undefined
  stateMetadata?: { [x: string]: string } | undefined
}
type GoogleCloudRecommenderV1beta1Insight = {
  associatedRecommendations?:
    | GoogleCloudRecommenderV1beta1InsightRecommendationReference[]
    | undefined
  category?:
    | 'CATEGORY_UNSPECIFIED'
    | 'COST'
    | 'SECURITY'
    | 'PERFORMANCE'
    | 'MANAGEABILITY'
    | 'SUSTAINABILITY'
    | 'RELIABILITY'
    | undefined
  content?: { [x: string]: { [x: string]: unknown } } | undefined
  description?: string | undefined
  etag?: string | undefined
  insightSubtype?: string | undefined
  lastRefreshTime?: string | undefined
  name?: string | undefined
  observationPeriod?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | undefined
  stateInfo?: GoogleCloudRecommenderV1beta1InsightStateInfo | undefined
  targetResources?: string[] | undefined
}
type GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest = {
  etag?: string | undefined
  stateMetadata?: { [x: string]: string } | undefined
}
type GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest = { etag?: string | undefined }
type GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest = {
  etag?: string | undefined
  stateMetadata?: { [x: string]: string } | undefined
}
type GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest = {
  etag?: string | undefined
  stateMetadata?: { [x: string]: string } | undefined
}
type GoogleCloudRecommenderV1beta1ListInsightsResponse = {
  insights?: GoogleCloudRecommenderV1beta1Insight[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudRecommenderV1beta1ListRecommendationsResponse = {
  nextPageToken?: string | undefined
  recommendations?: GoogleCloudRecommenderV1beta1Recommendation[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
        output: GoogleCloudRecommenderV1beta1Recommendation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudRecommenderV1beta1RecommenderConfig }
        output: GoogleCloudRecommenderV1beta1RecommenderConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:markAccepted': {
      $post: {
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
        } & { json: GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest }
        output: GoogleCloudRecommenderV1beta1Insight
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:markClaimed': {
      $post: {
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
        } & { json: GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest }
        output: GoogleCloudRecommenderV1beta1Recommendation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:markDismissed': {
      $post: {
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
        } & { json: GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest }
        output: GoogleCloudRecommenderV1beta1Recommendation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:markFailed': {
      $post: {
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
        } & { json: GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest }
        output: GoogleCloudRecommenderV1beta1Recommendation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:markSucceeded': {
      $post: {
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
        } & { json: GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest }
        output: GoogleCloudRecommenderV1beta1Recommendation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/insights': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: GoogleCloudRecommenderV1beta1ListInsightsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/recommendations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: GoogleCloudRecommenderV1beta1ListRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
