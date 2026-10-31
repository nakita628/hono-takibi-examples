import { createRoute, z } from '@hono/zod-openapi'

const KafkaHeaderSchema = z
  .object({
    key: z.string().openapi({ description: 'Header key name.' }),
    value: z
      .string()
      .openapi({ description: 'The header value in binary format, encoded as Base64.' }),
  })
  .openapi({
    title: 'KafkaHeader',
    description: 'A Kafka record header containing a key-value pair.',
    required: ['key', 'value'],
    example: { key: 'key1', value: 'dmFsdWUx' },
  })
  .openapi('KafkaHeader')

const KafkaHeaderListSchema = z
  .array(KafkaHeaderSchema)
  .openapi({
    title: 'KafkaHeaderList',
    description: 'List of Kafka record headers.',
    example: [
      { key: 'key1', value: 'dmFsdWUx' },
      { key: 'key2', value: 'dmFsdWUy' },
    ],
  })
  .openapi('KafkaHeaderList')

const RecordKeySchema = z
  .xor([
    z.array(z.any()).openapi({ description: 'Array representation of the key.' }),
    z.object({}).openapi({ description: 'JSON object representation of the key.' }),
    z
      .string()
      .openapi({
        description: 'String representation of the key (text or base64-encoded binary).',
      }),
  ])
  .openapi({
    title: 'RecordKey',
    description:
      'Key representation for a record. It can be an array, a JSON object, or a string depending on the content type.',
  })
  .openapi('RecordKey')

const RecordValueSchema = z
  .xor([
    z.array(z.any()).openapi({ description: 'Array representation of the value.' }),
    z.object({}).openapi({ description: 'JSON object representation of the value.' }),
    z
      .string()
      .openapi({
        description: 'String representation of the value (text or base64-encoded binary).',
      }),
    z.null().nullable().openapi({ description: 'Null value (tombstone record).' }),
  ])
  .openapi({
    title: 'RecordValue',
    description:
      'Value representation for a record. It can be an array, a JSON object, a string, or null depending on the content type.',
  })
  .openapi('RecordValue')

const ConsumerRecordSchema = z
  .object({
    topic: z
      .string()
      .exactOptional()
      .openapi({ description: 'Topic name from which the record was consumed.' }),
    key: RecordKeySchema.exactOptional(),
    value: RecordValueSchema.exactOptional(),
    partition: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Partition number from which the record was consumed.' }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Offset of the record in the partition.',
      }),
    timestamp: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The record timestamp, in milliseconds since the Unix epoch.',
      }),
    headers: KafkaHeaderListSchema.exactOptional(),
  })
  .openapi({
    title: 'ConsumerRecord',
    description: 'A record consumed from a Kafka topic.',
    example: {
      key: 'key1',
      offset: 2,
      partition: 0,
      topic: 'topic',
      value: 'value1',
      timestamp: 1591897790000,
      headers: [
        { key: 'key1', value: 'dmFsdWUx' },
        { key: 'key2', value: 'dmFsdWUy' },
      ],
    },
    required: [],
  })
  .openapi('ConsumerRecord')

const ConsumerRecordListSchema = z
  .array(ConsumerRecordSchema)
  .openapi({
    title: 'ConsumerRecordList',
    description: 'List of records consumed from Kafka topics.',
    example: [
      {
        topic: 'topic',
        key: 'key1',
        value: 'value1',
        partition: 0,
        offset: 2,
        timestamp: 1591897790000,
      },
      {
        topic: 'topic',
        key: 'key2',
        value: 'value2',
        partition: 1,
        offset: 3,
        timestamp: 1591897790000,
      },
    ],
  })
  .openapi('ConsumerRecordList')

const CreatedConsumerSchema = z
  .object({
    instance_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique ID for the consumer instance in the group.' }),
    base_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Base URI used to construct URIs for subsequent requests against this consumer instance.',
      }),
  })
  .openapi({
    title: 'CreatedConsumer',
    description: 'Response containing details of a newly created consumer instance.',
    example: {
      instance_id: 'my-consumer',
      base_uri: 'http://localhost:8080/consumers/my-group/instances/my-consumer',
    },
    required: [],
  })
  .openapi('CreatedConsumer')

const OffsetRecordSentSchema = z
  .object({
    partition: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Partition to which the record was sent.' }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Offset of the record in the partition.',
      }),
  })
  .openapi({
    title: 'OffsetRecordSent',
    description: 'Offset information for a successfully sent record.',
    example: { partition: 31, offset: 86 },
    required: [],
  })
  .openapi('OffsetRecordSent')

