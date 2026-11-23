import { createRoute, z } from '@hono/zod-openapi'

const TelemetryTeamNameSchema = z
  .object({ name: z.string(), clusterId: z.uuid().exactOptional() })
  .openapi({ required: ['name'] })
  .openapi('TelemetryTeamName')

const TelemetryClusterNameSchema = z
  .object({ id: z.uuid(), name: z.string(), clientId: z.string().exactOptional() })
  .openapi({ required: ['id', 'name'] })
  .openapi('TelemetryClusterName')

const TelemetryNamesSchema = z
  .object({
    teams: z.record(z.string(), TelemetryTeamNameSchema),
    clusters: z.array(TelemetryClusterNameSchema),
  })
  .openapi({ required: ['teams', 'clusters'] })
  .openapi('TelemetryNames')

const RigSchema = z
  .object({
    id: z.string().openapi({ description: 'Rig identifier (e.g. "default")' }),
    provider: z
      .string()
      .openapi({ description: 'Cloud provider backing the rig ("aws" or "gcp")' }),
    resourceID: z
      .string()
      .openapi({
        description:
          'Canonical cloud resource ID of the scaling group backing the rig (ARN on AWS, self-link on GCP)',
      }),
    capacityDesired: z.int32().openapi({ description: 'Desired number of instances in the rig' }),
    capacityMin: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Minimum capacity enforced on the rig's scaling group. Omitted when nothing enforces bounds (GCP MIG without an active autoscaler).\n",
      }),
    capacityMax: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Maximum capacity enforced on the rig's scaling group. Omitted when nothing enforces bounds (GCP MIG without an active autoscaler).\n",
      }),
    capacityCurrent: z
      .int32()
      .openapi({ description: 'Number of instances currently attached to the rig' }),
  })
  .openapi({
    description: 'An orchestrator node pool backed by one cloud scaling group',
    required: ['id', 'provider', 'resourceID', 'capacityDesired', 'capacityCurrent'],
  })
  .openapi('Rig')

const RigCapacityChangeSchema = z
  .object({
    desired: z
      .int32()
      .min(0)
      .openapi({ description: 'Absolute desired number of instances in the rig' }),
  })
  .openapi({
    description: "Desired capacity to set on the rig's scaling group",
    required: ['desired'],
  })
  .openapi('RigCapacityChange')

const RigInstanceSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'Provider instance ID (EC2 instance ID on AWS, instance name on GCP), also the node ID the orchestrator reports',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the provider created the instance. Omitted while the instance is transitioning.',
      }),
    transitioning: z
      .boolean()
      .openapi({
        description:
          'The provider is creating, deleting, recreating or otherwise mutating the instance',
      }),
    terminating: z
      .boolean()
      .openapi({
        description:
          'The instance is on its way out of the group and can never become healthy again',
      }),
  })
  .openapi({
    description: "An instance attached to a rig's scaling group",
    required: ['id', 'transitioning', 'terminating'],
  })
  .openapi('RigInstance')

const RigErrorSchema = z
  .object({
    timestamp: z.iso.datetime({ offset: true }).openapi({ description: 'When the error occurred' }),
    code: z
      .string()
      .openapi({
        description: 'Provider-specific error code (e.g. ZONE_RESOURCE_POOL_EXHAUSTED, Failed)',
      }),
    message: z.string().openapi({ description: 'Human-readable error message' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({ description: 'Instance the error relates to, if any' }),
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'Action being performed when the error occurred (e.g. CREATING)' }),
  })
  .openapi({
    description:
      "Scaling error on the rig's scaling group, e.g. a failed instance creation due to resource exhaustion\n",
    required: ['timestamp', 'code', 'message'],
  })
  .openapi('RigError')

const TeamUserSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Identifier of the user' }),
    email: z
      .string()
      .nullable()
      .default(null)
      .openapi({ deprecated: true, description: 'Email of the user' }),
  })
  .openapi({ required: ['id', 'email'] })
  .openapi('TeamUser')

const TemplateUpdateRequestSchema = z
  .object({
    public: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the template is public or only accessible by the team' }),
  })
  .openapi({ required: [] })
  .openapi('TemplateUpdateRequest')

const TemplateUpdateResponseSchema = z
  .object({
    names: z
      .array(z.string())
      .openapi({ description: 'Names of the template (namespace/alias format when namespaced)' }),
  })
  .openapi({ required: ['names'] })
  .openapi('TemplateUpdateResponse')

const CPUCountSchema = z
  .int32()
  .min(1)
  .openapi({ description: 'CPU cores for the sandbox' })
  .openapi('CPUCount')

const MemoryMBSchema = z
  .int32()
  .min(128)
  .openapi({ description: 'Memory for the sandbox in MiB' })
  .openapi('MemoryMB')

const DiskSizeMBSchema = z
  .int32()
  .min(0)
  .openapi({ description: 'Disk size for the sandbox in MiB' })
  .openapi('DiskSizeMB')

const MinFreeDiskMbSchema = z
  .int32()
  .min(0)
  .openapi({
    description:
      "Requested minimum free space after the template's build steps, in MiB. Omit to use the team's default. Set to 0 to request no minimum free-disk growth. The filesystem is never shrunk, including inherited or already-larger filesystems. Growth is best effort, so filesystem metadata can leave the available space slightly below the requested minimum.",
  })
  .openapi('MinFreeDiskMb')

const EnvdVersionSchema = z
  .string()
  .openapi({ description: 'Version of the envd running in the sandbox' })
  .openapi('EnvdVersion')

const SandboxMetadataSchema = z
  .record(z.string(), z.string().openapi({ description: 'Metadata of the sandbox' }))
  .openapi('SandboxMetadata')

const SandboxStateSchema = z
  .enum(['running', 'paused'])
  .openapi({ description: 'State of the sandbox' })
  .openapi('SandboxState')

const OrderDirectionSchema = z
  .enum(['asc', 'desc'])
  .default('desc')
  .openapi({ description: 'Sort direction' })
  .openapi('OrderDirection')

const SnapshotInfoSchema = z
  .object({
    snapshotID: z
      .string()
      .openapi({
        description:
          'Identifier of the snapshot template including the tag. Uses namespace/alias when a name was provided (e.g. team-slug/my-snapshot:default), otherwise falls back to the raw template ID (e.g. abc123:default).',
      }),
    names: z
      .array(z.string())
      .openapi({
        description:
          'Full names of the snapshot template including team namespace and tag (e.g. team-slug/my-snapshot:v2)',
      }),
  })
  .openapi({ required: ['snapshotID', 'names'] })
  .openapi('SnapshotInfo')

const EnvVarsSchema = z
  .record(z.string(), z.string().openapi({ description: 'Environment variables for the sandbox' }))
  .openapi('EnvVars')

const McpSchema = z
  .record(z.string(), z.any())
  .nullable()
  .openapi({ description: 'MCP configuration for the sandbox' })
  .openapi('Mcp')

const SandboxEgressProxyTLSConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .openapi({
        description:
          'Connect to the proxy over TLS. When false, no other field in this object may be set.',
      }),
    serverName: z
      .string()
      .max(253)
      .exactOptional()
      .openapi({
        description:
          'Name to verify the proxy certificate against, and to send as SNI. Defaults to the host part of address. Set this only when the certificate does not match the address the proxy is reached at.',
      }),
    caCert: z
      .string()
      .max(8192)
      .exactOptional()
      .openapi({
        description:
          'One or more PEM-encoded certificates to verify the proxy against, for a proxy fronted by a private CA. These replace the system trust store, which is what is used when this is omitted. The system trust store depends on the host the orchestrator runs on, so set this to get the same verification everywhere.',
      }),
  })
  .nullable()
  .openapi({
    description:
      'TLS for the connection to the SOCKS5 proxy. The SOCKS5 negotiation and the tunneled traffic both run inside the TLS session, so the proxy credentials are not sent in the clear. This secures only the hop to the proxy; what the proxy does onward is its own concern. A half-close from the sandbox reaches the proxy as a TLS close_notify, not a TCP FIN, and a proxy that treats close_notify as a full close cuts the reply short.',
    required: ['enabled'],
  })
  .openapi('SandboxEgressProxyTLSConfig')

const SandboxEgressProxyConfigSchema = z
  .object({
    address: z
      .string()
      .openapi({
        description: 'SOCKS5 proxy address in host:port format (e.g. "proxy.example.com:1080").',
      }),
    username: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Optional SOCKS5 username (RFC 1929), max 255 bytes.' }),
    password: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Optional SOCKS5 password (RFC 1929), max 255 bytes.' }),
    tls: SandboxEgressProxyTLSConfigSchema.exactOptional(),
  })
  .nullable()
  .openapi({
    description:
      'SOCKS5 proxy for sandbox egress. Outbound TCP is tunneled through the proxy after allow/deny filtering; the sandbox is unaware. Domain-matched flows use remote DNS (ATYP=domain).',
    required: ['address'],
  })
  .openapi('SandboxEgressProxyConfig')

const SandboxNetworkTransformSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'HTTP headers to inject or override in matching requests. An existing header with the same name is replaced. Values are plain strings; secret resolution happens client-side before sending to the API.\n',
      }),
  })
  .openapi({
    description: 'Transformations applied to matching egress requests before forwarding.',
    required: [],
  })
  .openapi('SandboxNetworkTransform')

const SandboxNetworkRuleSchema = z
  .object({ transform: SandboxNetworkTransformSchema.exactOptional() })
  .openapi({
    description: 'Transform rule applied to egress requests matching a domain pattern.',
    required: [],
  })
  .openapi('SandboxNetworkRule')

const SandboxNetworkConfigSchema = z
  .object({
    allowPublicTraffic: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Whether sandbox URLs accept traffic without the sandbox's traffic access token. When omitted or null on create, the project's default applies, which is true unless the project changed it.",
      }),
    allowOut: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of allowed destinations for egress traffic. Each entry can be a CIDR block (e.g. "8.8.8.8/32"), a bare IP address (e.g. "8.8.8.8"), or a domain name (e.g. "example.com", "*.example.com"). Allowed entries always take precedence over denied entries. When allowOut contains a domain, the servers in dnsServers (8.8.8.8 by default) are also allowed.',
      }),
    denyOut: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of denied CIDR blocks or IP addresses for egress traffic. Domain names are not supported for deny rules.',
      }),
    dnsServers: z
      .array(z.string())
      .max(10)
      .exactOptional()
      .openapi({
        description:
          "DNS servers the sandbox can reach when allowOut contains a domain. Each entry must be an IPv4 address, and all traffic to it is allowed. Omit it to allow the default nameserver 8.8.8.8, or pass an empty list to allow none. This does not change the sandbox's /etc/resolv.conf.",
      }),
    egressProxy: SandboxEgressProxyConfigSchema.exactOptional(),
    maskRequestHost: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specify host mask which will be used for all sandbox requests' }),
    httpsPorts: z
      .array(z.uint32().min(1).max(65535))
      .max(128)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Sandbox ports that serve HTTPS rather than plaintext HTTP. Affects how the proxy reaches the service inside the sandbox; the public URL is HTTPS either way. Certificates are not verified, so self-signed ones work. The envd port (49983) cannot be listed.',
      }),
    rules: z
      .record(z.string(), z.array(SandboxNetworkRuleSchema))
      .exactOptional()
      .openapi({
        description:
          'Per-domain transform rules applied to matching outbound HTTPS requests. Keys may be exact DNS names (for example, "api.example.com") or a leading wildcard (for example, "*.example.com"), and are normalized to lowercase on write. Wildcards match subdomains at any depth but not the apex domain; a bare "*" is invalid. Exact rules take precedence, followed by the longest matching wildcard suffix, and matching rule sets are not merged. Broad wildcards such as "*.com" are allowed and may expose transformed credentials to every matching destination the sandbox contacts. Rules do not grant network access; configure allowOut separately to permit the destination.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('SandboxNetworkConfig')

const SandboxNetworkUpdateConfigSchema = z
  .object({
    allowOut: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of allowed destinations for egress traffic. Each entry can be a CIDR block (e.g. "8.8.8.8/32"), a bare IP address (e.g. "8.8.8.8"), or a domain name (e.g. "example.com", "*.example.com"). Allowed entries always take precedence over denied entries. When allowOut contains a domain, the servers in dnsServers (8.8.8.8 by default) are also allowed.',
      }),
    denyOut: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of denied CIDR blocks or IP addresses for egress traffic. Domain names are not supported for deny rules.',
      }),
    dnsServers: z
      .array(z.string())
      .max(10)
      .exactOptional()
      .openapi({
        description:
          "DNS servers the sandbox can reach when allowOut contains a domain. Each entry must be an IPv4 address, and all traffic to it is allowed. Omit it to reset to the default nameserver 8.8.8.8, or pass an empty list to allow none. This does not change the sandbox's /etc/resolv.conf.",
      }),
    egressProxy: SandboxEgressProxyConfigSchema.exactOptional(),
    rules: z
      .record(z.string(), z.array(SandboxNetworkRuleSchema))
      .exactOptional()
      .openapi({
        description:
          'Per-domain transform rules applied to matching outbound HTTPS requests. Replaces all existing rules when provided. Keys may be exact DNS names or a single leading wildcard (for example, "*.example.com"), and are normalized to lowercase on write. Wildcards match subdomains at any depth but not the apex domain; a bare "*" is invalid. Exact rules take precedence, followed by the longest matching wildcard suffix, and matching rule sets are not merged. Broad wildcards such as "*.com" are allowed and may expose transformed credentials to every matching destination the sandbox contacts. Rules do not grant network access; configure allowOut separately to permit the destination.\n',
      }),
    allow_internet_access: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow sandbox to access the internet. When set to false, it behaves the same as specifying denyOut to 0.0.0.0/0 in the network config.',
      }),
  })
  .openapi({
    description:
      'Network configuration update for a running sandbox. Replaces the current egress rules with the provided configuration. Omitting a field clears it.',
    required: [],
  })
  .openapi('SandboxNetworkUpdateConfig')

const SandboxAutoResumeEnabledSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Auto-resume enabled flag for paused sandboxes. Default false.' })
  .openapi('SandboxAutoResumeEnabled')

const SandboxAutoResumeConfigSchema = z
  .object({ enabled: SandboxAutoResumeEnabledSchema })
  .openapi({
    description: 'Auto-resume configuration for paused sandboxes.',
    required: ['enabled'],
  })
  .openapi('SandboxAutoResumeConfig')

const SandboxOnTimeoutSchema = z
  .enum(['kill', 'pause'])
  .openapi({ description: 'Action taken when the sandbox times out.' })
  .openapi('SandboxOnTimeout')

const SandboxLifecycleSchema = z
  .object({
    autoResume: z.boolean().openapi({ description: 'Whether the sandbox can auto-resume.' }),
    onTimeout: SandboxOnTimeoutSchema,
  })
  .openapi({
    description: 'Sandbox lifecycle policy returned by sandbox info.',
    required: ['autoResume', 'onTimeout'],
  })
  .openapi('SandboxLifecycle')

const EnvdUnresponsiveAtPauseSchema = z
  .boolean()
  .openapi({
    description:
      'True when the snapshot a paused sandbox would resume from was taken while the sandbox guest agent was not responding. A plain resume of it is refused with 409 and error_code sandbox_snapshot_guest_agent_unresponsive, because restoring that memory would bring the unresponsive agent back; resume it without memory (`memory: false`), which cold-boots the sandbox from its disk. Omitted for a running sandbox and for a snapshot whose agent answered.',
  })
  .openapi('EnvdUnresponsiveAtPause')

const SandboxPauseModeSchema = z
  .enum(['full', 'filesystem'])
  .openapi({
    description:
      "What the sandbox's latest pause saved. `full` saved the filesystem and the memory, and resuming restores the sandbox where it left off. `filesystem` saved only the filesystem, and resuming reboots the sandbox from disk. Returned for a paused sandbox once its pause has finished, and omitted while it is still pausing.",
  })
  .openapi('SandboxPauseMode')

const SandboxLogSchema = z
  .object({
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of the log entry' }),
    line: z.string().openapi({ description: 'Log line content' }),
  })
  .openapi({ description: 'Log entry with timestamp and line', required: ['timestamp', 'line'] })
  .openapi('SandboxLog')

const LogLevelSchema = z
  .enum(['debug', 'info', 'warn', 'error'])
  .openapi({ description: 'State of the sandbox' })
  .openapi('LogLevel')

const SandboxLogEntrySchema = z
  .object({
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of the log entry' }),
    message: z.string().openapi({ description: 'Log message content' }),
    level: LogLevelSchema,
    fields: z.record(z.string(), z.string()),
  })
  .openapi({ required: ['timestamp', 'level', 'message', 'fields'] })
  .openapi('SandboxLogEntry')

const SandboxLogsSchema = z
  .object({
    logs: z.array(SandboxLogSchema).openapi({ description: 'Logs of the sandbox' }),
    logEntries: z
      .array(SandboxLogEntrySchema)
      .openapi({ description: 'Structured logs of the sandbox' }),
  })
  .openapi({ required: ['logs', 'logEntries'] })
  .openapi('SandboxLogs')

const SandboxLogsV2ResponseSchema = z
  .object({
    logs: z
      .array(SandboxLogEntrySchema)
      .default([])
      .openapi({ description: 'Sandbox logs structured' }),
  })
  .openapi({ required: ['logs'] })
  .openapi('SandboxLogsV2Response')

const SandboxMetricSchema = z
  .object({
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ deprecated: true, description: 'Timestamp of the metric entry' }),
    timestampUnix: z
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
        description: 'Timestamp of the metric entry in Unix time (seconds since epoch)',
      }),
    cpuCount: z.int32().openapi({ description: 'Number of CPU cores' }),
    cpuUsedPct: z.float32().openapi({ description: 'CPU usage percentage' }),
    memUsed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Memory used in bytes' }),
    memTotal: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Total memory in bytes' }),
    memCache: z
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
        description: 'Cached memory (page cache) in bytes',
      }),
    diskUsed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Disk used in bytes' }),
    diskTotal: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Total disk space in bytes' }),
  })
  .openapi({
    description: 'Metric entry with timestamp and line',
    required: [
      'timestamp',
      'timestampUnix',
      'cpuCount',
      'cpuUsedPct',
      'memUsed',
      'memTotal',
      'memCache',
      'diskUsed',
      'diskTotal',
    ],
  })
  .openapi('SandboxMetric')

const SandboxVolumeMountSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the volume' }),
    path: z.string().openapi({ description: 'Path of the volume' }),
  })
  .openapi({ required: ['name', 'path'] })
  .openapi('SandboxVolumeMount')

const SandboxSchema = z
  .object({
    templateID: z
      .string()
      .openapi({ description: 'Identifier of the template from which is the sandbox created' }),
    sandboxID: z.string().openapi({ description: 'Identifier of the sandbox' }),
    alias: z.string().exactOptional().openapi({ description: 'Alias of the template' }),
    clientID: z.string().openapi({ deprecated: true, description: 'Identifier of the client' }),
    envdVersion: EnvdVersionSchema,
    envdAccessToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Access token used for envd communication' }),
    trafficAccessToken: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Token required for accessing sandbox via proxy.' }),
    domain: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Base domain where the sandbox traffic is accessible' }),
  })
  .openapi({ required: ['templateID', 'sandboxID', 'clientID', 'envdVersion'] })
  .openapi('Sandbox')

const SandboxDetailSchema = z
  .object({
    templateID: z
      .string()
      .openapi({ description: 'Identifier of the template from which is the sandbox created' }),
    alias: z.string().exactOptional().openapi({ description: 'Alias of the template' }),
    sandboxID: z.string().openapi({ description: 'Identifier of the sandbox' }),
    clientID: z.string().openapi({ deprecated: true, description: 'Identifier of the client' }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the sandbox was started' }),
    endAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the sandbox will expire' }),
    envdVersion: EnvdVersionSchema,
    envdUnresponsiveAtPause: EnvdUnresponsiveAtPauseSchema.exactOptional(),
    envdAccessToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Access token used for envd communication' }),
    allowInternetAccess: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether internet access was explicitly enabled or disabled for the sandbox. Null means it was not explicitly set.',
      }),
    domain: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Base domain where the sandbox traffic is accessible' }),
    cpuCount: CPUCountSchema,
    memoryMB: MemoryMBSchema,
    diskSizeMB: DiskSizeMBSchema,
    metadata: SandboxMetadataSchema.exactOptional(),
    state: SandboxStateSchema,
    network: SandboxNetworkConfigSchema.exactOptional(),
    lifecycle: SandboxLifecycleSchema.exactOptional(),
    pauseMode: SandboxPauseModeSchema.exactOptional(),
    volumeMounts: z.array(SandboxVolumeMountSchema).exactOptional(),
  })
  .openapi({
    required: [
      'templateID',
      'sandboxID',
      'clientID',
      'startedAt',
      'cpuCount',
      'memoryMB',
      'diskSizeMB',
      'endAt',
      'state',
      'envdVersion',
    ],
  })
  .openapi('SandboxDetail')

const SandboxRecordSchema = z
  .object({
    templateID: z
      .string()
      .openapi({ description: 'Identifier of the template from which is the sandbox created' }),
    alias: z.string().exactOptional().openapi({ description: 'Alias of the template' }),
    sandboxID: z.string().openapi({ description: 'Identifier of the sandbox' }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the sandbox was started' }),
    stoppedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Time when the sandbox was stopped' }),
    domain: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Base domain where the sandbox traffic is accessible' }),
    cpuCount: CPUCountSchema,
    memoryMB: MemoryMBSchema,
    diskSizeMB: DiskSizeMBSchema,
    retentionExpired: z
      .boolean()
      .openapi({
        description:
          'Whether the sandbox ended more than the fixed retention window ago, so its monitoring and logs data is no longer available',
      }),
    eventsRetentionExpired: z
      .boolean()
      .openapi({
        description:
          "Whether the sandbox ended more than the team's events retention window ago, so its events data is no longer available",
      }),
  })
  .openapi({
    required: [
      'templateID',
      'sandboxID',
      'startedAt',
      'cpuCount',
      'memoryMB',
      'diskSizeMB',
      'retentionExpired',
      'eventsRetentionExpired',
    ],
  })
  .openapi('SandboxRecord')

const ListedSandboxSchema = z
  .object({
    templateID: z
      .string()
      .openapi({ description: 'Identifier of the template from which is the sandbox created' }),
    alias: z.string().exactOptional().openapi({ description: 'Alias of the template' }),
    sandboxID: z.string().openapi({ description: 'Identifier of the sandbox' }),
    clientID: z.string().openapi({ deprecated: true, description: 'Identifier of the client' }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the sandbox was started' }),
    endAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the sandbox will expire' }),
    cpuCount: CPUCountSchema,
    memoryMB: MemoryMBSchema,
    diskSizeMB: DiskSizeMBSchema,
    metadata: SandboxMetadataSchema.exactOptional(),
    state: SandboxStateSchema,
    envdVersion: EnvdVersionSchema,
    envdUnresponsiveAtPause: EnvdUnresponsiveAtPauseSchema.exactOptional(),
    volumeMounts: z.array(SandboxVolumeMountSchema).exactOptional(),
  })
  .openapi({
    required: [
      'templateID',
      'sandboxID',
      'clientID',
      'startedAt',
      'cpuCount',
      'memoryMB',
      'diskSizeMB',
      'endAt',
      'state',
      'envdVersion',
    ],
  })
  .openapi('ListedSandbox')

const SandboxesWithMetricsSchema = z
  .object({ sandboxes: z.record(z.string(), SandboxMetricSchema) })
  .openapi({ required: ['sandboxes'] })
  .openapi('SandboxesWithMetrics')

const SandboxIamTokenSchema = z
  .object({
    audience: z
      .string()
      .openapi({ description: 'Audience of the workload token, stored exactly as provided.' }),
    tokenType: z.string().openapi({ description: 'Workload token type.' }),
  })
  .openapi({ required: ['audience', 'tokenType'] })
  .openapi('SandboxIamToken')

const SandboxIamTokensSchema = z
  .record(z.string(), SandboxIamTokenSchema)
  .openapi({
    description: 'Named workload-token definitions, keyed by a caller-chosen token name.',
  })
  .openapi('SandboxIamTokens')

const SandboxIamSchema = z
  .object({ tokens: SandboxIamTokensSchema.exactOptional() })
  .openapi({
    description:
      'Sandbox workload identity configuration. A non-empty, valid tokens map enables workload identity for the sandbox.',
    required: [],
  })
  .openapi('SandboxIam')

const NewSandboxSchema = z
  .object({
    templateID: z.string().openapi({ description: 'Identifier of the required template' }),
    timeout: z
      .int32()
      .min(0)
      .default(15)
      .exactOptional()
      .openapi({ description: 'Time to live for the sandbox in seconds.' }),
    cpuCount: CPUCountSchema.exactOptional().openapi({
      description:
        "Online vCPU target for the sandbox. Defaults to the template's cpuCount; at most its maxCpuCount (fixed-size templates accept only their cpuCount).",
    }),
    autoPause: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Automatically pauses the sandbox after the timeout' }),
    autoPauseMemory: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Controls the snapshot kind taken when the sandbox auto-pauses on timeout (only relevant when autoPause is true). When false, the auto-pause drops the in-memory state and persists only the filesystem (a filesystem-only snapshot); resuming it cold-boots (reboots) the sandbox from disk. Such a snapshot cannot be auto-resumed by traffic and must be resumed explicitly, so it cannot be combined with autoResume. Defaults to true (full memory snapshot).',
      }),
    autoResume: SandboxAutoResumeConfigSchema.exactOptional(),
    secure: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "Ignored. All system communication with the sandbox is always secured; the template's envd version must support secured access.",
      }),
    allow_internet_access: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow sandbox to access the internet. When set to false, it behaves the same as specifying denyOut to 0.0.0.0/0 in the network config.',
      }),
    network: SandboxNetworkConfigSchema.exactOptional(),
    metadata: SandboxMetadataSchema.exactOptional(),
    envVars: EnvVarsSchema.exactOptional(),
    mcp: McpSchema.exactOptional(),
    iam: SandboxIamSchema.exactOptional(),
    volumeMounts: z.array(SandboxVolumeMountSchema).exactOptional(),
  })
  .openapi({ required: ['templateID'] })
  .openapi('NewSandbox')

