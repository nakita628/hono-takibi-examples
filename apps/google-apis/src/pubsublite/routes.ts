import { createRoute, z } from '@hono/zod-openapi'

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const CapacitySchema = z
  .object({
    publishMibPerSec: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.',
      }),
    subscribeMibPerSec: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 32.',
      }),
  })
  .openapi({
    description: 'The throughput capacity configuration for each partition.',
    required: [],
  })
  .openapi('Capacity')

const CursorSchema = z
  .object({
    offset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The offset of a message within a topic partition. Must be greater than or equal 0.',
      }),
  })
  .openapi({
    description: 'A cursor that describes the position of a message within a topic partition.',
    required: [],
  })
  .openapi('Cursor')

const CommitCursorRequestSchema = z
  .object({
    cursor: CursorSchema.exactOptional().openapi({
      description: 'The new value for the committed cursor.',
    }),
    partition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The partition for which to update the cursor. Partitions are zero indexed, so `partition` must be in the range [0, topic.num_partitions).',
      }),
  })
  .openapi({ description: 'Request for CommitCursor.', required: [] })
  .openapi('CommitCursorRequest')

const CommitCursorResponseSchema = z
  .object({})
  .openapi({ description: 'Response for CommitCursor.' })
  .openapi('CommitCursorResponse')

const ComputeHeadCursorRequestSchema = z
  .object({
    partition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The partition for which we should compute the head cursor.',
      }),
  })
  .openapi({ description: 'Compute the current head cursor for a partition.', required: [] })
  .openapi('ComputeHeadCursorRequest')

const ComputeHeadCursorResponseSchema = z
  .object({ headCursor: CursorSchema.exactOptional().openapi({ description: 'The head cursor.' }) })
  .openapi({
    description: 'Response containing the head cursor for the requested topic and partition.',
    required: [],
  })
  .openapi('ComputeHeadCursorResponse')

const ComputeMessageStatsRequestSchema = z
  .object({
    endCursor: CursorSchema.exactOptional().openapi({
      description:
        'The exclusive end of the range. The range is empty if end_cursor <= start_cursor. Specifying a start_cursor before the first message and an end_cursor after the last message will retrieve all messages.',
    }),
    partition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The partition for which we should compute message stats.',
      }),
    startCursor: CursorSchema.exactOptional().openapi({
      description: 'The inclusive start of the range.',
    }),
  })
  .openapi({
    description: 'Compute statistics about a range of messages in a given topic and partition.',
    required: [],
  })
  .openapi('ComputeMessageStatsRequest')

const ComputeMessageStatsResponseSchema = z
  .object({
    messageBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of quota bytes accounted to these messages.' }),
    messageCount: z.string().exactOptional().openapi({ description: 'The count of messages.' }),
    minimumEventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum event timestamp across these messages. For the purposes of this computation, if a message does not have an event time, we use the publish time. The timestamp will be unset if there are no messages.',
      }),
    minimumPublishTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum publish timestamp across these messages. Note that publish timestamps within a partition are not guaranteed to be non-decreasing. The timestamp will be unset if there are no messages.',
      }),
  })
  .openapi({
    description: 'Response containing stats for messages in the requested topic and partition.',
    required: [],
  })
  .openapi('ComputeMessageStatsResponse')

const TimeTargetSchema = z
  .object({
    eventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Request the cursor of the first message with event time greater than or equal to `event_time`. If messages are missing an event time, the publish time is used as a fallback. As event times are user supplied, subsequent messages may have event times less than `event_time` and should be filtered by the client, if necessary.',
      }),
    publishTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Request the cursor of the first message with publish time greater than or equal to `publish_time`. All messages thereafter are guaranteed to have publish times >= `publish_time`.',
      }),
  })
  .openapi({
    description:
      'A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor.',
    required: [],
  })
  .openapi('TimeTarget')

const ComputeTimeCursorRequestSchema = z
  .object({
    partition: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The partition for which we should compute the cursor.' }),
    target: TimeTargetSchema.exactOptional().openapi({
      description:
        'Required. The target publish or event time. Specifying a future time will return an unset cursor.',
    }),
  })
  .openapi({
    description:
      'Compute the corresponding cursor for a publish or event time in a topic partition.',
    required: [],
  })
  .openapi('ComputeTimeCursorRequest')

