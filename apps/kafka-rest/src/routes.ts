import { createRoute, z } from '@hono/zod-openapi'

const ResourceMetadataSchema = z
  .object({ self: z.string(), resource_name: z.string().nullable().exactOptional() })
  .openapi({ required: ['self'] })
  .openapi('ResourceMetadata')

const ResourceSchema = z
  .object({ kind: z.string(), metadata: ResourceMetadataSchema })
  .openapi({ required: ['kind', 'metadata'] })
  .openapi('Resource')

const ConfigSourceSchema = z
  .string()
  .openapi({
    'x-extensible-enum': [
      'DYNAMIC_CLUSTER_LINK_CONFIG',
      'DYNAMIC_TOPIC_CONFIG',
      'DYNAMIC_BROKER_LOGGER_CONFIG',
      'DYNAMIC_BROKER_CONFIG',
      'DYNAMIC_DEFAULT_BROKER_CONFIG',
      'STATIC_BROKER_CONFIG',
      'DEFAULT_CONFIG',
      'UNKNOWN',
    ],
  })
  .openapi('ConfigSource')

const ConfigSynonymDataSchema = z
  .object({
    name: z.string(),
    value: z.string().nullable().exactOptional(),
    source: ConfigSourceSchema,
  })
  .openapi({ required: ['name', 'source'] })
  .openapi('ConfigSynonymData')

const AbstractConfigDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      name: z.string(),
      value: z.string().nullable().exactOptional(),
      is_default: z.boolean(),
      is_read_only: z.boolean(),
      is_sensitive: z.boolean(),
      source: ConfigSourceSchema,
      synonyms: z.array(ConfigSynonymDataSchema),
    })
    .openapi({
      required: [
        'cluster_id',
        'name',
        'is_default',
        'is_read_only',
        'is_sensitive',
        'source',
        'synonyms',
      ],
    }),
).openapi('AbstractConfigData')

const AclResourceTypeSchema = z
  .enum(['UNKNOWN', 'ANY', 'TOPIC', 'GROUP', 'CLUSTER', 'TRANSACTIONAL_ID', 'DELEGATION_TOKEN'])
  .openapi('AclResourceType')

const AclPatternTypeSchema = z
  .string()
  .openapi({ 'x-extensible-enum': ['UNKNOWN', 'ANY', 'MATCH', 'LITERAL', 'PREFIXED'] })
  .openapi('AclPatternType')

const AclOperationSchema = z
  .string()
  .openapi({
    'x-extensible-enum': [
      'UNKNOWN',
      'ANY',
      'ALL',
      'READ',
      'WRITE',
      'CREATE',
      'DELETE',
      'ALTER',
      'DESCRIBE',
      'CLUSTER_ACTION',
      'DESCRIBE_CONFIGS',
      'ALTER_CONFIGS',
      'IDEMPOTENT_WRITE',
    ],
  })
  .openapi('AclOperation')

const AclPermissionSchema = z
  .string()
  .openapi({ 'x-extensible-enum': ['UNKNOWN', 'ANY', 'DENY', 'ALLOW'] })
  .openapi('AclPermission')

const AclDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      resource_type: AclResourceTypeSchema,
      resource_name: z.string(),
      pattern_type: AclPatternTypeSchema,
      principal: z.string(),
      host: z.string(),
      operation: AclOperationSchema,
      permission: AclPermissionSchema,
    })
    .openapi({
      required: [
        'cluster_id',
        'resource_type',
        'resource_name',
        'pattern_type',
        'principal',
        'host',
        'operation',
        'permission',
      ],
    }),
).openapi('AclData')

const ResourceCollectionMetadataSchema = z
  .object({ self: z.string(), next: z.string().nullable().exactOptional() })
  .openapi({ required: ['self'] })
  .openapi('ResourceCollectionMetadata')

const ResourceCollectionSchema = z
  .object({ kind: z.string(), metadata: ResourceCollectionMetadataSchema })
  .openapi({ required: ['kind', 'metadata'] })
  .openapi('ResourceCollection')

const AclDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(AclDataSchema) }).openapi({ required: ['data'] }),
).openapi('AclDataList')

const AlterConfigBatchRequestDataSchema = z
  .object({
    data: z.array(
      z
        .object({
          name: z.string(),
          value: z.string().nullable().exactOptional(),
          operation: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ 'x-extensible-enum': ['SET', 'DELETE'] }),
        })
        .openapi({ required: ['name'] }),
    ),
    validate_only: z.boolean().exactOptional(),
  })
  .openapi({ required: ['data'] })
  .openapi('AlterConfigBatchRequestData')

const AnyValueSchema = z.any().nullable().openapi('AnyValue')

const AuthorizedOperationsSchema = z
  .array(
    z
      .string()
      .openapi({
        'x-extensible-enum': [
          'UNKNOWN',
          'ALL',
          'READ',
          'WRITE',
          'CREATE',
          'DELETE',
          'ALTER',
          'DESCRIBE',
          'CLUSTER_ACTION',
          'DESCRIBE_CONFIGS',
          'ALTER_CONFIGS',
          'IDEMPOTENT_WRITE',
        ],
      }),
  )
  .openapi('AuthorizedOperations')

const BrokerConfigDataSchema = AbstractConfigDataSchema.and(
  z.object({ broker_id: z.int() }).openapi({ required: ['broker_id'] }),
).openapi('BrokerConfigData')

const BrokerConfigDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(BrokerConfigDataSchema) }).openapi({ required: ['data'] }),
).openapi('BrokerConfigDataList')

const RelationshipSchema = z
  .object({ related: z.string() })
  .openapi({ required: ['related'] })
  .openapi('Relationship')

const BrokerDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      broker_id: z.int(),
      host: z.string().nullable().exactOptional(),
      port: z.int().nullable().exactOptional(),
      rack: z.string().nullable().exactOptional(),
      configs: RelationshipSchema,
      partition_replicas: RelationshipSchema,
    })
    .openapi({ required: ['cluster_id', 'broker_id', 'configs', 'partition_replicas'] }),
).openapi('BrokerData')

const BrokerDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(BrokerDataSchema) }).openapi({ required: ['data'] }),
).openapi('BrokerDataList')

const ClusterConfigTypeSchema = z
  .string()
  .openapi({ 'x-extensible-enum': ['BROKER'] })
  .openapi('ClusterConfigType')

const ClusterConfigDataSchema = AbstractConfigDataSchema.and(
  z.object({ config_type: ClusterConfigTypeSchema }).openapi({ required: ['config_type'] }),
).openapi('ClusterConfigData')

const ClusterConfigDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(ClusterConfigDataSchema) }).openapi({ required: ['data'] }),
).openapi('ClusterConfigDataList')

const ClusterDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      controller: RelationshipSchema.exactOptional(),
      acls: RelationshipSchema,
      brokers: RelationshipSchema,
      broker_configs: RelationshipSchema,
      consumer_groups: RelationshipSchema,
      topics: RelationshipSchema,
      partition_reassignments: RelationshipSchema,
    })
    .openapi({
      required: [
        'cluster_id',
        'acls',
        'brokers',
        'broker_configs',
        'consumer_groups',
        'topics',
        'partition_reassignments',
      ],
    }),
).openapi('ClusterData')

const ClusterDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(ClusterDataSchema) }).openapi({ required: ['data'] }),
).openapi('ClusterDataList')

const CreateAclRequestDataSchema = z
  .object({
    resource_type: AclResourceTypeSchema,
    resource_name: z.string(),
    pattern_type: AclPatternTypeSchema,
    principal: z.string(),
    host: z.string(),
    operation: AclOperationSchema,
    permission: AclPermissionSchema,
  })
  .openapi({
    required: [
      'resource_type',
      'resource_name',
      'pattern_type',
      'principal',
      'host',
      'operation',
      'permission',
    ],
  })
  .openapi('CreateAclRequestData')

const CreateAclRequestDataListSchema = z
  .object({ data: z.array(CreateAclRequestDataSchema) })
  .openapi({ required: ['data'] })
  .openapi('CreateAclRequestDataList')

const CreateTopicRequestDataSchema = z
  .object({
    topic_name: z.string(),
    partitions_count: z.int().exactOptional(),
    replication_factor: z.int().exactOptional(),
    replicas_assignments: z.record(z.string(), z.array(z.int())).exactOptional(),
    configs: z
      .array(
        z
          .object({ name: z.string(), value: z.string().nullable().exactOptional() })
          .openapi({ required: ['name'] }),
      )
      .exactOptional(),
    validate_only: z.boolean().exactOptional(),
  })
  .openapi({ required: ['topic_name'] })
  .openapi('CreateTopicRequestData')

const ConsumerAssignmentDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      consumer_group_id: z.string(),
      consumer_id: z.string(),
      topic_name: z.string(),
      partition_id: z.int(),
      partition: RelationshipSchema,
      lag: RelationshipSchema,
    })
    .openapi({
      required: [
        'cluster_id',
        'consumer_group_id',
        'consumer_id',
        'topic_name',
        'partition_id',
        'partition',
        'lag',
      ],
    }),
).openapi('ConsumerAssignmentData')

const ConsumerAssignmentDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(ConsumerAssignmentDataSchema) }).openapi({ required: ['data'] }),
).openapi('ConsumerAssignmentDataList')

const ConsumerDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      consumer_group_id: z.string(),
      consumer_id: z.string(),
      instance_id: z.string().nullable().exactOptional(),
      client_id: z.string(),
      assignments: RelationshipSchema,
    })
    .openapi({
      required: ['cluster_id', 'consumer_group_id', 'consumer_id', 'client_id', 'assignments'],
    }),
).openapi('ConsumerData')

const ConsumerDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(ConsumerDataSchema) }).openapi({ required: ['data'] }),
).openapi('ConsumerDataList')

const ConsumerGroupStateSchema = z
  .string()
  .openapi({
    'x-extensible-enum': [
      'UNKNOWN',
      'PREPARING_REBALANCE',
      'COMPLETING_REBALANCE',
      'ASSIGNING',
      'RECONCILING',
      'STABLE',
      'DEAD',
      'EMPTY',
    ],
  })
  .openapi('ConsumerGroupState')

const ConsumerGroupTypeSchema = z
  .string()
  .openapi({ 'x-extensible-enum': ['UNKNOWN', 'CLASSIC', 'CONSUMER', 'SHARE'] })
  .openapi('ConsumerGroupType')

const ConsumerGroupDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      consumer_group_id: z.string(),
      is_simple: z.boolean(),
      partition_assignor: z.string(),
      state: ConsumerGroupStateSchema,
      type: ConsumerGroupTypeSchema,
      is_mixed_consumer_group: z.boolean(),
      coordinator: RelationshipSchema,
      consumers: RelationshipSchema,
      lag_summary: RelationshipSchema,
    })
    .openapi({
      required: [
        'cluster_id',
        'consumer_group_id',
        'is_simple',
        'partition_assignor',
        'state',
        'type',
        'is_mixed_consumer_group',
        'coordinator',
        'consumers',
        'lag_summary',
      ],
    }),
).openapi('ConsumerGroupData')

const ConsumerGroupDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(ConsumerGroupDataSchema) }).openapi({ required: ['data'] }),
).openapi('ConsumerGroupDataList')

const ConsumerLagDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      consumer_group_id: z.string(),
      topic_name: z.string(),
      partition_id: z.int(),
      current_offset: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
      log_end_offset: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
      lag: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
      consumer_id: z.string(),
      instance_id: z.string().nullable().exactOptional(),
      client_id: z.string(),
    })
    .openapi({
      required: [
        'cluster_id',
        'consumer_group_id',
        'topic_name',
        'partition_id',
        'current_offset',
        'log_end_offset',
        'lag',
        'consumer_id',
        'client_id',
      ],
    }),
).openapi('ConsumerLagData')

const ConsumerLagDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(ConsumerLagDataSchema) }).openapi({ required: ['data'] }),
).openapi('ConsumerLagDataList')

const ConsumerGroupLagSummaryDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      consumer_group_id: z.string(),
      max_lag_consumer_id: z.string(),
      max_lag_instance_id: z.string().nullable().exactOptional(),
      max_lag_client_id: z.string(),
      max_lag_topic_name: z.string(),
      max_lag_partition_id: z.int(),
      max_lag: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
      total_lag: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
      max_lag_consumer: RelationshipSchema,
      max_lag_partition: RelationshipSchema,
    })
    .openapi({
      required: [
        'cluster_id',
        'consumer_group_id',
        'max_lag_consumer_id',
        'max_lag_client_id',
        'max_lag_topic_name',
        'max_lag_partition_id',
        'max_lag',
        'total_lag',
        'max_lag_consumer',
        'max_lag_partition',
      ],
    }),
).openapi('ConsumerGroupLagSummaryData')

const ErrorSchema = z
  .object({ error_code: z.int32(), message: z.string().nullable() })
  .openapi({ required: ['error_code', 'message'] })
  .openapi('Error')

const PartitionDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      topic_name: z.string(),
      partition_id: z.int(),
      leader: RelationshipSchema.exactOptional(),
      replicas: RelationshipSchema,
      reassignment: RelationshipSchema,
    })
    .openapi({
      required: ['cluster_id', 'topic_name', 'partition_id', 'replicas', 'reassignment'],
    }),
).openapi('PartitionData')

const PartitionDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(PartitionDataSchema) }).openapi({ required: ['data'] }),
).openapi('PartitionDataList')

const PartitionWithOffsetsDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      topic_name: z.string(),
      partition_id: z.int(),
      earliest_offset: z.any(),
      latest_offset: z.any(),
    })
    .openapi({
      required: ['cluster_id', 'topic_name', 'partition_id', 'earliest_offset', 'latest_offset'],
    }),
).openapi('PartitionWithOffsetsData')

const ProduceResponseDataSchema = z
  .object({
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    type: z
      .string()
      .nullable()
      .openapi({
        'x-extensible-enum': ['BINARY', 'JSON', 'STRING', 'AVRO', 'JSONSCHEMA', 'PROTOBUF'],
      }),
    subject: z.string().nullable().exactOptional(),
    schema_id: z.int().nullable().exactOptional(),
    schema_version: z.int().nullable().exactOptional(),
  })
  .nullable()
  .openapi({ required: ['size', 'type'] })
  .openapi('ProduceResponseData')

const ProduceBatchResponseSuccessEntrySchema = z
  .object({
    id: z.string().min(1).max(80).openapi({ description: 'Batch entry ID.' }),
    cluster_id: z.string().exactOptional(),
    topic_name: z.string().exactOptional(),
    partition_id: z.int32().exactOptional(),
    offset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    key: ProduceResponseDataSchema.exactOptional(),
    value: ProduceResponseDataSchema.exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('ProduceBatchResponseSuccessEntry')

const ProduceBatchResponseFailureEntrySchema = z
  .object({
    id: z.string().min(1).max(80).openapi({ description: 'Batch entry ID.' }),
    error_code: z.int32().openapi({ description: 'Error code.' }),
    message: z.string().exactOptional().openapi({ description: 'Error message.' }),
  })
  .openapi({ required: ['id', 'error_code'] })
  .openapi('ProduceBatchResponseFailureEntry')

const ProduceBatchResponseSchema = z
  .object({
    successes: z
      .array(ProduceBatchResponseSuccessEntrySchema)
      .exactOptional()
      .openapi({ description: 'Successful batch results.' }),
    failures: z
      .array(ProduceBatchResponseFailureEntrySchema)
      .exactOptional()
      .openapi({ description: 'Failed batch results.' }),
  })
  .openapi({ description: 'Response for producing a batch of records.', required: [] })
  .openapi('ProduceBatchResponse')

const ProduceResponseSchema = z
  .object({
    error_code: z.int32(),
    message: z.string().exactOptional(),
    cluster_id: z.string().exactOptional(),
    topic_name: z.string().exactOptional(),
    partition_id: z.int32().exactOptional(),
    offset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    key: ProduceResponseDataSchema.exactOptional(),
    value: ProduceResponseDataSchema.exactOptional(),
  })
  .openapi({ required: ['error_code'] })
  .openapi('ProduceResponse')

const ProduceRequestHeaderSchema = z
  .object({ name: z.string(), value: z.string().nullable().exactOptional() })
  .openapi({ required: ['name'] })
  .openapi('ProduceRequestHeader')

const ProduceRequestDataSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        'x-extensible-enum': ['BINARY', 'JSON', 'STRING', 'AVRO', 'JSONSCHEMA', 'PROTOBUF'],
      }),
    subject: z.string().nullable().exactOptional(),
    subject_name_strategy: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ 'x-extensible-enum': ['TOPIC_NAME', 'RECORD_NAME', 'TOPIC_RECORD_NAME'] }),
    schema_id: z.int().nullable().exactOptional(),
    schema_version: z.int().nullable().exactOptional(),
    schema: z.string().nullable().exactOptional(),
    data: AnyValueSchema.exactOptional(),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ProduceRequestData')

const ProduceBatchRequestEntrySchema = z
  .object({
    id: z.string().min(1).max(80).openapi({ description: 'Batch entry ID.' }),
    partition_id: z.int32().nullable().exactOptional(),
    headers: z.array(ProduceRequestHeaderSchema).exactOptional(),
    key: ProduceRequestDataSchema.exactOptional(),
    value: ProduceRequestDataSchema.exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('ProduceBatchRequestEntry')

const ProduceBatchRequestSchema = z
  .object({ entries: z.array(ProduceBatchRequestEntrySchema) })
  .openapi({ description: 'Request for producing a batch of records.', required: ['entries'] })
  .openapi('ProduceBatchRequest')

const ProduceRequestSchema = z
  .object({
    partition_id: z.int32().nullable().exactOptional(),
    headers: z.array(ProduceRequestHeaderSchema).exactOptional(),
    key: ProduceRequestDataSchema.exactOptional(),
    value: ProduceRequestDataSchema.exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProduceRequest')

const ReassignmentDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      topic_name: z.string(),
      partition_id: z.int(),
      adding_replicas: z.array(z.int()),
      removing_replicas: z.array(z.int()),
      replicas: RelationshipSchema,
    })
    .openapi({
      required: [
        'cluster_id',
        'topic_name',
        'partition_id',
        'adding_replicas',
        'removing_replicas',
        'replicas',
      ],
    }),
).openapi('ReassignmentData')

const ReassignmentDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(ReassignmentDataSchema) }).openapi({ required: ['data'] }),
).openapi('ReassignmentDataList')

const ReplicaDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      topic_name: z.string(),
      partition_id: z.int(),
      broker_id: z.int(),
      is_leader: z.boolean(),
      is_in_sync: z.boolean(),
      broker: RelationshipSchema,
    })
    .openapi({
      required: [
        'cluster_id',
        'topic_name',
        'partition_id',
        'broker_id',
        'is_leader',
        'is_in_sync',
        'broker',
      ],
    }),
).openapi('ReplicaData')

const ReplicaDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(ReplicaDataSchema) }).openapi({ required: ['data'] }),
).openapi('ReplicaDataList')

const TopicConfigDataSchema = AbstractConfigDataSchema.and(
  z.object({ topic_name: z.string() }).openapi({ required: ['topic_name'] }),
).openapi('TopicConfigData')

const TopicConfigDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(TopicConfigDataSchema) }).openapi({ required: ['data'] }),
).openapi('TopicConfigDataList')

const TopicDataSchema = ResourceSchema.and(
  z
    .object({
      cluster_id: z.string(),
      topic_name: z.string(),
      is_internal: z.boolean(),
      replication_factor: z.int(),
      partitions_count: z.int(),
      partitions: RelationshipSchema,
      configs: RelationshipSchema,
      partition_reassignments: RelationshipSchema,
      authorized_operations: AuthorizedOperationsSchema.exactOptional(),
    })
    .openapi({
      required: [
        'cluster_id',
        'topic_name',
        'is_internal',
        'replication_factor',
        'partitions_count',
        'partitions',
        'configs',
        'partition_reassignments',
      ],
    }),
).openapi('TopicData')

const TopicDataListSchema = ResourceCollectionSchema.and(
  z.object({ data: z.array(TopicDataSchema) }).openapi({ required: ['data'] }),
).openapi('TopicDataList')

const UpdateConfigRequestDataSchema = z
  .object({ value: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateConfigRequestData')

const UpdatePartitionCountRequestDataSchema = z
  .object({ partitions_count: z.int32() })
  .openapi({ required: ['partitions_count'] })
  .openapi('UpdatePartitionCountRequestData')

const CreateTopicResponseResponse = {
  description: 'The created topic.',
  content: {
    'application/json': {
      schema: TopicDataSchema,
      example: {
        kind: 'KafkaTopic',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X',
          resource_name: 'crn:///kafka=cluster-1/topic=topic-X',
        },
        cluster_id: 'cluster-1',
        topic_name: 'topic-X',
        is_internal: false,
        replication_factor: 3,
        partitions_count: 1,
        partitions: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X/partitions',
        },
        configs: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X/configs',
        },
        partition_reassignments: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X/partitions/-/reassignments',
        },
      },
    },
  },
}

const DeleteAclsResponseResponse = {
  description: 'The list of deleted ACLs.',
  content: {
    'application/json': {
      schema: z.object({ data: z.array(AclDataSchema) }).openapi({ required: ['data'] }),
      example: {
        data: [
          {
            kind: 'KafkaAcl',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?resource_type=TOPIC&resource_name=topic-&pattern_type=PREFIXED&principal=User%3Aalice&host=*&operation=ALL&permission=ALLOW',
            },
            cluster_id: 'cluster-1',
            resource_type: 'TOPIC',
            resource_name: 'topic-',
            pattern_type: 'PREFIXED',
            principal: 'User:alice',
            host: '*',
            operation: 'ALL',
            permission: 'ALLOW',
          },
          {
            kind: 'KafkaAcl',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?resource_type=CLUSTER&resource_name=kafka-cluster&pattern_type=LITERAL&principal=User%3Aalice&host=*&operation=DESCRIBE&permission=DENY',
            },
            cluster_id: 'cluster-1',
            resource_type: 'CLUSTER',
            resource_name: 'kafka-cluster',
            pattern_type: 'LITERAL',
            principal: 'User:alice',
            host: '*',
            operation: 'DESCRIBE',
            permission: 'DENY',
          },
        ],
      },
    },
  },
}

const GetBrokerConfigResponseResponse = {
  description: 'The broker configuration parameter.',
  content: {
    'application/json': {
      schema: BrokerConfigDataSchema,
      example: {
        kind: 'KafkaBrokerConfig',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs/compression.type',
          resource_name: 'crn:///kafka=cluster-1/broker=1/config=compression.type',
        },
        cluster_id: 'cluster-1',
        broker_id: 1,
        name: 'compression.type',
        value: 'gzip',
        is_default: false,
        is_read_only: false,
        is_sensitive: false,
        source: 'DYNAMIC_BROKER_CONFIG',
        synonyms: [
          { name: 'compression.type', value: 'gzip', source: 'DYNAMIC_BROKER_CONFIG' },
          { name: 'compression.type', value: 'producer', source: 'DEFAULT_CONFIG' },
        ],
      },
    },
  },
}

const GetBrokerResponseResponse = {
  description: 'The broker.',
  content: {
    'application/json': {
      schema: BrokerDataSchema,
      example: {
        kind: 'KafkaBroker',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
          resource_name: 'crn:///kafka=cluster-1/broker=1',
        },
        cluster_id: 'cluster-1',
        broker_id: 1,
        host: 'localhost',
        port: 9291,
        configs: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs',
        },
        partition_replicas: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/partition-replicas',
        },
      },
    },
  },
}

