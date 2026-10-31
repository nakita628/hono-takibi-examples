import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const AddLayerVersionPermissionResponseSchema = z
  .object({
    Statement: StringSchema.and(
      z.any().openapi({ description: 'The permission statement.' }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the current revision of the policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddLayerVersionPermissionResponse')

const ServiceExceptionSchema = z.any().openapi('ServiceException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceConflictExceptionSchema = z.any().openapi('ResourceConflictException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const PolicyLengthExceededExceptionSchema = z.any().openapi('PolicyLengthExceededException')

const PreconditionFailedExceptionSchema = z.any().openapi('PreconditionFailedException')

const AddPermissionResponseSchema = z
  .object({
    Statement: StringSchema.and(
      z
        .any()
        .openapi({ description: "The permission statement that's added to the function policy." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddPermissionResponse')

const FunctionArnSchema = z
  .string()
  .regex(
    /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
  )
  .openapi('FunctionArn')

const AliasSchema = z
  .string()
  .regex(/(?!^[0-9]+$)([a-zA-Z0-9-_]+)/)
  .min(1)
  .max(128)
  .openapi('Alias')

const VersionSchema = z
  .string()
  .regex(/(\$LATEST|[0-9]+)/)
  .min(1)
  .max(1024)
  .openapi('Version')

const DescriptionSchema = z.string().min(0).max(256).openapi('Description')

const WeightSchema = z.float64().min(0).max(1).openapi('Weight')

const AdditionalVersionWeightsSchema = z
  .record(z.string(), WeightSchema)
  .openapi('AdditionalVersionWeights')

const AliasRoutingConfigurationSchema = z
  .object({
    AdditionalVersionWeights: AdditionalVersionWeightsSchema.and(
      z
        .any()
        .openapi({
          description: "The second version, and the percentage of traffic that's routed to it.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.',
    required: [],
  })
  .openapi('AliasRoutingConfiguration')

const AliasConfigurationSchema = z
  .object({
    AliasArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the alias.' }),
    ).exactOptional(),
    Name: AliasSchema.and(
      z.any().openapi({ description: 'The name of the alias.' }),
    ).exactOptional(),
    FunctionVersion: VersionSchema.and(
      z.any().openapi({ description: 'The function version that the alias invokes.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the alias.' }),
    ).exactOptional(),
    RoutingConfig: AliasRoutingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">routing configuration</a> of the alias.',
        }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier that changes when you update the alias.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.',
    required: [],
  })
  .openapi('AliasConfiguration')

const CodeSigningConfigIdSchema = z
  .string()
  .regex(/csc-[a-zA-Z0-9-_\.]{17}/)
  .openapi('CodeSigningConfigId')

const CodeSigningConfigArnSchema = z
  .string()
  .regex(
    /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}/,
  )
  .max(200)
  .openapi('CodeSigningConfigArn')

const ArnSchema = z
  .string()
  .regex(/arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)/)
  .openapi('Arn')

const SigningProfileVersionArnsSchema = z
  .array(ArnSchema)
  .min(1)
  .max(20)
  .openapi('SigningProfileVersionArns')

const AllowedPublishersSchema = z
  .object({
    SigningProfileVersionArns: SigningProfileVersionArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package. ',
        }),
    ),
  })
  .openapi({
    required: ['SigningProfileVersionArns'],
    description: 'List of signing profiles that can sign a code package. ',
  })
  .openapi('AllowedPublishers')

const CodeSigningPolicySchema = z.enum(['Warn', 'Enforce']).openapi('CodeSigningPolicy')

const CodeSigningPoliciesSchema = z
  .object({
    UntrustedArtifactOnDeployment: CodeSigningPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Code signing configuration policy for deployment validation failure. If you set the policy to <code>Enforce</code>, Lambda blocks the deployment request if signature validation checks fail. If you set the policy to <code>Warn</code>, Lambda allows the deployment and creates a CloudWatch log. </p> <p>Default value: <code>Warn</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.',
    required: [],
  })
  .openapi('CodeSigningPolicies')

const TimestampSchema = z.string().openapi('Timestamp')

const CodeSigningConfigSchema = z
  .object({
    CodeSigningConfigId: CodeSigningConfigIdSchema.and(
      z.any().openapi({ description: 'Unique identifer for the Code signing configuration.' }),
    ),
    CodeSigningConfigArn: CodeSigningConfigArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Code signing configuration.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Code signing configuration description.' }),
    ).exactOptional(),
    AllowedPublishers: AllowedPublishersSchema.and(
      z.any().openapi({ description: 'List of allowed publishers.' }),
    ),
    CodeSigningPolicies: CodeSigningPoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code signing policy controls the validation failure action for signature mismatch or expiry.',
        }),
    ),
    LastModified: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the Code signing configuration was last modified, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD). ',
        }),
    ),
  })
  .openapi({
    required: [
      'CodeSigningConfigId',
      'CodeSigningConfigArn',
      'AllowedPublishers',
      'CodeSigningPolicies',
      'LastModified',
    ],
    description:
      'Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>. ',
  })
  .openapi('CodeSigningConfig')

const CreateCodeSigningConfigResponseSchema = z
  .object({
    CodeSigningConfig: CodeSigningConfigSchema.and(
      z.any().openapi({ description: 'The code signing configuration.' }),
    ),
  })
  .openapi({ required: ['CodeSigningConfig'] })
  .openapi('CreateCodeSigningConfigResponse')

const EventSourcePositionSchema = z
  .enum(['TRIM_HORIZON', 'LATEST', 'AT_TIMESTAMP'])
  .openapi('EventSourcePosition')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const BatchSizeSchema = z.int().min(1).max(10000).openapi('BatchSize')

const MaximumBatchingWindowInSecondsSchema = z
  .int()
  .min(0)
  .max(300)
  .openapi('MaximumBatchingWindowInSeconds')

const ParallelizationFactorSchema = z.int().min(1).max(10).openapi('ParallelizationFactor')

const PatternSchema = z.string().regex(/.*/).min(0).max(4096).openapi('Pattern')

const FilterSchema = z
  .object({
    Pattern: PatternSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A filter pattern. For more information on the syntax of a filter pattern, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax"> Filter rule syntax</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A structure within a <code>FilterCriteria</code> object that defines an event filtering pattern. ',
    required: [],
  })
  .openapi('Filter')

const FilterListSchema = z.array(FilterSchema).openapi('FilterList')

const FilterCriteriaSchema = z
  .object({
    Filters: FilterListSchema.and(
      z.any().openapi({ description: ' A list of filters. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' An object that contains the filters for an event source. ',
    required: [],
  })
  .openapi('FilterCriteria')

const DestinationArnSchema = z
  .string()
  .regex(
    /^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)/,
  )
  .min(0)
  .max(350)
  .openapi('DestinationArn')

const OnSuccessSchema = z
  .object({
    Destination: DestinationArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the destination resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A destination for events that were processed successfully.',
    required: [],
  })
  .openapi('OnSuccess')

const OnFailureSchema = z
  .object({
    Destination: DestinationArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the destination resource.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A destination for events that failed processing.', required: [] })
  .openapi('OnFailure')

const DestinationConfigSchema = z
  .object({
    OnSuccess: OnSuccessSchema.and(
      z.any().openapi({ description: 'The destination configuration for successful invocations.' }),
    ).exactOptional(),
    OnFailure: OnFailureSchema.and(
      z.any().openapi({ description: 'The destination configuration for failed invocations.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A configuration object that specifies the destination of an event after Lambda processes it.',
    required: [],
  })
  .openapi('DestinationConfig')

const TopicSchema = z
  .string()
  .regex(/^[^.]([a-zA-Z0-9\-_.]+)/)
  .min(1)
  .max(249)
  .openapi('Topic')

const TopicsSchema = z.array(TopicSchema).length(1).openapi('Topics')

const QueueSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(1000)
  .openapi('Queue')

const QueuesSchema = z.array(QueueSchema).length(1).openapi('Queues')

const SourceAccessTypeSchema = z
  .enum([
    'BASIC_AUTH',
    'VPC_SUBNET',
    'VPC_SECURITY_GROUP',
    'SASL_SCRAM_512_AUTH',
    'SASL_SCRAM_256_AUTH',
    'VIRTUAL_HOST',
    'CLIENT_CERTIFICATE_TLS_AUTH',
    'SERVER_ROOT_CA_CERTIFICATE',
  ])
  .openapi('SourceAccessType')

const URISchema = z
  .string()
  .regex(/[a-zA-Z0-9-\/*:_+=.@-]*/)
  .min(1)
  .max(200)
  .openapi('URI')

const SourceAccessConfigurationSchema = z
  .object({
    Type: SourceAccessTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of authentication protocol, VPC components, or virtual host for your event source. For example: <code>"Type":"SASL_SCRAM_512_AUTH"</code>.</p> <ul> <li> <p> <code>BASIC_AUTH</code> – (Amazon MQ) The Secrets Manager secret that stores your broker credentials.</p> </li> <li> <p> <code>BASIC_AUTH</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.</p> </li> <li> <p> <code>VPC_SUBNET</code> – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.</p> </li> <li> <p> <code>VPC_SECURITY_GROUP</code> – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.</p> </li> <li> <p> <code>SASL_SCRAM_256_AUTH</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.</p> </li> <li> <p> <code>SASL_SCRAM_512_AUTH</code> – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.</p> </li> <li> <p> <code>VIRTUAL_HOST</code> –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.</p> </li> <li> <p> <code>CLIENT_CERTIFICATE_TLS_AUTH</code> – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.</p> </li> <li> <p> <code>SERVER_ROOT_CA_CERTIFICATE</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers. </p> </li> </ul>',
        }),
    ).exactOptional(),
    URI: URISchema.and(
      z
        .any()
        .openapi({
          description:
            'The value for your chosen configuration in <code>Type</code>. For example: <code>"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.',
    required: [],
  })
  .openapi('SourceAccessConfiguration')

const SourceAccessConfigurationsSchema = z
  .array(SourceAccessConfigurationSchema)
  .min(0)
  .max(22)
  .openapi('SourceAccessConfigurations')

const EndpointSchema = z
  .string()
  .regex(
    /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]):[0-9]{1,5}/,
  )
  .min(1)
  .max(300)
  .openapi('Endpoint')

const EndpointListsSchema = z.array(EndpointSchema).min(1).max(10).openapi('EndpointLists')

const EndpointsSchema = z
  .record(z.string(), EndpointListsSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 2)
  .openapi('Endpoints')

const SelfManagedEventSourceSchema = z
  .object({
    Endpoints: EndpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of bootstrap servers for your Kafka brokers in the following format: <code>"KAFKA_BOOTSTRAP_SERVERS": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The self-managed Apache Kafka cluster for your event source.',
    required: [],
  })
  .openapi('SelfManagedEventSource')

const MaximumRecordAgeInSecondsSchema = z
  .int()
  .min(-1)
  .max(604800)
  .openapi('MaximumRecordAgeInSeconds')

const BisectBatchOnFunctionErrorSchema = z.boolean().openapi('BisectBatchOnFunctionError')

const MaximumRetryAttemptsEventSourceMappingSchema = z
  .int()
  .min(-1)
  .max(10000)
  .openapi('MaximumRetryAttemptsEventSourceMapping')

const TumblingWindowInSecondsSchema = z.int().min(0).max(900).openapi('TumblingWindowInSeconds')

const FunctionResponseTypeSchema = z
  .literal('ReportBatchItemFailures')
  .openapi('FunctionResponseType')

const FunctionResponseTypeListSchema = z
  .array(FunctionResponseTypeSchema)
  .min(0)
  .max(1)
  .openapi('FunctionResponseTypeList')

const AmazonManagedKafkaEventSourceConfigSchema = z
  .object({
    ConsumerGroupId: URISchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id">Customizable consumer group ID</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.',
    required: [],
  })
  .openapi('AmazonManagedKafkaEventSourceConfig')

const SelfManagedKafkaEventSourceConfigSchema = z
  .object({
    ConsumerGroupId: URISchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id">Customizable consumer group ID</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specific configuration settings for a self-managed Apache Kafka event source.',
    required: [],
  })
  .openapi('SelfManagedKafkaEventSourceConfig')

const MaximumConcurrencySchema = z.int().min(2).max(1000).openapi('MaximumConcurrency')

const ScalingConfigSchema = z
  .object({
    MaximumConcurrency: MaximumConcurrencySchema.and(
      z
        .any()
        .openapi({
          description:
            'Limits the number of concurrent instances that the Amazon SQS event source can invoke.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.',
    required: [],
  })
  .openapi('ScalingConfig')

const DatabaseNameSchema = z
  .string()
  .regex(/[^ \/\.$\x22]*/)
  .min(1)
  .max(63)
  .openapi('DatabaseName')

const CollectionNameSchema = z
  .string()
  .regex(/(^(?!(system\x2e)))(^[_a-zA-Z0-9])([^$]*)/)
  .min(1)
  .max(57)
  .openapi('CollectionName')

const FullDocumentSchema = z.enum(['UpdateLookup', 'Default']).openapi('FullDocument')

const DocumentDBEventSourceConfigSchema = z
  .object({
    DatabaseName: DatabaseNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The name of the database to consume within the DocumentDB cluster. ',
        }),
    ).exactOptional(),
    CollectionName: CollectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections. ',
        }),
    ).exactOptional(),
    FullDocument: FullDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Specific configuration settings for a DocumentDB event source. ',
    required: [],
  })
  .openapi('DocumentDBEventSourceConfig')

const EventSourceMappingConfigurationSchema = z
  .object({
    UUID: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the event source mapping.' }),
    ).exactOptional(),
    StartingPosition: EventSourcePositionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.',
        }),
    ).exactOptional(),
    StartingPositionTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. <code>StartingPositionTimestamp</code> cannot be in the future.',
        }),
    ).exactOptional(),
    BatchSize: BatchSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <p>Default value: Varies by service. For Amazon SQS, the default is 10. For all other services, the default is 100.</p> <p>Related setting: When you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>',
        }),
    ).exactOptional(),
    MaximumBatchingWindowInSeconds: MaximumBatchingWindowInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>',
        }),
    ).exactOptional(),
    ParallelizationFactor: ParallelizationFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.',
        }),
    ).exactOptional(),
    EventSourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the event source.' }),
    ).exactOptional(),
    FilterCriteria: FilterCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.',
        }),
    ).exactOptional(),
    FunctionArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the Lambda function.' }),
    ).exactOptional(),
    LastModified: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the event source mapping was last updated or that its state changed.',
        }),
    ).exactOptional(),
    LastProcessingResult: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The result of the last Lambda invocation of your function.' }),
    ).exactOptional(),
    State: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the event source mapping. It can be one of the following: <code>Creating</code>, <code>Enabling</code>, <code>Enabled</code>, <code>Disabling</code>, <code>Disabled</code>, <code>Updating</code>, or <code>Deleting</code>.',
        }),
    ).exactOptional(),
    StateTransitionReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a user or Lambda made the last change to the event source mapping.',
        }),
    ).exactOptional(),
    DestinationConfig: DestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) An Amazon SQS queue or Amazon SNS topic destination for discarded records.',
        }),
    ).exactOptional(),
    Topics: TopicsSchema.and(
      z.any().openapi({ description: 'The name of the Kafka topic.' }),
    ).exactOptional(),
    Queues: QueuesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.',
        }),
    ).exactOptional(),
    SourceAccessConfigurations: SourceAccessConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.',
        }),
    ).exactOptional(),
    SelfManagedEventSource: SelfManagedEventSourceSchema.and(
      z
        .any()
        .openapi({ description: 'The self-managed Apache Kafka cluster for your event source.' }),
    ).exactOptional(),
    MaximumRecordAgeInSeconds: MaximumRecordAgeInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.</p> <note> <p>The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed</p> </note>",
        }),
    ).exactOptional(),
    BisectBatchOnFunctionError: BisectBatchOnFunctionErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.',
        }),
    ).exactOptional(),
    MaximumRetryAttempts: MaximumRetryAttemptsEventSourceMappingSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.',
        }),
    ).exactOptional(),
    TumblingWindowInSeconds: TumblingWindowInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.',
        }),
    ).exactOptional(),
    FunctionResponseTypes: FunctionResponseTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.',
        }),
    ).exactOptional(),
    AmazonManagedKafkaEventSourceConfig: AmazonManagedKafkaEventSourceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.',
        }),
    ).exactOptional(),
    SelfManagedKafkaEventSourceConfig: SelfManagedKafkaEventSourceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specific configuration settings for a self-managed Apache Kafka event source.',
        }),
    ).exactOptional(),
    ScalingConfig: ScalingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.',
        }),
    ).exactOptional(),
    DocumentDBEventSourceConfig: DocumentDBEventSourceConfigSchema.and(
      z
        .any()
        .openapi({ description: 'Specific configuration settings for a DocumentDB event source.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.',
    required: [],
  })
  .openapi('EventSourceMappingConfiguration')

const NamespacedFunctionNameSchema = z
  .string()
  .regex(
    /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
  )
  .min(1)
  .max(170)
  .openapi('NamespacedFunctionName')

const NameSpacedFunctionArnSchema = z
  .string()
  .regex(
    /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
  )
  .openapi('NameSpacedFunctionArn')

const RuntimeSchema = z
  .enum([
    'nodejs',
    'nodejs4.3',
    'nodejs6.10',
    'nodejs8.10',
    'nodejs10.x',
    'nodejs12.x',
    'nodejs14.x',
    'nodejs16.x',
    'java8',
    'java8.al2',
    'java11',
    'python2.7',
    'python3.6',
    'python3.7',
    'python3.8',
    'python3.9',
    'dotnetcore1.0',
    'dotnetcore2.0',
    'dotnetcore2.1',
    'dotnetcore3.1',
    'dotnet6',
    'nodejs4.3-edge',
    'go1.x',
    'ruby2.5',
    'ruby2.7',
    'provided',
    'provided.al2',
    'nodejs18.x',
    'python3.10',
    'java17',
    'ruby3.2',
    'python3.11',
  ])
  .openapi('Runtime')

const RoleArnSchema = z
  .string()
  .regex(/arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
  .openapi('RoleArn')

const HandlerSchema = z
  .string()
  .regex(/[^\s]+/)
  .max(128)
  .openapi('Handler')

const LongSchema = z.int().openapi('Long')

const TimeoutSchema = z.int().min(1).openapi('Timeout')

const MemorySizeSchema = z.int().min(128).max(10240).openapi('MemorySize')

const SubnetIdSchema = z.string().openapi('SubnetId')

const SubnetIdsSchema = z.array(SubnetIdSchema).max(16).openapi('SubnetIds')

const SecurityGroupIdSchema = z.string().openapi('SecurityGroupId')

const SecurityGroupIdsSchema = z.array(SecurityGroupIdSchema).max(5).openapi('SecurityGroupIds')

const VpcIdSchema = z.string().openapi('VpcId')

const VpcConfigResponseSchema = z
  .object({
    SubnetIds: SubnetIdsSchema.and(
      z.any().openapi({ description: 'A list of VPC subnet IDs.' }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z.any().openapi({ description: 'A list of VPC security group IDs.' }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(z.any().openapi({ description: 'The ID of the VPC.' })).exactOptional(),
  })
  .openapi({
    description: 'The VPC security groups and subnets that are attached to a Lambda function.',
    required: [],
  })
  .openapi('VpcConfigResponse')

const ResourceArnSchema = z
  .string()
  .regex(/(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()/)
  .openapi('ResourceArn')

const DeadLetterConfigSchema = z
  .object({
    TargetArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.',
    required: [],
  })
  .openapi('DeadLetterConfig')

const EnvironmentVariableValueSchema = z.string().openapi('EnvironmentVariableValue')

const EnvironmentVariablesSchema = z
  .record(z.string(), EnvironmentVariableValueSchema)
  .openapi('EnvironmentVariables')

const SensitiveStringSchema = z.string().openapi('SensitiveString')

const EnvironmentErrorSchema = z
  .object({
    ErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    Message: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({
    description: "Error messages for environment variables that couldn't be applied.",
    required: [],
  })
  .openapi('EnvironmentError')

const EnvironmentResponseSchema = z
  .object({
    Variables: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description: 'Environment variable key-value pairs. Omitted from CloudTrail logs.',
        }),
    ).exactOptional(),
    Error: EnvironmentErrorSchema.and(
      z
        .any()
        .openapi({
          description: "Error messages for environment variables that couldn't be applied.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The results of an operation to update or read environment variables. If the operation succeeds, the response contains the environment variables. If it fails, the response contains details about the error.',
    required: [],
  })
  .openapi('EnvironmentResponse')

const KMSKeyArnSchema = z
  .string()
  .regex(/(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()/)
  .openapi('KMSKeyArn')

const TracingModeSchema = z.enum(['Active', 'PassThrough']).openapi('TracingMode')

const TracingConfigResponseSchema = z
  .object({
    Mode: TracingModeSchema.and(
      z.any().openapi({ description: 'The tracing mode.' }),
    ).exactOptional(),
  })
  .openapi({ description: "The function's X-Ray tracing configuration.", required: [] })
  .openapi('TracingConfigResponse')

const LayerVersionArnSchema = z
  .string()
  .regex(/arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+:[0-9]+/)
  .min(1)
  .max(140)
  .openapi('LayerVersionArn')

const LayerSchema = z
  .object({
    Arn: LayerVersionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the function layer.' }),
    ).exactOptional(),
    CodeSize: LongSchema.and(
      z.any().openapi({ description: 'The size of the layer archive in bytes.' }),
    ).exactOptional(),
    SigningProfileVersionArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for a signing profile version.' }),
    ).exactOptional(),
    SigningJobArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of a signing job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.',
    required: [],
  })
  .openapi('Layer')

const LayersReferenceListSchema = z.array(LayerSchema).openapi('LayersReferenceList')

const StateSchema = z.enum(['Pending', 'Active', 'Inactive', 'Failed']).openapi('State')

const StateReasonSchema = z.string().openapi('StateReason')

const StateReasonCodeSchema = z
  .enum([
    'Idle',
    'Creating',
    'Restoring',
    'EniLimitExceeded',
    'InsufficientRolePermissions',
    'InvalidConfiguration',
    'InternalError',
    'SubnetOutOfIPAddresses',
    'InvalidSubnet',
    'InvalidSecurityGroup',
    'ImageDeleted',
    'ImageAccessDenied',
    'InvalidImage',
    'KMSKeyAccessDenied',
    'KMSKeyNotFound',
    'InvalidStateKMSKey',
    'DisabledKMSKey',
    'EFSIOError',
    'EFSMountConnectivityError',
    'EFSMountFailure',
    'EFSMountTimeout',
    'InvalidRuntime',
    'InvalidZipFileException',
    'FunctionError',
  ])
  .openapi('StateReasonCode')

const LastUpdateStatusSchema = z
  .enum(['Successful', 'Failed', 'InProgress'])
  .openapi('LastUpdateStatus')

const LastUpdateStatusReasonSchema = z.string().openapi('LastUpdateStatusReason')

const LastUpdateStatusReasonCodeSchema = z
  .enum([
    'EniLimitExceeded',
    'InsufficientRolePermissions',
    'InvalidConfiguration',
    'InternalError',
    'SubnetOutOfIPAddresses',
    'InvalidSubnet',
    'InvalidSecurityGroup',
    'ImageDeleted',
    'ImageAccessDenied',
    'InvalidImage',
    'KMSKeyAccessDenied',
    'KMSKeyNotFound',
    'InvalidStateKMSKey',
    'DisabledKMSKey',
    'EFSIOError',
    'EFSMountConnectivityError',
    'EFSMountFailure',
    'EFSMountTimeout',
    'InvalidRuntime',
    'InvalidZipFileException',
    'FunctionError',
  ])
  .openapi('LastUpdateStatusReasonCode')

const FileSystemArnSchema = z
  .string()
  .regex(
    /arn:aws[a-zA-Z-]*:elasticfilesystem:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:access-point\/fsap-[a-f0-9]{17}/,
  )
  .max(200)
  .openapi('FileSystemArn')

const LocalMountPathSchema = z
  .string()
  .regex(/^\/mnt\/[a-zA-Z0-9-_.]+$/)
  .max(160)
  .openapi('LocalMountPath')

const FileSystemConfigSchema = z
  .object({
    Arn: FileSystemArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.',
        }),
    ),
    LocalMountPath: LocalMountPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path where the function can access the file system, starting with <code>/mnt/</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Arn', 'LocalMountPath'],
    description:
      'Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.',
  })
  .openapi('FileSystemConfig')

const FileSystemConfigListSchema = z
  .array(FileSystemConfigSchema)
  .max(1)
  .openapi('FileSystemConfigList')

const PackageTypeSchema = z.enum(['Zip', 'Image']).openapi('PackageType')

const StringListSchema = z.array(StringSchema).max(1500).openapi('StringList')

const WorkingDirectorySchema = z.string().max(1000).openapi('WorkingDirectory')

const ImageConfigSchema = z
  .object({
    EntryPoint: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the entry point to their application, which is typically the location of the runtime executable.',
        }),
    ).exactOptional(),
    Command: StringListSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies parameters that you want to pass in with ENTRYPOINT.' }),
    ).exactOptional(),
    WorkingDirectory: WorkingDirectorySchema.and(
      z.any().openapi({ description: 'Specifies the working directory.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.',
    required: [],
  })
  .openapi('ImageConfig')

const ImageConfigErrorSchema = z
  .object({
    ErrorCode: StringSchema.and(z.any().openapi({ description: 'Error code.' })).exactOptional(),
    Message: SensitiveStringSchema.and(
      z.any().openapi({ description: 'Error message.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Error response to <code>GetFunctionConfiguration</code>.',
    required: [],
  })
  .openapi('ImageConfigError')

const ImageConfigResponseSchema = z
  .object({
    ImageConfig: ImageConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration values that override the container image Dockerfile.',
        }),
    ).exactOptional(),
    Error: ImageConfigErrorSchema.and(
      z.any().openapi({ description: 'Error response to <code>GetFunctionConfiguration</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Response to a <code>GetFunctionConfiguration</code> request.',
    required: [],
  })
  .openapi('ImageConfigResponse')

const ArchitectureSchema = z.enum(['x86_64', 'arm64']).openapi('Architecture')

const ArchitecturesListSchema = z.array(ArchitectureSchema).length(1).openapi('ArchitecturesList')

const EphemeralStorageSizeSchema = z.int().min(512).max(10240).openapi('EphemeralStorageSize')

const EphemeralStorageSchema = z
  .object({
    Size: EphemeralStorageSizeSchema.and(
      z.any().openapi({ description: "The size of the function's <code>/tmp</code> directory." }),
    ),
  })
  .openapi({
    required: ['Size'],
    description:
      "The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.",
  })
  .openapi('EphemeralStorage')

const SnapStartApplyOnSchema = z.enum(['PublishedVersions', 'None']).openapi('SnapStartApplyOn')

const SnapStartOptimizationStatusSchema = z
  .enum(['On', 'Off'])
  .openapi('SnapStartOptimizationStatus')

const SnapStartResponseSchema = z
  .object({
    ApplyOn: SnapStartApplyOnSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>PublishedVersions</code>, Lambda creates a snapshot of the execution environment when you publish a function version.',
        }),
    ).exactOptional(),
    OptimizationStatus: SnapStartOptimizationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you provide a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using">qualified Amazon Resource Name (ARN)</a>, this response element indicates whether SnapStart is activated for the specified function version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.',
    required: [],
  })
  .openapi('SnapStartResponse')

const RuntimeVersionArnSchema = z
  .string()
  .regex(/^arn:(aws[a-zA-Z-]*):lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}::runtime:.+$/)
  .min(26)
  .max(2048)
  .openapi('RuntimeVersionArn')

const RuntimeVersionErrorSchema = z
  .object({
    ErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    Message: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Any error returned when the runtime version information for the function could not be retrieved.',
    required: [],
  })
  .openapi('RuntimeVersionError')

const RuntimeVersionConfigSchema = z
  .object({
    RuntimeVersionArn: RuntimeVersionArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the runtime version you want the function to use.' }),
    ).exactOptional(),
    Error: RuntimeVersionErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Error response when Lambda is unable to retrieve the runtime version for a function.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The ARN of the runtime and any errors that occured.', required: [] })
  .openapi('RuntimeVersionConfig')

const FunctionConfigurationSchema = z
  .object({
    FunctionName: NamespacedFunctionNameSchema.and(
      z.any().openapi({ description: 'The name of the function.' }),
    ).exactOptional(),
    FunctionArn: NameSpacedFunctionArnSchema.and(
      z.any().openapi({ description: "The function's Amazon Resource Name (ARN)." }),
    ).exactOptional(),
    Runtime: RuntimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
        }),
    ).exactOptional(),
    Role: RoleArnSchema.and(
      z.any().openapi({ description: "The function's execution role." }),
    ).exactOptional(),
    Handler: HandlerSchema.and(
      z
        .any()
        .openapi({ description: 'The function that Lambda calls to begin running your function.' }),
    ).exactOptional(),
    CodeSize: LongSchema.and(
      z.any().openapi({ description: "The size of the function's deployment package, in bytes." }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: "The function's description." }),
    ).exactOptional(),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time in seconds that Lambda allows a function to run before stopping it.',
        }),
    ).exactOptional(),
    MemorySize: MemorySizeSchema.and(
      z
        .any()
        .openapi({ description: 'The amount of memory available to the function at runtime.' }),
    ).exactOptional(),
    LastModified: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the function was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ).exactOptional(),
    CodeSha256: StringSchema.and(
      z.any().openapi({ description: "The SHA256 hash of the function's deployment package." }),
    ).exactOptional(),
    Version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the Lambda function.' }),
    ).exactOptional(),
    VpcConfig: VpcConfigResponseSchema.and(
      z.any().openapi({ description: "The function's networking configuration." }),
    ).exactOptional(),
    DeadLetterConfig: DeadLetterConfigSchema.and(
      z.any().openapi({ description: "The function's dead letter queue." }),
    ).exactOptional(),
    Environment: EnvironmentResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">environment variables</a>. Omitted from CloudTrail logs.',
        }),
    ).exactOptional(),
    KMSKeyArn: KMSKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key that\'s used to encrypt the function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, this key is also used to encrypt the function\'s snapshot. This key is returned only if you\'ve configured a customer managed key.',
        }),
    ).exactOptional(),
    TracingConfig: TracingConfigResponseSchema.and(
      z.any().openapi({ description: "The function's X-Ray tracing configuration." }),
    ).exactOptional(),
    MasterArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'For Lambda@Edge functions, the ARN of the main function.' }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z.any().openapi({ description: 'The latest updated revision of the function or alias.' }),
    ).exactOptional(),
    Layers: LayersReferenceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">layers</a>.',
        }),
    ).exactOptional(),
    State: StateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of the function. When the state is <code>Inactive</code>, you can reactivate the function by invoking it.',
        }),
    ).exactOptional(),
    StateReason: StateReasonSchema.and(
      z.any().openapi({ description: "The reason for the function's current state." }),
    ).exactOptional(),
    StateReasonCode: StateReasonCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The reason code for the function's current state. When the code is <code>Creating</code>, you can't invoke or modify the function.",
        }),
    ).exactOptional(),
    LastUpdateStatus: LastUpdateStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the last update that was performed on the function. This is first set to <code>Successful</code> after function creation completes.',
        }),
    ).exactOptional(),
    LastUpdateStatusReason: LastUpdateStatusReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason for the last update that was performed on the function.',
        }),
    ).exactOptional(),
    LastUpdateStatusReasonCode: LastUpdateStatusReasonCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason code for the last update that was performed on the function.',
        }),
    ).exactOptional(),
    FileSystemConfigs: FileSystemConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Connection settings for an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.',
        }),
    ).exactOptional(),
    PackageType: PackageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive.',
        }),
    ).exactOptional(),
    ImageConfigResponse: ImageConfigResponseSchema.and(
      z.any().openapi({ description: "The function's image configuration values." }),
    ).exactOptional(),
    SigningProfileVersionArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the signing profile version.' }),
    ).exactOptional(),
    SigningJobArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the signing job.' }),
    ).exactOptional(),
    Architectures: ArchitecturesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instruction set architecture that the function supports. Architecture is a string array with one of the valid values. The default architecture value is <code>x86_64</code>.',
        }),
    ).exactOptional(),
    EphemeralStorage: EphemeralStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the function’s <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.',
        }),
    ).exactOptional(),
    SnapStart: SnapStartResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Improving startup performance with Lambda SnapStart</a>.',
        }),
    ).exactOptional(),
    RuntimeVersionConfig: RuntimeVersionConfigSchema.and(
      z.any().openapi({ description: 'The ARN of the runtime and any errors that occured.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Details about a function's configuration.", required: [] })
  .openapi('FunctionConfiguration')

const BlobSchema = z.string().openapi('Blob')

const S3BucketSchema = z
  .string()
  .regex(/^[0-9A-Za-z\.\-_]*(?<!\.)$/)
  .min(3)
  .max(63)
  .openapi('S3Bucket')

const S3KeySchema = z.string().min(1).max(1024).openapi('S3Key')

const S3ObjectVersionSchema = z.string().min(1).max(1024).openapi('S3ObjectVersion')

const TagValueSchema = z.string().openapi('TagValue')

const CodeStorageExceededExceptionSchema = z.any().openapi('CodeStorageExceededException')

const CodeVerificationFailedExceptionSchema = z.any().openapi('CodeVerificationFailedException')

const InvalidCodeSignatureExceptionSchema = z.any().openapi('InvalidCodeSignatureException')

const CodeSigningConfigNotFoundExceptionSchema = z
  .any()
  .openapi('CodeSigningConfigNotFoundException')

const FunctionUrlSchema = z.string().min(40).max(100).openapi('FunctionUrl')

const FunctionUrlAuthTypeSchema = z.enum(['NONE', 'AWS_IAM']).openapi('FunctionUrlAuthType')

const AllowCredentialsSchema = z.boolean().openapi('AllowCredentials')

const HeaderSchema = z.string().regex(/.*/).max(1024).openapi('Header')

const HeadersListSchema = z.array(HeaderSchema).max(100).openapi('HeadersList')

const MethodSchema = z.string().regex(/.*/).max(6).openapi('Method')

const AllowMethodsListSchema = z.array(MethodSchema).max(6).openapi('AllowMethodsList')

const OriginSchema = z.string().regex(/.*/).min(1).max(253).openapi('Origin')

const AllowOriginsListSchema = z.array(OriginSchema).max(100).openapi('AllowOriginsList')

const MaxAgeSchema = z.int().min(0).max(86400).openapi('MaxAge')

const CorsSchema = z
  .object({
    AllowCredentials: AllowCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to allow cookies or other credentials in requests to your function URL. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    AllowHeaders: HeadersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP headers that origins can include in requests to your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.',
        }),
    ).exactOptional(),
    AllowMethods: AllowMethodsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP methods that are allowed when calling your function URL. For example: <code>GET</code>, <code>POST</code>, <code>DELETE</code>, or the wildcard character (<code>*</code>).',
        }),
    ).exactOptional(),
    AllowOrigins: AllowOriginsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The origins that can access your function URL. You can list any number of specific origins, separated by a comma. For example: <code>https://www.example.com</code>, <code>http://localhost:60905</code>.</p> <p>Alternatively, you can grant access to all origins using the wildcard character (<code>*</code>).</p>',
        }),
    ).exactOptional(),
    ExposeHeaders: HeadersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP headers in your function response that you want to expose to origins that call your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.',
        }),
    ).exactOptional(),
    MaxAge: MaxAgeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By default, this is set to <code>0</code>, which means that the browser doesn't cache results.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.',
    required: [],
  })
  .openapi('Cors')