const ErrorSchema = z
  .object({
    error_code: z
      .int32()
      .exactOptional()
      .openapi({ description: 'HTTP status code or Kafka error code.' }),
    message: z.string().exactOptional().openapi({ description: 'Detailed error message.' }),
    validation_errors: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of validation errors (if applicable).' }),
  })
  .openapi({
    title: 'Error',
    description: 'Error response returned by the HTTP Bridge.',
    example: { error_code: 404, message: 'resource not found' },
    required: [],
  })
  .openapi('Error')

const OffsetRecordSentListSchema = z
  .object({
    offsets: z
      .array(z.xor([OffsetRecordSentSchema, ErrorSchema]))
      .exactOptional()
      .openapi({ description: 'Array of offset information or errors for each record sent.' }),
  })
  .openapi({
    title: 'OffsetRecordSentList',
    description:
      'List of offset information for sent records, which might include errors for individual records.',
    example: {
      offsets: [
        { partition: 92, offset: 98 },
        { error_code: 404, message: 'Topic my-topic not present in metadata after 60000 ms.' },
        { partition: 65, offset: 91 },
      ],
    },
    required: [],
  })
  .openapi('OffsetRecordSentList')

const OffsetsSummarySchema = z
  .object({
    beginning_offset: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Earliest available offset in the partition.',
      }),
    end_offset: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Latest offset in the partition (offset of the next message to be appended).',
      }),
  })
  .openapi({
    title: 'OffsetsSummary',
    description: 'Summary of offset positions for a topic partition.',
    example: { beginning_offset: 10, end_offset: 50 },
    required: [],
  })
  .openapi('OffsetsSummary')

const ConsumerSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name for the consumer instance. The name is unique within the scope of the consumer group. The name is used in URLs. If a name is not specified, a randomly generated name is assigned.',
      }),
    format: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The allowable message format for the consumer, which can be `binary` (default) or `json`. The messages are converted into a JSON format.',
      }),
    'auto.offset.reset': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resets the offset position for the consumer. If set to `latest` (default), messages are read from the latest offset. If set to `earliest`, messages are read from the first offset.',
      }),
    'fetch.min.bytes': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Sets the minimum amount of data, in bytes, for the consumer to receive. The broker waits until the data to send exceeds this amount. Default is `1` byte.',
      }),
    'consumer.request.timeout.ms': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Sets the maximum amount of time, in milliseconds, for the consumer to wait for messages for a request. If the timeout period is reached without a response, an error is returned. Default is `30000` (30 seconds).',
      }),
    'enable.auto.commit': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to `true` (default), message offsets are committed automatically for the consumer. If set to `false`, message offsets must be committed manually.',
      }),
    'isolation.level': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set to `read_uncommitted` (default), all transaction records are retrieved, indpendent of any transaction outcome. If set to `read_committed`, the records from committed transactions are retrieved.',
      }),
  })
  .openapi({
    title: 'Consumer',
    example: {
      name: 'consumer1',
      format: 'binary',
      'auto.offset.reset': 'earliest',
      'enable.auto.commit': false,
      'fetch.min.bytes': 512,
      'consumer.request.timeout.ms': 30000,
      'isolation.level': 'read_committed',
    },
    required: [],
  })
  .openapi('Consumer')

const OffsetCommitSeekSchema = z
  .strictObject({
    topic: z.string().openapi({ description: 'Topic name.' }),
    partition: z.int32().openapi({ description: 'Partition number.' }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Offset position in the partition.',
      }),
  })
  .openapi({
    title: 'OffsetCommitSeek',
    description:
      'Offset position for committing or seeking to a specific offset in a topic partition.',
    required: ['topic', 'partition', 'offset'],
    example: { topic: 'topic', partition: 43, offset: 92 },
  })
  .openapi('OffsetCommitSeek')

const OffsetCommitSeekListSchema = z
  .strictObject({
    offsets: z
      .array(OffsetCommitSeekSchema)
      .exactOptional()
      .openapi({ description: 'Array of offset positions for topic partitions.' }),
  })
  .openapi({
    title: 'OffsetCommitSeekList',
    description:
      'List of offset positions for committing or seeking across multiple topic partitions.',
    example: {
      offsets: [
        { topic: 'topic', partition: 0, offset: 15 },
        { topic: 'topic', partition: 1, offset: 42 },
      ],
    },
    required: [],
  })
  .openapi('OffsetCommitSeekList')

const PartitionSchema = z
  .strictObject({
    topic: z.string().exactOptional().openapi({ description: 'Topic name' }),
    partition: z.int32().exactOptional().openapi({ description: 'Partition number' }),
  })
  .openapi({ title: 'Partition', description: 'A topic partition identifier.', required: [] })
  .openapi('Partition')

