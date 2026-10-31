import { createRoute, z } from '@hono/zod-openapi'

const ElasticConfigSchema = z
  .object({
    clusterUri: z
      .string()
      .openapi({ description: 'URL of the elastic cluster', example: 'a string value' }),
    headers: z
      .record(z.string(), z.string())
      .openapi({ description: 'Additionnal http headers', example: { key: 'value' } }),
    index: z
      .string()
      .openapi({
        description: 'Index for events. Default is otoroshi-events',
        example: 'a string value',
      }),
    password: z.string().openapi({ description: 'Optional password', example: 'a string value' }),
    type: z
      .string()
      .openapi({ description: 'Type of events. Default is event', example: 'a string value' }),
    user: z.string().openapi({ description: 'Optional user', example: 'a string value' }),
  })
  .openapi({
    description: 'The configuration for elastic access',
    required: ['clusterUri', 'index', 'type', 'user', 'password', 'headers'],
  })
  .openapi('ElasticConfig')

const KafkaConfigSchema = z
  .object({
    keyPass: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional keypass', example: 'a string value' }),
    keyStore: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional path to keystore', example: 'a string value' }),
    servers: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'URLs of the kafka servers' }),
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional kafka topic (otoroshi-events by default)',
        example: 'a string value',
      }),
    trustore: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional path to trustore', example: 'a string value' }),
  })
  .openapi({ description: 'The configuration for kafka access', required: ['servers'] })
  .openapi('KafkaConfig')

const PulsarDataExporterConfigSchema = z
  .object({
    namespace: z.string().openapi({ description: 'Namespace', example: 'a string value' }),
    tenant: z.string().openapi({ description: 'Tenant', example: 'a string value' }),
    topic: z.string().openapi({ description: 'Topic', example: 'a string value' }),
    uri: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'URI of the pulsar server' }),
  })
  .openapi({
    description: 'The configuration for kafka access',
    required: ['uri', 'tenant', 'namespace', 'topic'],
  })
  .openapi('PulsarDataExporterConfig')

const FileDataExporterConfigSchema = z
  .object({ path: z.string().openapi({ description: 'Path to file', example: 'a string value' }) })
  .openapi({ required: ['path'] })
  .openapi('FileDataExporterConfig')

const MailerGenericExporterConfigSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional headers', example: { key: 'value' } }),
    to: z
      .array(z.string().openapi({ example: 'a string value' }))
      .exactOptional()
      .openapi({ description: 'Email adresses of recipents' }),
    type: z.literal('generic').openapi({ description: 'Type of mailer' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Url of mailer', example: 'a string value' }),
  })
  .openapi({ required: ['type'] })
  .openapi('MailerGenericExporterConfig')

const MailerConsoleExporterConfigSchema = z
  .object({ type: z.literal('generic').exactOptional().openapi({ description: 'Type of mailer' }) })
  .openapi({ required: [] })
  .openapi('MailerConsoleExporterConfig')

const MailerMailgunExporterConfigSchema = z
  .object({
    apiKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mailgun apiKey', example: 'a string value' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mailgun domain', example: 'a string value' }),
    eu: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the mailgun server is european', example: true }),
    to: z
      .array(z.email().openapi({ example: 'admin@otoroshi.io' }))
      .exactOptional()
      .openapi({ description: 'Email adresses of recipents' }),
    type: z.literal('mailgun').openapi({ description: 'Type of mailer' }),
  })
  .openapi({ required: ['type'] })
  .openapi('MailerMailgunExporterConfig')

const MailerMailjetExporterConfigSchema = z
  .object({
    apiKeyPrivate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mailjet private apiKey', example: 'a string value' }),
    apiKeyPublic: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mailjet public apiKey', example: 'a string value' }),
    to: z
      .array(z.email().openapi({ example: 'admin@otoroshi.io' }))
      .exactOptional()
      .openapi({ description: 'Email adresses of recipents' }),
    type: z.literal('mailjet').openapi({ description: 'Type of mailer' }),
  })
  .openapi({ required: ['type'] })
  .openapi('MailerMailjetExporterConfig')

const MailerSendgridExporterConfigSchema = z
  .object({
    apiKeyPublic: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sendgrid apiKey', example: 'a string value' }),
    to: z
      .array(z.email().openapi({ example: 'admin@otoroshi.io' }))
      .exactOptional()
      .openapi({ description: 'Email adresses of recipents' }),
    type: z.literal('sendgrid').openapi({ description: 'Type of mailer' }),
  })
  .openapi({ required: ['type'] })
  .openapi('MailerSendgridExporterConfig')

const ConsoleDataExporterConfigSchema = z.object({}).openapi('ConsoleDataExporterConfig')

const CustomDataExporterConfigSchema = z
  .object({
    config: z
      .record(z.string(), z.string())
      .openapi({ description: 'Custom data exporter config', example: { key: 'value' } }),
    ref: z.string().openapi({ description: 'Script Ref', example: 'a string value' }),
  })
  .openapi({ required: ['ref', 'config'] })
  .openapi('CustomDataExporterConfig')

const FilteringSchema = z
  .object({
    exclude: z
      .array(z.record(z.string(), z.string()).openapi({ example: { key: 'value' } }))
      .exactOptional()
      .openapi({ description: 'Excluding pattern' }),
    include: z
      .array(z.record(z.string(), z.string()).openapi({ example: { key: 'value' } }))
      .exactOptional()
      .openapi({ description: 'Including pattern' }),
  })
  .openapi({ required: ['include, exclude'] })
  .openapi('Filtering')

const LocationSchema = z
  .object({
    teams: z
      .array(z.record(z.string(), z.string()).openapi({ example: { key: 'value' } }))
      .openapi({ description: 'Team ids' }),
    tenant: z.string().openapi({ description: 'Tenant id', example: 'a string value' }),
  })
  .openapi({ required: ['tenant', 'teams'] })
  .openapi('Location')

type DataExporterConfigType = {
  bufferSize?: number
  config?:
    | z.infer<typeof ElasticConfigSchema>
    | z.infer<typeof KafkaConfigSchema>
    | z.infer<typeof PulsarDataExporterConfigSchema>
    | z.infer<typeof FileDataExporterConfigSchema>
    | z.infer<typeof MailerGenericExporterConfigSchema>
    | z.infer<typeof MailerConsoleExporterConfigSchema>
    | z.infer<typeof MailerMailgunExporterConfigSchema>
    | z.infer<typeof MailerMailjetExporterConfigSchema>
    | z.infer<typeof MailerSendgridExporterConfigSchema>
    | z.infer<typeof ConsoleDataExporterConfigSchema>
    | z.infer<typeof CustomDataExporterConfigSchema>
  desc?: string
  enabled?: string
  filtering?: z.infer<typeof FilteringSchema>
  groupDuration?: bigint
  groupSize?: number
  id?: string
  jsonWorkers?: number
  location?: z.infer<typeof LocationSchema>
  metadata?: { [key: string]: string }
  name?: string
  projection?: { [key: string]: string }
  sendWorkers?: number
  typ?: 'kafka' | 'pulsar' | 'file' | 'mailer' | 'elastic' | 'console' | 'custom'
}

const ApiKeySchema = z
  .object({
    authorizedEntities: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({
        description:
          'The group/service ids (prefixed by group_ or service_ on which the key is authorized',
        example: ['a string value'],
      }),
    clientId: z
      .string()
      .openapi({
        description:
          'The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything',
        example: 'a string value',
      }),
    clientName: z
      .string()
      .openapi({
        description: 'The name of the api key, for humans ;-)',
        example: 'a string value',
      }),
    clientSecret: z
      .string()
      .openapi({
        description:
          'The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything',
        example: 'a string value',
      }),
    dailyQuota: z
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
        description: 'Authorized number of calls per day',
        example: 123,
      }),
    enabled: z
      .boolean()
      .openapi({
        description:
          "Whether or not the key is enabled. If disabled, resources won't be available to calls using this key",
        example: true,
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Bunch of metadata for the key', example: { key: 'value' } }),
    monthlyQuota: z
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
        description: 'Authorized number of calls per month',
        example: 123,
      }),
    throttlingQuota: z
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
        description: 'Authorized number of calls per second, measured on 10 seconds',
        example: 123,
      }),
  })
  .openapi({
    description:
      'An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.',
    required: ['clientId', 'clientSecret', 'clientName', 'authorizedEntities', 'enabled'],
  })
  .openapi('ApiKey')

const Auth0ConfigSchema = z
  .object({
    callbackUrl: z
      .string()
      .openapi({ description: 'Auth0 callback URL', example: 'a string value' }),
    clientId: z.string().openapi({ description: 'Auth0 client id', example: 'a string value' }),
    clientSecret: z
      .string()
      .openapi({ description: 'Auth0 client secret', example: 'a string value' }),
    domain: z.string().openapi({ description: 'Auth0 domain', example: 'a string value' }),
  })
  .openapi({
    description: 'Configuration for Auth0 domain',
    required: ['clientId', 'clientSecret', 'domain', 'callbackUrl'],
  })
  .openapi('Auth0Config')

const BadResponseSchema = z
  .object({
    body: z
      .string()
      .openapi({ description: 'The body of the HTTP response', example: 'a string value' }),
    headers: z
      .record(z.string(), z.string())
      .openapi({ description: 'The HTTP headers of the response', example: { key: 'value' } }),
    status: z.int32().openapi({ description: 'The HTTP status for the response', example: 123123 }),
  })
  .openapi({
    description: 'An HTTP response that is not supposed to be returned by a service',
    required: ['status', 'body', 'headers'],
  })
  .openapi('BadResponse')

const BadResponsesFaultConfigSchema = z
  .object({
    ratio: z
      .float64()
      .openapi({
        description:
          'The percentage of requests affected by this fault. Value should be between 0.0 and 1.0',
        example: 42.2,
      }),
    responses: z.array(BadResponseSchema).openapi({ description: 'The possibles responses' }),
  })
  .openapi({
    description: 'Config for bad requests injection fault',
    required: ['ratio', 'responses'],
  })
  .openapi('BadResponsesFaultConfig')

const TargetSchema = z
  .object({
    host: z
      .hostname()
      .openapi({
        description:
          'The host on which the HTTP call will be forwarded. Can be a domain name, or an IP address. Can also have a port',
        example: 'www.google.com',
      }),
    scheme: z
      .string()
      .openapi({
        description: 'The protocol used for communication. Can be http or https',
        example: 'a string value',
      }),
  })
  .openapi({
    description:
      'A Target is where an HTTP call will be forwarded in the end from a service domain',
    required: ['host', 'scheme'],
  })
  .openapi('Target')

const CanarySchema = z
  .object({
    enabled: z
      .boolean()
      .openapi({ description: 'Use canary mode for this service', example: true }),
    root: z
      .string()
      .openapi({
        description:
          "Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar",
        example: 'a string value',
      }),
    targets: z
      .array(TargetSchema)
      .openapi({
        description:
          'The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures',
      }),
    traffic: z
      .int32()
      .openapi({
        description: 'Ratio of traffic that will be sent to canary targets.',
        example: 123123,
      }),
  })
  .openapi({
    description: 'The configuration of the canary mode for a service descriptor',
    required: ['enabled', 'traffic', 'targets', 'root'],
  })
  .openapi('Canary')

const CertificateSchema = z
  .object({
    autoRenew: z
      .string()
      .openapi({
        description: 'Allow Otoroshi to renew the certificate (if self signed)',
        example: 'a string value',
      }),
    ca: z
      .string()
      .openapi({ description: 'Certificate is a CA (read only)', example: 'a string value' }),
    caRef: z
      .string()
      .openapi({
        description: 'Reference for a CA certificate in otoroshi',
        example: 'a string value',
      }),
    chain: z
      .string()
      .openapi({
        description: 'Certificate chain of trust in PEM format',
        example: 'a string value',
      }),
    domain: z
      .string()
      .openapi({ description: 'Domain of the certificate (read only)', example: 'a string value' }),
    from: z.string().openapi({ description: 'Start date of validity', example: 'a string value' }),
    id: z.string().openapi({ description: 'Id of the certificate', example: 'a string value' }),
    privateKey: z
      .string()
      .openapi({ description: 'PKCS8 private key in PEM format', example: 'a string value' }),
    selfSigned: z
      .string()
      .openapi({
        description: 'Certificate is self signed  read only)',
        example: 'a string value',
      }),
    subject: z
      .string()
      .openapi({
        description: 'Subject of the certificate (read only)',
        example: 'a string value',
      }),
    to: z.string().openapi({ description: 'End date of validity', example: 'a string value' }),
    valid: z
      .string()
      .openapi({ description: 'Certificate is valid (read only)', example: 'a string value' }),
  })
  .openapi({
    description: 'A SSL/TLS X509 certificate',
    required: [
      'id',
      'chain',
      'privateKey',
      'caRef',
      'domain',
      'selfSigned',
      'ca',
      'valid',
      'autoRenew',
      'subject',
      'from',
      'to',
    ],
  })
  .openapi('Certificate')

const LargeRequestFaultConfigSchema = z
  .object({
    additionalRequestSize: z
      .int32()
      .openapi({
        description:
          'The size added to the request body in bytes. Added payload will be spaces only.',
        example: 123123,
      }),
    ratio: z
      .float64()
      .openapi({
        description:
          'The percentage of requests affected by this fault. Value should be between 0.0 and 1.0',
        example: 42.2,
      }),
  })
  .openapi({
    description: 'Config for large request injection fault',
    required: ['ratio', 'additionalRequestSize'],
  })
  .openapi('LargeRequestFaultConfig')

const LargeResponseFaultConfigSchema = z
  .object({
    additionalRequestSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The size added to the response body in bytes. Added payload will be spaces only.',
        example: 123123,
      }),
    ratio: z
      .float64()
      .openapi({
        description:
          'The percentage of requests affected by this fault. Value should be between 0.0 and 1.0',
        example: 42.2,
      }),
  })
  .openapi({
    description: 'Config for large response injection fault',
    required: ['ratio', 'additionalResponseSize'],
  })
  .openapi('LargeResponseFaultConfig')