const InvokeModeSchema = z.enum(['BUFFERED', 'RESPONSE_STREAM']).openapi('InvokeMode')

const CreateFunctionUrlConfigResponseSchema = z
  .object({
    FunctionUrl: FunctionUrlSchema.and(
      z.any().openapi({ description: 'The HTTP URL endpoint for your function.' }),
    ),
    FunctionArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of your function.' }),
    ),
    AuthType: FunctionUrlAuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
        }),
    ),
    Cors: CorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ),
    InvokeMode: InvokeModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FunctionUrl', 'FunctionArn', 'AuthType', 'CreationTime'] })
  .openapi('CreateFunctionUrlConfigResponse')

const DeleteCodeSigningConfigResponseSchema = z
  .object({})
  .openapi('DeleteCodeSigningConfigResponse')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const IntegerSchema = z.int().openapi('Integer')

const UnreservedConcurrentExecutionsSchema = z
  .int()
  .min(0)
  .openapi('UnreservedConcurrentExecutions')

const AccountLimitSchema = z
  .object({
    TotalCodeSize: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of storage space that you can use for all deployment packages and layer archives.',
        }),
    ).exactOptional(),
    CodeSizeUnzipped: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum size of a function's deployment package and layers when they're extracted.",
        }),
    ).exactOptional(),
    CodeSizeZipped: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum size of a deployment package when it's uploaded directly to Lambda. Use Amazon S3 for larger files.",
        }),
    ).exactOptional(),
    ConcurrentExecutions: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of simultaneous function executions.' }),
    ).exactOptional(),
    UnreservedConcurrentExecutions: UnreservedConcurrentExecutionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of simultaneous function executions, minus the capacity that's reserved for individual functions with <a>PutFunctionConcurrency</a>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Limits that are related to concurrency and storage. All file and storage sizes are in bytes.',
    required: [],
  })
  .openapi('AccountLimit')

const AccountUsageSchema = z
  .object({
    TotalCodeSize: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of storage space, in bytes, that's being used by deployment packages and layer archives.",
        }),
    ).exactOptional(),
    FunctionCount: LongSchema.and(
      z.any().openapi({ description: 'The number of Lambda functions.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The number of functions and amount of storage in use.', required: [] })
  .openapi('AccountUsage')

const GetAccountSettingsResponseSchema = z
  .object({
    AccountLimit: AccountLimitSchema.and(
      z.any().openapi({ description: 'Limits that are related to concurrency and code storage.' }),
    ).exactOptional(),
    AccountUsage: AccountUsageSchema.and(
      z.any().openapi({ description: 'The number of functions and amount of storage in use.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccountSettingsResponse')

const GetCodeSigningConfigResponseSchema = z
  .object({
    CodeSigningConfig: CodeSigningConfigSchema.and(
      z.any().openapi({ description: 'The code signing configuration' }),
    ),
  })
  .openapi({ required: ['CodeSigningConfig'] })
  .openapi('GetCodeSigningConfigResponse')

const FunctionCodeLocationSchema = z
  .object({
    RepositoryType: StringSchema.and(
      z.any().openapi({ description: "The service that's hosting the file." }),
    ).exactOptional(),
    Location: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A presigned URL that you can use to download the deployment package.',
        }),
    ).exactOptional(),
    ImageUri: StringSchema.and(
      z.any().openapi({ description: 'URI of a container image in the Amazon ECR registry.' }),
    ).exactOptional(),
    ResolvedImageUri: StringSchema.and(
      z.any().openapi({ description: 'The resolved URI for the image.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Details about a function's deployment package.", required: [] })
  .openapi('FunctionCodeLocation')

const TagsSchema = z.record(z.string(), TagValueSchema).openapi('Tags')

const ReservedConcurrentExecutionsSchema = z.int().min(0).openapi('ReservedConcurrentExecutions')

const ConcurrencySchema = z
  .object({
    ReservedConcurrentExecutions: ReservedConcurrentExecutionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of concurrent executions that are reserved for this function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html">Managing Lambda reserved concurrency</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Concurrency')

const GetFunctionResponseSchema = z
  .object({
    Configuration: FunctionConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration of the function or version.' }),
    ).exactOptional(),
    Code: FunctionCodeLocationSchema.and(
      z.any().openapi({ description: 'The deployment package of the function or version.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>.',
        }),
    ).exactOptional(),
    Concurrency: ConcurrencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">reserved concurrency</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFunctionResponse')

const FunctionNameSchema = z
  .string()
  .regex(
    /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
  )
  .min(1)
  .max(140)
  .openapi('FunctionName')

const GetFunctionCodeSigningConfigResponseSchema = z
  .object({
    CodeSigningConfigArn: CodeSigningConfigArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The The Amazon Resource Name (ARN) of the code signing configuration.',
        }),
    ),
    FunctionName: FunctionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
        }),
    ),
  })
  .openapi({ required: ['CodeSigningConfigArn', 'FunctionName'] })
  .openapi('GetFunctionCodeSigningConfigResponse')

const GetFunctionConcurrencyResponseSchema = z
  .object({
    ReservedConcurrentExecutions: ReservedConcurrentExecutionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of simultaneous executions that are reserved for the function.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFunctionConcurrencyResponse')

const MaximumRetryAttemptsSchema = z.int().min(0).max(2).openapi('MaximumRetryAttempts')

const MaximumEventAgeInSecondsSchema = z
  .int()
  .min(60)
  .max(21600)
  .openapi('MaximumEventAgeInSeconds')

const FunctionEventInvokeConfigSchema = z
  .object({
    LastModified: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the configuration was last updated.' }),
    ).exactOptional(),
    FunctionArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the function.' }),
    ).exactOptional(),
    MaximumRetryAttempts: MaximumRetryAttemptsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of times to retry when the function returns an error.',
        }),
    ).exactOptional(),
    MaximumEventAgeInSeconds: MaximumEventAgeInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum age of a request that Lambda sends to a function for processing.',
        }),
    ).exactOptional(),
    DestinationConfig: DestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A destination for events after they have been sent to a function for processing.</p> <p class="title"> <b>Destinations</b> </p> <ul> <li> <p> <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p> </li> <li> <p> <b>Queue</b> - The ARN of a standard SQS queue.</p> </li> <li> <p> <b>Topic</b> - The ARN of a standard SNS topic.</p> </li> <li> <p> <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FunctionEventInvokeConfig')