const PartitionsSchema = z
  .strictObject({
    partitions: z
      .array(PartitionSchema)
      .exactOptional()
      .openapi({ description: 'Array of topic partition identifiers.' }),
  })
  .openapi({
    title: 'Partitions',
    description: 'List of topic partitions for assignment to a consumer.',
    example: {
      partitions: [
        { topic: 'topic', partition: 0 },
        { topic: 'topic', partition: 1 },
      ],
    },
    required: [],
  })
  .openapi('Partitions')

const ProducerRecordSchema = z
  .strictObject({
    value: RecordValueSchema,
    key: RecordKeySchema.exactOptional(),
    partition: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The target partition for the record. If not specified, the partitioner determines the partition.',
      }),
    timestamp: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The record timestamp, in milliseconds since the Unix epoch. If not specified, the current time is used.',
      }),
    headers: KafkaHeaderListSchema.exactOptional(),
  })
  .openapi({
    title: 'ProducerRecord',
    description: 'A record to be sent to a Kafka topic.',
    required: ['value'],
    example: {
      key: 'key1',
      partition: 0,
      timestamp: 1591897790000,
      value: 'value1',
      headers: [
        { key: 'key1', value: 'dmFsdWUx' },
        { key: 'key2', value: 'dmFsdWUy' },
      ],
    },
  })
  .openapi('ProducerRecord')

const ProducerRecordListSchema = z
  .strictObject({
    records: z
      .array(ProducerRecordSchema)
      .exactOptional()
      .openapi({ description: 'Array of records to send.' }),
  })
  .openapi({
    title: 'ProducerRecordList',
    description: 'List of records to be sent to a Kafka topic.',
    example: {
      records: [
        { key: 'key1', value: 'value1' },
        { value: 'value2', partition: 1 },
        { value: 'value3' },
      ],
    },
    required: [],
  })
  .openapi('ProducerRecordList')

const ProducerRecordToPartitionSchema = z
  .strictObject({
    value: RecordValueSchema,
    key: RecordKeySchema.exactOptional(),
    headers: KafkaHeaderListSchema.exactOptional(),
  })
  .openapi({
    title: 'ProducerRecordToPartition',
    description: 'A record to be sent to a specific Kafka topic partition.',
    required: ['value'],
    example: { value: { v: 128 }, key: { k: 'key' } },
  })
  .openapi('ProducerRecordToPartition')

const ProducerRecordToPartitionListSchema = z
  .strictObject({
    records: z
      .array(ProducerRecordToPartitionSchema)
      .exactOptional()
      .openapi({ description: 'Array of records to send to the partition.' }),
  })
  .openapi({
    title: 'ProducerRecordToPartitionList',
    description: 'List of records to be sent to a specific Kafka topic partition.',
    example: { records: [{ key: 'key1', value: 'value1' }, { value: 'value2' }] },
    required: [],
  })
  .openapi('ProducerRecordToPartitionList')

const TopicsSchema = z
  .strictObject({
    topics: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of topic names to subscribe to.' }),
    topic_pattern: z
      .string()
      .exactOptional()
      .openapi({ description: 'A regex topic pattern for matching multiple topics.' }),
  })
  .openapi({
    title: 'Topics',
    description:
      'Topic subscription specification using either a list of topic names or a regex pattern.',
    example: { topics: ['topic1', 'topic2'] },
    required: [],
  })
  .openapi('Topics')

const AssignedTopicPartitionsSchema = z
  .record(
    z.string(),
    z.array(z.int32()).openapi({ description: 'Array of partition numbers for the topic.' }),
  )
  .openapi({
    title: 'AssignedTopicPartitions',
    description: 'Map of topic names to their assigned partition numbers.',
    example: { 'my-topic1': [1, 2, 3] },
  })
  .openapi('AssignedTopicPartitions')

const SubscribedTopicListSchema = z
  .object({
    topics: TopicsSchema.exactOptional(),
    partitions: z
      .array(AssignedTopicPartitionsSchema)
      .exactOptional()
      .openapi({ description: 'List of assigned topic partitions.' }),
  })
  .openapi({
    title: 'SubscribedTopicList',
    description: 'List of topics and partitions to which a consumer is subscribed or assigned.',
    example: {
      topics: ['my-topic1', 'my-topic2'],
      partitions: [{ 'my-topic1': [1, 2, 3] }, { 'my-topic2': [1] }],
    },
    required: [],
  })
  .openapi('SubscribedTopicList')

const ReplicaSchema = z
  .strictObject({
    broker: z.int32().exactOptional().openapi({ description: 'Broker ID hosting this replica.' }),
    leader: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the replica is the partition leader.' }),
    in_sync: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the replica is in-sync with the leader.' }),
  })
  .openapi({
    title: 'Replica',
    description: 'Information about a partition replica.',
    example: { broker: 1, leader: true, in_sync: true },
    required: [],
  })
  .openapi('Replica')

