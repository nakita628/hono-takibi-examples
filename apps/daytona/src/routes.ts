import { createRoute, z } from '@hono/zod-openapi'

const AnnouncementSchema = z
  .object({
    text: z
      .string()
      .openapi({ description: 'The announcement text', example: 'New feature available!' }),
    learnMoreUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL to learn more about the announcement',
        example: 'https://example.com/learn-more',
      }),
  })
  .openapi({ required: ['text'] })
  .openapi('Announcement')

const PosthogConfigSchema = z
  .object({
    apiKey: z.string().openapi({ description: 'PostHog API key', example: 'phc_abc123' }),
    host: z
      .string()
      .openapi({ description: 'PostHog host URL', example: 'https://app.posthog.com' }),
  })
  .openapi({ required: ['apiKey', 'host'] })
  .openapi('PosthogConfig')

const OidcConfigSchema = z
  .object({
    issuer: z.string().openapi({ description: 'OIDC issuer', example: 'https://auth.example.com' }),
    clientId: z.string().openapi({ description: 'OIDC client ID', example: 'daytona-client' }),
    audience: z.string().openapi({ description: 'OIDC audience', example: 'daytona-api' }),
  })
  .openapi({ required: ['audience', 'clientId', 'issuer'] })
  .openapi('OidcConfig')

const RateLimitEntrySchema = z
  .object({
    ttl: z
      .number()
      .exactOptional()
      .openapi({ description: 'Rate limit TTL in seconds', example: 60 }),
    limit: z
      .number()
      .exactOptional()
      .openapi({ description: 'Rate limit max requests', example: 100 }),
  })
  .openapi({ required: [] })
  .openapi('RateLimitEntry')

const RateLimitConfigSchema = z
  .object({
    failedAuth: RateLimitEntrySchema.exactOptional().openapi({
      description: 'Failed authentication rate limit',
    }),
    authenticated: RateLimitEntrySchema.exactOptional().openapi({
      description: 'Authenticated rate limit',
    }),
    sandboxCreate: RateLimitEntrySchema.exactOptional().openapi({
      description: 'Sandbox create rate limit',
    }),
    sandboxLifecycle: RateLimitEntrySchema.exactOptional().openapi({
      description: 'Sandbox lifecycle rate limit',
    }),
  })
  .openapi({ required: [] })
  .openapi('RateLimitConfig')

const DaytonaConfigurationSchema = z
  .object({
    version: z.string().openapi({ description: 'Daytona version', example: '0.0.1' }),
    posthog: PosthogConfigSchema.exactOptional().openapi({ description: 'PostHog configuration' }),
    oidc: OidcConfigSchema.openapi({ description: 'OIDC configuration' }),
    linkedAccountsEnabled: z
      .boolean()
      .openapi({ description: 'Whether linked accounts are enabled', example: true }),
    announcements: z
      .record(z.string(), AnnouncementSchema)
      .openapi({
        description: 'System announcements',
        example: {
          'feature-update': { text: 'New feature available!', learnMoreUrl: 'https://example.com' },
        },
      }),
    pylonAppId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pylon application ID', example: 'pylon-app-123' }),
    proxyTemplateUrl: z
      .string()
      .openapi({
        description: 'Proxy template URL',
        example: 'https://{{PORT}}-{{sandboxId}}.proxy.example.com',
      }),
    proxyToolboxUrl: z
      .string()
      .openapi({
        description: 'Toolbox template URL',
        example: 'https://proxy.example.com/toolbox',
      }),
    defaultSnapshot: z
      .string()
      .openapi({ description: 'Default snapshot for sandboxes', example: 'ubuntu:22.04' }),
    dashboardUrl: z
      .string()
      .openapi({ description: 'Dashboard URL', example: 'https://dashboard.example.com' }),
    maxAutoArchiveInterval: z
      .number()
      .openapi({ description: 'Maximum auto-archive interval in minutes', example: 43200 }),
    maintananceMode: z
      .boolean()
      .openapi({ description: 'Whether maintenance mode is enabled', example: false }),
    environment: z.string().openapi({ description: 'Current environment', example: 'production' }),
    billingApiUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Billing API URL', example: 'https://billing.example.com' }),
    analyticsApiUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Analytics API URL', example: 'https://analytics.example.com' }),
    sshGatewayCommand: z
      .string()
      .exactOptional()
      .openapi({ description: 'SSH Gateway command', example: 'ssh -p 2222 {{TOKEN}}@localhost' }),
    sshGatewayPublicKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Base64 encoded SSH Gateway public key',
        example: 'ssh-gateway-public-key',
      }),
    rateLimit: RateLimitConfigSchema.exactOptional().openapi({
      description: 'Rate limit configuration',
    }),
  })
  .openapi({
    example: {
      dashboardUrl: 'https://dashboard.example.com',
      rateLimit: '',
      analyticsApiUrl: 'https://analytics.example.com',
      sshGatewayPublicKey: 'ssh-gateway-public-key',
      billingApiUrl: 'https://billing.example.com',
      linkedAccountsEnabled: true,
      version: '0.0.1',
      oidc: '',
      proxyToolboxUrl: 'https://proxy.example.com/toolbox',
      posthog: '',
      maxAutoArchiveInterval: 43200,
      pylonAppId: 'pylon-app-123',
      proxyTemplateUrl: 'https://{{PORT}}-{{sandboxId}}.proxy.example.com',
      maintananceMode: false,
      environment: 'production',
      defaultSnapshot: 'ubuntu:22.04',
      sshGatewayCommand: 'ssh -p 2222 {{TOKEN}}@localhost',
      announcements: {
        'feature-update': { text: 'New feature available!', learnMoreUrl: 'https://example.com' },
      },
    },
    required: [
      'announcements',
      'dashboardUrl',
      'defaultSnapshot',
      'environment',
      'linkedAccountsEnabled',
      'maintananceMode',
      'maxAutoArchiveInterval',
      'oidc',
      'proxyTemplateUrl',
      'proxyToolboxUrl',
      'version',
    ],
  })
  .openapi('DaytonaConfiguration')

const CreateApiKeySchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the API key', example: 'My API Key' }),
    permissions: z
      .array(
        z
          .enum([
            'write:registries',
            'delete:registries',
            'write:snapshots',
            'delete:snapshots',
            'write:sandboxes',
            'delete:sandboxes',
            'read:volumes',
            'write:volumes',
            'delete:volumes',
            'write:regions',
            'delete:regions',
            'read:runners',
            'write:runners',
            'delete:runners',
            'read:audit_logs',
          ])
          .openapi({
            'x-enum-varnames': [
              'WRITE_REGISTRIES',
              'DELETE_REGISTRIES',
              'WRITE_SNAPSHOTS',
              'DELETE_SNAPSHOTS',
              'WRITE_SANDBOXES',
              'DELETE_SANDBOXES',
              'READ_VOLUMES',
              'WRITE_VOLUMES',
              'DELETE_VOLUMES',
              'WRITE_REGIONS',
              'DELETE_REGIONS',
              'READ_RUNNERS',
              'WRITE_RUNNERS',
              'DELETE_RUNNERS',
              'READ_AUDIT_LOGS',
            ],
          }),
      )
      .openapi({
        description:
          'The list of organization resource permissions explicitly assigned to the API key',
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'When the API key expires', example: '2025-06-09T12:00:00Z' }),
  })
  .openapi({
    example: {
      permissions: ['write:registries', 'write:registries'],
      name: 'My API Key',
      expiresAt: '2025-06-09T12:00:00Z',
    },
    required: ['name', 'permissions'],
  })
  .openapi('CreateApiKey')

const ApiKeyResponseSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the API key', example: 'My API Key' }),
    value: z
      .string()
      .openapi({ description: 'The API key value', example: 'bb_sk_1234567890abcdef' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the API key was created', example: '2024-03-14T12:00:00Z' }),
    permissions: z
      .array(
        z
          .enum([
            'write:registries',
            'delete:registries',
            'write:snapshots',
            'delete:snapshots',
            'write:sandboxes',
            'delete:sandboxes',
            'read:volumes',
            'write:volumes',
            'delete:volumes',
            'write:regions',
            'delete:regions',
            'read:runners',
            'write:runners',
            'delete:runners',
            'read:audit_logs',
          ])
          .openapi({
            'x-enum-varnames': [
              'WRITE_REGISTRIES',
              'DELETE_REGISTRIES',
              'WRITE_SNAPSHOTS',
              'DELETE_SNAPSHOTS',
              'WRITE_SANDBOXES',
              'DELETE_SANDBOXES',
              'READ_VOLUMES',
              'WRITE_VOLUMES',
              'DELETE_VOLUMES',
              'WRITE_REGIONS',
              'DELETE_REGIONS',
              'READ_RUNNERS',
              'WRITE_RUNNERS',
              'DELETE_RUNNERS',
              'READ_AUDIT_LOGS',
            ],
          }),
      )
      .openapi({
        description: 'The list of organization resource permissions assigned to the API key',
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the API key expires', example: '2025-06-09T12:00:00Z' }),
  })
  .openapi({
    example: {
      createdAt: '2024-03-14T12:00:00Z',
      permissions: ['write:registries', 'write:registries'],
      name: 'My API Key',
      value: 'bb_sk_1234567890abcdef',
      expiresAt: '2025-06-09T12:00:00Z',
    },
    required: ['createdAt', 'expiresAt', 'name', 'permissions', 'value'],
  })
  .openapi('ApiKeyResponse')

const ApiKeyListSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the API key', example: 'My API Key' }),
    value: z
      .string()
      .openapi({ description: 'The masked API key value', example: 'bb_********************def' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the API key was created', example: '2024-03-14T12:00:00Z' }),
    permissions: z
      .array(
        z
          .enum([
            'write:registries',
            'delete:registries',
            'write:snapshots',
            'delete:snapshots',
            'write:sandboxes',
            'delete:sandboxes',
            'read:volumes',
            'write:volumes',
            'delete:volumes',
            'write:regions',
            'delete:regions',
            'read:runners',
            'write:runners',
            'delete:runners',
            'read:audit_logs',
          ])
          .openapi({
            'x-enum-varnames': [
              'WRITE_REGISTRIES',
              'DELETE_REGISTRIES',
              'WRITE_SNAPSHOTS',
              'DELETE_SNAPSHOTS',
              'WRITE_SANDBOXES',
              'DELETE_SANDBOXES',
              'READ_VOLUMES',
              'WRITE_VOLUMES',
              'DELETE_VOLUMES',
              'WRITE_REGIONS',
              'DELETE_REGIONS',
              'READ_RUNNERS',
              'WRITE_RUNNERS',
              'DELETE_RUNNERS',
              'READ_AUDIT_LOGS',
            ],
          }),
      )
      .openapi({
        description: 'The list of organization resource permissions assigned to the API key',
      }),
    lastUsedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the API key was last used', example: '2024-03-14T12:00:00Z' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the API key expires', example: '2024-03-14T12:00:00Z' }),
    userId: z
      .string()
      .openapi({ description: 'The user ID of the user who created the API key', example: '123' }),
  })
  .openapi({
    example: {
      createdAt: '2024-03-14T12:00:00Z',
      lastUsedAt: '2024-03-14T12:00:00Z',
      permissions: ['write:registries', 'write:registries'],
      name: 'My API Key',
      value: 'bb_********************def',
      userId: '123',
      expiresAt: '2024-03-14T12:00:00Z',
    },
    required: ['createdAt', 'expiresAt', 'lastUsedAt', 'name', 'permissions', 'userId', 'value'],
  })
  .openapi('ApiKeyList')

const OrganizationRoleSchema = z
  .object({
    id: z.string().openapi({ description: 'Role ID' }),
    name: z.string().openapi({ description: 'Role name' }),
    description: z.string().openapi({ description: 'Role description' }),
    permissions: z
      .array(
        z
          .enum([
            'write:registries',
            'delete:registries',
            'write:snapshots',
            'delete:snapshots',
            'write:sandboxes',
            'delete:sandboxes',
            'read:volumes',
            'write:volumes',
            'delete:volumes',
            'write:regions',
            'delete:regions',
            'read:runners',
            'write:runners',
            'delete:runners',
            'read:audit_logs',
          ])
          .openapi({
            'x-enum-varnames': [
              'WRITE_REGISTRIES',
              'DELETE_REGISTRIES',
              'WRITE_SNAPSHOTS',
              'DELETE_SNAPSHOTS',
              'WRITE_SANDBOXES',
              'DELETE_SANDBOXES',
              'READ_VOLUMES',
              'WRITE_VOLUMES',
              'DELETE_VOLUMES',
              'WRITE_REGIONS',
              'DELETE_REGIONS',
              'READ_RUNNERS',
              'WRITE_RUNNERS',
              'DELETE_RUNNERS',
              'READ_AUDIT_LOGS',
            ],
          }),
      )
      .openapi({ description: 'Roles assigned to the user' }),
    isGlobal: z.boolean().openapi({ description: 'Global role flag' }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ description: 'Creation timestamp' }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ description: 'Last update timestamp' }),
  })
  .openapi({
    example: {
      createdAt: '2000-01-23T04:56:07.000+00:00',
      permissions: ['write:registries', 'write:registries'],
      name: 'name',
      isGlobal: true,
      description: 'description',
      id: 'id',
      updatedAt: '2000-01-23T04:56:07.000+00:00',
    },
    required: ['createdAt', 'description', 'id', 'isGlobal', 'name', 'permissions', 'updatedAt'],
  })
  .openapi('OrganizationRole')

const OrganizationInvitationSchema = z
  .object({
    id: z.string().openapi({ description: 'Invitation ID' }),
    email: z.string().openapi({ description: 'Email address of the invitee' }),
    invitedBy: z.string().openapi({ description: 'Email address of the inviter' }),
    organizationId: z.string().openapi({ description: 'Organization ID' }),
    organizationName: z.string().openapi({ description: 'Organization name' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Expiration date of the invitation' }),
    status: z
      .enum(['pending', 'accepted', 'declined', 'cancelled'])
      .openapi({ description: 'Invitation status' }),
    role: z.enum(['owner', 'member']).openapi({ description: 'Member role' }),
    assignedRoles: z.array(OrganizationRoleSchema).openapi({ description: 'Assigned roles' }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ description: 'Creation timestamp' }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ description: 'Last update timestamp' }),
  })
  .openapi({
    example: {
      organizationId: 'organizationId',
      createdAt: '2000-01-23T04:56:07.000+00:00',
      invitedBy: 'invitedBy',
      role: 'owner',
      organizationName: 'organizationName',
      assignedRoles: [
        {
          createdAt: '2000-01-23T04:56:07.000+00:00',
          permissions: ['write:registries', 'write:registries'],
          name: 'name',
          isGlobal: true,
          description: 'description',
          id: 'id',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
        },
        {
          createdAt: '2000-01-23T04:56:07.000+00:00',
          permissions: ['write:registries', 'write:registries'],
          name: 'name',
          isGlobal: true,
          description: 'description',
          id: 'id',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
        },
      ],
      id: 'id',
      email: 'email',
      expiresAt: '2000-01-23T04:56:07.000+00:00',
      status: 'pending',
      updatedAt: '2000-01-23T04:56:07.000+00:00',
    },
    required: [
      'assignedRoles',
      'createdAt',
      'email',
      'expiresAt',
      'id',
      'invitedBy',
      'organizationId',
      'organizationName',
      'role',
      'status',
      'updatedAt',
    ],
  })
  .openapi('OrganizationInvitation')

const CreateOrganizationSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'The name of organization', example: 'My Organization' }),
    defaultRegionId: z
      .string()
      .openapi({ description: 'The ID of the default region for the organization', example: 'us' }),
  })
  .openapi({
    example: { defaultRegionId: 'us', name: 'My Organization' },
    required: ['defaultRegionId', 'name'],
  })
  .openapi('CreateOrganization')

const OtelConfigSchema = z
  .object({
    endpoint: z.string().openapi({ description: 'Endpoint' }),
    headers: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Headers', example: { 'x-api-key': 'my-api-key' } }),
  })
  .openapi({
    example: { headers: { 'x-api-key': 'my-api-key' }, endpoint: 'endpoint' },
    required: ['endpoint'],
  })
  .openapi('OtelConfig')

const OrganizationSchema = z
  .object({
    id: z.string().openapi({ description: 'Organization ID' }),
    name: z.string().openapi({ description: 'Organization name' }),
    createdBy: z.string().openapi({ description: 'User ID of the organization creator' }),
    personal: z.boolean().openapi({ description: 'Personal organization flag' }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ description: 'Creation timestamp' }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ description: 'Last update timestamp' }),
    suspended: z.boolean().openapi({ description: 'Suspended flag' }),
    suspendedAt: z.iso.datetime({ offset: true }).openapi({ description: 'Suspended at' }),
    suspensionReason: z.string().openapi({ description: 'Suspended reason' }),
    suspendedUntil: z.iso.datetime({ offset: true }).openapi({ description: 'Suspended until' }),
    suspensionCleanupGracePeriodHours: z
      .number()
      .openapi({ description: 'Suspension cleanup grace period hours' }),
    maxCpuPerSandbox: z.number().openapi({ description: 'Max CPU per sandbox' }),
    maxMemoryPerSandbox: z.number().openapi({ description: 'Max memory per sandbox' }),
    maxDiskPerSandbox: z.number().openapi({ description: 'Max disk per sandbox' }),
    snapshotDeactivationTimeoutMinutes: z
      .number()
      .default(20160)
      .openapi({ description: 'Time in minutes before an unused snapshot is deactivated' }),
    sandboxLimitedNetworkEgress: z
      .boolean()
      .openapi({ description: 'Sandbox default network block all' }),
    defaultRegionId: z.string().exactOptional().openapi({ description: 'Default region ID' }),
    authenticatedRateLimit: z
      .number()
      .nullable()
      .openapi({ description: 'Authenticated rate limit per minute' }),
    sandboxCreateRateLimit: z
      .number()
      .nullable()
      .openapi({ description: 'Sandbox create rate limit per minute' }),
    sandboxLifecycleRateLimit: z
      .number()
      .nullable()
      .openapi({ description: 'Sandbox lifecycle rate limit per minute' }),
    experimentalConfig: z.looseObject({}).openapi({ description: 'Experimental configuration' }),
    otelConfig: OtelConfigSchema.nullable().openapi({
      description: 'OpenTelemetry collection configuration',
    }),
    authenticatedRateLimitTtlSeconds: z
      .number()
      .nullable()
      .openapi({ description: 'Authenticated rate limit TTL in seconds' }),
    sandboxCreateRateLimitTtlSeconds: z
      .number()
      .nullable()
      .openapi({ description: 'Sandbox create rate limit TTL in seconds' }),
    sandboxLifecycleRateLimitTtlSeconds: z
      .number()
      .nullable()
      .openapi({ description: 'Sandbox lifecycle rate limit TTL in seconds' }),
  })
  .openapi({
    example: {
      sandboxCreateRateLimit: 7.061401241503109,
      sandboxLifecycleRateLimitTtlSeconds: 4.145608029883936,
      createdAt: '2000-01-23T04:56:07.000+00:00',
      sandboxLimitedNetworkEgress: true,
      suspendedUntil: '2000-01-23T04:56:07.000+00:00',
      snapshotDeactivationTimeoutMinutes: 5.637376656633329,
      otelConfig: '',
      authenticatedRateLimitTtlSeconds: 3.616076749251911,
      id: 'id',
      experimentalConfig: '{}',
      updatedAt: '2000-01-23T04:56:07.000+00:00',
      defaultRegionId: 'defaultRegionId',
      sandboxCreateRateLimitTtlSeconds: 2.027123023002322,
      suspensionReason: 'suspensionReason',
      sandboxLifecycleRateLimit: 9.301444243932576,
      suspendedAt: '2000-01-23T04:56:07.000+00:00',
      personal: true,
      suspensionCleanupGracePeriodHours: 0.8008281904610115,
      authenticatedRateLimit: 2.3021358869347655,
      suspended: true,
      maxCpuPerSandbox: 6.027456183070403,
      maxDiskPerSandbox: 5.962133916683182,
      createdBy: 'createdBy',
      name: 'name',
      maxMemoryPerSandbox: 1.4658129805029452,
    },
    required: [
      'authenticatedRateLimit',
      'authenticatedRateLimitTtlSeconds',
      'createdAt',
      'createdBy',
      'experimentalConfig',
      'id',
      'maxCpuPerSandbox',
      'maxDiskPerSandbox',
      'maxMemoryPerSandbox',
      'name',
      'otelConfig',
      'personal',
      'sandboxCreateRateLimit',
      'sandboxCreateRateLimitTtlSeconds',
      'sandboxLifecycleRateLimit',
      'sandboxLifecycleRateLimitTtlSeconds',
      'sandboxLimitedNetworkEgress',
      'snapshotDeactivationTimeoutMinutes',
      'suspended',
      'suspendedAt',
      'suspendedUntil',
      'suspensionCleanupGracePeriodHours',
      'suspensionReason',
      'updatedAt',
    ],
  })
  .openapi('Organization')

const UpdateOrganizationDefaultRegionSchema = z
  .object({
    defaultRegionId: z
      .string()
      .openapi({ description: 'The ID of the default region for the organization', example: 'us' }),
  })
  .openapi({ example: { defaultRegionId: 'us' }, required: ['defaultRegionId'] })
  .openapi('UpdateOrganizationDefaultRegion')

const SandboxClassSchema = z
  .enum(['linux-vm', 'container', 'android', 'windows'])
  .openapi({ 'x-enum-varnames': ['LINUX_VM', 'CONTAINER', 'ANDROID', 'WINDOWS'] })
  .openapi('SandboxClass')

const GpuTypeSchema = z
  .enum(['H100', 'RTX-PRO-6000'])
  .openapi({ 'x-enum-varnames': ['H100', 'RTX_PRO_6000'] })
  .openapi('GpuType')

const RegionUsageOverviewSchema = z
  .object({
    regionId: z.string(),
    sandboxClass: SandboxClassSchema,
    totalCpuQuota: z.number(),
    currentCpuUsage: z.number(),
    totalMemoryQuota: z.number(),
    currentMemoryUsage: z.number(),
    totalDiskQuota: z.number(),
    currentDiskUsage: z.number(),
    totalGpuQuota: z.number(),
    currentGpuUsage: z.number(),
    allowedGpuTypes: z.array(GpuTypeSchema).exactOptional(),
    maxCpuPerSandbox: z.number().nullable(),
    maxMemoryPerSandbox: z.number().nullable(),
    maxDiskPerSandbox: z.number().nullable(),
    maxDiskPerNonEphemeralSandbox: z.number().nullable(),
    maxCpuPerGpuSandbox: z.number().nullable(),
    maxMemoryPerGpuSandbox: z.number().nullable(),
    maxDiskPerGpuSandbox: z.number().nullable(),
  })
  .openapi({
    example: {
      totalCpuQuota: 0.8008281904610115,
      currentGpuUsage: 9.301444243932576,
      allowedGpuTypes: ['H100', 'H100'],
      maxDiskPerGpuSandbox: 1.4894159098541704,
      totalGpuQuota: 7.061401241503109,
      maxCpuPerGpuSandbox: 1.2315135367772556,
      maxCpuPerSandbox: 3.616076749251911,
      maxDiskPerSandbox: 4.145608029883936,
      maxDiskPerNonEphemeralSandbox: 7.386281948385884,
      regionId: 'regionId',
      currentDiskUsage: 2.3021358869347655,
      currentMemoryUsage: 5.962133916683182,
      currentCpuUsage: 6.027456183070403,
      maxMemoryPerSandbox: 2.027123023002322,
      totalMemoryQuota: 1.4658129805029452,
      totalDiskQuota: 5.637376656633329,
      sandboxClass: '',
      maxMemoryPerGpuSandbox: 1.0246457001441578,
    },
    required: [
      'currentCpuUsage',
      'currentDiskUsage',
      'currentGpuUsage',
      'currentMemoryUsage',
      'maxCpuPerGpuSandbox',
      'maxCpuPerSandbox',
      'maxDiskPerGpuSandbox',
      'maxDiskPerNonEphemeralSandbox',
      'maxDiskPerSandbox',
      'maxMemoryPerGpuSandbox',
      'maxMemoryPerSandbox',
      'regionId',
      'sandboxClass',
      'totalCpuQuota',
      'totalDiskQuota',
      'totalGpuQuota',
      'totalMemoryQuota',
    ],
  })
  .openapi('RegionUsageOverview')

const OrganizationUsageOverviewSchema = z
  .object({
    regionUsage: z.array(RegionUsageOverviewSchema),
    totalSnapshotQuota: z.number(),
    currentSnapshotUsage: z.number(),
    totalVolumeQuota: z.number(),
    currentVolumeUsage: z.number(),
  })
  .openapi({
    example: {
      totalSnapshotQuota: 6.84685269835264,
      currentVolumeUsage: 4.965218492984954,
      totalVolumeQuota: 1.1730742509559433,
      currentSnapshotUsage: 7.457744773683766,
      regionUsage: [
        {
          totalCpuQuota: 0.8008281904610115,
          currentGpuUsage: 9.301444243932576,
          allowedGpuTypes: ['H100', 'H100'],
          maxDiskPerGpuSandbox: 1.4894159098541704,
          totalGpuQuota: 7.061401241503109,
          maxCpuPerGpuSandbox: 1.2315135367772556,
          maxCpuPerSandbox: 3.616076749251911,
          maxDiskPerSandbox: 4.145608029883936,
          maxDiskPerNonEphemeralSandbox: 7.386281948385884,
          regionId: 'regionId',
          currentDiskUsage: 2.3021358869347655,
          currentMemoryUsage: 5.962133916683182,
          currentCpuUsage: 6.027456183070403,
          maxMemoryPerSandbox: 2.027123023002322,
          totalMemoryQuota: 1.4658129805029452,
          totalDiskQuota: 5.637376656633329,
          sandboxClass: '',
          maxMemoryPerGpuSandbox: 1.0246457001441578,
        },
        {
          totalCpuQuota: 0.8008281904610115,
          currentGpuUsage: 9.301444243932576,
          allowedGpuTypes: ['H100', 'H100'],
          maxDiskPerGpuSandbox: 1.4894159098541704,
          totalGpuQuota: 7.061401241503109,
          maxCpuPerGpuSandbox: 1.2315135367772556,
          maxCpuPerSandbox: 3.616076749251911,
          maxDiskPerSandbox: 4.145608029883936,
          maxDiskPerNonEphemeralSandbox: 7.386281948385884,
          regionId: 'regionId',
          currentDiskUsage: 2.3021358869347655,
          currentMemoryUsage: 5.962133916683182,
          currentCpuUsage: 6.027456183070403,
          maxMemoryPerSandbox: 2.027123023002322,
          totalMemoryQuota: 1.4658129805029452,
          totalDiskQuota: 5.637376656633329,
          sandboxClass: '',
          maxMemoryPerGpuSandbox: 1.0246457001441578,
        },
      ],
    },
    required: [
      'currentSnapshotUsage',
      'currentVolumeUsage',
      'regionUsage',
      'totalSnapshotQuota',
      'totalVolumeQuota',
    ],
  })
  .openapi('OrganizationUsageOverview')

const UpdateOrganizationQuotaSchema = z
  .object({
    maxCpuPerSandbox: z.number().nullable(),
    maxMemoryPerSandbox: z.number().nullable(),
    maxDiskPerSandbox: z.number().nullable(),
    snapshotQuota: z.number().nullable(),
    maxSnapshotSize: z.number().nullable(),
    volumeQuota: z.number().nullable(),
    authenticatedRateLimit: z.number().nullable(),
    sandboxCreateRateLimit: z.number().nullable(),
    sandboxLifecycleRateLimit: z.number().nullable(),
    authenticatedRateLimitTtlSeconds: z.number().nullable(),
    sandboxCreateRateLimitTtlSeconds: z.number().nullable(),
    sandboxLifecycleRateLimitTtlSeconds: z.number().nullable(),
    snapshotDeactivationTimeoutMinutes: z
      .number()
      .nullable()
      .openapi({ description: 'Time in minutes before an unused snapshot is deactivated' }),
  })
  .openapi({
    example: {
      sandboxCreateRateLimitTtlSeconds: 4.145608029883936,
      sandboxLifecycleRateLimit: 3.616076749251911,
      volumeQuota: 2.3021358869347655,
      maxSnapshotSize: 5.637376656633329,
      authenticatedRateLimit: 7.061401241503109,
      sandboxCreateRateLimit: 9.301444243932576,
      snapshotQuota: 5.962133916683182,
      sandboxLifecycleRateLimitTtlSeconds: 7.386281948385884,
      maxCpuPerSandbox: 0.8008281904610115,
      maxDiskPerSandbox: 1.4658129805029452,
      snapshotDeactivationTimeoutMinutes: 1.2315135367772556,
      maxMemoryPerSandbox: 6.027456183070403,
      authenticatedRateLimitTtlSeconds: 2.027123023002322,
    },
    required: [
      'authenticatedRateLimit',
      'authenticatedRateLimitTtlSeconds',
      'maxCpuPerSandbox',
      'maxDiskPerSandbox',
      'maxMemoryPerSandbox',
      'maxSnapshotSize',
      'sandboxCreateRateLimit',
      'sandboxCreateRateLimitTtlSeconds',
      'sandboxLifecycleRateLimit',
      'sandboxLifecycleRateLimitTtlSeconds',
      'snapshotDeactivationTimeoutMinutes',
      'snapshotQuota',
      'volumeQuota',
    ],
  })
  .openapi('UpdateOrganizationQuota')

const UpdateOrganizationRegionQuotaSchema = z
  .object({
    sandboxClass: SandboxClassSchema.exactOptional(),
    totalCpuQuota: z.number().nullable(),
    totalMemoryQuota: z.number().nullable(),
    totalDiskQuota: z.number().nullable(),
    totalGpuQuota: z.number().nullable(),
    allowedGpuTypes: z.array(GpuTypeSchema).nullable().exactOptional(),
    maxCpuPerSandbox: z.number().nullable().exactOptional(),
    maxMemoryPerSandbox: z.number().nullable().exactOptional(),
    maxDiskPerSandbox: z.number().nullable().exactOptional(),
    maxDiskPerNonEphemeralSandbox: z.number().nullable().exactOptional(),
    maxCpuPerGpuSandbox: z.number().nullable().exactOptional(),
    maxMemoryPerGpuSandbox: z.number().nullable().exactOptional(),
    maxDiskPerGpuSandbox: z.number().nullable().exactOptional(),
  })
  .openapi({
    example: {
      totalCpuQuota: 0.8008281904610115,
      allowedGpuTypes: ['H100', 'H100'],
      maxDiskPerGpuSandbox: 4.145608029883936,
      totalGpuQuota: 5.962133916683182,
      maxCpuPerGpuSandbox: 3.616076749251911,
      maxCpuPerSandbox: 5.637376656633329,
      maxDiskPerSandbox: 7.061401241503109,
      maxDiskPerNonEphemeralSandbox: 9.301444243932576,
      maxMemoryPerSandbox: 2.3021358869347655,
      totalMemoryQuota: 6.027456183070403,
      totalDiskQuota: 1.4658129805029452,
      sandboxClass: '',
      maxMemoryPerGpuSandbox: 2.027123023002322,
    },
    required: ['totalCpuQuota', 'totalDiskQuota', 'totalGpuQuota', 'totalMemoryQuota'],
  })
  .openapi('UpdateOrganizationRegionQuota')

