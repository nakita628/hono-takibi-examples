import { createRoute, z } from '@hono/zod-openapi'

const VersionInfoSchema = z
  .object({
    commit_message: z.string().exactOptional().openapi({ example: 'Sample Message' }),
    sha: z.string().openapi({ example: '7108418d9dd6b329ddff40e7393b3166f8160a88' }),
    release: z.string().openapi({ example: '0.8.9' }),
  })
  .openapi({ required: ['sha', 'release'] })
  .openapi('VersionInfo')

const ProviderInfoSchema = z
  .object({
    provider: z
      .string()
      .openapi({
        description: 'The orchestration provider / implementation',
        example: 'faas-netes',
      }),
    orchestration: z.string().openapi({ example: 'kubernetes' }),
    version: VersionInfoSchema.nullable().openapi({ description: 'The version of the provider' }),
  })
  .openapi({ required: ['provider', 'orchestration', 'version'] })
  .openapi('ProviderInfo')

const GatewayInfoSchema = z
  .object({
    provider: ProviderInfoSchema.nullable(),
    version: VersionInfoSchema.nullable().openapi({ description: 'version of the gateway' }),
    arch: z.string().openapi({ description: 'Platform architecture', example: 'x86_64' }),
  })
  .openapi({ required: ['provider', 'version', 'arch'] })
  .openapi('GatewayInfo')

const PrometheusInnerAlertLabelSchema = z
  .object({
    alertname: z.string().openapi({ description: 'The name of the alert' }),
    function_name: z
      .string()
      .openapi({ description: 'The name of the function', example: 'nodeinfo' }),
  })
  .openapi({
    description: 'A single label of a Prometheus alert',
    required: ['alertname', 'function_name'],
  })
  .openapi('PrometheusInnerAlertLabel')

const PrometheusInnerAlertSchema = z
  .object({
    status: z.string().openapi({ description: 'The status of the alert', example: 'resolved' }),
    labels: PrometheusInnerAlertLabelSchema,
  })
  .openapi({ description: 'A single alert produced by Prometheus', required: ['status', 'labels'] })
  .openapi('PrometheusInnerAlert')

const PrometheusAlertSchema = z
  .object({
    status: z.string().openapi({ description: 'The status of the alert', example: 'resolved' }),
    receiver: z.string().openapi({ description: 'The name of the receiver', example: 'webhook' }),
    alerts: z.array(PrometheusInnerAlertSchema).openapi({ description: 'The list of alerts' }),
  })
  .openapi({
    description:
      'Prometheus alert produced by AlertManager. This is only a subset of the full alert payload.',
    required: ['status', 'receiver', 'alerts'],
    example: {
      receiver: 'scale-up',
      status: 'firing',
      alerts: [
        {
          status: 'firing',
          labels: {
            alertname: 'APIHighInvocationRate',
            code: '200',
            function_name: 'func_nodeinfo',
            instance: 'gateway:8080',
            job: 'gateway',
            monitor: 'faas-monitor',
            service: 'gateway',
            severity: 'major',
            value: '8.998200359928017',
          },
          annotations: {
            description: 'High invocation total on gateway:8080',
            summary: 'High invocation total on gateway:8080',
          },
          startsAt: '2017-03-15T15:52:57.805Z',
          endsAt: '0001-01-01T00:00:00Z',
          generatorURL:
            'http://4156cb797423:9090/graph?g0.expr=rate%28gateway_function_invocation_total%5B10s%5D%29+%3E+5&g0.tab=0',
        },
      ],
      groupLabels: { alertname: 'APIHighInvocationRate', service: 'gateway' },
      commonLabels: {
        alertname: 'APIHighInvocationRate',
        code: '200',
        function_name: 'func_nodeinfo',
        instance: 'gateway:8080',
        job: 'gateway',
        monitor: 'faas-monitor',
        service: 'gateway',
        severity: 'major',
        value: '8.998200359928017',
      },
      commonAnnotations: {
        description: 'High invocation total on gateway:8080',
        summary: 'High invocation total on gateway:8080',
      },
      externalURL: 'http://f054879d97db:9093',
      version: '3',
      groupKey: 18195285354214865000,
    },
  })
  .openapi('PrometheusAlert')