const GetFunctionUrlConfigResponseSchema = z
  .object({
    FunctionUrl: FunctionUrlSchema.and(
      z.any().openapi({ description: 'The HTTP URL endpoint for your function.' }),
    ),
    FunctionArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of your function.' }),
    ),
    AuthType: FunctionUrlAuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
        }),
    ),
    Cors: CorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ),
    InvokeMode: InvokeModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FunctionUrl', 'FunctionArn', 'AuthType', 'CreationTime', 'LastModifiedTime'],
  })
  .openapi('GetFunctionUrlConfigResponse')

const LayerVersionContentOutputSchema = z
  .object({
    Location: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A link to the layer archive in Amazon S3 that is valid for 10 minutes.',
        }),
    ).exactOptional(),
    CodeSha256: StringSchema.and(
      z.any().openapi({ description: 'The SHA-256 hash of the layer archive.' }),
    ).exactOptional(),
    CodeSize: LongSchema.and(
      z.any().openapi({ description: 'The size of the layer archive in bytes.' }),
    ).exactOptional(),
    SigningProfileVersionArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for a signing profile version.' }),
    ).exactOptional(),
    SigningJobArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of a signing job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.',
    required: [],
  })
  .openapi('LayerVersionContentOutput')

const LayerArnSchema = z
  .string()
  .regex(/arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+/)
  .min(1)
  .max(140)
  .openapi('LayerArn')

const LayerVersionNumberSchema = z.int().openapi('LayerVersionNumber')

const CompatibleRuntimesSchema = z.array(RuntimeSchema).max(15).openapi('CompatibleRuntimes')

const LicenseInfoSchema = z.string().max(512).openapi('LicenseInfo')

const CompatibleArchitecturesSchema = z
  .array(ArchitectureSchema)
  .max(2)
  .openapi('CompatibleArchitectures')

const GetLayerVersionResponseSchema = z
  .object({
    Content: LayerVersionContentOutputSchema.and(
      z.any().openapi({ description: 'Details about the layer version.' }),
    ).exactOptional(),
    LayerArn: LayerArnSchema.and(
      z.any().openapi({ description: 'The ARN of the layer.' }),
    ).exactOptional(),
    LayerVersionArn: LayerVersionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the layer version.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the version.' }),
    ).exactOptional(),
    CreatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ).exactOptional(),
    Version: LayerVersionNumberSchema.and(
      z.any().openapi({ description: 'The version number.' }),
    ).exactOptional(),
    CompatibleRuntimes: CompatibleRuntimesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The layer\'s compatible runtimes.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
        }),
    ).exactOptional(),
    LicenseInfo: LicenseInfoSchema.and(
      z.any().openapi({ description: "The layer's software license." }),
    ).exactOptional(),
    CompatibleArchitectures: CompatibleArchitecturesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLayerVersionResponse')

const GetLayerVersionPolicyResponseSchema = z
  .object({
    Policy: StringSchema.and(
      z.any().openapi({ description: 'The policy document.' }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the current revision of the policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLayerVersionPolicyResponse')

const GetPolicyResponseSchema = z
  .object({
    Policy: StringSchema.and(
      z.any().openapi({ description: 'The resource-based policy.' }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the current revision of the policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPolicyResponse')

const PositiveIntegerSchema = z.int().min(1).openapi('PositiveInteger')

const NonNegativeIntegerSchema = z.int().min(0).openapi('NonNegativeInteger')

const ProvisionedConcurrencyStatusEnumSchema = z
  .enum(['IN_PROGRESS', 'READY', 'FAILED'])
  .openapi('ProvisionedConcurrencyStatusEnum')

const GetProvisionedConcurrencyConfigResponseSchema = z
  .object({
    RequestedProvisionedConcurrentExecutions: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'The amount of provisioned concurrency requested.' }),
    ).exactOptional(),
    AvailableProvisionedConcurrentExecutions: NonNegativeIntegerSchema.and(
      z.any().openapi({ description: 'The amount of provisioned concurrency available.' }),
    ).exactOptional(),
    AllocatedProvisionedConcurrentExecutions: NonNegativeIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.',
        }),
    ).exactOptional(),
    Status: ProvisionedConcurrencyStatusEnumSchema.and(
      z.any().openapi({ description: 'The status of the allocation process.' }),
    ).exactOptional(),
    StatusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For failed allocations, the reason that provisioned concurrency could not be allocated.',
        }),
    ).exactOptional(),
    LastModified: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetProvisionedConcurrencyConfigResponse')

const ProvisionedConcurrencyConfigNotFoundExceptionSchema = z
  .any()
  .openapi('ProvisionedConcurrencyConfigNotFoundException')

const UpdateRuntimeOnSchema = z
  .enum(['Auto', 'Manual', 'FunctionUpdate'])
  .openapi('UpdateRuntimeOn')

const GetRuntimeManagementConfigResponseSchema = z
  .object({
    UpdateRuntimeOn: UpdateRuntimeOnSchema.and(
      z.any().openapi({ description: 'The current runtime update mode of the function.' }),
    ).exactOptional(),
    RuntimeVersionArn: RuntimeVersionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the runtime the function is configured to use. If the runtime update mode is <b>Manual</b>, the ARN is returned, otherwise <code>null</code> is returned.',
        }),
    ).exactOptional(),
    FunctionArn: NameSpacedFunctionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of your function.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRuntimeManagementConfigResponse')

const InvocationResponseSchema = z
  .object({
    StatusCode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP status code is in the 200 range for a successful request. For the <code>RequestResponse</code> invocation type, this status code is 200. For the <code>Event</code> invocation type, this status code is 202. For the <code>DryRun</code> invocation type, the status code is 204.',
        }),
    ).exactOptional(),
    Payload: BlobSchema.and(
      z.any().openapi({ description: 'The response from the function, or an error object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvocationResponse')

const InvalidRequestContentExceptionSchema = z.any().openapi('InvalidRequestContentException')

const RequestTooLargeExceptionSchema = z.any().openapi('RequestTooLargeException')

const UnsupportedMediaTypeExceptionSchema = z.any().openapi('UnsupportedMediaTypeException')

const EC2UnexpectedExceptionSchema = z.any().openapi('EC2UnexpectedException')

const SubnetIPAddressLimitReachedExceptionSchema = z
  .any()
  .openapi('SubnetIPAddressLimitReachedException')

const ENILimitReachedExceptionSchema = z.any().openapi('ENILimitReachedException')

const EFSMountConnectivityExceptionSchema = z.any().openapi('EFSMountConnectivityException')

const EFSMountFailureExceptionSchema = z.any().openapi('EFSMountFailureException')

const EFSMountTimeoutExceptionSchema = z.any().openapi('EFSMountTimeoutException')

const EFSIOExceptionSchema = z.any().openapi('EFSIOException')

const SnapStartExceptionSchema = z.any().openapi('SnapStartException')

const SnapStartTimeoutExceptionSchema = z.any().openapi('SnapStartTimeoutException')

const SnapStartNotReadyExceptionSchema = z.any().openapi('SnapStartNotReadyException')

const EC2ThrottledExceptionSchema = z.any().openapi('EC2ThrottledException')

const EC2AccessDeniedExceptionSchema = z.any().openapi('EC2AccessDeniedException')

const InvalidSubnetIDExceptionSchema = z.any().openapi('InvalidSubnetIDException')

const InvalidSecurityGroupIDExceptionSchema = z.any().openapi('InvalidSecurityGroupIDException')

const InvalidZipFileExceptionSchema = z.any().openapi('InvalidZipFileException')

const KMSDisabledExceptionSchema = z.any().openapi('KMSDisabledException')

const KMSInvalidStateExceptionSchema = z.any().openapi('KMSInvalidStateException')

const KMSAccessDeniedExceptionSchema = z.any().openapi('KMSAccessDeniedException')

const KMSNotFoundExceptionSchema = z.any().openapi('KMSNotFoundException')

const InvalidRuntimeExceptionSchema = z.any().openapi('InvalidRuntimeException')

const ResourceNotReadyExceptionSchema = z.any().openapi('ResourceNotReadyException')

const RecursiveInvocationExceptionSchema = z.any().openapi('RecursiveInvocationException')

const HttpStatusSchema = z.int().openapi('HttpStatus')

const InvokeAsyncResponseSchema = z
  .object({
    Status: HttpStatusSchema.and(
      z.any().openapi({ description: 'The status code.' }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    description:
      'A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation.',
    required: [],
  })
  .openapi('InvokeAsyncResponse')

const InvokeResponseStreamUpdateSchema = z
  .object({
    Payload: BlobSchema.and(
      z.any().openapi({ description: 'Data returned by your Lambda function.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A chunk of the streamed response payload.', required: [] })
  .openapi('InvokeResponseStreamUpdate')

const InvokeWithResponseStreamCompleteEventSchema = z
  .object({
    ErrorCode: StringSchema.and(z.any().openapi({ description: 'An error code.' })).exactOptional(),
    ErrorDetails: StringSchema.and(
      z.any().openapi({ description: 'The details of any returned error.' }),
    ).exactOptional(),
    LogResult: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The last 4 KB of the execution log, which is base64-encoded.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A response confirming that the event stream is complete.',
    required: [],
  })
  .openapi('InvokeWithResponseStreamCompleteEvent')

const InvokeWithResponseStreamResponseEventSchema = z
  .object({
    PayloadChunk: InvokeResponseStreamUpdateSchema.and(
      z.any().openapi({ description: 'A chunk of the streamed response payload.' }),
    ).exactOptional(),
    InvokeComplete: InvokeWithResponseStreamCompleteEventSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that's returned when the stream has ended and all the payload chunks have been returned.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that includes a chunk of the response payload. When the stream has ended, Lambda includes a <code>InvokeComplete</code> object.',
    required: [],
  })
  .openapi('InvokeWithResponseStreamResponseEvent')

const InvokeWithResponseStreamResponseSchema = z
  .object({
    StatusCode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For a successful request, the HTTP status code is in the 200 range. For the <code>RequestResponse</code> invocation type, this status code is 200. For the <code>DryRun</code> invocation type, this status code is 204.',
        }),
    ).exactOptional(),
    EventStream: InvokeWithResponseStreamResponseEventSchema.and(
      z.any().openapi({ description: 'The stream of response payloads.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvokeWithResponseStreamResponse')

const AliasListSchema = z.array(AliasConfigurationSchema).openapi('AliasList')

const ListAliasesResponseSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
    Aliases: AliasListSchema.and(
      z.any().openapi({ description: 'A list of aliases.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAliasesResponse')

const CodeSigningConfigListSchema = z
  .array(CodeSigningConfigSchema)
  .openapi('CodeSigningConfigList')

const ListCodeSigningConfigsResponseSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
    CodeSigningConfigs: CodeSigningConfigListSchema.and(
      z.any().openapi({ description: 'The code signing configurations' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCodeSigningConfigsResponse')

const EventSourceMappingsListSchema = z
  .array(EventSourceMappingConfigurationSchema)
  .openapi('EventSourceMappingsList')

const ListEventSourceMappingsResponseSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A pagination token that's returned when the response doesn't contain all event source mappings.",
        }),
    ).exactOptional(),
    EventSourceMappings: EventSourceMappingsListSchema.and(
      z.any().openapi({ description: 'A list of event source mappings.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventSourceMappingsResponse')

const FunctionEventInvokeConfigListSchema = z
  .array(FunctionEventInvokeConfigSchema)
  .openapi('FunctionEventInvokeConfigList')

const ListFunctionEventInvokeConfigsResponseSchema = z
  .object({
    FunctionEventInvokeConfigs: FunctionEventInvokeConfigListSchema.and(
      z.any().openapi({ description: 'A list of configurations.' }),
    ).exactOptional(),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFunctionEventInvokeConfigsResponse')

const FunctionUrlConfigSchema = z
  .object({
    FunctionUrl: FunctionUrlSchema.and(
      z.any().openapi({ description: 'The HTTP URL endpoint for your function.' }),
    ),
    FunctionArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of your function.' }),
    ),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ),
    Cors: CorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.',
        }),
    ).exactOptional(),
    AuthType: FunctionUrlAuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
        }),
    ),
    InvokeMode: InvokeModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FunctionUrl', 'FunctionArn', 'CreationTime', 'LastModifiedTime', 'AuthType'],
    description: 'Details about a Lambda function URL.',
  })
  .openapi('FunctionUrlConfig')

const FunctionUrlConfigListSchema = z
  .array(FunctionUrlConfigSchema)
  .openapi('FunctionUrlConfigList')

const ListFunctionUrlConfigsResponseSchema = z
  .object({
    FunctionUrlConfigs: FunctionUrlConfigListSchema.and(
      z.any().openapi({ description: 'A list of function URL configurations.' }),
    ),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FunctionUrlConfigs'] })
  .openapi('ListFunctionUrlConfigsResponse')

const FunctionListSchema = z.array(FunctionConfigurationSchema).openapi('FunctionList')

const ListFunctionsResponseSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
    Functions: FunctionListSchema.and(
      z.any().openapi({ description: 'A list of Lambda functions.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of Lambda functions.', required: [] })
  .openapi('ListFunctionsResponse')

const FunctionArnListSchema = z.array(FunctionArnSchema).openapi('FunctionArnList')

const ListFunctionsByCodeSigningConfigResponseSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
    FunctionArns: FunctionArnListSchema.and(
      z.any().openapi({ description: 'The function ARNs. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFunctionsByCodeSigningConfigResponse')

const LayerVersionsListItemSchema = z
  .object({
    LayerVersionArn: LayerVersionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the layer version.' }),
    ).exactOptional(),
    Version: LayerVersionNumberSchema.and(
      z.any().openapi({ description: 'The version number.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the version.' }),
    ).exactOptional(),
    CreatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the version was created, in ISO 8601 format. For example, <code>2018-11-27T15:10:45.123+0000</code>.',
        }),
    ).exactOptional(),
    CompatibleRuntimes: CompatibleRuntimesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The layer\'s compatible runtimes.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
        }),
    ).exactOptional(),
    LicenseInfo: LicenseInfoSchema.and(
      z.any().openapi({ description: "The layer's open-source license." }),
    ).exactOptional(),
    CompatibleArchitectures: CompatibleArchitecturesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.',
    required: [],
  })
  .openapi('LayerVersionsListItem')

const LayerVersionsListSchema = z.array(LayerVersionsListItemSchema).openapi('LayerVersionsList')

const ListLayerVersionsResponseSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A pagination token returned when the response doesn't contain all versions.",
        }),
    ).exactOptional(),
    LayerVersions: LayerVersionsListSchema.and(
      z.any().openapi({ description: 'A list of versions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLayerVersionsResponse')

const LayerNameSchema = z
  .string()
  .regex(/(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+/)
  .min(1)
  .max(140)
  .openapi('LayerName')

const LayersListItemSchema = z
  .object({
    LayerName: LayerNameSchema.and(
      z.any().openapi({ description: 'The name of the layer.' }),
    ).exactOptional(),
    LayerArn: LayerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the function layer.' }),
    ).exactOptional(),
    LatestMatchingVersion: LayerVersionsListItemSchema.and(
      z.any().openapi({ description: 'The newest version of the layer.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.',
    required: [],
  })
  .openapi('LayersListItem')

const LayersListSchema = z.array(LayersListItemSchema).openapi('LayersList')

const ListLayersResponseSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description: "A pagination token returned when the response doesn't contain all layers.",
        }),
    ).exactOptional(),
    Layers: LayersListSchema.and(
      z.any().openapi({ description: 'A list of function layers.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLayersResponse')

const ProvisionedConcurrencyConfigListItemSchema = z
  .object({
    FunctionArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the alias or version.' }),
    ).exactOptional(),
    RequestedProvisionedConcurrentExecutions: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'The amount of provisioned concurrency requested.' }),
    ).exactOptional(),
    AvailableProvisionedConcurrentExecutions: NonNegativeIntegerSchema.and(
      z.any().openapi({ description: 'The amount of provisioned concurrency available.' }),
    ).exactOptional(),
    AllocatedProvisionedConcurrentExecutions: NonNegativeIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.',
        }),
    ).exactOptional(),
    Status: ProvisionedConcurrencyStatusEnumSchema.and(
      z.any().openapi({ description: 'The status of the allocation process.' }),
    ).exactOptional(),
    StatusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For failed allocations, the reason that provisioned concurrency could not be allocated.',
        }),
    ).exactOptional(),
    LastModified: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the provisioned concurrency configuration for a function alias or version.',
    required: [],
  })
  .openapi('ProvisionedConcurrencyConfigListItem')

const ProvisionedConcurrencyConfigListSchema = z
  .array(ProvisionedConcurrencyConfigListItemSchema)
  .openapi('ProvisionedConcurrencyConfigList')

const ListProvisionedConcurrencyConfigsResponseSchema = z
  .object({
    ProvisionedConcurrencyConfigs: ProvisionedConcurrencyConfigListSchema.and(
      z.any().openapi({ description: 'A list of provisioned concurrency configurations.' }),
    ).exactOptional(),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProvisionedConcurrencyConfigsResponse')

const ListTagsResponseSchema = z
  .object({
    Tags: TagsSchema.and(z.any().openapi({ description: "The function's tags." })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsResponse')

const ListVersionsByFunctionResponseSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
    Versions: FunctionListSchema.and(
      z.any().openapi({ description: 'A list of Lambda function versions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListVersionsByFunctionResponse')

const PublishLayerVersionResponseSchema = z
  .object({
    Content: LayerVersionContentOutputSchema.and(
      z.any().openapi({ description: 'Details about the layer version.' }),
    ).exactOptional(),
    LayerArn: LayerArnSchema.and(
      z.any().openapi({ description: 'The ARN of the layer.' }),
    ).exactOptional(),
    LayerVersionArn: LayerVersionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the layer version.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the version.' }),
    ).exactOptional(),
    CreatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ).exactOptional(),
    Version: LayerVersionNumberSchema.and(
      z.any().openapi({ description: 'The version number.' }),
    ).exactOptional(),
    CompatibleRuntimes: CompatibleRuntimesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The layer\'s compatible runtimes.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
        }),
    ).exactOptional(),
    LicenseInfo: LicenseInfoSchema.and(
      z.any().openapi({ description: "The layer's software license." }),
    ).exactOptional(),
    CompatibleArchitectures: CompatibleArchitecturesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishLayerVersionResponse')

const PutFunctionCodeSigningConfigResponseSchema = z
  .object({
    CodeSigningConfigArn: CodeSigningConfigArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The The Amazon Resource Name (ARN) of the code signing configuration.',
        }),
    ),
    FunctionName: FunctionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
        }),
    ),
  })
  .openapi({ required: ['CodeSigningConfigArn', 'FunctionName'] })
  .openapi('PutFunctionCodeSigningConfigResponse')

const PutProvisionedConcurrencyConfigResponseSchema = z
  .object({
    RequestedProvisionedConcurrentExecutions: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'The amount of provisioned concurrency requested.' }),
    ).exactOptional(),
    AvailableProvisionedConcurrentExecutions: NonNegativeIntegerSchema.and(
      z.any().openapi({ description: 'The amount of provisioned concurrency available.' }),
    ).exactOptional(),
    AllocatedProvisionedConcurrentExecutions: NonNegativeIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.',
        }),
    ).exactOptional(),
    Status: ProvisionedConcurrencyStatusEnumSchema.and(
      z.any().openapi({ description: 'The status of the allocation process.' }),
    ).exactOptional(),
    StatusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For failed allocations, the reason that provisioned concurrency could not be allocated.',
        }),
    ).exactOptional(),
    LastModified: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutProvisionedConcurrencyConfigResponse')

const PutRuntimeManagementConfigResponseSchema = z
  .object({
    UpdateRuntimeOn: UpdateRuntimeOnSchema.and(
      z.any().openapi({ description: 'The runtime update mode.' }),
    ),
    FunctionArn: FunctionArnSchema.and(z.any().openapi({ description: 'The ARN of the function' })),
    RuntimeVersionArn: RuntimeVersionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the runtime the function is configured to use. If the runtime update mode is <b>manual</b>, the ARN is returned, otherwise <code>null</code> is returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['UpdateRuntimeOn', 'FunctionArn'] })
  .openapi('PutRuntimeManagementConfigResponse')

const TagKeySchema = z.string().openapi('TagKey')

const UpdateCodeSigningConfigResponseSchema = z
  .object({
    CodeSigningConfig: CodeSigningConfigSchema.and(
      z.any().openapi({ description: 'The code signing configuration' }),
    ),
  })
  .openapi({ required: ['CodeSigningConfig'] })
  .openapi('UpdateCodeSigningConfigResponse')

const UpdateFunctionUrlConfigResponseSchema = z
  .object({
    FunctionUrl: FunctionUrlSchema.and(
      z.any().openapi({ description: 'The HTTP URL endpoint for your function.' }),
    ),
    FunctionArn: FunctionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of your function.' }),
    ),
    AuthType: FunctionUrlAuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
        }),
    ),
    Cors: CorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).',
        }),
    ),
    InvokeMode: InvokeModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FunctionUrl', 'FunctionArn', 'AuthType', 'CreationTime', 'LastModifiedTime'],
  })
  .openapi('UpdateFunctionUrlConfigResponse')