const OrganizationSuspensionSchema = z
  .object({
    reason: z.string().openapi({ description: 'Suspension reason' }),
    until: z.iso.datetime({ offset: true }).openapi({ description: 'Suspension until' }),
    suspensionCleanupGracePeriodHours: z
      .number()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Suspension cleanup grace period hours' }),
  })
  .openapi({
    example: {
      reason: 'reason',
      until: '2000-01-23T04:56:07.000+00:00',
      suspensionCleanupGracePeriodHours: 0.08008281904610115,
    },
    required: ['reason', 'until'],
  })
  .openapi('OrganizationSuspension')

const OrganizationSandboxDefaultLimitedNetworkEgressSchema = z
  .object({
    sandboxDefaultLimitedNetworkEgress: z
      .boolean()
      .openapi({ description: 'Sandbox default limited network egress' }),
  })
  .openapi({
    example: { sandboxDefaultLimitedNetworkEgress: true },
    required: ['sandboxDefaultLimitedNetworkEgress'],
  })
  .openapi('OrganizationSandboxDefaultLimitedNetworkEgress')

const CreateOrganizationRoleSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the role', example: 'Maintainer' }),
    description: z
      .string()
      .openapi({ description: 'The description of the role', example: 'Can manage all resources' }),
    permissions: z
      .array(
        z
          .enum([
            'write:registries',
            'delete:registries',
            'write:snapshots',
            'delete:snapshots',
            'write:sandboxes',
            'delete:sandboxes',
            'read:volumes',
            'write:volumes',
            'delete:volumes',
            'write:regions',
            'delete:regions',
            'read:runners',
            'write:runners',
            'delete:runners',
            'read:audit_logs',
          ])
          .openapi({
            'x-enum-varnames': [
              'WRITE_REGISTRIES',
              'DELETE_REGISTRIES',
              'WRITE_SNAPSHOTS',
              'DELETE_SNAPSHOTS',
              'WRITE_SANDBOXES',
              'DELETE_SANDBOXES',
              'READ_VOLUMES',
              'WRITE_VOLUMES',
              'DELETE_VOLUMES',
              'WRITE_REGIONS',
              'DELETE_REGIONS',
              'READ_RUNNERS',
              'WRITE_RUNNERS',
              'DELETE_RUNNERS',
              'READ_AUDIT_LOGS',
            ],
          }),
      )
      .openapi({ description: 'The list of permissions assigned to the role' }),
  })
  .openapi({
    example: {
      permissions: ['write:registries', 'write:registries'],
      name: 'Maintainer',
      description: 'Can manage all resources',
    },
    required: ['description', 'name', 'permissions'],
  })
  .openapi('CreateOrganizationRole')

const UpdateOrganizationRoleSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the role', example: 'Maintainer' }),
    description: z
      .string()
      .openapi({ description: 'The description of the role', example: 'Can manage all resources' }),
    permissions: z
      .array(
        z
          .enum([
            'write:registries',
            'delete:registries',
            'write:snapshots',
            'delete:snapshots',
            'write:sandboxes',
            'delete:sandboxes',
            'read:volumes',
            'write:volumes',
            'delete:volumes',
            'write:regions',
            'delete:regions',
            'read:runners',
            'write:runners',
            'delete:runners',
            'read:audit_logs',
          ])
          .openapi({
            'x-enum-varnames': [
              'WRITE_REGISTRIES',
              'DELETE_REGISTRIES',
              'WRITE_SNAPSHOTS',
              'DELETE_SNAPSHOTS',
              'WRITE_SANDBOXES',
              'DELETE_SANDBOXES',
              'READ_VOLUMES',
              'WRITE_VOLUMES',
              'DELETE_VOLUMES',
              'WRITE_REGIONS',
              'DELETE_REGIONS',
              'READ_RUNNERS',
              'WRITE_RUNNERS',
              'DELETE_RUNNERS',
              'READ_AUDIT_LOGS',
            ],
          }),
      )
      .openapi({ description: 'The list of permissions assigned to the role' }),
  })
  .openapi({
    example: {
      permissions: ['write:registries', 'write:registries'],
      name: 'Maintainer',
      description: 'Can manage all resources',
    },
    required: ['description', 'name', 'permissions'],
  })
  .openapi('UpdateOrganizationRole')

const OrganizationUserSchema = z
  .object({
    userId: z.string().openapi({ description: 'User ID' }),
    organizationId: z.string().openapi({ description: 'Organization ID' }),
    name: z.string().openapi({ description: 'User name' }),
    email: z.string().openapi({ description: 'User email' }),
    role: z.enum(['owner', 'member']).openapi({ description: 'Member role' }),
    assignedRoles: z
      .array(OrganizationRoleSchema)
      .openapi({ description: 'Roles assigned to the user' }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ description: 'Creation timestamp' }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ description: 'Last update timestamp' }),
  })
  .openapi({
    example: {
      organizationId: 'organizationId',
      createdAt: '2000-01-23T04:56:07.000+00:00',
      role: 'owner',
      assignedRoles: [
        {
          createdAt: '2000-01-23T04:56:07.000+00:00',
          permissions: ['write:registries', 'write:registries'],
          name: 'name',
          isGlobal: true,
          description: 'description',
          id: 'id',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
        },
        {
          createdAt: '2000-01-23T04:56:07.000+00:00',
          permissions: ['write:registries', 'write:registries'],
          name: 'name',
          isGlobal: true,
          description: 'description',
          id: 'id',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
        },
      ],
      name: 'name',
      userId: 'userId',
      email: 'email',
      updatedAt: '2000-01-23T04:56:07.000+00:00',
    },
    required: [
      'assignedRoles',
      'createdAt',
      'email',
      'name',
      'organizationId',
      'role',
      'updatedAt',
      'userId',
    ],
  })
  .openapi('OrganizationUser')

const UpdateOrganizationMemberAccessSchema = z
  .object({
    role: z
      .enum(['owner', 'member'])
      .default('member')
      .openapi({ description: 'Organization member role' }),
    assignedRoleIds: z
      .array(z.string())
      .default(['00000000-0000-0000-0000-000000000001'])
      .openapi({ description: 'Array of assigned role IDs' }),
  })
  .openapi({
    example: { role: 'member', assignedRoleIds: ['assignedRoleIds', 'assignedRoleIds'] },
    required: ['assignedRoleIds', 'role'],
  })
  .openapi('UpdateOrganizationMemberAccess')

const CreateOrganizationInvitationSchema = z
  .object({
    email: z
      .string()
      .openapi({ description: 'Email address of the invitee', example: 'mail@example.com' }),
    role: z
      .enum(['owner', 'member'])
      .default('member')
      .openapi({ description: 'Organization member role for the invitee' }),
    assignedRoleIds: z
      .array(z.string())
      .default(['00000000-0000-0000-0000-000000000001'])
      .openapi({ description: 'Array of assigned role IDs for the invitee' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Expiration date of the invitation',
        example: '2021-12-31T23:59:59Z',
      }),
  })
  .openapi({
    example: {
      role: 'member',
      assignedRoleIds: ['assignedRoleIds', 'assignedRoleIds'],
      email: 'mail@example.com',
      expiresAt: '2021-12-31T23:59:59Z',
    },
    required: ['assignedRoleIds', 'email', 'role'],
  })
  .openapi('CreateOrganizationInvitation')

const UpdateOrganizationInvitationSchema = z
  .object({
    role: z.enum(['owner', 'member']).openapi({ description: 'Organization member role' }),
    assignedRoleIds: z.array(z.string()).openapi({ description: 'Array of role IDs' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Expiration date of the invitation',
        example: '2021-12-31T23:59:59Z',
      }),
  })
  .openapi({
    example: {
      role: 'owner',
      assignedRoleIds: ['assignedRoleIds', 'assignedRoleIds'],
      expiresAt: '2021-12-31T23:59:59Z',
    },
    required: ['assignedRoleIds', 'role'],
  })
  .openapi('UpdateOrganizationInvitation')

const RegionTypeSchema = z
  .enum(['shared', 'dedicated', 'custom'])
  .openapi({ description: 'The type of the region' })
  .openapi('RegionType')

const RegionSchema = z
  .object({
    id: z.string().openapi({ description: 'Region ID', example: '123456789012' }),
    name: z.string().openapi({ description: 'Region name', example: 'us-east-1' }),
    organizationId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Organization ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    regionType: RegionTypeSchema.openapi({
      description: 'The type of the region',
      example: 'shared',
    }),
    createdAt: z
      .string()
      .openapi({ description: 'Creation timestamp', example: '2023-01-01T00:00:00.000Z' }),
    updatedAt: z
      .string()
      .openapi({ description: 'Last update timestamp', example: '2023-01-01T00:00:00.000Z' }),
    proxyUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Proxy URL for the region', example: 'https://proxy.example.com' }),
    sshGatewayUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'SSH Gateway URL for the region',
        example: 'http://ssh-gateway.example.com',
      }),
    snapshotManagerUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Snapshot Manager URL for the region',
        example: 'http://snapshot-manager.example.com',
      }),
  })
  .openapi({
    example: {
      organizationId: '123e4567-e89b-12d3-a456-426614174000',
      createdAt: '2023-01-01T00:00:00.000Z',
      snapshotManagerUrl: 'http://snapshot-manager.example.com',
      regionType: 'shared',
      proxyUrl: 'https://proxy.example.com',
      name: 'us-east-1',
      sshGatewayUrl: 'http://ssh-gateway.example.com',
      id: '123456789012',
      updatedAt: '2023-01-01T00:00:00.000Z',
    },
    required: ['createdAt', 'id', 'name', 'regionType', 'updatedAt'],
  })
  .openapi('Region')

const CreateRegionSchema = z
  .object({
    name: z.string().openapi({ description: 'Region name', example: 'us-east-1' }),
    proxyUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Proxy URL for the region', example: 'https://proxy.example.com' }),
    sshGatewayUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'SSH Gateway URL for the region',
        example: 'ssh://ssh-gateway.example.com',
      }),
    snapshotManagerUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Snapshot Manager URL for the region',
        example: 'https://snapshot-manager.example.com',
      }),
  })
  .openapi({
    example: {
      snapshotManagerUrl: 'https://snapshot-manager.example.com',
      proxyUrl: 'https://proxy.example.com',
      name: 'us-east-1',
      sshGatewayUrl: 'ssh://ssh-gateway.example.com',
    },
    required: ['name'],
  })
  .openapi('CreateRegion')

const CreateRegionResponseSchema = z
  .object({
    id: z.string().openapi({ description: 'ID of the created region', example: 'region_12345' }),
    proxyApiKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Proxy API key for the region', example: 'proxy-api-key-xyz' }),
    sshGatewayApiKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'SSH Gateway API key for the region',
        example: 'ssh-gateway-api-key-abc',
      }),
    snapshotManagerUsername: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Snapshot Manager username for the region', example: 'daytona' }),
    snapshotManagerPassword: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Snapshot Manager password for the region' }),
  })
  .openapi({
    example: {
      proxyApiKey: 'proxy-api-key-xyz',
      snapshotManagerUsername: 'daytona',
      snapshotManagerPassword: 'snapshotManagerPassword',
      id: 'region_12345',
      sshGatewayApiKey: 'ssh-gateway-api-key-abc',
    },
    required: ['id'],
  })
  .openapi('CreateRegionResponse')

const RegenerateApiKeyResponseSchema = z
  .object({
    apiKey: z
      .string()
      .openapi({ description: 'The newly generated API key', example: 'api-key-xyz123' }),
  })
  .openapi({ example: { apiKey: 'api-key-xyz123' }, required: ['apiKey'] })
  .openapi('RegenerateApiKeyResponse')

const UpdateRegionSchema = z
  .object({
    proxyUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Proxy URL for the region', example: 'https://proxy.example.com' }),
    sshGatewayUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'SSH Gateway URL for the region',
        example: 'ssh://ssh-gateway.example.com',
      }),
    snapshotManagerUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Snapshot Manager URL for the region',
        example: 'https://snapshot-manager.example.com',
      }),
  })
  .openapi({
    example: {
      snapshotManagerUrl: 'https://snapshot-manager.example.com',
      proxyUrl: 'https://proxy.example.com',
      sshGatewayUrl: 'ssh://ssh-gateway.example.com',
    },
    required: [],
  })
  .openapi('UpdateRegion')

const SnapshotManagerCredentialsSchema = z
  .object({
    username: z
      .string()
      .openapi({ description: 'Snapshot Manager username for the region', example: 'daytona' }),
    password: z.string().openapi({ description: 'Snapshot Manager password for the region' }),
  })
  .openapi({
    example: { password: 'password', username: 'daytona' },
    required: ['password', 'username'],
  })
  .openapi('SnapshotManagerCredentials')

const UserPublicKeySchema = z
  .object({
    key: z.string().openapi({ description: 'Public key' }),
    name: z.string().openapi({ description: 'Key name' }),
  })
  .openapi({ example: { name: 'name', key: 'key' }, required: ['key', 'name'] })
  .openapi('UserPublicKey')

const UserSchema = z
  .object({
    id: z.string().openapi({ description: 'User ID' }),
    name: z.string().openapi({ description: 'User name' }),
    email: z.string().openapi({ description: 'User email' }),
    publicKeys: z.array(UserPublicKeySchema).openapi({ description: 'User public keys' }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ description: 'Creation timestamp' }),
  })
  .openapi({
    example: {
      createdAt: '2000-01-23T04:56:07.000+00:00',
      publicKeys: [
        { name: 'name', key: 'key' },
        { name: 'name', key: 'key' },
      ],
      name: 'name',
      id: 'id',
      email: 'email',
    },
    required: ['createdAt', 'email', 'id', 'name', 'publicKeys'],
  })
  .openapi('User')

const AccountProviderSchema = z
  .object({ name: z.string(), displayName: z.string() })
  .openapi({
    example: { displayName: 'displayName', name: 'name' },
    required: ['displayName', 'name'],
  })
  .openapi('AccountProvider')

const CreateLinkedAccountSchema = z
  .object({
    provider: z
      .string()
      .openapi({ description: 'The authentication provider of the secondary account' }),
    userId: z.string().openapi({ description: 'The user ID of the secondary account' }),
  })
  .openapi({
    example: { provider: 'provider', userId: 'userId' },
    required: ['provider', 'userId'],
  })
  .openapi('CreateLinkedAccount')

const SandboxStateSchema = z
  .enum([
    'creating',
    'restoring',
    'destroyed',
    'destroying',
    'started',
    'stopped',
    'starting',
    'stopping',
    'error',
    'build_failed',
    'pending_build',
    'building_snapshot',
    'unknown',
    'pulling_snapshot',
    'archived',
    'archiving',
    'resizing',
    'snapshotting',
    'forking',
    'pausing',
    'paused',
    'resuming',
  ])
  .openapi('SandboxState')

const SandboxListSortFieldSchema = z
  .enum(['name', 'cpu', 'memoryGib', 'diskGib', 'lastActivityAt', 'createdAt'])
  .openapi('SandboxListSortField')

const SandboxListSortDirectionSchema = z.enum(['asc', 'desc']).openapi('SandboxListSortDirection')

const SandboxDesiredStateSchema = z
  .enum(['destroyed', 'started', 'stopped', 'resized', 'archived', 'paused'])
  .openapi({ description: 'The desired state of the sandbox' })
  .openapi('SandboxDesiredState')

const SandboxListItemSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the sandbox', example: 'sandbox123' }),
    organizationId: z
      .string()
      .openapi({ description: 'The organization ID of the sandbox', example: 'organization123' }),
    name: z.string().openapi({ description: 'The name of the sandbox', example: 'MySandbox' }),
    target: z
      .string()
      .openapi({ description: 'The target environment for the sandbox', example: 'local' }),
    runnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The runner ID of the sandbox', example: 'runner123' }),
    sandboxClass: SandboxClassSchema.exactOptional().openapi({
      description: 'The class of the sandbox',
      example: 'linux-vm',
    }),
    state: SandboxStateSchema.exactOptional().openapi({
      description: 'The state of the sandbox',
      example: 'creating',
    }),
    desiredState: SandboxDesiredStateSchema.exactOptional().openapi({
      description: 'The desired state of the sandbox',
      example: 'destroyed',
    }),
    snapshot: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The snapshot used for the sandbox',
        example: 'daytonaio/sandbox:latest',
      }),
    user: z
      .string()
      .openapi({ description: 'The user associated with the project', example: 'daytona' }),
    errorReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error reason of the sandbox',
        example: 'The sandbox is not running',
      }),
    recoverable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the sandbox error is recoverable.', example: true }),
    public: z
      .boolean()
      .openapi({ description: 'Whether the sandbox http preview is public', example: false }),
    cpu: z.number().openapi({ description: 'The CPU quota for the sandbox', example: 2 }),
    gpu: z.number().openapi({ description: 'The GPU quota for the sandbox', example: 0 }),
    gpuType: GpuTypeSchema.exactOptional().openapi({
      description: 'The GPU type assigned to the sandbox',
      example: 'H100',
    }),
    memory: z.number().openapi({ description: 'The memory quota for the sandbox', example: 4 }),
    disk: z.number().openapi({ description: 'The disk quota for the sandbox', example: 10 }),
    labels: z
      .record(z.string(), z.string())
      .openapi({ description: 'Labels for the sandbox', example: { 'daytona.io/public': 'true' } }),
    backupState: z
      .enum(['None', 'Pending', 'InProgress', 'Completed', 'Error'])
      .exactOptional()
      .openapi({ description: 'The state of the backup', example: 'None' }),
    autoStopInterval: z
      .number()
      .exactOptional()
      .openapi({ description: 'Auto-stop interval in minutes (0 means disabled)', example: 30 }),
    autoArchiveInterval: z
      .number()
      .exactOptional()
      .openapi({ description: 'Auto-archive interval in minutes', example: 10080 }),
    autoDeleteInterval: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Auto-delete interval in minutes (negative value means disabled, 0 means delete immediately upon stopping)',
        example: 30,
      }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The creation timestamp of the sandbox',
        example: '2024-10-01T12:00:00Z',
      }),
    updatedAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last update timestamp of the sandbox',
        example: '2024-10-01T12:00:00Z',
      }),
    lastActivityAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last activity timestamp of the sandbox',
        example: '2024-10-01T12:00:00Z',
      }),
    daemonVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The version of the daemon running in the sandbox',
        example: '1.0.0',
      }),
    toolboxProxyUrl: z
      .string()
      .openapi({
        description: 'The toolbox proxy URL for the sandbox',
        example: 'https://proxy.app.daytona.io/toolbox',
      }),
  })
  .openapi({
    example: {
      memory: 4,
      toolboxProxyUrl: 'https://proxy.app.daytona.io/toolbox',
      lastActivityAt: '2024-10-01T12:00:00Z',
      autoStopInterval: 30,
      organizationId: 'organization123',
      createdAt: '2024-10-01T12:00:00Z',
      autoDeleteInterval: 30,
      public: false,
      errorReason: 'The sandbox is not running',
      runnerId: 'runner123',
      id: 'sandbox123',
      state: 'creating',
      sandboxClass: 'linux-vm',
      gpuType: 'H100',
      updatedAt: '2024-10-01T12:00:00Z',
      desiredState: 'destroyed',
      recoverable: true,
      cpu: 2,
      gpu: 0,
      daemonVersion: '1.0.0',
      target: 'local',
      labels: { 'daytona.io/public': 'true' },
      disk: 10,
      name: 'MySandbox',
      backupState: 'None',
      user: 'daytona',
      autoArchiveInterval: 10080,
      snapshot: 'daytonaio/sandbox:latest',
    },
    required: [
      'cpu',
      'disk',
      'gpu',
      'id',
      'labels',
      'memory',
      'name',
      'organizationId',
      'public',
      'target',
      'toolboxProxyUrl',
      'user',
    ],
  })
  .openapi('SandboxListItem')

const ListSandboxesResponseSchema = z
  .object({
    items: z
      .array(SandboxListItemSchema)
      .openapi({ description: 'List of results for the current page' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'Cursor for the next page of results' }),
  })
  .openapi({
    example: {
      nextCursor: 'nextCursor',
      items: [
        {
          memory: 4,
          toolboxProxyUrl: 'https://proxy.app.daytona.io/toolbox',
          lastActivityAt: '2024-10-01T12:00:00Z',
          autoStopInterval: 30,
          organizationId: 'organization123',
          createdAt: '2024-10-01T12:00:00Z',
          autoDeleteInterval: 30,
          public: false,
          errorReason: 'The sandbox is not running',
          runnerId: 'runner123',
          id: 'sandbox123',
          state: 'creating',
          sandboxClass: 'linux-vm',
          gpuType: 'H100',
          updatedAt: '2024-10-01T12:00:00Z',
          desiredState: 'destroyed',
          recoverable: true,
          cpu: 2,
          gpu: 0,
          daemonVersion: '1.0.0',
          target: 'local',
          labels: { 'daytona.io/public': 'true' },
          disk: 10,
          name: 'MySandbox',
          backupState: 'None',
          user: 'daytona',
          autoArchiveInterval: 10080,
          snapshot: 'daytonaio/sandbox:latest',
        },
        {
          memory: 4,
          toolboxProxyUrl: 'https://proxy.app.daytona.io/toolbox',
          lastActivityAt: '2024-10-01T12:00:00Z',
          autoStopInterval: 30,
          organizationId: 'organization123',
          createdAt: '2024-10-01T12:00:00Z',
          autoDeleteInterval: 30,
          public: false,
          errorReason: 'The sandbox is not running',
          runnerId: 'runner123',
          id: 'sandbox123',
          state: 'creating',
          sandboxClass: 'linux-vm',
          gpuType: 'H100',
          updatedAt: '2024-10-01T12:00:00Z',
          desiredState: 'destroyed',
          recoverable: true,
          cpu: 2,
          gpu: 0,
          daemonVersion: '1.0.0',
          target: 'local',
          labels: { 'daytona.io/public': 'true' },
          disk: 10,
          name: 'MySandbox',
          backupState: 'None',
          user: 'daytona',
          autoArchiveInterval: 10080,
          snapshot: 'daytonaio/sandbox:latest',
        },
      ],
    },
    required: ['items', 'nextCursor'],
  })
  .openapi('ListSandboxesResponse')

const SandboxVolumeSchema = z
  .object({
    volumeId: z
      .string()
      .openapi({
        description: 'The ID or name of the volume. Resolved to the volume ID on sandbox create.',
        example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      }),
    mountPath: z
      .string()
      .openapi({ description: 'The mount path for the volume', example: '/data' }),
    subpath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional subpath within the volume to mount. When specified, only this S3 prefix will be accessible. When omitted, the entire volume is mounted.',
        example: 'users/alice',
      }),
  })
  .openapi({
    example: {
      mountPath: '/data',
      volumeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      subpath: 'users/alice',
    },
    required: ['mountPath', 'volumeId'],
  })
  .openapi('SandboxVolume')

const BuildInfoSchema = z
  .object({
    dockerfileContent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Dockerfile content used for the build',
        example: 'FROM node:14\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD ["npm", "start"]',
      }),
    contextHashes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The context hashes used for the build',
        example: ['hash1', 'hash2'],
      }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ description: 'The creation timestamp' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The last update timestamp' }),
    snapshotRef: z
      .string()
      .openapi({ description: 'The snapshot reference', example: 'daytonaio/sandbox:latest' }),
  })
  .openapi({ required: ['createdAt', 'snapshotRef', 'updatedAt'] })
  .openapi('BuildInfo')

const SandboxSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the sandbox', example: 'sandbox123' }),
    organizationId: z
      .string()
      .openapi({ description: 'The organization ID of the sandbox', example: 'organization123' }),
    name: z.string().openapi({ description: 'The name of the sandbox', example: 'MySandbox' }),
    snapshot: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The snapshot used for the sandbox',
        example: 'daytonaio/sandbox:latest',
      }),
    user: z
      .string()
      .openapi({ description: 'The user associated with the project', example: 'daytona' }),
    env: z
      .record(z.string(), z.string())
      .openapi({
        description: 'Environment variables for the sandbox',
        example: { NODE_ENV: 'production' },
      }),
    labels: z
      .record(z.string(), z.string())
      .openapi({ description: 'Labels for the sandbox', example: { 'daytona.io/public': 'true' } }),
    public: z
      .boolean()
      .openapi({ description: 'Whether the sandbox http preview is public', example: false }),
    networkBlockAll: z
      .boolean()
      .openapi({
        description: 'Whether to block all network access for the sandbox',
        example: false,
      }),
    networkAllowList: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of allowed CIDR network addresses for the sandbox',
        example: '192.168.1.0/16,10.0.0.0/24',
      }),
    domainAllowList: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of allowed domains for the sandbox',
        example: 'example.com,*.daytona.io',
      }),
    target: z
      .string()
      .openapi({ description: 'The target environment for the sandbox', example: 'local' }),
    cpu: z.number().openapi({ description: 'The CPU quota for the sandbox', example: 2 }),
    gpu: z.number().openapi({ description: 'The GPU quota for the sandbox', example: 0 }),
    gpuType: GpuTypeSchema.exactOptional().openapi({
      description: 'The GPU type assigned to the sandbox',
      example: 'H100',
    }),
    memory: z.number().openapi({ description: 'The memory quota for the sandbox', example: 4 }),
    disk: z.number().openapi({ description: 'The disk quota for the sandbox', example: 10 }),
    state: SandboxStateSchema.exactOptional().openapi({
      description: 'The state of the sandbox',
      example: 'creating',
    }),
    desiredState: SandboxDesiredStateSchema.exactOptional().openapi({
      description: 'The desired state of the sandbox',
      example: 'destroyed',
    }),
    errorReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error reason of the sandbox',
        example: 'The sandbox is not running',
      }),
    recoverable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the sandbox error is recoverable.', example: true }),
    backupState: z
      .enum(['None', 'Pending', 'InProgress', 'Completed', 'Error'])
      .exactOptional()
      .openapi({ description: 'The state of the backup', example: 'None' }),
    backupCreatedAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The creation timestamp of the last backup',
        example: '2024-10-01T12:00:00Z',
      }),
    autoStopInterval: z
      .number()
      .exactOptional()
      .openapi({ description: 'Auto-stop interval in minutes (0 means disabled)', example: 30 }),
    autoArchiveInterval: z
      .number()
      .exactOptional()
      .openapi({ description: 'Auto-archive interval in minutes', example: 10080 }),
    autoDeleteInterval: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Auto-delete interval in minutes (negative value means disabled, 0 means delete immediately upon stopping)',
        example: 30,
      }),
    volumes: z
      .array(SandboxVolumeSchema)
      .exactOptional()
      .openapi({ description: 'Array of volumes attached to the sandbox' }),
    buildInfo: BuildInfoSchema.exactOptional().openapi({
      description: 'Build information for the sandbox',
    }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The creation timestamp of the sandbox',
        example: '2024-10-01T12:00:00Z',
      }),
    updatedAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last update timestamp of the sandbox',
        example: '2024-10-01T12:00:00Z',
      }),
    lastActivityAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last activity timestamp of the sandbox',
        example: '2024-10-01T12:00:00Z',
      }),
    sandboxClass: z
      .enum(['linux-vm', 'container', 'android', 'windows'])
      .exactOptional()
      .openapi({
        description: 'The class of the sandbox',
        example: 'linux-vm',
        'x-enum-varnames': ['LINUX_VM', 'CONTAINER', 'ANDROID', 'WINDOWS'],
      }),
    daemonVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The version of the daemon running in the sandbox',
        example: '1.0.0',
      }),
    runnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The runner ID of the sandbox', example: 'runner123' }),
    linkedSandboxId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the sandbox this sandbox is linked to. When set, the sandbox is co-located on the same runner as the linked sandbox.',
        example: 'sandbox123',
      }),
    toolboxProxyUrl: z
      .string()
      .openapi({
        description: 'The toolbox proxy URL for the sandbox',
        example: 'https://proxy.app.daytona.io/toolbox',
      }),
  })
  .openapi({
    example: {
      memory: 4,
      linkedSandboxId: 'sandbox123',
      buildInfo: '',
      toolboxProxyUrl: 'https://proxy.app.daytona.io/toolbox',
      lastActivityAt: '2024-10-01T12:00:00Z',
      autoStopInterval: 30,
      organizationId: 'organization123',
      createdAt: '2024-10-01T12:00:00Z',
      networkBlockAll: false,
      autoDeleteInterval: 30,
      domainAllowList: 'example.com,*.daytona.io',
      public: false,
      errorReason: 'The sandbox is not running',
      runnerId: 'runner123',
      id: 'sandbox123',
      state: 'creating',
      gpuType: 'H100',
      updatedAt: '2024-10-01T12:00:00Z',
      sandboxClass: 'linux-vm',
      desiredState: 'destroyed',
      networkAllowList: '192.168.1.0/16,10.0.0.0/24',
      volumes: [
        {
          mountPath: '/data',
          volumeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          subpath: 'users/alice',
        },
        {
          mountPath: '/data',
          volumeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          subpath: 'users/alice',
        },
      ],
      cpu: 2,
      recoverable: true,
      env: { NODE_ENV: 'production' },
      gpu: 0,
      daemonVersion: '1.0.0',
      backupCreatedAt: '2024-10-01T12:00:00Z',
      labels: { 'daytona.io/public': 'true' },
      target: 'local',
      disk: 10,
      name: 'MySandbox',
      backupState: 'None',
      user: 'daytona',
      autoArchiveInterval: 10080,
      snapshot: 'daytonaio/sandbox:latest',
    },
    required: [
      'cpu',
      'disk',
      'env',
      'gpu',
      'id',
      'labels',
      'memory',
      'name',
      'networkBlockAll',
      'organizationId',
      'public',
      'target',
      'toolboxProxyUrl',
      'user',
    ],
  })
  .openapi('Sandbox')