const FunctionResourcesSchema = z
  .object({
    memory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount of memory that is allocated for the function',
        example: '128M',
      }),
    cpu: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount of cpu that is allocated for the function',
        example: '0.01',
      }),
  })
  .openapi({ required: [] })
  .openapi('FunctionResources')

const FunctionDeploymentSchema = z
  .object({
    service: z.string().openapi({ description: 'Name of deployed function', example: 'nodeinfo' }),
    image: z
      .string()
      .openapi({
        description: 'Docker image in accessible registry',
        example: 'functions/nodeinfo:latest',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace to deploy function to. When omitted, the default namespace is used, typically this is `openfaas-fn` but is configured by the provider.',
        example: 'openfaas-fn',
      }),
    envProcess: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Process for watchdog to fork, i.e. the command to start the function process.\n\nThis value configures the `fprocess` env variable.\n',
        example: 'node main.js',
      }),
    constraints: z
      .array(
        z
          .string()
          .openapi({
            description: 'Constraints are specific to OpenFaaS Provider',
            example: 'node.platform.os == linux',
          }),
      )
      .exactOptional(),
    envVars: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Overrides to environmental variables' }),
    secrets: z
      .array(
        z
          .string()
          .openapi({
            description:
              'An array of names of secrets that are required to be loaded from the Docker Swarm.',
            example: 'secret-name-1',
          }),
      )
      .exactOptional(),
    labels: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A map of labels for making scheduling or routing decisions',
        example: { foo: 'bar' },
      }),
    annotations: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A map of annotations for management, orchestration, events and build tasks',
        example: { topics: 'awesome-kafka-topic', foo: 'bar' },
      }),
    limits: FunctionResourcesSchema.nullable().exactOptional(),
    requests: FunctionResourcesSchema.nullable().exactOptional(),
    readOnlyRootFilesystem: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Make the root filesystem of the function read-only' }),
    registryAuth: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: Private registry base64-encoded basic auth (as present in ~/.docker/config.json)\n\nUse a Kubernetes Secret with registry-auth secret type to provide this value instead.\n\nThis value is completely ignored.\n',
        example: 'dXNlcjpwYXNzd29yZA==',
        deprecated: true,
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: Network, usually func_functions for Swarm.\n\nThis value is completely ignored.\n',
        deprecated: true,
        example: 'func_functions',
      }),
  })
  .openapi({ required: ['service', 'image'] })
  .openapi('FunctionDeployment')

const FunctionUsageSchema = z
  .object({
    cpu: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "is the increase in CPU usage since the last measurement\nequivalent to Kubernetes' concept of millicores.\n",
        example: 0.01,
      }),
    totalMemoryBytes: z
      .float64()
      .exactOptional()
      .openapi({ description: 'is the total memory usage in bytes.', example: 1337 }),
  })
  .openapi({ required: [] })
  .openapi('FunctionUsage')

const FunctionStatusSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the function', example: 'nodeinfo' }),
    image: z
      .string()
      .openapi({
        description: 'The fully qualified docker image name of the function',
        example: 'functions/nodeinfo:latest',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace of the function', example: 'openfaas-fn' }),
    envProcess: z
      .string()
      .exactOptional()
      .openapi({ description: 'Process for watchdog to fork', example: 'node main.js' }),
    envVars: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'environment variables for the function runtime' }),
    constraints: z
      .array(
        z
          .string()
          .openapi({
            description: 'Constraints are specific to OpenFaaS Provider',
            example: 'node.platform.os == linux',
          }),
      )
      .exactOptional(),
    secrets: z
      .array(
        z
          .string()
          .openapi({
            description: 'An array of names of secrets that are made available to the function',
          }),
      )
      .exactOptional(),
    labels: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A map of labels for making scheduling or routing decisions',
        example: { foo: 'bar' },
      }),
    annotations: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A map of annotations for management, orchestration, events and build tasks',
        example: { topics: 'awesome-kafka-topic', foo: 'bar' },
      }),
    limits: FunctionResourcesSchema.nullable().exactOptional(),
    requests: FunctionResourcesSchema.nullable().exactOptional(),
    readOnlyRootFilesystem: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'removes write-access from the root filesystem mount-point.' }),
    invocationCount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The amount of invocations for the specified function',
        example: 1337,
      }),
    replicas: z
      .number()
      .exactOptional()
      .openapi({ description: 'Desired amount of replicas', example: 2 }),
    availableReplicas: z
      .number()
      .exactOptional()
      .openapi({ description: 'The current available amount of replicas', example: 2 }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "is the time read back from the faas backend's\ndata store for when the function or its container was created.\n",
      }),
    usage: FunctionUsageSchema.nullable().exactOptional(),
  })
  .openapi({ required: ['name', 'image'] })
  .openapi('FunctionStatus')

