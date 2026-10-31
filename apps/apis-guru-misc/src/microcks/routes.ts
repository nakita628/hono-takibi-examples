import { createRoute, z } from '@hono/zod-openapi'

const AbstractExchangeSchema = z
  .object({
    type: z
      .enum(['reqRespPair', 'unidirEvent'])
      .openapi({ description: 'Discriminant type for identifying kind of exchange' }),
  })
  .openapi({
    description: 'Abstract bean representing a Service or API Exchange.',
    required: ['type'],
  })
  .openapi('AbstractExchange')

const ArtifactUploadSchema = z
  .object({
    file: z
      .file()
      .openapi({ type: 'string', format: 'binary', description: 'The artifact to upload' }),
  })
  .openapi({
    description:
      'Artifact to be imported by Microcks.\nThis structure represents a mime-multipart file upload (as specified here: https://swagger.io/docs/specification/describing-request-body/file-upload/)',
    required: ['file'],
  })
  .openapi('ArtifactUpload')

const BindingSchema = z
  .object({
    destinationName: z
      .string()
      .openapi({ description: 'Name of destination for asynchronous messages of this operation' }),
    destinationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of destination for asynchronous messages of this operation' }),
    keyType: z.string().exactOptional().openapi({ description: 'Type of key for Kafka messages' }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP method for WebSocket binding' }),
    persistent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Persistent attribute for MQTT binding' }),
    qoS: z
      .string()
      .exactOptional()
      .openapi({ description: 'Quality of Service attribute for MQTT binding' }),
    type: z
      .enum(['KAFKA', 'MQTT', 'WS', 'AMQP', 'NATS', 'GOOGLEPUBSUB'])
      .openapi({ description: 'Protocol binding identifier' }),
  })
  .openapi({
    description: 'Protocol binding details for asynchronous operations',
    required: ['type', 'destinationName'],
  })
  .openapi('Binding')

const CounterSchema = z
  .object({
    counter: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items in a resource collection' }),
  })
  .openapi({
    description: 'A simple Counter type.',
    example: '{\n    "counter": 12\n}',
    required: [],
  })
  .openapi('Counter')

const CounterMapSchema = z
  .record(z.string(), z.number())
  .openapi({ description: 'A generic map of counter' })
  .openapi('CounterMap')

const DailyInvocationStatisticSchema = z
  .object({
    dailyCount: z
      .number()
      .openapi({ description: 'The number of service mock invocations on this day' }),
    day: z
      .string()
      .openapi({
        description: 'The day (formatted as yyyyMMdd string) represented by this statistic',
      }),
    hourlyCount: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'The number of service mock invocations per hour of the day (keys range from 0 to 23)',
      }),
    id: z.string().openapi({ description: 'Unique identifier of this statistic object' }),
    minuteCount: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'The number of service mock invocations per minute of the day (keys range from 0 to 1439)',
      }),
    serviceName: z
      .string()
      .openapi({ description: 'The name of the service this statistic is related to' }),
    serviceVersion: z
      .string()
      .openapi({ description: 'The version of the service this statistic is related to' }),
  })
  .openapi({
    description: 'The daily statistic of a service mock invocations',
    required: ['id', 'day', 'serviceName', 'serviceVersion', 'dailyCount'],
  })
  .openapi('DailyInvocationStatistic')

const HeaderSchema = z
  .object({
    name: z.string().openapi({ description: 'Unique distinct name of this Header' }),
    values: z.array(z.string()).openapi({ description: 'Values for this Header' }),
  })
  .openapi({
    description: 'Transport headers for both Requests and Responses',
    required: ['name', 'values'],
  })
  .openapi('Header')

const EventMessageSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'Body content for this message' }),
    headers: z
      .array(HeaderSchema)
      .exactOptional()
      .openapi({ description: 'Headers for this message' }),
    id: z.string().openapi({ description: 'Unique identifier of this message' }),
    mediaType: z.string().openapi({ description: 'Content type of message' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique distinct name of this message' }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of Operation this message is associated to' }),
    testCaseId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of TestCase this message is attached (in case of a test)',
      }),
  })
  .openapi({ description: '', required: ['id', 'mediaType'] })
  .openapi('EventMessage')

const RequestSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'Body content for this request' }),
    headers: z
      .array(HeaderSchema)
      .exactOptional()
      .openapi({ description: 'Headers for this Request' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of Request' }),
    name: z.string().openapi({ description: 'Unique distinct name of this Request' }),
    operationId: z
      .string()
      .openapi({ description: 'Identifier of Operation this Request is associated to' }),
    testCaseId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of TestCase this Request is attached (in case of a test)',
      }),
  })
  .openapi({ description: 'A mock invocation or test request', required: ['name', 'operationId'] })
  .openapi('Request')

const ResponseSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'Body content of this Response' }),
    headers: z
      .array(HeaderSchema)
      .exactOptional()
      .openapi({ description: 'Headers for this Response' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of Response' }),
    name: z.string().openapi({ description: 'Unique distinct name of this Response' }),
    operationId: z
      .string()
      .openapi({ description: 'Identifier of Operation this Response is associated to' }),
    testCaseId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of TestCase this Response is attached (in case of a test)',
      }),
  })
  .openapi({ description: 'A mock invocation or test response', required: ['operationId', 'name'] })
  .openapi('Response')

const RequestResponsePairSchema = z
  .object({
    request: RequestSchema.openapi({ description: 'The request part of the pair' }),
    response: ResponseSchema.openapi({ description: 'The Response part of the pair' }),
  })
  .openapi({ required: ['request', 'response'] })
  .and(AbstractExchangeSchema)
  .openapi({ description: 'Request associated with corresponding Response' })
  .openapi('RequestResponsePair')

const UnidirectionalEventSchema = z
  .object({
    eventMessage: EventMessageSchema.openapi({
      description: 'Asynchronous message for this unidirectional event',
    }),
  })
  .openapi({ required: ['eventMessage'] })
  .and(AbstractExchangeSchema)
  .openapi({ description: 'Representation of an unidirectional exchange as an event message' })
  .openapi('UnidirectionalEvent')

const ExchangeSchema = z
  .xor([RequestResponsePairSchema, UnidirectionalEventSchema])
  .openapi({
    description:
      'Abstract representation of a Service or API exchange type (request/response, event based, ...)',
    discriminator: {
      mapping: {
        reqRespPair: '#/components/schemas/RequestResponsePair',
        unidirEvent: '#/components/schemas/UnidirectionalEvent',
      },
      propertyName: 'type',
    },
  })
  .openapi('Exchange')

