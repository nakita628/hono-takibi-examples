import { createRoute, z } from '@hono/zod-openapi'

const StreamNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(128)
  .openapi('StreamName')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('TagMap')

const StreamARNSchema = z
  .string()
  .regex(/arn:aws.*:kinesis:.*:\d{12}:stream\/\S+/)
  .min(1)
  .max(2048)
  .openapi('StreamARN')

const AddTagsToStreamInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: 'A set of up to 10 key-value pairs to use to create the tags.' }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Tags'],
    title: 'AddTagsToStreamInput',
    description: 'Represents the input for <code>AddTagsToStream</code>.',
  })
  .openapi('AddTagsToStreamInput')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const PositiveIntegerObjectSchema = z.int().min(1).openapi('PositiveIntegerObject')

const StreamModeSchema = z.enum(['PROVISIONED', 'ON_DEMAND']).openapi('StreamMode')

const StreamModeDetailsSchema = z
  .object({
    StreamMode: StreamModeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. ',
        }),
    ),
  })
  .openapi({
    required: ['StreamMode'],
    description:
      ' Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. ',
  })
  .openapi('StreamModeDetails')

const CreateStreamInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name to identify the stream. The stream name is scoped to the Amazon Web Services account used by the application that creates the stream. It is also scoped by Amazon Web Services Region. That is, two streams in two different Amazon Web Services accounts can have the same name. Two streams in the same Amazon Web Services account but in two different Regions can also have the same name.',
        }),
    ),
    ShardCount: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of shards that the stream will use. The throughput of the stream is a function of the number of shards; more shards are required for greater provisioned throughput.',
        }),
    ).exactOptional(),
    StreamModeDetails: StreamModeDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StreamName'],
    title: 'CreateStreamInput',
    description: 'Represents the input for <code>CreateStream</code>.',
  })
  .openapi('CreateStreamInput')

const RetentionPeriodHoursSchema = z.int().openapi('RetentionPeriodHours')

const DecreaseStreamRetentionPeriodInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream to modify.' }),
    ).exactOptional(),
    RetentionPeriodHours: RetentionPeriodHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new retention period of the stream, in hours. Must be less than the current retention period.',
        }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RetentionPeriodHours'],
    title: 'DecreaseStreamRetentionPeriodInput',
    description: 'Represents the input for <a>DecreaseStreamRetentionPeriod</a>.',
  })
  .openapi('DecreaseStreamRetentionPeriodInput')

const BooleanObjectSchema = z.boolean().openapi('BooleanObject')

const DeleteStreamInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream to delete.' }),
    ).exactOptional(),
    EnforceConsumerDeletion: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this parameter is unset (<code>null</code>) or if you set it to <code>false</code>, and the stream has registered consumers, the call to <code>DeleteStream</code> fails with a <code>ResourceInUseException</code>. ',
        }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DeleteStreamInput',
    description: 'Represents the input for <a>DeleteStream</a>.',
    required: [],
  })
  .openapi('DeleteStreamInput')

const ConsumerNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(128)
  .openapi('ConsumerName')

const ConsumerARNSchema = z
  .string()
  .regex(
    /^(arn):aws.*:kinesis:.*:\d{12}:.*stream\/[a-zA-Z0-9_.-]+\/consumer\/[a-zA-Z0-9_.-]+:[0-9]+/,
  )
  .min(1)
  .max(2048)
  .openapi('ConsumerARN')

const DeregisterStreamConsumerInputSchema = z
  .object({
    StreamARN: StreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Kinesis data stream that the consumer is registered with. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ).exactOptional(),
    ConsumerName: ConsumerNameSchema.and(
      z.any().openapi({ description: 'The name that you gave to the consumer.' }),
    ).exactOptional(),
    ConsumerARN: ConsumerARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN returned by Kinesis Data Streams when you registered the consumer. If you don't know the ARN of the consumer that you want to deregister, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its ARN.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeregisterStreamConsumerInput', required: [] })
  .openapi('DeregisterStreamConsumerInput')

const ShardCountObjectSchema = z.int().min(0).max(1000000).openapi('ShardCountObject')

const OnDemandStreamCountObjectSchema = z
  .int()
  .min(0)
  .max(1000000)
  .openapi('OnDemandStreamCountObject')

const OnDemandStreamCountLimitObjectSchema = z
  .int()
  .min(0)
  .max(1000000)
  .openapi('OnDemandStreamCountLimitObject')

const DescribeLimitsOutputSchema = z
  .object({
    ShardLimit: ShardCountObjectSchema.and(
      z.any().openapi({ description: 'The maximum number of shards.' }),
    ),
    OpenShardCount: ShardCountObjectSchema.and(
      z.any().openapi({ description: 'The number of open shards.' }),
    ),
    OnDemandStreamCount: OnDemandStreamCountObjectSchema.and(
      z
        .any()
        .openapi({
          description: ' Indicates the number of data streams with the on-demand capacity mode.',
        }),
    ),
    OnDemandStreamCountLimit: OnDemandStreamCountLimitObjectSchema.and(
      z
        .any()
        .openapi({
          description: ' The maximum number of data streams with the on-demand capacity mode. ',
        }),
    ),
  })
  .openapi({
    required: ['ShardLimit', 'OpenShardCount', 'OnDemandStreamCount', 'OnDemandStreamCountLimit'],
  })
  .openapi('DescribeLimitsOutput')

const DescribeLimitsInputSchema = z
  .object({})
  .openapi({ title: 'DescribeLimitsInput' })
  .openapi('DescribeLimitsInput')

const StreamStatusSchema = z
  .enum(['CREATING', 'DELETING', 'ACTIVE', 'UPDATING'])
  .openapi('StreamStatus')

const ShardIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(128)
  .openapi('ShardId')

const HashKeySchema = z
  .string()
  .regex(/0|([1-9]\d{0,38})/)
  .openapi('HashKey')

const HashKeyRangeSchema = z
  .object({
    StartingHashKey: HashKeySchema.and(
      z.any().openapi({ description: 'The starting hash key of the hash key range.' }),
    ),
    EndingHashKey: HashKeySchema.and(
      z.any().openapi({ description: 'The ending hash key of the hash key range.' }),
    ),
  })
  .openapi({
    required: ['StartingHashKey', 'EndingHashKey'],
    description:
      'The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.',
  })
  .openapi('HashKeyRange')

const SequenceNumberSchema = z
  .string()
  .regex(/0|([1-9]\d{0,128})/)
  .openapi('SequenceNumber')

const SequenceNumberRangeSchema = z
  .object({
    StartingSequenceNumber: SequenceNumberSchema.and(
      z.any().openapi({ description: 'The starting sequence number for the range.' }),
    ),
    EndingSequenceNumber: SequenceNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ending sequence number for the range. Shards that are in the OPEN state have an ending sequence number of <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartingSequenceNumber'],
    description: 'The range of possible sequence numbers for the shard.',
  })
  .openapi('SequenceNumberRange')

const ShardSchema = z
  .object({
    ShardId: ShardIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the shard within the stream.' }),
    ),
    ParentShardId: ShardIdSchema.and(
      z.any().openapi({ description: "The shard ID of the shard's parent." }),
    ).exactOptional(),
    AdjacentParentShardId: ShardIdSchema.and(
      z.any().openapi({ description: "The shard ID of the shard adjacent to the shard's parent." }),
    ).exactOptional(),
    HashKeyRange: HashKeyRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.',
        }),
    ),
    SequenceNumberRange: SequenceNumberRangeSchema.and(
      z.any().openapi({ description: 'The range of possible sequence numbers for the shard.' }),
    ),
  })
  .openapi({
    required: ['ShardId', 'HashKeyRange', 'SequenceNumberRange'],
    description: 'A uniquely identified group of data records in a Kinesis data stream.',
  })
  .openapi('Shard')

const ShardListSchema = z.array(ShardSchema).openapi('ShardList')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const MetricsNameSchema = z
  .enum([
    'IncomingBytes',
    'IncomingRecords',
    'OutgoingBytes',
    'OutgoingRecords',
    'WriteProvisionedThroughputExceeded',
    'ReadProvisionedThroughputExceeded',
    'IteratorAgeMilliseconds',
    'ALL',
  ])
  .openapi('MetricsName')

const MetricsNameListSchema = z.array(MetricsNameSchema).min(1).max(7).openapi('MetricsNameList')

const EnhancedMetricsSchema = z
  .object({
    ShardLevelMetrics: MetricsNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>List of shard-level metrics.</p> <p>The following are the valid shard-level metrics. The value "<code>ALL</code>" enhances every metric.</p> <ul> <li> <p> <code>IncomingBytes</code> </p> </li> <li> <p> <code>IncomingRecords</code> </p> </li> <li> <p> <code>OutgoingBytes</code> </p> </li> <li> <p> <code>OutgoingRecords</code> </p> </li> <li> <p> <code>WriteProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>ReadProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>IteratorAgeMilliseconds</code> </p> </li> <li> <p> <code>ALL</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html">Monitoring the Amazon Kinesis Data Streams Service with Amazon CloudWatch</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents enhanced metrics types.', required: [] })
  .openapi('EnhancedMetrics')

const EnhancedMonitoringListSchema = z
  .array(EnhancedMetricsSchema)
  .openapi('EnhancedMonitoringList')

const EncryptionTypeSchema = z.enum(['NONE', 'KMS']).openapi('EncryptionType')

const KeyIdSchema = z.string().min(1).max(2048).openapi('KeyId')

const StreamDescriptionSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream being described.' }),
    ),
    StreamARN: StreamARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for the stream being described.' }),
    ),
    StreamStatus: StreamStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the stream being described. The stream status is one of the following states:</p> <ul> <li> <p> <code>CREATING</code> - The stream is being created. Kinesis Data Streams immediately returns and sets <code>StreamStatus</code> to <code>CREATING</code>.</p> </li> <li> <p> <code>DELETING</code> - The stream is being deleted. The specified stream is in the <code>DELETING</code> state until Kinesis Data Streams completes the deletion.</p> </li> <li> <p> <code>ACTIVE</code> - The stream exists and is ready for read and write operations or deletion. You should perform read and write operations only on an <code>ACTIVE</code> stream.</p> </li> <li> <p> <code>UPDATING</code> - Shards in the stream are being merged or split. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state.</p> </li> </ul>',
        }),
    ),
    StreamModeDetails: StreamModeDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. ',
        }),
    ).exactOptional(),
    Shards: ShardListSchema.and(
      z.any().openapi({ description: 'The shards that comprise the stream.' }),
    ),
    HasMoreShards: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>true</code>, more shards in the stream are available to describe.',
        }),
    ),
    RetentionPeriodHours: RetentionPeriodHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current retention period, in hours. Minimum value of 24. Maximum value of 168.',
        }),
    ),
    StreamCreationTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The approximate time that the stream was created.' }),
    ),
    EnhancedMonitoring: EnhancedMonitoringListSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the current enhanced monitoring settings of the stream.',
        }),
    ),
    EncryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The server-side encryption type used on the stream. This parameter can be one of the following values:</p> <ul> <li> <p> <code>NONE</code>: Do not encrypt the records in the stream.</p> </li> <li> <p> <code>KMS</code>: Use server-side encryption on the records in the stream using a customer-managed Amazon Web Services KMS key.</p> </li> </ul>',
        }),
    ).exactOptional(),
    KeyId: KeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias <code>aws/kinesis</code>.</p> <ul> <li> <p>Key ARN example: <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias ARN example: <code>arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code> </p> </li> <li> <p>Globally unique key ID example: <code>12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias name example: <code>alias/MyAliasName</code> </p> </li> <li> <p>Master key owned by Kinesis Data Streams: <code>alias/aws/kinesis</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'StreamName',
      'StreamARN',
      'StreamStatus',
      'Shards',
      'HasMoreShards',
      'RetentionPeriodHours',
      'StreamCreationTimestamp',
      'EnhancedMonitoring',
    ],
    description: 'Represents the output for <a>DescribeStream</a>.',
  })
  .openapi('StreamDescription')