const PaginatedSandboxesDeprecatedSchema = z
  .object({
    items: z.array(SandboxSchema),
    total: z.number(),
    page: z.number(),
    totalPages: z.number(),
  })
  .openapi({
    example: {
      total: 0.8008281904610115,
      totalPages: 1.4658129805029452,
      page: 6.027456183070403,
      items: [
        {
          memory: 4,
          linkedSandboxId: 'sandbox123',
          buildInfo: '',
          toolboxProxyUrl: 'https://proxy.app.daytona.io/toolbox',
          lastActivityAt: '2024-10-01T12:00:00Z',
          autoStopInterval: 30,
          organizationId: 'organization123',
          createdAt: '2024-10-01T12:00:00Z',
          networkBlockAll: false,
          autoDeleteInterval: 30,
          domainAllowList: 'example.com,*.daytona.io',
          public: false,
          errorReason: 'The sandbox is not running',
          runnerId: 'runner123',
          id: 'sandbox123',
          state: 'creating',
          gpuType: 'H100',
          updatedAt: '2024-10-01T12:00:00Z',
          sandboxClass: 'linux-vm',
          desiredState: 'destroyed',
          networkAllowList: '192.168.1.0/16,10.0.0.0/24',
          volumes: [
            {
              mountPath: '/data',
              volumeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              subpath: 'users/alice',
            },
            {
              mountPath: '/data',
              volumeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              subpath: 'users/alice',
            },
          ],
          cpu: 2,
          recoverable: true,
          env: { NODE_ENV: 'production' },
          gpu: 0,
          daemonVersion: '1.0.0',
          backupCreatedAt: '2024-10-01T12:00:00Z',
          labels: { 'daytona.io/public': 'true' },
          target: 'local',
          disk: 10,
          name: 'MySandbox',
          backupState: 'None',
          user: 'daytona',
          autoArchiveInterval: 10080,
          snapshot: 'daytonaio/sandbox:latest',
        },
        {
          memory: 4,
          linkedSandboxId: 'sandbox123',
          buildInfo: '',
          toolboxProxyUrl: 'https://proxy.app.daytona.io/toolbox',
          lastActivityAt: '2024-10-01T12:00:00Z',
          autoStopInterval: 30,
          organizationId: 'organization123',
          createdAt: '2024-10-01T12:00:00Z',
          networkBlockAll: false,
          autoDeleteInterval: 30,
          domainAllowList: 'example.com,*.daytona.io',
          public: false,
          errorReason: 'The sandbox is not running',
          runnerId: 'runner123',
          id: 'sandbox123',
          state: 'creating',
          gpuType: 'H100',
          updatedAt: '2024-10-01T12:00:00Z',
          sandboxClass: 'linux-vm',
          desiredState: 'destroyed',
          networkAllowList: '192.168.1.0/16,10.0.0.0/24',
          volumes: [
            {
              mountPath: '/data',
              volumeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              subpath: 'users/alice',
            },
            {
              mountPath: '/data',
              volumeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              subpath: 'users/alice',
            },
          ],
          cpu: 2,
          recoverable: true,
          env: { NODE_ENV: 'production' },
          gpu: 0,
          daemonVersion: '1.0.0',
          backupCreatedAt: '2024-10-01T12:00:00Z',
          labels: { 'daytona.io/public': 'true' },
          target: 'local',
          disk: 10,
          name: 'MySandbox',
          backupState: 'None',
          user: 'daytona',
          autoArchiveInterval: 10080,
          snapshot: 'daytonaio/sandbox:latest',
        },
      ],
    },
    required: ['items', 'page', 'total', 'totalPages'],
  })
  .openapi('PaginatedSandboxesDeprecated')

const CreateBuildInfoSchema = z
  .object({
    dockerfileContent: z
      .string()
      .openapi({
        description: 'The Dockerfile content used for the build',
        example: 'FROM node:14\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD ["npm", "start"]',
      }),
    contextHashes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The context hashes used for the build',
        example: ['hash1', 'hash2'],
      }),
  })
  .openapi({ required: ['dockerfileContent'] })
  .openapi('CreateBuildInfo')

const CreateSandboxSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the sandbox. If not provided, the sandbox ID will be used as the name',
        example: 'MySandbox',
      }),
    snapshot: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID or name of the snapshot used for the sandbox',
        example: 'ubuntu-4vcpu-8ram-100gb',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user associated with the project', example: 'daytona' }),
    env: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Environment variables for the sandbox',
        example: { NODE_ENV: 'production' },
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels for the sandbox', example: { 'daytona.io/public': 'true' } }),
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the sandbox http preview is publicly accessible',
        example: false,
      }),
    networkBlockAll: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to block all network access for the sandbox',
        example: false,
      }),
    networkAllowList: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of allowed CIDR network addresses for the sandbox',
        example: '192.168.1.0/16,10.0.0.0/24',
      }),
    domainAllowList: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of allowed domains for the sandbox',
        example: 'example.com,*.daytona.io',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The target (region) where the sandbox will be created',
        example: 'us',
      }),
    cpu: z
      .int()
      .exactOptional()
      .openapi({ description: 'CPU cores allocated to the sandbox', example: 2 }),
    gpu: z
      .int()
      .exactOptional()
      .openapi({ description: 'GPU units allocated to the sandbox', example: 1 }),
    gpuType: z
      .array(GpuTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Preferred GPU type for the sandbox. Accepts a single value or an ordered preference list — the scheduler tries each in order and pins the sandbox to the first that has capacity.',
        example: ['H100'],
      }),
    memory: z
      .int()
      .exactOptional()
      .openapi({ description: 'Memory allocated to the sandbox in GB', example: 1 }),
    disk: z
      .int()
      .exactOptional()
      .openapi({ description: 'Disk space allocated to the sandbox in GB', example: 3 }),
    autoStopInterval: z
      .int()
      .exactOptional()
      .openapi({ description: 'Auto-stop interval in minutes (0 means disabled)', example: 30 }),
    autoArchiveInterval: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Auto-archive interval in minutes (0 means the maximum interval will be used)',
        example: 10080,
      }),
    autoDeleteInterval: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Auto-delete interval in minutes (negative value means disabled, 0 means delete immediately upon stopping)',
        example: 30,
      }),
    volumes: z
      .array(SandboxVolumeSchema)
      .exactOptional()
      .openapi({ description: 'Array of volumes to attach to the sandbox' }),
    buildInfo: CreateBuildInfoSchema.exactOptional().openapi({
      description: 'Build information for the sandbox',
    }),
    linkedSandbox: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID or name of an existing sandbox to link the new sandbox to. The new sandbox will be scheduled on the same runner as the linked sandbox so a local network can be established between them. Linked sandboxes must be ephemeral (autoDeleteInterval=0) and cannot themselves be linked to another sandbox.',
        example: 'sandbox123',
      }),
  })
  .openapi({
    example: {
      memory: 1,
      buildInfo: '',
      networkAllowList: '192.168.1.0/16,10.0.0.0/24',
      volumes: [
        {
          mountPath: '/data',
          volumeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          subpath: 'users/alice',
        },
        {
          mountPath: '/data',
          volumeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          subpath: 'users/alice',
        },
      ],
      cpu: 2,
      env: { NODE_ENV: 'production' },
      gpu: 1,
      autoStopInterval: 30,
      labels: { 'daytona.io/public': 'true' },
      target: 'us',
      networkBlockAll: false,
      disk: 3,
      autoDeleteInterval: 30,
      domainAllowList: 'example.com,*.daytona.io',
      public: false,
      linkedSandbox: 'sandbox123',
      name: 'MySandbox',
      user: 'daytona',
      autoArchiveInterval: 10080,
      snapshot: 'ubuntu-4vcpu-8ram-100gb',
      gpuType: ['H100'],
    },
    required: [],
  })
  .openapi('CreateSandbox')

const ResizeSandboxSchema = z
  .object({
    cpu: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({ description: 'CPU cores to allocate to the sandbox (minimum: 1)', example: 2 }),
    memory: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Memory in GB to allocate to the sandbox (minimum: 1)', example: 4 }),
    disk: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Disk space in GB to allocate to the sandbox (can only be increased)',
        example: 20,
      }),
  })
  .openapi({ example: { disk: 20, memory: 4, cpu: 2 }, required: [] })
  .openapi('ResizeSandbox')

const SandboxLabelsSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .openapi({
        description: 'Key-value pairs of labels',
        example: { environment: 'dev', team: 'backend' },
      }),
  })
  .openapi({ example: { labels: { environment: 'dev', team: 'backend' } }, required: ['labels'] })
  .openapi('SandboxLabels')

const UpdateSandboxStateDtoSchema = z
  .object({
    state: z
      .enum([
        'creating',
        'restoring',
        'destroyed',
        'destroying',
        'started',
        'stopped',
        'starting',
        'stopping',
        'error',
        'build_failed',
        'pending_build',
        'building_snapshot',
        'unknown',
        'pulling_snapshot',
        'archived',
        'archiving',
        'resizing',
        'snapshotting',
        'forking',
        'pausing',
        'paused',
        'resuming',
      ])
      .openapi({ description: 'The new state for the sandbox', example: 'started' }),
    errorReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional error message when reporting an error state',
        example: 'Failed to pull snapshot image',
      }),
    recoverable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the sandbox is recoverable', example: true }),
  })
  .openapi({
    example: { errorReason: 'Failed to pull snapshot image', recoverable: true, state: 'started' },
    required: ['state'],
  })
  .openapi('UpdateSandboxStateDto')

const CreateSandboxSnapshotSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'Name for the new snapshot', example: 'my-dev-env-v1' }),
    includeMemory: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Include the VM's memory in the snapshot. VM sandboxes only. When true the sandbox must be STARTED; when false (default) VM sandboxes must be STOPPED. Container sandboxes do not support memory snapshots.",
      }),
  })
  .openapi({ example: { includeMemory: false, name: 'my-dev-env-v1' }, required: ['name'] })
  .openapi('CreateSandboxSnapshot')

const ForkSandboxSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name for the forked sandbox. If not provided, a unique name will be generated.',
        example: 'my-forked-sandbox',
      }),
  })
  .openapi({ example: { name: 'my-forked-sandbox' }, required: [] })
  .openapi('ForkSandbox')

const UpdateSandboxNetworkSettingsSchema = z
  .object({
    networkBlockAll: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to block all network access for the sandbox',
        example: false,
      }),
    networkAllowList: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of allowed CIDR network addresses for the sandbox',
        example: '192.168.1.0/16,10.0.0.0/24',
      }),
    domainAllowList: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of allowed domains for the sandbox',
        example: 'example.com,*.daytona.io',
      }),
  })
  .openapi({
    example: {
      networkBlockAll: false,
      domainAllowList: 'example.com,*.daytona.io',
      networkAllowList: '192.168.1.0/16,10.0.0.0/24',
    },
    required: [],
  })
  .openapi('UpdateSandboxNetworkSettings')

const PortPreviewUrlSchema = z
  .object({
    sandboxId: z.string().openapi({ description: 'ID of the sandbox', example: '123456' }),
    url: z
      .string()
      .openapi({ description: 'Preview url', example: 'https://{port}-{sandboxId}.{proxyDomain}' }),
    token: z
      .string()
      .openapi({ description: 'Access token', example: 'ul67qtv-jl6wb9z5o3eii-ljqt9qed6l' }),
  })
  .openapi({
    example: {
      sandboxId: '123456',
      url: 'https://{port}-{sandboxId}.{proxyDomain}',
      token: 'ul67qtv-jl6wb9z5o3eii-ljqt9qed6l',
    },
    required: ['sandboxId', 'token', 'url'],
  })
  .openapi('PortPreviewUrl')

const SignedPortPreviewUrlSchema = z
  .object({
    sandboxId: z.string().openapi({ description: 'ID of the sandbox', example: '123456' }),
    port: z.int().openapi({ description: 'Port number of the signed preview URL', example: 3000 }),
    token: z
      .string()
      .openapi({ description: 'Token of the signed preview URL', example: 'jl6wb9z5o3eii' }),
    url: z
      .string()
      .openapi({
        description: 'Signed preview url',
        example: 'https://{port}-{token}.{proxyDomain}',
      }),
  })
  .openapi({
    example: {
      port: 3000,
      sandboxId: '123456',
      url: 'https://{port}-{token}.{proxyDomain}',
      token: 'jl6wb9z5o3eii',
    },
    required: ['port', 'sandboxId', 'token', 'url'],
  })
  .openapi('SignedPortPreviewUrl')

const UrlSchema = z
  .object({ url: z.string().openapi({ description: 'URL response' }) })
  .openapi({ example: { url: 'url' }, required: ['url'] })
  .openapi('Url')

const SshAccessDtoSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the SSH access',
        example: '123e4567-e89b-12d3-a456-426614174000',
      }),
    sandboxId: z
      .string()
      .openapi({
        description: 'ID of the sandbox this SSH access is for',
        example: '123e4567-e89b-12d3-a456-426614174000',
      }),
    token: z
      .string()
      .openapi({
        description: 'SSH access token',
        example: 'abc123def456ghi789jkl012mno345pqr678stu901vwx234yz',
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the SSH access expires', example: '2025-01-01T12:00:00Z' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the SSH access was created', example: '2025-01-01T11:00:00Z' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'When the SSH access was last updated',
        example: '2025-01-01T11:00:00Z',
      }),
    sshCommand: z
      .string()
      .openapi({
        description: 'SSH command to connect to the sandbox',
        example: 'ssh -p 2222 token@localhost',
      }),
  })
  .openapi({
    example: {
      createdAt: '2025-01-01T11:00:00Z',
      sshCommand: 'ssh -p 2222 token@localhost',
      sandboxId: '123e4567-e89b-12d3-a456-426614174000',
      id: '123e4567-e89b-12d3-a456-426614174000',
      expiresAt: '2025-01-01T12:00:00Z',
      token: 'abc123def456ghi789jkl012mno345pqr678stu901vwx234yz',
      updatedAt: '2025-01-01T11:00:00Z',
    },
    required: ['createdAt', 'expiresAt', 'id', 'sandboxId', 'sshCommand', 'token', 'updatedAt'],
  })
  .openapi('SshAccessDto')

const SshAccessValidationDtoSchema = z
  .object({
    valid: z
      .boolean()
      .openapi({ description: 'Whether the SSH access token is valid', example: true }),
    sandboxId: z
      .string()
      .openapi({
        description: 'ID of the sandbox this SSH access is for',
        example: '123e4567-e89b-12d3-a456-426614174000',
      }),
  })
  .openapi({
    example: { valid: true, sandboxId: '123e4567-e89b-12d3-a456-426614174000' },
    required: ['sandboxId', 'valid'],
  })
  .openapi('SshAccessValidationDto')

const ToolboxProxyUrlSchema = z
  .object({
    url: z
      .string()
      .openapi({
        description: 'The toolbox proxy URL for the sandbox',
        example: 'https://proxy.app.daytona.io/toolbox',
      }),
  })
  .openapi({ example: { url: 'https://proxy.app.daytona.io/toolbox' }, required: ['url'] })
  .openapi('ToolboxProxyUrl')

const RegionQuotaSchema = z
  .object({
    organizationId: z.string(),
    regionId: z.string(),
    sandboxClass: SandboxClassSchema,
    totalCpuQuota: z.number(),
    totalMemoryQuota: z.number(),
    totalDiskQuota: z.number(),
    totalGpuQuota: z.number(),
    allowedGpuTypes: z.array(GpuTypeSchema).exactOptional(),
    maxCpuPerSandbox: z.number().nullable(),
    maxMemoryPerSandbox: z.number().nullable(),
    maxDiskPerSandbox: z.number().nullable(),
    maxDiskPerNonEphemeralSandbox: z.number().nullable(),
    maxCpuPerGpuSandbox: z.number().nullable(),
    maxMemoryPerGpuSandbox: z.number().nullable(),
    maxDiskPerGpuSandbox: z.number().nullable(),
  })
  .openapi({
    example: {
      totalCpuQuota: 0.8008281904610115,
      allowedGpuTypes: ['H100', 'H100'],
      maxDiskPerGpuSandbox: 4.145608029883936,
      totalGpuQuota: 5.962133916683182,
      maxCpuPerGpuSandbox: 3.616076749251911,
      organizationId: 'organizationId',
      maxCpuPerSandbox: 5.637376656633329,
      maxDiskPerSandbox: 7.061401241503109,
      maxDiskPerNonEphemeralSandbox: 9.301444243932576,
      regionId: 'regionId',
      maxMemoryPerSandbox: 2.3021358869347655,
      totalMemoryQuota: 6.027456183070403,
      totalDiskQuota: 1.4658129805029452,
      sandboxClass: '',
      maxMemoryPerGpuSandbox: 2.027123023002322,
    },
    required: [
      'maxCpuPerGpuSandbox',
      'maxCpuPerSandbox',
      'maxDiskPerGpuSandbox',
      'maxDiskPerNonEphemeralSandbox',
      'maxDiskPerSandbox',
      'maxMemoryPerGpuSandbox',
      'maxMemoryPerSandbox',
      'organizationId',
      'regionId',
      'sandboxClass',
      'totalCpuQuota',
      'totalDiskQuota',
      'totalGpuQuota',
      'totalMemoryQuota',
    ],
  })
  .openapi('RegionQuota')

const CreateRunnerSchema = z
  .object({
    regionId: z.string(),
    name: z.string(),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags to associate with the runner', example: ['gpu', 'us-east'] }),
  })
  .openapi({
    example: { regionId: 'regionId', name: 'name', tags: ['gpu', 'us-east'] },
    required: ['name', 'regionId'],
  })
  .openapi('CreateRunner')

const CreateRunnerResponseSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the runner', example: 'runner123' }),
    apiKey: z
      .string()
      .openapi({ description: 'The API key for the runner', example: 'dtn_1234567890' }),
  })
  .openapi({ example: { apiKey: 'dtn_1234567890', id: 'runner123' }, required: ['apiKey', 'id'] })
  .openapi('CreateRunnerResponse')

const RunnerStateSchema = z
  .enum(['initializing', 'ready', 'disabled', 'decommissioned', 'unresponsive'])
  .openapi({ description: 'The state of the runner' })
  .openapi('RunnerState')

const RunnerClassSchema = z
  .literal('container')
  .openapi({
    description:
      'The class of the runner. Deprecated and always returns "container" for backward compatibility - use sandboxClass instead.',
  })
  .openapi('RunnerClass')

const RunnerFullSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the runner', example: 'runner123' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain of the runner', example: 'runner1.example.com' }),
    apiUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The API URL of the runner',
        example: 'https://api.runner1.example.com',
      }),
    proxyUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The proxy URL of the runner',
        example: 'https://proxy.runner1.example.com',
      }),
    cpu: z.number().openapi({ description: 'The CPU capacity of the runner', example: 8 }),
    memory: z
      .number()
      .openapi({ description: 'The memory capacity of the runner in GiB', example: 16 }),
    disk: z
      .number()
      .openapi({ description: 'The disk capacity of the runner in GiB', example: 100 }),
    gpu: z
      .number()
      .exactOptional()
      .openapi({ description: 'The GPU capacity of the runner', example: 1 }),
    gpuType: z.string().exactOptional().openapi({ description: 'The type of GPU' }),
    sandboxClass: SandboxClassSchema.exactOptional().openapi({
      description: 'The sandbox class supported by this runner',
      example: 'linux-vm',
    }),
    currentCpuUsagePercentage: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current CPU usage percentage', example: 45.6 }),
    currentMemoryUsagePercentage: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current RAM usage percentage', example: 68.2 }),
    currentDiskUsagePercentage: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current disk usage percentage', example: 33.8 }),
    currentAllocatedCpu: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current allocated CPU', example: 4000 }),
    currentAllocatedMemoryGiB: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current allocated memory in GiB', example: 8000 }),
    currentAllocatedDiskGiB: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current allocated disk in GiB', example: 50000 }),
    currentSnapshotCount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current snapshot count', example: 12 }),
    currentStartedSandboxes: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current number of started sandboxes', example: 5 }),
    availabilityScore: z
      .number()
      .exactOptional()
      .openapi({ description: 'Runner availability score', example: 85 }),
    region: z.string().openapi({ description: 'The region of the runner', example: 'us' }),
    name: z.string().openapi({ description: 'The name of the runner', example: 'runner1' }),
    state: RunnerStateSchema.openapi({
      description: 'The state of the runner',
      example: 'initializing',
    }),
    lastChecked: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last time the runner was checked',
        example: '2024-10-01T12:00:00Z',
      }),
    unschedulable: z
      .boolean()
      .openapi({ description: 'Whether the runner is unschedulable', example: false }),
    tags: z
      .array(z.string())
      .openapi({ description: 'Tags associated with the runner', example: ['gpu', 'us-east'] }),
    createdAt: z
      .string()
      .openapi({
        description: 'The creation timestamp of the runner',
        example: '2023-10-01T12:00:00Z',
      }),
    updatedAt: z
      .string()
      .openapi({
        description: 'The last update timestamp of the runner',
        example: '2023-10-01T12:00:00Z',
      }),
    version: z
      .string()
      .openapi({
        deprecated: true,
        description: 'The version of the runner (deprecated in favor of apiVersion)',
        example: '0',
      }),
    apiVersion: z
      .string()
      .openapi({ deprecated: true, description: 'The api version of the runner', example: '0' }),
    runnerClass: RunnerClassSchema.openapi({
      deprecated: true,
      description:
        'The class of the runner. Deprecated and always returns "container" for backward compatibility - use sandboxClass instead.',
      example: 'container',
    }),
    appVersion: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The app version of the runner',
        example: 'v0.0.0-dev',
      }),
    apiKey: z
      .string()
      .openapi({ description: 'The API key for the runner', example: 'dtn_1234567890' }),
    regionType: RegionTypeSchema.exactOptional().openapi({
      description: 'The region type of the runner',
      example: 'shared',
    }),
  })
  .openapi({
    example: {
      currentStartedSandboxes: 5,
      appVersion: 'v0.0.0-dev',
      memory: 16,
      currentMemoryUsagePercentage: 68.2,
      apiKey: 'dtn_1234567890',
      availabilityScore: 85,
      currentDiskUsagePercentage: 33.8,
      currentCpuUsagePercentage: 45.6,
      createdAt: '2023-10-01T12:00:00Z',
      apiVersion: '0',
      apiUrl: 'https://api.runner1.example.com',
      regionType: 'shared',
      id: 'runner123',
      state: 'initializing',
      unschedulable: false,
      currentAllocatedDiskGiB: 50000,
      currentAllocatedMemoryGiB: 8000,
      gpuType: 'gpuType',
      sandboxClass: 'linux-vm',
      currentAllocatedCpu: 4000,
      updatedAt: '2023-10-01T12:00:00Z',
      proxyUrl: 'https://proxy.runner1.example.com',
      cpu: 8,
      gpu: 1,
      currentSnapshotCount: 12,
      version: '0',
      tags: ['gpu', 'us-east'],
      disk: 100,
      domain: 'runner1.example.com',
      name: 'runner1',
      runnerClass: 'container',
      region: 'us',
      lastChecked: '2024-10-01T12:00:00Z',
    },
    required: [
      'apiKey',
      'apiVersion',
      'cpu',
      'createdAt',
      'disk',
      'id',
      'memory',
      'name',
      'region',
      'runnerClass',
      'state',
      'tags',
      'unschedulable',
      'updatedAt',
      'version',
    ],
  })
  .openapi('RunnerFull')

const RunnerSnapshotDtoSchema = z
  .object({
    runnerSnapshotId: z
      .string()
      .openapi({
        description: 'Runner snapshot ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
      }),
    runnerId: z
      .string()
      .openapi({ description: 'Runner ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    runnerDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Runner domain', example: 'runner.example.com' }),
  })
  .openapi({
    example: {
      runnerDomain: 'runner.example.com',
      runnerId: '123e4567-e89b-12d3-a456-426614174000',
      runnerSnapshotId: '123e4567-e89b-12d3-a456-426614174000',
    },
    required: ['runnerId', 'runnerSnapshotId'],
  })
  .openapi('RunnerSnapshotDto')

const RunnerSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the runner', example: 'runner123' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain of the runner', example: 'runner1.example.com' }),
    apiUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The API URL of the runner',
        example: 'https://api.runner1.example.com',
      }),
    proxyUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The proxy URL of the runner',
        example: 'https://proxy.runner1.example.com',
      }),
    cpu: z.number().openapi({ description: 'The CPU capacity of the runner', example: 8 }),
    memory: z
      .number()
      .openapi({ description: 'The memory capacity of the runner in GiB', example: 16 }),
    disk: z
      .number()
      .openapi({ description: 'The disk capacity of the runner in GiB', example: 100 }),
    gpu: z
      .number()
      .exactOptional()
      .openapi({ description: 'The GPU capacity of the runner', example: 1 }),
    gpuType: z.string().exactOptional().openapi({ description: 'The type of GPU' }),
    sandboxClass: SandboxClassSchema.exactOptional().openapi({
      description: 'The sandbox class supported by this runner',
      example: 'linux-vm',
    }),
    currentCpuUsagePercentage: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current CPU usage percentage', example: 45.6 }),
    currentMemoryUsagePercentage: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current RAM usage percentage', example: 68.2 }),
    currentDiskUsagePercentage: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current disk usage percentage', example: 33.8 }),
    currentAllocatedCpu: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current allocated CPU', example: 4000 }),
    currentAllocatedMemoryGiB: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current allocated memory in GiB', example: 8000 }),
    currentAllocatedDiskGiB: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current allocated disk in GiB', example: 50000 }),
    currentSnapshotCount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current snapshot count', example: 12 }),
    currentStartedSandboxes: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current number of started sandboxes', example: 5 }),
    availabilityScore: z
      .number()
      .exactOptional()
      .openapi({ description: 'Runner availability score', example: 85 }),
    region: z.string().openapi({ description: 'The region of the runner', example: 'us' }),
    name: z.string().openapi({ description: 'The name of the runner', example: 'runner1' }),
    state: RunnerStateSchema.openapi({
      description: 'The state of the runner',
      example: 'initializing',
    }),
    lastChecked: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last time the runner was checked',
        example: '2024-10-01T12:00:00Z',
      }),
    unschedulable: z
      .boolean()
      .openapi({ description: 'Whether the runner is unschedulable', example: false }),
    tags: z
      .array(z.string())
      .openapi({ description: 'Tags associated with the runner', example: ['gpu', 'us-east'] }),
    createdAt: z
      .string()
      .openapi({
        description: 'The creation timestamp of the runner',
        example: '2023-10-01T12:00:00Z',
      }),
    updatedAt: z
      .string()
      .openapi({
        description: 'The last update timestamp of the runner',
        example: '2023-10-01T12:00:00Z',
      }),
    version: z
      .string()
      .openapi({
        deprecated: true,
        description: 'The version of the runner (deprecated in favor of apiVersion)',
        example: '0',
      }),
    apiVersion: z
      .string()
      .openapi({ deprecated: true, description: 'The api version of the runner', example: '0' }),
    runnerClass: RunnerClassSchema.openapi({
      deprecated: true,
      description:
        'The class of the runner. Deprecated and always returns "container" for backward compatibility - use sandboxClass instead.',
      example: 'container',
    }),
    appVersion: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The app version of the runner',
        example: 'v0.0.0-dev',
      }),
  })
  .openapi({
    example: {
      currentStartedSandboxes: 5,
      appVersion: 'v0.0.0-dev',
      memory: 16,
      currentMemoryUsagePercentage: 68.2,
      availabilityScore: 85,
      currentDiskUsagePercentage: 33.8,
      currentCpuUsagePercentage: 45.6,
      createdAt: '2023-10-01T12:00:00Z',
      apiVersion: '0',
      apiUrl: 'https://api.runner1.example.com',
      id: 'runner123',
      state: 'initializing',
      unschedulable: false,
      currentAllocatedDiskGiB: 50000,
      currentAllocatedMemoryGiB: 8000,
      gpuType: 'gpuType',
      sandboxClass: 'linux-vm',
      currentAllocatedCpu: 4000,
      updatedAt: '2023-10-01T12:00:00Z',
      proxyUrl: 'https://proxy.runner1.example.com',
      cpu: 8,
      gpu: 1,
      currentSnapshotCount: 12,
      version: '0',
      tags: ['gpu', 'us-east'],
      disk: 100,
      domain: 'runner1.example.com',
      name: 'runner1',
      runnerClass: 'container',
      region: 'us',
      lastChecked: '2024-10-01T12:00:00Z',
    },
    required: [
      'apiVersion',
      'cpu',
      'createdAt',
      'disk',
      'id',
      'memory',
      'name',
      'region',
      'runnerClass',
      'state',
      'tags',
      'unschedulable',
      'updatedAt',
      'version',
    ],
  })
  .openapi('Runner')

const RunnerHealthMetricsSchema = z
  .object({
    currentCpuLoadAverage: z
      .number()
      .openapi({ description: 'Current CPU load average', example: 0.98 }),
    currentCpuUsagePercentage: z
      .number()
      .openapi({ description: 'Current CPU usage percentage', example: 45.5 }),
    currentMemoryUsagePercentage: z
      .number()
      .openapi({ description: 'Current memory usage percentage', example: 60.2 }),
    currentDiskUsagePercentage: z
      .number()
      .openapi({ description: 'Current disk usage percentage', example: 35.8 }),
    currentAllocatedCpu: z
      .number()
      .openapi({ description: 'Currently allocated CPU cores', example: 8 }),
    currentAllocatedMemoryGiB: z
      .number()
      .openapi({ description: 'Currently allocated memory in GiB', example: 16 }),
    currentAllocatedDiskGiB: z
      .number()
      .openapi({ description: 'Currently allocated disk in GiB', example: 100 }),
    currentSnapshotCount: z
      .number()
      .openapi({ description: 'Number of snapshots currently stored', example: 5 }),
    currentStartedSandboxes: z
      .number()
      .openapi({ description: 'Number of started sandboxes', example: 10 }),
    cpu: z.number().openapi({ description: 'Total CPU cores on the runner', example: 8 }),
    memoryGiB: z.number().openapi({ description: 'Total RAM in GiB on the runner', example: 16 }),
    diskGiB: z
      .number()
      .openapi({ description: 'Total disk space in GiB on the runner', example: 100 }),
    gpu: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total number of GPUs on the runner', example: 4 }),
    gpuType: z
      .string()
      .exactOptional()
      .openapi({ description: 'GPU model name', example: 'NVIDIA H100 80GB HBM3' }),
  })
  .openapi({
    required: [
      'cpu',
      'currentAllocatedCpu',
      'currentAllocatedDiskGiB',
      'currentAllocatedMemoryGiB',
      'currentCpuLoadAverage',
      'currentCpuUsagePercentage',
      'currentDiskUsagePercentage',
      'currentMemoryUsagePercentage',
      'currentSnapshotCount',
      'currentStartedSandboxes',
      'diskGiB',
      'memoryGiB',
    ],
  })
  .openapi('RunnerHealthMetrics')

const RunnerServiceHealthSchema = z
  .object({
    serviceName: z
      .string()
      .openapi({ description: 'Name of the service being checked', example: 'runner' }),
    healthy: z.boolean().openapi({ description: 'Whether the service is healthy', example: false }),
    errorReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Error reason if the service is unhealthy',
        example: 'Cannot connect to the runner',
      }),
  })
  .openapi({
    example: { healthy: false, errorReason: 'Cannot connect to the runner', serviceName: 'runner' },
    required: ['healthy', 'serviceName'],
  })
  .openapi('RunnerServiceHealth')

const RunnerHealthcheckSchema = z
  .object({
    metrics: RunnerHealthMetricsSchema.exactOptional().openapi({ description: 'Runner metrics' }),
    serviceHealth: z
      .array(RunnerServiceHealthSchema)
      .exactOptional()
      .openapi({ description: 'Health status of individual services on the runner' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Runner domain', example: 'runner-123.daytona.example.com' }),
    proxyUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Runner proxy URL',
        example: 'http://proxy.daytona.example.com:8080',
      }),
    apiUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Runner API URL', example: 'http://api.daytona.example.com:8080' }),
    appVersion: z.string().openapi({ description: 'Runner app version', example: 'v0.0.0-dev' }),
  })
  .openapi({
    example: {
      appVersion: 'v0.0.0-dev',
      apiUrl: 'http://api.daytona.example.com:8080',
      proxyUrl: 'http://proxy.daytona.example.com:8080',
      domain: 'runner-123.daytona.example.com',
      serviceHealth: [
        { healthy: false, errorReason: 'Cannot connect to the runner', serviceName: 'runner' },
        { healthy: false, errorReason: 'Cannot connect to the runner', serviceName: 'runner' },
      ],
      metrics: '',
    },
    required: ['appVersion'],
  })
  .openapi('RunnerHealthcheck')

const ProjectDirResponseSchema = z
  .object({ dir: z.string().exactOptional() })
  .openapi({ example: { dir: 'dir' }, required: [] })
  .openapi('ProjectDirResponse')