const ComputeTimeCursorResponseSchema = z
  .object({
    cursor: CursorSchema.exactOptional().openapi({
      description:
        'If present, the cursor references the first message with time greater than or equal to the specified target time. If such a message cannot be found, the cursor will be unset (i.e. `cursor` is not present).',
    }),
  })
  .openapi({
    description:
      'Response containing the cursor corresponding to a publish or event time in a topic partition.',
    required: [],
  })
  .openapi('ComputeTimeCursorResponse')

const DeliveryConfigSchema = z
  .object({
    deliveryRequirement: z
      .enum(['DELIVERY_REQUIREMENT_UNSPECIFIED', 'DELIVER_IMMEDIATELY', 'DELIVER_AFTER_STORED'])
      .exactOptional()
      .openapi({ description: 'The DeliveryRequirement for this subscription.' }),
  })
  .openapi({ description: "The settings for a subscription's message delivery.", required: [] })
  .openapi('DeliveryConfig')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const PubSubConfigSchema = z
  .object({
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Pub/Sub topic. Structured like: projects/{project_number}/topics/{topic_id}. The topic may be changed.',
      }),
  })
  .openapi({ description: 'Configuration for exporting to a Pub/Sub topic.', required: [] })
  .openapi('PubSubConfig')

const ExportConfigSchema = z
  .object({
    currentState: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'PAUSED', 'PERMISSION_DENIED', 'NOT_FOUND'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The current state of the export, which may be different to the desired state due to errors. This field is output only.',
        readOnly: true,
      }),
    deadLetterTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of an optional Pub/Sub Lite topic to publish messages that can not be exported to the destination. For example, the message can not be published to the Pub/Sub service because it does not satisfy the constraints documented at https://cloud.google.com/pubsub/docs/publisher. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}. Must be within the same project and location as the subscription. The topic may be changed or removed.',
      }),
    desiredState: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'PAUSED', 'PERMISSION_DENIED', 'NOT_FOUND'])
      .exactOptional()
      .openapi({
        description:
          'The desired state of this export. Setting this to values other than `ACTIVE` and `PAUSED` will result in an error.',
      }),
    pubsubConfig: PubSubConfigSchema.exactOptional().openapi({
      description:
        'Messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a Pub/Sub topic.',
    }),
  })
  .openapi({
    description:
      'Configuration for a Pub/Sub Lite subscription that writes messages to a destination. User subscriber clients must not connect to this subscription.',
    required: [],
  })
  .openapi('ExportConfig')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const PartitionCursorSchema = z
  .object({
    cursor: CursorSchema.exactOptional().openapi({ description: 'The value of the cursor.' }),
    partition: z.string().exactOptional().openapi({ description: 'The partition this is for.' }),
  })
  .openapi({ description: 'A pair of a Cursor and the partition it is for.', required: [] })
  .openapi('PartitionCursor')

const ListPartitionCursorsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    partitionCursors: z
      .array(PartitionCursorSchema)
      .exactOptional()
      .openapi({ description: 'The partition cursors from this request.' }),
  })
  .openapi({ description: 'Response for ListPartitionCursors', required: [] })
  .openapi('ListPartitionCursorsResponse')

const ListReservationTopicsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.',
      }),
    topics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The names of topics attached to the reservation. The order of the topics is unspecified.',
      }),
  })
  .openapi({ description: 'Response for ListReservationTopics.', required: [] })
  .openapi('ListReservationTopicsResponse')

const ReservationSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}',
      }),
    throughputCapacity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reserved throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages. Any topics which are declared as using capacity from a Reservation will consume resources from this reservation instead of being charged individually.',
      }),
  })
  .openapi({ description: 'Metadata about a reservation resource.', required: [] })
  .openapi('Reservation')

const ListReservationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.',
      }),
    reservations: z
      .array(ReservationSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of reservation in the requested parent. The order of the reservations is unspecified.',
      }),
  })
  .openapi({ description: 'Response for ListReservations.', required: [] })
  .openapi('ListReservationsResponse')