const DescribeStreamOutputSchema = z
  .object({
    StreamDescription: StreamDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the stream, the stream Amazon Resource Name (ARN), an array of shard objects that comprise the stream, and whether there are more shards available.',
        }),
    ),
  })
  .openapi({
    required: ['StreamDescription'],
    description: 'Represents the output for <code>DescribeStream</code>.',
  })
  .openapi('DescribeStreamOutput')

const DescribeStreamInputLimitSchema = z.int().min(1).max(10000).openapi('DescribeStreamInputLimit')

const DescribeStreamInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream to describe.' }),
    ).exactOptional(),
    Limit: DescribeStreamInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of shards to return in a single call. The default value is 100. If you specify a value greater than 100, at most 100 results are returned.',
        }),
    ).exactOptional(),
    ExclusiveStartShardId: ShardIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The shard ID of the shard to start with.</p> <p>Specify this parameter to indicate that you want to describe the stream starting with the shard whose ID immediately follows <code>ExclusiveStartShardId</code>.</p> <p>If you don't specify this parameter, the default behavior for <code>DescribeStream</code> is to describe the stream starting with the first shard in the stream.</p>",
        }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeStreamInput',
    description: 'Represents the input for <code>DescribeStream</code>.',
    required: [],
  })
  .openapi('DescribeStreamInput')

const ConsumerStatusSchema = z.enum(['CREATING', 'DELETING', 'ACTIVE']).openapi('ConsumerStatus')

const ConsumerDescriptionSchema = z
  .object({
    ConsumerName: ConsumerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the consumer is something you choose when you register the consumer.',
        }),
    ),
    ConsumerARN: ConsumerARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>When you register a consumer, Kinesis Data Streams generates an ARN for it. You need this ARN to be able to call <a>SubscribeToShard</a>.</p> <p>If you delete a consumer and then create a new one with the same name, it won't have the same ARN. That's because consumer ARNs contain the creation timestamp. This is important to keep in mind if you have IAM policies that reference consumer ARNs.</p>",
        }),
    ),
    ConsumerStatus: ConsumerStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "A consumer can't read data while in the <code>CREATING</code> or <code>DELETING</code> states.",
        }),
    ),
    ConsumerCreationTimestamp: TimestampSchema.and(z.any().openapi({ description: '<p/>' })),
    StreamARN: StreamARNSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the stream with which you registered the consumer.' }),
    ),
  })
  .openapi({
    required: [
      'ConsumerName',
      'ConsumerARN',
      'ConsumerStatus',
      'ConsumerCreationTimestamp',
      'StreamARN',
    ],
    description:
      'An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>.',
  })
  .openapi('ConsumerDescription')

const DescribeStreamConsumerOutputSchema = z
  .object({
    ConsumerDescription: ConsumerDescriptionSchema.and(
      z.any().openapi({ description: 'An object that represents the details of the consumer.' }),
    ),
  })
  .openapi({ required: ['ConsumerDescription'] })
  .openapi('DescribeStreamConsumerOutput')

const DescribeStreamConsumerInputSchema = z
  .object({
    StreamARN: StreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Kinesis data stream that the consumer is registered with. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ).exactOptional(),
    ConsumerName: ConsumerNameSchema.and(
      z.any().openapi({ description: 'The name that you gave to the consumer.' }),
    ).exactOptional(),
    ConsumerARN: ConsumerARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN returned by Kinesis Data Streams when you registered the consumer.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeStreamConsumerInput', required: [] })
  .openapi('DescribeStreamConsumerInput')

const ConsumerCountObjectSchema = z.int().min(0).max(1000000).openapi('ConsumerCountObject')

const StreamDescriptionSummarySchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream being described.' }),
    ),
    StreamARN: StreamARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for the stream being described.' }),
    ),
    StreamStatus: StreamStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the stream being described. The stream status is one of the following states:</p> <ul> <li> <p> <code>CREATING</code> - The stream is being created. Kinesis Data Streams immediately returns and sets <code>StreamStatus</code> to <code>CREATING</code>.</p> </li> <li> <p> <code>DELETING</code> - The stream is being deleted. The specified stream is in the <code>DELETING</code> state until Kinesis Data Streams completes the deletion.</p> </li> <li> <p> <code>ACTIVE</code> - The stream exists and is ready for read and write operations or deletion. You should perform read and write operations only on an <code>ACTIVE</code> stream.</p> </li> <li> <p> <code>UPDATING</code> - Shards in the stream are being merged or split. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state.</p> </li> </ul>',
        }),
    ),
    StreamModeDetails: StreamModeDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> ycapacity mode and a <b>provisioned</b> capacity mode for your data streams. ',
        }),
    ).exactOptional(),
    RetentionPeriodHours: RetentionPeriodHoursSchema.and(
      z.any().openapi({ description: 'The current retention period, in hours.' }),
    ),
    StreamCreationTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The approximate time that the stream was created.' }),
    ),
    EnhancedMonitoring: EnhancedMonitoringListSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the current enhanced monitoring settings of the stream.',
        }),
    ),
    EncryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption type used. This value is one of the following:</p> <ul> <li> <p> <code>KMS</code> </p> </li> <li> <p> <code>NONE</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    KeyId: KeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias <code>aws/kinesis</code>.</p> <ul> <li> <p>Key ARN example: <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias ARN example: <code> arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code> </p> </li> <li> <p>Globally unique key ID example: <code>12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias name example: <code>alias/MyAliasName</code> </p> </li> <li> <p>Master key owned by Kinesis Data Streams: <code>alias/aws/kinesis</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    OpenShardCount: ShardCountObjectSchema.and(
      z.any().openapi({ description: 'The number of open shards in the stream.' }),
    ),
    ConsumerCount: ConsumerCountObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of enhanced fan-out consumers registered with the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'StreamName',
      'StreamARN',
      'StreamStatus',
      'RetentionPeriodHours',
      'StreamCreationTimestamp',
      'EnhancedMonitoring',
      'OpenShardCount',
    ],
    description: 'Represents the output for <a>DescribeStreamSummary</a> ',
  })
  .openapi('StreamDescriptionSummary')

const DescribeStreamSummaryOutputSchema = z
  .object({
    StreamDescriptionSummary: StreamDescriptionSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'A <a>StreamDescriptionSummary</a> containing information about the stream.',
        }),
    ),
  })
  .openapi({ required: ['StreamDescriptionSummary'] })
  .openapi('DescribeStreamSummaryOutput')

const DescribeStreamSummaryInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream to describe.' }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeStreamSummaryInput', required: [] })
  .openapi('DescribeStreamSummaryInput')

const EnhancedMonitoringOutputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the Kinesis data stream.' }),
    ).exactOptional(),
    CurrentShardLevelMetrics: MetricsNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the current state of the metrics that are in the enhanced state before the operation.',
        }),
    ).exactOptional(),
    DesiredShardLevelMetrics: MetricsNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the list of all the metrics that would be in the enhanced state after the operation.',
        }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.',
    required: [],
  })
  .openapi('EnhancedMonitoringOutput')

const DisableEnhancedMonitoringInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Kinesis data stream for which to disable enhanced monitoring.',
        }),
    ).exactOptional(),
    ShardLevelMetrics: MetricsNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>List of shard-level metrics to disable.</p> <p>The following are the valid shard-level metrics. The value "<code>ALL</code>" disables every metric.</p> <ul> <li> <p> <code>IncomingBytes</code> </p> </li> <li> <p> <code>IncomingRecords</code> </p> </li> <li> <p> <code>OutgoingBytes</code> </p> </li> <li> <p> <code>OutgoingRecords</code> </p> </li> <li> <p> <code>WriteProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>ReadProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>IteratorAgeMilliseconds</code> </p> </li> <li> <p> <code>ALL</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html">Monitoring the Amazon Kinesis Data Streams Service with Amazon CloudWatch</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>',
        }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ShardLevelMetrics'],
    title: 'DisableEnhancedMonitoringInput',
    description: 'Represents the input for <a>DisableEnhancedMonitoring</a>.',
  })
  .openapi('DisableEnhancedMonitoringInput')

const EnableEnhancedMonitoringInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stream for which to enable enhanced monitoring.',
        }),
    ).exactOptional(),
    ShardLevelMetrics: MetricsNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>List of shard-level metrics to enable.</p> <p>The following are the valid shard-level metrics. The value "<code>ALL</code>" enables every metric.</p> <ul> <li> <p> <code>IncomingBytes</code> </p> </li> <li> <p> <code>IncomingRecords</code> </p> </li> <li> <p> <code>OutgoingBytes</code> </p> </li> <li> <p> <code>OutgoingRecords</code> </p> </li> <li> <p> <code>WriteProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>ReadProvisionedThroughputExceeded</code> </p> </li> <li> <p> <code>IteratorAgeMilliseconds</code> </p> </li> <li> <p> <code>ALL</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html">Monitoring the Amazon Kinesis Data Streams Service with Amazon CloudWatch</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>',
        }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ShardLevelMetrics'],
    title: 'EnableEnhancedMonitoringInput',
    description: 'Represents the input for <a>EnableEnhancedMonitoring</a>.',
  })
  .openapi('EnableEnhancedMonitoringInput')

const DataSchema = z.string().min(0).max(1048576).openapi('Data')

const PartitionKeySchema = z.string().min(1).max(256).openapi('PartitionKey')