const LatencyInjectionFaultConfigSchema = z
  .object({
    from: z
      .int32()
      .openapi({ description: 'The start range of latency added to the request', example: 123123 }),
    ratio: z
      .float64()
      .openapi({
        description:
          'The percentage of requests affected by this fault. Value should be between 0.0 and 1.0',
        example: 42.2,
      }),
    to: z
      .int32()
      .openapi({ description: 'The end range of latency added to the request', example: 123123 }),
  })
  .openapi({
    description: 'Config for large latency injection fault',
    required: ['ratio', 'from', 'to'],
  })
  .openapi('LatencyInjectionFaultConfig')

const ChaosConfigSchema = z
  .object({
    badResponsesFaultConfig: BadResponsesFaultConfigSchema.exactOptional(),
    enabled: z
      .boolean()
      .openapi({ description: 'Whether or not this config is enabled', example: true }),
    largeRequestFaultConfig: LargeRequestFaultConfigSchema.exactOptional(),
    largeResponseFaultConfig: LargeResponseFaultConfigSchema.exactOptional(),
    latencyInjectionFaultConfig: LatencyInjectionFaultConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Configuration for the faults that can be injected in requests',
    required: ['enabled'],
  })
  .openapi('ChaosConfig')

const CleverSettingsSchema = z
  .object({
    consumerKey: z
      .string()
      .openapi({ description: 'CleverCloud consumer key', example: 'a string value' }),
    consumerSecret: z
      .string()
      .openapi({ description: 'CleverCloud consumer token', example: 'a string value' }),
    orgaId: z
      .string()
      .openapi({ description: 'CleverCloud organization id', example: 'a string value' }),
    secret: z
      .string()
      .openapi({ description: 'CleverCloud oauth secret', example: 'a string value' }),
    token: z
      .string()
      .openapi({ description: 'CleverCloud oauth token', example: 'a string value' }),
  })
  .openapi({
    description: 'Configuration for CleverCloud client',
    required: ['consumerKey', 'consumerSecret', 'token', 'secret', 'orgaId'],
  })
  .openapi('CleverSettings')

const ClientConfigSchema = z
  .object({
    backoffFactor: z
      .int32()
      .openapi({
        description: 'Specify the factor to multiply the delay for each retry',
        example: 123123,
      }),
    callTimeout: z
      .int32()
      .openapi({
        description: 'Specify how long each call should last at most in milliseconds',
        example: 123123,
      }),
    globalTimeout: z
      .int32()
      .openapi({
        description:
          'Specify how long the global call (with retries) should last at most in milliseconds',
        example: 123123,
      }),
    maxErrors: z
      .int32()
      .openapi({
        description: 'Specify how many errors can pass before opening the circuit breaker',
        example: 123123,
      }),
    retries: z
      .int32()
      .openapi({
        description:
          'Specify how many times the client will try to fetch the result of the request after an error before giving up.',
        example: 123123,
      }),
    retryInitialDelay: z
      .int32()
      .openapi({
        description:
          'Specify the delay between two retries. Each retry, the delay is multiplied by the backoff factor',
        example: 123123,
      }),
    sampleInterval: z
      .int32()
      .openapi({
        description:
          'Specify the sliding window time for the circuit breaker in milliseconds, after this time, error count will be reseted',
        example: 123123,
      }),
    useCircuitBreaker: z
      .boolean()
      .openapi({
        description:
          'Use a circuit breaker to avoid cascading failure when calling chains of services. Highly recommended !',
        example: true,
      }),
  })
  .openapi({
    description: 'The configuration of the circuit breaker for a service descriptor',
    required: [
      'useCircuitBreaker',
      'retries',
      'maxErrors',
      'retryInitialDelay',
      'backoffFactor',
      'callTimeout',
      'globalTimeout',
      'sampleInterval',
    ],
  })
  .openapi('ClientConfig')

const CorsSettingsSchema = z
  .object({
    allowCredentials: z
      .boolean()
      .openapi({ description: 'Allow to pass credentials', example: true }),
    allowHeaders: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'The cors allowed headers' }),
    allowMethods: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'The cors allowed methods' }),
    allowOrigin: z
      .string()
      .openapi({ description: 'The cors allowed origin', example: 'a string value' }),
    enabled: z.boolean().openapi({ description: 'Whether or not cors is enabled', example: true }),
    excludedPatterns: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'The cors excluded patterns' }),
    exposeHeaders: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'The cors exposed header' }),
    maxAge: z.int32().openapi({ description: 'Cors max age', example: 123123 }),
  })
  .openapi({
    description: 'The configuration for cors support',
    required: [
      'enabled',
      'allowOrigin',
      'exposeHeaders',
      'allowHeaders',
      'allowMethods',
      'excludedPatterns',
      'maxAge',
      'allowCredentials',
    ],
  })
  .openapi('CorsSettings')

const DataExporterConfigSchema: z.ZodType<DataExporterConfigType> = z
  .lazy(() =>
    z
      .object({
        bufferSize: z
          .int32()
          .exactOptional()
          .openapi({ description: 'buffer size', example: 123123 }),
        config: z
          .xor([
            ElasticConfigSchema,
            KafkaConfigSchema,
            PulsarDataExporterConfigSchema,
            FileDataExporterConfigSchema,
            MailerGenericExporterConfigSchema,
            MailerConsoleExporterConfigSchema,
            MailerMailgunExporterConfigSchema,
            MailerMailjetExporterConfigSchema,
            MailerSendgridExporterConfigSchema,
            ConsoleDataExporterConfigSchema,
            CustomDataExporterConfigSchema,
          ])
          .exactOptional()
          .openapi({ description: 'Data Exporter config' }),
        desc: z
          .string()
          .exactOptional()
          .openapi({ description: 'Description', example: 'a string value' }),
        enabled: z
          .string()
          .exactOptional()
          .openapi({ description: 'Boolean', example: 'a string value' }),
        filtering: FilteringSchema.exactOptional().openapi({ description: 'filtering' }),
        groupDuration: z
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
          .openapi({ type: 'integer', format: 'int64', description: 'duration', example: 123 }),
        groupSize: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Group size', example: 123123 }),
        id: z.string().exactOptional().openapi({ description: 'Id', example: 'a string value' }),
        jsonWorkers: z
          .int32()
          .exactOptional()
          .openapi({ description: 'nb workers', example: 123123 }),
        location: LocationSchema.exactOptional().openapi({ description: 'location' }),
        metadata: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({ description: 'Metadata', example: { key: 'value' } }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name', example: 'a string value' }),
        projection: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({ description: 'projection', example: { key: 'value' } }),
        sendWorkers: z
          .int32()
          .exactOptional()
          .openapi({ description: 'send workers', example: 123123 }),
        typ: z
          .enum(['kafka', 'pulsar', 'file', 'mailer', 'elastic', 'console', 'custom'])
          .exactOptional()
          .openapi({ description: 'Type of data exporter' }),
      })
      .openapi({ description: 'Settings to export Otorshi events', required: [] }),
  )
  .openapi('DataExporterConfig')

const DeletedSchema = z
  .object({ deleted: z.boolean().openapi({ example: true }) })
  .openapi({ required: ['deleted'] })
  .openapi('Deleted')

const DoneSchema = z
  .object({ done: z.boolean().openapi({ example: true }) })
  .openapi({ required: ['done'] })
  .openapi('Done')

const ESAlgoSettingsSchema = z
  .object({
    privateKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The private key for the RSA function', example: 'a string value' }),
    publicKey: z
      .string()
      .openapi({ description: 'The public key for the RSA function', example: 'a string value' }),
    size: z
      .int32()
      .openapi({ description: 'Size for SHA function. can be 256, 384 or 512', example: 123123 }),
    type: z
      .string()
      .openapi({ description: 'String with value ESAlgoSettings', example: 'a string value' }),
  })
  .openapi({
    description: 'Settings for an EC + SHA signing algorithm',
    required: ['type', 'size', 'publicKey'],
  })
  .openapi('ESAlgoSettings')

const EnvironmentSchema = z
  .string()
  .openapi({ description: 'The name of the environment for service descriptors', example: 'prod' })
  .openapi('Environment')

const ErrorTemplateSchema = z
  .object({
    messages: z
      .record(z.string(), z.string())
      .openapi({ description: 'Map for custom messages', example: { key: 'value' } }),
    serviceId: z
      .string()
      .openapi({
        description: 'The Id of the service for which the error template is enabled',
        example: 'a string value',
      }),
    template40x: z
      .string()
      .openapi({ description: 'The html template for 40x errors', example: 'a string value' }),
    template50x: z
      .string()
      .openapi({ description: 'The html template for 50x errors', example: 'a string value' }),
    templateBuild: z
      .string()
      .openapi({ description: 'The html template for build page', example: 'a string value' }),
    templateMaintenance: z
      .string()
      .openapi({
        description: 'The html template for maintenance page',
        example: 'a string value',
      }),
  })
  .openapi({
    description: 'Error templates for a service descriptor',
    required: [
      'serviceId',
      'template40x',
      'template50x',
      'templateBuild',
      'templateMaintenance',
      'messages',
    ],
  })
  .openapi('ErrorTemplate')

const ExposedApiSchema = z
  .object({
    exposeApi: z
      .boolean()
      .openapi({
        description: 'Whether or not the current service expose an API with an Open API descriptor',
        example: true,
      }),
    openApiDescriptorUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of the Open API descriptor',
        example: 'http://www.google.com',
      }),
  })
  .openapi({
    description: 'The Open API configuration for your service (if one)',
    required: ['exposeApi'],
  })
  .openapi('ExposedApi')

const HSAlgoSettingsSchema = z
  .object({
    secret: z
      .string()
      .openapi({
        description: 'The secret value for the HMAC function',
        example: 'a string value',
      }),
    size: z
      .int32()
      .openapi({ description: 'Size for SHA function. can be 256, 384 or 512', example: 123123 }),
    type: z
      .string()
      .openapi({ description: 'String with value HSAlgoSettings', example: 'a string value' }),
  })
  .openapi({
    description: 'Settings for an HMAC + SHA signing algorithm',
    required: ['type', 'size', 'secret'],
  })
  .openapi('HSAlgoSettings')

const RSAlgoSettingsSchema = z
  .object({
    privateKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The private key for the RSA function', example: 'a string value' }),
    publicKey: z
      .string()
      .openapi({ description: 'The public key for the RSA function', example: 'a string value' }),
    size: z
      .int32()
      .openapi({ description: 'Size for SHA function. can be 256, 384 or 512', example: 123123 }),
    type: z
      .string()
      .openapi({ description: 'String with value RSAlgoSettings', example: 'a string value' }),
  })
  .openapi({
    description: 'Settings for an HMAC + SHA signing algorithm',
    required: ['type', 'size', 'publicKey'],
  })
  .openapi('RSAlgoSettings')

const JWKSAlgoSettingsSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The headers for the http call', example: { key: 'value' } }),
    kty: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of key: RSA or EC', example: 'a string value' }),
    timeout: z
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
        description: 'The timeout of the http call',
        example: 123,
      }),
    ttl: z
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
        description: 'The ttl of the keyset',
        example: 123,
      }),
    type: z
      .string()
      .openapi({ description: 'String with value JWKSAlgoSettings', example: 'a string value' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url for the http call', example: 'a string value' }),
  })
  .openapi({ description: 'Settings for a JWK set', required: ['type', 'size', 'publicKey'] })
  .openapi('JWKSAlgoSettings')

const GenericOauth2ModuleConfigSchema = z
  .object({
    accessTokenField: z
      .string()
      .openapi({ description: 'Field name to get access token', example: 'a string value' }),
    authorizeUrl: z
      .string()
      .openapi({ description: 'OAuth authorize URL', example: 'a string value' }),
    callbackUrl: z
      .string()
      .openapi({ description: 'Otoroshi callback URL', example: 'a string value' }),
    claims: z
      .string()
      .exactOptional()
      .openapi({ description: 'The claims of the token', example: 'a string value' }),
    clientId: z.string().openapi({ description: 'OAuth Client id', example: 'a string value' }),
    clientSecret: z
      .string()
      .openapi({ description: 'OAuth Client secret', example: 'a string value' }),
    desc: z
      .string()
      .openapi({ description: 'Description of the config', example: 'a string value' }),
    emailField: z
      .string()
      .openapi({
        description: 'Field name to get email from user profile',
        example: 'a string value',
      }),
    id: z.string().openapi({ description: 'Unique id of the config', example: 'a string value' }),
    jwtVerifier: z
      .xor([
        HSAlgoSettingsSchema,
        RSAlgoSettingsSchema,
        ESAlgoSettingsSchema,
        JWKSAlgoSettingsSchema,
      ])
      .exactOptional()
      .openapi({ description: 'Algo. settings to verify JWT token' }),
    loginUrl: z.string().openapi({ description: 'OAuth login URL', example: 'a string value' }),
    logoutUrl: z.string().openapi({ description: 'OAuth logout URL', example: 'a string value' }),
    name: z.string().openapi({ description: 'Name of the config', example: 'a string value' }),
    nameField: z
      .string()
      .openapi({
        description: 'Field name to get name from user profile',
        example: 'a string value',
      }),
    oidConfig: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the OIDC config. file', example: 'a string value' }),
    otoroshiDataField: z
      .string()
      .openapi({
        description:
          'Field name to get otoroshi metadata from. You can specify sub fields using | as separator',
        example: 'a string value',
      }),
    readProfileFromToken: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The user profile will be read from the JWT token in id_token',
        example: true,
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'The scope of the token', example: 'a string value' }),
    sessionMaxAge: z.int32().openapi({ description: 'Max age of the session', example: 123123 }),
    tokenUrl: z.string().openapi({ description: 'OAuth token URL', example: 'a string value' }),
    type: z
      .string()
      .openapi({ description: 'Type of settings. value is oauth2', example: 'a string value' }),
    useCookies: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Use for redirection to actual service', example: true }),
    useJson: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Use JSON or URL Form Encoded as payload with the OAuth provider',
        example: true,
      }),
    userInfoUrl: z
      .string()
      .openapi({ description: 'OAuth userinfo to get user profile', example: 'a string value' }),
  })
  .openapi({
    description: 'Settings to authenticate users using a generic OAuth2 provider',
    required: [
      'type',
      'id',
      'name',
      'desc',
      'sessionMaxAge',
      'clientId',
      'clientSecret',
      'authorizeUrl',
      'tokenUrl',
      'userInfoUrl',
      'loginUrl',
      'logoutUrl',
      'callbackUrl',
      'accessTokenField',
      'nameField',
      'emailField',
      'otoroshiDataField',
    ],
  })
  .openapi('GenericOauth2ModuleConfig')

const WebhookSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .openapi({
        description: 'Headers to authorize the call or whatever',
        example: { key: 'value' },
      }),
    url: z
      .url()
      .openapi({
        description: 'The URL where events are posted',
        example: 'http://www.google.com',
      }),
  })
  .openapi({ description: 'A callback URL where events are posted', required: ['url', 'headers'] })
  .openapi('Webhook')

const IpFilteringSchema = z
  .object({
    blacklist: z
      .array(z.ipv4().openapi({ example: '192.192.192.192' }))
      .openapi({ description: 'Blacklisted IP addresses' }),
    whitelist: z
      .array(z.ipv4().openapi({ example: '192.192.192.192' }))
      .openapi({ description: 'Whitelisted IP addresses' }),
  })
  .openapi({
    description: 'The filtering configuration block for a service of globally.',
    required: ['whitelist', 'blacklist'],
  })
  .openapi('IpFiltering')

const MailerSettingsSchema = z
  .object({
    apiKey: z
      .string()
      .openapi({ description: 'Mailgun mailer api key', example: 'a string value' }),
    apiKeyPrivate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mailjet mailer private api key', example: 'a string value' }),
    apiKeyPublic: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mailjet mailer public api key', example: 'a string value' }),
    domain: z.string().openapi({ description: 'Mailgun mailer domain', example: 'a string value' }),
    eu: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Mailgun mailer, use EU tenant api', example: true }),
    header: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Generic mailer headers', example: { key: 'value' } }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Type of the mailer: console, generic, mailgun, mailjet',
        example: 'a string value',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Generic mailer url', example: 'a string value' }),
  })
  .openapi({ description: 'Configuration for mailgun api client', required: ['apiKey', 'domain'] })
  .openapi('MailerSettings')

const GlobalConfigSchema = z
  .object({
    alertsEmails: z
      .array(z.email().openapi({ example: 'admin@otoroshi.io' }))
      .openapi({ description: 'Email addresses that will receive all Otoroshi alert events' }),
    alertsWebhooks: z
      .array(WebhookSchema)
      .openapi({ description: 'Webhook that will receive all Otoroshi alert events' }),
    analyticsWebhooks: z
      .array(WebhookSchema)
      .openapi({ description: 'Webhook that will receive all internal Otoroshi events' }),
    apiReadOnly: z
      .boolean()
      .openapi({
        description: "If enabled, Admin API won't be able to write/update/delete entities",
        example: true,
      }),
    autoLinkToDefaultGroup: z
      .boolean()
      .openapi({
        description:
          'If not defined, every new service descriptor will be added to the default group',
        example: true,
      }),
    backofficeAuth0Config: Auth0ConfigSchema.exactOptional().openapi({
      description: 'Optional configuration for the backoffice Auth0 domain',
    }),
    cleverSettings: CleverSettingsSchema.exactOptional().openapi({
      description: 'Optional CleverCloud configuration',
    }),
    elasticReadsConfig: ElasticConfigSchema.exactOptional().openapi({
      description: 'Config. for elastic reads',
    }),
    elasticWritesConfigs: z
      .array(ElasticConfigSchema)
      .exactOptional()
      .openapi({ description: 'Configs. for Elastic writes' }),
    endlessIpAddresses: z
      .array(z.ipv4().openapi({ example: '192.192.192.192' }))
      .openapi({
        description:
          'IP addresses for which any request to Otoroshi will respond with 128 Gb of zeros',
      }),
    ipFiltering: IpFilteringSchema,
    limitConcurrentRequests: z
      .boolean()
      .openapi({
        description: 'If enabled, Otoroshi will reject new request if too much at the same time',
        example: true,
      }),
    lines: z
      .array(z.string().openapi({ example: 'a string value' }))
      .exactOptional()
      .openapi({ description: 'Possibles lines for Otoroshi' }),
    mailerSettings: MailerSettingsSchema.exactOptional().openapi({
      description: 'Optional mailer configuration',
    }),
    maxConcurrentRequests: z
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
        description: 'The number of authorized request processed at the same time',
        example: 123,
      }),
    maxHttp10ResponseSize: z
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
        description: 'The max size in bytes of an HTTP 1.0 response',
        example: 123,
      }),
    maxLogsSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of events kept locally', example: 123123 }),
    middleFingers: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Use middle finger emoji as a response character for endless HTTP responses',
        example: true,
      }),
    perIpThrottlingQuota: z
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
        description:
          'Authorized number of calls per second globally per IP address, measured on 10 seconds',
        example: 123,
      }),
    privateAppsAuth0Config: Auth0ConfigSchema.exactOptional().openapi({
      description: 'Optional configuration for the private apps Auth0 domain',
    }),
    streamEntityOnly: z
      .boolean()
      .openapi({
        description: "HTTP will be streamed only. Doesn't work with old browsers",
        example: true,
      }),
    throttlingQuota: z
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
        description: 'Authorized number of calls per second globally, measured on 10 seconds',
        example: 123,
      }),
    u2fLoginOnly: z
      .boolean()
      .openapi({
        description: 'If enabled, login to backoffice through Auth0 will be disabled',
        example: true,
      }),
    useCircuitBreakers: z
      .boolean()
      .openapi({
        description: 'If enabled, services will be authorized to use circuit breakers',
        example: true,
      }),
  })
  .openapi({
    description:
      'The global config object of Otoroshi, used to customize settings of the current Otoroshi instance',
    required: [
      'streamEntityOnly',
      'autoLinkToDefaultGroup',
      'limitConcurrentRequests',
      'maxConcurrentRequests',
      'useCircuitBreakers',
      'apiReadOnly',
      'u2fLoginOnly',
      'ipFiltering',
      'throttlingQuota',
      'perIpThrottlingQuota',
      'analyticsWebhooks',
      'alertsWebhooks',
      'alertsEmails',
      'endlessIpAddresses',
    ],
  })
  .openapi('GlobalConfig')

const InQueryParamSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the query param', example: 'a string value' }),
    type: z
      .string()
      .openapi({ description: 'String with value InQueryParam', example: 'a string value' }),
  })
  .openapi({ description: 'JWT location in a query param', required: ['type', 'name'] })
  .openapi('InQueryParam')

const InHeaderSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the header', example: 'a string value' }),
    remove: z
      .string()
      .openapi({
        description: "Remove regex inside the value, like 'Bearer '",
        example: 'a string value',
      }),
    type: z
      .string()
      .openapi({ description: 'String with value InHeader', example: 'a string value' }),
  })
  .openapi({ description: 'JWT location in a header', required: ['type', 'name', 'remove'] })
  .openapi('InHeader')

const InCookieSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the cookie', example: 'a string value' }),
    type: z
      .string()
      .openapi({ description: 'String with value InCookie', example: 'a string value' }),
  })
  .openapi({ description: 'JWT location in a cookie', required: ['type', 'name'] })
  .openapi('InCookie')

const MappingSettingsSchema = z
  .object({
    map: z
      .record(z.string(), z.string())
      .openapi({ description: 'Fields to rename', example: { key: 'value' } }),
    remove: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'Fields to remove' }),
    values: z
      .record(z.string(), z.string())
      .openapi({ description: 'Fields to set', example: { key: 'value' } }),
  })
  .openapi({
    description: 'Settings to change fields of a JWT token',
    required: ['map', 'values', 'remove'],
  })
  .openapi('MappingSettings')

const VerificationSettingsSchema = z
  .object({
    fields: z
      .record(z.string(), z.string())
      .openapi({ description: 'Fields to verify with their values', example: { key: 'value' } }),
    mappingSettings: MappingSettingsSchema.exactOptional(),
  })
  .openapi({
    description: 'Settings to verify the value of JWT token fields',
    required: ['fields'],
  })
  .openapi('VerificationSettings')

const PassThroughSchema = z
  .object({
    type: z
      .string()
      .openapi({ description: 'String with value PassThrough', example: 'a string value' }),
    verificationSettings: VerificationSettingsSchema,
  })
  .openapi({
    description: 'Strategy where only signature and field values are verified',
    required: ['type', 'verificationSettings'],
  })
  .openapi('PassThrough')

const SignSchema = z
  .object({
    algoSettings: z.xor([
      HSAlgoSettingsSchema,
      RSAlgoSettingsSchema,
      ESAlgoSettingsSchema,
      JWKSAlgoSettingsSchema,
    ]),
    type: z.string().openapi({ description: 'String with value Sign', example: 'a string value' }),
    verificationSettings: VerificationSettingsSchema,
  })
  .openapi({
    description:
      'Strategy where signature and field values are verified, and then token si re-signed',
    required: ['type', 'verificationSettings', 'algoSettings'],
  })
  .openapi('Sign')

const TransformSettingsSchema = z
  .object({
    location: z.xor([InQueryParamSchema, InHeaderSchema, InCookieSchema]),
    mappingSettings: MappingSettingsSchema,
  })
  .openapi({
    description: 'Settings to transform a JWT token and its location',
    required: ['location', 'mappingSettings'],
  })
  .openapi('TransformSettings')

const TransformSchema = z
  .object({
    algoSettings: z.xor([
      HSAlgoSettingsSchema,
      RSAlgoSettingsSchema,
      ESAlgoSettingsSchema,
      JWKSAlgoSettingsSchema,
    ]),
    transformSettings: TransformSettingsSchema.exactOptional(),
    type: z
      .string()
      .openapi({ description: 'String with value Transform', example: 'a string value' }),
    verificationSettings: VerificationSettingsSchema,
  })
  .openapi({
    description:
      'Strategy where signature and field values are verified, trasnformed and then token si re-signed',
    required: ['type', 'verificationSettings', 'algoSettings'],
  })
  .openapi('Transform')

const GlobalJwtVerifierSchema = z
  .object({
    algoSettings: z.xor([
      HSAlgoSettingsSchema,
      RSAlgoSettingsSchema,
      ESAlgoSettingsSchema,
      JWKSAlgoSettingsSchema,
    ]),
    desc: z.string().openapi({ description: 'Verifier description', example: 'a string value' }),
    enabled: z.boolean().openapi({ description: 'Is it enabled', example: true }),
    id: z.string().openapi({ description: 'Verifier id', example: 'a string value' }),
    name: z.string().openapi({ description: 'Verifier name', example: 'a string value' }),
    source: z.xor([InQueryParamSchema, InHeaderSchema, InCookieSchema]),
    strategy: z.xor([PassThroughSchema, SignSchema, TransformSchema]),
    strict: z.boolean().openapi({ description: 'Does it fail if JWT not found', example: true }),
  })
  .openapi({
    description: 'A JWT verifier used by multiple service descriptor',
    required: [
      'type',
      'id',
      'name',
      'desc',
      'enabled',
      'strict',
      'source',
      'algoSettings',
      'strategy',
    ],
  })
  .openapi('GlobalJwtVerifier')

const GroupSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The descriptoin of the group', example: 'a string value' }),
    id: z
      .string()
      .openapi({
        description:
          'The unique id of the group. Usually 64 random alpha numerical characters, but can be anything',
        example: 'a string value',
      }),
    name: z.string().openapi({ description: 'The name of the group', example: 'a string value' }),
  })
  .openapi({
    description:
      'An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group',
    required: ['id', 'name'],
  })
  .openapi('Group')

const GzipSchema = z
  .object({
    blackList: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'Blacklisted mime types. Wildcard supported' }),
    bufferSize: z
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
        description: 'Size of the GZip buffer',
        example: 123,
      }),
    chunkedThreshold: z
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
        description: 'Threshold for chunking data',
        example: 123,
      }),
    compressionLevel: z
      .int32()
      .openapi({ description: 'Compression level. From 0 to 9', example: 123123 }),
    enabled: z
      .boolean()
      .openapi({ description: 'Whether gzip compression is enabled or not', example: true }),
    excludedPatterns: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'Patterns that are excluded from gzipping' }),
    whiteList: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({ description: 'Whitelisted mime types. Wildcard supported' }),
  })
  .openapi({
    description: 'Configuration for gzip of service responses',
    required: [
      'enabled',
      'excludedPatterns',
      'whiteList',
      'blackList',
      'bufferSize',
      'chunkedThreshold',
      'compressionLevel',
    ],
  })
  .openapi('Gzip')

const HealthCheckSchema = z
  .object({
    enabled: z
      .boolean()
      .openapi({
        description: 'Whether or not healthcheck is enabled on the current service descriptor',
        example: true,
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL to check', example: 'http://www.google.com' }),
  })
  .openapi({
    description:
      'The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive',
    required: ['enabled'],
  })
  .openapi('HealthCheck')

const LocalJwtVerifierSchema = z
  .object({
    algoSettings: z.xor([
      HSAlgoSettingsSchema,
      RSAlgoSettingsSchema,
      ESAlgoSettingsSchema,
      JWKSAlgoSettingsSchema,
    ]),
    enabled: z.boolean().openapi({ description: 'Is it enabled', example: true }),
    source: z.xor([InQueryParamSchema, InHeaderSchema, InCookieSchema]),
    strategy: z.xor([PassThroughSchema, SignSchema, TransformSchema]),
    strict: z.boolean().openapi({ description: 'Does it fail if JWT not found', example: true }),
    type: z
      .string()
      .openapi({ description: "A string with value 'local'", example: 'a string value' }),
  })
  .openapi({
    description: 'A JWT verifier used only for the current service descriptor',
    required: ['type', 'enabled', 'strict', 'source', 'algoSettings', 'strategy'],
  })
  .openapi('LocalJwtVerifier')

const RefJwtVerifierSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Is it enabled', example: true }),
    id: z
      .string()
      .openapi({ description: 'The id of the GlobalJWTVerifier', example: 'a string value' }),
    type: z
      .string()
      .openapi({ description: "A string with value 'ref'", example: 'a string value' }),
  })
  .openapi({
    description: 'Reference to a global JWT verifier',
    required: ['type', 'id', 'enabled'],
  })
  .openapi('RefJwtVerifier')