const GetClusterConfigResponseResponse = {
  description: 'The cluster configuration parameter.',
  content: {
    'application/json': {
      schema: ClusterConfigDataSchema,
      example: {
        kind: 'KafkaClusterConfig',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs/compression.type',
          resource_name: 'crn:///kafka=cluster-1/broker-config=compression.type',
        },
        cluster_id: 'cluster-1',
        config_type: 'BROKER',
        name: 'compression.type',
        value: 'gzip',
        is_default: false,
        is_read_only: false,
        is_sensitive: false,
        source: 'DYNAMIC_DEFAULT_BROKER_CONFIG',
        synonyms: [
          { name: 'compression.type', value: 'gzip', source: 'DYNAMIC_DEFAULT_BROKER_CONFIG' },
          { name: 'compression.type', value: 'producer', source: 'DEFAULT_CONFIG' },
        ],
      },
    },
  },
}

const GetClusterResponseResponse = {
  description: 'The Kafka cluster.',
  content: {
    'application/json': {
      schema: ClusterDataSchema,
      example: {
        kind: 'KafkaCluster',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1',
          resource_name: 'crn:///kafka=cluster-1',
        },
        cluster_id: 'cluster-1',
        controller: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
        },
        acls: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls',
        },
        brokers: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers',
        },
        broker_configs: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs',
        },
        consumer_groups: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups',
        },
        topics: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics',
        },
        partition_reassignments: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/-/partitions/-/reassignment',
        },
      },
    },
  },
}

const GetConsumerAssignmentResponseResponse = {
  description: 'The consumer group assignment.',
  content: {
    'application/json': {
      schema: ConsumerAssignmentDataSchema,
      example: {
        kind: 'KafkaConsumerAssignment',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-1/partitions/1',
          resource_name:
            'crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=1/partition=1',
        },
        cluster_id: 'cluster-1',
        consumer_group_id: 'consumer-group-1',
        consumer_id: 'consumer-1',
        topic_name: 'topic-1',
        partition_id: 1,
        partition: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1',
        },
        lag: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1',
        },
      },
    },
  },
}

const GetConsumerGroupResponseResponse = {
  description: 'The consumer group.',
  content: {
    'application/json': {
      schema: ConsumerGroupDataSchema,
      example: {
        kind: 'KafkaConsumerGroup',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1',
          resource_name: 'crn:///kafka=cluster-1/consumer-group=consumer-group-1',
        },
        cluster_id: 'cluster-1',
        consumer_group_id: 'consumer-group-1',
        is_simple: false,
        partition_assignor: 'org.apache.kafka.clients.consumer.RoundRobinAssignor',
        state: 'STABLE',
        type: 'CLASSIC',
        is_mixed_consumer_group: false,
        coordinator: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
        },
        consumers: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers',
        },
        lag_summary: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary',
        },
      },
    },
  },
}

const GetConsumerGroupLagSummaryResponseResponse = {
  description: 'The max and total consumer lag in a consumer group.',
  content: {
    'application/json': {
      schema: ConsumerGroupLagSummaryDataSchema,
      example: {
        kind: 'KafkaConsumerGroupLagSummary',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary',
          resource_name: 'crn:///kafka=cluster-1/consumer-groups=consumer-group-1/lag-summary',
        },
        cluster_id: 'cluster-1',
        consumer_group_id: 'consumer-group-1',
        max_lag_consumer_id: 'consumer-1',
        max_lag_instance_id: 'consumer-instance-1',
        max_lag_client_id: 'client-1',
        max_lag_topic_name: 'topic-1',
        max_lag_partition_id: 1,
        max_lag: 100,
        total_lag: 110,
        max_lag_consumer: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1',
        },
        max_lag_partition: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1',
        },
      },
    },
  },
}

const GetConsumerLagResponseResponse = {
  description: 'The consumer lag.',
  content: {
    'application/json': {
      schema: ConsumerLagDataSchema,
      example: {
        kind: 'KafkaConsumerLag',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1',
          resource_name:
            'crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=1',
        },
        cluster_id: 'cluster-1',
        consumer_group_id: 'consumer-group-1',
        topic_name: 'topic-1',
        partition_id: 1,
        consumer_id: 'consumer-1',
        instance_id: 'consumer-instance-1',
        client_id: 'client-1',
        current_offset: 1,
        log_end_offset: 101,
        lag: 100,
      },
    },
  },
}

const GetConsumerResponseResponse = {
  description: 'The consumer.',
  content: {
    'application/json': {
      schema: ConsumerDataSchema,
      example: {
        kind: 'KafkaConsumer',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1',
          resource_name:
            'crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1',
        },
        cluster_id: 'cluster-1',
        consumer_group_id: 'consumer-group-1',
        consumer_id: 'consumer-1',
        instance_id: 'consumer-instance-1',
        client_id: 'client-1',
        assignments: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments',
        },
      },
    },
  },
}

const GetPartitionResponseResponse = {
  description: 'The partition',
  content: {
    'application/json': {
      schema: PartitionDataSchema,
      example: {
        kind: 'KafkaPartition',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1',
          resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1',
        },
        cluster_id: 'cluster-1',
        topic_name: 'topic-1',
        partition_id: 1,
        leader: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1',
        },
        replicas: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas',
        },
        reassignment: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment',
        },
      },
    },
  },
}

const GetReassignmentResponseResponse = {
  description: 'The ongoing replicas reassignments.',
  content: {
    'application/json': {
      schema: ReassignmentDataSchema,
      example: {
        kind: 'KafkaReassignment',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment',
          resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1/reassignment',
        },
        cluster_id: 'cluster-1',
        topic_name: 'topic-1',
        partition_id: 1,
        adding_replicas: [1, 2],
        removing_replicas: [3],
        replicas: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas',
        },
      },
    },
  },
}

const GetReplicaResponseResponse = {
  description: 'The replica.',
  content: {
    'application/json': {
      schema: ReplicaDataSchema,
      example: {
        kind: 'KafkaReplica',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1',
          resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=1',
        },
        cluster_id: 'cluster-1',
        topic_name: 'topic-1',
        partition_id: 1,
        broker_id: 1,
        is_leader: true,
        is_in_sync: true,
        broker: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
        },
      },
    },
  },
}

const GetTopicConfigResponseResponse = {
  description: 'The topic configuration parameter.',
  content: {
    'application/json': {
      schema: TopicConfigDataSchema,
      example: {
        kind: 'KafkaTopicConfig',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/compression.type',
          resource_name: 'crn:///kafka=cluster-1/topic=topic-1/config=compression.type',
        },
        cluster_id: 'cluster-1',
        topic_name: 'topic-1',
        name: 'compression.type',
        value: 'gzip',
        is_default: false,
        is_read_only: false,
        is_sensitive: false,
        source: 'DYNAMIC_TOPIC_CONFIG',
        synonyms: [
          { name: 'compression.type', value: 'gzip', source: 'DYNAMIC_TOPIC_CONFIG' },
          { name: 'compression.type', value: 'producer', source: 'DEFAULT_CONFIG' },
        ],
      },
    },
  },
}

const GetTopicResponseResponse = {
  description: 'The topic.',
  content: {
    'application/json': {
      schema: TopicDataSchema,
      example: {
        kind: 'KafkaTopic',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1',
          resource_name: 'crn:///kafka=cluster-1/topic=topic-1',
        },
        cluster_id: 'cluster-1',
        topic_name: 'topic-1',
        is_internal: false,
        replication_factor: 3,
        partitions_count: 1,
        partitions: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions',
        },
        configs: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs',
        },
        partition_reassignments: {
          related:
            'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/-/reassignments',
        },
      },
    },
  },
}

const ListAllReassignmentsResponseResponse = {
  description: 'The ongoing replicas reassignments.',
  content: {
    'application/json': {
      schema: ReassignmentDataListSchema,
      example: {
        kind: 'KafkaReassignmentList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/-/partitions/-/reassignment',
          next: null,
        },
        data: [
          {
            kind: 'KafkaReassignment',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1/reassignment',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 1,
            adding_replicas: [1, 2],
            removing_replicas: [3],
            replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas',
            },
          },
          {
            kind: 'KafkaReassignment',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/2/reassignment',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-2/partition=2/reassignment',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-2',
            partition_id: 2,
            adding_replicas: [1],
            removing_replicas: [2, 3],
            replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/2/replicas',
            },
          },
          {
            kind: 'KafkaReassignment',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/3/reassignment',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-3/partition=3/reassignment',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-3',
            partition_id: 3,
            adding_replicas: [3],
            removing_replicas: [1, 2],
            replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/3/replicas',
            },
          },
        ],
      },
    },
  },
}

const ListBrokerConfigsResponseResponse = {
  description: 'The list of broker configs.',
  content: {
    'application/json': {
      schema: BrokerConfigDataListSchema,
      example: {
        kind: 'KafkaBrokerConfigList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs',
          next: null,
        },
        data: [
          {
            kind: 'KafkaBrokerConfig',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs/max.connections',
              resource_name: 'crn:///kafka=cluster-1/broker=1/config=max.connections',
            },
            cluster_id: 'cluster-1',
            broker_id: 1,
            name: 'max.connections',
            value: '1000',
            is_default: false,
            is_read_only: false,
            is_sensitive: false,
            source: 'DYNAMIC_BROKER_CONFIG',
            synonyms: [
              { name: 'max.connections', value: '1000', source: 'DYNAMIC_BROKER_CONFIG' },
              { name: 'max.connections', value: '2147483647', source: 'DEFAULT_CONFIG' },
            ],
          },
          {
            kind: 'KafkaBrokerConfig',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs/compression.type',
              resource_name: 'crn:///kafka=cluster-1/broker=1/config=compression.type',
            },
            cluster_id: 'cluster-1',
            broker_id: 1,
            name: 'compression.type',
            value: 'gzip',
            is_default: false,
            is_read_only: false,
            is_sensitive: false,
            source: 'DYNAMIC_BROKER_CONFIG',
            synonyms: [
              { name: 'compression.type', value: 'gzip', source: 'DYNAMIC_BROKER_CONFIG' },
              { name: 'compression.type', value: 'producer', source: 'DEFAULT_CONFIG' },
            ],
          },
        ],
      },
    },
  },
}

const ListBrokersResponseResponse = {
  description: 'The list of brokers.',
  content: {
    'application/json': {
      schema: BrokerDataListSchema,
      example: {
        kind: 'KafkaBrokerList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers',
          next: null,
        },
        data: [
          {
            kind: 'KafkaBroker',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
              resource_name: 'crn:///kafka=cluster-1/broker=1',
            },
            cluster_id: 'cluster-1',
            broker_id: 1,
            host: 'localhost',
            port: 9291,
            configs: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs',
            },
            partition_replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/partition-replicas',
            },
          },
          {
            kind: 'KafkaBroker',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2',
              resource_name: 'crn:///kafka=cluster-1/broker=2',
            },
            cluster_id: 'cluster-1',
            broker_id: 2,
            host: 'localhost',
            port: 9292,
            configs: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2/configs',
            },
            partition_replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2/partition-replicas',
            },
          },
          {
            kind: 'KafkaBroker',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3',
              resource_name: 'crn:///kafka=cluster-1/broker=3',
            },
            cluster_id: 'cluster-1',
            broker_id: 3,
            host: 'localhost',
            port: 9293,
            configs: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3/configs',
            },
            partition_replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3/partition-replicas',
            },
          },
        ],
      },
    },
  },
}

const ListClusterConfigsResponseResponse = {
  description: 'The list of cluster configs.',
  content: {
    'application/json': {
      schema: ClusterConfigDataListSchema,
      example: {
        kind: 'KafkaClusterConfigList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs',
          next: null,
        },
        data: [
          {
            kind: 'KafkaClusterConfig',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs/max.connections',
              resource_name: 'crn:///kafka=cluster-1/broker-config=max.connections',
            },
            cluster_id: 'cluster-1',
            config_type: 'BROKER',
            name: 'max.connections',
            value: '1000',
            is_default: false,
            is_read_only: false,
            is_sensitive: false,
            source: 'DYNAMIC_DEFAULT_BROKER_CONFIG',
            synonyms: [
              { name: 'max.connections', value: '1000', source: 'DYNAMIC_DEFAULT_BROKER_CONFIG' },
              { name: 'max.connections', value: '2147483647', source: 'DEFAULT_CONFIG' },
            ],
          },
          {
            kind: 'KafkaClusterConfig',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs/compression.type',
              resource_name: 'crn:///kafka=cluster-1/broker-config=compression.type',
            },
            cluster_id: 'cluster-1',
            config_type: 'BROKER',
            name: 'compression.type',
            value: 'gzip',
            is_default: false,
            is_read_only: false,
            is_sensitive: false,
            source: 'DYNAMIC_DEFAULT_BROKER_CONFIG',
            synonyms: [
              { name: 'compression.type', value: 'gzip', source: 'DYNAMIC_DEFAULT_BROKER_CONFIG' },
              { name: 'compression.type', value: 'producer', source: 'DEFAULT_CONFIG' },
            ],
          },
        ],
      },
    },
  },
}