const RecordSchema = z
  .object({
    SequenceNumber: SequenceNumberSchema.and(
      z.any().openapi({ description: 'The unique identifier of the record within its shard.' }),
    ),
    ApproximateArrivalTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The approximate time that the record was inserted into the stream.',
        }),
    ).exactOptional(),
    Data: DataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data blob. The data in the blob is both opaque and immutable to Kinesis Data Streams, which does not inspect, interpret, or change the data in the blob in any way. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (1 MiB).',
        }),
    ),
    PartitionKey: PartitionKeySchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies which shard in the stream the data record is assigned to.',
        }),
    ),
    EncryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption type used on the record. This parameter can be one of the following values:</p> <ul> <li> <p> <code>NONE</code>: Do not encrypt the records in the stream.</p> </li> <li> <p> <code>KMS</code>: Use server-side encryption on the records in the stream using a customer-managed Amazon Web Services KMS key.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SequenceNumber', 'Data', 'PartitionKey'],
    description:
      'The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.',
  })
  .openapi('Record')

const RecordListSchema = z.array(RecordSchema).openapi('RecordList')

const ShardIteratorSchema = z.string().min(1).max(512).openapi('ShardIterator')

const MillisBehindLatestSchema = z.int().min(0).openapi('MillisBehindLatest')

const ShardIdListSchema = z.array(ShardIdSchema).openapi('ShardIdList')

const ChildShardSchema = z
  .object({
    ShardId: ShardIdSchema.and(
      z
        .any()
        .openapi({ description: 'The shard ID of the existing child shard of the current shard.' }),
    ),
    ParentShards: ShardIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The current shard that is the parent of the existing child shard.',
        }),
    ),
    HashKeyRange: HashKeyRangeSchema,
  })
  .openapi({
    required: ['ShardId', 'ParentShards', 'HashKeyRange'],
    description:
      'Output parameter of the GetRecords API. The existing child shard of the current shard.',
  })
  .openapi('ChildShard')

const ChildShardListSchema = z.array(ChildShardSchema).openapi('ChildShardList')

const GetRecordsOutputSchema = z
  .object({
    Records: RecordListSchema.and(
      z.any().openapi({ description: 'The data records retrieved from the shard.' }),
    ),
    NextShardIterator: ShardIteratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next position in the shard from which to start sequentially reading data records. If set to <code>null</code>, the shard has been closed and the requested iterator does not return any more data. ',
        }),
    ).exactOptional(),
    MillisBehindLatest: MillisBehindLatestSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of milliseconds the <a>GetRecords</a> response is from the tip of the stream, indicating how far behind current time the consumer is. A value of zero indicates that record processing is caught up, and there are no new records to process at this moment.',
        }),
    ).exactOptional(),
    ChildShards: ChildShardListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The list of the current shard's child shards, returned in the <code>GetRecords</code> API's response only when the end of the current shard is reached.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Records'], description: 'Represents the output for <a>GetRecords</a>.' })
  .openapi('GetRecordsOutput')

const GetRecordsInputLimitSchema = z.int().min(1).max(10000).openapi('GetRecordsInputLimit')

const GetRecordsInputSchema = z
  .object({
    ShardIterator: ShardIteratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position in the shard from which you want to start sequentially reading data records. A shard iterator specifies this position using the sequence number of a data record in the shard.',
        }),
    ),
    Limit: GetRecordsInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to return. Specify a value of up to 10,000. If you specify a value that is greater than 10,000, <a>GetRecords</a> throws <code>InvalidArgumentException</code>. The default value is 10,000.',
        }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ShardIterator'],
    title: 'GetRecordsInput',
    description: 'Represents the input for <a>GetRecords</a>.',
  })
  .openapi('GetRecordsInput')

const ProvisionedThroughputExceededExceptionSchema = z
  .any()
  .openapi('ProvisionedThroughputExceededException')

const ExpiredIteratorExceptionSchema = z.any().openapi('ExpiredIteratorException')

const KMSDisabledExceptionSchema = z.any().openapi('KMSDisabledException')

const KMSInvalidStateExceptionSchema = z.any().openapi('KMSInvalidStateException')

const KMSAccessDeniedExceptionSchema = z.any().openapi('KMSAccessDeniedException')

const KMSNotFoundExceptionSchema = z.any().openapi('KMSNotFoundException')

const KMSOptInRequiredSchema = z.any().openapi('KMSOptInRequired')

const KMSThrottlingExceptionSchema = z.any().openapi('KMSThrottlingException')

const GetShardIteratorOutputSchema = z
  .object({
    ShardIterator: ShardIteratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position in the shard from which to start reading data records sequentially. A shard iterator specifies this position using the sequence number of a data record in a shard.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output for <code>GetShardIterator</code>.',
    required: [],
  })
  .openapi('GetShardIteratorOutput')

const ShardIteratorTypeSchema = z
  .enum(['AT_SEQUENCE_NUMBER', 'AFTER_SEQUENCE_NUMBER', 'TRIM_HORIZON', 'LATEST', 'AT_TIMESTAMP'])
  .openapi('ShardIteratorType')

const GetShardIteratorInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Kinesis data stream.' }),
    ).exactOptional(),
    ShardId: ShardIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The shard ID of the Kinesis Data Streams shard to get the iterator for.',
        }),
    ),
    ShardIteratorType: ShardIteratorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines how the shard iterator is used to start reading data records from the shard.</p> <p>The following are the valid Amazon Kinesis shard iterator types:</p> <ul> <li> <p>AT_SEQUENCE_NUMBER - Start reading from the position denoted by a specific sequence number, provided in the value <code>StartingSequenceNumber</code>.</p> </li> <li> <p>AFTER_SEQUENCE_NUMBER - Start reading right after the position denoted by a specific sequence number, provided in the value <code>StartingSequenceNumber</code>.</p> </li> <li> <p>AT_TIMESTAMP - Start reading from the position denoted by a specific time stamp, provided in the value <code>Timestamp</code>.</p> </li> <li> <p>TRIM_HORIZON - Start reading at the last untrimmed record in the shard in the system, which is the oldest data record in the shard.</p> </li> <li> <p>LATEST - Start reading just after the most recent record in the shard, so that you always read the most recent data in the shard.</p> </li> </ul>',
        }),
    ),
    StartingSequenceNumber: SequenceNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sequence number of the data record in the shard from which to start reading. Used with shard iterator type AT_SEQUENCE_NUMBER and AFTER_SEQUENCE_NUMBER.',
        }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time stamp of the data record from which to start reading. Used with shard iterator type AT_TIMESTAMP. A time stamp is the Unix epoch date with precision in milliseconds. For example, <code>2016-04-04T19:58:46.480-00:00</code> or <code>1459799926.480</code>. If a record with this exact time stamp does not exist, the iterator returned is for the next (later) record. If the time stamp is older than the current trim horizon, the iterator returned is for the oldest untrimmed data record (TRIM_HORIZON).',
        }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ShardId', 'ShardIteratorType'],
    title: 'GetShardIteratorInput',
    description: 'Represents the input for <code>GetShardIterator</code>.',
  })
  .openapi('GetShardIteratorInput')

const IncreaseStreamRetentionPeriodInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream to modify.' }),
    ).exactOptional(),
    RetentionPeriodHours: RetentionPeriodHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new retention period of the stream, in hours. Must be more than the current retention period.',
        }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RetentionPeriodHours'],
    title: 'IncreaseStreamRetentionPeriodInput',
    description: 'Represents the input for <a>IncreaseStreamRetentionPeriod</a>.',
  })
  .openapi('IncreaseStreamRetentionPeriodInput')

const NextTokenSchema = z.string().min(1).max(1048576).openapi('NextToken')

const ListShardsOutputSchema = z
  .object({
    Shards: ShardListSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of JSON objects. Each object represents one shard and specifies the IDs of the shard, the shard's parent, and the shard that's adjacent to the shard's parent. Each object also contains the starting and ending hash keys and the starting and ending sequence numbers for the shard.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When the number of shards in the data stream is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of shards in the data stream, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>ListShards</code> to list the next set of shards. For more information about the use of this pagination token when calling the <code>ListShards</code> operation, see <a>ListShardsInput$NextToken</a>.</p> <important> <p>Tokens expire after 300 seconds. When you obtain a value for <code>NextToken</code> in the response to a call to <code>ListShards</code>, you have 300 seconds to use that value. If you specify an expired token in a call to <code>ListShards</code>, you get <code>ExpiredNextTokenException</code>.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListShardsOutput')

const ListShardsInputLimitSchema = z.int().min(1).max(10000).openapi('ListShardsInputLimit')

const ShardFilterTypeSchema = z
  .enum([
    'AFTER_SHARD_ID',
    'AT_TRIM_HORIZON',
    'FROM_TRIM_HORIZON',
    'AT_LATEST',
    'AT_TIMESTAMP',
    'FROM_TIMESTAMP',
  ])
  .openapi('ShardFilterType')

const ShardFilterSchema = z
  .object({
    Type: ShardFilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The shard type specified in the <code>ShardFilter</code> parameter. This is a required property of the <code>ShardFilter</code> parameter.</p> <p>You can specify the following valid values: </p> <ul> <li> <p> <code>AFTER_SHARD_ID</code> - the response includes all the shards, starting with the shard whose ID immediately follows the <code>ShardId</code> that you provided. </p> </li> <li> <p> <code>AT_TRIM_HORIZON</code> - the response includes all the shards that were open at <code>TRIM_HORIZON</code>.</p> </li> <li> <p> <code>FROM_TRIM_HORIZON</code> - (default), the response includes all the shards within the retention period of the data stream (trim to tip).</p> </li> <li> <p> <code>AT_LATEST</code> - the response includes only the currently open shards of the data stream.</p> </li> <li> <p> <code>AT_TIMESTAMP</code> - the response includes all shards whose start timestamp is less than or equal to the given timestamp and end timestamp is greater than or equal to the given timestamp or still open. </p> </li> <li> <p> <code>FROM_TIMESTAMP</code> - the response incldues all closed shards whose end timestamp is greater than or equal to the given timestamp and also all open shards. Corrected to <code>TRIM_HORIZON</code> of the data stream if <code>FROM_TIMESTAMP</code> is less than the <code>TRIM_HORIZON</code> value.</p> </li> </ul>',
        }),
    ),
    ShardId: ShardIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The exclusive start <code>shardID</code> speified in the <code>ShardFilter</code> parameter. This property can only be used if the <code>AFTER_SHARD_ID</code> shard type is specified.',
        }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamps specified in the <code>ShardFilter</code> parameter. A timestamp is a Unix epoch date with precision in milliseconds. For example, 2016-04-04T19:58:46.480-00:00 or 1459799926.480. This property can only be used if <code>FROM_TIMESTAMP</code> or <code>AT_TIMESTAMP</code> shard types are specified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description:
      'The request parameter used to filter out the response of the <code>ListShards</code> API.',
  })
  .openapi('ShardFilter')

const ListShardsInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the data stream whose shards you want to list. </p> <p>You cannot specify this parameter if you specify the <code>NextToken</code> parameter.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>When the number of shards in the data stream is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of shards in the data stream, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>ListShards</code> to list the next set of shards.</p> <p>Don't specify <code>StreamName</code> or <code>StreamCreationTimestamp</code> if you specify <code>NextToken</code> because the latter unambiguously identifies the stream.</p> <p>You can optionally specify a value for the <code>MaxResults</code> parameter when you specify <code>NextToken</code>. If you specify a <code>MaxResults</code> value that is less than the number of shards that the operation returns if you don't specify <code>MaxResults</code>, the response will contain a new <code>NextToken</code> value. You can use the new <code>NextToken</code> value in a subsequent call to the <code>ListShards</code> operation.</p> <important> <p>Tokens expire after 300 seconds. When you obtain a value for <code>NextToken</code> in the response to a call to <code>ListShards</code>, you have 300 seconds to use that value. If you specify an expired token in a call to <code>ListShards</code>, you get <code>ExpiredNextTokenException</code>.</p> </important>",
        }),
    ).exactOptional(),
    ExclusiveStartShardId: ShardIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify this parameter to indicate that you want to list the shards starting with the shard whose ID immediately follows <code>ExclusiveStartShardId</code>.</p> <p>If you don't specify this parameter, the default behavior is for <code>ListShards</code> to list the shards starting with the first one in the stream.</p> <p>You cannot specify this parameter if you specify <code>NextToken</code>.</p>",
        }),
    ).exactOptional(),
    MaxResults: ListShardsInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of shards to return in a single call to <code>ListShards</code>. The maximum number of shards to return in a single call. The default value is 1000. If you specify a value greater than 1000, at most 1000 results are returned. </p> <p>When the number of shards to be listed is greater than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you can use in a subsequent call to <code>ListShards</code> to list the next set of shards.</p>',
        }),
    ).exactOptional(),
    StreamCreationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify this input parameter to distinguish data streams that have the same name. For example, if you create a data stream and then delete it, and you later create another data stream with the same name, you can use this input parameter to specify which of the two streams you want to list the shards for.</p> <p>You cannot specify this parameter if you specify the <code>NextToken</code> parameter.</p>',
        }),
    ).exactOptional(),
    ShardFilter: ShardFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables you to filter out the response of the <code>ListShards</code> API. You can only specify one filter at a time. </p> <p>If you use the <code>ShardFilter</code> parameter when invoking the ListShards API, the <code>Type</code> is the required property and must be specified. If you specify the <code>AT_TRIM_HORIZON</code>, <code>FROM_TRIM_HORIZON</code>, or <code>AT_LATEST</code> types, you do not need to specify either the <code>ShardId</code> or the <code>Timestamp</code> optional properties. </p> <p>If you specify the <code>AFTER_SHARD_ID</code> type, you must also provide the value for the optional <code>ShardId</code> property. The <code>ShardId</code> property is identical in fuctionality to the <code>ExclusiveStartShardId</code> parameter of the <code>ListShards</code> API. When <code>ShardId</code> property is specified, the response includes the shards starting with the shard whose ID immediately follows the <code>ShardId</code> that you provided. </p> <p>If you specify the <code>AT_TIMESTAMP</code> or <code>FROM_TIMESTAMP_ID</code> type, you must also provide the value for the optional <code>Timestamp</code> property. If you specify the AT_TIMESTAMP type, then all shards that were open at the provided timestamp are returned. If you specify the FROM_TIMESTAMP type, then all shards starting from the provided timestamp to TIP are returned. </p>',
        }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListShardsInput', required: [] })
  .openapi('ListShardsInput')

const ExpiredNextTokenExceptionSchema = z.any().openapi('ExpiredNextTokenException')

const ConsumerSchema = z
  .object({
    ConsumerName: ConsumerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the consumer is something you choose when you register the consumer.',
        }),
    ),
    ConsumerARN: ConsumerARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>When you register a consumer, Kinesis Data Streams generates an ARN for it. You need this ARN to be able to call <a>SubscribeToShard</a>.</p> <p>If you delete a consumer and then create a new one with the same name, it won't have the same ARN. That's because consumer ARNs contain the creation timestamp. This is important to keep in mind if you have IAM policies that reference consumer ARNs.</p>",
        }),
    ),
    ConsumerStatus: ConsumerStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "A consumer can't read data while in the <code>CREATING</code> or <code>DELETING</code> states.",
        }),
    ),
    ConsumerCreationTimestamp: TimestampSchema.and(z.any().openapi({ description: '<p/>' })),
  })
  .openapi({
    required: ['ConsumerName', 'ConsumerARN', 'ConsumerStatus', 'ConsumerCreationTimestamp'],
    description:
      'An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>.',
  })
  .openapi('Consumer')

const ConsumerListSchema = z.array(ConsumerSchema).openapi('ConsumerList')

const ListStreamConsumersOutputSchema = z
  .object({
    Consumers: ConsumerListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of JSON objects. Each object represents one registered consumer.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When the number of consumers that are registered with the data stream is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of registered consumers, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>ListStreamConsumers</code> to list the next set of registered consumers. For more information about the use of this pagination token when calling the <code>ListStreamConsumers</code> operation, see <a>ListStreamConsumersInput$NextToken</a>.</p> <important> <p>Tokens expire after 300 seconds. When you obtain a value for <code>NextToken</code> in the response to a call to <code>ListStreamConsumers</code>, you have 300 seconds to use that value. If you specify an expired token in a call to <code>ListStreamConsumers</code>, you get <code>ExpiredNextTokenException</code>.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStreamConsumersOutput')

const ListStreamConsumersInputLimitSchema = z
  .int()
  .min(1)
  .max(10000)
  .openapi('ListStreamConsumersInputLimit')

const ListStreamConsumersInputSchema = z
  .object({
    StreamARN: StreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Kinesis data stream for which you want to list the registered consumers. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>When the number of consumers that are registered with the data stream is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of consumers that are registered with the data stream, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>ListStreamConsumers</code> to list the next set of registered consumers.</p> <p>Don't specify <code>StreamName</code> or <code>StreamCreationTimestamp</code> if you specify <code>NextToken</code> because the latter unambiguously identifies the stream.</p> <p>You can optionally specify a value for the <code>MaxResults</code> parameter when you specify <code>NextToken</code>. If you specify a <code>MaxResults</code> value that is less than the number of consumers that the operation returns if you don't specify <code>MaxResults</code>, the response will contain a new <code>NextToken</code> value. You can use the new <code>NextToken</code> value in a subsequent call to the <code>ListStreamConsumers</code> operation to list the next set of consumers.</p> <important> <p>Tokens expire after 300 seconds. When you obtain a value for <code>NextToken</code> in the response to a call to <code>ListStreamConsumers</code>, you have 300 seconds to use that value. If you specify an expired token in a call to <code>ListStreamConsumers</code>, you get <code>ExpiredNextTokenException</code>.</p> </important>",
        }),
    ).exactOptional(),
    MaxResults: ListStreamConsumersInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of consumers that you want a single call of <code>ListStreamConsumers</code> to return. The default value is 100. If you specify a value greater than 100, at most 100 results are returned. ',
        }),
    ).exactOptional(),
    StreamCreationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify this input parameter to distinguish data streams that have the same name. For example, if you create a data stream and then delete it, and you later create another data stream with the same name, you can use this input parameter to specify which of the two streams you want to list the consumers for. </p> <p>You can't specify this parameter if you specify the NextToken parameter. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StreamARN'], title: 'ListStreamConsumersInput' })
  .openapi('ListStreamConsumersInput')

const StreamNameListSchema = z.array(StreamNameSchema).openapi('StreamNameList')

const StreamSummarySchema = z
  .object({
    StreamName: StreamNameSchema.and(z.any().openapi({ description: 'The name of a stream.' })),
    StreamARN: StreamARNSchema.and(z.any().openapi({ description: 'The ARN of the stream.' })),
    StreamStatus: StreamStatusSchema.and(
      z.any().openapi({ description: 'The status of the stream.' }),
    ),
    StreamModeDetails: StreamModeDetailsSchema.exactOptional(),
    StreamCreationTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp at which the stream was created.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StreamName', 'StreamARN', 'StreamStatus'],
    description: 'The summary of a stream.',
  })
  .openapi('StreamSummary')

const StreamSummaryListSchema = z.array(StreamSummarySchema).openapi('StreamSummaryList')

const ListStreamsOutputSchema = z
  .object({
    StreamNames: StreamNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the streams that are associated with the Amazon Web Services account making the <code>ListStreams</code> request.',
        }),
    ),
    HasMoreStreams: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'If set to <code>true</code>, there are more streams available to list.',
        }),
    ),
    NextToken: NextTokenSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    StreamSummaries: StreamSummaryListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StreamNames', 'HasMoreStreams'],
    description: 'Represents the output for <code>ListStreams</code>.',
  })
  .openapi('ListStreamsOutput')

const ListStreamsInputLimitSchema = z.int().min(1).max(10000).openapi('ListStreamsInputLimit')

const ListStreamsInputSchema = z
  .object({
    Limit: ListStreamsInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of streams to list. The default value is 100. If you specify a value greater than 100, at most 100 results are returned.',
        }),
    ).exactOptional(),
    ExclusiveStartStreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream to start the list with.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({
    title: 'ListStreamsInput',
    description: 'Represents the input for <code>ListStreams</code>.',
    required: [],
  })
  .openapi('ListStreamsInput')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the tag. Maximum length: 128 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional string, typically used to describe or define the tag. Maximum length: 256 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description: 'Metadata assigned to the stream, consisting of a key-value pair.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const ListTagsForStreamOutputSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags associated with <code>StreamName</code>, starting with the first tag after <code>ExclusiveStartTagKey</code> and up to the specified <code>Limit</code>. ',
        }),
    ),
    HasMoreTags: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>true</code>, more tags are available. To request additional tags, set <code>ExclusiveStartTagKey</code> to the key of the last tag returned.',
        }),
    ),
  })
  .openapi({
    required: ['Tags', 'HasMoreTags'],
    description: 'Represents the output for <code>ListTagsForStream</code>.',
  })
  .openapi('ListTagsForStreamOutput')

const ListTagsForStreamInputLimitSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListTagsForStreamInputLimit')

const ListTagsForStreamInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream.' }),
    ).exactOptional(),
    ExclusiveStartTagKey: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key to use as the starting point for the list of tags. If this parameter is set, <code>ListTagsForStream</code> gets all tags that occur after <code>ExclusiveStartTagKey</code>. ',
        }),
    ).exactOptional(),
    Limit: ListTagsForStreamInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of tags to return. If this number is less than the total number of tags associated with the stream, <code>HasMoreTags</code> is set to <code>true</code>. To list additional tags, set <code>ExclusiveStartTagKey</code> to the last key in the response.',
        }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListTagsForStreamInput',
    description: 'Represents the input for <code>ListTagsForStream</code>.',
    required: [],
  })
  .openapi('ListTagsForStreamInput')

const MergeShardsInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream for the merge.' }),
    ).exactOptional(),
    ShardToMerge: ShardIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The shard ID of the shard to combine with the adjacent shard for the merge.',
        }),
    ),
    AdjacentShardToMerge: ShardIdSchema.and(
      z.any().openapi({ description: 'The shard ID of the adjacent shard for the merge.' }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ShardToMerge', 'AdjacentShardToMerge'],
    title: 'MergeShardsInput',
    description: 'Represents the input for <code>MergeShards</code>.',
  })
  .openapi('MergeShardsInput')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const PutRecordOutputSchema = z
  .object({
    ShardId: ShardIdSchema.and(
      z
        .any()
        .openapi({ description: 'The shard ID of the shard where the data record was placed.' }),
    ),
    SequenceNumber: SequenceNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sequence number identifier that was assigned to the put data record. The sequence number for the record is unique across all records in the stream. A sequence number is the identifier associated with every record put into the stream.',
        }),
    ),
    EncryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption type to use on the record. This parameter can be one of the following values:</p> <ul> <li> <p> <code>NONE</code>: Do not encrypt the records in the stream.</p> </li> <li> <p> <code>KMS</code>: Use server-side encryption on the records in the stream using a customer-managed Amazon Web Services KMS key.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ShardId', 'SequenceNumber'],
    description: 'Represents the output for <code>PutRecord</code>.',
  })
  .openapi('PutRecordOutput')

const PutRecordInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream to put the data record into.' }),
    ).exactOptional(),
    Data: DataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data blob to put into the record, which is base64-encoded when the blob is serialized. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (1 MiB).',
        }),
    ),
    PartitionKey: PartitionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.',
        }),
    ),
    ExplicitHashKey: HashKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The hash value used to explicitly determine the shard the data record is assigned to by overriding the partition key hash.',
        }),
    ).exactOptional(),
    SequenceNumberForOrdering: SequenceNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Guarantees strictly increasing sequence numbers, for puts from the same client and to the same partition key. Usage: set the <code>SequenceNumberForOrdering</code> of record <i>n</i> to the sequence number of record <i>n-1</i> (as returned in the result when putting record <i>n-1</i>). If this parameter is not set, records are coarsely ordered based on arrival time.',
        }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Data', 'PartitionKey'],
    title: 'PutRecordInput',
    description: 'Represents the input for <code>PutRecord</code>.',
  })
  .openapi('PutRecordInput')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const PutRecordsResultEntrySchema = z
  .object({
    SequenceNumber: SequenceNumberSchema.and(
      z.any().openapi({ description: 'The sequence number for an individual record result.' }),
    ).exactOptional(),
    ShardId: ShardIdSchema.and(
      z.any().openapi({ description: 'The shard ID for an individual record result.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code for an individual record result. <code>ErrorCodes</code> can be either <code>ProvisionedThroughputExceededException</code> or <code>InternalFailure</code>.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message for an individual record result. An <code>ErrorCode</code> value of <code>ProvisionedThroughputExceededException</code> has an error message that includes the account ID, stream name, and shard ID. An <code>ErrorCode</code> value of <code>InternalFailure</code> has the error message <code>"Internal Service Failure"</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.',
    required: [],
  })
  .openapi('PutRecordsResultEntry')

const PutRecordsResultEntryListSchema = z
  .array(PutRecordsResultEntrySchema)
  .min(1)
  .max(500)
  .openapi('PutRecordsResultEntryList')

const PutRecordsOutputSchema = z
  .object({
    FailedRecordCount: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of unsuccessfully processed records in a <code>PutRecords</code> request.',
        }),
    ).exactOptional(),
    Records: PutRecordsResultEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of successfully and unsuccessfully processed record results. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to a stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.',
        }),
    ),
    EncryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption type used on the records. This parameter can be one of the following values:</p> <ul> <li> <p> <code>NONE</code>: Do not encrypt the records.</p> </li> <li> <p> <code>KMS</code>: Use server-side encryption on the records using a customer-managed Amazon Web Services KMS key.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Records'], description: ' <code>PutRecords</code> results.' })
  .openapi('PutRecordsOutput')

const PutRecordsRequestEntrySchema = z
  .object({
    Data: DataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data blob to put into the record, which is base64-encoded when the blob is serialized. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (1 MiB).',
        }),
    ),
    ExplicitHashKey: HashKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The hash value used to determine explicitly the shard that the data record is assigned to by overriding the partition key hash.',
        }),
    ).exactOptional(),
    PartitionKey: PartitionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.',
        }),
    ),
  })
  .openapi({
    required: ['Data', 'PartitionKey'],
    description: 'Represents the output for <code>PutRecords</code>.',
  })
  .openapi('PutRecordsRequestEntry')

const PutRecordsRequestEntryListSchema = z
  .array(PutRecordsRequestEntrySchema)
  .min(1)
  .max(500)
  .openapi('PutRecordsRequestEntryList')

const PutRecordsInputSchema = z
  .object({
    Records: PutRecordsRequestEntryListSchema.and(
      z.any().openapi({ description: 'The records associated with the request.' }),
    ),
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The stream name associated with the request.' }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Records'],
    title: 'PutRecordsInput',
    description: 'A <code>PutRecords</code> request.',
  })
  .openapi('PutRecordsInput')

const RegisterStreamConsumerOutputSchema = z
  .object({
    Consumer: ConsumerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the details of the consumer you registered. When you register a consumer, it gets an ARN that is generated by Kinesis Data Streams.',
        }),
    ),
  })
  .openapi({ required: ['Consumer'] })
  .openapi('RegisterStreamConsumerOutput')

const RegisterStreamConsumerInputSchema = z
  .object({
    StreamARN: StreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Kinesis data stream that you want to register the consumer with. For more info, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    ConsumerName: ConsumerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "For a given Kinesis data stream, each consumer must have a unique name. However, consumer names don't have to be unique across data streams.",
        }),
    ),
  })
  .openapi({ required: ['StreamARN', 'ConsumerName'], title: 'RegisterStreamConsumerInput' })
  .openapi('RegisterStreamConsumerInput')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const RemoveTagsFromStreamInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream.' }),
    ).exactOptional(),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tag keys. Each corresponding tag is removed from the stream.',
        }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TagKeys'],
    title: 'RemoveTagsFromStreamInput',
    description: 'Represents the input for <code>RemoveTagsFromStream</code>.',
  })
  .openapi('RemoveTagsFromStreamInput')

const SplitShardInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream for the shard split.' }),
    ).exactOptional(),
    ShardToSplit: ShardIdSchema.and(
      z.any().openapi({ description: 'The shard ID of the shard to split.' }),
    ),
    NewStartingHashKey: HashKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A hash key value for the starting hash key of one of the child shards created by the split. The hash key range for a given shard constitutes a set of ordered contiguous positive integers. The value for <code>NewStartingHashKey</code> must be in the range of hash keys being mapped into the shard. The <code>NewStartingHashKey</code> hash key value and all higher hash key values in hash key range are distributed to one of the child shards. All the lower hash key values in the range are distributed to the other child shard.',
        }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ShardToSplit', 'NewStartingHashKey'],
    title: 'SplitShardInput',
    description: 'Represents the input for <code>SplitShard</code>.',
  })
  .openapi('SplitShardInput')

const StartStreamEncryptionInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the stream for which to start encrypting records.' }),
    ).exactOptional(),
    EncryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The encryption type to use. The only valid value is <code>KMS</code>.',
        }),
    ),
    KeyId: KeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias <code>aws/kinesis</code>.</p> <ul> <li> <p>Key ARN example: <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias ARN example: <code>arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code> </p> </li> <li> <p>Globally unique key ID example: <code>12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias name example: <code>alias/MyAliasName</code> </p> </li> <li> <p>Master key owned by Kinesis Data Streams: <code>alias/aws/kinesis</code> </p> </li> </ul>',
        }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['EncryptionType', 'KeyId'], title: 'StartStreamEncryptionInput' })
  .openapi('StartStreamEncryptionInput')

const StopStreamEncryptionInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the stream on which to stop encrypting records.' }),
    ).exactOptional(),
    EncryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The encryption type. The only valid value is <code>KMS</code>.' }),
    ),
    KeyId: KeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias <code>aws/kinesis</code>.</p> <ul> <li> <p>Key ARN example: <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias ARN example: <code>arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code> </p> </li> <li> <p>Globally unique key ID example: <code>12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias name example: <code>alias/MyAliasName</code> </p> </li> <li> <p>Master key owned by Kinesis Data Streams: <code>alias/aws/kinesis</code> </p> </li> </ul>',
        }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['EncryptionType', 'KeyId'], title: 'StopStreamEncryptionInput' })
  .openapi('StopStreamEncryptionInput')

const UpdateShardCountOutputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream.' }),
    ).exactOptional(),
    CurrentShardCount: PositiveIntegerObjectSchema.and(
      z.any().openapi({ description: 'The current number of shards.' }),
    ).exactOptional(),
    TargetShardCount: PositiveIntegerObjectSchema.and(
      z.any().openapi({ description: 'The updated number of shards.' }),
    ).exactOptional(),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateShardCountOutput')

const ScalingTypeSchema = z.literal('UNIFORM_SCALING').openapi('ScalingType')

const UpdateShardCountInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream.' }),
    ).exactOptional(),
    TargetShardCount: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new number of shards. This value has the following default limits. By default, you cannot do the following: </p> <ul> <li> <p>Set this value to more than double your current shard count for a stream.</p> </li> <li> <p>Set this value below half your current shard count for a stream.</p> </li> <li> <p>Set this value to more than 10000 shards in a stream (the default limit for shard count per stream is 10000 per account per region), unless you request a limit increase.</p> </li> <li> <p>Scale a stream with more than 10000 shards down unless you set this value to less than 10000 shards.</p> </li> </ul>',
        }),
    ),
    ScalingType: ScalingTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The scaling type. Uniform scaling creates shards of equal size.',
        }),
    ),
    StreamARN: StreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetShardCount', 'ScalingType'], title: 'UpdateShardCountInput' })
  .openapi('UpdateShardCountInput')