const DeleteFunctionRequestSchema = z
  .object({
    functionName: z
      .string()
      .openapi({ description: 'Name of deployed function', example: 'nodeinfo' }),
  })
  .openapi({ required: ['functionName'] })
  .openapi('DeleteFunctionRequest')

const ScaleServiceRequestSchema = z
  .object({
    serviceName: z
      .string()
      .openapi({ description: 'Name of deployed function', example: 'nodeinfo' }),
    namespace: z
      .string()
      .openapi({ description: 'Namespace the function is deployed to.', example: 'openfaas-fn' }),
    replicas: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'Number of replicas to scale to',
        example: 2,
      }),
  })
  .openapi({ required: ['serviceName', 'namespace', 'replicas'] })
  .openapi('ScaleServiceRequest')

const SecretDescriptionSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of secret', example: 'aws-key' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of secret', example: 'openfaas-fn' }),
  })
  .openapi({ required: ['name'] })
  .openapi('SecretDescription')

const SecretValuesSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of secret in plain-text', example: 'changeme' }),
    rawValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value of secret in base64.\n\nThis can be used to provide raw binary data when the `value` field is omitted.\n',
        example: 'Y2hhbmdlbWU=',
      }),
  })
  .openapi({ required: [] })
  .openapi('SecretValues')

const SecretSchema = SecretDescriptionSchema.and(SecretValuesSchema).openapi('Secret')

const LogEntrySchema = z
  .object({
    name: z.string().openapi({ description: 'the function name' }),
    namespace: z.string().openapi({ description: 'the namespace of the function' }),
    instance: z.string().openapi({ description: 'the name/id of the specific function instance' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'the timestamp of when the log message was recorded' }),
    text: z.string().openapi({ description: 'raw log message content' }),
  })
  .openapi({ required: ['name', 'namespace', 'instance', 'timestamp', 'text'] })
  .openapi('LogEntry')

const ListNamespaceResponseSchema = z
  .array(z.string().openapi({ description: 'Namespace name', example: 'openfaas-fn' }))
  .openapi('ListNamespaceResponse')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const getHealthzRoute = createRoute({
  method: 'get',
  path: '/healthz',
  tags: ['internal'],
  summary: 'Healthcheck',
  description: 'Healthcheck for the gateway, indicates if the gateway is running and available',
  operationId: 'healthcheck',
  responses: { 200: { description: 'Healthy' }, 500: { description: 'Not healthy' } },
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['internal'],
  summary: 'Prometheus metrics',
  description: 'Prometheus metrics for the gateway',
  operationId: 'metrics',
  responses: { 200: { description: 'Prometheus metrics in text format' } },
})