const UserHomeDirResponseSchema = z
  .object({ dir: z.string().exactOptional() })
  .openapi({ example: { dir: 'dir' }, required: [] })
  .openapi('UserHomeDirResponse')

const WorkDirResponseSchema = z
  .object({ dir: z.string().exactOptional() })
  .openapi({ example: { dir: 'dir' }, required: [] })
  .openapi('WorkDirResponse')

const FileInfoSchema = z
  .object({
    name: z.string(),
    isDir: z.boolean(),
    size: z.number(),
    modTime: z.string(),
    mode: z.string(),
    permissions: z.string(),
    owner: z.string(),
    group: z.string(),
  })
  .openapi({
    example: {
      mode: 'mode',
      owner: 'owner',
      size: 0.8008281904610115,
      modTime: 'modTime',
      permissions: 'permissions',
      name: 'name',
      isDir: true,
      group: 'group',
    },
    required: ['group', 'isDir', 'modTime', 'mode', 'name', 'owner', 'permissions', 'size'],
  })
  .openapi('FileInfo')

const DownloadFilesSchema = z
  .object({
    paths: z.array(z.string()).openapi({ description: 'List of remote file paths to download' }),
  })
  .openapi({ example: { paths: ['paths', 'paths'] }, required: ['paths'] })
  .openapi('DownloadFiles')

const MatchSchema = z
  .object({ file: z.string(), line: z.number(), content: z.string() })
  .openapi({
    example: { file: 'file', line: 0.8008281904610115, content: 'content' },
    required: ['content', 'file', 'line'],
  })
  .openapi('Match')

const ReplaceRequestSchema = z
  .object({ files: z.array(z.string()), pattern: z.string(), newValue: z.string() })
  .openapi({
    example: { newValue: 'newValue', pattern: 'pattern', files: ['files', 'files'] },
    required: ['files', 'newValue', 'pattern'],
  })
  .openapi('ReplaceRequest')

const ReplaceResultSchema = z
  .object({
    file: z.string().exactOptional(),
    success: z.boolean().exactOptional(),
    error: z.string().exactOptional(),
  })
  .openapi({ example: { file: 'file', success: true, error: 'error' }, required: [] })
  .openapi('ReplaceResult')

const SearchFilesResponseSchema = z
  .object({ files: z.array(z.string()) })
  .openapi({ example: { files: ['files', 'files'] }, required: ['files'] })
  .openapi('SearchFilesResponse')

const UploadFileSchema = z
  .object({ file: z.file().openapi({ type: 'string', format: 'binary' }), path: z.string() })
  .openapi({ required: ['file', 'path'] })
  .openapi('UploadFile')

const GitAddRequestSchema = z
  .object({
    path: z.string(),
    files: z.array(z.string()).openapi({ description: 'files to add (use . for all files)' }),
  })
  .openapi({ example: { path: 'path', files: ['files', 'files'] }, required: ['files', 'path'] })
  .openapi('GitAddRequest')

const ListBranchResponseSchema = z
  .object({ branches: z.array(z.string()) })
  .openapi({ example: { branches: ['branches', 'branches'] }, required: ['branches'] })
  .openapi('ListBranchResponse')

const GitBranchRequestSchema = z
  .object({ path: z.string(), name: z.string() })
  .openapi({ example: { path: 'path', name: 'name' }, required: ['name', 'path'] })
  .openapi('GitBranchRequest')

const GitDeleteBranchRequestSchema = z
  .object({ path: z.string(), name: z.string() })
  .openapi({ example: { path: 'path', name: 'name' }, required: ['name', 'path'] })
  .openapi('GitDeleteBranchRequest')

const GitCloneRequestSchema = z
  .object({
    url: z.string(),
    path: z.string(),
    username: z.string().exactOptional(),
    password: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    commit_id: z.string().exactOptional(),
  })
  .openapi({
    example: {
      path: 'path',
      password: 'password',
      branch: 'branch',
      commit_id: 'commit_id',
      url: 'url',
      username: 'username',
    },
    required: ['path', 'url'],
  })
  .openapi('GitCloneRequest')

const GitCommitRequestSchema = z
  .object({
    path: z.string(),
    message: z.string(),
    author: z.string(),
    email: z.string(),
    allow_empty: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Allow creating an empty commit when no changes are staged' }),
  })
  .openapi({
    example: {
      path: 'path',
      author: 'author',
      message: 'message',
      email: 'email',
      allow_empty: false,
    },
    required: ['author', 'email', 'message', 'path'],
  })
  .openapi('GitCommitRequest')

const GitCommitResponseSchema = z
  .object({ hash: z.string() })
  .openapi({ example: { hash: 'hash' }, required: ['hash'] })
  .openapi('GitCommitResponse')

const GitCommitInfoSchema = z
  .object({
    hash: z.string(),
    message: z.string(),
    author: z.string(),
    email: z.string(),
    timestamp: z.string(),
  })
  .openapi({
    example: {
      author: 'author',
      message: 'message',
      hash: 'hash',
      email: 'email',
      timestamp: 'timestamp',
    },
    required: ['author', 'email', 'hash', 'message', 'timestamp'],
  })
  .openapi('GitCommitInfo')

const GitRepoRequestSchema = z
  .object({
    path: z.string(),
    username: z.string().exactOptional(),
    password: z.string().exactOptional(),
  })
  .openapi({
    example: { path: 'path', password: 'password', username: 'username' },
    required: ['path'],
  })
  .openapi('GitRepoRequest')

const GitCheckoutRequestSchema = z
  .object({ path: z.string(), branch: z.string() })
  .openapi({ example: { path: 'path', branch: 'branch' }, required: ['branch', 'path'] })
  .openapi('GitCheckoutRequest')

const FileStatusSchema = z
  .object({ name: z.string(), staging: z.string(), worktree: z.string(), extra: z.string() })
  .openapi({
    example: { extra: 'extra', name: 'name', staging: 'staging', worktree: 'worktree' },
    required: ['extra', 'name', 'staging', 'worktree'],
  })
  .openapi('FileStatus')

const GitStatusSchema = z
  .object({
    currentBranch: z.string(),
    fileStatus: z.array(FileStatusSchema),
    ahead: z.number().exactOptional(),
    behind: z.number().exactOptional(),
    branchPublished: z.boolean().exactOptional(),
  })
  .openapi({
    example: {
      behind: 6.027456183070403,
      fileStatus: [
        { extra: 'extra', name: 'name', staging: 'staging', worktree: 'worktree' },
        { extra: 'extra', name: 'name', staging: 'staging', worktree: 'worktree' },
      ],
      ahead: 0.8008281904610115,
      branchPublished: true,
      currentBranch: 'currentBranch',
    },
    required: ['currentBranch', 'fileStatus'],
  })
  .openapi('GitStatus')

const ExecuteRequestSchema = z
  .object({
    command: z.string(),
    cwd: z.string().exactOptional().openapi({ description: 'Current working directory' }),
    timeout: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timeout in seconds, defaults to 10 seconds' }),
  })
  .openapi({
    example: { cwd: 'cwd', command: 'command', timeout: 0.8008281904610115 },
    required: ['command'],
  })
  .openapi('ExecuteRequest')

const ExecuteResponseSchema = z
  .object({
    exitCode: z.number().openapi({ description: 'Exit code', example: 0 }),
    result: z.string().openapi({ description: 'Command output', example: 'Command output here' }),
  })
  .openapi({
    example: { result: 'Command output here', exitCode: 0 },
    required: ['exitCode', 'result'],
  })
  .openapi('ExecuteResponse')

const CommandSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the command', example: 'cmd-123' }),
    command: z
      .string()
      .openapi({ description: 'The command that was executed', example: 'ls -la' }),
    exitCode: z
      .number()
      .exactOptional()
      .openapi({ description: 'The exit code of the command', example: 0 }),
  })
  .openapi({
    example: { exitCode: 0, id: 'cmd-123', command: 'ls -la' },
    required: ['command', 'id'],
  })
  .openapi('Command')

const SessionSchema = z
  .object({
    sessionId: z.string().openapi({ description: 'The ID of the session', example: 'session-123' }),
    commands: z
      .array(CommandSchema)
      .nullable()
      .openapi({ description: 'The list of commands executed in this session' }),
  })
  .openapi({
    example: {
      sessionId: 'session-123',
      commands: [
        { exitCode: 0, id: 'cmd-123', command: 'ls -la' },
        { exitCode: 0, id: 'cmd-123', command: 'ls -la' },
      ],
    },
    required: ['commands', 'sessionId'],
  })
  .openapi('Session')

const CreateSessionRequestSchema = z
  .object({
    sessionId: z.string().openapi({ description: 'The ID of the session', example: 'session-123' }),
  })
  .openapi({ example: { sessionId: 'session-123' }, required: ['sessionId'] })
  .openapi('CreateSessionRequest')

const SessionExecuteRequestSchema = z
  .object({
    command: z.string().openapi({ description: 'The command to execute', example: 'ls -la' }),
    runAsync: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to execute the command asynchronously', example: false }),
    async: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Deprecated: Use runAsync instead. Whether to execute the command asynchronously',
        example: false,
      }),
  })
  .openapi({ example: { async: false, command: 'ls -la', runAsync: false }, required: ['command'] })
  .openapi('SessionExecuteRequest')

const SessionExecuteResponseSchema = z
  .object({
    cmdId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the executed command', example: 'cmd-123' }),
    output: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The output of the executed command marked with stdout and stderr prefixes',
        example: 'total 20\ndrwxr-xr-x  4 user group  128 Mar 15 10:30 .',
      }),
    exitCode: z
      .number()
      .exactOptional()
      .openapi({ description: 'The exit code of the executed command', example: 0 }),
  })
  .openapi({
    example: {
      output: 'total 20\ndrwxr-xr-x  4 user group  128 Mar 15 10:30 .',
      cmdId: 'cmd-123',
      exitCode: 0,
    },
    required: [],
  })
  .openapi('SessionExecuteResponse')

const PtySessionInfoSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the PTY session',
        example: 'pty-session-12345',
      }),
    cwd: z
      .string()
      .openapi({
        description:
          "Starting directory for the PTY session, defaults to the sandbox's working directory",
        example: '/home/user',
      }),
    envs: z
      .looseObject({})
      .openapi({
        description: 'Environment variables for the PTY session',
        example: { TERM: 'xterm-256color', PS1: '\\u@daytona:\\w$ ' },
      }),
    cols: z.number().openapi({ description: 'Number of terminal columns', example: 80 }),
    rows: z.number().openapi({ description: 'Number of terminal rows', example: 24 }),
    createdAt: z
      .string()
      .openapi({
        description: 'When the PTY session was created',
        example: '2024-01-15T10:30:45Z',
      }),
    active: z
      .boolean()
      .openapi({ description: 'Whether the PTY session is currently active', example: true }),
    lazyStart: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'Whether the PTY session uses lazy start (only start when first client connects)',
        example: false,
      }),
  })
  .openapi({
    example: {
      cwd: '/home/user',
      createdAt: '2024-01-15T10:30:45Z',
      lazyStart: false,
      envs: { TERM: 'xterm-256color', PS1: '\\u@daytona:\\w$ ' },
      active: true,
      id: 'pty-session-12345',
      rows: 24,
      cols: 80,
    },
    required: ['active', 'cols', 'createdAt', 'cwd', 'envs', 'id', 'lazyStart', 'rows'],
  })
  .openapi('PtySessionInfo')

const PtyListResponseSchema = z
  .object({
    sessions: z.array(PtySessionInfoSchema).openapi({ description: 'List of active PTY sessions' }),
  })
  .openapi({
    example: {
      sessions: [
        {
          cwd: '/home/user',
          createdAt: '2024-01-15T10:30:45Z',
          lazyStart: false,
          envs: { TERM: 'xterm-256color', PS1: '\\u@daytona:\\w$ ' },
          active: true,
          id: 'pty-session-12345',
          rows: 24,
          cols: 80,
        },
        {
          cwd: '/home/user',
          createdAt: '2024-01-15T10:30:45Z',
          lazyStart: false,
          envs: { TERM: 'xterm-256color', PS1: '\\u@daytona:\\w$ ' },
          active: true,
          id: 'pty-session-12345',
          rows: 24,
          cols: 80,
        },
      ],
    },
    required: ['sessions'],
  })
  .openapi('PtyListResponse')

const PtyCreateRequestSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the PTY session',
        example: 'pty-session-12345',
      }),
    cwd: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Starting directory for the PTY session, defaults to the sandbox's working directory",
        example: '/home/user',
      }),
    envs: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'Environment variables for the PTY session',
        example: { TERM: 'xterm-256color', PS1: '\\u@daytona:\\w$ ' },
      }),
    cols: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of terminal columns', example: 80 }),
    rows: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of terminal rows', example: 24 }),
    lazyStart: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether to start the PTY session lazily (only start when first client connects)',
        example: false,
      }),
  })
  .openapi({
    example: {
      cwd: '/home/user',
      lazyStart: false,
      envs: { TERM: 'xterm-256color', PS1: '\\u@daytona:\\w$ ' },
      id: 'pty-session-12345',
      rows: 24,
      cols: 80,
    },
    required: ['id'],
  })
  .openapi('PtyCreateRequest')

const PtyCreateResponseSchema = z
  .object({
    sessionId: z
      .string()
      .openapi({
        description: 'The unique identifier for the created PTY session',
        example: 'pty-session-12345',
      }),
  })
  .openapi({ example: { sessionId: 'pty-session-12345' }, required: ['sessionId'] })
  .openapi('PtyCreateResponse')

const PtyResizeRequestSchema = z
  .object({
    cols: z.number().openapi({ description: 'Number of terminal columns', example: 80 }),
    rows: z.number().openapi({ description: 'Number of terminal rows', example: 24 }),
  })
  .openapi({ example: { rows: 24, cols: 80 }, required: ['cols', 'rows'] })
  .openapi('PtyResizeRequest')

const PositionSchema = z
  .object({ line: z.number(), character: z.number() })
  .openapi({
    example: { character: 6.027456183070403, line: 0.8008281904610115 },
    required: ['character', 'line'],
  })
  .openapi('Position')

const CompletionContextSchema = z
  .object({ triggerKind: z.number(), triggerCharacter: z.string().exactOptional() })
  .openapi({
    example: { triggerCharacter: 'triggerCharacter', triggerKind: 1.4658129805029452 },
    required: ['triggerKind'],
  })
  .openapi('CompletionContext')

const LspCompletionParamsSchema = z
  .object({
    languageId: z.string().openapi({ description: 'Language identifier' }),
    pathToProject: z.string().openapi({ description: 'Path to the project' }),
    uri: z.string().openapi({ description: 'Document URI' }),
    position: PositionSchema,
    context: CompletionContextSchema.exactOptional(),
  })
  .openapi({
    example: {
      pathToProject: 'pathToProject',
      languageId: 'languageId',
      context: { triggerCharacter: 'triggerCharacter', triggerKind: 1.4658129805029452 },
      position: { character: 6.027456183070403, line: 0.8008281904610115 },
      uri: 'uri',
    },
    required: ['languageId', 'pathToProject', 'position', 'uri'],
  })
  .openapi('LspCompletionParams')

const CompletionItemSchema = z
  .object({
    label: z.string(),
    kind: z.number().exactOptional(),
    detail: z.string().exactOptional(),
    documentation: z.looseObject({}).exactOptional(),
    sortText: z.string().exactOptional(),
    filterText: z.string().exactOptional(),
    insertText: z.string().exactOptional(),
  })
  .openapi({
    example: {
      insertText: 'insertText',
      kind: 0.8008281904610115,
      sortText: 'sortText',
      documentation: '{}',
      label: 'label',
      detail: 'detail',
      filterText: 'filterText',
    },
    required: ['label'],
  })
  .openapi('CompletionItem')

const CompletionListSchema = z
  .object({ isIncomplete: z.boolean(), items: z.array(CompletionItemSchema) })
  .openapi({
    example: {
      items: [
        {
          insertText: 'insertText',
          kind: 0.8008281904610115,
          sortText: 'sortText',
          documentation: '{}',
          label: 'label',
          detail: 'detail',
          filterText: 'filterText',
        },
        {
          insertText: 'insertText',
          kind: 0.8008281904610115,
          sortText: 'sortText',
          documentation: '{}',
          label: 'label',
          detail: 'detail',
          filterText: 'filterText',
        },
      ],
      isIncomplete: true,
    },
    required: ['isIncomplete', 'items'],
  })
  .openapi('CompletionList')

const LspDocumentRequestSchema = z
  .object({
    languageId: z.string().openapi({ description: 'Language identifier' }),
    pathToProject: z.string().openapi({ description: 'Path to the project' }),
    uri: z.string().openapi({ description: 'Document URI' }),
  })
  .openapi({
    example: { pathToProject: 'pathToProject', languageId: 'languageId', uri: 'uri' },
    required: ['languageId', 'pathToProject', 'uri'],
  })
  .openapi('LspDocumentRequest')

const RangeSchema = z
  .object({ start: PositionSchema, end: PositionSchema })
  .openapi({
    example: {
      start: { character: 6.027456183070403, line: 0.8008281904610115 },
      end: { character: 6.027456183070403, line: 0.8008281904610115 },
    },
    required: ['end', 'start'],
  })
  .openapi('Range')

const LspLocationSchema = z
  .object({ range: RangeSchema, uri: z.string() })
  .openapi({
    example: {
      range: {
        start: { character: 6.027456183070403, line: 0.8008281904610115 },
        end: { character: 6.027456183070403, line: 0.8008281904610115 },
      },
      uri: 'uri',
    },
    required: ['range', 'uri'],
  })
  .openapi('LspLocation')

const LspSymbolSchema = z
  .object({ kind: z.number(), location: LspLocationSchema, name: z.string() })
  .openapi({
    example: {
      kind: 0.8008281904610115,
      name: 'name',
      location: {
        range: {
          start: { character: 6.027456183070403, line: 0.8008281904610115 },
          end: { character: 6.027456183070403, line: 0.8008281904610115 },
        },
        uri: 'uri',
      },
    },
    required: ['kind', 'location', 'name'],
  })
  .openapi('LspSymbol')

const LspServerRequestSchema = z
  .object({
    languageId: z.string().openapi({ description: 'Language identifier' }),
    pathToProject: z.string().openapi({ description: 'Path to the project' }),
  })
  .openapi({
    example: { pathToProject: 'pathToProject', languageId: 'languageId' },
    required: ['languageId', 'pathToProject'],
  })
  .openapi('LspServerRequest')

const ComputerUseStartResponseSchema = z
  .object({
    message: z
      .string()
      .openapi({
        description: 'A message indicating the result of starting computer use processes',
        example: 'Computer use processes started successfully',
      }),
    status: z
      .looseObject({})
      .openapi({
        description: 'Status information about all VNC desktop processes after starting',
        example: {
          xvfb: { running: true, priority: 100, autoRestart: true, pid: 12345 },
          xfce4: { running: true, priority: 200, autoRestart: true, pid: 12346 },
          x11vnc: { running: true, priority: 300, autoRestart: true, pid: 12347 },
          novnc: { running: true, priority: 400, autoRestart: true, pid: 12348 },
        },
      }),
  })
  .openapi({
    example: {
      message: 'Computer use processes started successfully',
      status: {
        xvfb: { running: true, priority: 100, autoRestart: true, pid: 12345 },
        xfce4: { running: true, priority: 200, autoRestart: true, pid: 12346 },
        x11vnc: { running: true, priority: 300, autoRestart: true, pid: 12347 },
        novnc: { running: true, priority: 400, autoRestart: true, pid: 12348 },
      },
    },
    required: ['message', 'status'],
  })
  .openapi('ComputerUseStartResponse')

const ComputerUseStopResponseSchema = z
  .object({
    message: z
      .string()
      .openapi({
        description: 'A message indicating the result of stopping computer use processes',
        example: 'Computer use processes stopped successfully',
      }),
    status: z
      .looseObject({})
      .openapi({
        description: 'Status information about all VNC desktop processes after stopping',
        example: {
          xvfb: { running: false, priority: 100, autoRestart: true },
          xfce4: { running: false, priority: 200, autoRestart: true },
          x11vnc: { running: false, priority: 300, autoRestart: true },
          novnc: { running: false, priority: 400, autoRestart: true },
        },
      }),
  })
  .openapi({
    example: {
      message: 'Computer use processes stopped successfully',
      status: {
        xvfb: { running: false, priority: 100, autoRestart: true },
        xfce4: { running: false, priority: 200, autoRestart: true },
        x11vnc: { running: false, priority: 300, autoRestart: true },
        novnc: { running: false, priority: 400, autoRestart: true },
      },
    },
    required: ['message', 'status'],
  })
  .openapi('ComputerUseStopResponse')

const ComputerUseStatusResponseSchema = z
  .object({
    status: z
      .enum(['active', 'partial', 'inactive', 'error'])
      .openapi({
        description: 'Status of computer use services (active, partial, inactive, error)',
        example: 'active',
      }),
  })
  .openapi({ example: { status: 'active' }, required: ['status'] })
  .openapi('ComputerUseStatusResponse')

const ProcessStatusResponseSchema = z
  .object({
    processName: z
      .string()
      .openapi({ description: 'The name of the VNC process being checked', example: 'xfce4' }),
    running: z
      .boolean()
      .openapi({
        description: 'Whether the specified VNC process is currently running',
        example: true,
      }),
  })
  .openapi({
    example: { running: true, processName: 'xfce4' },
    required: ['processName', 'running'],
  })
  .openapi('ProcessStatusResponse')

const ProcessRestartResponseSchema = z
  .object({
    message: z
      .string()
      .openapi({
        description: 'A message indicating the result of restarting the process',
        example: 'Process xfce4 restarted successfully',
      }),
    processName: z
      .string()
      .openapi({ description: 'The name of the VNC process that was restarted', example: 'xfce4' }),
  })
  .openapi({
    example: { processName: 'xfce4', message: 'Process xfce4 restarted successfully' },
    required: ['message', 'processName'],
  })
  .openapi('ProcessRestartResponse')

const ProcessLogsResponseSchema = z
  .object({
    processName: z
      .string()
      .openapi({
        description: 'The name of the VNC process whose logs were retrieved',
        example: 'novnc',
      }),
    logs: z
      .string()
      .openapi({
        description: 'The log output from the specified VNC process',
        example: '2024-01-15 10:30:45 [INFO] NoVNC server started on port 6080',
      }),
  })
  .openapi({
    example: {
      processName: 'novnc',
      logs: '2024-01-15 10:30:45 [INFO] NoVNC server started on port 6080',
    },
    required: ['logs', 'processName'],
  })
  .openapi('ProcessLogsResponse')

const ProcessErrorsResponseSchema = z
  .object({
    processName: z
      .string()
      .openapi({
        description: 'The name of the VNC process whose error logs were retrieved',
        example: 'x11vnc',
      }),
    errors: z
      .string()
      .openapi({
        description: 'The error log output from the specified VNC process',
        example: '2024-01-15 10:30:45 [ERROR] Failed to bind to port 5901',
      }),
  })
  .openapi({
    example: {
      processName: 'x11vnc',
      errors: '2024-01-15 10:30:45 [ERROR] Failed to bind to port 5901',
    },
    required: ['errors', 'processName'],
  })
  .openapi('ProcessErrorsResponse')

const MousePositionSchema = z
  .object({
    x: z
      .number()
      .openapi({ description: 'The X coordinate of the mouse cursor position', example: 100 }),
    y: z
      .number()
      .openapi({ description: 'The Y coordinate of the mouse cursor position', example: 200 }),
  })
  .openapi({ example: { x: 100, y: 200 }, required: ['x', 'y'] })
  .openapi('MousePosition')

const MouseMoveRequestSchema = z
  .object({
    x: z
      .number()
      .openapi({
        description: 'The target X coordinate to move the mouse cursor to',
        example: 150,
      }),
    y: z
      .number()
      .openapi({
        description: 'The target Y coordinate to move the mouse cursor to',
        example: 250,
      }),
  })
  .openapi({ example: { x: 150, y: 250 }, required: ['x', 'y'] })
  .openapi('MouseMoveRequest')

const MouseMoveResponseSchema = z
  .object({
    x: z
      .number()
      .openapi({
        description: 'The actual X coordinate where the mouse cursor ended up',
        example: 150,
      }),
    y: z
      .number()
      .openapi({
        description: 'The actual Y coordinate where the mouse cursor ended up',
        example: 250,
      }),
  })
  .openapi({ example: { x: 150, y: 250 }, required: ['x', 'y'] })
  .openapi('MouseMoveResponse')

const MouseClickRequestSchema = z
  .object({
    x: z
      .number()
      .openapi({ description: 'The X coordinate where to perform the mouse click', example: 100 }),
    y: z
      .number()
      .openapi({ description: 'The Y coordinate where to perform the mouse click', example: 200 }),
    button: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The mouse button to click (left, right, middle). Defaults to left',
        example: 'left',
      }),
    double: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to perform a double-click instead of a single click',
        example: false,
      }),
  })
  .openapi({ example: { button: 'left', double: false, x: 100, y: 200 }, required: ['x', 'y'] })
  .openapi('MouseClickRequest')

const MouseClickResponseSchema = z
  .object({
    x: z
      .number()
      .openapi({ description: 'The actual X coordinate where the click occurred', example: 100 }),
    y: z
      .number()
      .openapi({ description: 'The actual Y coordinate where the click occurred', example: 200 }),
  })
  .openapi({ example: { x: 100, y: 200 }, required: ['x', 'y'] })
  .openapi('MouseClickResponse')

const MouseDragRequestSchema = z
  .object({
    startX: z
      .number()
      .openapi({ description: 'The starting X coordinate for the drag operation', example: 100 }),
    startY: z
      .number()
      .openapi({ description: 'The starting Y coordinate for the drag operation', example: 200 }),
    endX: z
      .number()
      .openapi({ description: 'The ending X coordinate for the drag operation', example: 300 }),
    endY: z
      .number()
      .openapi({ description: 'The ending Y coordinate for the drag operation', example: 400 }),
    button: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The mouse button to use for dragging (left, right, middle). Defaults to left',
        example: 'left',
      }),
  })
  .openapi({
    example: { button: 'left', endY: 400, endX: 300, startY: 200, startX: 100 },
    required: ['endX', 'endY', 'startX', 'startY'],
  })
  .openapi('MouseDragRequest')

const MouseDragResponseSchema = z
  .object({
    x: z
      .number()
      .openapi({ description: 'The actual X coordinate where the drag ended', example: 300 }),
    y: z
      .number()
      .openapi({ description: 'The actual Y coordinate where the drag ended', example: 400 }),
  })
  .openapi({ example: { x: 300, y: 400 }, required: ['x', 'y'] })
  .openapi('MouseDragResponse')

const MouseScrollRequestSchema = z
  .object({
    x: z
      .number()
      .openapi({
        description: 'The X coordinate where to perform the scroll operation',
        example: 100,
      }),
    y: z
      .number()
      .openapi({
        description: 'The Y coordinate where to perform the scroll operation',
        example: 200,
      }),
    direction: z
      .string()
      .openapi({ description: 'The scroll direction (up, down)', example: 'down' }),
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of scroll units to scroll. Defaults to 1', example: 3 }),
  })
  .openapi({
    example: { amount: 3, x: 100, y: 200, direction: 'down' },
    required: ['direction', 'x', 'y'],
  })
  .openapi('MouseScrollRequest')

const MouseScrollResponseSchema = z
  .object({
    success: z
      .boolean()
      .openapi({ description: 'Whether the mouse scroll operation was successful', example: true }),
  })
  .openapi({ example: { success: true }, required: ['success'] })
  .openapi('MouseScrollResponse')

const KeyboardTypeRequestSchema = z
  .object({
    text: z
      .string()
      .openapi({ description: 'The text to type using the keyboard', example: 'Hello, World!' }),
    delay: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Delay in milliseconds between keystrokes. Defaults to 0',
        example: 100,
      }),
  })
  .openapi({ example: { delay: 100, text: 'Hello, World!' }, required: ['text'] })
  .openapi('KeyboardTypeRequest')

const KeyboardPressRequestSchema = z
  .object({
    key: z
      .string()
      .openapi({
        description: 'The key to press (e.g., a, b, c, enter, space, etc.)',
        example: 'enter',
      }),
    modifiers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Array of modifier keys to press along with the main key (ctrl, alt, shift, cmd)',
        example: ['ctrl', 'shift'],
      }),
  })
  .openapi({ example: { modifiers: ['ctrl', 'shift'], key: 'enter' }, required: ['key'] })
  .openapi('KeyboardPressRequest')

const KeyboardHotkeyRequestSchema = z
  .object({
    keys: z
      .string()
      .openapi({
        description: 'The hotkey combination to press (e.g., "ctrl+c", "cmd+v", "alt+tab")',
        example: 'ctrl+c',
      }),
  })
  .openapi({ example: { keys: 'ctrl+c' }, required: ['keys'] })
  .openapi('KeyboardHotkeyRequest')

const ScreenshotResponseSchema = z
  .object({
    screenshot: z
      .string()
      .openapi({
        description: 'Base64 encoded screenshot image data',
        example:
          'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
      }),
    cursorPosition: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'The current cursor position when the screenshot was taken',
        example: { x: 500, y: 300 },
      }),
    sizeBytes: z
      .number()
      .exactOptional()
      .openapi({ description: 'The size of the screenshot data in bytes', example: 24576 }),
  })
  .openapi({
    example: {
      cursorPosition: { x: 500, y: 300 },
      screenshot:
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
      sizeBytes: 24576,
    },
    required: ['screenshot'],
  })
  .openapi('ScreenshotResponse')

const RegionScreenshotResponseSchema = z
  .object({
    screenshot: z
      .string()
      .openapi({
        description: 'Base64 encoded screenshot image data of the specified region',
        example:
          'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
      }),
    cursorPosition: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'The current cursor position when the region screenshot was taken',
        example: { x: 500, y: 300 },
      }),
    sizeBytes: z
      .number()
      .exactOptional()
      .openapi({ description: 'The size of the screenshot data in bytes', example: 24576 }),
  })
  .openapi({
    example: {
      cursorPosition: { x: 500, y: 300 },
      screenshot:
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
      sizeBytes: 24576,
    },
    required: ['screenshot'],
  })
  .openapi('RegionScreenshotResponse')

const CompressedScreenshotResponseSchema = z
  .object({
    screenshot: z
      .string()
      .openapi({
        description: 'Base64 encoded compressed screenshot image data',
        example:
          'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
      }),
    cursorPosition: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'The current cursor position when the compressed screenshot was taken',
        example: { x: 250, y: 150 },
      }),
    sizeBytes: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The size of the compressed screenshot data in bytes',
        example: 12288,
      }),
  })
  .openapi({
    example: {
      cursorPosition: { x: 250, y: 150 },
      screenshot:
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
      sizeBytes: 12288,
    },
    required: ['screenshot'],
  })
  .openapi('CompressedScreenshotResponse')

const DisplayInfoResponseSchema = z
  .object({
    displays: z
      .array(z.looseObject({}))
      .openapi({
        description: 'Array of display information for all connected displays',
        example: [{ id: 0, x: 0, y: 0, width: 1920, height: 1080, is_active: true }],
      }),
  })
  .openapi({
    example: { displays: [{ id: 0, x: 0, y: 0, width: 1920, height: 1080, is_active: true }] },
    required: ['displays'],
  })
  .openapi('DisplayInfoResponse')