const ListClustersResponseResponse = {
  description: 'The list of Kafka clusters.',
  content: {
    'application/json': {
      schema: ClusterDataListSchema,
      example: {
        kind: 'KafkaClusterList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters',
          next: null,
        },
        data: [
          {
            kind: 'KafkaCluster',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1',
              resource_name: 'crn:///kafka=cluster-1',
            },
            cluster_id: 'cluster-1',
            controller: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
            },
            acls: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls',
            },
            brokers: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers',
            },
            broker_configs: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs',
            },
            consumer_groups: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups',
            },
            topics: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics',
            },
            partition_reassignments: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/-/partitions/-/reassignment',
            },
          },
        ],
      },
    },
  },
}

const ListConsumerAssignmentsResponseResponse = {
  description: 'The list of consumer group assignments.',
  content: {
    'application/json': {
      schema: ConsumerAssignmentDataListSchema,
      example: {
        kind: 'KafkaConsumerAssignmentList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments',
          next: null,
        },
        data: [
          {
            kind: 'KafkaConsumerAssignment',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-1/partitions/1',
              resource_name:
                'crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=1/partition=1',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            consumer_id: 'consumer-1',
            topic_name: 'topic-1',
            partition_id: 1,
            partition: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1',
            },
            lag: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1',
            },
          },
          {
            kind: 'KafkaConsumerAssignment',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-2/partitions/2',
              resource_name:
                'crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=2/partition=2',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            consumer_id: 'consumer-1',
            topic_name: 'topic-2',
            partition_id: 2,
            partition: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/2',
            },
            lag: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-2/partitions/2',
            },
          },
          {
            kind: 'KafkaConsumerAssignment',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-3/partitions/3',
              resource_name:
                'crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=3/partition=3',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            consumer_id: 'consumer-1',
            topic_name: 'topic-3',
            partition_id: 3,
            partition: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/3',
            },
            lag: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-3/partitions/3',
            },
          },
        ],
      },
    },
  },
}

const ListConsumerGroupsResponseResponse = {
  description: 'The list of consumer groups.',
  content: {
    'application/json': {
      schema: ConsumerGroupDataListSchema,
      example: {
        kind: 'KafkaConsumerGroupList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups',
          next: null,
        },
        data: [
          {
            kind: 'KafkaConsumerGroup',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1',
              resource_name: 'crn:///kafka=cluster-1/consumer-group=consumer-group-1',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            is_simple: false,
            partition_assignor: 'org.apache.kafka.clients.consumer.RoundRobinAssignor',
            state: 'STABLE',
            type: 'CLASSIC',
            is_mixed_consumer_group: false,
            coordinator: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
            },
            consumers: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers',
            },
            lag_summary: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary',
            },
          },
          {
            kind: 'KafkaConsumerGroup',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-2',
              resource_name: 'crn:///kafka=cluster-1/consumer-group=consumer-group-2',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-2',
            is_simple: false,
            partition_assignor: 'org.apache.kafka.clients.consumer.StickyAssignor',
            state: 'PREPARING_REBALANCE',
            type: 'CLASSIC',
            is_mixed_consumer_group: false,
            coordinator: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2',
            },
            consumers: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-2/consumers',
            },
            lag_summary: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-2/lag-summary',
            },
          },
          {
            kind: 'KafkaConsumerGroup',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-3',
              resource_name: 'crn:///kafka=cluster-1/consumer-group=consumer-group-3',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-3',
            is_simple: false,
            partition_assignor: 'org.apache.kafka.clients.consumer.RangeAssignor',
            state: 'DEAD',
            type: 'CLASSIC',
            is_mixed_consumer_group: false,
            coordinator: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3',
            },
            consumers: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-3/consumers',
            },
            lag_summary: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-3/lag-summary',
            },
          },
        ],
      },
    },
  },
}

const ListConsumerLagsResponseResponse = {
  description: 'The list of consumer lags.',
  content: {
    'application/json': {
      schema: ConsumerLagDataListSchema,
      example: {
        kind: 'KafkaConsumerLagList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags',
          next: null,
        },
        data: [
          {
            kind: 'KafkaConsumerLag',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1',
              resource_name:
                'crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=1',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            topic_name: 'topic-1',
            partition_id: 1,
            consumer_id: 'consumer-1',
            instance_id: 'consumer-instance-1',
            client_id: 'client-1',
            current_offset: 1,
            log_end_offset: 101,
            lag: 100,
          },
          {
            kind: 'KafkaConsumerLag',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/2',
              resource_name:
                'crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=2',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            topic_name: 'topic-1',
            partition_id: 2,
            consumer_id: 'consumer-2',
            instance_id: 'consumer-instance-2',
            client_id: 'client-2',
            current_offset: 1,
            log_end_offset: 11,
            lag: 10,
          },
          {
            kind: 'KafkaConsumerLag',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/3',
              resource_name:
                'crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=3',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            topic_name: 'topic-1',
            partition_id: 3,
            consumer_id: 'consumer-3',
            instance_id: 'consumer-instance-3',
            client_id: 'client-3',
            current_offset: 1,
            log_end_offset: 1,
            lag: 0,
          },
        ],
      },
    },
  },
}

const ListConsumersResponseResponse = {
  description: 'The list of consumers.',
  content: {
    'application/json': {
      schema: ConsumerDataListSchema,
      example: {
        kind: 'KafkaConsumerList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers',
          next: null,
        },
        data: [
          {
            kind: 'KafkaConsumer',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1',
              resource_name:
                'crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            consumer_id: 'consumer-1',
            instance_id: 'consumer-instance-1',
            client_id: 'client-1',
            assignments: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments',
            },
          },
          {
            kind: 'KafkaConsumer',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2',
              resource_name:
                'crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-2',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            consumer_id: 'consumer-2',
            instance_id: 'consumer-instance-2',
            client_id: 'client-2',
            assignments: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2/assignments',
            },
          },
          {
            kind: 'KafkaConsumer',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2',
              resource_name:
                'crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-2',
            },
            cluster_id: 'cluster-1',
            consumer_group_id: 'consumer-group-1',
            consumer_id: 'consumer-2',
            instance_id: 'consumer-instance-2',
            client_id: 'client-2',
            assignments: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2/assignments',
            },
          },
        ],
      },
    },
  },
}

const ListPartitionOffsetsResponseResponse = {
  description: 'The earliest and latest offsets of a partition',
  content: {
    'application/json': {
      schema: PartitionWithOffsetsDataSchema,
      example: {
        kind: 'KafkaPartitionWithOffsets',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/offset',
          resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1/offset',
        },
        cluster_id: 'cluster-1',
        topic_name: 'topic-1',
        partition_id: 1,
        earliest_offset: '10L',
        latest_offset: '100L',
      },
    },
  },
}

const ListPartitionsResponseResponse = {
  description: 'The list of partitions.',
  content: {
    'application/json': {
      schema: PartitionDataListSchema,
      example: {
        kind: 'KafkaPartitionList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions',
          next: null,
        },
        data: [
          {
            kind: 'KafkaPartition',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 1,
            leader: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1',
            },
            replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas',
            },
            reassignment: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment',
            },
          },
          {
            kind: 'KafkaPartition',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=2',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 2,
            leader: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas/2',
            },
            replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas',
            },
            reassignment: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/reassignment',
            },
          },
          {
            kind: 'KafkaPartition',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=3',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 3,
            leader: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/replicas/3',
            },
            replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/replicas',
            },
            reassignment: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/reassignment',
            },
          },
        ],
      },
    },
  },
}

const ListReplicasResponseResponse = {
  description: 'The list of replicas.',
  content: {
    'application/json': {
      schema: ReplicaDataListSchema,
      example: {
        kind: 'KafkaReplicaList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas',
          next: null,
        },
        data: [
          {
            kind: 'KafkaReplica',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=1',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 1,
            broker_id: 1,
            is_leader: true,
            is_in_sync: true,
            broker: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
            },
          },
          {
            kind: 'KafkaReplica',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/2',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=2',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 1,
            broker_id: 2,
            is_leader: false,
            is_in_sync: true,
            broker: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2',
            },
          },
          {
            kind: 'KafkaReplica',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/3',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=3',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 1,
            broker_id: 3,
            is_leader: false,
            is_in_sync: false,
            broker: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3',
            },
          },
        ],
      },
    },
  },
}

const ListTopicConfigsResponseResponse = {
  description: 'The list of cluster configs.',
  content: {
    'application/json': {
      schema: TopicConfigDataListSchema,
      example: {
        kind: 'KafkaTopicConfigList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs',
          next: null,
        },
        data: [
          {
            kind: 'KafkaTopicConfig',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs/cleanup.policy',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/config=cleanup.policy',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            name: 'cleanup.policy',
            value: 'compact',
            is_default: false,
            is_read_only: false,
            is_sensitive: false,
            source: 'DYNAMIC_TOPIC_CONFIG',
            synonyms: [
              { name: 'cleanup.policy', value: 'compact', source: 'DYNAMIC_TOPIC_CONFIG' },
              { name: 'cleanup.policy', value: 'delete', source: 'DEFAULT_CONFIG' },
            ],
          },
          {
            kind: 'KafkaTopicConfig',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs/compression.type',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/config=compression.type',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            name: 'compression.type',
            value: 'gzip',
            is_default: false,
            is_read_only: false,
            is_sensitive: false,
            source: 'DYNAMIC_TOPIC_CONFIG',
            synonyms: [
              { name: 'compression.type', value: 'gzip', source: 'DYNAMIC_TOPIC_CONFIG' },
              { name: 'compression.type', value: 'producer', source: 'DEFAULT_CONFIG' },
            ],
          },
        ],
      },
    },
  },
}

const ListTopicsResponseResponse = {
  description: 'The list of topics.',
  content: {
    'application/json': {
      schema: TopicDataListSchema,
      example: {
        kind: 'KafkaTopicList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics',
          next: null,
        },
        data: [
          {
            kind: 'KafkaTopic',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            is_internal: false,
            replication_factor: 3,
            partitions_count: 1,
            partitions: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions',
            },
            configs: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs',
            },
            partition_reassignments: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/-/reassignments',
            },
          },
          {
            kind: 'KafkaTopic',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-2',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-2',
            is_internal: true,
            replication_factor: 4,
            partitions_count: 1,
            partitions: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions',
            },
            configs: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/configs',
            },
            partition_reassignments: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/-/reassignments',
            },
          },
          {
            kind: 'KafkaTopic',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-3',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-3',
            is_internal: false,
            replication_factor: 5,
            partitions_count: 1,
            partitions: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions',
            },
            configs: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/configs',
            },
            partition_reassignments: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/-/reassignments',
            },
          },
        ],
      },
    },
  },
}