const FeaturesConfigSchema = z
  .looseObject({
    'async-api': z
      .object({
        'default-binding': z.string().exactOptional(),
        enabled: z.string().exactOptional(),
        'endpoint-AMQP': z.string().exactOptional(),
        'endpoint-GOOGLEPUBSUB': z.string().exactOptional(),
        'endpoint-KAFKA': z.string().exactOptional(),
        'endpoint-MQTT': z.string().exactOptional(),
        'endpoint-NATS': z.string().exactOptional(),
        'endpoint-WS': z.string().exactOptional(),
        frequencies: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Asynchronous feature properties', required: [] }),
    'microcks-hub': z
      .object({
        'allowed-roles': z.string().exactOptional(),
        enabled: z.string().exactOptional(),
        endpoint: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Microcks Hub feature properties', required: [] }),
    'repository-filter': z
      .object({
        enabled: z.string().exactOptional(),
        'label-key': z.string().exactOptional(),
        'label-label': z.string().exactOptional(),
        'label-list': z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Repository filtering feature properties', required: [] }),
    'repository-tenancy': z
      .object({
        'artifact-import-allowed-roles': z.string().exactOptional(),
        enabled: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Repository tenancy feature properties', required: [] }),
  })
  .openapi({
    description: 'Representation of optional features configuration used by Microcks server',
    example: {
      'async-api': {
        'default-binding': 'KAFKA',
        enabled: 'false',
        'endpoint-KAFKA': 'my-cluster-kafka-bootstrap.apps.try.microcks.io',
        'endpoint-MQTT': 'my-mqtt-broker.apps.try.microcks.io',
        'endpoint-WS': 'localhost:8081',
        frequencies: '3,10,30',
      },
      'microcks-hub': {
        'allowed-roles': 'admin,manager,manager-any',
        enabled: 'true',
        endpoint: 'https://hub.microcks.io/api',
      },
      'repository-filter': {
        enabled: 'true',
        'label-key': 'domain',
        'label-label': 'Domain',
        'label-list': 'domain,status',
      },
      'repository-tenancy': {
        'artifact-import-allowed-roles': 'admin,manager,manager-any',
        enabled: 'false',
      },
    },
    title: 'Root Type for FeaturesConfig',
    required: [],
  })
  .openapi('FeaturesConfig')

const HeaderDTOSchema = z
  .object({
    name: z.string().openapi({ description: 'Unique distinct name of this Header' }),
    values: z.string().openapi({ description: 'Values for this header (comma separated strings)' }),
  })
  .openapi({
    description: 'Data Transfert Object for headers of both Requests and Responses',
    required: ['name', 'values'],
  })
  .openapi('HeaderDTO')

const MetadataSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Annotations of attached object' }),
    createdOn: z.int().openapi({ description: 'Creation date of attached object' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels put on attached object' }),
    lastUpdate: z.int().openapi({ description: 'Last update of attached object' }),
  })
  .openapi({
    description:
      'Commodity object for holding metadata on any entity. This object is inspired by Kubernetes metadata.',
    required: ['createdOn', 'lastUpdate'],
  })
  .openapi('Metadata')

const SecretRefSchema = z
  .object({
    name: z.string().openapi({ description: 'Distinct name of the referenced Secret' }),
    secretId: z.string().openapi({ description: 'Unique identifier or referenced Secret' }),
  })
  .openapi({
    description: 'Lightweight reference for an existing Secret',
    example: '{\n    "secretId": "5be58fb51ed744d1b87481bd",\n    "name": "Gogs internal"\n}',
    required: ['secretId', 'name'],
  })
  .openapi('SecretRef')

const ServiceRefSchema = z
  .object({
    name: z.string().openapi({ description: 'The Service name' }),
    serviceId: z.string().openapi({ description: 'Unique reference of a Service' }),
    version: z.string().openapi({ description: 'The Service version' }),
  })
  .openapi({
    description: 'Lightweight reference of an existing Service',
    required: ['serviceId', 'name', 'version'],
  })
  .openapi('ServiceRef')

const ImportJobSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this ImportJob is active (ie. scheduled for execution)' }),
    createdDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Creation date for this ImportJob' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Etag of repository URL during previous import. Is used for not re-importing if no recent changes',
      }),
    frequency: z.string().exactOptional().openapi({ description: 'Reserved for future usage' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of ImportJob' }),
    lastImportDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date last import was done' }),
    lastImportError: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message of last import (if any)' }),
    mainArtifact: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag telling if considered as primary or secondary artifact. Default to `true`',
      }),
    metadata: MetadataSchema.exactOptional().openapi({ description: 'Metadata of ImportJob' }),
    name: z.string().openapi({ description: 'Unique distinct name of this ImportJob' }),
    repositoryDisableSSLValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to disable SSL certificate verification when checking repository',
      }),
    repositoryUrl: z
      .string()
      .openapi({ description: 'URL of mocks and tests repository artifact' }),
    secretRef: SecretRefSchema.exactOptional().openapi({
      description: 'Reference of a Secret to used when checking repository',
    }),
    serviceRefs: z
      .array(ServiceRefSchema)
      .exactOptional()
      .openapi({ description: 'References of Services discovered when checking repository' }),
  })
  .openapi({
    description:
      'An ImportJob allow defining a repository artifact to poll for discovering Services and APIs mocks and tests',
    required: ['name', 'repositoryUrl'],
  })
  .openapi('ImportJob')

const KeycloakConfigSchema = z
  .object({
    'auth-server-url': z.string().openapi({ description: 'SSO Server authentication url' }),
    enabled: z
      .boolean()
      .openapi({ description: 'Whether Keycloak authentification and usage is enabled' }),
    'public-client': z
      .string()
      .openapi({
        description: 'Name of public-client that can be used for requesting OAuth token',
      }),
    realm: z.string().openapi({ description: 'Authentication realm name' }),
    resource: z
      .string()
      .openapi({ description: 'Name of Keycloak resource/application used on client side' }),
    'ssl-required': z
      .enum(['none', 'external'])
      .openapi({ description: 'SSL certificates requirements' }),
  })
  .openapi({
    description: 'Representation of Keycloak / SSO configuration used by Microcks server',
    required: ['realm', 'auth-server-url', 'public-client', 'ssl-required', 'resource', 'enabled'],
  })
  .openapi('KeycloakConfig')

const StringArraySchema = z
  .array(z.string())
  .openapi({ description: 'A simple array of String' })
  .openapi('StringArray')

const LabelsMapSchema = z
  .record(z.string(), StringArraySchema)
  .openapi({
    description:
      'A map which keys are already used labels keys and values are already used values for this key',
  })
  .openapi('LabelsMap')

const MessageArraySchema = z
  .array(ExchangeSchema)
  .openapi({ description: 'Array of Message for Service operations' })
  .openapi('MessageArray')

const ParameterConstraintSchema = z
  .object({
    in: z
      .enum(['path', 'query', 'header'])
      .exactOptional()
      .openapi({ description: 'Parameter location' }),
    mustMatchRegexp: z
      .string()
      .exactOptional()
      .openapi({ description: "Whether it's a regular expression matching constraint" }),
    name: z.string().openapi({ description: 'Parameter name' }),
    recopy: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a recopy constraint" }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a required constraint" }),
  })
  .openapi({
    description:
      'Companion object for Operation that may be used to express constraints on request parameters',
    required: ['name'],
  })
  .openapi('ParameterConstraint')