const ActionSchema = z
  .string()
  .regex(/(lambda:[*]|lambda:[a-zA-Z]+|[*])/)
  .openapi('Action')

const StatementIdSchema = z
  .string()
  .regex(/([a-zA-Z0-9-_]+)/)
  .min(1)
  .max(100)
  .openapi('StatementId')

const LayerPermissionAllowedActionSchema = z
  .string()
  .regex(/lambda:GetLayerVersion/)
  .max(22)
  .openapi('LayerPermissionAllowedAction')

const LayerPermissionAllowedPrincipalSchema = z
  .string()
  .regex(/\d{12}|\*|arn:(aws[a-zA-Z-]*):iam::\d{12}:root/)
  .openapi('LayerPermissionAllowedPrincipal')

const OrganizationIdSchema = z
  .string()
  .regex(/o-[a-z0-9]{10,32}/)
  .max(34)
  .openapi('OrganizationId')

const AddLayerVersionPermissionRequestSchema = z
  .object({
    StatementId: StatementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that distinguishes the policy from others on the same layer version.',
        }),
    ),
    Action: LayerPermissionAllowedActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.',
        }),
    ),
    Principal: LayerPermissionAllowedPrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'An account ID, or <code>*</code> to grant layer usage permission to all accounts in an organization, or all Amazon Web Services accounts (if <code>organizationId</code> is not specified). For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer. ',
        }),
    ),
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StatementId', 'Action', 'Principal'],
    title: 'AddLayerVersionPermissionRequest',
  })
  .openapi('AddLayerVersionPermissionRequest')

const PrincipalSchema = z
  .string()
  .regex(/[^\s]+/)
  .openapi('Principal')

const SourceOwnerSchema = z
  .string()
  .regex(/\d{12}/)
  .max(12)
  .openapi('SourceOwner')

const EventSourceTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9._\-]+/)
  .min(0)
  .max(256)
  .openapi('EventSourceToken')

const QualifierSchema = z
  .string()
  .regex(/(|[a-zA-Z0-9$_-]+)/)
  .min(1)
  .max(128)
  .openapi('Qualifier')

const PrincipalOrgIDSchema = z
  .string()
  .regex(/^o-[a-z0-9]{10,32}$/)
  .min(12)
  .max(34)
  .openapi('PrincipalOrgID')

const AddPermissionRequestSchema = z
  .object({
    StatementId: StatementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A statement identifier that differentiates the statement from others in the same policy.',
        }),
    ),
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.',
        }),
    ),
    Principal: PrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Service or Amazon Web Services account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.',
        }),
    ),
    SourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For Amazon Web Services, the ARN of the Amazon Web Services resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.</p> <p>Note that Lambda configures the comparison using the <code>StringLike</code> operator.</p>',
        }),
    ).exactOptional(),
    SourceAccount: SourceOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For Amazon Web Service, the ID of the Amazon Web Services account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.',
        }),
    ).exactOptional(),
    EventSourceToken: EventSourceTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'For Alexa Smart Home functions, a token that the invoker must supply.',
        }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.",
        }),
    ).exactOptional(),
    PrincipalOrgID: PrincipalOrgIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for your organization in Organizations. Use this to grant permissions to all the Amazon Web Services accounts under this organization.',
        }),
    ).exactOptional(),
    FunctionUrlAuthType: FunctionUrlAuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StatementId', 'Action', 'Principal'], title: 'AddPermissionRequest' })
  .openapi('AddPermissionRequest')

const AdditionalVersionSchema = z
  .string()
  .regex(/[0-9]+/)
  .min(1)
  .max(1024)
  .openapi('AdditionalVersion')

const BlobStreamSchema = z.string().openapi('BlobStream')

const BooleanSchema = z.boolean().openapi('Boolean')

const CreateAliasRequestSchema = z
  .object({
    Name: AliasSchema.and(z.any().openapi({ description: 'The name of the alias.' })),
    FunctionVersion: VersionSchema.and(
      z.any().openapi({ description: 'The function version that the alias invokes.' }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the alias.' }),
    ).exactOptional(),
    RoutingConfig: AliasRoutingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing configuration</a> of the alias.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'FunctionVersion'], title: 'CreateAliasRequest' })
  .openapi('CreateAliasRequest')

const CreateCodeSigningConfigRequestSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Descriptive name for this code signing configuration.' }),
    ).exactOptional(),
    AllowedPublishers: AllowedPublishersSchema.and(
      z.any().openapi({ description: 'Signing profiles for this code signing configuration.' }),
    ),
    CodeSigningPolicies: CodeSigningPoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code signing policies define the actions to take if the validation checks fail. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AllowedPublishers'], title: 'CreateCodeSigningConfigRequest' })
  .openapi('CreateCodeSigningConfigRequest')

const EnabledSchema = z.boolean().openapi('Enabled')

const CreateEventSourceMappingRequestSchema = z
  .object({
    EventSourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FunctionName: FunctionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it\'s limited to 64 characters in length.</p>',
        }),
    ),
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>',
        }),
    ).exactOptional(),
    BatchSize: BatchSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FilterCriteria: FilterCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.',
        }),
    ).exactOptional(),
    MaximumBatchingWindowInSeconds: MaximumBatchingWindowInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>',
        }),
    ).exactOptional(),
    ParallelizationFactor: ParallelizationFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.',
        }),
    ).exactOptional(),
    StartingPosition: EventSourcePositionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.',
        }),
    ).exactOptional(),
    StartingPositionTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. <code>StartingPositionTimestamp</code> cannot be in the future.',
        }),
    ).exactOptional(),
    DestinationConfig: DestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) A standard Amazon SQS queue or standard Amazon SNS topic destination for discarded records.',
        }),
    ).exactOptional(),
    MaximumRecordAgeInSeconds: MaximumRecordAgeInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).',
        }),
    ).exactOptional(),
    BisectBatchOnFunctionError: BisectBatchOnFunctionErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.',
        }),
    ).exactOptional(),
    MaximumRetryAttempts: MaximumRetryAttemptsEventSourceMappingSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.',
        }),
    ).exactOptional(),
    TumblingWindowInSeconds: TumblingWindowInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.',
        }),
    ).exactOptional(),
    Topics: TopicsSchema.and(
      z.any().openapi({ description: 'The name of the Kafka topic.' }),
    ).exactOptional(),
    Queues: QueuesSchema.and(
      z
        .any()
        .openapi({
          description: ' (MQ) The name of the Amazon MQ broker destination queue to consume. ',
        }),
    ).exactOptional(),
    SourceAccessConfigurations: SourceAccessConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of authentication protocols or VPC components required to secure your event source.',
        }),
    ).exactOptional(),
    SelfManagedEventSource: SelfManagedEventSourceSchema.and(
      z
        .any()
        .openapi({ description: 'The self-managed Apache Kafka cluster to receive records from.' }),
    ).exactOptional(),
    FunctionResponseTypes: FunctionResponseTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.',
        }),
    ).exactOptional(),
    AmazonManagedKafkaEventSourceConfig: AmazonManagedKafkaEventSourceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.',
        }),
    ).exactOptional(),
    SelfManagedKafkaEventSourceConfig: SelfManagedKafkaEventSourceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specific configuration settings for a self-managed Apache Kafka event source.',
        }),
    ).exactOptional(),
    ScalingConfig: ScalingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.',
        }),
    ).exactOptional(),
    DocumentDBEventSourceConfig: DocumentDBEventSourceConfigSchema.and(
      z
        .any()
        .openapi({ description: 'Specific configuration settings for a DocumentDB event source.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FunctionName'], title: 'CreateEventSourceMappingRequest' })
  .openapi('CreateEventSourceMappingRequest')

const FunctionCodeSchema = z
  .object({
    ZipFile: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you.',
        }),
    ).exactOptional(),
    S3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.',
        }),
    ).exactOptional(),
    S3Key: S3KeySchema.and(
      z.any().openapi({ description: 'The Amazon S3 key of the deployment package.' }),
    ).exactOptional(),
    S3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'For versioned objects, the version of the deployment package object to use.',
        }),
    ).exactOptional(),
    ImageUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.',
    required: [],
  })
  .openapi('FunctionCode')

const VpcConfigSchema = z
  .object({
    SubnetIds: SubnetIdsSchema.and(
      z.any().openapi({ description: 'A list of VPC subnet IDs.' }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z.any().openapi({ description: 'A list of VPC security group IDs.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.',
    required: [],
  })
  .openapi('VpcConfig')

const EnvironmentSchema = z
  .object({
    Variables: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Environment variable key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">Using Lambda environment variables</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.",
    required: [],
  })
  .openapi('Environment')

const TracingConfigSchema = z
  .object({
    Mode: TracingModeSchema.and(
      z.any().openapi({ description: 'The tracing mode.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.',
    required: [],
  })
  .openapi('TracingConfig')

const LayerListSchema = z.array(LayerVersionArnSchema).openapi('LayerList')

const SnapStartSchema = z
  .object({
    ApplyOn: SnapStartApplyOnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.',
    required: [],
  })
  .openapi('SnapStart')

const CreateFunctionRequestSchema = z
  .object({
    FunctionName: FunctionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
        }),
    ),
    Runtime: RuntimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
        }),
    ).exactOptional(),
    Role: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Resource Name (ARN) of the function's execution role.",
        }),
    ),
    Handler: HandlerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.',
        }),
    ).exactOptional(),
    Code: FunctionCodeSchema.and(z.any().openapi({ description: 'The code for the function.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the function.' }),
    ).exactOptional(),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.',
        }),
    ).exactOptional(),
    MemorySize: MemorySizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.',
        }),
    ).exactOptional(),
    Publish: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Set to true to publish the first version of the function during creation.',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.',
        }),
    ).exactOptional(),
    PackageType: PackageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of deployment package. Set to <code>Image</code> for container image and set to <code>Zip</code> for .zip file archive.',
        }),
    ).exactOptional(),
    DeadLetterConfig: DeadLetterConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">Dead-letter queues</a>.',
        }),
    ).exactOptional(),
    Environment: EnvironmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Environment variables that are accessible from function code during execution.',
        }),
    ).exactOptional(),
    KMSKeyArn: KMSKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption\">environment variables</a>. When <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html\">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key.",
        }),
    ).exactOptional(),
    TracingConfig: TracingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a>.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function.',
        }),
    ).exactOptional(),
    Layers: LayerListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function\'s execution environment. Specify each layer by its ARN, including the version.',
        }),
    ).exactOptional(),
    FileSystemConfigs: FileSystemConfigListSchema.and(
      z.any().openapi({ description: 'Connection settings for an Amazon EFS file system.' }),
    ).exactOptional(),
    ImageConfig: ImageConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Container image <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-images.html#configuration-images-settings">configuration values</a> that override the values in the container image Dockerfile.',
        }),
    ).exactOptional(),
    CodeSigningConfigArn: CodeSigningConfigArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.',
        }),
    ).exactOptional(),
    Architectures: ArchitecturesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.',
        }),
    ).exactOptional(),
    EphemeralStorage: EphemeralStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB.",
        }),
    ).exactOptional(),
    SnapStart: SnapStartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FunctionName', 'Role', 'Code'], title: 'CreateFunctionRequest' })
  .openapi('CreateFunctionRequest')

const FunctionUrlQualifierSchema = z
  .string()
  .regex(/(^\$LATEST$)|((?!^[0-9]+$)([a-zA-Z0-9-_]+))/)
  .min(1)
  .max(128)
  .openapi('FunctionUrlQualifier')

const CreateFunctionUrlConfigRequestSchema = z
  .object({
    AuthType: FunctionUrlAuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
        }),
    ),
    Cors: CorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.',
        }),
    ).exactOptional(),
    InvokeMode: InvokeModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AuthType'], title: 'CreateFunctionUrlConfigRequest' })
  .openapi('CreateFunctionUrlConfigRequest')

const DeleteAliasRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAliasRequest' })
  .openapi('DeleteAliasRequest')

const DeleteCodeSigningConfigRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCodeSigningConfigRequest' })
  .openapi('DeleteCodeSigningConfigRequest')

const DeleteEventSourceMappingRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEventSourceMappingRequest' })
  .openapi('DeleteEventSourceMappingRequest')

const DeleteFunctionCodeSigningConfigRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFunctionCodeSigningConfigRequest' })
  .openapi('DeleteFunctionCodeSigningConfigRequest')

const DeleteFunctionConcurrencyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFunctionConcurrencyRequest' })
  .openapi('DeleteFunctionConcurrencyRequest')

const DeleteFunctionEventInvokeConfigRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFunctionEventInvokeConfigRequest' })
  .openapi('DeleteFunctionEventInvokeConfigRequest')

const DeleteFunctionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFunctionRequest' })
  .openapi('DeleteFunctionRequest')

const DeleteFunctionUrlConfigRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFunctionUrlConfigRequest' })
  .openapi('DeleteFunctionUrlConfigRequest')

const DeleteLayerVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteLayerVersionRequest' })
  .openapi('DeleteLayerVersionRequest')

const DeleteProvisionedConcurrencyConfigRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteProvisionedConcurrencyConfigRequest' })
  .openapi('DeleteProvisionedConcurrencyConfigRequest')

const EndPointTypeSchema = z.literal('KAFKA_BOOTSTRAP_SERVERS').openapi('EndPointType')

const EnvironmentVariableNameSchema = z
  .string()
  .regex(/[a-zA-Z]([a-zA-Z0-9_])+/)
  .openapi('EnvironmentVariableName')

const FunctionVersionSchema = z.literal('ALL').openapi('FunctionVersion')

const GetAccountSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccountSettingsRequest' })
  .openapi('GetAccountSettingsRequest')

const GetAliasRequestSchema = z
  .object({})
  .openapi({ title: 'GetAliasRequest' })
  .openapi('GetAliasRequest')

const GetCodeSigningConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetCodeSigningConfigRequest' })
  .openapi('GetCodeSigningConfigRequest')

const GetEventSourceMappingRequestSchema = z
  .object({})
  .openapi({ title: 'GetEventSourceMappingRequest' })
  .openapi('GetEventSourceMappingRequest')

const GetFunctionCodeSigningConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetFunctionCodeSigningConfigRequest' })
  .openapi('GetFunctionCodeSigningConfigRequest')

const GetFunctionConcurrencyRequestSchema = z
  .object({})
  .openapi({ title: 'GetFunctionConcurrencyRequest' })
  .openapi('GetFunctionConcurrencyRequest')

const GetFunctionConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetFunctionConfigurationRequest' })
  .openapi('GetFunctionConfigurationRequest')

const GetFunctionEventInvokeConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetFunctionEventInvokeConfigRequest' })
  .openapi('GetFunctionEventInvokeConfigRequest')

const GetFunctionRequestSchema = z
  .object({})
  .openapi({ title: 'GetFunctionRequest' })
  .openapi('GetFunctionRequest')

const GetFunctionUrlConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetFunctionUrlConfigRequest' })
  .openapi('GetFunctionUrlConfigRequest')

const GetLayerVersionByArnRequestSchema = z
  .object({})
  .openapi({ title: 'GetLayerVersionByArnRequest' })
  .openapi('GetLayerVersionByArnRequest')

const GetLayerVersionPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetLayerVersionPolicyRequest' })
  .openapi('GetLayerVersionPolicyRequest')

const GetLayerVersionRequestSchema = z
  .object({})
  .openapi({ title: 'GetLayerVersionRequest' })
  .openapi('GetLayerVersionRequest')

const GetPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetPolicyRequest' })
  .openapi('GetPolicyRequest')

const GetProvisionedConcurrencyConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetProvisionedConcurrencyConfigRequest' })
  .openapi('GetProvisionedConcurrencyConfigRequest')

const GetRuntimeManagementConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetRuntimeManagementConfigRequest' })
  .openapi('GetRuntimeManagementConfigRequest')

const InvocationTypeSchema = z
  .enum(['Event', 'RequestResponse', 'DryRun'])
  .openapi('InvocationType')

const LogTypeSchema = z.enum(['None', 'Tail']).openapi('LogType')

const InvocationRequestSchema = z
  .object({
    Payload: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload \'{ "key": "value" }\'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'InvocationRequest', required: [] })
  .openapi('InvocationRequest')

const InvokeAsyncRequestSchema = z
  .object({
    InvokeArgs: BlobStreamSchema.and(
      z
        .any()
        .openapi({
          description: 'The JSON that you want to provide to your Lambda function as input.',
        }),
    ),
  })
  .openapi({ required: ['InvokeArgs'], deprecated: true, title: 'InvokeAsyncRequest' })
  .openapi('InvokeAsyncRequest')

const ResponseStreamingInvocationTypeSchema = z
  .enum(['RequestResponse', 'DryRun'])
  .openapi('ResponseStreamingInvocationType')

const InvokeWithResponseStreamRequestSchema = z
  .object({
    Payload: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload \'{ "key": "value" }\'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'InvokeWithResponseStreamRequest', required: [] })
  .openapi('InvokeWithResponseStreamRequest')

const LayerVersionContentInputSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'The Amazon S3 bucket of the layer archive.' }),
    ).exactOptional(),
    S3Key: S3KeySchema.and(
      z.any().openapi({ description: 'The Amazon S3 key of the layer archive.' }),
    ).exactOptional(),
    S3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'For versioned objects, the version of the layer archive object to use.',
        }),
    ).exactOptional(),
    ZipFile: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base64-encoded contents of the layer archive. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.',
    required: [],
  })
  .openapi('LayerVersionContentInput')

const MaxListItemsSchema = z.int().min(1).max(10000).openapi('MaxListItems')

const ListAliasesRequestSchema = z
  .object({})
  .openapi({ title: 'ListAliasesRequest' })
  .openapi('ListAliasesRequest')

const ListCodeSigningConfigsRequestSchema = z
  .object({})
  .openapi({ title: 'ListCodeSigningConfigsRequest' })
  .openapi('ListCodeSigningConfigsRequest')

const ListEventSourceMappingsRequestSchema = z
  .object({})
  .openapi({ title: 'ListEventSourceMappingsRequest' })
  .openapi('ListEventSourceMappingsRequest')

const MaxFunctionEventInvokeConfigListItemsSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('MaxFunctionEventInvokeConfigListItems')

const ListFunctionEventInvokeConfigsRequestSchema = z
  .object({})
  .openapi({ title: 'ListFunctionEventInvokeConfigsRequest' })
  .openapi('ListFunctionEventInvokeConfigsRequest')

const MaxItemsSchema = z.int().min(1).max(50).openapi('MaxItems')

const ListFunctionUrlConfigsRequestSchema = z
  .object({})
  .openapi({ title: 'ListFunctionUrlConfigsRequest' })
  .openapi('ListFunctionUrlConfigsRequest')

const ListFunctionsByCodeSigningConfigRequestSchema = z
  .object({})
  .openapi({ title: 'ListFunctionsByCodeSigningConfigRequest' })
  .openapi('ListFunctionsByCodeSigningConfigRequest')

const MasterRegionSchema = z
  .string()
  .regex(/ALL|[a-z]{2}(-gov)?-[a-z]+-\d{1}/)
  .openapi('MasterRegion')

const ListFunctionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListFunctionsRequest' })
  .openapi('ListFunctionsRequest')

const MaxLayerListItemsSchema = z.int().min(1).max(50).openapi('MaxLayerListItems')

const ListLayerVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListLayerVersionsRequest' })
  .openapi('ListLayerVersionsRequest')

const ListLayersRequestSchema = z
  .object({})
  .openapi({ title: 'ListLayersRequest' })
  .openapi('ListLayersRequest')

const MaxProvisionedConcurrencyConfigListItemsSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('MaxProvisionedConcurrencyConfigListItems')

const ListProvisionedConcurrencyConfigsRequestSchema = z
  .object({})
  .openapi({ title: 'ListProvisionedConcurrencyConfigsRequest' })
  .openapi('ListProvisionedConcurrencyConfigsRequest')

const ListTagsRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsRequest' })
  .openapi('ListTagsRequest')

const ListVersionsByFunctionRequestSchema = z
  .object({})
  .openapi({ title: 'ListVersionsByFunctionRequest' })
  .openapi('ListVersionsByFunctionRequest')

const NamespacedStatementIdSchema = z
  .string()
  .regex(/([a-zA-Z0-9-_.]+)/)
  .min(1)
  .max(100)
  .openapi('NamespacedStatementId')

const PublishLayerVersionRequestSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the version.' }),
    ).exactOptional(),
    Content: LayerVersionContentInputSchema.and(
      z.any().openapi({ description: 'The function layer archive.' }),
    ),
    CompatibleRuntimes: CompatibleRuntimesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
        }),
    ).exactOptional(),
    LicenseInfo: LicenseInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The layer\'s software license. It can be any of the following:</p> <ul> <li> <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example, <code>MIT</code>.</p> </li> <li> <p>The URL of a license hosted on the internet. For example, <code>https://opensource.org/licenses/MIT</code>.</p> </li> <li> <p>The full text of the license.</p> </li> </ul>',
        }),
    ).exactOptional(),
    CompatibleArchitectures: CompatibleArchitecturesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Content'], title: 'PublishLayerVersionRequest' })
  .openapi('PublishLayerVersionRequest')

