import { createRoute, z } from '@hono/zod-openapi'

const CatalogServicesConditionSchema = z
  .strictObject({
    datacenter: z.string().exactOptional().openapi({ example: 'dc1' }),
    regexp: z.string().openapi({ example: 'web.*' }),
    namespace: z.string().exactOptional().openapi({ example: 'default' }),
    node_meta: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ example: { key: 'value' } }),
    use_as_module_input: z.boolean().default(true).exactOptional().openapi({ example: false }),
  })
  .openapi({ required: ['regexp'] })
  .openapi('CatalogServicesCondition')

const ServicesConditionSchema = z
  .strictObject({
    regexp: z.string().exactOptional().openapi({ example: 'web.*' }),
    names: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['web', 'api'] }),
    filter: z.string().exactOptional().openapi({ example: '\\"test\\" in Service.Tags' }),
    datacenter: z.string().exactOptional().openapi({ example: 'dc1' }),
    namespace: z.string().exactOptional().openapi({ example: 'default' }),
    cts_user_defined_meta: z.record(z.string(), z.string().nullable()).exactOptional(),
    use_as_module_input: z.boolean().default(true).exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('ServicesCondition')

const ConsulKVConditionSchema = z
  .strictObject({
    path: z.string().openapi({ example: 'my-key' }),
    recurse: z.boolean().default(false).exactOptional().openapi({ example: false }),
    datacenter: z.string().exactOptional().openapi({ example: 'dc1' }),
    namespace: z.string().exactOptional().openapi({ example: 'default' }),
    use_as_module_input: z.boolean().default(true).exactOptional().openapi({ example: false }),
  })
  .openapi({ required: ['path'] })
  .openapi('ConsulKVCondition')

const ScheduleConditionSchema = z
  .strictObject({ cron: z.string().openapi({ example: '* * * * Mon' }) })
  .openapi({ required: ['cron'] })
  .openapi('ScheduleCondition')

type ConditionType = {
  catalog_services?: z.infer<typeof CatalogServicesConditionSchema>
  services?: z.infer<typeof ServicesConditionSchema>
  consul_kv?: z.infer<typeof ConsulKVConditionSchema>
  schedule?: z.infer<typeof ScheduleConditionSchema>
}

const ServicesModuleInputSchema = z
  .strictObject({
    regexp: z.string().exactOptional().openapi({ example: 'web.*' }),
    names: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['web', 'api'] }),
    filter: z.string().exactOptional().openapi({ example: '\\"test\\" in Service.Tags' }),
    datacenter: z.string().exactOptional().openapi({ example: 'dc1' }),
    namespace: z.string().exactOptional().openapi({ example: 'default' }),
    cts_user_defined_meta: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServicesModuleInput')

const ConsulKVModuleInputSchema = z
  .strictObject({
    path: z.string().openapi({ example: 'my-key' }),
    recurse: z.boolean().default(false).exactOptional().openapi({ example: false }),
    datacenter: z.string().exactOptional().openapi({ example: 'dc1' }),
    namespace: z.string().exactOptional().openapi({ example: 'default' }),
  })
  .openapi({ required: ['path'] })
  .openapi('ConsulKVModuleInput')

type ModuleInputType = {
  services?: z.infer<typeof ServicesModuleInputSchema>
  consul_kv?: z.infer<typeof ConsulKVModuleInputSchema>
}

const MemberSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'the id of the CTS instance', example: 'cts-01' }),
    service_name: z
      .string()
      .openapi({
        description: 'the service name of the CTS instance',
        example: 'consul-terraform-sync',
      }),
    healthy: z
      .boolean()
      .openapi({ description: 'the health status of the cts instance', example: true }),
    leader: z
      .boolean()
      .openapi({
        description: 'boolean true if CTS instance is a cluster leader, false otherwise',
        example: true,
      }),
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'the address if this instance is the CTS leader, empty otherwise',
        example: 'cts-01.example.com',
      }),
  })
  .openapi({ required: ['id', 'service_name', 'healthy', 'leader'] })
  .openapi('Member')