const OperationSchema = z
  .object({
    bindings: z
      .record(z.string(), BindingSchema)
      .exactOptional()
      .openapi({ description: 'Map of protocol binding details for this operation' }),
    defaultDelay: z
      .number()
      .exactOptional()
      .openapi({ description: 'Default response time delay for mocks' }),
    dispatcher: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dispatcher strategy used for mocks' }),
    dispatcherRules: z
      .string()
      .exactOptional()
      .openapi({ description: 'DispatcherRules used for mocks' }),
    inputName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of input parameters in case of Xml based Service' }),
    method: z.string().openapi({ description: 'Represents transport method' }),
    name: z.string().openapi({ description: 'Unique name of this Operation within Service scope' }),
    outputName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of output parameters in case of Xml based Service' }),
    parameterContraints: z
      .array(ParameterConstraintSchema)
      .exactOptional()
      .openapi({ description: 'Contraints that may apply to mock invocatino on this operation' }),
    resourcePaths: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Paths the mocks endpoints are mapped on' }),
  })
  .openapi({ description: 'An Operation of a Service or API', required: ['name', 'method'] })
  .openapi('Operation')

const OperationHeadersSchema = z
  .record(z.string(), z.array(HeaderDTOSchema))
  .openapi({
    description:
      'Specification of additional headers for a Service/API operations. Keys are operation name or "globals" (if header applies to all), values are Header objects DTO.',
  })
  .openapi('OperationHeaders')

const OperationOverrideDTOSchema = z
  .object({
    defaultDelay: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Default delay in milliseconds to apply to mock responses on this operation',
      }),
    dispatcher: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of dispatcher to apply for this operation' }),
    dispatcherRules: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rules of dispatcher for this operation' }),
    parameterConstraints: z
      .array(ParameterConstraintSchema)
      .exactOptional()
      .openapi({
        description: 'Constraints that may apply to incoming parameters on this operation',
      }),
  })
  .openapi({
    description: 'Data Transfer object for grouping the mutable properties of an Operation',
    required: [],
  })
  .openapi('OperationOverrideDTO')

const ResourceTypeSchema = z
  .enum([
    'WSDL',
    'XSD',
    'JSON_SCHEMA',
    'OPEN_API_SPEC',
    'OPEN_API_SCHEMA',
    'ASYNC_API_SPEC',
    'ASYNC_API_SCHEMA',
    'AVRO_SCHEMA',
    'PROTOBUF_SCHEMA',
    'PROTOBUF_DESCRIPTION',
    'GRAPHQL_SCHEMA',
  ])
  .openapi({ description: 'Types of managed resources for Services or APIs' })
  .openapi('ResourceType')