const PublishVersionRequestSchema = z
  .object({
    CodeSha256: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of <a>UpdateFunctionCode</a>.",
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description for the version to override the description in the function configuration.',
        }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PublishVersionRequest', required: [] })
  .openapi('PublishVersionRequest')

const PutFunctionCodeSigningConfigRequestSchema = z
  .object({
    CodeSigningConfigArn: CodeSigningConfigArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The The Amazon Resource Name (ARN) of the code signing configuration.',
        }),
    ),
  })
  .openapi({ required: ['CodeSigningConfigArn'], title: 'PutFunctionCodeSigningConfigRequest' })
  .openapi('PutFunctionCodeSigningConfigRequest')

const PutFunctionConcurrencyRequestSchema = z
  .object({
    ReservedConcurrentExecutions: ReservedConcurrentExecutionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of simultaneous executions to reserve for the function.',
        }),
    ),
  })
  .openapi({ required: ['ReservedConcurrentExecutions'], title: 'PutFunctionConcurrencyRequest' })
  .openapi('PutFunctionConcurrencyRequest')

const PutFunctionEventInvokeConfigRequestSchema = z
  .object({
    MaximumRetryAttempts: MaximumRetryAttemptsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of times to retry when the function returns an error.',
        }),
    ).exactOptional(),
    MaximumEventAgeInSeconds: MaximumEventAgeInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum age of a request that Lambda sends to a function for processing.',
        }),
    ).exactOptional(),
    DestinationConfig: DestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A destination for events after they have been sent to a function for processing.</p> <p class="title"> <b>Destinations</b> </p> <ul> <li> <p> <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p> </li> <li> <p> <b>Queue</b> - The ARN of a standard SQS queue.</p> </li> <li> <p> <b>Topic</b> - The ARN of a standard SNS topic.</p> </li> <li> <p> <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutFunctionEventInvokeConfigRequest', required: [] })
  .openapi('PutFunctionEventInvokeConfigRequest')

const PutProvisionedConcurrencyConfigRequestSchema = z
  .object({
    ProvisionedConcurrentExecutions: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of provisioned concurrency to allocate for the version or alias.',
        }),
    ),
  })
  .openapi({
    required: ['ProvisionedConcurrentExecutions'],
    title: 'PutProvisionedConcurrencyConfigRequest',
  })
  .openapi('PutProvisionedConcurrencyConfigRequest')

const PutRuntimeManagementConfigRequestSchema = z
  .object({
    UpdateRuntimeOn: UpdateRuntimeOnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the runtime update mode.</p> <ul> <li> <p> <b>Auto (default)</b> - Automatically update to the most recent and secure runtime version using a <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase">Two-phase runtime version rollout</a>. This is the best choice for most customers to ensure they always benefit from runtime updates.</p> </li> <li> <p> <b>Function update</b> - Lambda updates the runtime of your function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.</p> </li> <li> <p> <b>Manual</b> - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback">Roll back a runtime version</a>.</p> </li> </ul>',
        }),
    ),
    RuntimeVersionArn: RuntimeVersionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ARN of the runtime version you want the function to use.</p> <note> <p>This is only required if you're using the <b>Manual</b> runtime update mode.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['UpdateRuntimeOn'], title: 'PutRuntimeManagementConfigRequest' })
  .openapi('PutRuntimeManagementConfigRequest')

const RemoveLayerVersionPermissionRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveLayerVersionPermissionRequest' })
  .openapi('RemoveLayerVersionPermissionRequest')

const RemovePermissionRequestSchema = z
  .object({})
  .openapi({ title: 'RemovePermissionRequest' })
  .openapi('RemovePermissionRequest')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'A list of tags to apply to the function.' }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAliasRequestSchema = z
  .object({
    FunctionVersion: VersionSchema.and(
      z.any().openapi({ description: 'The function version that the alias invokes.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the alias.' }),
    ).exactOptional(),
    RoutingConfig: AliasRoutingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing configuration</a> of the alias.',
        }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateAliasRequest', required: [] })
  .openapi('UpdateAliasRequest')

const UpdateCodeSigningConfigRequestSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Descriptive name for this code signing configuration.' }),
    ).exactOptional(),
    AllowedPublishers: AllowedPublishersSchema.and(
      z.any().openapi({ description: 'Signing profiles for this code signing configuration.' }),
    ).exactOptional(),
    CodeSigningPolicies: CodeSigningPoliciesSchema.and(
      z.any().openapi({ description: 'The code signing policy.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateCodeSigningConfigRequest', required: [] })
  .openapi('UpdateCodeSigningConfigRequest')

const UpdateEventSourceMappingRequestSchema = z
  .object({
    FunctionName: FunctionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it\'s limited to 64 characters in length.</p>',
        }),
    ).exactOptional(),
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>',
        }),
    ).exactOptional(),
    BatchSize: BatchSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FilterCriteria: FilterCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.',
        }),
    ).exactOptional(),
    MaximumBatchingWindowInSeconds: MaximumBatchingWindowInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>',
        }),
    ).exactOptional(),
    DestinationConfig: DestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) A standard Amazon SQS queue or standard Amazon SNS topic destination for discarded records.',
        }),
    ).exactOptional(),
    MaximumRecordAgeInSeconds: MaximumRecordAgeInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).',
        }),
    ).exactOptional(),
    BisectBatchOnFunctionError: BisectBatchOnFunctionErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.',
        }),
    ).exactOptional(),
    MaximumRetryAttempts: MaximumRetryAttemptsEventSourceMappingSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.',
        }),
    ).exactOptional(),
    ParallelizationFactor: ParallelizationFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.',
        }),
    ).exactOptional(),
    SourceAccessConfigurations: SourceAccessConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of authentication protocols or VPC components required to secure your event source.',
        }),
    ).exactOptional(),
    TumblingWindowInSeconds: TumblingWindowInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.',
        }),
    ).exactOptional(),
    FunctionResponseTypes: FunctionResponseTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.',
        }),
    ).exactOptional(),
    ScalingConfig: ScalingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.',
        }),
    ).exactOptional(),
    DocumentDBEventSourceConfig: DocumentDBEventSourceConfigSchema.and(
      z
        .any()
        .openapi({ description: 'Specific configuration settings for a DocumentDB event source.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateEventSourceMappingRequest', required: [] })
  .openapi('UpdateEventSourceMappingRequest')

const UpdateFunctionCodeRequestSchema = z
  .object({
    ZipFile: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you. Use only with a function defined with a .zip file archive deployment package.',
        }),
    ).exactOptional(),
    S3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account. Use only with a function defined with a .zip file archive deployment package.',
        }),
    ).exactOptional(),
    S3Key: S3KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 key of the deployment package. Use only with a function defined with a .zip file archive deployment package.',
        }),
    ).exactOptional(),
    S3ObjectVersion: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'For versioned objects, the version of the deployment package object to use.',
        }),
    ).exactOptional(),
    ImageUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'URI of a container image in the Amazon ECR registry. Do not use for a function defined with a .zip file archive.',
        }),
    ).exactOptional(),
    Publish: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately.',
        }),
    ).exactOptional(),
    DryRun: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to true to validate the request parameters and access permissions without modifying the function code.',
        }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.",
        }),
    ).exactOptional(),
    Architectures: ArchitecturesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFunctionCodeRequest', required: [] })
  .openapi('UpdateFunctionCodeRequest')

const UpdateFunctionConfigurationRequestSchema = z
  .object({
    Role: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Resource Name (ARN) of the function's execution role.",
        }),
    ).exactOptional(),
    Handler: HandlerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the function.' }),
    ).exactOptional(),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.',
        }),
    ).exactOptional(),
    MemorySize: MemorySizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.',
        }),
    ).exactOptional(),
    Environment: EnvironmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Environment variables that are accessible from function code during execution.',
        }),
    ).exactOptional(),
    Runtime: RuntimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
        }),
    ).exactOptional(),
    DeadLetterConfig: DeadLetterConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">Dead-letter queues</a>.',
        }),
    ).exactOptional(),
    KMSKeyArn: KMSKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption\">environment variables</a>. When <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html\">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key.",
        }),
    ).exactOptional(),
    TracingConfig: TracingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a>.',
        }),
    ).exactOptional(),
    RevisionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.",
        }),
    ).exactOptional(),
    Layers: LayerListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function\'s execution environment. Specify each layer by its ARN, including the version.',
        }),
    ).exactOptional(),
    FileSystemConfigs: FileSystemConfigListSchema.and(
      z.any().openapi({ description: 'Connection settings for an Amazon EFS file system.' }),
    ).exactOptional(),
    ImageConfig: ImageConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-parms.html">Container image configuration values</a> that override the values in the container image Docker file.',
        }),
    ).exactOptional(),
    EphemeralStorage: EphemeralStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB.",
        }),
    ).exactOptional(),
    SnapStart: SnapStartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFunctionConfigurationRequest', required: [] })
  .openapi('UpdateFunctionConfigurationRequest')

const UpdateFunctionEventInvokeConfigRequestSchema = z
  .object({
    MaximumRetryAttempts: MaximumRetryAttemptsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of times to retry when the function returns an error.',
        }),
    ).exactOptional(),
    MaximumEventAgeInSeconds: MaximumEventAgeInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum age of a request that Lambda sends to a function for processing.',
        }),
    ).exactOptional(),
    DestinationConfig: DestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A destination for events after they have been sent to a function for processing.</p> <p class="title"> <b>Destinations</b> </p> <ul> <li> <p> <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p> </li> <li> <p> <b>Queue</b> - The ARN of a standard SQS queue.</p> </li> <li> <p> <b>Topic</b> - The ARN of a standard SNS topic.</p> </li> <li> <p> <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFunctionEventInvokeConfigRequest', required: [] })
  .openapi('UpdateFunctionEventInvokeConfigRequest')

const UpdateFunctionUrlConfigRequestSchema = z
  .object({
    AuthType: FunctionUrlAuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
        }),
    ).exactOptional(),
    Cors: CorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.',
        }),
    ).exactOptional(),
    InvokeMode: InvokeModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFunctionUrlConfigRequest', required: [] })
  .openapi('UpdateFunctionUrlConfigRequest')

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

export const get20181031LayersLayerNameVersionsVersionNumberPolicyRoute = createRoute({
  method: 'get',
  path: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy',
  description:
    'Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.',
  operationId: 'GetLayerVersionPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      LayerName: z
        .string()
        .regex(
          /(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'LayerName',
            in: 'path',
            required: true,
            description: 'The name or Amazon Resource Name (ARN) of the layer.',
            schema: {
              type: 'string',
              pattern:
                '(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      VersionNumber: z
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
            name: 'VersionNumber',
            in: 'path',
            required: true,
            description: 'The version number.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLayerVersionPolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const post20181031LayersLayerNameVersionsVersionNumberPolicyRoute = createRoute({
  method: 'post',
  path: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy',
  description:
    '<p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. </p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>',
  operationId: 'AddLayerVersionPermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      LayerName: z
        .string()
        .regex(
          /(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'LayerName',
            in: 'path',
            required: true,
            description: 'The name or Amazon Resource Name (ARN) of the layer.',
            schema: {
              type: 'string',
              pattern:
                '(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      VersionNumber: z
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
            name: 'VersionNumber',
            in: 'path',
            required: true,
            description: 'The version number.',
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      RevisionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'query',
            required: false,
            description:
              'Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              StatementId: z
                .string()
                .regex(/([a-zA-Z0-9-_]+)/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'An identifier that distinguishes the policy from others on the same layer version.',
                }),
              Action: z
                .string()
                .regex(/lambda:GetLayerVersion/)
                .max(22)
                .openapi({
                  description:
                    'The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.',
                }),
              Principal: z
                .string()
                .regex(/\d{12}|\*|arn:(aws[a-zA-Z-]*):iam::\d{12}:root/)
                .openapi({
                  description:
                    'An account ID, or <code>*</code> to grant layer usage permission to all accounts in an organization, or all Amazon Web Services accounts (if <code>organizationId</code> is not specified). For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer. ',
                }),
              OrganizationId: z
                .string()
                .regex(/o-[a-z0-9]{10,32}/)
                .max(34)
                .exactOptional()
                .openapi({
                  description:
                    'With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.',
                }),
            })
            .openapi({ required: ['StatementId', 'Action', 'Principal'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: AddLayerVersionPermissionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'PolicyLengthExceededException',
      content: { 'application/json': { schema: PolicyLengthExceededExceptionSchema } },
    },
    486: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const get20150331FunctionsFunctionNamePolicyRoute = createRoute({
  method: 'get',
  path: '/2015-03-31/functions/{FunctionName}/policy',
  description:
    'Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.',
  operationId: 'GetPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(170)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_\\.]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 170,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'Specify a version or alias to get the policy for that resource.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const post20150331FunctionsFunctionNamePolicyRoute = createRoute({
  method: 'post',
  path: '/2015-03-31/functions/{FunctionName}/policy',
  description:
    '<p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in Organizations, specify the organization ID as the <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>',
  operationId: 'AddPermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description:
              'Specify a version or alias to add permissions to a published version of the function.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              StatementId: z
                .string()
                .regex(/([a-zA-Z0-9-_]+)/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'A statement identifier that differentiates the statement from others in the same policy.',
                }),
              Action: z
                .string()
                .regex(/(lambda:[*]|lambda:[a-zA-Z]+|[*])/)
                .openapi({
                  description:
                    'The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.',
                }),
              Principal: z
                .string()
                .regex(/[^\s]+/)
                .openapi({
                  description:
                    'The Amazon Web Service or Amazon Web Services account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.',
                }),
              SourceArn: z
                .string()
                .regex(
                  /arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)/,
                )
                .exactOptional()
                .openapi({
                  description:
                    '<p>For Amazon Web Services, the ARN of the Amazon Web Services resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.</p> <p>Note that Lambda configures the comparison using the <code>StringLike</code> operator.</p>',
                }),
              SourceAccount: z
                .string()
                .regex(/\d{12}/)
                .max(12)
                .exactOptional()
                .openapi({
                  description:
                    'For Amazon Web Service, the ID of the Amazon Web Services account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.',
                }),
              EventSourceToken: z
                .string()
                .regex(/[a-zA-Z0-9._\-]+/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'For Alexa Smart Home functions, a token that the invoker must supply.',
                }),
              RevisionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.",
                }),
              PrincipalOrgID: z
                .string()
                .regex(/^o-[a-z0-9]{10,32}$/)
                .min(12)
                .max(34)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for your organization in Organizations. Use this to grant permissions to all the Amazon Web Services accounts under this organization.',
                }),
              FunctionUrlAuthType: z
                .enum(['NONE', 'AWS_IAM'])
                .exactOptional()
                .openapi({
                  description:
                    'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
                }),
            })
            .openapi({ required: ['StatementId', 'Action', 'Principal'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: AddPermissionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'PolicyLengthExceededException',
      content: { 'application/json': { schema: PolicyLengthExceededExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const get20150331FunctionsFunctionNameAliasesRoute = createRoute({
  method: 'get',
  path: '/2015-03-31/functions/{FunctionName}/aliases',
  description:
    'Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a> for a Lambda function.',
  operationId: 'ListAliases',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      FunctionVersion: z
        .string()
        .regex(/(\$LATEST|[0-9]+)/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'FunctionVersion',
            in: 'query',
            required: false,
            description:
              'Specify a function version to only list aliases that invoke that version.',
            schema: {
              type: 'string',
              pattern: '(\\$LATEST|[0-9]+)',
              minLength: 1,
              maxLength: 1024,
            },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'Limit the number of aliases returned.',
            schema: { type: 'integer', minimum: 1, maximum: 10000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAliasesResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const post20150331FunctionsFunctionNameAliasesRoute = createRoute({
  method: 'post',
  path: '/2015-03-31/functions/{FunctionName}/aliases',
  description:
    '<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>',
  operationId: 'CreateAlias',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/(?!^[0-9]+$)([a-zA-Z0-9-_]+)/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the alias.' }),
              FunctionVersion: z
                .string()
                .regex(/(\$LATEST|[0-9]+)/)
                .min(1)
                .max(1024)
                .openapi({ description: 'The function version that the alias invokes.' }),
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the alias.' }),
              RoutingConfig: z
                .object({
                  AdditionalVersionWeights: AdditionalVersionWeightsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The second version, and the percentage of traffic that's routed to it.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.',
                  required: [],
                }),
            })
            .openapi({ required: ['Name', 'FunctionVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: AliasConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const get20200422CodeSigningConfigsIndexRoute = createRoute({
  method: 'get',
  path: '/2020-04-22/code-signing-configs/',
  description:
    'Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. ',
  operationId: 'ListCodeSigningConfigs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'Maximum number of items to return.',
            schema: { type: 'integer', minimum: 1, maximum: 10000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCodeSigningConfigsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const post20200422CodeSigningConfigsIndexRoute = createRoute({
  method: 'post',
  path: '/2020-04-22/code-signing-configs/',
  description:
    'Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail). ',
  operationId: 'CreateCodeSigningConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'Descriptive name for this code signing configuration.' }),
              AllowedPublishers: z
                .object({
                  SigningProfileVersionArns: SigningProfileVersionArnsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'List of signing profiles that can sign a code package. ',
                  required: [],
                }),
              CodeSigningPolicies: z
                .object({
                  UntrustedArtifactOnDeployment: CodeSigningPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Code signing configuration policy for deployment validation failure. If you set the policy to <code>Enforce</code>, Lambda blocks the deployment request if signature validation checks fail. If you set the policy to <code>Warn</code>, Lambda allows the deployment and creates a CloudWatch log. </p> <p>Default value: <code>Warn</code> </p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.',
                  required: [],
                }),
            })
            .openapi({ required: ['AllowedPublishers'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCodeSigningConfigResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const get20150331EventSourceMappingsIndexRoute = createRoute({
  method: 'get',
  path: '/2015-03-31/event-source-mappings/',
  description:
    'Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a single event source.',
  operationId: 'ListEventSourceMappings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      EventSourceArn: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EventSourceArn',
            in: 'query',
            required: false,
            description:
              '<p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul>',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\\-])+:([a-z]{2}(-gov)?-[a-z]+-\\d{1})?:(\\d{12})?:(.*)',
            },
          },
        }),
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .exactOptional()
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it\'s limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description: 'A pagination token returned by a previous call.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              'The maximum number of event source mappings to return. Note that ListEventSourceMappings returns a maximum of 100 items in each response, even if you set the number higher.',
            schema: { type: 'integer', minimum: 1, maximum: 10000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventSourceMappingsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const post20150331EventSourceMappingsIndexRoute = createRoute({
  method: 'post',
  path: '/2015-03-31/event-source-mappings/',
  description:
    '<p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>',
  operationId: 'CreateEventSourceMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EventSourceArn: z
                .string()
                .regex(
                  /arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)/,
                )
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul>',
                }),
              FunctionName: z
                .string()
                .regex(
                  /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
                )
                .min(1)
                .max(140)
                .openapi({
                  description:
                    '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it\'s limited to 64 characters in length.</p>',
                }),
              Enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>',
                }),
              BatchSize: z
                .int()
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>',
                }),
              FilterCriteria: z
                .object({
                  Filters: FilterListSchema.and(
                    z.any().openapi({ description: ' A list of filters. ' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: ' An object that contains the filters for an event source. ',
                  required: [],
                }),
              MaximumBatchingWindowInSeconds: z
                .int()
                .min(0)
                .max(300)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>',
                }),
              ParallelizationFactor: z
                .int()
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.',
                }),
              StartingPosition: z
                .enum(['TRIM_HORIZON', 'LATEST', 'AT_TIMESTAMP'])
                .exactOptional()
                .openapi({
                  description:
                    'The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.',
                }),
              StartingPositionTimestamp: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. <code>StartingPositionTimestamp</code> cannot be in the future.',
                }),
              DestinationConfig: z
                .object({
                  OnSuccess: OnSuccessSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The destination configuration for successful invocations.',
                      }),
                  ).exactOptional(),
                  OnFailure: OnFailureSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The destination configuration for failed invocations.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A configuration object that specifies the destination of an event after Lambda processes it.',
                  required: [],
                }),
              MaximumRecordAgeInSeconds: z
                .int()
                .min(-1)
                .max(604800)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).',
                }),
              BisectBatchOnFunctionError: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.',
                }),
              MaximumRetryAttempts: z
                .int()
                .min(-1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.',
                }),
              TumblingWindowInSeconds: z
                .int()
                .min(0)
                .max(900)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.',
                }),
              Topics: z
                .array(TopicSchema)
                .length(1)
                .exactOptional()
                .openapi({ description: 'The name of the Kafka topic.' }),
              Queues: z
                .array(QueueSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    ' (MQ) The name of the Amazon MQ broker destination queue to consume. ',
                }),
              SourceAccessConfigurations: z
                .array(SourceAccessConfigurationSchema)
                .min(0)
                .max(22)
                .exactOptional()
                .openapi({
                  description:
                    'An array of authentication protocols or VPC components required to secure your event source.',
                }),
              SelfManagedEventSource: z
                .object({
                  Endpoints: EndpointsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The list of bootstrap servers for your Kafka brokers in the following format: <code>"KAFKA_BOOTSTRAP_SERVERS": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The self-managed Apache Kafka cluster for your event source.',
                  required: [],
                }),
              FunctionResponseTypes: z
                .array(FunctionResponseTypeSchema)
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.',
                }),
              AmazonManagedKafkaEventSourceConfig: z
                .object({
                  ConsumerGroupId: URISchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id">Customizable consumer group ID</a>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.',
                  required: [],
                }),
              SelfManagedKafkaEventSourceConfig: z
                .object({
                  ConsumerGroupId: URISchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id">Customizable consumer group ID</a>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specific configuration settings for a self-managed Apache Kafka event source.',
                  required: [],
                }),
              ScalingConfig: z
                .object({
                  MaximumConcurrency: MaximumConcurrencySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Limits the number of concurrent instances that the Amazon SQS event source can invoke.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.',
                  required: [],
                }),
              DocumentDBEventSourceConfig: z
                .object({
                  DatabaseName: DatabaseNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The name of the database to consume within the DocumentDB cluster. ',
                      }),
                  ).exactOptional(),
                  CollectionName: CollectionNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections. ',
                      }),
                  ).exactOptional(),
                  FullDocument: FullDocumentSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: ' Specific configuration settings for a DocumentDB event source. ',
                  required: [],
                }),
            })
            .openapi({ required: ['FunctionName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: EventSourceMappingConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const post20150331FunctionsRoute = createRoute({
  method: 'post',
  path: '/2015-03-31/functions',
  description:
    '<p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>, then you set the package type to <code>Image</code>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>). If you do not specify the architecture, then the default value is <code>x86-64</code>.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can\'t invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function\'s code and configuration. A published version is a snapshot of your function code and configuration that can\'t be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function.</p> <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda functions</a>.</p>',
  operationId: 'CreateFunction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FunctionName: z
                .string()
                .regex(
                  /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
                )
                .min(1)
                .max(140)
                .openapi({
                  description:
                    '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
                }),
              Runtime: z
                .enum([
                  'nodejs',
                  'nodejs4.3',
                  'nodejs6.10',
                  'nodejs8.10',
                  'nodejs10.x',
                  'nodejs12.x',
                  'nodejs14.x',
                  'nodejs16.x',
                  'java8',
                  'java8.al2',
                  'java11',
                  'python2.7',
                  'python3.6',
                  'python3.7',
                  'python3.8',
                  'python3.9',
                  'dotnetcore1.0',
                  'dotnetcore2.0',
                  'dotnetcore2.1',
                  'dotnetcore3.1',
                  'dotnet6',
                  'nodejs4.3-edge',
                  'go1.x',
                  'ruby2.5',
                  'ruby2.7',
                  'provided',
                  'provided.al2',
                  'nodejs18.x',
                  'python3.10',
                  'java17',
                  'ruby3.2',
                  'python3.11',
                ])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The identifier of the function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
                }),
              Role: z
                .string()
                .regex(/arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
                .openapi({
                  description: "The Amazon Resource Name (ARN) of the function's execution role.",
                }),
              Handler: z
                .string()
                .regex(/[^\s]+/)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.',
                }),
              Code: z
                .object({
                  ZipFile: BlobSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you.',
                      }),
                  ).exactOptional(),
                  S3Bucket: S3BucketSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.',
                      }),
                  ).exactOptional(),
                  S3Key: S3KeySchema.and(
                    z
                      .any()
                      .openapi({ description: 'The Amazon S3 key of the deployment package.' }),
                  ).exactOptional(),
                  S3ObjectVersion: S3ObjectVersionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'For versioned objects, the version of the deployment package object to use.',
                      }),
                  ).exactOptional(),
                  ImageUri: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.',
                  required: [],
                }),
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the function.' }),
              Timeout: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.',
                }),
              MemorySize: z
                .int()
                .min(128)
                .max(10240)
                .exactOptional()
                .openapi({
                  description:
                    'The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.',
                }),
              Publish: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to true to publish the first version of the function during creation.',
                }),
              VpcConfig: z
                .object({
                  SubnetIds: SubnetIdsSchema.and(
                    z.any().openapi({ description: 'A list of VPC subnet IDs.' }),
                  ).exactOptional(),
                  SecurityGroupIds: SecurityGroupIdsSchema.and(
                    z.any().openapi({ description: 'A list of VPC security group IDs.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.',
                  required: [],
                }),
              PackageType: z
                .enum(['Zip', 'Image'])
                .exactOptional()
                .openapi({
                  description:
                    'The type of deployment package. Set to <code>Image</code> for container image and set to <code>Zip</code> for .zip file archive.',
                }),
              DeadLetterConfig: z
                .object({
                  TargetArn: ResourceArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.',
                  required: [],
                }),
              Environment: z
                .object({
                  Variables: EnvironmentVariablesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Environment variable key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">Using Lambda environment variables</a>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.",
                  required: [],
                }),
              KMSKeyArn: z
                .string()
                .regex(/(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()/)
                .exactOptional()
                .openapi({
                  description:
                    "The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption\">environment variables</a>. When <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html\">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key.",
                }),
              TracingConfig: z
                .object({
                  Mode: TracingModeSchema.and(
                    z.any().openapi({ description: 'The tracing mode.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function.',
                }),
              Layers: z
                .array(LayerVersionArnSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function\'s execution environment. Specify each layer by its ARN, including the version.',
                }),
              FileSystemConfigs: z
                .array(FileSystemConfigSchema)
                .max(1)
                .exactOptional()
                .openapi({ description: 'Connection settings for an Amazon EFS file system.' }),
              ImageConfig: z
                .object({
                  EntryPoint: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the entry point to their application, which is typically the location of the runtime executable.',
                      }),
                  ).exactOptional(),
                  Command: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies parameters that you want to pass in with ENTRYPOINT.',
                      }),
                  ).exactOptional(),
                  WorkingDirectory: WorkingDirectorySchema.and(
                    z.any().openapi({ description: 'Specifies the working directory.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.',
                  required: [],
                }),
              CodeSigningConfigArn: z
                .string()
                .regex(
                  /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}/,
                )
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.',
                }),
              Architectures: z
                .array(ArchitectureSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.',
                }),
              EphemeralStorage: z
                .object({
                  Size: EphemeralStorageSizeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "The size of the function's <code>/tmp</code> directory.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.",
                  required: [],
                }),
              SnapStart: z
                .object({
                  ApplyOn: SnapStartApplyOnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.',
                  required: [],
                }),
            })
            .openapi({ required: ['FunctionName', 'Role', 'Code'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: FunctionConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'CodeStorageExceededException',
      content: { 'application/json': { schema: CodeStorageExceededExceptionSchema } },
    },
    486: {
      description: 'CodeVerificationFailedException',
      content: { 'application/json': { schema: CodeVerificationFailedExceptionSchema } },
    },
    487: {
      description: 'InvalidCodeSignatureException',
      content: { 'application/json': { schema: InvalidCodeSignatureExceptionSchema } },
    },
    488: {
      description: 'CodeSigningConfigNotFoundException',
      content: { 'application/json': { schema: CodeSigningConfigNotFoundExceptionSchema } },
    },
  },
})

