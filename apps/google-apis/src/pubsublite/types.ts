type Empty = { [x: string]: unknown }
type Capacity = { publishMibPerSec?: number | undefined; subscribeMibPerSec?: number | undefined }
type PartitionConfig = {
  capacity?: Capacity | undefined
  count?: string | undefined
  scale?: number | undefined
}
type ReservationConfig = { throughputReservation?: string | undefined }
type RetentionConfig = { perPartitionBytes?: string | undefined; period?: string | undefined }
type Topic = {
  name?: string | undefined
  partitionConfig?: PartitionConfig | undefined
  reservationConfig?: ReservationConfig | undefined
  retentionConfig?: RetentionConfig | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type TopicPartitions = { partitionCount?: string | undefined }
type ListTopicSubscriptionsResponse = {
  nextPageToken?: string | undefined
  subscriptions?: string[] | undefined
}
type ListReservationTopicsResponse = {
  nextPageToken?: string | undefined
  topics?: string[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type TimeTarget = { eventTime?: string | undefined; publishTime?: string | undefined }
type SeekSubscriptionRequest = {
  namedTarget?: 'NAMED_TARGET_UNSPECIFIED' | 'TAIL' | 'HEAD' | undefined
  timeTarget?: TimeTarget | undefined
}
type Reservation = { name?: string | undefined; throughputCapacity?: string | undefined }
type ListReservationsResponse = {
  nextPageToken?: string | undefined
  reservations?: Reservation[] | undefined
}
type DeliveryConfig = {
  deliveryRequirement?:
    | 'DELIVERY_REQUIREMENT_UNSPECIFIED'
    | 'DELIVER_IMMEDIATELY'
    | 'DELIVER_AFTER_STORED'
    | undefined
}
type PubSubConfig = { topic?: string | undefined }
type ExportConfig = {
  currentState?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'PAUSED'
    | 'PERMISSION_DENIED'
    | 'NOT_FOUND'
    | undefined
  deadLetterTopic?: string | undefined
  desiredState?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'PAUSED'
    | 'PERMISSION_DENIED'
    | 'NOT_FOUND'
    | undefined
  pubsubConfig?: PubSubConfig | undefined
}
type Subscription = {
  deliveryConfig?: DeliveryConfig | undefined
  exportConfig?: ExportConfig | undefined
  name?: string | undefined
  topic?: string | undefined
}
type ListSubscriptionsResponse = {
  nextPageToken?: string | undefined
  subscriptions?: Subscription[] | undefined
}
type ListTopicsResponse = { nextPageToken?: string | undefined; topics?: Topic[] | undefined }
type Cursor = { offset?: string | undefined }
type PartitionCursor = { cursor?: Cursor | undefined; partition?: string | undefined }
type ListPartitionCursorsResponse = {
  nextPageToken?: string | undefined
  partitionCursors?: PartitionCursor[] | undefined
}
type CommitCursorRequest = { cursor?: Cursor | undefined; partition?: string | undefined }
type CommitCursorResponse = { [x: string]: unknown }
type ComputeHeadCursorRequest = { partition?: string | undefined }
type ComputeHeadCursorResponse = { headCursor?: Cursor | undefined }
type ComputeMessageStatsRequest = {
  endCursor?: Cursor | undefined
  partition?: string | undefined
  startCursor?: Cursor | undefined
}
type ComputeMessageStatsResponse = {
  messageBytes?: string | undefined
  messageCount?: string | undefined
  minimumEventTime?: string | undefined
  minimumPublishTime?: string | undefined
}
type ComputeTimeCursorRequest = { partition?: string | undefined; target?: TimeTarget | undefined }
type ComputeTimeCursorResponse = { cursor?: Cursor | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/admin/:name': {
      $delete: {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
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
        output: Topic
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: Topic }
        output: Topic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/:name/partitions': {
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
        output: TopicPartitions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/:name/subscriptions': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListTopicSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/:name/topics': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListReservationTopicsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/:name:cancel': {
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
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/:name:seek': {
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
        } & { json: SeekSubscriptionRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/:parent/reservations': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListReservationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            reservationId?: string | undefined
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
        } & { json: Reservation }
        output: Reservation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/:parent/subscriptions': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            skipBacklog?: boolean | undefined
            subscriptionId?: string | undefined
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
        } & { json: Subscription }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/:parent/topics': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListTopicsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            topicId?: string | undefined
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
        } & { json: Topic }
        output: Topic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/cursor/:parent/cursors': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListPartitionCursorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/cursor/:subscription:commitCursor': {
      $post: {
        input: { param: { subscription: string } } & {
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
        } & { json: CommitCursorRequest }
        output: CommitCursorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/topicStats/:topic:computeHeadCursor': {
      $post: {
        input: { param: { topic: string } } & {
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
        } & { json: ComputeHeadCursorRequest }
        output: ComputeHeadCursorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/topicStats/:topic:computeMessageStats': {
      $post: {
        input: { param: { topic: string } } & {
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
        } & { json: ComputeMessageStatsRequest }
        output: ComputeMessageStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/topicStats/:topic:computeTimeCursor': {
      $post: {
        input: { param: { topic: string } } & {
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
        } & { json: ComputeTimeCursorRequest }
        output: ComputeTimeCursorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