const NewSandboxV2Schema = z
  .object({
    templateID: z.string().openapi({ description: 'Identifier of the required template' }),
    timeout: z
      .int32()
      .min(1)
      .default(300)
      .exactOptional()
      .openapi({ description: 'Time to live for the sandbox in seconds.' }),
    cpuCount: CPUCountSchema.exactOptional().openapi({
      description:
        "Online vCPU target for the sandbox. Defaults to the template's cpuCount; at most its maxCpuCount (fixed-size templates accept only their cpuCount).",
    }),
    autoPause: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Automatically pauses the sandbox after the timeout' }),
    autoPauseMemory: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Controls the snapshot kind taken when the sandbox auto-pauses on timeout (only relevant when autoPause is true). When false, the auto-pause drops the in-memory state and persists only the filesystem (a filesystem-only snapshot); resuming it cold-boots (reboots) the sandbox from disk. Such a snapshot cannot be auto-resumed by traffic and must be resumed explicitly, so it cannot be combined with autoResume. Defaults to true (full memory snapshot).',
      }),
    autoResume: SandboxAutoResumeConfigSchema.exactOptional(),
    allow_internet_access: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow sandbox to access the internet. When set to false, it behaves the same as specifying denyOut to 0.0.0.0/0 in the network config.',
      }),
    network: SandboxNetworkConfigSchema.exactOptional(),
    metadata: SandboxMetadataSchema.exactOptional(),
    envVars: EnvVarsSchema.exactOptional(),
    mcp: McpSchema.exactOptional(),
    iam: SandboxIamSchema.exactOptional(),
    volumeMounts: z.array(SandboxVolumeMountSchema).exactOptional(),
  })
  .openapi({
    description:
      "Sandbox creation request. All system communication with the sandbox is always secured; the template's envd version must support secured access.",
    required: ['templateID'],
  })
  .openapi('NewSandboxV2')

const ResumedSandboxSchema = z
  .object({
    timeout: z
      .int32()
      .min(0)
      .default(15)
      .exactOptional()
      .openapi({ description: 'Time to live for the sandbox in seconds.' }),
    cpuCount: CPUCountSchema.exactOptional().openapi({
      description:
        "Online vCPU target for the resumed sandbox. Defaults to the snapshot's cpuCount; at most the template's maxCpuCount (fixed-size templates accept only their cpuCount).",
    }),
    autoPause: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Automatically pauses the sandbox after the timeout',
      }),
    memory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defaults to true. When false, resume from disk state only: the sandbox cold-boots fresh and any memory in the snapshot is ignored, never modified or deleted. Disk state has crash-recovery semantics — writes not flushed before the pause may be lost. A no-op for snapshots that contain no memory. Rejected with an error in environments where this capability is not enabled, never silently downgraded to a memory restore. A snapshot taken while the sandbox guest agent was not responding (envdUnresponsiveAtPause) can only be resumed this way, and needs no enablement.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResumedSandbox')

const ConnectSandboxSchema = z
  .object({
    timeout: z
      .int32()
      .min(0)
      .openapi({
        description:
          'Timeout in seconds from the current time after which the sandbox should expire',
      }),
    memory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defaults to true. When false and the sandbox is paused, resume from disk state only: the sandbox cold-boots fresh and any memory in the snapshot is ignored, never modified or deleted. Disk state has crash-recovery semantics — writes not flushed before the pause may be lost. A no-op for snapshots that contain no memory. Rejected with an error in environments where this capability is not enabled, never silently downgraded to a memory restore. A snapshot taken while the sandbox guest agent was not responding (envdUnresponsiveAtPause) can only be resumed this way, and needs no enablement.',
      }),
  })
  .openapi({ required: ['timeout'] })
  .openapi('ConnectSandbox')

const ConnectSandboxV2Schema = z
  .object({
    timeout: z
      .int32()
      .min(1)
      .default(300)
      .exactOptional()
      .openapi({
        description:
          'Timeout in seconds from the current time after which the sandbox should expire',
      }),
    memory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defaults to true. When false and the sandbox is paused, resume from disk state only: the sandbox cold-boots fresh and any memory in the snapshot is ignored, never modified or deleted. Disk state has crash-recovery semantics — writes not flushed before the pause may be lost. A no-op for snapshots that contain no memory. Rejected with an error in environments where this capability is not enabled, never silently downgraded to a memory restore. A snapshot taken while the sandbox guest agent was not responding (envdUnresponsiveAtPause) can only be resumed this way, and needs no enablement.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ConnectSandboxV2')

const SandboxTimeoutRequestSchema = z
  .object({
    timeout: z
      .int32()
      .min(0)
      .openapi({
        description:
          'Timeout in seconds from the current time after which the sandbox should expire',
      }),
  })
  .openapi({ required: ['timeout'] })
  .openapi('SandboxTimeoutRequest')

const SandboxRefreshRequestSchema = z
  .object({
    duration: z
      .int()
      .min(0)
      .max(3600)
      .exactOptional()
      .openapi({ description: 'Duration for which the sandbox should be kept alive in seconds' }),
  })
  .openapi({ required: [] })
  .openapi('SandboxRefreshRequest')

const SandboxSnapshotRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional name for the snapshot template. If a snapshot template with this name already exists, a new build will be assigned to the existing template instead of creating a new one.',
      }),
    memory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether to capture a full memory snapshot. When false, only the filesystem is persisted: the snapshot is smaller and faster to take, and sandboxes created from it cold-boot (start fresh from disk) instead of restoring memory, so they begin without the source sandbox's running processes, in-memory state, and open connections. The source sandbox keeps running in both cases. Defaults to true.",
      }),
  })
  .openapi({ required: [] })
  .openapi('SandboxSnapshotRequest')

const SandboxPauseRequestSchema = z
  .object({
    memory: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether to capture a full memory snapshot. When false, only the filesystem is persisted and resuming the sandbox cold-boots (reboots) it from disk, losing in-memory state, running processes, and open connections. Resume it with an explicit request (connect or resume); auto-resume, which can be triggered by arbitrary traffic, refuses such a sandbox. Defaults to true.',
      }),
    requireHealthyGuest: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'The pause checks that the sandbox guest agent answers before it takes the snapshot. By default an unresponsive agent is recorded on the snapshot and the pause proceeds; the sandbox then shows `envdUnresponsiveAtPause` and a later resume must ask for `memory: false`, since restoring that memory would bring the unresponsive agent back. With this true, the pause is instead refused with 503 while the agent does not answer, and the sandbox keeps running. A filesystem-only pause (`memory: false`) is always refused while the agent does not answer, whatever this says.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SandboxPauseRequest')

const SandboxForkRequestSchema = z
  .object({
    timeout: z
      .int32()
      .min(0)
      .default(15)
      .exactOptional()
      .openapi({ description: 'Time to live for the new forked sandboxes in seconds.' }),
    count: z
      .int32()
      .min(1)
      .max(100)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Number of forked sandboxes to create. All forks boot from the same snapshot, so the snapshot is captured once regardless of count. Each fork succeeds or fails independently; the outcome of each is reported in its entry of the response list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SandboxForkRequest')

const ErrorSchema = z
  .object({
    code: z.int32().openapi({ description: 'Error code' }),
    error_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Machine-readable semantic error code. Not a closed set; initial values: sandbox_capacity_unavailable, sandbox_placement_timeout, sandbox_no_compatible_node, sandbox_create_failed (a node could not create the sandbox this time; retry), sandbox_create_refused (a node refused the sandbox for a reason no retry changes, such as a vcpu count out of bounds in the stored build; a server error, since no request field reaches that check), internal_server_error, secret_limit_reached, idempotency_request_mismatch, idempotency_in_progress, idempotency_outcome_unknown, cluster_registration_invalid, cluster_registration_conflict, cluster_assignment_invalid, cluster_assignment_project_not_found, cluster_assignment_cluster_not_found, cluster_assignment_already_assigned, cluster_assignment_cluster_deleting, sandbox_snapshot_guest_agent_unresponsive (a plain resume of a snapshot taken while the sandbox guest agent was not responding; resume it with memory: false).',
      }),
    message: z.string().openapi({ description: 'Error' }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('Error')

const SandboxForkResultSchema = z
  .object({ sandbox: SandboxSchema.exactOptional(), error: ErrorSchema.exactOptional() })
  .openapi({
    description:
      'Result of one requested fork. Exactly one of sandbox or error is set: sandbox when the fork started successfully, error when it failed to start.',
    required: [],
  })
  .openapi('SandboxForkResult')

const TeamMetricSchema = z
  .object({
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ deprecated: true, description: 'Timestamp of the metric entry' }),
    timestampUnix: z
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
        description: 'Timestamp of the metric entry in Unix time (seconds since epoch)',
      }),
    concurrentSandboxes: z
      .int32()
      .openapi({ description: 'The number of concurrent sandboxes for the team' }),
    sandboxStartRate: z
      .float32()
      .openapi({ description: 'Number of sandboxes started per second' }),
  })
  .openapi({
    description: 'Team metric with timestamp',
    required: ['timestamp', 'timestampUnix', 'concurrentSandboxes', 'sandboxStartRate'],
  })
  .openapi('TeamMetric')

const MaxTeamMetricSchema = z
  .object({
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ deprecated: true, description: 'Timestamp of the metric entry' }),
    timestampUnix: z
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
        description: 'Timestamp of the metric entry in Unix time (seconds since epoch)',
      }),
    value: z
      .number()
      .openapi({ description: 'The maximum value of the requested metric in the given interval' }),
  })
  .openapi({
    description: 'Team metric with timestamp',
    required: ['timestamp', 'timestampUnix', 'value'],
  })
  .openapi('MaxTeamMetric')

const TeamStatusResponseSchema = z
  .object({
    isBanned: z.boolean().openapi({ description: 'Whether the team is banned' }),
    isBlocked: z.boolean().openapi({ description: 'Whether the team is blocked' }),
    blockedReason: z
      .string()
      .nullable()
      .openapi({ description: 'Why the team is blocked, if a reason was recorded' }),
  })
  .openapi({ required: ['isBanned', 'isBlocked', 'blockedReason'] })
  .openapi('TeamStatusResponse')

const TeamLimitsSchema = z
  .object({
    maxLengthHours: z
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
        description: 'Maximum sandbox lifetime, in hours',
      }),
    concurrentSandboxes: z
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
        description: 'Maximum number of sandboxes running at once',
      }),
    concurrentTemplateBuilds: z
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
        description: 'Maximum number of template builds running at once',
      }),
    maxVcpu: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Maximum vCPUs per sandbox' }),
    maxRamMb: z
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
        description: 'Maximum memory per sandbox, in MiB',
      }),
    diskMb: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Disk size per sandbox, in MiB' }),
    eventsTtlDays: z
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
        description: 'Number of days sandbox events are kept',
      }),
    defaultFreeDiskSizeMb: z
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
        description: 'Free disk space a template build gets when it requests none, in MiB',
      }),
    maxFreeDiskSizeMb: z
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
        description: 'Maximum free disk space a template build may request, in MiB',
      }),
    apiTeamRpsList: z
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
        description: 'Requests per second the team may make to list endpoints',
      }),
    apiTeamRpsDelete: z
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
        description: 'Requests per second the team may make to delete endpoints',
      }),
    maxSecrets: z
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
        description: 'Maximum number of secrets the team may store',
      }),
  })
  .openapi({
    description: "The team's effective resource limits",
    required: [
      'maxLengthHours',
      'concurrentSandboxes',
      'concurrentTemplateBuilds',
      'maxVcpu',
      'maxRamMb',
      'diskMb',
      'eventsTtlDays',
      'defaultFreeDiskSizeMb',
      'maxFreeDiskSizeMb',
      'apiTeamRpsList',
      'apiTeamRpsDelete',
      'maxSecrets',
    ],
  })
  .openapi('TeamLimits')

const TeamLimitsResponseSchema = z
  .object({ limits: TeamLimitsSchema })
  .openapi({ required: ['limits'] })
  .openapi('TeamLimitsResponse')

const ClusterDetailSchema = z
  .object({
    id: z.uuid(),
    name: z.string(),
    endpoint: z.string(),
    endpointTls: z.boolean(),
    sandboxProxyDomain: z.string().nullable().exactOptional(),
    authOrgId: z.string().nullable().exactOptional(),
    deletionProtection: z
      .boolean()
      .openapi({ description: 'While true, deleting the cluster is refused.' }),
  })
  .openapi({
    description: "A cluster's configuration. The cluster's token is never returned.",
    required: ['id', 'name', 'endpoint', 'endpointTls', 'deletionProtection'],
  })
  .openapi('ClusterDetail')

const ClusterTeamListItemSchema = z
  .object({
    id: z.uuid(),
    email: z.string(),
    name: z.string().nullable().exactOptional(),
    slug: z.string().nullable().exactOptional(),
    isBanned: z.boolean(),
    createdAt: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['id', 'email', 'isBanned', 'createdAt'] })
  .openapi('ClusterTeamListItem')

const ClusterTeamListResponseSchema = z
  .object({
    items: z.array(ClusterTeamListItemSchema),
    total: z
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
        description: 'Number of teams assigned to the cluster, ignoring limit and offset',
      }),
  })
  .openapi({ required: ['items', 'total'] })
  .openapi('ClusterTeamListResponse')

const ClusterDetailWithTeamsSchema = z
  .object({
    cluster: ClusterDetailSchema,
    teams: ClusterTeamListResponseSchema,
    teamCount: z
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
        description: 'Teams assigned to the cluster. Must be 0 before the cluster can be deleted.',
      }),
    templateCount: z
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
        description: 'Live templates on the cluster. Deleting the cluster deletes them.',
      }),
  })
  .openapi({ required: ['cluster', 'teams', 'teamCount', 'templateCount'] })
  .openapi('ClusterDetailWithTeams')

const ClusterListItemSchema = z
  .object({
    id: z.uuid(),
    name: z.string(),
    endpoint: z.string(),
    sandboxProxyDomain: z.string().nullable().exactOptional(),
    teamCount: z
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
        description: 'Number of teams assigned to the cluster.',
      }),
  })
  .openapi({ required: ['id', 'name', 'endpoint', 'teamCount'] })
  .openapi('ClusterListItem')

const ClusterListResponseSchema = z
  .object({
    items: z.array(ClusterListItemSchema),
    total: z
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
        description: 'Number of clusters matching the search, ignoring limit and offset',
      }),
  })
  .openapi({ required: ['items', 'total'] })
  .openapi('ClusterListResponse')

const AdminClusterCreateRequestSchema = z
  .object({
    cluster_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Optional stable identifier for idempotent creation. Reuse succeeds only when the immutable configuration is identical.',
      }),
    name: z.string().min(1),
    endpoint: z.string().min(1),
    endpoint_tls: z.boolean(),
    token: z.string().min(1),
    sandbox_proxy_domain: z.string().nullable().exactOptional(),
    auth_org_id: z.string().nullable().exactOptional(),
    telemetry_client_id: z.string().min(1).exactOptional(),
  })
  .openapi({ required: ['name', 'endpoint', 'endpoint_tls', 'token'] })
  .openapi('AdminClusterCreateRequest')

const ClusterUpdateRequestSchema = z
  .object({
    name: z.string().min(1).exactOptional(),
    endpoint: z.string().min(1).exactOptional(),
    endpointTls: z.boolean().exactOptional(),
    sandboxProxyDomain: z.string().nullable().exactOptional(),
    authOrgId: z.string().nullable().exactOptional(),
    deletionProtection: z.boolean().exactOptional(),
  })
  .openapi({
    description:
      'Partial update; only the properties present are written. An explicit null or an empty string clears `sandboxProxyDomain` or `authOrgId`.',
    required: [],
  })
  .openapi('ClusterUpdateRequest')

const ClusterTokenRotateRequestSchema = z
  .object({
    token: z.string().min(1).openapi({ description: 'New cluster access token. Write-only.' }),
  })
  .openapi({ required: ['token'] })
  .openapi('ClusterTokenRotateRequest')

const AdminSandboxKillResultSchema = z
  .object({
    killedCount: z.int().openapi({ description: 'Number of sandboxes successfully killed' }),
    failedCount: z.int().openapi({ description: 'Number of sandboxes that failed to kill' }),
  })
  .openapi({ required: ['killedCount', 'failedCount'] })
  .openapi('AdminSandboxKillResult')

const AdminSandboxStateSchema = z
  .enum(['running', 'paused', 'killed'])
  .openapi({
    description: "State after the sandbox's latest create, resume, pause or kill event",
    'x-enum-varnames': [
      'AdminSandboxStateRunning',
      'AdminSandboxStatePaused',
      'AdminSandboxStateKilled',
    ],
  })
  .openapi('AdminSandboxState')

const AdminSandboxSchema = z
  .object({
    sandboxID: z.string().openapi({ description: 'Identifier of the sandbox' }),
    teamID: z.uuid().openapi({ description: 'Identifier of the team that owns the sandbox' }),
    state: AdminSandboxStateSchema,
  })
  .openapi({ required: ['sandboxID', 'teamID', 'state'] })
  .openapi('AdminSandbox')

const AdminSandboxBuildStatusGroupSchema = z
  .enum(['pending', 'in_progress', 'ready', 'failed'])
  .openapi({
    description:
      'Coarse build state derived from the build status: pending (pending,\nwaiting), in_progress (in_progress, building, snapshotting), ready\n(ready, uploaded, success) or failed (any other status)\n',
    'x-enum-varnames': [
      'AdminSandboxBuildStatusGroupPending',
      'AdminSandboxBuildStatusGroupInProgress',
      'AdminSandboxBuildStatusGroupReady',
      'AdminSandboxBuildStatusGroupFailed',
    ],
  })
  .openapi('AdminSandboxBuildStatusGroup')

const AdminSandboxBuildSchema = z
  .object({
    buildID: z.uuid().openapi({ description: 'Identifier of the build' }),
    templateID: z
      .string()
      .openapi({ description: 'Identifier of the snapshot template the build is assigned to' }),
    tag: z.string().openapi({ description: 'Tag the build is assigned under' }),
    status: z
      .string()
      .openapi({
        deprecated: true,
        'x-deprecated-reason': 'Use statusGroup',
        description: 'Same value as statusGroup',
      }),
    statusGroup: AdminSandboxBuildStatusGroupSchema,
    clusterNodeID: z
      .string()
      .nullable()
      .openapi({ description: 'Node that produced the build, null when it was not recorded' }),
    assignedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the build was assigned to the template under this tag' }),
    isCurrent: z
      .boolean()
      .openapi({
        description:
          "Whether this build is the template's newest ready assignment under\nthe tag, the build a resume uses, regardless of the status filter\n",
      }),
    restorable: z
      .boolean()
      .openapi({
        description:
          'Whether the restore route would accept this build: it is ready,\nassigned under the default tag, not the current build, and its\nsnapshot template is not deleted\n',
      }),
  })
  .openapi({
    description: "A build assigned to a sandbox's snapshot template under a tag",
    required: [
      'buildID',
      'templateID',
      'tag',
      'status',
      'statusGroup',
      'clusterNodeID',
      'assignedAt',
      'isCurrent',
      'restorable',
    ],
  })
  .openapi('AdminSandboxBuild')

const AdminSandboxBuildListSchema = z
  .object({
    items: z.array(AdminSandboxBuildSchema),
    total: z
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
          'Number of assignments matching the tag and status filter, ignoring limit and offset',
      }),
    snapshotTemplateID: z
      .string()
      .nullable()
      .openapi({
        description:
          "Identifier of the template that holds the sandbox's snapshot, null\nwhen the sandbox has no snapshot\n",
      }),
  })
  .openapi({ required: ['items', 'total', 'snapshotTemplateID'] })
  .openapi('AdminSandboxBuildList')

const AdminSandboxBuildRestoreRequestSchema = z
  .object({
    buildID: z
      .uuid()
      .openapi({
        description:
          "Build to make current. It must be ready and already assigned to the\nsandbox's snapshot template under the default tag.\n",
      }),
  })
  .openapi({ required: ['buildID'] })
  .openapi('AdminSandboxBuildRestoreRequest')

const AdminSandboxBuildRestoreResultSchema = z
  .object({
    sandboxID: z.string().openapi({ description: 'Identifier of the sandbox' }),
    templateID: z
      .string()
      .openapi({ description: 'Identifier of the snapshot template that received the assignment' }),
    buildID: z
      .uuid()
      .openapi({ description: "Build that is now the template's current default build" }),
    assignedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the new assignment was written' }),
    previousBuildID: z
      .uuid()
      .nullable()
      .openapi({
        description: 'Build that was current before the restore, null when there was none',
      }),
  })
  .openapi({ required: ['sandboxID', 'templateID', 'buildID', 'assignedAt', 'previousBuildID'] })
  .openapi('AdminSandboxBuildRestoreResult')

const AdminSandboxOverviewTeamSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Identifier of the team' }),
    name: z.string().nullable().openapi({ description: 'Name of the team' }),
    email: z.string().nullable().openapi({ description: 'Contact email of the team' }),
  })
  .openapi({ description: 'The team the sandbox belongs to', required: ['id', 'name', 'email'] })
  .openapi('AdminSandboxOverviewTeam')

const AdminSandboxPauseKindSchema = z
  .enum(['memory', 'filesystem'])
  .openapi({
    description:
      'What a pause kept: memory is a full snapshot that resumes where the\nsandbox left off, filesystem keeps only the root filesystem and boots\nit again on resume\n',
    'x-enum-varnames': ['AdminSandboxPauseKindMemory', 'AdminSandboxPauseKindFilesystem'],
  })
  .openapi('AdminSandboxPauseKind')

const AdminSandboxLastPauseSchema = z
  .object({
    kind: AdminSandboxPauseKindSchema.openapi({
      description: 'Kind of snapshot the most recent pause took',
    }),
    autoPause: z
      .boolean()
      .openapi({
        description:
          'Whether the sandbox pauses instead of being killed on timeout, as of the most recent pause',
      }),
    autoPauseKind: AdminSandboxPauseKindSchema.openapi({
      description: 'Kind of snapshot an auto-pause takes, as of the most recent pause',
    }),
  })
  .openapi({
    description:
      'The snapshot as the most recent pause left it. A resume can change\nwhether the sandbox auto-pauses without rewriting it, and restoring an\nolder build does not change it.\n',
    required: ['kind', 'autoPause', 'autoPauseKind'],
  })
  .openapi('AdminSandboxLastPause')

const AdminSandboxOverviewBuildSchema = z
  .object({
    buildId: z.uuid().openapi({ description: 'Identifier of the build' }),
    templateId: z
      .string()
      .openapi({ description: 'Identifier of the snapshot template the build is assigned to' }),
    tag: z.string().openapi({ description: 'Tag the build is assigned under' }),
    status: z
      .string()
      .openapi({
        deprecated: true,
        'x-deprecated-reason': 'Use statusGroup',
        description: 'Same value as statusGroup',
      }),
    statusGroup: AdminSandboxBuildStatusGroupSchema.nullable().openapi({
      description: 'Coarse build state, null when the stored group is not one of the known values',
    }),
    clusterNodeId: z
      .string()
      .nullable()
      .openapi({ description: 'Node that produced the build, null when it was not recorded' }),
    assignedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the build was assigned to the template under the tag' }),
    isCurrent: z
      .boolean()
      .openapi({
        description: 'Always true, the newest assignment is the one the template resolves to',
      }),
    restorable: z
      .boolean()
      .openapi({ description: 'Always false, the newest assignment is already current' }),
  })
  .openapi({
    description: "The newest default-tag build assignment of a sandbox's snapshot template",
    required: [
      'buildId',
      'templateId',
      'tag',
      'status',
      'statusGroup',
      'clusterNodeId',
      'assignedAt',
      'isCurrent',
      'restorable',
    ],
  })
  .openapi('AdminSandboxOverviewBuild')

const AdminSandboxOverviewSchema = z
  .object({
    sandboxId: z.string().openapi({ description: 'Identifier of the sandbox' }),
    team: AdminSandboxOverviewTeamSchema,
    snapshotTemplateId: z
      .string()
      .nullable()
      .openapi({
        description:
          "Template that holds the sandbox's snapshot, null when the sandbox has no snapshot",
      }),
    lastPause: AdminSandboxLastPauseSchema.nullable().openapi({
      description: 'What the most recent pause recorded, null when the sandbox has no snapshot',
    }),
    latestBuild: AdminSandboxOverviewBuildSchema.nullable().openapi({
      description:
        'Newest default-tag build assignment of the snapshot template, null\nwhen there is no snapshot or no assignment\n',
    }),
    buildCount: z
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
        description: 'Number of default-tag build assignments of the snapshot template',
      }),
  })
  .openapi({
    description:
      'Who owns a sandbox and what its snapshot holds, read from the database:\nthe team, the snapshot template and its most recent pause, and the\nnewest default-tag build assignment of that template\n',
    required: ['sandboxId', 'team', 'snapshotTemplateId', 'lastPause', 'latestBuild', 'buildCount'],
  })
  .openapi('AdminSandboxOverview')

const AdminTeamRunningSandboxCountsSchema = z
  .record(
    z.string(),
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 1 }),
  )
  .openapi({
    description:
      'Cached live sandbox index count keyed by team ID. Counts may briefly\ninclude sandboxes transitioning out of running; teams without indexed\nsandboxes are omitted.\n',
  })
  .openapi('AdminTeamRunningSandboxCounts')

const AdminBuildCancelResultSchema = z
  .object({
    cancelledCount: z.int().openapi({ description: 'Number of builds successfully cancelled' }),
    failedCount: z.int().openapi({ description: 'Number of builds that failed to cancel' }),
  })
  .openapi({ required: ['cancelledCount', 'failedCount'] })
  .openapi('AdminBuildCancelResult')

const AdminTeamListSortFieldSchema = z
  .enum(['name', 'email', 'createdAt', 'runningSandboxes'])
  .openapi({
    description:
      'Column to order by, with newer teams first among equal values. Omit it\nto list the newest teams first.\n',
    'x-enum-varnames': [
      'AdminTeamListSortFieldName',
      'AdminTeamListSortFieldEmail',
      'AdminTeamListSortFieldCreatedAt',
      'AdminTeamListSortFieldRunningSandboxes',
    ],
  })
  .openapi('AdminTeamListSortField')