const ResourceSchema = z
  .object({
    content: z.string().openapi({ description: 'String content of this resource' }),
    id: z.string().openapi({ description: 'Uniquer identifier of this Service or API Resource' }),
    name: z
      .string()
      .openapi({ description: 'Unique name/business identifier for this Service or API resource' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Relatvie path of this resource regarding main resource' }),
    serviceId: z
      .string()
      .openapi({
        description: 'Unique identifier of the Servoce or API this resource is attached to',
      }),
    sourceArtifact: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short name of the artifact this resource was extracted from' }),
    type: ResourceTypeSchema.openapi({ description: 'Type of this Service or API resource' }),
  })
  .openapi({
    description: 'Resource represents a Service or API artifacts such as specification, contract',
    required: ['id', 'name', 'content', 'type', 'serviceId'],
  })
  .openapi('Resource')

const SecretSchema = z
  .object({
    caCertPem: z.string().exactOptional(),
    description: z.string().openapi({ description: 'Description of this Secret' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of Secret' }),
    name: z.string().openapi({ description: 'Unique distinct name of Secret' }),
    password: z.string().exactOptional(),
    token: z.string().exactOptional(),
    tokenHeader: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A Secret allows grouping informations on how to access a restricted resource such as a repsoitory URL. Secrets are typically used by ImpoortJobs.',
    example:
      '{\n    "id": "5be58fb51ed744d1b87481bd",\n    "name": "Gogs internal",\n    "description": "Gogs internal corporate repository",\n    "username": "team",\n    "password": "team",\n    "caCertPem": "-----BEGIN CERTIFICATE-----\\nMIIC6jCCAdKgAwIBAgIBATANBgkqhkiG9w0BAQsFADAmMSQwIgYDVQQDDBtvcGVu\\nc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIwHhcNMTgwNzE4MTA0ODIyWhcNMjMwNzE3\\nMTA0ODIzWjAmMSQwIgYDVQQDDBtvcGVuc2hpZnQtc2lnbmVyQDE1MzE5MTA5MDIw\\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCyaP1jlpnm8WpfCSnUa8Qt\\nhdUynOLLgElUtpWoW25wB9tO2ZmEj+fVsTyzEsW8+nfXXfRsBEzPm2ze9uEMTPTB\\nAY0k7DbLZfjmF1lCckUvvh1rR/8hoPuXETjXUuOdtm7gRHTOxLQyH2Qi/q0DYJAn\\nprKyRCLa35pRnykL6v4bHkqFnqDEho63i29XHhm2703moh4YCl1iYa2Rh6D44cjn\\n8lBCq6o7zoZSmc/aBamRkQrfZYcolR8OUtDS4oEB0zMftmea2ycashsLEMB+Cq4r\\n64NI2QM7qOxdTuXsDivHfLl7RTuWEOozGaJXoiPaGU/3d/KnY0gKJ2TC1KXt6Xjn\\nAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwICpDAPBgNVHRMBAf8EBTADAQH/MA0GCSqG\\nSIb3DQEBCwUAA4IBAQCeUmxfUzw0VAFG6HvVYIsfvumiIvsSWmclGIZqNJyfMHFD\\nMy6xzPRNNfWe5aumGTJsuIzuXfDRcdO7KmH1d2/5brkvWpxp6svVrYPvcoXjl4VN\\nQR2mv5Di4KHfiiwvP3eeewjUZj+uREGqX2fcbJPHTPy32Kpb0H8Uy09BklhjC7QP\\ngRAGexPhU1oBL/CoOwbHKcQ6dxs/y1SxzI8gXEtec4z62CroI13iT7U0UjSqFBE4\\nKfrJombfz0d68781Z40ll+8my251ZNfbLBhQ3UHW0JnkBEQkE1aBorUoj2iakYvx\\nA2qZh+8q2b8MwMb2YsQ0dlxKd6c4tN3lmMnO4bnd\\n-----END CERTIFICATE-----"\n}',
    required: ['name', 'description'],
  })
  .openapi('Secret')

const ServiceSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for this Service or API' }),
    metadata: MetadataSchema.exactOptional().openapi({ description: 'Metadata of Service' }),
    name: z
      .string()
      .openapi({
        description: 'Distinct name for this Service or API (maybe shared among many versions)',
      }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({ description: 'Set of Operations for Service or API' }),
    type: z
      .enum(['REST', 'SOAP_HTTP', 'GENERIC_REST', 'GENERIC_EVENT', 'EVENT', 'GRPC', 'GRAPHQL'])
      .openapi({ description: 'Service or API Type' }),
    version: z.string().openapi({ description: 'Distinct version for a named Service or API' }),
    xmlNS: z
      .string()
      .exactOptional()
      .openapi({ description: 'Associated Xml Namespace in case of Xml based Service' }),
  })
  .openapi({
    description: 'Represents a Service or API definition as registred into Microcks repository',
    required: ['name', 'version', 'type'],
  })
  .openapi('Service')

const ServiceViewSchema = z
  .object({
    messagesMap: z
      .record(z.string(), MessageArraySchema)
      .openapi({
        description:
          'Map of messages for this Service. Keys are operation name, values are array of messages for this operation',
      }),
    service: ServiceSchema.openapi({ description: 'Wrapped service description' }),
  })
  .openapi({
    description: 'Aggregate bean for grouping a Service an its messages pairs',
    required: ['service', 'messagesMap'],
  })
  .openapi('ServiceView')

const SnapshotUploadSchema = z
  .object({
    file: z
      .file()
      .openapi({ type: 'string', format: 'binary', description: 'The repository snapshot file' }),
  })
  .openapi({ description: 'Upload of a repository snapshot file', required: ['file'] })
  .openapi('SnapshotUpload')

const TestStepResultSchema = z
  .object({
    elapsedTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Elapsed time in milliseconds since the test step beginning' }),
    eventMessageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of event this test step is bound to' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message that may be associated to this test step' }),
    requestName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of request this test step is bound to' }),
    success: z.boolean().openapi({ description: 'Flag telling if test case is a success' }),
  })
  .openapi({
    description:
      'TestStepResult is an entity embedded within TestCaseResult. They are created for each request associated with an operation / action of a microservice.',
    required: ['success', 'elapsedTome'],
  })
  .openapi('TestStepResult')

const TestCaseResultSchema = z
  .object({
    elapsedTime: z
      .number()
      .openapi({ description: 'Elapsed time in milliseconds since the test case beginning' }),
    operationName: z
      .string()
      .openapi({ description: 'Name of operation this test case is bound to' }),
    success: z.boolean().openapi({ description: 'Flag telling if test case is a success' }),
    testStepResults: z
      .array(TestStepResultSchema)
      .exactOptional()
      .openapi({ description: 'Test steps associated to this test case' }),
  })
  .openapi({
    description:
      'Companion objects for TestResult. Each TestCaseResult correspond to a particuliar service operation / action reference by the operationName field. TestCaseResults owns a collection of TestStepResults (one for every request associated to service operation / action).',
    required: ['success', 'elapsedTime', 'operationName'],
  })
  .openapi('TestCaseResult')

const TestCaseReturnDTOSchema = z
  .object({
    operationName: z
      .string()
      .openapi({ description: 'Name of related operation for this TestCase' }),
  })
  .openapi({ required: ['operationName'] })
  .openapi('TestCaseReturnDTO')

const TrendSchema = z
  .enum(['DOWN', 'LOW_DOWN', 'STABLE', 'LOW_UP', 'UP'])
  .openapi({ description: 'Evolution trend qualifier' })
  .openapi('Trend')

const TestConformanceMetricSchema = z
  .object({
    aggregationLabelValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of the label used for metrics aggregation (if any)' }),
    currentScore: z
      .float64()
      .openapi({ description: 'Current test conformance score for the related Service' }),
    id: z.string().openapi({ description: 'Unique identifier of coverage metric' }),
    lastUpdateDay: z
      .string()
      .exactOptional()
      .openapi({ description: 'The day of latest score update (in yyyyMMdd format)' }),
    latestScores: z
      .record(z.string(), z.number())
      .exactOptional()
      .openapi({
        description:
          'History of latest scores (key is date with format yyyyMMdd, value is score as double)',
      }),
    latestTrend: TrendSchema.exactOptional().openapi({
      description: 'Evolution trend of currentScore',
    }),
    maxPossibleScore: z
      .float64()
      .openapi({
        description:
          'Maximum conformance score that can be reached (depends on samples expresiveness)',
      }),
    serviceId: z
      .string()
      .openapi({ description: 'Unique identifier of the Service this metric is related to' }),
  })
  .openapi({
    description:
      'Represents the test conformance metrics (current score, history and evolution trend) of a Service',
    required: ['id', 'serviceId', 'currentScore', 'maxPossibleScore'],
  })
  .openapi('TestConformanceMetric')

const TestRunnerTypeSchema = z
  .enum([
    'HTTP',
    'SOAP_HTTP',
    'SOAP_UI',
    'POSTMAN',
    'OPEN_API_SCHEMA',
    'ASYNC_API_SCHEMA',
    'GRPC_PROTOBUF',
    'GRAPHQL_SCHEMA',
  ])
  .openapi({
    description:
      'Type of test strategy (different strategies are implemented by different runners)',
  })
  .openapi('TestRunnerType')

const TestRequestSchema = z
  .object({
    filteredOperations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A restriction on service operations to test' }),
    operationHeaders: OperationHeadersSchema.exactOptional().openapi({
      description: 'This test operations headers override',
    }),
    runnerType: TestRunnerTypeSchema.openapi({ description: 'Runner used for this test' }),
    secretName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of Secret to use for connecting the test endpoint' }),
    serviceId: z.string().openapi({ description: 'Unique identifier of service to test' }),
    testEndpoint: z.string().openapi({ description: 'Endpoint to test for this service' }),
    timeout: z
      .int()
      .openapi({ description: 'The maximum time (in milliseconds) to wait for this test ends' }),
  })
  .openapi({
    description: 'Test request is a minimalist wrapper for requesting the launch of a new test',
    required: ['serviceId', 'testEndpoint', 'runnerType', 'timeout'],
  })
  .openapi('TestRequest')

const TestResultSchema = z
  .object({
    elapsedTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Elapsed time in milliseconds since test beginning' }),
    id: z.string().openapi({ description: 'Unique identifier of TestResult' }),
    inProgress: z.boolean().openapi({ description: 'Flag telling is test is still in progress' }),
    operationHeaders: OperationHeadersSchema.exactOptional().openapi({
      description: 'This test operations headers override',
    }),
    runnerType: TestRunnerTypeSchema.openapi({ description: 'Runner used for this test' }),
    secretRef: SecretRefSchema.exactOptional().openapi({
      description: 'The referrence of the Secret used for connecting to test endpoint',
    }),
    serviceId: z.string().openapi({ description: 'Unique identifier of service tested' }),
    success: z.boolean().openapi({ description: 'Flag telling if test is a success' }),
    testCaseResults: z
      .array(TestCaseResultSchema)
      .exactOptional()
      .openapi({ description: 'TestCase results associated to this test' }),
    testDate: z
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
        description: 'Timestamp of creation date of this service',
      }),
    testNumber: z
      .number()
      .openapi({ description: 'Incremental number for tracking number of tests of a service' }),
    testedEndpoint: z.string().openapi({ description: 'Endpoint used during test' }),
    timeout: z
      .int()
      .exactOptional()
      .openapi({ description: 'The maximum time (in milliseconds) to wait for this test ends' }),
    version: z.number().openapi({ description: 'Revision number of this test' }),
  })
  .openapi({
    description:
      'Represents the result of a Service or API test run by Microcks. Tests are related to a service and made of multiple test cases corresponding to each operations / actions composing service. Tests are run against a specific endpoint named testedEndpoint. It holds global markers telling if test still ran, is a success, how many times is has taken and so on ...',
    required: [
      'id',
      'version',
      'testNumber',
      'testDate',
      'testedEndpoint',
      'serviceId',
      'success',
      'inProgress',
      'runnerType',
    ],
  })
  .openapi('TestResult')

const TestResultSummarySchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier of TestResult' }),
    serviceId: z.string().openapi({ description: 'Unique identifier of service tested' }),
    success: z.boolean().openapi({ description: 'Flag telling if test is a success' }),
    testDate: z
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
        description: 'Timestamp of creation date of this service',
      }),
  })
  .openapi({
    description: 'Represents the summary result of a Service or API test run by Microcks. ',
    required: ['id', 'testDate', 'serviceId', 'success'],
  })
  .openapi('TestResultSummary')

const TestReturnSchema = z
  .object({
    code: z
      .int()
      .openapi({ description: 'Return code for test (0 means Success, 1 means Failure)' }),
    elapsedTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Elapsed time in milliseconds' }),
    eventMessage: EventMessageSchema.exactOptional().openapi({
      description: 'Event Message received for this test',
    }),
    message: z.string().exactOptional().openapi({ description: 'Error message if any' }),
    request: RequestSchema.exactOptional().openapi({ description: 'Request sent for this test' }),
    response: ResponseSchema.exactOptional().openapi({
      description: 'Response returned for this test',
    }),
  })
  .openapi({
    description: 'TestReturn is used for wrapping the return code of a test step execution',
    required: ['code', 'elapsedTime'],
  })
  .openapi('TestReturn')

const WeightedMetricValueSchema = z
  .object({
    name: z.string().openapi({ description: 'Metric name or serie name' }),
    value: z.int().openapi({ description: 'The value of this metric' }),
    weight: z
      .int()
      .openapi({ description: 'Weight of this metric value (typically a percentage)' }),
  })
  .openapi({
    description: 'Value of a metric with an associated weight',
    required: ['name', 'weight', 'value'],
  })
  .openapi('WeightedMetricValue')

const ServiceResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.xor([ServiceSchema, ServiceViewSchema]) } },
}

const JwtBearerSecurityScheme = {
  description: 'JWT Bearer acquired using OAuth 2 Authentication flow or Direct Access Grant',
  flows: {
    clientCredentials: {
      refreshUrl: 'https://keycloak.example.com/realms/microcks/protocol/openid-connect/token',
      scopes: {
        admin: 'Administrator of the Microcks instance',
        manager: 'Services & APIs content manager',
        user: 'Simple authenticated user',
      },
      tokenUrl: 'https://keycloak.example.com/realms/microcks/protocol/openid-connect/token',
    },
  },
  type: 'oauth2',
}