const PartitionMetadataSchema = z
  .strictObject({
    partition: z.int32().exactOptional().openapi({ description: 'Partition number' }),
    leader: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Broker ID of the partition leader.' }),
    replicas: z
      .array(ReplicaSchema)
      .exactOptional()
      .openapi({ description: 'List of replica information for the partition.' }),
  })
  .openapi({
    title: 'PartitionMetadata',
    description: 'Metadata information about a topic partition.',
    example: {
      partition: 1,
      leader: 1,
      replicas: [
        { broker: 1, leader: true, in_sync: true },
        { broker: 2, leader: false, in_sync: true },
      ],
    },
    required: [],
  })
  .openapi('PartitionMetadata')

const TopicMetadataSchema = z
  .strictObject({
    name: z.string().exactOptional().openapi({ description: 'Name of the topic.' }),
    configs: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Per-topic configuration overrides.' }),
    partitions: z
      .array(PartitionMetadataSchema)
      .exactOptional()
      .openapi({ description: 'List of partition metadata for the topic.' }),
  })
  .openapi({
    title: 'TopicMetadata',
    description: 'Metadata information about a Kafka topic.',
    example: {
      name: 'topic',
      offset: 2,
      configs: { 'cleanup.policy': 'compact' },
      partitions: [
        {
          partition: 1,
          leader: 1,
          replicas: [
            { broker: 1, leader: true, in_sync: true },
            { broker: 2, leader: false, in_sync: true },
          ],
        },
        {
          partition: 2,
          leader: 2,
          replicas: [
            { broker: 1, leader: false, in_sync: true },
            { broker: 2, leader: true, in_sync: true },
          ],
        },
      ],
    },
    required: [],
  })
  .openapi('TopicMetadata')

const BridgeInfoSchema = z
  .object({
    bridge_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of the Strimzi Kafka Bridge.' }),
  })
  .openapi({
    title: 'BridgeInfo',
    description: 'Information about HTTP Bridge instance.',
    example: { bridge_version: '0.16.0' },
    required: [],
  })
  .openapi('BridgeInfo')

const NewTopicSchema = z
  .strictObject({
    topic_name: z.string().openapi({ description: 'Name of the topic to create.' }),
    partitions_count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The number of partitions for the topic. If not specified, the broker default is used.',
      }),
    replication_factor: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The number of replicas for each partition. If not specified, the broker default is used.',
      }),
  })
  .openapi({
    title: 'NewTopic',
    description: 'Specification for creating a new Kafka topic.',
    required: ['topic_name'],
    example: { topic_name: 'my-topic', partitions_count: 3, replication_factor: 2 },
  })
  .openapi('NewTopic')

export const postConsumersGroupidRoute = createRoute({
  method: 'post',
  path: '/consumers/{groupid}',
  tags: ['Consumers'],
  description:
    'Creates a consumer instance in the given consumer group. You can optionally specify a consumer name and supported configuration options. It returns a base URI which must be used to construct URLs for subsequent requests against this consumer instance.',
  operationId: 'createConsumer',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group in which to create the consumer.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Name and configuration of the consumer. The name is unique within the scope of the consumer group. If a name is not specified, a randomly generated name is assigned. All parameters are optional. The supported configuration options are shown in the following example.',
      content: { 'application/vnd.kafka.v2+json': { schema: ConsumerSchema } },
    },
  },
  responses: {
    200: {
      description: 'Consumer created successfully.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: CreatedConsumerSchema,
          examples: {
            response: {
              value: {
                instance_id: 'consumer1',
                base_uri: 'http://localhost:8080/consumers/my-group/instances/consumer1',
              },
            },
          },
        },
      },
    },
    409: {
      description: 'A consumer instance with the specified name already exists in the HTTP Bridge.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error_code: 409,
                message:
                  'A consumer instance with the specified name already exists in the HTTP Bridge.',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'One or more consumer configuration options have invalid values.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error_code: 422,
                message: 'One or more consumer configuration options have invalid values.',
              },
            },
          },
        },
      },
    },
  },
})