const AdminTeamListRequestSchema = z
  .object({
    projectIds: z
      .array(z.uuid())
      .exactOptional()
      .openapi({
        description:
          'Only list these teams. An empty list matches no team; omit it to list every team.',
      }),
    search: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A team ID, as a UUID or public project ID, matches that team exactly. Any other text matches a substring of the email, name or slug, ignoring case.',
      }),
    hideBanned: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Leave out banned teams' }),
    hideBlocked: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Leave out blocked teams' }),
    createdAfter: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Only list teams created at or after this time' }),
    createdBefore: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Only list teams created at or before this time' }),
    sortBy: AdminTeamListSortFieldSchema.exactOptional(),
    sortOrder: OrderDirectionSchema.exactOptional().openapi({
      description: 'Ignored when `sortBy` is omitted.',
    }),
    limit: z
      .int32()
      .min(1)
      .max(100)
      .default(50)
      .exactOptional()
      .openapi({ description: 'Maximum number of teams to return' }),
    offset: z
      .int32()
      .min(0)
      .default(0)
      .exactOptional()
      .openapi({ description: 'Number of matching teams to skip' }),
  })
  .openapi({ required: [] })
  .openapi('AdminTeamListRequest')

const AdminTeamListItemSchema = z
  .object({
    id: z.uuid(),
    email: z.string(),
    name: z.string(),
    isBanned: z.boolean(),
    isBlocked: z.boolean(),
    createdAt: z.iso.datetime({ offset: true }),
    memberCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Number of users in the team' }),
    runningSandboxCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Running sandboxes from the same cached snapshot as `GET /admin/sandboxes/running-counts`. Present only when the list is sorted by `runningSandboxes`.',
      }),
  })
  .openapi({
    required: ['id', 'email', 'name', 'isBanned', 'isBlocked', 'createdAt', 'memberCount'],
  })
  .openapi('AdminTeamListItem')

const AdminTeamListSchema = z
  .object({
    items: z.array(AdminTeamListItemSchema),
    total: z
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
        description: 'Number of teams matching the filters, ignoring limit and offset',
      }),
  })
  .openapi({ required: ['items', 'total'] })
  .openapi('AdminTeamList')

const AdminTeamSchema = z
  .object({
    id: z.uuid(),
    email: z.string(),
    name: z.string(),
    slug: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    isBlocked: z.boolean(),
    isBanned: z.boolean(),
    blockedReason: z.string().nullable().exactOptional(),
    sandboxSchedulingLabels: z.array(z.string()),
    clusterId: z.uuid().nullable().exactOptional(),
    clusterName: z.string().nullable().exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'email',
      'name',
      'slug',
      'createdAt',
      'isBlocked',
      'isBanned',
      'sandboxSchedulingLabels',
    ],
  })
  .openapi('AdminTeam')

const AdminTeamSchedulingLabelsSchema = z
  .object({
    labels: z
      .array(
        z
          .string()
          .regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/)
          .min(1)
          .max(63),
      )
      .max(20)
      .openapi({
        description: "The team's full set of labels. A request's labels replace the current ones.",
      }),
  })
  .openapi({ required: ['labels'] })
  .openapi('AdminTeamSchedulingLabels')

const AdminTeamBanResultSchema = z
  .object({
    teamID: z.uuid(),
    sandboxesKilled: z.int().openapi({ description: "Number of the team's sandboxes killed" }),
    sandboxesFailedToKill: z
      .int()
      .openapi({ description: "Number of the team's sandboxes that failed to kill" }),
    sandboxKillError: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set when the kill step failed or ran out of time; the counts cover what it did until then.',
      }),
    buildsCancelled: z.int().openapi({ description: "Number of the team's builds cancelled" }),
    buildsFailedToCancel: z
      .int()
      .openapi({ description: "Number of the team's builds that failed to cancel" }),
    buildCancelError: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set when the cancel step failed or ran out of time; the counts cover what it did until then.',
      }),
  })
  .openapi({
    description:
      "The outcome of banning one team. The ban is stored before the team's\nsandboxes are killed and its builds cancelled, so it holds even when\neither step fails.\n",
    required: [
      'teamID',
      'sandboxesKilled',
      'sandboxesFailedToKill',
      'buildsCancelled',
      'buildsFailedToCancel',
    ],
  })
  .openapi('AdminTeamBanResult')

const AdminTeamsBanRequestSchema = z
  .object({
    teamIDs: z
      .array(z.uuid())
      .min(1)
      .max(100)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['teamIDs'] })
  .openapi('AdminTeamsBanRequest')

const AdminTeamBanFailureSchema = z
  .object({ teamID: z.uuid(), error: z.string() })
  .openapi({ required: ['teamID', 'error'] })
  .openapi('AdminTeamBanFailure')

const AdminTeamsBanResultSchema = z
  .object({
    banned: z
      .array(AdminTeamBanResultSchema)
      .openapi({
        description:
          'Teams whose ban is stored, with the outcome of killing their sandboxes and cancelling their builds',
      }),
    notFound: z.array(z.uuid()).openapi({ description: 'Requested teams that do not exist' }),
    failed: z
      .array(AdminTeamBanFailureSchema)
      .openapi({
        description:
          'Teams whose ban could not be stored or put into force; retrying repeats every step',
      }),
  })
  .openapi({ required: ['banned', 'notFound', 'failed'] })
  .openapi('AdminTeamsBanResult')

const AdminTemplateTeamSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Identifier of the team that owns the template' }),
    name: z.string().openapi({ description: 'Name of the team' }),
    email: z.string().openapi({ description: 'Contact email of the team' }),
  })
  .openapi({ required: ['id', 'name', 'email'] })
  .openapi('AdminTemplateTeam')

const AdminTemplateAliasSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Identifier of the alias' }),
    templateID: z
      .string()
      .openapi({ description: 'Identifier of the template the alias resolves to' }),
    alias: z.string().openapi({ description: 'The alias' }),
    namespace: z
      .string()
      .nullable()
      .openapi({
        description: 'Namespace of the alias, or null for an alias that resolves for every team',
      }),
    isRenamable: z
      .boolean()
      .openapi({
        description: 'Whether building the template under another name replaces the alias',
      }),
  })
  .openapi({ required: ['id', 'templateID', 'alias', 'namespace', 'isRenamable'] })
  .openapi('AdminTemplateAlias')

const AdminTemplateAliasesSchema = z
  .object({
    templateID: z.string().openapi({ description: 'Identifier of the template' }),
    public: z.boolean().openapi({ description: 'Whether the template is public' }),
    team: AdminTemplateTeamSchema,
    aliases: z
      .array(AdminTemplateAliasSchema)
      .openapi({ description: 'All aliases of the template, those without a namespace first' }),
  })
  .openapi({ required: ['templateID', 'public', 'team', 'aliases'] })
  .openapi('AdminTemplateAliases')

const AdminTemplateAliasCreateRequestSchema = z
  .object({
    templateID: z
      .string()
      .min(1)
      .openapi({ description: 'Identifier of the template the alias resolves to' }),
    alias: z
      .string()
      .min(1)
      .max(128)
      .openapi({ description: 'The alias, without a namespace or tag' }),
  })
  .openapi({ required: ['templateID', 'alias'] })
  .openapi('AdminTemplateAliasCreateRequest')

const AdminTemplateAliasDeletedSchema = z
  .object({
    aliasID: z.uuid().openapi({ description: 'Identifier of the removed alias' }),
    templateID: z
      .string()
      .openapi({ description: 'Identifier of the template the alias resolved to' }),
    alias: z.string().openapi({ description: 'The removed alias' }),
  })
  .openapi({ required: ['aliasID', 'templateID', 'alias'] })
  .openapi('AdminTemplateAliasDeleted')

const AdminDefaultTemplateSchema = z
  .object({
    templateID: z.string().openapi({ description: 'Identifier of the default template' }),
    description: z
      .string()
      .nullable()
      .openapi({ description: 'Description of the default template' }),
  })
  .openapi({ required: ['templateID', 'description'] })
  .openapi('AdminDefaultTemplate')

const AdminDefaultTemplateCreateRequestSchema = z
  .object({
    templateID: z
      .string()
      .min(1)
      .openapi({ description: 'Identifier of the template to make a default template' }),
    description: z
      .string()
      .max(1000)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Description of the default template; blank is stored as none' }),
  })
  .openapi({ required: ['templateID'] })
  .openapi('AdminDefaultTemplateCreateRequest')

const AdminDefaultTemplateUpdateRequestSchema = z
  .object({
    description: z
      .string()
      .max(1000)
      .nullable()
      .openapi({ description: 'New description of the default template; null or blank clears it' }),
  })
  .openapi({ required: ['description'] })
  .openapi('AdminDefaultTemplateUpdateRequest')

const TemplateBuildStatusSchema = z
  .enum(['building', 'waiting', 'ready', 'error'])
  .openapi({ description: 'Status of the template build' })
  .openapi('TemplateBuildStatus')

const TemplateBuildSchema = z
  .object({
    buildID: z.uuid().openapi({ description: 'Identifier of the build' }),
    status: TemplateBuildStatusSchema,
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the build was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the build was last updated' }),
    finishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time when the build was finished' }),
    cpuCount: CPUCountSchema,
    maxCpuCount: CPUCountSchema.exactOptional().openapi({
      description: 'Maximum CPU count for resizable templates; absent for fixed-size templates.',
    }),
    memoryMB: MemoryMBSchema,
    diskSizeMB: DiskSizeMBSchema.exactOptional(),
    envdVersion: EnvdVersionSchema.exactOptional(),
  })
  .openapi({ required: ['buildID', 'status', 'createdAt', 'updatedAt', 'cpuCount', 'memoryMB'] })
  .openapi('TemplateBuild')

const AdminTemplateLookupSchema = z
  .object({
    templateID: z.string().openapi({ description: 'Identifier of the template' }),
    team: AdminTemplateTeamSchema,
    names: z
      .array(z.string())
      .openapi({ description: 'Names of the template (namespace/alias format when namespaced)' }),
    public: z.boolean().openapi({ description: 'Whether the template is public' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the template was created' }),
    lastSpawnedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Time when the template was last used' }),
    spawnCount: z
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
        description: 'Number of times the template was used',
      }),
    isSnapshot: z
      .boolean()
      .openapi({ description: 'Whether the template is a snapshot of a sandbox' }),
    snapshotSandboxID: z
      .string()
      .nullable()
      .openapi({ description: 'The sandbox a snapshot template was taken from' }),
    matchedBuildID: z
      .uuid()
      .nullable()
      .openapi({ description: 'The build the query matched, when it was a build ID' }),
    builds: z
      .array(TemplateBuildSchema)
      .openapi({
        description:
          "The template's newest builds of any tag and status, newest first, at most 100",
      }),
  })
  .openapi({
    required: [
      'templateID',
      'team',
      'names',
      'public',
      'createdAt',
      'lastSpawnedAt',
      'spawnCount',
      'isSnapshot',
      'snapshotSandboxID',
      'matchedBuildID',
      'builds',
    ],
  })
  .openapi('AdminTemplateLookup')

const VolumeTokenSchema = z
  .object({ token: z.string() })
  .openapi({ required: ['token'] })
  .openapi('VolumeToken')

const TemplateSchema = z
  .object({
    templateID: z.string().openapi({ description: 'Identifier of the template' }),
    buildID: z
      .string()
      .openapi({ description: 'Identifier of the last successful build for given template' }),
    cpuCount: CPUCountSchema,
    maxCpuCount: CPUCountSchema.exactOptional().openapi({
      description: 'Maximum CPU count for resizable templates; absent for fixed-size templates.',
    }),
    memoryMB: MemoryMBSchema,
    diskSizeMB: DiskSizeMBSchema,
    public: z
      .boolean()
      .openapi({ description: 'Whether the template is public or only accessible by the team' }),
    aliases: z
      .array(z.string())
      .openapi({ description: 'Aliases of the template', deprecated: true }),
    names: z
      .array(z.string())
      .openapi({ description: 'Names of the template (namespace/alias format when namespaced)' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the template was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the template was last updated' }),
    createdBy: TeamUserSchema.nullable(),
    lastSpawnedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Time when the template was last used' }),
    spawnCount: z
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
        description: 'Number of times the template was used',
      }),
    buildCount: z.int32().openapi({ description: 'Number of times the template was built' }),
    envdVersion: EnvdVersionSchema,
    buildStatus: TemplateBuildStatusSchema,
    isDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the template is one of the platform's default templates. A default template owned by another team carries zero or null usage fields (`spawnCount`, `buildCount`, `lastSpawnedAt`, `createdBy`).\n",
      }),
    description: z.string().exactOptional().openapi({ description: 'Description of the template' }),
  })
  .openapi({
    required: [
      'templateID',
      'buildID',
      'cpuCount',
      'memoryMB',
      'diskSizeMB',
      'public',
      'createdAt',
      'updatedAt',
      'createdBy',
      'lastSpawnedAt',
      'spawnCount',
      'buildCount',
      'envdVersion',
      'aliases',
      'names',
      'buildStatus',
    ],
  })
  .openapi('Template')

const TemplateSearchResponseSchema = z
  .object({
    data: z.array(TemplateSchema),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'Cursor of the next page, or null on the last page' }),
  })
  .openapi({ required: ['data', 'nextCursor'] })
  .openapi('TemplateSearchResponse')

const BuildStatusSchema = z
  .enum(['building', 'failed', 'success'])
  .openapi({ description: 'Build status as the builds list reports it.' })
  .openapi('BuildStatus')

const ListedBuildSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Identifier of the build.' }),
    template: z
      .string()
      .openapi({ description: 'Template alias when present, otherwise template ID.' }),
    templateId: z.string().openapi({ description: 'Identifier of the template.' }),
    status: BuildStatusSchema,
    statusMessage: z
      .string()
      .nullable()
      .openapi({ description: 'Failure message when status is `failed`, otherwise `null`.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Build creation timestamp in RFC3339 format.' }),
    finishedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Build completion timestamp in RFC3339 format, if finished.' }),
    cpuCount: z
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
        description: 'CPU cores configured for the build.',
      }),
    memoryMB: z
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
        description: 'Memory in MiB configured for the build.',
      }),
    diskSizeMB: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Disk size in MiB configured for the build, if recorded.',
      }),
    envdVersion: z
      .string()
      .nullable()
      .openapi({ description: 'envd version the build was created with, if recorded.' }),
  })
  .openapi({
    required: [
      'id',
      'template',
      'templateId',
      'status',
      'statusMessage',
      'createdAt',
      'finishedAt',
      'cpuCount',
      'memoryMB',
      'diskSizeMB',
      'envdVersion',
    ],
  })
  .openapi('ListedBuild')

const BuildsListResponseSchema = z
  .object({
    data: z.array(ListedBuildSchema),
    nextCursor: z
      .string()
      .nullable()
      .openapi({
        description: 'Cursor to pass to the next list request, or `null` if there is no next page.',
      }),
  })
  .openapi({ required: ['data', 'nextCursor'] })
  .openapi('BuildsListResponse')

const BuildStatusItemSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Identifier of the build.' }),
    status: BuildStatusSchema,
    finishedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Build completion timestamp in RFC3339 format, if finished.' }),
    statusMessage: z
      .string()
      .nullable()
      .openapi({ description: 'Failure message when status is `failed`, otherwise `null`.' }),
  })
  .openapi({ required: ['id', 'status', 'finishedAt', 'statusMessage'] })
  .openapi('BuildStatusItem')

const BuildsStatusesResponseSchema = z
  .object({
    buildStatuses: z
      .array(BuildStatusItemSchema)
      .openapi({ description: 'List of build statuses' }),
  })
  .openapi({ required: ['buildStatuses'] })
  .openapi('BuildsStatusesResponse')

const BuildInfoSchema = z
  .object({
    names: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Template names related to this build, if available.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Build creation timestamp in RFC3339 format.' }),
    finishedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Build completion timestamp in RFC3339 format, if finished.' }),
    status: BuildStatusSchema,
    statusMessage: z
      .string()
      .nullable()
      .openapi({ description: 'Failure message when status is `failed`, otherwise `null`.' }),
  })
  .openapi({ required: ['createdAt', 'finishedAt', 'status', 'statusMessage'] })
  .openapi('BuildInfo')

const TemplateRequestResponseV3Schema = z
  .object({
    templateID: z.string().openapi({ description: 'Identifier of the template' }),
    buildID: z
      .string()
      .openapi({ description: 'Identifier of the last successful build for given template' }),
    public: z
      .boolean()
      .openapi({ description: 'Whether the template is public or only accessible by the team' }),
    names: z.array(z.string()).openapi({ description: 'Names of the template' }),
    tags: z.array(z.string()).openapi({ description: 'Tags assigned to the template build' }),
    aliases: z
      .array(z.string())
      .openapi({ description: 'Aliases of the template', deprecated: true }),
  })
  .openapi({ required: ['templateID', 'buildID', 'public', 'aliases', 'names', 'tags'] })
  .openapi('TemplateRequestResponseV3')

const TemplateBuildWithTagsSchema = TemplateBuildSchema.and(
  z
    .object({
      tags: z
        .array(z.string())
        .openapi({
          description:
            'Tags of the template that point at this build. A tag points at the latest ready build it was assigned to, the build a sandbox created with that tag starts from.',
        }),
    })
    .openapi({ required: ['tags'] }),
).openapi('TemplateBuildWithTags')

const TemplateV2Schema = z
  .object({
    templateID: z.string().openapi({ description: 'Identifier of the template' }),
    names: z
      .array(z.string())
      .openapi({ description: 'Names of the template (namespace/alias format when namespaced)' }),
    public: z
      .boolean()
      .openapi({ description: 'Whether the template is public or only accessible by the team' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the template was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the template was last updated' }),
    createdBy: TeamUserSchema.nullable(),
    lastSpawnedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Time when the template was last used' }),
    spawnCount: z
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
        description: 'Number of times the template was used',
      }),
    buildCount: z.int32().openapi({ description: 'Number of times the template was built' }),
    isDefault: z
      .boolean()
      .openapi({ description: "Whether the template is one of the platform's default templates" }),
    description: z.string().exactOptional().openapi({ description: 'Description of the template' }),
    buildStatus: TemplateBuildStatusSchema,
    defaultBuild: TemplateBuildSchema.exactOptional(),
  })
  .openapi({
    description:
      'A template with its default build. `defaultBuild` is the build a sandbox created without a tag starts from, the latest ready build tagged default; it is absent until such a build is ready. `buildStatus` is the status of the latest build tagged default in any state: it is `building` while a rebuild runs, although sandboxes still start from the default build.\n',
    required: [
      'templateID',
      'names',
      'public',
      'createdAt',
      'updatedAt',
      'createdBy',
      'lastSpawnedAt',
      'spawnCount',
      'buildCount',
      'isDefault',
      'buildStatus',
    ],
  })
  .openapi('TemplateV2')

const TemplateWithBuildsSchema = TemplateSchema.and(
  z
    .object({
      builds: z
        .array(TemplateBuildSchema)
        .openapi({ description: 'List of builds for the template' }),
    })
    .openapi({ required: ['builds'] }),
).openapi('TemplateWithBuilds')

const TemplateAliasResponseSchema = z
  .object({
    templateID: z.string().openapi({ description: 'Identifier of the template' }),
    public: z
      .boolean()
      .openapi({ description: 'Whether the template is public or only accessible by the team' }),
  })
  .openapi({ required: ['templateID', 'public'] })
  .openapi('TemplateAliasResponse')

const TemplateStepSchema = z
  .object({
    type: z.string().openapi({ description: 'Type of the step' }),
    args: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({ description: 'Arguments for the step' }),
    filesHash: z
      .string()
      .regex(/^[0-9a-f]{64}$/)
      .exactOptional()
      .openapi({ description: 'Hash of the files used in the step (lowercase hex SHA-256)' }),
    force: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the step should be forced to run regardless of the cache' }),
  })
  .openapi({ description: 'Step in the template build process', required: ['type'] })
  .openapi('TemplateStep')

const TemplateBuildRequestV3Schema = z
  .object({
    name: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'Name of the template. Can include a tag with colon separator (e.g. "my-template" or "my-template:v1"). If tag is included, it will be treated as if the tag was provided in the tags array.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags to assign to the template build' }),
    alias: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description: 'Alias of the template. Deprecated, use name instead.',
        deprecated: true,
      }),
    teamID: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Identifier of the team, as its UUID or its public project ID (prj_)',
      }),
    cpuCount: CPUCountSchema.exactOptional(),
    maxCpuCount: CPUCountSchema.exactOptional().openapi({
      description:
        "Maximum CPU count the template's sandboxes can be resized to; makes the template resizable. Must be at least cpuCount.",
    }),
    memoryMB: MemoryMBSchema.exactOptional(),
    minFreeDiskMb: MinFreeDiskMbSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateBuildRequestV3')

const AWSRegistrySchema = z
  .object({
    type: z.literal('aws').openapi({ description: 'Type of registry authentication' }),
    awsAccessKeyId: z.string().openapi({ description: 'AWS Access Key ID for ECR authentication' }),
    awsSecretAccessKey: z
      .string()
      .openapi({ description: 'AWS Secret Access Key for ECR authentication' }),
    awsRegion: z.string().openapi({ description: 'AWS Region where the ECR registry is located' }),
  })
  .openapi({ required: ['type', 'awsAccessKeyId', 'awsSecretAccessKey', 'awsRegion'] })
  .openapi('AWSRegistry')

const GCPRegistrySchema = z
  .object({
    type: z.literal('gcp').openapi({ description: 'Type of registry authentication' }),
    serviceAccountJson: z
      .string()
      .openapi({ description: 'Service Account JSON for GCP authentication' }),
  })
  .openapi({ required: ['type', 'serviceAccountJson'] })
  .openapi('GCPRegistry')

const GeneralRegistrySchema = z
  .object({
    type: z.literal('registry').openapi({ description: 'Type of registry authentication' }),
    username: z.string().openapi({ description: 'Username to use for the registry' }),
    password: z.string().openapi({ description: 'Password to use for the registry' }),
  })
  .openapi({ required: ['type', 'username', 'password'] })
  .openapi('GeneralRegistry')

const FromImageRegistrySchema = z
  .discriminatedUnion('type', [AWSRegistrySchema, GCPRegistrySchema, GeneralRegistrySchema])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        aws: '#/components/schemas/AWSRegistry',
        gcp: '#/components/schemas/GCPRegistry',
        registry: '#/components/schemas/GeneralRegistry',
      },
    },
  })
  .openapi('FromImageRegistry')

const TemplateBuildStartV2Schema = z
  .object({
    fromImage: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Image to use as a base for the template build' }),
    fromTemplate: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Template to use as a base for the template build' }),
    fromImageRegistry: FromImageRegistrySchema.exactOptional(),
    force: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Whether the whole build should be forced to run regardless of the cache',
      }),
    steps: z
      .array(TemplateStepSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'List of steps to execute in the template build' }),
    startCmd: z
      .string()
      .exactOptional()
      .openapi({ description: 'Start command to execute in the template after the build' }),
    readyCmd: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ready check command to execute in the template after the build' }),
  })
  .openapi({
    description: 'Exactly one of fromImage or fromTemplate must be given and non-empty.',
    required: [],
  })
  .openapi('TemplateBuildStartV2')