const ProduceBatchResponseResponse = {
  description:
    'The response containing a delivery report for each record produced to a topic.\nA separate delivery report will be returned, in the same order, each with its own error_code.',
  content: {
    'application/json': {
      schema: ProduceBatchResponseSchema,
      examples: {
        produce_batch_record_success: {
          description: 'The records were successfully produced to the topic.',
          value: {
            successes: [
              {
                id: '1',
                cluster_id: 'cluster-1',
                topic_name: 'topic-1',
                partition_id: 1,
                offset: 0,
                timestamp: '2021-02-05T19:14:42Z',
                key: { type: 'BINARY', size: 7 },
                value: { type: 'JSON', size: 15 },
              },
              {
                id: '2',
                cluster_id: 'cluster-1',
                topic_name: 'topic-1',
                partition_id: 1,
                offset: 1,
                timestamp: '2021-02-05T19:14:43Z',
                key: { type: 'BINARY', size: 7 },
                value: { type: 'JSON', size: 15 },
              },
            ],
            failures: [],
          },
        },
        produce_batch_record_success_and_failure: {
          description: 'One record was produced to the topic successfully, and one failed.',
          value: {
            successes: [
              {
                id: '1',
                cluster_id: 'cluster-1',
                topic_name: 'topic-1',
                partition_id: 1,
                offset: 0,
                timestamp: '2021-02-05T19:14:42Z',
                key: { type: 'BINARY', size: 7 },
                value: { type: 'JSON', size: 15 },
              },
            ],
            failures: [
              { id: '2', error_code: 400, message: 'Bad Request: data=1 is not a base64 string.' },
            ],
          },
        },
      },
    },
  },
}

const ProduceResponseResponse = {
  description:
    'The response containing a delivery report for a record produced to a topic. In streaming mode,\nfor each record sent, a separate delivery report will be returned, in the same order,\neach with its own error_code.',
  content: {
    'application/json': {
      schema: ProduceResponseSchema,
      examples: {
        produce_record_success: {
          description: 'The record was successfully produced to the topic.',
          value: {
            error_code: 200,
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 1,
            offset: 0,
            timestamp: '2021-02-05T19:14:42Z',
            key: { type: 'BINARY', size: 7 },
            value: { type: 'JSON', size: 15 },
          },
        },
        produce_record_bad_binary_data: {
          description: 'Thrown when sending a BINARY value which is not a base64-encoded string.',
          value: { error_code: 400, message: 'Bad Request: data=1 is not a base64 string.' },
        },
      },
    },
  },
}

const SearchAclsResponseResponse = {
  description: 'The list of ACLs.',
  content: {
    'application/json': {
      schema: AclDataListSchema,
      example: {
        kind: 'KafkaAclList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?principal=User%3Aalice',
        },
        data: [
          {
            kind: 'KafkaAcl',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?resource_type=TOPIC&resource_name=topic-&pattern_type=PREFIXED&principal=User%3Aalice&host=*&operation=ALL&permission=ALLOW',
            },
            cluster_id: 'cluster-1',
            resource_type: 'TOPIC',
            resource_name: 'topic-',
            pattern_type: 'PREFIXED',
            principal: 'User:alice',
            host: '*',
            operation: 'ALL',
            permission: 'ALLOW',
          },
          {
            kind: 'KafkaAcl',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?resource_type=CLUSTER&resource_name=kafka-cluster&pattern_type=LITERAL&principal=User%3Aalice&host=*&operation=DESCRIBE&permission=DENY',
            },
            cluster_id: 'cluster-1',
            resource_type: 'CLUSTER',
            resource_name: 'kafka-cluster',
            pattern_type: 'LITERAL',
            principal: 'User:alice',
            host: '*',
            operation: 'DESCRIBE',
            permission: 'DENY',
          },
        ],
      },
    },
  },
}

const SearchReassignmentsByTopicResponseResponse = {
  description: 'The ongoing replicas reassignments.',
  content: {
    'application/json': {
      schema: ReassignmentDataListSchema,
      example: {
        kind: 'KafkaReassignmentList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/-/partitions/-/reassignment',
          next: null,
        },
        data: [
          {
            kind: 'KafkaReassignment',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=1/reassignment',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 1,
            adding_replicas: [1, 2],
            removing_replicas: [3],
            replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas',
            },
          },
          {
            kind: 'KafkaReassignment',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/reassignment',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=2/reassignment',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 2,
            adding_replicas: [1],
            removing_replicas: [2, 3],
            replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas',
            },
          },
          {
            kind: 'KafkaReassignment',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/reassignment',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=3/reassignment',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 3,
            adding_replicas: [3],
            removing_replicas: [1, 2],
            replicas: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/replicas',
            },
          },
        ],
      },
    },
  },
}

const SearchReplicasByBrokerResponseResponse = {
  description: 'The list of replicas.',
  content: {
    'application/json': {
      schema: ReplicaDataListSchema,
      example: {
        kind: 'KafkaReplicaList',
        metadata: {
          self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/partition-replicas',
          next: null,
        },
        data: [
          {
            kind: 'KafkaReplica',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas/1',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-1/partition=2/replica=1',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-1',
            partition_id: 2,
            broker_id: 1,
            is_leader: true,
            is_in_sync: true,
            broker: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
            },
          },
          {
            kind: 'KafkaReplica',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/3/replicas/1',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-3/partition=3/replica=1',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-2',
            partition_id: 3,
            broker_id: 1,
            is_leader: false,
            is_in_sync: true,
            broker: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
            },
          },
          {
            kind: 'KafkaReplica',
            metadata: {
              self: 'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/1/replicas/1',
              resource_name: 'crn:///kafka=cluster-1/topic=topic-3/partition=1/replica=1',
            },
            cluster_id: 'cluster-1',
            topic_name: 'topic-3',
            partition_id: 1,
            broker_id: 1,
            is_leader: false,
            is_in_sync: false,
            broker: {
              related:
                'https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1',
            },
          },
        ],
      },
    },
  },
}

const BadRequestErrorResponseResponse = {
  description:
    'Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        bad_request_cannot_deserialize: {
          description: 'Thrown when trying to deserialize an integer from non-integer data.',
          value: {
            error_code: 400,
            message:
              'Cannot deserialize value of type `java.lang.Integer` from String "A": not a valid `java.lang.Integer` value',
          },
        },
      },
    },
  },
}

const BadRequestErrorResponseCreateAclsResponse = {
  description:
    'Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        create_acls_cluster_name_invalid: {
          description:
            'Thrown when creating an ACL for a CLUSTER resource specifying the wrong resource name.',
          value: {
            error_code: 40002,
            message: 'The only valid name for the CLUSTER resource is kafka-cluster"',
          },
        },
      },
    },
  },
}

const BadRequestErrorResponseCreateTopicResponse = {
  description:
    'Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        create_topic_already_exists: {
          description:
            'Thrown when trying to create a topic with a name already used by an existing topic.',
          value: { error_code: 40002, message: "Topic 'my-topic' already exists." },
        },
        create_topic_replication_factor_too_large: {
          description:
            'Thrown when trying to create a topic with a replication factor larger than the number of brokers.',
          value: {
            error_code: 40002,
            message: 'Replication factor: 2 larger than available brokers: 1.',
          },
        },
      },
    },
  },
}

const BadRequestErrorResponseDeleteAclsResponse = {
  description:
    'Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        delete_acls_unspecified_resource_type: {
          description:
            'Thrown when trying to delete ACLs without specifying a valid resource type.',
          value: { error_code: 400, message: 'resource_type cannot be unspecified or UNKNOWN' },
        },
      },
    },
  },
}

const BadRequestErrorResponseProduceRecordsResponse = {
  description:
    'Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        header_not_base64_encoded: {
          description: 'Thrown when headers in the produce-record are not base64 encoded.',
          value: {
            error_code: 400,
            message:
              "Cannot deserialize value of type `byte[]` from String \"\": Unexpected end of base64-encoded String: base64 variant 'MIME-NO-LINEFEEDS' expects padding (one or more '=' characters) at the end. This Base64Variant might have been incorrectly configured",
          },
        },
      },
    },
  },
}

const UnprocessableEntityProduceRecordResponse = {
  description:
    'Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        produce_record_empty_request_body: {
          description: 'Thrown when the request body is empty.',
          value: {
            error_code: 422,
            message: 'Payload error. Request body is empty. Data is required.',
          },
        },
      },
    },
  },
}

const BadRequestErrorResponseUpdatePartitionCountTopicResponse = {
  description:
    'Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        topic_update_partitions_invalid: {
          description: 'Thrown when trying to update the number of partitions incorrectly.',
          value: { error_code: 40002, message: 'Topic already has 1 partitions.' },
        },
      },
    },
  },
}

const UnauthorizedErrorResponseResponse = {
  description:
    'Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        kafka_authentication_failed: {
          description: 'Thrown when using Basic authentication with wrong Kafka credentials.',
          value: { error_code: 40101, message: 'Authentication failed' },
        },
      },
    },
  },
}

const ForbiddenErrorResponseResponse = {
  description:
    'Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        kafka_authorization_failed: {
          description:
            'Thrown when the caller is not authorized to perform the underlying operation.',
          value: { error_code: 40301, message: 'Request is not authorized' },
        },
      },
    },
  },
}

const NotFoundErrorResponseResponse = {
  description:
    'Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        endpoint_not_found: {
          description: 'Thrown for generic HTTP 404 errors.',
          value: { error_code: 404, message: 'HTTP 404 Not Found' },
        },
        cluster_not_found: {
          description: 'Thrown when using a non-existing cluster ID.',
          value: { error_code: 404, message: 'Cluster my-cluster cannot be found.' },
        },
        unknown_topic_or_partition: {
          description: 'Thrown when using a non-existing topic name or partition ID.',
          value: { error_code: 40403, message: 'This server does not host this topic-partition.' },
        },
      },
    },
  },
}

const TooManyRequestsErrorResponseResponse = {
  description:
    'Indicates that a rate limit threshold has been reached, and the client should retry again later.',
  content: {
    'text/html': {
      schema: z.string(),
      example: {
        description: "A sample response from Jetty's DoSFilter.",
        value:
          '<html> <head> <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>',
      },
    },
  },
}

const RequestEntityTooLargeErrorResponseResponse = {
  description:
    'This implies the client is sending a request payload that is larger than the maximum message size the server can accept.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        produce_records_expects_json: {
          description: 'Thrown by /records API if payload size exceeds the message max size',
          value: {
            error_code: 413,
            message:
              'The request included a message larger than the maximum message size the server can accept.',
          },
        },
      },
    },
  },
}

const UnsupportedMediaTypeErrorResponseResponse = {
  description:
    'This implies the client is sending the request payload format in an unsupported format.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        produce_records_expects_json: {
          description:
            "Thrown by /records API if payload format content-type doesn't match expected application/json",
          value: { error_code: 415, message: 'HTTP 415 Unsupported Media Type' },
        },
      },
    },
  },
}

const ServerErrorResponseResponse = {
  description:
    'A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic_internal_server_error: {
          description: 'Thrown for generic HTTP 500 errors.',
          value: { error_code: 500, message: 'Internal Server Error' },
        },
      },
    },
  },
}

const AclHostParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'host',
      description: 'The ACL host.',
      in: 'query',
      required: false,
      schema: { type: 'string' },
    },
  })

const AclOperationParamsSchema = AclOperationSchema.openapi({
  param: {
    name: 'operation',
    description: 'The ACL operation.',
    in: 'query',
    required: false,
    schema: { $ref: '#/components/schemas/AclOperation' },
  },
}).exactOptional()

const AclOperationRequiredParamsSchema = AclOperationSchema.openapi({
  param: {
    name: 'operation',
    description: 'The ACL operation.',
    in: 'query',
    required: true,
    schema: { $ref: '#/components/schemas/AclOperation' },
  },
})

const AclPatternTypeParamsSchema = AclPatternTypeSchema.openapi({
  param: {
    name: 'pattern_type',
    description: 'The ACL pattern type.',
    in: 'query',
    required: false,
    schema: { $ref: '#/components/schemas/AclPatternType' },
  },
}).exactOptional()

const AclPatternTypeRequiredParamsSchema = AclPatternTypeSchema.openapi({
  param: {
    name: 'pattern_type',
    description: 'The ACL pattern type.',
    in: 'query',
    required: true,
    schema: { $ref: '#/components/schemas/AclPatternType' },
  },
})

const AclPermissionParamsSchema = AclPermissionSchema.openapi({
  param: {
    name: 'permission',
    description: 'The ACL permission.',
    in: 'query',
    required: false,
    schema: { $ref: '#/components/schemas/AclPermission' },
  },
}).exactOptional()