const RedirectionSettingsSchema = z
  .object({
    code: z.int32().openapi({ description: 'The http redirect code', example: 123123 }),
    enabled: z
      .boolean()
      .openapi({ description: 'Whether or not redirection is enabled', example: true }),
    to: z
      .string()
      .openapi({ description: 'The location for redirection', example: 'a string value' }),
  })
  .openapi({
    description: 'The configuration for redirection per service',
    required: ['enabled', 'to', 'code'],
  })
  .openapi('RedirectionSettings')

const StatsdConfigSchema = z
  .object({
    datadog: z.boolean().openapi({ description: 'Datadog agent', example: true }),
    host: z
      .string()
      .openapi({ description: 'The host of the StatsD agent', example: 'a string value' }),
    port: z.int32().openapi({ description: 'The port of the StatsD agent', example: 123123 }),
  })
  .openapi({
    description: 'The configuration for statsd metrics push',
    required: ['host', 'port', 'datadog'],
  })
  .openapi('StatsdConfig')

const ImportExportStatsSchema = z
  .object({
    calls: z
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
        description: 'Number of calls to Otoroshi globally',
        example: 123,
      }),
    dataIn: z
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
        description: 'The amount of data sent to Otoroshi globally',
        example: 123,
      }),
    dataOut: z
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
        description: 'The amount of data sent from Otoroshi globally',
        example: 123,
      }),
  })
  .openapi({
    description: 'Global stats for the current Otoroshi instances',
    required: ['calls', 'dataIn', 'dataOut'],
  })
  .openapi('ImportExportStats')

const ImportExportSchema = z
  .object({
    admins: z
      .array(
        z
          .object({
            createdAt: z
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
                description: 'The creation date of the user',
                example: 123,
              }),
            label: z
              .string()
              .openapi({ description: 'The label for the user', example: 'a string value' }),
            password: z
              .string()
              .openapi({
                description: 'The hashed password of the user',
                example: 'a string value',
              }),
            registration: z
              .record(z.string(), z.string())
              .openapi({ description: 'The U2F registration slug', example: { key: 'value' } }),
            username: z
              .string()
              .openapi({ description: 'The email address of the user', example: 'a string value' }),
          })
          .openapi({
            description: 'Administrator using FIDO U2F device to access Otoroshi',
            required: ['username', 'label', 'password', 'createdAt', 'registration'],
          }),
      )
      .openapi({ description: 'Current U2F admin at the time of export' }),
    apiKeys: z
      .array(
        z
          .object({
            authorizedEntities: z
              .array(z.string().openapi({ example: 'a string value' }))
              .openapi({
                description:
                  'The group/service ids (prefixed by group_ or service_ on which the key is authorized',
                example: ['a string value'],
              }),
            clientId: z
              .string()
              .openapi({
                description:
                  'The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything',
                example: 'a string value',
              }),
            clientName: z
              .string()
              .openapi({
                description: 'The name of the api key, for humans ;-)',
                example: 'a string value',
              }),
            clientSecret: z
              .string()
              .openapi({
                description:
                  'The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything',
                example: 'a string value',
              }),
            dailyQuota: z
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
                description: 'Authorized number of calls per day',
                example: 123,
              }),
            enabled: z
              .boolean()
              .openapi({
                description:
                  "Whether or not the key is enabled. If disabled, resources won't be available to calls using this key",
                example: true,
              }),
            metadata: z
              .record(z.string(), z.string())
              .exactOptional()
              .openapi({ description: 'Bunch of metadata for the key', example: { key: 'value' } }),
            monthlyQuota: z
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
                description: 'Authorized number of calls per month',
                example: 123,
              }),
            throttlingQuota: z
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
                description: 'Authorized number of calls per second, measured on 10 seconds',
                example: 123,
              }),
          })
          .openapi({
            description:
              'An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.',
            required: ['clientId', 'clientSecret', 'clientName', 'authorizedEntities', 'enabled'],
          }),
      )
      .openapi({ description: 'Current apik keys at the time of export' }),
    appConfig: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Current env variables at the time of export',
        example: { key: 'value' },
      }),
    config: GlobalConfigSchema.openapi({
      description: 'Current global config at the time of export',
    }),
    date: z.iso.datetime({ offset: true }).openapi({ example: '2017-07-21T17:32:28Z' }),
    dateRaw: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', example: 123 }),
    errorTemplates: z
      .array(
        z
          .object({
            messages: z
              .record(z.string(), z.string())
              .openapi({ description: 'Map for custom messages', example: { key: 'value' } }),
            serviceId: z
              .string()
              .openapi({
                description: 'The Id of the service for which the error template is enabled',
                example: 'a string value',
              }),
            template40x: z
              .string()
              .openapi({
                description: 'The html template for 40x errors',
                example: 'a string value',
              }),
            template50x: z
              .string()
              .openapi({
                description: 'The html template for 50x errors',
                example: 'a string value',
              }),
            templateBuild: z
              .string()
              .openapi({
                description: 'The html template for build page',
                example: 'a string value',
              }),
            templateMaintenance: z
              .string()
              .openapi({
                description: 'The html template for maintenance page',
                example: 'a string value',
              }),
          })
          .openapi({
            description: 'Error templates for a service descriptor',
            required: [
              'serviceId',
              'template40x',
              'template50x',
              'templateBuild',
              'templateMaintenance',
              'messages',
            ],
          }),
      )
      .openapi({ description: 'Current error templates at the time of export' }),
    label: z.string().openapi({ example: 'a string value' }),
    serviceDescriptors: z
      .array(
        z
          .object({
            Canary: CanarySchema.exactOptional(),
            additionalHeaders: z
              .record(z.string(), z.string())
              .exactOptional()
              .openapi({
                description:
                  'Specify headers that will be added to each client request. Useful to add authentication',
                example: { key: 'value' },
              }),
            api: ExposedApiSchema.exactOptional(),
            authConfigRef: z
              .string()
              .exactOptional()
              .openapi({
                description: 'A reference to a global auth module config',
                example: 'a string value',
              }),
            buildMode: z
              .boolean()
              .openapi({
                description: 'Display a construction page when a user try to use the service',
                example: true,
              }),
            chaosConfig: ChaosConfigSchema.exactOptional(),
            clientConfig: ClientConfigSchema.exactOptional(),
            clientValidatorRef: z
              .string()
              .exactOptional()
              .openapi({
                description: 'A reference to validation authority',
                example: 'a string value',
              }),
            cors: CorsSettingsSchema.exactOptional(),
            domain: z
              .string()
              .openapi({
                description: 'The domain on which the service is available.',
                example: 'a string value',
              }),
            enabled: z
              .boolean()
              .openapi({
                description:
                  'Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist',
                example: true,
              }),
            enforceSecureCommunication: z
              .boolean()
              .openapi({
                description:
                  'When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside',
                example: true,
              }),
            env: z
              .string()
              .openapi({
                description:
                  "The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'",
                example: 'a string value',
              }),
            forceHttps: z
              .boolean()
              .openapi({
                description: 'Will force redirection to https:// if not present',
                example: true,
              }),
            groups: z
              .array(z.string().openapi({ example: 'a string value' }))
              .openapi({
                description:
                  'Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group',
                example: ['a string value'],
              }),
            gzip: GzipSchema.exactOptional(),
            headersVerification: z
              .record(z.string(), z.string())
              .exactOptional()
              .openapi({
                description: 'Specify headers that will be verified after routing.',
                example: { key: 'value' },
              }),
            healthCheck: HealthCheckSchema.exactOptional(),
            id: z
              .uuid()
              .openapi({
                description: 'A unique random string to identify your service',
                example: '110e8400-e29b-11d4-a716-446655440000',
              }),
            ipFiltering: IpFilteringSchema.exactOptional(),
            jwtVerifier: z.xor([LocalJwtVerifierSchema, RefJwtVerifierSchema]).exactOptional(),
            localHost: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The host used localy, mainly localhost:xxxx',
                example: 'a string value',
              }),
            localScheme: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The scheme used localy, mainly http',
                example: 'a string value',
              }),
            maintenanceMode: z
              .boolean()
              .openapi({
                description: 'Display a maintainance page when a user try to use the service',
                example: true,
              }),
            matchingHeaders: z
              .record(z.string(), z.string())
              .exactOptional()
              .openapi({
                description:
                  'Specify headers that MUST be present on client request to route it. Useful to implement versioning',
                example: { key: 'value' },
              }),
            matchingRoot: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The root path on which the service is available',
                example: 'a string value',
              }),
            metadata: z
              .record(z.string(), z.string())
              .exactOptional()
              .openapi({
                description: 'Just a bunch of random properties',
                example: { key: 'value' },
              }),
            name: z
              .string()
              .openapi({
                description:
                  'The name of your service. Only for debug and human readability purposes',
                example: 'a string value',
              }),
            overrideHost: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Host header will be overriden with Host of the target',
                example: true,
              }),
            privateApp: z
              .boolean()
              .openapi({
                description:
                  'When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain',
                example: true,
              }),
            privatePatterns: z
              .array(z.string().openapi({ example: 'a string value' }))
              .exactOptional()
              .openapi({
                description:
                  'If you define a public pattern that is a little bit too much, you can make some of public URL private again',
              }),
            publicPatterns: z
              .array(z.string().openapi({ example: 'a string value' }))
              .exactOptional()
              .openapi({
                description:
                  "By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'",
              }),
            redirectToLocal: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests',
                example: true,
              }),
            redirection: RedirectionSettingsSchema.exactOptional(),
            root: z
              .string()
              .openapi({
                description:
                  "Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar",
                example: 'a string value',
              }),
            secComExcludedPatterns: z
              .array(z.string().openapi({ example: 'a string value' }))
              .exactOptional()
              .openapi({ description: 'URI patterns excluded from secured communications' }),
            secComSettings: z
              .xor([
                HSAlgoSettingsSchema,
                RSAlgoSettingsSchema,
                ESAlgoSettingsSchema,
                JWKSAlgoSettingsSchema,
              ])
              .exactOptional(),
            sendOtoroshiHeadersBack: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...',
                example: true,
              }),
            statsdConfig: StatsdConfigSchema.exactOptional(),
            subdomain: z
              .string()
              .openapi({
                description: 'The subdomain on which the service is available',
                example: 'a string value',
              }),
            targets: z
              .array(TargetSchema)
              .openapi({
                description:
                  'The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures',
              }),
            transformerRef: z
              .string()
              .exactOptional()
              .openapi({
                description: 'A reference to a request transformer',
                example: 'a string value',
              }),
            userFacing: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'The fact that this service will be seen by users and cannot be impacted by the Snow Monkey',
                example: true,
              }),
            xForwardedHeaders: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Send X-Forwarded-* headers', example: true }),
          })
          .openapi({
            description:
              'An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism',
            required: [
              'id',
              'groups',
              'name',
              'env',
              'domain',
              'subdomain',
              'targets',
              'root',
              'enabled',
              'privateApp',
              'forceHttps',
              'maintenanceMode',
              'buildMode',
              'enforceSecureCommunication',
            ],
          }),
      )
      .openapi({ description: 'Current service descriptors at the time of export' }),
    serviceGroups: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'The descriptoin of the group', example: 'a string value' }),
            id: z
              .string()
              .openapi({
                description:
                  'The unique id of the group. Usually 64 random alpha numerical characters, but can be anything',
                example: 'a string value',
              }),
            name: z
              .string()
              .openapi({ description: 'The name of the group', example: 'a string value' }),
          })
          .openapi({
            description:
              'An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group',
            required: ['id', 'name'],
          }),
      )
      .openapi({ description: 'Current service groups at the time of export' }),
    simpleAdmins: z
      .array(
        z
          .object({
            createdAt: z
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
                description: 'The creation date of the user',
                example: 123,
              }),
            label: z
              .string()
              .openapi({ description: 'The label for the user', example: 'a string value' }),
            password: z
              .string()
              .openapi({
                description: 'The hashed password of the user',
                example: 'a string value',
              }),
            username: z
              .string()
              .openapi({ description: 'The email address of the user', example: 'a string value' }),
          })
          .openapi({
            description: 'Administrator using just login/password tuple to access Otoroshi',
            required: ['username', 'label', 'password', 'createdAt'],
          }),
      )
      .openapi({ description: 'Current simple admins at the time of export' }),
    stats: ImportExportStatsSchema.openapi({
      description: 'Current global stats at the time of export',
    }),
  })
  .openapi({
    description:
      'The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi',
    required: [
      'label',
      'dateRaw',
      'date',
      'stats',
      'config',
      'admins',
      'simpleAdmins',
      'serviceGroups',
      'apiKeys',
      'serviceDescriptors',
      'errorTemplates',
    ],
  })
  .openapi('ImportExport')

const InMemoryUserSchema = z
  .object({
    email: z.string().openapi({ description: 'Email of the user', example: 'a string value' }),
    metadata: z
      .record(z.string(), z.string())
      .openapi({ description: 'Metadata of the user', example: { key: 'value' } }),
    name: z.string().openapi({ description: 'Name of the user', example: 'a string value' }),
    password: z
      .string()
      .openapi({ description: 'Password of the user (BCrypt hash)', example: 'a string value' }),
  })
  .openapi({ description: 'A user', required: ['name', 'password', 'email', 'metadata'] })
  .openapi('InMemoryUser')

const InMemoryAuthModuleConfigSchema = z
  .object({
    desc: z
      .string()
      .openapi({ description: 'Description of the config', example: 'a string value' }),
    id: z.string().openapi({ description: 'Unique id of the config', example: 'a string value' }),
    name: z.string().openapi({ description: 'Name of the config', example: 'a string value' }),
    sessionMaxAge: z
      .string()
      .openapi({ description: 'Max age of the session', example: 'a string value' }),
    type: z
      .string()
      .openapi({ description: 'Type of settings. value is basic', example: 'a string value' }),
    users: z.array(InMemoryUserSchema).openapi({ description: 'List of users' }),
  })
  .openapi({
    description: 'Settings to authenticate users using the in memory user store',
    required: ['type', 'id', 'name', 'desc', 'users', 'sessionMaxAge'],
  })
  .openapi('InMemoryAuthModuleConfig')