const TemplateBuildFileUploadSchema = z
  .object({
    present: z
      .boolean()
      .openapi({ description: 'Whether the file is already present in the cache' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Url where the file should be uploaded to' }),
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Request headers that must be sent with the upload request' }),
  })
  .openapi({ required: ['present'] })
  .openapi('TemplateBuildFileUpload')

const BuildLogEntrySchema = z
  .object({
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of the log entry' }),
    message: z.string().openapi({ description: 'Log message content' }),
    level: LogLevelSchema,
    step: z
      .string()
      .exactOptional()
      .openapi({ description: 'Step in the build process related to the log entry' }),
  })
  .openapi({ required: ['timestamp', 'message', 'level'] })
  .openapi('BuildLogEntry')

const BuildStatusReasonSchema = z
  .object({
    message: z
      .string()
      .openapi({
        description: 'Message with the status reason, currently reporting only for error status',
      }),
    step: z.string().exactOptional().openapi({ description: 'Step that failed' }),
    logEntries: z
      .array(BuildLogEntrySchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Log entries related to the status reason' }),
  })
  .openapi({ required: ['message'] })
  .openapi('BuildStatusReason')

const TemplateBuildInfoSchema = z
  .object({
    logs: z
      .array(z.string())
      .default([])
      .openapi({
        deprecated: true,
        description:
          'Build logs (always empty since the V1 build path was removed, use logEntries)',
      }),
    logEntries: z
      .array(BuildLogEntrySchema)
      .default([])
      .openapi({ description: 'Build logs structured' }),
    templateID: z.string().openapi({ description: 'Identifier of the template' }),
    buildID: z.string().openapi({ description: 'Identifier of the build' }),
    status: TemplateBuildStatusSchema,
    reason: BuildStatusReasonSchema.exactOptional(),
  })
  .openapi({ required: ['templateID', 'buildID', 'status', 'logs', 'logEntries'] })
  .openapi('TemplateBuildInfo')

const TemplateBuildLogsResponseSchema = z
  .object({
    logs: z
      .array(BuildLogEntrySchema)
      .default([])
      .openapi({ description: 'Build logs structured' }),
  })
  .openapi({ required: ['logs'] })
  .openapi('TemplateBuildLogsResponse')

const LogsDirectionSchema = z
  .enum(['forward', 'backward'])
  .openapi({
    description: 'Direction of the logs that should be returned',
    'x-enum-varnames': ['LogsDirectionForward', 'LogsDirectionBackward'],
  })
  .openapi('LogsDirection')

const LogsSourceSchema = z
  .enum(['temporary', 'persistent'])
  .openapi({
    description: 'Source of the logs that should be returned',
    'x-enum-varnames': ['LogsSourceTemporary', 'LogsSourcePersistent'],
  })
  .openapi('LogsSource')

const NodeStatusSchema = z
  .enum(['ready', 'draining', 'connecting', 'unhealthy', 'standby', 'shutting_down', 'not_ready'])
  .openapi({
    description:
      'Status of the node.\n- standby: the node refuses new sandboxes and keeps serving the ones it holds; it can return to ready.\n- not_ready: the node is starting and cannot take new work yet. It becomes ready by itself and cannot be set through the API.\n',
    'x-enum-varnames': [
      'NodeStatusReady',
      'NodeStatusDraining',
      'NodeStatusConnecting',
      'NodeStatusUnhealthy',
      'NodeStatusStandby',
      'NodeStatusShuttingDown',
      'NodeStatusNotReady',
    ],
  })
  .openapi('NodeStatus')

const NodeStatusChangeSchema = z
  .object({
    clusterID: z.uuid().exactOptional().openapi({ description: 'Identifier of the cluster' }),
    status: NodeStatusSchema,
    owner: z
      .string()
      .regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/)
      .min(1)
      .max(63)
      .exactOptional()
      .openapi({
        description: 'Owner of a standby override; required to release a standby that carries one',
      }),
    force: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Apply the status and owner regardless of the recorded owner' }),
  })
  .openapi({ required: ['status'] })
  .openapi('NodeStatusChange')

const DiskMetricsSchema = z
  .object({
    mountPoint: z.string().openapi({ description: 'Mount point of the disk' }),
    device: z.string().openapi({ description: 'Device name' }),
    filesystemType: z.string().openapi({ description: 'Filesystem type (e.g., ext4, xfs)' }),
    usedBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({ type: 'integer', format: 'uint64', description: 'Used space in bytes' }),
    totalBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({ type: 'integer', format: 'uint64', description: 'Total space in bytes' }),
  })
  .openapi({ required: ['mountPoint', 'device', 'filesystemType', 'usedBytes', 'totalBytes'] })
  .openapi('DiskMetrics')

const NodeMetricsSchema = z
  .object({
    allocatedCPU: z.uint32().openapi({ description: 'Number of allocated CPU cores' }),
    cpuPercent: z.uint32().openapi({ description: 'Node CPU usage percentage' }),
    cpuCount: z.uint32().openapi({ description: 'Total number of CPU cores on the node' }),
    allocatedMemoryBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Amount of allocated memory in bytes',
      }),
    memoryUsedBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({ type: 'integer', format: 'uint64', description: 'Node memory used in bytes' }),
    memoryTotalBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({ type: 'integer', format: 'uint64', description: 'Total node memory in bytes' }),
    hugePagesTotal: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Total number of preallocated hugepages on the node',
      }),
    hugePagesUsed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Number of hugepages in use (total - free)',
      }),
    hugePagesReserved: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Number of reserved hugepages (committed but not yet faulted)',
      }),
    hugePageSizeBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Size of a single hugepage in bytes',
      }),
    disks: z
      .array(DiskMetricsSchema)
      .openapi({ description: 'Detailed metrics for each disk/mount point' }),
  })
  .openapi({
    description: 'Node metrics',
    required: [
      'allocatedCPU',
      'allocatedMemoryBytes',
      'cpuPercent',
      'memoryUsedBytes',
      'cpuCount',
      'memoryTotalBytes',
      'disks',
      'hugePagesTotal',
      'hugePagesUsed',
      'hugePagesReserved',
      'hugePageSizeBytes',
    ],
  })
  .openapi('NodeMetrics')

const MachineInfoSchema = z
  .object({
    cpuFamily: z.string().openapi({ description: 'CPU family of the node' }),
    cpuModel: z.string().openapi({ description: 'CPU model of the node' }),
    cpuModelName: z.string().openapi({ description: 'CPU model name of the node' }),
    cpuArchitecture: z.string().openapi({ description: 'CPU architecture of the node' }),
  })
  .openapi({ required: ['cpuFamily', 'cpuModel', 'cpuModelName', 'cpuArchitecture'] })
  .openapi('MachineInfo')

const NodeSchema = z
  .object({
    version: z.string().openapi({ description: 'Version of the orchestrator' }),
    commit: z.string().openapi({ description: 'Commit of the orchestrator' }),
    id: z.string().openapi({ description: 'Identifier of the node' }),
    serviceInstanceID: z
      .string()
      .openapi({ description: 'Service instance identifier of the node' }),
    clusterID: z.string().openapi({ description: 'Identifier of the cluster' }),
    machineInfo: MachineInfoSchema,
    status: NodeStatusSchema,
    statusChangedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the node status was last changed' }),
    statusOwner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Owner recorded by the current standby override' }),
    capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Capabilities of the orchestrator build, for example park-owner' }),
    sandboxCount: z.uint32().openapi({ description: 'Number of sandboxes running on the node' }),
    maxSandboxes: z
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
          'Cached node-scoped sandbox admission limit. Nonpositive values reject creation.',
      }),
    outstandingWork: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description:
          'Cached count of work holds on the node. Zero means idle or not yet reported; it does not by itself authorize deletion.',
      }),
    metrics: NodeMetricsSchema,
    createSuccesses: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Number of sandbox create successes',
      }),
    createFails: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Number of sandbox create fails',
      }),
    sandboxStartingCount: z.int().openapi({ description: 'Number of starting Sandboxes' }),
  })
  .openapi({
    required: [
      'id',
      'serviceInstanceID',
      'clusterID',
      'status',
      'statusChangedAt',
      'sandboxCount',
      'outstandingWork',
      'maxSandboxes',
      'metrics',
      'createSuccesses',
      'createFails',
      'sandboxStartingCount',
      'version',
      'commit',
      'machineInfo',
    ],
  })
  .openapi('Node')

const NodeSandboxSchema = z
  .object({
    teamID: z.uuid().openapi({ description: 'Identifier of the team' }),
    sandboxID: z.string().openapi({ description: 'Identifier of the sandbox' }),
    executionID: z.uuid().openapi({ description: 'Identifier of the running execution' }),
    lifecycleHoldUntil: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Deadline of the operation holding the sandbox's lifecycle, absent when it is not held",
      }),
    networkMode: z
      .string()
      .openapi({
        description: 'Network the execution runs on, legacy, egress-router or full-router',
      }),
    volumesAttached: z
      .boolean()
      .openapi({ description: 'Whether the sandbox runs with managed volumes attached' }),
  })
  .openapi({ required: ['teamID', 'sandboxID', 'executionID', 'networkMode', 'volumesAttached'] })
  .openapi('NodeSandbox')

const NodeSandboxesSchema = z
  .object({
    nodeID: z.string().openapi({ description: 'Identifier of the node' }),
    observedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: "Time the node's sandboxes were read" }),
    items: z.array(NodeSandboxSchema),
  })
  .openapi({
    description:
      "The sandboxes the API confirms are running on a node, as the node and the API's records agree on them when read. A guest the node runs for an execution the API records elsewhere, or does not record, is left out.",
    required: ['nodeID', 'observedAt', 'items'],
  })
  .openapi('NodeSandboxes')

const NodeDetailSchema = z
  .object({
    clusterID: z.string().openapi({ description: 'Identifier of the cluster' }),
    version: z.string().openapi({ description: 'Version of the orchestrator' }),
    commit: z.string().openapi({ description: 'Commit of the orchestrator' }),
    id: z.string().openapi({ description: 'Identifier of the node' }),
    serviceInstanceID: z
      .string()
      .openapi({ description: 'Service instance identifier of the node' }),
    machineInfo: MachineInfoSchema,
    status: NodeStatusSchema,
    statusChangedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the node status was last changed' }),
    statusOwner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Owner recorded by the current standby override' }),
    capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Capabilities of the orchestrator build, for example park-owner' }),
    sandboxCount: z.uint32().openapi({ description: 'Number of sandboxes running on the node' }),
    maxSandboxes: z
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
          'Cached node-scoped sandbox admission limit. Nonpositive values reject creation.',
      }),
    outstandingWork: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description:
          'Cached count of work holds on the node. Zero means idle or not yet reported; it does not by itself authorize deletion.',
      }),
    metrics: NodeMetricsSchema,
    createSuccesses: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Number of sandbox create successes',
      }),
    createFails: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Number of sandbox create fails',
      }),
  })
  .openapi({
    required: [
      'id',
      'serviceInstanceID',
      'clusterID',
      'status',
      'statusChangedAt',
      'sandboxCount',
      'outstandingWork',
      'maxSandboxes',
      'createSuccesses',
      'createFails',
      'version',
      'commit',
      'metrics',
      'machineInfo',
    ],
  })
  .openapi('NodeDetail')

const IdentifierMaskingDetailsSchema = z
  .object({
    prefix: z.string().openapi({ description: 'Prefix that identifies the token or key type' }),
    valueLength: z.int().openapi({ description: 'Length of the token or key' }),
    maskedValuePrefix: z
      .string()
      .openapi({ description: 'Prefix used in masked version of the token or key' }),
    maskedValueSuffix: z
      .string()
      .openapi({ description: 'Suffix used in masked version of the token or key' }),
  })
  .openapi({ required: ['prefix', 'valueLength', 'maskedValuePrefix', 'maskedValueSuffix'] })
  .openapi('IdentifierMaskingDetails')

const TeamAPIKeySchema = z
  .object({
    id: z.uuid().openapi({ description: 'Identifier of the API key' }),
    name: z.string().openapi({ description: 'Name of the API key' }),
    mask: IdentifierMaskingDetailsSchema,
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of API key creation' }),
    createdBy: TeamUserSchema.nullable().exactOptional(),
    lastUsed: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last time this API key was used' }),
  })
  .openapi({ required: ['id', 'name', 'mask', 'createdAt'] })
  .openapi('TeamAPIKey')

const CreatedTeamAPIKeySchema = z
  .object({
    id: z.uuid().openapi({ description: 'Identifier of the API key' }),
    key: z.string().openapi({ description: 'Raw value of the API key' }),
    mask: IdentifierMaskingDetailsSchema,
    name: z.string().openapi({ description: 'Name of the API key' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of API key creation' }),
    createdBy: TeamUserSchema.nullable().exactOptional(),
    lastUsed: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last time this API key was used' }),
  })
  .openapi({ required: ['id', 'key', 'mask', 'name', 'createdAt'] })
  .openapi('CreatedTeamAPIKey')

const NewTeamAPIKeySchema = z
  .object({ name: z.string().openapi({ description: 'Name of the API key' }) })
  .openapi({ required: ['name'] })
  .openapi('NewTeamAPIKey')

const UpdateTeamAPIKeySchema = z
  .object({ name: z.string().openapi({ description: 'New name for the API key' }) })
  .openapi({ required: ['name'] })
  .openapi('UpdateTeamAPIKey')

const AssignedTemplateTagsSchema = z
  .object({
    tags: z.array(z.string()).openapi({ description: 'Assigned tags of the template' }),
    buildID: z
      .uuid()
      .openapi({ description: 'Identifier of the build associated with these tags' }),
  })
  .openapi({ required: ['tags', 'buildID'] })
  .openapi('AssignedTemplateTags')

const TemplateTagSchema = z
  .object({
    tag: z.string().openapi({ description: 'The tag name' }),
    buildID: z.uuid().openapi({ description: 'Identifier of the build associated with this tag' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the tag was assigned' }),
  })
  .openapi({ required: ['tag', 'buildID', 'createdAt'] })
  .openapi('TemplateTag')

const TemplateTagAssignmentSchema = z
  .object({
    assignmentId: z.uuid().openapi({ description: 'Identifier of the tag assignment event.' }),
    buildId: z.uuid().openapi({ description: 'Identifier of the assigned build.' }),
    assignedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the tag was assigned to the build.' }),
    buildCreatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the assigned build was created.' }),
    buildFinishedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Time when the assigned build finished.' }),
  })
  .openapi({
    required: ['assignmentId', 'buildId', 'assignedAt', 'buildCreatedAt', 'buildFinishedAt'],
  })
  .openapi('TemplateTagAssignment')

const TemplateTagGroupSchema = z
  .object({
    tag: z.string().openapi({ description: 'Template tag name.' }),
    assignments: z
      .array(TemplateTagAssignmentSchema)
      .openapi({ description: 'Ready assignment events for this tag, sorted latest first.' }),
    hasMore: z
      .boolean()
      .openapi({
        description:
          'Whether more ready assignment events exist beyond the requested assignment limit.',
      }),
  })
  .openapi({ required: ['tag', 'assignments', 'hasMore'] })
  .openapi('TemplateTagGroup')

const TemplateTagGroupsResponseSchema = z
  .object({
    tags: z.array(TemplateTagGroupSchema),
    nextCursor: z
      .string()
      .nullable()
      .openapi({
        description:
          'Cursor to pass as `tagsCursor` for the next page, or `null` if there is no next page.',
      }),
  })
  .openapi({ required: ['tags', 'nextCursor'] })
  .openapi('TemplateTagGroupsResponse')

const TemplateTagsCountResponseSchema = z
  .object({
    total: z
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
        description: 'Total distinct ready tags for the template.',
      }),
  })
  .openapi({ required: ['total'] })
  .openapi('TemplateTagsCountResponse')

const TemplateTagExistsResponseSchema = z
  .object({
    exists: z
      .boolean()
      .openapi({ description: 'Whether the template tag has at least one ready assignment.' }),
    normalizedTag: z.string().openapi({ description: 'Normalized template tag name.' }),
  })
  .openapi({ required: ['exists', 'normalizedTag'] })
  .openapi('TemplateTagExistsResponse')

const TemplateTagAssignmentsResponseSchema = z
  .object({
    data: z
      .array(TemplateTagAssignmentSchema)
      .openapi({ description: 'Ready assignment events for the tag, sorted latest first.' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({
        description: 'Cursor to pass to the next list request, or `null` if there is no next page.',
      }),
  })
  .openapi({ required: ['data', 'nextCursor'] })
  .openapi('TemplateTagAssignmentsResponse')

const AssignTemplateTagsRequestSchema = z
  .object({
    target: z.string().openapi({ description: 'Target template in "name:tag" format' }),
    tags: z.array(z.string()).openapi({ description: 'Tags to assign to the template' }),
  })
  .openapi({ required: ['target', 'tags'] })
  .openapi('AssignTemplateTagsRequest')

const DeleteTemplateTagsRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the template' }),
    tags: z.array(z.string()).openapi({ description: 'Tags to delete' }),
  })
  .openapi({ required: ['name', 'tags'] })
  .openapi('DeleteTemplateTagsRequest')

const VolumeSchema = z
  .object({
    volumeID: z.string().openapi({ description: 'ID of the volume' }),
    name: z.string().openapi({ description: 'Name of the volume' }),
  })
  .openapi({ required: ['volumeID', 'name'] })
  .openapi('Volume')

const VolumeAndTokenSchema = z
  .object({
    volumeID: z.string().openapi({ description: 'ID of the volume' }),
    name: z.string().openapi({ description: 'Name of the volume' }),
    token: z
      .string()
      .openapi({ description: 'Auth token to use for interacting with volume content' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Domain to use as the destination for volume content requests,\nreplacing the default `api.<E2B_DOMAIN>`. Only returned when the\nteam is connected to a custom (BYOC) cluster; absent otherwise, in\nwhich case the default domain is used.\n',
      }),
  })
  .openapi({ required: ['volumeID', 'name', 'token'] })
  .openapi('VolumeAndToken')

const NewVolumeSchema = z
  .object({
    name: z
      .string()
      .regex(/^[a-zA-Z0-9_-]+$/)
      .openapi({ description: 'Name of the volume' }),
  })
  .openapi({ required: ['name'] })
  .openapi('NewVolume')

const SecretMetadataSchema = z
  .record(z.string(), z.string().max(1024))
  .refine((val) => Object.keys(val).length <= 32)
  .openapi({
    description:
      "Customer metadata of the secret. Always present, empty when unset. At most 32 entries; keys are limited to 128 bytes, values to 1024 bytes, and a secret's metadata to 8192 bytes in total.\n",
  })
  .openapi('SecretMetadata')

const SecretSchema = z
  .object({
    secretID: z.string().openapi({ description: 'Identifier of the secret' }),
    name: z.string().openapi({ description: 'Name of the secret, unique within the project' }),
    currentVersion: z
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
        description: 'Version served to readers that do not name one',
      }),
    metadata: SecretMetadataSchema,
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the secret was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the secret was last updated' }),
  })
  .openapi({
    description: 'Metadata of a secret. It never carries the secret value.',
    required: ['secretID', 'name', 'currentVersion', 'metadata', 'createdAt', 'updatedAt'],
  })
  .openapi('Secret')

const NewSecretSchema = z
  .object({
    name: z
      .string()
      .regex(/^[a-zA-Z0-9_-]+$/)
      .min(1)
      .max(128)
      .openapi({
        description:
          'Name of the secret, unique within the project. Names are lower-cased before storage and returned in that canonical form; the sec_ prefix is reserved for secret identifiers.\n',
      }),
    value: z
      .string()
      .openapi({
        description:
          "Runtime marker stored as the secret's first version. The runtime resolves it to a value at sandbox egress.",
      }),
    metadata: SecretMetadataSchema.exactOptional(),
  })
  .openapi({ required: ['name', 'value'] })
  .openapi('NewSecret')

const SecretUpdateSchema = z
  .object({
    value: z
      .string()
      .openapi({
        description:
          "Runtime marker stored as the secret's new version. The runtime resolves it to a value at sandbox egress.",
      }),
    metadata: SecretMetadataSchema.exactOptional(),
  })
  .openapi({ required: ['value'] })
  .openapi('SecretUpdate')

const SandboxEventSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Event unique identifier' }),
    version: z.string().openapi({ description: 'Event structure version' }),
    type: z.string().openapi({ description: 'Event name' }),
    eventCategory: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: "Category of the event (e.g., 'lifecycle', 'process', etc.)",
      }),
    eventLabel: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "Label for the specific event type (e.g., 'sandbox_started', 'process_oom', etc.)",
      }),
    eventData: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional JSON data associated with the event' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ description: 'Timestamp of the event' }),
    sandboxId: z.string().openapi({ description: 'Unique identifier for the sandbox' }),
    sandboxExecutionId: z
      .string()
      .openapi({ description: 'Unique identifier for the sandbox execution' }),
    sandboxTemplateId: z
      .string()
      .openapi({ description: 'Unique identifier for the sandbox template' }),
    sandboxBuildId: z.string().openapi({ description: 'Unique identifier for the sandbox build' }),
    sandboxTeamId: z.uuid().openapi({ description: 'Team identifier associated with the sandbox' }),
  })
  .openapi({
    description: 'Sandbox event',
    required: [
      'id',
      'version',
      'type',
      'timestamp',
      'sandboxId',
      'sandboxExecutionId',
      'sandboxTemplateId',
      'sandboxBuildId',
      'sandboxTeamId',
    ],
  })
  .openapi('SandboxEvent')

const WebhookCreateSchema = z
  .object({
    name: z.string(),
    url: z.url(),
    events: z.array(z.string()),
    enabled: z.boolean().default(true).exactOptional(),
    signatureSecret: z
      .string()
      .openapi({ description: 'Secret used to sign the webhook payloads' }),
  })
  .openapi({
    description: 'Configuration for registering new webhooks',
    required: ['name', 'url', 'events', 'signatureSecret'],
  })
  .openapi('WebhookCreate')

const WebhookCreationSchema = z
  .object({
    id: z.string().openapi({ description: 'Webhook unique identifier' }),
    name: z.string().openapi({ description: 'Webhook user friendly name' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the template was created' }),
    teamId: z.string().openapi({ description: 'Unique identifier for the team' }),
    url: z.url(),
    enabled: z.boolean(),
    events: z.array(z.string()),
  })
  .openapi({
    description: 'Webhook creation response',
    required: ['id', 'name', 'createdAt', 'teamId', 'url', 'enabled', 'events'],
  })
  .openapi('WebhookCreation')

const WebhookDetailSchema = z
  .object({
    id: z.string().openapi({ description: 'Webhook unique identifier' }),
    teamId: z.string().openapi({ description: 'Unique identifier for the team' }),
    name: z.string().openapi({ description: 'Webhook user friendly name' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the template was created' }),
    url: z.url(),
    enabled: z.boolean(),
    events: z.array(z.string()),
  })
  .openapi({
    description: 'Webhook detail response',
    required: ['id', 'teamId', 'name', 'createdAt', 'url', 'enabled', 'events'],
  })
  .openapi('WebhookDetail')

const WebhookConfigurationSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Webhook user friendly name' }),
    url: z.url().exactOptional(),
    events: z.array(z.string()).exactOptional(),
    signatureSecret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Secret used to sign the webhook payloads' }),
  })
  .openapi({ description: 'Configuration for updating existing webhooks', required: [] })
  .openapi('WebhookConfiguration')

const WebhookDeliverySchema = z
  .object({
    id: z.uuid().openapi({ description: 'Delivery attempt identifier' }),
    teamId: z.uuid().openapi({ description: 'Team identifier' }),
    webhookId: z.uuid().openapi({ description: 'Webhook configuration identifier' }),
    eventId: z.uuid().openapi({ description: 'Sandbox event identifier' }),
    sandboxId: z.string().openapi({ description: 'Sandbox identifier' }),
    eventType: z.string().openapi({ description: 'Sandbox event type' }),
    status: z.enum(['success', 'failed']).openapi({ description: 'Delivery attempt status' }),
    durationMs: z.int32().openapi({ description: 'Delivery request duration in milliseconds' }),
    requestBody: z.string().openapi({ description: 'Serialized webhook request body' }),
    requestHeaders: z
      .string()
      .openapi({ description: 'JSON-encoded request headers with sensitive values redacted' }),
    requestUrl: z.url().openapi({ description: 'URL attempted for this delivery' }),
    responseBody: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Truncated response body, if a response was received' }),
    responseHeaders: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'JSON-encoded response headers, if a response was received' }),
    responseHttpStatusCode: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'HTTP response status code, if a response was received' }),
    errorClass: z
      .enum([
        'http_error',
        'dns_error',
        'timeout',
        'transport_error',
        'request_error',
        'signature_error',
        'canceled',
      ])
      .nullable()
      .openapi({ description: 'Machine-readable non-HTTP or HTTP failure class' }),
    errorMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Error message for failures without a useful response body' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the delivery attempt started' }),
  })
  .openapi({
    description: 'Webhook delivery attempt',
    required: [
      'id',
      'teamId',
      'webhookId',
      'eventId',
      'sandboxId',
      'eventType',
      'status',
      'durationMs',
      'requestBody',
      'requestHeaders',
      'requestUrl',
      'errorClass',
      'timestamp',
    ],
  })
  .openapi('WebhookDelivery')

const WebhookDeliveryDurationStatsSchema = z
  .object({ minimum: z.float64(), average: z.float64(), maximum: z.float64() })
  .openapi({
    description: 'Webhook delivery duration statistics in milliseconds',
    required: ['minimum', 'average', 'maximum'],
  })
  .openapi('WebhookDeliveryDurationStats')

const WebhookDeliveryStatsBucketSchema = z
  .object({
    timestamp: z.iso.datetime({ offset: true }),
    total: z
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
    failed: z
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
    durationMs: WebhookDeliveryDurationStatsSchema,
  })
  .openapi({
    description: 'Webhook delivery stats for a time bucket',
    required: ['timestamp', 'total', 'failed', 'durationMs'],
  })
  .openapi('WebhookDeliveryStatsBucket')

const WebhookDeliveryStatsSchema = z
  .object({
    buckets: z.array(WebhookDeliveryStatsBucketSchema),
    total: z
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
    failed: z
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
    durationMs: WebhookDeliveryDurationStatsSchema,
  })
  .openapi({
    description: 'Webhook delivery aggregate stats',
    required: ['buckets', 'total', 'failed', 'durationMs'],
  })
  .openapi('WebhookDeliveryStats')

const WebhookDeliveryGroupSchema = z
  .object({
    eventId: z.uuid(),
    eventType: z.string(),
    sandboxId: z.string(),
    attempts: z.array(WebhookDeliverySchema),
  })
  .openapi({
    description: 'Webhook delivery attempts grouped by sandbox event',
    required: ['eventId', 'eventType', 'sandboxId', 'attempts'],
  })
  .openapi('WebhookDeliveryGroup')

const WebhookDeliveriesListPayloadSchema = z
  .object({
    data: z.array(WebhookDeliveryGroupSchema),
    nextCursor: z
      .string()
      .nullable()
      .openapi({
        description: 'Cursor to pass to the next list request, or null when there is no next page.',
      }),
  })
  .openapi({
    description: 'Paginated webhook delivery attempts grouped by event',
    required: ['data', 'nextCursor'],
  })
  .openapi('WebhookDeliveriesListPayload')

const ManagementClusterRegistrationRequestSchema = z
  .object({
    name: z.string().min(1),
    endpoint: z.string().min(1),
    endpoint_tls: z.boolean(),
    token: z.string().min(1),
    sandbox_proxy_domain: z.string().nullable().exactOptional(),
    auth_org_id: z.string().nullable().exactOptional(),
    telemetry_client_id: z.string().min(1).exactOptional(),
  })
  .openapi({ required: ['name', 'endpoint', 'endpoint_tls', 'token'] })
  .openapi('ManagementClusterRegistrationRequest')

const ManagementClusterProjectsSchema = z
  .object({ project_ids: z.array(z.uuid()) })
  .openapi({ required: ['project_ids'] })
  .openapi('ManagementClusterProjects')

const SandboxSettingsSchema = z
  .object({
    defaultAllowPublicTraffic: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether new sandboxes without an explicit network.allowPublicTraffic accept traffic without a traffic access token. Omission uses the public default. Existing sandboxes, resumes and forks keep their settings.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SandboxSettings')

const ProjectSettingsSchema = z
  .object({ sandboxSettings: SandboxSettingsSchema })
  .openapi({
    description: "The project's stored settings. PUT replaces the complete document.",
    required: ['sandboxSettings'],
  })
  .openapi('ProjectSettings')

const ManagementProjectSettingsRequestSchema = z
  .object({
    revision: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description:
          'Monotonic per-project revision. Older or duplicate revisions succeed without changing stored state.',
      }),
    settings: ProjectSettingsSchema,
  })
  .openapi({ required: ['revision', 'settings'] })
  .openapi('ManagementProjectSettingsRequest')

