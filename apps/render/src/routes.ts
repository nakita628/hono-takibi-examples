import { createRoute, z } from '@hono/zod-openapi'

const CursorSchema = z.string().openapi('Cursor')

const AuditLogActorSchema = z
  .object({
    type: z
      .enum(['user', 'rest_api', 'system'])
      .openapi({ description: 'The type of actor that performed the action', example: 'user' }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Email address of the actor (if applicable)',
        example: 'user@example.com',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the actor (if applicable)',
        example: 'usr-123456789',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('AuditLogActor')

const AuditLogSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the audit log entry',
        example: 'aud-123456789',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'When the event occurred (ISO 8601 format)',
        example: '2023-10-01T12:00:00Z',
      }),
    event: z
      .enum([
        'AcceptOrgInviteEvent',
        'AcceptTeamInviteEvent',
        'AddOrgMemberEvent',
        'ApplyBlueprintEvent',
        'ChangeEnvironmentProtectionEvent',
        'ChangeOrg2FAEnforcementEvent',
        'ChangeOrgAllowedLoginMethodsEvent',
        'ChangeOrgNameEvent',
        'ChangeOrgRoleEvent',
        'ChangeTeam2FAEnforcementEvent',
        'ChangeTeamAllowedLoginMethodsEvent',
        'ChangeTeamMemberRoleEvent',
        'ChangeWorkspaceDeployHandlingEvent',
        'ChangeWorkspacePrivacyEvent',
        'CreateBuildSourceEvent',
        'DeleteBuildSourceEvent',
        'CreateCronJobEvent',
        'CreateEnvVarsEvent',
        'CreateEnvironmentEvent',
        'CreateOrgDomainEvent',
        'CreateOtelIntegrationEvent',
        'CreatePostgresEvent',
        'CreatePrivateLinkEvent',
        'CreateProjectEvent',
        'CreateRedisEvent',
        'CreateSSOConnectionEvent',
        'CreateSavedSearchEvent',
        'CreateServerDiskEvent',
        'CreateServerEvent',
        'CreateWebhookEvent',
        'CreateWorkspaceEvent',
        'DeleteCronJobEvent',
        'DeleteEnvGroupEvent',
        'DeleteEnvVarsEvent',
        'DeleteEnvironmentEvent',
        'DeleteOrgDomainEvent',
        'DeleteOtelIntegrationEvent',
        'DeletePostgresEvent',
        'DeletePrivateLinkEvent',
        'DeleteProjectEvent',
        'DeleteRedisEvent',
        'DeleteSSOConnectionEvent',
        'DeleteSavedSearchEvent',
        'DeleteServerDiskEvent',
        'DeleteServerEvent',
        'DeleteWebhookEvent',
        'DeleteWorkspaceEvent',
        'DocumentDownloadEvent',
        'DownloadDatabaseBackupEvent',
        'EnableRedisInternalAuthEvent',
        'InviteToOrgEvent',
        'InviteToTeamEvent',
        'JoinTeamEvent',
        'LinkBuildSourceEnvGroupEvent',
        'LoginEvent',
        'LogoutEvent',
        'MaintenanceModeEnabledEvent',
        'MaintenanceModeURIUpdatedEvent',
        'MoveEnvironmentResourceEvent',
        'ProvisionOrganizationSCIMToken',
        'RemoveOrgMemberEvent',
        'RemoveUserFromTeamEvent',
        'RestoreDiskSnapshotEvent',
        'ResumePostgresEvent',
        'ResumeServiceEvent',
        'RevokeOrganizationSCIMToken',
        'SignNDAEvent',
        'EndShellEvent',
        'StartShellEvent',
        'SuspendPostgresEvent',
        'SuspendServiceEvent',
        'UnlinkBuildSourceEnvGroupEvent',
        'UpdateEnvVarsEvent',
        'UpdateIPAllowListEvent',
        'UpdateOrgPaymentMethodEvent',
        'UpdateOtelIntegrationEvent',
        'UpdateSSOConnectionEvent',
        'UpdateServiceNameEvent',
        'UpdateWebhookEvent',
        'UpdateWorkspacePaymentMethodEvent',
        'VerifyOrgDomainEvent',
        'ViewConnectionInfoEvent',
        'ViewEnvVarValuesEvent',
        'GrantOAuthAccessEvent',
        'RevokeOAuthAccessEvent',
      ])
      .openapi({ description: 'The type of event that occurred', example: 'CreateServerEvent' }),
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'The status of the event', example: 'success' }),
    actor: AuditLogActorSchema,
    metadata: z
      .record(z.string(), z.string())
      .openapi({
        description: 'Additional context information about the event',
        example: { service: 'srv-123456789', field: 'env_vars' },
      }),
  })
  .openapi({ required: ['id', 'timestamp', 'event', 'status', 'actor', 'metadata'] })
  .openapi('AuditLog')

const AuditLogWithCursorSchema = z
  .object({ cursor: CursorSchema, auditLog: AuditLogSchema })
  .openapi({ required: ['cursor', 'auditLog'] })
  .openapi('AuditLogWithCursor')

const AutoDeploySchema = z
  .enum(['yes', 'no'])
  .default('yes')
  .openapi({
    deprecated: true,
    description:
      "Deprecated: use `autoDeployTrigger` instead. You can't set both `autoDeploy` and `autoDeployTrigger` in the same request.\n\n- `yes` is equivalent to `autoDeployTrigger: commit`.\n- `no` is equivalent to `autoDeployTrigger: off`.\n",
  })
  .openapi('AutoDeploy')

const ServiceTypeSchema = z
  .enum(['static_site', 'web_service', 'private_service', 'background_worker', 'cron_job'])
  .openapi('ServiceType')

const ImageSchema = z
  .object({
    ownerId: z
      .string()
      .openapi({
        description:
          'The ID of the owner for this image. This should match the owner of the service as well as the owner of any specified registry credential.',
      }),
    registryCredentialId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional reference to the registry credential passed to the image repository to retrieve this image.',
      }),
    imagePath: z
      .string()
      .openapi({
        description: 'Path to the image used for this server (e.g docker.io/library/nginx:latest).',
      }),
  })
  .openapi({ required: ['imagePath', 'ownerId'] })
  .openapi('Image')

const BuildFilterSchema = z
  .object({ paths: z.array(z.string()), ignoredPaths: z.array(z.string()) })
  .openapi({ required: ['paths', 'ignoredPaths'] })
  .openapi('BuildFilter')

const HeaderInputSchema = z
  .object({
    path: z
      .string()
      .openapi({
        description:
          'The request path to add the header to. Wildcards will cause headers to be applied to all matching paths.',
        example: '/static/*',
      }),
    name: z.string().openapi({ description: 'Header name', example: 'Cache-Control' }),
    value: z.string().openapi({ description: 'Header value', example: 'public, max-age=604800' }),
  })
  .openapi({ required: ['path', 'name', 'value'] })
  .openapi('HeaderInput')

const PullRequestPreviewsEnabledSchema = z
  .enum(['yes', 'no'])
  .default('no')
  .openapi({
    deprecated: true,
    description: 'This field has been deprecated. previews.generation should be used in its place.',
  })
  .openapi('PullRequestPreviewsEnabled')

const PreviewsSchema = z
  .object({
    generation: z
      .enum(['off', 'manual', 'automatic'])
      .default('off')
      .exactOptional()
      .openapi({ description: 'Defaults to "off"' }),
  })
  .openapi({ required: [] })
  .openapi('Previews')

const RouteTypeSchema = z.enum(['redirect', 'rewrite']).openapi('RouteType')

const RoutePostSchema = z
  .object({
    type: RouteTypeSchema,
    source: z.string().openapi({ example: '/:bar/foo' }),
    destination: z.string().openapi({ example: '/foo/:bar' }),
    priority: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Redirect and Rewrite Rules are applied in priority order starting at 0. Defaults to last in the priority list.',
      }),
  })
  .openapi({ required: ['type', 'source', 'destination'] })
  .openapi('RoutePost')

const RenderSubdomainPolicySchema = z
  .enum(['enabled', 'disabled'])
  .openapi({ description: 'Controls whether render.com subdomains are available for the service' })
  .openapi('RenderSubdomainPolicy')

const CidrBlockAndDescriptionSchema = z
  .object({
    cidrBlock: z.string(),
    description: z.string().openapi({ description: 'User-provided description of the CIDR block' }),
  })
  .openapi({ required: ['cidrBlock', 'description'] })
  .openapi('CidrBlockAndDescription')

const StaticSiteDetailsPOSTSchema = z
  .object({
    buildCommand: z.string().exactOptional(),
    headers: z.array(HeaderInputSchema).exactOptional(),
    publishPath: z.string().exactOptional().openapi({ description: 'Defaults to "public"' }),
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    routes: z.array(RoutePostSchema).exactOptional(),
    renderSubdomainPolicy: RenderSubdomainPolicySchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StaticSiteDetailsPOST')

const ServiceDiskSchema = z
  .object({
    name: z.string(),
    mountPath: z.string(),
    sizeGB: z.int().min(1).exactOptional().openapi({ description: 'Defaults to 1' }),
  })
  .openapi({ required: ['name', 'mountPath'] })
  .openapi('ServiceDisk')

const ServiceEnvSchema = z
  .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust', 'image'])
  .openapi({
    deprecated: true,
    description: 'This field has been deprecated, runtime should be used in its place.',
  })
  .openapi('ServiceEnv')

const ServiceRuntimeSchema = z
  .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust', 'image'])
  .openapi({ description: 'Runtime' })
  .openapi('ServiceRuntime')

const DockerDetailsPOSTSchema = z
  .object({
    dockerCommand: z.string().exactOptional(),
    dockerContext: z.string().exactOptional(),
    dockerfilePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defaults to "./Dockerfile"' }),
    registryCredentialId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DockerDetailsPOST')

const NativeEnvironmentDetailsPOSTSchema = z
  .object({ buildCommand: z.string(), startCommand: z.string() })
  .openapi({
    required: ['buildCommand', 'startCommand'],
    description: 'Fields for native environment (runtime) services',
  })
  .openapi('NativeEnvironmentDetailsPOST')

const EnvSpecificDetailsPOSTSchema = z
  .xor([DockerDetailsPOSTSchema, NativeEnvironmentDetailsPOSTSchema])
  .openapi('EnvSpecificDetailsPOST')

const MaintenanceModeSchema = z
  .object({
    enabled: z.boolean(),
    uri: z
      .string()
      .openapi({
        description:
          'The page to be served when [maintenance mode](https://render.com/docs/maintenance-mode) is enabled. When empty, the default maintenance mode page is served.',
      }),
  })
  .openapi({ required: ['enabled', 'uri'] })
  .openapi('MaintenanceMode')

const PlanSchema = z
  .enum([
    'starter',
    'starter_plus',
    'standard',
    'standard_plus',
    'pro',
    'pro_plus',
    'pro_max',
    'pro_ultra',
    'free',
    'custom',
    'starter_legacy',
    'standard_legacy',
    'standard_plus_legacy',
    'pro_legacy',
    'pro_plus_legacy',
    '0.5c-512mb',
    '1c-2g',
    '2c-4g',
    '2c-8g',
    '2c-16g',
    '4c-8g',
    '4c-16g',
    '4c-32g',
    '8c-16g',
    '8c-32g',
    '8c-64g',
    '12c-24g',
    '12c-48g',
    '12c-96g',
  ])
  .openapi({
    example: 'starter',
    description:
      "The compute plan to use. Legacy variants (`*_legacy`) identify grandfathered plans no longer offered for new services. Note that base services on any paid compute plan can't create preview instances with the `free` plan.",
  })
  .openapi('Plan')

const RegionSchema = z
  .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
  .default('oregon')
  .openapi({ description: 'Defaults to "oregon"' })
  .openapi('Region')

const MaxShutdownDelaySecondsSchema = z
  .int()
  .min(1)
  .max(300)
  .default(30)
  .openapi({
    description:
      'The maximum amount of time (in seconds) that Render waits for your application process to exit gracefully after sending it a SIGTERM signal.',
  })
  .openapi('MaxShutdownDelaySeconds')

const WebServiceDetailsPOSTSchema = z
  .object({
    buildSourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Build Source to build and deploy from. Provides all source and build configuration: omit `repo`, `branch`, `image`, `buildFilter`, `runtime`, and build-related `envSpecificDetails` fields when set. A git-backed Build Source must be in the same region as the service; otherwise the request is rejected with 400 and `code: build_source_region_mismatch`.',
      }),
    autoscaling: z
      .object({
        enabled: z.boolean().default(false),
        min: z.int().openapi({ description: 'The minimum number of instances for the service' }),
        max: z.int().openapi({ description: 'The maximum number of instances for the service' }),
        criteria: z
          .object({
            cpu: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
            memory: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
          })
          .openapi({ required: ['cpu', 'memory'] }),
      })
      .exactOptional()
      .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
    disk: ServiceDiskSchema.exactOptional(),
    env: ServiceEnvSchema.exactOptional(),
    runtime: ServiceRuntimeSchema.exactOptional().openapi({
      'x-go-type-skip-optional-pointer': true,
      description:
        'Required unless `buildSourceId` is set, since the build source provides its own runtime.',
    }),
    envSpecificDetails: EnvSpecificDetailsPOSTSchema.exactOptional(),
    healthCheckPath: z.string().exactOptional(),
    maintenanceMode: MaintenanceModeSchema.exactOptional(),
    numInstances: z.int().min(1).exactOptional().openapi({ description: 'Defaults to 1' }),
    plan: PlanSchema.default('0.5c-512mb')
      .exactOptional()
      .openapi({
        description:
          'The compute plan to use. If omitted, defaults to `0.5c-512mb` when creating a new service.',
      }),
    preDeployCommand: z.string().exactOptional(),
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    region: RegionSchema.exactOptional(),
    maxShutdownDelaySeconds: MaxShutdownDelaySecondsSchema.exactOptional(),
    renderSubdomainPolicy: RenderSubdomainPolicySchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebServiceDetailsPOST')

const PaidPlanSchema = z
  .enum([
    'starter',
    'standard',
    'pro',
    'pro_plus',
    'pro_max',
    'pro_ultra',
    '0.5c-512mb',
    '1c-2g',
    '2c-4g',
    '2c-8g',
    '2c-16g',
    '4c-8g',
    '4c-16g',
    '4c-32g',
    '8c-16g',
    '8c-32g',
    '8c-64g',
    '12c-24g',
    '12c-48g',
    '12c-96g',
  ])
  .default('0.5c-512mb')
  .openapi({ description: 'Defaults to `0.5c-512mb` when creating a new service.' })
  .openapi('PaidPlan')

const PrivateServiceDetailsPOSTSchema = z
  .object({
    buildSourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Build Source to build and deploy from. Provides all source and build configuration: omit `repo`, `branch`, `image`, `buildFilter`, `runtime`, and build-related `envSpecificDetails` fields when set. A git-backed Build Source must be in the same region as the service; otherwise the request is rejected with 400 and `code: build_source_region_mismatch`.',
      }),
    autoscaling: z
      .object({
        enabled: z.boolean().default(false),
        min: z.int().openapi({ description: 'The minimum number of instances for the service' }),
        max: z.int().openapi({ description: 'The maximum number of instances for the service' }),
        criteria: z
          .object({
            cpu: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
            memory: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
          })
          .openapi({ required: ['cpu', 'memory'] }),
      })
      .exactOptional()
      .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
    disk: ServiceDiskSchema.exactOptional(),
    env: ServiceEnvSchema.exactOptional(),
    runtime: ServiceRuntimeSchema.exactOptional().openapi({
      'x-go-type-skip-optional-pointer': true,
      description:
        'Required unless `buildSourceId` is set, since the build source provides its own runtime.',
    }),
    envSpecificDetails: EnvSpecificDetailsPOSTSchema.exactOptional(),
    numInstances: z
      .int()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({ description: 'Defaults to 1' }),
    plan: PaidPlanSchema.exactOptional(),
    preDeployCommand: z.string().exactOptional(),
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    region: RegionSchema.exactOptional(),
    maxShutdownDelaySeconds: MaxShutdownDelaySecondsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrivateServiceDetailsPOST')

const BackgroundWorkerDetailsPOSTSchema = z
  .object({
    buildSourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Build Source to build and deploy from. Provides all source and build configuration: omit `repo`, `branch`, `image`, `buildFilter`, `runtime`, and build-related `envSpecificDetails` fields when set. A git-backed Build Source must be in the same region as the service; otherwise the request is rejected with 400 and `code: build_source_region_mismatch`.',
      }),
    autoscaling: z
      .object({
        enabled: z.boolean().default(false),
        min: z.int().openapi({ description: 'The minimum number of instances for the service' }),
        max: z.int().openapi({ description: 'The maximum number of instances for the service' }),
        criteria: z
          .object({
            cpu: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
            memory: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
          })
          .openapi({ required: ['cpu', 'memory'] }),
      })
      .exactOptional()
      .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
    disk: ServiceDiskSchema.exactOptional(),
    env: ServiceEnvSchema.exactOptional(),
    runtime: ServiceRuntimeSchema.exactOptional().openapi({
      'x-go-type-skip-optional-pointer': true,
      description:
        'Required unless `buildSourceId` is set, since the build source provides its own runtime.',
    }),
    envSpecificDetails: EnvSpecificDetailsPOSTSchema.exactOptional(),
    numInstances: z
      .int()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({ description: 'Defaults to 1' }),
    plan: PaidPlanSchema.exactOptional(),
    preDeployCommand: z.string().exactOptional(),
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    region: RegionSchema.exactOptional(),
    maxShutdownDelaySeconds: MaxShutdownDelaySecondsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BackgroundWorkerDetailsPOST')

const RegistryCredentialRegistrySchema = z
  .enum(['GITHUB', 'GITLAB', 'DOCKER', 'GOOGLE_ARTIFACT', 'AWS_ECR'])
  .openapi({ description: 'The registry to use this credential with' })
  .openapi('RegistryCredentialRegistry')

const RegistryCredentialSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for this credential' }),
    name: z.string().openapi({ description: 'Descriptive name for this credential' }),
    registry: RegistryCredentialRegistrySchema,
    username: z.string().openapi({ description: 'The username associated with the credential' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last updated time for the credential' }),
  })
  .openapi({ required: ['id', 'name', 'username', 'registry', 'updatedAt'] })
  .openapi('RegistryCredential')

const DockerDetailsSchema = z
  .object({
    dockerCommand: z.string(),
    dockerContext: z.string(),
    dockerfilePath: z.string(),
    preDeployCommand: z.string().exactOptional(),
    registryCredential: RegistryCredentialSchema.exactOptional(),
  })
  .openapi({ required: ['dockerCommand', 'dockerContext', 'dockerfilePath'] })
  .openapi('DockerDetails')

const NativeEnvironmentDetailsSchema = z
  .object({
    buildCommand: z.string(),
    startCommand: z.string(),
    preDeployCommand: z.string().exactOptional(),
  })
  .openapi({ required: ['buildCommand', 'startCommand'] })
  .openapi('NativeEnvironmentDetails')

const EnvSpecificDetailsSchema = z
  .xor([DockerDetailsSchema, NativeEnvironmentDetailsSchema])
  .openapi('EnvSpecificDetails')

const CronJobDetailsPOSTSchema = z
  .object({
    buildSourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Build Source to build and deploy from. Provides all source and build configuration: omit `repo`, `branch`, `image`, `buildFilter`, `runtime`, and build-related `envSpecificDetails` fields when set. A git-backed Build Source must be in the same region as the service; otherwise the request is rejected with 400 and `code: build_source_region_mismatch`.',
      }),
    env: ServiceEnvSchema.exactOptional(),
    runtime: ServiceRuntimeSchema.exactOptional().openapi({
      'x-go-type-skip-optional-pointer': true,
      description:
        'Required unless `buildSourceId` is set, since the build source provides its own runtime.',
    }),
    envSpecificDetails: EnvSpecificDetailsSchema.exactOptional(),
    plan: PaidPlanSchema.exactOptional(),
    region: RegionSchema.exactOptional(),
    schedule: z.string(),
  })
  .openapi({ required: ['schedule'] })
  .openapi('CronJobDetailsPOST')

const ServicePOSTSchema = z
  .object({
    type: ServiceTypeSchema,
    name: z
      .string()
      .openapi({ description: "The service's name. Must be unique within the workspace." }),
    ownerId: z
      .string()
      .openapi({
        description:
          "The ID of the workspace the service belongs to. Obtain your workspace's ID from its Settings page in the Render Dashboard.",
      }),
    repo: z
      .string()
      .exactOptional()
      .openapi({
        example: 'https://github.com/render-examples/flask-hello-world',
        description:
          "The service's repository URL. Do not specify a branch in this string (use the `branch` parameter instead).",
      }),
    autoDeploy: AutoDeploySchema.exactOptional(),
    autoDeployTrigger: z
      .enum(['commit', 'off', 'checksPass'])
      .exactOptional()
      .openapi({
        description:
          "Controls autodeploy behavior.\n\n- `commit`: Deploy each time a commit is pushed to the service's linked branch.\n- `checksPass`: Deploy each time a commit is pushed to the linked branch, but only after the commit's CI checks pass.\n- `off`: Disable autodeploys.\n",
      }),
    branch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The repo branch to pull, build, and deploy. If omitted, uses the repository's default branch.",
      }),
    image: ImageSchema.exactOptional(),
    buildFilter: BuildFilterSchema.exactOptional(),
    rootDir: z.string().exactOptional(),
    envVars: z
      .array(
        z.xor([
          z.object({ key: z.string(), value: z.string() }).openapi({ required: ['key', 'value'] }),
          z
            .object({
              key: z.string(),
              generateValue: z
                .boolean()
                .openapi({
                  description:
                    'If true, Render generates a strong random value for this environment variable on creation. Cannot be combined with `value`.',
                }),
            })
            .openapi({ required: ['key', 'generateValue'] }),
        ]),
      )
      .exactOptional(),
    secretFiles: z
      .array(
        z
          .object({ name: z.string(), content: z.string() })
          .openapi({ required: ['name', 'content'] }),
      )
      .exactOptional(),
    environmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the environment the service belongs to, if any. Obtain an environment's ID from its Settings page in the Render Dashboard.",
      }),
    serviceDetails: z
      .xor([
        StaticSiteDetailsPOSTSchema,
        WebServiceDetailsPOSTSchema,
        PrivateServiceDetailsPOSTSchema,
        BackgroundWorkerDetailsPOSTSchema,
        CronJobDetailsPOSTSchema,
      ])
      .exactOptional(),
  })
  .openapi({ required: ['type', 'name', 'ownerId'] })
  .openapi('ServicePOST')

const NotifySettingSchema = z.enum(['default', 'notify', 'ignore']).openapi('NotifySetting')

const RegistryCredentialSummarySchema = z
  .object({ id: z.string(), name: z.string() })
  .openapi({ required: ['id', 'name'] })
  .openapi('RegistryCredentialSummary')

const SuspenderTypeSchema = z
  .enum([
    'admin',
    'billing',
    'user',
    'parent_service',
    'stuck_crashlooping',
    'hipaa_enablement',
    'unknown',
  ])
  .openapi('SuspenderType')

const ResourceSchema = z
  .object({ id: z.string(), name: z.string() })
  .openapi({ required: ['id', 'name'] })
  .openapi('Resource')

const BuildPlanSchema = z.enum(['starter', 'performance']).default('starter').openapi('BuildPlan')

const StaticSiteDetailsSchema = z
  .object({
    buildCommand: z.string(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
    parentServer: ResourceSchema.exactOptional(),
    publishPath: z.string(),
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    url: z.string(),
    buildPlan: BuildPlanSchema,
    renderSubdomainPolicy: RenderSubdomainPolicySchema.exactOptional(),
  })
  .openapi({ required: ['buildCommand', 'publishPath', 'url', 'buildPlan'] })
  .openapi('StaticSiteDetails')

const CacheSchema = z
  .object({
    profile: z.enum(['no-cache', 'origin-controlled', 'origin-controlled-all']).default('no-cache'),
  })
  .openapi({ required: ['profile'] })
  .openapi('Cache')

const ServerPortSchema = z
  .object({ port: z.int().openapi({ example: 10000 }), protocol: z.enum(['TCP', 'UDP']) })
  .openapi({ required: ['port', 'protocol'] })
  .openapi('ServerPort')

const SshAddressSchema = z
  .string()
  .openapi({
    description:
      'The SSH address for the service. Only present for services that have SSH enabled.',
  })
  .openapi('SshAddress')

const WebServiceDetailsSchema = z
  .object({
    autoscaling: z
      .object({
        enabled: z.boolean().default(false),
        min: z.int().openapi({ description: 'The minimum number of instances for the service' }),
        max: z.int().openapi({ description: 'The maximum number of instances for the service' }),
        criteria: z
          .object({
            cpu: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
            memory: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
          })
          .openapi({ required: ['cpu', 'memory'] }),
      })
      .exactOptional()
      .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
    cache: CacheSchema.exactOptional(),
    disk: z
      .object({
        id: z
          .string()
          .regex(/^dsk-[0-9a-z]{20}$/)
          .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
        name: z.string(),
        sizeGB: z.int(),
        mountPath: z.string(),
      })
      .exactOptional()
      .openapi({ required: ['id', 'name', 'sizeGB', 'mountPath'] }),
    env: ServiceEnvSchema,
    envSpecificDetails: EnvSpecificDetailsSchema,
    healthCheckPath: z.string(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
    maintenanceMode: MaintenanceModeSchema.exactOptional(),
    numInstances: z
      .int()
      .openapi({
        description:
          'For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.',
      }),
    openPorts: z.array(ServerPortSchema),
    parentServer: ResourceSchema.exactOptional(),
    plan: PlanSchema,
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    region: RegionSchema,
    runtime: ServiceRuntimeSchema,
    sshAddress: SshAddressSchema.exactOptional(),
    url: z.string(),
    buildPlan: BuildPlanSchema,
    maxShutdownDelaySeconds: MaxShutdownDelaySecondsSchema.exactOptional(),
    renderSubdomainPolicy: RenderSubdomainPolicySchema.exactOptional(),
  })
  .openapi({
    required: [
      'env',
      'runtime',
      'envSpecificDetails',
      'plan',
      'region',
      'numInstances',
      'buildPlan',
      'healthCheckPath',
      'openPorts',
      'url',
    ],
  })
  .openapi('WebServiceDetails')

const PrivateServiceDetailsSchema = z
  .object({
    autoscaling: z
      .object({
        enabled: z.boolean().default(false),
        min: z.int().openapi({ description: 'The minimum number of instances for the service' }),
        max: z.int().openapi({ description: 'The maximum number of instances for the service' }),
        criteria: z
          .object({
            cpu: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
            memory: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
          })
          .openapi({ required: ['cpu', 'memory'] }),
      })
      .exactOptional()
      .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
    disk: z.lazy(() => WebServiceDetailsSchema).exactOptional(),
    env: ServiceEnvSchema,
    envSpecificDetails: EnvSpecificDetailsSchema,
    numInstances: z
      .int()
      .openapi({
        description:
          'For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.',
      }),
    openPorts: z.array(ServerPortSchema),
    parentServer: ResourceSchema.exactOptional(),
    plan: PlanSchema,
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    region: RegionSchema,
    runtime: ServiceRuntimeSchema,
    sshAddress: SshAddressSchema.exactOptional(),
    url: z.string(),
    buildPlan: BuildPlanSchema,
    maxShutdownDelaySeconds: MaxShutdownDelaySecondsSchema.exactOptional(),
  })
  .openapi({
    required: [
      'env',
      'runtime',
      'envSpecificDetails',
      'plan',
      'region',
      'numInstances',
      'buildPlan',
      'openPorts',
      'url',
    ],
  })
  .openapi('PrivateServiceDetails')

const BackgroundWorkerDetailsSchema = z
  .object({
    autoscaling: z
      .object({
        enabled: z.boolean().default(false),
        min: z.int().openapi({ description: 'The minimum number of instances for the service' }),
        max: z.int().openapi({ description: 'The maximum number of instances for the service' }),
        criteria: z
          .object({
            cpu: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
            memory: z
              .object({
                enabled: z.boolean().default(false),
                percentage: z
                  .int()
                  .openapi({
                    description:
                      'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                  }),
              })
              .openapi({ required: ['enabled', 'percentage'] }),
          })
          .openapi({ required: ['cpu', 'memory'] }),
      })
      .exactOptional()
      .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
    disk: z.lazy(() => WebServiceDetailsSchema).exactOptional(),
    env: ServiceEnvSchema,
    envSpecificDetails: EnvSpecificDetailsSchema,
    numInstances: z
      .int()
      .openapi({
        description:
          'For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.',
      }),
    parentServer: ResourceSchema.exactOptional(),
    plan: PlanSchema,
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    region: RegionSchema,
    runtime: ServiceRuntimeSchema,
    sshAddress: SshAddressSchema.exactOptional(),
    buildPlan: BuildPlanSchema,
    maxShutdownDelaySeconds: MaxShutdownDelaySecondsSchema.exactOptional(),
  })
  .openapi({
    required: [
      'env',
      'runtime',
      'envSpecificDetails',
      'plan',
      'region',
      'numInstances',
      'buildPlan',
    ],
  })
  .openapi('BackgroundWorkerDetails')

const CronJobDetailsSchema = z
  .object({
    env: ServiceEnvSchema,
    envSpecificDetails: EnvSpecificDetailsSchema,
    lastSuccessfulRunAt: z.iso.datetime({ offset: true }).exactOptional(),
    plan: PlanSchema,
    region: RegionSchema,
    runtime: ServiceRuntimeSchema,
    schedule: z.string(),
    buildPlan: BuildPlanSchema,
  })
  .openapi({
    required: ['env', 'runtime', 'envSpecificDetails', 'plan', 'region', 'schedule', 'buildPlan'],
  })
  .openapi('CronJobDetails')

const ServiceSchema = z
  .object({
    id: z.string(),
    buildSourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Build Source the service builds and deploys from, if any. A git-backed Build Source must be in the same region as the service.',
      }),
    autoDeploy: AutoDeploySchema,
    autoDeployTrigger: z.lazy(() => ServicePOSTSchema).exactOptional(),
    branch: z.string().exactOptional(),
    buildFilter: BuildFilterSchema.exactOptional(),
    createdAt: z.iso.datetime({ offset: true }),
    dashboardUrl: z
      .string()
      .openapi({ description: 'The URL to view the service in the Render Dashboard' }),
    environmentId: z.string().exactOptional(),
    imagePath: z.string().exactOptional(),
    name: z.string(),
    notifyOnFail: NotifySettingSchema,
    ownerId: z.string(),
    registryCredential: RegistryCredentialSummarySchema.exactOptional(),
    repo: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://github.com/render-examples/flask-hello-world' }),
    rootDir: z.string(),
    slug: z.string(),
    suspended: z.enum(['suspended', 'not_suspended']).openapi({ title: 'serviceSuspendedState' }),
    suspenders: z.array(SuspenderTypeSchema),
    type: ServiceTypeSchema,
    updatedAt: z.iso.datetime({ offset: true }),
    serviceDetails: z.xor([
      StaticSiteDetailsSchema,
      WebServiceDetailsSchema,
      PrivateServiceDetailsSchema,
      BackgroundWorkerDetailsSchema,
      CronJobDetailsSchema,
    ]),
  })
  .openapi({
    required: [
      'id',
      'name',
      'ownerId',
      'type',
      'createdAt',
      'dashboardUrl',
      'updatedAt',
      'suspended',
      'suspenders',
      'autoDeploy',
      'notifyOnFail',
      'slug',
      'serviceDetails',
      'rootDir',
    ],
  })
  .openapi('Service')

const DeployStatusSchema = z
  .enum([
    'created',
    'queued',
    'build_in_progress',
    'update_in_progress',
    'live',
    'deactivated',
    'build_failed',
    'update_failed',
    'canceled',
    'pre_deploy_in_progress',
    'pre_deploy_failed',
  ])
  .openapi('DeployStatus')

const DeploySchema = z
  .object({
    id: z.string(),
    buildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the build this deploy shipped. Only present for deploys of a build from a Build Source.',
      }),
    commit: z
      .object({
        id: z.string().exactOptional(),
        message: z.string().exactOptional(),
        createdAt: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    image: z
      .object({
        ref: z
          .string()
          .exactOptional()
          .openapi({ description: 'Image reference used when creating the deploy' }),
        sha: z
          .string()
          .exactOptional()
          .openapi({
            description: 'SHA that the image reference was resolved to when creating the deploy',
          }),
        registryCredential: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of credential used to pull the image, if provided' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Image information used when creating the deploy. Not present for Git-backed deploys',
        required: [],
      }),
    status: DeployStatusSchema.exactOptional(),
    trigger: z
      .enum([
        'api',
        'blueprint_sync',
        'deploy_hook',
        'deployed_by_render',
        'manual',
        'other',
        'new_commit',
        'rollback',
        'service_resumed',
        'service_updated',
      ])
      .exactOptional(),
    startedAt: z.iso.datetime({ offset: true }).exactOptional(),
    finishedAt: z.iso.datetime({ offset: true }).exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('Deploy')

const DeployWithCursorSchema = z
  .object({ deploy: DeploySchema.exactOptional(), cursor: CursorSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeployWithCursor')

const DeployListSchema = z.array(DeployWithCursorSchema).openapi('DeployList')

const WorkflowVersionWithCursorSchema = z
  .object({
    workflowVersion: z
      .object({
        id: z.string(),
        workflowId: z.string(),
        name: z.string(),
        createdAt: z.iso.datetime({ offset: true }),
        status: z.enum([
          'created',
          'building',
          'registering',
          'build_failed',
          'registration_failed',
          'ready',
        ]),
      })
      .openapi({
        required: ['id', 'workflowId', 'name', 'image', 'createdAt', 'updatedAt', 'status'],
      }),
    cursor: CursorSchema,
  })
  .openapi({ required: ['workflowVersion', 'cursor'] })
  .openapi('WorkflowVersionWithCursor')

const WorkflowWithCursorSchema = z
  .object({
    workflow: z
      .object({
        id: z.string(),
        name: z.string(),
        ownerId: z.string(),
        createdAt: z.iso.datetime({ offset: true }),
        updatedAt: z.iso.datetime({ offset: true }),
        buildConfig: z
          .object({
            branch: z
              .string()
              .exactOptional()
              .openapi({ description: 'The branch to use for the build, if applicable.' }),
            buildCommand: z
              .string()
              .openapi({
                description:
                  'The command to run to build the workflow. Required for every runtime except docker, which builds from its Dockerfile.',
              }),
            repo: z
              .string()
              .regex(/\S/)
              .openapi({
                description: 'The repository URL to use for the build. Cannot be blank.',
              }),
            rootDir: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The root directory of the repository to use for the build, if applicable.',
              }),
            runtime: z
              .enum(['elixir', 'go', 'node', 'python', 'ruby'])
              .openapi({
                description: 'The runtime environment for the workflow (e.g., node, python, etc.).',
              }),
          })
          .openapi({ required: ['buildCommand', 'repo', 'runtime'] }),
        runCommand: z.string().openapi({ description: 'Command to run the workflow.' }),
        region: z
          .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
          .default('oregon')
          .openapi({ description: 'Defaults to "oregon"' }),
        environmentId: z.string().exactOptional(),
        slug: z.string().exactOptional(),
        autoDeployTrigger: z
          .enum(['commit', 'off', 'checksPass'])
          .default('commit')
          .exactOptional()
          .openapi({
            description:
              'Controls autodeploy behavior. "commit" deploys when a commit is pushed to the branch. "checksPass" waits for CI checks to pass before deploying. "off" disables autodeploy.',
          }),
      })
      .openapi({
        required: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
          'ownerId',
          'region',
          'runCommand',
          'buildConfig',
        ],
      }),
    cursor: CursorSchema,
  })
  .openapi({ required: ['workflow', 'cursor'] })
  .openapi('WorkflowWithCursor')

const TaskWithCursorSchema = z
  .object({
    task: z
      .object({
        id: z.string(),
        name: z.string(),
        createdAt: z.iso.datetime({ offset: true }),
        workflowId: z.string().exactOptional(),
        workflowVersionId: z.string().exactOptional(),
      })
      .openapi({ required: ['id', 'name', 'createdAt'] }),
    cursor: CursorSchema,
  })
  .openapi({ required: ['task', 'cursor'] })
  .openapi('TaskWithCursor')

const ServiceAndDeploySchema = z
  .object({ service: ServiceSchema.exactOptional(), deployId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ServiceAndDeploy')

const DedicatedIPStatusSchema = z
  .enum(['UNKNOWN', 'CREATING', 'PENDING', 'RUNNING', 'FAILED', 'DELETING', 'DELETED'])
  .openapi({ description: 'Current status of a dedicated IP set.' })
  .openapi('DedicatedIPStatus')

const DedicatedIPSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for this dedicated IP set.' }),
    name: z.string().openapi({ description: 'Descriptive name for this dedicated IP set.' }),
    description: z
      .string()
      .openapi({ description: 'Free-form description for this dedicated IP set.' }),
    ownerId: z
      .string()
      .openapi({ description: 'The ID of the workspace that owns this dedicated IP set.' }),
    region: RegionSchema,
    environmentIds: z
      .array(z.string())
      .openapi({
        description:
          'Environments this dedicated IP set applies to. If empty, it applies to all services in the workspace within its region.\n',
      }),
    ips: z
      .array(z.string())
      .openapi({ description: 'The IPv4 addresses assigned to this dedicated IP set.\n' }),
    status: DedicatedIPStatusSchema,
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time the dedicated IP set was created.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the dedicated IP set was last updated.' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'description',
      'ownerId',
      'region',
      'environmentIds',
      'ips',
      'status',
      'createdAt',
    ],
  })
  .openapi('DedicatedIP')

const DedicatedIPPOSTSchema = z
  .object({
    name: z.string().openapi({ description: 'Name for the dedicated IP set.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Free-form description for the dedicated IP set.' }),
    ownerId: z
      .string()
      .openapi({ description: 'The ID of the workspace that will own this dedicated IP set.' }),
    region: RegionSchema,
    environmentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Environments to scope the dedicated IP set to. If omitted or empty, it applies to all services in the workspace within its region.\n',
      }),
  })
  .openapi({
    description: 'Input for creating a dedicated IP set.',
    required: ['name', 'ownerId', 'region'],
  })
  .openapi('DedicatedIPPOST')

const DedicatedIPPATCHSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    environmentIds: z.array(z.string()).exactOptional(),
  })
  .openapi({
    description:
      'Input for updating a dedicated IP set. All fields are optional. Omitted fields are left unchanged. Provide `environmentIds: []` to switch from environment-scoped to workspace-scoped.\n',
    required: [],
  })
  .openapi('DedicatedIPPATCH')

const DockerDetailsPATCHSchema = z
  .object({
    dockerCommand: z.string().exactOptional(),
    dockerContext: z.string().exactOptional(),
    dockerfilePath: z.string().exactOptional(),
    registryCredentialId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional reference to the registry credential for this build. Omit the field to leave the stored credential unchanged; send an empty string to clear it.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DockerDetailsPATCH')

const NativeEnvironmentDetailsPATCHSchema = z
  .object({ buildCommand: z.string().exactOptional(), startCommand: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('NativeEnvironmentDetailsPATCH')

const EnvSpecificDetailsPATCHSchema = z
  .xor([DockerDetailsPATCHSchema, NativeEnvironmentDetailsPATCHSchema])
  .openapi('EnvSpecificDetailsPATCH')

const DiskWithCursorSchema = z
  .object({
    disk: z
      .object({
        id: z
          .string()
          .regex(/^dsk-[0-9a-z]{20}$/)
          .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
        name: z.string(),
        sizeGB: z.int(),
        mountPath: z.string(),
        serviceId: z.string().exactOptional(),
        createdAt: z.iso.datetime({ offset: true }),
        updatedAt: z.iso.datetime({ offset: true }),
      })
      .openapi({ required: ['id', 'name', 'sizeGB', 'mountPath', 'createdAt', 'updatedAt'] }),
    cursor: CursorSchema,
  })
  .openapi({ required: ['disk', 'cursor'] })
  .openapi('DiskWithCursor')

const InstanceIdSchema = z
  .string()
  .openapi({
    description:
      "When a service with a disk is scaled, the instanceId is used to identify the instance that the disk is attached to. Each instance's disks get their own snapshots, and can be restored separately.",
  })
  .openapi('InstanceId')

const DiskSnapshotSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    snapshotKey: z.string().exactOptional(),
    instanceId: InstanceIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DiskSnapshot')

const SnapshotRestorePOSTSchema = z
  .object({ snapshotKey: z.string(), instanceId: InstanceIdSchema.exactOptional() })
  .openapi({ required: ['snapshotKey'] })
  .openapi('SnapshotRestorePOST')

const ServiceWithCursorSchema = z
  .object({ service: ServiceSchema, cursor: CursorSchema })
  .openapi({ required: ['service', 'cursor'] })
  .openapi('ServiceWithCursor')

const ServiceListSchema = z.array(ServiceWithCursorSchema).openapi('ServiceList')

const StaticSiteDetailsPATCHSchema = z
  .object({
    buildCommand: z.string().exactOptional(),
    publishPath: z.string().exactOptional(),
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    renderSubdomainPolicy: RenderSubdomainPolicySchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StaticSiteDetailsPATCH')

const WebServiceDetailsPATCHSchema = z
  .object({
    envSpecificDetails: EnvSpecificDetailsPATCHSchema.exactOptional(),
    healthCheckPath: z.string().exactOptional(),
    maintenanceMode: MaintenanceModeSchema.exactOptional(),
    plan: PlanSchema.exactOptional(),
    preDeployCommand: z.string().exactOptional(),
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    runtime: ServiceRuntimeSchema.exactOptional(),
    maxShutdownDelaySeconds: MaxShutdownDelaySecondsSchema.exactOptional(),
    renderSubdomainPolicy: RenderSubdomainPolicySchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
    cache: CacheSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebServiceDetailsPATCH')

const PrivateServiceDetailsPATCHSchema = z
  .object({
    envSpecificDetails: EnvSpecificDetailsPATCHSchema.exactOptional(),
    plan: PaidPlanSchema.exactOptional(),
    preDeployCommand: z.string().exactOptional(),
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    runtime: ServiceRuntimeSchema.exactOptional(),
    maxShutdownDelaySeconds: MaxShutdownDelaySecondsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrivateServiceDetailsPATCH')

const BackgroundWorkerDetailsPATCHSchema = z
  .object({
    envSpecificDetails: EnvSpecificDetailsPATCHSchema.exactOptional(),
    plan: PaidPlanSchema.exactOptional(),
    preDeployCommand: z.string().exactOptional(),
    pullRequestPreviewsEnabled: PullRequestPreviewsEnabledSchema.exactOptional(),
    previews: PreviewsSchema.exactOptional(),
    runtime: ServiceRuntimeSchema.exactOptional(),
    maxShutdownDelaySeconds: MaxShutdownDelaySecondsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BackgroundWorkerDetailsPATCH')

const CronJobDetailsPATCHSchema = z
  .object({
    envSpecificDetails: EnvSpecificDetailsPATCHSchema.exactOptional(),
    plan: PaidPlanSchema.exactOptional(),
    schedule: z.string().exactOptional(),
    runtime: ServiceRuntimeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CronJobDetailsPATCH')

const ServicePATCHSchema = z
  .object({
    buildSourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Build Source to link this service to. Cannot be combined with build-configuration changes or other `serviceDetails` fields, except `startCommand`. Linking to a Build Source with a native runtime requires a start command, either in this request or already set on the service. Linking to a Build Source with a Docker or image runtime rejects a start command. A git-backed Build Source must be in the same region as the service; otherwise the request is rejected with 400 and `code: build_source_region_mismatch`.',
      }),
    autoDeploy: AutoDeploySchema.exactOptional(),
    autoDeployTrigger: z.lazy(() => ServicePOSTSchema).exactOptional(),
    repo: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    image: ImageSchema.exactOptional(),
    name: z.string().exactOptional(),
    buildFilter: BuildFilterSchema.exactOptional(),
    rootDir: z.string().exactOptional(),
    serviceDetails: z
      .xor([
        StaticSiteDetailsPATCHSchema,
        WebServiceDetailsPATCHSchema,
        PrivateServiceDetailsPATCHSchema,
        BackgroundWorkerDetailsPATCHSchema,
        CronJobDetailsPATCHSchema,
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServicePATCH')

const EnvVarValueSchema = z
  .object({ value: z.string() })
  .openapi({ required: ['value'] })
  .openapi('EnvVarValue')

const EnvVarGenerateValueSchema = z
  .object({ generateValue: z.boolean() })
  .openapi({ required: ['generateValue'] })
  .openapi('EnvVarGenerateValue')

const AddUpdateEnvVarInputSchema = z
  .xor([EnvVarValueSchema, EnvVarGenerateValueSchema])
  .openapi('AddUpdateEnvVarInput')

const PreviewInputSchema = z
  .object({
    imagePath: z
      .string()
      .openapi({
        example: 'docker.io/library/nginx:latest',
        description:
          "Must be either a full URL or the relative path to an image. If a relative path, Render uses the base service's image URL as its root. For example, if the base service's image URL is `docker.io/library/nginx:latest`, then valid values are: `docker.io/library/nginx:<any tag or SHA>`, `library/nginx:<any tag or SHA>`, or `nginx:<any tag or SHA>`. Note that the path must match (only the tag or SHA can vary).",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        example: 'preview',
        description:
          "A name for the service preview instance. If not specified, Render generates the name using the base service's name and the specified tag or SHA.",
      }),
    plan: PlanSchema.exactOptional(),
  })
  .openapi({ required: ['imagePath'] })
  .openapi('PreviewInput')

const HeaderSchema = z
  .object({ id: z.string(), path: z.string(), name: z.string(), value: z.string() })
  .openapi({ required: ['id', 'path', 'name', 'value'] })
  .openapi('Header')

const NotificationOverrideWithCursorSchema = z
  .object({
    override: z
      .object({
        serviceId: z.string(),
        previewNotificationsEnabled: z.enum(['default', 'false', 'true']),
        notificationsToSend: z.enum(['default', 'none', 'failure', 'all']),
      })
      .openapi({
        required: ['type', 'serviceId', 'previewNotificationsEnabled', 'notificationsToSend'],
      }),
    cursor: CursorSchema,
  })
  .openapi({ required: ['override', 'cursor'] })
  .openapi('NotificationOverrideWithCursor')

const OwnerSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
    twoFactorAuthEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether two-factor authentication is enabled for the owner. Only present if `type` is `user`.',
      }),
    type: z.enum(['user', 'team']),
  })
  .openapi({ required: ['id', 'name', 'email', 'type'] })
  .openapi('Owner')

const TeamMemberRoleSchema = z
  .enum(['ADMIN', 'DEVELOPER', 'WORKSPACE_CONTRIBUTOR', 'WORKSPACE_BILLING', 'WORKSPACE_VIEWER'])
  .openapi({
    description: "The member's workspace role. Values are always returned in uppercase.",
    example: 'DEVELOPER',
  })
  .openapi('TeamMemberRole')

const TeamMemberSchema = z
  .object({
    userId: z.string(),
    name: z.string(),
    email: z.string(),
    status: z.enum(['active', 'inactive']),
    role: TeamMemberRoleSchema,
    mfaEnabled: z.boolean(),
  })
  .openapi({ required: ['userId', 'name', 'email', 'status', 'role', 'mfaEnabled'] })
  .openapi('TeamMember')

const TeamMembersSchema = z.array(TeamMemberSchema).openapi('TeamMembers')

const OwnerWithCursorSchema = z
  .object({ owner: OwnerSchema.exactOptional(), cursor: CursorSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('OwnerWithCursor')

const RouteSchema = z
  .object({
    id: z.string(),
    type: RouteTypeSchema,
    source: z.string(),
    destination: z.string(),
    priority: z
      .int()
      .openapi({
        description: 'Redirect and Rewrite Rules are applied in priority order starting at 0',
      }),
  })
  .openapi({ required: ['id', 'type', 'source', 'destination', 'priority'] })
  .openapi('Route')

const HeaderWithCursorSchema = z
  .object({ header: HeaderSchema, cursor: z.string() })
  .openapi({ required: ['header', 'cursor'] })
  .openapi('HeaderWithCursor')

const RouteWithCursorSchema = z
  .object({ route: RouteSchema, cursor: z.string() })
  .openapi({ required: ['route', 'cursor'] })
  .openapi('RouteWithCursor')

const RoutePatchSchema = z
  .object({
    priority: z
      .int()
      .openapi({
        'x-go-type': '*int',
        description:
          'Redirect and Rewrite Rules are applied in priority order starting at 0. Moves this route to the specified priority and adjusts other route priorities accordingly.',
      }),
  })
  .openapi({ required: ['priority'] })
  .openapi('RoutePatch')

const RoutePutSchema = z
  .object({
    type: RouteTypeSchema,
    source: z.string().openapi({ example: '/:bar/foo' }),
    destination: z.string().openapi({ example: '/foo/:bar' }),
  })
  .openapi({ required: ['type', 'source', 'destination'] })
  .openapi('RoutePut')

const ServiceTypeShortSchema = z
  .enum(['static', 'web', 'pserv', 'worker', 'cron'])
  .openapi('ServiceTypeShort')

const EnvVarSchema = z
  .object({ key: z.string(), value: z.string() })
  .openapi({ required: ['key', 'value'] })
  .openapi('EnvVar')

const EnvVarWithCursorSchema = z
  .object({ envVar: EnvVarSchema, cursor: CursorSchema })
  .openapi({ required: ['envVar', 'cursor'] })
  .openapi('EnvVarWithCursor')

const CustomDomainSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    domainType: z.enum(['apex', 'subdomain']),
    publicSuffix: z.string(),
    redirectForName: z.string(),
    verificationStatus: z.enum(['verified', 'unverified']),
    createdAt: z.iso.datetime({ offset: true }),
    server: z
      .object({ id: z.string().exactOptional(), name: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'domainType',
      'publicSuffix',
      'verificationStatus',
      'createdAt',
      'redirectForName',
    ],
  })
  .openapi('CustomDomain')

const CustomDomainWithCursorSchema = z
  .object({ customDomain: CustomDomainSchema, cursor: CursorSchema })
  .openapi({ required: ['customDomain', 'cursor'] })
  .openapi('CustomDomainWithCursor')

const ErrorSchema = z
  .object({
    id: z.string().exactOptional(),
    message: z.string().exactOptional(),
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A stable, machine-readable identifier present on specific errors that clients can handle specially. Each endpoint documents the codes it can return. The errorCode schema lists the full vocabulary of codes.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ErrorCodeSchema = z
  .enum([
    'insufficient_token_scope',
    'multiple_regions',
    'duplicate_saved_search_name',
    'too_many_resources',
    'preauth_consent_required',
    'preauth_declined',
    'preauth_attempt_spent',
    'preauth_no_payment_method',
    'preauth_unavailable',
    'cursor_origin_receipt_expired',
    'cursor_origin_receipt_invalid',
    'sandbox_not_running',
    'snapshot_creating',
    'snapshot_not_available',
    'snapshot_plan_mismatch',
    'snapshot_not_found',
    'build_not_found',
    'build_not_succeeded',
    'invalid_sandbox_group_id',
    'invalid_snapshot_id',
    'invalid_owner_id',
    'invalid_status',
    'invalid_cursor',
    'invalid_limit',
    'invalid_snapshot_name',
    'sandbox_group_suspended',
    'sandbox_group_limit_reached',
    'invalid_sandbox_plan',
    'invalid_timeout_seconds',
    'build_source_region_mismatch',
  ])
  .openapi({
    description:
      'The machine-readable codes that can appear in the error object\'s "code" field. The field is a plain string so new codes are not breaking changes; this vocabulary exists so generated clients get typed constants. OpenAPI cannot deprecate individual enum values, so deprecation notes live in x-enum-descriptions.',
    'x-enum-varnames': [
      'ErrorCodeInsufficientTokenScope',
      'ErrorCodeMultipleRegions',
      'ErrorCodeDuplicateSavedSearchName',
      'ErrorCodeTooManyResources',
      'ErrorCodePreauthConsentRequired',
      'ErrorCodePreauthDeclined',
      'ErrorCodePreauthAttemptSpent',
      'ErrorCodePreauthNoPaymentMethod',
      'ErrorCodePreauthUnavailable',
      'ErrorCodeCursorOriginReceiptExpired',
      'ErrorCodeCursorOriginReceiptInvalid',
      'ErrorCodeSandboxNotRunning',
      'ErrorCodeSnapshotCreating',
      'ErrorCodeSnapshotNotAvailable',
      'ErrorCodeSnapshotPlanMismatch',
      'ErrorCodeSnapshotNotFound',
      'ErrorCodeBuildNotFound',
      'ErrorCodeBuildNotSucceeded',
      'ErrorCodeInvalidSandboxGroupID',
      'ErrorCodeInvalidSnapshotID',
      'ErrorCodeInvalidOwnerID',
      'ErrorCodeInvalidStatus',
      'ErrorCodeInvalidCursor',
      'ErrorCodeInvalidLimit',
      'ErrorCodeInvalidSnapshotName',
      'ErrorCodeSandboxGroupSuspended',
      'ErrorCodeSandboxGroupLimitReached',
      'ErrorCodeInvalidSandboxPlan',
      'ErrorCodeInvalidTimeoutSeconds',
      'ErrorCodeBuildSourceRegionMismatch',
    ],
    'x-enum-descriptions': [
      "The scoped API token does not satisfy the endpoint's minimum scope requirements.",
      'A metrics query over resources spanning multiple regions is not supported.',
      'A saved-search create or rename hit a name already used in the project.',
      'A metrics query over more resources than the query supports; the bandwidth per-source breakdown caps at 30.',
      'The plan needs a spend authorization the requester has not accepted.',
      "The owner's card declined the spend authorization.",
      "The owner's one authorization attempt has already been declined.",
      'The plan needs a spend authorization and no payment method is on file.',
      'The authorization could not be attempted; the operation can be retried.',
      'The Cursor Origin installation receipt was past its five-minute expiry.',
      'The Cursor Origin installation receipt failed verification.',
      'A snapshot capture was requested on a sandbox that is not running.',
      'A snapshot delete was requested while the capture is still in progress.',
      'A sandbox create named a source snapshot that is not available.',
      'A sandbox create named a runtime source snapshot with a different plan.',
      'A sandbox create named a source snapshot that does not exist.',
      'A sandbox create or build request named a build that does not exist in the sandbox group.',
      'A sandbox create named a build that has not succeeded.',
      'A request path named a sandbox group ID that is not a well-formed sbg- identifier.',
      'A request path named a snapshot ID that is not a well-formed snp- identifier.',
      'A list request omitted ownerId or named more than one.',
      "A list request filtered on a status value outside the resource's status vocabulary.",
      'A list request passed a cursor that is malformed or not visible to the caller.',
      "A list request passed a limit that is not a positive integer within the route's maximum.",
      'A snapshot name is empty, longer than 64 characters, or starts with snp-.',
      'A create, connect, or snapshot request named a sandbox whose group is suspended.',
      'A sandbox group create, or a sandbox create that needs a new default group, for an owner already at its sandbox group limit.',
      'A sandbox create asked for a plan that does not exist or is not offered.',
      "A sandbox create asked for a timeoutSeconds below 0 or above the workspace plan's maximum.",
      'A service create or update linked a git-backed Build Source in a different region than the service.',
    ],
  })
  .openapi('ErrorCode')

const KeyValuePlanSchema = z
  .enum([
    'free',
    'starter',
    'standard',
    'pro',
    'pro_plus',
    'custom',
    '256mb',
    '1g',
    '5g',
    '10g',
    '20g',
    '40g',
  ])
  .openapi('KeyValuePlan')

const MaxmemoryPolicySchema = z
  .enum([
    'noeviction',
    'allkeys_lfu',
    'allkeys_lru',
    'allkeys_random',
    'volatile_lfu',
    'volatile_lru',
    'volatile_random',
    'volatile_ttl',
  ])
  .openapi({ description: 'The eviction policy for the Key Value instance' })
  .openapi('MaxmemoryPolicy')

const PersistenceModeSchema = z
  .enum(['journal_snapshot', 'snapshot', 'off'])
  .openapi({
    description:
      "The persistence mode for the Key Value instance. The default for paid instances is journal_snapshot (both journaling and snapshots). Only turn off persistence if you're using this Key Value instance as a cache and are okay with losing data. Free instances do not have persistence.",
  })
  .openapi('PersistenceMode')

const KeyValuePOSTInputSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the Key Value instance' }),
    ownerId: z.string().openapi({ description: 'The ID of the owner of the Key Value instance' }),
    plan: KeyValuePlanSchema,
    region: RegionSchema.exactOptional(),
    environmentId: z.string().exactOptional(),
    maxmemoryPolicy: MaxmemoryPolicySchema.exactOptional(),
    persistenceMode: PersistenceModeSchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({
    description: 'Input type for creating a Key Value instance',
    required: ['name', 'ownerId', 'plan'],
  })
  .openapi('KeyValuePOSTInput')

const KeyValuePATCHInputSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the Key Value instance' }),
    plan: KeyValuePlanSchema.exactOptional(),
    maxmemoryPolicy: MaxmemoryPolicySchema.exactOptional(),
    persistenceMode: PersistenceModeSchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({ description: 'Input type for updating a Key Value instance', required: [] })
  .openapi('KeyValuePATCHInput')

const DatabaseStatusSchema = z
  .enum([
    'creating',
    'available',
    'unavailable',
    'config_restart',
    'suspended',
    'maintenance_scheduled',
    'maintenance_in_progress',
    'recovery_failed',
    'recovery_in_progress',
    'unknown',
    'updating_instance',
  ])
  .openapi('DatabaseStatus')

const KeyValueOptionsSchema = z
  .object({
    maxmemoryPolicy: z.string().exactOptional(),
    persistenceMode: PersistenceModeSchema.exactOptional(),
  })
  .openapi({ description: 'Options for a Key Value instance', required: [] })
  .openapi('KeyValueOptions')

const KeyValueSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the Key Value instance' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The creation time of the Key Value instance' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The last updated time of the Key Value instance' }),
    status: DatabaseStatusSchema,
    region: RegionSchema,
    plan: KeyValuePlanSchema,
    name: z.string().openapi({ description: 'The name of the Key Value instance' }),
    owner: OwnerSchema,
    options: KeyValueOptionsSchema,
    ipAllowList: z
      .array(CidrBlockAndDescriptionSchema)
      .openapi({ description: 'The IP allow list for the Key Value instance' }),
    environmentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the environment the Key Value instance is associated with',
      }),
    version: z.string().openapi({ description: 'The version of Key Value' }),
    dashboardUrl: z
      .string()
      .openapi({ description: 'The URL to view the Key Value instance in the Render Dashboard' }),
  })
  .openapi({
    description: 'A Key Value instance',
    required: [
      'id',
      'createdAt',
      'updatedAt',
      'status',
      'region',
      'plan',
      'name',
      'owner',
      'options',
      'ipAllowList',
      'version',
      'dashboardUrl',
    ],
  })
  .openapi('KeyValue')

const KeyValueWithCursorSchema = z
  .object({ keyValue: KeyValueSchema, cursor: CursorSchema })
  .openapi({ required: ['keyValue', 'cursor'] })
  .openapi('KeyValueWithCursor')

const RedisPlanSchema = z
  .enum([
    'free',
    'starter',
    'standard',
    'pro',
    'pro_plus',
    'custom',
    '256mb',
    '1g',
    '5g',
    '10g',
    '20g',
    '40g',
  ])
  .openapi({
    'x-enum-varnames': [
      'RedisPlanFree',
      'RedisPlanStarter',
      'RedisPlanStandard',
      'RedisPlanPro',
      'RedisPlanPro_plus',
      'RedisPlanCustom',
      'RedisPlan256mb',
      'RedisPlan1g',
      'RedisPlan5g',
      'RedisPlan10g',
      'RedisPlan20g',
      'RedisPlan40g',
    ],
  })
  .openapi('RedisPlan')

const RedisOptionsSchema = z
  .object({
    maxmemoryPolicy: z.string().exactOptional(),
    persistenceMode: PersistenceModeSchema.exactOptional(),
  })
  .openapi({ description: 'Options for a Redis instance', required: [] })
  .openapi('RedisOptions')

const RedisDetailSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the Redis instance' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The creation time of the Redis instance' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The last updated time of the Redis instance' }),
    status: DatabaseStatusSchema,
    region: RegionSchema,
    plan: RedisPlanSchema,
    name: z.string().openapi({ description: 'The name of the Redis instance' }),
    owner: OwnerSchema,
    options: RedisOptionsSchema,
    ipAllowList: z
      .array(CidrBlockAndDescriptionSchema)
      .openapi({ description: 'The IP allow list for the Redis instance' }),
    environmentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the environment the Redis instance is associated with' }),
    version: z.string().openapi({ description: 'The version of Redis' }),
    maintenance: z
      .object({
        id: z
          .string()
          .regex(/^mrn-[0-9a-z]{20}$/)
          .openapi({ example: 'mrn-cph1rs3idesc73a2b2mg' }),
        type: z.string(),
        scheduledAt: z.iso.datetime({ offset: true }),
        pendingMaintenanceBy: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'If present, the maintenance run cannot be scheduled for later than this date-time.',
          }),
        state: z.enum([
          'scheduled',
          'in_progress',
          'user_fix_required',
          'cancelled',
          'succeeded',
          'failed',
        ]),
      })
      .exactOptional()
      .openapi({ required: ['id', 'type', 'scheduledAt', 'state'] }),
  })
  .openapi({
    description: 'A Redis instance',
    required: [
      'id',
      'createdAt',
      'updatedAt',
      'status',
      'region',
      'plan',
      'name',
      'owner',
      'options',
      'ipAllowList',
      'version',
    ],
  })
  .openapi('RedisDetail')

const KeyValueDetailSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the Key Value instance' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The creation time of the Key Value instance' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The last updated time of the Key Value instance' }),
    status: DatabaseStatusSchema,
    region: RegionSchema,
    plan: KeyValuePlanSchema,
    name: z.string().openapi({ description: 'The name of the Key Value instance' }),
    owner: OwnerSchema,
    options: KeyValueOptionsSchema,
    ipAllowList: z
      .array(CidrBlockAndDescriptionSchema)
      .openapi({ description: 'The IP allow list for the Key Value instance' }),
    environmentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the environment the Key Value instance is associated with',
      }),
    version: z.string().openapi({ description: 'The version of Key Value' }),
    maintenance: z.lazy(() => RedisDetailSchema).exactOptional(),
  })
  .openapi({
    description: 'A Key Value instance',
    required: [
      'id',
      'createdAt',
      'updatedAt',
      'status',
      'region',
      'plan',
      'name',
      'owner',
      'options',
      'ipAllowList',
      'version',
    ],
  })
  .openapi('KeyValueDetail')

const KeyValueConnectionInfoSchema = z
  .object({
    internalConnectionString: z
      .string()
      .openapi({ description: 'The connection string to use from within Render' }),
    externalConnectionString: z
      .string()
      .openapi({ description: 'The connection string to use from outside Render' }),
    cliCommand: z
      .string()
      .openapi({
        description:
          'The CLI (redis-cli or valkey-cli) command to connect to the Key Value instance',
      }),
  })
  .openapi({
    description: 'A Key Value instance',
    required: ['internalConnectionString', 'externalConnectionString', 'cliCommand'],
  })
  .openapi('KeyValueConnectionInfo')

const RedisPOSTInputSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the Redis instance' }),
    ownerId: z.string().openapi({ description: 'The ID of the owner of the Redis instance' }),
    plan: RedisPlanSchema,
    region: RegionSchema.exactOptional(),
    environmentId: z.string().exactOptional(),
    maxmemoryPolicy: MaxmemoryPolicySchema.exactOptional(),
    persistenceMode: PersistenceModeSchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({
    description: 'Input type for creating a Redis instance',
    required: ['name', 'ownerId', 'plan'],
  })
  .openapi('RedisPOSTInput')

const RedisPATCHInputSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the Redis instance' }),
    plan: RedisPlanSchema.exactOptional(),
    maxmemoryPolicy: MaxmemoryPolicySchema.exactOptional(),
    persistenceMode: PersistenceModeSchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({ description: 'Input type for updating a Redis instance', required: [] })
  .openapi('RedisPATCHInput')

const RedisSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the Redis instance' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The creation time of the Redis instance' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The last updated time of the Redis instance' }),
    status: DatabaseStatusSchema,
    region: RegionSchema,
    plan: RedisPlanSchema,
    name: z.string().openapi({ description: 'The name of the Redis instance' }),
    owner: OwnerSchema,
    options: RedisOptionsSchema,
    ipAllowList: z
      .array(CidrBlockAndDescriptionSchema)
      .openapi({ description: 'The IP allow list for the Redis instance' }),
    environmentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the environment the Redis instance is associated with' }),
    version: z.string().openapi({ description: 'The version of Redis' }),
    dashboardUrl: z
      .string()
      .openapi({ description: 'The URL to view the Redis instance in the Render Dashboard' }),
  })
  .openapi({
    description: 'A Redis instance',
    required: [
      'id',
      'createdAt',
      'updatedAt',
      'status',
      'region',
      'plan',
      'name',
      'owner',
      'options',
      'ipAllowList',
      'version',
      'dashboardUrl',
    ],
  })
  .openapi('Redis')

const RedisWithCursorSchema = z
  .object({ redis: RedisSchema, cursor: CursorSchema })
  .openapi({ required: ['redis', 'cursor'] })
  .openapi('RedisWithCursor')

const RedisConnectionInfoSchema = z
  .object({
    internalConnectionString: z
      .string()
      .openapi({ description: 'The connection string to use from within Render' }),
    externalConnectionString: z
      .string()
      .openapi({ description: 'The connection string to use from outside Render' }),
    redisCLICommand: z
      .string()
      .openapi({ description: 'The Redis CLI command to connect to the Redis instance' }),
  })
  .openapi({
    description: 'A Redis instance',
    required: ['internalConnectionString', 'externalConnectionString', 'redisCLICommand'],
  })
  .openapi('RedisConnectionInfo')

const DeployModeSchema = z
  .enum(['deploy_only', 'build_and_deploy'])
  .default('build_and_deploy')
  .openapi({
    description:
      'Controls deployment behavior when triggering a deploy.\n\n- `deploy_only`: Deploy the last successful build without rebuilding (minimizes downtime)\n- `build_and_deploy`: Build new code and deploy it (default behavior when not specified)\n\n**Note:** `deployMode` cannot be combined with `buildId`. `deploy_only` cannot be combined with\n`commitId`, `imageUrl`, or `clearCache`, as those are build related fields.\n',
  })
  .openapi('DeployMode')

const ProjectSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the project' }),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    name: z.string().openapi({ description: 'The name of the project' }),
    owner: OwnerSchema,
    environmentIds: z
      .array(z.string().openapi({ description: 'The ID of the environment' }))
      .openapi({ description: 'The environments associated with the project' }),
  })
  .openapi({
    description: 'A project is a collection of environments',
    required: ['id', 'createdAt', 'updatedAt', 'name', 'owner', 'environmentIds'],
  })
  .openapi('Project')

const ProjectWithCursorSchema = z
  .object({ project: ProjectSchema, cursor: CursorSchema })
  .openapi({ required: ['project', 'cursor'] })
  .openapi('ProjectWithCursor')

const ProtectedStatusSchema = z
  .enum(['unprotected', 'protected'])
  .openapi({
    description:
      'Indicates whether an environment is `unprotected` or `protected`. Only admin users can perform destructive actions in `protected` environments.',
  })
  .openapi('ProtectedStatus')

const NetworkIsolationEnabledSchema = z
  .boolean()
  .openapi({
    description: 'Indicates whether network connections across environments are allowed.',
  })
  .openapi('NetworkIsolationEnabled')

const ProjectPOSTEnvironmentInputSchema = z
  .object({
    name: z.string(),
    protectedStatus: ProtectedStatusSchema.exactOptional(),
    networkIsolationEnabled: NetworkIsolationEnabledSchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('ProjectPOSTEnvironmentInput')

const ProjectPOSTInputSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the project' }),
    ownerId: z.string().openapi({ description: 'The ID of the owner that the project belongs to' }),
    environments: z
      .array(ProjectPOSTEnvironmentInputSchema)
      .openapi({ description: 'The environments to create when creating the project' }),
  })
  .openapi({ required: ['name', 'ownerId', 'environments'] })
  .openapi('ProjectPOSTInput')

const ProjectPATCHInputSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ description: 'Input type for updating a project', required: [] })
  .openapi('ProjectPATCHInput')

const EnvironmentPOSTInputSchema = z
  .object({
    name: z.string(),
    projectId: z.string(),
    protectedStatus: ProtectedStatusSchema.exactOptional(),
    networkIsolationEnabled: NetworkIsolationEnabledSchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({ required: ['name', 'projectId'] })
  .openapi('EnvironmentPOSTInput')

const EnvironmentResourcesPOSTInputSchema = z
  .object({
    resourceIds: z.array(
      z
        .string()
        .openapi({
          description:
            'The ID of an env group, a service, a Postgres database, or a Redis instance',
        }),
    ),
  })
  .openapi({ required: ['resourceIds'] })
  .openapi('EnvironmentResourcesPOSTInput')

const EnvironmentPATCHInputSchema = z
  .object({
    name: z.string().exactOptional(),
    networkIsolationEnabled: NetworkIsolationEnabledSchema.exactOptional(),
    protectedStatus: ProtectedStatusSchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentPATCHInput')

const EnvironmentSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    projectId: z.string(),
    databasesIds: z.array(z.string()),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
    redisIds: z.array(z.string()),
    serviceIds: z.array(z.string()),
    envGroupIds: z.array(z.string()),
    protectedStatus: ProtectedStatusSchema,
    networkIsolationEnabled: NetworkIsolationEnabledSchema,
  })
  .openapi({
    required: [
      'id',
      'name',
      'projectId',
      'databasesIds',
      'redisIds',
      'serviceIds',
      'envGroupIds',
      'protectedStatus',
      'networkIsolationEnabled',
    ],
  })
  .openapi('Environment')

const EnvironmentWithCursorSchema = z
  .object({ environment: EnvironmentSchema, cursor: CursorSchema })
  .openapi({ description: 'An environment with a cursor', required: ['environment', 'cursor'] })
  .openapi('EnvironmentWithCursor')

const EnvGroupPOSTInputSchema = z
  .object({
    name: z.string(),
    ownerId: z.string(),
    envVars: z.array(
      z.xor([
        z.object({ key: z.string(), value: z.string() }).openapi({ required: ['key', 'value'] }),
        z
          .object({
            key: z.string(),
            generateValue: z
              .boolean()
              .openapi({
                description:
                  'If true, Render generates a strong random value for this environment variable on creation. Cannot be combined with `value`.',
              }),
          })
          .openapi({ required: ['key', 'generateValue'] }),
      ]),
    ),
    secretFiles: z
      .array(
        z
          .object({ name: z.string(), content: z.string() })
          .openapi({ required: ['name', 'content'] }),
      )
      .exactOptional(),
    serviceIds: z
      .array(z.string().openapi({ description: 'List of serviceIds to link the envGroup to' }))
      .exactOptional(),
    environmentId: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'ownerId', 'envVars'] })
  .openapi('EnvGroupPOSTInput')

const EnvGroupPATCHInputSchema = z
  .object({ name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('EnvGroupPATCHInput')

const EnvGroupLinkSchema = z
  .object({ id: z.string(), name: z.string(), type: ServiceTypeShortSchema })
  .openapi({ required: ['id', 'name', 'type'] })
  .openapi('EnvGroupLink')

const EnvGroupMetaSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    ownerId: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    serviceLinks: z
      .array(EnvGroupLinkSchema)
      .openapi({ description: 'List of serviceIds linked to the envGroup' }),
    environmentId: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'name', 'ownerId', 'createdAt', 'updatedAt', 'serviceLinks'] })
  .openapi('EnvGroupMeta')

const SecretFileSchema = z
  .object({ name: z.string(), content: z.string() })
  .openapi({ required: ['name', 'content'] })
  .openapi('SecretFile')

const EnvGroupSchema = EnvGroupMetaSchema.and(
  z
    .object({ envVars: z.array(EnvVarSchema), secretFiles: z.array(SecretFileSchema) })
    .openapi({ required: ['envVars', 'secretFiles'] }),
).openapi('EnvGroup')

const SecretFileWithCursorSchema = z
  .object({ secretFile: SecretFileSchema, cursor: CursorSchema })
  .openapi({ required: ['secretFile', 'cursor'] })
  .openapi('SecretFileWithCursor')

const ReadReplicaInputSchema = z
  .object({
    name: z.string().openapi({ description: 'The display name of the replica instance.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('ReadReplicaInput')

const ReadReplicasInputSchema = z.array(ReadReplicaInputSchema).openapi('ReadReplicasInput')

const PostgresVersionSchema = z
  .enum(['11', '12', '13', '14', '15', '16', '17', '18'])
  .openapi({ description: 'The PostgreSQL version' })
  .openapi('PostgresVersion')

const PostgresPOSTInputSchema = z
  .object({
    databaseName: z.string().default('randomly generated').exactOptional(),
    databaseUser: z.string().default('randomly generated').exactOptional(),
    datadogAPIKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Datadog API key for the Datadog agent to monitor the new database.',
      }),
    datadogSite: z
      .string()
      .exactOptional()
      .openapi({
        description: "Datadog region to use for monitoring the new database. Defaults to 'US1'.",
        example: 'US1',
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the database as it will appear in the Render Dashboard',
      }),
    enableHighAvailability: z.boolean().default(false).exactOptional(),
    environmentId: z.string().exactOptional(),
    ownerId: z
      .string()
      .openapi({ description: 'The ID of the workspace to create the database for' }),
    plan: z.enum([
      'free',
      'starter',
      'standard',
      'pro',
      'pro_plus',
      'custom',
      'basic_256mb',
      'basic_1gb',
      'basic_4gb',
      'pro_4gb',
      'pro_8gb',
      'pro_16gb',
      'pro_32gb',
      'pro_64gb',
      'pro_128gb',
      'pro_192gb',
      'pro_256gb',
      'pro_384gb',
      'pro_512gb',
      'accelerated_16gb',
      'accelerated_32gb',
      'accelerated_64gb',
      'accelerated_128gb',
      'accelerated_256gb',
      'accelerated_384gb',
      'accelerated_512gb',
      'accelerated_768gb',
      'accelerated_1024gb',
      '0.1c-256mb',
      '0.5c-1g',
      '1c-2g',
      '1c-4g',
      '2c-4g',
      '2c-8g',
      '2c-16g',
      '4c-16g',
      '4c-32g',
      '8c-32g',
      '8c-64g',
      '16c-64g',
      '16c-128g',
      '32c-128g',
      '32c-256g',
      '48c-192g',
      '48c-384g',
      '64c-256g',
      '64c-512g',
      '96c-384g',
      '96c-768g',
      '128c-512g',
      '128c-1024g',
    ]),
    diskSizeGB: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of gigabytes of disk space to allocate for the database',
      }),
    enableDiskAutoscaling: z.boolean().default(false).exactOptional(),
    connectionPool: z
      .string()
      .default('none')
      .exactOptional()
      .openapi({
        description: "What connection pool to use (if any) out of 'pgbouncer' and 'none'",
      }),
    region: RegionSchema.exactOptional(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
    readReplicas: ReadReplicasInputSchema.exactOptional(),
    version: PostgresVersionSchema,
  })
  .openapi({
    required: ['name', 'plan', 'ownerId', 'version'],
    description: 'Input for creating a database',
  })
  .openapi('PostgresPOSTInput')

const PostgresPATCHInputSchema = z
  .object({
    name: z.string().exactOptional(),
    plan: z.lazy(() => PostgresPOSTInputSchema).exactOptional(),
    diskSizeGB: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of gigabytes of disk space to allocate for the database',
      }),
    enableDiskAutoscaling: z.boolean().exactOptional(),
    connectionPool: z
      .string()
      .default('none')
      .exactOptional()
      .openapi({
        description: "What connection pool to use (if any) out of 'pgbouncer' and 'none'",
      }),
    enableHighAvailability: z.boolean().exactOptional(),
    datadogAPIKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Datadog API key for the Datadog agent to monitor the database. Pass empty string to remove. Restarts Postgres on change.',
      }),
    datadogSite: z
      .string()
      .exactOptional()
      .openapi({
        description: "Datadog region to use for monitoring the new database. Defaults to 'US1'.",
        example: 'US1',
      }),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema).exactOptional(),
    readReplicas: ReadReplicasInputSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostgresPATCHInput')

const ReadReplicaSchema = z
  .object({
    id: z.string().openapi({ description: 'The replica instance identifier.' }),
    name: z.string().openapi({ description: 'The display name of the replica instance.' }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('ReadReplica')

const ReadReplicasSchema = z.array(ReadReplicaSchema).openapi('ReadReplicas')

const PostgresConnectionInfoSchema = z
  .object({
    password: z.string(),
    internalConnectionString: z.string(),
    externalConnectionString: z.string(),
    internalConnectionPoolString: z.string().exactOptional(),
    externalConnectionPoolString: z.string().exactOptional(),
    psqlCommand: z.string(),
  })
  .openapi({
    required: ['password', 'internalConnectionString', 'externalConnectionString', 'psqlCommand'],
  })
  .openapi('PostgresConnectionInfo')

const DatabaseRoleSchema = z.enum(['primary', 'replica']).openapi('DatabaseRole')

const PostgresSchema = z
  .object({
    id: z.string(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which the database will be expire. Applies to free tier databases only.',
      }),
    databaseName: z.string(),
    databaseUser: z.string(),
    environmentId: z.string().exactOptional(),
    highAvailabilityEnabled: z.boolean(),
    name: z.string(),
    owner: OwnerSchema,
    plan: z.lazy(() => PostgresPOSTInputSchema),
    diskSizeGB: z.int().exactOptional(),
    primaryPostgresID: z.string().exactOptional(),
    region: RegionSchema,
    readReplicas: ReadReplicasSchema,
    role: DatabaseRoleSchema,
    status: DatabaseStatusSchema,
    version: PostgresVersionSchema,
    suspended: z.enum(['suspended', 'not_suspended']),
    suspenders: z.array(SuspenderTypeSchema),
    dashboardUrl: z
      .string()
      .openapi({ description: 'The URL to view the Postgres instance in the Render Dashboard' }),
    diskAutoscalingEnabled: z.boolean(),
    connectionPool: z
      .string()
      .openapi({
        description: "What connection pool to use (if any) out of 'pgbouncer' and 'none'",
      }),
  })
  .openapi({
    required: [
      'id',
      'ipAllowList',
      'createdAt',
      'updatedAt',
      'databaseName',
      'databaseUser',
      'highAvailabilityEnabled',
      'name',
      'owner',
      'plan',
      'region',
      'readReplicas',
      'role',
      'status',
      'version',
      'suspended',
      'suspenders',
      'dashboardUrl',
      'diskAutoscalingEnabled',
      'connectionPool',
    ],
  })
  .openapi('Postgres')

const PostgresWithCursorSchema = z
  .object({ postgres: PostgresSchema, cursor: CursorSchema })
  .openapi({ required: ['postgres', 'cursor'] })
  .openapi('PostgresWithCursor')

const PostgresDetailSchema = z
  .object({
    id: z.string(),
    ipAllowList: z.array(CidrBlockAndDescriptionSchema),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which the database will be expire. Applies to free tier databases only.',
      }),
    dashboardUrl: z
      .string()
      .openapi({ description: 'The URL to view the Postgres instance in the Render Dashboard' }),
    databaseName: z.string(),
    databaseUser: z.string(),
    environmentId: z.string().exactOptional(),
    highAvailabilityEnabled: z.boolean(),
    maintenance: z.lazy(() => RedisDetailSchema).exactOptional(),
    name: z.string(),
    owner: OwnerSchema,
    plan: z.lazy(() => PostgresPOSTInputSchema),
    diskSizeGB: z.int().exactOptional(),
    primaryPostgresID: z.string().exactOptional(),
    region: RegionSchema,
    readReplicas: ReadReplicasSchema,
    role: DatabaseRoleSchema,
    status: DatabaseStatusSchema,
    version: PostgresVersionSchema,
    suspended: z.enum(['suspended', 'not_suspended']),
    suspenders: z.array(SuspenderTypeSchema),
    diskAutoscalingEnabled: z.boolean(),
    connectionPool: z
      .string()
      .openapi({
        description: "What connection pool to use (if any) out of 'pgbouncer' and 'none'",
      }),
  })
  .openapi({
    required: [
      'id',
      'ipAllowList',
      'createdAt',
      'updatedAt',
      'dashboardUrl',
      'databaseName',
      'databaseUser',
      'highAvailabilityEnabled',
      'name',
      'owner',
      'project',
      'plan',
      'region',
      'readReplicas',
      'role',
      'status',
      'version',
      'suspended',
      'suspenders',
      'diskAutoscalingEnabled',
      'connectionPool',
    ],
  })
  .openapi('PostgresDetail')

const CronJobRunSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the run' }),
    status: z.enum(['pending', 'successful', 'unsuccessful', 'canceled']),
    startedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
    finishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
    triggeredBy: z
      .string()
      .exactOptional()
      .openapi({ description: 'user who triggered the cron job run' }),
    canceledBy: z
      .string()
      .exactOptional()
      .openapi({ description: 'user who canceled the cron job run' }),
  })
  .openapi({ description: 'A run of a cron job', required: ['id', 'status'] })
  .openapi('CronJobRun')

const BlueprintWithCursorSchema = z
  .object({
    blueprint: z
      .object({
        id: z
          .string()
          .regex(/^exs-[0-9a-z]{20}$/)
          .openapi({ example: 'exs-cph1rs3idesc73a2b2mg' }),
        name: z.string(),
        status: z
          .enum(['created', 'paused', 'in_sync', 'syncing', 'error'])
          .openapi({
            description: 'A Blueprint has status `created` until its first Sync is approved.',
          }),
        autoSync: z
          .boolean()
          .openapi({
            description:
              'Configuration value that controls whether or not this blueprint will be re-synced on each git push to the configured branch.\nEven when true, autoSync will not apply when the blueprint has the Created status, which indicates its first sync has not yet been approved.\nOther conditions, such as a locked workspace, can also prevent automatic syncing even when this is true.\n',
          }),
        repo: z.string(),
        branch: z.string(),
        path: z
          .string()
          .openapi({
            description: 'Path to the Blueprint file in the repository',
            example: 'render.yaml',
          }),
        lastSync: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .openapi({ required: ['id', 'name', 'status', 'autoSync', 'repo', 'branch', 'path'] }),
    cursor: CursorSchema,
  })
  .openapi({ description: 'A Blueprint with a cursor', required: ['blueprint', 'cursor'] })
  .openapi('BlueprintWithCursor')

const SyncWithCursorSchema = z
  .object({
    sync: z
      .object({
        id: z
          .string()
          .regex(/^exe-[0-9a-z]{20}$/)
          .openapi({ example: 'exe-cph1rs3idesc73a2b2mg' }),
        commit: z.object({ id: z.string() }).openapi({ required: ['id'] }),
        startedAt: z.iso.datetime({ offset: true }).exactOptional(),
        completedAt: z.iso.datetime({ offset: true }).exactOptional(),
        state: z.enum(['created', 'pending', 'running', 'error', 'success']),
      })
      .openapi({ required: ['id', 'commit', 'state'] }),
    cursor: CursorSchema,
  })
  .openapi({ description: 'A Blueprint sync with a cursor', required: ['sync', 'cursor'] })
  .openapi('SyncWithCursor')

const ServiceEventWithCursorSchema = z
  .object({
    event: z
      .object({
        id: z
          .string()
          .regex(/^evt-[0-9a-z]{20}$/)
          .openapi({ example: 'evt-cph1rs3idesc73a2b2mg' }),
        timestamp: z.iso.datetime({ offset: true }),
        serviceId: z.string(),
        type: z.enum([
          'artifact_fetch_failed',
          'artifact_source_changed',
          'autoscaling_config_changed',
          'autoscaling_ended',
          'autoscaling_started',
          'branch_deleted',
          'build_ended',
          'build_started',
          'commit_ignored',
          'cron_job_run_ended',
          'cron_job_run_started',
          'deploy_ended',
          'deploy_started',
          'disk_created',
          'disk_updated',
          'disk_deleted',
          'disk_snapshot_restored',
          'service_disk_usage_high',
          'service_disk_usage_recovered',
          'image_pull_failed',
          'initial_deploy_hook_ended',
          'initial_deploy_hook_started',
          'instance_count_changed',
          'job_run_ended',
          'maintenance_mode_enabled',
          'maintenance_mode_uri_updated',
          'maintenance_ended',
          'maintenance_started',
          'pipeline_minutes_exhausted',
          'plan_changed',
          'pre_deploy_ended',
          'pre_deploy_started',
          'server_available',
          'server_failed',
          'server_hardware_failure',
          'server_restarted',
          'service_resumed',
          'service_suspended',
          'suspender_added',
          'suspender_removed',
          'zero_downtime_redeploy_ended',
          'zero_downtime_redeploy_started',
          'auto_deploy_disabled',
          'auto_deploy_enabled',
        ]),
        details: z
          .xor([
            z
              .object({
                buildId: z
                  .string()
                  .openapi({
                    description:
                      'The build published by the build source that could not be fetched.',
                  }),
                message: z.string(),
              })
              .openapi({ title: 'Artifact Fetch Failed', required: ['buildId', 'message'] }),
            z
              .object({
                fromBuildSourceId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The previously linked build source. Absent when the service was newly attached.',
                  }),
                toBuildSourceId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The newly linked build source. Absent when the service was detached.',
                  }),
              })
              .openapi({ title: 'Artifact Source Changed', required: [] }),
            z
              .object({
                fromConfig: z
                  .object({
                    enabled: z.boolean().default(false),
                    min: z
                      .int()
                      .openapi({ description: 'The minimum number of instances for the service' }),
                    max: z
                      .int()
                      .openapi({ description: 'The maximum number of instances for the service' }),
                    criteria: z
                      .object({
                        cpu: z
                          .object({
                            enabled: z.boolean().default(false),
                            percentage: z
                              .int()
                              .openapi({
                                description:
                                  'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                              }),
                          })
                          .openapi({ required: ['enabled', 'percentage'] }),
                        memory: z
                          .object({
                            enabled: z.boolean().default(false),
                            percentage: z
                              .int()
                              .openapi({
                                description:
                                  'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                              }),
                          })
                          .openapi({ required: ['enabled', 'percentage'] }),
                      })
                      .openapi({ required: ['cpu', 'memory'] }),
                  })
                  .exactOptional()
                  .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
                toConfig: z
                  .object({
                    enabled: z.boolean().default(false),
                    min: z
                      .int()
                      .openapi({ description: 'The minimum number of instances for the service' }),
                    max: z
                      .int()
                      .openapi({ description: 'The maximum number of instances for the service' }),
                    criteria: z
                      .object({
                        cpu: z
                          .object({
                            enabled: z.boolean().default(false),
                            percentage: z
                              .int()
                              .openapi({
                                description:
                                  'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                              }),
                          })
                          .openapi({ required: ['enabled', 'percentage'] }),
                        memory: z
                          .object({
                            enabled: z.boolean().default(false),
                            percentage: z
                              .int()
                              .openapi({
                                description:
                                  'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                              }),
                          })
                          .openapi({ required: ['enabled', 'percentage'] }),
                      })
                      .openapi({ required: ['cpu', 'memory'] }),
                  })
                  .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
              })
              .openapi({ title: 'Autoscaling Config Changed', required: ['toConfig'] }),
            z
              .object({ fromInstances: z.int(), toInstances: z.int() })
              .openapi({ title: 'Autoscaling Ended', required: ['fromInstances', 'toInstances'] }),
            z
              .object({
                fromInstances: z.int(),
                toInstances: z.int(),
                currentCPU: z.int().exactOptional().openapi({ 'x-go-type': 'int64' }),
                targetCPU: z.int().exactOptional().openapi({ 'x-go-type': 'int64' }),
                currentMemory: z.int().exactOptional().openapi({ 'x-go-type': 'int64' }),
                targetMemory: z.int().exactOptional().openapi({ 'x-go-type': 'int64' }),
              })
              .openapi({
                title: 'Autoscaling Started',
                required: ['fromInstances', 'toInstances'],
              }),
            z
              .object({ deletedBranch: z.string(), newBranch: z.string() })
              .openapi({ title: 'Branch Deleted', required: ['deletedBranch', 'newBranch'] }),
            z
              .object({
                buildId: z.string(),
                buildStatus: z.enum(['succeeded', 'failed', 'canceled']),
                reason: z
                  .object({
                    buildFailed: z
                      .object({ id: z.string() })
                      .exactOptional()
                      .openapi({ required: ['id'] }),
                    newBuild: z
                      .object({ id: z.string() })
                      .exactOptional()
                      .openapi({ required: ['id'] }),
                    newDeploy: z
                      .object({ id: z.string() })
                      .exactOptional()
                      .openapi({ required: ['id'] }),
                    failure: z
                      .object({
                        evicted: z.boolean(),
                        evictionReason: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Details about why the application was evicted.',
                          }),
                        nonZeroExit: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              'If present, the application exited with the specified non-zero status.',
                          }),
                        earlyExit: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                          }),
                        oomKilled: z
                          .object({ memoryLimit: z.string() })
                          .exactOptional()
                          .openapi({ required: ['memoryLimit'] }),
                        timedOutSeconds: z
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
                        unhealthy: z.string().exactOptional(),
                        timedOutReason: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: ['evicted'] }),
                  })
                  .openapi({ required: [] }),
                status: z.int().openapi({ deprecated: true }),
              })
              .openapi({
                title: 'Build Ended',
                required: ['buildId', 'status', 'reason', 'buildStatus'],
              }),
            z
              .object({
                buildId: z.string(),
                trigger: z
                  .object({
                    firstBuild: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered by service creation' }),
                    envUpdated: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered by an environment update' }),
                    manual: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered manually from the dashboard' }),
                    user: z
                      .object({ id: z.string(), email: z.string() })
                      .exactOptional()
                      .openapi({
                        description: 'User who triggered the action',
                        required: ['id', 'email'],
                      }),
                    updatedProperty: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Updated property that triggered the deploy' }),
                    newCommit: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Commit that triggered the deploy' }),
                    deployedByRender: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered by Render' }),
                    clearCache: z
                      .boolean()
                      .openapi({ description: 'Whether the cache was cleared for the deploy' }),
                    rollback: z
                      .boolean()
                      .openapi({ description: 'Whether the deploy was triggered by a rollback' }),
                    rollbackTargetDeployId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Deploy ID that was rolled back to' }),
                  })
                  .openapi({
                    required: [
                      'firstBuild',
                      'envUpdated',
                      'manual',
                      'deployedByRender',
                      'clearCache',
                      'rollback',
                    ],
                  }),
              })
              .openapi({ title: 'Build Started', required: ['buildId', 'trigger'] }),
            z
              .object({
                id: z.string().openapi({ description: 'the commit id' }),
                url: z.string().openapi({ description: 'the commit url' }),
              })
              .openapi({ title: 'Commit Ignored', required: ['id', 'url'] }),
            z
              .object({
                cronJobRunId: z.string(),
                status: z.enum(['canceled', 'pending', 'successful', 'unsuccessful']),
                reason: z
                  .object({
                    evicted: z.boolean(),
                    evictionReason: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Details about why the application was evicted.' }),
                    nonZeroExit: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'If present, the application exited with the specified non-zero status.',
                      }),
                    earlyExit: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                      }),
                    oomKilled: z
                      .object({ memoryLimit: z.string() })
                      .exactOptional()
                      .openapi({ required: ['memoryLimit'] }),
                    timedOutSeconds: z
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
                    unhealthy: z.string().exactOptional(),
                    timedOutReason: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: ['evicted'] }),
                user: z
                  .object({ id: z.string(), email: z.string() })
                  .exactOptional()
                  .openapi({
                    description: 'User who triggered the action',
                    required: ['id', 'email'],
                  }),
              })
              .openapi({ title: 'Cron Job Run Ended', required: ['cronJobRunId', 'status'] }),
            z
              .object({ cronJobRunId: z.string() })
              .openapi({ title: 'Cron Job Run Started', required: ['cronJobRunId'] }),
            z
              .object({
                deployId: z.string(),
                reason: z
                  .object({
                    buildFailed: z
                      .object({ id: z.string() })
                      .exactOptional()
                      .openapi({ required: ['id'] }),
                    newBuild: z
                      .object({ id: z.string() })
                      .exactOptional()
                      .openapi({ required: ['id'] }),
                    newDeploy: z
                      .object({ id: z.string() })
                      .exactOptional()
                      .openapi({ required: ['id'] }),
                    failure: z
                      .object({
                        evicted: z.boolean(),
                        evictionReason: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Details about why the application was evicted.',
                          }),
                        nonZeroExit: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              'If present, the application exited with the specified non-zero status.',
                          }),
                        earlyExit: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                          }),
                        oomKilled: z
                          .object({ memoryLimit: z.string() })
                          .exactOptional()
                          .openapi({ required: ['memoryLimit'] }),
                        timedOutSeconds: z
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
                        unhealthy: z.string().exactOptional(),
                        timedOutReason: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: ['evicted'] }),
                  })
                  .openapi({ required: [] }),
                deployStatus: z.enum(['succeeded', 'failed', 'canceled']),
                status: z.int().openapi({ deprecated: true }),
                buildId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Set when the deploy shipped a build published by the service's linked build source.",
                  }),
              })
              .openapi({
                title: 'Deploy Ended',
                required: ['deployId', 'reason', 'status', 'deployStatus'],
              }),
            z
              .object({
                deployId: z.string(),
                trigger: z
                  .object({
                    firstBuild: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered by service creation' }),
                    envUpdated: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered by an environment update' }),
                    manual: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered manually from the dashboard' }),
                    user: z
                      .object({ id: z.string(), email: z.string() })
                      .exactOptional()
                      .openapi({
                        description: 'User who triggered the action',
                        required: ['id', 'email'],
                      }),
                    updatedProperty: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Updated property that triggered the deploy' }),
                    newCommit: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Commit that triggered the deploy' }),
                    deployedByRender: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered by Render' }),
                    clearCache: z
                      .boolean()
                      .openapi({ description: 'Whether the cache was cleared for the deploy' }),
                    rollback: z
                      .boolean()
                      .openapi({ description: 'Whether the deploy was triggered by a rollback' }),
                    rollbackTargetDeployId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Deploy ID that was rolled back to' }),
                  })
                  .openapi({
                    required: [
                      'firstBuild',
                      'envUpdated',
                      'manual',
                      'deployedByRender',
                      'clearCache',
                      'rollback',
                    ],
                  }),
                buildId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Set when the deploy ships a build published by the service's linked build source.",
                  }),
              })
              .openapi({ title: 'Deploy Started', required: ['deployId', 'trigger'] }),
            z
              .object({
                diskId: z
                  .string()
                  .regex(/^dsk-[0-9a-z]{20}$/)
                  .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                sizeGB: z.int(),
              })
              .openapi({ title: 'Disk Created', required: ['diskId', 'sizeGB'] }),
            z
              .object({
                diskId: z
                  .string()
                  .regex(/^dsk-[0-9a-z]{20}$/)
                  .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                fromSizeGB: z.int(),
                toSizeGB: z.int(),
              })
              .openapi({ title: 'Disk Updated', required: ['diskId', 'fromSizeGB', 'toSizeGB'] }),
            z
              .object({
                diskId: z
                  .string()
                  .regex(/^dsk-[0-9a-z]{20}$/)
                  .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
              })
              .openapi({ title: 'Disk Deleted', required: ['diskId'] }),
            z
              .object({
                diskId: z
                  .string()
                  .regex(/^dsk-[0-9a-z]{20}$/)
                  .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                instanceId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The instance whose disk was restored, when the restore named one. A service instance ID, or the service ID for an older single disk.',
                  }),
                snapshotCreatedAt: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({ description: 'When the restored snapshot was taken' }),
                triggeredByUser: z.string().nullable(),
              })
              .openapi({
                title: 'Disk Snapshot Restored',
                required: ['diskId', 'triggeredByUser'],
              }),
            z
              .object({
                diskId: z
                  .string()
                  .regex(/^dsk-[0-9a-z]{20}$/)
                  .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                diskName: z.string(),
                mountPath: z.string(),
                usagePercent: z.float64(),
                thresholdPercent: z.float64(),
              })
              .openapi({
                title: 'Service Disk Usage High',
                required: ['diskId', 'diskName', 'mountPath', 'usagePercent', 'thresholdPercent'],
              }),
            z
              .object({
                diskId: z
                  .string()
                  .regex(/^dsk-[0-9a-z]{20}$/)
                  .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                diskName: z.string(),
                mountPath: z.string(),
                usagePercent: z.float64(),
                thresholdPercent: z.float64(),
              })
              .openapi({
                title: 'Service Disk Usage Recovered',
                required: ['diskId', 'diskName', 'mountPath', 'usagePercent', 'thresholdPercent'],
              }),
            z
              .object({ message: z.string(), imageURL: z.string() })
              .openapi({ title: 'Image Pull Failed', required: ['message', 'imageURL'] }),
            z
              .object({ deployId: z.string() })
              .openapi({ title: 'Initial Deploy Hook Started', required: ['deployId'] }),
            z
              .object({ deployId: z.string() })
              .openapi({ title: 'Initial Deploy Hook Ended', required: ['deployId'] }),
            z
              .object({ fromInstances: z.int(), toInstances: z.int() })
              .openapi({
                title: 'Instance Count Changed',
                required: ['fromInstances', 'toInstances'],
              }),
            z
              .object({
                jobId: z
                  .string()
                  .regex(/^job-[0-9a-z]{20}$/)
                  .openapi({ example: 'job-cph1rs3idesc73a2b2mg' }),
                status: z.enum(['pending', 'running', 'succeeded', 'failed', 'canceled']),
                reason: z
                  .object({
                    evicted: z.boolean(),
                    evictionReason: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Details about why the application was evicted.' }),
                    nonZeroExit: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'If present, the application exited with the specified non-zero status.',
                      }),
                    earlyExit: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                      }),
                    oomKilled: z
                      .object({ memoryLimit: z.string() })
                      .exactOptional()
                      .openapi({ required: ['memoryLimit'] }),
                    timedOutSeconds: z
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
                    unhealthy: z.string().exactOptional(),
                    timedOutReason: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: ['evicted'] }),
              })
              .openapi({ title: 'Job Run Ended', required: ['jobId', 'status'] }),
            z
              .object({ enabled: z.boolean() })
              .openapi({ title: 'Maintenance Mode Enabled', required: ['enabled'] }),
            z
              .object({ fromURI: z.string(), toURI: z.string() })
              .openapi({ title: 'Maintenance Mode URI Updated', required: ['fromURI', 'toURI'] }),
            z.object({}).openapi({ title: 'Maintenance Ended' }),
            z
              .object({
                trigger: z
                  .object({
                    user: z
                      .object({ id: z.string(), email: z.string() })
                      .exactOptional()
                      .openapi({
                        description: 'User who triggered the action',
                        required: ['id', 'email'],
                      }),
                    manual: z
                      .boolean()
                      .openapi({ description: 'Maintenance was triggered manually' }),
                    startedByRender: z
                      .boolean()
                      .openapi({ description: 'Maintenance was triggered by Render' }),
                  })
                  .openapi({ required: ['manual', 'startedByRender'] }),
              })
              .openapi({ title: 'Maintenance Started', required: ['trigger'] }),
            z
              .object({
                buildId: z.string(),
                trigger: z
                  .object({
                    firstBuild: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered by service creation' }),
                    envUpdated: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered by an environment update' }),
                    manual: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered manually from the dashboard' }),
                    user: z
                      .object({ id: z.string(), email: z.string() })
                      .exactOptional()
                      .openapi({
                        description: 'User who triggered the action',
                        required: ['id', 'email'],
                      }),
                    updatedProperty: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Updated property that triggered the deploy' }),
                    newCommit: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Commit that triggered the deploy' }),
                    deployedByRender: z
                      .boolean()
                      .openapi({ description: 'Deploy was triggered by Render' }),
                    clearCache: z
                      .boolean()
                      .openapi({ description: 'Whether the cache was cleared for the deploy' }),
                    rollback: z
                      .boolean()
                      .openapi({ description: 'Whether the deploy was triggered by a rollback' }),
                    rollbackTargetDeployId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Deploy ID that was rolled back to' }),
                  })
                  .openapi({
                    required: [
                      'firstBuild',
                      'envUpdated',
                      'manual',
                      'deployedByRender',
                      'clearCache',
                      'rollback',
                    ],
                  }),
              })
              .openapi({ title: 'Pipeline Minutes Exhausted', required: ['buildId', 'trigger'] }),
            z
              .object({ from: z.string(), to: z.string() })
              .openapi({ title: 'Instance Type Changed', required: ['from', 'to'] }),
            z
              .object({
                deployCommandExecutionId: z.string(),
                deployId: z.string(),
                preDeployStatus: z.enum(['succeeded', 'failed', 'canceled']),
                reason: z
                  .object({
                    buildFailed: z
                      .object({ id: z.string() })
                      .exactOptional()
                      .openapi({ required: ['id'] }),
                    newBuild: z
                      .object({ id: z.string() })
                      .exactOptional()
                      .openapi({ required: ['id'] }),
                    newDeploy: z
                      .object({ id: z.string() })
                      .exactOptional()
                      .openapi({ required: ['id'] }),
                    failure: z
                      .object({
                        evicted: z.boolean(),
                        evictionReason: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Details about why the application was evicted.',
                          }),
                        nonZeroExit: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              'If present, the application exited with the specified non-zero status.',
                          }),
                        earlyExit: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                          }),
                        oomKilled: z
                          .object({ memoryLimit: z.string() })
                          .exactOptional()
                          .openapi({ required: ['memoryLimit'] }),
                        timedOutSeconds: z
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
                        unhealthy: z.string().exactOptional(),
                        timedOutReason: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: ['evicted'] }),
                  })
                  .openapi({ required: [] }),
                status: z.int().openapi({ deprecated: true }),
              })
              .openapi({
                title: 'Pre Deploy Ended',
                required: [
                  'deployCommandExecutionId',
                  'deployId',
                  'status',
                  'preDeployStatus',
                  'reason',
                ],
              }),
            z
              .object({ deployCommandExecutionId: z.string(), deployId: z.string() })
              .openapi({
                title: 'Pre Deploy Started',
                required: ['deployCommandExecutionId', 'deployId'],
              }),
            z.object({}).openapi({ title: 'Server Available' }),
            z
              .object({
                instanceID: z
                  .string()
                  .regex(/^srv-[0-9a-z]{20}-[0-9a-z]{5}$/)
                  .exactOptional()
                  .openapi({ example: 'srv-d0cjkelq67qs70c2pugg-sbpkm' }),
                reason: z
                  .object({
                    evicted: z.boolean(),
                    evictionReason: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Details about why the application was evicted.' }),
                    nonZeroExit: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'If present, the application exited with the specified non-zero status.',
                      }),
                    earlyExit: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                      }),
                    oomKilled: z
                      .object({ memoryLimit: z.string() })
                      .exactOptional()
                      .openapi({ required: ['memoryLimit'] }),
                    timedOutSeconds: z
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
                    unhealthy: z.string().exactOptional(),
                    timedOutReason: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: ['evicted'] }),
              })
              .openapi({ title: 'Server Failed', required: [] }),
            z.object({}).openapi({ title: 'Server Hardware Failure' }),
            z
              .object({ triggeredByUser: z.string().nullable() })
              .openapi({ title: 'Server Restarted', required: ['triggeredByUser'] }),
            z.object({}).openapi({ title: 'Service Resumed' }),
            z.object({}).openapi({ title: 'Service Suspended' }),
            z
              .object({
                actor: z.string(),
                suspendedByUser: z
                  .object({ id: z.string(), email: z.string() })
                  .exactOptional()
                  .openapi({
                    description: 'User who triggered the action',
                    required: ['id', 'email'],
                  }),
              })
              .openapi({ title: 'Suspender Added', required: ['actor'] }),
            z
              .object({
                actor: z.string(),
                resumedByUser: z
                  .object({ id: z.string(), email: z.string() })
                  .exactOptional()
                  .openapi({
                    description: 'User who triggered the action',
                    required: ['id', 'email'],
                  }),
              })
              .openapi({ title: 'Suspender Removed', required: ['actor'] }),
            z.object({}).openapi({ title: 'Zero Downtime Redeploy Ended' }),
            z
              .object({ trigger: z.string() })
              .openapi({ title: 'Zero Downtime Redeploy Started', required: ['trigger'] }),
            z
              .object({
                trigger: z
                  .object({
                    manual: z
                      .boolean()
                      .openapi({
                        description: 'Edge Cache change was triggered manually from the dashboard',
                      }),
                    user: z
                      .object({ id: z.string(), email: z.string() })
                      .exactOptional()
                      .openapi({
                        description: 'User who triggered the action',
                        required: ['id', 'email'],
                      }),
                    system: z
                      .boolean()
                      .openapi({ description: 'Edge Cache Change was triggered by Render' }),
                  })
                  .openapi({ required: ['manual', 'system'] }),
              })
              .openapi({ title: 'Edge Cache Disabled', required: ['trigger'] }),
            z
              .object({
                trigger: z
                  .object({
                    manual: z
                      .boolean()
                      .openapi({
                        description: 'Edge Cache change was triggered manually from the dashboard',
                      }),
                    user: z
                      .object({ id: z.string(), email: z.string() })
                      .exactOptional()
                      .openapi({
                        description: 'User who triggered the action',
                        required: ['id', 'email'],
                      }),
                    system: z
                      .boolean()
                      .openapi({ description: 'Edge Cache Change was triggered by Render' }),
                  })
                  .openapi({ required: ['manual', 'system'] }),
              })
              .openapi({ title: 'Edge Cache Enabled', required: ['trigger'] }),
            z
              .object({
                trigger: z
                  .object({
                    manual: z
                      .boolean()
                      .openapi({
                        description: 'Edge Cache change was triggered manually from the dashboard',
                      }),
                    user: z
                      .object({ id: z.string(), email: z.string() })
                      .exactOptional()
                      .openapi({
                        description: 'User who triggered the action',
                        required: ['id', 'email'],
                      }),
                    system: z
                      .boolean()
                      .openapi({ description: 'Edge Cache Change was triggered by Render' }),
                  })
                  .openapi({ required: ['manual', 'system'] }),
              })
              .openapi({ title: 'Edge Cache Purged', required: ['trigger'] }),
            z
              .object({
                reason: z
                  .string()
                  .openapi({
                    description:
                      'Why auto-deploy was disabled (manual_deploy, rollback, or setting_change)',
                  }),
                fromTrigger: z
                  .lazy(() => ServicePOSTSchema)
                  .exactOptional()
                  .openapi({
                    description: 'The auto-deploy trigger value immediately before it was disabled',
                  }),
              })
              .openapi({ title: 'Auto Deploy Disabled', required: ['reason'] }),
            z
              .object({
                newTrigger: z
                  .lazy(() => ServicePOSTSchema)
                  .exactOptional()
                  .openapi({
                    description: 'The auto-deploy trigger value after it was re-enabled',
                  }),
              })
              .openapi({ title: 'Auto Deploy Enabled', required: [] }),
          ])
          .openapi({ title: 'Service Event Details' }),
      })
      .openapi({ required: ['id', 'timestamp', 'serviceId', 'type', 'details'] }),
    cursor: CursorSchema,
  })
  .openapi({ description: 'A service event with a cursor', required: ['event', 'cursor'] })
  .openapi('ServiceEventWithCursor')

const JobWithCursorSchema = z
  .object({
    job: z
      .object({
        id: z
          .string()
          .regex(/^job-[0-9a-z]{20}$/)
          .openapi({ example: 'job-cph1rs3idesc73a2b2mg' }),
        serviceId: z.string().openapi({ example: 'srv-xxxxx' }),
        startCommand: z.string().openapi({ example: "echo 'hello world'" }),
        planId: z.string().openapi({ example: 'plan-srv-004' }),
        status: z.enum(['pending', 'running', 'succeeded', 'failed', 'canceled']).exactOptional(),
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
        startedAt: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
        finishedAt: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
      })
      .openapi({ required: ['id', 'serviceId', 'startCommand', 'planId', 'createdAt'] }),
    cursor: CursorSchema,
  })
  .openapi({ required: ['job', 'cursor'] })
  .openapi('JobWithCursor')

const UserSchema = z
  .object({
    id: z.string().openapi({ description: "The authenticated user's ID." }),
    email: z.string(),
    name: z.string(),
  })
  .openapi({ required: ['id', 'email', 'name'] })
  .openapi('User')

const WebhookWithCursorSchema = z
  .object({
    webhook: z
      .object({
        id: z
          .string()
          .regex(/^whk-[0-9a-z]{20}$/)
          .openapi({ example: 'whk-d04m9b1r0fns73ckp94f' }),
        url: z.string(),
        name: z.string(),
        secret: z.string(),
        enabled: z.boolean(),
        eventFilter: z
          .array(
            z.enum([
              'artifact_fetch_failed',
              'artifact_source_changed',
              'autoscaling_config_changed',
              'autoscaling_ended',
              'autoscaling_started',
              'branch_deleted',
              'build_ended',
              'build_started',
              'commit_ignored',
              'cron_job_run_ended',
              'cron_job_run_started',
              'deploy_ended',
              'deploy_started',
              'disk_created',
              'disk_updated',
              'disk_deleted',
              'disk_snapshot_restored',
              'image_pull_failed',
              'instance_count_changed',
              'job_run_ended',
              'maintenance_mode_enabled',
              'maintenance_mode_uri_updated',
              'maintenance_ended',
              'maintenance_started',
              'pipeline_minutes_exhausted',
              'plan_changed',
              'pre_deploy_ended',
              'pre_deploy_started',
              'server_available',
              'server_failed',
              'server_hardware_failure',
              'server_restarted',
              'service_resumed',
              'service_suspended',
              'zero_downtime_redeploy_ended',
              'zero_downtime_redeploy_started',
              'edge_cache_enabled',
              'edge_cache_disabled',
              'edge_cache_purged',
              'auto_deploy_disabled',
              'auto_deploy_enabled',
              'postgres_available',
              'postgres_backup_completed',
              'postgres_backup_failed',
              'postgres_backup_started',
              'postgres_cluster_leader_changed',
              'postgres_connection_pool_changed',
              'postgres_connection_pool_enabled_changed',
              'postgres_created',
              'postgres_disk_size_changed',
              'postgres_disk_autoscaling_enabled_changed',
              'postgres_ha_status_changed',
              'postgres_restarted',
              'postgres_unavailable',
              'postgres_upgrade_failed',
              'postgres_upgrade_started',
              'postgres_upgrade_succeeded',
              'postgres_restore_failed',
              'postgres_restore_succeeded',
              'postgres_read_replicas_changed',
              'postgres_pitr_checkpoint_started',
              'postgres_pitr_checkpoint_failed',
              'postgres_pitr_checkpoint_completed',
              'postgres_read_replica_stale',
              'postgres_wal_archive_failed',
              'key_value_available',
              'key_value_config_restart',
              'key_value_unhealthy',
            ]),
          )
          .openapi({
            description:
              'The event types that will trigger the webhook. An empty list means all event types will trigger the webhook.',
          }),
      })
      .openapi({ required: ['id', 'name', 'url', 'secret', 'enabled', 'eventFilter'] }),
    cursor: CursorSchema,
  })
  .openapi({ required: ['webhook', 'cursor'] })
  .openapi('WebhookWithCursor')

const WebhookEventWithCursorSchema = z
  .object({
    webhookEvent: z
      .object({
        id: z.string().openapi({ description: 'the id of the webhook event' }),
        eventId: z
          .string()
          .openapi({ description: 'the id of the event that triggered the webhook' }),
        eventType: z.enum([
          'artifact_fetch_failed',
          'artifact_source_changed',
          'autoscaling_config_changed',
          'autoscaling_ended',
          'autoscaling_started',
          'branch_deleted',
          'build_ended',
          'build_started',
          'commit_ignored',
          'cron_job_run_ended',
          'cron_job_run_started',
          'deploy_ended',
          'deploy_started',
          'disk_created',
          'disk_updated',
          'disk_deleted',
          'disk_snapshot_restored',
          'image_pull_failed',
          'instance_count_changed',
          'job_run_ended',
          'maintenance_mode_enabled',
          'maintenance_mode_uri_updated',
          'maintenance_ended',
          'maintenance_started',
          'pipeline_minutes_exhausted',
          'plan_changed',
          'pre_deploy_ended',
          'pre_deploy_started',
          'server_available',
          'server_failed',
          'server_hardware_failure',
          'server_restarted',
          'service_resumed',
          'service_suspended',
          'zero_downtime_redeploy_ended',
          'zero_downtime_redeploy_started',
          'edge_cache_enabled',
          'edge_cache_disabled',
          'edge_cache_purged',
          'auto_deploy_disabled',
          'auto_deploy_enabled',
          'postgres_available',
          'postgres_backup_completed',
          'postgres_backup_failed',
          'postgres_backup_started',
          'postgres_cluster_leader_changed',
          'postgres_connection_pool_changed',
          'postgres_connection_pool_enabled_changed',
          'postgres_created',
          'postgres_disk_size_changed',
          'postgres_disk_autoscaling_enabled_changed',
          'postgres_ha_status_changed',
          'postgres_restarted',
          'postgres_unavailable',
          'postgres_upgrade_failed',
          'postgres_upgrade_started',
          'postgres_upgrade_succeeded',
          'postgres_restore_failed',
          'postgres_restore_succeeded',
          'postgres_read_replicas_changed',
          'postgres_pitr_checkpoint_started',
          'postgres_pitr_checkpoint_failed',
          'postgres_pitr_checkpoint_completed',
          'postgres_read_replica_stale',
          'postgres_wal_archive_failed',
          'key_value_available',
          'key_value_config_restart',
          'key_value_unhealthy',
        ]),
        sentAt: z.iso.datetime({ offset: true }),
        statusCode: z.int().exactOptional(),
        responseBody: z.string().exactOptional(),
        error: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'error is populated when an error occurs without a response such as a timeout',
          }),
      })
      .openapi({ required: ['id', 'eventId', 'eventType', 'sentAt'] }),
    cursor: CursorSchema,
  })
  .openapi({ required: ['webhookEvent', 'cursor'] })
  .openapi('WebhookEventWithCursor')

const ServiceInstanceSchema = z
  .object({ id: z.string(), createdAt: z.iso.datetime({ offset: true }) })
  .openapi({ required: ['id', 'createdAt'] })
  .openapi('ServiceInstance')

const OutboundIpsSchema = z
  .object({
    type: z
      .enum(['shared', 'dedicated'])
      .openapi({
        'x-enum-varnames': ['OutboundIpsTypeShared', 'OutboundIpsTypeDedicated'],
        description:
          '`dedicated` if a dedicated IP set applies to the resource, `shared` if its traffic originates from the shared Render IPs for its region.\n',
      }),
    dedicatedIpId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The dedicated IP set the traffic originates from. Only present when `type` is `dedicated`.',
        example: 'egs-abc123',
      }),
    ips: z
      .array(z.string())
      .openapi({
        description: "The IP addresses the resource's outbound traffic originates from.",
      }),
  })
  .openapi({ required: ['type', 'ips'] })
  .openapi('OutboundIps')

const TaskRunWithCursorSchema = z
  .object({
    taskRun: z
      .object({
        id: z.string(),
        taskId: z.string(),
        status: z.enum([
          'pending',
          'running',
          'completed',
          'succeeded',
          'failed',
          'canceled',
          'paused',
        ]),
        startedAt: z.iso.datetime({ offset: true }).exactOptional(),
        completedAt: z.iso.datetime({ offset: true }).exactOptional(),
        parentTaskRunId: z.string(),
        parentTaskAttempt: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The 0-indexed attempt of the parent task run that spawned this task run. Omitted for root task runs and for task runs created before this field was introduced.',
          }),
        rootTaskRunId: z.string(),
        retries: z.int(),
        attempts: z.array(
          z
            .object({
              taskRunId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the task run this attempt belongs to.' }),
              attempt: z.int().openapi({ description: 'The 0-indexed attempt number.' }),
              status: z.enum([
                'pending',
                'running',
                'completed',
                'succeeded',
                'failed',
                'canceled',
                'paused',
              ]),
              enqueuedAt: z.iso.datetime({ offset: true }).exactOptional(),
              startedAt: z.iso.datetime({ offset: true }),
              completedAt: z.iso.datetime({ offset: true }).exactOptional(),
            })
            .openapi({ required: ['status', 'startedAt', 'attempt'] }),
        ),
      })
      .openapi({
        required: [
          'id',
          'taskId',
          'status',
          'parentTaskRunId',
          'rootTaskRunId',
          'retries',
          'attempts',
        ],
      }),
    cursor: CursorSchema,
  })
  .openapi({ required: ['taskRun', 'cursor'] })
  .openapi('TaskRunWithCursor')

const _400BadRequestResponse = {
  description: 'The request could not be understood by the server.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _401UnauthorizedResponse = {
  description: 'Authorization information is missing or invalid.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _402PaymentRequiredResponse = {
  description: 'You must enter payment information to perform this request.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _403ForbiddenResponse = {
  description:
    "You do not have permissions for the requested resource. If a scoped API token does not satisfy the endpoint's minimum scope requirements, the response has code insufficient_token_scope and its message lists all minimum required scopes. Broader scopes that include their permissions also satisfy the requirements. Passing this check does not guarantee access to the requested resource or to conditional operations.",
  content: { 'application/json': { schema: ErrorSchema } },
}

const _404NotFoundResponse = {
  description: 'Unable to find the requested resource.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _406NotAcceptableResponse = {
  description: 'Unable to generate preferred media types as specified by Accept request header.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _409ConflictResponse = {
  description: 'The current state of the resource conflicts with this request.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _410GoneResponse = {
  description: 'The requested resource is no longer available.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _413RequestEntityTooLargeResponse = {
  description: 'The request body exceeded the maximum allowed size.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _429RateLimitResponse = {
  description:
    'Rate limit has been surpassed.\n\nRate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and\n`RateLimit-Reset` on successful responses so clients can track their remaining quota.\n',
  content: {
    'application/json': { schema: ErrorSchema, example: { message: 'rate limit exceeded' } },
  },
  headers: z.object({
    'Retry-After': {
      description: 'Seconds to wait before retrying the request.',
      schema: z
        .int()
        .exactOptional()
        .openapi({
          description: 'Seconds to wait before retrying the request.',
          param: { required: false },
          example: 30,
        }),
    },
    'RateLimit-Limit': {
      description: 'Maximum number of requests allowed in the current window.',
      schema: z
        .int()
        .exactOptional()
        .openapi({
          description: 'Maximum number of requests allowed in the current window.',
          param: { required: false },
          example: 100,
        }),
    },
    'RateLimit-Remaining': {
      description:
        'Number of requests remaining in the current window. Always `0` for this response.',
      schema: z
        .int()
        .exactOptional()
        .openapi({
          description:
            'Number of requests remaining in the current window. Always `0` for this response.',
          param: { required: false },
          example: 0,
        }),
    },
    'RateLimit-Reset': {
      description: 'Seconds until the current rate limit window resets.',
      schema: z
        .int()
        .exactOptional()
        .openapi({
          description: 'Seconds until the current rate limit window resets.',
          param: { required: false },
          example: 30,
        }),
    },
  }),
}

const _500InternalServerErrorResponse = {
  description: 'An unexpected server error has occurred.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _503ServiceUnavailableResponse = {
  description: 'Server currently unavailable.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const Logs200ResponseResponse = {
  description: 'A collection of logs with pagination metadata',
  content: {
    'application/json': {
      schema: z
        .object({
          hasMore: z.boolean().openapi({ description: 'True if there are more logs to fetch' }),
          nextStartTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description: 'The start time to use in the next query to fetch the next set of logs',
              example: '2021-07-15T07:20:05.777035-07:00',
            }),
          nextEndTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description: 'The end time to use in the next query to fetch the next set of logs',
              example: '2021-07-15T07:20:05.777035-07:00',
            }),
          logs: z.array(
            z
              .object({
                id: z.string().openapi({ description: 'A unique ID of the log entry' }),
                message: z.string().openapi({ description: 'The message of the log entry' }),
                timestamp: z.iso
                  .datetime({ offset: true })
                  .openapi({ description: 'The timestamp of the log entry' }),
                labels: z.array(
                  z
                    .object({
                      name: z
                        .enum([
                          'resource',
                          'instance',
                          'host',
                          'statusCode',
                          'method',
                          'level',
                          'workflowService',
                          'workflowVeresion',
                          'task',
                          'taskRun',
                          'sandbox',
                          'type',
                          'text',
                          'path',
                          'blocked',
                        ])
                        .openapi({ description: 'The name of the log label' }),
                      value: z.string().openapi({ description: 'The value of the log label' }),
                    })
                    .openapi({ description: 'A log label', required: ['name', 'value'] }),
                ),
              })
              .openapi({
                description: 'A log entry with metadata',
                required: ['id', 'message', 'timestamp', 'labels'],
              }),
          ),
        })
        .openapi({
          description: 'A run of a cron job',
          required: ['hasMore', 'nextStartTime', 'nextEndTime', 'logs'],
        }),
    },
  },
}

const LogsValues200ResponseResponse = {
  description: 'An array of possible values for a log label',
  content: { 'application/json': { schema: z.array(z.string()) } },
}

const CursorParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'cursor',
      in: 'query',
      required: false,
      description:
        'The position in the result list to start from when fetching paginated results. For details, see [Pagination](https://api-docs.render.com/reference/pagination).',
      schema: { type: 'string' },
    },
  })

const CustomDomainIdOrNameParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'customDomainNameOrID',
      in: 'path',
      required: true,
      description: 'The ID or name of the custom domain',
      schema: { type: 'string' },
    },
  })

const DeployIdParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'deployId',
      in: 'path',
      required: true,
      description: 'The ID of the deploy',
      schema: { type: 'string' },
    },
  })

const LimitParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      required: false,
      description:
        'The maximum number of items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination).',
      schema: {
        type: 'integer',
        default: 20,
        minimum: 1,
        maximum: 100,
        description: 'Defaults to 20',
      },
    },
    description: 'Defaults to 20',
  })

const AuditLogLimitParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      required: false,
      description:
        'The maximum number of audit log items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination).',
      schema: {
        type: 'integer',
        default: 20,
        minimum: 1,
        maximum: 1000,
        description: 'Defaults to 20',
      },
    },
    description: 'Defaults to 20',
  })

const OwnerIdPathParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'ownerId',
      in: 'path',
      description: 'The ID of the workspace to return resources for',
      schema: { type: 'string' },
      required: true,
    },
  })

const RegionPathParamParamsSchema = RegionSchema.openapi({
  param: {
    name: 'region',
    in: 'path',
    description: 'The region to return resources for',
    schema: { $ref: '#/components/schemas/region' },
    required: true,
  },
})

const UserIdPathParamParamsSchema = z
  .string()
  .regex(/^usr-[0-9a-v]{20}$/)
  .openapi({
    param: {
      name: 'userId',
      in: 'path',
      required: true,
      description: 'The ID of the user (Render object ID with a `usr-` prefix).',
      schema: {
        type: 'string',
        pattern: '^usr-[0-9a-v]{20}$',
        example: 'usr-5k6m7n8p9q0r1s2t3u4v',
      },
    },
    example: 'usr-5k6m7n8p9q0r1s2t3u4v',
  })

const OwnerIdParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'ownerId',
      in: 'query',
      description: 'The ID of the workspaces to return resources for',
      schema: { type: 'array', items: { type: 'string' } },
      style: 'form',
      explode: false,
      required: false,
    },
  })

const WorkflowIdParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'workflowID',
      in: 'query',
      description: 'The IDs of the workflows to return resources for',
      schema: { type: 'array', items: { type: 'string' } },
      style: 'form',
      explode: false,
      required: false,
    },
  })

const WorkflowVersionIdParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'workflowVersionId',
      in: 'query',
      description: 'The IDs of the workflow versions to return resources for',
      schema: { type: 'array', items: { type: 'string' } },
      style: 'form',
      explode: false,
      required: false,
    },
  })

const ResourceIdParamParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'resourceId',
      in: 'query',
      required: false,
      description: 'IDs of resources (server, cron job, postgres, or redis) to filter by',
      schema: { type: 'array', items: { type: 'string' } },
    },
  })

const ServiceIdParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'serviceId',
      in: 'path',
      required: true,
      description: 'The ID of the service',
      schema: { type: 'string' },
    },
  })

const CronJobIdParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'cronJobId',
      in: 'path',
      required: true,
      description: 'The ID of the cron job',
      schema: { type: 'string' },
    },
  })

const ServiceIdsParamParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'serviceId',
      in: 'query',
      description: 'Filter for resources by service ID',
      schema: { type: 'array', items: { type: 'string' } },
      style: 'form',
      required: false,
    },
  })

const StartTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'startTime',
      in: 'query',
      schema: { type: 'string', format: 'date-time', example: '2021-06-17T08:15:30Z' },
      required: false,
      description:
        'Epoch/Unix timestamp of start of time range to return. Defaults to `now() - 1 hour`.',
    },
    example: '2021-06-17T08:15:30Z',
  })

const EndTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'endTime',
      in: 'query',
      schema: { type: 'string', format: 'date-time', example: '2021-06-17T08:30:30Z' },
      required: false,
      description: 'Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.',
    },
    example: '2021-06-17T08:30:30Z',
  })

const NameParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'name',
      in: 'query',
      schema: { type: 'array', items: { type: 'string' } },
      style: 'form',
      explode: false,
      required: false,
      description: 'Filter by name',
    },
  })

const ServiceTypeParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(ServiceTypeSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'type',
      in: 'query',
      schema: { type: 'array', items: { $ref: '#/components/schemas/serviceType' } },
      style: 'form',
      explode: false,
      required: false,
      description: 'Filter for types of services',
    },
  })

const EnvParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(ServiceRuntimeSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'env',
      in: 'query',
      schema: { type: 'array', items: { $ref: '#/components/schemas/serviceRuntime' } },
      style: 'form',
      explode: false,
      required: false,
      deprecated: true,
      description:
        'Filter for environments (runtimes) of services (deprecated; use `runtime` instead)',
    },
  })

const RuntimeParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(ServiceRuntimeSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'env',
      in: 'query',
      schema: { type: 'array', items: { $ref: '#/components/schemas/serviceRuntime' } },
      style: 'form',
      explode: false,
      required: false,
      deprecated: true,
      description: 'Filter for environments (runtimes) of services',
    },
  })

const RegionParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(RegionSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'region',
      in: 'query',
      schema: { type: 'array', items: { $ref: '#/components/schemas/region' } },
      style: 'form',
      explode: false,
      required: false,
      description: 'Filter by resource region',
    },
  })

const SuspendedParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['suspended', 'not_suspended'])),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'suspended',
      in: 'query',
      schema: { type: 'array', items: { type: 'string', enum: ['suspended', 'not_suspended'] } },
      style: 'form',
      explode: false,
      required: false,
      description: "Filter resources based on whether they're suspended or not suspended",
    },
  })

const CreatedBeforeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'createdBefore',
      in: 'query',
      schema: { type: 'string', format: 'date-time' },
      required: false,
      description:
        'Filter for resources created before a certain time (specified as an ISO 8601 timestamp)',
      example: '2021-06-17T08:15:30Z',
    },
  })

const CreatedAfterParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'createdAfter',
      in: 'query',
      schema: { type: 'string', format: 'date-time' },
      required: false,
      description:
        'Filter for resources created after a certain time (specified as an ISO 8601 timestamp)',
      example: '2021-02-17T08:15:30Z',
    },
  })

const UpdatedBeforeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'updatedBefore',
      in: 'query',
      schema: { type: 'string', format: 'date-time' },
      required: false,
      description:
        'Filter for resources updated before a certain time (specified as an ISO 8601 timestamp)',
      example: '2021-06-17T08:15:30Z',
    },
  })

const UpdatedAfterParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'updatedAfter',
      in: 'query',
      schema: { type: 'string', format: 'date-time' },
      required: false,
      description:
        'Filter for resources updated after a certain time (specified as an ISO 8601 timestamp)',
      example: '2021-06-17T08:15:30Z',
    },
  })

const ProjectIdParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .openapi({
    param: {
      name: 'projectId',
      in: 'query',
      schema: { type: 'array', items: { type: 'string' } },
      style: 'form',
      explode: false,
      required: true,
      description: 'Filter for resources that belong to a project',
    },
  })

const EnvironmentIdParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'environmentId',
      in: 'query',
      schema: { type: 'array', items: { type: 'string' } },
      style: 'form',
      explode: false,
      required: false,
      description: 'Filter for resources that belong to an environment',
    },
  })

const IncludePreviewsParamParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      name: 'includePreviews',
      in: 'query',
      schema: { type: 'boolean', default: true },
      required: false,
      description: 'Include previews in the response',
    },
  })

const IncludeReplicasParamParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      name: 'includeReplicas',
      in: 'query',
      schema: { type: 'boolean', default: true },
      required: false,
      description: 'Include replicas in the response',
    },
  })

const EnvGroupIdParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'envGroupId',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      description: 'Filter for resources that belong to an environment group',
    },
  })

const EnvVarKeyParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'envVarKey',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      description: 'The name of the environment variable',
    },
  })

const SecretFileNameParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'envVarKey',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      description: 'The name of the secret file',
    },
  })

const EventTypeParamParamsSchema = z
  .union([
    z.enum([
      'artifact_fetch_failed',
      'artifact_source_changed',
      'autoscaling_config_changed',
      'autoscaling_ended',
      'autoscaling_started',
      'branch_deleted',
      'build_ended',
      'build_started',
      'commit_ignored',
      'cron_job_run_ended',
      'cron_job_run_started',
      'deploy_ended',
      'deploy_started',
      'disk_created',
      'disk_updated',
      'disk_deleted',
      'disk_snapshot_restored',
      'service_disk_usage_high',
      'service_disk_usage_recovered',
      'image_pull_failed',
      'initial_deploy_hook_ended',
      'initial_deploy_hook_started',
      'instance_count_changed',
      'job_run_ended',
      'maintenance_mode_enabled',
      'maintenance_mode_uri_updated',
      'maintenance_ended',
      'maintenance_started',
      'pipeline_minutes_exhausted',
      'plan_changed',
      'pre_deploy_ended',
      'pre_deploy_started',
      'server_available',
      'server_failed',
      'server_hardware_failure',
      'server_restarted',
      'service_resumed',
      'service_suspended',
      'suspender_added',
      'suspender_removed',
      'zero_downtime_redeploy_ended',
      'zero_downtime_redeploy_started',
      'auto_deploy_disabled',
      'auto_deploy_enabled',
    ]),
  ])
  .exactOptional()
  .openapi({
    param: {
      name: 'type',
      in: 'query',
      description: 'The type of event to filter to',
      required: false,
      schema: {
        anyOf: [
          {
            type: 'string',
            enum: [
              'artifact_fetch_failed',
              'artifact_source_changed',
              'autoscaling_config_changed',
              'autoscaling_ended',
              'autoscaling_started',
              'branch_deleted',
              'build_ended',
              'build_started',
              'commit_ignored',
              'cron_job_run_ended',
              'cron_job_run_started',
              'deploy_ended',
              'deploy_started',
              'disk_created',
              'disk_updated',
              'disk_deleted',
              'disk_snapshot_restored',
              'service_disk_usage_high',
              'service_disk_usage_recovered',
              'image_pull_failed',
              'initial_deploy_hook_ended',
              'initial_deploy_hook_started',
              'instance_count_changed',
              'job_run_ended',
              'maintenance_mode_enabled',
              'maintenance_mode_uri_updated',
              'maintenance_ended',
              'maintenance_started',
              'pipeline_minutes_exhausted',
              'plan_changed',
              'pre_deploy_ended',
              'pre_deploy_started',
              'server_available',
              'server_failed',
              'server_hardware_failure',
              'server_restarted',
              'service_resumed',
              'service_suspended',
              'suspender_added',
              'suspender_removed',
              'zero_downtime_redeploy_ended',
              'zero_downtime_redeploy_started',
              'auto_deploy_disabled',
              'auto_deploy_enabled',
            ],
          },
        ],
      },
    },
  })

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getBlueprintsRoute = createRoute({
  method: 'get',
  path: '/blueprints',
  tags: ['Blueprints'],
  summary: 'List Blueprints',
  description:
    'List Blueprints for the specified workspaces. If no workspaces are provided, returns all Blueprints the API key has access to.\n',
  operationId: 'list-blueprints',
  request: {
    query: z.object({
      ownerId: OwnerIdParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(BlueprintWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postBlueprintsValidateRoute = createRoute({
  method: 'post',
  path: '/blueprints/validate',
  tags: ['Blueprints'],
  summary: 'Validate Blueprint',
  description:
    'Validate a `render.yaml` Blueprint file without creating or modifying any resources. This endpoint checks the syntax and structure of the Blueprint, validates that all required fields are present, and returns a plan indicating the resources that would be created.\n\nRequests to this endpoint use `Content-Type: multipart/form-data`. The request body (including the Blueprint file) cannot exceed 10MB in size.\n',
  operationId: 'validate-blueprint',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              ownerId: z
                .string()
                .openapi({
                  description:
                    'The ID of the workspace to validate against. Obtain your workspace ID from its Settings page in the Render Dashboard.',
                  example: 'tea-cjnxpkdhshc73d12t9i0',
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The render.yaml file to validate, as a binary file.',
                }),
            })
            .openapi({ required: ['ownerId', 'file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Validation complete',
      content: {
        'application/json': {
          schema: z
            .object({
              valid: z
                .boolean()
                .openapi({
                  description:
                    'If `true`, the Blueprint validated successfully. If `false`, at least one validation error occurred.',
                }),
              errors: z
                .array(
                  z
                    .object({
                      path: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The path to the field with the error (e.g., `services[0].plan`)',
                        }),
                      error: z.string().openapi({ description: 'The error message' }),
                      line: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'The line number in the YAML file (1-indexed)' }),
                      column: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'The column number in the YAML file (1-indexed)' }),
                    })
                    .openapi({ required: ['error'] }),
                )
                .exactOptional()
                .openapi({
                  description: 'A list of validation errors. Only present if `valid` is `false`.',
                }),
              plan: z
                .object({
                  services: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'The names of services that would be created as part of the Blueprint.',
                    }),
                  databases: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'The names of Render Postgres databases that would be created as part of the Blueprint.',
                    }),
                  keyValue: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'The names of Render Key Value instances that would be created as part of the Blueprint.',
                    }),
                  envGroups: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'The names of environment groups that would be created as part of the Blueprint.',
                    }),
                  workflows: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'The names of workflows that would be created as part of the Blueprint.',
                    }),
                  totalActions: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The total number of actions that would be performed by the Blueprint. In addition to created resources, this includes modifications to individual configuration fields.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A summary of the resources that would be created as part of the Blueprint. Only present if `valid` is `true`.',
                  required: [],
                }),
            })
            .openapi({ required: ['valid'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    413: _413RequestEntityTooLargeResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteOwnersOwnerIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/owners/{ownerId}/members/{userId}',
  tags: ['Workspaces'],
  summary: 'Remove workspace member',
  description: 'Remove a user from the specified workspace.\n',
  operationId: 'remove-workspace-member',
  request: {
    params: z.object({
      ownerId: OwnerIdPathParamParamsSchema,
      userId: UserIdPathParamParamsSchema,
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchOwnersOwnerIdMembersUserIdRoute = createRoute({
  method: 'patch',
  path: '/owners/{ownerId}/members/{userId}',
  tags: ['Workspaces'],
  summary: 'Update workspace member role',
  description: 'Update the role of an existing workspace member.\n',
  operationId: 'update-workspace-member',
  request: {
    params: z.object({
      ownerId: OwnerIdPathParamParamsSchema,
      userId: UserIdPathParamParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ role: TeamMemberRoleSchema }).openapi({ required: ['role'] }),
          example: { role: 'ADMIN' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TeamMemberSchema,
          example: {
            userId: 'usr-0r1b2c3d4e5f6g7h8i9',
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            status: 'active',
            role: 'ADMIN',
            mfaEnabled: true,
          },
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getBlueprintsBlueprintIdRoute = createRoute({
  method: 'get',
  path: '/blueprints/{blueprintId}',
  tags: ['Blueprints'],
  summary: 'Retrieve Blueprint',
  description: 'Retrieve the Blueprint with the provided ID.\n',
  operationId: 'retrieve-blueprint',
  request: {
    params: z.object({
      blueprintId: z
        .string()
        .regex(/^exs-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'blueprintId',
            in: 'path',
            required: true,
            description: 'The ID of the Blueprint',
            schema: {
              type: 'string',
              pattern: '^exs-[0-9a-z]{20}$',
              example: 'exs-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'exs-cph1rs3idesc73a2b2mg',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^exs-[0-9a-z]{20}$/)
                .openapi({ example: 'exs-cph1rs3idesc73a2b2mg' }),
              name: z.string(),
              status: z
                .enum(['created', 'paused', 'in_sync', 'syncing', 'error'])
                .openapi({
                  description: 'A Blueprint has status `created` until its first Sync is approved.',
                }),
              autoSync: z
                .boolean()
                .openapi({
                  description:
                    'Configuration value that controls whether or not this blueprint will be re-synced on each git push to the configured branch.\nEven when true, autoSync will not apply when the blueprint has the Created status, which indicates its first sync has not yet been approved.\nOther conditions, such as a locked workspace, can also prevent automatic syncing even when this is true.\n',
                }),
              repo: z.string(),
              branch: z.string(),
              path: z
                .string()
                .openapi({
                  description: 'Path to the Blueprint file in the repository',
                  example: 'render.yaml',
                }),
              lastSync: z.iso.datetime({ offset: true }).exactOptional(),
              resources: z.array(
                z
                  .object({
                    id: z.string(),
                    name: z.string(),
                    type: z
                      .enum([
                        'static_site',
                        'web_service',
                        'private_service',
                        'background_worker',
                        'cron_job',
                        'redis',
                        'key_value',
                        'postgres',
                        'environment_group',
                        'build_source',
                        'workflow',
                      ])
                      .openapi({
                        description: 'type of the resource (ex. web_service or postgres)',
                      }),
                  })
                  .openapi({ required: ['id', 'name', 'type'] }),
              ),
            })
            .openapi({
              required: ['id', 'name', 'status', 'autoSync', 'repo', 'branch', 'path', 'resources'],
            }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteBlueprintsBlueprintIdRoute = createRoute({
  method: 'delete',
  path: '/blueprints/{blueprintId}',
  tags: ['Blueprints'],
  summary: 'Disconnect Blueprint',
  description:
    'Disconnect the Blueprint with the provided ID.\n\nDisconnecting a Blueprint stops automatic resource syncing via the associated `render.yaml` file. It does not _delete_ any services or other resources that were managed by the blueprint.\n',
  operationId: 'disconnect-blueprint',
  request: {
    params: z.object({
      blueprintId: z
        .string()
        .regex(/^exs-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'blueprintId',
            in: 'path',
            required: true,
            description: 'The ID of the Blueprint',
            schema: {
              type: 'string',
              pattern: '^exs-[0-9a-z]{20}$',
              example: 'exs-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'exs-cph1rs3idesc73a2b2mg',
        }),
    }),
  },
  responses: {
    204: { description: 'Blueprint disconnected' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchBlueprintsBlueprintIdRoute = createRoute({
  method: 'patch',
  path: '/blueprints/{blueprintId}',
  tags: ['Blueprints'],
  summary: 'Update Blueprint',
  description: 'Update the Blueprint with the provided ID.\n',
  operationId: 'update-blueprint',
  request: {
    params: z.object({
      blueprintId: z
        .string()
        .regex(/^exs-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'blueprintId',
            in: 'path',
            required: true,
            description: 'The ID of the Blueprint',
            schema: {
              type: 'string',
              pattern: '^exs-[0-9a-z]{20}$',
              example: 'exs-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'exs-cph1rs3idesc73a2b2mg',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              autoSync: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Configuration value that controls whether or not this blueprint will be re-synced on each git push to the configured branch.\nEven when true, autoSync will not apply when the blueprint has the Created status, which indicates its first sync has not yet been approved.\nOther conditions, such as a locked workspace, can also prevent automatic syncing even when this is true.\n',
                }),
              path: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Path to the Blueprint file in the repository',
                  example: 'render.yaml',
                }),
              branch: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The Git branch to read the Blueprint file from. Requires Blueprint onboarding early access.\nThe branch must contain a Blueprint file at the configured path.\nUpdating this field does not plan a sync.\n',
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
      description: 'Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^exs-[0-9a-z]{20}$/)
                .openapi({ example: 'exs-cph1rs3idesc73a2b2mg' }),
              name: z.string(),
              status: z
                .enum(['created', 'paused', 'in_sync', 'syncing', 'error'])
                .openapi({
                  description: 'A Blueprint has status `created` until its first Sync is approved.',
                }),
              autoSync: z
                .boolean()
                .openapi({
                  description:
                    'Configuration value that controls whether or not this blueprint will be re-synced on each git push to the configured branch.\nEven when true, autoSync will not apply when the blueprint has the Created status, which indicates its first sync has not yet been approved.\nOther conditions, such as a locked workspace, can also prevent automatic syncing even when this is true.\n',
                }),
              repo: z.string(),
              branch: z.string(),
              path: z
                .string()
                .openapi({
                  description: 'Path to the Blueprint file in the repository',
                  example: 'render.yaml',
                }),
              lastSync: z.iso.datetime({ offset: true }).exactOptional(),
            })
            .openapi({ required: ['id', 'name', 'status', 'autoSync', 'repo', 'branch', 'path'] }),
        },
      },
    },
    400: {
      description:
        'The request contains invalid values (such as an empty branch or path),\nbranch updates are not available for the workspace, or the Blueprint file\ncould not be read and validated after changing the branch.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: {
      description:
        'The Blueprint was not found, or the Blueprint file could not be found\nat the requested path when the branch is unchanged.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getBlueprintsBlueprintIdSyncsRoute = createRoute({
  method: 'get',
  path: '/blueprints/{blueprintId}/syncs',
  tags: ['Blueprints'],
  summary: 'List Blueprint syncs',
  description:
    'List syncs for the Blueprint with the provided ID.\nSyncs that are planned but not yet approved (in the `created` state) are not included.\n',
  operationId: 'list-blueprint-syncs',
  request: {
    params: z.object({
      blueprintId: z
        .string()
        .regex(/^exs-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'blueprintId',
            in: 'path',
            required: true,
            description: 'The ID of the Blueprint',
            schema: {
              type: 'string',
              pattern: '^exs-[0-9a-z]{20}$',
              example: 'exs-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'exs-cph1rs3idesc73a2b2mg',
        }),
    }),
    query: z.object({ cursor: CursorParamParamsSchema, limit: LimitParamParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SyncWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getDedicatedIpsRoute = createRoute({
  method: 'get',
  path: '/dedicated-ips',
  tags: ['Dedicated IPs'],
  summary: 'List dedicated IPs',
  description: 'List dedicated IP sets for a workspace.\n',
  operationId: 'list-dedicated-ips',
  request: {
    query: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'query',
            required: true,
            description: 'The ID of the workspace to list dedicated IP sets for.',
            schema: { type: 'string' },
          },
        }),
      environmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'environmentId',
            in: 'query',
            required: false,
            description:
              'Filter dedicated IP sets limited to this environment. Excludes workspace-scoped dedicated IP sets.\n\nThe environment must belong to the workspace named by `ownerId`.\n',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DedicatedIPSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postDedicatedIpsRoute = createRoute({
  method: 'post',
  path: '/dedicated-ips',
  tags: ['Dedicated IPs'],
  summary: 'Create dedicated IP set',
  description:
    'Create a dedicated IP set. Provisioning an IP set is asynchronous. The response returns immediately with `status: CREATING` and `ips: []`. When provisioning completes, status changes to `RUNNING` and `ips` contains your assigned addresses.\n\nIf `environmentIds` is omitted or empty, this IP set applies to all services in the workspace in the selected region. Otherwise, it applies only to services in the listed environments in that region.\n',
  operationId: 'create-dedicated-ip',
  request: {
    body: { content: { 'application/json': { schema: DedicatedIPPOSTSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: DedicatedIPSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    402: _402PaymentRequiredResponse,
    403: _403ForbiddenResponse,
    406: _406NotAcceptableResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getDedicatedIpsDedicatedIpIdRoute = createRoute({
  method: 'get',
  path: '/dedicated-ips/{dedicatedIpId}',
  tags: ['Dedicated IPs'],
  summary: 'Retrieve dedicated IP set',
  description: 'Retrieve the dedicated IP set with the provided ID.',
  operationId: 'retrieve-dedicated-ip',
  request: {
    params: z.object({
      dedicatedIpId: z
        .string()
        .openapi({
          param: {
            name: 'dedicatedIpId',
            in: 'path',
            required: true,
            description: 'The ID of the dedicated IP set',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DedicatedIPSchema } } },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteDedicatedIpsDedicatedIpIdRoute = createRoute({
  method: 'delete',
  path: '/dedicated-ips/{dedicatedIpId}',
  tags: ['Dedicated IPs'],
  summary: 'Delete dedicated IP set',
  description: 'Delete the dedicated IP set with the provided ID.\n',
  operationId: 'delete-dedicated-ip',
  request: {
    params: z.object({
      dedicatedIpId: z
        .string()
        .openapi({
          param: {
            name: 'dedicatedIpId',
            in: 'path',
            required: true,
            description: 'The ID of the dedicated IP set',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Dedicated IP deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchDedicatedIpsDedicatedIpIdRoute = createRoute({
  method: 'patch',
  path: '/dedicated-ips/{dedicatedIpId}',
  tags: ['Dedicated IPs'],
  summary: 'Update dedicated IP set',
  description:
    'Update the dedicated IP set with the provided ID. All fields are optional. Omitted fields are left unchanged. To switch from environment-scoped to workspace-scoped, provide `environmentIds: []`.\n',
  operationId: 'update-dedicated-ip',
  request: {
    params: z.object({
      dedicatedIpId: z
        .string()
        .openapi({
          param: {
            name: 'dedicatedIpId',
            in: 'path',
            required: true,
            description: 'The ID of the dedicated IP set',
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DedicatedIPPATCHSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DedicatedIPSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    409: _409ConflictResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getDisksRoute = createRoute({
  method: 'get',
  path: '/disks',
  tags: ['Disks'],
  summary: 'List disks',
  description:
    'List persistent disks matching the provided filters. If no filters are provided, returns all disks you have permissions to view.\n',
  operationId: 'list-disks',
  request: {
    query: z.object({
      ownerId: OwnerIdParamParamsSchema,
      diskId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^dsk-[0-9a-z]{20}$/)
              .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'diskId',
            in: 'query',
            description: 'Filter by disk IDs',
            schema: {
              type: 'array',
              items: {
                type: 'string',
                pattern: '^dsk-[0-9a-z]{20}$',
                example: 'dsk-cph1rs3idesc73a2b2mg',
              },
            },
            required: false,
          },
        }),
      name: NameParamParamsSchema,
      createdBefore: CreatedBeforeParamParamsSchema,
      createdAfter: CreatedAfterParamParamsSchema,
      updatedBefore: UpdatedBeforeParamParamsSchema,
      updatedAfter: UpdatedAfterParamParamsSchema,
      serviceId: ServiceIdsParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DiskWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postDisksRoute = createRoute({
  method: 'post',
  path: '/disks',
  tags: ['Disks'],
  summary: 'Add disk',
  description:
    'Attach a persistent disk to a web service, private service, or background worker.\n\nThe service must be redeployed for the disk to be attached.\n',
  operationId: 'add-disk',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string(),
              sizeGB: z.int(),
              mountPath: z.string(),
              serviceId: z.string(),
            })
            .openapi({ required: ['name', 'sizeGB', 'mountPath', 'serviceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^dsk-[0-9a-z]{20}$/)
                .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
              name: z.string(),
              sizeGB: z.int(),
              mountPath: z.string(),
              serviceId: z.string().exactOptional(),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
            })
            .openapi({ required: ['id', 'name', 'sizeGB', 'mountPath', 'createdAt', 'updatedAt'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getDisksDiskIdRoute = createRoute({
  method: 'get',
  path: '/disks/{diskId}',
  tags: ['Disks'],
  summary: 'Retrieve disk',
  description: 'Retrieve the persistent disk with the provided ID.\n',
  operationId: 'retrieve-disk',
  request: {
    params: z.object({
      diskId: z
        .string()
        .regex(/^dsk-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'diskId',
            in: 'path',
            required: true,
            description: 'The ID of the disk',
            schema: {
              type: 'string',
              pattern: '^dsk-[0-9a-z]{20}$',
              example: 'dsk-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'dsk-cph1rs3idesc73a2b2mg',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^dsk-[0-9a-z]{20}$/)
                .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
              name: z.string(),
              sizeGB: z.int(),
              mountPath: z.string(),
              serviceId: z.string().exactOptional(),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
            })
            .openapi({ required: ['id', 'name', 'sizeGB', 'mountPath', 'createdAt', 'updatedAt'] }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteDisksDiskIdRoute = createRoute({
  method: 'delete',
  path: '/disks/{diskId}',
  tags: ['Disks'],
  summary: 'Delete disk',
  description:
    "Delete a persistent disk attached to a service.\n\n**All data on the disk will be lost.** The disk's associated service will immediately lose access to it.\n",
  operationId: 'delete-disk',
  request: {
    params: z.object({
      diskId: z
        .string()
        .regex(/^dsk-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'diskId',
            in: 'path',
            required: true,
            description: 'The ID of the disk',
            schema: {
              type: 'string',
              pattern: '^dsk-[0-9a-z]{20}$',
              example: 'dsk-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'dsk-cph1rs3idesc73a2b2mg',
        }),
    }),
  },
  responses: {
    204: { description: 'Disk deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchDisksDiskIdRoute = createRoute({
  method: 'patch',
  path: '/disks/{diskId}',
  tags: ['Disks'],
  summary: 'Update disk',
  description:
    "Update the persistent disk with the provided ID.\n\nThe disk's associated service must be deployed and active for updates to take effect.\n\nWhen resizing a disk, the new size must be greater than the current size.\n",
  operationId: 'update-disk',
  request: {
    params: z.object({
      diskId: z
        .string()
        .regex(/^dsk-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'diskId',
            in: 'path',
            required: true,
            description: 'The ID of the disk',
            schema: {
              type: 'string',
              pattern: '^dsk-[0-9a-z]{20}$',
              example: 'dsk-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'dsk-cph1rs3idesc73a2b2mg',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              sizeGB: z.int().exactOptional(),
              mountPath: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^dsk-[0-9a-z]{20}$/)
                .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
              name: z.string(),
              sizeGB: z.int(),
              mountPath: z.string(),
              serviceId: z.string().exactOptional(),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
            })
            .openapi({ required: ['id', 'name', 'sizeGB', 'mountPath', 'createdAt', 'updatedAt'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getDisksDiskIdSnapshotsRoute = createRoute({
  method: 'get',
  path: '/disks/{diskId}/snapshots',
  tags: ['Disks'],
  summary: 'List snapshots',
  description:
    "List snapshots for the persistent disk with the provided ID. Each snapshot is a point-in-time copy of the disk's data.\n",
  operationId: 'list-snapshots',
  request: {
    params: z.object({
      diskId: z
        .string()
        .openapi({
          param: {
            name: 'diskId',
            in: 'path',
            required: true,
            description: 'The ID of the disk',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.array(DiskSnapshotSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postDisksDiskIdSnapshotsRestoreRoute = createRoute({
  method: 'post',
  path: '/disks/{diskId}/snapshots/restore',
  tags: ['Disks'],
  summary: 'Restore snapshot',
  description:
    'Restore a persistent disk to an available snapshot.\n\n**This operation is irreversible.** It will overwrite the current disk data. It might also trigger a service deploy.\n\nSnapshot keys returned from the [List snapshots](https://api-docs.render.com/reference/list-snapshots) endpoint expire after 24 hours. If a snapshot key has expired, query the endpoint again for a new key.\n',
  operationId: 'restore-snapshot',
  request: {
    params: z.object({
      diskId: z
        .string()
        .openapi({
          param: {
            name: 'diskId',
            in: 'path',
            required: true,
            description: 'The ID of the disk',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SnapshotRestorePOSTSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Restored',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^dsk-[0-9a-z]{20}$/)
                .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
              name: z.string(),
              sizeGB: z.int(),
              mountPath: z.string(),
              serviceId: z.string().exactOptional(),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
            })
            .openapi({ required: ['id', 'name', 'sizeGB', 'mountPath', 'createdAt', 'updatedAt'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'Get the authenticated user',
  description: 'Retrieve the user associated with the provided API key.\n',
  operationId: 'get-user',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getOwnersRoute = createRoute({
  method: 'get',
  path: '/owners',
  tags: ['Workspaces'],
  summary: 'List workspaces',
  description:
    'List the workspaces that your API key has access to, optionally filtered by name or owner email address.\n',
  operationId: 'list-owners',
  request: {
    query: z.object({
      name: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            description:
              'Only return workspaces with one of the provided names. Only exact matches are returned.',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      email: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            description: 'Only return workspaces owned by one of the provided email addresses.',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(OwnerWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getOwnersOwnerIdRoute = createRoute({
  method: 'get',
  path: '/owners/{ownerId}',
  tags: ['Workspaces'],
  summary: 'Retrieve workspace',
  description:
    "Retrieve the workspace with the provided ID.\n\nWorkspace IDs start with `tea-`. If you provide a user ID (starts with `own-`), this endpoint returns the user's default workspace.\n",
  operationId: 'retrieve-owner',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'path',
            required: true,
            description: 'The ID of the user or team',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OwnerSchema } } },
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getOwnersOwnerIdMembersRoute = createRoute({
  method: 'get',
  path: '/owners/{ownerId}/members',
  tags: ['Workspaces'],
  summary: 'List workspace members',
  description: 'Retrieves the list of users belonging to the workspace with the provided ID.\n',
  operationId: 'retrieve-owner-members',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'path',
            required: true,
            description: 'The ID of the team',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TeamMembersSchema } } },
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getOwnersOwnerIdAuditLogsRoute = createRoute({
  method: 'get',
  path: '/owners/{ownerId}/audit-logs',
  tags: ['Audit Logs'],
  summary: 'List workspace audit logs',
  description:
    'Retrieve audit logs for a specific workspace with optional filtering and pagination.\n',
  operationId: 'list-owner-audit-logs',
  request: {
    params: z.object({ ownerId: OwnerIdPathParamParamsSchema }),
    query: z.object({
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            required: false,
            description: 'Start time for filtering audit logs (ISO 8601 format)',
            schema: { type: 'string', format: 'date-time', example: '2023-01-01T00:00:00Z' },
          },
          example: '2023-01-01T00:00:00Z',
        }),
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            required: false,
            description: 'End time for filtering audit logs (ISO 8601 format)',
            schema: { type: 'string', format: 'date-time', example: '2023-12-31T23:59:59Z' },
          },
          example: '2023-12-31T23:59:59Z',
        }),
      direction: z
        .enum(['forward', 'backward'])
        .default('backward')
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            required: false,
            description:
              'The direction to query logs for. Backward will return most recent logs first.\nForward will start with the oldest logs in the time range.\n',
            schema: { default: 'backward', type: 'string', enum: ['forward', 'backward'] },
          },
        }),
      cursor: CursorParamParamsSchema,
      limit: AuditLogLimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AuditLogWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getOrganizationsOrgIdAuditLogsRoute = createRoute({
  method: 'get',
  path: '/organizations/{orgId}/audit-logs',
  tags: ['Audit Logs'],
  summary: 'List organization audit logs',
  description:
    'Retrieve audit logs for a specific organization with optional filtering and pagination.\n',
  operationId: 'list-organization-audit-logs',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            name: 'orgId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the organization',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            required: false,
            description: 'Start time for filtering audit logs (ISO 8601 format)',
            schema: { type: 'string', format: 'date-time', example: '2023-01-01T00:00:00Z' },
          },
          example: '2023-01-01T00:00:00Z',
        }),
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            required: false,
            description: 'End time for filtering audit logs (ISO 8601 format)',
            schema: { type: 'string', format: 'date-time', example: '2023-12-31T23:59:59Z' },
          },
          example: '2023-12-31T23:59:59Z',
        }),
      direction: z
        .enum(['forward', 'backward'])
        .default('backward')
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            required: false,
            description:
              'The direction to query logs for. Backward will return most recent logs first.\nForward will start with the oldest logs in the time range.\n',
            schema: { default: 'backward', type: 'string', enum: ['forward', 'backward'] },
          },
        }),
      cursor: CursorParamParamsSchema,
      limit: AuditLogLimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AuditLogWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getNotificationSettingsOwnersOwnerIdRoute = createRoute({
  method: 'get',
  path: '/notification-settings/owners/{ownerId}',
  tags: ['Notification Settings'],
  summary: 'Retrieve notification settings',
  description:
    'Retrieve notification settings for the owner with the provided ID.\n\nNote that you provide an owner ID to this endpoint, not the ID for a particular resource.\n',
  operationId: 'retrieve-owner-notification-settings',
  request: { params: z.object({ ownerId: OwnerIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ownerId: z.string(),
              slackEnabled: z.boolean(),
              emailEnabled: z.boolean(),
              previewNotificationsEnabled: z.boolean(),
              notificationsToSend: z.enum(['none', 'failure', 'all']),
            })
            .openapi({
              required: [
                'ownerId',
                'slackEnabled',
                'emailEnabled',
                'previewNotificationsEnabled',
                'notificationsToSend',
              ],
            }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchNotificationSettingsOwnersOwnerIdRoute = createRoute({
  method: 'patch',
  path: '/notification-settings/owners/{ownerId}',
  tags: ['Notification Settings'],
  summary: 'Update notification settings',
  description: 'Update notification settings for the owner with the provided ID.\n',
  operationId: 'patch-owner-notification-settings',
  request: {
    params: z.object({ ownerId: OwnerIdPathParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              emailEnabled: z.boolean().exactOptional(),
              previewNotificationsEnabled: z.boolean().exactOptional(),
              notificationsToSend: z.enum(['none', 'failure', 'all']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              ownerId: z.string(),
              slackEnabled: z.boolean(),
              emailEnabled: z.boolean(),
              previewNotificationsEnabled: z.boolean(),
              notificationsToSend: z.enum(['none', 'failure', 'all']),
            })
            .openapi({
              required: [
                'ownerId',
                'slackEnabled',
                'emailEnabled',
                'previewNotificationsEnabled',
                'notificationsToSend',
              ],
            }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getNotificationSettingsOverridesRoute = createRoute({
  method: 'get',
  path: '/notification-settings/overrides',
  tags: ['Notification Settings'],
  summary: 'List notification overrides',
  description:
    'List notification overrides matching the provided filters. If no filters are provided, returns all notification overrides for all workspaces the user belongs to.\n',
  operationId: 'list-notification-overrides',
  request: {
    query: z.object({
      ownerId: OwnerIdParamParamsSchema,
      serviceId: ServiceIdsParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(NotificationOverrideWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getNotificationSettingsOverridesServicesServiceIdRoute = createRoute({
  method: 'get',
  path: '/notification-settings/overrides/services/{serviceId}',
  tags: ['Notification Settings'],
  summary: 'Retrieve notification override',
  description:
    'Retrieve the notification override for the service with the provided ID.\n\nNote that you provide a service ID to this endpoint, not the ID for a particular override.\n',
  operationId: 'retrieve-service-notification-overrides',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              serviceId: z.string(),
              previewNotificationsEnabled: z.enum(['default', 'false', 'true']),
              notificationsToSend: z.enum(['default', 'none', 'failure', 'all']),
            })
            .openapi({
              required: ['serviceId', 'previewNotificationsEnabled', 'notificationsToSend'],
            }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchNotificationSettingsOverridesServicesServiceIdRoute = createRoute({
  method: 'patch',
  path: '/notification-settings/overrides/services/{serviceId}',
  tags: ['Notification Settings'],
  summary: 'Update notification override',
  description: 'Update the notification override for the service with the provided ID.\n',
  operationId: 'patch-service-notification-overrides',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              previewNotificationsEnabled: z.enum(['default', 'false', 'true']).exactOptional(),
              notificationsToSend: z.enum(['default', 'none', 'failure', 'all']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              serviceId: z.string(),
              previewNotificationsEnabled: z.enum(['default', 'false', 'true']),
              notificationsToSend: z.enum(['default', 'none', 'failure', 'all']),
            })
            .openapi({
              required: ['serviceId', 'previewNotificationsEnabled', 'notificationsToSend'],
            }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getRegistrycredentialsRoute = createRoute({
  method: 'get',
  path: '/registrycredentials',
  tags: ['Registry Credentials'],
  summary: 'List registry credentials',
  description:
    'List registry credentials matching the provided filters. If no filters are provided, returns all registry credentials you have permissions to view.\n',
  operationId: 'list-registry-credentials',
  request: {
    query: z.object({
      name: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for the name of a credential',
          },
        }),
      username: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for the username of a credential',
          },
        }),
      type: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(RegistryCredentialRegistrySchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/registryCredentialRegistry' },
            },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for the registry type for the credential',
          },
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for services created before a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for services created after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for services updated before a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for services updated after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
      ownerId: OwnerIdParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RegistryCredentialSchema) } },
    },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postRegistrycredentialsRoute = createRoute({
  method: 'post',
  path: '/registrycredentials',
  tags: ['Registry Credentials'],
  summary: 'Create registry credential',
  description: 'Create a new registry credential.',
  operationId: 'create-registry-credential',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              registry: RegistryCredentialRegistrySchema,
              name: z.string(),
              username: z.string(),
              authToken: z.string(),
              ownerId: z.string(),
            })
            .openapi({ required: ['name', 'registry', 'username', 'authToken', 'ownerId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Created',
      content: { 'application/json': { schema: RegistryCredentialSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    402: _402PaymentRequiredResponse,
    406: _406NotAcceptableResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getRegistrycredentialsRegistryCredentialIdRoute = createRoute({
  method: 'get',
  path: '/registrycredentials/{registryCredentialId}',
  tags: ['Registry Credentials'],
  summary: 'Retrieve registry credential',
  description: 'Retrieve the registry credential with the provided ID.',
  operationId: 'retrieve-registry-credential',
  request: {
    params: z.object({
      registryCredentialId: z
        .string()
        .openapi({
          param: {
            name: 'registryCredentialId',
            in: 'path',
            required: true,
            description: 'The ID of the registry credential',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RegistryCredentialSchema } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteRegistrycredentialsRegistryCredentialIdRoute = createRoute({
  method: 'delete',
  path: '/registrycredentials/{registryCredentialId}',
  tags: ['Registry Credentials'],
  summary: 'Delete registry credential',
  description: 'Delete the registry credential with the provided ID.',
  operationId: 'delete-registry-credential',
  request: {
    params: z.object({
      registryCredentialId: z
        .string()
        .openapi({
          param: {
            name: 'registryCredentialId',
            in: 'path',
            required: true,
            description: 'The ID of the registry credential',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Registry credential deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchRegistrycredentialsRegistryCredentialIdRoute = createRoute({
  method: 'patch',
  path: '/registrycredentials/{registryCredentialId}',
  tags: ['Registry Credentials'],
  summary: 'Update registry credential',
  description:
    'Update the registry credential with the provided ID. Services that use this credential must be redeployed to use updated values.',
  operationId: 'update-registry-credential',
  request: {
    params: z.object({
      registryCredentialId: z
        .string()
        .openapi({
          param: {
            name: 'registryCredentialId',
            in: 'path',
            required: true,
            description: 'The ID of the registry credential',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              registry: RegistryCredentialRegistrySchema,
              name: z.string(),
              username: z.string(),
              authToken: z.string(),
            })
            .openapi({ required: ['name', 'registry', 'username', 'authToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RegistryCredentialSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    402: _402PaymentRequiredResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    409: _409ConflictResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesRoute = createRoute({
  method: 'get',
  path: '/services',
  tags: ['Services'],
  summary: 'List services',
  description:
    'List services matching the provided filters. If no filters are provided, returns all services you have permissions to view.\n',
  operationId: 'list-services',
  request: {
    query: z.object({
      name: NameParamParamsSchema,
      type: ServiceTypeParamParamsSchema,
      environmentId: EnvironmentIdParamParamsSchema,
      env: EnvParamParamsSchema,
      region: RegionParamParamsSchema,
      suspended: SuspendedParamParamsSchema,
      createdBefore: CreatedBeforeParamParamsSchema,
      createdAfter: CreatedAfterParamParamsSchema,
      updatedBefore: UpdatedBeforeParamParamsSchema,
      updatedAfter: UpdatedAfterParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
      includePreviews: IncludePreviewsParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ServiceListSchema } } },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesRoute = createRoute({
  method: 'post',
  path: '/services',
  tags: ['Services'],
  summary: 'Create service',
  description:
    'Creates a new Render service in the specified workspace with the specified configuration.\n\n400 with `code: build_source_region_mismatch` if `buildSourceId` names a git-backed\nBuild Source in a different region than the service.\n',
  operationId: 'create-service',
  request: {
    body: { content: { 'application/json': { schema: ServicePOSTSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ServiceAndDeploySchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    402: _402PaymentRequiredResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}',
  tags: ['Services'],
  summary: 'Retrieve service',
  description: 'Retrieve the service with the provided ID.\n',
  operationId: 'retrieve-service',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ServiceSchema } } },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteServicesServiceIdRoute = createRoute({
  method: 'delete',
  path: '/services/{serviceId}',
  tags: ['Services'],
  summary: 'Delete service',
  description: 'Delete the service with the provided ID.\n',
  operationId: 'delete-service',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }) },
  responses: {
    204: { description: 'Service deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchServicesServiceIdRoute = createRoute({
  method: 'patch',
  path: '/services/{serviceId}',
  tags: ['Services'],
  summary: 'Update service',
  description:
    'Update the service with the provided ID.\n\n400 with `code: build_source_region_mismatch` if `buildSourceId` names a git-backed\nBuild Source in a different region than the service.\n',
  operationId: 'update-service',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: { content: { 'application/json': { schema: ServicePATCHSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ServiceSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    402: _402PaymentRequiredResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    409: _409ConflictResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdCachePurgeRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/cache/purge',
  tags: ['Services'],
  summary: 'Purge Web Service Cache',
  description: 'Trigger cache purge for the web service if caching is enabled.\n',
  operationId: 'purge-cache',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }), body: { content: {} } },
  responses: {
    202: { description: 'Cache purge request accepted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    409: _409ConflictResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdDeploysRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/deploys',
  tags: ['Deploys'],
  summary: 'List deploys',
  description:
    'List deploys matching the provided filters. If no filters are provided, all deploys for the service are returned.\n',
  operationId: 'list-deploys',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    query: z.object({
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DeployStatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: { type: 'array', items: { $ref: '#/components/schemas/deployStatus' } },
            required: false,
            description: 'Filter for deploys with the specified statuses',
          },
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for deploys created before a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for deploys created after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for deploys updated before a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for deploys updated after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
      finishedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'finishedBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for deploys finished before a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      finishedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'finishedAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for deploys finished after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeployListSchema } } },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdDeploysRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/deploys',
  tags: ['Deploys'],
  summary: 'Trigger deploy',
  description: 'Trigger a deploy for the service with the provided ID.\n',
  operationId: 'create-deploy',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              buildId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the build to deploy. Cannot be combined with `commitId`, `imageUrl`, or `deployMode`.\n',
                }),
              clearCache: z
                .enum(['clear', 'do_not_clear'])
                .default('do_not_clear')
                .exactOptional()
                .openapi({
                  description:
                    "If `clear`, Render clears the service's build cache before deploying. This can be useful if you're experiencing issues with your build.",
                }),
              commitId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The SHA of a specific Git commit to deploy for a service. Defaults to the latest commit on the service's connected branch. Cannot be combined with `buildId`, `imageUrl`, or `deployMode: deploy_only`.\n\nNote that deploying a specific commit with this endpoint does not disable autodeploys for the service.\n\nYou can toggle autodeploys for your service with the [Update service](https://api-docs.render.com/reference/update-service) endpoint or in the Render Dashboard.\n\nNot supported for cron jobs.\n",
                }),
              imageUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL of the image to deploy for an image-backed service. Cannot be combined with `buildId`, `commitId`, or `deployMode: deploy_only`.\n\nThe host, repository, and image name all must match the currently configured image for the service.\n',
                }),
              deployMode: DeployModeSchema.exactOptional().openapi({
                description:
                  'Deployment mode controlling build and deploy behavior.\n\nDefaults to `build_and_deploy` when not specified.\n\n**Validation:** `deployMode` cannot be combined with `buildId`. `deploy_only` cannot be combined with `commitId`, `imageUrl`, or `clearCache`.\n',
              }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: DeploySchema } } },
    202: { description: 'Queued' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    409: _409ConflictResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdDeploysDeployIdRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/deploys/{deployId}',
  tags: ['Deploys'],
  summary: 'Retrieve deploy',
  description: 'Retrieve the details of a particular deploy for a particular service.\n',
  operationId: 'retrieve-deploy',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      deployId: DeployIdParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeploySchema } } },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdDeploysDeployIdCancelRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/deploys/{deployId}/cancel',
  tags: ['Deploys'],
  summary: 'Cancel deploy',
  description: 'Cancel an in-progress deploy for a service.\n\nNot supported for cron jobs.\n',
  operationId: 'cancel-deploy',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      deployId: DeployIdParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeploySchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdRollbackRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/rollback',
  tags: ['Deploys'],
  summary: 'Roll back deploy',
  description:
    'Trigger a rollback to a previous deploy of the specified service.\n\nTriggering a rollback with this endpoint does not disable autodeploys for the service. This means an autodeploy might restore changes you had intentionally rolled back.\n\nYou can toggle autodeploys for your service with the [Update service](https://api-docs.render.com/reference/update-service) endpoint or in the Render Dashboard.\n',
  operationId: 'rollback-deploy',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              deployId: z.string().openapi({ description: 'The ID of the deploy to roll back to' }),
            })
            .openapi({ required: ['deployId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'OK', content: { 'application/json': { schema: DeploySchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdEnvVarsRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/env-vars',
  tags: ['Services'],
  summary: 'List environment variables',
  description: 'List all environment variables for the service with the provided ID.\n',
  operationId: 'get-env-vars-for-service',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    query: z.object({ cursor: CursorParamParamsSchema, limit: LimitParamParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(EnvVarWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putServicesServiceIdEnvVarsRoute = createRoute({
  method: 'put',
  path: '/services/{serviceId}/env-vars',
  tags: ['Services'],
  summary: 'Update environment variables',
  description:
    'Replace all environment variables for a service with the provided list of environment variables.',
  operationId: 'update-env-vars-for-service',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z.xor([
              z
                .object({ key: z.string(), value: z.string() })
                .openapi({ required: ['key', 'value'] }),
              z
                .object({
                  key: z.string(),
                  generateValue: z
                    .boolean()
                    .openapi({
                      description:
                        'If true, Render generates a strong random value for this environment variable on creation. Cannot be combined with `value`.',
                    }),
                })
                .openapi({ required: ['key', 'generateValue'] }),
            ]),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(EnvVarWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdEnvVarsEnvVarKeyRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/env-vars/{envVarKey}',
  tags: ['Services'],
  summary: 'Retrieve environment variable',
  description:
    'Retrieve a particular environment variable for a particular service.\n\nThis only applies to environment variables set directly on the service, not to environment variables in a linked environment group.\n',
  operationId: 'retrieve-env-var',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      envVarKey: EnvVarKeyParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvVarSchema } } },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putServicesServiceIdEnvVarsEnvVarKeyRoute = createRoute({
  method: 'put',
  path: '/services/{serviceId}/env-vars/{envVarKey}',
  tags: ['Services'],
  summary: 'Add or update environment variable',
  description:
    'Add or update a particular environment variable for a particular service.\n\nThis only applies to environment variables set directly on the service, not to environment variables in a linked environment group.\n',
  operationId: 'update-env-var',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      envVarKey: EnvVarKeyParamParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: AddUpdateEnvVarInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvVarSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteServicesServiceIdEnvVarsEnvVarKeyRoute = createRoute({
  method: 'delete',
  path: '/services/{serviceId}/env-vars/{envVarKey}',
  tags: ['Services'],
  summary: 'Delete environment variable',
  description:
    'Delete a particular environment variable from a particular service.\n\nThis only applies to environment variables set directly on the service, not to environment variables in a linked environment group.\n',
  operationId: 'delete-env-var',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      envVarKey: EnvVarKeyParamParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Environment variable deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdSecretFilesRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/secret-files',
  tags: ['Services'],
  summary: 'List secret files',
  description: 'List all secret files for the service with the provided ID.\n',
  operationId: 'list-secret-files-for-service',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    query: z.object({ cursor: CursorParamParamsSchema, limit: LimitParamParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SecretFileWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putServicesServiceIdSecretFilesRoute = createRoute({
  method: 'put',
  path: '/services/{serviceId}/secret-files',
  tags: ['Services'],
  summary: 'Update secret files',
  description:
    "Replace all secret files for a service with the provided list of secret files.\n\n**Any of the service's existing secret files not included in this request will be deleted.**\n\nThis only applies to secret files set directly on the service, not to secret files in a linked environment group.\n",
  operationId: 'update-secret-files-for-service',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({ name: z.string(), content: z.string() })
              .openapi({ required: ['name', 'content'] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SecretFileWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdSecretFilesEnvVarKeyRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/secret-files/{envVarKey}',
  tags: ['Services'],
  summary: 'Retrieve secret file',
  description:
    'Retrieve a particular secret file for a particular service.\n\nThis only applies to secret files set directly on the service, not to secret files in a linked environment group.\n',
  operationId: 'retrieve-secret-file',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      envVarKey: z
        .string()
        .openapi({
          param: {
            name: 'envVarKey',
            in: 'path',
            required: true,
            description: 'The file name of the secret file',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SecretFileSchema } } },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putServicesServiceIdSecretFilesEnvVarKeyRoute = createRoute({
  method: 'put',
  path: '/services/{serviceId}/secret-files/{envVarKey}',
  tags: ['Services'],
  summary: 'Add or update secret file',
  description:
    'Add or update a particular secret file for a particular service.\n\nThis only applies to secret files set directly on the service, not to secret files in a linked environment group.\n',
  operationId: 'add-or-update-secret-file',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      envVarKey: z
        .string()
        .openapi({
          param: {
            name: 'envVarKey',
            in: 'path',
            required: true,
            description: 'The file name of the secret file',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ content: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: SecretFileSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteServicesServiceIdSecretFilesEnvVarKeyRoute = createRoute({
  method: 'delete',
  path: '/services/{serviceId}/secret-files/{envVarKey}',
  tags: ['Services'],
  summary: 'Delete secret file',
  description:
    'Delete a particular secret file from a particular service.\n\nThis only applies to secret files set directly on the service, not to secret files in a linked environment group.\n',
  operationId: 'delete-secret-file',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      envVarKey: z
        .string()
        .openapi({
          param: {
            name: 'envVarKey',
            in: 'path',
            required: true,
            description: 'The file name of the secret file',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Secret file deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdEventsRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/events',
  tags: ['Services'],
  summary: 'List events',
  description: 'List recent events that occurred for the service with the provided ID.',
  operationId: 'list-events',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    query: z.object({
      type: EventTypeParamParamsSchema,
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(ServiceEventWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdHeadersRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/headers',
  tags: ['Services - Headers'],
  summary: 'List header rules',
  description:
    "List a particular service's response header rules that match the provided filters. If no filters are provided, all rules for the service are returned.\n",
  operationId: 'list-headers',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    query: z.object({
      path: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for specific paths that headers apply to',
          },
        }),
      name: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for header names',
          },
        }),
      value: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for header values',
          },
        }),
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(HeaderWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putServicesServiceIdHeadersRoute = createRoute({
  method: 'put',
  path: '/services/{serviceId}/headers',
  tags: ['Services - Headers'],
  summary: 'Replace header rules',
  description:
    "Replace all header rules for a particular service with the provided list.\n\n**This deletes all existing header rules for the service that aren't included in the request.**\n",
  operationId: 'update-headers',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: { 'application/json': { schema: z.array(HeaderInputSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(HeaderSchema) } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdHeadersRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/headers',
  tags: ['Services - Headers'],
  summary: 'Add header rule',
  description: 'Add a response header rule to the service with the provided ID.\n',
  operationId: 'add-headers',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: { content: { 'application/json': { schema: HeaderInputSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z.object({ headers: HeaderSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteServicesServiceIdHeadersHeaderIdRoute = createRoute({
  method: 'delete',
  path: '/services/{serviceId}/headers/{headerId}',
  tags: ['Services - Headers'],
  summary: 'Delete header rule',
  description: 'Delete a particular response header rule for a particular service.\n',
  operationId: 'delete-header',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      headerId: z
        .string()
        .openapi({
          param: {
            name: 'headerId',
            in: 'path',
            required: true,
            description: 'The id of the header',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Header deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdRoutesRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/routes',
  tags: ['Services - Routes'],
  summary: 'List redirect/rewrite rules',
  description:
    "List a particular service's redirect/rewrite rules that match the provided filters. If no filters are provided, all rules for the service are returned.\n",
  operationId: 'list-routes',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    query: z.object({
      type: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['redirect', 'rewrite'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'array', items: { type: 'string', enum: ['redirect', 'rewrite'] } },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for the type of route rule',
          },
        }),
      source: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'source',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for the source path of the route',
          },
        }),
      destination: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'destination',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for the destination path of the route',
          },
        }),
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RouteWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putServicesServiceIdRoutesRoute = createRoute({
  method: 'put',
  path: '/services/{serviceId}/routes',
  tags: ['Services - Routes'],
  summary: 'Update redirect/rewrite rules',
  description:
    "Replace all redirect/rewrite rules for a particular service with the provided list.\n\n**This deletes all existing redirect/rewrite rules for the service that aren't included in the request.**\n\nRule priority is assigned according to list order (the first rule in the list has the highest priority).\n",
  operationId: 'put-routes',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: { content: { 'application/json': { schema: z.array(RoutePutSchema) } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated',
      content: { 'application/json': { schema: z.array(RouteSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdRoutesRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/routes',
  tags: ['Services - Routes'],
  summary: 'Add redirect/rewrite rules',
  description: 'Add redirect/rewrite rules to the service with the provided ID.\n',
  operationId: 'add-route',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: { content: { 'application/json': { schema: RoutePostSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: RouteSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteServicesServiceIdRoutesRouteIdRoute = createRoute({
  method: 'delete',
  path: '/services/{serviceId}/routes/{routeId}',
  tags: ['Services - Routes'],
  summary: 'Delete redirect/rewrite rule',
  description: 'Delete a particular redirect/rewrite rule for a particular service.\n',
  operationId: 'delete-route',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The id of the route',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Route deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchServicesServiceIdRoutesRouteIdRoute = createRoute({
  method: 'patch',
  path: '/services/{serviceId}/routes/{routeId}',
  tags: ['Services - Routes'],
  summary: 'Update redirect/rewrite rule priority',
  description:
    "Update the priority for a particular redirect/rewrite rule.\n\nTo apply redirect/rewrite rules to an incoming request, Render starts from the rule with priority `0` and applies the first encountered rule that matches the request's path (if any).\n\nRender increments the priority of other rules by `1` as necessary to make space for the updated rule.\n",
  operationId: 'patch-route',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The id of the route',
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoutePatchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated',
      content: {
        'application/json': {
          schema: z.object({ headers: RouteSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdCustomDomainsRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/custom-domains',
  tags: ['Custom Domains'],
  summary: 'List custom domains',
  description:
    "List a particular service's custom domains that match the provided filters. If no filters are provided, all custom domains for the service are returned.\n",
  operationId: 'list-custom-domains',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    query: z.object({
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
      name: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: false,
            required: false,
            description: 'Filter for the names of custom domain',
          },
        }),
      domainType: z
        .enum(['apex', 'subdomain'])
        .exactOptional()
        .openapi({
          param: {
            name: 'domainType',
            in: 'query',
            schema: { type: 'string', enum: ['apex', 'subdomain'] },
            required: false,
            description: 'Filter for domain type',
          },
        }),
      verificationStatus: z
        .enum(['verified', 'unverified'])
        .exactOptional()
        .openapi({
          param: {
            name: 'verificationStatus',
            in: 'query',
            schema: { type: 'string', enum: ['verified', 'unverified'] },
            required: false,
            description: 'Filter for domain verification status (`verified` or `unverified`)',
          },
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for custom domains created before a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for custom domains created after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CustomDomainWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdCustomDomainsRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/custom-domains',
  tags: ['Custom Domains'],
  summary: 'Add custom domain',
  description: 'Add a custom domain to the service with the provided ID.\n',
  operationId: 'create-custom-domain',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ name: z.string() }).openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.array(CustomDomainSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    402: _402PaymentRequiredResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    409: _409ConflictResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/custom-domains/{customDomainNameOrID}',
  tags: ['Custom Domains'],
  summary: 'Retrieve custom domain',
  description: 'Retrieve a particular custom domain for a particular service.\n',
  operationId: 'retrieve-custom-domain',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      customDomainNameOrID: CustomDomainIdOrNameParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CustomDomainSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute = createRoute({
  method: 'delete',
  path: '/services/{serviceId}/custom-domains/{customDomainNameOrID}',
  tags: ['Custom Domains'],
  summary: 'Delete custom domain',
  description:
    'Delete a custom domain for a service given the service id and custom domain id or name.\n',
  operationId: 'delete-custom-domain',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      customDomainNameOrID: CustomDomainIdOrNameParamParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Custom domain deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/custom-domains/{customDomainNameOrID}/verify',
  tags: ['Custom Domains'],
  summary: 'Verify DNS configuration',
  description: 'Verify the DNS configuration for a custom domain.\n',
  operationId: 'refresh-custom-domain',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      customDomainNameOrID: CustomDomainIdOrNameParamParamsSchema,
    }),
  },
  responses: {
    202: { description: 'Custom domain verification triggered' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdSuspendRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/suspend',
  tags: ['Services'],
  summary: 'Suspend service',
  description: 'Suspend the service with the provided ID.\n',
  operationId: 'suspend-service',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }) },
  responses: {
    202: { description: 'Service suspended successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdResumeRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/resume',
  tags: ['Services'],
  summary: 'Resume service',
  description: "Resume the service with the provided ID (if it's currently suspended).\n",
  operationId: 'resume-service',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }) },
  responses: {
    202: { description: 'Service resumed successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdRestartRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/restart',
  tags: ['Services'],
  summary: 'Restart service',
  description: 'Restart the service with the provided ID.\n\nNot supported for cron jobs.\n',
  operationId: 'restart-service',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }) },
  responses: {
    200: { description: 'Service restarted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdScaleRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/scale',
  tags: ['Services'],
  summary: 'Scale instance count',
  description:
    '[Scale](https://render.com/docs/scaling#manual-scaling) the service with the provided ID to a fixed number of instances.\n\nRender ignores this value as long as autoscaling is enabled for the service.\n',
  operationId: 'scale-service',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ numInstances: z.int().openapi({ example: 3 }) })
            .openapi({ required: ['numInstances'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Service scaled successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putServicesServiceIdAutoscalingRoute = createRoute({
  method: 'put',
  path: '/services/{serviceId}/autoscaling',
  tags: ['Services'],
  summary: 'Update autoscaling config',
  description:
    'Update the [autoscaling](https://render.com/docs/scaling#autoscaling) config for the service with the provided ID.\n',
  operationId: 'autoscale-service',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enabled: z.boolean().default(false),
              min: z
                .int()
                .openapi({ description: 'The minimum number of instances for the service' }),
              max: z
                .int()
                .openapi({ description: 'The maximum number of instances for the service' }),
              criteria: z
                .object({
                  cpu: z
                    .object({
                      enabled: z.boolean().default(false),
                      percentage: z
                        .int()
                        .openapi({
                          description:
                            'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                        }),
                    })
                    .openapi({ required: ['enabled', 'percentage'] }),
                  memory: z
                    .object({
                      enabled: z.boolean().default(false),
                      percentage: z
                        .int()
                        .openapi({
                          description:
                            'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                        }),
                    })
                    .openapi({ required: ['enabled', 'percentage'] }),
                })
                .openapi({ required: ['cpu', 'memory'] }),
            })
            .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Autoscaling configuration updated',
      content: {
        'application/json': {
          schema: z
            .object({
              enabled: z.boolean().default(false),
              min: z
                .int()
                .openapi({ description: 'The minimum number of instances for the service' }),
              max: z
                .int()
                .openapi({ description: 'The maximum number of instances for the service' }),
              criteria: z
                .object({
                  cpu: z
                    .object({
                      enabled: z.boolean().default(false),
                      percentage: z
                        .int()
                        .openapi({
                          description:
                            'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                        }),
                    })
                    .openapi({ required: ['enabled', 'percentage'] }),
                  memory: z
                    .object({
                      enabled: z.boolean().default(false),
                      percentage: z
                        .int()
                        .openapi({
                          description:
                            'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                        }),
                    })
                    .openapi({ required: ['enabled', 'percentage'] }),
                })
                .openapi({ required: ['cpu', 'memory'] }),
            })
            .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteServicesServiceIdAutoscalingRoute = createRoute({
  method: 'delete',
  path: '/services/{serviceId}/autoscaling',
  tags: ['Services'],
  summary: 'Delete autoscaling config',
  description: 'Delete the autoscaling config for a service given the service id.\n',
  operationId: 'delete-autoscaling-config',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }) },
  responses: {
    204: { description: 'Autoscaling config deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdPreviewRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/preview',
  tags: ['Services'],
  summary: 'Create service preview (image-backed)',
  description:
    "Create a preview instance for an image-backed service. The preview uses the settings of the base service (referenced by `serviceId`), except settings overridden via provided parameters.\n\nView all active previews from your service's Previews tab in the Render Dashboard.\n\nNote that you can't create previews for Git-backed services using the Render API.\n",
  operationId: 'preview-service',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: { content: { 'application/json': { schema: PreviewInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Created',
      content: { 'application/json': { schema: ServiceAndDeploySchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdJobsRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/jobs',
  tags: ['One-Off Jobs'],
  summary: 'List jobs',
  description:
    'List jobs for the provided service that match the provided filters. If no filters are provided, all jobs for the service are returned.\n',
  operationId: 'list-job',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    query: z.object({
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
      status: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['pending', 'running', 'succeeded', 'failed', 'canceled'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['pending', 'running', 'succeeded', 'failed', 'canceled'],
              },
            },
            style: 'form',
            explode: false,
            required: false,
            description:
              'Filter for the status of the job (`pending`, `running`, `succeeded`, `failed`, or `canceled`)',
          },
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for jobs created before a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for jobs created after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
      startedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startedBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for jobs started before a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      startedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startedAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for jobs started after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
      finishedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'finishedBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for jobs finished before a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      finishedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'finishedAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for jobs finished after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(JobWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdJobsRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/jobs',
  tags: ['One-Off Jobs'],
  summary: 'Create job',
  description:
    'Create a one-off job using the provided service. For details, see [One-Off Jobs](https://render.com/docs/one-off-jobs).\n',
  operationId: 'post-job',
  request: {
    params: z.object({ serviceId: ServiceIdParamParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ startCommand: z.string(), planId: z.string().exactOptional() })
            .openapi({ required: ['startCommand'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^job-[0-9a-z]{20}$/)
                .openapi({ example: 'job-cph1rs3idesc73a2b2mg' }),
              serviceId: z.string().openapi({ example: 'srv-xxxxx' }),
              startCommand: z.string().openapi({ example: "echo 'hello world'" }),
              planId: z.string().openapi({ example: 'plan-srv-004' }),
              status: z
                .enum(['pending', 'running', 'succeeded', 'failed', 'canceled'])
                .exactOptional(),
              createdAt: z.iso
                .datetime({ offset: true })
                .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
              startedAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
              finishedAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
            })
            .openapi({ required: ['id', 'serviceId', 'startCommand', 'planId', 'createdAt'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/jobs/{jobId}',
  tags: ['One-Off Jobs'],
  summary: 'Retrieve job',
  description: 'Retrieve the details of a particular one-off job for a particular service.\n',
  operationId: 'retrieve-job',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      jobId: z
        .string()
        .regex(/^job-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The ID of the job',
            schema: {
              type: 'string',
              pattern: '^job-[0-9a-z]{20}$',
              example: 'job-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'job-cph1rs3idesc73a2b2mg',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^job-[0-9a-z]{20}$/)
                .openapi({ example: 'job-cph1rs3idesc73a2b2mg' }),
              serviceId: z.string().openapi({ example: 'srv-xxxxx' }),
              startCommand: z.string().openapi({ example: "echo 'hello world'" }),
              planId: z.string().openapi({ example: 'plan-srv-004' }),
              status: z
                .enum(['pending', 'running', 'succeeded', 'failed', 'canceled'])
                .exactOptional(),
              createdAt: z.iso
                .datetime({ offset: true })
                .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
              startedAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
              finishedAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
            })
            .openapi({ required: ['id', 'serviceId', 'startCommand', 'planId', 'createdAt'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postServicesServiceIdJobsJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/services/{serviceId}/jobs/{jobId}/cancel',
  tags: ['One-Off Jobs'],
  summary: 'Cancel running job',
  description: 'Cancel a particular one-off job for a particular service.\n',
  operationId: 'cancel-job',
  request: {
    params: z.object({
      serviceId: ServiceIdParamParamsSchema,
      jobId: z
        .string()
        .regex(/^job-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The ID of the job',
            schema: {
              type: 'string',
              pattern: '^job-[0-9a-z]{20}$',
              example: 'job-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'job-cph1rs3idesc73a2b2mg',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^job-[0-9a-z]{20}$/)
                .openapi({ example: 'job-cph1rs3idesc73a2b2mg' }),
              serviceId: z.string().openapi({ example: 'srv-xxxxx' }),
              startCommand: z.string().openapi({ example: "echo 'hello world'" }),
              planId: z.string().openapi({ example: 'plan-srv-004' }),
              status: z
                .enum(['pending', 'running', 'succeeded', 'failed', 'canceled'])
                .exactOptional(),
              createdAt: z.iso
                .datetime({ offset: true })
                .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
              startedAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
              finishedAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ example: '2021-07-15T07:20:05.777035-07:00' }),
            })
            .openapi({ required: ['id', 'serviceId', 'startCommand', 'planId', 'createdAt'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdInstancesRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/instances',
  tags: ['Services'],
  summary: 'List instances',
  description: 'List instances for the provided service.',
  operationId: 'list-instances',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ServiceInstanceSchema) } },
    },
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getServicesServiceIdOutboundIpsRoute = createRoute({
  method: 'get',
  path: '/services/{serviceId}/outbound-ips',
  tags: ['Services'],
  summary: 'Retrieve service outbound IPs',
  description:
    "Retrieve the IP addresses the service's outbound traffic originates from.\n\nA service uses either a dedicated IP set that applies to it, or the shared Render IPs for its region.\n",
  operationId: 'retrieve-service-outbound-ips',
  request: { params: z.object({ serviceId: ServiceIdParamParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutboundIpsSchema } } },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postCronJobsCronJobIdRunsRoute = createRoute({
  method: 'post',
  path: '/cron-jobs/{cronJobId}/runs',
  tags: ['Services - Cron Jobs'],
  summary: 'Trigger cron job run',
  description: 'Trigger a run for a cron job and cancel any active runs.',
  operationId: 'run-cron-job',
  request: { params: z.object({ cronJobId: CronJobIdParamParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CronJobRunSchema } } },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteCronJobsCronJobIdRunsRoute = createRoute({
  method: 'delete',
  path: '/cron-jobs/{cronJobId}/runs',
  tags: ['Services - Cron Jobs'],
  summary: 'Cancel running cron job',
  description: 'Cancel a currently running cron job.',
  operationId: 'cancel-cron-job-run',
  request: { params: z.object({ cronJobId: CronJobIdParamParamsSchema }) },
  responses: {
    204: { description: 'Canceled' },
    401: _401UnauthorizedResponse,
    406: _406NotAcceptableResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/events/{eventId}',
  tags: ['Events'],
  summary: 'Retrieve event',
  description: 'Retrieve the details of a particular event\n',
  operationId: 'retrieve-event',
  request: {
    params: z.object({
      eventId: z
        .string()
        .regex(/^evt-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'eventId',
            in: 'path',
            description: 'The ID of the event',
            schema: {
              type: 'string',
              pattern: '^evt-[0-9a-z]{20}$',
              example: 'evt-cph1rs3idesc73a2b2mg',
            },
            required: true,
          },
          example: 'evt-cph1rs3idesc73a2b2mg',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^evt-[0-9a-z]{20}$/)
                .openapi({ example: 'evt-cph1rs3idesc73a2b2mg' }),
              timestamp: z.iso.datetime({ offset: true }),
              serviceId: z.string(),
              type: z.enum([
                'artifact_fetch_failed',
                'artifact_source_changed',
                'autoscaling_config_changed',
                'autoscaling_ended',
                'autoscaling_started',
                'branch_deleted',
                'build_ended',
                'build_started',
                'commit_ignored',
                'cron_job_run_ended',
                'cron_job_run_started',
                'deploy_ended',
                'deploy_started',
                'disk_created',
                'disk_updated',
                'disk_deleted',
                'disk_snapshot_restored',
                'image_pull_failed',
                'instance_count_changed',
                'job_run_ended',
                'maintenance_mode_enabled',
                'maintenance_mode_uri_updated',
                'maintenance_ended',
                'maintenance_started',
                'pipeline_minutes_exhausted',
                'plan_changed',
                'pre_deploy_ended',
                'pre_deploy_started',
                'server_available',
                'server_failed',
                'server_hardware_failure',
                'server_restarted',
                'service_resumed',
                'service_suspended',
                'zero_downtime_redeploy_ended',
                'zero_downtime_redeploy_started',
                'edge_cache_enabled',
                'edge_cache_disabled',
                'edge_cache_purged',
                'auto_deploy_disabled',
                'auto_deploy_enabled',
                'postgres_available',
                'postgres_backup_completed',
                'postgres_backup_failed',
                'postgres_backup_started',
                'postgres_cluster_leader_changed',
                'postgres_connection_pool_changed',
                'postgres_connection_pool_enabled_changed',
                'postgres_created',
                'postgres_disk_size_changed',
                'postgres_disk_autoscaling_enabled_changed',
                'postgres_ha_status_changed',
                'postgres_restarted',
                'postgres_unavailable',
                'postgres_upgrade_failed',
                'postgres_upgrade_started',
                'postgres_upgrade_succeeded',
                'postgres_restore_failed',
                'postgres_restore_succeeded',
                'postgres_read_replicas_changed',
                'postgres_pitr_checkpoint_started',
                'postgres_pitr_checkpoint_failed',
                'postgres_pitr_checkpoint_completed',
                'postgres_read_replica_stale',
                'postgres_wal_archive_failed',
                'key_value_available',
                'key_value_config_restart',
                'key_value_unhealthy',
              ]),
              details: z.xor([
                z
                  .xor([
                    z
                      .object({
                        buildId: z
                          .string()
                          .openapi({
                            description:
                              'The build published by the build source that could not be fetched.',
                          }),
                        message: z.string(),
                      })
                      .openapi({
                        title: 'Artifact Fetch Failed',
                        required: ['buildId', 'message'],
                      }),
                    z
                      .object({
                        fromBuildSourceId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The previously linked build source. Absent when the service was newly attached.',
                          }),
                        toBuildSourceId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The newly linked build source. Absent when the service was detached.',
                          }),
                      })
                      .openapi({ title: 'Artifact Source Changed', required: [] }),
                    z
                      .object({
                        fromConfig: z
                          .object({
                            enabled: z.boolean().default(false),
                            min: z
                              .int()
                              .openapi({
                                description: 'The minimum number of instances for the service',
                              }),
                            max: z
                              .int()
                              .openapi({
                                description: 'The maximum number of instances for the service',
                              }),
                            criteria: z
                              .object({
                                cpu: z
                                  .object({
                                    enabled: z.boolean().default(false),
                                    percentage: z
                                      .int()
                                      .openapi({
                                        description:
                                          'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                                      }),
                                  })
                                  .openapi({ required: ['enabled', 'percentage'] }),
                                memory: z
                                  .object({
                                    enabled: z.boolean().default(false),
                                    percentage: z
                                      .int()
                                      .openapi({
                                        description:
                                          'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                                      }),
                                  })
                                  .openapi({ required: ['enabled', 'percentage'] }),
                              })
                              .openapi({ required: ['cpu', 'memory'] }),
                          })
                          .exactOptional()
                          .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
                        toConfig: z
                          .object({
                            enabled: z.boolean().default(false),
                            min: z
                              .int()
                              .openapi({
                                description: 'The minimum number of instances for the service',
                              }),
                            max: z
                              .int()
                              .openapi({
                                description: 'The maximum number of instances for the service',
                              }),
                            criteria: z
                              .object({
                                cpu: z
                                  .object({
                                    enabled: z.boolean().default(false),
                                    percentage: z
                                      .int()
                                      .openapi({
                                        description:
                                          'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                                      }),
                                  })
                                  .openapi({ required: ['enabled', 'percentage'] }),
                                memory: z
                                  .object({
                                    enabled: z.boolean().default(false),
                                    percentage: z
                                      .int()
                                      .openapi({
                                        description:
                                          'Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n',
                                      }),
                                  })
                                  .openapi({ required: ['enabled', 'percentage'] }),
                              })
                              .openapi({ required: ['cpu', 'memory'] }),
                          })
                          .openapi({ required: ['enabled', 'min', 'max', 'criteria'] }),
                      })
                      .openapi({ title: 'Autoscaling Config Changed', required: ['toConfig'] }),
                    z
                      .object({ fromInstances: z.int(), toInstances: z.int() })
                      .openapi({
                        title: 'Autoscaling Ended',
                        required: ['fromInstances', 'toInstances'],
                      }),
                    z
                      .object({
                        fromInstances: z.int(),
                        toInstances: z.int(),
                        currentCPU: z.int().exactOptional().openapi({ 'x-go-type': 'int64' }),
                        targetCPU: z.int().exactOptional().openapi({ 'x-go-type': 'int64' }),
                        currentMemory: z.int().exactOptional().openapi({ 'x-go-type': 'int64' }),
                        targetMemory: z.int().exactOptional().openapi({ 'x-go-type': 'int64' }),
                      })
                      .openapi({
                        title: 'Autoscaling Started',
                        required: ['fromInstances', 'toInstances'],
                      }),
                    z
                      .object({ deletedBranch: z.string(), newBranch: z.string() })
                      .openapi({
                        title: 'Branch Deleted',
                        required: ['deletedBranch', 'newBranch'],
                      }),
                    z
                      .object({
                        buildId: z.string(),
                        buildStatus: z.enum(['succeeded', 'failed', 'canceled']),
                        reason: z
                          .object({
                            buildFailed: z
                              .object({ id: z.string() })
                              .exactOptional()
                              .openapi({ required: ['id'] }),
                            newBuild: z
                              .object({ id: z.string() })
                              .exactOptional()
                              .openapi({ required: ['id'] }),
                            newDeploy: z
                              .object({ id: z.string() })
                              .exactOptional()
                              .openapi({ required: ['id'] }),
                            failure: z
                              .object({
                                evicted: z.boolean(),
                                evictionReason: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Details about why the application was evicted.',
                                  }),
                                nonZeroExit: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'If present, the application exited with the specified non-zero status.',
                                  }),
                                earlyExit: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                                  }),
                                oomKilled: z
                                  .object({ memoryLimit: z.string() })
                                  .exactOptional()
                                  .openapi({ required: ['memoryLimit'] }),
                                timedOutSeconds: z
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
                                unhealthy: z.string().exactOptional(),
                                timedOutReason: z.string().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: ['evicted'] }),
                          })
                          .openapi({ required: [] }),
                        status: z.int().openapi({ deprecated: true }),
                      })
                      .openapi({
                        title: 'Build Ended',
                        required: ['buildId', 'status', 'reason', 'buildStatus'],
                      }),
                    z
                      .object({
                        buildId: z.string(),
                        trigger: z
                          .object({
                            firstBuild: z
                              .boolean()
                              .openapi({ description: 'Deploy was triggered by service creation' }),
                            envUpdated: z
                              .boolean()
                              .openapi({
                                description: 'Deploy was triggered by an environment update',
                              }),
                            manual: z
                              .boolean()
                              .openapi({
                                description: 'Deploy was triggered manually from the dashboard',
                              }),
                            user: z
                              .object({ id: z.string(), email: z.string() })
                              .exactOptional()
                              .openapi({
                                description: 'User who triggered the action',
                                required: ['id', 'email'],
                              }),
                            updatedProperty: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Updated property that triggered the deploy',
                              }),
                            newCommit: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Commit that triggered the deploy' }),
                            deployedByRender: z
                              .boolean()
                              .openapi({ description: 'Deploy was triggered by Render' }),
                            clearCache: z
                              .boolean()
                              .openapi({
                                description: 'Whether the cache was cleared for the deploy',
                              }),
                            rollback: z
                              .boolean()
                              .openapi({
                                description: 'Whether the deploy was triggered by a rollback',
                              }),
                            rollbackTargetDeployId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Deploy ID that was rolled back to' }),
                          })
                          .openapi({
                            required: [
                              'firstBuild',
                              'envUpdated',
                              'manual',
                              'deployedByRender',
                              'clearCache',
                              'rollback',
                            ],
                          }),
                      })
                      .openapi({ title: 'Build Started', required: ['buildId', 'trigger'] }),
                    z
                      .object({
                        id: z.string().openapi({ description: 'the commit id' }),
                        url: z.string().openapi({ description: 'the commit url' }),
                      })
                      .openapi({ title: 'Commit Ignored', required: ['id', 'url'] }),
                    z
                      .object({
                        cronJobRunId: z.string(),
                        status: z.enum(['canceled', 'pending', 'successful', 'unsuccessful']),
                        reason: z
                          .object({
                            evicted: z.boolean(),
                            evictionReason: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Details about why the application was evicted.',
                              }),
                            nonZeroExit: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'If present, the application exited with the specified non-zero status.',
                              }),
                            earlyExit: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                              }),
                            oomKilled: z
                              .object({ memoryLimit: z.string() })
                              .exactOptional()
                              .openapi({ required: ['memoryLimit'] }),
                            timedOutSeconds: z
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
                            unhealthy: z.string().exactOptional(),
                            timedOutReason: z.string().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: ['evicted'] }),
                        user: z
                          .object({ id: z.string(), email: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'User who triggered the action',
                            required: ['id', 'email'],
                          }),
                      })
                      .openapi({
                        title: 'Cron Job Run Ended',
                        required: ['cronJobRunId', 'status'],
                      }),
                    z
                      .object({ cronJobRunId: z.string() })
                      .openapi({ title: 'Cron Job Run Started', required: ['cronJobRunId'] }),
                    z
                      .object({
                        deployId: z.string(),
                        reason: z
                          .object({
                            buildFailed: z
                              .object({ id: z.string() })
                              .exactOptional()
                              .openapi({ required: ['id'] }),
                            newBuild: z
                              .object({ id: z.string() })
                              .exactOptional()
                              .openapi({ required: ['id'] }),
                            newDeploy: z
                              .object({ id: z.string() })
                              .exactOptional()
                              .openapi({ required: ['id'] }),
                            failure: z
                              .object({
                                evicted: z.boolean(),
                                evictionReason: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Details about why the application was evicted.',
                                  }),
                                nonZeroExit: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'If present, the application exited with the specified non-zero status.',
                                  }),
                                earlyExit: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                                  }),
                                oomKilled: z
                                  .object({ memoryLimit: z.string() })
                                  .exactOptional()
                                  .openapi({ required: ['memoryLimit'] }),
                                timedOutSeconds: z
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
                                unhealthy: z.string().exactOptional(),
                                timedOutReason: z.string().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: ['evicted'] }),
                          })
                          .openapi({ required: [] }),
                        deployStatus: z.enum(['succeeded', 'failed', 'canceled']),
                        status: z.int().openapi({ deprecated: true }),
                        buildId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "Set when the deploy shipped a build published by the service's linked build source.",
                          }),
                      })
                      .openapi({
                        title: 'Deploy Ended',
                        required: ['deployId', 'reason', 'status', 'deployStatus'],
                      }),
                    z
                      .object({
                        deployId: z.string(),
                        trigger: z
                          .object({
                            firstBuild: z
                              .boolean()
                              .openapi({ description: 'Deploy was triggered by service creation' }),
                            envUpdated: z
                              .boolean()
                              .openapi({
                                description: 'Deploy was triggered by an environment update',
                              }),
                            manual: z
                              .boolean()
                              .openapi({
                                description: 'Deploy was triggered manually from the dashboard',
                              }),
                            user: z
                              .object({ id: z.string(), email: z.string() })
                              .exactOptional()
                              .openapi({
                                description: 'User who triggered the action',
                                required: ['id', 'email'],
                              }),
                            updatedProperty: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Updated property that triggered the deploy',
                              }),
                            newCommit: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Commit that triggered the deploy' }),
                            deployedByRender: z
                              .boolean()
                              .openapi({ description: 'Deploy was triggered by Render' }),
                            clearCache: z
                              .boolean()
                              .openapi({
                                description: 'Whether the cache was cleared for the deploy',
                              }),
                            rollback: z
                              .boolean()
                              .openapi({
                                description: 'Whether the deploy was triggered by a rollback',
                              }),
                            rollbackTargetDeployId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Deploy ID that was rolled back to' }),
                          })
                          .openapi({
                            required: [
                              'firstBuild',
                              'envUpdated',
                              'manual',
                              'deployedByRender',
                              'clearCache',
                              'rollback',
                            ],
                          }),
                        buildId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "Set when the deploy ships a build published by the service's linked build source.",
                          }),
                      })
                      .openapi({ title: 'Deploy Started', required: ['deployId', 'trigger'] }),
                    z
                      .object({
                        diskId: z
                          .string()
                          .regex(/^dsk-[0-9a-z]{20}$/)
                          .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                        sizeGB: z.int(),
                      })
                      .openapi({ title: 'Disk Created', required: ['diskId', 'sizeGB'] }),
                    z
                      .object({
                        diskId: z
                          .string()
                          .regex(/^dsk-[0-9a-z]{20}$/)
                          .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                        fromSizeGB: z.int(),
                        toSizeGB: z.int(),
                      })
                      .openapi({
                        title: 'Disk Updated',
                        required: ['diskId', 'fromSizeGB', 'toSizeGB'],
                      }),
                    z
                      .object({
                        diskId: z
                          .string()
                          .regex(/^dsk-[0-9a-z]{20}$/)
                          .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                      })
                      .openapi({ title: 'Disk Deleted', required: ['diskId'] }),
                    z
                      .object({
                        diskId: z
                          .string()
                          .regex(/^dsk-[0-9a-z]{20}$/)
                          .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                        instanceId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The instance whose disk was restored, when the restore named one. A service instance ID, or the service ID for an older single disk.',
                          }),
                        snapshotCreatedAt: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({ description: 'When the restored snapshot was taken' }),
                        triggeredByUser: z.string().nullable(),
                      })
                      .openapi({
                        title: 'Disk Snapshot Restored',
                        required: ['diskId', 'triggeredByUser'],
                      }),
                    z
                      .object({
                        diskId: z
                          .string()
                          .regex(/^dsk-[0-9a-z]{20}$/)
                          .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                        diskName: z.string(),
                        mountPath: z.string(),
                        usagePercent: z.float64(),
                        thresholdPercent: z.float64(),
                      })
                      .openapi({
                        title: 'Service Disk Usage High',
                        required: [
                          'diskId',
                          'diskName',
                          'mountPath',
                          'usagePercent',
                          'thresholdPercent',
                        ],
                      }),
                    z
                      .object({
                        diskId: z
                          .string()
                          .regex(/^dsk-[0-9a-z]{20}$/)
                          .openapi({ example: 'dsk-cph1rs3idesc73a2b2mg' }),
                        diskName: z.string(),
                        mountPath: z.string(),
                        usagePercent: z.float64(),
                        thresholdPercent: z.float64(),
                      })
                      .openapi({
                        title: 'Service Disk Usage Recovered',
                        required: [
                          'diskId',
                          'diskName',
                          'mountPath',
                          'usagePercent',
                          'thresholdPercent',
                        ],
                      }),
                    z
                      .object({ message: z.string(), imageURL: z.string() })
                      .openapi({ title: 'Image Pull Failed', required: ['message', 'imageURL'] }),
                    z
                      .object({ deployId: z.string() })
                      .openapi({ title: 'Initial Deploy Hook Started', required: ['deployId'] }),
                    z
                      .object({ deployId: z.string() })
                      .openapi({ title: 'Initial Deploy Hook Ended', required: ['deployId'] }),
                    z
                      .object({ fromInstances: z.int(), toInstances: z.int() })
                      .openapi({
                        title: 'Instance Count Changed',
                        required: ['fromInstances', 'toInstances'],
                      }),
                    z
                      .object({
                        jobId: z
                          .string()
                          .regex(/^job-[0-9a-z]{20}$/)
                          .openapi({ example: 'job-cph1rs3idesc73a2b2mg' }),
                        status: z.enum(['pending', 'running', 'succeeded', 'failed', 'canceled']),
                        reason: z
                          .object({
                            evicted: z.boolean(),
                            evictionReason: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Details about why the application was evicted.',
                              }),
                            nonZeroExit: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'If present, the application exited with the specified non-zero status.',
                              }),
                            earlyExit: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                              }),
                            oomKilled: z
                              .object({ memoryLimit: z.string() })
                              .exactOptional()
                              .openapi({ required: ['memoryLimit'] }),
                            timedOutSeconds: z
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
                            unhealthy: z.string().exactOptional(),
                            timedOutReason: z.string().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: ['evicted'] }),
                      })
                      .openapi({ title: 'Job Run Ended', required: ['jobId', 'status'] }),
                    z
                      .object({ enabled: z.boolean() })
                      .openapi({ title: 'Maintenance Mode Enabled', required: ['enabled'] }),
                    z
                      .object({ fromURI: z.string(), toURI: z.string() })
                      .openapi({
                        title: 'Maintenance Mode URI Updated',
                        required: ['fromURI', 'toURI'],
                      }),
                    z.object({}).openapi({ title: 'Maintenance Ended' }),
                    z
                      .object({
                        trigger: z
                          .object({
                            user: z
                              .object({ id: z.string(), email: z.string() })
                              .exactOptional()
                              .openapi({
                                description: 'User who triggered the action',
                                required: ['id', 'email'],
                              }),
                            manual: z
                              .boolean()
                              .openapi({ description: 'Maintenance was triggered manually' }),
                            startedByRender: z
                              .boolean()
                              .openapi({ description: 'Maintenance was triggered by Render' }),
                          })
                          .openapi({ required: ['manual', 'startedByRender'] }),
                      })
                      .openapi({ title: 'Maintenance Started', required: ['trigger'] }),
                    z
                      .object({
                        buildId: z.string(),
                        trigger: z
                          .object({
                            firstBuild: z
                              .boolean()
                              .openapi({ description: 'Deploy was triggered by service creation' }),
                            envUpdated: z
                              .boolean()
                              .openapi({
                                description: 'Deploy was triggered by an environment update',
                              }),
                            manual: z
                              .boolean()
                              .openapi({
                                description: 'Deploy was triggered manually from the dashboard',
                              }),
                            user: z
                              .object({ id: z.string(), email: z.string() })
                              .exactOptional()
                              .openapi({
                                description: 'User who triggered the action',
                                required: ['id', 'email'],
                              }),
                            updatedProperty: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Updated property that triggered the deploy',
                              }),
                            newCommit: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Commit that triggered the deploy' }),
                            deployedByRender: z
                              .boolean()
                              .openapi({ description: 'Deploy was triggered by Render' }),
                            clearCache: z
                              .boolean()
                              .openapi({
                                description: 'Whether the cache was cleared for the deploy',
                              }),
                            rollback: z
                              .boolean()
                              .openapi({
                                description: 'Whether the deploy was triggered by a rollback',
                              }),
                            rollbackTargetDeployId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Deploy ID that was rolled back to' }),
                          })
                          .openapi({
                            required: [
                              'firstBuild',
                              'envUpdated',
                              'manual',
                              'deployedByRender',
                              'clearCache',
                              'rollback',
                            ],
                          }),
                      })
                      .openapi({
                        title: 'Pipeline Minutes Exhausted',
                        required: ['buildId', 'trigger'],
                      }),
                    z
                      .object({ from: z.string(), to: z.string() })
                      .openapi({ title: 'Instance Type Changed', required: ['from', 'to'] }),
                    z
                      .object({
                        deployCommandExecutionId: z.string(),
                        deployId: z.string(),
                        preDeployStatus: z.enum(['succeeded', 'failed', 'canceled']),
                        reason: z
                          .object({
                            buildFailed: z
                              .object({ id: z.string() })
                              .exactOptional()
                              .openapi({ required: ['id'] }),
                            newBuild: z
                              .object({ id: z.string() })
                              .exactOptional()
                              .openapi({ required: ['id'] }),
                            newDeploy: z
                              .object({ id: z.string() })
                              .exactOptional()
                              .openapi({ required: ['id'] }),
                            failure: z
                              .object({
                                evicted: z.boolean(),
                                evictionReason: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Details about why the application was evicted.',
                                  }),
                                nonZeroExit: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'If present, the application exited with the specified non-zero status.',
                                  }),
                                earlyExit: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                                  }),
                                oomKilled: z
                                  .object({ memoryLimit: z.string() })
                                  .exactOptional()
                                  .openapi({ required: ['memoryLimit'] }),
                                timedOutSeconds: z
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
                                unhealthy: z.string().exactOptional(),
                                timedOutReason: z.string().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: ['evicted'] }),
                          })
                          .openapi({ required: [] }),
                        status: z.int().openapi({ deprecated: true }),
                      })
                      .openapi({
                        title: 'Pre Deploy Ended',
                        required: [
                          'deployCommandExecutionId',
                          'deployId',
                          'status',
                          'preDeployStatus',
                          'reason',
                        ],
                      }),
                    z
                      .object({ deployCommandExecutionId: z.string(), deployId: z.string() })
                      .openapi({
                        title: 'Pre Deploy Started',
                        required: ['deployCommandExecutionId', 'deployId'],
                      }),
                    z.object({}).openapi({ title: 'Server Available' }),
                    z
                      .object({
                        instanceID: z
                          .string()
                          .regex(/^srv-[0-9a-z]{20}-[0-9a-z]{5}$/)
                          .exactOptional()
                          .openapi({ example: 'srv-d0cjkelq67qs70c2pugg-sbpkm' }),
                        reason: z
                          .object({
                            evicted: z.boolean(),
                            evictionReason: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Details about why the application was evicted.',
                              }),
                            nonZeroExit: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'If present, the application exited with the specified non-zero status.',
                              }),
                            earlyExit: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render.',
                              }),
                            oomKilled: z
                              .object({ memoryLimit: z.string() })
                              .exactOptional()
                              .openapi({ required: ['memoryLimit'] }),
                            timedOutSeconds: z
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
                            unhealthy: z.string().exactOptional(),
                            timedOutReason: z.string().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: ['evicted'] }),
                      })
                      .openapi({ title: 'Server Failed', required: [] }),
                    z.object({}).openapi({ title: 'Server Hardware Failure' }),
                    z
                      .object({ triggeredByUser: z.string().nullable() })
                      .openapi({ title: 'Server Restarted', required: ['triggeredByUser'] }),
                    z.object({}).openapi({ title: 'Service Resumed' }),
                    z.object({}).openapi({ title: 'Service Suspended' }),
                    z
                      .object({
                        actor: z.string(),
                        suspendedByUser: z
                          .object({ id: z.string(), email: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'User who triggered the action',
                            required: ['id', 'email'],
                          }),
                      })
                      .openapi({ title: 'Suspender Added', required: ['actor'] }),
                    z
                      .object({
                        actor: z.string(),
                        resumedByUser: z
                          .object({ id: z.string(), email: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'User who triggered the action',
                            required: ['id', 'email'],
                          }),
                      })
                      .openapi({ title: 'Suspender Removed', required: ['actor'] }),
                    z.object({}).openapi({ title: 'Zero Downtime Redeploy Ended' }),
                    z
                      .object({ trigger: z.string() })
                      .openapi({ title: 'Zero Downtime Redeploy Started', required: ['trigger'] }),
                    z
                      .object({
                        trigger: z
                          .object({
                            manual: z
                              .boolean()
                              .openapi({
                                description:
                                  'Edge Cache change was triggered manually from the dashboard',
                              }),
                            user: z
                              .object({ id: z.string(), email: z.string() })
                              .exactOptional()
                              .openapi({
                                description: 'User who triggered the action',
                                required: ['id', 'email'],
                              }),
                            system: z
                              .boolean()
                              .openapi({
                                description: 'Edge Cache Change was triggered by Render',
                              }),
                          })
                          .openapi({ required: ['manual', 'system'] }),
                      })
                      .openapi({ title: 'Edge Cache Disabled', required: ['trigger'] }),
                    z
                      .object({
                        trigger: z
                          .object({
                            manual: z
                              .boolean()
                              .openapi({
                                description:
                                  'Edge Cache change was triggered manually from the dashboard',
                              }),
                            user: z
                              .object({ id: z.string(), email: z.string() })
                              .exactOptional()
                              .openapi({
                                description: 'User who triggered the action',
                                required: ['id', 'email'],
                              }),
                            system: z
                              .boolean()
                              .openapi({
                                description: 'Edge Cache Change was triggered by Render',
                              }),
                          })
                          .openapi({ required: ['manual', 'system'] }),
                      })
                      .openapi({ title: 'Edge Cache Enabled', required: ['trigger'] }),
                    z
                      .object({
                        trigger: z
                          .object({
                            manual: z
                              .boolean()
                              .openapi({
                                description:
                                  'Edge Cache change was triggered manually from the dashboard',
                              }),
                            user: z
                              .object({ id: z.string(), email: z.string() })
                              .exactOptional()
                              .openapi({
                                description: 'User who triggered the action',
                                required: ['id', 'email'],
                              }),
                            system: z
                              .boolean()
                              .openapi({
                                description: 'Edge Cache Change was triggered by Render',
                              }),
                          })
                          .openapi({ required: ['manual', 'system'] }),
                      })
                      .openapi({ title: 'Edge Cache Purged', required: ['trigger'] }),
                    z
                      .object({
                        reason: z
                          .string()
                          .openapi({
                            description:
                              'Why auto-deploy was disabled (manual_deploy, rollback, or setting_change)',
                          }),
                        fromTrigger: z
                          .lazy(() => ServicePOSTSchema)
                          .exactOptional()
                          .openapi({
                            description:
                              'The auto-deploy trigger value immediately before it was disabled',
                          }),
                      })
                      .openapi({ title: 'Auto Deploy Disabled', required: ['reason'] }),
                    z
                      .object({
                        newTrigger: z
                          .lazy(() => ServicePOSTSchema)
                          .exactOptional()
                          .openapi({
                            description: 'The auto-deploy trigger value after it was re-enabled',
                          }),
                      })
                      .openapi({ title: 'Auto Deploy Enabled', required: [] }),
                  ])
                  .openapi({ title: 'Service Event Details' }),
                z
                  .xor([
                    z.object({}).openapi({ title: 'Postgres Available' }),
                    z.object({}).openapi({ title: 'Postgres Backup Completed' }),
                    z.object({}).openapi({ title: 'Postgres Backup Failed' }),
                    z.object({}).openapi({ title: 'Postgres Backup Started' }),
                    z
                      .object({ leaderId: z.string().exactOptional() })
                      .openapi({ title: 'Postgres Cluster Leader Changed', required: [] }),
                    z
                      .object({
                        user: z
                          .object({ id: z.string(), email: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'User who triggered the action',
                            required: ['id', 'email'],
                          }),
                        from: z.string(),
                        to: z.string(),
                      })
                      .openapi({
                        title: 'Postgres Connection Pool Changed',
                        required: ['from', 'to'],
                      }),
                    z
                      .object({
                        user: z
                          .object({ id: z.string(), email: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'User who triggered the action',
                            required: ['id', 'email'],
                          }),
                        enabled: z.boolean(),
                      })
                      .openapi({
                        title: 'Postgres Connection Pool Enabled Changed',
                        required: ['enabled'],
                      }),
                    z
                      .object({
                        user: z
                          .object({ id: z.string(), email: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'User who triggered the action',
                            required: ['id', 'email'],
                          }),
                      })
                      .openapi({ title: 'Postgres Created', required: [] }),
                    z
                      .object({
                        user: z
                          .object({ id: z.string(), email: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'User who triggered the action',
                            required: ['id', 'email'],
                          }),
                        fromDiskSize: z.int(),
                        toDiskSize: z.int(),
                      })
                      .openapi({
                        title: 'Postgres Disk Size Changed',
                        required: ['fromDiskSize', 'toDiskSize'],
                      }),
                    z
                      .object({ fromStatus: z.string(), toStatus: z.string() })
                      .openapi({
                        title: 'Postgres HA Status Changed',
                        required: ['fromStatus', 'toStatus'],
                      }),
                    z
                      .object({ fromReplicas: z.int(), toReplicas: z.int() })
                      .openapi({
                        title: 'Postgres Read Replicas Changed',
                        required: ['fromReplicas', 'toReplicas'],
                      }),
                    z
                      .object({
                        user: z
                          .object({ id: z.string(), email: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'User who triggered the action',
                            required: ['id', 'email'],
                          }),
                      })
                      .openapi({ title: 'Postgres Restarted', required: [] }),
                    z.object({}).openapi({ title: 'Postgres Unavailable' }),
                    z
                      .object({ fromVersion: z.string(), toVersion: z.string() })
                      .openapi({
                        title: 'Postgres Upgrade Failed',
                        required: ['fromVersion', 'toVersion'],
                      }),
                    z
                      .object({
                        user: z
                          .object({ id: z.string(), email: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'User who triggered the action',
                            required: ['id', 'email'],
                          }),
                        fromVersion: z.string(),
                        toVersion: z.string(),
                      })
                      .openapi({
                        title: 'Postgres Upgrade Started',
                        required: ['fromVersion', 'toVersion'],
                      }),
                    z
                      .object({ fromVersion: z.string(), toVersion: z.string() })
                      .openapi({
                        title: 'Postgres Upgrade Succeeded',
                        required: ['fromVersion', 'toVersion'],
                      }),
                    z.object({}).openapi({ title: 'Postgres PITR Checkpoint Started' }),
                    z.object({}).openapi({ title: 'Postgres PITR Checkpoint Failed' }),
                    z.object({}).openapi({ title: 'Postgres PITR Checkpoint Completed' }),
                    z.object({}).openapi({ title: 'Postgres Read Replica Stale' }),
                  ])
                  .openapi({ title: 'Postgres Event Details' }),
                z
                  .xor([
                    z.object({}).openapi({ title: 'Key Value Available' }),
                    z
                      .object({ reason: z.string(), message: z.string() })
                      .openapi({
                        title: 'Key Value Config Restart',
                        required: ['reason', 'message'],
                      }),
                    z.object({}).openapi({ title: 'Key Value Unhealthy' }),
                  ])
                  .openapi({ title: 'Key Value Event Details' }),
              ]),
            })
            .openapi({ required: ['id', 'timestamp', 'serviceId', 'type', 'details'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getLogsRoute = createRoute({
  method: 'get',
  path: '/logs',
  tags: ['Logs'],
  summary: 'List logs',
  description:
    'List logs matching the provided filters. Logs are paginated by start and end timestamps.\nThere are more logs to fetch if `hasMore` is true in the response. Provide the `nextStartTime`\nand `nextEndTime` timestamps as the `startTime` and `endTime` query parameters to fetch the next page of logs.\n\nYou can query for logs across multiple resources, but all resources must be in the same region and belong to the same owner.\n',
  operationId: 'list-logs',
  request: {
    query: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'query',
            description: 'The ID of the workspace to return logs for',
            schema: { type: 'string' },
            required: true,
          },
        }),
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      direction: z
        .enum(['forward', 'backward'])
        .default('backward')
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            required: false,
            description:
              'The direction to query logs for. Backward will return most recent logs first.\nForward will start with the oldest logs in the time range.\n',
            schema: { default: 'backward', type: 'string', enum: ['forward', 'backward'] },
          },
        }),
      resource: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            required: true,
            description:
              'Filter logs by their resource. A resource is the id of a server, cronjob, job, postgres, redis, workflow, or sandbox group.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      instance: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            description:
              'Filter logs by the instance they were emitted from. An instance is the id of a specific running server.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      host: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their host. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      statusCode: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'statusCode',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their status code. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      method: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'method',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their requests method. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      task: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'task',
            in: 'query',
            required: false,
            description: 'Filter logs by their task(s)',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      taskRun: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'taskRun',
            in: 'query',
            required: false,
            description: 'Filter logs by their task run id(s)',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      sandbox: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sandbox',
            in: 'query',
            required: false,
            description: 'Filter logs by sandbox ID.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      level: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'level',
            in: 'query',
            required: false,
            description:
              'Filter logs by their severity level. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description:
              'Filter logs by their type. Types include `app` for application logs, `request` for request logs, and `build` for build logs. You can find the full set of types available for a query by using the `GET /logs/values` endpoint.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      text: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            required: false,
            description:
              'Filter by the text of the logs. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      path: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their path. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: Logs200ResponseResponse,
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getLogsSubscribeRoute = createRoute({
  method: 'get',
  path: '/logs/subscribe',
  tags: ['Logs'],
  summary: 'Subscribe to new logs',
  description:
    'Open a websocket connection to subscribe to logs matching the provided filters. Logs are streamed in real-time as they are generated.\n\nYou can query for logs across multiple resources, but all resources must be in the same region and belong to the same owner.\n',
  operationId: 'subscribe-logs',
  request: {
    query: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'query',
            description: 'The ID of the workspace to return logs for',
            schema: { type: 'string' },
            required: true,
          },
        }),
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      direction: z
        .enum(['forward', 'backward'])
        .default('backward')
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            required: false,
            description:
              'The direction to query logs for. Backward will return most recent logs first.\nForward will start with the oldest logs in the time range.\n',
            schema: { default: 'backward', type: 'string', enum: ['forward', 'backward'] },
          },
        }),
      resource: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            required: true,
            description:
              'Filter logs by their resource. A resource is the id of a server, cronjob, job, postgres, redis, workflow, or sandbox group.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      instance: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            description:
              'Filter logs by the instance they were emitted from. An instance is the id of a specific running server.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      host: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their host. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      statusCode: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'statusCode',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their status code. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      method: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'method',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their requests method. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      task: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'task',
            in: 'query',
            required: false,
            description: 'Filter logs by their task(s)',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      taskRun: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'taskRun',
            in: 'query',
            required: false,
            description: 'Filter logs by their task run id(s)',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      sandbox: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sandbox',
            in: 'query',
            required: false,
            description: 'Filter logs by sandbox ID.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      level: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'level',
            in: 'query',
            required: false,
            description:
              'Filter logs by their severity level. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description:
              'Filter logs by their type. Types include `app` for application logs, `request` for request logs, and `build` for build logs. You can find the full set of types available for a query by using the `GET /logs/values` endpoint.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      text: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            required: false,
            description:
              'Filter by the text of the logs. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      path: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their path. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    101: {
      description:
        'The connection has been upgraded to a websocket. The server will send log messages as they are generated in the format defined below.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().openapi({ description: 'A unique ID of the log entry' }),
              message: z.string().openapi({ description: 'The message of the log entry' }),
              timestamp: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The timestamp of the log entry' }),
              labels: z.array(
                z
                  .object({
                    name: z
                      .enum([
                        'resource',
                        'instance',
                        'host',
                        'statusCode',
                        'method',
                        'level',
                        'workflowService',
                        'workflowVeresion',
                        'task',
                        'taskRun',
                        'sandbox',
                        'type',
                        'text',
                        'path',
                        'blocked',
                      ])
                      .openapi({ description: 'The name of the log label' }),
                    value: z.string().openapi({ description: 'The value of the log label' }),
                  })
                  .openapi({ description: 'A log label', required: ['name', 'value'] }),
              ),
            })
            .openapi({
              description: 'A log entry with metadata',
              required: ['id', 'message', 'timestamp', 'labels'],
            }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getLogsValuesRoute = createRoute({
  method: 'get',
  path: '/logs/values',
  tags: ['Logs'],
  summary: 'List log label values',
  description: 'List all values for a given log label in the logs matching the provided filters.',
  operationId: 'list-logs-values',
  request: {
    query: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'query',
            description: 'The ID of the workspace to return log label values for',
            schema: { type: 'string' },
            required: true,
          },
        }),
      label: z
        .enum(['instance', 'host', 'statusCode', 'method', 'level', 'type'])
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            required: true,
            description: 'The label to query logs for',
            schema: {
              type: 'string',
              enum: ['instance', 'host', 'statusCode', 'method', 'level', 'type'],
            },
          },
        }),
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      direction: z
        .enum(['forward', 'backward'])
        .default('backward')
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            required: false,
            description:
              'The direction to query logs for. Backward will return most recent logs first.\nForward will start with the oldest logs in the time range.\n',
            schema: { default: 'backward', type: 'string', enum: ['forward', 'backward'] },
          },
        }),
      resource: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            required: true,
            description:
              'Filter logs by their resource. A resource is the id of a server, cronjob, job, postgres, redis, workflow, or sandbox group.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      instance: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            description:
              'Filter logs by the instance they were emitted from. An instance is the id of a specific running server.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      host: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their host. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      statusCode: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'statusCode',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their status code. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      method: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'method',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their requests method. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      task: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'task',
            in: 'query',
            required: false,
            description: 'Filter logs by their task(s)',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      taskRun: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'taskRun',
            in: 'query',
            required: false,
            description: 'Filter logs by their task run id(s)',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      sandbox: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sandbox',
            in: 'query',
            required: false,
            description: 'Filter logs by sandbox ID.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      level: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'level',
            in: 'query',
            required: false,
            description:
              'Filter logs by their severity level. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description:
              'Filter logs by their type. Types include `app` for application logs, `request` for request logs, and `build` for build logs. You can find the full set of types available for a query by using the `GET /logs/values` endpoint.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      text: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            required: false,
            description:
              'Filter by the text of the logs. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      path: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: false,
            description:
              'Filter request logs by their path. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: LogsValues200ResponseResponse,
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getLogsStreamsOwnerOwnerIdRoute = createRoute({
  method: 'get',
  path: '/logs/streams/owner/{ownerId}',
  tags: ['Logs'],
  summary: 'Retrieve log stream',
  description: 'Returns log stream information for the specified workspace.',
  operationId: 'get-owner-log-stream',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'path',
            description: 'The ID of the workspace to return log stream information for',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Owner log stream setting',
      content: {
        'application/json': {
          schema: z
            .object({
              ownerId: z.string().exactOptional().openapi({ description: 'The ID of the owner.' }),
              endpoint: z
                .string()
                .exactOptional()
                .openapi({ description: 'The endpoint to stream logs to.' }),
              preview: z
                .enum(['send', 'drop'])
                .exactOptional()
                .openapi({ description: 'Whether to send logs or drop them.' }),
            })
            .openapi({ description: 'Owner log stream settings', required: [] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putLogsStreamsOwnerOwnerIdRoute = createRoute({
  method: 'put',
  path: '/logs/streams/owner/{ownerId}',
  tags: ['Logs'],
  summary: 'Update log stream',
  description:
    'Updates log stream information for the specified workspace. All logs for resources owned by this workspace will be sent to this log stream unless overridden by individual resources.',
  operationId: 'update-owner-log-stream',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'path',
            description: 'The ID of the workspace to update log stream information for',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpoint: z
                .string()
                .exactOptional()
                .openapi({ description: 'The endpoint to stream logs to.' }),
              token: z
                .string()
                .exactOptional()
                .openapi({ description: 'The optional token to authenticate the log stream.' }),
              preview: z
                .enum(['send', 'drop'])
                .openapi({ description: 'Whether to send logs or drop them.' }),
            })
            .openapi({ required: ['preview'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Owner log stream setting',
      content: {
        'application/json': {
          schema: z
            .object({
              ownerId: z.string().exactOptional().openapi({ description: 'The ID of the owner.' }),
              endpoint: z
                .string()
                .exactOptional()
                .openapi({ description: 'The endpoint to stream logs to.' }),
              preview: z
                .enum(['send', 'drop'])
                .exactOptional()
                .openapi({ description: 'Whether to send logs or drop them.' }),
            })
            .openapi({ description: 'Owner log stream settings', required: [] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteLogsStreamsOwnerOwnerIdRoute = createRoute({
  method: 'delete',
  path: '/logs/streams/owner/{ownerId}',
  tags: ['Logs'],
  summary: 'Delete log stream',
  description: 'Removes the log stream for the specified workspace.',
  operationId: 'delete-owner-log-stream',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'path',
            description: 'The ID of the workspace to delete the log stream for',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Log stream setting deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getLogsStreamsResourceRoute = createRoute({
  method: 'get',
  path: '/logs/streams/resource',
  tags: ['Logs'],
  summary: 'List log stream overrides',
  description:
    "Lists log stream overrides for the provided workspace that match the provided filters. These overrides take precedence over the workspace's default log stream.",
  operationId: 'list-resource-log-streams',
  request: {
    query: z.object({
      ownerId: OwnerIdParamParamsSchema,
      logStreamId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'logStreamId',
            in: 'query',
            required: false,
            description: 'Filter log streams by their id.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      resourceId: ResourceIdParamParamsSchema,
      setting: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum(['send', 'drop']).openapi({ description: 'Whether to send logs or drop them.' }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'setting',
            in: 'query',
            required: false,
            description: 'Filter log streams by their setting.',
            schema: {
              type: 'array',
              items: {
                type: 'string',
                description: 'Whether to send logs or drop them.',
                enum: ['send', 'drop'],
              },
            },
          },
        }),
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Resource log stream override',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                resourceId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The ID of the resource.' }),
                endpoint: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The endpoint to stream logs to. Must be present if setting is send. Cannot be present if setting is drop.',
                  }),
                setting: z
                  .enum(['send', 'drop'])
                  .exactOptional()
                  .openapi({ description: 'Whether to send logs or drop them.' }),
              })
              .openapi({ description: 'Resource log stream overrides', required: [] }),
          ),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getLogsStreamsResourceResourceIdRoute = createRoute({
  method: 'get',
  path: '/logs/streams/resource/{resourceId}',
  tags: ['Logs'],
  summary: 'Retrieve log stream override',
  description:
    "Returns log stream override information for the specified resource. A log stream override takes precedence over a workspace's default log stream.",
  operationId: 'get-resource-log-stream',
  request: {
    params: z.object({
      resourceId: z
        .string()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'path',
            description:
              'The ID of the resource (server, cron job, postgres, or redis) to return log stream override information for',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Resource log stream override',
      content: {
        'application/json': {
          schema: z
            .object({
              resourceId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the resource.' }),
              endpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The endpoint to stream logs to. Must be present if setting is send. Cannot be present if setting is drop.',
                }),
              setting: z
                .enum(['send', 'drop'])
                .exactOptional()
                .openapi({ description: 'Whether to send logs or drop them.' }),
            })
            .openapi({ description: 'Resource log stream overrides', required: [] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putLogsStreamsResourceResourceIdRoute = createRoute({
  method: 'put',
  path: '/logs/streams/resource/{resourceId}',
  tags: ['Logs'],
  summary: 'Update log stream override',
  description:
    "Updates log stream override information for the specified resource. A log stream override takes precedence over a workspace's default log stream.",
  operationId: 'update-resource-log-stream',
  request: {
    params: z.object({
      resourceId: z
        .string()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'path',
            description:
              'The ID of the resource (server, cron job, postgres, or redis) to update log stream override information for',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpoint: z
                .string()
                .exactOptional()
                .openapi({ description: 'The endpoint to stream logs to.' }),
              token: z
                .string()
                .exactOptional()
                .openapi({ description: 'The optional token to authenticate the log stream.' }),
              setting: z
                .enum(['send', 'drop'])
                .openapi({ description: 'Whether to send logs or drop them.' }),
            })
            .openapi({ required: ['setting'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Resource log stream override',
      content: {
        'application/json': {
          schema: z
            .object({
              resourceId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the resource.' }),
              endpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The endpoint to stream logs to. Must be present if setting is send. Cannot be present if setting is drop.',
                }),
              setting: z
                .enum(['send', 'drop'])
                .exactOptional()
                .openapi({ description: 'Whether to send logs or drop them.' }),
            })
            .openapi({ description: 'Resource log stream overrides', required: [] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteLogsStreamsResourceResourceIdRoute = createRoute({
  method: 'delete',
  path: '/logs/streams/resource/{resourceId}',
  tags: ['Logs'],
  summary: 'Delete log stream override',
  description:
    "Removes the log stream override for the specified resource. After deletion, the resource will use the workspace's default log stream setting.",
  operationId: 'delete-resource-log-stream',
  request: {
    params: z.object({
      resourceId: z
        .string()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'path',
            description:
              'The ID of the resource (server, cron job, postgres, or redis) whose log streams should be returned',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Log stream setting deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getMetricsStreamOwnerIdRoute = createRoute({
  method: 'get',
  path: '/metrics-stream/{ownerId}',
  tags: ['Metrics'],
  summary: 'Retrieve metrics stream',
  description: 'Returns metrics stream information for the specified workspace.',
  operationId: 'getOwnerMetricsStream',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to return metrics stream information for',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The metrics stream integration for the owner',
      content: {
        'application/json': {
          schema: z
            .object({
              ownerId: z.string().openapi({ description: 'The ID of the owner' }),
              provider: z
                .enum([
                  'BETTER_STACK',
                  'GRAFANA',
                  'DATADOG',
                  'NEW_RELIC',
                  'HONEYCOMB',
                  'SIGNOZ',
                  'GROUNDCOVER',
                  'LOGFIRE',
                  'CUSTOM',
                ])
                .openapi({ description: 'Provider to send metrics to' }),
              url: z.string().openapi({ description: 'The endpoint URL to stream metrics to' }),
            })
            .openapi({ required: ['ownerId', 'provider', 'url'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    404: { description: 'metrics stream not found' },
    500: _500InternalServerErrorResponse,
  },
})

export const putMetricsStreamOwnerIdRoute = createRoute({
  method: 'put',
  path: '/metrics-stream/{ownerId}',
  tags: ['Metrics'],
  summary: 'Create or update metrics stream',
  description: 'Creates or updates the metrics stream for the specified workspace.',
  operationId: 'upsertOwnerMetricsStream',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to return metrics stream information for',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider: z
                .enum([
                  'BETTER_STACK',
                  'GRAFANA',
                  'DATADOG',
                  'NEW_RELIC',
                  'HONEYCOMB',
                  'SIGNOZ',
                  'GROUNDCOVER',
                  'LOGFIRE',
                  'CUSTOM',
                ])
                .exactOptional()
                .openapi({ description: 'Provider to send metrics to' }),
              url: z
                .string()
                .exactOptional()
                .openapi({ description: 'The endpoint URL to stream metrics to' }),
              token: z
                .string()
                .exactOptional()
                .openapi({ description: 'Authentication token for the metrics stream' }),
            })
            .openapi({
              description: 'Input for creating or updating a metrics stream',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'metrics stream successfully updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ownerId: z.string().openapi({ description: 'The ID of the owner' }),
              provider: z
                .enum([
                  'BETTER_STACK',
                  'GRAFANA',
                  'DATADOG',
                  'NEW_RELIC',
                  'HONEYCOMB',
                  'SIGNOZ',
                  'GROUNDCOVER',
                  'LOGFIRE',
                  'CUSTOM',
                ])
                .openapi({ description: 'Provider to send metrics to' }),
              url: z.string().openapi({ description: 'The endpoint URL to stream metrics to' }),
            })
            .openapi({ required: ['ownerId', 'provider', 'url'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteMetricsStreamOwnerIdRoute = createRoute({
  method: 'delete',
  path: '/metrics-stream/{ownerId}',
  tags: ['Metrics'],
  summary: 'Delete metrics stream',
  description: 'Deletes the metrics stream for the specified workspace.',
  operationId: 'deleteOwnerMetricsStream',
  request: {
    params: z.object({
      ownerId: z
        .string()
        .openapi({
          param: {
            name: 'ownerId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to return metrics stream information for',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'metrics stream integration deleted successfully' },
    400: _400BadRequestResponse,
    404: { description: 'metrics stream not found' },
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsCpuRoute = createRoute({
  method: 'get',
  path: '/metrics/cpu',
  tags: ['Metrics'],
  summary: 'Get CPU usage',
  description: 'Get CPU usage for one or more resources.\n',
  operationId: 'get-cpu',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources can be service ids, Postgres ids, or Redis ids',
            schema: { type: 'string', example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      instance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            description:
              'Instance ID to query. When multiple instance ID query params are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx-yyyy' },
          },
          example: 'srv-xxxxx-yyyy',
        }),
      aggregationMethod: z
        .enum(['AVG', 'MAX', 'MIN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'aggregationMethod',
            in: 'query',
            required: false,
            description: 'The aggregation method to apply to multiple time series',
            schema: { type: 'string', enum: ['AVG', 'MAX', 'MIN'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsCpuLimitRoute = createRoute({
  method: 'get',
  path: '/metrics/cpu-limit',
  tags: ['Metrics'],
  summary: 'Get CPU limit',
  description: 'Get the CPU limit for one or more resources.\n',
  operationId: 'get-cpu-limit',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources can be service ids, Postgres ids, or Redis ids',
            schema: { type: 'string', example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      instance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            description:
              'Instance ID to query. When multiple instance ID query params are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx-yyyy' },
          },
          example: 'srv-xxxxx-yyyy',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsCpuTargetRoute = createRoute({
  method: 'get',
  path: '/metrics/cpu-target',
  tags: ['Metrics'],
  summary: 'Get CPU target',
  description: 'Get CPU target for one or more resources.\n',
  operationId: 'get-cpu-target',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources can be service ids, Postgres ids, or Redis ids',
            schema: { type: 'string', example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      instance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            description:
              'Instance ID to query. When multiple instance ID query params are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx-yyyy' },
          },
          example: 'srv-xxxxx-yyyy',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsMemoryRoute = createRoute({
  method: 'get',
  path: '/metrics/memory',
  tags: ['Metrics'],
  summary: 'Get memory usage',
  description: 'Get memory usage for one or more resources.\n',
  operationId: 'get-memory',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources can be service ids, Postgres ids, or Redis ids',
            schema: { type: 'string', example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      instance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            description:
              'Instance ID to query. When multiple instance ID query params are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx-yyyy' },
          },
          example: 'srv-xxxxx-yyyy',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsMemoryLimitRoute = createRoute({
  method: 'get',
  path: '/metrics/memory-limit',
  tags: ['Metrics'],
  summary: 'Get memory limit',
  description: 'Get the memory limit for one or more resources.\n',
  operationId: 'get-memory-limit',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources can be service ids, Postgres ids, or Redis ids',
            schema: { type: 'string', example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      instance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            description:
              'Instance ID to query. When multiple instance ID query params are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx-yyyy' },
          },
          example: 'srv-xxxxx-yyyy',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsMemoryTargetRoute = createRoute({
  method: 'get',
  path: '/metrics/memory-target',
  tags: ['Metrics'],
  summary: 'Get memory target',
  description: 'Get memory target for one or more resources.\n',
  operationId: 'get-memory-target',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources can be service ids, Postgres ids, or Redis ids',
            schema: { type: 'string', example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      instance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            description:
              'Instance ID to query. When multiple instance ID query params are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx-yyyy' },
          },
          example: 'srv-xxxxx-yyyy',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsHttpRequestsRoute = createRoute({
  method: 'get',
  path: '/metrics/http-requests',
  tags: ['Metrics'],
  summary: 'Get HTTP request count',
  description: 'Get the HTTP request count for one or more resources.\n',
  operationId: 'get-http-requests',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Service ID to query. When multiple service ids are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            description:
              'The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together',
            schema: { type: 'string', example: 'example.com' },
          },
          example: 'example.com',
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: false,
            description:
              'The paths of HTTP requests to filter to. When multiple path query params are provided, they are ORed together',
            schema: { type: 'string', example: '/graphql' },
          },
          example: '/graphql',
        }),
      aggregateBy: z
        .enum(['statusCode', 'host'])
        .exactOptional()
        .openapi({
          param: {
            name: 'aggregateBy',
            in: 'query',
            required: false,
            description: 'The field to aggregate by',
            schema: { type: 'string', enum: ['statusCode', 'host'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsHttpLatencyRoute = createRoute({
  method: 'get',
  path: '/metrics/http-latency',
  tags: ['Metrics'],
  summary: 'Get HTTP latency',
  description: 'Get HTTP latency metrics for one or more resources.\n',
  operationId: 'get-http-latency',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Service ID to query. When multiple service ids are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            description:
              'The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together',
            schema: { type: 'string', example: 'example.com' },
          },
          example: 'example.com',
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: false,
            description:
              'The paths of HTTP requests to filter to. When multiple path query params are provided, they are ORed together',
            schema: { type: 'string', example: '/graphql' },
          },
          example: '/graphql',
        }),
      quantile: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'quantile',
            in: 'query',
            required: false,
            description:
              'The quantile of latencies to fetch. When multiple quantile query params are provided, they are ORed together',
            schema: { type: 'number', format: 'float', example: 0.99 },
          },
          example: 0.99,
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsBandwidthRoute = createRoute({
  method: 'get',
  path: '/metrics/bandwidth',
  tags: ['Metrics'],
  summary: 'Get bandwidth usage',
  description: 'Get bandwidth usage for one or more resources.\n',
  operationId: 'get-bandwidth',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Service ID to query. When multiple service ids are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsBandwidthSourcesRoute = createRoute({
  method: 'get',
  path: '/metrics/bandwidth-sources',
  tags: ['Metrics'],
  summary: 'Get bandwidth usage breakdown by traffic source',
  description:
    'Get bandwidth usage for one or more resources broken down by traffic source (HTTP, WebSocket, NAT, PrivateLink).\n\nReturns hourly data points with traffic source breakdown. Traffic source data is available from March 9, 2025 onwards.\nQueries for earlier dates will return a 400 Bad Request error.\n',
  operationId: 'get-bandwidth-sources',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Service ID to query. When multiple service ids are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response with traffic source breakdown',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      labels: z
                        .object({
                          resource: z.string().exactOptional().openapi({ example: 'srv-abc123' }),
                          trafficSource: z
                            .enum(['total', 'http', 'websocket', 'nat', 'privatelink'])
                            .exactOptional()
                            .openapi({ example: 'http' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      values: z
                        .array(
                          z
                            .object({
                              timestamp: z.int().exactOptional().openapi({ example: 1709856000 }),
                              value: z.number().exactOptional().openapi({ example: 100 }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          example: {
            data: [
              {
                labels: { resource: 'srv-abc123', trafficSource: 'total' },
                values: [
                  { timestamp: 1709856000, value: 125.5 },
                  { timestamp: 1709859600, value: 98.2 },
                ],
              },
              {
                labels: { resource: 'srv-abc123', trafficSource: 'http' },
                values: [
                  { timestamp: 1709856000, value: 100 },
                  { timestamp: 1709859600, value: 75.8 },
                ],
              },
              {
                labels: { resource: 'srv-abc123', trafficSource: 'websocket' },
                values: [
                  { timestamp: 1709856000, value: 25.5 },
                  { timestamp: 1709859600, value: 22.4 },
                ],
              },
            ],
          },
        },
      },
    },
    400: {
      description:
        "Bad request, such as a time range that predates traffic source\ndata availability. The error body's optional `code` field\nidentifies specific failures that clients can handle\nmachine-readably.\n\nError codes:\n- `too_many_resources`: the query requests more resources than\n  the breakdown supports (maximum 30)\n",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'bandwidth sources data is only available after 2025-03-09' },
        },
      },
    },
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsDiskUsageRoute = createRoute({
  method: 'get',
  path: '/metrics/disk-usage',
  tags: ['Metrics'],
  summary: 'Get disk usage',
  description: 'Get persistent disk usage for one or more resources.\n',
  operationId: 'get-disk-usage',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources can be service ids, Postgres ids, or Redis ids',
            schema: { type: 'string', example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsDiskCapacityRoute = createRoute({
  method: 'get',
  path: '/metrics/disk-capacity',
  tags: ['Metrics'],
  summary: 'Get disk capacity',
  description: 'Get persistent disk capacity for one or more resources.\n',
  operationId: 'get-disk-capacity',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources can be service ids, Postgres ids, or Redis ids',
            schema: { type: 'string', example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsInstanceCountRoute = createRoute({
  method: 'get',
  path: '/metrics/instance-count',
  tags: ['Metrics'],
  summary: 'Get instance count',
  description: 'Get the instance count for one or more resources.\n',
  operationId: 'get-instance-count',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources can be service ids, Postgres ids, or Redis ids',
            schema: { type: 'string', example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx,dpg-xxxxx,red-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsActiveConnectionsRoute = createRoute({
  method: 'get',
  path: '/metrics/active-connections',
  tags: ['Metrics'],
  summary: 'Get active connection count',
  description:
    'Get the number of active connections for one or more Postgres databases or Redis instances.\n',
  operationId: 'get-active-connections',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Resource ID to query. When multiple resource query params are provided, they are ORed together. Resources Postgres ids or Redis ids',
            schema: { type: 'string', example: 'dpg-xxxxx,red-xxxxx' },
            required: false,
          },
          example: 'dpg-xxxxx,red-xxxxx',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsReplicationLagRoute = createRoute({
  method: 'get',
  path: '/metrics/replication-lag',
  tags: ['Metrics'],
  summary: 'Get replica lag',
  description: 'Get seconds of replica lag of a Postgres replica.\n',
  operationId: 'get-replication-lag',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Postgres ID to query. When multiple resource query params are provided, they are ORed together',
            schema: { type: 'string', example: 'dpg-xxxxx' },
            required: false,
          },
          example: 'dpg-xxxxx',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsFiltersApplicationRoute = createRoute({
  method: 'get',
  path: '/metrics/filters/application',
  tags: ['Metrics'],
  summary: 'List queryable instance values',
  description: 'List instance values to filter by for one or more resources.\n',
  operationId: 'list-application-filter-values',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Service ID to query. When multiple service ids are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  filter: z.literal('instance').exactOptional(),
                  values: z
                    .array(z.string().openapi({ example: 'srv-xxxxx-yyyy' }))
                    .exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              description: 'A collection of filter values for application metrics',
              required: ['items'],
            }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsFiltersHttpRoute = createRoute({
  method: 'get',
  path: '/metrics/filters/http',
  tags: ['Metrics'],
  summary: 'List queryable status codes and host values',
  description: 'List status codes and host values to filter by for one or more resources.\n',
  operationId: 'list-http-filter-values',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Service ID to query. When multiple service ids are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            description:
              'The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together',
            schema: { type: 'string', example: 'example.com' },
          },
          example: 'example.com',
        }),
      statusCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'statusCode',
            in: 'query',
            required: false,
            description:
              'The status codes of HTTP requests to filter to. When multiple status code query params are provided, they are ORed together',
            schema: { type: 'string', example: '200' },
          },
          example: '200',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  filter: z.enum(['host', 'statusCode']).exactOptional(),
                  values: z
                    .array(z.string().openapi({ example: 'api.example.com' }))
                    .exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              description: 'A collection of filter values for HTTP metrics',
              required: ['items'],
            }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsFiltersPathRoute = createRoute({
  method: 'get',
  path: '/metrics/filters/path',
  tags: ['Metrics'],
  summary: 'List queryable paths',
  description:
    'The path suggestions are based on the most recent 5000 log lines as filtered by the provided filters',
  operationId: 'list-path-filter-values',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Service ID to query. When multiple service ids are provided, they are ORed together',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            deprecated: true,
            description: 'This parameter is deprecated. Please use `resource` instead',
            schema: { type: 'string', example: 'srv-xxxxx' },
            required: false,
          },
          example: 'srv-xxxxx',
        }),
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            description:
              'The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together',
            schema: { type: 'string', example: 'example.com' },
          },
          example: 'example.com',
        }),
      statusCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'statusCode',
            in: 'query',
            required: false,
            description:
              'The status codes of HTTP requests to filter to. When multiple status code query params are provided, they are ORed together',
            schema: { type: 'string', example: '200' },
          },
          example: '200',
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: false,
            description:
              'The paths of HTTP requests to filter to. When multiple path query params are provided, they are ORed together',
            schema: { type: 'string', example: '/graphql' },
          },
          example: '/graphql',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ example: '/user/*' }))
            .openapi({
              description: 'A collection of suggested paths to filter by',
              required: ['items'],
            }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsTaskRunsQueuedRoute = createRoute({
  method: 'get',
  path: '/metrics/task-runs-queued',
  tags: ['Metrics'],
  summary: 'Get task runs queued count',
  description: 'Get the total number of task runs queued for one or more tasks.\n',
  operationId: 'get-task-runs-queued',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Task ID to query. When multiple task IDs are provided, they are ORed together',
            schema: { type: 'string', example: 'tsk-xxxxx' },
            required: false,
          },
          example: 'tsk-xxxxx',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getMetricsTaskRunsCompletedRoute = createRoute({
  method: 'get',
  path: '/metrics/task-runs-completed',
  tags: ['Metrics'],
  summary: 'Get task runs completed count',
  description:
    'Get the total number of task runs completed for one or more tasks. Optionally filter by state (succeeded/failed) or aggregate by state.\n',
  operationId: 'get-task-runs-completed',
  request: {
    query: z.object({
      startTime: StartTimeParamParamsSchema,
      endTime: EndTimeParamParamsSchema,
      resolutionSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(30),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolutionSeconds',
            in: 'query',
            schema: { type: 'number', minimum: 30, example: 60, default: 60 },
            required: false,
            description: 'The resolution of the returned data',
          },
          example: 60,
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            in: 'query',
            description:
              'Task ID to query. When multiple task IDs are provided, they are ORed together',
            schema: { type: 'string', example: 'tsk-xxxxx' },
            required: false,
          },
          example: 'tsk-xxxxx',
        }),
      state: z
        .enum(['succeeded', 'failed'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            description:
              'The state of task runs to filter to. When multiple state query params are provided, they are ORed together',
            schema: { type: 'string', enum: ['succeeded', 'failed'] },
          },
        }),
      aggregateBy: z
        .literal('state')
        .exactOptional()
        .openapi({
          param: {
            name: 'aggregateBy',
            in: 'query',
            required: false,
            description: 'The field to aggregate by',
            schema: { type: 'string', enum: ['state'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  labels: z
                    .array(
                      z
                        .object({
                          field: z.string().openapi({ example: 'service' }),
                          value: z.string().openapi({ example: 'srv-xxxxx' }),
                        })
                        .openapi({
                          description: 'A time series datapoint label',
                          required: ['field', 'value'],
                        }),
                    )
                    .openapi({ description: 'List of labels describing the time series' }),
                  values: z
                    .array(
                      z
                        .object({
                          timestamp: z.iso
                            .datetime({ offset: true })
                            .openapi({ example: '2021-06-17T08:15:30Z' }),
                          value: z.number().openapi({ example: 1 }),
                        })
                        .openapi({
                          description: 'A time series datapoint value',
                          required: ['timestamp', 'value', 'unit'],
                        }),
                    )
                    .openapi({ description: 'The values of the time series' }),
                  unit: z.string().openapi({ example: 'GB' }),
                })
                .openapi({
                  description: 'A time series data point',
                  required: ['labels', 'values', 'unit'],
                }),
            )
            .openapi({ description: 'A collection of time series', required: ['items'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getKeyValueRoute = createRoute({
  method: 'get',
  path: '/key-value',
  tags: ['Key Value'],
  summary: 'List Key Value instances',
  description:
    'List Key Value instances matching the provided filters. If no filters are provided, all Key Value instances are returned.\n',
  operationId: 'list-key-value',
  request: {
    query: z.object({
      name: NameParamParamsSchema,
      region: RegionParamParamsSchema,
      createdBefore: CreatedBeforeParamParamsSchema,
      createdAfter: CreatedAfterParamParamsSchema,
      updatedBefore: UpdatedBeforeParamParamsSchema,
      updatedAfter: UpdatedAfterParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
      environmentId: EnvironmentIdParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(KeyValueWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postKeyValueRoute = createRoute({
  method: 'post',
  path: '/key-value',
  tags: ['Key Value'],
  summary: 'Create Key Value instance',
  description: 'Create a new Key Value instance.\n',
  operationId: 'create-key-value',
  request: {
    body: { content: { 'application/json': { schema: KeyValuePOSTInputSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: KeyValueDetailSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getKeyValueRedisIdRoute = createRoute({
  method: 'get',
  path: '/key-value/{redisId}',
  tags: ['Key Value'],
  summary: 'Retrieve Key Value instance',
  description: 'Retrieve a Key Value instance by ID.\n',
  operationId: 'retrieve-key-value',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: KeyValueDetailSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteKeyValueRedisIdRoute = createRoute({
  method: 'delete',
  path: '/key-value/{redisId}',
  tags: ['Key Value'],
  summary: 'Delete Key Value instance',
  description: 'Delete a Key Value instance by ID.\n',
  operationId: 'delete-key-value',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Key Value instance deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchKeyValueRedisIdRoute = createRoute({
  method: 'patch',
  path: '/key-value/{redisId}',
  tags: ['Key Value'],
  summary: 'Update Key Value instance',
  description:
    'Update a Key Value instance by ID. Note that changing your plan, max memory policy, or persistence mode will restart your Key Value instance.\n',
  operationId: 'update-key-value',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: KeyValuePATCHInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated',
      content: { 'application/json': { schema: KeyValueDetailSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getKeyValueRedisIdConnectionInfoRoute = createRoute({
  method: 'get',
  path: '/key-value/{redisId}/connection-info',
  tags: ['Key Value'],
  summary: 'Retrieve Key Value connection info',
  description:
    'Retrieve connection info for a Key Value instance by ID. Connection info includes sensitive information.\n',
  operationId: 'retrieve-key-value-connection-info',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: KeyValueConnectionInfoSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postKeyValueRedisIdSuspendRoute = createRoute({
  method: 'post',
  path: '/key-value/{redisId}/suspend',
  tags: ['Key Value'],
  summary: 'Suspend Key Value instance',
  description: 'Suspend a Key Value instance by ID.\n',
  operationId: 'suspend-key-value',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Service suspended successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postKeyValueRedisIdResumeRoute = createRoute({
  method: 'post',
  path: '/key-value/{redisId}/resume',
  tags: ['Key Value'],
  summary: 'Resume Key Value instance',
  description: 'Resume a Key Value instance by ID.\n',
  operationId: 'resume-key-value',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Service resumed successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getRedisRoute = createRoute({
  method: 'get',
  path: '/redis',
  tags: ['Redis (Deprecated)'],
  summary: 'List Redis instances',
  description:
    'List Redis instances matching the provided filters. If no filters are provided, all Redis instances are returned.\nThis API is deprecated in favor of the Key Value API.\n',
  operationId: 'list-redis',
  request: {
    query: z.object({
      name: NameParamParamsSchema,
      region: RegionParamParamsSchema,
      createdBefore: CreatedBeforeParamParamsSchema,
      createdAfter: CreatedAfterParamParamsSchema,
      updatedBefore: UpdatedBeforeParamParamsSchema,
      updatedAfter: UpdatedAfterParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
      environmentId: EnvironmentIdParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RedisWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
  deprecated: true,
})

export const postRedisRoute = createRoute({
  method: 'post',
  path: '/redis',
  tags: ['Redis (Deprecated)'],
  summary: 'Create Redis instance',
  description:
    'Create a new Redis instance. This API is deprecated in favor of the Key Value API.\n',
  operationId: 'create-redis',
  request: {
    body: { content: { 'application/json': { schema: RedisPOSTInputSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: RedisDetailSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
  deprecated: true,
})

export const getRedisRedisIdRoute = createRoute({
  method: 'get',
  path: '/redis/{redisId}',
  tags: ['Redis (Deprecated)'],
  summary: 'Retrieve Redis instance',
  description:
    'Retrieve a Redis instance by ID. This API is deprecated in favor of the Key Value API.\n',
  operationId: 'retrieve-redis',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RedisDetailSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
  deprecated: true,
})

export const deleteRedisRedisIdRoute = createRoute({
  method: 'delete',
  path: '/redis/{redisId}',
  tags: ['Redis (Deprecated)'],
  summary: 'Delete Redis instance',
  description:
    'Delete a Redis instance by ID. This API is deprecated in favor of the Key Value API.\n',
  operationId: 'delete-redis',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Redis instance deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
  deprecated: true,
})

export const patchRedisRedisIdRoute = createRoute({
  method: 'patch',
  path: '/redis/{redisId}',
  tags: ['Redis (Deprecated)'],
  summary: 'Update Redis instance',
  description:
    'Update a Redis instance by ID. This API is deprecated in favor of the Key Value API.\n',
  operationId: 'update-redis',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: RedisPATCHInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: RedisDetailSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
  deprecated: true,
})

export const getRedisRedisIdConnectionInfoRoute = createRoute({
  method: 'get',
  path: '/redis/{redisId}/connection-info',
  tags: ['Redis (Deprecated)'],
  summary: 'Retrieve Redis connection info',
  description:
    'Retrieve connection info for a Redis instance by ID. Connection info includes sensitive information.\nThis API is deprecated in favor of the Key Value API.\n',
  operationId: 'retrieve-redis-connection-info',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RedisConnectionInfoSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
  deprecated: true,
})

export const postRedisRedisIdSuspendRoute = createRoute({
  method: 'post',
  path: '/redis/{redisId}/suspend',
  tags: ['Redis (Deprecated)'],
  summary: 'Suspend Redis instance',
  description:
    'Suspend a Redis instance by ID. This API is deprecated in favor of the Key Value API.\n',
  operationId: 'suspend-redis',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Service suspended successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
  deprecated: true,
})

export const postRedisRedisIdResumeRoute = createRoute({
  method: 'post',
  path: '/redis/{redisId}/resume',
  tags: ['Redis (Deprecated)'],
  summary: 'Resume Redis instance',
  description:
    'Resume a Redis instance by ID. This API is deprecated in favor of the Key Value API.\n',
  operationId: 'resume-redis',
  request: {
    params: z.object({
      redisId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'redisId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Service resumed successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
  deprecated: true,
})

export const getPostgresRoute = createRoute({
  method: 'get',
  path: '/postgres',
  tags: ['Postgres'],
  summary: 'List Postgres instances',
  description:
    'List Postgres instances matching the provided filters. If no filters are provided, all Postgres instances are returned.\n',
  operationId: 'list-postgres',
  request: {
    query: z.object({
      name: NameParamParamsSchema,
      region: RegionParamParamsSchema,
      suspended: SuspendedParamParamsSchema,
      createdBefore: CreatedBeforeParamParamsSchema,
      createdAfter: CreatedAfterParamParamsSchema,
      updatedBefore: UpdatedBeforeParamParamsSchema,
      updatedAfter: UpdatedAfterParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
      environmentId: EnvironmentIdParamParamsSchema,
      includeReplicas: IncludeReplicasParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(PostgresWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postPostgresRoute = createRoute({
  method: 'post',
  path: '/postgres',
  tags: ['Postgres'],
  summary: 'Create Postgres instance',
  description: 'Create a new Postgres instance.\n',
  operationId: 'create-postgres',
  request: {
    body: { content: { 'application/json': { schema: PostgresPOSTInputSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: PostgresDetailSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getPostgresPostgresIdRoute = createRoute({
  method: 'get',
  path: '/postgres/{postgresId}',
  tags: ['Postgres'],
  summary: 'Retrieve Postgres instance',
  description: 'Retrieve a Postgres instance by ID.\n',
  operationId: 'retrieve-postgres',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostgresDetailSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deletePostgresPostgresIdRoute = createRoute({
  method: 'delete',
  path: '/postgres/{postgresId}',
  tags: ['Postgres'],
  summary: 'Delete Postgres instance',
  description:
    'Delete a Postgres instance by ID. This operation is irreversible, and\nall data will be lost.\n',
  operationId: 'delete-postgres',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Postgres instance deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchPostgresPostgresIdRoute = createRoute({
  method: 'patch',
  path: '/postgres/{postgresId}',
  tags: ['Postgres'],
  summary: 'Update Postgres instance',
  description: 'Update a Postgres instance by ID.\n',
  operationId: 'update-postgres',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostgresPATCHInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated',
      content: { 'application/json': { schema: PostgresDetailSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    409: _409ConflictResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getPostgresPostgresIdConnectionInfoRoute = createRoute({
  method: 'get',
  path: '/postgres/{postgresId}/connection-info',
  tags: ['Postgres'],
  summary: 'Retrieve Postgres connection info',
  description:
    'Retrieve connection info for a Postgres instance by ID. Connection info includes sensitive information.\n',
  operationId: 'retrieve-postgres-connection-info',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostgresConnectionInfoSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getPostgresPostgresIdRecoveryRoute = createRoute({
  method: 'get',
  path: '/postgres/{postgresId}/recovery',
  tags: ['Postgres'],
  summary: 'Retrieve point-in-time recovery status',
  description:
    'Retrieve information on the availability of Postgres point-in-time recovery for a Postgres instance by ID.\n',
  operationId: 'retrieve-postgres-recovery-info',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              recoveryStatus: z
                .enum(['AVAILABLE', 'BACKUP_NOT_READY', 'NOT_AVAILABLE'])
                .openapi({ description: 'Availability of point-in-time recovery.' }),
              startsAt: z.iso.datetime({ offset: true }).exactOptional(),
            })
            .openapi({ required: ['recoveryStatus'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postPostgresPostgresIdRecoveryRoute = createRoute({
  method: 'post',
  path: '/postgres/{postgresId}/recovery',
  tags: ['Postgres'],
  summary: 'Trigger point-in-time recovery',
  description:
    'Trigger [point-in-time recovery](https://render.com/docs/postgresql-backups) on the Postgres instance with the provided ID.\n',
  operationId: 'recover-postgres',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              restoreName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the new database.' }),
              restoreTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The point in time to restore the database to. See `/recovery-info` for restore availability',
                }),
              datadogApiKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Datadog API key to use for monitoring the new database. Defaults to the API key of the original database. Use an empty string to prevent copying of the API key to the new database.',
                }),
              datadogSite: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Datadog region code to use for monitoring the new database. Defaults to the region code of the original database. Use an empty string to prevent copying of the region code to the new database.',
                }),
              plan: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The plan to use for the new database. Defaults to the same plan as the original database. Cannot be a lower tier plan than the original database.',
                }),
              environmentId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The environment to create the new database in. Defaults to the environment of the original database.',
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
      description: 'Recovery initiated',
      content: { 'application/json': { schema: PostgresDetailSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postPostgresPostgresIdSuspendRoute = createRoute({
  method: 'post',
  path: '/postgres/{postgresId}/suspend',
  tags: ['Postgres'],
  summary: 'Suspend Postgres instance',
  description: 'Suspend a Postgres instance by ID.\n',
  operationId: 'suspend-postgres',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Service suspended successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postPostgresPostgresIdResumeRoute = createRoute({
  method: 'post',
  path: '/postgres/{postgresId}/resume',
  tags: ['Postgres'],
  summary: 'Resume Postgres instance',
  description: 'Resume a Postgres instance by ID.\n',
  operationId: 'resume-postgres',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Service resumed successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postPostgresPostgresIdRestartRoute = createRoute({
  method: 'post',
  path: '/postgres/{postgresId}/restart',
  tags: ['Postgres'],
  summary: 'Restart Postgres instance',
  description: 'Restart a Postgres instance by ID.\n',
  operationId: 'restart-postgres',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Service restarted successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postPostgresPostgresIdFailoverRoute = createRoute({
  method: 'post',
  path: '/postgres/{postgresId}/failover',
  tags: ['Postgres'],
  summary: 'Failover Postgres instance',
  description:
    'Failover a [highly available Postgres](https://render.com/docs/postgresql-high-availability) instance.\n',
  operationId: 'failover-postgres',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Service failed over successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getPostgresPostgresIdExportRoute = createRoute({
  method: 'get',
  path: '/postgres/{postgresId}/export',
  tags: ['Postgres'],
  summary: 'List Postgres exports',
  description:
    'List [exports](https://render.com/docs/postgresql-backups#logical-backups) for a Postgres instance by ID. Returns a URL to download the export.\n',
  operationId: 'list-postgres-export',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.string(),
                createdAt: z.iso.datetime({ offset: true }),
                url: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'URL to download the Postgres export' }),
              })
              .openapi({ required: ['id', 'createdAt'] }),
          ),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postPostgresPostgresIdExportRoute = createRoute({
  method: 'post',
  path: '/postgres/{postgresId}/export',
  tags: ['Postgres'],
  summary: 'Create Postgres export',
  description:
    'Create an [export](https://render.com/docs/postgresql-backups#logical-backups) of a Postgres instance by ID.\n',
  operationId: 'create-postgres-export',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Export started successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getPostgresPostgresIdCredentialsRoute = createRoute({
  method: 'get',
  path: '/postgres/{postgresId}/credentials',
  tags: ['Postgres'],
  summary: 'List PostgreSQL Users',
  description: 'List PostgreSQL users for the Render Postgres instance with the provided ID.\n',
  operationId: 'list-postgres-users',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                username: z.string().exactOptional(),
                default: z.boolean().exactOptional(),
                createdAt: z.string().exactOptional(),
                openConnections: z.int().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postPostgresPostgresIdCredentialsRoute = createRoute({
  method: 'post',
  path: '/postgres/{postgresId}/credentials',
  tags: ['Postgres'],
  summary: 'Create PostgreSQL User',
  description:
    'Create a new PostgreSQL user for the Render Postgres instance with the provided ID. This becomes the database\'s new "default" user.\n',
  operationId: 'create-postgres-user',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ username: z.string().openapi({ description: 'Name of the new user.' }) })
            .openapi({ required: ['username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'PostgreSQL user created successfully' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deletePostgresPostgresIdCredentialsUsernameRoute = createRoute({
  method: 'delete',
  path: '/postgres/{postgresId}/credentials/{username}',
  tags: ['Postgres'],
  summary: 'Delete PostgreSQL User',
  description: 'Delete a PostgreSQL user from the Render Postgres instance with the provided ID.\n',
  operationId: 'delete-postgres-user',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'PostgreSQL user deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getPostgresPostgresIdQueryProcessesRoute = createRoute({
  method: 'get',
  path: '/postgres/{postgresId}/query/processes',
  tags: ['Postgres'],
  summary: 'List live queries',
  description:
    'List currently running queries (from `pg_stat_activity`) on a Postgres instance by ID.\n',
  operationId: 'list-postgres-processes',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              processes: z.array(
                z
                  .object({
                    pid: z.int().exactOptional(),
                    databaseName: z.string().exactOptional(),
                    username: z.string().exactOptional(),
                    applicationName: z.string().exactOptional(),
                    clientAddr: z.string().exactOptional(),
                    backendStart: z.iso.datetime({ offset: true }).exactOptional(),
                    queryStart: z.iso.datetime({ offset: true }).exactOptional(),
                    state: z.string().exactOptional(),
                    waitEvent: z.string().exactOptional(),
                    waitEventType: z.string().exactOptional(),
                    query: z.string().exactOptional(),
                    duration: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Duration of the query, in seconds.' }),
                    isLeader: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Whether this process is running against the primary instance of a highly available database.',
                      }),
                  })
                  .openapi({
                    description: 'A single live process from pg_stat_activity.',
                    required: [],
                  }),
              ),
            })
            .openapi({ required: ['processes'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getPostgresPostgresIdQueryTopQueriesRoute = createRoute({
  method: 'get',
  path: '/postgres/{postgresId}/query/top-queries',
  tags: ['Postgres'],
  summary: 'List top queries',
  description:
    'List the top 50 queries by total execution time (from `pg_stat_statements`) on a Postgres instance by ID.\n',
  operationId: 'list-postgres-top-queries',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              topQueries: z.array(
                z
                  .object({
                    queryId: z.string().exactOptional(),
                    query: z.string().exactOptional(),
                    calls: z.int().exactOptional(),
                    totalTimeMs: z.number().exactOptional(),
                    minTimeMs: z.number().exactOptional(),
                    maxTimeMs: z.number().exactOptional(),
                    meanTimeMs: z.number().exactOptional(),
                    stddevTimeMs: z.number().exactOptional(),
                    rows: z.int().exactOptional(),
                    sharedBlocksHit: z.int().exactOptional(),
                    sharedBlocksRead: z.int().exactOptional(),
                    sharedBlocksDirtied: z.int().exactOptional(),
                    sharedBlocksWritten: z.int().exactOptional(),
                    localBlocksHit: z.int().exactOptional(),
                    localBlocksRead: z.int().exactOptional(),
                    localBlocksDirtied: z.int().exactOptional(),
                    localBlocksWritten: z.int().exactOptional(),
                    tempBlocksRead: z.int().exactOptional(),
                    tempBlocksWritten: z.int().exactOptional(),
                  })
                  .openapi({
                    description: 'A single query from pg_stat_statements.',
                    required: [],
                  }),
              ),
            })
            .openapi({ required: ['topQueries'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getPostgresPostgresIdQuerySizesRoute = createRoute({
  method: 'get',
  path: '/postgres/{postgresId}/query/sizes',
  tags: ['Postgres'],
  summary: 'List database, table, and index sizes',
  description: 'List the sizes of databases, tables, and indexes on a Postgres instance by ID.\n',
  operationId: 'list-postgres-sizes',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              sizes: z.array(
                z
                  .object({
                    Database: z.string().exactOptional(),
                    Schema: z.string().exactOptional(),
                    Table: z.string().exactOptional(),
                    Index: z.string().exactOptional(),
                    Bytes: z.int().exactOptional(),
                  })
                  .openapi({
                    description: 'The size of an index, table, or database.',
                    required: [],
                  }),
              ),
            })
            .openapi({ required: ['sizes'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getPostgresPostgresIdQueryTableScansRoute = createRoute({
  method: 'get',
  path: '/postgres/{postgresId}/query/table-scans',
  tags: ['Postgres'],
  summary: 'List table scans',
  description:
    'List the number of sequential scans performed against each table on a Postgres instance by ID.\n',
  operationId: 'list-postgres-table-scans',
  request: {
    params: z.object({
      postgresId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postgresId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              tableScans: z.array(
                z
                  .object({
                    Database: z.string().exactOptional(),
                    Schema: z.string().exactOptional(),
                    Table: z.string().exactOptional(),
                    Scans: z.int().exactOptional(),
                  })
                  .openapi({
                    description: 'The number of sequential scans performed against a table.',
                    required: [],
                  }),
              ),
            })
            .openapi({ required: ['tableScans'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  tags: ['Projects & Environments'],
  summary: 'List projects',
  description:
    'List projects matching the provided filters. If no filters are provided, all projects are returned.\n',
  operationId: 'list-projects',
  request: {
    query: z.object({
      name: NameParamParamsSchema,
      createdBefore: CreatedBeforeParamParamsSchema,
      createdAfter: CreatedAfterParamParamsSchema,
      updatedBefore: UpdatedBeforeParamParamsSchema,
      updatedAfter: UpdatedAfterParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(ProjectWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  tags: ['Projects & Environments'],
  summary: 'Create project',
  description: 'Create a new project.\n',
  operationId: 'create-project',
  request: {
    body: { content: { 'application/json': { schema: ProjectPOSTInputSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: ProjectSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}',
  tags: ['Projects & Environments'],
  summary: 'Retrieve Project',
  description: 'Retrieve the project with the provided ID.\n',
  operationId: 'retrieve-project',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'projectId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProjectSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}',
  tags: ['Projects & Environments'],
  summary: 'Delete project',
  description:
    "Delete the project with the provided ID.\n\nRequires _all_ of the project's environments to be empty (i.e., they must contain no services or other resources). Otherwise, deletion fails with a `409` response.\n\nTo delete a non-empty project, do one of the following:\n- First move or delete all contained services and other resources.\n- Delete the project in the [Render Dashboard](https://dashboard.render.com).\n",
  operationId: 'delete-project',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'projectId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Project deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchProjectsProjectIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{projectId}',
  tags: ['Projects & Environments'],
  summary: 'Update project',
  description:
    'Update the details of a project.\n\nTo update the details of a particular _environment_ in the project, instead use the [Update environment](https://api-docs.render.com/reference/update-environment) endpoint.\n',
  operationId: 'update-project',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'projectId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ProjectPATCHInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: ProjectSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/environments',
  tags: ['Projects & Environments'],
  summary: 'List environments',
  description:
    "List a particular project's environments matching the provided filters. If no filters are provided, all environments are returned.\n",
  operationId: 'list-environments',
  request: {
    query: z.object({
      name: NameParamParamsSchema,
      projectId: ProjectIdParamParamsSchema,
      createdBefore: CreatedBeforeParamParamsSchema,
      createdAfter: CreatedAfterParamParamsSchema,
      updatedBefore: UpdatedBeforeParamParamsSchema,
      updatedAfter: UpdatedAfterParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
      environmentId: EnvironmentIdParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EnvironmentWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/environments',
  tags: ['Projects & Environments'],
  summary: 'Create environment',
  description: 'Create a new environment belonging to the project with the provided ID.\n',
  operationId: 'create-environment',
  request: {
    body: {
      content: { 'application/json': { schema: EnvironmentPOSTInputSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: EnvironmentSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/environments/{environmentId}',
  tags: ['Projects & Environments'],
  summary: 'Retrieve environment',
  description: 'Retrieve the environment with the provided ID.',
  operationId: 'retrieve-environment',
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnvironmentSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'delete',
  path: '/environments/{environmentId}',
  tags: ['Projects & Environments'],
  summary: 'Delete environment',
  description:
    'Delete the environment with the provided ID.\n\nRequires the environment to be empty (i.e., it must contain no services or other resources). Otherwise, deletion fails with a `409` response.\n\nTo delete a non-empty environment, do one of the following:\n- First move or delete all contained services and other resources.\n- Delete the environment in the [Render Dashboard](https://dashboard.render.com).\n',
  operationId: 'delete-environment',
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Environment deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'patch',
  path: '/environments/{environmentId}',
  tags: ['Projects & Environments'],
  summary: 'Update environment',
  description: 'Update the details of the environment with the provided ID.',
  operationId: 'update-environment',
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnvironmentPATCHInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: EnvironmentSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postEnvironmentsEnvironmentIdResourcesRoute = createRoute({
  method: 'post',
  path: '/environments/{environmentId}/resources',
  tags: ['Projects & Environments'],
  summary: 'Add resources to environment',
  description: 'Add resources to the environment with the provided ID.\n',
  operationId: 'add-resources-to-environment',
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnvironmentResourcesPOSTInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvironmentSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteEnvironmentsEnvironmentIdResourcesRoute = createRoute({
  method: 'delete',
  path: '/environments/{environmentId}/resources',
  tags: ['Projects & Environments'],
  summary: 'Remove resources from environment',
  description: 'Remove resources from the environment with the provided ID.\n',
  operationId: 'remove-resources-from-environment',
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      resourceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .openapi({
                description:
                  'The ID of an env group, a service, a Postgres database, or a Redis instance',
              }),
          ),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'resourceIds',
            required: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                description:
                  'The ID of an env group, a service, a Postgres database, or a Redis instance',
              },
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Resources removed from environment' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getEnvGroupsRoute = createRoute({
  method: 'get',
  path: '/env-groups',
  tags: ['Environment Groups'],
  summary: 'List environment groups',
  description:
    'List environment groups matching the provided filters. If no filters are provided, all environment groups are returned.\n',
  operationId: 'list-env-groups',
  request: {
    query: z.object({
      name: NameParamParamsSchema,
      createdBefore: CreatedBeforeParamParamsSchema,
      createdAfter: CreatedAfterParamParamsSchema,
      updatedBefore: UpdatedBeforeParamParamsSchema,
      updatedAfter: UpdatedAfterParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
      environmentId: EnvironmentIdParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EnvGroupMetaSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postEnvGroupsRoute = createRoute({
  method: 'post',
  path: '/env-groups',
  tags: ['Environment Groups'],
  summary: 'Create environment group',
  description: 'Create a new environment group.\n',
  operationId: 'create-env-group',
  request: {
    body: { content: { 'application/json': { schema: EnvGroupPOSTInputSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: EnvGroupSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getEnvGroupsEnvGroupIdRoute = createRoute({
  method: 'get',
  path: '/env-groups/{envGroupId}',
  tags: ['Environment Groups'],
  summary: 'Retrieve environment group',
  description: 'Retrieve an environment group by ID.\n',
  operationId: 'retrieve-env-group',
  request: { params: z.object({ envGroupId: EnvGroupIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnvGroupSchema } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteEnvGroupsEnvGroupIdRoute = createRoute({
  method: 'delete',
  path: '/env-groups/{envGroupId}',
  tags: ['Environment Groups'],
  summary: 'Delete environment group',
  description:
    'Delete the environment group with the provided ID, including all environment variables and secret files it contains.',
  operationId: 'delete-env-group',
  request: {
    params: z.object({
      envGroupId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envGroupId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'environment group deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchEnvGroupsEnvGroupIdRoute = createRoute({
  method: 'patch',
  path: '/env-groups/{envGroupId}',
  tags: ['Environment Groups'],
  summary: 'Update environment group',
  description: 'Update the attributes of an environment group.',
  operationId: 'update-env-group',
  request: {
    params: z.object({
      envGroupId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envGroupId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EnvGroupPATCHInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: EnvGroupSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postEnvGroupsEnvGroupIdServicesServiceIdRoute = createRoute({
  method: 'post',
  path: '/env-groups/{envGroupId}/services/{serviceId}',
  tags: ['Environment Groups'],
  summary: 'Link service',
  description:
    'Link a particular service to a particular environment group.\n\nThe linked service will have access to the environment variables and secret files in the group.\n',
  operationId: 'link-service-to-env-group',
  request: {
    params: z.object({
      envGroupId: EnvGroupIdParamParamsSchema,
      serviceId: ServiceIdParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvGroupSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteEnvGroupsEnvGroupIdServicesServiceIdRoute = createRoute({
  method: 'delete',
  path: '/env-groups/{envGroupId}/services/{serviceId}',
  tags: ['Environment Groups'],
  summary: 'Unlink service',
  description:
    'Unlink a particular service from a particular environment group.\n\nThe service will lose access to the environment variables and secret files in the group.\n',
  operationId: 'unlink-service-from-env-group',
  request: {
    params: z.object({
      envGroupId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envGroupId', required: true, schema: { type: 'string' } },
        }),
      serviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'service unlinked from environment group' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute = createRoute({
  method: 'get',
  path: '/env-groups/{envGroupId}/env-vars/{envVarKey}',
  tags: ['Environment Groups'],
  summary: 'Retrieve environment variable',
  description: 'Retrieve a particular environment variable in a particular environment group.\n',
  operationId: 'retrieve-env-group-env-var',
  request: {
    params: z.object({
      envGroupId: EnvGroupIdParamParamsSchema,
      envVarKey: EnvVarKeyParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvVarSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute = createRoute({
  method: 'put',
  path: '/env-groups/{envGroupId}/env-vars/{envVarKey}',
  tags: ['Environment Groups'],
  summary: 'Add or update environment variable',
  description:
    'Add or update a particular environment variable in a particular environment group.\n',
  operationId: 'update-env-group-env-var',
  request: {
    params: z.object({
      envGroupId: EnvGroupIdParamParamsSchema,
      envVarKey: EnvVarKeyParamParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: AddUpdateEnvVarInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvGroupSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute = createRoute({
  method: 'delete',
  path: '/env-groups/{envGroupId}/env-vars/{envVarKey}',
  tags: ['Environment Groups'],
  summary: 'Remove environment variable',
  description: 'Remove a particular environment variable from a particular environment group.\n',
  operationId: 'delete-env-group-env-var',
  request: {
    params: z.object({
      envGroupId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envGroupId', required: true, schema: { type: 'string' } },
        }),
      envVarKey: EnvVarKeyParamParamsSchema,
    }),
  },
  responses: {
    204: { description: 'environment variable removed from environment group' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute = createRoute({
  method: 'get',
  path: '/env-groups/{envGroupId}/secret-files/{envVarKey}',
  tags: ['Environment Groups'],
  summary: 'Retrieve secret file',
  description: 'Retrieve a particular secret file in a particular environment group.\n',
  operationId: 'retrieve-env-group-secret-file',
  request: {
    params: z.object({
      envGroupId: EnvGroupIdParamParamsSchema,
      envVarKey: SecretFileNameParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SecretFileSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute = createRoute({
  method: 'put',
  path: '/env-groups/{envGroupId}/secret-files/{envVarKey}',
  tags: ['Environment Groups'],
  summary: 'Add or update secret file',
  description: 'Add or update a particular secret file in an particular environment group.\n',
  operationId: 'update-env-group-secret-file',
  request: {
    params: z.object({
      envGroupId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envGroupId', required: true, schema: { type: 'string' } },
        }),
      envVarKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'envVarKey', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ content: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvGroupSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute = createRoute({
  method: 'delete',
  path: '/env-groups/{envGroupId}/secret-files/{envVarKey}',
  tags: ['Environment Groups'],
  summary: 'Remove secret file',
  description: 'Remove a particular secret file from a particular environment group.\n',
  operationId: 'delete-env-group-secret-file',
  request: {
    params: z.object({
      envGroupId: EnvGroupIdParamParamsSchema,
      envVarKey: SecretFileNameParamParamsSchema,
    }),
  },
  responses: {
    204: { description: 'secret file removed from environment group' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getMaintenanceRoute = createRoute({
  method: 'get',
  path: '/maintenance',
  tags: ['Maintenance'],
  summary: 'List maintenance runs',
  description: 'List scheduled and/or recent maintenance runs for specified resources.\n',
  operationId: 'list-maintenance',
  request: {
    query: z.object({
      resourceId: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z
              .string()
              .openapi({
                description:
                  'The Id of a resource that can undergo maintenance (Id of a service, a Postgres instance, or a Redis instance)',
              }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'query',
            schema: {
              type: 'array',
              items: {
                type: 'string',
                description:
                  'The Id of a resource that can undergo maintenance (Id of a service, a Postgres instance, or a Redis instance)',
              },
            },
            style: 'form',
            explode: false,
            required: false,
          },
        }),
      ownerId: OwnerIdParamParamsSchema,
      state: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'scheduled',
              'in_progress',
              'user_fix_required',
              'cancelled',
              'succeeded',
              'failed',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'scheduled',
                  'in_progress',
                  'user_fix_required',
                  'cancelled',
                  'succeeded',
                  'failed',
                ],
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z
                  .string()
                  .regex(/^mrn-[0-9a-z]{20}$/)
                  .openapi({ example: 'mrn-cph1rs3idesc73a2b2mg' }),
                type: z.string(),
                scheduledAt: z.iso.datetime({ offset: true }),
                pendingMaintenanceBy: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'If present, the maintenance run cannot be scheduled for later than this date-time.',
                  }),
                state: z.enum([
                  'scheduled',
                  'in_progress',
                  'user_fix_required',
                  'cancelled',
                  'succeeded',
                  'failed',
                ]),
                resourceId: z
                  .string()
                  .openapi({
                    description:
                      'The Id of a resource that can undergo maintenance (Id of a service, a Postgres instance, or a Redis instance)',
                  }),
              })
              .openapi({ required: ['id', 'type', 'scheduledAt', 'state', 'resourceId'] }),
          ),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getMaintenanceMaintenanceRunIDRoute = createRoute({
  method: 'get',
  path: '/maintenance/{maintenanceRunID}',
  tags: ['Maintenance'],
  summary: 'Retrieve maintenance run',
  description: 'Retrieve the maintenance run with the provided ID.',
  operationId: 'retrieve-maintenance',
  request: {
    params: z.object({
      maintenanceRunID: z
        .string()
        .regex(/^mrn-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'maintenanceRunID',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              pattern: '^mrn-[0-9a-z]{20}$',
              example: 'mrn-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'mrn-cph1rs3idesc73a2b2mg',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^mrn-[0-9a-z]{20}$/)
                .openapi({ example: 'mrn-cph1rs3idesc73a2b2mg' }),
              type: z.string(),
              scheduledAt: z.iso.datetime({ offset: true }),
              pendingMaintenanceBy: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'If present, the maintenance run cannot be scheduled for later than this date-time.',
                }),
              state: z.enum([
                'scheduled',
                'in_progress',
                'user_fix_required',
                'cancelled',
                'succeeded',
                'failed',
              ]),
              resourceId: z
                .string()
                .openapi({
                  description:
                    'The Id of a resource that can undergo maintenance (Id of a service, a Postgres instance, or a Redis instance)',
                }),
            })
            .openapi({ required: ['id', 'type', 'scheduledAt', 'state', 'resourceId'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchMaintenanceMaintenanceRunIDRoute = createRoute({
  method: 'patch',
  path: '/maintenance/{maintenanceRunID}',
  tags: ['Maintenance'],
  summary: 'Update maintenance run',
  description:
    "Update the maintenance run with the provided ID.\n\nUpdates from this endpoint are asynchronous. To check your update's status, use the [Retrieve maintenance run](https://api-docs.render.com/reference/retrieve-maintenance) endpoint.\n",
  operationId: 'update-maintenance',
  request: {
    params: z.object({
      maintenanceRunID: z
        .string()
        .regex(/^mrn-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'maintenanceRunID',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              pattern: '^mrn-[0-9a-z]{20}$',
              example: 'mrn-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'mrn-cph1rs3idesc73a2b2mg',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              scheduledAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The date-time at which the maintenance is scheduled to start. This must be before the pendingMaintenanceBy date-time.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Maintenance run updated' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postMaintenanceMaintenanceRunIDTriggerRoute = createRoute({
  method: 'post',
  path: '/maintenance/{maintenanceRunID}/trigger',
  tags: ['Maintenance'],
  summary: 'Trigger maintenance run',
  description:
    "Trigger the scheduled maintenance run with the provided ID.\n\nTriggering maintenance is asynchronous. To check whether maintenance has started, use the [Retrieve maintenance run](https://api-docs.render.com/reference/retrieve-maintenance) endpoint.\n\nAs maintenance progresses, the run's `state` will change from `scheduled` to other values, such as `in_progress` and `succeeded`.\n",
  operationId: 'trigger-maintenance',
  request: {
    params: z.object({
      maintenanceRunID: z
        .string()
        .regex(/^mrn-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'maintenanceRunID',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              pattern: '^mrn-[0-9a-z]{20}$',
              example: 'mrn-cph1rs3idesc73a2b2mg',
            },
          },
          example: 'mrn-cph1rs3idesc73a2b2mg',
        }),
    }),
  },
  responses: {
    202: { description: 'Maintenance run triggered' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getBuildSourcesRoute = createRoute({
  method: 'get',
  path: '/build-sources',
  tags: ['Build Sources'],
  summary: 'List build sources',
  description:
    'List build sources matching the provided filters. If `ownerId` is\nomitted, returns build sources across every workspace you can view.\n',
  operationId: 'list-build-sources',
  request: {
    query: z.object({
      name: NameParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'projectId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      includePreviews: IncludePreviewsParamParamsSchema,
      createdBefore: CreatedBeforeParamParamsSchema,
      createdAfter: CreatedAfterParamParamsSchema,
      updatedBefore: UpdatedBeforeParamParamsSchema,
      updatedAfter: UpdatedAfterParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                buildSource: z
                  .object({
                    id: z.string(),
                    name: z.string(),
                    ownerId: z
                      .string()
                      .openapi({
                        description: 'ID of the workspace this build source belongs to.',
                      }),
                    projectId: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'ID of the project this build source is scoped to, if any.',
                      }),
                    git: z
                      .object({
                        branch: z.string().exactOptional(),
                        buildCommand: z.string().exactOptional(),
                        buildFilter: z
                          .object({ paths: z.array(z.string()), ignoredPaths: z.array(z.string()) })
                          .exactOptional()
                          .openapi({
                            description:
                              'Glob patterns matched against files changed by a commit. When set, a commit only triggers a build when at least one changed file matches `paths` and none match `ignoredPaths`. Useful for monorepos where a single repo backs many services.\n',
                            required: ['paths', 'ignoredPaths'],
                          }),
                        dockerContext: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Directory passed to `docker build` as the build context, relative to the repository root. Only valid for the `docker` runtime. Defaults to ".".\n',
                          }),
                        dockerfilePath: z.string().exactOptional(),
                        runtime: z
                          .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'])
                          .openapi({
                            description:
                              'Build runtime for the build source. Static sites are not supported for build sources.\n',
                          }),
                        registryCredentialId: z.string().exactOptional(),
                        region: z
                          .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                          .default('oregon')
                          .exactOptional()
                          .openapi({ description: 'Defaults to "oregon"' }),
                        repoUrl: z.string().exactOptional(),
                        rootDir: z.string().exactOptional(),
                      })
                      .openapi({ required: ['runtime'] })
                      .exactOptional()
                      .openapi({
                        description:
                          'Present when the build source is currently build-based. Mutually exclusive with `image`.\n',
                      }),
                    image: z
                      .object({
                        ownerId: z.string(),
                        registryCredentialId: z.string().exactOptional(),
                        imageUrl: z.string(),
                      })
                      .openapi({ required: ['ownerId', 'imageUrl'] })
                      .exactOptional()
                      .openapi({
                        description:
                          'Present when the build source is currently image-based. Mutually exclusive with `git`.\n',
                      }),
                    createdAt: z.iso.datetime({ offset: true }),
                    updatedAt: z.iso.datetime({ offset: true }),
                    serviceLinks: z
                      .array(
                        z
                          .object({ id: z.string(), name: z.string() })
                          .openapi({ required: ['id', 'name'] }),
                      )
                      .openapi({ description: 'Services currently linked to this build source.' }),
                  })
                  .openapi({
                    required: ['id', 'name', 'ownerId', 'createdAt', 'updatedAt', 'serviceLinks'],
                  }),
                cursor: z.string(),
              })
              .openapi({ required: ['buildSource', 'cursor'] }),
          ),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postBuildSourcesRoute = createRoute({
  method: 'post',
  path: '/build-sources',
  tags: ['Build Sources'],
  summary: 'Create a build source',
  description:
    'Create a build source that can be linked to one or more\nservices in the same workspace.\n\nExactly one of `git` or `image` must be set:\n- `git`: the build source is git-backed. The code is built in\n   the requested `region` (defaults to `oregon`).\n- `image`: the build source is image-backed. It points at an\n  existing image in an external registry; no build is performed.\n\n`envVars`, `secretFiles`, and `envGroupIds` set the build-time\nenvironment and are only valid for `git` sources; the request fails\nif any are provided with `image`.\n',
  operationId: 'create-build-source',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ownerId: z.string(),
              name: z.string(),
              projectId: z.string().exactOptional(),
              git: z
                .object({
                  branch: z.string().exactOptional(),
                  buildCommand: z.string().exactOptional(),
                  buildFilter: z
                    .object({ paths: z.array(z.string()), ignoredPaths: z.array(z.string()) })
                    .exactOptional()
                    .openapi({
                      description:
                        'Glob patterns matched against files changed by a commit. When set, a commit only triggers a build when at least one changed file matches `paths` and none match `ignoredPaths`. Useful for monorepos where a single repo backs many services.\n',
                      required: ['paths', 'ignoredPaths'],
                    }),
                  dockerContext: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Directory passed to `docker build` as the build context, relative to the repository root. Only valid for the `docker` runtime. Defaults to ".".\n',
                    }),
                  dockerfilePath: z.string().exactOptional(),
                  runtime: z
                    .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'])
                    .openapi({
                      description:
                        'Build runtime for the build source. Static sites are not supported for build sources.\n',
                    }),
                  registryCredentialId: z.string().exactOptional(),
                  region: z
                    .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                    .default('oregon')
                    .exactOptional()
                    .openapi({ description: 'Defaults to "oregon"' }),
                  repoUrl: z.string().exactOptional(),
                  rootDir: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['runtime'] }),
              image: z
                .object({
                  ownerId: z.string(),
                  registryCredentialId: z.string().exactOptional(),
                  imageUrl: z.string(),
                })
                .exactOptional()
                .openapi({ required: ['ownerId', 'imageUrl'] }),
              serviceIds: z.array(z.string()).exactOptional(),
              envVars: z
                .array(
                  z.xor([
                    z
                      .object({ key: z.string(), value: z.string() })
                      .openapi({ required: ['key', 'value'] }),
                    z
                      .object({
                        key: z.string(),
                        generateValue: z
                          .boolean()
                          .openapi({
                            description:
                              'If true, Render generates a strong random value for this environment variable on creation. Cannot be combined with `value`.',
                          }),
                      })
                      .openapi({ required: ['key', 'generateValue'] }),
                  ]),
                )
                .exactOptional(),
              secretFiles: z
                .array(
                  z
                    .object({ name: z.string(), content: z.string() })
                    .openapi({ required: ['name', 'content'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Secret files for the build source's build. Only valid for `git` sources.\n",
                }),
              envGroupIds: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'IDs of env groups to link to the build source. Only valid for `git` sources; env groups must belong to the same workspace and must not be scoped to an environment.\n',
                }),
            })
            .openapi({ required: ['ownerId', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              ownerId: z
                .string()
                .openapi({ description: 'ID of the workspace this build source belongs to.' }),
              projectId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of the project this build source is scoped to, if any.',
                }),
              git: z
                .object({
                  branch: z.string().exactOptional(),
                  buildCommand: z.string().exactOptional(),
                  buildFilter: z
                    .object({ paths: z.array(z.string()), ignoredPaths: z.array(z.string()) })
                    .exactOptional()
                    .openapi({
                      description:
                        'Glob patterns matched against files changed by a commit. When set, a commit only triggers a build when at least one changed file matches `paths` and none match `ignoredPaths`. Useful for monorepos where a single repo backs many services.\n',
                      required: ['paths', 'ignoredPaths'],
                    }),
                  dockerContext: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Directory passed to `docker build` as the build context, relative to the repository root. Only valid for the `docker` runtime. Defaults to ".".\n',
                    }),
                  dockerfilePath: z.string().exactOptional(),
                  runtime: z
                    .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'])
                    .openapi({
                      description:
                        'Build runtime for the build source. Static sites are not supported for build sources.\n',
                    }),
                  registryCredentialId: z.string().exactOptional(),
                  region: z
                    .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                    .default('oregon')
                    .exactOptional()
                    .openapi({ description: 'Defaults to "oregon"' }),
                  repoUrl: z.string().exactOptional(),
                  rootDir: z.string().exactOptional(),
                })
                .openapi({ required: ['runtime'] })
                .exactOptional()
                .openapi({
                  description:
                    'Present when the build source is currently build-based. Mutually exclusive with `image`.\n',
                }),
              image: z
                .object({
                  ownerId: z.string(),
                  registryCredentialId: z.string().exactOptional(),
                  imageUrl: z.string(),
                })
                .openapi({ required: ['ownerId', 'imageUrl'] })
                .exactOptional()
                .openapi({
                  description:
                    'Present when the build source is currently image-based. Mutually exclusive with `git`.\n',
                }),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
              serviceLinks: z
                .array(
                  z
                    .object({ id: z.string(), name: z.string() })
                    .openapi({ required: ['id', 'name'] }),
                )
                .openapi({ description: 'Services currently linked to this build source.' }),
            })
            .openapi({
              required: ['id', 'name', 'ownerId', 'createdAt', 'updatedAt', 'serviceLinks'],
            }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getBuildSourcesBuildSourceIdRoute = createRoute({
  method: 'get',
  path: '/build-sources/{buildSourceId}',
  tags: ['Build Sources'],
  summary: 'Retrieve a build source',
  description: 'Retrieve a shared build source by ID\n',
  operationId: 'get-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              ownerId: z
                .string()
                .openapi({ description: 'ID of the workspace this build source belongs to.' }),
              projectId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of the project this build source is scoped to, if any.',
                }),
              git: z
                .object({
                  branch: z.string().exactOptional(),
                  buildCommand: z.string().exactOptional(),
                  buildFilter: z
                    .object({ paths: z.array(z.string()), ignoredPaths: z.array(z.string()) })
                    .exactOptional()
                    .openapi({
                      description:
                        'Glob patterns matched against files changed by a commit. When set, a commit only triggers a build when at least one changed file matches `paths` and none match `ignoredPaths`. Useful for monorepos where a single repo backs many services.\n',
                      required: ['paths', 'ignoredPaths'],
                    }),
                  dockerContext: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Directory passed to `docker build` as the build context, relative to the repository root. Only valid for the `docker` runtime. Defaults to ".".\n',
                    }),
                  dockerfilePath: z.string().exactOptional(),
                  runtime: z
                    .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'])
                    .openapi({
                      description:
                        'Build runtime for the build source. Static sites are not supported for build sources.\n',
                    }),
                  registryCredentialId: z.string().exactOptional(),
                  region: z
                    .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                    .default('oregon')
                    .exactOptional()
                    .openapi({ description: 'Defaults to "oregon"' }),
                  repoUrl: z.string().exactOptional(),
                  rootDir: z.string().exactOptional(),
                })
                .openapi({ required: ['runtime'] })
                .exactOptional()
                .openapi({
                  description:
                    'Present when the build source is currently build-based. Mutually exclusive with `image`.\n',
                }),
              image: z
                .object({
                  ownerId: z.string(),
                  registryCredentialId: z.string().exactOptional(),
                  imageUrl: z.string(),
                })
                .openapi({ required: ['ownerId', 'imageUrl'] })
                .exactOptional()
                .openapi({
                  description:
                    'Present when the build source is currently image-based. Mutually exclusive with `git`.\n',
                }),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
              serviceLinks: z
                .array(
                  z
                    .object({ id: z.string(), name: z.string() })
                    .openapi({ required: ['id', 'name'] }),
                )
                .openapi({ description: 'Services currently linked to this build source.' }),
            })
            .openapi({
              required: ['id', 'name', 'ownerId', 'createdAt', 'updatedAt', 'serviceLinks'],
            }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteBuildSourcesBuildSourceIdRoute = createRoute({
  method: 'delete',
  path: '/build-sources/{buildSourceId}',
  tags: ['Build Sources'],
  summary: 'Delete a build source',
  description: 'Delete the build source with the provided ID.\n',
  operationId: 'delete-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Build source deleted' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const patchBuildSourcesBuildSourceIdRoute = createRoute({
  method: 'patch',
  path: '/build-sources/{buildSourceId}',
  tags: ['Build Sources'],
  summary: 'Update a build source',
  description:
    "Update a shared build source. Each top-level field is a true patch,\nunset fields are left unchanged.\n\nSupplying `git` or `image` can change the build source's\nunderlying identity:\n- `image` on a git-backed build source switches it to image-backed\n- `git` on an image-backed build source switches it to git-backed\n- `git` on a build source that's already git-backed is a pure\n  patch onto the existing config\n",
  operationId: 'update-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              git: z
                .object({
                  branch: z.string().exactOptional(),
                  buildCommand: z.string().exactOptional(),
                  buildFilter: z
                    .object({ paths: z.array(z.string()), ignoredPaths: z.array(z.string()) })
                    .exactOptional()
                    .openapi({
                      description:
                        'Glob patterns matched against files changed by a commit. When set, a commit only triggers a build when at least one changed file matches `paths` and none match `ignoredPaths`. Useful for monorepos where a single repo backs many services.\n',
                      required: ['paths', 'ignoredPaths'],
                    }),
                  dockerContext: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Directory passed to `docker build` as the build context, relative to the repository root. Only valid for the `docker` runtime.\n',
                    }),
                  dockerfilePath: z.string().exactOptional(),
                  runtime: z
                    .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Build runtime for the build source. Static sites are not supported for build sources.\n',
                    }),
                  registryCredentialId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Optional reference to the registry credential for this build. Omit the field to leave the stored credential unchanged; send an empty string to clear it.\n',
                    }),
                  region: z
                    .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Region for the build. Honored only when this PATCH performs an image→build transition; rejected on a pure build patch (the cluster is pinned for an existing build), and must match the prior build region when switching back to build after time as an external image. Defaults to "oregon" for first-time builds.\n',
                    }),
                  repoUrl: z.string().exactOptional(),
                  rootDir: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              image: z
                .object({
                  imageUrl: z.string().exactOptional(),
                  registryCredentialId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Optional reference to the registry credential passed to the image repository to retrieve this image. Omit the field to leave the stored credential unchanged; send an empty string to clear it.\n',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Patch shape for a build source's image identity. Unset fields are left unchanged on the underlying image reference. ownerId is intentionally omitted — a build source's owner is fixed at creation, and changing the image's owner would amount to a different identity.\n",
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
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              ownerId: z
                .string()
                .openapi({ description: 'ID of the workspace this build source belongs to.' }),
              projectId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of the project this build source is scoped to, if any.',
                }),
              git: z
                .object({
                  branch: z.string().exactOptional(),
                  buildCommand: z.string().exactOptional(),
                  buildFilter: z
                    .object({ paths: z.array(z.string()), ignoredPaths: z.array(z.string()) })
                    .exactOptional()
                    .openapi({
                      description:
                        'Glob patterns matched against files changed by a commit. When set, a commit only triggers a build when at least one changed file matches `paths` and none match `ignoredPaths`. Useful for monorepos where a single repo backs many services.\n',
                      required: ['paths', 'ignoredPaths'],
                    }),
                  dockerContext: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Directory passed to `docker build` as the build context, relative to the repository root. Only valid for the `docker` runtime. Defaults to ".".\n',
                    }),
                  dockerfilePath: z.string().exactOptional(),
                  runtime: z
                    .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'])
                    .openapi({
                      description:
                        'Build runtime for the build source. Static sites are not supported for build sources.\n',
                    }),
                  registryCredentialId: z.string().exactOptional(),
                  region: z
                    .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                    .default('oregon')
                    .exactOptional()
                    .openapi({ description: 'Defaults to "oregon"' }),
                  repoUrl: z.string().exactOptional(),
                  rootDir: z.string().exactOptional(),
                })
                .openapi({ required: ['runtime'] })
                .exactOptional()
                .openapi({
                  description:
                    'Present when the build source is currently build-based. Mutually exclusive with `image`.\n',
                }),
              image: z
                .object({
                  ownerId: z.string(),
                  registryCredentialId: z.string().exactOptional(),
                  imageUrl: z.string(),
                })
                .openapi({ required: ['ownerId', 'imageUrl'] })
                .exactOptional()
                .openapi({
                  description:
                    'Present when the build source is currently image-based. Mutually exclusive with `git`.\n',
                }),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
              serviceLinks: z
                .array(
                  z
                    .object({ id: z.string(), name: z.string() })
                    .openapi({ required: ['id', 'name'] }),
                )
                .openapi({ description: 'Services currently linked to this build source.' }),
            })
            .openapi({
              required: ['id', 'name', 'ownerId', 'createdAt', 'updatedAt', 'serviceLinks'],
            }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getBuildSourcesBuildSourceIdBuildsRoute = createRoute({
  method: 'get',
  path: '/build-sources/{buildSourceId}/builds',
  tags: ['Build Sources'],
  summary: 'List builds in a build source',
  description:
    "List builds in a build source, newest first. Pass the last item's\n`cursor` as the `cursor` parameter to fetch the next page.\n",
  operationId: 'list-builds-in-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ cursor: CursorParamParamsSchema, limit: LimitParamParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                build: z
                  .object({
                    id: z.string(),
                    buildSourceId: z.string(),
                    buildRun: z
                      .object({
                        id: z.string(),
                        status: z
                          .enum([
                            'created',
                            'inProgress',
                            'succeeded',
                            'failed',
                            'canceled',
                            'unknown',
                          ])
                          .exactOptional(),
                        buildStartedAt: z.iso.datetime({ offset: true }).exactOptional(),
                        buildFinishedAt: z.iso.datetime({ offset: true }).exactOptional(),
                        runtime: z
                          .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'])
                          .exactOptional(),
                        commitId: z.string().exactOptional(),
                        commitUrl: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        required: ['id'],
                        description:
                          'The Render build run that produced this build. Present when the build source is currently build-based. Mutually exclusive with `image`.\n',
                      }),
                    image: z
                      .object({
                        imageVersionId: z.string().exactOptional(),
                        SHA: z.string().exactOptional(),
                        ref: z.string().exactOptional(),
                        imageUrl: z.string().exactOptional(),
                        registryCredentialId: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Present when the build source is currently image-based. Mutually exclusive with `buildRun`.\n',
                        required: [],
                      }),
                    createdAt: z.iso.datetime({ offset: true }),
                    updatedAt: z.iso.datetime({ offset: true }),
                    assetsDeletedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  })
                  .openapi({ required: ['id', 'buildSourceId', 'createdAt', 'updatedAt'] }),
                cursor: z.string(),
              })
              .openapi({ required: ['build', 'cursor'] }),
          ),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postBuildSourcesBuildSourceIdBuildsRoute = createRoute({
  method: 'post',
  path: '/build-sources/{buildSourceId}/builds',
  tags: ['Build Sources'],
  summary: 'Trigger a build',
  description:
    'Start a new build of the build source at the current HEAD of its\nbranch, even if an up-to-date build already exists. Services linked to\nthe build source with autodeploy enabled are deployed with the result.\n\nUpdating a build source or its build-time environment (env vars,\nsecret files, env groups) with the REST API does not build it. Call\nthis endpoint after those changes to build them.\n\nOnly `git` build sources can be built.\n',
  operationId: 'trigger-build-source-build',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Build started',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              buildSourceId: z.string(),
              buildRun: z
                .object({
                  id: z.string(),
                  status: z
                    .enum(['created', 'inProgress', 'succeeded', 'failed', 'canceled', 'unknown'])
                    .exactOptional(),
                  buildStartedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  buildFinishedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  runtime: z
                    .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'])
                    .exactOptional(),
                  commitId: z.string().exactOptional(),
                  commitUrl: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['id'],
                  description:
                    'The Render build run that produced this build. Present when the build source is currently build-based. Mutually exclusive with `image`.\n',
                }),
              image: z
                .object({
                  imageVersionId: z.string().exactOptional(),
                  SHA: z.string().exactOptional(),
                  ref: z.string().exactOptional(),
                  imageUrl: z.string().exactOptional(),
                  registryCredentialId: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Present when the build source is currently image-based. Mutually exclusive with `buildRun`.\n',
                  required: [],
                }),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
              assetsDeletedAt: z.iso.datetime({ offset: true }).exactOptional(),
            })
            .openapi({ required: ['id', 'buildSourceId', 'createdAt', 'updatedAt'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getBuildSourcesBuildSourceIdBuildsBuildIdRoute = createRoute({
  method: 'get',
  path: '/build-sources/{buildSourceId}/builds/{buildId}',
  tags: ['Build Sources'],
  summary: 'Retrieve a build',
  description: 'Retrieve a build of a build source, including its status.\n',
  operationId: 'retrieve-build-source-build',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      buildId: z
        .string()
        .openapi({
          param: { name: 'buildId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              buildSourceId: z.string(),
              buildRun: z
                .object({
                  id: z.string(),
                  status: z
                    .enum(['created', 'inProgress', 'succeeded', 'failed', 'canceled', 'unknown'])
                    .exactOptional(),
                  buildStartedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  buildFinishedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  runtime: z
                    .enum(['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'])
                    .exactOptional(),
                  commitId: z.string().exactOptional(),
                  commitUrl: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['id'],
                  description:
                    'The Render build run that produced this build. Present when the build source is currently build-based. Mutually exclusive with `image`.\n',
                }),
              image: z
                .object({
                  imageVersionId: z.string().exactOptional(),
                  SHA: z.string().exactOptional(),
                  ref: z.string().exactOptional(),
                  imageUrl: z.string().exactOptional(),
                  registryCredentialId: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Present when the build source is currently image-based. Mutually exclusive with `buildRun`.\n',
                  required: [],
                }),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
              assetsDeletedAt: z.iso.datetime({ offset: true }).exactOptional(),
            })
            .openapi({ required: ['id', 'buildSourceId', 'createdAt', 'updatedAt'] }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getBuildSourcesBuildSourceIdEnvVarsRoute = createRoute({
  method: 'get',
  path: '/build-sources/{buildSourceId}/env-vars',
  tags: ['Build Sources'],
  summary: 'List environment variables',
  description: 'List all environment variables for the build source with the provided ID.\n',
  operationId: 'get-env-vars-for-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ cursor: CursorParamParamsSchema, limit: LimitParamParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(EnvVarWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putBuildSourcesBuildSourceIdEnvVarsRoute = createRoute({
  method: 'put',
  path: '/build-sources/{buildSourceId}/env-vars',
  tags: ['Build Sources'],
  summary: 'Update environment variables',
  description:
    'Replace all environment variables for a build source with the provided list of environment variables.',
  operationId: 'update-env-vars-for-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z.xor([
              z
                .object({ key: z.string(), value: z.string() })
                .openapi({ required: ['key', 'value'] }),
              z
                .object({
                  key: z.string(),
                  generateValue: z
                    .boolean()
                    .openapi({
                      description:
                        'If true, Render generates a strong random value for this environment variable on creation. Cannot be combined with `value`.',
                    }),
                })
                .openapi({ required: ['key', 'generateValue'] }),
            ]),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(EnvVarWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute = createRoute({
  method: 'get',
  path: '/build-sources/{buildSourceId}/env-vars/{envVarKey}',
  tags: ['Build Sources'],
  summary: 'Retrieve environment variable',
  description:
    'Retrieve a particular environment variable for a particular build source.\n\nThis only applies to environment variables set directly on the build source, not to environment variables in a linked environment group.\n',
  operationId: 'retrieve-build-source-env-var',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      envVarKey: EnvVarKeyParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvVarSchema } } },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute = createRoute({
  method: 'put',
  path: '/build-sources/{buildSourceId}/env-vars/{envVarKey}',
  tags: ['Build Sources'],
  summary: 'Add or update environment variable',
  description:
    'Add or update a particular environment variable for a particular build source.\n\nThis only applies to environment variables set directly on the build source, not to environment variables in a linked environment group.\n',
  operationId: 'update-build-source-env-var',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      envVarKey: EnvVarKeyParamParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: AddUpdateEnvVarInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvVarSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute = createRoute({
  method: 'delete',
  path: '/build-sources/{buildSourceId}/env-vars/{envVarKey}',
  tags: ['Build Sources'],
  summary: 'Delete environment variable',
  description:
    'Delete a particular environment variable from a particular build source.\n\nThis only applies to environment variables set directly on the build source, not to environment variables in a linked environment group.\n',
  operationId: 'delete-build-source-env-var',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      envVarKey: EnvVarKeyParamParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Environment variable deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getBuildSourcesBuildSourceIdSecretFilesRoute = createRoute({
  method: 'get',
  path: '/build-sources/{buildSourceId}/secret-files',
  tags: ['Build Sources'],
  summary: 'List secret files',
  description: 'List all secret files for the build source with the provided ID.\n',
  operationId: 'list-secret-files-for-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ cursor: CursorParamParamsSchema, limit: LimitParamParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SecretFileWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putBuildSourcesBuildSourceIdSecretFilesRoute = createRoute({
  method: 'put',
  path: '/build-sources/{buildSourceId}/secret-files',
  tags: ['Build Sources'],
  summary: 'Update secret files',
  description:
    "Replace all secret files for a build source with the provided list of secret files.\n\n**Any of the build source's existing secret files not included in this request will be deleted.**\n\nThis only applies to secret files set directly on the build source, not to secret files in a linked environment group.\n",
  operationId: 'update-secret-files-for-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({ name: z.string(), content: z.string() })
              .openapi({ required: ['name', 'content'] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SecretFileWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute = createRoute({
  method: 'get',
  path: '/build-sources/{buildSourceId}/secret-files/{envVarKey}',
  tags: ['Build Sources'],
  summary: 'Retrieve secret file',
  description:
    'Retrieve a particular secret file for a particular build source.\n\nThis only applies to secret files set directly on the build source, not to secret files in a linked environment group.\n',
  operationId: 'retrieve-build-source-secret-file',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      envVarKey: z
        .string()
        .openapi({
          param: {
            name: 'envVarKey',
            in: 'path',
            required: true,
            description: 'The file name of the secret file',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SecretFileSchema } } },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const putBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute = createRoute({
  method: 'put',
  path: '/build-sources/{buildSourceId}/secret-files/{envVarKey}',
  tags: ['Build Sources'],
  summary: 'Add or update secret file',
  description:
    'Add or update a particular secret file for a particular build source.\n\nThis only applies to secret files set directly on the build source, not to secret files in a linked environment group.\n',
  operationId: 'add-or-update-build-source-secret-file',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      envVarKey: z
        .string()
        .openapi({
          param: {
            name: 'envVarKey',
            in: 'path',
            required: true,
            description: 'The file name of the secret file',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ content: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: SecretFileSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute = createRoute({
  method: 'delete',
  path: '/build-sources/{buildSourceId}/secret-files/{envVarKey}',
  tags: ['Build Sources'],
  summary: 'Delete secret file',
  description:
    'Delete a particular secret file from a particular build source.\n\nThis only applies to secret files set directly on the build source, not to secret files in a linked environment group.\n',
  operationId: 'delete-build-source-secret-file',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      envVarKey: z
        .string()
        .openapi({
          param: {
            name: 'envVarKey',
            in: 'path',
            required: true,
            description: 'The file name of the secret file',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Secret file deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    406: _406NotAcceptableResponse,
    410: _410GoneResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute = createRoute({
  method: 'post',
  path: '/build-sources/{buildSourceId}/env-groups/{envGroupId}',
  tags: ['Build Sources'],
  summary: 'Link environment group',
  description:
    'Link a particular environment group to a particular build source.\n\nThe build source will have access to the environment variables and secret files in the group at build time.\n',
  operationId: 'link-env-group-to-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      envGroupId: EnvGroupIdParamParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvGroupSchema } } },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute = createRoute({
  method: 'delete',
  path: '/build-sources/{buildSourceId}/env-groups/{envGroupId}',
  tags: ['Build Sources'],
  summary: 'Unlink environment group',
  description:
    'Unlink a particular environment group from a particular build source.\n\nThe build source will lose access to the environment variables and secret files in the group.\n',
  operationId: 'unlink-env-group-from-build-source',
  request: {
    params: z.object({
      buildSourceId: z
        .string()
        .openapi({
          param: { name: 'buildSourceId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      envGroupId: EnvGroupIdParamParamsSchema,
    }),
  },
  responses: {
    204: { description: 'environment group unlinked from build source' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'List webhooks',
  description: 'List webhooks',
  operationId: 'list-webhooks',
  request: {
    query: z.object({
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(WebhookWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Create a webhook',
  description: 'Create a new webhook.\n',
  operationId: 'create-webhook',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ownerId: z
                .string()
                .openapi({
                  description:
                    'The ID of the owner (team or personal user) whose resources should be returned',
                }),
              url: z.string(),
              name: z.string(),
              enabled: z.boolean(),
              eventFilter: z
                .array(
                  z.enum([
                    'artifact_fetch_failed',
                    'artifact_source_changed',
                    'autoscaling_config_changed',
                    'autoscaling_ended',
                    'autoscaling_started',
                    'branch_deleted',
                    'build_ended',
                    'build_started',
                    'commit_ignored',
                    'cron_job_run_ended',
                    'cron_job_run_started',
                    'deploy_ended',
                    'deploy_started',
                    'disk_created',
                    'disk_updated',
                    'disk_deleted',
                    'disk_snapshot_restored',
                    'image_pull_failed',
                    'instance_count_changed',
                    'job_run_ended',
                    'maintenance_mode_enabled',
                    'maintenance_mode_uri_updated',
                    'maintenance_ended',
                    'maintenance_started',
                    'pipeline_minutes_exhausted',
                    'plan_changed',
                    'pre_deploy_ended',
                    'pre_deploy_started',
                    'server_available',
                    'server_failed',
                    'server_hardware_failure',
                    'server_restarted',
                    'service_resumed',
                    'service_suspended',
                    'zero_downtime_redeploy_ended',
                    'zero_downtime_redeploy_started',
                    'edge_cache_enabled',
                    'edge_cache_disabled',
                    'edge_cache_purged',
                    'auto_deploy_disabled',
                    'auto_deploy_enabled',
                    'postgres_available',
                    'postgres_backup_completed',
                    'postgres_backup_failed',
                    'postgres_backup_started',
                    'postgres_cluster_leader_changed',
                    'postgres_connection_pool_changed',
                    'postgres_connection_pool_enabled_changed',
                    'postgres_created',
                    'postgres_disk_size_changed',
                    'postgres_disk_autoscaling_enabled_changed',
                    'postgres_ha_status_changed',
                    'postgres_restarted',
                    'postgres_unavailable',
                    'postgres_upgrade_failed',
                    'postgres_upgrade_started',
                    'postgres_upgrade_succeeded',
                    'postgres_restore_failed',
                    'postgres_restore_succeeded',
                    'postgres_read_replicas_changed',
                    'postgres_pitr_checkpoint_started',
                    'postgres_pitr_checkpoint_failed',
                    'postgres_pitr_checkpoint_completed',
                    'postgres_read_replica_stale',
                    'postgres_wal_archive_failed',
                    'key_value_available',
                    'key_value_config_restart',
                    'key_value_unhealthy',
                  ]),
                )
                .openapi({
                  description:
                    'The event types that will trigger the webhook. An empty list means all event types will trigger the webhook.',
                }),
            })
            .openapi({ required: ['ownerId', 'name', 'url', 'enabled', 'eventFilter'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^whk-[0-9a-z]{20}$/)
                .openapi({ example: 'whk-d04m9b1r0fns73ckp94f' }),
              url: z.string(),
              name: z.string(),
              secret: z.string(),
              enabled: z.boolean(),
              eventFilter: z
                .array(
                  z.enum([
                    'artifact_fetch_failed',
                    'artifact_source_changed',
                    'autoscaling_config_changed',
                    'autoscaling_ended',
                    'autoscaling_started',
                    'branch_deleted',
                    'build_ended',
                    'build_started',
                    'commit_ignored',
                    'cron_job_run_ended',
                    'cron_job_run_started',
                    'deploy_ended',
                    'deploy_started',
                    'disk_created',
                    'disk_updated',
                    'disk_deleted',
                    'disk_snapshot_restored',
                    'image_pull_failed',
                    'instance_count_changed',
                    'job_run_ended',
                    'maintenance_mode_enabled',
                    'maintenance_mode_uri_updated',
                    'maintenance_ended',
                    'maintenance_started',
                    'pipeline_minutes_exhausted',
                    'plan_changed',
                    'pre_deploy_ended',
                    'pre_deploy_started',
                    'server_available',
                    'server_failed',
                    'server_hardware_failure',
                    'server_restarted',
                    'service_resumed',
                    'service_suspended',
                    'zero_downtime_redeploy_ended',
                    'zero_downtime_redeploy_started',
                    'edge_cache_enabled',
                    'edge_cache_disabled',
                    'edge_cache_purged',
                    'auto_deploy_disabled',
                    'auto_deploy_enabled',
                    'postgres_available',
                    'postgres_backup_completed',
                    'postgres_backup_failed',
                    'postgres_backup_started',
                    'postgres_cluster_leader_changed',
                    'postgres_connection_pool_changed',
                    'postgres_connection_pool_enabled_changed',
                    'postgres_created',
                    'postgres_disk_size_changed',
                    'postgres_disk_autoscaling_enabled_changed',
                    'postgres_ha_status_changed',
                    'postgres_restarted',
                    'postgres_unavailable',
                    'postgres_upgrade_failed',
                    'postgres_upgrade_started',
                    'postgres_upgrade_succeeded',
                    'postgres_restore_failed',
                    'postgres_restore_succeeded',
                    'postgres_read_replicas_changed',
                    'postgres_pitr_checkpoint_started',
                    'postgres_pitr_checkpoint_failed',
                    'postgres_pitr_checkpoint_completed',
                    'postgres_read_replica_stale',
                    'postgres_wal_archive_failed',
                    'key_value_available',
                    'key_value_config_restart',
                    'key_value_unhealthy',
                  ]),
                )
                .openapi({
                  description:
                    'The event types that will trigger the webhook. An empty list means all event types will trigger the webhook.',
                }),
            })
            .openapi({ required: ['id', 'name', 'url', 'secret', 'enabled', 'eventFilter'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Retrieve a webhook',
  description: 'Retrieve the webhook with the provided ID',
  operationId: 'retrieve-webhook',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .regex(/^whk-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            required: true,
            description: 'Unique identifier for the webhook',
            schema: {
              type: 'string',
              pattern: '^whk-[0-9a-z]{20}$',
              example: 'whk-d04m9b1r0fns73ckp94f',
            },
          },
          example: 'whk-d04m9b1r0fns73ckp94f',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^whk-[0-9a-z]{20}$/)
                .openapi({ example: 'whk-d04m9b1r0fns73ckp94f' }),
              url: z.string(),
              name: z.string(),
              secret: z.string(),
              enabled: z.boolean(),
              eventFilter: z
                .array(
                  z.enum([
                    'artifact_fetch_failed',
                    'artifact_source_changed',
                    'autoscaling_config_changed',
                    'autoscaling_ended',
                    'autoscaling_started',
                    'branch_deleted',
                    'build_ended',
                    'build_started',
                    'commit_ignored',
                    'cron_job_run_ended',
                    'cron_job_run_started',
                    'deploy_ended',
                    'deploy_started',
                    'disk_created',
                    'disk_updated',
                    'disk_deleted',
                    'disk_snapshot_restored',
                    'image_pull_failed',
                    'instance_count_changed',
                    'job_run_ended',
                    'maintenance_mode_enabled',
                    'maintenance_mode_uri_updated',
                    'maintenance_ended',
                    'maintenance_started',
                    'pipeline_minutes_exhausted',
                    'plan_changed',
                    'pre_deploy_ended',
                    'pre_deploy_started',
                    'server_available',
                    'server_failed',
                    'server_hardware_failure',
                    'server_restarted',
                    'service_resumed',
                    'service_suspended',
                    'zero_downtime_redeploy_ended',
                    'zero_downtime_redeploy_started',
                    'edge_cache_enabled',
                    'edge_cache_disabled',
                    'edge_cache_purged',
                    'auto_deploy_disabled',
                    'auto_deploy_enabled',
                    'postgres_available',
                    'postgres_backup_completed',
                    'postgres_backup_failed',
                    'postgres_backup_started',
                    'postgres_cluster_leader_changed',
                    'postgres_connection_pool_changed',
                    'postgres_connection_pool_enabled_changed',
                    'postgres_created',
                    'postgres_disk_size_changed',
                    'postgres_disk_autoscaling_enabled_changed',
                    'postgres_ha_status_changed',
                    'postgres_restarted',
                    'postgres_unavailable',
                    'postgres_upgrade_failed',
                    'postgres_upgrade_started',
                    'postgres_upgrade_succeeded',
                    'postgres_restore_failed',
                    'postgres_restore_succeeded',
                    'postgres_read_replicas_changed',
                    'postgres_pitr_checkpoint_started',
                    'postgres_pitr_checkpoint_failed',
                    'postgres_pitr_checkpoint_completed',
                    'postgres_read_replica_stale',
                    'postgres_wal_archive_failed',
                    'key_value_available',
                    'key_value_config_restart',
                    'key_value_unhealthy',
                  ]),
                )
                .openapi({
                  description:
                    'The event types that will trigger the webhook. An empty list means all event types will trigger the webhook.',
                }),
            })
            .openapi({ required: ['id', 'name', 'url', 'secret', 'enabled', 'eventFilter'] }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Delete a webhook',
  description: 'Delete the webhook with the provided ID.\n',
  operationId: 'delete-webhook',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .regex(/^whk-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            required: true,
            description: 'Unique identifier for the webhook',
            schema: {
              type: 'string',
              pattern: '^whk-[0-9a-z]{20}$',
              example: 'whk-d04m9b1r0fns73ckp94f',
            },
          },
          example: 'whk-d04m9b1r0fns73ckp94f',
        }),
    }),
  },
  responses: {
    204: { description: 'Webhook deleted' },
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchWebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Update a webhook',
  description: 'Update the webhook with the provided ID.\n',
  operationId: 'update-webhook',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .regex(/^whk-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            required: true,
            description: 'Unique identifier for the webhook',
            schema: {
              type: 'string',
              pattern: '^whk-[0-9a-z]{20}$',
              example: 'whk-d04m9b1r0fns73ckp94f',
            },
          },
          example: 'whk-d04m9b1r0fns73ckp94f',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              url: z.string().exactOptional(),
              enabled: z.boolean().exactOptional(),
              eventFilter: z
                .array(
                  z.enum([
                    'artifact_fetch_failed',
                    'artifact_source_changed',
                    'autoscaling_config_changed',
                    'autoscaling_ended',
                    'autoscaling_started',
                    'branch_deleted',
                    'build_ended',
                    'build_started',
                    'commit_ignored',
                    'cron_job_run_ended',
                    'cron_job_run_started',
                    'deploy_ended',
                    'deploy_started',
                    'disk_created',
                    'disk_updated',
                    'disk_deleted',
                    'disk_snapshot_restored',
                    'image_pull_failed',
                    'instance_count_changed',
                    'job_run_ended',
                    'maintenance_mode_enabled',
                    'maintenance_mode_uri_updated',
                    'maintenance_ended',
                    'maintenance_started',
                    'pipeline_minutes_exhausted',
                    'plan_changed',
                    'pre_deploy_ended',
                    'pre_deploy_started',
                    'server_available',
                    'server_failed',
                    'server_hardware_failure',
                    'server_restarted',
                    'service_resumed',
                    'service_suspended',
                    'zero_downtime_redeploy_ended',
                    'zero_downtime_redeploy_started',
                    'edge_cache_enabled',
                    'edge_cache_disabled',
                    'edge_cache_purged',
                    'auto_deploy_disabled',
                    'auto_deploy_enabled',
                    'postgres_available',
                    'postgres_backup_completed',
                    'postgres_backup_failed',
                    'postgres_backup_started',
                    'postgres_cluster_leader_changed',
                    'postgres_connection_pool_changed',
                    'postgres_connection_pool_enabled_changed',
                    'postgres_created',
                    'postgres_disk_size_changed',
                    'postgres_disk_autoscaling_enabled_changed',
                    'postgres_ha_status_changed',
                    'postgres_restarted',
                    'postgres_unavailable',
                    'postgres_upgrade_failed',
                    'postgres_upgrade_started',
                    'postgres_upgrade_succeeded',
                    'postgres_restore_failed',
                    'postgres_restore_succeeded',
                    'postgres_read_replicas_changed',
                    'postgres_pitr_checkpoint_started',
                    'postgres_pitr_checkpoint_failed',
                    'postgres_pitr_checkpoint_completed',
                    'postgres_read_replica_stale',
                    'postgres_wal_archive_failed',
                    'key_value_available',
                    'key_value_config_restart',
                    'key_value_unhealthy',
                  ]),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The event types that will trigger the webhook. An empty list means all event types will trigger the webhook.',
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
      description: 'Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .regex(/^whk-[0-9a-z]{20}$/)
                .openapi({ example: 'whk-d04m9b1r0fns73ckp94f' }),
              url: z.string(),
              name: z.string(),
              secret: z.string(),
              enabled: z.boolean(),
              eventFilter: z
                .array(
                  z.enum([
                    'artifact_fetch_failed',
                    'artifact_source_changed',
                    'autoscaling_config_changed',
                    'autoscaling_ended',
                    'autoscaling_started',
                    'branch_deleted',
                    'build_ended',
                    'build_started',
                    'commit_ignored',
                    'cron_job_run_ended',
                    'cron_job_run_started',
                    'deploy_ended',
                    'deploy_started',
                    'disk_created',
                    'disk_updated',
                    'disk_deleted',
                    'disk_snapshot_restored',
                    'image_pull_failed',
                    'instance_count_changed',
                    'job_run_ended',
                    'maintenance_mode_enabled',
                    'maintenance_mode_uri_updated',
                    'maintenance_ended',
                    'maintenance_started',
                    'pipeline_minutes_exhausted',
                    'plan_changed',
                    'pre_deploy_ended',
                    'pre_deploy_started',
                    'server_available',
                    'server_failed',
                    'server_hardware_failure',
                    'server_restarted',
                    'service_resumed',
                    'service_suspended',
                    'zero_downtime_redeploy_ended',
                    'zero_downtime_redeploy_started',
                    'edge_cache_enabled',
                    'edge_cache_disabled',
                    'edge_cache_purged',
                    'auto_deploy_disabled',
                    'auto_deploy_enabled',
                    'postgres_available',
                    'postgres_backup_completed',
                    'postgres_backup_failed',
                    'postgres_backup_started',
                    'postgres_cluster_leader_changed',
                    'postgres_connection_pool_changed',
                    'postgres_connection_pool_enabled_changed',
                    'postgres_created',
                    'postgres_disk_size_changed',
                    'postgres_disk_autoscaling_enabled_changed',
                    'postgres_ha_status_changed',
                    'postgres_restarted',
                    'postgres_unavailable',
                    'postgres_upgrade_failed',
                    'postgres_upgrade_started',
                    'postgres_upgrade_succeeded',
                    'postgres_restore_failed',
                    'postgres_restore_succeeded',
                    'postgres_read_replicas_changed',
                    'postgres_pitr_checkpoint_started',
                    'postgres_pitr_checkpoint_failed',
                    'postgres_pitr_checkpoint_completed',
                    'postgres_read_replica_stale',
                    'postgres_wal_archive_failed',
                    'key_value_available',
                    'key_value_config_restart',
                    'key_value_unhealthy',
                  ]),
                )
                .openapi({
                  description:
                    'The event types that will trigger the webhook. An empty list means all event types will trigger the webhook.',
                }),
            })
            .openapi({ required: ['id', 'name', 'url', 'secret', 'enabled', 'eventFilter'] }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getWebhooksWebhookIdEventsRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhookId}/events',
  tags: ['Webhooks'],
  summary: 'List webhook events',
  description:
    'Retrieve a list of events that have been sent to this webhook, with optional filtering by timestamp.\n',
  operationId: 'list-webhook-events',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .regex(/^whk-[0-9a-z]{20}$/)
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            required: true,
            description: 'Unique identifier for the webhook',
            schema: {
              type: 'string',
              pattern: '^whk-[0-9a-z]{20}$',
              example: 'whk-d04m9b1r0fns73ckp94f',
            },
          },
          example: 'whk-d04m9b1r0fns73ckp94f',
        }),
    }),
    query: z.object({
      sentBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'sentBefore',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description: 'Filter events sent before this time (specified as an ISO 8601 timestamp)',
            example: '2021-06-17T08:15:30Z',
          },
        }),
      sentAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'sentAfter',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            description:
              'Filter for resources sent after a certain time (specified as an ISO 8601 timestamp)',
            example: '2021-02-17T08:15:30Z',
          },
        }),
      limit: LimitParamParamsSchema,
      cursor: CursorParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(WebhookEventWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getWorkflowsRoute = createRoute({
  method: 'get',
  path: '/workflows',
  tags: ['Workflows'],
  summary: 'List workflows',
  description:
    'List workflows that match the provided filters. If no filters are provided, all workflows accessible by the authenticated user are returned.',
  operationId: 'listWorkflows',
  request: {
    query: z.object({
      name: NameParamParamsSchema,
      ownerId: OwnerIdParamParamsSchema,
      workflowID: WorkflowIdParamParamsSchema,
      environmentId: EnvironmentIdParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of workflows',
      content: { 'application/json': { schema: z.array(WorkflowWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postWorkflowsRoute = createRoute({
  method: 'post',
  path: '/workflows',
  tags: ['Workflows'],
  summary: 'Create a workflow',
  description: 'Create a new workflow service with the specified configuration.',
  operationId: 'createWorkflow',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string(),
              ownerId: z.string(),
              buildConfig: z
                .object({
                  branch: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The branch to use for the build, if applicable.' }),
                  buildCommand: z
                    .string()
                    .openapi({
                      description:
                        'The command to run to build the workflow. Required for every runtime except docker, which builds from its Dockerfile.',
                    }),
                  repo: z
                    .string()
                    .regex(/\S/)
                    .openapi({
                      description: 'The repository URL to use for the build. Cannot be blank.',
                    }),
                  rootDir: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The root directory of the repository to use for the build, if applicable.',
                    }),
                  runtime: z
                    .enum(['elixir', 'go', 'node', 'python', 'ruby'])
                    .openapi({
                      description:
                        'The runtime environment for the workflow (e.g., node, python, etc.).',
                    }),
                })
                .openapi({ required: ['buildCommand', 'repo', 'runtime'] }),
              runCommand: z
                .string()
                .regex(/\S/)
                .openapi({ description: 'The command to run the workflow. Cannot be blank.' }),
              region: z
                .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                .default('oregon')
                .openapi({ description: 'Defaults to "oregon"' }),
              autoDeployTrigger: z
                .enum(['commit', 'off', 'checksPass'])
                .default('commit')
                .exactOptional()
                .openapi({
                  description:
                    'Controls autodeploy behavior. "commit" deploys when a commit is pushed to the branch. "checksPass" waits for CI checks to pass before deploying. "off" disables autodeploy.',
                }),
              envVars: z
                .array(
                  z.xor([
                    z
                      .object({ key: z.string(), value: z.string() })
                      .openapi({ required: ['key', 'value'] }),
                    z
                      .object({
                        key: z.string(),
                        generateValue: z
                          .boolean()
                          .openapi({
                            description:
                              'If true, Render generates a strong random value for this environment variable on creation. Cannot be combined with `value`.',
                          }),
                      })
                      .openapi({ required: ['key', 'generateValue'] }),
                  ]),
                )
                .exactOptional(),
            })
            .openapi({ required: ['name', 'ownerId', 'region', 'runCommand', 'buildConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Workflow created',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              ownerId: z.string(),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
              buildConfig: z
                .object({
                  branch: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The branch to use for the build, if applicable.' }),
                  buildCommand: z
                    .string()
                    .openapi({
                      description:
                        'The command to run to build the workflow. Required for every runtime except docker, which builds from its Dockerfile.',
                    }),
                  repo: z
                    .string()
                    .regex(/\S/)
                    .openapi({
                      description: 'The repository URL to use for the build. Cannot be blank.',
                    }),
                  rootDir: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The root directory of the repository to use for the build, if applicable.',
                    }),
                  runtime: z
                    .enum(['elixir', 'go', 'node', 'python', 'ruby'])
                    .openapi({
                      description:
                        'The runtime environment for the workflow (e.g., node, python, etc.).',
                    }),
                })
                .openapi({ required: ['buildCommand', 'repo', 'runtime'] }),
              runCommand: z.string().openapi({ description: 'Command to run the workflow.' }),
              region: z
                .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                .default('oregon')
                .openapi({ description: 'Defaults to "oregon"' }),
              environmentId: z.string().exactOptional(),
              slug: z.string().exactOptional(),
              autoDeployTrigger: z
                .enum(['commit', 'off', 'checksPass'])
                .default('commit')
                .exactOptional()
                .openapi({
                  description:
                    'Controls autodeploy behavior. "commit" deploys when a commit is pushed to the branch. "checksPass" waits for CI checks to pass before deploying. "off" disables autodeploy.',
                }),
            })
            .openapi({
              required: [
                'id',
                'name',
                'createdAt',
                'updatedAt',
                'ownerId',
                'region',
                'runCommand',
                'buildConfig',
              ],
            }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getWorkflowsWorkflowIdRoute = createRoute({
  method: 'get',
  path: '/workflows/{workflowId}',
  tags: ['Workflows'],
  summary: 'Retrieve workflow',
  description: 'Retrieve the workflow service with the provided ID.',
  operationId: 'getWorkflow',
  request: {
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'path',
            description: 'The ID of the workflow',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Workflow details',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              ownerId: z.string(),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
              buildConfig: z
                .object({
                  branch: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The branch to use for the build, if applicable.' }),
                  buildCommand: z
                    .string()
                    .openapi({
                      description:
                        'The command to run to build the workflow. Required for every runtime except docker, which builds from its Dockerfile.',
                    }),
                  repo: z
                    .string()
                    .regex(/\S/)
                    .openapi({
                      description: 'The repository URL to use for the build. Cannot be blank.',
                    }),
                  rootDir: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The root directory of the repository to use for the build, if applicable.',
                    }),
                  runtime: z
                    .enum(['elixir', 'go', 'node', 'python', 'ruby'])
                    .openapi({
                      description:
                        'The runtime environment for the workflow (e.g., node, python, etc.).',
                    }),
                })
                .openapi({ required: ['buildCommand', 'repo', 'runtime'] }),
              runCommand: z.string().openapi({ description: 'Command to run the workflow.' }),
              region: z
                .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                .default('oregon')
                .openapi({ description: 'Defaults to "oregon"' }),
              environmentId: z.string().exactOptional(),
              slug: z.string().exactOptional(),
              autoDeployTrigger: z
                .enum(['commit', 'off', 'checksPass'])
                .default('commit')
                .exactOptional()
                .openapi({
                  description:
                    'Controls autodeploy behavior. "commit" deploys when a commit is pushed to the branch. "checksPass" waits for CI checks to pass before deploying. "off" disables autodeploy.',
                }),
            })
            .openapi({
              required: [
                'id',
                'name',
                'createdAt',
                'updatedAt',
                'ownerId',
                'region',
                'runCommand',
                'buildConfig',
              ],
            }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteWorkflowsWorkflowIdRoute = createRoute({
  method: 'delete',
  path: '/workflows/{workflowId}',
  tags: ['Workflows'],
  summary: 'Delete workflow',
  description: 'Delete the workflow service with the provided ID.',
  operationId: 'deleteWorkflow',
  request: {
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'path',
            description: 'The ID of the workflow',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Workflow deleted' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const patchWorkflowsWorkflowIdRoute = createRoute({
  method: 'patch',
  path: '/workflows/{workflowId}',
  tags: ['Workflows'],
  summary: 'Update workflow',
  description: 'Update the workflow service with the provided ID.',
  operationId: 'updateWorkflow',
  request: {
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'path',
            description: 'The ID of the workflow',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              buildConfig: z
                .object({
                  branch: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The branch to use for the build, if applicable.' }),
                  buildCommand: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The command to run to build the workflow. Required for every runtime except docker, which builds from its Dockerfile.',
                    }),
                  repo: z
                    .string()
                    .regex(/\S/)
                    .exactOptional()
                    .openapi({
                      description: 'The repository URL to use for the build. Cannot be blank.',
                    }),
                  rootDir: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The root directory of the repository to use for the build, if applicable.',
                    }),
                  runtime: z
                    .enum(['elixir', 'go', 'node', 'python', 'ruby'])
                    .exactOptional()
                    .openapi({
                      description:
                        'The runtime environment for the workflow (e.g., node, python, etc.).',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "A partial update to a workflow's build config. Every field is optional; omitted fields are left unchanged.",
                  required: [],
                }),
              runCommand: z
                .string()
                .regex(/\S/)
                .exactOptional()
                .openapi({ description: 'The command to run the workflow. Cannot be blank.' }),
              autoDeployTrigger: z
                .enum(['commit', 'off', 'checksPass'])
                .default('commit')
                .exactOptional()
                .openapi({
                  description:
                    'Controls autodeploy behavior. "commit" deploys when a commit is pushed to the branch. "checksPass" waits for CI checks to pass before deploying. "off" disables autodeploy.',
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
      description: 'Workflow updated',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              ownerId: z.string(),
              createdAt: z.iso.datetime({ offset: true }),
              updatedAt: z.iso.datetime({ offset: true }),
              buildConfig: z
                .object({
                  branch: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The branch to use for the build, if applicable.' }),
                  buildCommand: z
                    .string()
                    .openapi({
                      description:
                        'The command to run to build the workflow. Required for every runtime except docker, which builds from its Dockerfile.',
                    }),
                  repo: z
                    .string()
                    .regex(/\S/)
                    .openapi({
                      description: 'The repository URL to use for the build. Cannot be blank.',
                    }),
                  rootDir: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The root directory of the repository to use for the build, if applicable.',
                    }),
                  runtime: z
                    .enum(['elixir', 'go', 'node', 'python', 'ruby'])
                    .openapi({
                      description:
                        'The runtime environment for the workflow (e.g., node, python, etc.).',
                    }),
                })
                .openapi({ required: ['buildCommand', 'repo', 'runtime'] }),
              runCommand: z.string().openapi({ description: 'Command to run the workflow.' }),
              region: z
                .enum(['frankfurt', 'oregon', 'ohio', 'singapore', 'virginia'])
                .default('oregon')
                .openapi({ description: 'Defaults to "oregon"' }),
              environmentId: z.string().exactOptional(),
              slug: z.string().exactOptional(),
              autoDeployTrigger: z
                .enum(['commit', 'off', 'checksPass'])
                .default('commit')
                .exactOptional()
                .openapi({
                  description:
                    'Controls autodeploy behavior. "commit" deploys when a commit is pushed to the branch. "checksPass" waits for CI checks to pass before deploying. "off" disables autodeploy.',
                }),
            })
            .openapi({
              required: [
                'id',
                'name',
                'createdAt',
                'updatedAt',
                'ownerId',
                'region',
                'runCommand',
                'buildConfig',
              ],
            }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getWorkflowversionsRoute = createRoute({
  method: 'get',
  path: '/workflowversions',
  tags: ['Workflows'],
  summary: 'List workflow versions',
  description: 'List known versions of the workflow service with the provided ID.',
  operationId: 'listWorkflowVersions',
  request: {
    query: z.object({
      ownerId: OwnerIdParamParamsSchema,
      workflowID: WorkflowIdParamParamsSchema,
      workflowVersionId: WorkflowVersionIdParamParamsSchema,
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of workflow versions',
      content: { 'application/json': { schema: z.array(WorkflowVersionWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postWorkflowversionsRoute = createRoute({
  method: 'post',
  path: '/workflowversions',
  tags: ['Workflows'],
  summary: 'Deploy a workflow version',
  description: 'Creates and deploys a new version of a workflow.',
  operationId: 'createWorkflowVersion',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ workflowId: z.string(), commit: z.string().exactOptional() })
            .openapi({ required: ['workflowId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Workflow version created' },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getWorkflowversionsWorkflowVersionIdRoute = createRoute({
  method: 'get',
  path: '/workflowversions/{workflowVersionId}',
  tags: ['Workflows'],
  summary: 'Retrieve workflow version',
  description: 'Retrieve the specific workflow service version with the provided ID.',
  operationId: 'getWorkflowVersion',
  request: {
    params: z.object({
      workflowVersionId: z
        .string()
        .openapi({
          param: {
            name: 'workflowVersionId',
            in: 'path',
            description: 'The ID of the workflow version',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Workflow version details',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              workflowId: z.string(),
              name: z.string(),
              createdAt: z.iso.datetime({ offset: true }),
              status: z.enum([
                'created',
                'building',
                'registering',
                'build_failed',
                'registration_failed',
                'ready',
              ]),
            })
            .openapi({
              required: ['id', 'workflowId', 'name', 'image', 'createdAt', 'updatedAt', 'status'],
            }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getTasksRoute = createRoute({
  method: 'get',
  path: '/tasks',
  tags: ['Workflow Tasks'],
  summary: 'List tasks',
  description:
    'List workflow tasks that match the provided filters. If no filters are provided, all task definitions accessible by the authenticated user are returned.',
  operationId: 'listTasks',
  request: {
    query: z.object({
      ownerId: OwnerIdParamParamsSchema,
      taskSlug: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'taskSlug',
            in: 'query',
            description:
              'An array of task slugs in the format workflow-slug/task-name. An optional version can be appended (workflow-slug/task-name:version). If no version is provided, the latest version is used.',
            example: ['my-workflow-slug/my-task', 'my-workflow-slug/my-task:SHA123'],
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      workflowVersionId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflowVersionId',
            in: 'query',
            description: 'An array of workflow version IDs',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      workflowId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'query',
            description: 'An array of workflow IDs',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of tasks',
      content: { 'application/json': { schema: z.array(TaskWithCursorSchema) } },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskId}',
  tags: ['Workflow Tasks'],
  summary: 'Retrieve task',
  description: 'Retrieve the workflow task with the provided ID.',
  operationId: 'getTask',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The ID of the task',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task details',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              createdAt: z.iso.datetime({ offset: true }),
              workflowId: z.string().exactOptional(),
              workflowVersionId: z.string().exactOptional(),
            })
            .openapi({ required: ['id', 'name', 'createdAt'] }),
        },
      },
    },
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getTaskRunsRoute = createRoute({
  method: 'get',
  path: '/task-runs',
  tags: ['Workflow Tasks'],
  summary: 'List task runs',
  description:
    'List task runs that match the provided filters. If no filters are provided, all task runs accessible by the authenticated user are returned.',
  operationId: 'listTaskRuns',
  request: {
    query: z.object({
      cursor: CursorParamParamsSchema,
      limit: LimitParamParamsSchema,
      taskSlug: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'taskSlug',
            in: 'query',
            description:
              'An array of task slugs in the format workflow-slug/task-name. An optional version can be appended (workflow-slug/task-name:version). If no version is provided, the latest version is used.',
            example: ['my-workflow-slug/my-task', 'my-workflow-slug/my-task:SHA123'],
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      rootTaskRunId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'rootTaskRunId',
            in: 'query',
            description: 'An array of root task run IDs to filter on',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      ownerId: OwnerIdParamParamsSchema,
      workflowVersionId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflowVersionId',
            in: 'query',
            description: 'An array of workflow version IDs',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      workflowId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'query',
            description: 'An array of workflow IDs',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of task runs',
      content: { 'application/json': { schema: z.array(TaskRunWithCursorSchema) } },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const postTaskRunsRoute = createRoute({
  method: 'post',
  path: '/task-runs',
  tags: ['Workflow Tasks'],
  summary: 'Run task',
  description:
    'Kicks off a run of the workflow task with the provided ID, passing the provided input data.',
  operationId: 'createTask',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              task: z
                .string()
                .regex(/\S/)
                .openapi({
                  description:
                    'A task slug in the format workflow-slug/task-name. An optional version can be appended (workflow-slug/task-name:version). If no version is provided, the latest version is used. Cannot be blank.',
                  example: 'my-workflow-slug/my-task, my-workflow-slug/my-task:SHA123',
                }),
              input: z
                .xor([
                  z
                    .array(z.any())
                    .openapi({ description: 'Positional arguments passed to the task function' }),
                  z
                    .record(z.string(), z.any())
                    .openapi({
                      description:
                        'Named parameters passed to the task function as keyword arguments',
                    }),
                ])
                .openapi({
                  description:
                    'Input data for a task. Can be either an array (for positional arguments) or an object (for named parameters).',
                }),
              idempotencyKey: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    "A client-generated key that makes starting a task run safe to retry. Repeating a request with the same key within 24 hours returns the task run that the first request started instead of starting another one; the repeated request's input is ignored. Keys are scoped to a workflow. Omit the key to always start a new run.",
                  example: '6b2f1f7a-6a0e-4f6f-9d1a-2b1d0d5f6c11',
                }),
            })
            .openapi({ required: ['task', 'input'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Task run created',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              taskId: z.string(),
              status: z.enum([
                'pending',
                'running',
                'completed',
                'succeeded',
                'failed',
                'canceled',
                'paused',
              ]),
              startedAt: z.iso.datetime({ offset: true }).exactOptional(),
              completedAt: z.iso.datetime({ offset: true }).exactOptional(),
              parentTaskRunId: z.string(),
              parentTaskAttempt: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The 0-indexed attempt of the parent task run that spawned this task run. Omitted for root task runs and for task runs created before this field was introduced.',
                }),
              rootTaskRunId: z.string(),
              retries: z.int(),
              attempts: z.array(
                z
                  .object({
                    taskRunId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The ID of the task run this attempt belongs to.' }),
                    attempt: z.int().openapi({ description: 'The 0-indexed attempt number.' }),
                    status: z.enum([
                      'pending',
                      'running',
                      'completed',
                      'succeeded',
                      'failed',
                      'canceled',
                      'paused',
                    ]),
                    enqueuedAt: z.iso.datetime({ offset: true }).exactOptional(),
                    startedAt: z.iso.datetime({ offset: true }),
                    completedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  })
                  .openapi({ required: ['status', 'startedAt', 'attempt'] }),
              ),
            })
            .openapi({
              required: [
                'id',
                'taskId',
                'status',
                'parentTaskRunId',
                'rootTaskRunId',
                'retries',
                'attempts',
              ],
            }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getTaskRunsEventsRoute = createRoute({
  method: 'get',
  path: '/task-runs/events',
  tags: ['Workflow Tasks'],
  summary: 'Stream realtime events (SSE)',
  description:
    'Establishes a unidirectional event stream. The server sends events as lines\nformatted per the SSE spec. Clients should set `Accept: text/event-stream`\nand keep the connection open.\n\nThe server sends a `task.completed` event whenever a requested task run reaches\nany terminal state (`completed`, `failed`, or `canceled`).\nThe `status` field of the payload indicates which state was reached.\n\nThe server automatically closes the stream in the following cases:\n\n- All requested task runs have reached a terminal state.\n- The stream has not sent any events for 30 minutes.\n\nFor tasks with a timeout higher than 30 minutes, waiting clients should fall back\nto polling with the [Retrieve task run](https://api-docs.render.com/reference/gettaskrun)\nendpoint.\n',
  operationId: 'streamTaskRunsEvents',
  request: {
    query: z.object({
      taskRunIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'taskRunIds',
            in: 'query',
            description: 'Filter to a subset of task run IDs.',
            required: true,
            schema: { type: 'array', items: { type: 'string' }, example: ['trn-1234', 'trn-5678'] },
          },
          example: ['trn-1234', 'trn-5678'],
        }),
    }),
    headers: z.object({
      Accept: z
        .literal('text/event-stream')
        .exactOptional()
        .openapi({
          param: {
            name: 'Accept',
            in: 'header',
            description: 'Must be `text/event-stream`.',
            required: false,
            schema: { type: 'string', enum: ['text/event-stream'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Event stream established',
      content: {
        'text/event-stream': {
          schema: z
            .string()
            .openapi({
              description:
                'Stream of SSE frames. Each event may include `id`, `event`, `data`,\nand optional `retry`. Frames are separated by a blank line.\n',
            }),
          examples: {
            taskCompleted: {
              summary: 'Named event with JSON data',
              value:
                'event: task.completed\ndata: {\n        "id": "string",\n        "taskId": "string",\n        "status": "pending",\n        "results": [\n          "string"\n        ],\n        "error": "string",\n        "startedAt": "2025-09-04T17:25:17.979Z",\n        "completedAt": "2025-09-04T17:25:17.979Z"\n      }\n',
            },
          },
        },
      },
      headers: z.object({
        'Content-Type': {
          description: 'Always `text/event-stream; charset=utf-8`',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Always `text/event-stream; charset=utf-8`',
              param: { required: false },
              example: 'text/event-stream; charset=utf-8',
            }),
        },
        'Cache-Control': {
          description: 'SSE responses should be non-cacheable.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'SSE responses should be non-cacheable.',
              param: { required: false },
              example: 'no-cache, no-transform',
            }),
        },
        Connection: {
          description: 'Keep-alive for streaming.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Keep-alive for streaming.',
              param: { required: false },
              example: 'keep-alive',
            }),
        },
      }),
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const getTaskRunsTaskRunIdRoute = createRoute({
  method: 'get',
  path: '/task-runs/{taskRunId}',
  tags: ['Workflow Tasks'],
  summary: 'Retrieve task run',
  description: 'Retrieve the workflow task run with the provided ID.',
  operationId: 'getTaskRun',
  request: {
    params: z.object({
      taskRunId: z
        .string()
        .openapi({
          param: {
            name: 'taskRunId',
            in: 'path',
            description: 'The ID of the task run',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task run details',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              taskId: z.string(),
              status: z.enum([
                'pending',
                'running',
                'completed',
                'succeeded',
                'failed',
                'canceled',
                'paused',
              ]),
              results: z.array(z.any()),
              error: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error message if the task run failed.' }),
              startedAt: z.iso.datetime({ offset: true }).exactOptional(),
              completedAt: z.iso.datetime({ offset: true }).exactOptional(),
              input: z
                .xor([
                  z
                    .array(z.any())
                    .openapi({ description: 'Positional arguments passed to the task function' }),
                  z
                    .record(z.string(), z.any())
                    .openapi({
                      description:
                        'Named parameters passed to the task function as keyword arguments',
                    }),
                ])
                .openapi({
                  description:
                    'Input data for a task. Can be either an array (for positional arguments) or an object (for named parameters).',
                }),
              parentTaskRunId: z.string(),
              parentTaskAttempt: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The 0-indexed attempt of the parent task run that spawned this task run. Omitted for root task runs and for task runs created before this field was introduced.',
                }),
              rootTaskRunId: z.string(),
              retries: z.int(),
              attempts: z.array(
                z
                  .object({
                    taskRunId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The ID of the task run this attempt belongs to.' }),
                    attempt: z.int().openapi({ description: 'The 0-indexed attempt number.' }),
                    status: z.enum([
                      'pending',
                      'running',
                      'completed',
                      'succeeded',
                      'failed',
                      'canceled',
                      'paused',
                    ]),
                    enqueuedAt: z.iso.datetime({ offset: true }).exactOptional(),
                    startedAt: z.iso.datetime({ offset: true }),
                    completedAt: z.iso.datetime({ offset: true }).exactOptional(),
                    error: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Error message if the task attempt failed.' }),
                    results: z.array(z.any()).exactOptional(),
                  })
                  .openapi({ required: ['status', 'startedAt', 'attempt'] }),
              ),
            })
            .openapi({
              required: [
                'id',
                'taskId',
                'status',
                'results',
                'input',
                'parentTaskRunId',
                'rootTaskRunId',
                'retries',
                'attempts',
              ],
            }),
        },
      },
    },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})

export const deleteTaskRunsTaskRunIdRoute = createRoute({
  method: 'delete',
  path: '/task-runs/{taskRunId}',
  tags: ['Workflow Tasks'],
  summary: 'Cancel task run',
  description: 'Cancel a running task run with the provided ID.',
  operationId: 'cancelTaskRun',
  request: {
    params: z.object({
      taskRunId: z
        .string()
        .openapi({
          param: {
            name: 'taskRunId',
            in: 'path',
            description: 'The ID of the task run',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Task run canceled' },
    400: _400BadRequestResponse,
    401: _401UnauthorizedResponse,
    403: _403ForbiddenResponse,
    404: _404NotFoundResponse,
    429: _429RateLimitResponse,
    500: _500InternalServerErrorResponse,
    503: _503ServiceUnavailableResponse,
  },
})