const LdapAuthModuleConfigSchema = z
  .object({
    adminPassword: z
      .string()
      .openapi({ description: 'The admin password', example: 'a string value' }),
    adminUsername: z
      .string()
      .openapi({ description: 'The admin username', example: 'a string value' }),
    desc: z
      .string()
      .openapi({ description: 'Description of the config', example: 'a string value' }),
    emailField: z
      .string()
      .openapi({
        description: 'Field name to get email from user profile',
        example: 'a string value',
      }),
    groupFilter: z
      .string()
      .openapi({ description: 'Filter for groups', example: 'a string value' }),
    id: z.string().openapi({ description: 'Unique id of the config', example: 'a string value' }),
    name: z.string().openapi({ description: 'Name of the config', example: 'a string value' }),
    nameField: z
      .string()
      .openapi({
        description: 'Field name to get name from user profile',
        example: 'a string value',
      }),
    otoroshiDataField: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Field name to get otoroshi metadata from. You can specify sub fields using | as separator',
        example: 'a string value',
      }),
    searchBase: z.string().openapi({ description: 'LDAP search base', example: 'a string value' }),
    searchFilter: z
      .string()
      .openapi({ description: 'Filter for users', example: 'a string value' }),
    serverUrl: z
      .string()
      .openapi({ description: 'URL of the ldap server', example: 'a string value' }),
    sessionMaxAge: z.int32().openapi({ description: 'Max age of the session', example: 123123 }),
    type: z
      .string()
      .openapi({ description: 'Type of settings. value is ldap', example: 'a string value' }),
    userBase: z.string().openapi({ description: 'LDAP user base DN', example: 'a string value' }),
  })
  .openapi({
    description: 'Settings to authenticate users using a generic OAuth2 provider',
    required: [
      'type',
      'id',
      'name',
      'desc',
      'sessionMaxAge',
      'serverUrl',
      'searchBase',
      'userBase',
      'groupFilter',
      'searchFilter',
      'adminUsername',
      'adminPassword',
      'nameField',
      'emailField',
      'metadataField',
    ],
  })
  .openapi('LdapAuthModuleConfig')

const LdapUserSchema = z
  .object({
    email: z.string().openapi({ description: 'Email of the user', example: 'a string value' }),
    metadata: z
      .record(z.string(), z.string())
      .openapi({ description: 'Metadata of the user', example: { key: 'value' } }),
    name: z.string().openapi({ description: 'Name of the user', example: 'a string value' }),
  })
  .openapi({ description: 'A user', required: ['name', 'email', 'metadata'] })
  .openapi('LdapUser')

const OtoroshiHealthSchema = z
  .object({
    datastore: z.enum(['healthy', 'unhealthy', 'unreachable']),
    otoroshi: z.enum(['healthy', 'unhealthy', 'down']),
  })
  .openapi({
    description: 'The structure that represent current Otoroshi health',
    required: ['label', 'otoroshi', 'datastore'],
  })
  .openapi('OtoroshiHealth')

const OutageSchema = z
  .object({
    descriptorId: z
      .string()
      .openapi({ description: 'The service impacted by outage', example: 'a string value' }),
    descriptorName: z
      .string()
      .openapi({
        description: 'The name of service impacted by outage',
        example: 'a string value',
      }),
    duration: z.int32().openapi({ description: 'The duration of the outage', example: 123123 }),
    until: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .openapi({ format: 'time', description: 'The end of the outage', example: '17:32:28.000' }),
  })
  .openapi({
    description: 'An outage by the Snow Monkey on a service',
    required: ['descriptorId', 'descriptorName', 'until', 'duration'],
  })
  .openapi('Outage')

const OutageStrategySchema = z
  .enum(['OneServicePerGroup', 'AllServicesPerGroup'])
  .openapi('OutageStrategy')

const PatchSchema = z
  .array(
    z
      .object({
        op: z.enum(['add', 'replace', 'remove', 'copy', 'test']),
        path: z.string().openapi({ example: 'a string value' }),
        value: z.any().exactOptional(),
      })
      .openapi({ required: ['op', 'path'] }),
  )
  .openapi({
    description:
      'A set of changes described in JSON Patch format: http://jsonpatch.com/ (RFC 6902)',
  })
  .openapi('Patch')

const QuotasSchema = z
  .object({
    authorizedCallsPerDay: z
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
        description: 'The number of authorized calls per day',
        example: 123,
      }),
    authorizedCallsPerMonth: z
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
        description: 'The number of authorized calls per month',
        example: 123,
      }),
    authorizedCallsPerSec: z
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
        description: 'The number of authorized calls per second',
        example: 123,
      }),
    currentCallsPerDay: z
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
        description: 'The current number of calls per day',
        example: 123,
      }),
    currentCallsPerMonth: z
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
        description: 'The current number of calls per month',
        example: 123,
      }),
    currentCallsPerSec: z
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
        description: 'The current number of calls per second',
        example: 123,
      }),
    remainingCallsPerDay: z
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
        description: 'The remaining number of calls per day',
        example: 123,
      }),
    remainingCallsPerMonth: z
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
        description: 'The number of authorized calls per month',
        example: 123,
      }),
    remainingCallsPerSec: z
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
        description: 'The remaining number of calls per second',
        example: 123,
      }),
  })
  .openapi({
    description: 'Quotas state for an api key on a service group',
    required: [
      'authorizedCallsPerSec',
      'currentCallsPerSec',
      'remainingCallsPerSec',
      'authorizedCallsPerDay',
      'currentCallsPerDay',
      'remainingCallsPerDay',
      'authorizedCallsPerMonth',
      'currentCallsPerMonth',
      'remainingCallsPerMonth',
    ],
  })
  .openapi('Quotas')

const ScriptSchema = z
  .object({
    code: z
      .record(z.string(), z.string())
      .openapi({ description: 'The code of the script', example: { key: 'value' } }),
    desc: z
      .record(z.string(), z.string())
      .openapi({ description: 'The description of the script', example: { key: 'value' } }),
    id: z.string().openapi({ description: 'The id of the script', example: 'a string value' }),
    name: z.string().openapi({ description: 'The name of the script', example: 'a string value' }),
  })
  .openapi({
    description: 'A script to transformer otoroshi requests ',
    required: ['id', 'name', 'desc', 'code'],
  })
  .openapi('Script')

const ScriptCompilationErrorSchema = z
  .object({
    column: z
      .string()
      .openapi({ description: 'The column of the error', example: 'a string value' }),
    file: z
      .record(z.string(), z.string())
      .openapi({ description: 'The file where the error is located', example: { key: 'value' } }),
    line: z.string().openapi({ description: 'The line of the error', example: 'a string value' }),
    message: z
      .record(z.string(), z.string())
      .openapi({ description: 'The message to display for the error', example: { key: 'value' } }),
    rawMessage: z
      .record(z.string(), z.string())
      .openapi({ description: 'The raw message from the compiler', example: { key: 'value' } }),
  })
  .openapi({
    description: 'The error of the compilation of a Script',
    required: ['line', 'column', 'file', 'rawMessage', 'message'],
  })
  .openapi('ScriptCompilationError')

const ScriptCompilationResultSchema = z
  .object({
    done: z.boolean().openapi({ description: 'Is the task done or not', example: true }),
    error: ScriptCompilationErrorSchema.exactOptional(),
  })
  .openapi({ description: 'The result of the compilation of a Script', required: ['done'] })
  .openapi('ScriptCompilationResult')

const ServiceSchema = z
  .object({
    Canary: CanarySchema.exactOptional(),
    additionalHeaders: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Specify headers that will be added to each client request. Useful to add authentication',
        example: { key: 'value' },
      }),
    api: ExposedApiSchema.exactOptional(),
    authConfigRef: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A reference to a global auth module config',
        example: 'a string value',
      }),
    buildMode: z
      .boolean()
      .openapi({
        description: 'Display a construction page when a user try to use the service',
        example: true,
      }),
    chaosConfig: ChaosConfigSchema.exactOptional(),
    clientConfig: ClientConfigSchema.exactOptional(),
    clientValidatorRef: z
      .string()
      .exactOptional()
      .openapi({ description: 'A reference to validation authority', example: 'a string value' }),
    cors: CorsSettingsSchema.exactOptional(),
    domain: z
      .string()
      .openapi({
        description: 'The domain on which the service is available.',
        example: 'a string value',
      }),
    enabled: z
      .boolean()
      .openapi({
        description:
          'Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist',
        example: true,
      }),
    enforceSecureCommunication: z
      .boolean()
      .openapi({
        description:
          'When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside',
        example: true,
      }),
    env: z
      .string()
      .openapi({
        description:
          "The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'",
        example: 'a string value',
      }),
    forceHttps: z
      .boolean()
      .openapi({ description: 'Will force redirection to https:// if not present', example: true }),
    groups: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({
        description:
          'Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group',
        example: ['a string value'],
      }),
    gzip: GzipSchema.exactOptional(),
    headersVerification: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Specify headers that will be verified after routing.',
        example: { key: 'value' },
      }),
    healthCheck: HealthCheckSchema.exactOptional(),
    id: z
      .uuid()
      .openapi({
        description: 'A unique random string to identify your service',
        example: '110e8400-e29b-11d4-a716-446655440000',
      }),
    ipFiltering: IpFilteringSchema.exactOptional(),
    jwtVerifier: z.xor([LocalJwtVerifierSchema, RefJwtVerifierSchema]).exactOptional(),
    localHost: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The host used localy, mainly localhost:xxxx',
        example: 'a string value',
      }),
    localScheme: z
      .string()
      .exactOptional()
      .openapi({ description: 'The scheme used localy, mainly http', example: 'a string value' }),
    maintenanceMode: z
      .boolean()
      .openapi({
        description: 'Display a maintainance page when a user try to use the service',
        example: true,
      }),
    matchingHeaders: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Specify headers that MUST be present on client request to route it. Useful to implement versioning',
        example: { key: 'value' },
      }),
    matchingRoot: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The root path on which the service is available',
        example: 'a string value',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Just a bunch of random properties', example: { key: 'value' } }),
    name: z
      .string()
      .openapi({
        description: 'The name of your service. Only for debug and human readability purposes',
        example: 'a string value',
      }),
    overrideHost: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Host header will be overriden with Host of the target',
        example: true,
      }),
    privateApp: z
      .boolean()
      .openapi({
        description:
          'When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain',
        example: true,
      }),
    privatePatterns: z
      .array(z.string().openapi({ example: 'a string value' }))
      .exactOptional()
      .openapi({
        description:
          'If you define a public pattern that is a little bit too much, you can make some of public URL private again',
      }),
    publicPatterns: z
      .array(z.string().openapi({ example: 'a string value' }))
      .exactOptional()
      .openapi({
        description:
          "By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'",
      }),
    redirectToLocal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests',
        example: true,
      }),
    redirection: RedirectionSettingsSchema.exactOptional(),
    root: z
      .string()
      .openapi({
        description:
          "Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar",
        example: 'a string value',
      }),
    secComExcludedPatterns: z
      .array(z.string().openapi({ example: 'a string value' }))
      .exactOptional()
      .openapi({ description: 'URI patterns excluded from secured communications' }),
    secComSettings: z
      .xor([
        HSAlgoSettingsSchema,
        RSAlgoSettingsSchema,
        ESAlgoSettingsSchema,
        JWKSAlgoSettingsSchema,
      ])
      .exactOptional(),
    sendOtoroshiHeadersBack: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...',
        example: true,
      }),
    statsdConfig: StatsdConfigSchema.exactOptional(),
    subdomain: z
      .string()
      .openapi({
        description: 'The subdomain on which the service is available',
        example: 'a string value',
      }),
    targets: z
      .array(TargetSchema)
      .openapi({
        description:
          'The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures',
      }),
    transformerRef: z
      .string()
      .exactOptional()
      .openapi({ description: 'A reference to a request transformer', example: 'a string value' }),
    userFacing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The fact that this service will be seen by users and cannot be impacted by the Snow Monkey',
        example: true,
      }),
    xForwardedHeaders: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Send X-Forwarded-* headers', example: true }),
  })
  .openapi({
    description:
      'An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism',
    required: [
      'id',
      'groups',
      'name',
      'env',
      'domain',
      'subdomain',
      'targets',
      'root',
      'enabled',
      'privateApp',
      'forceHttps',
      'maintenanceMode',
      'buildMode',
      'enforceSecureCommunication',
    ],
  })
  .openapi('Service')

const SimpleAdminSchema = z
  .object({
    createdAt: z
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
        description: 'The creation date of the user',
        example: 123,
      }),
    label: z.string().openapi({ description: 'The label for the user', example: 'a string value' }),
    password: z
      .string()
      .openapi({ description: 'The hashed password of the user', example: 'a string value' }),
    username: z
      .string()
      .openapi({ description: 'The email address of the user', example: 'a string value' }),
  })
  .openapi({
    description: 'Administrator using just login/password tuple to access Otoroshi',
    required: ['username', 'label', 'password', 'createdAt'],
  })
  .openapi('SimpleAdmin')