const WindowsResponseSchema = z
  .object({
    windows: z
      .array(z.looseObject({}))
      .openapi({
        description: 'Array of window information for all visible windows',
        example: [{ id: 12345, title: 'Terminal' }],
      }),
    count: z.number().openapi({ description: 'The total number of windows found', example: 5 }),
  })
  .openapi({
    example: { count: 5, windows: [{ id: 12345, title: 'Terminal' }] },
    required: ['count', 'windows'],
  })
  .openapi('WindowsResponse')

const CreateSnapshotSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'The name of the snapshot', example: 'ubuntu-4vcpu-8ram-100gb' }),
    imageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The image name of the snapshot', example: 'ubuntu:22.04' }),
    entrypoint: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The entrypoint command for the snapshot',
        example: 'sleep infinity',
      }),
    cpu: z
      .int()
      .exactOptional()
      .openapi({ description: 'CPU cores allocated to the resulting sandbox', example: 1 }),
    gpu: z
      .int()
      .exactOptional()
      .openapi({ description: 'GPU units allocated to the resulting sandbox', example: 0 }),
    gpuType: z
      .array(GpuTypeSchema)
      .exactOptional()
      .openapi({ description: 'Preferred GPU type for the resulting sandbox.', example: ['H100'] }),
    memory: z
      .int()
      .exactOptional()
      .openapi({ description: 'Memory allocated to the resulting sandbox in GB', example: 1 }),
    disk: z
      .int()
      .exactOptional()
      .openapi({ description: 'Disk space allocated to the sandbox in GB', example: 3 }),
    buildInfo: CreateBuildInfoSchema.exactOptional().openapi({
      description: 'Build information for the snapshot',
    }),
    regionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the region where the snapshot will be available. Defaults to organization default region if not specified.',
      }),
    sandboxClass: SandboxClassSchema.exactOptional().openapi({
      description:
        'Target sandbox class. Determines which runners can host sandboxes created from this snapshot.',
      example: 'linux-vm',
    }),
  })
  .openapi({
    example: {
      disk: 3,
      imageName: 'ubuntu:22.04',
      memory: 1,
      buildInfo: '',
      regionId: 'regionId',
      entrypoint: 'sleep infinity',
      name: 'ubuntu-4vcpu-8ram-100gb',
      cpu: 1,
      gpu: 0,
      gpuType: ['H100'],
      sandboxClass: 'linux-vm',
    },
    required: ['name'],
  })
  .openapi('CreateSnapshot')

const SnapshotStateSchema = z
  .enum([
    'building',
    'pending',
    'pulling',
    'active',
    'inactive',
    'error',
    'build_failed',
    'removing',
  ])
  .openapi('SnapshotState')

const SnapshotDtoSchema = z
  .object({
    id: z.string(),
    organizationId: z.string().exactOptional(),
    general: z.boolean(),
    name: z.string(),
    imageName: z.string().exactOptional(),
    state: SnapshotStateSchema,
    size: z.number().nullable(),
    entrypoint: z.array(z.string()).nullable(),
    cpu: z.number(),
    gpu: z.number(),
    gpuType: GpuTypeSchema.exactOptional().openapi({
      description: 'The GPU type assigned to the snapshot',
      example: 'H100',
    }),
    mem: z.number(),
    disk: z.number(),
    errorReason: z.string().nullable(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    lastUsedAt: z.iso.datetime({ offset: true }).nullable(),
    buildInfo: BuildInfoSchema.exactOptional().openapi({
      description: 'Build information for the snapshot',
    }),
    regionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of regions where the snapshot is available' }),
    initialRunnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The initial runner ID of the snapshot', example: 'runner123' }),
    ref: z
      .string()
      .exactOptional()
      .openapi({ description: 'The snapshot reference', example: 'daytonaio/sandbox:latest' }),
    sandboxClass: z
      .enum(['linux-vm', 'container', 'android', 'windows'])
      .exactOptional()
      .openapi({
        description: 'The sandbox class of the snapshot',
        example: 'linux-vm',
        'x-enum-varnames': ['LINUX_VM', 'CONTAINER', 'ANDROID', 'WINDOWS'],
      }),
  })
  .openapi({
    example: {
      imageName: 'imageName',
      buildInfo: '',
      cpu: 6.027456183070403,
      regionIds: ['regionIds', 'regionIds'],
      gpu: 1.4658129805029452,
      organizationId: 'organizationId',
      general: true,
      createdAt: '2000-01-23T04:56:07.000+00:00',
      disk: 5.637376656633329,
      ref: 'daytonaio/sandbox:latest',
      size: 0.8008281904610115,
      mem: 5.962133916683182,
      lastUsedAt: '2000-01-23T04:56:07.000+00:00',
      entrypoint: ['entrypoint', 'entrypoint'],
      errorReason: 'errorReason',
      name: 'name',
      id: 'id',
      state: '',
      initialRunnerId: 'runner123',
      gpuType: 'H100',
      updatedAt: '2000-01-23T04:56:07.000+00:00',
      sandboxClass: 'linux-vm',
    },
    required: [
      'cpu',
      'createdAt',
      'disk',
      'entrypoint',
      'errorReason',
      'general',
      'gpu',
      'id',
      'lastUsedAt',
      'mem',
      'name',
      'size',
      'state',
      'updatedAt',
    ],
  })
  .openapi('SnapshotDto')

const PaginatedSnapshotsSchema = z
  .object({
    items: z.array(SnapshotDtoSchema),
    total: z.number(),
    page: z.number(),
    totalPages: z.number(),
  })
  .openapi({
    example: {
      total: 2.3021358869347655,
      totalPages: 9.301444243932576,
      page: 7.061401241503109,
      items: [
        {
          imageName: 'imageName',
          buildInfo: '',
          cpu: 6.027456183070403,
          regionIds: ['regionIds', 'regionIds'],
          gpu: 1.4658129805029452,
          organizationId: 'organizationId',
          general: true,
          createdAt: '2000-01-23T04:56:07.000+00:00',
          disk: 5.637376656633329,
          ref: 'daytonaio/sandbox:latest',
          size: 0.8008281904610115,
          mem: 5.962133916683182,
          lastUsedAt: '2000-01-23T04:56:07.000+00:00',
          entrypoint: ['entrypoint', 'entrypoint'],
          errorReason: 'errorReason',
          name: 'name',
          id: 'id',
          state: '',
          initialRunnerId: 'runner123',
          gpuType: 'H100',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
          sandboxClass: 'linux-vm',
        },
        {
          imageName: 'imageName',
          buildInfo: '',
          cpu: 6.027456183070403,
          regionIds: ['regionIds', 'regionIds'],
          gpu: 1.4658129805029452,
          organizationId: 'organizationId',
          general: true,
          createdAt: '2000-01-23T04:56:07.000+00:00',
          disk: 5.637376656633329,
          ref: 'daytonaio/sandbox:latest',
          size: 0.8008281904610115,
          mem: 5.962133916683182,
          lastUsedAt: '2000-01-23T04:56:07.000+00:00',
          entrypoint: ['entrypoint', 'entrypoint'],
          errorReason: 'errorReason',
          name: 'name',
          id: 'id',
          state: '',
          initialRunnerId: 'runner123',
          gpuType: 'H100',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
          sandboxClass: 'linux-vm',
        },
      ],
    },
    required: ['items', 'page', 'total', 'totalPages'],
  })
  .openapi('PaginatedSnapshots')

const VolumeStateSchema = z
  .enum(['creating', 'ready', 'pending_create', 'pending_delete', 'deleting', 'deleted', 'error'])
  .openapi({ description: 'Volume state' })
  .openapi('VolumeState')

const VolumeDtoSchema = z
  .object({
    id: z.string().openapi({ description: 'Volume ID', example: 'vol-12345678' }),
    name: z.string().openapi({ description: 'Volume name', example: 'my-volume' }),
    organizationId: z
      .string()
      .openapi({ description: 'Organization ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    state: VolumeStateSchema.openapi({ description: 'Volume state', example: 'ready' }),
    createdAt: z
      .string()
      .openapi({ description: 'Creation timestamp', example: '2023-01-01T00:00:00.000Z' }),
    updatedAt: z
      .string()
      .openapi({ description: 'Last update timestamp', example: '2023-01-01T00:00:00.000Z' }),
    lastUsedAt: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last used timestamp', example: '2023-01-01T00:00:00.000Z' }),
    errorReason: z
      .string()
      .nullable()
      .openapi({
        description: 'The error reason of the volume',
        example: 'Error processing volume',
      }),
  })
  .openapi({
    example: {
      organizationId: '123e4567-e89b-12d3-a456-426614174000',
      createdAt: '2023-01-01T00:00:00.000Z',
      lastUsedAt: '2023-01-01T00:00:00.000Z',
      errorReason: 'Error processing volume',
      name: 'my-volume',
      id: 'vol-12345678',
      state: 'ready',
      updatedAt: '2023-01-01T00:00:00.000Z',
    },
    required: ['createdAt', 'errorReason', 'id', 'name', 'organizationId', 'state', 'updatedAt'],
  })
  .openapi('VolumeDto')

const CreateVolumeSchema = z
  .object({ name: z.string() })
  .openapi({ example: { name: 'name' }, required: ['name'] })
  .openapi('CreateVolume')

const JobStatusSchema = z
  .enum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED'])
  .openapi('JobStatus')

const JobTypeSchema = z
  .enum([
    'CREATE_SANDBOX',
    'START_SANDBOX',
    'STOP_SANDBOX',
    'DESTROY_SANDBOX',
    'RESIZE_SANDBOX',
    'CREATE_BACKUP',
    'BUILD_SNAPSHOT',
    'PULL_SNAPSHOT',
    'RECOVER_SANDBOX',
    'INSPECT_SNAPSHOT_IN_REGISTRY',
    'REMOVE_SNAPSHOT',
    'UPDATE_SANDBOX_NETWORK_SETTINGS',
    'SNAPSHOT_SANDBOX',
    'FORK_SANDBOX',
    'PAUSE_SANDBOX',
  ])
  .openapi({ description: 'The type of the job' })
  .openapi('JobType')

const JobSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the job', example: 'job123' }),
    type: JobTypeSchema.openapi({ description: 'The type of the job', example: 'CREATE_SANDBOX' }),
    status: JobStatusSchema.openapi({ description: 'The status of the job', example: 'PENDING' }),
    resourceType: z
      .enum(['SANDBOX', 'SNAPSHOT', 'BACKUP'])
      .openapi({ description: 'The type of resource this job operates on', example: 'SANDBOX' }),
    resourceId: z
      .string()
      .openapi({
        description: 'The ID of the resource this job operates on (sandboxId, snapshotRef, etc.)',
        example: 'sandbox123',
      }),
    payload: z
      .string()
      .exactOptional()
      .openapi({ description: 'Job-specific JSON-encoded payload data (operational metadata)' }),
    traceContext: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'OpenTelemetry trace context for distributed tracing (W3C Trace Context format)',
        example: { traceparent: '00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01' },
      }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Error message if the job failed',
        example: 'Failed to create sandbox',
      }),
    createdAt: z
      .string()
      .openapi({
        description: 'The creation timestamp of the job',
        example: '2024-10-01T12:00:00Z',
      }),
    updatedAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last update timestamp of the job',
        example: '2024-10-01T12:00:00Z',
      }),
  })
  .openapi({
    example: {
      createdAt: '2024-10-01T12:00:00Z',
      resourceId: 'sandbox123',
      payload: 'payload',
      errorMessage: 'Failed to create sandbox',
      id: 'job123',
      type: 'CREATE_SANDBOX',
      traceContext: { traceparent: '00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01' },
      status: 'PENDING',
      resourceType: 'SANDBOX',
      updatedAt: '2024-10-01T12:00:00Z',
    },
    required: ['createdAt', 'id', 'resourceId', 'resourceType', 'status', 'type'],
  })
  .openapi('Job')

const PaginatedJobsSchema = z
  .object({
    items: z.array(JobSchema),
    total: z.number(),
    page: z.number(),
    totalPages: z.number(),
  })
  .openapi({
    example: {
      total: 0.8008281904610115,
      totalPages: 1.4658129805029452,
      page: 6.027456183070403,
      items: [
        {
          createdAt: '2024-10-01T12:00:00Z',
          resourceId: 'sandbox123',
          payload: 'payload',
          errorMessage: 'Failed to create sandbox',
          id: 'job123',
          type: 'CREATE_SANDBOX',
          traceContext: { traceparent: '00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01' },
          status: 'PENDING',
          resourceType: 'SANDBOX',
          updatedAt: '2024-10-01T12:00:00Z',
        },
        {
          createdAt: '2024-10-01T12:00:00Z',
          resourceId: 'sandbox123',
          payload: 'payload',
          errorMessage: 'Failed to create sandbox',
          id: 'job123',
          type: 'CREATE_SANDBOX',
          traceContext: { traceparent: '00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01' },
          status: 'PENDING',
          resourceType: 'SANDBOX',
          updatedAt: '2024-10-01T12:00:00Z',
        },
      ],
    },
    required: ['items', 'page', 'total', 'totalPages'],
  })
  .openapi('PaginatedJobs')

const PollJobsResponseSchema = z
  .object({ jobs: z.array(JobSchema).openapi({ description: 'List of jobs' }) })
  .openapi({
    example: {
      jobs: [
        {
          createdAt: '2024-10-01T12:00:00Z',
          resourceId: 'sandbox123',
          payload: 'payload',
          errorMessage: 'Failed to create sandbox',
          id: 'job123',
          type: 'CREATE_SANDBOX',
          traceContext: { traceparent: '00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01' },
          status: 'PENDING',
          resourceType: 'SANDBOX',
          updatedAt: '2024-10-01T12:00:00Z',
        },
        {
          createdAt: '2024-10-01T12:00:00Z',
          resourceId: 'sandbox123',
          payload: 'payload',
          errorMessage: 'Failed to create sandbox',
          id: 'job123',
          type: 'CREATE_SANDBOX',
          traceContext: { traceparent: '00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01' },
          status: 'PENDING',
          resourceType: 'SANDBOX',
          updatedAt: '2024-10-01T12:00:00Z',
        },
      ],
    },
    required: ['jobs'],
  })
  .openapi('PollJobsResponse')

const UpdateJobStatusSchema = z
  .object({
    status: JobStatusSchema.openapi({
      description: 'The new status of the job',
      example: 'IN_PROGRESS',
    }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Error message if the job failed',
        example: 'Failed to create sandbox',
      }),
    resultMetadata: z
      .string()
      .exactOptional()
      .openapi({ description: 'Result metadata for the job' }),
  })
  .openapi({
    example: {
      resultMetadata: 'resultMetadata',
      errorMessage: 'Failed to create sandbox',
      status: 'IN_PROGRESS',
    },
    required: ['status'],
  })
  .openapi('UpdateJobStatus')

const CreateDockerRegistrySchema = z
  .object({
    name: z.string().openapi({ description: 'Registry name' }),
    url: z.string().openapi({ description: 'Registry URL' }),
    username: z.string().openapi({ description: 'Registry username' }),
    password: z.string().openapi({ description: 'Registry password' }),
    project: z.string().exactOptional().openapi({ description: 'Registry project' }),
  })
  .openapi({
    example: {
      password: 'password',
      name: 'name',
      project: 'project',
      url: 'url',
      username: 'username',
    },
    required: ['name', 'password', 'url', 'username'],
  })
  .openapi('CreateDockerRegistry')

const DockerRegistrySchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'Registry ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    name: z.string().openapi({ description: 'Registry name', example: 'My Docker Hub' }),
    url: z
      .string()
      .openapi({ description: 'Registry URL', example: 'https://registry.hub.docker.com' }),
    username: z.string().openapi({ description: 'Registry username', example: 'username' }),
    project: z.string().openapi({ description: 'Registry project', example: 'my-project' }),
    registryType: z
      .enum(['internal', 'organization', 'transient', 'backup'])
      .openapi({ description: 'Registry type', example: 'internal' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2024-01-31T12:00:00Z' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last update timestamp', example: '2024-01-31T12:00:00Z' }),
  })
  .openapi({
    example: {
      registryType: 'internal',
      createdAt: '2024-01-31T12:00:00Z',
      name: 'My Docker Hub',
      project: 'my-project',
      id: '123e4567-e89b-12d3-a456-426614174000',
      url: 'https://registry.hub.docker.com',
      username: 'username',
      updatedAt: '2024-01-31T12:00:00Z',
    },
    required: [
      'createdAt',
      'id',
      'name',
      'project',
      'registryType',
      'updatedAt',
      'url',
      'username',
    ],
  })
  .openapi('DockerRegistry')

const RegistryPushAccessDtoSchema = z
  .object({
    username: z
      .string()
      .openapi({
        description: 'Temporary username for registry authentication',
        example: 'temp-user-123',
      }),
    secret: z
      .string()
      .openapi({
        description: 'Temporary secret for registry authentication',
        example: 'eyJhbGciOiJIUzI1NiIs...',
      }),
    registryUrl: z
      .string()
      .openapi({ description: 'Registry URL', example: 'registry.example.com' }),
    registryId: z
      .string()
      .openapi({ description: 'Registry ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    project: z.string().openapi({ description: 'Registry project ID', example: 'library' }),
    expiresAt: z
      .string()
      .openapi({
        description: 'Token expiration time in ISO format',
        example: '2023-12-31T23:59:59Z',
      }),
  })
  .openapi({
    example: {
      registryUrl: 'registry.example.com',
      registryId: '123e4567-e89b-12d3-a456-426614174000',
      project: 'library',
      secret: 'eyJhbGciOiJIUzI1NiIs...',
      expiresAt: '2023-12-31T23:59:59Z',
      username: 'temp-user-123',
    },
    required: ['expiresAt', 'project', 'registryId', 'registryUrl', 'secret', 'username'],
  })
  .openapi('RegistryPushAccessDto')

const UpdateDockerRegistrySchema = z
  .object({
    name: z.string().openapi({ description: 'Registry name' }),
    url: z.string().openapi({ description: 'Registry URL' }),
    username: z.string().openapi({ description: 'Registry username' }),
    password: z.string().exactOptional().openapi({ description: 'Registry password' }),
    project: z.string().exactOptional().openapi({ description: 'Registry project' }),
  })
  .openapi({
    example: {
      password: 'password',
      name: 'name',
      project: 'project',
      url: 'url',
      username: 'username',
    },
    required: ['name', 'url', 'username'],
  })
  .openapi('UpdateDockerRegistry')

const AdminCreateRunnerSchema = z
  .object({
    regionId: z.string(),
    name: z.string(),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags to associate with the runner', example: ['gpu', 'us-east'] }),
    apiKey: z.string(),
    apiVersion: z
      .string()
      .regex(/^(0|2)$/)
      .openapi({ description: 'The api version of the runner to create', example: '2' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain of the runner', example: 'runner1.example.com' }),
    apiUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The API URL of the runner',
        example: 'https://api.runner1.example.com',
      }),
    proxyUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The proxy URL of the runner',
        example: 'https://proxy.runner1.example.com',
      }),
    cpu: z
      .number()
      .exactOptional()
      .openapi({ description: 'The CPU capacity of the runner', example: 8 }),
    memoryGiB: z
      .number()
      .exactOptional()
      .openapi({ description: 'The memory capacity of the runner in GiB', example: 16 }),
    diskGiB: z
      .number()
      .exactOptional()
      .openapi({ description: 'The disk capacity of the runner in GiB', example: 100 }),
  })
  .openapi({
    example: {
      diskGiB: 100,
      apiVersion: '2',
      apiKey: 'apiKey',
      apiUrl: 'https://api.runner1.example.com',
      regionId: 'regionId',
      proxyUrl: 'https://proxy.runner1.example.com',
      memoryGiB: 16,
      domain: 'runner1.example.com',
      name: 'name',
      cpu: 8,
      tags: ['gpu', 'us-east'],
    },
    required: ['apiKey', 'apiVersion', 'name', 'regionId'],
  })
  .openapi('AdminCreateRunner')

const CreateOrganizationQuotaSchema = z
  .object({
    totalCpuQuota: z.number().exactOptional(),
    totalMemoryQuota: z.number().exactOptional(),
    totalDiskQuota: z.number().exactOptional(),
    maxCpuPerSandbox: z.number().exactOptional(),
    maxMemoryPerSandbox: z.number().exactOptional(),
    maxDiskPerSandbox: z.number().exactOptional(),
    snapshotQuota: z.number().exactOptional(),
    maxSnapshotSize: z.number().exactOptional(),
    volumeQuota: z.number().exactOptional(),
  })
  .openapi({
    example: {
      snapshotQuota: 7.061401241503109,
      totalCpuQuota: 0.8008281904610115,
      maxCpuPerSandbox: 5.962133916683182,
      maxDiskPerSandbox: 2.3021358869347655,
      maxMemoryPerSandbox: 5.637376656633329,
      volumeQuota: 3.616076749251911,
      totalMemoryQuota: 6.027456183070403,
      maxSnapshotSize: 9.301444243932576,
      totalDiskQuota: 1.4658129805029452,
    },
    required: [],
  })
  .openapi('CreateOrganizationQuota')

const CreateUserSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string().exactOptional(),
    personalOrganizationQuota: CreateOrganizationQuotaSchema.exactOptional(),
    personalOrganizationDefaultRegionId: z.string().exactOptional(),
    role: z.enum(['admin', 'user']).exactOptional(),
    emailVerified: z.boolean().exactOptional(),
  })
  .openapi({
    example: {
      emailVerified: true,
      role: 'admin',
      name: 'name',
      personalOrganizationDefaultRegionId: 'personalOrganizationDefaultRegionId',
      id: 'id',
      personalOrganizationQuota: {
        snapshotQuota: 7.061401241503109,
        totalCpuQuota: 0.8008281904610115,
        maxCpuPerSandbox: 5.962133916683182,
        maxDiskPerSandbox: 2.3021358869347655,
        maxMemoryPerSandbox: 5.637376656633329,
        volumeQuota: 3.616076749251911,
        totalMemoryQuota: 6.027456183070403,
        maxSnapshotSize: 9.301444243932576,
        totalDiskQuota: 1.4658129805029452,
      },
      email: 'email',
    },
    required: ['id', 'name'],
  })
  .openapi('CreateUser')

const WebhookEventSchema = z
  .enum([
    'sandbox.created',
    'sandbox.state.updated',
    'snapshot.created',
    'snapshot.state.updated',
    'snapshot.removed',
    'volume.created',
    'volume.state.updated',
  ])
  .openapi({
    description: 'The type of event being sent',
    'x-enum-varnames': [
      'SANDBOX_CREATED',
      'SANDBOX_STATE_UPDATED',
      'SNAPSHOT_CREATED',
      'SNAPSHOT_STATE_UPDATED',
      'SNAPSHOT_REMOVED',
      'VOLUME_CREATED',
      'VOLUME_STATE_UPDATED',
    ],
  })
  .openapi('WebhookEvent')

const SendWebhookDtoSchema = z
  .object({
    eventType: WebhookEventSchema.openapi({
      description: 'The type of event being sent',
      example: 'sandbox.created',
    }),
    payload: z
      .looseObject({})
      .openapi({
        description: 'The payload data to send',
        example: { id: 'sandbox-123', name: 'My Sandbox' },
      }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional event ID for idempotency',
        example: 'evt_1234567890abcdef',
      }),
  })
  .openapi({
    example: {
      eventId: 'evt_1234567890abcdef',
      payload: { id: 'sandbox-123', name: 'My Sandbox' },
      eventType: 'sandbox.created',
    },
    required: ['eventType', 'payload'],
  })
  .openapi('SendWebhookDto')

const SetSnapshotGeneralStatusDtoSchema = z
  .object({
    general: z.boolean().openapi({ description: 'Whether the snapshot is general', example: true }),
  })
  .openapi({ example: { general: true }, required: ['general'] })
  .openapi('SetSnapshotGeneralStatusDto')

const AuditLogSchema = z
  .object({
    id: z.string(),
    actorId: z.string(),
    actorEmail: z.string(),
    actorApiKeyPrefix: z.string().exactOptional(),
    actorApiKeySuffix: z.string().exactOptional(),
    organizationId: z.string().exactOptional(),
    action: z.string(),
    targetType: z.string().exactOptional(),
    targetId: z.string().exactOptional(),
    statusCode: z.number().exactOptional(),
    errorMessage: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    userAgent: z.string().exactOptional(),
    source: z.string().exactOptional(),
    metadata: z.looseObject({}).exactOptional(),
    createdAt: z.iso.datetime({ offset: true }),
  })
  .openapi({
    example: {
      actorApiKeyPrefix: 'actorApiKeyPrefix',
      metadata: { key: '' },
      targetId: 'targetId',
      errorMessage: 'errorMessage',
      ipAddress: 'ipAddress',
      actorEmail: 'actorEmail',
      targetType: 'targetType',
      userAgent: 'userAgent',
      source: 'source',
      organizationId: 'organizationId',
      createdAt: '2000-01-23T04:56:07.000+00:00',
      actorId: 'actorId',
      action: 'action',
      id: 'id',
      actorApiKeySuffix: 'actorApiKeySuffix',
      statusCode: 0.8008281904610115,
    },
    required: ['action', 'actorEmail', 'actorId', 'createdAt', 'id'],
  })
  .openapi('AuditLog')

const PaginatedAuditLogsSchema = z
  .object({
    items: z.array(AuditLogSchema),
    total: z.number(),
    page: z.number(),
    totalPages: z.number(),
    nextToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token for next page in cursor-based pagination' }),
  })
  .openapi({
    example: {
      total: 6.027456183070403,
      nextToken: 'nextToken',
      totalPages: 5.962133916683182,
      page: 1.4658129805029452,
      items: [
        {
          actorApiKeyPrefix: 'actorApiKeyPrefix',
          metadata: { key: '' },
          targetId: 'targetId',
          errorMessage: 'errorMessage',
          ipAddress: 'ipAddress',
          actorEmail: 'actorEmail',
          targetType: 'targetType',
          userAgent: 'userAgent',
          source: 'source',
          organizationId: 'organizationId',
          createdAt: '2000-01-23T04:56:07.000+00:00',
          actorId: 'actorId',
          action: 'action',
          id: 'id',
          actorApiKeySuffix: 'actorApiKeySuffix',
          statusCode: 0.8008281904610115,
        },
        {
          actorApiKeyPrefix: 'actorApiKeyPrefix',
          metadata: { key: '' },
          targetId: 'targetId',
          errorMessage: 'errorMessage',
          ipAddress: 'ipAddress',
          actorEmail: 'actorEmail',
          targetType: 'targetType',
          userAgent: 'userAgent',
          source: 'source',
          organizationId: 'organizationId',
          createdAt: '2000-01-23T04:56:07.000+00:00',
          actorId: 'actorId',
          action: 'action',
          id: 'id',
          actorApiKeySuffix: 'actorApiKeySuffix',
          statusCode: 0.8008281904610115,
        },
      ],
    },
    required: ['items', 'page', 'total', 'totalPages'],
  })
  .openapi('PaginatedAuditLogs')

const CreateOrganizationRegionQuotaSchema = z
  .object({
    sandboxClass: SandboxClassSchema,
    totalCpuQuota: z.number(),
    totalMemoryQuota: z.number(),
    totalDiskQuota: z.number(),
    totalGpuQuota: z.number(),
    allowedGpuTypes: z.array(GpuTypeSchema).nullable().exactOptional(),
    maxCpuPerSandbox: z.number().nullable().exactOptional(),
    maxMemoryPerSandbox: z.number().nullable().exactOptional(),
    maxDiskPerSandbox: z.number().nullable().exactOptional(),
    maxDiskPerNonEphemeralSandbox: z.number().nullable().exactOptional(),
    maxCpuPerGpuSandbox: z.number().nullable().exactOptional(),
    maxMemoryPerGpuSandbox: z.number().nullable().exactOptional(),
    maxDiskPerGpuSandbox: z.number().nullable().exactOptional(),
  })
  .openapi({
    example: {
      totalCpuQuota: 0.8008281904610115,
      allowedGpuTypes: ['H100', 'H100'],
      maxDiskPerGpuSandbox: 4.145608029883936,
      totalGpuQuota: 5.962133916683182,
      maxCpuPerGpuSandbox: 3.616076749251911,
      maxCpuPerSandbox: 5.637376656633329,
      maxDiskPerSandbox: 7.061401241503109,
      maxDiskPerNonEphemeralSandbox: 9.301444243932576,
      maxMemoryPerSandbox: 2.3021358869347655,
      totalMemoryQuota: 6.027456183070403,
      totalDiskQuota: 1.4658129805029452,
      sandboxClass: '',
      maxMemoryPerGpuSandbox: 2.027123023002322,
    },
    required: [
      'sandboxClass',
      'totalCpuQuota',
      'totalDiskQuota',
      'totalGpuQuota',
      'totalMemoryQuota',
    ],
  })
  .openapi('CreateOrganizationRegionQuota')

const WebhookAppPortalAccessSchema = z
  .object({
    token: z
      .string()
      .openapi({
        description: 'The authentication token for the Svix consumer app portal',
        example: 'appsk_...',
      }),
    url: z
      .string()
      .openapi({
        description: 'The URL to the webhook app portal',
        example: 'https://app.svix.com/app_1234567890',
      }),
  })
  .openapi({
    example: { url: 'https://app.svix.com/app_1234567890', token: 'appsk_...' },
    required: ['token', 'url'],
  })
  .openapi('WebhookAppPortalAccess')