export const postConsumersGroupidInstancesNamePositionsBeginningRoute = createRoute({
  method: 'post',
  path: '/consumers/{groupid}/instances/{name}/positions/beginning',
  tags: ['Seek', 'Consumers'],
  description:
    'Configures a subscribed consumer to seek (and subsequently read from) the first offset in one or more given topic partitions.',
  operationId: 'seekToBeginning',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the subscribed consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the subscribed consumer.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'List of topic partitions to which the consumer is subscribed. The consumer will seek the first offset in the specified partitions.',
      content: { 'application/vnd.kafka.v2+json': { schema: PartitionsSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Seek to the beginning performed successfully.' },
    404: {
      description:
        'The specified consumer instance was not found, or the specified consumer instance did not have one of the specified partitions assigned.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
  },
})

export const postConsumersGroupidInstancesNamePositionsEndRoute = createRoute({
  method: 'post',
  path: '/consumers/{groupid}/instances/{name}/positions/end',
  tags: ['Seek', 'Consumers'],
  description:
    'Configures a subscribed consumer to seek (and subsequently read from) the offset at the end of one or more of the given topic partitions.',
  operationId: 'seekToEnd',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the subscribed consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the subscribed consumer.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'List of topic partitions to which the consumer is subscribed. The consumer will seek the last offset in the specified partitions.',
      content: { 'application/vnd.kafka.v2+json': { schema: PartitionsSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Seek to the end performed successfully.' },
    404: {
      description:
        'The specified consumer instance was not found, or the specified consumer instance did not have one of the specified partitions assigned.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
  },
})

export const getConsumersGroupidInstancesNameSubscriptionRoute = createRoute({
  method: 'get',
  path: '/consumers/{groupid}/instances/{name}/subscription',
  tags: ['Consumers'],
  description: 'Retrieves a list of the topics to which the consumer is subscribed.',
  operationId: 'listSubscriptions',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the subscribed consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the subscribed consumer.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of subscribed topics and partitions.',
      content: { 'application/vnd.kafka.v2+json': { schema: SubscribedTopicListSchema } },
    },
    404: {
      description: 'The specified consumer instance was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
  },
})

export const postConsumersGroupidInstancesNameSubscriptionRoute = createRoute({
  method: 'post',
  path: '/consumers/{groupid}/instances/{name}/subscription',
  tags: ['Consumers'],
  description:
    'Subscribes a consumer to one or more topics. You can describe the topics to which the consumer will subscribe in a list (of `Topics` type) or as a `topic_pattern` field. Each call replaces the subscriptions for the subscriber.',
  operationId: 'subscribe',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the subscribed consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the consumer to subscribe to topics.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'List of topics to which the consumer will subscribe.',
      content: { 'application/vnd.kafka.v2+json': { schema: TopicsSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Consumer subscribed successfully.' },
    404: {
      description: 'The specified consumer instance was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
    409: {
      description: 'Subscriptions to topics, partitions, and patterns are mutually exclusive.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error_code: 409,
                message:
                  'Subscriptions to topics, partitions, and patterns are mutually exclusive.',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'A list (of `Topics` type) or a `topic_pattern` must be specified.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error_code: 422,
                message: 'A list (of Topics type) or a topic_pattern must be specified.',
              },
            },
          },
        },
      },
    },
  },
})

export const deleteConsumersGroupidInstancesNameSubscriptionRoute = createRoute({
  method: 'delete',
  path: '/consumers/{groupid}/instances/{name}/subscription',
  tags: ['Consumers'],
  description: 'Unsubscribes a consumer from all topics.',
  operationId: 'unsubscribe',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the subscribed consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the consumer to unsubscribe from topics.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Consumer unsubscribed successfully.' },
    404: {
      description: 'The specified consumer instance was not found.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
  },
})

export const postConsumersGroupidInstancesNamePositionsRoute = createRoute({
  method: 'post',
  path: '/consumers/{groupid}/instances/{name}/positions',
  tags: ['Seek', 'Consumers'],
  description:
    'Configures a subscribed consumer to fetch offsets from a particular offset the next time it fetches a set of records from a given topic partition. This overrides the default fetch behavior for consumers. You can specify one or more topic partitions.',
  operationId: 'seek',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the subscribed consumer.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'List of partition offsets from which the subscribed consumer will next fetch records.',
      content: { 'application/vnd.kafka.v2+json': { schema: OffsetCommitSeekListSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Seek performed successfully.' },
    404: {
      description:
        'The specified consumer instance was not found, or the specified consumer instance did not have one of the specified partitions assigned.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
  },
})

export const postConsumersGroupidInstancesNameAssignmentsRoute = createRoute({
  method: 'post',
  path: '/consumers/{groupid}/instances/{name}/assignments',
  tags: ['Consumers'],
  description: 'Assigns one or more topic partitions to a consumer.',
  operationId: 'assign',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the consumer to assign topic partitions to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'List of topic partitions to assign to the consumer.',
      content: { 'application/vnd.kafka.v2+json': { schema: PartitionsSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Partitions assigned successfully.' },
    404: {
      description: 'The specified consumer instance was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
    409: {
      description: 'Subscriptions to topics, partitions, and patterns are mutually exclusive.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error_code: 409,
                message:
                  'Subscriptions to topics, partitions, and patterns are mutually exclusive.',
              },
            },
          },
        },
      },
    },
  },
})

export const getTopicsRoute = createRoute({
  method: 'get',
  path: '/topics',
  tags: ['Topics'],
  description: 'Retrieves a list of all topics.',
  operationId: 'listTopics',
  responses: {
    200: {
      description: 'List of topics.',
      content: { 'application/vnd.kafka.v2+json': { schema: z.array(z.string()) } },
    },
  },
})