const SnowMonkeyConfigSchema = z
  .object({
    chaosConfig: ChaosConfigSchema,
    dryRun: z
      .boolean()
      .openapi({
        description: 'Whether or not outages will actualy impact requests',
        example: true,
      }),
    enabled: z
      .boolean()
      .openapi({ description: 'Whether or not this config is enabled', example: true }),
    includeUserFacingDescriptors: z
      .boolean()
      .openapi({
        description: 'Whether or not user facing apps. will be impacted by Snow Monkey',
        example: true,
      }),
    outageDurationFrom: z
      .int32()
      .openapi({ description: 'Start of outage duration range', example: 123123 }),
    outageDurationTo: z
      .int32()
      .openapi({ description: 'End of outage duration range', example: 123123 }),
    outageStrategy: OutageStrategySchema.openapi({ description: '' }),
    startTime: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .openapi({
        format: 'time',
        description: 'Start time of Snow Monkey each day',
        example: '17:32:28.000',
      }),
    stopTime: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .openapi({
        format: 'time',
        description: 'Stop time of Snow Monkey each day',
        example: '17:32:28.000',
      }),
    targetGroups: z
      .array(z.string().openapi({ example: 'a string value' }))
      .openapi({
        description: 'Groups impacted by Snow Monkey. If empty, all groups will be impacted',
      }),
    timesPerDay: z
      .int32()
      .openapi({
        description: 'Number of time per day each service will be outage',
        example: 123123,
      }),
  })
  .openapi({
    description:
      "Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉",
    required: [
      'enabled',
      'outageStrategy',
      'includeUserFacingDescriptors',
      'dryRun',
      'timesPerDay',
      'startTime',
      'stopTime',
      'outageDurationFrom',
      'outageDurationTo',
      'targetGroups',
      'chaosConfig',
    ],
  })
  .openapi('SnowMonkeyConfig')

const StatsSchema = z
  .object({
    calls: z
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
        description: 'Number of calls on the specified service or globally',
        example: 123,
      }),
    concurrentHandledRequests: z
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
        description: 'The number of concurrent request currently',
        example: 123,
      }),
    dataIn: z
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
        description: 'The amount of data sent to the specified service or Otoroshi globally',
        example: 123,
      }),
    dataInRate: z
      .float64()
      .openapi({
        description: 'The rate of data sent to the specified service or Otoroshi globally',
        example: 42.2,
      }),
    dataOut: z
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
        description: 'The amount of data sent from the specified service or Otoroshi globally',
        example: 123,
      }),
    dataOutRate: z
      .float64()
      .openapi({
        description: 'The rate of data sent from the specified service or Otoroshi globally',
        example: 42.2,
      }),
    duration: z
      .float64()
      .openapi({ description: 'The average duration for a call', example: 42.2 }),
    overhead: z
      .float64()
      .openapi({
        description: 'The average overhead time induced by Otoroshi for each call',
        example: 42.2,
      }),
    rate: z
      .float64()
      .openapi({
        description: 'The rate of data sent from and to the specified service or Otoroshi globally',
        example: 42.2,
      }),
  })
  .openapi({
    description: 'Live stats for a service or globally',
    required: [
      'calls',
      'dataIn',
      'dataOut',
      'rate',
      'duration',
      'overhead',
      'dataInRate',
      'dataOutRate',
      'concurrentHandledRequests',
    ],
  })
  .openapi('Stats')

const U2FAdminSchema = z
  .object({
    createdAt: z
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
        description: 'The creation date of the user',
        example: 123,
      }),
    label: z.string().openapi({ description: 'The label for the user', example: 'a string value' }),
    password: z
      .string()
      .openapi({ description: 'The hashed password of the user', example: 'a string value' }),
    registration: z
      .record(z.string(), z.string())
      .openapi({ description: 'The U2F registration slug', example: { key: 'value' } }),
    username: z
      .string()
      .openapi({ description: 'The email address of the user', example: 'a string value' }),
  })
  .openapi({
    description: 'Administrator using FIDO U2F device to access Otoroshi',
    required: ['username', 'label', 'password', 'createdAt', 'registration'],
  })
  .openapi('U2FAdmin')

const ValidationAuthoritySchema = z
  .object({
    alwaysValid: z
      .boolean()
      .openapi({ description: 'Bypass http calls, every certificates are valids', example: true }),
    badTtl: z
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
        description: 'The TTL for invalid access response caching',
        example: 123,
      }),
    description: z
      .string()
      .openapi({ description: 'The description of the settings', example: 'a string value' }),
    goodTtl: z
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
        description: 'The TTL for valid access response caching',
        example: 123,
      }),
    headers: z
      .record(z.string(), z.string())
      .openapi({ description: 'HTTP call headers', example: { key: 'value' } }),
    host: z.string().openapi({ description: 'The host of the server', example: 'a string value' }),
    id: z.string().openapi({ description: 'The id of the settings', example: 'a string value' }),
    method: z.string().openapi({ description: 'The HTTP method', example: 'a string value' }),
    name: z
      .string()
      .openapi({ description: 'The name of the settings', example: 'a string value' }),
    noCache: z.boolean().openapi({ description: 'Avoid caching responses', example: true }),
    path: z.string().openapi({ description: 'The URL path', example: 'a string value' }),
    timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'The call timeout', example: 123 }),
    url: z.string().openapi({ description: 'The URL of the server', example: 'a string value' }),
  })
  .openapi({
    description: 'Settings to access a validation authority server',
    required: [
      'id',
      'name',
      'description',
      'url',
      'host',
      'goodTtl',
      'badTtl',
      'method',
      'path',
      'timeout',
      'noCache',
      'alwaysValid',
      'headers',
    ],
  })
  .openapi('ValidationAuthority')

const WhebhookConfigSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional headers', example: { key: 'value' } }),
    url: z
      .array(z.string().openapi({ example: 'a string value' }))
      .exactOptional()
      .openapi({ description: 'URLs of the webhook' }),
  })
  .openapi({ description: 'The configuration for webhook', required: ['servers'] })
  .openapi('WhebhookConfig')

const OtoroshiAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getApiApikeysRoute = createRoute({
  method: 'get',
  path: '/api/apikeys',
  tags: ['apikeys'],
  summary: 'Get all api keys',
  description: 'Get all api keys',
  operationId: 'allApiKeys',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(ApiKeySchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiAuthsRoute = createRoute({
  method: 'get',
  path: '/api/auths',
  tags: ['auth-config'],
  summary: 'Get all global auth. module configs',
  description: 'Get all global auth. module configs',
  operationId: 'findAllGlobalAuthModules',
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(
            z.xor([
              LdapAuthModuleConfigSchema,
              InMemoryAuthModuleConfigSchema,
              GenericOauth2ModuleConfigSchema,
            ]),
          ),
        },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiAuthsRoute = createRoute({
  method: 'post',
  path: '/api/auths',
  tags: ['auth-config'],
  summary: 'Create one global auth. module config',
  description: 'Create one global auth. module config',
  operationId: 'createGlobalAuthModule',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            LdapAuthModuleConfigSchema,
            InMemoryAuthModuleConfigSchema,
            GenericOauth2ModuleConfigSchema,
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.xor([
            LdapAuthModuleConfigSchema,
            InMemoryAuthModuleConfigSchema,
            GenericOauth2ModuleConfigSchema,
          ]),
        },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiAuthsIdRoute = createRoute({
  method: 'get',
  path: '/api/auths/{id}',
  tags: ['auth-config'],
  summary: 'Get one global auth. module configs',
  description: 'Get one global auth. module configs',
  operationId: 'findGlobalAuthModuleById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The auth. config id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.xor([
            LdapAuthModuleConfigSchema,
            InMemoryAuthModuleConfigSchema,
            GenericOauth2ModuleConfigSchema,
          ]),
        },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiAuthsIdRoute = createRoute({
  method: 'put',
  path: '/api/auths/{id}',
  tags: ['auth-config'],
  summary: 'Update one global auth. module config',
  description: 'Update one global auth. module config',
  operationId: 'updateGlobalAuthModule',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The auth. config id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            LdapAuthModuleConfigSchema,
            InMemoryAuthModuleConfigSchema,
            GenericOauth2ModuleConfigSchema,
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.xor([
            LdapAuthModuleConfigSchema,
            InMemoryAuthModuleConfigSchema,
            GenericOauth2ModuleConfigSchema,
          ]),
        },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiAuthsIdRoute = createRoute({
  method: 'delete',
  path: '/api/auths/{id}',
  tags: ['auth-config'],
  summary: 'Delete one global auth. module config',
  description: 'Delete one global auth. module config',
  operationId: 'deleteGlobalAuthModule',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The auth. config id id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiAuthsIdRoute = createRoute({
  method: 'patch',
  path: '/api/auths/{id}',
  tags: ['auth-config'],
  summary: 'Update one global auth. module config',
  description: 'Update one global auth. module config',
  operationId: 'patchGlobalAuthModule',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The auth. config id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.xor([
            LdapAuthModuleConfigSchema,
            InMemoryAuthModuleConfigSchema,
            GenericOauth2ModuleConfigSchema,
          ]),
        },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiCertificatesRoute = createRoute({
  method: 'get',
  path: '/api/certificates',
  tags: ['certificates'],
  summary: 'Get all certificates',
  description: 'Get all certificates',
  operationId: 'allCerts',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(CertificateSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiCertificatesRoute = createRoute({
  method: 'post',
  path: '/api/certificates',
  tags: ['certificates'],
  summary: 'Create one certificate',
  description: 'Create one certificate',
  operationId: 'createCert',
  request: { body: { content: { 'application/json': { schema: CertificateSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CertificateSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiCertificatesIdRoute = createRoute({
  method: 'get',
  path: '/api/certificates/{id}',
  tags: ['certificates'],
  summary: 'Get one certificate by id',
  description: 'Get one certificate by id',
  operationId: 'oneCert',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The auth. config id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CertificateSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiCertificatesIdRoute = createRoute({
  method: 'put',
  path: '/api/certificates/{id}',
  tags: ['certificates'],
  summary: 'Update one certificate by id',
  description: 'Update one certificate by id',
  operationId: 'putCert',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The certificate id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CertificateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CertificateSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiCertificatesIdRoute = createRoute({
  method: 'delete',
  path: '/api/certificates/{id}',
  tags: ['certificates'],
  summary: 'Delete one certificate by id',
  description: 'Delete one certificate by id',
  operationId: 'deleteCert',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The certificate id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiCertificatesIdRoute = createRoute({
  method: 'patch',
  path: '/api/certificates/{id}',
  tags: ['certificates'],
  summary: 'Update one certificate by id',
  description: 'Update one certificate by id',
  operationId: 'patchCert',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The certificate id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CertificateSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiClientValidatorsRoute = createRoute({
  method: 'get',
  path: '/api/client-validators',
  tags: ['validation-authorities'],
  summary: 'Get all validation authoritiess',
  description: 'Get all validation authoritiess',
  operationId: 'findAllClientValidators',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(ValidationAuthoritySchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiClientValidatorsRoute = createRoute({
  method: 'post',
  path: '/api/client-validators',
  tags: ['validation-authorities'],
  summary: 'Create one validation authorities',
  description: 'Create one validation authorities',
  operationId: 'createClientValidator',
  request: { body: { content: { 'application/json': { schema: ValidationAuthoritySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ValidationAuthoritySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiClientValidatorsIdRoute = createRoute({
  method: 'get',
  path: '/api/client-validators/{id}',
  tags: ['validation-authorities'],
  summary: 'Get one validation authorities by id',
  description: 'Get one validation authorities by id',
  operationId: 'findClientValidatorById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The auth. config id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ValidationAuthoritySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiClientValidatorsIdRoute = createRoute({
  method: 'put',
  path: '/api/client-validators/{id}',
  tags: ['validation-authorities'],
  summary: 'Update one validation authorities by id',
  description: 'Update one validation authorities by id',
  operationId: 'updateClientValidator',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The validation authorities id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ValidationAuthoritySchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ValidationAuthoritySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiClientValidatorsIdRoute = createRoute({
  method: 'delete',
  path: '/api/client-validators/{id}',
  tags: ['validation-authorities'],
  summary: 'Delete one validation authorities by id',
  description: 'Delete one validation authorities by id',
  operationId: 'deleteClientValidator',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The validation authorities id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiClientValidatorsIdRoute = createRoute({
  method: 'patch',
  path: '/api/client-validators/{id}',
  tags: ['validation-authorities'],
  summary: 'Update one validation authorities by id',
  description: 'Update one validation authorities by id',
  operationId: 'patchClientValidator',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The validation authorities id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ValidationAuthoritySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiDataExporterConfigsRoute = createRoute({
  method: 'get',
  path: '/api/data-exporter-configs',
  tags: ['data-exporter-configs'],
  summary: 'Get all data exporter configs',
  description: 'Get all data exporter configs',
  operationId: 'findAllDataExporters',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(DataExporterConfigSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiDataExporterConfigsRoute = createRoute({
  method: 'post',
  path: '/api/data-exporter-configs',
  tags: ['data-exporter-configs'],
  summary: 'Create a new data exporter config',
  description: 'Create a new data exporter config',
  operationId: 'createDataExporterConfig',
  request: { body: { content: { 'application/json': { schema: DataExporterConfigSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DataExporterConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiDataExporterConfigsBulkRoute = createRoute({
  method: 'put',
  path: '/api/data-exporter-configs/_bulk',
  tags: ['data-exporter-configs'],
  summary: 'Update a data exporter configs',
  description: 'Update a data exporter configs',
  operationId: 'updateBulkDataExporterConfig',
  request: { body: { content: { 'application/ndjson': { schema: DataExporterConfigSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Data exporter id', example: true }),
                status: z.literal('200').exactOptional().openapi({ description: 'Status' }),
                updated: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether the action was carried out correctly or not',
                    example: true,
                  }),
              })
              .openapi({ description: 'The bulk response', required: [] }),
          ),
        },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiDataExporterConfigsBulkRoute = createRoute({
  method: 'post',
  path: '/api/data-exporter-configs/_bulk',
  tags: ['data-exporter-configs'],
  summary: 'Create a new data exporter configs',
  description: 'Create a new data exporter configs',
  operationId: 'createBulkDataExporterConfigs',
  request: { body: { content: { 'application/ndjson': { schema: DataExporterConfigSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                created: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether the action was carried out correctly or not',
                    example: true,
                  }),
                id: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Data exporter id', example: true }),
                status: z.literal('201').exactOptional().openapi({ description: 'Status' }),
              })
              .openapi({ description: 'The bulk response', required: [] }),
          ),
        },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiDataExporterConfigsBulkRoute = createRoute({
  method: 'delete',
  path: '/api/data-exporter-configs/_bulk',
  tags: ['data-exporter-configs'],
  summary: 'Delete a data exporter config',
  description: 'Delete a data exporter config',
  operationId: 'deletebulkDataExporterConfig',
  request: { body: { content: { 'application/ndjson': { schema: PatchSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                deleted: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether the action was carried out correctly or not',
                    example: true,
                  }),
                id: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Data exporter id', example: true }),
                status: z.literal('200').exactOptional().openapi({ description: 'Status' }),
              })
              .openapi({ description: 'The bulk response', required: [] }),
          ),
        },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiDataExporterConfigsBulkRoute = createRoute({
  method: 'patch',
  path: '/api/data-exporter-configs/_bulk',
  tags: ['data-exporter-configs'],
  summary: 'Update a data exporter configs with a diff',
  description: 'Update a data exporter configs with a diff',
  operationId: 'patchBulkDataExporterConfig',
  request: { body: { content: { 'application/ndjson': { schema: PatchSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Data exporter id', example: true }),
                status: z.literal('200').exactOptional().openapi({ description: 'Status' }),
                updated: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether the action was carried out correctly or not',
                    example: true,
                  }),
              })
              .openapi({ description: 'The bulk response', required: [] }),
          ),
        },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiDataExporterConfigsTemplateRoute = createRoute({
  method: 'get',
  path: '/api/data-exporter-configs/_template',
  tags: ['data-exporter-configs'],
  summary: 'Get all data exporter configs',
  description: 'Get all data exporter configs',
  operationId: 'DataExporterTemplate',
  request: {
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The data exporter config type',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DataExporterConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiDataExporterConfigsDataExporterConfigIdRoute = createRoute({
  method: 'get',
  path: '/api/data-exporter-configs/{dataExporterConfigId}',
  tags: ['data-exporter-configs'],
  summary: 'Get a data exporter config',
  description: 'Get a data exporter config',
  operationId: 'findDataExporterConfigById',
  request: {
    params: z.object({
      dataExporterConfigId: z
        .string()
        .openapi({
          param: {
            description: 'The data exporter config id',
            in: 'path',
            name: 'dataExporterConfigId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DataExporterConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiDataExporterConfigsDataExporterConfigIdRoute = createRoute({
  method: 'put',
  path: '/api/data-exporter-configs/{dataExporterConfigId}',
  tags: ['data-exporter-configs'],
  summary: 'Update a data exporter config',
  description: 'Update a data exporter config',
  operationId: 'updateDataExporterConfig',
  request: {
    params: z.object({
      dataExporterConfigId: z
        .string()
        .openapi({
          param: {
            description: 'The data exporter config id',
            in: 'path',
            name: 'dataExporterConfigId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataExporterConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DataExporterConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiDataExporterConfigsDataExporterConfigIdRoute = createRoute({
  method: 'delete',
  path: '/api/data-exporter-configs/{dataExporterConfigId}',
  tags: ['data-exporter-configs'],
  summary: 'Delete a data exporter config',
  description: 'Delete a data exporter config',
  operationId: 'deleteDataExporterConfig',
  request: {
    params: z.object({
      dataExporterConfigId: z
        .string()
        .openapi({
          param: {
            description: 'The data exporter config id',
            in: 'path',
            name: 'dataExporterConfigId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiDataExporterConfigsDataExporterConfigIdRoute = createRoute({
  method: 'patch',
  path: '/api/data-exporter-configs/{dataExporterConfigId}',
  tags: ['data-exporter-configs'],
  summary: 'Update a data exporter config with a diff',
  description: 'Update a data exporter config with a diff',
  operationId: 'patchDataExporterConfig',
  request: {
    params: z.object({
      dataExporterConfigId: z
        .string()
        .openapi({
          param: {
            description: 'The data exporter config id',
            in: 'path',
            name: 'dataExporterConfigId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DataExporterConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiGlobalconfigRoute = createRoute({
  method: 'get',
  path: '/api/globalconfig',
  tags: ['configuration'],
  summary: 'Get the full configuration of Otoroshi',
  description: 'Get the full configuration of Otoroshi',
  operationId: 'globalConfig',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GlobalConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiGlobalconfigRoute = createRoute({
  method: 'put',
  path: '/api/globalconfig',
  tags: ['configuration'],
  summary: 'Update the global configuration',
  description: 'Update the global configuration',
  operationId: 'putGlobalConfig',
  request: { body: { content: { 'application/json': { schema: GlobalConfigSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GlobalConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiGlobalconfigRoute = createRoute({
  method: 'patch',
  path: '/api/globalconfig',
  tags: ['configuration'],
  summary: 'Update the global configuration with a diff',
  description: 'Update the global configuration with a diff',
  operationId: 'patchGlobalConfig',
  request: { body: { content: { 'application/json': { schema: PatchSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GlobalConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiGroupsRoute = createRoute({
  method: 'get',
  path: '/api/groups',
  tags: ['groups'],
  summary: 'Get all service groups',
  description: 'Get all service groups',
  operationId: 'allServiceGroups',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(GroupSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiGroupsRoute = createRoute({
  method: 'post',
  path: '/api/groups',
  tags: ['groups'],
  summary: 'Create a new service group',
  description: 'Create a new service group',
  operationId: 'createGroup',
  request: { body: { content: { 'application/json': { schema: GroupSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GroupSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiGroupsGroupIdApikeysRoute = createRoute({
  method: 'get',
  path: '/api/groups/{groupId}/apikeys',
  tags: ['apikeys'],
  summary: 'Get all api keys for the group of a service',
  description: 'Get all api keys for the group of a service',
  operationId: 'apiKeysFromGroup',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The api key group id',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(ApiKeySchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiGroupsGroupIdApikeysRoute = createRoute({
  method: 'post',
  path: '/api/groups/{groupId}/apikeys',
  tags: ['apikeys'],
  summary: 'Create a new api key for a group',
  description: 'Create a new api key for a group',
  operationId: 'createApiKeyFromGroup',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The api key group id',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiGroupsGroupIdApikeysClientIdRoute = createRoute({
  method: 'get',
  path: '/api/groups/{groupId}/apikeys/{clientId}',
  tags: ['apikeys'],
  summary: 'Get an api key',
  description: 'Get an api key for a specified service group',
  operationId: 'apiKeyFromGroup',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The api key group id',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiGroupsGroupIdApikeysClientIdRoute = createRoute({
  method: 'put',
  path: '/api/groups/{groupId}/apikeys/{clientId}',
  tags: ['apikeys'],
  summary: 'Update an api key',
  description: 'Update an api key for a specified service group',
  operationId: 'updateApiKeyFromGroup',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The api key group id',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiGroupsGroupIdApikeysClientIdRoute = createRoute({
  method: 'delete',
  path: '/api/groups/{groupId}/apikeys/{clientId}',
  tags: ['apikeys'],
  summary: 'Delete an api key',
  description: 'Delete an api key for a specified service group',
  operationId: 'deleteApiKeyFromGroup',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The api key group id',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiGroupsGroupIdApikeysClientIdRoute = createRoute({
  method: 'patch',
  path: '/api/groups/{groupId}/apikeys/{clientId}',
  tags: ['apikeys'],
  summary: 'Update an api key with a diff',
  description: 'Update an api key for a specified service descriptor with a diff',
  operationId: 'patchApiKeyFromGroup',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The api key group id',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiGroupsGroupIdApikeysClientIdQuotasRoute = createRoute({
  method: 'get',
  path: '/api/groups/{groupId}/apikeys/{clientId}/quotas',
  tags: ['apikeys'],
  summary: 'Get the quota state of an api key',
  description: 'Get the quota state of an api key',
  operationId: 'apiKeyFromGroupQuotas',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The api key group id',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: QuotasSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiGroupsGroupIdApikeysClientIdQuotasRoute = createRoute({
  method: 'delete',
  path: '/api/groups/{groupId}/apikeys/{clientId}/quotas',
  tags: ['apikeys'],
  summary: 'Reset the quota state of an api key',
  description: 'Reset the quota state of an api key',
  operationId: 'resetApiKeyFromGroupQuotas',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The api key group id',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: QuotasSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiGroupsServiceGroupIdRoute = createRoute({
  method: 'get',
  path: '/api/groups/{serviceGroupId}',
  tags: ['groups'],
  summary: 'Get a service group',
  description: 'Get a service group',
  operationId: 'serviceGroup',
  request: {
    params: z.object({
      serviceGroupId: z
        .string()
        .openapi({
          param: {
            description: 'The service group id',
            in: 'path',
            name: 'serviceGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GroupSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiGroupsServiceGroupIdRoute = createRoute({
  method: 'put',
  path: '/api/groups/{serviceGroupId}',
  tags: ['groups'],
  summary: 'Update a service group',
  description: 'Update a service group',
  operationId: 'updateGroup',
  request: {
    params: z.object({
      serviceGroupId: z
        .string()
        .openapi({
          param: {
            description: 'The service group id',
            in: 'path',
            name: 'serviceGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GroupSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiGroupsServiceGroupIdRoute = createRoute({
  method: 'delete',
  path: '/api/groups/{serviceGroupId}',
  tags: ['groups'],
  summary: 'Delete a service group',
  description: 'Delete a service group',
  operationId: 'deleteGroup',
  request: {
    params: z.object({
      serviceGroupId: z
        .string()
        .openapi({
          param: {
            description: 'The service group id',
            in: 'path',
            name: 'serviceGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiGroupsServiceGroupIdRoute = createRoute({
  method: 'patch',
  path: '/api/groups/{serviceGroupId}',
  tags: ['groups'],
  summary: 'Update a service group with a diff',
  description: 'Update a service group with a diff',
  operationId: 'patchGroup',
  request: {
    params: z.object({
      serviceGroupId: z
        .string()
        .openapi({
          param: {
            description: 'The service group id',
            in: 'path',
            name: 'serviceGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GroupSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiGroupsServiceGroupIdServicesRoute = createRoute({
  method: 'get',
  path: '/api/groups/{serviceGroupId}/services',
  tags: ['services'],
  summary: 'Get all services descriptor for a group',
  description: 'Get all services descriptor for a group',
  operationId: 'serviceGroupServices',
  request: {
    params: z.object({
      serviceGroupId: z
        .string()
        .openapi({
          param: {
            description: 'The service group id',
            in: 'path',
            name: 'serviceGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(ApiKeySchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiImportRoute = createRoute({
  method: 'post',
  path: '/api/import',
  tags: ['import'],
  summary: 'Import the full state of Otoroshi as a file',
  description: 'Import the full state of Otoroshi as a file',
  operationId: 'fullImportFromFile',
  request: { body: { content: { 'application/json': { schema: ImportExportSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DoneSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiLiveRoute = createRoute({
  method: 'get',
  path: '/api/live',
  tags: ['stats'],
  summary: 'Get global otoroshi stats',
  description: 'Get global otoroshi stats',
  operationId: 'globalLiveStats',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: StatsSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiLiveIdRoute = createRoute({
  method: 'get',
  path: '/api/live/{id}',
  tags: ['stats'],
  summary: 'Get live feed of otoroshi stats',
  description: 'Get live feed of global otoroshi stats (global) or for a service {id}',
  operationId: 'serviceLiveStats',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The service id or global for otoroshi stats',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: StatsSchema },
        'text/event-stream': { schema: StatsSchema },
      },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiOtoroshiJsonRoute = createRoute({
  method: 'get',
  path: '/api/otoroshi.json',
  tags: ['import'],
  summary: 'Export the full state of Otoroshi',
  description: 'Export the full state of Otoroshi',
  operationId: 'fullExport',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ImportExportSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiOtoroshiJsonRoute = createRoute({
  method: 'post',
  path: '/api/otoroshi.json',
  tags: ['import'],
  summary: 'Import the full state of Otoroshi',
  description: 'Import the full state of Otoroshi',
  operationId: 'fullImport',
  request: { body: { content: { 'application/json': { schema: ImportExportSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DoneSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiScriptsRoute = createRoute({
  method: 'get',
  path: '/api/scripts',
  tags: ['scripts'],
  summary: 'Get all scripts',
  description: 'Get all scripts',
  operationId: 'findAllScripts',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(ScriptSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiScriptsRoute = createRoute({
  method: 'post',
  path: '/api/scripts',
  tags: ['scripts'],
  summary: 'Create a new script',
  description: 'Create a new script',
  operationId: 'createScript',
  request: { body: { content: { 'application/json': { schema: ScriptSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ScriptSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiScriptsCompileRoute = createRoute({
  method: 'post',
  path: '/api/scripts/_compile',
  tags: ['scripts'],
  summary: 'Compile a script',
  description: 'Compile a script',
  operationId: 'compileScript',
  request: { body: { content: { 'application/json': { schema: ScriptSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ScriptCompilationResultSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiScriptsScriptIdRoute = createRoute({
  method: 'get',
  path: '/api/scripts/{scriptId}',
  tags: ['scripts'],
  summary: 'Get a script',
  description: 'Get a script',
  operationId: 'findScriptById',
  request: {
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: {
            description: 'The script id',
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ScriptSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiScriptsScriptIdRoute = createRoute({
  method: 'put',
  path: '/api/scripts/{scriptId}',
  tags: ['scripts'],
  summary: 'Update a script',
  description: 'Update a script',
  operationId: 'updateScript',
  request: {
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: {
            description: 'The script id',
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScriptSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ScriptSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiScriptsScriptIdRoute = createRoute({
  method: 'delete',
  path: '/api/scripts/{scriptId}',
  tags: ['scripts'],
  summary: 'Delete a script',
  description: 'Delete a script',
  operationId: 'deleteScript',
  request: {
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: {
            description: 'The script id',
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiScriptsScriptIdRoute = createRoute({
  method: 'patch',
  path: '/api/scripts/{scriptId}',
  tags: ['scripts'],
  summary: 'Update a script with a diff',
  description: 'Update a script with a diff',
  operationId: 'patchScript',
  request: {
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: {
            description: 'The script id',
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ScriptSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiServicesRoute = createRoute({
  method: 'get',
  path: '/api/services',
  tags: ['services'],
  summary: 'Get all services',
  description: 'Get all services',
  operationId: 'allServices',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(ServiceSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiServicesRoute = createRoute({
  method: 'post',
  path: '/api/services',
  tags: ['services'],
  summary: 'Create a new service descriptor',
  description: 'Create a new service descriptor',
  operationId: 'createService',
  request: { body: { content: { 'application/json': { schema: ServiceSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiServicesServiceIdRoute = createRoute({
  method: 'get',
  path: '/api/services/{serviceId}',
  tags: ['services'],
  summary: 'Get a service descriptor',
  description: 'Get a service descriptor',
  operationId: 'service',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiServicesServiceIdRoute = createRoute({
  method: 'put',
  path: '/api/services/{serviceId}',
  tags: ['services'],
  summary: 'Update a service descriptor',
  description: 'Update a service descriptor',
  operationId: 'updateService',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ServiceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiServicesServiceIdRoute = createRoute({
  method: 'delete',
  path: '/api/services/{serviceId}',
  tags: ['services'],
  summary: 'Delete a service descriptor',
  description: 'Delete a service descriptor',
  operationId: 'deleteService',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiServicesServiceIdRoute = createRoute({
  method: 'patch',
  path: '/api/services/{serviceId}',
  tags: ['services'],
  summary: 'Update a service descriptor with a diff',
  description: 'Update a service descriptor with a diff',
  operationId: 'patchService',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiServicesServiceIdApikeysRoute = createRoute({
  method: 'get',
  path: '/api/services/{serviceId}/apikeys',
  tags: ['apikeys'],
  summary: 'Get all api keys for the group of a service',
  description: 'Get all api keys for the group of a service',
  operationId: 'apiKeys',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The api key service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(ApiKeySchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiServicesServiceIdApikeysRoute = createRoute({
  method: 'post',
  path: '/api/services/{serviceId}/apikeys',
  tags: ['apikeys'],
  summary: 'Create a new api key for a service',
  operationId: 'createApiKey',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The api key service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiServicesServiceIdApikeysClientIdRoute = createRoute({
  method: 'get',
  path: '/api/services/{serviceId}/apikeys/{clientId}',
  tags: ['apikeys'],
  summary: 'Get an api key',
  description: 'Get an api key for a specified service descriptor',
  operationId: 'apiKey',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The api key service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiServicesServiceIdApikeysClientIdRoute = createRoute({
  method: 'put',
  path: '/api/services/{serviceId}/apikeys/{clientId}',
  tags: ['apikeys'],
  summary: 'Update an api key',
  description: 'Update an api key for a specified service descriptor',
  operationId: 'updateApiKey',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The api key service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiServicesServiceIdApikeysClientIdRoute = createRoute({
  method: 'delete',
  path: '/api/services/{serviceId}/apikeys/{clientId}',
  tags: ['apikeys'],
  summary: 'Delete an api key',
  description: 'Delete an api key for a specified service descriptor',
  operationId: 'deleteApiKey',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The api key service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiServicesServiceIdApikeysClientIdRoute = createRoute({
  method: 'patch',
  path: '/api/services/{serviceId}/apikeys/{clientId}',
  tags: ['apikeys'],
  summary: 'Update an api key with a diff',
  description: 'Update an api key for a specified service descriptor with a diff',
  operationId: 'patchApiKey',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The api key service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiServicesServiceIdApikeysClientIdGroupRoute = createRoute({
  method: 'get',
  path: '/api/services/{serviceId}/apikeys/{clientId}/group',
  tags: ['apikeys'],
  summary: 'Get the group of an api key',
  description: 'Get the group of an api key',
  operationId: 'apiKeyGroup',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The api key service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GroupSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiServicesServiceIdApikeysClientIdQuotasRoute = createRoute({
  method: 'get',
  path: '/api/services/{serviceId}/apikeys/{clientId}/quotas',
  tags: ['apikeys'],
  summary: 'Get the quota state of an api key',
  description: 'Get the quota state of an api key',
  operationId: 'apiKeyQuotas',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The api key service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: QuotasSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiServicesServiceIdApikeysClientIdQuotasRoute = createRoute({
  method: 'delete',
  path: '/api/services/{serviceId}/apikeys/{clientId}/quotas',
  tags: ['apikeys'],
  summary: 'Reset the quota state of an api key',
  description: 'Reset the quota state of an api key',
  operationId: 'resetApiKeyQuotas',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The api key service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'the api key id',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: QuotasSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiServicesServiceIdTargetsRoute = createRoute({
  method: 'get',
  path: '/api/services/{serviceId}/targets',
  tags: ['services'],
  summary: 'Get a service descriptor targets',
  description: 'Get a service descriptor targets',
  operationId: 'serviceTargets',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(TargetSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiServicesServiceIdTargetsRoute = createRoute({
  method: 'post',
  path: '/api/services/{serviceId}/targets',
  tags: ['services'],
  summary: 'Add a target to a service descriptor',
  description: 'Add a target to a service descriptor',
  operationId: 'serviceAddTarget',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TargetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(TargetSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiServicesServiceIdTargetsRoute = createRoute({
  method: 'delete',
  path: '/api/services/{serviceId}/targets',
  tags: ['services'],
  summary: 'Delete a service descriptor target',
  description: 'Delete a service descriptor target',
  operationId: 'serviceDeleteTarget',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(TargetSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiServicesServiceIdTargetsRoute = createRoute({
  method: 'patch',
  path: '/api/services/{serviceId}/targets',
  tags: ['services'],
  summary: 'Update a service descriptor targets',
  description: 'Update a service descriptor targets',
  operationId: 'updateServiceTargets',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(TargetSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiServicesServiceIdTemplateRoute = createRoute({
  method: 'get',
  path: '/api/services/{serviceId}/template',
  tags: ['services'],
  summary: 'Get a service descriptor error template',
  description: 'Get a service descriptor error template',
  operationId: 'serviceTemplate',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ErrorTemplateSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiServicesServiceIdTemplateRoute = createRoute({
  method: 'put',
  path: '/api/services/{serviceId}/template',
  tags: ['services'],
  summary: 'Update an error template to a service descriptor',
  description: 'Update an error template to a service descriptor',
  operationId: 'updateServiceTemplate',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ErrorTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ErrorTemplateSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiServicesServiceIdTemplateRoute = createRoute({
  method: 'post',
  path: '/api/services/{serviceId}/template',
  tags: ['services'],
  summary: 'Create a service descriptor error template',
  description: 'Update a service descriptor targets',
  operationId: 'createServiceTemplate',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ErrorTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ErrorTemplateSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiServicesServiceIdTemplateRoute = createRoute({
  method: 'delete',
  path: '/api/services/{serviceId}/template',
  tags: ['services'],
  summary: 'Delete a service descriptor error template',
  description: 'Delete a service descriptor error template',
  operationId: 'deleteServiceTemplate',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The service id',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiSnowmonkeyStartRoute = createRoute({
  method: 'post',
  path: '/api/snowmonkey/_start',
  tags: ['snowmonkey'],
  summary: 'Start the Snow Monkey',
  description: 'Start the Snow Monkey',
  operationId: 'startSnowMonkey',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DoneSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiSnowmonkeyStopRoute = createRoute({
  method: 'post',
  path: '/api/snowmonkey/_stop',
  tags: ['snowmonkey'],
  summary: 'Stop the Snow Monkey',
  description: 'Stop the Snow Monkey',
  operationId: 'stopSnowMonkey',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DoneSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiSnowmonkeyConfigRoute = createRoute({
  method: 'get',
  path: '/api/snowmonkey/config',
  tags: ['snowmonkey'],
  summary: 'Get current Snow Monkey config',
  description: 'Get current Snow Monkey config',
  operationId: 'getSnowMonkeyConfig',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SnowMonkeyConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiSnowmonkeyConfigRoute = createRoute({
  method: 'put',
  path: '/api/snowmonkey/config',
  tags: ['snowmonkey'],
  summary: 'Update current Snow Monkey config',
  description: 'Update current Snow Monkey config',
  operationId: 'updateSnowMonkey',
  request: { body: { content: { 'application/json': { schema: GroupSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SnowMonkeyConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiSnowmonkeyConfigRoute = createRoute({
  method: 'patch',
  path: '/api/snowmonkey/config',
  tags: ['snowmonkey'],
  summary: 'Update current Snow Monkey config',
  description: 'Update current Snow Monkey config',
  operationId: 'patchSnowMonkey',
  request: { body: { content: { 'application/json': { schema: GroupSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SnowMonkeyConfigSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiSnowmonkeyOutagesRoute = createRoute({
  method: 'get',
  path: '/api/snowmonkey/outages',
  tags: ['snowmonkey'],
  summary: 'Get all current Snow Monkey ourages',
  description: 'Get all current Snow Monkey ourages',
  operationId: 'getSnowMonkeyOutages',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(OutageSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiSnowmonkeyOutagesRoute = createRoute({
  method: 'delete',
  path: '/api/snowmonkey/outages',
  tags: ['snowmonkey'],
  summary: 'Reset Snow Monkey Outages for the day',
  description: 'Reset Snow Monkey Outages for the day',
  operationId: 'resetSnowMonkey',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DoneSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiVerifiersRoute = createRoute({
  method: 'get',
  path: '/api/verifiers',
  tags: ['jwt-verifiers'],
  summary: 'Get all global JWT verifiers',
  description: 'Get all global JWT verifiers',
  operationId: 'findAllGlobalJwtVerifiers',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(GlobalJwtVerifierSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const postApiVerifiersRoute = createRoute({
  method: 'post',
  path: '/api/verifiers',
  tags: ['jwt-verifiers'],
  summary: 'Create one global JWT verifiers',
  description: 'Create one global JWT verifiers',
  operationId: 'createGlobalJwtVerifier',
  request: { body: { content: { 'application/json': { schema: GlobalJwtVerifierSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GlobalJwtVerifierSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getApiVerifiersVerifierIdRoute = createRoute({
  method: 'get',
  path: '/api/verifiers/{verifierId}',
  tags: ['jwt-verifiers'],
  summary: 'Get one global JWT verifiers',
  description: 'Get one global JWT verifiers',
  operationId: 'findGlobalJwtVerifiersById',
  request: {
    params: z.object({
      verifierId: z
        .string()
        .openapi({
          param: {
            description: 'The jwt verifier id',
            in: 'path',
            name: 'verifierId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GlobalJwtVerifierSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const putApiVerifiersVerifierIdRoute = createRoute({
  method: 'put',
  path: '/api/verifiers/{verifierId}',
  tags: ['jwt-verifiers'],
  summary: 'Update one global JWT verifiers',
  description: 'Update one global JWT verifiers',
  operationId: 'updateGlobalJwtVerifier',
  request: {
    params: z.object({
      verifierId: z
        .string()
        .openapi({
          param: {
            description: 'The jwt verifier id',
            in: 'path',
            name: 'verifierId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GlobalJwtVerifierSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GlobalJwtVerifierSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const deleteApiVerifiersVerifierIdRoute = createRoute({
  method: 'delete',
  path: '/api/verifiers/{verifierId}',
  tags: ['jwt-verifiers'],
  summary: 'Delete one global JWT verifiers',
  description: 'Delete one global JWT verifiers',
  operationId: 'deleteGlobalJwtVerifier',
  request: {
    params: z.object({
      verifierId: z
        .string()
        .openapi({
          param: {
            description: 'The jwt verifier id',
            in: 'path',
            name: 'verifierId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DeletedSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const patchApiVerifiersVerifierIdRoute = createRoute({
  method: 'patch',
  path: '/api/verifiers/{verifierId}',
  tags: ['jwt-verifiers'],
  summary: 'Update one global JWT verifiers',
  description: 'Update one global JWT verifiers',
  operationId: 'patchGlobalJwtVerifier',
  request: {
    params: z.object({
      verifierId: z
        .string()
        .openapi({
          param: {
            description: 'The jwt verifier id',
            in: 'path',
            name: 'verifierId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GlobalJwtVerifierSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['health'],
  summary: 'Return current Otoroshi health',
  description: 'Import the full state of Otoroshi as a file',
  operationId: 'health',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OtoroshiHealthSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    404: { description: 'Resource not found or does not exist' },
  },
})

export const getLinesRoute = createRoute({
  method: 'get',
  path: '/lines',
  tags: ['environments'],
  summary: 'Get all environments',
  description: 'Get all environments provided by the current Otoroshi instance',
  operationId: 'allLines',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: EnvironmentSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getLinesLineServicesRoute = createRoute({
  method: 'get',
  path: '/lines/{line}/services',
  tags: ['environments'],
  summary: 'Get all services for an environment',
  description: 'Get all services for an environment provided by the current Otoroshi instance',
  operationId: 'servicesForALine',
  request: {
    params: z.object({
      line: z
        .string()
        .openapi({
          param: {
            description: 'The environment where to find services',
            in: 'path',
            name: 'line',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: z.array(ServiceSchema) } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getNewApikeyRoute = createRoute({
  method: 'get',
  path: '/new/apikey',
  tags: ['templates'],
  summary: 'Get a template of an Otoroshi Api Key',
  description: 'Get a template of an Otoroshi Api Key. The generated entity is not persisted',
  operationId: 'initiateApiKey',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getNewGroupRoute = createRoute({
  method: 'get',
  path: '/new/group',
  tags: ['templates'],
  summary: 'Get a template of an Otoroshi service group',
  description: 'Get a template of an Otoroshi service group. The generated entity is not persisted',
  operationId: 'initiateServiceGroup',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GroupSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})

export const getNewServiceRoute = createRoute({
  method: 'get',
  path: '/new/service',
  tags: ['templates'],
  summary: 'Get a template of an Otoroshi service descriptor',
  description:
    'Get a template of an Otoroshi service descriptor. The generated entity is not persisted',
  operationId: 'initiateService',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    400: {
      description: 'Bad resource format. Take another look to the swagger, or open an issue :)',
    },
    401: {
      description:
        "You have to provide an Api Key. Api Key can be passed with 'Otoroshi-Client-Id' and 'Otoroshi-Client-Secret' headers, or use basic http authentication",
    },
    404: { description: 'Resource not found or does not exist' },
  },
  security: [{ otoroshi_auth: [] }],
})