export const getSystemInfoRoute = createRoute({
  method: 'get',
  path: '/system/info',
  tags: ['system'],
  summary: 'Get info such as provider version number and provider orchestrator',
  description: 'Get system provider information',
  operationId: 'GetSystemInfo',
  responses: {
    200: {
      description: 'Info result',
      content: { 'application/json': { schema: GatewayInfoSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
})

export const postSystemAlertRoute = createRoute({
  method: 'post',
  path: '/system/alert',
  tags: ['internal'],
  summary:
    'Event-sink for AlertManager, for auto-scaling\n\nInternal use for AlertManager, requires valid AlertManager alert\nJSON\n',
  description: 'Scale a function based on an alert',
  operationId: 'ScaleAlert',
  request: {
    body: {
      description: 'Incoming alert',
      content: { 'application/json': { schema: PrometheusAlertSchema } },
    },
  },
  responses: {
    200: { description: 'Alert handled successfully' },
    500: { description: 'Internal error with swarm or request JSON invalid' },
  },
})

export const getSystemFunctionsRoute = createRoute({
  method: 'get',
  path: '/system/functions',
  tags: ['system'],
  summary: 'Get a list of deployed functions with: stats and image digest',
  description: 'Get a list of deployed functions',
  operationId: 'GetFunctions',
  responses: {
    200: {
      description: 'List of deployed functions.',
      content: { 'application/json': { schema: z.array(FunctionStatusSchema) } },
    },
  },
})

export const putSystemFunctionsRoute = createRoute({
  method: 'put',
  path: '/system/functions',
  tags: ['system'],
  summary: 'Update a function.',
  description: 'update a function spec',
  operationId: 'UpdateFunction',
  request: {
    body: {
      description: 'Function to update',
      content: { 'application/json': { schema: FunctionDeploymentSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Accepted' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postSystemFunctionsRoute = createRoute({
  method: 'post',
  path: '/system/functions',
  tags: ['system'],
  summary: 'Deploy a new function.',
  description: 'Deploy a new function.',
  operationId: 'DeployFunction',
  request: {
    body: {
      description: 'Function to deploy',
      content: { 'application/json': { schema: FunctionDeploymentSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Accepted' },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteSystemFunctionsRoute = createRoute({
  method: 'delete',
  path: '/system/functions',
  tags: ['system'],
  summary: 'Remove a deployed function.',
  description: 'Remove a deployed function.',
  operationId: 'DeleteFunction',
  request: {
    body: {
      description: 'Function to delete',
      content: { 'application/json': { schema: DeleteFunctionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postSystemScaleFunctionFunctionNameRoute = createRoute({
  method: 'post',
  path: '/system/scale-function/{functionName}',
  tags: ['system'],
  summary: 'Scale a function to a specific replica count',
  description: 'Scale a function',
  operationId: 'ScaleFunction',
  request: {
    params: z.object({
      functionName: z
        .string()
        .openapi({
          param: {
            name: 'functionName',
            in: 'path',
            description: 'Function name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScaleServiceRequestSchema } } },
  },
  responses: {
    200: { description: 'Scaling OK' },
    202: { description: 'Scaling OK' },
    404: { description: 'Function not found' },
    500: { description: 'Error scaling function' },
  },
})

export const getSystemFunctionFunctionNameRoute = createRoute({
  method: 'get',
  path: '/system/function/{functionName}',
  tags: ['system'],
  description: 'Get the status of a function by name',
  operationId: 'GetFunctionStatus',
  request: {
    params: z.object({
      functionName: z
        .string()
        .openapi({
          param: {
            name: 'functionName',
            in: 'path',
            description: 'Function name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      namespace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            description: 'Namespace of the function',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Function Summary', content: { '*/*': { schema: FunctionStatusSchema } } },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getSystemSecretsRoute = createRoute({
  method: 'get',
  path: '/system/secrets',
  tags: ['system'],
  summary: 'Get a list of secret names and metadata from the provider',
  description: 'Get a list of secret names and metadata from the provider',
  operationId: 'ListSecrets',
  responses: {
    200: {
      description: 'List of submitted secrets.',
      content: { 'application/json': { schema: SecretDescriptionSchema } },
    },
  },
})

export const putSystemSecretsRoute = createRoute({
  method: 'put',
  path: '/system/secrets',
  tags: ['system'],
  summary: 'Update a secret, the value is replaced.',
  description: 'Update a secret.',
  operationId: 'UpdateSecret',
  request: {
    body: {
      description: 'Secret to update',
      content: { 'application/json': { schema: SecretSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Ok' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    405: { description: 'Method Not Allowed. Secret update is not allowed in faas-swarm.' },
    500: { description: 'Internal Server Error' },
  },
})

export const postSystemSecretsRoute = createRoute({
  method: 'post',
  path: '/system/secrets',
  tags: ['system'],
  description: 'Create a new secret.',
  operationId: 'CreateSecret',
  request: {
    body: {
      description: 'A new secret to create',
      content: { 'application/json': { schema: SecretSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteSystemSecretsRoute = createRoute({
  method: 'delete',
  path: '/system/secrets',
  tags: ['system'],
  description: 'Remove a secret.',
  operationId: 'DeleteSecret',
  request: {
    body: {
      description: 'Secret to delete',
      content: { 'application/json': { schema: SecretDescriptionSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getSystemLogsRoute = createRoute({
  method: 'get',
  path: '/system/logs',
  tags: ['system'],
  description: 'Get a stream of the logs for a specific function',
  operationId: 'GetFunctionLogs',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Function name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      namespace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            description: 'Namespace of the function',
            required: false,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            description: 'Instance of the function',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tail: z
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
            name: 'tail',
            in: 'query',
            description: 'Sets the maximum number of log messages to return, <=0 means unlimited',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      follow: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'follow',
            in: 'query',
            description: 'When true, the request will stream logs until the request timeout',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'since',
            in: 'query',
            description: 'Only return logs after a specific date (RFC3339)',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Newline delimited stream of log messages',
      content: { 'application/x-ndjson': { schema: LogEntrySchema } },
    },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getSystemNamespacesRoute = createRoute({
  method: 'get',
  path: '/system/namespaces',
  tags: ['system'],
  description: 'Get a list of namespaces',
  operationId: 'ListNamespaces',
  responses: {
    200: {
      description: 'List of namespaces',
      content: { 'application/json': { schema: ListNamespaceResponseSchema } },
    },
    500: { description: 'Internal Server Error' },
  },
})

export const postAsyncFunctionFunctionNameRoute = createRoute({
  method: 'post',
  path: '/async-function/{functionName}',
  tags: ['function'],
  summary:
    'Invoke a function asynchronously in the default OpenFaaS namespace\n\nAny additional path segments and query parameters will be passed to the function as is.\n\nSee https://docs.openfaas.com/reference/async/.\n',
  description: 'Invoke a function asynchronously',
  operationId: 'InvokeAsync',
  request: {
    params: z.object({
      functionName: z
        .string()
        .openapi({
          param: {
            name: 'functionName',
            in: 'path',
            description: 'Function name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '(Optional) data to pass to function',
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', example: '{"hello": "world"}' }),
        },
      },
    },
  },
  responses: {
    202: { description: 'Request accepted and queued' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAsyncFunctionFunctionNameNamespaceRoute = createRoute({
  method: 'post',
  path: '/async-function/{functionName}.{namespace}',
  tags: ['function'],
  summary:
    'Invoke a function asynchronously in an OpenFaaS namespace.\n\nAny additional path segments and query parameters will be passed to the function as is.\n\nSee https://docs.openfaas.com/reference/async/.\n',
  description: 'Invoke a function asynchronously in an OpenFaaS namespace.',
  operationId: 'InvokeAsyncNamespaced',
  request: {
    params: z.object({
      functionName: z
        .string()
        .openapi({
          param: {
            name: 'functionName',
            in: 'path',
            description: 'Function name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the function',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '(Optional) data to pass to function',
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', example: '{"hello": "world"}' }),
        },
      },
    },
  },
  responses: {
    202: { description: 'Request accepted and queued' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postFunctionFunctionNameRoute = createRoute({
  method: 'post',
  path: '/function/{functionName}',
  tags: ['function'],
  summary:
    'Synchronously invoke a function defined in te default OpenFaaS namespace.\n\nAny additional path segments and query parameters will be passed to the function as is.\n',
  description: 'Invoke a function in the default OpenFaaS namespace.',
  operationId: 'InvokeFunction',
  request: {
    params: z.object({
      functionName: z
        .string()
        .openapi({
          param: {
            name: 'functionName',
            in: 'path',
            description: 'Function name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '(Optional) data to pass to function',
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', example: '{"hello": "world"}' }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Value returned from function' },
    404: { description: 'Not Found' },
    500: { description: 'Internal server error' },
  },
})

export const postFunctionFunctionNameNamespaceRoute = createRoute({
  method: 'post',
  path: '/function/{functionName}.{namespace}',
  tags: ['function'],
  summary:
    'Synchronously invoke a function defined in the specified namespace.\n\nAny additional path segments and query parameters will be passed to the function as is.\n',
  description: 'Invoke a function in an OpenFaaS namespace.',
  operationId: 'InvokeFunctionNamespaced',
  request: {
    params: z.object({
      functionName: z
        .string()
        .openapi({
          param: {
            name: 'functionName',
            in: 'path',
            description: 'Function name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the function',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '(Optional) data to pass to function',
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', example: '{"hello": "world"}' }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Value returned from function' },
    404: { description: 'Not Found' },
    500: { description: 'Internal server error' },
  },
})
