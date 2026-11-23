type Application = {
  detailsUrl?: string | undefined
  name?: string | undefined
  packageName?: string | undefined
  version?: string | undefined
}
type DataTypeField = {
  format?:
    | 'integer'
    | 'floatPoint'
    | 'string'
    | 'map'
    | 'integerList'
    | 'floatList'
    | 'blob'
    | undefined
  name?: string | undefined
  optional?: boolean | undefined
}
type DataType = { field?: DataTypeField[] | undefined; name?: string | undefined }
type Device = {
  manufacturer?: string | undefined
  model?: string | undefined
  type?:
    | 'unknown'
    | 'phone'
    | 'tablet'
    | 'watch'
    | 'chestStrap'
    | 'scale'
    | 'headMounted'
    | 'smartDisplay'
    | undefined
  uid?: string | undefined
  version?: string | undefined
}
type DataSource = {
  application?: Application | undefined
  dataQualityStandard?:
    | (
        | 'dataQualityUnknown'
        | 'dataQualityBloodPressureEsh2002'
        | 'dataQualityBloodPressureEsh2010'
        | 'dataQualityBloodPressureAami'
        | 'dataQualityBloodPressureBhsAA'
        | 'dataQualityBloodPressureBhsAB'
        | 'dataQualityBloodPressureBhsBA'
        | 'dataQualityBloodPressureBhsBB'
        | 'dataQualityBloodGlucoseIso151972003'
        | 'dataQualityBloodGlucoseIso151972013'
      )[]
    | undefined
  dataStreamId?: string | undefined
  dataStreamName?: string | undefined
  dataType?: DataType | undefined
  device?: Device | undefined
  name?: string | undefined
  type?: 'raw' | 'derived' | undefined
}
type ListDataSourcesResponse = { dataSource?: DataSource[] | undefined }
type MapValue = { fpVal?: number | undefined }
type ValueMapValEntry = { key?: string | undefined; value?: MapValue | undefined }
type Value = {
  fpVal?: number | undefined
  intVal?: number | undefined
  mapVal?: ValueMapValEntry[] | undefined
  stringVal?: string | undefined
}
type DataPoint = {
  computationTimeMillis?: string | undefined
  dataTypeName?: string | undefined
  endTimeNanos?: string | undefined
  modifiedTimeMillis?: string | undefined
  originDataSourceId?: string | undefined
  rawTimestampNanos?: string | undefined
  startTimeNanos?: string | undefined
  value?: Value[] | undefined
}
type ListDataPointChangesResponse = {
  dataSourceId?: string | undefined
  deletedDataPoint?: DataPoint[] | undefined
  insertedDataPoint?: DataPoint[] | undefined
  nextPageToken?: string | undefined
}
type Dataset = {
  dataSourceId?: string | undefined
  maxEndTimeNs?: string | undefined
  minStartTimeNs?: string | undefined
  nextPageToken?: string | undefined
  point?: DataPoint[] | undefined
}
type AggregateBy = { dataSourceId?: string | undefined; dataTypeName?: string | undefined }
type BucketByActivity = {
  activityDataSourceId?: string | undefined
  minDurationMillis?: string | undefined
}
type BucketBySession = { minDurationMillis?: string | undefined }
type BucketByTimePeriod = {
  timeZoneId?: string | undefined
  type?: 'day' | 'week' | 'month' | undefined
  value?: number | undefined
}
type BucketByTime = { durationMillis?: string | undefined; period?: BucketByTimePeriod | undefined }
type AggregateRequest = {
  aggregateBy?: AggregateBy[] | undefined
  bucketByActivitySegment?: BucketByActivity | undefined
  bucketByActivityType?: BucketByActivity | undefined
  bucketBySession?: BucketBySession | undefined
  bucketByTime?: BucketByTime | undefined
  endTimeMillis?: string | undefined
  filteredDataQualityStandard?:
    | (
        | 'dataQualityUnknown'
        | 'dataQualityBloodPressureEsh2002'
        | 'dataQualityBloodPressureEsh2010'
        | 'dataQualityBloodPressureAami'
        | 'dataQualityBloodPressureBhsAA'
        | 'dataQualityBloodPressureBhsAB'
        | 'dataQualityBloodPressureBhsBA'
        | 'dataQualityBloodPressureBhsBB'
        | 'dataQualityBloodGlucoseIso151972003'
        | 'dataQualityBloodGlucoseIso151972013'
      )[]
    | undefined
  startTimeMillis?: string | undefined
}
type Session = {
  activeTimeMillis?: string | undefined
  activityType?: number | undefined
  application?: Application | undefined
  description?: string | undefined
  endTimeMillis?: string | undefined
  id?: string | undefined
  modifiedTimeMillis?: string | undefined
  name?: string | undefined
  startTimeMillis?: string | undefined
}
type AggregateBucket = {
  activity?: number | undefined
  dataset?: Dataset[] | undefined
  endTimeMillis?: string | undefined
  session?: Session | undefined
  startTimeMillis?: string | undefined
  type?: 'unknown' | 'time' | 'session' | 'activityType' | 'activitySegment' | undefined
}
type AggregateResponse = { bucket?: AggregateBucket[] | undefined }
type ListSessionsResponse = {
  deletedSession?: Session[] | undefined
  hasMoreData?: boolean | undefined
  nextPageToken?: string | undefined
  session?: Session[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:userId/dataSources': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            dataTypeName?: string[] | undefined
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
        output: ListDataSourcesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
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
        } & { json: DataSource }
        output: DataSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:userId/dataSources/:dataSourceId': {
      $delete: {
        input: { param: { userId: string; dataSourceId: string } } & {
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
        output: DataSource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { userId: string; dataSourceId: string } } & {
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
        output: DataSource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string; dataSourceId: string } } & {
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
        } & { json: DataSource }
        output: DataSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:userId/dataSources/:dataSourceId/dataPointChanges': {
      $get: {
        input: { param: { userId: string; dataSourceId: string } } & {
          query: {
            limit?: number | undefined
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
        output: ListDataPointChangesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:userId/dataSources/:dataSourceId/datasets/:datasetId': {
      $delete: {
        input: { param: { userId: string; dataSourceId: string; datasetId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; dataSourceId: string; datasetId: string } } & {
          query: {
            limit?: number | undefined
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
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { userId: string; dataSourceId: string; datasetId: string } } & {
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
        } & { json: Dataset }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:userId/dataset:aggregate': {
      $post: {
        input: { param: { userId: string } } & {
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
        } & { json: AggregateRequest }
        output: AggregateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:userId/sessions': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            activityType?: number[] | undefined
            endTime?: string | undefined
            includeDeleted?: boolean | undefined
            pageToken?: string | undefined
            startTime?: string | undefined
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
        output: ListSessionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:userId/sessions/:sessionId': {
      $delete: {
        input: { param: { userId: string; sessionId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { userId: string; sessionId: string } } & {
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
        } & { json: Session }
        output: Session
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