const RequestIDSchema = z
  .uuid()
  .openapi({ example: 'bb63cd70-8f45-4f42-b27b-bc2a6f4931e6' })
  .openapi('RequestID')

const ClusterStatusResponseSchema = z
  .strictObject({
    cluster_name: z
      .string()
      .openapi({ description: 'the name of the CTS cluster', example: 'cluster-a' }),
    members: z.array(MemberSchema).openapi({
      description: 'the list of CTS instances which are part of this cluster',
      example: [
        {
          id: 'cts-01',
          service_name: 'consul-terraform-sync',
          healthy: true,
          leader: true,
          address: 'cts-01.example.com',
        },
        { id: 'cts-02', service_name: 'consul-terraform-sync', healthy: false, leader: false },
      ],
    }),
    request_id: RequestIDSchema,
  })
  .openapi({ required: ['cluster_name', 'members', 'request_id'] })
  .openapi('ClusterStatusResponse')

const VariableMapSchema = z
  .record(z.string(), z.string())
  .openapi({ description: "The map of variables that are provided to the task's module." })
  .openapi('VariableMap')

const BufferPeriodSchema = z
  .strictObject({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the buffer period is enabled or disabled. Defaults to the global buffer period configured for CTS.',
        example: true,
      }),
    max: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum period of time to wait after changes are detected before triggering the task. Defaults to the global buffer period configured for CTS.',
        example: '5s',
      }),
    min: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum period of time to wait after changes are detected before triggering the task. Defaults to the global buffer period configured for CTS.',
        example: '20s',
      }),
  })
  .openapi({ description: 'The buffer period for triggering task execution.', required: [] })
  .openapi('BufferPeriod')

const ConditionSchema: z.ZodType<ConditionType> = z
  .lazy(() =>
    z
      .strictObject({
        catalog_services: CatalogServicesConditionSchema.exactOptional(),
        services: ServicesConditionSchema.exactOptional(),
        consul_kv: ConsulKVConditionSchema.exactOptional(),
        schedule: ScheduleConditionSchema.exactOptional(),
      })
      .openapi({
        description:
          'The condition on which to trigger the task to execute. If the task has the deprecated services field configured as a module input, it is represented here as condition.services.',
        required: [],
      }),
  )
  .openapi('Condition')

const ModuleInputSchema: z.ZodType<ModuleInputType> = z
  .lazy(() =>
    z
      .strictObject({
        services: ServicesModuleInputSchema.exactOptional(),
        consul_kv: ConsulKVModuleInputSchema.exactOptional(),
      })
      .openapi({
        description:
          'The additional module input(s) that the tasks provides to the Terraform module on execution. If the task has the deprecated services field configured as a module input, it is represented here as module_input.services.',
        required: [],
      }),
  )
  .openapi('ModuleInput')

const TerraformCloudWorkspaceSchema = z
  .strictObject({
    execution_mode: z
      .string()
      .exactOptional()
      .openapi({
        example: 'agent',
        description:
          'Enterprise only. Execution mode to set for the Terraform Cloud workspace associated with the task. Can only be "remote" or "agent". Defaults to "remote".',
      }),
    agent_pool_id: z
      .string()
      .exactOptional()
      .openapi({
        example: 'apool-123',
        description:
          'Enterprise only. Agent pool ID to set for the Terraform Cloud workspace associated with the task when the execution mode is "agent". Either agent_pool_id or agent_pool_name is required if execution mode is "agent". If both are set, then agent_pool_id takes precedence.',
      }),
    agent_pool_name: z
      .string()
      .exactOptional()
      .openapi({
        example: 'test_agent_pool',
        description:
          'Enterprise only. Name of agent pool to set for the Terraform Cloud workspace associated with the task when the execution mode is "agent". Either agent_pool_id or agent_pool_name is required if execution mode is "agent". If both are set, then agent_pool_id takes precedence.',
      }),
    terraform_version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enterprise only. The version of Terraform to use for the Terraform Cloud workspace associated with the task. This is only available when used with the Terraform Cloud driver. Defaults to the latest compatible version if not set.',
        example: '1.0.0',
      }),
  })
  .openapi({
    description:
      'Enterprise only. Configuration values to use for the Terraform Cloud workspace associated with the task. This is only available when used with the Terraform Cloud driver.',
    required: [],
  })
  .openapi('TerraformCloudWorkspace')

const TaskSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The human readable text to describe the task.',
        example: 'an example task',
      }),
    enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Whether the task is enabled or disabled from executing.',
        example: true,
      }),
    name: z.string().openapi({ description: 'The unique name of the task.', example: 'taskA' }),
    providers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "The list of provider names that the task's module uses.",
        example: [],
      }),
    module: z
      .string()
      .openapi({
        description: 'The location of the Terraform module.',
        example: 'org/example/module',
      }),
    variables: VariableMapSchema.exactOptional(),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the configured module that the task uses. Defaults to the latest version if not set.',
        example: '1.0.0',
      }),
    buffer_period: BufferPeriodSchema.exactOptional(),
    condition: ConditionSchema,
    module_input: ModuleInputSchema.exactOptional(),
    terraform_version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated, use task.terraform_cloud_workspace.terraform_version instead. Enterprise only. The version of Terraform to use for the Terraform Cloud workspace associated with the task. This is only available when used with the Terraform Cloud driver. Defaults to the latest compatible version if not set.',
        example: '1.0.0',
      }),
    terraform_cloud_workspace: TerraformCloudWorkspaceSchema.exactOptional(),
  })
  .openapi({
    required: ['name', 'module', 'condition'],
    example: {
      condition: { services: { names: ['web', 'api'] } },
      description: 'A basic task',
      enabled: true,
      name: 'taskC',
      providers: [],
      module: 'org/example/module',
      variables: { var1: 'example.field' },
      version: '1.0.0',
    },
  })
  .openapi('Task')

const TaskRequestSchema = z
  .strictObject({ task: TaskSchema })
  .openapi({ required: ['task'] })
  .openapi('TaskRequest')

const TasksResponseSchema = z
  .strictObject({ tasks: z.array(TaskSchema).exactOptional(), request_id: RequestIDSchema })
  .openapi({ required: ['request_id'] })
  .openapi('TasksResponse')

const RunSchema = z
  .strictObject({
    plan: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'module.test-task.local_file.greeting_services: Refreshing state... [id=2d5049b47d16d9c4d15cc59950fdd3de24b79716]\nmodule.test-task.local_file.greeting: Refreshing state... [id=69342c5c39e5ae5f0077aecc32c0f81811fb8193]\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n-/+ destroy and then create replacement\n\nTerraform will perform the following actions:\n\n  # module.test-task.local_file.greeting_services must be replaced\n-/+ resource "local_file" "greeting_services" {\n      ~ content              = <<-EOT # forces replacement\n          - Hello, api!\n            Hello, web!\n            Hello, web!\n        EOT\n      ~ id                   = "2d5049b47d16d9c4d15cc59950fdd3de24b79716" -> (known after apply)\n        # (3 unchanged attributes hidden)\n    }\n\nPlan: 1 to add, 0 to change, 1 to destroy.\n',
      }),
    changes_present: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not infrastructure changes were detected during task inspection.',
      }),
    tfc_run_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enterprise only. URL of Terraform Cloud run that corresponds to the task run.',
        example: 'https://app.terraform.io/app/my-org/workspaces/my-ws/runs/run-abcDeFgHijk12345',
      }),
  })
  .openapi({ required: [] })
  .openapi('Run')

const ErrorSchema = z
  .strictObject({ message: z.string().openapi({ example: 'this is an error message' }) })
  .openapi({ required: ['message'] })
  .openapi('Error')

const TaskResponseSchema = z
  .strictObject({
    task: TaskSchema.exactOptional(),
    request_id: RequestIDSchema,
    run: RunSchema.exactOptional(),
    error: ErrorSchema.exactOptional(),
  })
  .openapi({ required: ['request_id'] })
  .openapi('TaskResponse')

