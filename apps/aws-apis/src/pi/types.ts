type DescribeDimensionKeysRequest = {
  ServiceType: {}
  Identifier: {}
  StartTime: {}
  EndTime: {}
  Metric: {}
  PeriodInSeconds?: {} | undefined
  GroupBy: { Group: {}; Dimensions?: {} | undefined; Limit?: {} | undefined }
  AdditionalMetrics?: {} | undefined
  PartitionBy?: { Group: {}; Dimensions?: {} | undefined; Limit?: {} | undefined } | undefined
  Filter?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeDimensionKeysResponse = {
  AlignedStartTime?: {} | undefined
  AlignedEndTime?: {} | undefined
  PartitionKeys?: {} | undefined
  Keys?: {} | undefined
  NextToken?: {} | undefined
}
type GetDimensionKeyDetailsRequest = {
  ServiceType: {}
  Identifier: {}
  Group: {}
  GroupIdentifier: {}
  RequestedDimensions?: {} | undefined
}
type GetDimensionKeyDetailsResponse = { Dimensions?: {} | undefined }
type GetResourceMetadataRequest = { ServiceType: {}; Identifier: {} }
type GetResourceMetadataResponse = { Identifier?: {} | undefined; Features?: {} | undefined }
type GetResourceMetricsRequest = {
  ServiceType: {}
  Identifier: {}
  MetricQueries: {}
  StartTime: {}
  EndTime: {}
  PeriodInSeconds?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  PeriodAlignment?: {} | undefined
}
type GetResourceMetricsResponse = {
  AlignedStartTime?: {} | undefined
  AlignedEndTime?: {} | undefined
  Identifier?: {} | undefined
  MetricList?: {} | undefined
  NextToken?: {} | undefined
}
type ListAvailableResourceDimensionsRequest = {
  ServiceType: {}
  Identifier: {}
  Metrics: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAvailableResourceDimensionsResponse = {
  MetricDimensions?: {} | undefined
  NextToken?: {} | undefined
}
type ListAvailableResourceMetricsRequest = {
  ServiceType: {}
  Identifier: {}
  MetricTypes: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListAvailableResourceMetricsResponse = { Metrics?: {} | undefined; NextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'PerformanceInsightsv20180227.DescribeDimensionKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDimensionKeysRequest }
        output: DescribeDimensionKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'PerformanceInsightsv20180227.GetDimensionKeyDetails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDimensionKeyDetailsRequest }
        output: GetDimensionKeyDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'PerformanceInsightsv20180227.GetResourceMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourceMetadataRequest }
        output: GetResourceMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'PerformanceInsightsv20180227.GetResourceMetrics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourceMetricsRequest }
        output: GetResourceMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'PerformanceInsightsv20180227.ListAvailableResourceDimensions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAvailableResourceDimensionsRequest }
        output: ListAvailableResourceDimensionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'PerformanceInsightsv20180227.ListAvailableResourceMetrics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAvailableResourceMetricsRequest }
        output: ListAvailableResourceMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