export const getTopicsTopicnameRoute = createRoute({
  method: 'get',
  path: '/topics/{topicname}',
  tags: ['Topics'],
  description: 'Retrieves the metadata about a given topic.',
  operationId: 'getTopic',
  request: {
    params: z.object({
      topicname: z
        .string()
        .openapi({
          param: {
            name: 'topicname',
            in: 'path',
            description: 'Name of the topic to send records to or retrieve metadata from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Topic metadata.',
      content: { 'application/vnd.kafka.v2+json': { schema: TopicMetadataSchema } },
    },
    404: {
      description: 'The specified topic was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: { value: { error_code: 404, message: 'The specified topic was not found.' } },
          },
        },
      },
    },
  },
})

export const postTopicsTopicnameRoute = createRoute({
  method: 'post',
  path: '/topics/{topicname}',
  tags: ['Topics', 'Producer'],
  description:
    'Sends one or more records to a given topic, optionally specifying a partition, key, or both.',
  operationId: 'send',
  request: {
    params: z.object({
      topicname: z
        .string()
        .openapi({
          param: {
            name: 'topicname',
            in: 'path',
            description: 'Name of the topic to send records to or retrieve metadata from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      async: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'async',
            in: 'query',
            description:
              'Ignore metadata as result of the sending operation, not returning them to the client. If not specified it is false, metadata returned.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'application/vnd.kafka.json.v2+json': { schema: ProducerRecordListSchema },
        'application/vnd.kafka.binary.v2+json': { schema: ProducerRecordListSchema },
        'application/vnd.kafka.text.v2+json': { schema: ProducerRecordListSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Records sent successfully.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: OffsetRecordSentListSchema,
          examples: {
            response: {
              value: {
                offsets: [
                  { partition: 2, offset: 0 },
                  { partition: 1, offset: 1 },
                  { partition: 2, offset: 2 },
                ],
              },
            },
          },
        },
      },
    },
    404: {
      description: 'The specified topic was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: { value: { error_code: 404, message: 'The specified topic was not found.' } },
          },
        },
      },
    },
    422: {
      description: 'The record list is not valid.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 422, message: 'The record list contains invalid records.' },
            },
          },
        },
      },
    },
  },
})

export const postAdminTopicsRoute = createRoute({
  method: 'post',
  path: '/admin/topics',
  tags: ['Topics'],
  description: 'Creates a topic with given name, partitions count, and replication factor.',
  operationId: 'createTopic',
  request: {
    body: {
      description: 'Creates a topic with given name, partitions count, and replication factor.',
      content: { 'application/vnd.kafka.json.v2+json': { schema: NewTopicSchema } },
      required: true,
    },
  },
  responses: { 201: { description: 'Created.' } },
})

export const getConsumersGroupidInstancesNameRecordsRoute = createRoute({
  method: 'get',
  path: '/consumers/{groupid}/instances/{name}/records',
  tags: ['Consumers'],
  description:
    'Retrieves records for a subscribed consumer, including message values, topics, and partitions. The request for this operation MUST use the base URL (including the host and port) returned in the response from the `POST` request to `/consumers/{groupid}` that was used to create this consumer.',
  operationId: 'poll',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the subscribed consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the subscribed consumer to retrieve records from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      timeout: z
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
            name: 'timeout',
            in: 'query',
            description:
              'The maximum amount of time, in milliseconds, that the HTTP Bridge spends retrieving records before timing out the request.',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      max_bytes: z
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
            name: 'max_bytes',
            in: 'query',
            description:
              'The maximum size, in bytes, of unencoded keys and values that can be included in the response. Otherwise, an error response with code 422 is returned.',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Poll request executed successfully.',
      content: {
        'application/vnd.kafka.json.v2+json': {
          schema: ConsumerRecordListSchema,
          examples: {
            response: {
              value: [
                {
                  topic: 'topic',
                  key: 'key1',
                  value: { foo: 'bar' },
                  partition: 0,
                  offset: 2,
                  timestamp: 1591897790000,
                },
                {
                  topic: 'topic',
                  key: 'key2',
                  value: ['foo2', 'bar2'],
                  partition: 1,
                  offset: 3,
                  timestamp: 1591897790002,
                },
              ],
            },
          },
        },
        'application/vnd.kafka.binary.v2+json': {
          schema: ConsumerRecordListSchema,
          examples: {
            response: {
              value:
                '[\n  {\n    "topic": "test",\n    "key": "a2V5",\n    "value": "Y29uZmx1ZW50",\n    "partition": 1,\n    "offset": 100,\n  },\n  {\n    "topic": "test",\n    "key": "a2V5",\n    "value": "a2Fma2E=",\n    "partition": 2,\n    "offset": 101,\n  }\n]',
            },
          },
        },
        'application/vnd.kafka.text.v2+json': { schema: ConsumerRecordListSchema },
        'application/vnd.kafka.v2+json': { schema: ConsumerRecordListSchema },
      },
    },
    404: {
      description: 'The specified consumer instance was not found.',
      content: {
        'application/vnd.kafka.json.v2+json': { schema: ErrorSchema },
        'application/vnd.kafka.binary.v2+json': { schema: ErrorSchema },
        'application/vnd.kafka.text.v2+json': { schema: ErrorSchema },
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
    406: {
      description:
        'The `format` used in the consumer creation request does not match the embedded format in the Accept header of this request or the bridge got a message from the topic which is not JSON encoded.',
      content: {
        'application/vnd.kafka.json.v2+json': { schema: ErrorSchema },
        'application/vnd.kafka.binary.v2+json': { schema: ErrorSchema },
        'application/vnd.kafka.text.v2+json': { schema: ErrorSchema },
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error_code: 406,
                message:
                  'The `format` used in the consumer creation request does not match the embedded format in the Accept header of this request.',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Response exceeds the maximum number of bytes the consumer can receive.',
      content: {
        'application/vnd.kafka.json.v2+json': { schema: ErrorSchema },
        'application/vnd.kafka.binary.v2+json': { schema: ErrorSchema },
        'application/vnd.kafka.text.v2+json': { schema: ErrorSchema },
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error_code: 422,
                message: 'Response exceeds the maximum number of bytes the consumer can receive',
              },
            },
          },
        },
      },
    },
  },
})