const UpdateStreamModeInputSchema = z
  .object({
    StreamARN: StreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the ARN of the data stream whose capacity mode you want to update. ',
        }),
    ),
    StreamModeDetails: StreamModeDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. ',
        }),
    ),
  })
  .openapi({ required: ['StreamARN', 'StreamModeDetails'], title: 'UpdateStreamModeInput' })
  .openapi('UpdateStreamModeInput')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetKinesis20131202AddTagsToStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.AddTagsToStream',
  description:
    '<p>Adds or updates tags for the specified Kinesis data stream. You can assign up to 50 tags to a data stream.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If tags have already been assigned to the stream, <code>AddTagsToStream</code> overwrites any existing tags that correspond to the specified tag keys.</p> <p> <a>AddTagsToStream</a> has a limit of five transactions per second per account.</p>',
  operationId: 'AddTagsToStream',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.AddTagsToStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.AddTagsToStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddTagsToStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202CreateStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.CreateStream',
  description:
    '<p>Creates a Kinesis data stream. A stream captures and transports data records that are continuously emitted from different data sources or <i>producers</i>. Scale-out within a stream is explicitly supported by means of shards, which are uniquely identified groups of data records in a stream.</p> <p>You can create your data stream using either on-demand or provisioned capacity mode. Data streams with an on-demand mode require no capacity planning and automatically scale to handle gigabytes of write and read throughput per minute. With the on-demand mode, Kinesis Data Streams automatically manages the shards in order to provide the necessary throughput. For the data streams with a provisioned mode, you must specify the number of shards for the data stream. Each shard can support reads up to five transactions per second, up to a maximum data read total of 2 MiB per second. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second. If the amount of data input increases or decreases, you can add or remove shards.</p> <p>The stream name identifies the stream. The name is scoped to the Amazon Web Services account used by the application. It is also scoped by Amazon Web Services Region. That is, two streams in two different accounts can have the same name, and two streams in the same account, but in two different Regions, can have the same name.</p> <p> <code>CreateStream</code> is an asynchronous operation. Upon receiving a <code>CreateStream</code> request, Kinesis Data Streams immediately returns and sets the stream status to <code>CREATING</code>. After the stream is created, Kinesis Data Streams sets the stream status to <code>ACTIVE</code>. You should perform read and write operations only on an <code>ACTIVE</code> stream. </p> <p>You receive a <code>LimitExceededException</code> when making a <code>CreateStream</code> request when you try to do one of the following:</p> <ul> <li> <p>Have more than five streams in the <code>CREATING</code> state at any point in time.</p> </li> <li> <p>Create more shards than are authorized for your account.</p> </li> </ul> <p>For the default shard limit for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To increase this limit, <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact Amazon Web Services Support</a>.</p> <p>You can use <a>DescribeStreamSummary</a> to check the stream status, which is returned in <code>StreamStatus</code>.</p> <p> <a>CreateStream</a> has a limit of five transactions per second per account.</p>',
  operationId: 'CreateStream',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.CreateStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.CreateStream'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateStreamInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202DecreaseStreamRetentionPeriodRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod',
  description:
    "<p>Decreases the Kinesis data stream's retention period, which is the length of time data records are accessible after they are added to the stream. The minimum value of a stream's retention period is 24 hours.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>This operation may result in lost data. For example, if the stream's retention period is 48 hours and is decreased to 24 hours, any data already in the stream that is older than 24 hours is inaccessible.</p>",
  operationId: 'DecreaseStreamRetentionPeriod',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.DecreaseStreamRetentionPeriod')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.DecreaseStreamRetentionPeriod'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DecreaseStreamRetentionPeriodInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202DeleteStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.DeleteStream',
  description:
    '<p>Deletes a Kinesis data stream and all its shards and data. You must shut down any applications that are operating on the stream before you delete the stream. If an application attempts to operate on a deleted stream, it receives the exception <code>ResourceNotFoundException</code>.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If the stream is in the <code>ACTIVE</code> state, you can delete it. After a <code>DeleteStream</code> request, the specified stream is in the <code>DELETING</code> state until Kinesis Data Streams completes the deletion.</p> <p> <b>Note:</b> Kinesis Data Streams might continue to accept data read and write operations, such as <a>PutRecord</a>, <a>PutRecords</a>, and <a>GetRecords</a>, on a stream in the <code>DELETING</code> state until the stream deletion is complete.</p> <p>When you delete a stream, any shards in that stream are also deleted, and any tags are dissociated from the stream.</p> <p>You can use the <a>DescribeStreamSummary</a> operation to check the state of the stream, which is returned in <code>StreamStatus</code>.</p> <p> <a>DeleteStream</a> has a limit of five transactions per second per account.</p>',
  operationId: 'DeleteStream',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.DeleteStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.DeleteStream'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteStreamInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202DeregisterStreamConsumerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer',
  description:
    "<p>To deregister a consumer, provide its ARN. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to deregister, you can use the <a>ListStreamConsumers</a> operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its name and ARN.</p> <p>This operation has a limit of five transactions per second per stream.</p>",
  operationId: 'DeregisterStreamConsumer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.DeregisterStreamConsumer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.DeregisterStreamConsumer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterStreamConsumerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202DescribeLimitsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.DescribeLimits',
  description:
    '<p>Describes the shard limits and usage for the account.</p> <p>If you update your account limits, the old limits might be returned for a few minutes.</p> <p>This operation has a limit of one transaction per second per account.</p>',
  operationId: 'DescribeLimits',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.DescribeLimits')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.DescribeLimits'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLimitsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLimitsOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202DescribeStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.DescribeStream',
  description:
    '<p>Describes the specified Kinesis data stream.</p> <note> <p>This API has been revised. It\'s highly recommended that you use the <a>DescribeStreamSummary</a> API to get a summarized description of the specified Kinesis data stream and the <a>ListShards</a> API to list the shards in a specified data stream and obtain information about each shard. </p> </note> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>The information returned includes the stream name, Amazon Resource Name (ARN), creation time, enhanced metric configuration, and shard map. The shard map is an array of shard objects. For each shard object, there is the hash key and sequence number ranges that the shard spans, and the IDs of any earlier shards that played in a role in creating the shard. Every record ingested in the stream is identified by a sequence number, which is assigned when the record is put into the stream.</p> <p>You can limit the number of shards returned by each call. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-retrieve-shards.html">Retrieving Shards from a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>There are no guarantees about the chronological order shards returned. To process shards in chronological order, use the ID of the parent shard to track the lineage to the oldest shard.</p> <p>This operation has a limit of 10 transactions per second per account.</p>',
  operationId: 'DescribeStream',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.DescribeStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.DescribeStream'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      ExclusiveStartShardId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ExclusiveStartShardId',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStreamOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202DescribeStreamConsumerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer',
  description:
    "<p>To get the description of a registered consumer, provide the ARN of the consumer. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to describe, you can use the <a>ListStreamConsumers</a> operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream.</p> <p>This operation has a limit of 20 transactions per second per stream.</p>",
  operationId: 'DescribeStreamConsumer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.DescribeStreamConsumer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.DescribeStreamConsumer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStreamConsumerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStreamConsumerOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202DescribeStreamSummaryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary',
  description:
    '<p>Provides a summarized description of the specified Kinesis data stream without the shard list.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>The information returned includes the stream name, Amazon Resource Name (ARN), status, record retention period, approximate creation time, monitoring, encryption details, and open shard count. </p> <p> <a>DescribeStreamSummary</a> has a limit of 20 transactions per second per account.</p>',
  operationId: 'DescribeStreamSummary',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.DescribeStreamSummary')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.DescribeStreamSummary'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStreamSummaryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStreamSummaryOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202DisableEnhancedMonitoringRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring',
  description:
    '<p>Disables enhanced monitoring.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>',
  operationId: 'DisableEnhancedMonitoring',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.DisableEnhancedMonitoring')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.DisableEnhancedMonitoring'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableEnhancedMonitoringInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnhancedMonitoringOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202EnableEnhancedMonitoringRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring',
  description:
    '<p>Enables enhanced Kinesis data stream monitoring for shard-level metrics.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>',
  operationId: 'EnableEnhancedMonitoring',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.EnableEnhancedMonitoring')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.EnableEnhancedMonitoring'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableEnhancedMonitoringInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnhancedMonitoringOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202GetRecordsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.GetRecords',
  description:
    "<p>Gets data records from a Kinesis data stream's shard.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter in addition to the <code>ShardIterator</code> parameter.</p> </note> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading data records sequentially. If there are no records available in the portion of the shard that the iterator points to, <a>GetRecords</a> returns an empty list. It might take multiple calls to get to a portion of the shard that contains records.</p> <p>You can scale by provisioning multiple shards per stream while considering service limits (for more information, see <a href=\"https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html\">Amazon Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>). Your application should have one thread per shard, each reading continuously from its stream. To read from a stream continually, call <a>GetRecords</a> in a loop. Use <a>GetShardIterator</a> to get the shard iterator to specify in the first <a>GetRecords</a> call. <a>GetRecords</a> returns a new shard iterator in <code>NextShardIterator</code>. Specify the shard iterator returned in <code>NextShardIterator</code> in subsequent calls to <a>GetRecords</a>. If the shard has been closed, the shard iterator can't return more data and <a>GetRecords</a> returns <code>null</code> in <code>NextShardIterator</code>. You can terminate the loop when the shard is closed, or when the shard iterator reaches the record with the sequence number or other attribute that marks it as the last record to process.</p> <p>Each data record can be up to 1 MiB in size, and each shard can read up to 2 MiB per second. You can ensure that your calls don't exceed the maximum supported size or throughput by using the <code>Limit</code> parameter to specify the maximum number of records that <a>GetRecords</a> can return. Consider your average record size when determining this limit. The maximum number of records that can be returned per call is 10,000.</p> <p>The size of the data returned by <a>GetRecords</a> varies depending on the utilization of the shard. It is recommended that consumer applications retrieve records via the <code>GetRecords</code> command using the 5 TPS limit to remain caught up. Retrieving records less frequently can lead to consumer applications falling behind. The maximum size of data that <a>GetRecords</a> can return is 10 MiB. If a call returns this amount of data, subsequent calls made within the next 5 seconds throw <code>ProvisionedThroughputExceededException</code>. If there is insufficient provisioned throughput on the stream, subsequent calls made within the next 1 second throw <code>ProvisionedThroughputExceededException</code>. <a>GetRecords</a> doesn't return any data when it throws an exception. For this reason, we recommend that you wait 1 second between calls to <a>GetRecords</a>. However, it's possible that the application will get exceptions for longer than 1 second.</p> <p>To detect whether the application is falling behind in processing, you can use the <code>MillisBehindLatest</code> response attribute. You can also monitor the stream using CloudWatch metrics and other mechanisms (see <a href=\"https://docs.aws.amazon.com/kinesis/latest/dev/monitoring.html\">Monitoring</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>).</p> <p>Each Amazon Kinesis record includes a value, <code>ApproximateArrivalTimestamp</code>, that is set when a stream successfully receives and stores a record. This is commonly referred to as a server-side time stamp, whereas a client-side time stamp is set when a data producer creates or sends the record to a stream (a data producer is any data source putting data records into a stream, for example with <a>PutRecords</a>). The time stamp has millisecond precision. There are no guarantees about the time stamp accuracy, or that the time stamp is always increasing. For example, records in a shard or across a stream might have time stamps that are out of order.</p> <p>This operation has a limit of five transactions per second per shard.</p>",
  operationId: 'GetRecords',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.GetRecords')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.GetRecords'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetRecordsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRecordsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'ExpiredIteratorException',
      content: { 'application/json': { schema: ExpiredIteratorExceptionSchema } },
    },
    484: {
      description: 'KMSDisabledException',
      content: { 'application/json': { schema: KMSDisabledExceptionSchema } },
    },
    485: {
      description: 'KMSInvalidStateException',
      content: { 'application/json': { schema: KMSInvalidStateExceptionSchema } },
    },
    486: {
      description: 'KMSAccessDeniedException',
      content: { 'application/json': { schema: KMSAccessDeniedExceptionSchema } },
    },
    487: {
      description: 'KMSNotFoundException',
      content: { 'application/json': { schema: KMSNotFoundExceptionSchema } },
    },
    488: {
      description: 'KMSOptInRequired',
      content: { 'application/json': { schema: KMSOptInRequiredSchema } },
    },
    489: {
      description: 'KMSThrottlingException',
      content: { 'application/json': { schema: KMSThrottlingExceptionSchema } },
    },
    490: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202GetShardIteratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.GetShardIterator',
  description:
    '<p>Gets an Amazon Kinesis shard iterator. A shard iterator expires 5 minutes after it is returned to the requester.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards.</p> <p>You must specify the shard iterator type. For example, you can set the <code>ShardIteratorType</code> parameter to read exactly from the position denoted by a specific sequence number by using the <code>AT_SEQUENCE_NUMBER</code> shard iterator type. Alternatively, the parameter can read right after the sequence number by using the <code>AFTER_SEQUENCE_NUMBER</code> shard iterator type, using sequence numbers returned by earlier calls to <a>PutRecord</a>, <a>PutRecords</a>, <a>GetRecords</a>, or <a>DescribeStream</a>. In the request, you can specify the shard iterator type <code>AT_TIMESTAMP</code> to read records from an arbitrary point in time, <code>TRIM_HORIZON</code> to cause <code>ShardIterator</code> to point to the last untrimmed record in the shard in the system (the oldest data record in the shard), or <code>LATEST</code> so that you always read the most recent data in the shard. </p> <p>When you read repeatedly from a stream, use a <a>GetShardIterator</a> request to get the first shard iterator for use in your first <a>GetRecords</a> request and for subsequent reads use the shard iterator returned by the <a>GetRecords</a> request in <code>NextShardIterator</code>. A new shard iterator is returned by every <a>GetRecords</a> request in <code>NextShardIterator</code>, which you use in the <code>ShardIterator</code> parameter of the next <a>GetRecords</a> request. </p> <p>If a <a>GetShardIterator</a> request is made too often, you receive a <code>ProvisionedThroughputExceededException</code>. For more information about throughput limits, see <a>GetRecords</a>, and <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>If the shard is closed, <a>GetShardIterator</a> returns a valid iterator for the last sequence number of the shard. A shard can be closed as a result of using <a>SplitShard</a> or <a>MergeShards</a>.</p> <p> <a>GetShardIterator</a> has a limit of five transactions per second per account per open shard.</p>',
  operationId: 'GetShardIterator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.GetShardIterator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.GetShardIterator'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetShardIteratorInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetShardIteratorOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202IncreaseStreamRetentionPeriodRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod',
  description:
    "<p>Increases the Kinesis data stream's retention period, which is the length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 8760 hours (365 days).</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If you choose a longer stream retention period, this operation increases the time period during which records that have not yet expired are accessible. However, it does not make previous, expired data (older than the stream's previous retention period) accessible after the operation has been called. For example, if a stream's retention period is set to 24 hours and is increased to 168 hours, any data that is older than 24 hours remains inaccessible to consumer applications.</p>",
  operationId: 'IncreaseStreamRetentionPeriod',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.IncreaseStreamRetentionPeriod')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.IncreaseStreamRetentionPeriod'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: IncreaseStreamRetentionPeriodInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202ListShardsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.ListShards',
  description:
    '<p>Lists the shards in a stream and provides information about each shard. This operation has a limit of 1000 transactions per second per data stream.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>This action does not list expired shards. For information about expired shards, see <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-using-sdk-java-after-resharding.html#kinesis-using-sdk-java-resharding-data-routing">Data Routing, Data Persistence, and Shard State after a Reshard</a>. </p> <important> <p>This API is a new operation that is used by the Amazon Kinesis Client Library (KCL). If you have a fine-grained IAM policy that only allows specific operations, you must update your policy to allow calls to this API. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html">Controlling Access to Amazon Kinesis Data Streams Resources Using IAM</a>.</p> </important>',
  operationId: 'ListShards',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.ListShards')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.ListShards'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListShardsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListShardsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ExpiredNextTokenException',
      content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202ListStreamConsumersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.ListStreamConsumers',
  description:
    '<p>Lists the consumers registered to receive data from a stream using enhanced fan-out, and provides information about each consumer.</p> <p>This operation has a limit of 5 transactions per second per stream.</p>',
  operationId: 'ListStreamConsumers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.ListStreamConsumers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.ListStreamConsumers'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListStreamConsumersInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamConsumersOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ExpiredNextTokenException',
      content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202ListStreamsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.ListStreams',
  description:
    '<p>Lists your Kinesis data streams.</p> <p>The number of streams may be too large to return from a single call to <code>ListStreams</code>. You can limit the number of returned streams using the <code>Limit</code> parameter. If you do not specify a value for the <code>Limit</code> parameter, Kinesis Data Streams uses the default limit, which is currently 100.</p> <p>You can detect if there are more streams available to list by using the <code>HasMoreStreams</code> flag from the returned output. If there are more streams available, you can request more streams by using the name of the last stream returned by the <code>ListStreams</code> request in the <code>ExclusiveStartStreamName</code> parameter in a subsequent request to <code>ListStreams</code>. The group of stream names returned by the subsequent request is then added to the list. You can continue this process until all the stream names have been collected in the list. </p> <p> <a>ListStreams</a> has a limit of five transactions per second per account.</p>',
  operationId: 'ListStreams',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.ListStreams')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.ListStreams'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListStreamsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamsOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ExpiredNextTokenException',
      content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202ListTagsForStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.ListTagsForStream',
  description:
    '<p>Lists the tags for the specified Kinesis data stream. This operation has a limit of five transactions per second per account.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>',
  operationId: 'ListTagsForStream',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.ListTagsForStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.ListTagsForStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForStreamOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202MergeShardsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.MergeShards',
  description:
    '<p>Merges two adjacent shards in a Kinesis data stream and combines them into a single shard to reduce the stream\'s capacity to ingest and transport data. This API is only supported for the data streams with the provisioned capacity mode. Two shards are considered adjacent if the union of the hash key ranges for the two shards form a contiguous set with no gaps. For example, if you have two shards, one with a hash key range of 276...381 and the other with a hash key range of 382...454, then you could merge these two shards into a single shard that would have a hash key range of 276...454. After the merge, the single child shard receives data for all hash key values covered by the two parent shards.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p> <code>MergeShards</code> is called when there is a need to reduce the overall capacity of a stream because of excess capacity that is not being used. You must specify the shard to be merged and the adjacent shard for a stream. For more information about merging shards, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-merge.html">Merge Two Shards</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>If the stream is in the <code>ACTIVE</code> state, you can call <code>MergeShards</code>. If a stream is in the <code>CREATING</code>, <code>UPDATING</code>, or <code>DELETING</code> state, <code>MergeShards</code> returns a <code>ResourceInUseException</code>. If the specified stream does not exist, <code>MergeShards</code> returns a <code>ResourceNotFoundException</code>. </p> <p>You can use <a>DescribeStreamSummary</a> to check the state of the stream, which is returned in <code>StreamStatus</code>.</p> <p> <code>MergeShards</code> is an asynchronous operation. Upon receiving a <code>MergeShards</code> request, Amazon Kinesis Data Streams immediately returns a response and sets the <code>StreamStatus</code> to <code>UPDATING</code>. After the operation is completed, Kinesis Data Streams sets the <code>StreamStatus</code> to <code>ACTIVE</code>. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state. </p> <p>You use <a>DescribeStreamSummary</a> and the <a>ListShards</a> APIs to determine the shard IDs that are specified in the <code>MergeShards</code> request. </p> <p>If you try to operate on too many streams in parallel using <a>CreateStream</a>, <a>DeleteStream</a>, <code>MergeShards</code>, or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p> <p> <code>MergeShards</code> has a limit of five transactions per second per account.</p>',
  operationId: 'MergeShards',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.MergeShards')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.MergeShards'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MergeShardsInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202PutRecordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.PutRecord',
  description:
    '<p>Writes a single data record into an Amazon Kinesis data stream. Call <code>PutRecord</code> to send data into the stream for real-time ingestion and subsequent processing, one record at a time. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>You must specify the name of the stream that captures, stores, and transports the data; a partition key; and the data blob itself.</p> <p>The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.</p> <p>The partition key is used by Kinesis Data Streams to distribute data across shards. Kinesis Data Streams segregates the data records that belong to a stream into multiple shards, using the partition key associated with each data record to determine the shard to which a given data record belongs.</p> <p>Partition keys are Unicode strings, with a maximum length limit of 256 characters for each key. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards using the hash key ranges of the shards. You can override hashing the partition key to determine the shard by explicitly specifying a hash value using the <code>ExplicitHashKey</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p> <code>PutRecord</code> returns the shard ID of where the data record was placed and the sequence number that was assigned to the data record.</p> <p>Sequence numbers increase over time and are specific to a shard within a stream, not across all shards within a stream. To guarantee strictly increasing ordering, write serially to a shard and use the <code>SequenceNumberForOrdering</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <important> <p>After you write a record to a stream, you cannot modify that record or its order within the stream.</p> </important> <p>If a <code>PutRecord</code> request cannot be processed because of insufficient provisioned throughput on the shard involved in the request, <code>PutRecord</code> throws <code>ProvisionedThroughputExceededException</code>. </p> <p>By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>',
  operationId: 'PutRecord',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.PutRecord')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.PutRecord'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutRecordInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRecordOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'KMSDisabledException',
      content: { 'application/json': { schema: KMSDisabledExceptionSchema } },
    },
    484: {
      description: 'KMSInvalidStateException',
      content: { 'application/json': { schema: KMSInvalidStateExceptionSchema } },
    },
    485: {
      description: 'KMSAccessDeniedException',
      content: { 'application/json': { schema: KMSAccessDeniedExceptionSchema } },
    },
    486: {
      description: 'KMSNotFoundException',
      content: { 'application/json': { schema: KMSNotFoundExceptionSchema } },
    },
    487: {
      description: 'KMSOptInRequired',
      content: { 'application/json': { schema: KMSOptInRequiredSchema } },
    },
    488: {
      description: 'KMSThrottlingException',
      content: { 'application/json': { schema: KMSThrottlingExceptionSchema } },
    },
    489: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202PutRecordsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.PutRecords',
  description:
    '<p>Writes multiple data records into a Kinesis data stream in a single call (also referred to as a <code>PutRecords</code> request). Use this operation to send data into the stream for data ingestion and processing. </p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>Each <code>PutRecords</code> request can support up to 500 records. Each record in the request can be as large as 1 MiB, up to a limit of 5 MiB for the entire request, including partition keys. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second.</p> <p>You must specify the name of the stream that captures, stores, and transports the data; and an array of request <code>Records</code>, with each record in the array requiring a partition key and data blob. The record size limit applies to the total size of the partition key and data blob.</p> <p>The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.</p> <p>The partition key is used by Kinesis Data Streams as input to a hash function that maps the partition key and associated data to a specific shard. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>Each record in the <code>Records</code> array may include an optional parameter, <code>ExplicitHashKey</code>, which overrides the partition key to shard mapping. This parameter allows a data producer to determine explicitly the shard where the record is stored. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>The <code>PutRecords</code> response includes an array of response <code>Records</code>. Each record in the response array directly correlates with a record in the request array using natural ordering, from the top to the bottom of the request and response. The response <code>Records</code> array always includes the same number of records as the request array.</p> <p>The response <code>Records</code> array includes both successfully and unsuccessfully processed records. Kinesis Data Streams attempts to process all records in each <code>PutRecords</code> request. A single record failure does not stop the processing of subsequent records. As a result, PutRecords doesn\'t guarantee the ordering of records. If you need to read records in the same order they are written to the stream, use <a>PutRecord</a> instead of <code>PutRecords</code>, and write to the same shard.</p> <p>A successfully processed record includes <code>ShardId</code> and <code>SequenceNumber</code> values. The <code>ShardId</code> parameter identifies the shard in the stream where the record is stored. The <code>SequenceNumber</code> parameter is an identifier assigned to the put record, unique to all records in the stream.</p> <p>An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error and can be one of the following values: <code>ProvisionedThroughputExceededException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the <code>ProvisionedThroughputExceededException</code> exception including the account ID, stream name, and shard ID of the record that was throttled. For more information about partially successful responses, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-add-data-to-stream.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <important> <p>After you write a record to a stream, you cannot modify that record or its order within the stream.</p> </important> <p>By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>',
  operationId: 'PutRecords',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.PutRecords')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.PutRecords'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutRecordsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRecordsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'KMSDisabledException',
      content: { 'application/json': { schema: KMSDisabledExceptionSchema } },
    },
    484: {
      description: 'KMSInvalidStateException',
      content: { 'application/json': { schema: KMSInvalidStateExceptionSchema } },
    },
    485: {
      description: 'KMSAccessDeniedException',
      content: { 'application/json': { schema: KMSAccessDeniedExceptionSchema } },
    },
    486: {
      description: 'KMSNotFoundException',
      content: { 'application/json': { schema: KMSNotFoundExceptionSchema } },
    },
    487: {
      description: 'KMSOptInRequired',
      content: { 'application/json': { schema: KMSOptInRequiredSchema } },
    },
    488: {
      description: 'KMSThrottlingException',
      content: { 'application/json': { schema: KMSThrottlingExceptionSchema } },
    },
    489: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202RegisterStreamConsumerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer',
  description:
    '<p>Registers a consumer with a Kinesis data stream. When you use this operation, the consumer you register can then call <a>SubscribeToShard</a> to receive data from the stream using enhanced fan-out, at a rate of up to 2 MiB per second for every shard you subscribe to. This rate is unaffected by the total number of consumers that read from the same stream.</p> <p>You can register up to 20 consumers per stream. A given consumer can only be registered with one stream at a time.</p> <p>For an example of how to use this operations, see <a href="/streams/latest/dev/building-enhanced-consumers-api.html">Enhanced Fan-Out Using the Kinesis Data Streams API</a>.</p> <p>The use of this operation has a limit of five transactions per second per account. Also, only 5 consumers can be created simultaneously. In other words, you cannot have more than 5 consumers in a <code>CREATING</code> status at the same time. Registering a 6th consumer while there are 5 in a <code>CREATING</code> status results in a <code>LimitExceededException</code>.</p>',
  operationId: 'RegisterStreamConsumer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.RegisterStreamConsumer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.RegisterStreamConsumer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterStreamConsumerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterStreamConsumerOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202RemoveTagsFromStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream',
  description:
    '<p>Removes tags from the specified Kinesis data stream. Removed tags are deleted and cannot be recovered after this operation successfully completes.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If you specify a tag that does not exist, it is ignored.</p> <p> <a>RemoveTagsFromStream</a> has a limit of five transactions per second per account.</p>',
  operationId: 'RemoveTagsFromStream',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.RemoveTagsFromStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.RemoveTagsFromStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveTagsFromStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202SplitShardRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.SplitShard',
  description:
    '<p>Splits a shard into two new shards in the Kinesis data stream, to increase the stream\'s capacity to ingest and transport data. <code>SplitShard</code> is called when there is a need to increase the overall capacity of a stream because of an expected increase in the volume of data records being ingested. This API is only supported for the data streams with the provisioned capacity mode.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>You can also use <code>SplitShard</code> when a shard appears to be approaching its maximum utilization; for example, the producers sending data into the specific shard are suddenly sending more than previously anticipated. You can also call <code>SplitShard</code> to increase stream capacity, so that more Kinesis Data Streams applications can simultaneously read data from the stream for real-time processing. </p> <p>You must specify the shard to be split and the new hash key, which is the position in the shard where the shard gets split in two. In many cases, the new hash key might be the average of the beginning and ending hash key, but it can be any hash key value in the range being mapped into the shard. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-split.html">Split a Shard</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>You can use <a>DescribeStreamSummary</a> and the <a>ListShards</a> APIs to determine the shard ID and hash key values for the <code>ShardToSplit</code> and <code>NewStartingHashKey</code> parameters that are specified in the <code>SplitShard</code> request.</p> <p> <code>SplitShard</code> is an asynchronous operation. Upon receiving a <code>SplitShard</code> request, Kinesis Data Streams immediately returns a response and sets the stream status to <code>UPDATING</code>. After the operation is completed, Kinesis Data Streams sets the stream status to <code>ACTIVE</code>. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state. </p> <p>You can use <a>DescribeStreamSummary</a> to check the status of the stream, which is returned in <code>StreamStatus</code>. If the stream is in the <code>ACTIVE</code> state, you can call <code>SplitShard</code>. </p> <p>If the specified stream does not exist, <a>DescribeStreamSummary</a> returns a <code>ResourceNotFoundException</code>. If you try to create more shards than are authorized for your account, you receive a <code>LimitExceededException</code>. </p> <p>For the default shard limit for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To increase this limit, <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact Amazon Web Services Support</a>.</p> <p>If you try to operate on too many streams simultaneously using <a>CreateStream</a>, <a>DeleteStream</a>, <a>MergeShards</a>, and/or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p> <p> <code>SplitShard</code> has a limit of five transactions per second per account.</p>',
  operationId: 'SplitShard',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.SplitShard')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.SplitShard'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SplitShardInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202StartStreamEncryptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.StartStreamEncryption',
  description:
    '<p>Enables or updates server-side encryption using an Amazon Web Services KMS key for a specified stream. </p> <p>Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Updating or applying encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is <code>UPDATING</code>. Once the status of the stream is <code>ACTIVE</code>, encryption begins for records written to the stream. </p> <p>API Limits: You can successfully apply a new Amazon Web Services KMS key for server-side encryption 25 times in a rolling 24-hour period.</p> <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status before all records written to the stream are encrypted. After you enable encryption, you can verify that encryption is applied by inspecting the API response from <code>PutRecord</code> or <code>PutRecords</code>.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>',
  operationId: 'StartStreamEncryption',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.StartStreamEncryption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.StartStreamEncryption'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartStreamEncryptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'KMSDisabledException',
      content: { 'application/json': { schema: KMSDisabledExceptionSchema } },
    },
    485: {
      description: 'KMSInvalidStateException',
      content: { 'application/json': { schema: KMSInvalidStateExceptionSchema } },
    },
    486: {
      description: 'KMSAccessDeniedException',
      content: { 'application/json': { schema: KMSAccessDeniedExceptionSchema } },
    },
    487: {
      description: 'KMSNotFoundException',
      content: { 'application/json': { schema: KMSNotFoundExceptionSchema } },
    },
    488: {
      description: 'KMSOptInRequired',
      content: { 'application/json': { schema: KMSOptInRequiredSchema } },
    },
    489: {
      description: 'KMSThrottlingException',
      content: { 'application/json': { schema: KMSThrottlingExceptionSchema } },
    },
    490: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202StopStreamEncryptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.StopStreamEncryption',
  description:
    '<p>Disables server-side encryption for a specified stream. </p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>Stopping encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Stopping encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is <code>UPDATING</code>. Once the status of the stream is <code>ACTIVE</code>, records written to the stream are no longer encrypted by Kinesis Data Streams. </p> <p>API Limits: You can successfully disable server-side encryption 25 times in a rolling 24-hour period. </p> <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status before all records written to the stream are no longer subject to encryption. After you disabled encryption, you can verify that encryption is not applied by inspecting the API response from <code>PutRecord</code> or <code>PutRecords</code>.</p>',
  operationId: 'StopStreamEncryption',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.StopStreamEncryption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.StopStreamEncryption'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopStreamEncryptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202UpdateShardCountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.UpdateShardCount',
  description:
    '<p>Updates the shard count of the specified stream to the specified number of shards. This API is only supported for the data streams with the provisioned capacity mode.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>Updating the shard count is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is <code>UPDATING</code>.</p> <p>To update the shard count, Kinesis Data Streams performs splits or merges on individual shards. This can cause short-lived shards to be created, in addition to the final shards. These short-lived shards count towards your total shard limit for your account in the Region.</p> <p>When using this operation, we recommend that you specify a target shard count that is a multiple of 25% (25%, 50%, 75%, 100%). You can specify any target value within your shard limit. However, if you specify a target that isn\'t a multiple of 25%, the scaling action might take longer to complete. </p> <p>This operation has the following default limits. By default, you cannot do the following:</p> <ul> <li> <p>Scale more than ten times per rolling 24-hour period per stream</p> </li> <li> <p>Scale up to more than double your current shard count for a stream</p> </li> <li> <p>Scale down below half your current shard count for a stream</p> </li> <li> <p>Scale up to more than 10000 shards in a stream</p> </li> <li> <p>Scale a stream with more than 10000 shards down unless the result is less than 10000 shards</p> </li> <li> <p>Scale up to more than the shard limit for your account</p> </li> </ul> <p>For the default limits for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the <a href="https://console.aws.amazon.com/support/v1#/case/create?issueType=service-limit-increase&amp;limitType=service-code-kinesis">limits form</a>.</p>',
  operationId: 'UpdateShardCount',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.UpdateShardCount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.UpdateShardCount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateShardCountInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateShardCountOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesis20131202UpdateStreamModeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Kinesis_20131202.UpdateStreamMode',
  description:
    ' Updates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data stream. ',
  operationId: 'UpdateStreamMode',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Kinesis_20131202.UpdateStreamMode')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Kinesis_20131202.UpdateStreamMode'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateStreamModeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