const AclPermissionRequiredParamsSchema = AclPermissionSchema.openapi({
  param: {
    name: 'permission',
    description: 'The ACL permission.',
    in: 'query',
    required: true,
    schema: { $ref: '#/components/schemas/AclPermission' },
  },
})

const AclPrincipalParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'principal',
      description: 'The ACL principal.',
      in: 'query',
      required: false,
      schema: { type: 'string' },
    },
  })

const AclResourceNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'resource_name',
      description: 'The ACL resource name.',
      in: 'query',
      required: false,
      schema: { type: 'string' },
    },
  })

const AclResourceTypeParamsSchema = AclResourceTypeSchema.openapi({
  param: {
    name: 'resource_type',
    description: 'The ACL resource type.',
    in: 'query',
    required: false,
    schema: { $ref: '#/components/schemas/AclResourceType' },
  },
}).exactOptional()

const AclResourceTypeRequiredParamsSchema = AclResourceTypeSchema.openapi({
  param: {
    name: 'resource_type',
    description: 'The ACL resource type.',
    in: 'query',
    required: true,
    schema: { $ref: '#/components/schemas/AclResourceType' },
  },
})

const BrokerIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'broker_id',
      description: 'The broker ID.',
      in: 'path',
      required: true,
      schema: { type: 'integer' },
      example: 1,
    },
  })

const ClusterIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'cluster_id',
      description: 'The Kafka cluster ID.',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      example: 'cluster-1',
    },
  })

const ConfigNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'name',
      description: 'The configuration parameter name.',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      example: 'compression.type',
    },
  })

const ConsumerGroupIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'consumer_group_id',
      description: 'The consumer group ID.',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      example: 'consumer-group-1',
    },
  })

const ConsumerIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'consumer_id',
      description: 'The consumer ID.',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      example: 'consumer-1',
    },
  })

const IncludeAuthorizedOperationsParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'include_authorized_operations',
      description: 'Specify if authorized operations should be included in the response.',
      in: 'query',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const OffsetTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'offset_type',
      description: 'Specify the offset type to be fetched for a given partition',
      in: 'query',
      required: false,
      schema: { type: 'string' },
    },
  })

const PartitionIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      name: 'partition_id',
      description: 'The partition ID.',
      in: 'path',
      required: true,
      schema: { type: 'integer' },
      example: 1,
    },
  })

const TopicNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'topic_name',
      description: 'The topic name.',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      example: 'topic-1',
    },
  })

const AlterBrokerConfigBatchRequestRequestBody = {
  description: 'The alter broker configuration parameter batch request.',
  content: {
    'application/json': {
      schema: AlterConfigBatchRequestDataSchema,
      example: {
        data: [
          { name: 'max.connections', operation: 'DELETE' },
          { name: 'compression.type', value: 'gzip' },
        ],
      },
    },
  },
}

const AlterClusterConfigBatchRequestRequestBody = {
  description: 'The alter cluster configuration parameter batch request.',
  content: {
    'application/json': {
      schema: AlterConfigBatchRequestDataSchema,
      example: {
        data: [
          { name: 'max.connections', operation: 'DELETE' },
          { name: 'compression.type', value: 'gzip' },
        ],
      },
    },
  },
}

const AlterTopicConfigBatchRequestRequestBody = {
  description: 'The alter topic configuration parameter batch request.',
  content: {
    'application/json': {
      schema: AlterConfigBatchRequestDataSchema,
      examples: {
        batch_alter_topic_configs: {
          value: {
            data: [
              { name: 'cleanup.policy', operation: 'DELETE' },
              { name: 'compression.type', value: 'gzip' },
            ],
          },
        },
        validate_only_batch_alter_topic_configs: {
          value: {
            data: [
              { name: 'cleanup.policy', operation: 'DELETE' },
              { name: 'compression.type', value: 'gzip' },
            ],
            validate_only: true,
          },
        },
      },
    },
  },
}

const CreateAclRequestRequestBody = {
  description: 'The ACL creation request.',
  content: {
    'application/json': {
      schema: CreateAclRequestDataSchema,
      example: {
        resource_type: 'CLUSTER',
        resource_name: 'kafka-cluster',
        pattern_type: 'LITERAL',
        principal: 'principalType:principalName',
        host: '*',
        operation: 'DESCRIBE',
        permission: 'DENY',
      },
    },
  },
}

const BatchCreateAclRequestRequestBody = {
  description: 'The batch ACL creation request.',
  content: {
    'application/json': {
      schema: CreateAclRequestDataListSchema,
      example: {
        data: [
          {
            resource_type: 'CLUSTER',
            resource_name: 'kafka-cluster',
            pattern_type: 'LITERAL',
            principal: 'principalType:principalName',
            host: '*',
            operation: 'DESCRIBE',
            permission: 'DENY',
          },
          {
            resource_type: 'TOPIC',
            resource_name: 'kafka-cluster',
            pattern_type: 'LITERAL',
            principal: 'principalType:principalName',
            host: '*',
            operation: 'READ',
            permission: 'ALLOW',
          },
        ],
      },
    },
  },
}

const CreateTopicRequestRequestBody = {
  description: 'The topic creation request.',
  content: {
    'application/json': {
      schema: CreateTopicRequestDataSchema,
      examples: {
        uniform_replication: {
          value: {
            topic_name: 'topic-X',
            partitions_count: 64,
            replication_factor: 3,
            configs: [
              { name: 'cleanup.policy', value: 'compact' },
              { name: 'compression.type', value: 'gzip' },
            ],
          },
        },
        explicit_replicas_assignments: {
          value: {
            topic_name: 'topic-X',
            replicas_assignments: { '0': [1, 2], '1': [2, 3], '2': [3, 1] },
            configs: [
              { name: 'cleanup.policy', value: 'compact' },
              { name: 'compression.type', value: 'gzip' },
            ],
          },
        },
        dry_run_create_topic: {
          value: {
            topic_name: 'topic-X',
            partitions_count: 64,
            replication_factor: 3,
            validate_only: true,
          },
        },
      },
    },
  },
}

const ProduceBatchRequestRequestBody = {
  description:
    'A batch of records to be produced to Kafka. The delivery reports are sent in the response in the same order as the records in the request.',
  content: {
    'application/json': {
      schema: ProduceBatchRequestSchema,
      examples: {
        string_batch: {
          description: 'If using type, one of "BINARY", "JSON" or "STRING" is required.',
          value: {
            entries: [
              { id: '1', value: { type: 'STRING', data: 'My first message' } },
              { id: '2', value: { type: 'STRING', data: 'My second message' } },
            ],
          },
        },
      },
    },
  },
}

const ProduceRequestRequestBody = {
  description:
    'A single record to be produced to Kafka. To produce multiple records in the same request, simply concatenate the records. The delivery reports are concatenated in the same order as the records are sent.',
  content: {
    'application/json': {
      schema: ProduceRequestSchema,
      examples: {
        binary_and_json: {
          description: 'If using type, one of "BINARY", "JSON" or "STRING" is required.',
          value: {
            partition_id: 1,
            headers: [
              { name: 'Header-1', value: 'SGVhZGVyLTE=' },
              { name: 'Header-2', value: 'SGVhZGVyLTI=' },
            ],
            key: { type: 'BINARY', data: 'Zm9vYmFy' },
            value: { type: 'JSON', data: { foo: 'bar' } },
            timestamp: '2021-02-05T19:14:42Z',
          },
        },
        binary_and_avro_with_subject_and_raw_schema: {
          description:
            'If using type, one of "BINARY", "JSON", "STRING", or using the schema field is required.',
          value: {
            partition_id: 1,
            headers: [
              { name: 'Header-1', value: 'SGVhZGVyLTE=' },
              { name: 'Header-2', value: 'SGVhZGVyLTI=' },
            ],
            key: { type: 'BINARY', data: 'Zm9vYmFy' },
            value: {
              type: 'AVRO',
              subject: 'topic-1-key',
              schema: '{\\"type\\":\\"string\\"}',
              data: 'foobar',
            },
            timestamp: '2021-02-05T19:14:42Z',
          },
        },
        string: {
          description: 'If using type, one of "BINARY", "JSON" or "STRING" is required.',
          value: { value: { type: 'STRING', data: 'My message' } },
        },
        schema_id_and_schema_version: {
          description:
            'If not setting type, the record is assumed to use a schema. The actual schema is queried from Schema Registry based on the subject, schema_id and schema_version. You can specify the subject directly or you can use subject_name_strategy. If neither is specified, subject_name_strategy is assumed to be TOPIC_NAME. You can use either schema_id or schema_version to identify the actual schema in the subject.',
          value: {
            key: { subject_name_strategy: 'TOPIC_NAME', schema_id: 1, data: 1000 },
            value: { schema_version: 1, data: { foo: 'bar' } },
          },
        },
        latest_schema: {
          description:
            'If neither schema_id or schema_version are specified, the latest schema for the subject is used. This should be the preferred way of using the API. You should register the schema with Schema Registry directly, then on Kafka REST you do not need to say anything about the schema and we will fetch the latest one for you.',
          value: { key: { data: 1000 }, value: { data: 'foobar' } },
        },
        null_and_empty_data: {
          description: 'data can be omitted or can be null.',
          value: { key: { schema_id: 1 }, value: { schema_version: 1, data: null } },
        },
        empty_value: {
          description: 'key or value can be omitted entirely.',
          value: { key: { data: 1000 } },
        },
      },
    },
  },
}

const UpdateBrokerConfigRequestRequestBody = {
  description: 'The broker configuration parameter update request.',
  content: {
    'application/json': { schema: UpdateConfigRequestDataSchema, example: { value: 'gzip' } },
  },
}

const UpdateClusterConfigRequestRequestBody = {
  description: 'The cluster configuration parameter update request.',
  content: {
    'application/json': { schema: UpdateConfigRequestDataSchema, example: { value: 'gzip' } },
  },
}

const UpdateTopicConfigRequestRequestBody = {
  description: 'The topic configuration parameter update request.',
  content: {
    'application/json': { schema: UpdateConfigRequestDataSchema, example: { value: 'gzip' } },
  },
}

const UpdatePartitionCountRequestRequestBody = {
  description: 'The number of partitions to increase the partition count to.',
  content: {
    'application/json': {
      schema: UpdatePartitionCountRequestDataSchema,
      example: { partitions_count: 10 },
    },
  },
}