export const getTopicsTopicnamePartitionsRoute = createRoute({
  method: 'get',
  path: '/topics/{topicname}/partitions',
  tags: ['Topics'],
  description: 'Retrieves a list of partitions for the topic.',
  operationId: 'listPartitions',
  request: {
    params: z.object({
      topicname: z
        .string()
        .openapi({
          param: {
            name: 'topicname',
            in: 'path',
            description: 'Name of the topic to send records to or retrieve metadata from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of partitions.',
      content: { 'application/vnd.kafka.v2+json': { schema: z.array(PartitionMetadataSchema) } },
    },
    404: {
      description: 'The specified topic was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: { value: { error_code: 404, message: 'The specified topic was not found.' } },
          },
        },
      },
    },
  },
})

export const getTopicsTopicnamePartitionsPartitionidRoute = createRoute({
  method: 'get',
  path: '/topics/{topicname}/partitions/{partitionid}',
  tags: ['Topics'],
  description: 'Retrieves partition metadata for the topic partition.',
  operationId: 'getPartition',
  request: {
    params: z.object({
      topicname: z
        .string()
        .openapi({
          param: {
            name: 'topicname',
            in: 'path',
            description: 'Name of the topic to send records to or retrieve metadata from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      partitionid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'partitionid',
            in: 'path',
            description: 'ID of the partition to send records to or retrieve metadata from.',
            required: true,
            schema: { type: 'integer', minimum: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Partition metadata.',
      content: { 'application/vnd.kafka.v2+json': { schema: PartitionMetadataSchema } },
    },
    404: {
      description: 'The specified partition was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified partition was not found.' },
            },
          },
        },
      },
    },
  },
})

export const postTopicsTopicnamePartitionsPartitionidRoute = createRoute({
  method: 'post',
  path: '/topics/{topicname}/partitions/{partitionid}',
  tags: ['Topics', 'Producer'],
  description: 'Sends one or more records to a given topic partition, optionally specifying a key.',
  operationId: 'sendToPartition',
  request: {
    params: z.object({
      topicname: z
        .string()
        .openapi({
          param: {
            name: 'topicname',
            in: 'path',
            description: 'Name of the topic to send records to or retrieve metadata from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      partitionid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'partitionid',
            in: 'path',
            description: 'ID of the partition to send records to or retrieve metadata from.',
            required: true,
            schema: { type: 'integer', minimum: 0 },
          },
        }),
    }),
    query: z.object({
      async: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'async',
            in: 'query',
            description:
              'Whether to return immediately upon sending records, instead of waiting for metadata. No offsets will be returned if specified. Defaults to false.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      description:
        'List of records to send to a given topic partition, including a value (required) and a key (optional).',
      content: {
        'application/vnd.kafka.json.v2+json': { schema: ProducerRecordToPartitionListSchema },
        'application/vnd.kafka.binary.v2+json': { schema: ProducerRecordToPartitionListSchema },
        'application/vnd.kafka.text.v2+json': { schema: ProducerRecordToPartitionListSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Records sent successfully.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: OffsetRecordSentListSchema,
          examples: {
            response: {
              value: {
                offsets: [
                  { partition: 2, offset: 0 },
                  { partition: 1, offset: 1 },
                  { partition: 2, offset: 2 },
                ],
              },
            },
          },
        },
      },
    },
    404: {
      description: 'The specified topic partition was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified topic partition was not found.' },
            },
          },
        },
      },
    },
    422: {
      description: 'The record is not valid.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: { value: { error_code: 422, message: 'The record is not valid.' } },
          },
        },
      },
    },
  },
})