export const get20211031FunctionsFunctionNameUrlRoute = createRoute({
  method: 'get',
  path: '/2021-10-31/functions/{FunctionName}/url',
  description: 'Returns details about a Lambda function URL.',
  operationId: 'GetFunctionUrlConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(^\$LATEST$)|((?!^[0-9]+$)([a-zA-Z0-9-_]+))/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'The alias name.',
            schema: {
              type: 'string',
              pattern: '(^\\$LATEST$)|((?!^[0-9]+$)([a-zA-Z0-9-_]+))',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFunctionUrlConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const put20211031FunctionsFunctionNameUrlRoute = createRoute({
  method: 'put',
  path: '/2021-10-31/functions/{FunctionName}/url',
  description: 'Updates the configuration for a Lambda function URL.',
  operationId: 'UpdateFunctionUrlConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(^\$LATEST$)|((?!^[0-9]+$)([a-zA-Z0-9-_]+))/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'The alias name.',
            schema: {
              type: 'string',
              pattern: '(^\\$LATEST$)|((?!^[0-9]+$)([a-zA-Z0-9-_]+))',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AuthType: z
                .enum(['NONE', 'AWS_IAM'])
                .exactOptional()
                .openapi({
                  description:
                    'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
                }),
              Cors: z
                .object({
                  AllowCredentials: AllowCredentialsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Whether to allow cookies or other credentials in requests to your function URL. The default is <code>false</code>.',
                      }),
                  ).exactOptional(),
                  AllowHeaders: HeadersListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The HTTP headers that origins can include in requests to your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.',
                      }),
                  ).exactOptional(),
                  AllowMethods: AllowMethodsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The HTTP methods that are allowed when calling your function URL. For example: <code>GET</code>, <code>POST</code>, <code>DELETE</code>, or the wildcard character (<code>*</code>).',
                      }),
                  ).exactOptional(),
                  AllowOrigins: AllowOriginsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The origins that can access your function URL. You can list any number of specific origins, separated by a comma. For example: <code>https://www.example.com</code>, <code>http://localhost:60905</code>.</p> <p>Alternatively, you can grant access to all origins using the wildcard character (<code>*</code>).</p>',
                      }),
                  ).exactOptional(),
                  ExposeHeaders: HeadersListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The HTTP headers in your function response that you want to expose to origins that call your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.',
                      }),
                  ).exactOptional(),
                  MaxAge: MaxAgeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By default, this is set to <code>0</code>, which means that the browser doesn't cache results.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.',
                  required: [],
                }),
              InvokeMode: z
                .enum(['BUFFERED', 'RESPONSE_STREAM'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFunctionUrlConfigResponseSchema } },
    },
    480: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const post20211031FunctionsFunctionNameUrlRoute = createRoute({
  method: 'post',
  path: '/2021-10-31/functions/{FunctionName}/url',
  description:
    'Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.',
  operationId: 'CreateFunctionUrlConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(^\$LATEST$)|((?!^[0-9]+$)([a-zA-Z0-9-_]+))/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'The alias name.',
            schema: {
              type: 'string',
              pattern: '(^\\$LATEST$)|((?!^[0-9]+$)([a-zA-Z0-9-_]+))',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AuthType: z
                .enum(['NONE', 'AWS_IAM'])
                .openapi({
                  description:
                    'The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.',
                }),
              Cors: z
                .object({
                  AllowCredentials: AllowCredentialsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Whether to allow cookies or other credentials in requests to your function URL. The default is <code>false</code>.',
                      }),
                  ).exactOptional(),
                  AllowHeaders: HeadersListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The HTTP headers that origins can include in requests to your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.',
                      }),
                  ).exactOptional(),
                  AllowMethods: AllowMethodsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The HTTP methods that are allowed when calling your function URL. For example: <code>GET</code>, <code>POST</code>, <code>DELETE</code>, or the wildcard character (<code>*</code>).',
                      }),
                  ).exactOptional(),
                  AllowOrigins: AllowOriginsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The origins that can access your function URL. You can list any number of specific origins, separated by a comma. For example: <code>https://www.example.com</code>, <code>http://localhost:60905</code>.</p> <p>Alternatively, you can grant access to all origins using the wildcard character (<code>*</code>).</p>',
                      }),
                  ).exactOptional(),
                  ExposeHeaders: HeadersListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The HTTP headers in your function response that you want to expose to origins that call your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.',
                      }),
                  ).exactOptional(),
                  MaxAge: MaxAgeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By default, this is set to <code>0</code>, which means that the browser doesn't cache results.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.',
                  required: [],
                }),
              InvokeMode: z
                .enum(['BUFFERED', 'RESPONSE_STREAM'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['AuthType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFunctionUrlConfigResponseSchema } },
    },
    480: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const delete20211031FunctionsFunctionNameUrlRoute = createRoute({
  method: 'delete',
  path: '/2021-10-31/functions/{FunctionName}/url',
  description:
    "Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.",
  operationId: 'DeleteFunctionUrlConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(^\$LATEST$)|((?!^[0-9]+$)([a-zA-Z0-9-_]+))/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'The alias name.',
            schema: {
              type: 'string',
              pattern: '(^\\$LATEST$)|((?!^[0-9]+$)([a-zA-Z0-9-_]+))',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const get20150331FunctionsFunctionNameAliasesNameRoute = createRoute({
  method: 'get',
  path: '/2015-03-31/functions/{FunctionName}/aliases/{Name}',
  description:
    'Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.',
  operationId: 'GetAlias',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      Name: z
        .string()
        .regex(/(?!^[0-9]+$)([a-zA-Z0-9-_]+)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the alias.',
            schema: {
              type: 'string',
              pattern: '(?!^[0-9]+$)([a-zA-Z0-9-_]+)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AliasConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const put20150331FunctionsFunctionNameAliasesNameRoute = createRoute({
  method: 'put',
  path: '/2015-03-31/functions/{FunctionName}/aliases/{Name}',
  description:
    'Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.',
  operationId: 'UpdateAlias',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      Name: z
        .string()
        .regex(/(?!^[0-9]+$)([a-zA-Z0-9-_]+)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the alias.',
            schema: {
              type: 'string',
              pattern: '(?!^[0-9]+$)([a-zA-Z0-9-_]+)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FunctionVersion: z
                .string()
                .regex(/(\$LATEST|[0-9]+)/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The function version that the alias invokes.' }),
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the alias.' }),
              RoutingConfig: z
                .object({
                  AdditionalVersionWeights: AdditionalVersionWeightsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The second version, and the percentage of traffic that's routed to it.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.',
                  required: [],
                }),
              RevisionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AliasConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    485: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const delete20150331FunctionsFunctionNameAliasesNameRoute = createRoute({
  method: 'delete',
  path: '/2015-03-31/functions/{FunctionName}/aliases/{Name}',
  description:
    'Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.',
  operationId: 'DeleteAlias',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      Name: z
        .string()
        .regex(/(?!^[0-9]+$)([a-zA-Z0-9-_]+)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the alias.',
            schema: {
              type: 'string',
              pattern: '(?!^[0-9]+$)([a-zA-Z0-9-_]+)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const get20200422CodeSigningConfigsCodeSigningConfigArnRoute = createRoute({
  method: 'get',
  path: '/2020-04-22/code-signing-configs/{CodeSigningConfigArn}',
  description: 'Returns information about the specified code signing configuration.',
  operationId: 'GetCodeSigningConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CodeSigningConfigArn: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}/,
        )
        .max(200)
        .openapi({
          param: {
            name: 'CodeSigningConfigArn',
            in: 'path',
            required: true,
            description: 'The The Amazon Resource Name (ARN) of the code signing configuration. ',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:code-signing-config:csc-[a-z0-9]{17}',
              maxLength: 200,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCodeSigningConfigResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const put20200422CodeSigningConfigsCodeSigningConfigArnRoute = createRoute({
  method: 'put',
  path: '/2020-04-22/code-signing-configs/{CodeSigningConfigArn}',
  description:
    'Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. ',
  operationId: 'UpdateCodeSigningConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CodeSigningConfigArn: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}/,
        )
        .max(200)
        .openapi({
          param: {
            name: 'CodeSigningConfigArn',
            in: 'path',
            required: true,
            description: 'The The Amazon Resource Name (ARN) of the code signing configuration.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:code-signing-config:csc-[a-z0-9]{17}',
              maxLength: 200,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'Descriptive name for this code signing configuration.' }),
              AllowedPublishers: z
                .object({
                  SigningProfileVersionArns: SigningProfileVersionArnsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'List of signing profiles that can sign a code package. ',
                  required: [],
                }),
              CodeSigningPolicies: z
                .object({
                  UntrustedArtifactOnDeployment: CodeSigningPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Code signing configuration policy for deployment validation failure. If you set the policy to <code>Enforce</code>, Lambda blocks the deployment request if signature validation checks fail. If you set the policy to <code>Warn</code>, Lambda allows the deployment and creates a CloudWatch log. </p> <p>Default value: <code>Warn</code> </p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateCodeSigningConfigResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const delete20200422CodeSigningConfigsCodeSigningConfigArnRoute = createRoute({
  method: 'delete',
  path: '/2020-04-22/code-signing-configs/{CodeSigningConfigArn}',
  description:
    'Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it. ',
  operationId: 'DeleteCodeSigningConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CodeSigningConfigArn: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}/,
        )
        .max(200)
        .openapi({
          param: {
            name: 'CodeSigningConfigArn',
            in: 'path',
            required: true,
            description: 'The The Amazon Resource Name (ARN) of the code signing configuration.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:code-signing-config:csc-[a-z0-9]{17}',
              maxLength: 200,
            },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCodeSigningConfigResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const get20150331EventSourceMappingsUUIDRoute = createRoute({
  method: 'get',
  path: '/2015-03-31/event-source-mappings/{UUID}',
  description:
    'Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.',
  operationId: 'GetEventSourceMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      UUID: z
        .string()
        .openapi({
          param: {
            name: 'UUID',
            in: 'path',
            required: true,
            description: 'The identifier of the event source mapping.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EventSourceMappingConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const put20150331EventSourceMappingsUUIDRoute = createRoute({
  method: 'put',
  path: '/2015-03-31/event-source-mappings/{UUID}',
  description:
    '<p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>',
  operationId: 'UpdateEventSourceMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      UUID: z
        .string()
        .openapi({
          param: {
            name: 'UUID',
            in: 'path',
            required: true,
            description: 'The identifier of the event source mapping.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FunctionName: z
                .string()
                .regex(
                  /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
                )
                .min(1)
                .max(140)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it\'s limited to 64 characters in length.</p>',
                }),
              Enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>',
                }),
              BatchSize: z
                .int()
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>',
                }),
              FilterCriteria: z
                .object({
                  Filters: FilterListSchema.and(
                    z.any().openapi({ description: ' A list of filters. ' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: ' An object that contains the filters for an event source. ',
                  required: [],
                }),
              MaximumBatchingWindowInSeconds: z
                .int()
                .min(0)
                .max(300)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>',
                }),
              DestinationConfig: z
                .object({
                  OnSuccess: OnSuccessSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The destination configuration for successful invocations.',
                      }),
                  ).exactOptional(),
                  OnFailure: OnFailureSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The destination configuration for failed invocations.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A configuration object that specifies the destination of an event after Lambda processes it.',
                  required: [],
                }),
              MaximumRecordAgeInSeconds: z
                .int()
                .min(-1)
                .max(604800)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).',
                }),
              BisectBatchOnFunctionError: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.',
                }),
              MaximumRetryAttempts: z
                .int()
                .min(-1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.',
                }),
              ParallelizationFactor: z
                .int()
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.',
                }),
              SourceAccessConfigurations: z
                .array(SourceAccessConfigurationSchema)
                .min(0)
                .max(22)
                .exactOptional()
                .openapi({
                  description:
                    'An array of authentication protocols or VPC components required to secure your event source.',
                }),
              TumblingWindowInSeconds: z
                .int()
                .min(0)
                .max(900)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.',
                }),
              FunctionResponseTypes: z
                .array(FunctionResponseTypeSchema)
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    '(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.',
                }),
              ScalingConfig: z
                .object({
                  MaximumConcurrency: MaximumConcurrencySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Limits the number of concurrent instances that the Amazon SQS event source can invoke.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.',
                  required: [],
                }),
              DocumentDBEventSourceConfig: z
                .object({
                  DatabaseName: DatabaseNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The name of the database to consume within the DocumentDB cluster. ',
                      }),
                  ).exactOptional(),
                  CollectionName: CollectionNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections. ',
                      }),
                  ).exactOptional(),
                  FullDocument: FullDocumentSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: ' Specific configuration settings for a DocumentDB event source. ',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: EventSourceMappingConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const delete20150331EventSourceMappingsUUIDRoute = createRoute({
  method: 'delete',
  path: '/2015-03-31/event-source-mappings/{UUID}',
  description:
    '<p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>',
  operationId: 'DeleteEventSourceMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      UUID: z
        .string()
        .openapi({
          param: {
            name: 'UUID',
            in: 'path',
            required: true,
            description: 'The identifier of the event source mapping.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: EventSourceMappingConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const get20150331FunctionsFunctionNameRoute = createRoute({
  method: 'get',
  path: '/2015-03-31/functions/{FunctionName}',
  description:
    "Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.",
  operationId: 'GetFunction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(170)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_\\.]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 170,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description:
              'Specify a version or alias to get details about a published version of the function.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFunctionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const delete20150331FunctionsFunctionNameRoute = createRoute({
  method: 'delete',
  path: '/2015-03-31/functions/{FunctionName}',
  description:
    "<p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted. This doesn't require the user to have explicit permissions for <a>DeleteAlias</a>.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>",
  operationId: 'DeleteFunction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function or version.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:1</code> (with version).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description:
              "Specify a version to delete. You can't delete a version that an alias references.",
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const get20200630FunctionsFunctionNameCodeSigningConfigRoute = createRoute({
  method: 'get',
  path: '/2020-06-30/functions/{FunctionName}/code-signing-config',
  description: 'Returns the code signing configuration for the specified function.',
  operationId: 'GetFunctionCodeSigningConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFunctionCodeSigningConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const put20200630FunctionsFunctionNameCodeSigningConfigRoute = createRoute({
  method: 'put',
  path: '/2020-06-30/functions/{FunctionName}/code-signing-config',
  description:
    'Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. ',
  operationId: 'PutFunctionCodeSigningConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CodeSigningConfigArn: z
                .string()
                .regex(
                  /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}/,
                )
                .max(200)
                .openapi({
                  description:
                    'The The Amazon Resource Name (ARN) of the code signing configuration.',
                }),
            })
            .openapi({ required: ['CodeSigningConfigArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutFunctionCodeSigningConfigResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    485: {
      description: 'CodeSigningConfigNotFoundException',
      content: { 'application/json': { schema: CodeSigningConfigNotFoundExceptionSchema } },
    },
  },
})

export const delete20200630FunctionsFunctionNameCodeSigningConfigRoute = createRoute({
  method: 'delete',
  path: '/2020-06-30/functions/{FunctionName}/code-signing-config',
  description: 'Removes the code signing configuration from the function.',
  operationId: 'DeleteFunctionCodeSigningConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'CodeSigningConfigNotFoundException',
      content: { 'application/json': { schema: CodeSigningConfigNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const put20171031FunctionsFunctionNameConcurrencyRoute = createRoute({
  method: 'put',
  path: '/2017-10-31/functions/{FunctionName}/concurrency',
  description:
    '<p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren\'t configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>',
  operationId: 'PutFunctionConcurrency',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ReservedConcurrentExecutions: z
                .int()
                .min(0)
                .openapi({
                  description: 'The number of simultaneous executions to reserve for the function.',
                }),
            })
            .openapi({ required: ['ReservedConcurrentExecutions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConcurrencySchema } } },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const delete20171031FunctionsFunctionNameConcurrencyRoute = createRoute({
  method: 'delete',
  path: '/2017-10-31/functions/{FunctionName}/concurrency',
  description: 'Removes a concurrent execution limit from a function.',
  operationId: 'DeleteFunctionConcurrency',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const get20190925FunctionsFunctionNameEventInvokeConfigRoute = createRoute({
  method: 'get',
  path: '/2019-09-25/functions/{FunctionName}/event-invoke-config',
  description:
    '<p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>',
  operationId: 'GetFunctionEventInvokeConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'A version number or alias name.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FunctionEventInvokeConfigSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const put20190925FunctionsFunctionNameEventInvokeConfigRoute = createRoute({
  method: 'put',
  path: '/2019-09-25/functions/{FunctionName}/event-invoke-config',
  description:
    '<p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>',
  operationId: 'PutFunctionEventInvokeConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'A version number or alias name.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaximumRetryAttempts: z
                .int()
                .min(0)
                .max(2)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of times to retry when the function returns an error.',
                }),
              MaximumEventAgeInSeconds: z
                .int()
                .min(60)
                .max(21600)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum age of a request that Lambda sends to a function for processing.',
                }),
              DestinationConfig: z
                .object({
                  OnSuccess: OnSuccessSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The destination configuration for successful invocations.',
                      }),
                  ).exactOptional(),
                  OnFailure: OnFailureSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The destination configuration for failed invocations.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A configuration object that specifies the destination of an event after Lambda processes it.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FunctionEventInvokeConfigSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const post20190925FunctionsFunctionNameEventInvokeConfigRoute = createRoute({
  method: 'post',
  path: '/2019-09-25/functions/{FunctionName}/event-invoke-config',
  description:
    '<p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>',
  operationId: 'UpdateFunctionEventInvokeConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'A version number or alias name.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaximumRetryAttempts: z
                .int()
                .min(0)
                .max(2)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of times to retry when the function returns an error.',
                }),
              MaximumEventAgeInSeconds: z
                .int()
                .min(60)
                .max(21600)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum age of a request that Lambda sends to a function for processing.',
                }),
              DestinationConfig: z
                .object({
                  OnSuccess: OnSuccessSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The destination configuration for successful invocations.',
                      }),
                  ).exactOptional(),
                  OnFailure: OnFailureSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The destination configuration for failed invocations.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A configuration object that specifies the destination of an event after Lambda processes it.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FunctionEventInvokeConfigSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const delete20190925FunctionsFunctionNameEventInvokeConfigRoute = createRoute({
  method: 'delete',
  path: '/2019-09-25/functions/{FunctionName}/event-invoke-config',
  description:
    '<p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>',
  operationId: 'DeleteFunctionEventInvokeConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'A version number or alias name.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const get20181031LayersLayerNameVersionsVersionNumberRoute = createRoute({
  method: 'get',
  path: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}',
  description:
    'Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that\'s valid for 10 minutes.',
  operationId: 'GetLayerVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      LayerName: z
        .string()
        .regex(
          /(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'LayerName',
            in: 'path',
            required: true,
            description: 'The name or Amazon Resource Name (ARN) of the layer.',
            schema: {
              type: 'string',
              pattern:
                '(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      VersionNumber: z
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
            name: 'VersionNumber',
            in: 'path',
            required: true,
            description: 'The version number.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLayerVersionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const delete20181031LayersLayerNameVersionsVersionNumberRoute = createRoute({
  method: 'delete',
  path: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}',
  description:
    'Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.',
  operationId: 'DeleteLayerVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      LayerName: z
        .string()
        .regex(
          /(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'LayerName',
            in: 'path',
            required: true,
            description: 'The name or Amazon Resource Name (ARN) of the layer.',
            schema: {
              type: 'string',
              pattern:
                '(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      VersionNumber: z
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
            name: 'VersionNumber',
            in: 'path',
            required: true,
            description: 'The version number.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierRoute = createRoute({
  method: 'get',
  path: '/2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier',
  description:
    "Retrieves the provisioned concurrency configuration for a function's alias or version.",
  operationId: 'GetProvisionedConcurrencyConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: true,
            description: 'The version number or alias name.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProvisionedConcurrencyConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'ProvisionedConcurrencyConfigNotFoundException',
      content: {
        'application/json': { schema: ProvisionedConcurrencyConfigNotFoundExceptionSchema },
      },
    },
  },
})

export const put20190930FunctionsFunctionNameProvisionedConcurrencyQualifierRoute = createRoute({
  method: 'put',
  path: '/2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier',
  description: "Adds a provisioned concurrency configuration to a function's alias or version.",
  operationId: 'PutProvisionedConcurrencyConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: true,
            description: 'The version number or alias name.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ProvisionedConcurrentExecutions: z
                .int()
                .min(1)
                .openapi({
                  description:
                    'The amount of provisioned concurrency to allocate for the version or alias.',
                }),
            })
            .openapi({ required: ['ProvisionedConcurrentExecutions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: PutProvisionedConcurrencyConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const delete20190930FunctionsFunctionNameProvisionedConcurrencyQualifierRoute = createRoute({
  method: 'delete',
  path: '/2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier',
  description: 'Deletes the provisioned concurrency configuration for a function.',
  operationId: 'DeleteProvisionedConcurrencyConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: true,
            description: 'The version number or alias name.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const get20160819AccountSettingsIndexRoute = createRoute({
  method: 'get',
  path: '/2016-08-19/account-settings/',
  description:
    'Retrieves details about your account\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.',
  operationId: 'GetAccountSettings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccountSettingsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const get20190930FunctionsFunctionNameConcurrencyRoute = createRoute({
  method: 'get',
  path: '/2019-09-30/functions/{FunctionName}/concurrency',
  description:
    'Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.',
  operationId: 'GetFunctionConcurrency',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFunctionConcurrencyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const get20150331FunctionsFunctionNameConfigurationRoute = createRoute({
  method: 'get',
  path: '/2015-03-31/functions/{FunctionName}/configuration',
  description:
    "<p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>",
  operationId: 'GetFunctionConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(170)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_\\.]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 170,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description:
              'Specify a version or alias to get details about a published version of the function.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FunctionConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const put20150331FunctionsFunctionNameConfigurationRoute = createRoute({
  method: 'put',
  path: '/2015-03-31/functions/{FunctionName}/configuration',
  description:
    '<p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can\'t modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can\'t modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>',
  operationId: 'UpdateFunctionConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Role: z
                .string()
                .regex(/arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
                .exactOptional()
                .openapi({
                  description: "The Amazon Resource Name (ARN) of the function's execution role.",
                }),
              Handler: z
                .string()
                .regex(/[^\s]+/)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.',
                }),
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the function.' }),
              Timeout: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.',
                }),
              MemorySize: z
                .int()
                .min(128)
                .max(10240)
                .exactOptional()
                .openapi({
                  description:
                    'The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.',
                }),
              VpcConfig: z
                .object({
                  SubnetIds: SubnetIdsSchema.and(
                    z.any().openapi({ description: 'A list of VPC subnet IDs.' }),
                  ).exactOptional(),
                  SecurityGroupIds: SecurityGroupIdsSchema.and(
                    z.any().openapi({ description: 'A list of VPC security group IDs.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.',
                  required: [],
                }),
              Environment: z
                .object({
                  Variables: EnvironmentVariablesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Environment variable key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">Using Lambda environment variables</a>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.",
                  required: [],
                }),
              Runtime: z
                .enum([
                  'nodejs',
                  'nodejs4.3',
                  'nodejs6.10',
                  'nodejs8.10',
                  'nodejs10.x',
                  'nodejs12.x',
                  'nodejs14.x',
                  'nodejs16.x',
                  'java8',
                  'java8.al2',
                  'java11',
                  'python2.7',
                  'python3.6',
                  'python3.7',
                  'python3.8',
                  'python3.9',
                  'dotnetcore1.0',
                  'dotnetcore2.0',
                  'dotnetcore2.1',
                  'dotnetcore3.1',
                  'dotnet6',
                  'nodejs4.3-edge',
                  'go1.x',
                  'ruby2.5',
                  'ruby2.7',
                  'provided',
                  'provided.al2',
                  'nodejs18.x',
                  'python3.10',
                  'java17',
                  'ruby3.2',
                  'python3.11',
                ])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The identifier of the function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
                }),
              DeadLetterConfig: z
                .object({
                  TargetArn: ResourceArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.',
                  required: [],
                }),
              KMSKeyArn: z
                .string()
                .regex(/(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()/)
                .exactOptional()
                .openapi({
                  description:
                    "The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption\">environment variables</a>. When <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html\">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key.",
                }),
              TracingConfig: z
                .object({
                  Mode: TracingModeSchema.and(
                    z.any().openapi({ description: 'The tracing mode.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.',
                  required: [],
                }),
              RevisionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.",
                }),
              Layers: z
                .array(LayerVersionArnSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function\'s execution environment. Specify each layer by its ARN, including the version.',
                }),
              FileSystemConfigs: z
                .array(FileSystemConfigSchema)
                .max(1)
                .exactOptional()
                .openapi({ description: 'Connection settings for an Amazon EFS file system.' }),
              ImageConfig: z
                .object({
                  EntryPoint: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the entry point to their application, which is typically the location of the runtime executable.',
                      }),
                  ).exactOptional(),
                  Command: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies parameters that you want to pass in with ENTRYPOINT.',
                      }),
                  ).exactOptional(),
                  WorkingDirectory: WorkingDirectorySchema.and(
                    z.any().openapi({ description: 'Specifies the working directory.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.',
                  required: [],
                }),
              EphemeralStorage: z
                .object({
                  Size: EphemeralStorageSizeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "The size of the function's <code>/tmp</code> directory.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.",
                  required: [],
                }),
              SnapStart: z
                .object({
                  ApplyOn: SnapStartApplyOnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FunctionConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    485: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    486: {
      description: 'CodeVerificationFailedException',
      content: { 'application/json': { schema: CodeVerificationFailedExceptionSchema } },
    },
    487: {
      description: 'InvalidCodeSignatureException',
      content: { 'application/json': { schema: InvalidCodeSignatureExceptionSchema } },
    },
    488: {
      description: 'CodeSigningConfigNotFoundException',
      content: { 'application/json': { schema: CodeSigningConfigNotFoundExceptionSchema } },
    },
  },
})

export const get20181031LayersFindLayerVersionArnRoute = createRoute({
  method: 'get',
  path: '/2018-10-31/layers#find=LayerVersion&Arn',
  description:
    'Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that\'s valid for 10 minutes.',
  operationId: 'GetLayerVersionByArn',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Arn: z
        .string()
        .regex(/arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+:[0-9]+/)
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'Arn',
            in: 'query',
            required: true,
            description: 'The ARN of the layer version.',
            schema: {
              type: 'string',
              pattern: 'arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\\d{12}:layer:[a-zA-Z0-9-_]+:[0-9]+',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      find: z
        .literal('LayerVersion')
        .openapi({
          param: {
            name: 'find',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['LayerVersion'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLayerVersionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const get20210720FunctionsFunctionNameRuntimeManagementConfigRoute = createRoute({
  method: 'get',
  path: '/2021-07-20/functions/{FunctionName}/runtime-management-config',
  description:
    'Retrieves the runtime management configuration for a function\'s version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>, this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.',
  operationId: 'GetRuntimeManagementConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(170)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_\\.]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 170,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description:
              'Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the <code>$LATEST</code> version is returned.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRuntimeManagementConfigResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const put20210720FunctionsFunctionNameRuntimeManagementConfigRoute = createRoute({
  method: 'put',
  path: '/2021-07-20/functions/{FunctionName}/runtime-management-config',
  description:
    'Sets the runtime management configuration for a function\'s version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.',
  operationId: 'PutRuntimeManagementConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description:
              'Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the <code>$LATEST</code> version is returned.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              UpdateRuntimeOn: z
                .enum(['Auto', 'Manual', 'FunctionUpdate'])
                .openapi({
                  description:
                    '<p>Specify the runtime update mode.</p> <ul> <li> <p> <b>Auto (default)</b> - Automatically update to the most recent and secure runtime version using a <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase">Two-phase runtime version rollout</a>. This is the best choice for most customers to ensure they always benefit from runtime updates.</p> </li> <li> <p> <b>Function update</b> - Lambda updates the runtime of your function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.</p> </li> <li> <p> <b>Manual</b> - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback">Roll back a runtime version</a>.</p> </li> </ul>',
                }),
              RuntimeVersionArn: z
                .string()
                .regex(
                  /^arn:(aws[a-zA-Z-]*):lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}::runtime:.+$/,
                )
                .min(26)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The ARN of the runtime version you want the function to use.</p> <note> <p>This is only required if you're using the <b>Manual</b> runtime update mode.</p> </note>",
                }),
            })
            .openapi({ required: ['UpdateRuntimeOn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRuntimeManagementConfigResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const post20150331FunctionsFunctionNameInvocationsRoute = createRoute({
  method: 'post',
  path: '/2015-03-31/functions/{FunctionName}/invocations',
  description:
    '<p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in Lambda</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn\'t reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function\'s code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>',
  operationId: 'Invoke',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Invocation-Type': z
        .enum(['Event', 'RequestResponse', 'DryRun'])
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Invocation-Type',
            in: 'header',
            required: false,
            description:
              "<p>Choose from the following options.</p> <ul> <li> <p> <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API response includes the function response and additional data.</p> </li> <li> <p> <code>Event</code> – Invoke the function asynchronously. Send events that fail multiple times to the function's dead-letter queue (if one is configured). The API response only includes a status code.</p> </li> <li> <p> <code>DryRun</code> – Validate parameter values and verify that the user or role has permission to invoke the function.</p> </li> </ul>",
            schema: { type: 'string', enum: ['Event', 'RequestResponse', 'DryRun'] },
          },
        }),
      'X-Amz-Log-Type': z
        .enum(['None', 'Tail'])
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Log-Type',
            in: 'header',
            required: false,
            description:
              'Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.',
            schema: { type: 'string', enum: ['None', 'Tail'] },
          },
        }),
      'X-Amz-Client-Context': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Context',
            in: 'header',
            required: false,
            description:
              'Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(170)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_\\.]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 170,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description:
              'Specify a version or alias to invoke a published version of the function.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Payload: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload \'{ "key": "value" }\'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InvocationResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestContentException',
      content: { 'application/json': { schema: InvalidRequestContentExceptionSchema } },
    },
    483: {
      description: 'RequestTooLargeException',
      content: { 'application/json': { schema: RequestTooLargeExceptionSchema } },
    },
    484: {
      description: 'UnsupportedMediaTypeException',
      content: { 'application/json': { schema: UnsupportedMediaTypeExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    487: {
      description: 'EC2UnexpectedException',
      content: { 'application/json': { schema: EC2UnexpectedExceptionSchema } },
    },
    488: {
      description: 'SubnetIPAddressLimitReachedException',
      content: { 'application/json': { schema: SubnetIPAddressLimitReachedExceptionSchema } },
    },
    489: {
      description: 'ENILimitReachedException',
      content: { 'application/json': { schema: ENILimitReachedExceptionSchema } },
    },
    490: {
      description: 'EFSMountConnectivityException',
      content: { 'application/json': { schema: EFSMountConnectivityExceptionSchema } },
    },
    491: {
      description: 'EFSMountFailureException',
      content: { 'application/json': { schema: EFSMountFailureExceptionSchema } },
    },
    492: {
      description: 'EFSMountTimeoutException',
      content: { 'application/json': { schema: EFSMountTimeoutExceptionSchema } },
    },
    493: {
      description: 'EFSIOException',
      content: { 'application/json': { schema: EFSIOExceptionSchema } },
    },
    494: {
      description: 'SnapStartException',
      content: { 'application/json': { schema: SnapStartExceptionSchema } },
    },
    495: {
      description: 'SnapStartTimeoutException',
      content: { 'application/json': { schema: SnapStartTimeoutExceptionSchema } },
    },
    496: {
      description: 'SnapStartNotReadyException',
      content: { 'application/json': { schema: SnapStartNotReadyExceptionSchema } },
    },
    497: {
      description: 'EC2ThrottledException',
      content: { 'application/json': { schema: EC2ThrottledExceptionSchema } },
    },
    498: {
      description: 'EC2AccessDeniedException',
      content: { 'application/json': { schema: EC2AccessDeniedExceptionSchema } },
    },
    499: {
      description: 'InvalidSubnetIDException',
      content: { 'application/json': { schema: InvalidSubnetIDExceptionSchema } },
    },
    500: {
      description: 'InvalidSecurityGroupIDException',
      content: { 'application/json': { schema: InvalidSecurityGroupIDExceptionSchema } },
    },
    501: {
      description: 'InvalidZipFileException',
      content: { 'application/json': { schema: InvalidZipFileExceptionSchema } },
    },
    502: {
      description: 'KMSDisabledException',
      content: { 'application/json': { schema: KMSDisabledExceptionSchema } },
    },
    503: {
      description: 'KMSInvalidStateException',
      content: { 'application/json': { schema: KMSInvalidStateExceptionSchema } },
    },
    504: {
      description: 'KMSAccessDeniedException',
      content: { 'application/json': { schema: KMSAccessDeniedExceptionSchema } },
    },
    505: {
      description: 'KMSNotFoundException',
      content: { 'application/json': { schema: KMSNotFoundExceptionSchema } },
    },
    506: {
      description: 'InvalidRuntimeException',
      content: { 'application/json': { schema: InvalidRuntimeExceptionSchema } },
    },
    507: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    508: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    509: {
      description: 'RecursiveInvocationException',
      content: { 'application/json': { schema: RecursiveInvocationExceptionSchema } },
    },
  },
})

export const post20141113FunctionsFunctionNameInvokeAsyncIndexRoute = createRoute({
  method: 'post',
  path: '/2014-11-13/functions/{FunctionName}/invoke-async/',
  description:
    '<important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>',
  operationId: 'InvokeAsync',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(170)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_\\.]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 170,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InvokeArgs: z
                .string()
                .openapi({
                  description:
                    'The JSON that you want to provide to your Lambda function as input.',
                }),
            })
            .openapi({ required: ['InvokeArgs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: InvokeAsyncResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestContentException',
      content: { 'application/json': { schema: InvalidRequestContentExceptionSchema } },
    },
    483: {
      description: 'InvalidRuntimeException',
      content: { 'application/json': { schema: InvalidRuntimeExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
  deprecated: true,
})

export const post20211115FunctionsFunctionNameResponseStreamingInvocationsRoute = createRoute({
  method: 'post',
  path: '/2021-11-15/functions/{FunctionName}/response-streaming-invocations',
  description:
    '<p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>',
  operationId: 'InvokeWithResponseStream',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Invocation-Type': z
        .enum(['RequestResponse', 'DryRun'])
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Invocation-Type',
            in: 'header',
            required: false,
            description:
              '<p>Use one of the following options:</p> <ul> <li> <p> <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API operation response includes the function response and additional data.</p> </li> <li> <p> <code>DryRun</code> – Validate parameter values and verify that the IAM user or role has permission to invoke the function.</p> </li> </ul>',
            schema: { type: 'string', enum: ['RequestResponse', 'DryRun'] },
          },
        }),
      'X-Amz-Log-Type': z
        .enum(['None', 'Tail'])
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Log-Type',
            in: 'header',
            required: false,
            description:
              'Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.',
            schema: { type: 'string', enum: ['None', 'Tail'] },
          },
        }),
      'X-Amz-Client-Context': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Context',
            in: 'header',
            required: false,
            description:
              'Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(170)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_\\.]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 170,
            },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description: 'The alias name.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Payload: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload \'{ "key": "value" }\'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InvokeWithResponseStreamResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestContentException',
      content: { 'application/json': { schema: InvalidRequestContentExceptionSchema } },
    },
    483: {
      description: 'RequestTooLargeException',
      content: { 'application/json': { schema: RequestTooLargeExceptionSchema } },
    },
    484: {
      description: 'UnsupportedMediaTypeException',
      content: { 'application/json': { schema: UnsupportedMediaTypeExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    487: {
      description: 'EC2UnexpectedException',
      content: { 'application/json': { schema: EC2UnexpectedExceptionSchema } },
    },
    488: {
      description: 'SubnetIPAddressLimitReachedException',
      content: { 'application/json': { schema: SubnetIPAddressLimitReachedExceptionSchema } },
    },
    489: {
      description: 'ENILimitReachedException',
      content: { 'application/json': { schema: ENILimitReachedExceptionSchema } },
    },
    490: {
      description: 'EFSMountConnectivityException',
      content: { 'application/json': { schema: EFSMountConnectivityExceptionSchema } },
    },
    491: {
      description: 'EFSMountFailureException',
      content: { 'application/json': { schema: EFSMountFailureExceptionSchema } },
    },
    492: {
      description: 'EFSMountTimeoutException',
      content: { 'application/json': { schema: EFSMountTimeoutExceptionSchema } },
    },
    493: {
      description: 'EFSIOException',
      content: { 'application/json': { schema: EFSIOExceptionSchema } },
    },
    494: {
      description: 'SnapStartException',
      content: { 'application/json': { schema: SnapStartExceptionSchema } },
    },
    495: {
      description: 'SnapStartTimeoutException',
      content: { 'application/json': { schema: SnapStartTimeoutExceptionSchema } },
    },
    496: {
      description: 'SnapStartNotReadyException',
      content: { 'application/json': { schema: SnapStartNotReadyExceptionSchema } },
    },
    497: {
      description: 'EC2ThrottledException',
      content: { 'application/json': { schema: EC2ThrottledExceptionSchema } },
    },
    498: {
      description: 'EC2AccessDeniedException',
      content: { 'application/json': { schema: EC2AccessDeniedExceptionSchema } },
    },
    499: {
      description: 'InvalidSubnetIDException',
      content: { 'application/json': { schema: InvalidSubnetIDExceptionSchema } },
    },
    500: {
      description: 'InvalidSecurityGroupIDException',
      content: { 'application/json': { schema: InvalidSecurityGroupIDExceptionSchema } },
    },
    501: {
      description: 'InvalidZipFileException',
      content: { 'application/json': { schema: InvalidZipFileExceptionSchema } },
    },
    502: {
      description: 'KMSDisabledException',
      content: { 'application/json': { schema: KMSDisabledExceptionSchema } },
    },
    503: {
      description: 'KMSInvalidStateException',
      content: { 'application/json': { schema: KMSInvalidStateExceptionSchema } },
    },
    504: {
      description: 'KMSAccessDeniedException',
      content: { 'application/json': { schema: KMSAccessDeniedExceptionSchema } },
    },
    505: {
      description: 'KMSNotFoundException',
      content: { 'application/json': { schema: KMSNotFoundExceptionSchema } },
    },
    506: {
      description: 'InvalidRuntimeException',
      content: { 'application/json': { schema: InvalidRuntimeExceptionSchema } },
    },
    507: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    508: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    509: {
      description: 'RecursiveInvocationException',
      content: { 'application/json': { schema: RecursiveInvocationExceptionSchema } },
    },
  },
})

export const get20190925FunctionsFunctionNameEventInvokeConfigListRoute = createRoute({
  method: 'get',
  path: '/2019-09-25/functions/{FunctionName}/event-invoke-config/list',
  description:
    '<p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>',
  operationId: 'ListFunctionEventInvokeConfigs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'The maximum number of configurations to return.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFunctionEventInvokeConfigsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const get20211031FunctionsFunctionNameUrlsRoute = createRoute({
  method: 'get',
  path: '/2021-10-31/functions/{FunctionName}/urls',
  description: 'Returns a list of Lambda function URLs for the specified function.',
  operationId: 'ListFunctionUrlConfigs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              'The maximum number of function URLs to return in the response. Note that <code>ListFunctionUrlConfigs</code> returns a maximum of 50 items in each response, even if you set the number higher.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFunctionUrlConfigsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const get20150331FunctionsIndexRoute = createRoute({
  method: 'get',
  path: '/2015-03-31/functions/',
  description:
    '<p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version.</p> <note> <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p> </note>',
  operationId: 'ListFunctions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MasterRegion: z
        .string()
        .regex(/ALL|[a-z]{2}(-gov)?-[a-z]+-\d{1}/)
        .exactOptional()
        .openapi({
          param: {
            name: 'MasterRegion',
            in: 'query',
            required: false,
            description:
              'For Lambda@Edge functions, the Amazon Web Services Region of the master function. For example, <code>us-east-1</code> filters the list of functions to include only Lambda@Edge functions replicated from a master function in US East (N. Virginia). If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.',
            schema: { type: 'string', pattern: 'ALL|[a-z]{2}(-gov)?-[a-z]+-\\d{1}' },
          },
        }),
      FunctionVersion: z
        .literal('ALL')
        .exactOptional()
        .openapi({
          param: {
            name: 'FunctionVersion',
            in: 'query',
            required: false,
            description:
              'Set to <code>ALL</code> to include entries for all published versions of each function.',
            schema: { type: 'string', enum: ['ALL'] },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              'The maximum number of functions to return in the response. Note that <code>ListFunctions</code> returns a maximum of 50 items in each response, even if you set the number higher.',
            schema: { type: 'integer', minimum: 1, maximum: 10000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFunctionsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsRoute = createRoute({
  method: 'get',
  path: '/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions',
  description:
    'List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.',
  operationId: 'ListFunctionsByCodeSigningConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CodeSigningConfigArn: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}/,
        )
        .max(200)
        .openapi({
          param: {
            name: 'CodeSigningConfigArn',
            in: 'path',
            required: true,
            description: 'The The Amazon Resource Name (ARN) of the code signing configuration.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:code-signing-config:csc-[a-z0-9]{17}',
              maxLength: 200,
            },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'Maximum number of items to return.',
            schema: { type: 'integer', minimum: 1, maximum: 10000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFunctionsByCodeSigningConfigResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const get20181031LayersLayerNameVersionsRoute = createRoute({
  method: 'get',
  path: '/2018-10-31/layers/{LayerName}/versions',
  description:
    'Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren\'t listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they\'re compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.',
  operationId: 'ListLayerVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      CompatibleRuntime: z
        .enum([
          'nodejs',
          'nodejs4.3',
          'nodejs6.10',
          'nodejs8.10',
          'nodejs10.x',
          'nodejs12.x',
          'nodejs14.x',
          'nodejs16.x',
          'java8',
          'java8.al2',
          'java11',
          'python2.7',
          'python3.6',
          'python3.7',
          'python3.8',
          'python3.9',
          'dotnetcore1.0',
          'dotnetcore2.0',
          'dotnetcore2.1',
          'dotnetcore3.1',
          'dotnet6',
          'nodejs4.3-edge',
          'go1.x',
          'ruby2.5',
          'ruby2.7',
          'provided',
          'provided.al2',
          'nodejs18.x',
          'python3.10',
          'java17',
          'ruby3.2',
          'python3.11',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'CompatibleRuntime',
            in: 'query',
            required: false,
            description:
              '<p>A runtime identifier. For example, <code>go1.x</code>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
            schema: {
              type: 'string',
              enum: [
                'nodejs',
                'nodejs4.3',
                'nodejs6.10',
                'nodejs8.10',
                'nodejs10.x',
                'nodejs12.x',
                'nodejs14.x',
                'nodejs16.x',
                'java8',
                'java8.al2',
                'java11',
                'python2.7',
                'python3.6',
                'python3.7',
                'python3.8',
                'python3.9',
                'dotnetcore1.0',
                'dotnetcore2.0',
                'dotnetcore2.1',
                'dotnetcore3.1',
                'dotnet6',
                'nodejs4.3-edge',
                'go1.x',
                'ruby2.5',
                'ruby2.7',
                'provided',
                'provided.al2',
                'nodejs18.x',
                'python3.10',
                'java17',
                'ruby3.2',
                'python3.11',
              ],
            },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description: 'A pagination token returned by a previous call.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'The maximum number of versions to return.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      CompatibleArchitecture: z
        .enum(['x86_64', 'arm64'])
        .exactOptional()
        .openapi({
          param: {
            name: 'CompatibleArchitecture',
            in: 'query',
            required: false,
            description:
              'The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.',
            schema: { type: 'string', enum: ['x86_64', 'arm64'] },
          },
        }),
    }),
    params: z.object({
      LayerName: z
        .string()
        .regex(
          /(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'LayerName',
            in: 'path',
            required: true,
            description: 'The name or Amazon Resource Name (ARN) of the layer.',
            schema: {
              type: 'string',
              pattern:
                '(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLayerVersionsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const post20181031LayersLayerNameVersionsRoute = createRoute({
  method: 'post',
  path: '/2018-10-31/layers/{LayerName}/versions',
  description:
    '<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>',
  operationId: 'PublishLayerVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      LayerName: z
        .string()
        .regex(
          /(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'LayerName',
            in: 'path',
            required: true,
            description: 'The name or Amazon Resource Name (ARN) of the layer.',
            schema: {
              type: 'string',
              pattern:
                '(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description of the version.' }),
              Content: z
                .object({
                  S3Bucket: S3BucketSchema.and(
                    z.any().openapi({ description: 'The Amazon S3 bucket of the layer archive.' }),
                  ).exactOptional(),
                  S3Key: S3KeySchema.and(
                    z.any().openapi({ description: 'The Amazon S3 key of the layer archive.' }),
                  ).exactOptional(),
                  S3ObjectVersion: S3ObjectVersionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'For versioned objects, the version of the layer archive object to use.',
                      }),
                  ).exactOptional(),
                  ZipFile: BlobSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The base64-encoded contents of the layer archive. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.',
                  required: [],
                }),
              CompatibleRuntimes: z
                .array(RuntimeSchema)
                .max(15)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
                }),
              LicenseInfo: z
                .string()
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The layer\'s software license. It can be any of the following:</p> <ul> <li> <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example, <code>MIT</code>.</p> </li> <li> <p>The URL of a license hosted on the internet. For example, <code>https://opensource.org/licenses/MIT</code>.</p> </li> <li> <p>The full text of the license.</p> </li> </ul>',
                }),
              CompatibleArchitectures: z
                .array(ArchitectureSchema)
                .max(2)
                .exactOptional()
                .openapi({
                  description:
                    'A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.',
                }),
            })
            .openapi({ required: ['Content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: PublishLayerVersionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'CodeStorageExceededException',
      content: { 'application/json': { schema: CodeStorageExceededExceptionSchema } },
    },
  },
})

export const get20181031LayersRoute = createRoute({
  method: 'get',
  path: '/2018-10-31/layers',
  description:
    'Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they\'re compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.',
  operationId: 'ListLayers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      CompatibleRuntime: z
        .enum([
          'nodejs',
          'nodejs4.3',
          'nodejs6.10',
          'nodejs8.10',
          'nodejs10.x',
          'nodejs12.x',
          'nodejs14.x',
          'nodejs16.x',
          'java8',
          'java8.al2',
          'java11',
          'python2.7',
          'python3.6',
          'python3.7',
          'python3.8',
          'python3.9',
          'dotnetcore1.0',
          'dotnetcore2.0',
          'dotnetcore2.1',
          'dotnetcore3.1',
          'dotnet6',
          'nodejs4.3-edge',
          'go1.x',
          'ruby2.5',
          'ruby2.7',
          'provided',
          'provided.al2',
          'nodejs18.x',
          'python3.10',
          'java17',
          'ruby3.2',
          'python3.11',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'CompatibleRuntime',
            in: 'query',
            required: false,
            description:
              '<p>A runtime identifier. For example, <code>go1.x</code>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>',
            schema: {
              type: 'string',
              enum: [
                'nodejs',
                'nodejs4.3',
                'nodejs6.10',
                'nodejs8.10',
                'nodejs10.x',
                'nodejs12.x',
                'nodejs14.x',
                'nodejs16.x',
                'java8',
                'java8.al2',
                'java11',
                'python2.7',
                'python3.6',
                'python3.7',
                'python3.8',
                'python3.9',
                'dotnetcore1.0',
                'dotnetcore2.0',
                'dotnetcore2.1',
                'dotnetcore3.1',
                'dotnet6',
                'nodejs4.3-edge',
                'go1.x',
                'ruby2.5',
                'ruby2.7',
                'provided',
                'provided.al2',
                'nodejs18.x',
                'python3.10',
                'java17',
                'ruby3.2',
                'python3.11',
              ],
            },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description: 'A pagination token returned by a previous call.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'The maximum number of layers to return.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      CompatibleArchitecture: z
        .enum(['x86_64', 'arm64'])
        .exactOptional()
        .openapi({
          param: {
            name: 'CompatibleArchitecture',
            in: 'query',
            required: false,
            description:
              'The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.',
            schema: { type: 'string', enum: ['x86_64', 'arm64'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLayersResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const get20190930FunctionsFunctionNameProvisionedConcurrencyListALLRoute = createRoute({
  method: 'get',
  path: '/2019-09-30/functions/{FunctionName}/provisioned-concurrency#List=ALL',
  description: 'Retrieves a list of provisioned concurrency configurations for a function.',
  operationId: 'ListProvisionedConcurrencyConfigs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'Specify a number to limit the number of configurations returned.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      List: z
        .literal('ALL')
        .openapi({
          param: {
            name: 'List',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ALL'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProvisionedConcurrencyConfigsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const get20170331TagsARNRoute = createRoute({
  method: 'get',
  path: '/2017-03-31/tags/{ARN}',
  description:
    'Returns a function\'s <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.',
  operationId: 'ListTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ARN: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .openapi({
          param: {
            name: 'ARN',
            in: 'path',
            required: true,
            description:
              "The function's Amazon Resource Name (ARN). Note: Lambda does not support adding tags to aliases or versions.",
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\\d{1}:\\d{12}:function:[a-zA-Z0-9-_]+(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const post20170331TagsARNRoute = createRoute({
  method: 'post',
  path: '/2017-03-31/tags/{ARN}',
  description:
    'Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ARN: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .openapi({
          param: {
            name: 'ARN',
            in: 'path',
            required: true,
            description: "The function's Amazon Resource Name (ARN).",
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\\d{1}:\\d{12}:function:[a-zA-Z0-9-_]+(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .openapi({ description: 'A list of tags to apply to the function.' }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const get20150331FunctionsFunctionNameVersionsRoute = createRoute({
  method: 'get',
  path: '/2015-03-31/functions/{FunctionName}/versions',
  description:
    'Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.',
  operationId: 'ListVersionsByFunction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(170)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_\\.]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 170,
            },
          },
        }),
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              'The maximum number of versions to return. Note that <code>ListVersionsByFunction</code> returns a maximum of 50 items in each response, even if you set the number higher.',
            schema: { type: 'integer', minimum: 1, maximum: 10000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVersionsByFunctionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const post20150331FunctionsFunctionNameVersionsRoute = createRoute({
  method: 'post',
  path: '/2015-03-31/functions/{FunctionName}/versions',
  description:
    "<p>Creates a <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html\">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>",
  operationId: 'PublishVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CodeSha256: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of <a>UpdateFunctionCode</a>.",
                }),
              Description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'A description for the version to override the description in the function configuration.',
                }),
              RevisionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: FunctionConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'CodeStorageExceededException',
      content: { 'application/json': { schema: CodeStorageExceededExceptionSchema } },
    },
    485: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    486: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const delete20181031LayersLayerNameVersionsVersionNumberPolicyStatementIdRoute = createRoute(
  {
    method: 'delete',
    path: '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}',
    description:
      'Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.',
    operationId: 'RemoveLayerVersionPermission',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        LayerName: z
          .string()
          .regex(
            /(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+/,
          )
          .min(1)
          .max(140)
          .openapi({
            param: {
              name: 'LayerName',
              in: 'path',
              required: true,
              description: 'The name or Amazon Resource Name (ARN) of the layer.',
              schema: {
                type: 'string',
                pattern:
                  '(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+',
                minLength: 1,
                maxLength: 140,
              },
            },
          }),
        VersionNumber: z
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
              name: 'VersionNumber',
              in: 'path',
              required: true,
              description: 'The version number.',
              schema: { type: 'integer' },
            },
          }),
        StatementId: z
          .string()
          .regex(/([a-zA-Z0-9-_]+)/)
          .min(1)
          .max(100)
          .openapi({
            param: {
              name: 'StatementId',
              in: 'path',
              required: true,
              description: 'The identifier that was specified when the statement was added.',
              schema: { type: 'string', pattern: '([a-zA-Z0-9-_]+)', minLength: 1, maxLength: 100 },
            },
          }),
      }),
      query: z.object({
        RevisionId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'RevisionId',
              in: 'query',
              required: false,
              description:
                'Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
    },
  },
)

export const delete20150331FunctionsFunctionNamePolicyStatementIdRoute = createRoute({
  method: 'delete',
  path: '/2015-03-31/functions/{FunctionName}/policy/{StatementId}',
  description:
    'Revokes function-use permission from an Amazon Web Service or another Amazon Web Services account. You can get the ID of the statement from the output of <a>GetPolicy</a>.',
  operationId: 'RemovePermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
      StatementId: z
        .string()
        .regex(/([a-zA-Z0-9-_.]+)/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'StatementId',
            in: 'path',
            required: true,
            description: 'Statement ID of the permission to remove.',
            schema: { type: 'string', pattern: '([a-zA-Z0-9-_.]+)', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      Qualifier: z
        .string()
        .regex(/(|[a-zA-Z0-9$_-]+)/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Qualifier',
            in: 'query',
            required: false,
            description:
              'Specify a version or alias to remove permissions from a published version of the function.',
            schema: { type: 'string', pattern: '(|[a-zA-Z0-9$_-]+)', minLength: 1, maxLength: 128 },
          },
        }),
      RevisionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'query',
            required: false,
            description:
              "Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const delete20170331TagsARNTagKeysRoute = createRoute({
  method: 'delete',
  path: '/2017-03-31/tags/{ARN}#tagKeys',
  description:
    'Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ARN: z
        .string()
        .regex(
          /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .openapi({
          param: {
            name: 'ARN',
            in: 'path',
            required: true,
            description: "The function's Amazon Resource Name (ARN).",
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\\d{1}:\\d{12}:function:[a-zA-Z0-9-_]+(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of tag keys to remove from the function.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const put20150331FunctionsFunctionNameCodeRoute = createRoute({
  method: 'put',
  path: '/2015-03-31/functions/{FunctionName}/code',
  description:
    '<p>Updates a Lambda function\'s code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p> <p>If the function\'s package type is <code>Image</code>, then you must specify the code package in <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p> <p>If the function\'s package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the <code>ZipFile</code> field.</p> <p>The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>).</p> <p>The function\'s code is locked when you publish a version. You can\'t modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>',
  operationId: 'UpdateFunctionCode',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FunctionName: z
        .string()
        .regex(
          /(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
        )
        .min(1)
        .max(140)
        .openapi({
          param: {
            name: 'FunctionName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>',
            schema: {
              type: 'string',
              pattern:
                '(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?',
              minLength: 1,
              maxLength: 140,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ZipFile: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you. Use only with a function defined with a .zip file archive deployment package.',
                }),
              S3Bucket: z
                .string()
                .regex(/^[0-9A-Za-z\.\-_]*(?<!\.)$/)
                .min(3)
                .max(63)
                .exactOptional()
                .openapi({
                  description:
                    'An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account. Use only with a function defined with a .zip file archive deployment package.',
                }),
              S3Key: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon S3 key of the deployment package. Use only with a function defined with a .zip file archive deployment package.',
                }),
              S3ObjectVersion: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'For versioned objects, the version of the deployment package object to use.',
                }),
              ImageUri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URI of a container image in the Amazon ECR registry. Do not use for a function defined with a .zip file archive.',
                }),
              Publish: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately.',
                }),
              DryRun: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to true to validate the request parameters and access permissions without modifying the function code.',
                }),
              RevisionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.",
                }),
              Architectures: z
                .array(ArchitectureSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FunctionConfigurationSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'CodeStorageExceededException',
      content: { 'application/json': { schema: CodeStorageExceededExceptionSchema } },
    },
    485: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    486: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    487: {
      description: 'CodeVerificationFailedException',
      content: { 'application/json': { schema: CodeVerificationFailedExceptionSchema } },
    },
    488: {
      description: 'InvalidCodeSignatureException',
      content: { 'application/json': { schema: InvalidCodeSignatureExceptionSchema } },
    },
    489: {
      description: 'CodeSigningConfigNotFoundException',
      content: { 'application/json': { schema: CodeSigningConfigNotFoundExceptionSchema } },
    },
  },
})