export const getClustersRoute = createRoute({
  method: 'get',
  path: '/clusters',
  tags: ['Cluster (v3)'],
  summary: 'List Clusters',
  description:
    "[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\n'Return a list of known Kafka clusters. Currently both Kafka and Kafka REST\nProxy are only aware of the Kafka cluster pointed at by the\n``bootstrap.servers`` configuration. Therefore only one Kafka cluster will be returned in the\nresponse.'",
  operationId: 'listKafkaClusters',
  responses: {
    200: ListClustersResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}',
  tags: ['Cluster (v3)'],
  summary: 'Get Cluster',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the Kafka cluster with the specified ``cluster_id``.',
  operationId: 'getKafkaCluster',
  request: { params: z.object({ cluster_id: ClusterIdParamsSchema }) },
  responses: {
    200: GetClusterResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const postClustersClusterIdAclsBatchRoute = createRoute({
  method: 'post',
  path: '/clusters/{cluster_id}/acls:batch',
  tags: ['ACL (v3)'],
  summary: 'Batch Create ACLs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nCreate ACLs.',
  operationId: 'batchCreateKafkaAcls',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema }),
    body: BatchCreateAclRequestRequestBody,
  },
  responses: {
    201: { description: 'Created' },
    400: BadRequestErrorResponseCreateAclsResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdAclsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/acls',
  tags: ['ACL (v3)'],
  summary: 'List ACLs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn a list of ACLs that match the search criteria.',
  operationId: 'getKafkaAcls',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema }),
    query: z.object({
      resource_type: AclResourceTypeParamsSchema,
      resource_name: AclResourceNameParamsSchema,
      pattern_type: AclPatternTypeParamsSchema,
      principal: AclPrincipalParamsSchema,
      host: AclHostParamsSchema,
      operation: AclOperationParamsSchema,
      permission: AclPermissionParamsSchema,
    }),
  },
  responses: {
    200: SearchAclsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const postClustersClusterIdAclsRoute = createRoute({
  method: 'post',
  path: '/clusters/{cluster_id}/acls',
  tags: ['ACL (v3)'],
  summary: 'Create an ACL',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nCreate an ACL.',
  operationId: 'createKafkaAcls',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema }),
    body: CreateAclRequestRequestBody,
  },
  responses: {
    201: { description: 'Created' },
    400: BadRequestErrorResponseCreateAclsResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const deleteClustersClusterIdAclsRoute = createRoute({
  method: 'delete',
  path: '/clusters/{cluster_id}/acls',
  tags: ['ACL (v3)'],
  summary: 'Delete ACLs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nDelete the ACLs that match the search criteria.',
  operationId: 'deleteKafkaAcls',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema }),
    query: z.object({
      resource_type: AclResourceTypeRequiredParamsSchema,
      resource_name: AclResourceNameParamsSchema,
      pattern_type: AclPatternTypeRequiredParamsSchema,
      principal: AclPrincipalParamsSchema,
      host: AclHostParamsSchema,
      operation: AclOperationRequiredParamsSchema,
      permission: AclPermissionRequiredParamsSchema,
    }),
  },
  responses: {
    200: DeleteAclsResponseResponse,
    400: BadRequestErrorResponseDeleteAclsResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdBrokerConfigsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/broker-configs',
  tags: ['Configs (v3)'],
  summary: 'List Dynamic Broker Configs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn a list of dynamic cluster-wide broker configuration parameters for the specified Kafka\ncluster. Returns an empty list if there are no dynamic cluster-wide broker configuration parameters.',
  operationId: 'listKafkaClusterConfigs',
  request: { params: z.object({ cluster_id: ClusterIdParamsSchema }) },
  responses: {
    200: ListClusterConfigsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const postClustersClusterIdBrokerConfigsAlterRoute = createRoute({
  method: 'post',
  path: '/clusters/{cluster_id}/broker-configs:alter',
  tags: ['Configs (v3)'],
  summary: 'Batch Alter Dynamic Broker Configs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nUpdate or delete a set of dynamic cluster-wide broker configuration parameters.',
  operationId: 'updateKafkaClusterConfigs',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema }),
    body: AlterClusterConfigBatchRequestRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdBrokerConfigsNameRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/broker-configs/{name}',
  tags: ['Configs (v3)'],
  summary: 'Get Dynamic Broker Config',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the dynamic cluster-wide broker configuration parameter specified by ``name``.',
  operationId: 'getKafkaClusterConfig',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, name: ConfigNameParamsSchema }),
  },
  responses: {
    200: GetClusterConfigResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const putClustersClusterIdBrokerConfigsNameRoute = createRoute({
  method: 'put',
  path: '/clusters/{cluster_id}/broker-configs/{name}',
  tags: ['Configs (v3)'],
  summary: 'Update Dynamic Broker Config',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nUpdate the dynamic cluster-wide broker configuration parameter specified by ``name``.',
  operationId: 'updateKafkaClusterConfig',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, name: ConfigNameParamsSchema }),
    body: UpdateClusterConfigRequestRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const deleteClustersClusterIdBrokerConfigsNameRoute = createRoute({
  method: 'delete',
  path: '/clusters/{cluster_id}/broker-configs/{name}',
  tags: ['Configs (v3)'],
  summary: 'Reset Dynamic Broker Config',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReset the configuration parameter specified by ``name`` to its\ndefault value by deleting a dynamic cluster-wide configuration.',
  operationId: 'deleteKafkaClusterConfig',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, name: ConfigNameParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdBrokersRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/brokers',
  tags: ['Broker (v3)'],
  summary: 'List Brokers',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn a list of brokers that belong to the specified\nKafka cluster.',
  request: { params: z.object({ cluster_id: ClusterIdParamsSchema }) },
  responses: {
    200: ListBrokersResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdBrokersBrokerIdRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/brokers/{broker_id}',
  tags: ['Broker (v3)'],
  summary: 'Get Broker',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the broker specified by ``broker_id``.',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, broker_id: BrokerIdParamsSchema }),
  },
  responses: {
    200: GetBrokerResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdBrokersDashConfigsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/brokers/-/configs',
  tags: ['Configs (v3)'],
  summary: 'List Dynamic Broker Configs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of dynamic configuration parameters for all the brokers in the given Kafka cluster.',
  request: { params: z.object({ cluster_id: ClusterIdParamsSchema }) },
  responses: {
    200: ListBrokerConfigsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdBrokersBrokerIdConfigsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/brokers/{broker_id}/configs',
  tags: ['Configs (v3)'],
  summary: 'List Broker Configs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of configuration parameters that belong to the specified Kafka broker.',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, broker_id: BrokerIdParamsSchema }),
  },
  responses: {
    200: ListBrokerConfigsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const postClustersClusterIdBrokersBrokerIdConfigsAlterRoute = createRoute({
  method: 'post',
  path: '/clusters/{cluster_id}/brokers/{broker_id}/configs:alter',
  tags: ['Configs (v3)'],
  summary: 'Batch Alter Broker Configs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nUpdate or delete a set of broker configuration parameters.',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, broker_id: BrokerIdParamsSchema }),
    body: AlterBrokerConfigBatchRequestRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdBrokersBrokerIdConfigsNameRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}',
  tags: ['Configs (v3)'],
  summary: 'Get Broker Config',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the configuration parameter specified by ``name``.',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      broker_id: BrokerIdParamsSchema,
      name: ConfigNameParamsSchema,
    }),
  },
  responses: {
    200: GetBrokerConfigResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const putClustersClusterIdBrokersBrokerIdConfigsNameRoute = createRoute({
  method: 'put',
  path: '/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}',
  tags: ['Configs (v3)'],
  summary: 'Update Broker Config',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nUpdate the configuration parameter specified by ``name``.',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      broker_id: BrokerIdParamsSchema,
      name: ConfigNameParamsSchema,
    }),
    body: UpdateBrokerConfigRequestRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const deleteClustersClusterIdBrokersBrokerIdConfigsNameRoute = createRoute({
  method: 'delete',
  path: '/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}',
  tags: ['Configs (v3)'],
  summary: 'Reset Broker Config',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReset the configuration parameter specified by ``name`` to its default value.',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      broker_id: BrokerIdParamsSchema,
      name: ConfigNameParamsSchema,
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdBrokersBrokerIdPartitionReplicasRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/brokers/{broker_id}/partition-replicas',
  tags: ['Broker (v3)', 'Replica (v3)'],
  summary: 'List Replicas by Broker',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of replicas assigned to the specified broker.',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, broker_id: BrokerIdParamsSchema }),
  },
  responses: {
    200: SearchReplicasByBrokerResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdConsumerGroupsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/consumer-groups',
  tags: ['Consumer Group (v3)'],
  summary: 'List Consumer Groups',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of consumer groups that belong to the specified\nKafka cluster.',
  operationId: 'listKafkaConsumerGroups',
  request: { params: z.object({ cluster_id: ClusterIdParamsSchema }) },
  responses: {
    200: ListConsumerGroupsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdConsumerGroupsConsumerGroupIdRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/consumer-groups/{consumer_group_id}',
  tags: ['Consumer Group (v3)'],
  summary: 'Get Consumer Group',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the consumer group specified by the ``consumer_group_id``.',
  operationId: 'getKafkaConsumerGroup',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      consumer_group_id: ConsumerGroupIdParamsSchema,
    }),
  },
  responses: {
    200: GetConsumerGroupResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers',
  tags: ['Consumer Group (v3)'],
  summary: 'List Consumers',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn a list of consumers that belong to the specified consumer\ngroup.',
  operationId: 'listKafkaConsumers',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      consumer_group_id: ConsumerGroupIdParamsSchema,
    }),
  },
  responses: {
    200: ListConsumersResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lag-summary',
  tags: ['Consumer Group (v3)'],
  summary: 'Get Consumer Group Lag Summary',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy) [![Available in dedicated clusters only](https://img.shields.io/badge/-Available%20in%20dedicated%20clusters%20only-%23bc8540)](https://docs.confluent.io/cloud/current/clusters/cluster-types.html#dedicated-cluster)\n\nReturn the maximum and total lag of the consumers belonging to the\nspecified consumer group.',
  operationId: 'getKafkaConsumerGroupLagSummary',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      consumer_group_id: ConsumerGroupIdParamsSchema,
    }),
  },
  responses: {
    200: GetConsumerGroupLagSummaryResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdConsumerGroupsConsumerGroupIdLagsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags',
  tags: ['Consumer Group (v3)'],
  summary: 'List Consumer Lags',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy) [![Available in dedicated clusters only](https://img.shields.io/badge/-Available%20in%20dedicated%20clusters%20only-%23bc8540)](https://docs.confluent.io/cloud/current/clusters/cluster-types.html#dedicated-cluster)\n\nReturn a list of consumer lags of the consumers belonging to the\nspecified consumer group.',
  operationId: 'listKafkaConsumerLags',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      consumer_group_id: ConsumerGroupIdParamsSchema,
    }),
  },
  responses: {
    200: ListConsumerLagsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdRoute =
  createRoute({
    method: 'get',
    path: '/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags/{topic_name}/partitions/{partition_id}',
    tags: ['Consumer Group (v3)'],
    summary: 'Get Consumer Lag',
    description:
      '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy) [![Available in dedicated clusters only](https://img.shields.io/badge/-Available%20in%20dedicated%20clusters%20only-%23bc8540)](https://docs.confluent.io/cloud/current/clusters/cluster-types.html#dedicated-cluster)\n\nReturn the consumer lag on a partition with the given `partition_id`.',
    operationId: 'getKafkaConsumerLag',
    request: {
      params: z.object({
        cluster_id: ClusterIdParamsSchema,
        consumer_group_id: ConsumerGroupIdParamsSchema,
        topic_name: TopicNameParamsSchema,
        partition_id: PartitionIdParamsSchema,
      }),
    },
    responses: {
      200: GetConsumerLagResponseResponse,
      400: BadRequestErrorResponseResponse,
      401: UnauthorizedErrorResponseResponse,
      403: ForbiddenErrorResponseResponse,
      429: TooManyRequestsErrorResponseResponse,
      '5XX': ServerErrorResponseResponse,
    },
  })

export const getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdRoute =
  createRoute({
    method: 'get',
    path: '/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}',
    tags: ['Consumer Group (v3)'],
    summary: 'Get Consumer',
    description:
      '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the consumer specified by the ``consumer_id``.',
    operationId: 'getKafkaConsumer',
    request: {
      params: z.object({
        cluster_id: ClusterIdParamsSchema,
        consumer_group_id: ConsumerGroupIdParamsSchema,
        consumer_id: ConsumerIdParamsSchema,
      }),
    },
    responses: {
      200: GetConsumerResponseResponse,
      400: BadRequestErrorResponseResponse,
      401: UnauthorizedErrorResponseResponse,
      403: ForbiddenErrorResponseResponse,
      429: TooManyRequestsErrorResponseResponse,
      '5XX': ServerErrorResponseResponse,
    },
  })

export const getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsRoute =
  createRoute({
    method: 'get',
    path: '/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments',
    tags: ['Consumer Group (v3)'],
    summary: 'List Consumer Assignments',
    description:
      '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn a list of partition assignments for the specified consumer.',
    operationId: 'listKafkaConsumerAssignment',
    request: {
      params: z.object({
        cluster_id: ClusterIdParamsSchema,
        consumer_group_id: ConsumerGroupIdParamsSchema,
        consumer_id: ConsumerIdParamsSchema,
      }),
    },
    responses: {
      200: ListConsumerAssignmentsResponseResponse,
      400: BadRequestErrorResponseResponse,
      401: UnauthorizedErrorResponseResponse,
      403: ForbiddenErrorResponseResponse,
      429: TooManyRequestsErrorResponseResponse,
      '5XX': ServerErrorResponseResponse,
    },
  })

export const getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdRoute =
  createRoute({
    method: 'get',
    path: '/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments/{topic_name}/partitions/{partition_id}',
    tags: ['Consumer Group (v3)'],
    summary: 'Get Consumer Assignment',
    description:
      '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn information about the assignment for the specified consumer\nto the specified partition.',
    operationId: 'getKafkaConsumerAssignment',
    request: {
      params: z.object({
        cluster_id: ClusterIdParamsSchema,
        consumer_group_id: ConsumerGroupIdParamsSchema,
        consumer_id: ConsumerIdParamsSchema,
        topic_name: TopicNameParamsSchema,
        partition_id: PartitionIdParamsSchema,
      }),
    },
    responses: {
      200: GetConsumerAssignmentResponseResponse,
      400: BadRequestErrorResponseResponse,
      401: UnauthorizedErrorResponseResponse,
      403: ForbiddenErrorResponseResponse,
      429: TooManyRequestsErrorResponseResponse,
      '5XX': ServerErrorResponseResponse,
    },
  })

export const getClustersClusterIdTopicsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics',
  tags: ['Topic (v3)'],
  summary: 'List Topics',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of topics that belong to the specified Kafka cluster.',
  operationId: 'listKafkaTopics',
  request: { params: z.object({ cluster_id: ClusterIdParamsSchema }) },
  responses: {
    200: ListTopicsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const postClustersClusterIdTopicsRoute = createRoute({
  method: 'post',
  path: '/clusters/{cluster_id}/topics',
  tags: ['Topic (v3)'],
  summary: 'Create Topic',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nCreate a topic.\nAlso supports a dry-run mode that only validates whether the topic creation would succeed\nif the ``validate_only`` request property is explicitly specified and set to true.',
  operationId: 'createKafkaTopic',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema }),
    body: CreateTopicRequestRequestBody,
  },
  responses: {
    200: CreateTopicResponseResponse,
    201: CreateTopicResponseResponse,
    400: BadRequestErrorResponseCreateTopicResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsTopicNameRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/{topic_name}',
  tags: ['Topic (v3)'],
  summary: 'Get Topic',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the topic with the given `topic_name`.',
  operationId: 'getKafkaTopic',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, topic_name: TopicNameParamsSchema }),
    query: z.object({ include_authorized_operations: IncludeAuthorizedOperationsParamsSchema }),
  },
  responses: {
    200: GetTopicResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const deleteClustersClusterIdTopicsTopicNameRoute = createRoute({
  method: 'delete',
  path: '/clusters/{cluster_id}/topics/{topic_name}',
  tags: ['Topic (v3)'],
  summary: 'Delete Topic',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nDelete the topic with the given `topic_name`.',
  operationId: 'deleteKafkaTopic',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, topic_name: TopicNameParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const patchClustersClusterIdTopicsTopicNameRoute = createRoute({
  method: 'patch',
  path: '/clusters/{cluster_id}/topics/{topic_name}',
  tags: ['Topic (v3)'],
  summary: 'Update Partition Count',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nIncrease the number of partitions for a topic.  ',
  operationId: 'updatePartitionCountKafkaTopic',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, topic_name: TopicNameParamsSchema }),
    body: UpdatePartitionCountRequestRequestBody,
  },
  responses: {
    200: GetTopicResponseResponse,
    400: BadRequestErrorResponseUpdatePartitionCountTopicResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsTopicNameConfigsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/{topic_name}/configs',
  tags: ['Configs (v3)'],
  summary: 'List Topic Configs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of configuration parameters that belong to the specified topic.',
  operationId: 'listKafkaTopicConfigs',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, topic_name: TopicNameParamsSchema }),
  },
  responses: {
    200: ListTopicConfigsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const postClustersClusterIdTopicsTopicNameConfigsAlterRoute = createRoute({
  method: 'post',
  path: '/clusters/{cluster_id}/topics/{topic_name}/configs:alter',
  tags: ['Configs (v3)'],
  summary: 'Batch Alter Topic Configs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nUpdate or delete a set of topic configuration parameters.\nAlso supports a dry-run mode that only validates whether the operation would succeed if the\n``validate_only`` request property is explicitly specified and set to true.',
  operationId: 'updateKafkaTopicConfigBatch',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, topic_name: TopicNameParamsSchema }),
    body: AlterTopicConfigBatchRequestRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsTopicNameConfigsNameRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/{topic_name}/configs/{name}',
  tags: ['Configs (v3)'],
  summary: 'Get Topic Config',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the configuration parameter with the given `name`.',
  operationId: 'getKafkaTopicConfig',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      topic_name: TopicNameParamsSchema,
      name: ConfigNameParamsSchema,
    }),
  },
  responses: {
    200: GetTopicConfigResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const putClustersClusterIdTopicsTopicNameConfigsNameRoute = createRoute({
  method: 'put',
  path: '/clusters/{cluster_id}/topics/{topic_name}/configs/{name}',
  tags: ['Configs (v3)'],
  summary: 'Update Topic Config',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nUpdate the configuration parameter with given `name`.',
  operationId: 'updateKafkaTopicConfig',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      topic_name: TopicNameParamsSchema,
      name: ConfigNameParamsSchema,
    }),
    body: UpdateTopicConfigRequestRequestBody,
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const deleteClustersClusterIdTopicsTopicNameConfigsNameRoute = createRoute({
  method: 'delete',
  path: '/clusters/{cluster_id}/topics/{topic_name}/configs/{name}',
  tags: ['Configs (v3)'],
  summary: 'Reset Topic Config',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReset the configuration parameter with given `name` to its default value.',
  operationId: 'deleteKafkaTopicConfig',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      topic_name: TopicNameParamsSchema,
      name: ConfigNameParamsSchema,
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/offset',
  tags: ['Partition (v3)'],
  summary: 'List Partition Offsets',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the earliest and latest offsets of a partition with the given `partition_id`.',
  operationId: 'listKafkaPartitionOffsets',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      topic_name: TopicNameParamsSchema,
      partition_id: PartitionIdParamsSchema,
    }),
    query: z.object({ offset_type: OffsetTypeParamsSchema }),
  },
  responses: {
    200: ListPartitionOffsetsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsTopicNamePartitionsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/{topic_name}/partitions',
  tags: ['Partition (v3)'],
  summary: 'List Partitions',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of partitions that belong to the specified topic.',
  operationId: 'listKafkaPartitions',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, topic_name: TopicNameParamsSchema }),
  },
  responses: {
    200: ListPartitionsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsTopicNamePartitionsPartitionIdRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}',
  tags: ['Partition (v3)'],
  summary: 'Get Partition',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the partition with the given `partition_id`.',
  operationId: 'getKafkaPartition',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      topic_name: TopicNameParamsSchema,
      partition_id: PartitionIdParamsSchema,
    }),
  },
  responses: {
    200: GetPartitionResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsDashPartitionsDashReassignmentRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/-/partitions/-/reassignment',
  tags: ['Partition (v3)'],
  summary: 'List All Replica Reassignments',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of all ongoing replica reassignments in the given Kafka cluster.',
  request: { params: z.object({ cluster_id: ClusterIdParamsSchema }) },
  responses: {
    200: ListAllReassignmentsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/{topic_name}/partitions/-/reassignment',
  tags: ['Partition (v3)'],
  summary: 'List Replica Reassignments By Topic',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of ongoing replica reassignments for the given topic.',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, topic_name: TopicNameParamsSchema }),
  },
  responses: {
    200: SearchReassignmentsByTopicResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentRoute =
  createRoute({
    method: 'get',
    path: '/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/reassignment',
    tags: ['Partition (v3)'],
    summary: 'Get Replica Reassignments',
    description:
      '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of ongoing replica reassignments for the given partition.',
    request: {
      params: z.object({
        cluster_id: ClusterIdParamsSchema,
        topic_name: TopicNameParamsSchema,
        partition_id: PartitionIdParamsSchema,
      }),
    },
    responses: {
      200: GetReassignmentResponseResponse,
      400: BadRequestErrorResponseResponse,
      401: UnauthorizedErrorResponseResponse,
      403: ForbiddenErrorResponseResponse,
      404: NotFoundErrorResponseResponse,
      429: TooManyRequestsErrorResponseResponse,
      '5XX': ServerErrorResponseResponse,
    },
  })

export const getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas',
  tags: ['Replica (v3)'],
  summary: 'List Replicas',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of replicas for the specified partition.',
  request: {
    params: z.object({
      cluster_id: ClusterIdParamsSchema,
      topic_name: TopicNameParamsSchema,
      partition_id: PartitionIdParamsSchema,
    }),
  },
  responses: {
    200: ListReplicasResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdRoute =
  createRoute({
    method: 'get',
    path: '/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas/{broker_id}',
    tags: ['Replica (v3)'],
    summary: 'Get Replica',
    description:
      '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the replica for the specified partition assigned to the specified broker.',
    request: {
      params: z.object({
        cluster_id: ClusterIdParamsSchema,
        topic_name: TopicNameParamsSchema,
        partition_id: PartitionIdParamsSchema,
        broker_id: BrokerIdParamsSchema,
      }),
    },
    responses: {
      200: GetReplicaResponseResponse,
      400: BadRequestErrorResponseResponse,
      401: UnauthorizedErrorResponseResponse,
      403: ForbiddenErrorResponseResponse,
      404: NotFoundErrorResponseResponse,
      429: TooManyRequestsErrorResponseResponse,
      '5XX': ServerErrorResponseResponse,
    },
  })

export const getClustersClusterIdTopicsDashConfigsRoute = createRoute({
  method: 'get',
  path: '/clusters/{cluster_id}/topics/-/configs',
  tags: ['Configs (v3)'],
  summary: 'List All Topic Configs',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nReturn the list of configuration parameters for all topics hosted by the specified\ncluster.',
  operationId: 'listKafkaAllTopicConfigs',
  request: { params: z.object({ cluster_id: ClusterIdParamsSchema }) },
  responses: {
    200: ListTopicConfigsResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const postClustersClusterIdTopicsTopicNameRecordsRoute = createRoute({
  method: 'post',
  path: '/clusters/{cluster_id}/topics/{topic_name}/records',
  tags: ['Records (v3)'],
  summary: 'Produce Records',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nProduce records to the given topic, returning delivery reports for each\n            record produced. This API can be used in streaming mode by setting "Transfer-Encoding:\n            chunked" header. For as long as the connection is kept open, the server will\n            keep accepting records. Records are streamed to and from the server as Concatenated \n            JSON. For each record sent to the server, the server will\n            asynchronously send back a delivery report, in the same order, each with its own\n            error_code. An error_code of 200 indicates success. The HTTP status code will be HTTP \n            200 OK as long as the connection is successfully established. To identify records\n            that have encountered an error, check the error_code of each delivery report.\n\nNote that the cluster_id is validated only when running in Confluent\nCloud.',
  operationId: 'produceRecord',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, topic_name: TopicNameParamsSchema }),
    body: ProduceRequestRequestBody,
  },
  responses: {
    200: ProduceResponseResponse,
    400: BadRequestErrorResponseProduceRecordsResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    413: RequestEntityTooLargeErrorResponseResponse,
    415: UnsupportedMediaTypeErrorResponseResponse,
    422: UnprocessableEntityProduceRecordResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})

export const postClustersClusterIdTopicsTopicNameRecordsBatchRoute = createRoute({
  method: 'post',
  path: '/clusters/{cluster_id}/topics/{topic_name}/records:batch',
  tags: ['Records (v3)'],
  summary: 'Produce Records Batch',
  description:
    '[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)\n\nProduce a batch of records to the given topic, returning delivery reports for each record produced.\nTo identify records that have encountered an error, check the error_code of each delivery report.',
  operationId: 'produceRecordsBatch',
  request: {
    params: z.object({ cluster_id: ClusterIdParamsSchema, topic_name: TopicNameParamsSchema }),
    body: ProduceBatchRequestRequestBody,
  },
  responses: {
    207: ProduceBatchResponseResponse,
    400: BadRequestErrorResponseProduceRecordsResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    415: UnsupportedMediaTypeErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    '5XX': ServerErrorResponseResponse,
  },
})