export const getTopicsTopicnamePartitionsPartitionidOffsetsRoute = createRoute({
  method: 'get',
  path: '/topics/{topicname}/partitions/{partitionid}/offsets',
  tags: ['Topics'],
  description: 'Retrieves a summary of the offsets for the topic partition.',
  operationId: 'getOffsets',
  request: {
    params: z.object({
      topicname: z
        .string()
        .openapi({
          param: {
            name: 'topicname',
            in: 'path',
            description: 'Name of the topic containing the partition.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      partitionid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'partitionid',
            in: 'path',
            description: 'ID of the partition.',
            required: true,
            schema: { type: 'integer', minimum: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A summary of the offsets of the topic partition.',
      content: { 'application/vnd.kafka.v2+json': { schema: OffsetsSummarySchema } },
    },
    404: {
      description: 'The specified topic partition was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified topic partition was not found.' },
            },
          },
        },
      },
    },
  },
})

export const deleteConsumersGroupidInstancesNameRoute = createRoute({
  method: 'delete',
  path: '/consumers/{groupid}/instances/{name}',
  tags: ['Consumers'],
  description:
    'Deletes a specified consumer instance. The request for this operation MUST use the base URL (including the host and port) returned in the response from the `POST` request to `/consumers/{groupid}` that was used to create this consumer.',
  operationId: 'deleteConsumer',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the consumer to delete.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Consumer removed successfully.' },
    404: {
      description: 'The specified consumer instance was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
  },
})

export const postConsumersGroupidInstancesNameOffsetsRoute = createRoute({
  method: 'post',
  path: '/consumers/{groupid}/instances/{name}/offsets',
  tags: ['Consumers'],
  description:
    'Commits a list of consumer offsets. To commit offsets for all records fetched by the consumer, leave the request body empty.',
  operationId: 'commit',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'path',
            description: 'ID of the consumer group to which the consumer belongs.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the consumer.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'List of consumer offsets to commit to the consumer offsets commit log. You can specify one or more topic partitions to commit offsets for.',
      content: { 'application/vnd.kafka.v2+json': { schema: OffsetCommitSeekListSchema } },
    },
  },
  responses: {
    204: { description: 'Commit made successfully.' },
    404: {
      description: 'The specified consumer instance was not found.',
      content: {
        'application/vnd.kafka.v2+json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error_code: 404, message: 'The specified consumer instance was not found.' },
            },
          },
        },
      },
    },
  },
})

export const getHealthyRoute = createRoute({
  method: 'get',
  path: '/healthy',
  description:
    'Check if the bridge is running. This does not necessarily imply that it is ready to accept requests.',
  operationId: 'healthy',
  responses: {
    200: { description: 'The bridge is healthy.' },
    500: { description: 'The bridge is not healthy.' },
  },
})

export const getReadyRoute = createRoute({
  method: 'get',
  path: '/ready',
  description: 'Check if the bridge is ready and can accept requests.',
  operationId: 'ready',
  responses: {
    200: { description: 'The bridge is ready.' },
    500: { description: 'The bridge is not ready.' },
  },
})

export const getOpenapiRoute = createRoute({
  method: 'get',
  path: '/openapi',
  description: 'Retrieves the OpenAPI v3 specification in JSON format.',
  operationId: 'openapi',
  responses: {
    200: {
      description: 'OpenAPI v3 specification in JSON format retrieved successfully.',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getOpenapiV3Route = createRoute({
  method: 'get',
  path: '/openapi/v3',
  description: 'Retrieves the OpenAPI v3 specification in JSON format.',
  operationId: 'openapiv3',
  responses: {
    200: {
      description: 'OpenAPI v3 specification in JSON format retrieved successfully.',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  description: 'Retrieves the bridge metrics in Prometheus format.',
  operationId: 'metrics',
  responses: {
    200: {
      description: 'Metrics in Prometheus format retrieved successfully.',
      content: { 'text/plain': { schema: z.string() } },
    },
    404: { description: 'The metrics endpoint is not enabled.' },
  },
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  description: 'Retrieves information about the HTTP Bridge instance, in JSON format.',
  operationId: 'info',
  responses: {
    200: {
      description: 'Information about HTTP Bridge instance.',
      content: { 'application/json': { schema: BridgeInfoSchema } },
    },
  },
})