const SubscriptionSchema = z
  .object({
    deliveryConfig: DeliveryConfigSchema.exactOptional().openapi({
      description: "The settings for this subscription's message delivery.",
    }),
    exportConfig: ExportConfigSchema.exactOptional().openapi({
      description:
        'If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id}',
      }),
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the topic this subscription is attached to. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}',
      }),
  })
  .openapi({ description: 'Metadata about a subscription resource.', required: [] })
  .openapi('Subscription')

const ListSubscriptionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.',
      }),
    subscriptions: z
      .array(SubscriptionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of subscriptions in the requested parent. The order of the subscriptions is unspecified.',
      }),
  })
  .openapi({ description: 'Response for ListSubscriptions.', required: [] })
  .openapi('ListSubscriptionsResponse')

const ListTopicSubscriptionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.',
      }),
    subscriptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The names of subscriptions attached to the topic. The order of the subscriptions is unspecified.',
      }),
  })
  .openapi({ description: 'Response for ListTopicSubscriptions.', required: [] })
  .openapi('ListTopicSubscriptionsResponse')

const PartitionConfigSchema = z
  .object({
    capacity: CapacitySchema.exactOptional().openapi({
      description: 'The capacity configuration.',
    }),
    count: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of partitions in the topic. Must be at least 1. Once a topic has been created the number of partitions can be increased but not decreased. Message ordering is not guaranteed across a topic resize. For more information see https://cloud.google.com/pubsub/lite/docs/topics#scaling_capacity',
      }),
    scale: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED: Use capacity instead which can express a superset of configurations. Every partition in the topic is allocated throughput equivalent to `scale` times the standard partition throughput (4 MiB/s). This is also reflected in the cost of this topic; a topic with `scale` of 2 and count of 10 is charged for 20 partitions. This value must be in the range [1,4].',
      }),
  })
  .openapi({ description: "The settings for a topic's partitions.", required: [] })
  .openapi('PartitionConfig')

const ReservationConfigSchema = z
  .object({
    throughputReservation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Reservation to use for this topic's throughput capacity. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}",
      }),
  })
  .openapi({ description: "The settings for this topic's Reservation usage.", required: [] })
  .openapi('ReservationConfig')