const WebhookInitializationStatusSchema = z
  .object({
    organizationId: z
      .string()
      .openapi({ description: 'Organization ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    svixApplicationId: z
      .string()
      .nullable()
      .openapi({ description: 'The ID of the Svix application', example: 'app_1234567890' }),
    lastError: z
      .string()
      .nullable()
      .openapi({
        description: 'The error reason for the last initialization attempt',
        example: 'Failed to create Svix application',
      }),
    retryCount: z
      .number()
      .openapi({
        description: 'The number of times the initialization has been attempted',
        example: 3,
      }),
    createdAt: z
      .string()
      .openapi({
        description: 'When the webhook initialization was created',
        example: '2023-01-01T00:00:00.000Z',
      }),
    updatedAt: z
      .string()
      .openapi({
        description: 'When the webhook initialization was last updated',
        example: '2023-01-01T00:00:00.000Z',
      }),
  })
  .openapi({
    example: {
      organizationId: '123e4567-e89b-12d3-a456-426614174000',
      createdAt: '2023-01-01T00:00:00.000Z',
      lastError: 'Failed to create Svix application',
      retryCount: 3,
      svixApplicationId: 'app_1234567890',
      updatedAt: '2023-01-01T00:00:00.000Z',
    },
    required: [
      'createdAt',
      'lastError',
      'organizationId',
      'retryCount',
      'svixApplicationId',
      'updatedAt',
    ],
  })
  .openapi('WebhookInitializationStatus')

const StorageAccessDtoSchema = z
  .object({
    accessKey: z
      .string()
      .openapi({ description: 'Access key for storage authentication', example: 'temp-user-123' }),
    secret: z
      .string()
      .openapi({
        description: 'Secret key for storage authentication',
        example: 'abchbGciOiJIUzI1NiIs...',
      }),
    sessionToken: z
      .string()
      .openapi({
        description: 'Session token for storage authentication',
        example: 'eyJhbGciOiJIUzI1NiIs...',
      }),
    storageUrl: z.string().openapi({ description: 'Storage URL', example: 'storage.example.com' }),
    organizationId: z
      .string()
      .openapi({ description: 'Organization ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    bucket: z.string().openapi({ description: 'S3 bucket name', example: 'daytona' }),
  })
  .openapi({
    example: {
      organizationId: '123e4567-e89b-12d3-a456-426614174000',
      bucket: 'daytona',
      accessKey: 'temp-user-123',
      sessionToken: 'eyJhbGciOiJIUzI1NiIs...',
      secret: 'abchbGciOiJIUzI1NiIs...',
      storageUrl: 'storage.example.com',
    },
    required: ['accessKey', 'bucket', 'organizationId', 'secret', 'sessionToken', 'storageUrl'],
  })
  .openapi('StorageAccessDto')

const LogEntrySchema = z
  .object({
    timestamp: z.string().openapi({ description: 'Timestamp of the log entry' }),
    body: z.string().openapi({ description: 'Log message body' }),
    severityText: z
      .string()
      .openapi({ description: 'Severity level text (e.g., INFO, WARN, ERROR)' }),
    severityNumber: z.number().exactOptional().openapi({ description: 'Severity level number' }),
    serviceName: z.string().openapi({ description: 'Service name that generated the log' }),
    resourceAttributes: z
      .record(z.string(), z.string())
      .openapi({ description: 'Resource attributes from OTEL' }),
    logAttributes: z
      .record(z.string(), z.string())
      .openapi({ description: 'Log-specific attributes' }),
    traceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Associated trace ID if available' }),
    spanId: z.string().exactOptional().openapi({ description: 'Associated span ID if available' }),
  })
  .openapi({
    example: {
      traceId: 'traceId',
      spanId: 'spanId',
      severityText: 'severityText',
      severityNumber: 0.8008281904610115,
      logAttributes: { key: 'logAttributes' },
      body: 'body',
      serviceName: 'serviceName',
      resourceAttributes: { key: 'resourceAttributes' },
      timestamp: 'timestamp',
    },
    required: [
      'body',
      'logAttributes',
      'resourceAttributes',
      'serviceName',
      'severityText',
      'timestamp',
    ],
  })
  .openapi('LogEntry')

const PaginatedLogsSchema = z
  .object({
    items: z.array(LogEntrySchema).openapi({ description: 'List of log entries' }),
    total: z.number().openapi({ description: 'Total number of log entries matching the query' }),
    page: z.number().openapi({ description: 'Current page number' }),
    totalPages: z.number().openapi({ description: 'Total number of pages' }),
  })
  .openapi({
    example: {
      total: 6.027456183070403,
      totalPages: 5.962133916683182,
      page: 1.4658129805029452,
      items: [
        {
          traceId: 'traceId',
          spanId: 'spanId',
          severityText: 'severityText',
          severityNumber: 0.8008281904610115,
          logAttributes: { key: 'logAttributes' },
          body: 'body',
          serviceName: 'serviceName',
          resourceAttributes: { key: 'resourceAttributes' },
          timestamp: 'timestamp',
        },
        {
          traceId: 'traceId',
          spanId: 'spanId',
          severityText: 'severityText',
          severityNumber: 0.8008281904610115,
          logAttributes: { key: 'logAttributes' },
          body: 'body',
          serviceName: 'serviceName',
          resourceAttributes: { key: 'resourceAttributes' },
          timestamp: 'timestamp',
        },
      ],
    },
    required: ['items', 'page', 'total', 'totalPages'],
  })
  .openapi('PaginatedLogs')

const TraceSummarySchema = z
  .object({
    traceId: z.string().openapi({ description: 'Unique trace identifier' }),
    rootSpanName: z.string().openapi({ description: 'Name of the root span' }),
    startTime: z.string().openapi({ description: 'Trace start time' }),
    endTime: z.string().openapi({ description: 'Trace end time' }),
    durationMs: z.number().openapi({ description: 'Total duration in milliseconds' }),
    spanCount: z.number().openapi({ description: 'Number of spans in this trace' }),
    statusCode: z.string().exactOptional().openapi({ description: 'Status code of the trace' }),
  })
  .openapi({
    example: {
      traceId: 'traceId',
      spanCount: 6.027456183070403,
      rootSpanName: 'rootSpanName',
      startTime: 'startTime',
      endTime: 'endTime',
      durationMs: 0.8008281904610115,
      statusCode: 'statusCode',
    },
    required: ['durationMs', 'endTime', 'rootSpanName', 'spanCount', 'startTime', 'traceId'],
  })
  .openapi('TraceSummary')

const PaginatedTracesSchema = z
  .object({
    items: z.array(TraceSummarySchema).openapi({ description: 'List of trace summaries' }),
    total: z.number().openapi({ description: 'Total number of traces matching the query' }),
    page: z.number().openapi({ description: 'Current page number' }),
    totalPages: z.number().openapi({ description: 'Total number of pages' }),
  })
  .openapi({
    example: {
      total: 1.4658129805029452,
      totalPages: 5.637376656633329,
      page: 5.962133916683182,
      items: [
        {
          traceId: 'traceId',
          spanCount: 6.027456183070403,
          rootSpanName: 'rootSpanName',
          startTime: 'startTime',
          endTime: 'endTime',
          durationMs: 0.8008281904610115,
          statusCode: 'statusCode',
        },
        {
          traceId: 'traceId',
          spanCount: 6.027456183070403,
          rootSpanName: 'rootSpanName',
          startTime: 'startTime',
          endTime: 'endTime',
          durationMs: 0.8008281904610115,
          statusCode: 'statusCode',
        },
      ],
    },
    required: ['items', 'page', 'total', 'totalPages'],
  })
  .openapi('PaginatedTraces')

const TraceSpanSchema = z
  .object({
    traceId: z.string().openapi({ description: 'Trace identifier' }),
    spanId: z.string().openapi({ description: 'Span identifier' }),
    parentSpanId: z.string().exactOptional().openapi({ description: 'Parent span identifier' }),
    spanName: z.string().openapi({ description: 'Span name' }),
    timestamp: z.string().openapi({ description: 'Span start timestamp' }),
    durationNs: z.number().openapi({ description: 'Span duration in nanoseconds' }),
    spanAttributes: z.record(z.string(), z.string()).openapi({ description: 'Span attributes' }),
    statusCode: z.string().exactOptional().openapi({ description: 'Status code of the span' }),
    statusMessage: z.string().exactOptional().openapi({ description: 'Status message' }),
  })
  .openapi({
    example: {
      traceId: 'traceId',
      spanId: 'spanId',
      spanAttributes: { key: 'spanAttributes' },
      parentSpanId: 'parentSpanId',
      durationNs: 0.8008281904610115,
      statusMessage: 'statusMessage',
      spanName: 'spanName',
      timestamp: 'timestamp',
      statusCode: 'statusCode',
    },
    required: ['durationNs', 'spanAttributes', 'spanId', 'spanName', 'timestamp', 'traceId'],
  })
  .openapi('TraceSpan')

const MetricDataPointSchema = z
  .object({
    timestamp: z.string().openapi({ description: 'Timestamp of the data point' }),
    value: z.number().openapi({ description: 'Value at this timestamp' }),
  })
  .openapi({
    example: { value: 0.8008281904610115, timestamp: 'timestamp' },
    required: ['timestamp', 'value'],
  })
  .openapi('MetricDataPoint')

const MetricSeriesSchema = z
  .object({
    metricName: z.string().openapi({ description: 'Name of the metric' }),
    dataPoints: z
      .array(MetricDataPointSchema)
      .openapi({ description: 'Data points for this metric' }),
  })
  .openapi({
    example: {
      metricName: 'metricName',
      dataPoints: [
        { value: 0.8008281904610115, timestamp: 'timestamp' },
        { value: 0.8008281904610115, timestamp: 'timestamp' },
      ],
    },
    required: ['dataPoints', 'metricName'],
  })
  .openapi('MetricSeries')

const MetricsResponseSchema = z
  .object({ series: z.array(MetricSeriesSchema).openapi({ description: 'List of metric series' }) })
  .openapi({
    example: {
      series: [
        {
          metricName: 'metricName',
          dataPoints: [
            { value: 0.8008281904610115, timestamp: 'timestamp' },
            { value: 0.8008281904610115, timestamp: 'timestamp' },
          ],
        },
        {
          metricName: 'metricName',
          dataPoints: [
            { value: 0.8008281904610115, timestamp: 'timestamp' },
            { value: 0.8008281904610115, timestamp: 'timestamp' },
          ],
        },
      ],
    },
    required: ['series'],
  })
  .openapi('MetricsResponse')

const UploadFileDeprecatedRequestSchema = z
  .object({ file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }) })
  .openapi({ required: [] })
  .openapi('UploadFileDeprecatedRequest')

const AdminGetWebhookStatus_200ResponseSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ example: { enabled: true }, required: [] })
  .openapi('AdminGetWebhookStatus_200Response')

const HealthControllerCheck_200ResponseInfoValueSchema = z
  .looseObject({ status: z.string() })
  .openapi({ required: ['status'] })
  .openapi('HealthControllerCheck_200ResponseInfoValue')

const HealthControllerCheck_200ResponseSchema = z
  .object({
    status: z.string().exactOptional().openapi({ example: 'ok' }),
    info: z
      .record(z.string(), HealthControllerCheck_200ResponseInfoValueSchema)
      .nullable()
      .exactOptional()
      .openapi({ example: { database: { status: 'up' } } }),
    error: z
      .record(z.string(), HealthControllerCheck_200ResponseInfoValueSchema)
      .nullable()
      .exactOptional()
      .openapi({ example: {} }),
    details: z
      .record(z.string(), HealthControllerCheck_200ResponseInfoValueSchema)
      .exactOptional()
      .openapi({ example: { database: { status: 'up' } } }),
  })
  .openapi({
    example: {
      details: { database: { status: 'up' } },
      error: {},
      status: 'ok',
      info: { database: { status: 'up' } },
    },
    required: [],
  })
  .openapi('HealthControllerCheck_200Response')

const HealthControllerCheck_503ResponseSchema = z
  .object({
    status: z.string().exactOptional().openapi({ example: 'error' }),
    info: z
      .record(z.string(), HealthControllerCheck_200ResponseInfoValueSchema)
      .nullable()
      .exactOptional()
      .openapi({ example: { database: { status: 'up' } } }),
    error: z
      .record(z.string(), HealthControllerCheck_200ResponseInfoValueSchema)
      .nullable()
      .exactOptional()
      .openapi({ example: { redis: { status: 'down', message: 'Could not connect' } } }),
    details: z
      .record(z.string(), HealthControllerCheck_200ResponseInfoValueSchema)
      .exactOptional()
      .openapi({
        example: {
          database: { status: 'up' },
          redis: { status: 'down', message: 'Could not connect' },
        },
      }),
  })
  .openapi({
    example: {
      details: {
        database: { status: 'up' },
        redis: { status: 'down', message: 'Could not connect' },
      },
      error: { redis: { status: 'down', message: 'Could not connect' } },
      status: 'error',
      info: { database: { status: 'up' } },
    },
    required: [],
  })
  .openapi('HealthControllerCheck_503Response')

const BearerSecurityScheme = {
  bearerFormat: 'JWT',
  description: 'API Key access',
  scheme: 'bearer',
  type: 'http',
}

const Oauth2SecurityScheme = {
  openIdConnectUrl: 'http://localhost:3000/.well-known/openid-configuration',
  type: 'openIdConnect',
}

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['config'],
  summary: 'Get config',
  operationId: 'ConfigController_getConfig',
  responses: {
    200: {
      description: 'Daytona configuration',
      content: { 'application/json': { schema: DaytonaConfigurationSchema } },
    },
  },
})