const ManagementProjectUpsertRequestSchema = z
  .object({
    cluster_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Cluster assignment to synchronize. Omission preserves the existing assignment.',
      }),
    name: z.string().min(1).max(255),
    slug: z
      .string()
      .min(1)
      .max(63)
      .openapi({
        description:
          'Changing it renames the project, and its template names follow: each name held under an earlier slug is also given under the new one, and the old names keep working. A name the new slug already holds is left as it is. A slug already held on this control plane is a 409, on a rename as much as on a create.',
      }),
    email: z
      .string()
      .min(1)
      .max(255)
      .openapi({ description: 'Contact address recorded on the project.' }),
  })
  .openapi({
    description:
      "The properties of a project this side stores. Name, slug and email are synchronized on every push. The optional cluster assignment is preserved when omitted.\n\nA project's tier is not among them, and this side assigns none. Limits arrive separately and in full through managementUpsertProjectLimits.",
    required: ['name', 'slug', 'email'],
  })
  .openapi('ManagementProjectUpsertRequest')

const ManagementProjectSchema = ManagementProjectUpsertRequestSchema.and(
  z.object({ id: z.uuid() }).openapi({ required: ['id'] }),
).openapi('ManagementProject')

const ManagementProjectMemberIdentitySchema = z
  .object({ issuer: z.string().min(1).max(2048), subject: z.string().min(1).max(2048) })
  .openapi({ required: ['issuer', 'subject'] })
  .openapi('ManagementProjectMemberIdentity')

const ManagementProjectMemberApplyRequestSchema = z
  .object({
    revision: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 1 }),
    present: z.boolean(),
    is_default: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Whether this membership is the user's default team. Omitted requests from older sources remain non-default.",
      }),
    role: z
      .enum(['owner', 'member', 'viewer'])
      .exactOptional()
      .openapi({
        description:
          "The member's effective role on the project. A viewer may only read. An omitted role keeps the stored one, and a new member without one is stored as member.",
      }),
    identities: z.array(ManagementProjectMemberIdentitySchema).max(16).exactOptional(),
  })
  .openapi({ required: ['revision', 'present'] })
  .openapi('ManagementProjectMemberApplyRequest')

const ManagementDecidedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'When the caller decided this revision, in RFC 3339. Stored with the revision and used to measure how long the decision took to apply here. Omit it when the caller does not know; the delivery is then counted as origin unknown rather than as zero lag.',
  })
  .openapi('ManagementDecidedAt')

const ManagementProjectBlockRequestSchema = z
  .object({
    revision: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description:
          'Monotonic per-project revision. Older or duplicate revisions succeed without changing stored state.',
      }),
    blocked: z.boolean().openapi({ description: 'Whether the project is refused billable work.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reason included in blocked-request errors. Cleared when blocked is false.',
      }),
    decided_at: ManagementDecidedAtSchema.exactOptional(),
  })
  .openapi({
    description:
      'Desired project block state. A newer revision replaces the state, including any intervening manual block or unblock.',
    required: ['revision', 'blocked'],
  })
  .openapi('ManagementProjectBlockRequest')

const ManagementProjectBanRequestSchema = z
  .object({
    revision: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description:
          'Monotonic per-project revision. Older or duplicate revisions succeed without changing stored state.',
      }),
    banned: z
      .boolean()
      .openapi({ description: 'Whether the project is refused at authentication.' }),
    decided_at: ManagementDecidedAtSchema.exactOptional(),
  })
  .openapi({
    description:
      'Desired project ban state. A newer revision replaces the state, including any intervening manual ban or unban.',
    required: ['revision', 'banned'],
  })
  .openapi('ManagementProjectBanRequest')

const ManagementProjectLimitsSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'max_free_disk_size_mb')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['max_free_disk_size_mb'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'max_disk_size_mb')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['max_disk_size_mb'] }),
  ])
  .and(
    z
      .object({
        revision: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            description:
              "The caller's version of this answer, raised whenever the limits it resolved for the project change. Delivery is over a network, so two pushes can be in flight at once and arrive in either order: this side stores the revision it accepted and drops a delivery at or below it, which is what keeps a delayed retry from putting the project back on limits it has already left.\n\nComparable only against earlier revisions for the same project.",
          }),
        concurrent_sandboxes: z.int32().min(1),
        max_sandbox_length_hours: z.int32().min(1),
        max_vcpu: z.int32().min(1),
        max_ram_mb: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n),
          )
          .openapi({ type: 'integer', format: 'int64', minimum: 1 }),
        disk_mb: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n),
          )
          .openapi({ type: 'integer', format: 'int64', minimum: 1 }),
        concurrent_template_builds: z.int32().min(1),
        events_ttl_days: z.int32().min(1),
        default_free_disk_size_mb: z
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
            description:
              'The default free-space growth target when a template build request omits one. May sit anywhere at or below the maximum free-space growth target, and usually sits well below it; a delivery whose default exceeds the maximum is rejected.',
          }),
        max_free_disk_size_mb: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            description: 'The most a template build may request as its free-space growth target.',
          }),
        max_disk_size_mb: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            description:
              'The same ceiling as max_free_disk_size_mb, under the name it was first published with. Kept until every deployed sender and receiver speaks the other name.',
          }),
        api_team_rps_list: z
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
            description:
              'Requests per second a project may make to each list endpoint. Zero disables the limit.',
          }),
        api_team_rps_delete: z
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
            description:
              'Requests per second a project may make to each delete endpoint. Zero disables the limit.',
          }),
        max_secrets: z
          .int32()
          .min(1)
          .openapi({ description: 'Live secrets the project may hold.' }),
        decided_at: ManagementDecidedAtSchema.exactOptional(),
      })
      .openapi({
        required: [
          'revision',
          'concurrent_sandboxes',
          'max_sandbox_length_hours',
          'max_vcpu',
          'max_ram_mb',
          'disk_mb',
          'concurrent_template_builds',
          'events_ttl_days',
          'default_free_disk_size_mb',
          'api_team_rps_list',
          'api_team_rps_delete',
          'max_secrets',
        ],
      }),
  )
  .openapi({
    description:
      "A project's effective limits, already resolved by the caller. Every field is absolute: this side stores what it is given and performs no arithmetic of its own.\n\nThe minimums below are the contract for what a limit may be, at least as strict as the CHECK constraints on default_limits. project_limits stores the same values under looser constraints on purpose — it is a push target, and a floor that only rejects the impossible keeps a future decision about what is allowed a change to this schema rather than a migration.\n\n`max_disk_size_mb` and `max_free_disk_size_mb` are one ceiling under two names, and either name alone carries it. A caller that sends both must send them equal; a caller that sends neither is refused. Sending both is what a caller does while receivers older than the second name are still running.",
    required: [
      'revision',
      'concurrent_sandboxes',
      'max_sandbox_length_hours',
      'max_vcpu',
      'max_ram_mb',
      'disk_mb',
      'concurrent_template_builds',
      'events_ttl_days',
      'default_free_disk_size_mb',
      'api_team_rps_list',
      'api_team_rps_delete',
      'max_secrets',
    ],
  })
  .openapi('ManagementProjectLimits')

const _400Response = {
  description: 'Bad request',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _401Response = {
  description: 'Authentication error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _403Response = {
  description: 'Forbidden',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _404Response = {
  description: 'Not found',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _409Response = {
  description: 'Conflict',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _429Response = {
  description: 'Too many requests',
  content: { 'application/json': { schema: ErrorSchema } },
  headers: z.object({
    'Retry-After': z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description: 'When present, the number of seconds to wait before retrying the request.',
        example: 30,
        param: { required: false },
      }),
  }),
}

const _500Response = {
  description: 'Server error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _501Response = {
  description: 'Not implemented by this deployment',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _502Response = {
  description: 'Backend error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _503Response = {
  description: 'Service unavailable',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _504Response = {
  description: 'Backend timeout',
  content: { 'application/json': { schema: ErrorSchema } },
}

const ClusterIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'clusterID',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
      description: 'Identifier of the cluster',
    },
  })

const RigIDParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'rigID',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      description: 'Rig identifier (e.g. "default")',
    },
  })

const TemplateIDParamsSchema = z
  .string()
  .openapi({
    param: { name: 'templateID', in: 'path', required: true, schema: { type: 'string' } },
  })

const BuildIDParamsSchema = z
  .string()
  .openapi({ param: { name: 'buildID', in: 'path', required: true, schema: { type: 'string' } } })

const SandboxIDParamsSchema = z
  .string()
  .openapi({ param: { name: 'sandboxID', in: 'path', required: true, schema: { type: 'string' } } })

const TeamIDParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'teamID',
      in: 'path',
      required: true,
      description: 'Identifier of the team, as its UUID or its public project ID (prj_)',
      schema: { type: 'string' },
    },
  })

const NodeIDParamsSchema = z
  .string()
  .openapi({ param: { name: 'nodeID', in: 'path', required: true, schema: { type: 'string' } } })

const ApiKeyIDParamsSchema = z
  .string()
  .openapi({ param: { name: 'apiKeyID', in: 'path', required: true, schema: { type: 'string' } } })

const AliasIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'aliasID',
      in: 'path',
      required: true,
      description: 'Identifier of the alias',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const SnapshotIDParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'snapshotID',
      in: 'path',
      required: true,
      schema: { type: 'string', description: 'Identifier of the snapshot (template ID)' },
    },
    description: 'Identifier of the snapshot (template ID)',
  })

const TagParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'tag',
      in: 'path',
      required: true,
      schema: { type: 'string', description: 'Tag name' },
    },
    description: 'Tag name',
  })

const TagQueryParamsSchema = z
  .string()
  .min(1)
  .openapi({
    param: {
      name: 'tag',
      in: 'query',
      required: true,
      description: 'Template tag name to check.',
      schema: { type: 'string', minLength: 1 },
    },
  })

const TagAssignmentLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(25),
  )
  .default(6)
  .exactOptional()
  .openapi({
    param: {
      name: 'assignmentLimit',
      in: 'query',
      required: false,
      description: 'Maximum number of ready assignment rows to return per tag.',
      schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 25, default: 6 },
    },
  })

const TagGroupsLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(100),
  )
  .default(25)
  .exactOptional()
  .openapi({
    param: {
      name: 'tagsLimit',
      in: 'query',
      required: false,
      description: 'Maximum number of distinct tags to return per page.',
      schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 25 },
    },
  })

const TagGroupsCursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'tagsCursor',
      in: 'query',
      required: false,
      description:
        'Cursor returned by the previous list response in `{sort}|{latest_assigned_at}|{tag}` format (sort-tagged, RFC3339Nano).',
      schema: { type: 'string' },
    },
  })

const TagGroupsSearchParamsSchema = z
  .string()
  .regex(/^[a-z0-9._-]*$/)
  .max(64)
  .exactOptional()
  .openapi({
    param: {
      name: 'search',
      in: 'query',
      required: false,
      description:
        'Substring filter on tag name. Allowed characters are `a-z`, `0-9`, `.`, `_`, `-`.',
      schema: { type: 'string', maxLength: 64, pattern: '^[a-z0-9._-]*$' },
    },
  })

const TagGroupsSortParamsSchema = z
  .enum(['latest_desc', 'latest_asc', 'name_asc', 'name_desc'])
  .default('latest_desc')
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      required: false,
      description: 'Sort order for the returned tag groups.',
      schema: {
        type: 'string',
        enum: ['latest_desc', 'latest_asc', 'name_asc', 'name_desc'],
        default: 'latest_desc',
      },
    },
  })

const TagAssignmentsLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(100),
  )
  .default(50)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      required: false,
      description: 'Maximum number of assignment rows to return per page.',
      schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 50 },
    },
  })

const TagAssignmentsCursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'cursor',
      in: 'query',
      required: false,
      description:
        'Cursor returned by the previous list response in `assigned_at|assignment_id` format.',
      schema: { type: 'string' },
    },
  })

const PaginationLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(100),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      description: 'Maximum number of items to return per page',
      required: false,
      schema: { type: 'integer', format: 'int32', minimum: 1, default: 100, maximum: 100 },
    },
  })

const PaginationNextTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'nextToken',
      in: 'query',
      description: 'Cursor to start the list from',
      required: false,
      schema: { type: 'string' },
    },
  })

const TemplatesSearchParamsSchema = z
  .string()
  .max(256)
  .exactOptional()
  .openapi({
    param: {
      name: 'search',
      in: 'query',
      required: false,
      description:
        'Case-insensitive substring match on the template ID, its aliases and its names.',
      schema: { type: 'string', maxLength: 256 },
    },
  })

const TemplatesSortParamsSchema = z
  .enum(['created_at_desc', 'created_at_asc', 'updated_at_desc', 'updated_at_asc'])
  .default('created_at_desc')
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      required: false,
      description: 'Sort column and direction.',
      schema: {
        type: 'string',
        enum: ['created_at_desc', 'created_at_asc', 'updated_at_desc', 'updated_at_asc'],
        default: 'created_at_desc',
      },
    },
  })

const TemplatesPublicParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'public',
      in: 'query',
      required: false,
      description: 'Only list public (true) or only non-public (false) templates.',
      schema: { type: 'boolean' },
    },
  })

const TemplatesCursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'cursor',
      in: 'query',
      required: false,
      description:
        'Cursor returned by the previous page in `{sort}|{value}|{templateID}` format. Rejected if its sort does not match the request.\n',
      schema: { type: 'string' },
    },
  })

const TemplatesLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(100),
  )
  .default(50)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      required: false,
      description: 'Maximum number of templates to return per page.',
      schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 50 },
    },
  })

const BuildIDOrTemplateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'build_id_or_template',
      in: 'query',
      required: false,
      description: 'Optional filter by build identifier, template identifier, or template alias.',
      schema: { type: 'string' },
    },
  })

const BuildStatusesParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(BuildStatusSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'statuses',
      in: 'query',
      required: false,
      description: 'Comma-separated list of build statuses to include.',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { $ref: '#/components/schemas/BuildStatus' } },
    },
  })

const TemplateBuildStatusesParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(TemplateBuildStatusSchema).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'statuses',
      in: 'query',
      required: false,
      description: 'Comma-separated list of build statuses to include. Every status when omitted.',
      style: 'form',
      explode: false,
      schema: {
        type: 'array',
        uniqueItems: true,
        items: { $ref: '#/components/schemas/TemplateBuildStatus' },
      },
    },
  })

const TemplateBuildTagsParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()).max(100),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'tags',
      in: 'query',
      required: false,
      description:
        'Comma-separated list of tags. Only the builds these tags point at are returned. Every build when omitted.',
      style: 'form',
      explode: false,
      schema: { type: 'array', maxItems: 100, items: { type: 'string' } },
    },
  })

const BuildsCursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'cursor',
      in: 'query',
      required: false,
      description: 'Cursor returned by the previous list response in `created_at|build_id` format.',
      schema: { type: 'string' },
    },
  })

const BuildsLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(100),
  )
  .default(50)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      required: false,
      description: 'Maximum number of builds to return per page.',
      schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 50 },
    },
  })

const BuildIDsParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.uuid()).max(100),
  )
  .openapi({
    param: {
      name: 'build_ids',
      in: 'query',
      required: true,
      description: 'Comma-separated list of build IDs to get statuses for.',
      style: 'form',
      explode: false,
      schema: { type: 'array', maxItems: 100, items: { type: 'string', format: 'uuid' } },
    },
  })

const VolumeIDParamsSchema = z
  .string()
  .openapi({ param: { name: 'volumeID', in: 'path', required: true, schema: { type: 'string' } } })

const SecretIDParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'secretID',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
        description: 'Identifier of the secret (sec_ prefixed), or its canonical lower-case name\n',
      },
    },
    description: 'Identifier of the secret (sec_ prefixed), or its canonical lower-case name\n',
  })

const WebhookIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'webhookID',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const IdempotencyKeyParamsSchema = z
  .string()
  .regex(/^[a-z0-9-]+$/)
  .min(1)
  .max(255)
  .exactOptional()
  .openapi({
    param: {
      name: 'Idempotency-Key',
      in: 'header',
      required: false,
      description:
        "Optional team-scoped key for retrying the request. Use 1 to 255 lowercase ASCII letters,\ndigits, or hyphens (a-z, 0-9, -), such as a lowercase UUID. The HTTP method, path, query,\nand request content identify the request. When idempotency is enabled, a matching retry of\na completed request replays its status and body, including the IDs of any resources it\ncreated, without repeating the operation. A failure explicitly classified as safe to retry\n(Should-Retry: true) permits a fresh attempt with the same key and request. Only one\nattempt can run at a time. A different request returns 409 with error_code\nidempotency_request_mismatch. A matching request whose original has no recorded response\nyet and is within its expected response window returns 409 with error_code\nidempotency_in_progress. A matching request whose original has no recorded response and\nwhose expected response deadline has passed or is unknown returns 422 with error_code\nidempotency_outcome_unknown. These conflicts and unknown outcomes do not execute the\nrequest again. If the key's record is unavailable or idempotency is misconfigured, the\nrequest returns 503; Should-Retry tells whether to retry with the same key. After the\nretention period expires, the key can start a new operation.\n",
      schema: { type: 'string', minLength: 1, maxLength: 255, pattern: '^[a-z0-9-]+$' },
    },
  })

const ShouldRetryHeaderSchema = z
  .boolean()
  .exactOptional()
  .openapi({ param: { required: false } })

const XNextTokenHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description: 'Cursor to fetch the next page of results, if more exist',
    param: { required: false },
  })

const XTotalRunningHeaderSchema = z
  .int32()
  .exactOptional()
  .openapi({
    description:
      'Number of running sandboxes matching the filters, before pagination is applied. Only present when running sandboxes were requested.\n',
    param: { required: false },
  })

const ApiKeyAuthSecurityScheme = { type: 'apiKey', in: 'header', name: 'X-API-Key' }

const AuthProviderBearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'access_token',
}

const AuthProviderTeamAuthSecurityScheme = { type: 'apiKey', in: 'header', name: 'X-Team-ID' }

const AdminApiKeyAuthSecurityScheme = { type: 'apiKey', in: 'header', name: 'X-Admin-Token' }

const AdminJWTAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