const RetentionConfigSchema = z
  .object({
    perPartitionBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of `period`.",
      }),
    period: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`.',
      }),
  })
  .openapi({ description: "The settings for a topic's message retention.", required: [] })
  .openapi('RetentionConfig')

const TopicSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}',
      }),
    partitionConfig: PartitionConfigSchema.exactOptional().openapi({
      description: "The settings for this topic's partitions.",
    }),
    reservationConfig: ReservationConfigSchema.exactOptional().openapi({
      description: "The settings for this topic's Reservation usage.",
    }),
    retentionConfig: RetentionConfigSchema.exactOptional().openapi({
      description: "The settings for this topic's message retention.",
    }),
  })
  .openapi({ description: 'Metadata about a topic resource.', required: [] })
  .openapi('Topic')

const ListTopicsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.',
      }),
    topics: z
      .array(TopicSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of topic in the requested parent. The order of the topics is unspecified.',
      }),
  })
  .openapi({ description: 'Response for ListTopics.', required: [] })
  .openapi('ListTopicsResponse')

const OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time the operation finished running. Not set if the operation has not completed.',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource path for the target of the operation. For example, targets of seeks are subscription resources, structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id}',
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the verb executed by the operation.' }),
  })
  .openapi({ description: 'Metadata for long running operations.', required: [] })
  .openapi('OperationMetadata')

const SeekSubscriptionRequestSchema = z
  .object({
    namedTarget: z
      .enum(['NAMED_TARGET_UNSPECIFIED', 'TAIL', 'HEAD'])
      .exactOptional()
      .openapi({ description: 'Seek to a named position with respect to the message backlog.' }),
    timeTarget: TimeTargetSchema.exactOptional().openapi({
      description:
        'Seek to the first message whose publish or event time is greater than or equal to the specified query time. If no such message can be located, will seek to the end of the message backlog.',
    }),
  })
  .openapi({ description: 'Request for SeekSubscription.', required: [] })
  .openapi('SeekSubscriptionRequest')

const SeekSubscriptionResponseSchema = z
  .object({})
  .openapi({ description: 'Response for SeekSubscription long running operation.' })
  .openapi('SeekSubscriptionResponse')

const TopicPartitionsSchema = z
  .object({
    partitionCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of partitions in the topic.' }),
  })
  .openapi({ description: 'Response for GetTopicPartitions.', required: [] })
  .openapi('TopicPartitions')

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
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
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
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1AdminNameRoute = createRoute({
  method: 'get',
  path: '/v1/admin/{name}',
  tags: ['admin'],
  description: 'Returns the topic configuration.',
  operationId: 'pubsublite.admin.projects.locations.topics.get',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the topic whose configuration to return.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TopicSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1AdminNameRoute = createRoute({
  method: 'delete',
  path: '/v1/admin/{name}',
  tags: ['admin'],
  description: 'Deletes the specified topic.',
  operationId: 'pubsublite.admin.projects.locations.topics.delete',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the topic to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1AdminNameRoute = createRoute({
  method: 'patch',
  path: '/v1/admin/{name}',
  tags: ['admin'],
  description: 'Updates properties of the specified topic.',
  operationId: 'pubsublite.admin.projects.locations.topics.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. A mask specifying the topic fields to change.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TopicSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TopicSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1AdminNameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/admin/{name}/operations',
  tags: ['admin'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'pubsublite.admin.projects.locations.operations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1AdminNamePartitionsRoute = createRoute({
  method: 'get',
  path: '/v1/admin/{name}/partitions',
  tags: ['admin'],
  description: 'Returns the partition information for the requested topic.',
  operationId: 'pubsublite.admin.projects.locations.topics.getPartitions',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The topic whose partition information to return.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TopicPartitionsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1AdminNameSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/v1/admin/{name}/subscriptions',
  tags: ['admin'],
  description: 'Lists the subscriptions attached to the specified topic.',
  operationId: 'pubsublite.admin.projects.locations.topics.subscriptions.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the topic whose subscriptions to list.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTopicSubscriptionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1AdminNameTopicsRoute = createRoute({
  method: 'get',
  path: '/v1/admin/{name}/topics',
  tags: ['admin'],
  description: 'Lists the topics attached to the specified reservation.',
  operationId: 'pubsublite.admin.projects.locations.reservations.topics.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the given reservation will be returned.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListReservationTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservationTopics` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the reservation whose topics to list. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReservationTopicsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1AdminNameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/admin/{name}:cancel',
  tags: ['admin'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'pubsublite.admin.projects.locations.operations.cancel',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1AdminNameSeekRoute = createRoute({
  method: 'post',
  path: '/v1/admin/{name}:seek',
  tags: ['admin'],
  description:
    'Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.',
  operationId: 'pubsublite.admin.projects.locations.subscriptions.seek',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the subscription to seek.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SeekSubscriptionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1AdminParentReservationsRoute = createRoute({
  method: 'get',
  path: '/v1/admin/{parent}/reservations',
  tags: ['admin'],
  description: 'Returns the list of reservations for the given project.',
  operationId: 'pubsublite.admin.projects.locations.reservations.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of reservations to return. The service may return fewer than this value. If unset or zero, all reservations for the parent will be returned.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListReservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservations` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent whose reservations are to be listed. Structured like `projects/{project_number}/locations/{location}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReservationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1AdminParentReservationsRoute = createRoute({
  method: 'post',
  path: '/v1/admin/{parent}/reservations',
  tags: ['admin'],
  description: 'Creates a new reservation.',
  operationId: 'pubsublite.admin.projects.locations.reservations.create',
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
      reservationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the reservation, which will become the final component of the reservation's name. This value is structured like: `my-reservation-name`.",
            in: 'query',
            name: 'reservationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent location in which to create the reservation. Structured like `projects/{project_number}/locations/{location}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReservationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReservationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1AdminParentSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/v1/admin/{parent}/subscriptions',
  tags: ['admin'],
  description: 'Returns the list of subscriptions for the given project.',
  operationId: 'pubsublite.admin.projects.locations.subscriptions.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number}/locations/{location}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSubscriptionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1AdminParentSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/v1/admin/{parent}/subscriptions',
  tags: ['admin'],
  description: 'Creates a new subscription.',
  operationId: 'pubsublite.admin.projects.locations.subscriptions.create',
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
      skipBacklog: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, the newly created subscription will only receive messages published after the subscription was created. Otherwise, the entire message backlog will be received on the subscription. Defaults to false.',
            in: 'query',
            name: 'skipBacklog',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      subscriptionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`.",
            in: 'query',
            name: 'subscriptionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent location in which to create the subscription. Structured like `projects/{project_number}/locations/{location}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubscriptionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1AdminParentTopicsRoute = createRoute({
  method: 'get',
  path: '/v1/admin/{parent}/topics',
  tags: ['admin'],
  description: 'Returns the list of topics for the given project.',
  operationId: 'pubsublite.admin.projects.locations.topics.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent whose topics are to be listed. Structured like `projects/{project_number}/locations/{location}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTopicsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1AdminParentTopicsRoute = createRoute({
  method: 'post',
  path: '/v1/admin/{parent}/topics',
  tags: ['admin'],
  description: 'Creates a new topic.',
  operationId: 'pubsublite.admin.projects.locations.topics.create',
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
      topicId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.",
            in: 'query',
            name: 'topicId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent location in which to create the topic. Structured like `projects/{project_number}/locations/{location}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TopicSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TopicSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1CursorParentCursorsRoute = createRoute({
  method: 'get',
  path: '/v1/cursor/{parent}/cursors',
  tags: ['cursor'],
  description: 'Returns all committed cursor information for a subscription.',
  operationId: 'pubsublite.cursor.projects.locations.subscriptions.cursors.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number}/locations/{location}/subscriptions/{subscription_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListPartitionCursorsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1CursorSubscriptionCommitCursorRoute = createRoute({
  method: 'post',
  path: '/v1/cursor/{subscription}:commitCursor',
  tags: ['cursor'],
  description: 'Updates the committed cursor.',
  operationId: 'pubsublite.cursor.projects.locations.subscriptions.commitCursor',
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
    params: z.object({
      subscription: z
        .string()
        .openapi({
          param: {
            description: 'The subscription for which to update the cursor.',
            in: 'path',
            name: 'subscription',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommitCursorRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommitCursorResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1TopicStatsTopicComputeHeadCursorRoute = createRoute({
  method: 'post',
  path: '/v1/topicStats/{topic}:computeHeadCursor',
  tags: ['topicStats'],
  description:
    "Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.",
  operationId: 'pubsublite.topicStats.projects.locations.topics.computeHeadCursor',
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
    params: z.object({
      topic: z
        .string()
        .openapi({
          param: {
            description: 'Required. The topic for which we should compute the head cursor.',
            in: 'path',
            name: 'topic',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ComputeHeadCursorRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ComputeHeadCursorResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1TopicStatsTopicComputeMessageStatsRoute = createRoute({
  method: 'post',
  path: '/v1/topicStats/{topic}:computeMessageStats',
  tags: ['topicStats'],
  description: 'Compute statistics about a range of messages in a given topic and partition.',
  operationId: 'pubsublite.topicStats.projects.locations.topics.computeMessageStats',
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
    params: z.object({
      topic: z
        .string()
        .openapi({
          param: {
            description: 'Required. The topic for which we should compute message stats.',
            in: 'path',
            name: 'topic',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ComputeMessageStatsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ComputeMessageStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1TopicStatsTopicComputeTimeCursorRoute = createRoute({
  method: 'post',
  path: '/v1/topicStats/{topic}:computeTimeCursor',
  tags: ['topicStats'],
  description: 'Compute the corresponding cursor for a publish or event time in a topic partition.',
  operationId: 'pubsublite.topicStats.projects.locations.topics.computeTimeCursor',
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
    params: z.object({
      topic: z
        .string()
        .openapi({
          param: {
            description: 'Required. The topic for which we should compute the cursor.',
            in: 'path',
            name: 'topic',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ComputeTimeCursorRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ComputeTimeCursorResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