export const getApiKeysRoute = createRoute({
  method: 'get',
  path: '/api-keys',
  tags: ['api-keys'],
  summary: 'List API keys',
  operationId: 'listApiKeys',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API keys retrieved successfully.',
      content: { 'application/json': { schema: z.array(ApiKeyListSchema) } },
    },
    500: { description: 'Error fetching API keys.' },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postApiKeysRoute = createRoute({
  method: 'post',
  path: '/api-keys',
  tags: ['api-keys'],
  summary: 'Create API key',
  operationId: 'createApiKey',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateApiKeySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'API key created successfully.',
      content: { 'application/json': { schema: ApiKeyResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getApiKeysCurrentRoute = createRoute({
  method: 'get',
  path: '/api-keys/current',
  tags: ['api-keys'],
  summary: "Get current API key's details",
  operationId: 'getCurrentApiKey',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API key retrieved successfully.',
      content: { 'application/json': { schema: ApiKeyListSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getApiKeysNameRoute = createRoute({
  method: 'get',
  path: '/api-keys/{name}',
  tags: ['api-keys'],
  summary: 'Get API key',
  operationId: 'getApiKey',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API key retrieved successfully.',
      content: { 'application/json': { schema: ApiKeyListSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteApiKeysNameRoute = createRoute({
  method: 'delete',
  path: '/api-keys/{name}',
  tags: ['api-keys'],
  summary: 'Delete API key',
  operationId: 'deleteApiKey',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'API key deleted successfully.' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteApiKeysUserIdNameRoute = createRoute({
  method: 'delete',
  path: '/api-keys/{userId}/{name}',
  tags: ['api-keys'],
  summary: 'Delete API key for user',
  operationId: 'deleteApiKeyForUser',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'API key deleted successfully.' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsInvitationsRoute = createRoute({
  method: 'get',
  path: '/organizations/invitations',
  tags: ['organizations'],
  summary: 'List organization invitations for authenticated user',
  operationId: 'listOrganizationInvitationsForAuthenticatedUser',
  responses: {
    200: {
      description: 'List of organization invitations',
      content: { 'application/json': { schema: z.array(OrganizationInvitationSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsInvitationsCountRoute = createRoute({
  method: 'get',
  path: '/organizations/invitations/count',
  tags: ['organizations'],
  summary: 'Get count of organization invitations for authenticated user',
  operationId: 'getOrganizationInvitationsCountForAuthenticatedUser',
  responses: {
    200: {
      description: 'Count of organization invitations',
      content: { 'application/json': { schema: z.number() } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsInvitationsInvitationIdAcceptRoute = createRoute({
  method: 'post',
  path: '/organizations/invitations/{invitationId}/accept',
  tags: ['organizations'],
  summary: 'Accept organization invitation',
  operationId: 'acceptOrganizationInvitation',
  request: {
    params: z.object({
      invitationId: z
        .string()
        .openapi({
          param: {
            description: 'Invitation ID',
            explode: false,
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Organization invitation accepted successfully',
      content: { 'application/json': { schema: OrganizationInvitationSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsInvitationsInvitationIdDeclineRoute = createRoute({
  method: 'post',
  path: '/organizations/invitations/{invitationId}/decline',
  tags: ['organizations'],
  summary: 'Decline organization invitation',
  operationId: 'declineOrganizationInvitation',
  request: {
    params: z.object({
      invitationId: z
        .string()
        .openapi({
          param: {
            description: 'Invitation ID',
            explode: false,
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Organization invitation declined successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsRoute = createRoute({
  method: 'get',
  path: '/organizations',
  tags: ['organizations'],
  summary: 'List organizations',
  operationId: 'listOrganizations',
  responses: {
    200: {
      description: 'List of organizations',
      content: { 'application/json': { schema: z.array(OrganizationSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsRoute = createRoute({
  method: 'post',
  path: '/organizations',
  tags: ['organizations'],
  summary: 'Create organization',
  operationId: 'createOrganization',
  request: {
    body: { content: { 'application/json': { schema: CreateOrganizationSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Organization created successfully',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchOrganizationsOrganizationIdDefaultRegionRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organizationId}/default-region',
  tags: ['organizations'],
  summary: 'Set default region for organization',
  operationId: 'setOrganizationDefaultRegion',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrganizationDefaultRegionSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Default region set successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}',
  tags: ['organizations'],
  summary: 'Get organization by ID',
  operationId: 'getOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Organization details',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteOrganizationsOrganizationIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationId}',
  tags: ['organizations'],
  summary: 'Delete organization',
  operationId: 'deleteOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'Organization deleted successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsOrganizationIdUsageRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/usage',
  tags: ['organizations'],
  summary: 'Get organization current usage overview',
  operationId: 'getOrganizationUsageOverview',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Current usage overview',
      content: { 'application/json': { schema: OrganizationUsageOverviewSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchOrganizationsOrganizationIdQuotaRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organizationId}/quota',
  tags: ['organizations'],
  summary: 'Update organization quota',
  operationId: 'updateOrganizationQuota',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrganizationQuotaSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Organization quota updated successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchOrganizationsOrganizationIdQuotaRegionIdRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organizationId}/quota/{regionId}',
  tags: ['organizations'],
  summary: 'Update organization region quota',
  operationId: 'updateOrganizationRegionQuota',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      regionId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the region where the updated quota will be applied',
            explode: false,
            in: 'path',
            name: 'regionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrganizationRegionQuotaSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Region quota updated successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsOrganizationIdLeaveRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/leave',
  tags: ['organizations'],
  summary: 'Leave organization',
  operationId: 'leaveOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'Organization left successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsOrganizationIdSuspendRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/suspend',
  tags: ['organizations'],
  summary: 'Suspend organization',
  operationId: 'suspendOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrganizationSuspensionSchema } } },
  },
  responses: { 204: { description: 'Organization suspended successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsOrganizationIdUnsuspendRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/unsuspend',
  tags: ['organizations'],
  summary: 'Unsuspend organization',
  operationId: 'unsuspendOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'Organization unsuspended successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenRoute = createRoute({
  method: 'get',
  path: '/organizations/otel-config/by-sandbox-auth-token/{authToken}',
  tags: ['organizations'],
  summary: 'Get organization OTEL config by sandbox auth token',
  operationId: 'getOrganizationOtelConfigBySandboxAuthToken',
  request: {
    params: z.object({
      authToken: z
        .string()
        .openapi({
          param: {
            description: 'Sandbox Auth Token',
            explode: false,
            in: 'path',
            name: 'authToken',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OTEL Config',
      content: { 'application/json': { schema: OtelConfigSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsOrganizationIdOtelConfigRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/otel-config',
  tags: ['organizations'],
  summary: 'Get organization OTEL config by organization ID',
  operationId: 'getOrganizationOtelConfig',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OTEL Config',
      content: { 'application/json': { schema: OtelConfigSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const putOrganizationsOrganizationIdOtelConfigRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/otel-config',
  tags: ['organizations'],
  summary: 'Update organization OpenTelemetry configuration',
  operationId: 'updateOrganizationOtelConfig',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OtelConfigSchema } }, required: true },
  },
  responses: { 204: { description: 'OpenTelemetry configuration updated successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteOrganizationsOrganizationIdOtelConfigRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationId}/otel-config',
  tags: ['organizations'],
  summary: 'Delete organization OpenTelemetry configuration',
  operationId: 'deleteOrganizationOtelConfig',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'OpenTelemetry configuration deleted successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/sandbox-default-limited-network-egress',
  tags: ['organizations'],
  summary: 'Update sandbox default limited network egress',
  operationId: 'updateSandboxDefaultLimitedNetworkEgress',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: OrganizationSandboxDefaultLimitedNetworkEgressSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Sandbox default limited network egress updated successfully' },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const putOrganizationsOrganizationIdExperimentalConfigRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/experimental-config',
  tags: ['organizations'],
  summary: 'Update experimental configuration',
  operationId: 'updateExperimentalConfig',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description:
        'Experimental configuration as a JSON object. Set to null to clear the configuration.',
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({
              example: {
                otel: { endpoint: 'http://otel-collector:4317', headers: { 'api-key': 'XXX' } },
              },
            }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsOrganizationIdRolesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/roles',
  tags: ['organizations'],
  summary: 'List organization roles',
  operationId: 'listOrganizationRoles',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of organization roles',
      content: { 'application/json': { schema: z.array(OrganizationRoleSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsOrganizationIdRolesRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/roles',
  tags: ['organizations'],
  summary: 'Create organization role',
  operationId: 'createOrganizationRole',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateOrganizationRoleSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Organization role created successfully',
      content: { 'application/json': { schema: OrganizationRoleSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const putOrganizationsOrganizationIdRolesRoleIdRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/roles/{roleId}',
  tags: ['organizations'],
  summary: 'Update organization role',
  operationId: 'updateOrganizationRole',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            description: 'Role ID',
            explode: false,
            in: 'path',
            name: 'roleId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrganizationRoleSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Role updated successfully',
      content: { 'application/json': { schema: OrganizationRoleSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteOrganizationsOrganizationIdRolesRoleIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationId}/roles/{roleId}',
  tags: ['organizations'],
  summary: 'Delete organization role',
  operationId: 'deleteOrganizationRole',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            description: 'Role ID',
            explode: false,
            in: 'path',
            name: 'roleId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'Organization role deleted successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsOrganizationIdUsersRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/users',
  tags: ['organizations'],
  summary: 'List organization members',
  operationId: 'listOrganizationMembers',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of organization members',
      content: { 'application/json': { schema: z.array(OrganizationUserSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsOrganizationIdUsersUserIdAccessRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/users/{userId}/access',
  tags: ['organizations'],
  summary: 'Update access for organization member',
  operationId: 'updateAccessForOrganizationMember',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'User ID',
            explode: false,
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrganizationMemberAccessSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Access updated successfully',
      content: { 'application/json': { schema: OrganizationUserSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteOrganizationsOrganizationIdUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationId}/users/{userId}',
  tags: ['organizations'],
  summary: 'Delete organization member',
  operationId: 'deleteOrganizationMember',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'User ID',
            explode: false,
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'User removed from organization successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getOrganizationsOrganizationIdInvitationsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/invitations',
  tags: ['organizations'],
  summary: 'List pending organization invitations',
  operationId: 'listOrganizationInvitations',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of pending organization invitations',
      content: { 'application/json': { schema: z.array(OrganizationInvitationSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsOrganizationIdInvitationsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/invitations',
  tags: ['organizations'],
  summary: 'Create organization invitation',
  operationId: 'createOrganizationInvitation',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateOrganizationInvitationSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Organization invitation created successfully',
      content: { 'application/json': { schema: OrganizationInvitationSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const putOrganizationsOrganizationIdInvitationsInvitationIdRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/invitations/{invitationId}',
  tags: ['organizations'],
  summary: 'Update organization invitation',
  operationId: 'updateOrganizationInvitation',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      invitationId: z
        .string()
        .openapi({
          param: {
            description: 'Invitation ID',
            explode: false,
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrganizationInvitationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Organization invitation updated successfully',
      content: { 'application/json': { schema: OrganizationInvitationSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postOrganizationsOrganizationIdInvitationsInvitationIdCancelRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/invitations/{invitationId}/cancel',
  tags: ['organizations'],
  summary: 'Cancel organization invitation',
  operationId: 'cancelOrganizationInvitation',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      invitationId: z
        .string()
        .openapi({
          param: {
            description: 'Invitation ID',
            explode: false,
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'Organization invitation cancelled successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getRegionsRoute = createRoute({
  method: 'get',
  path: '/regions',
  tags: ['organizations'],
  summary: 'List all available regions for the organization',
  operationId: 'listAvailableRegions',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all available regions',
      content: { 'application/json': { schema: z.array(RegionSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postRegionsRoute = createRoute({
  method: 'post',
  path: '/regions',
  tags: ['organizations'],
  summary: 'Create a new region',
  operationId: 'createRegion',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateRegionSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The region has been successfully created.',
      content: { 'application/json': { schema: CreateRegionResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getRegionsIdRoute = createRoute({
  method: 'get',
  path: '/regions/{id}',
  tags: ['organizations'],
  summary: 'Get region by ID',
  operationId: 'getRegionById',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Region ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RegionSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteRegionsIdRoute = createRoute({
  method: 'delete',
  path: '/regions/{id}',
  tags: ['organizations'],
  summary: 'Delete a region',
  operationId: 'deleteRegion',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Region ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'The region has been successfully deleted.' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchRegionsIdRoute = createRoute({
  method: 'patch',
  path: '/regions/{id}',
  tags: ['organizations'],
  summary: 'Update region configuration',
  operationId: 'updateRegion',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Region ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateRegionSchema } }, required: true },
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postRegionsIdRegenerateProxyApiKeyRoute = createRoute({
  method: 'post',
  path: '/regions/{id}/regenerate-proxy-api-key',
  tags: ['organizations'],
  summary: 'Regenerate proxy API key for a region',
  operationId: 'regenerateProxyApiKey',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Region ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The proxy API key has been successfully regenerated.',
      content: { 'application/json': { schema: RegenerateApiKeyResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postRegionsIdRegenerateSshGatewayApiKeyRoute = createRoute({
  method: 'post',
  path: '/regions/{id}/regenerate-ssh-gateway-api-key',
  tags: ['organizations'],
  summary: 'Regenerate SSH gateway API key for a region',
  operationId: 'regenerateSshGatewayApiKey',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Region ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The SSH gateway API key has been successfully regenerated.',
      content: { 'application/json': { schema: RegenerateApiKeyResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postRegionsIdRegenerateSnapshotManagerCredentialsRoute = createRoute({
  method: 'post',
  path: '/regions/{id}/regenerate-snapshot-manager-credentials',
  tags: ['organizations'],
  summary: 'Regenerate snapshot manager credentials for a region',
  operationId: 'regenerateSnapshotManagerCredentials',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Region ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The snapshot manager credentials have been successfully regenerated.',
      content: { 'application/json': { schema: SnapshotManagerCredentialsSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['users'],
  summary: 'Get authenticated user',
  operationId: 'getAuthenticatedUser',
  responses: {
    200: { description: 'User details', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getUsersAccountProvidersRoute = createRoute({
  method: 'get',
  path: '/users/account-providers',
  tags: ['users'],
  summary: 'Get available account providers',
  operationId: 'getAvailableAccountProviders',
  responses: {
    200: {
      description: 'Available account providers',
      content: { 'application/json': { schema: z.array(AccountProviderSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postUsersLinkedAccountsRoute = createRoute({
  method: 'post',
  path: '/users/linked-accounts',
  tags: ['users'],
  summary: 'Link account',
  operationId: 'linkAccount',
  request: {
    body: {
      content: { 'application/json': { schema: CreateLinkedAccountSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Account linked successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteUsersLinkedAccountsProviderProviderUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/linked-accounts/{provider}/{providerUserId}',
  tags: ['users'],
  summary: 'Unlink account',
  operationId: 'unlinkAccount',
  request: {
    params: z.object({
      provider: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'provider',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      providerUserId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'providerUserId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'Account unlinked successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postUsersMfaSmsEnrollRoute = createRoute({
  method: 'post',
  path: '/users/mfa/sms/enroll',
  tags: ['users'],
  summary: 'Enroll in SMS MFA',
  operationId: 'enrollInSmsMfa',
  responses: {
    200: {
      description: 'SMS MFA enrollment URL',
      content: { 'application/json': { schema: z.string() } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSharedRegionsRoute = createRoute({
  method: 'get',
  path: '/shared-regions',
  tags: ['regions'],
  summary: 'List all shared regions',
  operationId: 'listSharedRegions',
  responses: {
    200: {
      description: 'List of all shared regions',
      content: { 'application/json': { schema: z.array(RegionSchema) } },
    },
  },
})

export const getSandboxRoute = createRoute({
  method: 'get',
  path: '/sandbox',
  tags: ['sandbox'],
  summary: 'List sandboxes',
  description: 'Advanced filtering and ordering. Eventually consistent.',
  operationId: 'listSandboxes',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Pagination cursor from a previous response',
            explode: true,
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'string' },
            style: 'form',
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
          z.number().min(1).max(200),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, maximum: 200, minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by ID prefix (case-insensitive)',
            explode: true,
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name prefix (case-insensitive)',
            explode: true,
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      labels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'JSON encoded labels to filter by',
            explode: true,
            in: 'query',
            name: 'labels',
            required: false,
            schema: { example: '{"label1": "value1", "label2": "value2"}', type: 'string' },
            style: 'form',
          },
          example: '{"label1": "value1", "label2": "value2"}',
        }),
      includeErroredDeleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include results with errored state and deleted desired state',
            explode: true,
            in: 'query',
            name: 'includeErroredDeleted',
            required: false,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SandboxStateSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of states to filter by.',
            explode: true,
            in: 'query',
            name: 'states',
            required: false,
            schema: { items: { $ref: '#/components/schemas/SandboxState' }, type: 'array' },
            style: 'form',
          },
        }),
      snapshots: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of snapshot names to filter by',
            explode: true,
            in: 'query',
            name: 'snapshots',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      regionIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of regions IDs to filter by',
            explode: true,
            in: 'query',
            name: 'regionIds',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      sandboxClasses: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SandboxClassSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of sandbox classes to filter by',
            explode: true,
            in: 'query',
            name: 'sandboxClasses',
            required: false,
            schema: { items: { $ref: '#/components/schemas/SandboxClass' }, type: 'array' },
            style: 'form',
          },
        }),
      minCpu: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum CPU',
            explode: true,
            in: 'query',
            name: 'minCpu',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      maxCpu: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum CPU',
            explode: true,
            in: 'query',
            name: 'maxCpu',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      minMemoryGiB: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum memory in GiB',
            explode: true,
            in: 'query',
            name: 'minMemoryGiB',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      maxMemoryGiB: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum memory in GiB',
            explode: true,
            in: 'query',
            name: 'maxMemoryGiB',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      minDiskGiB: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum disk space in GiB',
            explode: true,
            in: 'query',
            name: 'minDiskGiB',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      maxDiskGiB: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum disk space in GiB',
            explode: true,
            in: 'query',
            name: 'maxDiskGiB',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      isPublic: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by public status',
            explode: true,
            in: 'query',
            name: 'isPublic',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      isRecoverable: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by recoverable status',
            explode: true,
            in: 'query',
            name: 'isRecoverable',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      createdAtAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Include items created after this timestamp',
            explode: true,
            in: 'query',
            name: 'createdAtAfter',
            required: false,
            schema: { example: '2024-01-01T00:00:00Z', format: 'date-time', type: 'string' },
            style: 'form',
          },
          example: '2024-01-01T00:00:00Z',
        }),
      createdAtBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Include items created before this timestamp',
            explode: true,
            in: 'query',
            name: 'createdAtBefore',
            required: false,
            schema: { example: '2024-12-31T23:59:59Z', format: 'date-time', type: 'string' },
            style: 'form',
          },
          example: '2024-12-31T23:59:59Z',
        }),
      lastEventAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Include items with last event after this timestamp',
            explode: true,
            in: 'query',
            name: 'lastEventAfter',
            required: false,
            schema: { example: '2024-01-01T00:00:00Z', format: 'date-time', type: 'string' },
            style: 'form',
          },
          example: '2024-01-01T00:00:00Z',
        }),
      lastEventBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Include items with last event before this timestamp',
            explode: true,
            in: 'query',
            name: 'lastEventBefore',
            required: false,
            schema: { example: '2024-12-31T23:59:59Z', format: 'date-time', type: 'string' },
            style: 'form',
          },
          example: '2024-12-31T23:59:59Z',
        }),
      sort: SandboxListSortFieldSchema.openapi({
        param: {
          description: 'Field to sort by',
          explode: true,
          in: 'query',
          name: 'sort',
          required: false,
          schema: { $ref: '#/components/schemas/SandboxListSortField' },
          style: 'form',
        },
      }).exactOptional(),
      order: SandboxListSortDirectionSchema.openapi({
        param: {
          description: 'Direction to sort by',
          explode: true,
          in: 'query',
          name: 'order',
          required: false,
          schema: { $ref: '#/components/schemas/SandboxListSortDirection' },
          style: 'form',
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ListSandboxesResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxRoute = createRoute({
  method: 'post',
  path: '/sandbox',
  tags: ['sandbox'],
  summary: 'Create a new sandbox',
  operationId: 'createSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateSandboxSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The sandbox has been successfully created.',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxPaginatedRoute = createRoute({
  method: 'get',
  path: '/sandbox/paginated',
  tags: ['sandbox'],
  summary: '[DEPRECATED] List all sandboxes paginated',
  operationId: 'listSandboxesPaginated_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number of the results',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'number' },
            style: 'form',
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
          z.number().min(1).max(200),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, maximum: 200, minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by partial ID match',
            explode: true,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'abc123', type: 'string' },
            style: 'form',
          },
          example: 'abc123',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by partial name match',
            explode: true,
            in: 'query',
            name: 'name',
            required: false,
            schema: { example: 'abc123', type: 'string' },
            style: 'form',
          },
          example: 'abc123',
        }),
      labels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'JSON encoded labels to filter by',
            explode: true,
            in: 'query',
            name: 'labels',
            required: false,
            schema: { example: '{"label1": "value1", "label2": "value2"}', type: 'string' },
            style: 'form',
          },
          example: '{"label1": "value1", "label2": "value2"}',
        }),
      includeErroredDeleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include results with errored state and deleted desired state',
            explode: true,
            in: 'query',
            name: 'includeErroredDeleted',
            required: false,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'creating',
              'restoring',
              'destroying',
              'started',
              'stopped',
              'starting',
              'stopping',
              'error',
              'build_failed',
              'pending_build',
              'building_snapshot',
              'unknown',
              'pulling_snapshot',
              'archived',
              'archiving',
              'resizing',
              'snapshotting',
              'forking',
              'pausing',
              'paused',
              'resuming',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of states to filter by',
            explode: true,
            in: 'query',
            name: 'states',
            required: false,
            schema: {
              items: {
                enum: [
                  'creating',
                  'restoring',
                  'destroying',
                  'started',
                  'stopped',
                  'starting',
                  'stopping',
                  'error',
                  'build_failed',
                  'pending_build',
                  'building_snapshot',
                  'unknown',
                  'pulling_snapshot',
                  'archived',
                  'archiving',
                  'resizing',
                  'snapshotting',
                  'forking',
                  'pausing',
                  'paused',
                  'resuming',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
          },
        }),
      snapshots: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of snapshot names to filter by',
            explode: true,
            in: 'query',
            name: 'snapshots',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      regions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of regions to filter by',
            explode: true,
            in: 'query',
            name: 'regions',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      minCpu: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum CPU',
            explode: true,
            in: 'query',
            name: 'minCpu',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      maxCpu: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum CPU',
            explode: true,
            in: 'query',
            name: 'maxCpu',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      minMemoryGiB: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum memory in GiB',
            explode: true,
            in: 'query',
            name: 'minMemoryGiB',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      maxMemoryGiB: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum memory in GiB',
            explode: true,
            in: 'query',
            name: 'maxMemoryGiB',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      minDiskGiB: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum disk space in GiB',
            explode: true,
            in: 'query',
            name: 'minDiskGiB',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      maxDiskGiB: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum disk space in GiB',
            explode: true,
            in: 'query',
            name: 'maxDiskGiB',
            required: false,
            schema: { minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      lastEventAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Include items with last event after this timestamp',
            explode: true,
            in: 'query',
            name: 'lastEventAfter',
            required: false,
            schema: { example: '2024-01-01T00:00:00Z', format: 'date-time', type: 'string' },
            style: 'form',
          },
          example: '2024-01-01T00:00:00Z',
        }),
      lastEventBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Include items with last event before this timestamp',
            explode: true,
            in: 'query',
            name: 'lastEventBefore',
            required: false,
            schema: { example: '2024-12-31T23:59:59Z', format: 'date-time', type: 'string' },
            style: 'form',
          },
          example: '2024-12-31T23:59:59Z',
        }),
      sort: z
        .enum([
          'id',
          'name',
          'state',
          'snapshot',
          'region',
          'updatedAt',
          'createdAt',
          'lastActivityAt',
        ])
        .default('createdAt')
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            explode: true,
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'createdAt',
              enum: [
                'id',
                'name',
                'state',
                'snapshot',
                'region',
                'updatedAt',
                'createdAt',
                'lastActivityAt',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction to sort by',
            explode: true,
            in: 'query',
            name: 'order',
            required: false,
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of all sandboxes',
      content: { 'application/json': { schema: PaginatedSandboxesDeprecatedSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxForRunnerRoute = createRoute({
  method: 'get',
  path: '/sandbox/for-runner',
  tags: ['sandbox'],
  summary: 'Get sandboxes for the authenticated runner',
  operationId: 'getSandboxesForRunner',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      states: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of sandbox states to filter by',
            explode: true,
            in: 'query',
            name: 'states',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      skipReconcilingSandboxes: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Skip sandboxes where state differs from desired state',
            explode: true,
            in: 'query',
            name: 'skipReconcilingSandboxes',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of sandboxes for the authenticated runner',
      content: { 'application/json': { schema: z.array(SandboxSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdOrNameRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxIdOrName}',
  tags: ['sandbox'],
  summary: 'Get sandbox details',
  operationId: 'getSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      verbose: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include verbose output',
            explode: true,
            in: 'query',
            name: 'verbose',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sandbox details',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteSandboxSandboxIdOrNameRoute = createRoute({
  method: 'delete',
  path: '/sandbox/{sandboxIdOrName}',
  tags: ['sandbox'],
  summary: 'Delete sandbox',
  operationId: 'deleteSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sandbox has been deleted',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameRecoverRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/recover',
  tags: ['sandbox'],
  summary: 'Recover sandbox from error state',
  operationId: 'recoverSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      skipStart: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, the sandbox is left in STOPPED after recovery instead of being started.',
            explode: true,
            in: 'query',
            name: 'skipStart',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recovery initiated',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameStartRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/start',
  tags: ['sandbox'],
  summary: 'Start or resume sandbox',
  description:
    'Starts a stopped or archived sandbox, or resumes a paused sandbox. The transition taken depends on the current sandbox state.',
  operationId: 'startSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Sandbox has been started, is being restored from archived state, or is being resumed from paused',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameStopRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/stop',
  tags: ['sandbox'],
  summary: 'Stop sandbox',
  operationId: 'stopSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Force stop the sandbox using SIGKILL instead of SIGTERM',
            explode: true,
            in: 'query',
            name: 'force',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sandbox has been stopped',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNamePauseRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/pause',
  tags: ['sandbox'],
  summary: 'Pause sandbox',
  operationId: 'pauseSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sandbox pause has been initiated',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameResizeRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/resize',
  tags: ['sandbox'],
  summary: 'Resize sandbox resources',
  operationId: 'resizeSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResizeSandboxSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Sandbox has been resized',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const putSandboxSandboxIdOrNameLabelsRoute = createRoute({
  method: 'put',
  path: '/sandbox/{sandboxIdOrName}/labels',
  tags: ['sandbox'],
  summary: 'Replace sandbox labels',
  operationId: 'replaceLabels',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SandboxLabelsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Labels have been successfully replaced',
      content: { 'application/json': { schema: SandboxLabelsSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const putSandboxSandboxIdStateRoute = createRoute({
  method: 'put',
  path: '/sandbox/{sandboxId}/state',
  tags: ['sandbox'],
  summary: 'Update sandbox state',
  operationId: 'updateSandboxState',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSandboxStateDtoSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Sandbox state has been successfully updated' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameBackupRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/backup',
  tags: ['sandbox'],
  summary: 'Create sandbox backup',
  operationId: 'createBackup',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sandbox backup has been initiated',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameSnapshotRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/snapshot',
  tags: ['sandbox'],
  summary: 'Create a snapshot from a sandbox',
  operationId: 'createSandboxSnapshot',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSandboxSnapshotSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Snapshot creation has been initiated',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameForkRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/fork',
  tags: ['sandbox'],
  summary: 'Fork a sandbox',
  operationId: 'forkSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ForkSandboxSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Fork operation has been initiated',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdOrNameForksRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxIdOrName}/forks',
  tags: ['sandbox'],
  summary: 'Get sandbox fork children',
  operationId: 'getSandboxForks',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      includeDestroyed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'includeDestroyed',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(SandboxSchema) } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdOrNameParentRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxIdOrName}/parent',
  tags: ['sandbox'],
  summary: 'Get sandbox fork parent',
  operationId: 'getSandboxParent',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SandboxSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdOrNameAncestorsRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxIdOrName}/ancestors',
  tags: ['sandbox'],
  summary: 'Get sandbox fork ancestor chain',
  operationId: 'getSandboxAncestors',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(SandboxSchema) } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNamePublicIsPublicRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/public/{isPublic}',
  tags: ['sandbox'],
  summary: 'Update public status',
  operationId: 'updatePublicStatus',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      isPublic: z
        .stringbool()
        .openapi({
          param: {
            description: 'Public status to set',
            explode: false,
            in: 'path',
            name: 'isPublic',
            required: true,
            schema: { type: 'boolean' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Public status has been successfully updated',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdLastActivityRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxId}/last-activity',
  tags: ['sandbox'],
  summary: 'Update sandbox last activity',
  operationId: 'updateLastActivity',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 201: { description: 'Last activity has been updated' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameAutostopIntervalRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/autostop/{interval}',
  tags: ['sandbox'],
  summary: 'Set sandbox auto-stop interval',
  operationId: 'setAutostopInterval',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Auto-stop interval in minutes (0 to disable)',
            explode: false,
            in: 'path',
            name: 'interval',
            required: true,
            schema: { type: 'number' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Auto-stop interval has been set',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameAutoarchiveIntervalRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/autoarchive/{interval}',
  tags: ['sandbox'],
  summary: 'Set sandbox auto-archive interval',
  operationId: 'setAutoArchiveInterval',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              'Auto-archive interval in minutes (0 means the maximum interval will be used)',
            explode: false,
            in: 'path',
            name: 'interval',
            required: true,
            schema: { type: 'number' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Auto-archive interval has been set',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameAutodeleteIntervalRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/autodelete/{interval}',
  tags: ['sandbox'],
  summary: 'Set sandbox auto-delete interval',
  operationId: 'setAutoDeleteInterval',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              'Auto-delete interval in minutes (negative value means disabled, 0 means delete immediately upon stopping)',
            explode: false,
            in: 'path',
            name: 'interval',
            required: true,
            schema: { type: 'number' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Auto-delete interval has been set',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameNetworkSettingsRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/network-settings',
  tags: ['sandbox'],
  summary: 'Update sandbox network settings',
  description:
    'Changes outbound network policy on the runner for a running sandbox (for example block all traffic, restore access, or set a CIDR allow list).',
  operationId: 'updateNetworkSettings',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSandboxNetworkSettingsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Network settings have been updated',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameArchiveRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/archive',
  tags: ['sandbox'],
  summary: 'Archive sandbox',
  operationId: 'archiveSandbox',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sandbox has been archived',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdOrNamePortsPortPreviewUrlRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxIdOrName}/ports/{port}/preview-url',
  tags: ['sandbox'],
  summary: 'Get preview URL for a sandbox port',
  operationId: 'getPortPreviewUrl',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Port number to get preview URL for',
            explode: false,
            in: 'path',
            name: 'port',
            required: true,
            schema: { type: 'number' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preview URL for the specified port',
      content: { 'application/json': { schema: PortPreviewUrlSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxIdOrName}/ports/{port}/signed-preview-url',
  tags: ['sandbox'],
  summary: 'Get signed preview URL for a sandbox port',
  operationId: 'getSignedPortPreviewUrl',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      port: z
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
            description: 'Port number to get signed preview URL for',
            explode: false,
            in: 'path',
            name: 'port',
            required: true,
            schema: { type: 'integer' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      expiresInSeconds: z
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
            description: 'Expiration time in seconds (default: 60 seconds)',
            explode: true,
            in: 'query',
            name: 'expiresInSeconds',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Signed preview URL for the specified port',
      content: { 'application/json': { schema: SignedPortPreviewUrlSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/ports/{port}/signed-preview-url/{token}/expire',
  tags: ['sandbox'],
  summary: 'Expire signed preview URL for a sandbox port',
  operationId: 'expireSignedPortPreviewUrl',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      port: z
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
            description: 'Port number to expire signed preview URL for',
            explode: false,
            in: 'path',
            name: 'port',
            required: true,
            schema: { type: 'integer' },
            style: 'simple',
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description: 'Token to expire signed preview URL for',
            explode: false,
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Signed preview URL has been expired' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdOrNameBuildLogsRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxIdOrName}/build-logs',
  tags: ['sandbox'],
  summary: 'Get build logs',
  description: 'This endpoint is deprecated. Use `getBuildLogsUrl` instead.',
  operationId: 'getBuildLogs',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      follow: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to follow the logs stream',
            explode: true,
            in: 'query',
            name: 'follow',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Build logs stream' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdOrNameBuildLogsUrlRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxIdOrName}/build-logs-url',
  tags: ['sandbox'],
  summary: 'Get build logs URL',
  operationId: 'getBuildLogsUrl',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Build logs URL', content: { 'application/json': { schema: UrlSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSandboxSandboxIdOrNameSshAccessRoute = createRoute({
  method: 'post',
  path: '/sandbox/{sandboxIdOrName}/ssh-access',
  tags: ['sandbox'],
  summary: 'Create SSH access for sandbox',
  operationId: 'createSshAccess',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      expiresInMinutes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Expiration time in minutes (default: 60)',
            explode: true,
            in: 'query',
            name: 'expiresInMinutes',
            required: false,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SSH access has been created',
      content: { 'application/json': { schema: SshAccessDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteSandboxSandboxIdOrNameSshAccessRoute = createRoute({
  method: 'delete',
  path: '/sandbox/{sandboxIdOrName}/ssh-access',
  tags: ['sandbox'],
  summary: 'Revoke SSH access for sandbox',
  operationId: 'revokeSshAccess',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxIdOrName: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxIdOrName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'SSH access token to revoke. If not provided, all SSH access for the sandbox will be revoked.',
            explode: true,
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SSH access has been revoked',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSshAccessValidateRoute = createRoute({
  method: 'get',
  path: '/sandbox/ssh-access/validate',
  tags: ['sandbox'],
  summary: 'Validate SSH access for sandbox',
  operationId: 'validateSshAccess',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'SSH access token to validate',
            explode: true,
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SSH access validation result',
      content: { 'application/json': { schema: SshAccessValidationDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdToolboxProxyUrlRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxId}/toolbox-proxy-url',
  tags: ['sandbox'],
  summary: 'Get toolbox proxy URL for a sandbox',
  operationId: 'getToolboxProxyUrl',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Toolbox proxy URL for the specified sandbox',
      content: { 'application/json': { schema: ToolboxProxyUrlSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdOrganizationRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxId}/organization',
  tags: ['sandbox'],
  summary: 'Get organization by sandbox ID',
  operationId: 'getOrganizationBySandboxId',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Organization',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdRegionQuotaRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxId}/region-quota',
  tags: ['sandbox'],
  summary: 'Get region quota by sandbox ID',
  operationId: 'getRegionQuotaBySandboxId',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Region quota',
      content: { 'application/json': { schema: RegionQuotaSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getRunnersRoute = createRoute({
  method: 'get',
  path: '/runners',
  tags: ['runners'],
  summary: 'List all runners',
  operationId: 'listRunners',
  request: {
    query: z.object({
      regionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter runners by region ID',
            explode: true,
            in: 'query',
            name: 'regionId',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(RunnerSchema) } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postRunnersRoute = createRoute({
  method: 'post',
  path: '/runners',
  tags: ['runners'],
  summary: 'Create runner',
  operationId: 'createRunner',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateRunnerSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateRunnerResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getRunnersMeRoute = createRoute({
  method: 'get',
  path: '/runners/me',
  tags: ['runners'],
  summary: 'Get info for authenticated runner',
  operationId: 'getInfoForAuthenticatedRunner',
  responses: {
    200: {
      description: 'Runner info',
      content: { 'application/json': { schema: RunnerFullSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getRunnersBySandboxSandboxIdRoute = createRoute({
  method: 'get',
  path: '/runners/by-sandbox/{sandboxId}',
  tags: ['runners'],
  summary: 'Get runner by sandbox ID',
  operationId: 'getRunnerBySandboxId',
  request: {
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RunnerFullSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getRunnersBySnapshotRefRoute = createRoute({
  method: 'get',
  path: '/runners/by-snapshot-ref',
  tags: ['runners'],
  summary: 'Get runners by snapshot ref',
  operationId: 'getRunnersBySnapshotRef',
  request: {
    query: z.object({
      ref: z
        .string()
        .openapi({
          param: {
            description: 'Snapshot ref',
            explode: true,
            in: 'query',
            name: 'ref',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RunnerSnapshotDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getRunnersIdRoute = createRoute({
  method: 'get',
  path: '/runners/{id}',
  tags: ['runners'],
  summary: 'Get runner by ID',
  operationId: 'getRunnerById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Runner ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RunnerSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteRunnersIdRoute = createRoute({
  method: 'delete',
  path: '/runners/{id}',
  tags: ['runners'],
  summary: 'Delete runner',
  operationId: 'deleteRunner',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Runner ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getRunnersIdFullRoute = createRoute({
  method: 'get',
  path: '/runners/{id}/full',
  tags: ['runners'],
  summary: 'Get runner by ID',
  operationId: 'getRunnerFullById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Runner ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RunnerFullSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchRunnersIdSchedulingRoute = createRoute({
  method: 'patch',
  path: '/runners/{id}/scheduling',
  tags: ['runners'],
  summary: 'Update runner scheduling status',
  operationId: 'updateRunnerScheduling',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Runner ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RunnerSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchRunnersIdDrainingRoute = createRoute({
  method: 'patch',
  path: '/runners/{id}/draining',
  tags: ['runners'],
  summary: 'Update runner draining status',
  operationId: 'updateRunnerDraining',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Runner ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RunnerSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postRunnersHealthcheckRoute = createRoute({
  method: 'post',
  path: '/runners/healthcheck',
  tags: ['runners'],
  summary: 'Runner healthcheck',
  description:
    'Endpoint for version 2 runners to send healthcheck and metrics. Updates lastChecked timestamp and runner metrics.',
  operationId: 'runnerHealthcheck',
  request: {
    body: { content: { 'application/json': { schema: RunnerHealthcheckSchema } }, required: true },
  },
  responses: { 200: { description: 'Healthcheck received' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxProjectDirRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/project-dir',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get sandbox project dir',
  operationId: 'getProjectDir_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project directory retrieved successfully',
      content: { 'application/json': { schema: ProjectDirResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxUserHomeDirRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/user-home-dir',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get sandbox user home dir',
  operationId: 'getUserHomeDir_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User home directory retrieved successfully',
      content: { 'application/json': { schema: UserHomeDirResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxWorkDirRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/work-dir',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get sandbox work-dir',
  operationId: 'getWorkDir_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Work-dir retrieved successfully',
      content: { 'application/json': { schema: WorkDirResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxFilesRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/files',
  tags: ['toolbox'],
  summary: '[DEPRECATED] List files',
  operationId: 'listFiles_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Files listed successfully',
      content: { 'application/json': { schema: z.array(FileInfoSchema) } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteToolboxSandboxIdToolboxFilesRoute = createRoute({
  method: 'delete',
  path: '/toolbox/{sandboxId}/toolbox/files',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Delete file',
  description: 'Delete file inside sandbox',
  operationId: 'deleteFile_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      recursive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'recursive',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'File deleted successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxFilesDownloadRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/files/download',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Download file',
  description: 'Download file from sandbox',
  operationId: 'downloadFile_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'File downloaded successfully',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxFilesBulkDownloadRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/files/bulk-download',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Download multiple files',
  description: 'Streams back a multipart/form-data bundle of the requested paths',
  operationId: 'downloadFiles_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadFilesSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A multipart/form-data response with each file as a part',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxFilesFindRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/files/find',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Search for text/pattern in files',
  description: 'Search for text/pattern inside sandbox files',
  operationId: 'findInFiles_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      pattern: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'pattern',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Search completed successfully',
      content: { 'application/json': { schema: z.array(MatchSchema) } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxFilesFolderRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/files/folder',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Create folder',
  description: 'Create folder inside sandbox',
  operationId: 'createFolder_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      mode: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'mode',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Folder created successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxFilesInfoRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/files/info',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get file info',
  description: 'Get file info inside sandbox',
  operationId: 'getFileInfo_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'File info retrieved successfully',
      content: { 'application/json': { schema: FileInfoSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxFilesMoveRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/files/move',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Move file',
  description: 'Move file inside sandbox',
  operationId: 'moveFile_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      source: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'source',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'File moved successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxFilesPermissionsRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/files/permissions',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Set file permissions',
  description: 'Set file owner/group/permissions inside sandbox',
  operationId: 'setFilePermissions_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'owner',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      group: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'group',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      mode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'mode',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'File permissions updated successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxFilesReplaceRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/files/replace',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Replace in files',
  description: 'Replace text/pattern in multiple files inside sandbox',
  operationId: 'replaceInFiles_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReplaceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Text replaced successfully',
      content: { 'application/json': { schema: z.array(ReplaceResultSchema) } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxFilesSearchRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/files/search',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Search files',
  description: 'Search for files inside sandbox',
  operationId: 'searchFiles_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      pattern: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'pattern',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Search completed successfully',
      content: { 'application/json': { schema: SearchFilesResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxFilesUploadRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/files/upload',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Upload file',
  description: 'Upload file inside sandbox',
  operationId: 'uploadFile_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
    body: {
      content: { 'multipart/form-data': { schema: UploadFileDeprecatedRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'File uploaded successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxFilesBulkUploadRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/files/bulk-upload',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Upload multiple files',
  description: 'Upload multiple files inside sandbox',
  operationId: 'uploadFiles_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(UploadFileSchema),
          ),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Files uploaded successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxGitAddRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/git/add',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Add files',
  description: 'Add files to git commit',
  operationId: 'gitAddFiles_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GitAddRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'Files added to git successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxGitBranchesRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/git/branches',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get branch list',
  description: 'Get branch list from git repository',
  operationId: 'gitListBranches_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Branch list retrieved successfully',
      content: { 'application/json': { schema: ListBranchResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxGitBranchesRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/git/branches',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Create branch',
  description: 'Create branch on git repository',
  operationId: 'gitCreateBranch_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GitBranchRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'Branch created successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteToolboxSandboxIdToolboxGitBranchesRoute = createRoute({
  method: 'delete',
  path: '/toolbox/{sandboxId}/toolbox/git/branches',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Delete branch',
  description: 'Delete branch on git repository',
  operationId: 'gitDeleteBranch_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GitDeleteBranchRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Branch deleted successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxGitCloneRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/git/clone',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Clone repository',
  description: 'Clone git repository',
  operationId: 'gitCloneRepository_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GitCloneRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'Repository cloned successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxGitCommitRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/git/commit',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Commit changes',
  description: 'Commit changes to git repository',
  operationId: 'gitCommitChanges_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GitCommitRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Changes committed successfully',
      content: { 'application/json': { schema: GitCommitResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxGitHistoryRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/git/history',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get commit history',
  description: 'Get commit history from git repository',
  operationId: 'gitGetHistory_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Commit history retrieved successfully',
      content: { 'application/json': { schema: z.array(GitCommitInfoSchema) } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxGitPullRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/git/pull',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Pull changes',
  description: 'Pull changes from remote',
  operationId: 'gitPullChanges_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GitRepoRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'Changes pulled successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxGitPushRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/git/push',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Push changes',
  description: 'Push changes to remote',
  operationId: 'gitPushChanges_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GitRepoRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'Changes pushed successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxGitCheckoutRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/git/checkout',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Checkout branch',
  description: 'Checkout branch or commit in git repository',
  operationId: 'gitCheckoutBranch_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GitCheckoutRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'Branch checked out successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxGitStatusRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/git/status',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get git status',
  description: 'Get status from git repository',
  operationId: 'gitGetStatus_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Git status retrieved successfully',
      content: { 'application/json': { schema: GitStatusSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxProcessExecuteRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/process/execute',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Execute command',
  description: 'Execute command synchronously inside sandbox',
  operationId: 'executeCommand_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExecuteRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Command executed successfully',
      content: { 'application/json': { schema: ExecuteResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxProcessSessionRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/process/session',
  tags: ['toolbox'],
  summary: '[DEPRECATED] List sessions',
  description: 'List all active sessions in the sandbox',
  operationId: 'listSessions_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sessions retrieved successfully',
      content: { 'application/json': { schema: z.array(SessionSchema) } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxProcessSessionRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/process/session',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Create session',
  description: 'Create a new session in the sandbox',
  operationId: 'createSession_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSessionRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxProcessSessionSessionIdRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/process/session/{sessionId}',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get session',
  description: 'Get session by ID',
  operationId: 'getSession_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sessionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Session retrieved successfully',
      content: { 'application/json': { schema: SessionSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteToolboxSandboxIdToolboxProcessSessionSessionIdRoute = createRoute({
  method: 'delete',
  path: '/toolbox/{sandboxId}/toolbox/process/session/{sessionId}',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Delete session',
  description: 'Delete a specific session',
  operationId: 'deleteSession_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sessionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Session deleted successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxProcessSessionSessionIdExecRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/process/session/{sessionId}/exec',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Execute command in session',
  description: 'Execute a command in a specific session',
  operationId: 'executeSessionCommand_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sessionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SessionExecuteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Command executed successfully',
      content: { 'application/json': { schema: SessionExecuteResponseSchema } },
    },
    202: {
      description: 'Command accepted and is being processed',
      content: { 'application/json': { schema: SessionExecuteResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/process/session/{sessionId}/command/{commandId}',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get session command',
  description: 'Get session command by ID',
  operationId: 'getSessionCommand_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sessionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      commandId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'commandId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Session command retrieved successfully',
      content: { 'application/json': { schema: CommandSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsRoute =
  createRoute({
    method: 'get',
    path: '/toolbox/{sandboxId}/toolbox/process/session/{sessionId}/command/{commandId}/logs',
    tags: ['toolbox'],
    summary: '[DEPRECATED] Get command logs',
    description: 'Get logs for a specific command in a session',
    operationId: 'getSessionCommandLogs_deprecated',
    request: {
      headers: z.object({
        'X-Daytona-Organization-ID': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Use with JWT to specify the organization ID',
              explode: false,
              in: 'header',
              name: 'X-Daytona-Organization-ID',
              required: false,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        sandboxId: z
          .string()
          .openapi({
            param: {
              explode: false,
              in: 'path',
              name: 'sandboxId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        sessionId: z
          .string()
          .openapi({
            param: {
              explode: false,
              in: 'path',
              name: 'sessionId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        commandId: z
          .string()
          .openapi({
            param: {
              explode: false,
              in: 'path',
              name: 'commandId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      query: z.object({
        follow: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description: 'Whether to stream the logs',
              explode: true,
              in: 'query',
              name: 'follow',
              required: false,
              schema: { type: 'boolean' },
              style: 'form',
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Command log stream marked with stdout and stderr prefixes',
        content: { 'text/plain': { schema: z.string() } },
      },
    },
    deprecated: true,
    security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
  })

export const getToolboxSandboxIdToolboxProcessPtyRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/process/pty',
  tags: ['toolbox'],
  summary: '[DEPRECATED] List PTY sessions',
  description: 'List all active PTY sessions in the sandbox',
  operationId: 'listPTYSessions_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'PTY sessions retrieved successfully',
      content: { 'application/json': { schema: PtyListResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxProcessPtyRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/process/pty',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Create PTY session',
  description: 'Create a new PTY session in the sandbox',
  operationId: 'createPTYSession_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PtyCreateRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'PTY session created successfully',
      content: { 'application/json': { schema: PtyCreateResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxProcessPtySessionIdRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/process/pty/{sessionId}',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get PTY session',
  description: 'Get PTY session information by ID',
  operationId: 'getPTYSession_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sessionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'PTY session retrieved successfully',
      content: { 'application/json': { schema: PtySessionInfoSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteToolboxSandboxIdToolboxProcessPtySessionIdRoute = createRoute({
  method: 'delete',
  path: '/toolbox/{sandboxId}/toolbox/process/pty/{sessionId}',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Delete PTY session',
  description: 'Delete a PTY session and terminate the associated process',
  operationId: 'deletePTYSession_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sessionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'PTY session deleted successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxProcessPtySessionIdResizeRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/process/pty/{sessionId}/resize',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Resize PTY session',
  description: 'Resize a PTY session',
  operationId: 'resizePTYSession_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sessionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PtyResizeRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'PTY session resized successfully',
      content: { 'application/json': { schema: PtySessionInfoSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxLspCompletionsRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/lsp/completions',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get Lsp Completions',
  description:
    'The Completion request is sent from the client to the server to compute completion items at a given cursor position.',
  operationId: 'LspCompletions_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: LspCompletionParamsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CompletionListSchema } } },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxLspDidCloseRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/lsp/did-close',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Call Lsp DidClose',
  description:
    'The document close notification is sent from the client to the server when the document got closed in the client.',
  operationId: 'LspDidClose_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LspDocumentRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxLspDidOpenRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/lsp/did-open',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Call Lsp DidOpen',
  description:
    'The document open notification is sent from the client to the server to signal newly opened text documents.',
  operationId: 'LspDidOpen_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LspDocumentRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxLspDocumentSymbolsRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/lsp/document-symbols',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Call Lsp DocumentSymbols',
  description: 'The document symbol request is sent from the client to the server.',
  operationId: 'LspDocumentSymbols_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      languageId: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'languageId',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      pathToProject: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'pathToProject',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      uri: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'uri',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LspSymbolSchema) } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxLspStartRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/lsp/start',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Start Lsp server',
  description: 'Start Lsp server process inside sandbox project',
  operationId: 'LspStart_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LspServerRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxLspStopRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/lsp/stop',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Stop Lsp server',
  description: 'Stop Lsp server process inside sandbox project',
  operationId: 'LspStop_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LspServerRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxLspWorkspaceSymbolsRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/lsp/workspace-symbols',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Call Lsp WorkspaceSymbols',
  description:
    'The workspace symbol request is sent from the client to the server to list project-wide symbols matching the query string.',
  operationId: 'LspWorkspaceSymbols_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      languageId: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'languageId',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      pathToProject: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'pathToProject',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      query: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LspSymbolSchema) } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseStartRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/start',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Start computer use processes',
  description: 'Start all VNC desktop processes (Xvfb, xfce4, x11vnc, novnc)',
  operationId: 'startComputerUse_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Computer use processes started successfully',
      content: { 'application/json': { schema: ComputerUseStartResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseStopRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/stop',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Stop computer use processes',
  description: 'Stop all VNC desktop processes (Xvfb, xfce4, x11vnc, novnc)',
  operationId: 'stopComputerUse_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Computer use processes stopped successfully',
      content: { 'application/json': { schema: ComputerUseStopResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseStatusRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/status',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get computer use status',
  description: 'Get status of all VNC desktop processes',
  operationId: 'getComputerUseStatus_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Computer use status retrieved successfully',
      content: { 'application/json': { schema: ComputerUseStatusResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/process/{processName}/status',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get process status',
  description: 'Get status of a specific VNC process',
  operationId: 'getProcessStatus_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      processName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'processName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Process status retrieved successfully',
      content: { 'application/json': { schema: ProcessStatusResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/process/{processName}/restart',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Restart process',
  description: 'Restart a specific VNC process',
  operationId: 'restartProcess_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      processName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'processName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Process restarted successfully',
      content: { 'application/json': { schema: ProcessRestartResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/process/{processName}/logs',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get process logs',
  description: 'Get logs for a specific VNC process',
  operationId: 'getProcessLogs_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      processName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'processName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Process logs retrieved successfully',
      content: { 'application/json': { schema: ProcessLogsResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/process/{processName}/errors',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get process errors',
  description: 'Get error logs for a specific VNC process',
  operationId: 'getProcessErrors_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      processName: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'processName',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Process errors retrieved successfully',
      content: { 'application/json': { schema: ProcessErrorsResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseMousePositionRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/mouse/position',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get mouse position',
  description: 'Get current mouse cursor position',
  operationId: 'getMousePosition_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Mouse position retrieved successfully',
      content: { 'application/json': { schema: MousePositionSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseMouseMoveRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/mouse/move',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Move mouse',
  description: 'Move mouse cursor to specified coordinates',
  operationId: 'moveMouse_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MouseMoveRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Mouse moved successfully',
      content: { 'application/json': { schema: MouseMoveResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseMouseClickRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/mouse/click',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Click mouse',
  description: 'Click mouse at specified coordinates',
  operationId: 'clickMouse_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MouseClickRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Mouse clicked successfully',
      content: { 'application/json': { schema: MouseClickResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseMouseDragRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/mouse/drag',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Drag mouse',
  description: 'Drag mouse from start to end coordinates',
  operationId: 'dragMouse_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MouseDragRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Mouse dragged successfully',
      content: { 'application/json': { schema: MouseDragResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseMouseScrollRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/mouse/scroll',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Scroll mouse',
  description: 'Scroll mouse at specified coordinates',
  operationId: 'scrollMouse_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MouseScrollRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Mouse scrolled successfully',
      content: { 'application/json': { schema: MouseScrollResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseKeyboardTypeRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/keyboard/type',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Type text',
  description: 'Type text using keyboard',
  operationId: 'typeText_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: KeyboardTypeRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Text typed successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseKeyboardKeyRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/keyboard/key',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Press key',
  description: 'Press a key with optional modifiers',
  operationId: 'pressKey_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: KeyboardPressRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Key pressed successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postToolboxSandboxIdToolboxComputeruseKeyboardHotkeyRoute = createRoute({
  method: 'post',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/keyboard/hotkey',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Press hotkey',
  description: 'Press a hotkey combination',
  operationId: 'pressHotkey_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: KeyboardHotkeyRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Hotkey pressed successfully' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseScreenshotRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/screenshot',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Take screenshot',
  description: 'Take a screenshot of the entire screen',
  operationId: 'takeScreenshot_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      show_cursor: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'show_cursor',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Screenshot taken successfully',
      content: { 'application/json': { schema: ScreenshotResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseScreenshotRegionRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/screenshot/region',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Take region screenshot',
  description: 'Take a screenshot of a specific region',
  operationId: 'takeRegionScreenshot_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      show_cursor: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'show_cursor',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'height',
            required: true,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'width',
            required: true,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      y: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'y',
            required: true,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      x: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'x',
            required: true,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Region screenshot taken successfully',
      content: { 'application/json': { schema: RegionScreenshotResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseScreenshotCompressedRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/screenshot/compressed',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Take compressed screenshot',
  description: 'Take a compressed screenshot with format, quality, and scale options',
  operationId: 'takeCompressedScreenshot_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      scale: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'scale',
            required: false,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      quality: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'format',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      show_cursor: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'show_cursor',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Compressed screenshot taken successfully',
      content: { 'application/json': { schema: CompressedScreenshotResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/screenshot/region/compressed',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Take compressed region screenshot',
  description: 'Take a compressed screenshot of a specific region',
  operationId: 'takeCompressedRegionScreenshot_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      scale: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'scale',
            required: false,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      quality: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'quality',
            required: false,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'format',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      show_cursor: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'show_cursor',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'height',
            required: true,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'width',
            required: true,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      y: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'y',
            required: true,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      x: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'x',
            required: true,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Compressed region screenshot taken successfully',
      content: { 'application/json': { schema: CompressedScreenshotResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseDisplayInfoRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/display/info',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get display info',
  description: 'Get information about displays',
  operationId: 'getDisplayInfo_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Display info retrieved successfully',
      content: { 'application/json': { schema: DisplayInfoResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getToolboxSandboxIdToolboxComputeruseDisplayWindowsRoute = createRoute({
  method: 'get',
  path: '/toolbox/{sandboxId}/toolbox/computeruse/display/windows',
  tags: ['toolbox'],
  summary: '[DEPRECATED] Get windows',
  description: 'Get list of open windows',
  operationId: 'getWindows_deprecated',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Windows list retrieved successfully',
      content: { 'application/json': { schema: WindowsResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSnapshotsRoute = createRoute({
  method: 'get',
  path: '/snapshots',
  tags: ['snapshots'],
  summary: 'List all snapshots',
  operationId: 'getAllSnapshots',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number of the results',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'number' },
            style: 'form',
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
          z.number().min(1).max(200),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, maximum: 200, minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by partial name match',
            explode: true,
            in: 'query',
            name: 'name',
            required: false,
            schema: { example: 'abc123', type: 'string' },
            style: 'form',
          },
          example: 'abc123',
        }),
      sort: z
        .enum(['name', 'state', 'lastUsedAt', 'createdAt'])
        .default('lastUsedAt')
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            explode: true,
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'lastUsedAt',
              enum: ['name', 'state', 'lastUsedAt', 'createdAt'],
              type: 'string',
            },
            style: 'form',
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction to sort by',
            explode: true,
            in: 'query',
            name: 'order',
            required: false,
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of all snapshots',
      content: { 'application/json': { schema: PaginatedSnapshotsSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSnapshotsRoute = createRoute({
  method: 'post',
  path: '/snapshots',
  tags: ['snapshots'],
  summary: 'Create a new snapshot',
  operationId: 'createSnapshot',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateSnapshotSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The snapshot has been successfully created.',
      content: { 'application/json': { schema: SnapshotDtoSchema } },
    },
    400: { description: 'Bad request - Snapshots with tag ":latest" are not allowed' },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSnapshotsIdRoute = createRoute({
  method: 'get',
  path: '/snapshots/{id}',
  tags: ['snapshots'],
  summary: 'Get snapshot by ID or name',
  operationId: 'getSnapshot',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Snapshot ID or name',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The snapshot',
      content: { 'application/json': { schema: SnapshotDtoSchema } },
    },
    404: { description: 'Snapshot not found' },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteSnapshotsIdRoute = createRoute({
  method: 'delete',
  path: '/snapshots/{id}',
  tags: ['snapshots'],
  summary: 'Delete snapshot',
  operationId: 'removeSnapshot',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Snapshot ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Snapshot has been deleted' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSnapshotsIdBuildLogsRoute = createRoute({
  method: 'get',
  path: '/snapshots/{id}/build-logs',
  tags: ['snapshots'],
  summary: 'Get snapshot build logs',
  description: 'This endpoint is deprecated. Use `getSnapshotBuildLogsUrl` instead.',
  operationId: 'getSnapshotBuildLogs',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Snapshot ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      follow: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to follow the logs stream',
            explode: true,
            in: 'query',
            name: 'follow',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
  deprecated: true,
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSnapshotsIdBuildLogsUrlRoute = createRoute({
  method: 'get',
  path: '/snapshots/{id}/build-logs-url',
  tags: ['snapshots'],
  summary: 'Get snapshot build logs URL',
  operationId: 'getSnapshotBuildLogsUrl',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Snapshot ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The snapshot build logs URL',
      content: { 'application/json': { schema: UrlSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSnapshotsIdActivateRoute = createRoute({
  method: 'post',
  path: '/snapshots/{id}/activate',
  tags: ['snapshots'],
  summary: 'Activate a snapshot',
  operationId: 'activateSnapshot',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Snapshot ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The snapshot has been successfully activated.',
      content: { 'application/json': { schema: SnapshotDtoSchema } },
    },
    400: {
      description:
        'Bad request - Snapshot is already active, not in inactive state, or has associated snapshot runners',
    },
    404: { description: 'Snapshot not found' },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postSnapshotsIdDeactivateRoute = createRoute({
  method: 'post',
  path: '/snapshots/{id}/deactivate',
  tags: ['snapshots'],
  summary: 'Deactivate a snapshot',
  operationId: 'deactivateSnapshot',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Snapshot ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'The snapshot has been successfully deactivated.' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getPreviewSandboxIdPublicRoute = createRoute({
  method: 'get',
  path: '/preview/{sandboxId}/public',
  tags: ['preview'],
  summary: 'Check if sandbox is public',
  operationId: 'isSandboxPublic',
  request: {
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Public status of the sandbox',
      content: { 'application/json': { schema: z.boolean() } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getPreviewSandboxIdValidateAuthTokenRoute = createRoute({
  method: 'get',
  path: '/preview/{sandboxId}/validate/{authToken}',
  tags: ['preview'],
  summary: 'Check if sandbox auth token is valid',
  operationId: 'isValidAuthToken',
  request: {
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      authToken: z
        .string()
        .openapi({
          param: {
            description: 'Auth token of the sandbox',
            explode: false,
            in: 'path',
            name: 'authToken',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sandbox auth token validation status',
      content: { 'application/json': { schema: z.boolean() } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getPreviewSandboxIdAccessRoute = createRoute({
  method: 'get',
  path: '/preview/{sandboxId}/access',
  tags: ['preview'],
  summary: 'Check if user has access to the sandbox',
  operationId: 'hasSandboxAccess',
  request: {
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User access status to the sandbox',
      content: { 'application/json': { schema: z.boolean() } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getPreviewSignedPreviewTokenPortSandboxIdRoute = createRoute({
  method: 'get',
  path: '/preview/{signedPreviewToken}/{port}/sandbox-id',
  tags: ['preview'],
  summary: 'Get sandbox ID from signed preview URL token',
  operationId: 'getSandboxIdFromSignedPreviewUrlToken',
  request: {
    params: z.object({
      signedPreviewToken: z
        .string()
        .openapi({
          param: {
            description: 'Signed preview URL token',
            explode: false,
            in: 'path',
            name: 'signedPreviewToken',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Port number to get sandbox ID from signed preview URL token',
            explode: false,
            in: 'path',
            name: 'port',
            required: true,
            schema: { type: 'number' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sandbox ID from signed preview URL token',
      content: { 'application/json': { schema: z.string() } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getVolumesRoute = createRoute({
  method: 'get',
  path: '/volumes',
  tags: ['volumes'],
  summary: 'List all volumes',
  operationId: 'listVolumes',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include deleted volumes in the response',
            explode: true,
            in: 'query',
            name: 'includeDeleted',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all volumes',
      content: { 'application/json': { schema: z.array(VolumeDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postVolumesRoute = createRoute({
  method: 'post',
  path: '/volumes',
  tags: ['volumes'],
  summary: 'Create a new volume',
  operationId: 'createVolume',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateVolumeSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The volume has been successfully created.',
      content: { 'application/json': { schema: VolumeDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getVolumesVolumeIdRoute = createRoute({
  method: 'get',
  path: '/volumes/{volumeId}',
  tags: ['volumes'],
  summary: 'Get volume details',
  operationId: 'getVolume',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the volume',
            explode: false,
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Volume details',
      content: { 'application/json': { schema: VolumeDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteVolumesVolumeIdRoute = createRoute({
  method: 'delete',
  path: '/volumes/{volumeId}',
  tags: ['volumes'],
  summary: 'Delete volume',
  operationId: 'deleteVolume',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the volume',
            explode: false,
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Volume has been marked for deletion' },
    409: { description: 'Volume is in use by one or more sandboxes' },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getVolumesByNameNameRoute = createRoute({
  method: 'get',
  path: '/volumes/by-name/{name}',
  tags: ['volumes'],
  summary: 'Get volume details by name',
  operationId: 'getVolumeByName',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the volume',
            explode: false,
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Volume details',
      content: { 'application/json': { schema: VolumeDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getJobsRoute = createRoute({
  method: 'get',
  path: '/jobs',
  tags: ['jobs'],
  summary: 'List jobs for the runner',
  description: 'Returns a paginated list of jobs for the runner, optionally filtered by status.',
  operationId: 'listJobs',
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
          z.number().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number of the results',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'number' },
            style: 'form',
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
          z.number().min(1).max(200),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of jobs to return (default: 100, max: 500)',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, maximum: 200, minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      status: JobStatusSchema.openapi({
        param: {
          description: 'Filter jobs by status',
          explode: true,
          in: 'query',
          name: 'status',
          required: false,
          schema: { $ref: '#/components/schemas/JobStatus' },
          style: 'form',
        },
      }).exactOptional(),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of jobs to skip for pagination (default: 0)',
            explode: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of jobs for the runner',
      content: { 'application/json': { schema: PaginatedJobsSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getJobsPollRoute = createRoute({
  method: 'get',
  path: '/jobs/poll',
  tags: ['jobs'],
  summary: 'Long poll for jobs',
  description:
    'Long poll endpoint for runners to fetch pending jobs. Returns immediately if jobs are available, otherwise waits up to timeout seconds.',
  operationId: 'pollJobs',
  request: {
    query: z.object({
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Timeout in seconds for long polling (default: 30, max: 60)',
            explode: true,
            in: 'query',
            name: 'timeout',
            required: false,
            schema: { type: 'number' },
            style: 'form',
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
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of jobs to return (default: 10, max: 100)',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of jobs for the runner',
      content: { 'application/json': { schema: PollJobsResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{jobId}',
  tags: ['jobs'],
  summary: 'Get job details',
  operationId: 'getJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the job',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Job details', content: { 'application/json': { schema: JobSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postJobsJobIdStatusRoute = createRoute({
  method: 'post',
  path: '/jobs/{jobId}/status',
  tags: ['jobs'],
  summary: 'Update job status',
  operationId: 'updateJobStatus',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the job',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateJobStatusSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Job status updated successfully',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getDockerRegistryRoute = createRoute({
  method: 'get',
  path: '/docker-registry',
  tags: ['docker-registry'],
  summary: 'List registries',
  operationId: 'listRegistries',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all docker registries',
      content: { 'application/json': { schema: z.array(DockerRegistrySchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postDockerRegistryRoute = createRoute({
  method: 'post',
  path: '/docker-registry',
  tags: ['docker-registry'],
  summary: 'Create registry',
  operationId: 'createRegistry',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDockerRegistrySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The docker registry has been successfully created.',
      content: { 'application/json': { schema: DockerRegistrySchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getDockerRegistryRegistryPushAccessRoute = createRoute({
  method: 'get',
  path: '/docker-registry/registry-push-access',
  tags: ['docker-registry'],
  summary: 'Get temporary registry access for pushing snapshots',
  operationId: 'getTransientPushAccess',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      regionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ID of the region where the snapshot will be available (defaults to organization default region)',
            explode: true,
            in: 'query',
            name: 'regionId',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Temporary registry access has been generated',
      content: { 'application/json': { schema: RegistryPushAccessDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getDockerRegistryIdRoute = createRoute({
  method: 'get',
  path: '/docker-registry/{id}',
  tags: ['docker-registry'],
  summary: 'Get registry',
  operationId: 'getRegistry',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the docker registry',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The docker registry',
      content: { 'application/json': { schema: DockerRegistrySchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteDockerRegistryIdRoute = createRoute({
  method: 'delete',
  path: '/docker-registry/{id}',
  tags: ['docker-registry'],
  summary: 'Delete registry',
  operationId: 'deleteRegistry',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the docker registry',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: 'The docker registry has been successfully deleted.' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchDockerRegistryIdRoute = createRoute({
  method: 'patch',
  path: '/docker-registry/{id}',
  tags: ['docker-registry'],
  summary: 'Update registry',
  operationId: 'updateRegistry',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the docker registry',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDockerRegistrySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The docker registry has been successfully updated.',
      content: { 'application/json': { schema: DockerRegistrySchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getAdminRunnersRoute = createRoute({
  method: 'get',
  path: '/admin/runners',
  tags: ['admin'],
  summary: 'List all runners',
  operationId: 'adminListRunners',
  request: {
    query: z.object({
      regionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter runners by region ID',
            explode: true,
            in: 'query',
            name: 'regionId',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RunnerFullSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postAdminRunnersRoute = createRoute({
  method: 'post',
  path: '/admin/runners',
  tags: ['admin'],
  summary: 'Create runner',
  operationId: 'adminCreateRunner',
  request: {
    body: { content: { 'application/json': { schema: AdminCreateRunnerSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateRunnerResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getAdminRunnersIdRoute = createRoute({
  method: 'get',
  path: '/admin/runners/{id}',
  tags: ['admin'],
  summary: 'Get runner by ID',
  operationId: 'adminGetRunnerById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Runner ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RunnerFullSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteAdminRunnersIdRoute = createRoute({
  method: 'delete',
  path: '/admin/runners/{id}',
  tags: ['admin'],
  summary: 'Delete runner',
  operationId: 'adminDeleteRunner',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Runner ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchAdminRunnersIdSchedulingRoute = createRoute({
  method: 'patch',
  path: '/admin/runners/{id}/scheduling',
  tags: ['admin'],
  summary: 'Update runner scheduling status',
  operationId: 'adminUpdateRunnerScheduling',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postAdminSandboxSandboxIdRecoverRoute = createRoute({
  method: 'post',
  path: '/admin/sandbox/{sandboxId}/recover',
  tags: ['admin'],
  summary: 'Recover sandbox from error state as an admin',
  operationId: 'adminRecoverSandbox',
  request: {
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recovery initiated',
      content: { 'application/json': { schema: SandboxSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getAdminUsersRoute = createRoute({
  method: 'get',
  path: '/admin/users',
  tags: ['admin'],
  summary: 'List all users',
  operationId: 'adminListUsers',
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postAdminUsersRoute = createRoute({
  method: 'post',
  path: '/admin/users',
  tags: ['admin'],
  summary: 'Create user',
  operationId: 'adminCreateUser',
  request: {
    body: { content: { 'application/json': { schema: CreateUserSchema } }, required: true },
  },
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postAdminUsersIdRegenerateKeyPairRoute = createRoute({
  method: 'post',
  path: '/admin/users/{id}/regenerate-key-pair',
  tags: ['admin'],
  summary: 'Regenerate user key pair',
  operationId: 'adminRegenerateKeyPair',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getAdminUsersIdRoute = createRoute({
  method: 'get',
  path: '/admin/users/{id}',
  tags: ['admin'],
  summary: 'Get user by ID',
  operationId: 'adminGetUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'User details', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postAdminWebhooksOrganizationsOrganizationIdSendRoute = createRoute({
  method: 'post',
  path: '/admin/webhooks/organizations/{organizationId}/send',
  tags: ['admin'],
  summary: 'Send a webhook message to an organization',
  operationId: 'adminSendWebhook',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendWebhookDtoSchema } }, required: true },
  },
  responses: { 200: { description: 'Webhook message sent successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsRoute =
  createRoute({
    method: 'get',
    path: '/admin/webhooks/organizations/{organizationId}/messages/{messageId}/attempts',
    tags: ['admin'],
    summary: 'Get delivery attempts for a webhook message',
    operationId: 'adminGetMessageAttempts',
    request: {
      params: z.object({
        organizationId: z
          .string()
          .openapi({
            param: {
              explode: false,
              in: 'path',
              name: 'organizationId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        messageId: z
          .string()
          .openapi({
            param: {
              explode: false,
              in: 'path',
              name: 'messageId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'List of delivery attempts',
        content: { 'application/json': { schema: z.array(z.looseObject({})) } },
      },
    },
    security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
  })

export const getAdminWebhooksStatusRoute = createRoute({
  method: 'get',
  path: '/admin/webhooks/status',
  tags: ['admin'],
  summary: 'Get webhook service status',
  operationId: 'adminGetWebhookStatus',
  responses: {
    200: {
      description: 'Webhook service status',
      content: { 'application/json': { schema: AdminGetWebhookStatus_200ResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postAdminWebhooksOrganizationsOrganizationIdInitializeRoute = createRoute({
  method: 'post',
  path: '/admin/webhooks/organizations/{organizationId}/initialize',
  tags: ['admin'],
  summary: 'Initialize webhooks for an organization',
  operationId: 'adminInitializeWebhooks',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    201: { description: 'Webhooks initialized successfully' },
    404: { description: 'Organization not found' },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postAdminDockerRegistryIdSetDefaultRoute = createRoute({
  method: 'post',
  path: '/admin/docker-registry/{id}/set-default',
  tags: ['admin'],
  summary: 'Set default registry',
  operationId: 'adminSetDefaultRegistry',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the docker registry',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The docker registry has been set as default.',
      content: { 'application/json': { schema: DockerRegistrySchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getAdminSnapshotsCanCleanupImageRoute = createRoute({
  method: 'get',
  path: '/admin/snapshots/can-cleanup-image',
  tags: ['admin'],
  summary: 'Check if an image can be cleaned up',
  operationId: 'adminCanCleanupImage',
  request: {
    query: z.object({
      imageName: z
        .string()
        .openapi({
          param: {
            description: 'Image name with tag to check',
            explode: true,
            in: 'query',
            name: 'imageName',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Boolean indicating if image can be cleaned up',
      content: { 'application/json': { schema: z.boolean() } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchAdminSnapshotsIdGeneralRoute = createRoute({
  method: 'patch',
  path: '/admin/snapshots/{id}/general',
  tags: ['admin'],
  summary: 'Set snapshot general status',
  operationId: 'adminSetSnapshotGeneralStatus',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Snapshot ID',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetSnapshotGeneralStatusDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Snapshot general status has been set',
      content: { 'application/json': { schema: SnapshotDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getAdminAuditRoute = createRoute({
  method: 'get',
  path: '/admin/audit',
  tags: ['admin'],
  summary: 'Get all audit logs',
  operationId: 'adminGetAllAuditLogs',
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
          z.number().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number of the results',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'number' },
            style: 'form',
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
          z.number().min(1).max(200),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, maximum: 200, minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'From date (ISO 8601 format)',
            explode: true,
            in: 'query',
            name: 'from',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'To date (ISO 8601 format)',
            explode: true,
            in: 'query',
            name: 'to',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Token for cursor-based pagination. When provided, takes precedence over page parameter.',
            explode: true,
            in: 'query',
            name: 'nextToken',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of all audit logs',
      content: { 'application/json': { schema: PaginatedAuditLogsSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postAdminOrganizationsOrganizationIdQuotaRegionIdRoute = createRoute({
  method: 'post',
  path: '/admin/organizations/{organizationId}/quota/{regionId}',
  tags: ['admin'],
  summary: 'Create organization region quota',
  operationId: 'adminCreateOrganizationRegionQuota',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      regionId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the region the new quota applies to',
            explode: false,
            in: 'path',
            name: 'regionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateOrganizationRegionQuotaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Region quota created successfully',
      content: { 'application/json': { schema: RegionQuotaSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const patchAdminOrganizationsOrganizationIdQuotaRegionIdRoute = createRoute({
  method: 'patch',
  path: '/admin/organizations/{organizationId}/quota/{regionId}',
  tags: ['admin'],
  summary: 'Update organization region quota',
  operationId: 'adminUpdateOrganizationRegionQuota',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      regionId: z
        .string()
        .openapi({
          param: {
            description: 'Region ID',
            explode: false,
            in: 'path',
            name: 'regionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrganizationRegionQuotaSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Region quota updated successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute = createRoute({
  method: 'get',
  path: '/admin/organizations/{organizationId}/quota/{regionId}/{sandboxClass}',
  tags: ['admin'],
  summary: 'Get organization region quota',
  operationId: 'adminGetOrganizationRegionQuota',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      regionId: z
        .string()
        .openapi({
          param: {
            description: 'Region ID',
            explode: false,
            in: 'path',
            name: 'regionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sandboxClass: SandboxClassSchema.openapi({
        param: {
          description: 'Sandbox class',
          explode: false,
          in: 'path',
          name: 'sandboxClass',
          required: true,
          schema: { $ref: '#/components/schemas/SandboxClass' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Region quota',
      content: { 'application/json': { schema: RegionQuotaSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const deleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute = createRoute({
  method: 'delete',
  path: '/admin/organizations/{organizationId}/quota/{regionId}/{sandboxClass}',
  tags: ['admin'],
  summary: 'Delete organization region quota',
  operationId: 'adminDeleteOrganizationRegionQuota',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      regionId: z
        .string()
        .openapi({
          param: {
            description: 'Region ID',
            explode: false,
            in: 'path',
            name: 'regionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      sandboxClass: SandboxClassSchema.openapi({
        param: {
          description: 'Sandbox class',
          explode: false,
          in: 'path',
          name: 'sandboxClass',
          required: true,
          schema: { $ref: '#/components/schemas/SandboxClass' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: { 204: { description: 'Region quota deleted successfully' } },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postWebhooksOrganizationsOrganizationIdAppPortalAccessRoute = createRoute({
  method: 'post',
  path: '/webhooks/organizations/{organizationId}/app-portal-access',
  tags: ['webhooks'],
  summary: 'Get Svix Consumer App Portal access for an organization',
  operationId: 'WebhookController_getAppPortalAccess',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'App Portal access generated successfully',
      content: { 'application/json': { schema: WebhookAppPortalAccessSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getWebhooksOrganizationsOrganizationIdInitializationStatusRoute = createRoute({
  method: 'get',
  path: '/webhooks/organizations/{organizationId}/initialization-status',
  tags: ['webhooks'],
  summary: 'Get webhook initialization status for an organization',
  operationId: 'WebhookController_getInitializationStatus',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webhook initialization status',
      content: { 'application/json': { schema: WebhookInitializationStatusSchema } },
    },
    404: { description: 'Webhook initialization status not found' },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postWebhooksOrganizationsOrganizationIdInitializeRoute = createRoute({
  method: 'post',
  path: '/webhooks/organizations/{organizationId}/initialize',
  tags: ['webhooks'],
  summary: 'Initialize webhooks for an organization',
  operationId: 'WebhookController_initializeWebhooks',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Webhooks initialized successfully',
      content: { 'application/json': { schema: WebhookInitializationStatusSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const postWebhooksOrganizationsOrganizationIdRefreshEndpointsRoute = createRoute({
  method: 'post',
  path: '/webhooks/organizations/{organizationId}/refresh-endpoints',
  tags: ['webhooks'],
  summary: 'Refresh cached endpoint presence flag for an organization',
  operationId: 'WebhookController_refreshEndpoints',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Endpoint flag refreshed' },
    404: { description: 'Webhook initialization status not found' },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getAuditOrganizationsOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/audit/organizations/{organizationId}',
  tags: ['audit'],
  summary: 'Get audit logs for organization',
  operationId: 'getOrganizationAuditLogs',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            explode: false,
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number of the results',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'number' },
            style: 'form',
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
          z.number().min(1).max(200),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, maximum: 200, minimum: 1, type: 'number' },
            style: 'form',
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'From date (ISO 8601 format)',
            explode: true,
            in: 'query',
            name: 'from',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'To date (ISO 8601 format)',
            explode: true,
            in: 'query',
            name: 'to',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Token for cursor-based pagination. When provided, takes precedence over page parameter.',
            explode: true,
            in: 'query',
            name: 'nextToken',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of organization audit logs',
      content: { 'application/json': { schema: PaginatedAuditLogsSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getObjectStoragePushAccessRoute = createRoute({
  method: 'get',
  path: '/object-storage/push-access',
  tags: ['object-storage'],
  summary: 'Get temporary storage access for pushing objects',
  operationId: 'getPushAccess',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Temporary storage access has been generated',
      content: { 'application/json': { schema: StorageAccessDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Health'],
  operationId: 'HealthController_live',
  responses: { 200: { description: '' } },
})

export const getHealthReadyRoute = createRoute({
  method: 'get',
  path: '/health/ready',
  tags: ['Health'],
  operationId: 'HealthController_check',
  responses: {
    200: {
      description: 'The Health Check is successful',
      content: { 'application/json': { schema: HealthControllerCheck_200ResponseSchema } },
    },
    503: {
      description: 'The Health Check is not successful',
      content: { 'application/json': { schema: HealthControllerCheck_503ResponseSchema } },
    },
  },
  security: [{ bearer: [] }],
})

export const getSandboxSandboxIdTelemetryLogsRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxId}/telemetry/logs',
  tags: ['sandbox'],
  summary: 'Get sandbox logs',
  description: 'Retrieve OTEL logs for a sandbox within a time range',
  operationId: 'getSandboxLogs',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Start of time range (ISO 8601)',
            explode: true,
            in: 'query',
            name: 'from',
            required: true,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'End of time range (ISO 8601)',
            explode: true,
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number (1-indexed)',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'number' },
            style: 'form',
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
          z.number(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of items per page',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, type: 'number' },
            style: 'form',
          },
        }),
      severities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by severity levels (DEBUG, INFO, WARN, ERROR)',
            explode: true,
            in: 'query',
            name: 'severities',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search in log body',
            explode: true,
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of log entries',
      content: { 'application/json': { schema: PaginatedLogsSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdTelemetryTracesRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxId}/telemetry/traces',
  tags: ['sandbox'],
  summary: 'Get sandbox traces',
  description: 'Retrieve OTEL traces for a sandbox within a time range',
  operationId: 'getSandboxTraces',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Start of time range (ISO 8601)',
            explode: true,
            in: 'query',
            name: 'from',
            required: true,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'End of time range (ISO 8601)',
            explode: true,
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number (1-indexed)',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'number' },
            style: 'form',
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
          z.number(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of items per page',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, type: 'number' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of trace summaries',
      content: { 'application/json': { schema: PaginatedTracesSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdTelemetryTracesTraceIdRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxId}/telemetry/traces/{traceId}',
  tags: ['sandbox'],
  summary: 'Get trace spans',
  description: 'Retrieve all spans for a specific trace',
  operationId: 'getSandboxTraceSpans',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      traceId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the trace',
            explode: false,
            in: 'path',
            name: 'traceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of spans in the trace',
      content: { 'application/json': { schema: z.array(TraceSpanSchema) } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})

export const getSandboxSandboxIdTelemetryMetricsRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxId}/telemetry/metrics',
  tags: ['sandbox'],
  summary: 'Get sandbox metrics',
  description: 'Retrieve OTEL metrics for a sandbox within a time range',
  operationId: 'getSandboxMetrics',
  request: {
    headers: z.object({
      'X-Daytona-Organization-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use with JWT to specify the organization ID',
            explode: false,
            in: 'header',
            name: 'X-Daytona-Organization-ID',
            required: false,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      sandboxId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the sandbox',
            explode: false,
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Start of time range (ISO 8601)',
            explode: true,
            in: 'query',
            name: 'from',
            required: true,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'End of time range (ISO 8601)',
            explode: true,
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      metricNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by metric names',
            explode: true,
            in: 'query',
            name: 'metricNames',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Metrics time series data',
      content: { 'application/json': { schema: MetricsResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { oauth2: ['openid', 'profile', 'email'] }],
})