const AdminTeamAuthSecurityScheme = { type: 'apiKey', in: 'header', name: 'X-Team-ID' }

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  summary: 'Health check',
  description: 'Health check',
  responses: {
    200: {
      description: 'The service is healthy',
      content: { 'text/plain': { schema: z.string() } },
    },
    401: _401Response,
    429: _429Response,
    503: {
      description: 'The service is starting up or draining',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getTeamsTeamIDMetricsRoute = createRoute({
  method: 'get',
  path: '/teams/{teamID}/metrics',
  tags: ['auth'],
  summary: 'Team metrics',
  description: 'Get metrics for the team',
  request: {
    params: z.object({ teamID: TeamIDParamsSchema }),
    query: z.object({
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { type: 'integer', format: 'int64', minimum: 0 },
            description:
              'Unix timestamp for the start of the interval, in seconds, for which the metrics',
            required: false,
          },
        }),
      end: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end',
            schema: {
              type: 'integer',
              format: 'int64',
              minimum: 0,
              description:
                'Unix timestamp for the end of the interval, in seconds, for which the metrics',
            },
            required: false,
          },
          description:
            'Unix timestamp for the end of the interval, in seconds, for which the metrics',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the team metrics',
      content: { 'application/json': { schema: z.array(TeamMetricSchema) } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTeamsTeamIDMetricsMaxRoute = createRoute({
  method: 'get',
  path: '/teams/{teamID}/metrics/max',
  tags: ['auth'],
  summary: 'Maximum team metrics',
  description: 'Get the maximum metrics for the team in the given interval',
  request: {
    params: z.object({ teamID: TeamIDParamsSchema }),
    query: z.object({
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { type: 'integer', format: 'int64', minimum: 0 },
            description:
              'Unix timestamp for the start of the interval, in seconds, for which the metrics',
            required: false,
          },
        }),
      end: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end',
            schema: {
              type: 'integer',
              format: 'int64',
              minimum: 0,
              description:
                'Unix timestamp for the end of the interval, in seconds, for which the metrics',
            },
            required: false,
          },
          description:
            'Unix timestamp for the end of the interval, in seconds, for which the metrics',
        }),
      metric: z
        .enum(['concurrent_sandboxes', 'sandbox_start_rate'])
        .openapi({
          param: {
            in: 'query',
            name: 'metric',
            required: true,
            schema: { type: 'string', enum: ['concurrent_sandboxes', 'sandbox_start_rate'] },
            description: 'Metric to retrieve the maximum value for',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the team metrics',
      content: { 'application/json': { schema: MaxTeamMetricSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getUnstableTeamsTeamIDStatusRoute = createRoute({
  method: 'get',
  path: '/unstable/teams/{teamID}/status',
  tags: ['auth'],
  summary: 'Team access status',
  description:
    'Returns whether the team is banned or blocked, and why it is blocked. A team-authenticated request may read only its own team.',
  request: { params: z.object({ teamID: TeamIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the team access status',
      content: { 'application/json': { schema: TeamStatusResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [] },
    { AdminJWTAuth: [] },
  ],
})

export const getUnstableTeamsTeamIDLimitsRoute = createRoute({
  method: 'get',
  path: '/unstable/teams/{teamID}/limits',
  tags: ['auth'],
  summary: 'Team limits',
  description:
    "Returns the team's effective resource limits. A team-authenticated request may read only its own team.",
  request: { params: z.object({ teamID: TeamIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the team limits',
      content: { 'application/json': { schema: TeamLimitsResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [] },
    { AdminJWTAuth: [] },
  ],
})

export const getSandboxesRoute = createRoute({
  method: 'get',
  path: '/sandboxes',
  tags: ['sandboxes'],
  summary: 'List running sandboxes',
  description:
    'List all running sandboxes. Returns 400 when more than 5000 running sandboxes match; use GET /v2/sandboxes to page through them.',
  request: {
    query: z.object({
      metadata: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'metadata',
            in: 'query',
            description:
              'Metadata query used to filter the sandboxes (e.g. "user=abc&app=prod"). Each key and values must be URL encoded.',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned all running sandboxes',
      content: { 'application/json': { schema: z.array(ListedSandboxSchema) } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  deprecated: true,
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postSandboxesRoute = createRoute({
  method: 'post',
  path: '/sandboxes',
  tags: ['sandboxes'],
  summary: 'Create sandbox',
  description:
    'Create a sandbox from the template. All system communication with the sandbox is secured. Use POST /v2/sandboxes instead.',
  request: {
    body: { content: { 'application/json': { schema: NewSandboxSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The sandbox was created successfully',
      content: { 'application/json': { schema: SandboxSchema } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
    504: _504Response,
  },
  deprecated: true,
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getV2SandboxesRoute = createRoute({
  method: 'get',
  path: '/v2/sandboxes',
  tags: ['sandboxes'],
  summary: 'List sandboxes (v2)',
  description: 'List all sandboxes',
  request: {
    query: z.object({
      metadata: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'metadata',
            in: 'query',
            description:
              'Metadata query used to filter the sandboxes (e.g. "user=abc&app=prod"). Each key and values must be URL encoded.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(SandboxStateSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description: 'Filter sandboxes by one or more states',
            required: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/SandboxState' } },
            style: 'form',
            explode: false,
          },
        }),
      order: OrderDirectionSchema.openapi({
        param: {
          name: 'order',
          in: 'query',
          description: 'Sort direction by sandbox start time. Defaults to desc (newest first).',
          required: false,
          schema: { $ref: '#/components/schemas/OrderDirection' },
        },
      }).exactOptional(),
      startedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startedAfter',
            in: 'query',
            description: 'Return sandboxes started at or after this timestamp.',
            required: false,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      template: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'template',
            in: 'query',
            description: 'Filter sandboxes by a template ID or alias.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      nextToken: PaginationNextTokenParamsSchema,
      limit: PaginationLimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned all running sandboxes',
      content: { 'application/json': { schema: z.array(ListedSandboxSchema) } },
      headers: z.object({
        'X-Next-Token': XNextTokenHeaderSchema,
        'X-Total-Running': XTotalRunningHeaderSchema,
      }),
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postV2SandboxesRoute = createRoute({
  method: 'post',
  path: '/v2/sandboxes',
  tags: ['sandboxes'],
  summary: 'Create sandbox (v2)',
  description:
    'Create a sandbox from the template. All system communication with the sandbox is secured.',
  request: {
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .regex(/^[a-z0-9-]+$/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'Idempotency-Key',
            in: 'header',
            required: false,
            description:
              "Optional team-scoped key for retrying sandbox creation. Use 1 to 255 lowercase ASCII\nletters, digits, or hyphens (a-z, 0-9, -), such as a lowercase UUID. When idempotency is enabled,\nmatching retries replay a completed status and body for the retention period. A creation\nfailure explicitly classified as safe to retry (Should-Retry: true) permits a fresh\nattempt with the same key and parameters. Only one attempt can run at a time.\nDifferent request parameters return 409 with error_code idempotency_request_mismatch.\nAn in-progress request returns 409 with error_code idempotency_in_progress; an unknown\noutcome returns 422 with error_code idempotency_outcome_unknown. These retries do not execute the request again.\nRetries do not extend retention. If a fresh attempt's request deadline plus response\npersistence budget would exceed the remaining retention, the previous error is replayed.\nAfter the key expires, it can start a new creation.\n",
            schema: { type: 'string', minLength: 1, maxLength: 255, pattern: '^[a-z0-9-]+$' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NewSandboxV2Schema } }, required: true },
  },
  responses: {
    201: {
      description: 'The sandbox was created successfully',
      content: { 'application/json': { schema: SandboxSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    401: _401Response,
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    409: {
      description:
        'The Idempotency-Key conflicts with a different request (error_code idempotency_request_mismatch), or the matching original request has no recorded response yet and is within its expected response window (error_code idempotency_in_progress); this request was not executed again',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    422: {
      description:
        'The matching original request has no recorded response and its expected response deadline has passed or is unknown (error_code idempotency_outcome_unknown); this request was not executed again',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': ShouldRetryHeaderSchema,
        'Retry-After': z
          .int()
          .min(0)
          .exactOptional()
          .openapi({
            description: 'When present, the number of seconds to wait before retrying the request.',
            example: 30,
            param: { required: false },
          }),
      }),
    },
    500: {
      description: 'Server error',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    503: {
      description: 'Service unavailable',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    504: {
      description: 'Backend timeout',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getSandboxesMetricsRoute = createRoute({
  method: 'get',
  path: '/sandboxes/metrics',
  tags: ['sandboxes'],
  summary: 'List sandbox metrics',
  description: 'List metrics for given sandboxes',
  request: {
    query: z.object({
      sandbox_ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(z.string())
            .max(100)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .openapi({
          param: {
            name: 'sandbox_ids',
            in: 'query',
            required: true,
            description: 'Comma-separated list of sandbox IDs to get metrics for',
            explode: false,
            schema: { type: 'array', items: { type: 'string' }, maxItems: 100, uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned all running sandboxes with metrics',
      content: { 'application/json': { schema: SandboxesWithMetricsSchema } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getSandboxesSandboxIDLogsRoute = createRoute({
  method: 'get',
  path: '/sandboxes/{sandboxID}/logs',
  tags: ['sandboxes'],
  summary: 'Sandbox logs',
  description: 'Get sandbox logs. Use /v2/sandboxes/{sandboxID}/logs instead.',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    query: z.object({
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { type: 'integer', format: 'int64', minimum: 0 },
            description: 'Starting timestamp of the logs that should be returned in milliseconds',
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
          z.int32().min(0),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 1000, format: 'int32', minimum: 0, type: 'integer' },
            description: 'Maximum number of logs that should be returned',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the sandbox logs',
      content: { 'application/json': { schema: SandboxLogsSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  deprecated: true,
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getV2SandboxesSandboxIDLogsRoute = createRoute({
  method: 'get',
  path: '/v2/sandboxes/{sandboxID}/logs',
  tags: ['sandboxes'],
  summary: 'Sandbox logs (v2)',
  description: 'Get sandbox logs',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    query: z.object({
      cursor: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { type: 'integer', format: 'int64', minimum: 0 },
            description: 'Starting timestamp of the logs that should be returned in milliseconds',
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
          z.int32().min(0).max(1000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 1000, type: 'integer', format: 'int32', minimum: 0, maximum: 1000 },
            description: 'Maximum number of logs that should be returned',
            required: false,
          },
        }),
      direction: LogsDirectionSchema.openapi({
        param: {
          in: 'query',
          name: 'direction',
          schema: { $ref: '#/components/schemas/LogsDirection' },
          description: 'Direction of the logs that should be returned',
          required: false,
        },
      }).exactOptional(),
      level: LogLevelSchema.openapi({
        param: {
          in: 'query',
          name: 'level',
          schema: { $ref: '#/components/schemas/LogLevel' },
          description: 'Minimum log level to return. Logs below this level are excluded',
          required: false,
        },
      }).exactOptional(),
      search: z
        .string()
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'string', maxLength: 256 },
            description: 'Case-sensitive substring match on log message content',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the sandbox logs',
      content: { 'application/json': { schema: SandboxLogsV2ResponseSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getSandboxesSandboxIDRoute = createRoute({
  method: 'get',
  path: '/sandboxes/{sandboxID}',
  tags: ['sandboxes'],
  summary: 'Sandbox',
  description: 'Get a sandbox by id',
  request: { params: z.object({ sandboxID: SandboxIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the sandbox',
      content: { 'application/json': { schema: SandboxDetailSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const deleteSandboxesSandboxIDRoute = createRoute({
  method: 'delete',
  path: '/sandboxes/{sandboxID}',
  tags: ['sandboxes'],
  summary: 'Kill sandbox',
  description: 'Kill a sandbox',
  request: { params: z.object({ sandboxID: SandboxIDParamsSchema }) },
  responses: {
    204: { description: 'The sandbox was killed successfully' },
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getSandboxesSandboxIDMetricsRoute = createRoute({
  method: 'get',
  path: '/sandboxes/{sandboxID}/metrics',
  tags: ['sandboxes'],
  summary: 'Sandbox metrics',
  description: 'Get sandbox metrics',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    query: z.object({
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { type: 'integer', format: 'int64', minimum: 0 },
            description:
              'Unix timestamp for the start of the interval, in seconds, for which the metrics',
            required: false,
          },
        }),
      end: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end',
            schema: {
              type: 'integer',
              format: 'int64',
              minimum: 0,
              description:
                'Unix timestamp for the end of the interval, in seconds, for which the metrics',
            },
            required: false,
          },
          description:
            'Unix timestamp for the end of the interval, in seconds, for which the metrics',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the sandbox metrics',
      content: { 'application/json': { schema: z.array(SandboxMetricSchema) } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getUnstableSandboxesSandboxIDRecordRoute = createRoute({
  method: 'get',
  path: '/unstable/sandboxes/{sandboxID}/record',
  tags: ['sandboxes'],
  summary: 'Sandbox record',
  description:
    "Returns the team's latest recorded run of the sandbox, including runs that have already ended, and whether its monitoring, logs and events data are still retained. Returns 404 when the team has no recorded run of the sandbox.",
  request: { params: z.object({ sandboxID: SandboxIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the sandbox record',
      content: { 'application/json': { schema: SandboxRecordSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] }],
})

export const postSandboxesSandboxIDPauseRoute = createRoute({
  method: 'post',
  path: '/sandboxes/{sandboxID}/pause',
  tags: ['sandboxes'],
  summary: 'Pause sandbox',
  description:
    'Pause the sandbox. Answers 503 and leaves the sandbox running when it cannot be paused right now: its node is busy, it is being snapshotted, or `requireHealthyGuest` was set and the sandbox guest agent is not responding; retry later.',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    body: { content: { 'application/json': { schema: SandboxPauseRequestSchema } } },
  },
  responses: {
    204: { description: 'The sandbox was paused successfully and can be resumed' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postSandboxesSandboxIDResumeRoute = createRoute({
  method: 'post',
  path: '/sandboxes/{sandboxID}/resume',
  tags: ['sandboxes'],
  summary: 'Resume sandbox',
  description:
    'Resume the sandbox. Answers 409 when the sandbox is already running, or when its snapshot was taken while the sandbox guest agent was not responding and a plain resume would restore that memory (error_code sandbox_snapshot_guest_agent_unresponsive); resume such a sandbox without memory (`memory: false`).',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    body: { content: { 'application/json': { schema: ResumedSandboxSchema } } },
  },
  responses: {
    201: {
      description: 'The sandbox was resumed successfully',
      content: { 'application/json': { schema: SandboxSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
    504: _504Response,
  },
  deprecated: true,
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postSandboxesSandboxIDForkRoute = createRoute({
  method: 'post',
  path: '/sandboxes/{sandboxID}/fork',
  tags: ['sandboxes'],
  summary: 'Fork sandbox',
  description:
    'Fork the sandbox: checkpoint the running sandbox in place (it is briefly paused, snapshotted with its full memory state, and resumed on its node, keeping its ID and expiration untouched) and create count new sandboxes from that snapshot. Returns one result per requested fork, each carrying either the created sandbox or the error that prevented it from starting. A non-201 status means the request failed before any fork was attempted.',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    body: { content: { 'application/json': { schema: SandboxForkRequestSchema } } },
  },
  responses: {
    201: {
      description:
        "The sandbox was snapshotted and the forks were attempted; each entry reports one fork's outcome",
      content: { 'application/json': { schema: z.array(SandboxForkResultSchema) } },
    },
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postSandboxesSandboxIDConnectRoute = createRoute({
  method: 'post',
  path: '/sandboxes/{sandboxID}/connect',
  tags: ['sandboxes'],
  summary: 'Connect sandbox',
  description:
    "Returns sandbox details. If the sandbox is paused, it will be resumed. TTL is only extended. Use POST /v2/sandboxes/{sandboxID}/connect instead. Answers 409 with error_code sandbox_snapshot_guest_agent_unresponsive when the paused sandbox's snapshot was taken while its guest agent was not responding and the request did not ask for `memory: false`.",
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    body: { content: { 'application/json': { schema: ConnectSandboxSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The sandbox was already running',
      content: { 'application/json': { schema: SandboxSchema } },
    },
    201: {
      description: 'The sandbox was resumed successfully',
      content: { 'application/json': { schema: SandboxSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
    504: _504Response,
  },
  deprecated: true,
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postV2SandboxesSandboxIDConnectRoute = createRoute({
  method: 'post',
  path: '/v2/sandboxes/{sandboxID}/connect',
  tags: ['sandboxes'],
  summary: 'Connect sandbox (v2)',
  description:
    "Returns sandbox details. If the sandbox is paused, it will be resumed. TTL is only extended. The request body is optional; an omitted timeout defaults to 300 seconds. Answers 409 with error_code sandbox_snapshot_guest_agent_unresponsive when the paused sandbox's snapshot was taken while its guest agent was not responding and the request did not ask for `memory: false`.",
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    body: { content: { 'application/json': { schema: ConnectSandboxV2Schema } } },
  },
  responses: {
    200: {
      description: 'The sandbox was already running',
      content: { 'application/json': { schema: SandboxSchema } },
    },
    201: {
      description: 'The sandbox was resumed successfully',
      content: { 'application/json': { schema: SandboxSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    503: _503Response,
    504: _504Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postSandboxesSandboxIDTimeoutRoute = createRoute({
  method: 'post',
  path: '/sandboxes/{sandboxID}/timeout',
  tags: ['sandboxes'],
  summary: 'Set sandbox timeout',
  description:
    'Set the timeout for the sandbox. The sandbox will expire x seconds from the time of the request. Calling this method multiple times overwrites the TTL, each time using the current timestamp as the starting point to measure the timeout duration.',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    body: { content: { 'application/json': { schema: SandboxTimeoutRequestSchema } } },
  },
  responses: {
    204: { description: 'Successfully set the sandbox timeout' },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const putSandboxesSandboxIDNetworkRoute = createRoute({
  method: 'put',
  path: '/sandboxes/{sandboxID}/network',
  tags: ['sandboxes'],
  summary: 'Update sandbox network',
  description:
    'Update the network configuration for a running sandbox. Replaces the current egress rules with the provided configuration. Omitting field clears it.',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: SandboxNetworkUpdateConfigSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully updated the sandbox network configuration' },
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postSandboxesSandboxIDRefreshesRoute = createRoute({
  method: 'post',
  path: '/sandboxes/{sandboxID}/refreshes',
  tags: ['sandboxes'],
  summary: 'Refresh sandbox',
  description: 'Refresh the sandbox extending its time to live',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    body: { content: { 'application/json': { schema: SandboxRefreshRequestSchema } } },
  },
  responses: {
    204: { description: 'Successfully refreshed the sandbox' },
    401: _401Response,
    404: _404Response,
    429: _429Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postSandboxesSandboxIDSnapshotsRoute = createRoute({
  method: 'post',
  path: '/sandboxes/{sandboxID}/snapshots',
  tags: ['sandboxes'],
  summary: 'Create snapshot',
  description:
    "Create a persistent snapshot from the sandbox's current state. Snapshots can be used to create new sandboxes and persist beyond the original sandbox's lifetime.",
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    body: {
      content: { 'application/json': { schema: SandboxSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Snapshot created successfully',
      content: { 'application/json': { schema: SnapshotInfoSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    401: _401Response,
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    422: {
      description: 'Unprocessable request',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    429: _429Response,
    500: {
      description: 'Server error',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    503: {
      description: 'Service unavailable',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getSnapshotsRoute = createRoute({
  method: 'get',
  path: '/snapshots',
  tags: ['snapshots'],
  summary: 'List snapshots',
  description: 'List all snapshots for the team',
  request: {
    query: z.object({
      sandboxID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sandboxID',
            in: 'query',
            required: false,
            schema: { type: 'string', description: 'Filter snapshots by source sandbox ID' },
          },
          description: 'Filter snapshots by source sandbox ID',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description:
              'Filter snapshots by name or ID, optionally tag-qualified (e.g. "my-snapshot", "my-team/my-snapshot" or "my-snapshot:v1").',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: PaginationLimitParamsSchema,
      nextToken: PaginationNextTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned snapshots',
      content: { 'application/json': { schema: z.array(SnapshotInfoSchema) } },
      headers: z.object({ 'X-Next-Token': XNextTokenHeaderSchema }),
    },
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postV3TemplatesRoute = createRoute({
  method: 'post',
  path: '/v3/templates',
  tags: ['templates'],
  summary: 'Create template (v3)',
  description: 'Create a new template.',
  request: {
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    body: {
      content: { 'application/json': { schema: TemplateBuildRequestV3Schema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'The build was requested successfully',
      content: { 'application/json': { schema: TemplateRequestResponseV3Schema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    401: {
      description: 'Authentication error',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    422: {
      description: 'Unprocessable request',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
        'Retry-After': z
          .int()
          .min(0)
          .exactOptional()
          .openapi({
            description: 'When present, the number of seconds to wait before retrying the request.',
            example: 30,
            param: { required: false },
          }),
      }),
    },
    500: {
      description: 'Server error',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
    503: {
      description: 'Service unavailable',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': z
          .boolean()
          .exactOptional()
          .openapi({ param: { required: false } }),
      }),
    },
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getV2TemplatesRoute = createRoute({
  method: 'get',
  path: '/v2/templates',
  tags: ['templates'],
  summary: 'List templates (v2)',
  description: 'List all templates',
  request: {
    query: z.object({
      teamID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'teamID',
            schema: {
              type: 'string',
              description: 'Identifier of the team, as its UUID or its public project ID (prj_)',
            },
          },
          description: 'Identifier of the team, as its UUID or its public project ID (prj_)',
        }),
      nextToken: PaginationNextTokenParamsSchema,
      limit: PaginationLimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned all templates',
      content: { 'application/json': { schema: z.array(TemplateSchema) } },
      headers: z.object({ 'X-Next-Token': XNextTokenHeaderSchema }),
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDFilesHashRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}/files/{hash}',
  tags: ['templates'],
  summary: 'Template build file upload URL',
  description: 'Get an upload link for a tar file containing build layer files',
  request: {
    params: z.object({
      templateID: TemplateIDParamsSchema,
      hash: z
        .string()
        .regex(/^[0-9a-f]{64}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'hash',
            required: true,
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{64}$',
              description: 'Hash of the files (lowercase hex SHA-256)',
            },
          },
          description: 'Hash of the files (lowercase hex SHA-256)',
        }),
    }),
  },
  responses: {
    201: {
      description: 'The upload link where to upload the tar file',
      content: { 'application/json': { schema: TemplateBuildFileUploadSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesRoute = createRoute({
  method: 'get',
  path: '/templates',
  tags: ['templates'],
  summary: 'List templates',
  description:
    'List all templates. Returns 400 when the team has more than 5000 templates; use /v2/templates to page through them.',
  request: {
    query: z.object({
      teamID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'teamID',
            schema: {
              type: 'string',
              description: 'Identifier of the team, as its UUID or its public project ID (prj_)',
            },
          },
          description: 'Identifier of the team, as its UUID or its public project ID (prj_)',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned all templates',
      content: { 'application/json': { schema: z.array(TemplateSchema) } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  deprecated: true,
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getDefaultTemplatesRoute = createRoute({
  method: 'get',
  path: '/default-templates',
  tags: ['templates'],
  summary: 'List default templates',
  description:
    "Lists the platform's default templates, ordered by template ID. Deleted templates are left out. Templates that are not public are listed only to their own team and to admin callers. The build, resources and envd version are those of the newest ready build tagged `default`, the one a sandbox started from the template runs, and are zero or empty when there is none; `buildStatus` describes the newest build tagged `default` in any state. Usage fields (`spawnCount`, `buildCount`, `lastSpawnedAt`, `createdBy`) are reported only for the caller's own templates and to admin callers.\n",
  responses: {
    200: {
      description: 'Successfully returned the default templates',
      content: { 'application/json': { schema: z.array(TemplateSchema) } },
    },
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [] },
    { AdminApiKeyAuth: [] },
    { AdminJWTAuth: [] },
  ],
})

export const getUnstableTemplatesSearchRoute = createRoute({
  method: 'get',
  path: '/unstable/templates/search',
  tags: ['unstable'],
  summary: 'Search templates',
  description:
    "Lists the team's templates together with the platform's public default templates, which carry `isDefault: true`, with search, a visibility filter and sorts. Default templates are not listed to teams on a dedicated cluster, and those owned by another team carry zero or null usage fields. Results are newest first unless `sort` says otherwise; `nextCursor` continues the listing and is only valid with the same `sort`. For E2B's own clients: it may change or disappear without notice.\n",
  request: {
    query: z.object({
      search: TemplatesSearchParamsSchema,
      sort: TemplatesSortParamsSchema,
      public: TemplatesPublicParamsSchema,
      limit: TemplatesLimitParamsSchema,
      cursor: TemplatesCursorParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the templates',
      content: { 'application/json': { schema: TemplateSearchResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getUnstableBuildsRoute = createRoute({
  method: 'get',
  path: '/unstable/builds',
  tags: ['unstable'],
  summary: 'List team builds',
  description:
    "Lists the team's builds, newest first, with an optional filter by build ID, template ID or template alias and by status. `nextCursor` continues the listing. For E2B's own clients: it may change or disappear without notice.\n",
  request: {
    query: z.object({
      build_id_or_template: BuildIDOrTemplateParamsSchema,
      statuses: BuildStatusesParamsSchema,
      limit: BuildsLimitParamsSchema,
      cursor: BuildsCursorParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned paginated builds.',
      content: { 'application/json': { schema: BuildsListResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getUnstableBuildsStatusesRoute = createRoute({
  method: 'get',
  path: '/unstable/builds/statuses',
  tags: ['unstable'],
  summary: 'Build statuses',
  description:
    "Returns the statuses of the team's builds with the given IDs; IDs of other teams' builds are left out. For E2B's own clients: it may change or disappear without notice.\n",
  request: { query: z.object({ build_ids: BuildIDsParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned build statuses',
      content: { 'application/json': { schema: BuildsStatusesResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getUnstableBuildsBuildIDRoute = createRoute({
  method: 'get',
  path: '/unstable/builds/{buildID}',
  tags: ['unstable'],
  summary: 'Build details',
  description:
    "Returns a build of the team with the names of its template. For E2B's own clients: it may change or disappear without notice.\n",
  request: { params: z.object({ buildID: BuildIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned build details.',
      content: { 'application/json': { schema: BuildInfoSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}',
  tags: ['templates'],
  summary: 'List template builds',
  description: 'List all builds for a template',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema }),
    query: z.object({
      nextToken: PaginationNextTokenParamsSchema,
      limit: PaginationLimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the template with its builds',
      content: { 'application/json': { schema: TemplateWithBuildsSchema } },
      headers: z.object({ 'X-Next-Token': XNextTokenHeaderSchema }),
    },
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const deleteTemplatesTemplateIDRoute = createRoute({
  method: 'delete',
  path: '/templates/{templateID}',
  tags: ['templates'],
  summary: 'Delete template',
  description: 'Delete a template',
  request: { params: z.object({ templateID: TemplateIDParamsSchema }) },
  responses: {
    204: { description: 'The template was deleted successfully' },
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const patchTemplatesTemplateIDRoute = createRoute({
  method: 'patch',
  path: '/templates/{templateID}',
  tags: ['templates'],
  summary: 'Update template',
  description: 'Update template',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: TemplateUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'The template was updated successfully' },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  deprecated: true,
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDBuildsRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}/builds',
  tags: ['templates'],
  summary: "List a template's builds",
  description:
    'List the builds of a template, newest first. The template is given by its ID or name. A template named `aliases` is given by its ID or by its name with the team prefix.',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema }),
    query: z.object({
      nextToken: PaginationNextTokenParamsSchema,
      limit: PaginationLimitParamsSchema,
      statuses: TemplateBuildStatusesParamsSchema,
      tags: TemplateBuildTagsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the template builds',
      content: { 'application/json': { schema: z.array(TemplateBuildWithTagsSchema) } },
      headers: z.object({ 'X-Next-Token': XNextTokenHeaderSchema }),
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postV2TemplatesTemplateIDBuildsBuildIDRoute = createRoute({
  method: 'post',
  path: '/v2/templates/{templateID}/builds/{buildID}',
  tags: ['templates'],
  summary: 'Start template build (v2)',
  description:
    'Start the build. With an Idempotency-Key, replays continue to work after the build has left the waiting state.',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema, buildID: BuildIDParamsSchema }),
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    body: {
      content: { 'application/json': { schema: TemplateBuildStartV2Schema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'The build has started' },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    401: {
      description: 'Authentication error',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    409: {
      description:
        'The Idempotency-Key conflicts with a different request (error_code idempotency_request_mismatch), or the matching original request has no recorded response yet and is within its expected response window (error_code idempotency_in_progress); this request was not executed again',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    422: {
      description:
        'The matching original request has no recorded response and its expected response deadline has passed or is unknown (error_code idempotency_outcome_unknown); this request was not executed again',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    429: _429Response,
    500: {
      description: 'Server error',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    503: {
      description: 'Service unavailable',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getV2TemplatesTemplateIDRoute = createRoute({
  method: 'get',
  path: '/v2/templates/{templateID}',
  tags: ['templates'],
  summary: 'Template info (v2)',
  description:
    'Get a template by its ID or name, with its default build and without its other builds.',
  request: { params: z.object({ templateID: TemplateIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the template',
      content: { 'application/json': { schema: TemplateV2Schema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const patchV2TemplatesTemplateIDRoute = createRoute({
  method: 'patch',
  path: '/v2/templates/{templateID}',
  tags: ['templates'],
  summary: 'Update template (v2)',
  description: 'Update template',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: TemplateUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The template was updated successfully',
      content: { 'application/json': { schema: TemplateUpdateResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDBuildsBuildIDStatusRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}/builds/{buildID}/status',
  tags: ['templates'],
  summary: 'Template build status',
  description: 'Get template build info',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema, buildID: BuildIDParamsSchema }),
    query: z.object({
      logsOffset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'logsOffset',
            schema: { default: 0, type: 'integer', format: 'int32', minimum: 0 },
            description:
              'Index of the starting build log that should be returned with the template',
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
          z.int32().min(0).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 100, type: 'integer', format: 'int32', minimum: 0, maximum: 100 },
            description: 'Maximum number of logs that should be returned',
            required: false,
          },
        }),
      level: LogLevelSchema.openapi({
        param: {
          in: 'query',
          name: 'level',
          schema: { $ref: '#/components/schemas/LogLevel' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the template',
      content: { 'application/json': { schema: TemplateBuildInfoSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDBuildsBuildIDLogsRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}/builds/{buildID}/logs',
  tags: ['templates'],
  summary: 'Template build logs',
  description: 'Get template build logs',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema, buildID: BuildIDParamsSchema }),
    query: z.object({
      cursor: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { type: 'integer', format: 'int64', minimum: 0 },
            description: 'Starting timestamp of the logs that should be returned in milliseconds',
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
          z.int32().min(0).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 100, type: 'integer', format: 'int32', minimum: 0, maximum: 100 },
            description: 'Maximum number of logs that should be returned',
            required: false,
          },
        }),
      direction: LogsDirectionSchema.openapi({
        param: {
          in: 'query',
          name: 'direction',
          schema: { $ref: '#/components/schemas/LogsDirection' },
          required: false,
        },
      }).exactOptional(),
      level: LogLevelSchema.openapi({
        param: {
          in: 'query',
          name: 'level',
          schema: { $ref: '#/components/schemas/LogLevel' },
          required: false,
        },
      }).exactOptional(),
      source: LogsSourceSchema.openapi({
        param: {
          in: 'query',
          name: 'source',
          schema: { $ref: '#/components/schemas/LogsSource' },
          description: 'Source of the logs that should be returned from',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the template build logs',
      content: { 'application/json': { schema: TemplateBuildLogsResponseSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postTemplatesTagsRoute = createRoute({
  method: 'post',
  path: '/templates/tags',
  tags: ['tags'],
  summary: 'Assign template tags',
  description: 'Assign tag(s) to a template build.',
  request: {
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    body: {
      content: { 'application/json': { schema: AssignTemplateTagsRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Tag assigned successfully',
      content: { 'application/json': { schema: AssignedTemplateTagsSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    401: {
      description: 'Authentication error',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    408: {
      description: 'Request body read timed out before execution',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    409: {
      description:
        'The Idempotency-Key conflicts with a different request (error_code idempotency_request_mismatch), or the matching original request has no recorded response yet and is within its expected response window (error_code idempotency_in_progress); this request was not executed again',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    413: {
      description: 'Request body exceeds the size limit',
      content: { 'text/plain': { schema: z.string() } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    422: {
      description:
        'The matching original request has no recorded response and its expected response deadline has passed or is unknown (error_code idempotency_outcome_unknown); this request was not executed again',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Should-Retry': ShouldRetryHeaderSchema,
        'Retry-After': z
          .int()
          .min(0)
          .exactOptional()
          .openapi({
            description: 'When present, the number of seconds to wait before retrying the request.',
            example: 30,
            param: { required: false },
          }),
      }),
    },
    500: {
      description:
        'Server error. A failed commit has an uncertain outcome and omits Should-Retry; with an Idempotency-Key that error is replayed without executing again.',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
    503: {
      description: 'Idempotency is unavailable; the request was not executed',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({ 'Should-Retry': ShouldRetryHeaderSchema }),
    },
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const deleteTemplatesTagsRoute = createRoute({
  method: 'delete',
  path: '/templates/tags',
  tags: ['tags'],
  summary: 'Delete template tags',
  description: 'Delete multiple tags from templates',
  request: {
    body: {
      content: { 'application/json': { schema: DeleteTemplateTagsRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Tags deleted successfully' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDTagsRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}/tags',
  tags: ['tags'],
  summary: 'List template tags',
  description: 'List all tags for a template',
  request: { params: z.object({ templateID: TemplateIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the template tags',
      content: { 'application/json': { schema: z.array(TemplateTagSchema) } },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDTagsGroupsRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}/tags/groups',
  tags: ['tags'],
  summary: 'List template tag groups',
  description:
    "Lists the template's tags that have at least one ready build, each with its most recent ready assignments, paginated over tags with a keyset cursor. Returns 404 when the template does not exist or belongs to another team.\n",
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema }),
    query: z.object({
      assignmentLimit: TagAssignmentLimitParamsSchema,
      tagsLimit: TagGroupsLimitParamsSchema,
      tagsCursor: TagGroupsCursorParamsSchema,
      search: TagGroupsSearchParamsSchema,
      sort: TagGroupsSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned template tag groups',
      content: { 'application/json': { schema: TemplateTagGroupsResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDTagsCountRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}/tags/count',
  tags: ['tags'],
  summary: 'Count template tags',
  description:
    'Returns the number of distinct tags of the template that have at least one ready build. Returns 404 when the template does not exist or belongs to another team.\n',
  request: { params: z.object({ templateID: TemplateIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the tag count',
      content: { 'application/json': { schema: TemplateTagsCountResponseSchema } },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDTagsExistsRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}/tags/exists',
  tags: ['tags'],
  summary: 'Check template tag',
  description:
    'Checks whether a tag of the template has at least one ready build. Returns 404 when the template does not exist or belongs to another team.\n',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema }),
    query: z.object({ tag: TagQueryParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully checked the tag',
      content: { 'application/json': { schema: TemplateTagExistsResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesTemplateIDTagsTagAssignmentsRoute = createRoute({
  method: 'get',
  path: '/templates/{templateID}/tags/{tag}/assignments',
  tags: ['tags'],
  summary: 'List template tag assignments',
  description:
    'Lists the ready assignments of one tag of the template, newest first, with keyset cursor pagination. Returns 404 when the template does not exist or belongs to another team.\n',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema, tag: TagParamsSchema }),
    query: z.object({
      cursor: TagAssignmentsCursorParamsSchema,
      limit: TagAssignmentsLimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the tag assignments',
      content: { 'application/json': { schema: TemplateTagAssignmentsResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getTemplatesAliasesAliasRoute = createRoute({
  method: 'get',
  path: '/templates/aliases/{alias}',
  tags: ['templates'],
  summary: 'Check template alias',
  description: 'Check if template with given alias exists',
  request: {
    params: z.object({
      alias: z
        .string()
        .openapi({
          param: {
            name: 'alias',
            in: 'path',
            required: true,
            schema: { type: 'string', description: 'Template alias' },
          },
          description: 'Template alias',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully queried template by alias',
      content: { 'application/json': { schema: TemplateAliasResponseSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getNodesRoute = createRoute({
  method: 'get',
  path: '/nodes',
  tags: ['admin'],
  summary: 'List nodes',
  description: 'List all nodes',
  request: {
    query: z.object({
      clusterID: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'clusterID',
            description: 'Identifier of the cluster',
            required: false,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned all nodes',
      content: { 'application/json': { schema: z.array(NodeSchema) } },
    },
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getNodesNodeIDRoute = createRoute({
  method: 'get',
  path: '/nodes/{nodeID}',
  tags: ['admin'],
  summary: 'Node info',
  description: 'Get node info',
  request: {
    params: z.object({ nodeID: NodeIDParamsSchema }),
    query: z.object({
      clusterID: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'clusterID',
            description: 'Identifier of the cluster',
            required: false,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the node',
      content: { 'application/json': { schema: NodeDetailSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const postNodesNodeIDRoute = createRoute({
  method: 'post',
  path: '/nodes/{nodeID}',
  tags: ['admin'],
  summary: 'Change node status',
  description: 'Change status of a node',
  request: {
    params: z.object({ nodeID: NodeIDParamsSchema }),
    body: { content: { 'application/json': { schema: NodeStatusChangeSchema } } },
  },
  responses: {
    204: { description: 'The node status was changed successfully' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getNodesNodeIDSandboxesRoute = createRoute({
  method: 'get',
  path: '/nodes/{nodeID}/sandboxes',
  tags: ['admin'],
  summary: 'Node sandboxes',
  description: 'List the sandboxes the API confirms are running on the node',
  request: {
    params: z.object({ nodeID: NodeIDParamsSchema }),
    query: z.object({
      clusterID: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'clusterID',
            description: 'Identifier of the cluster',
            required: false,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successfully returned the node's sandboxes",
      content: { 'application/json': { schema: NodeSandboxesSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const postAdminTeamsTeamIDSandboxesKillRoute = createRoute({
  method: 'post',
  path: '/admin/teams/{teamID}/sandboxes/kill',
  tags: ['admin'],
  summary: 'Kill all sandboxes for a team',
  description: 'Kills all sandboxes for the specified team',
  request: {
    params: z.object({
      teamID: z
        .uuid()
        .openapi({
          param: {
            name: 'teamID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Team ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully killed sandboxes',
      content: { 'application/json': { schema: AdminSandboxKillResultSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getAdminSandboxesRunningCountsRoute = createRoute({
  method: 'get',
  path: '/admin/sandboxes/running-counts',
  tags: ['admin'],
  summary: 'Count running sandboxes by team',
  description:
    'Returns a shared snapshot normally refreshed after five seconds. A\nsandbox transitioning out of running can remain counted until removal.\n',
  responses: {
    200: {
      description: 'Running sandbox counts keyed by team ID',
      content: { 'application/json': { schema: AdminTeamRunningSandboxCountsSchema } },
    },
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getAdminSandboxesSandboxIDRoute = createRoute({
  method: 'get',
  path: '/admin/sandboxes/{sandboxID}',
  tags: ['admin'],
  summary: "Get a sandbox's team and state",
  description:
    'Reads the team and state of a sandbox from its latest lifecycle event.\nThe state lags the sandbox while that event is in flight. A sandbox\nwhose events have expired is not found.\n',
  request: { params: z.object({ sandboxID: SandboxIDParamsSchema }) },
  responses: {
    200: {
      description: 'The sandbox, its team and its state',
      content: { 'application/json': { schema: AdminSandboxSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableAdminSandboxesSandboxIDOverviewRoute = createRoute({
  method: 'get',
  path: '/unstable/admin/sandboxes/{sandboxID}/overview',
  tags: ['admin'],
  summary: 'Sandbox overview',
  description:
    "Reads a sandbox's team, snapshot template, most recent pause and newest\ndefault-tag build from the database. The team comes from the\nstopped-sandbox log, or from the snapshot when the sandbox has not\nstopped. Returns 404 when neither knows the sandbox. A sandbox without\na snapshot returns null `snapshotTemplateId`, `lastPause` and\n`latestBuild`.\n",
  request: { params: z.object({ sandboxID: SandboxIDParamsSchema }) },
  responses: {
    200: {
      description: 'The sandbox overview',
      content: { 'application/json': { schema: AdminSandboxOverviewSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableAdminSandboxesSandboxIDBuildsRoute = createRoute({
  method: 'get',
  path: '/unstable/admin/sandboxes/{sandboxID}/builds',
  tags: ['admin'],
  summary: "List the builds of a sandbox's snapshot template",
  description:
    "Lists the build assignments of the template that holds the sandbox's\nsnapshot under one tag. Assignments without a creation time are left\nout. A sandbox without a snapshot returns no items and a null\n`snapshotTemplateID`; this route does not report whether the sandbox\nexists.\n",
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    query: z.object({
      statusGroup: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AdminSandboxBuildStatusGroupSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'statusGroup',
            in: 'query',
            required: false,
            description:
              'Only list builds in these status groups, comma-separated. Omit to list every group.',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AdminSandboxBuildStatusGroup' },
            },
          },
        }),
      tag: z
        .string()
        .min(1)
        .default('default')
        .exactOptional()
        .openapi({
          param: {
            name: 'tag',
            in: 'query',
            required: false,
            description: 'Tag whose assignments are listed',
            schema: { type: 'string', minLength: 1, default: 'default' },
          },
        }),
      order: OrderDirectionSchema.openapi({
        param: {
          name: 'order',
          in: 'query',
          required: false,
          description: 'Direction of the assignment time order',
          schema: { $ref: '#/components/schemas/OrderDirection' },
        },
      }).exactOptional(),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'Maximum number of builds to return',
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 50 },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description: 'Number of matching builds to skip',
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "A page of the snapshot template's build assignments",
      content: { 'application/json': { schema: AdminSandboxBuildListSchema } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const postUnstableAdminSandboxesSandboxIDBuildsRestoreRoute = createRoute({
  method: 'post',
  path: '/unstable/admin/sandboxes/{sandboxID}/builds/restore',
  tags: ['admin'],
  summary: "Make a build the current build of a sandbox's snapshot",
  description:
    "Assigns a ready build of the sandbox's snapshot template to the template\nagain under the default tag, so the sandbox resumes from that build.\nThe snapshot takes the restored build's kind, filesystem-only or\nmemory.\nAnswers 404 when the sandbox has no snapshot, its snapshot template is\ndeleted, or the build is not assigned to that template under the\ndefault tag, and 409 when the build is not ready or is already the\ncurrent build.\n",
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: AdminSandboxBuildRestoreRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The build is now the snapshot template's current default build",
      content: { 'application/json': { schema: AdminSandboxBuildRestoreResultSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const postAdminTeamsTeamIDBuildsCancelRoute = createRoute({
  method: 'post',
  path: '/admin/teams/{teamID}/builds/cancel',
  tags: ['admin'],
  summary: 'Cancel all builds for a team',
  description: 'Cancels all in-progress and pending builds for the specified team',
  request: {
    params: z.object({
      teamID: z
        .uuid()
        .openapi({
          param: {
            name: 'teamID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Team ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully cancelled builds',
      content: { 'application/json': { schema: AdminBuildCancelResultSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getAdminTeamsTeamIDApiKeysRoute = createRoute({
  method: 'get',
  path: '/admin/teams/{teamID}/api-keys',
  tags: ['admin'],
  summary: 'List team API keys as admin',
  description:
    "Lists a team's API keys for internal service workflows. Unlike `GET /api-keys`, it does not resolve the team, so it also answers for a banned team.",
  request: {
    params: z.object({
      teamID: z
        .uuid()
        .openapi({
          param: {
            name: 'teamID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Team ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successfully returned the team's API keys",
      content: { 'application/json': { schema: z.array(TeamAPIKeySchema) } },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const postAdminTeamsTeamIDApiKeysRoute = createRoute({
  method: 'post',
  path: '/admin/teams/{teamID}/api-keys',
  tags: ['admin'],
  summary: 'Create team API key as admin',
  description: 'Creates a team API key for internal service workflows.',
  request: {
    params: z.object({
      teamID: z
        .uuid()
        .openapi({
          param: {
            name: 'teamID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Team ID',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NewTeamAPIKeySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Team API key created successfully',
      content: { 'application/json': { schema: CreatedTeamAPIKeySchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const deleteAdminTeamsTeamIDApiKeysApiKeyIDRoute = createRoute({
  method: 'delete',
  path: '/admin/teams/{teamID}/api-keys/{apiKeyID}',
  tags: ['admin'],
  summary: 'Delete team API key as admin',
  description: 'Deletes a team API key for internal service workflows.',
  request: {
    params: z.object({
      teamID: z
        .uuid()
        .openapi({
          param: {
            name: 'teamID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Team ID',
          },
        }),
      apiKeyID: ApiKeyIDParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Team API key deleted successfully' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableManagementTelemetryNamesRoute = createRoute({
  method: 'get',
  path: '/unstable/management/telemetry/names',
  tags: ['admin'],
  summary: 'Read team and cluster names for telemetry.',
  description:
    'Requires a direct mutual TLS connection from the configured telemetry reader service identity. Bearer tokens and forwarded identity headers are not accepted. Returns regional team and cluster names without connection credentials. Deleted projects and clusters being deleted are omitted.',
  operationId: 'managementTelemetryNames',
  responses: {
    200: {
      description: 'Current regional names.',
      content: { 'application/json': { schema: TelemetryNamesSchema } },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [],
})

export const putUnstableManagementClustersClusterIDRoute = createRoute({
  method: 'put',
  path: '/unstable/management/clusters/{clusterID}',
  tags: ['admin'],
  summary: 'Register a cluster.',
  description:
    'A cluster registered here for the first time starts with deletion protection turned off. Registering an existing cluster again with the same auth organization updates its endpoint, TLS setting, sandbox proxy domain and token, while preserving its regional display name and deletion protection, then sets a telemetry client ID the cluster does not have yet. An omitted telemetry client ID preserves the stored one. A different auth organization returns a conflict with error_code cluster_registration_conflict, and so does a telemetry client ID different from the stored one, after the endpoint, TLS setting, sandbox proxy domain and token are updated. An invalid registration returns 400 with error_code cluster_registration_invalid.',
  operationId: 'managementRegisterCluster',
  request: {
    params: z.object({ clusterID: ClusterIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: ManagementClusterRegistrationRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Cluster registration is present.' },
    400: _400Response,
    401: _401Response,
    409: _409Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const deleteUnstableManagementClustersClusterIDRoute = createRoute({
  method: 'delete',
  path: '/unstable/management/clusters/{clusterID}',
  tags: ['admin'],
  summary: 'Delete a cluster and its environments.',
  description:
    "Deletes a cluster after all team assignments are detached. Deletion protection on the cluster rejects the deletion, and so does a live team assignment, before anything changes. In one transaction it then soft-deletes every live template, snapshot template and paused sandbox snapshot on the cluster, releases their aliases, and releases all environment references while preserving environment and build history, and afterwards the cluster service deletes the cluster. A team assigned between those two steps returns a conflict with the templates already deleted; repeating the deletion once that team is detached completes it. The local cluster's nil ID is rejected. Repeating a completed deletion succeeds.",
  operationId: 'managementDeleteCluster',
  request: { params: z.object({ clusterID: ClusterIDParamsSchema }) },
  responses: {
    204: { description: 'Cluster is absent.' },
    400: _400Response,
    401: _401Response,
    409: _409Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const putUnstableManagementClustersClusterIDTelemetryRoute = createRoute({
  method: 'put',
  path: '/unstable/management/clusters/{clusterID}/telemetry',
  tags: ['admin'],
  summary: 'Update the telemetry identity of an existing cluster.',
  description:
    'Changes only the telemetry client mapping. Missing or deleting clusters are refused; connection settings, credentials and names are preserved.',
  operationId: 'managementUpdateClusterTelemetry',
  request: {
    params: z.object({ clusterID: ClusterIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ telemetry_client_id: z.string().min(1) })
            .openapi({ required: ['telemetry_client_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Telemetry identity updated.' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const getUnstableManagementClustersClusterIDProjectsRoute = createRoute({
  method: 'get',
  path: '/unstable/management/clusters/{clusterID}/projects',
  tags: ['admin'],
  summary: 'List the projects assigned to a cluster.',
  description:
    'Returns the ID of every project whose team is assigned to the cluster, whichever way it was assigned. A deleted project is never assigned. An absent cluster has no projects.',
  operationId: 'managementListClusterProjects',
  request: { params: z.object({ clusterID: ClusterIDParamsSchema }) },
  responses: {
    200: {
      description: 'The projects assigned to the cluster.',
      content: { 'application/json': { schema: ManagementClusterProjectsSchema } },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const putUnstableManagementClustersClusterIDDeletionRoute = createRoute({
  method: 'put',
  path: '/unstable/management/clusters/{clusterID}/deletion',
  tags: ['admin'],
  summary: 'Record that a cluster is being deleted.',
  description:
    "Records that the caller is deleting the cluster, for a caller that deletes the cluster's teams before the cluster itself. Refused while the cluster has deletion protection turned on; a protection change in flight commits before or after the check, never between. Once recorded, deletion protection cannot be turned on, so the cluster delete that follows is not refused for protection, and no team can be newly assigned to the cluster. An assignment either commits before the deletion is recorded, where the caller's next project listing finds it, or is refused with cluster_assignment_cluster_deleting. Succeeds when the cluster is absent. Repeating the request succeeds. The local cluster's nil ID is rejected.",
  operationId: 'managementRequestClusterDeletion',
  request: { params: z.object({ clusterID: ClusterIDParamsSchema }) },
  responses: {
    204: { description: 'The deletion is recorded, or the cluster is absent.' },
    400: _400Response,
    401: _401Response,
    409: {
      description: 'The cluster has deletion protection turned on.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const getUnstableManagementClustersClusterIDDestroyReadinessRoute = createRoute({
  method: 'get',
  path: '/unstable/management/clusters/{clusterID}/destroy-readiness',
  tags: ['admin'],
  summary: 'Check cluster destroy readiness.',
  description:
    "Checks whether the cluster has deletion protection turned on, or more than one team uses this exact cluster, either as an assigned team or as the owner of active templates or snapshots on it. One team's own templates and snapshots do not block this check, because deleting the cluster soft-deletes them. Soft-deleted history does not count. Returns success if the cluster is absent. This read does not change resources or prevent later assignments or template creation.",
  operationId: 'managementClusterDestroyReadiness',
  request: { params: z.object({ clusterID: ClusterIDParamsSchema }) },
  responses: {
    204: { description: 'At most one team uses the cluster.' },
    400: _400Response,
    401: _401Response,
    409: {
      description:
        'The cluster has deletion protection turned on, or more than one team uses it and the other teams and their templates must move off it before destroying the cluster.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const putUnstableManagementProjectsProjectIDClusterClusterIDRoute = createRoute({
  method: 'put',
  path: '/unstable/management/projects/{projectID}/cluster/{clusterID}',
  tags: ['admin'],
  summary: 'Assign a cluster to a project.',
  description:
    'Assigns the cluster when the project has no cluster assigned. Replaying the identical assignment succeeds; replacing a different assigned cluster returns a conflict. Answers 404 when the project is missing or deleted.',
  operationId: 'managementAssignProjectCluster',
  request: {
    params: z.object({
      projectID: z
        .uuid()
        .openapi({
          param: {
            name: 'projectID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      clusterID: ClusterIDParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Cluster is assigned to the project.' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const deleteUnstableManagementProjectsProjectIDClusterClusterIDRoute = createRoute({
  method: 'delete',
  path: '/unstable/management/projects/{projectID}/cluster/{clusterID}',
  tags: ['admin'],
  summary: 'Detach a cluster assignment from a project.',
  description: 'Answers 404 when the project is missing or deleted.',
  operationId: 'managementDetachProjectCluster',
  request: {
    params: z.object({
      projectID: z
        .uuid()
        .openapi({
          param: {
            name: 'projectID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      clusterID: ClusterIDParamsSchema,
    }),
  },
  responses: {
    204: { description: 'The matching assignment is absent.' },
    401: _401Response,
    404: _404Response,
    409: _409Response,
    500: _500Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const putUnstableManagementProjectsProjectIDRoute = createRoute({
  method: 'put',
  path: '/unstable/management/projects/{projectID}',
  tags: ['admin'],
  summary: 'Create or reconcile a project.',
  operationId: 'managementUpsertProject',
  request: {
    params: z.object({
      projectID: z
        .uuid()
        .openapi({
          param: {
            name: 'projectID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementProjectUpsertRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Existing project reconciled.',
      content: { 'application/json': { schema: ManagementProjectSchema } },
    },
    201: {
      description: 'Project created.',
      content: { 'application/json': { schema: ManagementProjectSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const deleteUnstableManagementProjectsProjectIDRoute = createRoute({
  method: 'delete',
  path: '/unstable/management/projects/{projectID}',
  tags: ['admin'],
  summary: 'Soft-delete a project.',
  description:
    'Marks the project deleted and blocked, releases its cluster assignment, scrubs its name and email to DELETED and its slug to deleted-<project ID>, which releases the old slug for reuse, deletes its memberships and API keys, soft-deletes its templates and snapshots, and enqueues the teardown of its running sandboxes, all in one transaction. The project row remains. Afterwards the project answers 404 to other management writes. Repeating the call answers 204 and repeats every step except the deletion time: it re-blocks and re-scrubs the project, clears a cluster assignment written since, deletes any memberships, keys, templates or snapshots created since, and enqueues the teardown again.',
  operationId: 'managementDeleteProject',
  request: {
    params: z.object({
      projectID: z
        .uuid()
        .openapi({
          param: {
            name: 'projectID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Project is deleted and its teardown is enqueued.' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const putUnstableManagementProjectsProjectIDMembersUserIDRoute = createRoute({
  method: 'put',
  path: '/unstable/management/projects/{projectID}/members/{userID}',
  tags: ['admin'],
  summary: 'Apply one versioned project member projection.',
  description:
    'Applies the newest desired presence for one project member. An older or duplicate revision is accepted without changing target state.',
  operationId: 'managementApplyProjectMember',
  request: {
    params: z.object({
      projectID: z
        .uuid()
        .openapi({
          param: {
            name: 'projectID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      userID: z
        .uuid()
        .openapi({
          param: {
            name: 'userID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementProjectMemberApplyRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Membership projection is applied or already superseded.' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    500: _500Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const putUnstableManagementProjectsProjectIDLimitsRoute = createRoute({
  method: 'put',
  path: '/unstable/management/projects/{projectID}/limits',
  tags: ['admin'],
  summary: 'Reconcile effective limits for a project.',
  operationId: 'managementUpsertProjectLimits',
  request: {
    params: z.object({
      projectID: z
        .uuid()
        .openapi({
          param: {
            name: 'projectID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementProjectLimitsSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Effective limits are synchronized.' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const putUnstableManagementProjectsProjectIDSettingsRoute = createRoute({
  method: 'put',
  path: '/unstable/management/projects/{projectID}/settings',
  tags: ['admin'],
  summary: "Apply a project's settings revision.",
  description:
    'Replaces the complete project settings document when the revision is newer than the stored revision. Omitted settings are removed. Older and duplicate revisions leave the stored document unchanged. Every successful delivery invalidates the cached team. Answers 404 when the project is missing or deleted.',
  operationId: 'managementSetProjectSettings',
  request: {
    params: z.object({
      projectID: z
        .uuid()
        .openapi({
          param: {
            name: 'projectID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementProjectSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Project settings are applied or already superseded.' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const putUnstableManagementProjectsProjectIDBlockRoute = createRoute({
  method: 'put',
  path: '/unstable/management/projects/{projectID}/block',
  tags: ['admin'],
  summary: "Apply a project's block state.",
  description:
    'Records whether the project is refused billable work, which the auth path reads before it lets a sandbox start. An older or duplicate revision is accepted without changing target state. Answers 404 when the project is missing or deleted.',
  operationId: 'managementApplyProjectBlock',
  request: {
    params: z.object({
      projectID: z
        .uuid()
        .openapi({
          param: {
            name: 'projectID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementProjectBlockRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Block state is applied or already superseded.' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const putUnstableManagementProjectsProjectIDBanRoute = createRoute({
  method: 'put',
  path: '/unstable/management/projects/{projectID}/ban',
  tags: ['admin'],
  summary: "Apply a project's ban state.",
  description:
    "Records whether the project is banned. Authentication refuses a banned project's API keys and members. A revision that turns the ban on also kills the project's running sandboxes and cancels its builds in the background, and retries while the project stays banned and any of them remain. The newest revision wins: an older or duplicate revision is accepted without changing target state. Answers 404 when the project is missing or deleted.",
  operationId: 'managementApplyProjectBan',
  request: {
    params: z.object({
      projectID: z
        .uuid()
        .openapi({
          param: {
            name: 'projectID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementProjectBanRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Ban state is applied or already superseded.' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ AdminJWTAuth: [] }],
})

export const postUnstableAdminTeamsQueryRoute = createRoute({
  method: 'post',
  path: '/unstable/admin/teams/query',
  tags: ['admin'],
  summary: 'List teams as admin',
  description:
    "Lists teams matching the filters in the request body, with each team's\nmember count, and its running sandbox count when sorted by running\nsandboxes. A read despite the POST: the body carries a project ID list\ntoo long for a query string.\n",
  request: {
    body: {
      content: { 'application/json': { schema: AdminTeamListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The page of matching teams and the number of all matching teams',
      content: { 'application/json': { schema: AdminTeamListSchema } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const postUnstableAdminTeamsBansRoute = createRoute({
  method: 'post',
  path: '/unstable/admin/teams/bans',
  tags: ['admin'],
  summary: 'Ban teams',
  description:
    "Bans up to 100 teams at once, as\n`PUT /unstable/admin/teams/{teamID}/ban` does, except that every\nteam's ban is stored before any team's sandboxes are killed or builds\ncancelled, and the kills and cancellations of all teams share one time\nbudget. One team's failure does not stop the others; the response sorts\nevery requested team into banned, not found or failed. The work\ncontinues if the caller disconnects.\n",
  operationId: 'adminBanTeams',
  request: {
    body: {
      content: { 'application/json': { schema: AdminTeamsBanRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The outcome for every requested team',
      content: { 'application/json': { schema: AdminTeamsBanResultSchema } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableAdminTeamsTeamIDRoute = createRoute({
  method: 'get',
  path: '/unstable/admin/teams/{teamID}',
  tags: ['admin'],
  summary: 'Team as admin',
  description:
    'Returns a team with its sandbox scheduling labels and cluster. It also answers for a banned or blocked team.',
  request: {
    params: z.object({
      teamID: z
        .uuid()
        .openapi({
          param: {
            name: 'teamID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Team ID',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The team', content: { 'application/json': { schema: AdminTeamSchema } } },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const putUnstableAdminTeamsTeamIDSchedulingLabelsRoute = createRoute({
  method: 'put',
  path: '/unstable/admin/teams/{teamID}/scheduling-labels',
  tags: ['admin'],
  summary: "Replace a team's sandbox scheduling labels",
  description:
    "Replaces the labels that place the team's new sandboxes on matching\nnodes. Labels are deduplicated, keeping the first occurrence of each.\n",
  request: {
    params: z.object({
      teamID: z
        .uuid()
        .openapi({
          param: {
            name: 'teamID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Team ID',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminTeamSchedulingLabelsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The labels as written',
      content: { 'application/json': { schema: AdminTeamSchedulingLabelsSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const putUnstableAdminTeamsTeamIDBanRoute = createRoute({
  method: 'put',
  path: '/unstable/admin/teams/{teamID}/ban',
  tags: ['admin'],
  summary: 'Ban a team',
  description:
    'Marks the team as banned so its API keys stop authenticating, then\nkills its sandboxes and cancels its builds. The ban is stored first:\na failure to kill or cancel is reported in the result and does not\nundo it. Killing and cancelling stop after a fixed time budget, and a\nstep cut short is reported as failed. Banning an already banned team\nrepeats the kill and cancel. The work continues if the caller\ndisconnects.\n',
  operationId: 'adminBanTeam',
  request: {
    params: z.object({
      teamID: z
        .uuid()
        .openapi({
          param: {
            name: 'teamID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Team ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The team is banned',
      content: { 'application/json': { schema: AdminTeamBanResultSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const deleteUnstableAdminTeamsTeamIDBanRoute = createRoute({
  method: 'delete',
  path: '/unstable/admin/teams/{teamID}/ban',
  tags: ['admin'],
  summary: 'Unban a team',
  description: "Clears the team's ban. Idempotent.",
  operationId: 'adminUnbanTeam',
  request: {
    params: z.object({
      teamID: z
        .uuid()
        .openapi({
          param: {
            name: 'teamID',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Team ID',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The team is not banned' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableAdminClustersRoute = createRoute({
  method: 'get',
  path: '/unstable/admin/clusters',
  tags: ['admin'],
  summary: 'List clusters as admin',
  description:
    "Lists the registered clusters with the number of teams assigned to each. Never returns a cluster's token. The local cluster is not a registered cluster and is not listed.",
  operationId: 'adminListClusters',
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
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'Maximum number of clusters to return',
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 50 },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description: 'Number of matching clusters to skip',
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            required: false,
            description: 'Case-insensitive substring match on the cluster name or endpoint',
            schema: { type: 'string' },
          },
        }),
      sortBy: z
        .enum(['endpoint', 'name', 'teamCount'])
        .default('endpoint')
        .exactOptional()
        .openapi({
          param: {
            name: 'sortBy',
            in: 'query',
            required: false,
            description: 'Column to order by',
            schema: {
              type: 'string',
              enum: ['endpoint', 'name', 'teamCount'],
              default: 'endpoint',
            },
          },
        }),
      sortOrder: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            name: 'sortOrder',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'asc',
              'x-enum-varnames': [
                'AdminListClustersSortOrderAsc',
                'AdminListClustersSortOrderDesc',
              ],
            },
          },
          'x-enum-varnames': ['AdminListClustersSortOrderAsc', 'AdminListClustersSortOrderDesc'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'The page of matching clusters and the number of all matching clusters',
      content: { 'application/json': { schema: ClusterListResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const postUnstableAdminClustersRoute = createRoute({
  method: 'post',
  path: '/unstable/admin/clusters',
  tags: ['admin'],
  summary: 'Create a cluster as admin',
  description:
    'Creates a cluster whose configuration cannot be modified through this route. A new cluster starts with deletion protection turned on. Creating a cluster again with the same `cluster_id` and an identical configuration answers 201 with the stored cluster, whose deletionProtection is whatever is stored; a different configuration, or an auth organization another cluster uses, returns 409 with error_code cluster_registration_conflict. An invalid request returns 400 with error_code cluster_registration_invalid.',
  operationId: 'adminCreateCluster',
  request: {
    body: {
      content: { 'application/json': { schema: AdminClusterCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Cluster created.',
      content: { 'application/json': { schema: ClusterDetailSchema } },
    },
    400: _400Response,
    401: _401Response,
    409: _409Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableAdminClustersClusterIDRoute = createRoute({
  method: 'get',
  path: '/unstable/admin/clusters/{clusterID}',
  tags: ['admin'],
  summary: 'Cluster as admin',
  description:
    "Returns a cluster with the first page of its assigned teams, the number of teams assigned to it and the number of live templates on it. Never returns the cluster's token.",
  operationId: 'adminGetCluster',
  request: {
    params: z.object({ clusterID: ClusterIDParamsSchema }),
    query: z.object({
      teamsLimit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'teamsLimit',
            in: 'query',
            required: false,
            description: 'Page size for the embedded teams page',
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 50 },
          },
        }),
      teamsOffset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'teamsOffset',
            in: 'query',
            required: false,
            description: 'Offset for the embedded teams page',
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The cluster',
      content: { 'application/json': { schema: ClusterDetailWithTeamsSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const deleteUnstableAdminClustersClusterIDRoute = createRoute({
  method: 'delete',
  path: '/unstable/admin/clusters/{clusterID}',
  tags: ['admin'],
  summary: 'Delete a cluster and its environments as admin',
  description:
    "Deletes a cluster after all team assignments are detached. Deletion protection on the cluster rejects the deletion, and so does a live team assignment, before anything changes. In one transaction it then soft-deletes every live template, snapshot template and paused sandbox snapshot on the cluster, releases their aliases, and releases all environment references while preserving environment and build history, and afterwards the cluster service deletes the cluster. A team assigned between those two steps returns a conflict with the templates already deleted; repeating the deletion once that team is detached completes it. The local cluster's nil ID is rejected. Repeating a completed deletion succeeds.",
  operationId: 'adminDeleteCluster',
  request: { params: z.object({ clusterID: ClusterIDParamsSchema }) },
  responses: {
    204: { description: 'Cluster deleted or already absent.' },
    400: _400Response,
    401: _401Response,
    409: _409Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const patchUnstableAdminClustersClusterIDRoute = createRoute({
  method: 'patch',
  path: '/unstable/admin/clusters/{clusterID}',
  tags: ['admin'],
  summary: 'Update a cluster as admin',
  description:
    "Writes only the properties present in the body. `endpoint` and `endpointTls` change where orchestration traffic for every team on the cluster goes, `sandboxProxyDomain` changes the public URL of every sandbox on it, and `authOrgId` changes how the cluster authenticates. A body with no property returns 400. Another cluster using the auth organization returns 409, and so does turning deletion protection on after the cluster's deletion is recorded. The token is rotated through `PUT /unstable/admin/clusters/{clusterID}/token`.",
  operationId: 'adminUpdateCluster',
  request: {
    params: z.object({ clusterID: ClusterIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: ClusterUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The cluster as updated',
      content: { 'application/json': { schema: ClusterDetailSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableAdminClustersClusterIDMetadataRoute = createRoute({
  method: 'get',
  path: '/unstable/admin/clusters/{clusterID}/metadata',
  tags: ['admin'],
  summary: 'Cluster metadata as admin',
  description:
    "Returns cluster metadata without reading assigned teams or counting teams and templates. Never returns the cluster's token.",
  operationId: 'adminGetClusterMetadata',
  request: { params: z.object({ clusterID: ClusterIDParamsSchema }) },
  responses: {
    200: {
      description: 'Cluster metadata',
      content: { 'application/json': { schema: ClusterDetailSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableAdminClustersClusterIDTeamsRoute = createRoute({
  method: 'get',
  path: '/unstable/admin/clusters/{clusterID}/teams',
  tags: ['admin'],
  summary: "List a cluster's teams as admin",
  description: 'Lists the teams assigned to the cluster.',
  operationId: 'adminListClusterTeams',
  request: {
    params: z.object({ clusterID: ClusterIDParamsSchema }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'Maximum number of teams to return',
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 50 },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description: 'Number of teams to skip',
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
          },
        }),
      sortBy: z
        .enum(['createdAt', 'name'])
        .default('createdAt')
        .exactOptional()
        .openapi({
          param: {
            name: 'sortBy',
            in: 'query',
            required: false,
            description: 'Column to order by',
            schema: { type: 'string', enum: ['createdAt', 'name'], default: 'createdAt' },
          },
        }),
      sortOrder: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            name: 'sortOrder',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'desc',
              'x-enum-varnames': [
                'AdminListClusterTeamsSortOrderAsc',
                'AdminListClusterTeamsSortOrderDesc',
              ],
            },
          },
          'x-enum-varnames': [
            'AdminListClusterTeamsSortOrderAsc',
            'AdminListClusterTeamsSortOrderDesc',
          ],
        }),
    }),
  },
  responses: {
    200: {
      description: 'The page of teams assigned to the cluster',
      content: { 'application/json': { schema: ClusterTeamListResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const putUnstableAdminClustersClusterIDTokenRoute = createRoute({
  method: 'put',
  path: '/unstable/admin/clusters/{clusterID}/token',
  tags: ['admin'],
  summary: "Rotate a cluster's token as admin",
  description:
    "Replaces the token used to reach the cluster. The previous token stops working at once. No route returns a cluster's token.",
  operationId: 'adminRotateClusterToken',
  request: {
    params: z.object({ clusterID: ClusterIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: ClusterTokenRotateRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Token rotated.' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
    503: _503Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableAdminTemplatesAliasesRoute = createRoute({
  method: 'get',
  path: '/unstable/admin/templates/aliases',
  tags: ['admin'],
  summary: 'Search template aliases as admin',
  description:
    "Finds the templates whose ID equals `search`, or that own an alias equal to `search` in any namespace, with their owning team and all their aliases. Deleted templates are left out. Results are ordered by template ID; the next page's token is returned in `X-Next-Token`.\n",
  request: {
    query: z.object({
      search: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            required: true,
            description: 'Exact template ID or alias',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      nextToken: PaginationNextTokenParamsSchema,
      limit: PaginationLimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the matching templates',
      content: { 'application/json': { schema: z.array(AdminTemplateAliasesSchema) } },
      headers: z.object({ 'X-Next-Token': XNextTokenHeaderSchema }),
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const postUnstableAdminTemplatesAliasesRoute = createRoute({
  method: 'post',
  path: '/unstable/admin/templates/aliases',
  tags: ['admin'],
  summary: 'Add a template alias without a namespace as admin',
  description:
    'Adds an alias without a namespace to a template, so the template resolves by that name for every team. The alias follows the rules of template names (lowercase letters, digits, `-` and `_`) and cannot equal a template ID. Returns 404 when the template does not exist and 409 when the alias is taken.\n',
  request: {
    body: {
      content: { 'application/json': { schema: AdminTemplateAliasCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The alias was added',
      content: { 'application/json': { schema: AdminTemplateAliasSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const deleteUnstableAdminTemplatesAliasesAliasIDRoute = createRoute({
  method: 'delete',
  path: '/unstable/admin/templates/aliases/{aliasID}',
  tags: ['admin'],
  summary: 'Remove a template alias without a namespace as admin',
  description:
    'Removes an alias without a namespace. A namespaced alias is not removed and answers 404.\n',
  request: { params: z.object({ aliasID: AliasIDParamsSchema }) },
  responses: {
    200: {
      description: 'The alias was removed',
      content: { 'application/json': { schema: AdminTemplateAliasDeletedSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const postUnstableAdminTemplatesDefaultsRoute = createRoute({
  method: 'post',
  path: '/unstable/admin/templates/defaults',
  tags: ['admin'],
  summary: 'Add a default template as admin',
  description:
    "Makes a template one of the platform's default templates. Returns 404 when the template does not exist and 409 when it is already a default template.\n",
  request: {
    body: {
      content: { 'application/json': { schema: AdminDefaultTemplateCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The template is now a default template',
      content: { 'application/json': { schema: AdminDefaultTemplateSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const deleteUnstableAdminTemplatesDefaultsTemplateIDRoute = createRoute({
  method: 'delete',
  path: '/unstable/admin/templates/defaults/{templateID}',
  tags: ['admin'],
  summary: 'Remove a default template as admin',
  description:
    "Stops a template being one of the platform's default templates. The template itself is not changed. Returns 404 when the template is not a default template.\n",
  request: { params: z.object({ templateID: TemplateIDParamsSchema }) },
  responses: {
    204: { description: 'The template is no longer a default template' },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const patchUnstableAdminTemplatesDefaultsTemplateIDRoute = createRoute({
  method: 'patch',
  path: '/unstable/admin/templates/defaults/{templateID}',
  tags: ['admin'],
  summary: 'Update a default template as admin',
  description:
    'Updates the description of a default template. Returns 404 when the template is not a default template.',
  request: {
    params: z.object({ templateID: TemplateIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: AdminDefaultTemplateUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The default template was updated',
      content: { 'application/json': { schema: AdminDefaultTemplateSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getUnstableAdminTemplatesLookupRoute = createRoute({
  method: 'get',
  path: '/unstable/admin/templates/lookup',
  tags: ['admin'],
  summary: 'Look up a template as admin',
  description:
    "Resolves `query` as, in order: a build ID (a UUID, matched to the template of the build's newest assignment, with no fallback), a template ID, or a template name (`namespace/alias`, or an alias without a namespace). Returns the template with its owning team and its newest builds. Deleted templates are not found.\n",
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            required: true,
            description: 'Build ID, template ID, or template name',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully resolved the template',
      content: { 'application/json': { schema: AdminTemplateLookupSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getApiKeysRoute = createRoute({
  method: 'get',
  path: '/api-keys',
  tags: ['api-keys'],
  summary: 'List team API keys',
  description: 'List all team API keys',
  responses: {
    200: {
      description: 'Successfully returned all team API keys',
      content: { 'application/json': { schema: z.array(TeamAPIKeySchema) } },
    },
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postApiKeysRoute = createRoute({
  method: 'post',
  path: '/api-keys',
  tags: ['api-keys'],
  summary: 'Create team API key',
  description: 'Create a new team API key',
  request: {
    body: { content: { 'application/json': { schema: NewTeamAPIKeySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Team API key created successfully',
      content: { 'application/json': { schema: CreatedTeamAPIKeySchema } },
    },
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] }],
})

export const deleteApiKeysApiKeyIDRoute = createRoute({
  method: 'delete',
  path: '/api-keys/{apiKeyID}',
  tags: ['api-keys'],
  summary: 'Delete team API key',
  description: 'Delete a team API key',
  request: { params: z.object({ apiKeyID: ApiKeyIDParamsSchema }) },
  responses: {
    204: { description: 'Team API key deleted successfully' },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const patchApiKeysApiKeyIDRoute = createRoute({
  method: 'patch',
  path: '/api-keys/{apiKeyID}',
  tags: ['api-keys'],
  summary: 'Update team API key',
  description: 'Update a team API key',
  request: {
    params: z.object({ apiKeyID: ApiKeyIDParamsSchema }),
    body: { content: { 'application/json': { schema: UpdateTeamAPIKeySchema } }, required: true },
  },
  responses: {
    200: { description: 'Team API key updated successfully' },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getVolumesRoute = createRoute({
  method: 'get',
  path: '/volumes',
  tags: ['volumes'],
  summary: 'List team volumes',
  description: 'List all team volumes',
  responses: {
    200: {
      description: 'Successfully listed all team volumes',
      content: { 'application/json': { schema: z.array(VolumeSchema) } },
    },
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postVolumesRoute = createRoute({
  method: 'post',
  path: '/volumes',
  tags: ['volumes'],
  summary: 'Create team volume',
  description: 'Create a new team volume',
  request: {
    body: { content: { 'application/json': { schema: NewVolumeSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successfully created a new team volume',
      content: { 'application/json': { schema: VolumeAndTokenSchema } },
    },
    400: _400Response,
    401: _401Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getVolumesVolumeIDRoute = createRoute({
  method: 'get',
  path: '/volumes/{volumeID}',
  tags: ['volumes'],
  summary: 'Team volume',
  description: 'Get team volume info',
  request: { params: z.object({ volumeID: VolumeIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully retrieved a team volume',
      content: { 'application/json': { schema: VolumeAndTokenSchema } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const deleteVolumesVolumeIDRoute = createRoute({
  method: 'delete',
  path: '/volumes/{volumeID}',
  tags: ['volumes'],
  summary: 'Delete team volume',
  description: 'Delete a team volume',
  request: { params: z.object({ volumeID: VolumeIDParamsSchema }) },
  responses: {
    204: { description: 'Successfully deleted a team volume' },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getSecretsRoute = createRoute({
  method: 'get',
  path: '/secrets',
  tags: ['secrets'],
  summary: 'List project secrets',
  description: "List the project's secrets. No response carries a secret value.",
  request: {
    query: z.object({
      nextToken: PaginationNextTokenParamsSchema,
      limit: PaginationLimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Successfully listed the project's secrets",
      content: { 'application/json': { schema: z.array(SecretSchema) } },
      headers: z.object({ 'X-Next-Token': XNextTokenHeaderSchema }),
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    502: _502Response,
    504: _504Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postSecretsRoute = createRoute({
  method: 'post',
  path: '/secrets',
  tags: ['secrets'],
  summary: 'Create a secret',
  description:
    'Create a secret by storing a runtime marker as its first version. The response carries metadata only.',
  request: {
    body: { content: { 'application/json': { schema: NewSecretSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successfully created the secret',
      content: { 'application/json': { schema: SecretSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: {
      description:
        'Secret name conflict or project live-secret limit reached. A quota response has error_code secret_limit_reached and, when reported by the backend, the effective cap in message.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            secretLimitReached: {
              value: {
                code: 409,
                message: 'Project has reached its limit of 50 live secrets',
                error_code: 'secret_limit_reached',
              },
            },
          },
        },
      },
    },
    429: _429Response,
    500: _500Response,
    502: _502Response,
    504: _504Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getSecretsSecretIDRoute = createRoute({
  method: 'get',
  path: '/secrets/{secretID}',
  tags: ['secrets'],
  summary: 'Get a secret',
  description: "Get one secret's metadata, selected by identifier or name.",
  request: { params: z.object({ secretID: SecretIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully retrieved the secret',
      content: { 'application/json': { schema: SecretSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    502: _502Response,
    504: _504Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postSecretsSecretIDRoute = createRoute({
  method: 'post',
  path: '/secrets/{secretID}',
  tags: ['secrets'],
  summary: 'Update a secret',
  description:
    "Replace the secret's stored marker by appending a new version. The response carries metadata only.",
  request: {
    params: z.object({ secretID: SecretIDParamsSchema }),
    body: { content: { 'application/json': { schema: SecretUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully updated the secret',
      content: { 'application/json': { schema: SecretSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    502: _502Response,
    504: _504Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const deleteSecretsSecretIDRoute = createRoute({
  method: 'delete',
  path: '/secrets/{secretID}',
  tags: ['secrets'],
  summary: 'Delete a secret',
  description: 'Revoke the secret and schedule its versions for cleanup.',
  request: { params: z.object({ secretID: SecretIDParamsSchema }) },
  responses: {
    204: { description: 'Successfully deleted the secret' },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    502: _502Response,
    504: _504Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getClustersClusterIDRigsRoute = createRoute({
  method: 'get',
  path: '/clusters/{clusterID}/rigs',
  tags: ['admin'],
  summary: 'List rigs of a cluster',
  description:
    'List the orchestrator node pools ("rigs") of a cluster with a snapshot of their scaling groups. Forwarded to the cluster\'s edge service; a cluster with no rig management configured returns an empty list, and the local cluster answers 501.\n',
  request: { params: z.object({ clusterID: ClusterIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the rigs of the cluster',
      content: { 'application/json': { schema: z.array(RigSchema) } },
    },
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    501: _501Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const putClustersClusterIDRigsRigIDCapacityRoute = createRoute({
  method: 'put',
  path: '/clusters/{clusterID}/rigs/{rigID}/capacity',
  tags: ['admin'],
  summary: 'Set the capacity of a rig',
  description:
    "Set the desired instance count on the rig's scaling group. The value is passed to the cloud provider unchanged; violations of the group's bounds or conflicting concurrent operations surface as errors.\n",
  request: {
    params: z.object({ clusterID: ClusterIDParamsSchema, rigID: RigIDParamsSchema }),
    body: { content: { 'application/json': { schema: RigCapacityChangeSchema } }, required: true },
  },
  responses: {
    202: { description: 'Capacity change accepted' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    501: _501Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const deleteClustersClusterIDRigsInstancesInstanceIDRoute = createRoute({
  method: 'delete',
  path: '/clusters/{clusterID}/rigs/instances/{instanceID}',
  tags: ['admin'],
  summary: 'Terminate an instance of a rig',
  description:
    "Terminate an instance in whichever rig's scaling group it belongs to. The caller chooses whether the rig shrinks or the instance is replaced.\n",
  request: {
    params: z.object({
      clusterID: ClusterIDParamsSchema,
      instanceID: z
        .string()
        .openapi({
          param: {
            name: 'instanceID',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Provider instance ID',
          },
        }),
    }),
    query: z.object({
      decrementDesired: z
        .stringbool()
        .openapi({
          param: {
            name: 'decrementDesired',
            in: 'query',
            required: true,
            schema: { type: 'boolean' },
            description:
              'When true, desired capacity is decremented (rig shrinks); when false, the scaling group launches a replacement instance\n',
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Instance termination accepted' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    409: _409Response,
    429: _429Response,
    500: _500Response,
    501: _501Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getClustersClusterIDRigsRigIDInstancesRoute = createRoute({
  method: 'get',
  path: '/clusters/{clusterID}/rigs/{rigID}/instances',
  tags: ['admin'],
  summary: 'List the instances attached to a rig',
  description:
    "List the instances attached to the rig's scaling group with their creation time and transition state, sorted by instance ID.\n",
  request: { params: z.object({ clusterID: ClusterIDParamsSchema, rigID: RigIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the instances of the rig',
      content: { 'application/json': { schema: z.array(RigInstanceSchema) } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    501: _501Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getClustersClusterIDRigsRigIDErrorsRoute = createRoute({
  method: 'get',
  path: '/clusters/{clusterID}/rigs/{rigID}/errors',
  tags: ['admin'],
  summary: 'List recent scaling errors of a rig',
  description:
    "List recent scaling errors on the rig's scaling group (e.g. failed instance creations due to resource exhaustion), newest first.\n",
  request: {
    params: z.object({ clusterID: ClusterIDParamsSchema, rigID: RigIDParamsSchema }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 50, default: 20 },
            description: 'Maximum number of errors to return',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the scaling errors of the rig',
      content: { 'application/json': { schema: z.array(RigErrorSchema) } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    429: _429Response,
    500: _500Response,
    501: _501Response,
  },
  security: [{ AdminApiKeyAuth: [] }, { AdminJWTAuth: [] }],
})

export const getEventsSandboxesSandboxIDRoute = createRoute({
  method: 'get',
  path: '/events/sandboxes/{sandboxID}',
  tags: ['events'],
  description: 'Get sandbox events',
  request: {
    params: z.object({ sandboxID: SandboxIDParamsSchema }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
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
          z.int32().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 10 },
          },
        }),
      orderAsc: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'orderAsc',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter events to the provided event types',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the sandbox events',
      content: { 'application/json': { schema: z.array(SandboxEventSchema) } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getEventsSandboxesRoute = createRoute({
  method: 'get',
  path: '/events/sandboxes',
  tags: ['events'],
  description: 'Get all sandbox events for the team associated with the API key',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 0, default: 0 },
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
          z.int32().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 10 },
          },
        }),
      orderAsc: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'orderAsc',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter events to the provided event types',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the sandbox events',
      content: { 'application/json': { schema: z.array(SandboxEventSchema) } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getEventsWebhooksRoute = createRoute({
  method: 'get',
  path: '/events/webhooks',
  tags: ['webhooks'],
  description: 'List registered webhooks.',
  responses: {
    200: {
      description: 'List of registered webhooks.',
      content: { 'application/json': { schema: z.array(WebhookDetailSchema) } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const postEventsWebhooksRoute = createRoute({
  method: 'post',
  path: '/events/webhooks',
  tags: ['webhooks'],
  description: 'Register events webhook.',
  request: {
    body: { content: { 'application/json': { schema: WebhookCreateSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successfully created webhook.',
      content: { 'application/json': { schema: WebhookCreationSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getEventsWebhooksWebhookIDRoute = createRoute({
  method: 'get',
  path: '/events/webhooks/{webhookID}',
  tags: ['webhooks'],
  description: 'Get a registered webhook.',
  request: { params: z.object({ webhookID: WebhookIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully returned the webhook configuration.',
      content: { 'application/json': { schema: WebhookDetailSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const deleteEventsWebhooksWebhookIDRoute = createRoute({
  method: 'delete',
  path: '/events/webhooks/{webhookID}',
  tags: ['webhooks'],
  description: 'Delete a registered webhook.',
  request: { params: z.object({ webhookID: WebhookIDParamsSchema }) },
  responses: {
    200: { description: 'Successfully deleted webhook.' },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const patchEventsWebhooksWebhookIDRoute = createRoute({
  method: 'patch',
  path: '/events/webhooks/{webhookID}',
  tags: ['webhooks'],
  description: 'Update a registered webhook configuration.',
  request: {
    params: z.object({ webhookID: WebhookIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: WebhookConfigurationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated webhook.',
      content: { 'application/json': { schema: WebhookDetailSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getEventsWebhooksWebhookIDDeliveriesRoute = createRoute({
  method: 'get',
  path: '/events/webhooks/{webhookID}/deliveries',
  tags: ['webhooks'],
  description: 'List webhook delivery attempts.',
  request: {
    params: z.object({ webhookID: WebhookIDParamsSchema }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description: "Opaque cursor from the previous response's nextCursor field.",
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
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 25 },
          },
        }),
      orderAsc: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'orderAsc',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            description: 'Include deliveries at or after this timestamp.',
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            description: 'Include deliveries before this timestamp.',
          },
        }),
      deliveryStatus: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['success', 'failed'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'deliveryStatus',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string', enum: ['success', 'failed'] } },
            description: 'Filter deliveries by delivery status',
          },
        }),
      eventType: z
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
            name: 'eventType',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter deliveries by event type',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of webhook delivery attempts grouped by event.',
      content: { 'application/json': { schema: WebhookDeliveriesListPayloadSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})

export const getEventsWebhooksWebhookIDStatsRoute = createRoute({
  method: 'get',
  path: '/events/webhooks/{webhookID}/stats',
  tags: ['webhooks'],
  description: 'Get webhook delivery aggregate stats.',
  request: {
    params: z.object({ webhookID: WebhookIDParamsSchema }),
    query: z.object({
      start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            description: 'Inclusive stats range start. Defaults to 24 hours ago.',
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            description: 'Exclusive stats range end. Defaults to now.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webhook delivery stats.',
      content: { 'application/json': { schema: WebhookDeliveryStatsSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [
    { ApiKeyAuth: [] },
    { AuthProviderBearerAuth: [], AuthProviderTeamAuth: [] },
    { AdminApiKeyAuth: [], AdminTeamAuth: [] },
    { AdminJWTAuth: [], AdminTeamAuth: [] },
  ],
})