export const postArtifactUploadRoute = createRoute({
  method: 'post',
  path: '/artifact/upload',
  tags: ['job'],
  summary: 'Upload an artifact',
  description: 'Uploads an artifact to be imported by Microcks.',
  operationId: 'uploadArtifact',
  request: {
    query: z.object({
      mainArtifact: z
        .stringbool()
        .openapi({
          param: {
            description:
              "Flag telling if this should be considered as primary or secondary artifact. Default to 'true'",
            in: 'query',
            name: 'mainArtifact',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: ArtifactUploadSchema,
          examples: {
            'Artifact upload': {
              value:
                'POST /api/artifact/upload HTTP/1.1\nHost: microcks\nUser-Agent: curl/7.54.0\nAccept: */*\nAuthorization: Bearer <REDACTED>\nContent-Length: 2743\nExpect: 100-continue\nContent-Type: multipart/form-data; boundary=------------------------8af8cbb56dd4bde0\n\n--------------------------8af8cbb56dd4bde0\nContent-Disposition: form-data; name="file"; filename="github.json"\nContent-Type: application/octet-stream\n\nTHE ARTIFACT HERE\n\n--------------------------8af8cbb56dd4bde0--\n',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Artifact was imported and Service found',
      content: { 'text/plain': { schema: z.string() } },
    },
    204: { description: 'No file attribute found in uploaded data' },
    400: {
      description: 'Artifact content is invalid and not understood',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getExportRoute = createRoute({
  method: 'get',
  path: '/export',
  tags: ['mock'],
  summary: 'Export a snapshot',
  description: 'Export a repostiory snapshot with requested services',
  operationId: 'exportSnapshot',
  request: {
    query: z.object({
      serviceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'List of service identifiers to export',
            in: 'query',
            name: 'serviceIds',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot file representing the export of requested services',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
      headers: z.object({
        'Content-Disposition': {
          examples: { filename: { value: 'attachment; filename=microcks-repository.json' } },
          schema: z
            .string()
            .exactOptional()
            .openapi({
              examples: { filename: { value: 'attachment; filename=microcks-repository.json' } },
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [{ 'jwt-bearer': ['admin'] }],
})

export const getFeaturesConfigRoute = createRoute({
  method: 'get',
  path: '/features/config',
  tags: ['config'],
  summary: 'Get features configuration',
  operationId: 'GetFeaturesConfiguration',
  responses: { 200: { description: 'Get features configuration', content: {} } },
})

export const postImportRoute = createRoute({
  method: 'post',
  path: '/import',
  tags: ['mock'],
  summary: 'Import a snapshot',
  description: 'Import a repository snapshot previsouly exported into Microcks',
  operationId: 'importSnapshot',
  request: {
    body: { content: { 'multipart/form-data': { schema: SnapshotUploadSchema } }, required: true },
  },
  responses: { 201: { description: 'Snasphot has been correctly imported' } },
  security: [{ 'jwt-bearer': ['admin'] }],
})

export const getJobsRoute = createRoute({
  method: 'get',
  path: '/jobs',
  tags: ['job'],
  summary: 'Get ImportJobs',
  description: 'Retrieve a list of ImportJobs',
  operationId: 'GetImportJobs',
  request: {
    query: z.object({
      page: z
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
            description: 'Page of ImportJobs to retrieve (starts at and defaults to 0)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
              'Size of a page. Maximum number of ImportJobs to include in a response (defaults to 20)',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name like criterion for query',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of found ImportJobs',
      content: { 'application/json': { schema: z.array(ImportJobSchema) } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const postJobsRoute = createRoute({
  method: 'post',
  path: '/jobs',
  tags: ['job'],
  summary: 'Create ImportJob',
  description: 'Create a new ImportJob',
  operationId: 'CreateImportJob',
  request: {
    body: { content: { 'application/json': { schema: ImportJobSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created ImportJob',
      content: { 'application/json': { schema: ImportJobSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getJobsCountRoute = createRoute({
  method: 'get',
  path: '/jobs/count',
  tags: ['job'],
  summary: 'Get the ImportJobs counter',
  operationId: 'GetImportJobCounter',
  responses: {
    200: {
      description: 'Number of ImportJobs in datastore',
      content: { 'application/json': { schema: CounterSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getJobsIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{id}',
  tags: ['job'],
  summary: 'Get ImportJob',
  description: 'Retrieve an ImportJob using its identifier',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of ImportJob to manage',
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
      description: 'Found ImportJob',
      content: { 'application/json': { schema: ImportJobSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const postJobsIdRoute = createRoute({
  method: 'post',
  path: '/jobs/{id}',
  tags: ['job'],
  summary: 'Update ImportJob',
  description: 'Update an ImportJob',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of ImportJob to manage',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportJobSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated ImportJob',
      content: { 'application/json': { schema: ImportJobSchema } },
    },
  },
})

export const deleteJobsIdRoute = createRoute({
  method: 'delete',
  path: '/jobs/{id}',
  tags: ['job'],
  summary: 'Delete ImportJob',
  description: 'Delete an ImportJob',
  operationId: 'DeleteImportJob',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of ImportJob to manage',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'ImportJob deleted', content: {} } },
  security: [{ 'jwt-bearer': ['admin'] }],
})

export const putJobsIdActivateRoute = createRoute({
  method: 'put',
  path: '/jobs/{id}/activate',
  tags: ['job'],
  summary: 'Activate an ImportJob',
  description: 'Make an ImportJob active, so that it is executed',
  operationId: 'ActivateImportJob',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of ImportJob to manage',
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
      description: 'ImportJob is activated',
      content: { 'application/json': { schema: ImportJobSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const putJobsIdStartRoute = createRoute({
  method: 'put',
  path: '/jobs/{id}/start',
  tags: ['job'],
  summary: 'Start an ImportJob',
  description: 'Starting an ImportJob forces it to immediatly import mock definitions',
  operationId: 'StartImportJob',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of ImportJob to manage',
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
      description: 'Started ImportJob',
      content: { 'application/json': { schema: ImportJobSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const putJobsIdStopRoute = createRoute({
  method: 'put',
  path: '/jobs/{id}/stop',
  tags: ['job'],
  summary: 'Stop an ImportJob',
  description: "Stopping an ImportJob desactivate it, so that it won't execute at next schedule",
  operationId: 'StopImportJob',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of ImportJob to manage',
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
      description: 'Stopped ImportJob',
      content: { 'application/json': { schema: ImportJobSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getKeycloakConfigRoute = createRoute({
  method: 'get',
  path: '/keycloak/config',
  tags: ['config'],
  summary: 'Get authentification configuration',
  operationId: 'GetKeycloakConfig',
  responses: {
    200: {
      description: 'Get current configuration',
      content: { 'application/json': { schema: KeycloakConfigSchema } },
    },
  },
})

export const getMetricsConformanceAggregateRoute = createRoute({
  method: 'get',
  path: '/metrics/conformance/aggregate',
  tags: ['metrics'],
  summary: 'Get aggregation of conformance metrics',
  operationId: 'GetConformanceMetricsAggregation',
  responses: {
    200: {
      description: 'Get aggregated coverage metric value',
      content: { 'application/json': { schema: z.array(WeightedMetricValueSchema) } },
    },
  },
})

export const getMetricsConformanceServiceServiceIdRoute = createRoute({
  method: 'get',
  path: '/metrics/conformance/service/{serviceId}',
  tags: ['metrics'],
  summary: 'Get conformance metrics for a Service',
  operationId: 'GetServiceTestConformanceMetric',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Unique Services identifier this metrics are related to',
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
      description: 'Test coverage metric for Service',
      content: { 'application/json': { schema: TestConformanceMetricSchema } },
    },
  },
})

export const getMetricsInvocationsGlobalRoute = createRoute({
  method: 'get',
  path: '/metrics/invocations/global',
  tags: ['metrics'],
  summary: 'Get aggregated invocation statistics for a day',
  operationId: 'GetAggregatedInvocationsStats',
  request: {
    query: z.object({
      day: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.',
            in: 'query',
            name: 'day',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Aggregated invocation statistics for specified day',
      content: { 'application/json': { schema: DailyInvocationStatisticSchema } },
    },
  },
})

export const getMetricsInvocationsGlobalLatestRoute = createRoute({
  method: 'get',
  path: '/metrics/invocations/global/latest',
  tags: ['metrics'],
  summary: 'Get aggregated invocations statistics for latest days',
  operationId: 'GetLatestAggregatedInvocationsStats',
  request: {
    query: z.object({
      limit: z
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
            description: 'Number of days to get back in time. Default is 20.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A map where keys are day (formatted using yyyyMMdd pattern) and values are counter of invocations on this day',
      content: { 'application/json': { schema: CounterMapSchema } },
    },
  },
})

export const getMetricsInvocationsTopRoute = createRoute({
  method: 'get',
  path: '/metrics/invocations/top',
  tags: ['metrics'],
  summary: 'Get top invocation statistics for a day',
  operationId: 'GetTopIvnocationsStatsByDay',
  request: {
    query: z.object({
      day: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.',
            in: 'query',
            name: 'day',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
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
            description: 'The number of top invoked mocks to return',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Top invocations for a defined day',
      content: { 'application/json': { schema: z.array(DailyInvocationStatisticSchema) } },
    },
  },
})

export const getMetricsInvocationsServiceNameServiceVersionRoute = createRoute({
  method: 'get',
  path: '/metrics/invocations/{serviceName}/{serviceVersion}',
  tags: ['metrics'],
  summary: 'Get invocation statistics for Service',
  operationId: 'GetInvocationStatsByService',
  request: {
    params: z.object({
      serviceName: z
        .string()
        .openapi({
          param: {
            description: 'Name of service to get statistics for',
            in: 'path',
            name: 'serviceName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      serviceVersion: z
        .string()
        .openapi({
          param: {
            description: 'Version of service to get statistics for',
            in: 'path',
            name: 'serviceVersion',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      day: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.',
            in: 'query',
            name: 'day',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Invocation statistics for service for specified day',
      content: { 'application/json': { schema: DailyInvocationStatisticSchema } },
    },
  },
})

export const getMetricsTestsLatestRoute = createRoute({
  method: 'get',
  path: '/metrics/tests/latest',
  tags: ['metrics'],
  summary: 'Get latest tests results',
  operationId: 'GetLatestTestResults',
  request: {
    query: z.object({
      limit: z
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
              'Number of days to consider for test results to return. Default is 7 (one week)',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Test results summary for specified <limit> last days.',
      content: { 'application/json': { schema: z.array(TestResultSummarySchema) } },
    },
  },
})

export const getResourcesServiceServiceIdRoute = createRoute({
  method: 'get',
  path: '/resources/service/{serviceId}',
  summary: 'Get Resources by Service',
  operationId: 'GetResourcesByService',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the Service or API the resources are attached to',
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
      description: 'List the resources attached to a Service or API',
      content: { 'application/json': { schema: z.array(ResourceSchema) } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getResourcesNameRoute = createRoute({
  method: 'get',
  path: '/resources/{name}',
  summary: 'Get Resource',
  operationId: 'GetResource',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Unique name/business identifier of the Service or API resource',
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
      description: 'Retrieve the resource having this name',
      content: { 'application/json': { schema: ResourceSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getSecretsRoute = createRoute({
  method: 'get',
  path: '/secrets',
  tags: ['config'],
  summary: 'Get Secrets',
  operationId: 'GetSecrets',
  request: {
    query: z.object({
      page: z
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
            description: 'Page of Secrets to retrieve (starts at and defaults to 0)',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      size: z
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
              'Size of a page. Maximum number of Secrets to include in a response (defaults to 20)',
            in: 'query',
            name: 'size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of found Secrets',
      content: { 'application/json': { schema: z.array(SecretSchema) } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const postSecretsRoute = createRoute({
  method: 'post',
  path: '/secrets',
  tags: ['config'],
  summary: 'Create a new Secret',
  operationId: 'CreateSecret',
  request: { body: { content: { 'application/json': { schema: SecretSchema } } } },
  responses: {
    201: {
      description: 'Created Secret',
      content: { 'application/json': { schema: SecretSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['admin'] }],
})

export const getSecretsCountRoute = createRoute({
  method: 'get',
  path: '/secrets/count',
  tags: ['config'],
  summary: 'Get the Secrets counter',
  operationId: 'GetSecretsCounter',
  responses: {
    200: {
      description: 'Number of Secrets in datastore',
      content: { 'application/json': { schema: CounterSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getSecretsIdRoute = createRoute({
  method: 'get',
  path: '/secrets/{id}',
  tags: ['config'],
  summary: 'Get Secret',
  description: 'Retrieve a Secret',
  operationId: 'GetSecret',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of Secret to manage',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Found Secret', content: { 'application/json': { schema: SecretSchema } } },
  },
  security: [{ 'jwt-bearer': ['admin'] }],
})

export const putSecretsIdRoute = createRoute({
  method: 'put',
  path: '/secrets/{id}',
  tags: ['config'],
  summary: 'Update Secret',
  description: 'Update a Secret',
  operationId: 'UpdateSecret',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of Secret to manage',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Updated Secret' } },
  security: [{ 'jwt-bearer': ['admin'] }],
})

export const deleteSecretsIdRoute = createRoute({
  method: 'delete',
  path: '/secrets/{id}',
  tags: ['config'],
  summary: 'Delete Secret',
  description: 'Delete a Secret',
  operationId: 'DeleteSecret',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of Secret to manage',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Secret has been deleted' } },
  security: [{ 'jwt-bearer': ['admin'] }],
})

export const getServicesRoute = createRoute({
  method: 'get',
  path: '/services',
  tags: ['mock'],
  summary: 'Get Services and APIs',
  operationId: 'GetServices',
  request: {
    query: z.object({
      page: z
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
            description: 'Page of Services to retrieve (starts at and defaults to 0)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
              'Size of a page. Maximum number of Services to include in a response (defaults to 20)',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of found Services',
      content: { 'application/json': { schema: ServiceSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getServicesCountRoute = createRoute({
  method: 'get',
  path: '/services/count',
  tags: ['mock'],
  summary: 'Get the Services counter',
  operationId: 'GetServicesCounter',
  responses: {
    200: {
      description: 'Number of Services in datastore',
      content: { 'application/json': { schema: CounterSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getServicesLabelsRoute = createRoute({
  method: 'get',
  path: '/services/labels',
  tags: ['mock'],
  summary: 'Get the already used labels for Services',
  operationId: 'GetServicesLabels',
  responses: {
    200: {
      description: 'Already used labels: keys are label Keys, values are array of label Values',
      content: { 'application/json': { schema: LabelsMapSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['admin'] }],
})

export const getServicesSearchRoute = createRoute({
  method: 'get',
  path: '/services/search',
  tags: ['mock'],
  summary: 'Search for Services and APIs',
  operationId: 'SearchServices',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['queryMap']
        const taken: string[] = []
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          queryMap: z
            .record(z.string(), z.string())
            .openapi({
              param: {
                description:
                  "Map of criterion. Key can be simply 'name' with value as the searched string. You can also search by label using keys like 'labels.x' where 'x' is the label and value the label value",
                in: 'query',
                name: 'queryMap',
                required: true,
                schema: { additionalProperties: { type: 'string' }, type: 'object' },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'List of found Services (filtered according search criteria)',
      content: { 'application/json': { schema: z.array(ServiceSchema) } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getServicesIdRoute = createRoute({
  method: 'get',
  path: '/services/{id}',
  tags: ['mock'],
  summary: 'Get Service',
  operationId: 'GetService',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of Service to managed',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      messages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include details on services messages into result. Default is false',
            in: 'query',
            name: 'messages',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: ServiceResponseResponse },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const deleteServicesIdRoute = createRoute({
  method: 'delete',
  path: '/services/{id}',
  tags: ['mock'],
  summary: 'Delete Service',
  description: 'Delete a Service',
  operationId: 'DeleteService',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of Service to managed',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Service has been deleted' } },
  security: [{ 'jwt-bearer': ['admin', 'manager'] }],
})

export const putServicesIdMetadataRoute = createRoute({
  method: 'put',
  path: '/services/{id}/metadata',
  tags: ['mock'],
  summary: 'Update Service Metadata',
  operationId: 'UpdateServiceMetadata',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of Service to managed',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MetadataSchema } }, required: true },
  },
  responses: {
    200: { description: 'Service metadata has been updated' },
    500: { description: 'Update of metadata failed' },
  },
  security: [{ 'jwt-bearer': ['admin', 'manager'] }],
})

export const putServicesIdOperationRoute = createRoute({
  method: 'put',
  path: '/services/{id}/operation',
  tags: ['mock'],
  summary: 'Override Service Operation',
  operationId: 'OverrideServiceOperation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of Service to managed',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      operationName: z
        .string()
        .openapi({
          param: {
            description: 'Name of operation to update',
            in: 'query',
            name: 'operationName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: OperationOverrideDTOSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Operation has been updated' },
    500: { description: 'Operation cannot be updated' },
  },
  security: [{ 'jwt-bearer': ['admin', 'manager'] }],
})

export const postTestsRoute = createRoute({
  method: 'post',
  path: '/tests',
  tags: ['test'],
  summary: 'Create a new Test',
  operationId: 'CreateTest',
  request: {
    body: { content: { 'application/json': { schema: TestRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created TestResult (empty shell cause tests are executed asynchronously)',
      content: { 'application/json': { schema: TestResultSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getTestsServiceServiceIdRoute = createRoute({
  method: 'get',
  path: '/tests/service/{serviceId}',
  tags: ['test'],
  summary: 'Get TestResults by Service',
  operationId: 'GetTestResultsByService',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of Service to manage TestResults for',
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
      description: 'List of TestResults for the Service having the requested id',
      content: { 'application/json': { schema: z.array(TestResultSchema) } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getTestsServiceServiceIdCountRoute = createRoute({
  method: 'get',
  path: '/tests/service/{serviceId}/count',
  tags: ['test'],
  summary: 'Get the TestResults for Service counter',
  operationId: 'GetTestResultsByServiceCounter',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of Service to manage TestResults for',
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
      description: 'Number of TestResults for this Service in datastore',
      content: { 'application/json': { schema: CounterSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getTestsIdRoute = createRoute({
  method: 'get',
  path: '/tests/{id}',
  tags: ['test'],
  summary: 'Get TestResult',
  operationId: 'GetTestResult',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of TestResult to manage',
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
      description: 'Requested TestResult',
      content: { 'application/json': { schema: TestResultSchema } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const getTestsIdEventsTestCaseIdRoute = createRoute({
  method: 'get',
  path: '/tests/{id}/events/{testCaseId}',
  tags: ['test'],
  summary: 'Get events for TestCase',
  operationId: 'GetEventsByTestCase',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of TestResult to manage',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      testCaseId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of TetsCaseResult to manage',
            in: 'path',
            name: 'testCaseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of event messages for this TestCase',
      content: { 'application/json': { schema: z.array(UnidirectionalEventSchema) } },
    },
  },
})

export const getTestsIdMessagesTestCaseIdRoute = createRoute({
  method: 'get',
  path: '/tests/{id}/messages/{testCaseId}',
  tags: ['test'],
  summary: 'Get messages for TestCase',
  operationId: 'GetMessagesByTestCase',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of TestResult to manage',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      testCaseId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of TetsCaseResult to manage',
            in: 'path',
            name: 'testCaseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of request and response messages for this TestCase',
      content: { 'application/json': { schema: z.array(RequestResponsePairSchema) } },
    },
  },
  security: [{ 'jwt-bearer': ['user'] }],
})

export const postTestsIdTestCaseResultRoute = createRoute({
  method: 'post',
  path: '/tests/{id}/testCaseResult',
  tags: ['test'],
  summary: 'Report and create a new TestCaseResult',
  description: 'Report a TestCaseResult (typically used by a Test runner)',
  operationId: 'ReportTestCaseResult',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of TestResult to manage',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'TestCase return wrapper object',
      content: { 'application/json': { schema: TestCaseReturnDTOSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'TestCaseResult is reported',
      content: { 'application/json': { schema: TestCaseResultSchema } },
    },
  },
})