const TaskDeleteResponseSchema = z
  .strictObject({ request_id: RequestIDSchema, error: ErrorSchema.exactOptional() })
  .openapi({ required: ['request_id'] })
  .openapi('TaskDeleteResponse')

const ErrorResponseSchema = z
  .object({ error: ErrorSchema, request_id: RequestIDSchema })
  .openapi({ required: ['error', 'request_id'] })
  .openapi('ErrorResponse')

const HealthCheckResponseSchema = z
  .strictObject({ error: ErrorSchema.exactOptional() })
  .openapi({ required: ['request_id'] })
  .openapi('HealthCheckResponse')

export const getV1StatusClusterRoute = createRoute({
  method: 'get',
  path: '/v1/status/cluster',
  tags: ['status', 'enterprise'],
  summary: 'Gets cluster status when CTS is configured with high availability',
  description:
    'CTS Enterprise Only. Checks the current status of the CTS cluster and returns a list of cluster members and their associated metadata',
  operationId: 'getClusterStatus',
  responses: {
    200: {
      description: 'Status of cluster members',
      content: { 'application/json': { schema: ClusterStatusResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV1HealthRoute = createRoute({
  method: 'get',
  path: '/v1/health',
  tags: ['health'],
  summary: 'Gets health status',
  description: 'Checks the health of CTS',
  operationId: 'getHealth',
  responses: {
    200: {
      description: 'CTS is healthy',
      content: { 'application/json': { schema: HealthCheckResponseSchema } },
    },
    default: {
      description: 'CTS is unhealthy',
      content: { 'application/json': { schema: HealthCheckResponseSchema } },
    },
  },
})

export const getV1TasksRoute = createRoute({
  method: 'get',
  path: '/v1/tasks',
  tags: ['tasks'],
  summary: 'Gets all tasks',
  description: 'Retrieves information for all tasks',
  operationId: 'getAllTasks',
  responses: {
    200: {
      description: 'Tasks retrieved',
      content: { 'application/json': { schema: TasksResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV1TasksRoute = createRoute({
  method: 'post',
  path: '/v1/tasks',
  tags: ['tasks'],
  summary: 'Creates a new task',
  description: 'Creates a new task\n',
  operationId: 'createTask',
  request: {
    query: z.object({
      run: z
        .enum(['now', 'inspect'])
        .exactOptional()
        .openapi({
          param: {
            name: 'run',
            in: 'query',
            description:
              'Different modes for running. Supports run now which runs the task immediately\nand run inspect which creates a dry run task that is inspected and discarded\nat the end of the inspection.\n',
            required: false,
            schema: { type: 'string', enum: ['now', 'inspect'] },
          },
        }),
    }),
    body: {
      description: 'Task to create',
      content: { 'application/json': { schema: TaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task response with inspection, task not created',
      content: { 'application/json': { schema: TaskResponseSchema } },
    },
    201: {
      description: 'Task response, task is created',
      content: { 'application/json': { schema: TaskResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV1TasksNameRoute = createRoute({
  method: 'get',
  path: '/v1/tasks/{name}',
  tags: ['tasks'],
  summary: 'Gets a task by name',
  description: 'Retrieves information for a single task based on the name provided',
  operationId: 'getTaskByName',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of task to retrieve',
            required: true,
            schema: { type: 'string', example: 'taskA' },
          },
          example: 'taskA',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task retrieved',
      content: { 'application/json': { schema: TaskResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteV1TasksNameRoute = createRoute({
  method: 'delete',
  path: '/v1/tasks/{name}',
  tags: ['tasks'],
  summary: 'Marks a task for deletion',
  description:
    'Marks a single task for deletion based on the name provided. The task will be\ndeleted once it is not running.\n',
  operationId: 'deleteTaskByName',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of task to delete',
            required: true,
            schema: { type: 'string', example: 'taskA' },
          },
          example: 'taskA',
        }),
    }),
  },
  responses: {
    202: {
      description: 'Task marked for deletion',
      content: {
        'application/json': {
          schema: TaskDeleteResponseSchema,
          example: { request_id: 'bb63cd70-8f45-4f42-b27b-bc2a6f4931e6' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
