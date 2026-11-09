import { createRoute, z } from '@hono/zod-openapi'

const ApiMachineHTTPHeaderSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The header name' }),
    values: z.array(z.string()).exactOptional().openapi({ description: 'The header value' }),
  })
  .openapi({
    description:
      'For http checks, an array of objects with string field Name and array of strings field Values. The key/value pairs specify header and header values that will get passed with the check call.',
    example: { values: ['values', 'values'], name: 'name' },
    required: [],
  })
  .openapi('ApiMachineHTTPHeader')

const ApiMachineCheckSchema = z
  .object({
    grace_period: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time to wait after a VM starts before checking its health' }),
    headers: z.array(ApiMachineHTTPHeaderSchema).exactOptional(),
    interval: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time between connectivity checks' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description: 'For http checks, the HTTP method to use to when making the request',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'For http checks, the path to send the request to' }),
    port: z
      .int()
      .exactOptional()
      .openapi({ description: 'The port to connect to, often the same as internal_port' }),
    protocol: z
      .string()
      .exactOptional()
      .openapi({ description: 'For http checks, whether to use http or https' }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum time a connection can take before being reported as failing its health check',
      }),
    tls_server_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the protocol is https, the hostname to use for TLS certificate validation',
      }),
    tls_skip_verify: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For http checks with https protocol, whether or not to verify the TLS certificate',
      }),
    type: z.string().exactOptional().openapi({ description: 'tcp or http' }),
  })
  .openapi({
    description:
      'An optional object that defines one or more named checks. The key for each check is the check name.',
    example: {
      headers: [
        { values: ['values', 'values'], name: 'name' },
        { values: ['values', 'values'], name: 'name' },
      ],
      path: 'path',
      protocol: 'protocol',
      method: 'method',
      port: 0,
      tls_server_name: 'tls_server_name',
      interval: 'interval',
      tls_skip_verify: true,
      type: 'type',
      grace_period: 'grace_period',
      timeout: 'timeout',
    },
    required: [],
  })
  .openapi('ApiMachineCheck')

const ApiDNSConfigSchema = z
  .object({ skip_registration: z.boolean().exactOptional() })
  .openapi({ example: { skip_registration: true }, required: [] })
  .openapi('ApiDNSConfig')

const ApiFileSchema = z
  .object({
    guest_path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GuestPath is the path on the machine where the file will be written and must be an absolute path.\nFor example: /full/path/to/file.json',
      }),
    raw_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The base64 encoded string of the file contents.' }),
    secret_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the secret that contains the base64 encoded file contents.',
      }),
  })
  .openapi({
    description:
      'A file that will be written to the Machine. One of RawValue or SecretName must be set.',
    example: { secret_name: 'secret_name', raw_value: 'raw_value', guest_path: 'guest_path' },
    required: [],
  })
  .openapi('ApiFile')

const ApiMachineGuestSchema = z
  .object({
    cpu_kind: z.string().exactOptional(),
    cpus: z.int().exactOptional(),
    gpu_kind: z.string().exactOptional(),
    host_dedication_id: z.string().exactOptional(),
    kernel_args: z.array(z.string()).exactOptional(),
    memory_mb: z.int().exactOptional(),
  })
  .openapi({
    example: {
      gpu_kind: 'gpu_kind',
      cpus: 6,
      host_dedication_id: 'host_dedication_id',
      cpu_kind: 'cpu_kind',
      memory_mb: 1,
      kernel_args: ['kernel_args', 'kernel_args'],
    },
    required: [],
  })
  .openapi('ApiMachineGuest')

const ApiMachineInitSchema = z
  .object({
    cmd: z.array(z.string()).exactOptional(),
    entrypoint: z.array(z.string()).exactOptional(),
    exec: z.array(z.string()).exactOptional(),
    kernel_args: z.array(z.string()).exactOptional(),
    swap_size_mb: z.int().exactOptional(),
    tty: z.boolean().exactOptional(),
  })
  .openapi({
    example: {
      entrypoint: ['entrypoint', 'entrypoint'],
      swap_size_mb: 5,
      tty: true,
      cmd: ['cmd', 'cmd'],
      kernel_args: ['kernel_args', 'kernel_args'],
      exec: ['exec', 'exec'],
    },
    required: [],
  })
  .openapi('ApiMachineInit')

const ApiMachineMetricsSchema = z
  .object({ path: z.string().exactOptional(), port: z.int().exactOptional() })
  .openapi({ example: { path: 'path', port: 5 }, required: [] })
  .openapi('ApiMachineMetrics')

const ApiMachineMountSchema = z
  .object({
    add_size_gb: z.int().exactOptional(),
    encrypted: z.boolean().exactOptional(),
    extend_threshold_percent: z.int().exactOptional(),
    name: z.string().exactOptional(),
    path: z.string().exactOptional(),
    size_gb: z.int().exactOptional(),
    size_gb_limit: z.int().exactOptional(),
    volume: z.string().exactOptional(),
  })
  .openapi({
    example: {
      volume: 'volume',
      path: 'path',
      encrypted: true,
      size_gb_limit: 3,
      extend_threshold_percent: 7,
      name: 'name',
      add_size_gb: 2,
      size_gb: 9,
    },
    required: [],
  })
  .openapi('ApiMachineMount')

const ApiMachineProcessSchema = z
  .object({
    cmd: z.array(z.string()).exactOptional(),
    entrypoint: z.array(z.string()).exactOptional(),
    env: z.record(z.string(), z.string()).exactOptional(),
    exec: z.array(z.string()).exactOptional(),
    user: z.string().exactOptional(),
  })
  .openapi({
    example: {
      entrypoint: ['entrypoint', 'entrypoint'],
      cmd: ['cmd', 'cmd'],
      env: { key: 'env' },
      user: 'user',
      exec: ['exec', 'exec'],
    },
    required: [],
  })
  .openapi('ApiMachineProcess')

const ApiMachineRestartSchema = z
  .object({
    max_retries: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'When policy is on-failure, the maximum number of times to attempt to restart the Machine before letting it stop.',
      }),
    policy: z
      .enum(['no', 'always', 'on-failure'])
      .exactOptional()
      .openapi({
        description:
          '* no - Never try to restart a Machine automatically when its main process exits, whether that’s on purpose or on a crash.\n* always - Always restart a Machine automatically and never let it enter a stopped state, even when the main process exits cleanly.\n* on-failure - Try up to MaxRetries times to automatically restart the Machine if it exits with a non-zero exit code. Default when no explicit policy is set, and for Machines with schedules.',
      }),
  })
  .openapi({
    description:
      'The Machine restart policy defines whether and how flyd restarts a Machine after its main process exits. See https://fly.io/docs/machines/guides-examples/machine-restart-policy/.',
    example: { max_retries: 2, policy: 'no' },
    required: [],
  })
  .openapi('ApiMachineRestart')

const ApiMachineServiceConcurrencySchema = z
  .object({
    hard_limit: z.int().exactOptional(),
    soft_limit: z.int().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ example: { soft_limit: 7, type: 'type', hard_limit: 4 }, required: [] })
  .openapi('ApiMachineServiceConcurrency')

const ApiHTTPResponseOptionsSchema = z
  .object({ headers: z.record(z.string(), z.looseObject({})).exactOptional() })
  .openapi({ example: { headers: { key: '{}' } }, required: [] })
  .openapi('ApiHTTPResponseOptions')

const ApiHTTPOptionsSchema = z
  .object({
    compress: z.boolean().exactOptional(),
    h2_backend: z.boolean().exactOptional(),
    response: ApiHTTPResponseOptionsSchema.exactOptional(),
  })
  .openapi({
    example: { compress: true, response: { headers: { key: '{}' } }, h2_backend: true },
    required: [],
  })
  .openapi('ApiHTTPOptions')

const ApiProxyProtoOptionsSchema = z
  .object({ version: z.string().exactOptional() })
  .openapi({ example: { version: 'version' }, required: [] })
  .openapi('ApiProxyProtoOptions')

const ApiTLSOptionsSchema = z
  .object({
    alpn: z.array(z.string()).exactOptional(),
    default_self_signed: z.boolean().exactOptional(),
    versions: z.array(z.string()).exactOptional(),
  })
  .openapi({
    example: {
      alpn: ['alpn', 'alpn'],
      default_self_signed: true,
      versions: ['versions', 'versions'],
    },
    required: [],
  })
  .openapi('ApiTLSOptions')

const ApiMachinePortSchema = z
  .object({
    end_port: z.int().exactOptional(),
    force_https: z.boolean().exactOptional(),
    handlers: z.array(z.string()).exactOptional(),
    http_options: ApiHTTPOptionsSchema.exactOptional(),
    port: z.int().exactOptional(),
    proxy_proto_options: ApiProxyProtoOptionsSchema.exactOptional(),
    start_port: z.int().exactOptional(),
    tls_options: ApiTLSOptionsSchema.exactOptional(),
  })
  .openapi({
    example: {
      force_https: true,
      port: 6,
      handlers: ['handlers', 'handlers'],
      start_port: 7,
      tls_options: {
        alpn: ['alpn', 'alpn'],
        default_self_signed: true,
        versions: ['versions', 'versions'],
      },
      proxy_proto_options: { version: 'version' },
      end_port: 1,
      http_options: { compress: true, response: { headers: { key: '{}' } }, h2_backend: true },
    },
    required: [],
  })
  .openapi('ApiMachinePort')

const ApiMachineServiceSchema = z
  .object({
    autostart: z.boolean().exactOptional(),
    autostop: z.boolean().exactOptional(),
    checks: z.array(ApiMachineCheckSchema).exactOptional(),
    concurrency: ApiMachineServiceConcurrencySchema.exactOptional(),
    force_instance_description: z.string().exactOptional(),
    force_instance_key: z.string().exactOptional(),
    internal_port: z.int().exactOptional(),
    min_machines_running: z.int().exactOptional(),
    ports: z.array(ApiMachinePortSchema).exactOptional(),
    protocol: z.string().exactOptional(),
  })
  .openapi({
    example: {
      min_machines_running: 1,
      protocol: 'protocol',
      checks: [
        {
          headers: [
            { values: ['values', 'values'], name: 'name' },
            { values: ['values', 'values'], name: 'name' },
          ],
          path: 'path',
          protocol: 'protocol',
          method: 'method',
          port: 0,
          tls_server_name: 'tls_server_name',
          interval: 'interval',
          tls_skip_verify: true,
          type: 'type',
          grace_period: 'grace_period',
          timeout: 'timeout',
        },
        {
          headers: [
            { values: ['values', 'values'], name: 'name' },
            { values: ['values', 'values'], name: 'name' },
          ],
          path: 'path',
          protocol: 'protocol',
          method: 'method',
          port: 0,
          tls_server_name: 'tls_server_name',
          interval: 'interval',
          tls_skip_verify: true,
          type: 'type',
          grace_period: 'grace_period',
          timeout: 'timeout',
        },
      ],
      force_instance_key: 'force_instance_key',
      autostart: true,
      internal_port: 1,
      ports: [
        {
          force_https: true,
          port: 6,
          handlers: ['handlers', 'handlers'],
          start_port: 7,
          tls_options: {
            alpn: ['alpn', 'alpn'],
            default_self_signed: true,
            versions: ['versions', 'versions'],
          },
          proxy_proto_options: { version: 'version' },
          end_port: 1,
          http_options: { compress: true, response: { headers: { key: '{}' } }, h2_backend: true },
        },
        {
          force_https: true,
          port: 6,
          handlers: ['handlers', 'handlers'],
          start_port: 7,
          tls_options: {
            alpn: ['alpn', 'alpn'],
            default_self_signed: true,
            versions: ['versions', 'versions'],
          },
          proxy_proto_options: { version: 'version' },
          end_port: 1,
          http_options: { compress: true, response: { headers: { key: '{}' } }, h2_backend: true },
        },
      ],
      force_instance_description: 'force_instance_description',
      autostop: true,
      concurrency: { soft_limit: 7, type: 'type', hard_limit: 4 },
    },
    required: [],
  })
  .openapi('ApiMachineService')

const ApiStaticSchema = z
  .object({ guest_path: z.string(), url_prefix: z.string() })
  .openapi({
    example: { guest_path: 'guest_path', url_prefix: 'url_prefix' },
    required: ['guest_path', 'url_prefix'],
  })
  .openapi('ApiStatic')

const ApiStopConfigSchema = z
  .object({ signal: z.string().exactOptional(), timeout: z.string().exactOptional() })
  .openapi({ example: { signal: 'signal', timeout: 'timeout' }, required: [] })
  .openapi('ApiStopConfig')

type ApiMachineConfigType = {
  auto_destroy?: boolean
  checks?: { [key: string]: z.infer<typeof ApiMachineCheckSchema> }
  disable_machine_autostart?: boolean
  dns?: z.infer<typeof ApiDNSConfigSchema>
  env?: { [key: string]: string }
  files?: z.infer<typeof ApiFileSchema>[]
  guest?: z.infer<typeof ApiMachineGuestSchema>
  image?: string
  init?: z.infer<typeof ApiMachineInitSchema>
  metadata?: { [key: string]: string }
  metrics?: z.infer<typeof ApiMachineMetricsSchema>
  mounts?: z.infer<typeof ApiMachineMountSchema>[]
  processes?: z.infer<typeof ApiMachineProcessSchema>[]
  restart?: z.infer<typeof ApiMachineRestartSchema>
  schedule?: string
  services?: z.infer<typeof ApiMachineServiceSchema>[]
  size?: string
  standbys?: string[]
  statics?: z.infer<typeof ApiStaticSchema>[]
  stop_config?: z.infer<typeof ApiStopConfigSchema>
}

const ApiMachineConfigSchema: z.ZodType<ApiMachineConfigType> = z
  .object({
    auto_destroy: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional boolean telling the Machine to destroy itself once it’s complete (default false)',
      }),
    checks: z.record(z.string(), ApiMachineCheckSchema).exactOptional(),
    disable_machine_autostart: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Deprecated: use Service.Autostart instead' }),
    dns: ApiDNSConfigSchema.exactOptional(),
    env: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'An object filled with key/value pairs to be set as environment variables',
      }),
    files: z.array(ApiFileSchema).exactOptional(),
    guest: ApiMachineGuestSchema.exactOptional(),
    image: z.string().exactOptional().openapi({ description: 'The docker image to run' }),
    init: ApiMachineInitSchema.exactOptional(),
    metadata: z.record(z.string(), z.string()).exactOptional(),
    metrics: ApiMachineMetricsSchema.exactOptional(),
    mounts: z.array(ApiMachineMountSchema).exactOptional(),
    processes: z.array(ApiMachineProcessSchema).exactOptional(),
    restart: ApiMachineRestartSchema.exactOptional(),
    schedule: z.string().exactOptional(),
    services: z.array(ApiMachineServiceSchema).exactOptional(),
    size: z.string().exactOptional().openapi({ description: 'Deprecated: use Guest instead' }),
    standbys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Standbys enable a machine to be a standby for another. In the event of a hardware failure,\nthe standby machine will be started.',
      }),
    statics: z.array(ApiStaticSchema).exactOptional(),
    stop_config: ApiStopConfigSchema.exactOptional(),
  })
  .openapi({
    example: {
      image: 'image',
      init: {
        entrypoint: ['entrypoint', 'entrypoint'],
        swap_size_mb: 5,
        tty: true,
        cmd: ['cmd', 'cmd'],
        kernel_args: ['kernel_args', 'kernel_args'],
        exec: ['exec', 'exec'],
      },
      metadata: { key: 'metadata' },
      processes: [
        {
          entrypoint: ['entrypoint', 'entrypoint'],
          cmd: ['cmd', 'cmd'],
          env: { key: 'env' },
          user: 'user',
          exec: ['exec', 'exec'],
        },
        {
          entrypoint: ['entrypoint', 'entrypoint'],
          cmd: ['cmd', 'cmd'],
          env: { key: 'env' },
          user: 'user',
          exec: ['exec', 'exec'],
        },
      ],
      restart: { max_retries: 2, policy: 'no' },
      auto_destroy: true,
      dns: { skip_registration: true },
      mounts: [
        {
          volume: 'volume',
          path: 'path',
          encrypted: true,
          size_gb_limit: 3,
          extend_threshold_percent: 7,
          name: 'name',
          add_size_gb: 2,
          size_gb: 9,
        },
        {
          volume: 'volume',
          path: 'path',
          encrypted: true,
          size_gb_limit: 3,
          extend_threshold_percent: 7,
          name: 'name',
          add_size_gb: 2,
          size_gb: 9,
        },
      ],
      services: [
        {
          min_machines_running: 1,
          protocol: 'protocol',
          checks: [
            {
              headers: [
                { values: ['values', 'values'], name: 'name' },
                { values: ['values', 'values'], name: 'name' },
              ],
              path: 'path',
              protocol: 'protocol',
              method: 'method',
              port: 0,
              tls_server_name: 'tls_server_name',
              interval: 'interval',
              tls_skip_verify: true,
              type: 'type',
              grace_period: 'grace_period',
              timeout: 'timeout',
            },
            {
              headers: [
                { values: ['values', 'values'], name: 'name' },
                { values: ['values', 'values'], name: 'name' },
              ],
              path: 'path',
              protocol: 'protocol',
              method: 'method',
              port: 0,
              tls_server_name: 'tls_server_name',
              interval: 'interval',
              tls_skip_verify: true,
              type: 'type',
              grace_period: 'grace_period',
              timeout: 'timeout',
            },
          ],
          force_instance_key: 'force_instance_key',
          autostart: true,
          internal_port: 1,
          ports: [
            {
              force_https: true,
              port: 6,
              handlers: ['handlers', 'handlers'],
              start_port: 7,
              tls_options: {
                alpn: ['alpn', 'alpn'],
                default_self_signed: true,
                versions: ['versions', 'versions'],
              },
              proxy_proto_options: { version: 'version' },
              end_port: 1,
              http_options: {
                compress: true,
                response: { headers: { key: '{}' } },
                h2_backend: true,
              },
            },
            {
              force_https: true,
              port: 6,
              handlers: ['handlers', 'handlers'],
              start_port: 7,
              tls_options: {
                alpn: ['alpn', 'alpn'],
                default_self_signed: true,
                versions: ['versions', 'versions'],
              },
              proxy_proto_options: { version: 'version' },
              end_port: 1,
              http_options: {
                compress: true,
                response: { headers: { key: '{}' } },
                h2_backend: true,
              },
            },
          ],
          force_instance_description: 'force_instance_description',
          autostop: true,
          concurrency: { soft_limit: 7, type: 'type', hard_limit: 4 },
        },
        {
          min_machines_running: 1,
          protocol: 'protocol',
          checks: [
            {
              headers: [
                { values: ['values', 'values'], name: 'name' },
                { values: ['values', 'values'], name: 'name' },
              ],
              path: 'path',
              protocol: 'protocol',
              method: 'method',
              port: 0,
              tls_server_name: 'tls_server_name',
              interval: 'interval',
              tls_skip_verify: true,
              type: 'type',
              grace_period: 'grace_period',
              timeout: 'timeout',
            },
            {
              headers: [
                { values: ['values', 'values'], name: 'name' },
                { values: ['values', 'values'], name: 'name' },
              ],
              path: 'path',
              protocol: 'protocol',
              method: 'method',
              port: 0,
              tls_server_name: 'tls_server_name',
              interval: 'interval',
              tls_skip_verify: true,
              type: 'type',
              grace_period: 'grace_period',
              timeout: 'timeout',
            },
          ],
          force_instance_key: 'force_instance_key',
          autostart: true,
          internal_port: 1,
          ports: [
            {
              force_https: true,
              port: 6,
              handlers: ['handlers', 'handlers'],
              start_port: 7,
              tls_options: {
                alpn: ['alpn', 'alpn'],
                default_self_signed: true,
                versions: ['versions', 'versions'],
              },
              proxy_proto_options: { version: 'version' },
              end_port: 1,
              http_options: {
                compress: true,
                response: { headers: { key: '{}' } },
                h2_backend: true,
              },
            },
            {
              force_https: true,
              port: 6,
              handlers: ['handlers', 'handlers'],
              start_port: 7,
              tls_options: {
                alpn: ['alpn', 'alpn'],
                default_self_signed: true,
                versions: ['versions', 'versions'],
              },
              proxy_proto_options: { version: 'version' },
              end_port: 1,
              http_options: {
                compress: true,
                response: { headers: { key: '{}' } },
                h2_backend: true,
              },
            },
          ],
          force_instance_description: 'force_instance_description',
          autostop: true,
          concurrency: { soft_limit: 7, type: 'type', hard_limit: 4 },
        },
      ],
      env: { key: 'env' },
      statics: [
        { guest_path: 'guest_path', url_prefix: 'url_prefix' },
        { guest_path: 'guest_path', url_prefix: 'url_prefix' },
      ],
      schedule: 'schedule',
      checks: {
        key: {
          headers: [
            { values: ['values', 'values'], name: 'name' },
            { values: ['values', 'values'], name: 'name' },
          ],
          path: 'path',
          protocol: 'protocol',
          method: 'method',
          port: 0,
          tls_server_name: 'tls_server_name',
          interval: 'interval',
          tls_skip_verify: true,
          type: 'type',
          grace_period: 'grace_period',
          timeout: 'timeout',
        },
      },
      size: 'size',
      files: [
        { secret_name: 'secret_name', raw_value: 'raw_value', guest_path: 'guest_path' },
        { secret_name: 'secret_name', raw_value: 'raw_value', guest_path: 'guest_path' },
      ],
      guest: {
        gpu_kind: 'gpu_kind',
        cpus: 6,
        host_dedication_id: 'host_dedication_id',
        cpu_kind: 'cpu_kind',
        memory_mb: 1,
        kernel_args: ['kernel_args', 'kernel_args'],
      },
      disable_machine_autostart: true,
      metrics: { path: 'path', port: 5 },
      standbys: ['standbys', 'standbys'],
      stop_config: { signal: 'signal', timeout: 'timeout' },
    },
    required: [],
  })
  .openapi('ApiMachineConfig')

type CreateMachineRequestType = {
  config?: z.infer<typeof ApiMachineConfigSchema>
  lease_ttl?: number
  lsvd?: boolean
  name?: string
  region?: string
  skip_launch?: boolean
  skip_service_registration?: boolean
}

const CheckStatusSchema = z
  .object({
    name: z.string().exactOptional(),
    output: z.string().exactOptional(),
    status: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({
    example: { output: 'output', updated_at: 'updated_at', name: 'name', status: 'status' },
    required: [],
  })
  .openapi('CheckStatus')

const MachineEventSchema = z
  .object({
    id: z.string().exactOptional(),
    request: z.looseObject({}).exactOptional(),
    source: z.string().exactOptional(),
    status: z.string().exactOptional(),
    timestamp: z.int().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({
    example: {
      request: '{}',
      id: 'id',
      source: 'source',
      type: 'type',
      status: 'status',
      timestamp: 1,
    },
    required: [],
  })
  .openapi('MachineEvent')

const ImageRefSchema = z
  .object({
    digest: z.string().exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    registry: z.string().exactOptional(),
    repository: z.string().exactOptional(),
    tag: z.string().exactOptional(),
  })
  .openapi({
    example: {
      registry: 'registry',
      digest: 'digest',
      tag: 'tag',
      repository: 'repository',
      labels: { key: 'labels' },
    },
    required: [],
  })
  .openapi('ImageRef')

type MachineType = {
  checks?: z.infer<typeof CheckStatusSchema>[]
  config?: z.infer<typeof ApiMachineConfigSchema>
  created_at?: string
  events?: z.infer<typeof MachineEventSchema>[]
  id?: string
  image_ref?: z.infer<typeof ImageRefSchema>
  instance_id?: string
  name?: string
  nonce?: string
  private_ip?: string
  region?: string
  state?: string
  updated_at?: string
}

type MachineVersionType = { user_config?: z.infer<typeof ApiMachineConfigSchema>; version?: string }

type UpdateMachineRequestType = {
  config?: z.infer<typeof ApiMachineConfigSchema>
  current_version?: string
  lease_ttl?: number
  lsvd?: boolean
  name?: string
  region?: string
  skip_launch?: boolean
  skip_service_registration?: boolean
}

const OrganizationSchema = z
  .object({ name: z.string().exactOptional(), slug: z.string().exactOptional() })
  .openapi({ example: { name: 'name', slug: 'slug' }, required: [] })
  .openapi('Organization')

const AppSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    organization: OrganizationSchema.exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({
    example: {
      organization: { name: 'name', slug: 'slug' },
      name: 'name',
      id: 'id',
      status: 'status',
    },
    required: [],
  })
  .openapi('App')

const CreateAppRequestSchema = z
  .object({
    app_name: z.string().exactOptional(),
    app_role_id: z.string().exactOptional(),
    network: z.string().exactOptional(),
    org_slug: z.string().exactOptional(),
  })
  .openapi({
    example: {
      app_name: 'app_name',
      org_slug: 'org_slug',
      app_role_id: 'app_role_id',
      network: 'network',
    },
    required: [],
  })
  .openapi('CreateAppRequest')

const CreateLeaseRequestSchema = z
  .object({ description: z.string().exactOptional(), ttl: z.int().exactOptional() })
  .openapi({ example: { description: 'description', ttl: 0 }, required: [] })
  .openapi('CreateLeaseRequest')

const CreateMachineRequestSchema: z.ZodType<CreateMachineRequestType> = z
  .object({
    config: ApiMachineConfigSchema.exactOptional().openapi({
      description: 'An object defining the Machine configuration',
    }),
    lease_ttl: z.int().exactOptional(),
    lsvd: z.boolean().exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique name for this Machine. If omitted, one is generated for you',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target region. Omitting this param launches in the same region as your WireGuard peer connection (somewhere near you).',
      }),
    skip_launch: z.boolean().exactOptional(),
    skip_service_registration: z.boolean().exactOptional(),
  })
  .openapi({
    example: {
      skip_service_registration: true,
      lsvd: true,
      name: 'name',
      lease_ttl: 0,
      region: 'region',
      config: '{}',
      skip_launch: true,
    },
    required: [],
  })
  .openapi('CreateMachineRequest')

const CreateVolumeRequestSchema = z
  .object({
    compute: ApiMachineGuestSchema.exactOptional(),
    encrypted: z.boolean().exactOptional(),
    fstype: z.string().exactOptional(),
    machines_only: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    region: z.string().exactOptional(),
    require_unique_zone: z.boolean().exactOptional(),
    size_gb: z.int().exactOptional(),
    snapshot_id: z.string().exactOptional().openapi({ description: 'restore from snapshot' }),
    snapshot_retention: z.int().exactOptional(),
    source_volume_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'fork from remote volume' }),
  })
  .openapi({
    example: {
      compute: {
        gpu_kind: 'gpu_kind',
        cpus: 6,
        host_dedication_id: 'host_dedication_id',
        cpu_kind: 'cpu_kind',
        memory_mb: 1,
        kernel_args: ['kernel_args', 'kernel_args'],
      },
      encrypted: true,
      require_unique_zone: true,
      snapshot_id: 'snapshot_id',
      name: 'name',
      size_gb: 0,
      machines_only: true,
      region: 'region',
      snapshot_retention: 6,
      fstype: 'fstype',
      source_volume_id: 'source_volume_id',
    },
    required: [],
  })
  .openapi('CreateVolumeRequest')

const MainStatusCodeSchema = z
  .enum(['unknown', 'insufficient_capacity'])
  .openapi({ 'x-enum-varnames': ['unknown', 'capacityErr'] })
  .openapi('MainStatusCode')

const ErrorResponseSchema = z
  .object({
    details: z.looseObject({}).exactOptional().openapi({ description: 'Deprecated' }),
    error: z.string().exactOptional(),
    status: MainStatusCodeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const ExtendVolumeRequestSchema = z
  .object({ size_gb: z.int().exactOptional() })
  .openapi({ example: { size_gb: 0 }, required: [] })
  .openapi('ExtendVolumeRequest')

const VolumeSchema = z
  .object({
    attached_alloc_id: z.string().exactOptional(),
    attached_machine_id: z.string().exactOptional(),
    block_size: z.int().exactOptional(),
    blocks: z.int().exactOptional(),
    blocks_avail: z.int().exactOptional(),
    blocks_free: z.int().exactOptional(),
    created_at: z.string().exactOptional(),
    encrypted: z.boolean().exactOptional(),
    fstype: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    region: z.string().exactOptional(),
    size_gb: z.int().exactOptional(),
    snapshot_retention: z.int().exactOptional(),
    state: z.string().exactOptional(),
    zone: z.string().exactOptional(),
  })
  .openapi({
    example: {
      blocks: 6,
      attached_machine_id: 'attached_machine_id',
      created_at: 'created_at',
      snapshot_retention: 2,
      blocks_free: 5,
      encrypted: true,
      zone: 'zone',
      blocks_avail: 1,
      name: 'name',
      size_gb: 5,
      attached_alloc_id: 'attached_alloc_id',
      id: 'id',
      state: 'state',
      region: 'region',
      block_size: 0,
      fstype: 'fstype',
    },
    required: [],
  })
  .openapi('Volume')

const ExtendVolumeResponseSchema = z
  .object({ needs_restart: z.boolean().exactOptional(), volume: VolumeSchema.exactOptional() })
  .openapi({
    example: {
      volume: {
        blocks: 6,
        attached_machine_id: 'attached_machine_id',
        created_at: 'created_at',
        snapshot_retention: 2,
        blocks_free: 5,
        encrypted: true,
        zone: 'zone',
        blocks_avail: 1,
        name: 'name',
        size_gb: 5,
        attached_alloc_id: 'attached_alloc_id',
        id: 'id',
        state: 'state',
        region: 'region',
        block_size: 0,
        fstype: 'fstype',
      },
      needs_restart: true,
    },
    required: [],
  })
  .openapi('ExtendVolumeResponse')

const LeaseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description or reason for the Lease.' }),
    expires_at: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'ExpiresAt is the unix timestamp in UTC to denote when the Lease will no longer be valid.',
      }),
    nonce: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Nonce is the unique ID autogenerated and associated with the Lease.',
      }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Owner is the user identifier which acquired the Lease.' }),
    version: z.string().exactOptional().openapi({ description: 'Machine version' }),
  })
  .openapi({
    example: {
      owner: 'owner',
      expires_at: 0,
      description: 'description',
      nonce: 'nonce',
      version: 'version',
    },
    required: [],
  })
  .openapi('Lease')

const ListAppSchema = z
  .object({
    id: z.string().exactOptional(),
    machine_count: z.int().exactOptional(),
    name: z.string().exactOptional(),
    network: z.looseObject({}).exactOptional(),
  })
  .openapi({ example: { name: 'name', id: 'id', machine_count: 0, network: '{}' }, required: [] })
  .openapi('ListApp')

const ListAppsResponseSchema = z
  .object({ apps: z.array(ListAppSchema).exactOptional(), total_apps: z.int().exactOptional() })
  .openapi({
    example: {
      total_apps: 6,
      apps: [
        { name: 'name', id: 'id', machine_count: 0, network: '{}' },
        { name: 'name', id: 'id', machine_count: 0, network: '{}' },
      ],
    },
    required: [],
  })
  .openapi('ListAppsResponse')

const ListenSocketSchema = z
  .object({ address: z.string().exactOptional(), proto: z.string().exactOptional() })
  .openapi({ example: { address: 'address', proto: 'proto' }, required: [] })
  .openapi('ListenSocket')

const MachineSchema: z.ZodType<MachineType> = z
  .object({
    checks: z.array(CheckStatusSchema).exactOptional(),
    config: ApiMachineConfigSchema.exactOptional(),
    created_at: z.string().exactOptional(),
    events: z.array(MachineEventSchema).exactOptional(),
    id: z.string().exactOptional(),
    image_ref: ImageRefSchema.exactOptional(),
    instance_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'InstanceID is unique for each version of the machine' }),
    name: z.string().exactOptional(),
    nonce: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Nonce is only every returned on machine creation if a lease_duration was provided.',
      }),
    private_ip: z
      .string()
      .exactOptional()
      .openapi({ description: 'PrivateIP is the internal 6PN address of the machine.' }),
    region: z.string().exactOptional(),
    state: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({
    example: {
      image_ref: {
        registry: 'registry',
        digest: 'digest',
        tag: 'tag',
        repository: 'repository',
        labels: { key: 'labels' },
      },
      created_at: 'created_at',
      nonce: 'nonce',
      private_ip: 'private_ip',
      checks: [
        { output: 'output', updated_at: 'updated_at', name: 'name', status: 'status' },
        { output: 'output', updated_at: 'updated_at', name: 'name', status: 'status' },
      ],
      instance_id: 'instance_id',
      updated_at: 'updated_at',
      name: 'name',
      id: 'id',
      state: 'state',
      region: 'region',
      config: {
        image: 'image',
        init: {
          entrypoint: ['entrypoint', 'entrypoint'],
          swap_size_mb: 5,
          tty: true,
          cmd: ['cmd', 'cmd'],
          kernel_args: ['kernel_args', 'kernel_args'],
          exec: ['exec', 'exec'],
        },
        metadata: { key: 'metadata' },
        processes: [
          {
            entrypoint: ['entrypoint', 'entrypoint'],
            cmd: ['cmd', 'cmd'],
            env: { key: 'env' },
            user: 'user',
            exec: ['exec', 'exec'],
          },
          {
            entrypoint: ['entrypoint', 'entrypoint'],
            cmd: ['cmd', 'cmd'],
            env: { key: 'env' },
            user: 'user',
            exec: ['exec', 'exec'],
          },
        ],
        restart: { max_retries: 2, policy: 'no' },
        auto_destroy: true,
        dns: { skip_registration: true },
        mounts: [
          {
            volume: 'volume',
            path: 'path',
            encrypted: true,
            size_gb_limit: 3,
            extend_threshold_percent: 7,
            name: 'name',
            add_size_gb: 2,
            size_gb: 9,
          },
          {
            volume: 'volume',
            path: 'path',
            encrypted: true,
            size_gb_limit: 3,
            extend_threshold_percent: 7,
            name: 'name',
            add_size_gb: 2,
            size_gb: 9,
          },
        ],
        services: [
          {
            min_machines_running: 1,
            protocol: 'protocol',
            checks: [
              {
                headers: [
                  { values: ['values', 'values'], name: 'name' },
                  { values: ['values', 'values'], name: 'name' },
                ],
                path: 'path',
                protocol: 'protocol',
                method: 'method',
                port: 0,
                tls_server_name: 'tls_server_name',
                interval: 'interval',
                tls_skip_verify: true,
                type: 'type',
                grace_period: 'grace_period',
                timeout: 'timeout',
              },
              {
                headers: [
                  { values: ['values', 'values'], name: 'name' },
                  { values: ['values', 'values'], name: 'name' },
                ],
                path: 'path',
                protocol: 'protocol',
                method: 'method',
                port: 0,
                tls_server_name: 'tls_server_name',
                interval: 'interval',
                tls_skip_verify: true,
                type: 'type',
                grace_period: 'grace_period',
                timeout: 'timeout',
              },
            ],
            force_instance_key: 'force_instance_key',
            autostart: true,
            internal_port: 1,
            ports: [
              {
                force_https: true,
                port: 6,
                handlers: ['handlers', 'handlers'],
                start_port: 7,
                tls_options: {
                  alpn: ['alpn', 'alpn'],
                  default_self_signed: true,
                  versions: ['versions', 'versions'],
                },
                proxy_proto_options: { version: 'version' },
                end_port: 1,
                http_options: {
                  compress: true,
                  response: { headers: { key: '{}' } },
                  h2_backend: true,
                },
              },
              {
                force_https: true,
                port: 6,
                handlers: ['handlers', 'handlers'],
                start_port: 7,
                tls_options: {
                  alpn: ['alpn', 'alpn'],
                  default_self_signed: true,
                  versions: ['versions', 'versions'],
                },
                proxy_proto_options: { version: 'version' },
                end_port: 1,
                http_options: {
                  compress: true,
                  response: { headers: { key: '{}' } },
                  h2_backend: true,
                },
              },
            ],
            force_instance_description: 'force_instance_description',
            autostop: true,
            concurrency: { soft_limit: 7, type: 'type', hard_limit: 4 },
          },
          {
            min_machines_running: 1,
            protocol: 'protocol',
            checks: [
              {
                headers: [
                  { values: ['values', 'values'], name: 'name' },
                  { values: ['values', 'values'], name: 'name' },
                ],
                path: 'path',
                protocol: 'protocol',
                method: 'method',
                port: 0,
                tls_server_name: 'tls_server_name',
                interval: 'interval',
                tls_skip_verify: true,
                type: 'type',
                grace_period: 'grace_period',
                timeout: 'timeout',
              },
              {
                headers: [
                  { values: ['values', 'values'], name: 'name' },
                  { values: ['values', 'values'], name: 'name' },
                ],
                path: 'path',
                protocol: 'protocol',
                method: 'method',
                port: 0,
                tls_server_name: 'tls_server_name',
                interval: 'interval',
                tls_skip_verify: true,
                type: 'type',
                grace_period: 'grace_period',
                timeout: 'timeout',
              },
            ],
            force_instance_key: 'force_instance_key',
            autostart: true,
            internal_port: 1,
            ports: [
              {
                force_https: true,
                port: 6,
                handlers: ['handlers', 'handlers'],
                start_port: 7,
                tls_options: {
                  alpn: ['alpn', 'alpn'],
                  default_self_signed: true,
                  versions: ['versions', 'versions'],
                },
                proxy_proto_options: { version: 'version' },
                end_port: 1,
                http_options: {
                  compress: true,
                  response: { headers: { key: '{}' } },
                  h2_backend: true,
                },
              },
              {
                force_https: true,
                port: 6,
                handlers: ['handlers', 'handlers'],
                start_port: 7,
                tls_options: {
                  alpn: ['alpn', 'alpn'],
                  default_self_signed: true,
                  versions: ['versions', 'versions'],
                },
                proxy_proto_options: { version: 'version' },
                end_port: 1,
                http_options: {
                  compress: true,
                  response: { headers: { key: '{}' } },
                  h2_backend: true,
                },
              },
            ],
            force_instance_description: 'force_instance_description',
            autostop: true,
            concurrency: { soft_limit: 7, type: 'type', hard_limit: 4 },
          },
        ],
        env: { key: 'env' },
        statics: [
          { guest_path: 'guest_path', url_prefix: 'url_prefix' },
          { guest_path: 'guest_path', url_prefix: 'url_prefix' },
        ],
        schedule: 'schedule',
        checks: {
          key: {
            headers: [
              { values: ['values', 'values'], name: 'name' },
              { values: ['values', 'values'], name: 'name' },
            ],
            path: 'path',
            protocol: 'protocol',
            method: 'method',
            port: 0,
            tls_server_name: 'tls_server_name',
            interval: 'interval',
            tls_skip_verify: true,
            type: 'type',
            grace_period: 'grace_period',
            timeout: 'timeout',
          },
        },
        size: 'size',
        files: [
          { secret_name: 'secret_name', raw_value: 'raw_value', guest_path: 'guest_path' },
          { secret_name: 'secret_name', raw_value: 'raw_value', guest_path: 'guest_path' },
        ],
        guest: {
          gpu_kind: 'gpu_kind',
          cpus: 6,
          host_dedication_id: 'host_dedication_id',
          cpu_kind: 'cpu_kind',
          memory_mb: 1,
          kernel_args: ['kernel_args', 'kernel_args'],
        },
        disable_machine_autostart: true,
        metrics: { path: 'path', port: 5 },
        standbys: ['standbys', 'standbys'],
        stop_config: { signal: 'signal', timeout: 'timeout' },
      },
      events: [
        { request: '{}', id: 'id', source: 'source', type: 'type', status: 'status', timestamp: 1 },
        { request: '{}', id: 'id', source: 'source', type: 'type', status: 'status', timestamp: 1 },
      ],
    },
    required: [],
  })
  .openapi('Machine')

const MachineExecRequestSchema = z
  .object({
    cmd: z.string().exactOptional().openapi({ description: 'Deprecated: use Command instead' }),
    command: z.array(z.string()).exactOptional(),
    timeout: z.int().exactOptional(),
  })
  .openapi({ example: { cmd: 'cmd', command: ['command', 'command'], timeout: 0 }, required: [] })
  .openapi('MachineExecRequest')

const MachineVersionSchema: z.ZodType<MachineVersionType> = z
  .object({
    user_config: ApiMachineConfigSchema.exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({
    example: {
      version: 'version',
      user_config: {
        image: 'image',
        init: {
          entrypoint: ['entrypoint', 'entrypoint'],
          swap_size_mb: 5,
          tty: true,
          cmd: ['cmd', 'cmd'],
          kernel_args: ['kernel_args', 'kernel_args'],
          exec: ['exec', 'exec'],
        },
        metadata: { key: 'metadata' },
        processes: [
          {
            entrypoint: ['entrypoint', 'entrypoint'],
            cmd: ['cmd', 'cmd'],
            env: { key: 'env' },
            user: 'user',
            exec: ['exec', 'exec'],
          },
          {
            entrypoint: ['entrypoint', 'entrypoint'],
            cmd: ['cmd', 'cmd'],
            env: { key: 'env' },
            user: 'user',
            exec: ['exec', 'exec'],
          },
        ],
        restart: { max_retries: 2, policy: 'no' },
        auto_destroy: true,
        dns: { skip_registration: true },
        mounts: [
          {
            volume: 'volume',
            path: 'path',
            encrypted: true,
            size_gb_limit: 3,
            extend_threshold_percent: 7,
            name: 'name',
            add_size_gb: 2,
            size_gb: 9,
          },
          {
            volume: 'volume',
            path: 'path',
            encrypted: true,
            size_gb_limit: 3,
            extend_threshold_percent: 7,
            name: 'name',
            add_size_gb: 2,
            size_gb: 9,
          },
        ],
        services: [
          {
            min_machines_running: 1,
            protocol: 'protocol',
            checks: [
              {
                headers: [
                  { values: ['values', 'values'], name: 'name' },
                  { values: ['values', 'values'], name: 'name' },
                ],
                path: 'path',
                protocol: 'protocol',
                method: 'method',
                port: 0,
                tls_server_name: 'tls_server_name',
                interval: 'interval',
                tls_skip_verify: true,
                type: 'type',
                grace_period: 'grace_period',
                timeout: 'timeout',
              },
              {
                headers: [
                  { values: ['values', 'values'], name: 'name' },
                  { values: ['values', 'values'], name: 'name' },
                ],
                path: 'path',
                protocol: 'protocol',
                method: 'method',
                port: 0,
                tls_server_name: 'tls_server_name',
                interval: 'interval',
                tls_skip_verify: true,
                type: 'type',
                grace_period: 'grace_period',
                timeout: 'timeout',
              },
            ],
            force_instance_key: 'force_instance_key',
            autostart: true,
            internal_port: 1,
            ports: [
              {
                force_https: true,
                port: 6,
                handlers: ['handlers', 'handlers'],
                start_port: 7,
                tls_options: {
                  alpn: ['alpn', 'alpn'],
                  default_self_signed: true,
                  versions: ['versions', 'versions'],
                },
                proxy_proto_options: { version: 'version' },
                end_port: 1,
                http_options: {
                  compress: true,
                  response: { headers: { key: '{}' } },
                  h2_backend: true,
                },
              },
              {
                force_https: true,
                port: 6,
                handlers: ['handlers', 'handlers'],
                start_port: 7,
                tls_options: {
                  alpn: ['alpn', 'alpn'],
                  default_self_signed: true,
                  versions: ['versions', 'versions'],
                },
                proxy_proto_options: { version: 'version' },
                end_port: 1,
                http_options: {
                  compress: true,
                  response: { headers: { key: '{}' } },
                  h2_backend: true,
                },
              },
            ],
            force_instance_description: 'force_instance_description',
            autostop: true,
            concurrency: { soft_limit: 7, type: 'type', hard_limit: 4 },
          },
          {
            min_machines_running: 1,
            protocol: 'protocol',
            checks: [
              {
                headers: [
                  { values: ['values', 'values'], name: 'name' },
                  { values: ['values', 'values'], name: 'name' },
                ],
                path: 'path',
                protocol: 'protocol',
                method: 'method',
                port: 0,
                tls_server_name: 'tls_server_name',
                interval: 'interval',
                tls_skip_verify: true,
                type: 'type',
                grace_period: 'grace_period',
                timeout: 'timeout',
              },
              {
                headers: [
                  { values: ['values', 'values'], name: 'name' },
                  { values: ['values', 'values'], name: 'name' },
                ],
                path: 'path',
                protocol: 'protocol',
                method: 'method',
                port: 0,
                tls_server_name: 'tls_server_name',
                interval: 'interval',
                tls_skip_verify: true,
                type: 'type',
                grace_period: 'grace_period',
                timeout: 'timeout',
              },
            ],
            force_instance_key: 'force_instance_key',
            autostart: true,
            internal_port: 1,
            ports: [
              {
                force_https: true,
                port: 6,
                handlers: ['handlers', 'handlers'],
                start_port: 7,
                tls_options: {
                  alpn: ['alpn', 'alpn'],
                  default_self_signed: true,
                  versions: ['versions', 'versions'],
                },
                proxy_proto_options: { version: 'version' },
                end_port: 1,
                http_options: {
                  compress: true,
                  response: { headers: { key: '{}' } },
                  h2_backend: true,
                },
              },
              {
                force_https: true,
                port: 6,
                handlers: ['handlers', 'handlers'],
                start_port: 7,
                tls_options: {
                  alpn: ['alpn', 'alpn'],
                  default_self_signed: true,
                  versions: ['versions', 'versions'],
                },
                proxy_proto_options: { version: 'version' },
                end_port: 1,
                http_options: {
                  compress: true,
                  response: { headers: { key: '{}' } },
                  h2_backend: true,
                },
              },
            ],
            force_instance_description: 'force_instance_description',
            autostop: true,
            concurrency: { soft_limit: 7, type: 'type', hard_limit: 4 },
          },
        ],
        env: { key: 'env' },
        statics: [
          { guest_path: 'guest_path', url_prefix: 'url_prefix' },
          { guest_path: 'guest_path', url_prefix: 'url_prefix' },
        ],
        schedule: 'schedule',
        checks: {
          key: {
            headers: [
              { values: ['values', 'values'], name: 'name' },
              { values: ['values', 'values'], name: 'name' },
            ],
            path: 'path',
            protocol: 'protocol',
            method: 'method',
            port: 0,
            tls_server_name: 'tls_server_name',
            interval: 'interval',
            tls_skip_verify: true,
            type: 'type',
            grace_period: 'grace_period',
            timeout: 'timeout',
          },
        },
        size: 'size',
        files: [
          { secret_name: 'secret_name', raw_value: 'raw_value', guest_path: 'guest_path' },
          { secret_name: 'secret_name', raw_value: 'raw_value', guest_path: 'guest_path' },
        ],
        guest: {
          gpu_kind: 'gpu_kind',
          cpus: 6,
          host_dedication_id: 'host_dedication_id',
          cpu_kind: 'cpu_kind',
          memory_mb: 1,
          kernel_args: ['kernel_args', 'kernel_args'],
        },
        disable_machine_autostart: true,
        metrics: { path: 'path', port: 5 },
        standbys: ['standbys', 'standbys'],
        stop_config: { signal: 'signal', timeout: 'timeout' },
      },
    },
    required: [],
  })
  .openapi('MachineVersion')

const ProcessStatSchema = z
  .object({
    command: z.string().exactOptional(),
    cpu: z.int().exactOptional(),
    directory: z.string().exactOptional(),
    listen_sockets: z.array(ListenSocketSchema).exactOptional(),
    pid: z.int().exactOptional(),
    rss: z.int().exactOptional(),
    rtime: z.int().exactOptional(),
    stime: z.int().exactOptional(),
  })
  .openapi({
    example: {
      listen_sockets: [
        { address: 'address', proto: 'proto' },
        { address: 'address', proto: 'proto' },
      ],
      rss: 1,
      rtime: 5,
      cpu: 0,
      pid: 6,
      stime: 5,
      directory: 'directory',
      command: 'command',
    },
    required: [],
  })
  .openapi('ProcessStat')

const SignalRequestSchema = z
  .object({
    signal: z
      .enum([
        'SIGABRT',
        'SIGALRM',
        'SIGFPE',
        'SIGHUP',
        'SIGILL',
        'SIGINT',
        'SIGKILL',
        'SIGPIPE',
        'SIGQUIT',
        'SIGSEGV',
        'SIGTERM',
        'SIGTRAP',
        'SIGUSR1',
      ])
      .exactOptional(),
  })
  .openapi({ example: { signal: 'SIGABRT' }, required: [] })
  .openapi('SignalRequest')

const StopRequestSchema = z
  .object({ signal: z.string().exactOptional(), timeout: z.string().exactOptional() })
  .openapi({ example: { signal: 'signal', timeout: 'timeout' }, required: [] })
  .openapi('StopRequest')

const UpdateMachineRequestSchema: z.ZodType<UpdateMachineRequestType> = z
  .object({
    config: ApiMachineConfigSchema.exactOptional().openapi({
      description: 'An object defining the Machine configuration',
    }),
    current_version: z.string().exactOptional(),
    lease_ttl: z.int().exactOptional(),
    lsvd: z.boolean().exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique name for this Machine. If omitted, one is generated for you',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target region. Omitting this param launches in the same region as your WireGuard peer connection (somewhere near you).',
      }),
    skip_launch: z.boolean().exactOptional(),
    skip_service_registration: z.boolean().exactOptional(),
  })
  .openapi({
    example: {
      skip_service_registration: true,
      lsvd: true,
      name: 'name',
      current_version: 'current_version',
      lease_ttl: 0,
      region: 'region',
      config: '{}',
      skip_launch: true,
    },
    required: [],
  })
  .openapi('UpdateMachineRequest')

const UpdateVolumeRequestSchema = z
  .object({ snapshot_retention: z.int().exactOptional() })
  .openapi({ example: { snapshot_retention: 0 }, required: [] })
  .openapi('UpdateVolumeRequest')

const VolumeSnapshotSchema = z
  .object({
    created_at: z.string().exactOptional(),
    digest: z.string().exactOptional(),
    id: z.string().exactOptional(),
    size: z.int().exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({
    example: { size: 0, digest: 'digest', created_at: 'created_at', id: 'id', status: 'status' },
    required: [],
  })
  .openapi('VolumeSnapshot')

export const getAppsRoute = createRoute({
  method: 'get',
  path: '/apps',
  tags: ['Apps'],
  operationId: 'Apps_list',
  request: {
    query: z.object({
      org_slug: z
        .string()
        .openapi({
          param: {
            description: "The org slug, or 'personal', to filter apps",
            in: 'query',
            name: 'org_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ListAppsResponseSchema } } },
  },
})

export const postAppsRoute = createRoute({
  method: 'post',
  path: '/apps',
  tags: ['Apps'],
  operationId: 'Apps_create',
  request: {
    body: {
      description: 'App body',
      content: { 'application/json': { schema: CreateAppRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created', content: {} },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getAppsAppNameRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}',
  tags: ['Apps'],
  operationId: 'Apps_show',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: AppSchema } } } },
})

export const deleteAppsAppNameRoute = createRoute({
  method: 'delete',
  path: '/apps/{app_name}',
  tags: ['Apps'],
  operationId: 'Apps_delete',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 202: { description: 'Accepted', content: {} } },
})

export const getAppsAppNameMachinesRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/machines',
  tags: ['Machines'],
  operationId: 'Machines_list',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include deleted machines',
            in: 'query',
            name: 'include_deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Region filter',
            in: 'query',
            name: 'region',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(MachineSchema) } } },
  },
})

export const postAppsAppNameMachinesRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines',
  tags: ['Machines'],
  operationId: 'Machines_create',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Create machine request',
      content: { 'application/json': { schema: CreateMachineRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MachineSchema } } },
  },
})

export const getAppsAppNameMachinesMachineIdRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/machines/{machine_id}',
  tags: ['Machines'],
  operationId: 'Machines_show',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MachineSchema } } },
  },
})

export const postAppsAppNameMachinesMachineIdRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}',
  tags: ['Machines'],
  operationId: 'Machines_update',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: UpdateMachineRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MachineSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteAppsAppNameMachinesMachineIdRoute = createRoute({
  method: 'delete',
  path: '/apps/{app_name}/machines/{machine_id}',
  tags: ['Machines'],
  operationId: 'Machines_delete',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const postAppsAppNameMachinesMachineIdCordonRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}/cordon',
  tags: ['Machines'],
  description:
    '“Cordoning” a machine refers to disabling its services, so the proxy won’t route requests to it. In flyctl this is used by blue/green deployments; one set of machines is started up with services disabled, and when they are all healthy, the services are enabled on the new machines and disabled on the old ones.',
  operationId: 'Machines_cordon',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const getAppsAppNameMachinesMachineIdEventsRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/machines/{machine_id}/events',
  tags: ['Machines'],
  operationId: 'Machines_list_events',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MachineEventSchema) } },
    },
  },
})

export const postAppsAppNameMachinesMachineIdExecRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}/exec',
  tags: ['Machines'],
  operationId: 'Machines_exec',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: MachineExecRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Raw command output bytes are written back',
      content: {
        'application/octet-stream': { schema: z.string() },
        'application/json': { schema: z.string() },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/octet-stream': { schema: ErrorResponseSchema },
        'application/json': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const getAppsAppNameMachinesMachineIdLeaseRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/machines/{machine_id}/lease',
  tags: ['Machines'],
  operationId: 'Machines_show_lease',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: LeaseSchema } } },
  },
})

export const postAppsAppNameMachinesMachineIdLeaseRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}/lease',
  tags: ['Machines'],
  operationId: 'Machines_create_lease',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: CreateLeaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: LeaseSchema } } },
  },
})

export const deleteAppsAppNameMachinesMachineIdLeaseRoute = createRoute({
  method: 'delete',
  path: '/apps/{app_name}/machines/{machine_id}/lease',
  tags: ['Machines'],
  operationId: 'Machines_release_lease',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const getAppsAppNameMachinesMachineIdMetadataRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/machines/{machine_id}/metadata',
  tags: ['Machines'],
  operationId: 'Machines_show_metadata',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), z.string()) } },
    },
  },
})

export const postAppsAppNameMachinesMachineIdMetadataKeyRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}/metadata/{key}',
  tags: ['Machines'],
  operationId: 'Machines_update_metadata',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'Metadata Key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content', content: {} },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteAppsAppNameMachinesMachineIdMetadataKeyRoute = createRoute({
  method: 'delete',
  path: '/apps/{app_name}/machines/{machine_id}/metadata/{key}',
  tags: ['Machines'],
  operationId: 'Machines_delete_metadata',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'Metadata Key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getAppsAppNameMachinesMachineIdPsRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/machines/{machine_id}/ps',
  tags: ['Machines'],
  operationId: 'Machines_list_processes',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sort_by: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            in: 'query',
            name: 'sort_by',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Order',
            in: 'query',
            name: 'order',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ProcessStatSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postAppsAppNameMachinesMachineIdRestartRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}/restart',
  tags: ['Machines'],
  operationId: 'Machines_restart',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      timeout: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restart timeout as a Go duration string or number of seconds',
            in: 'query',
            name: 'timeout',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postAppsAppNameMachinesMachineIdSignalRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}/signal',
  tags: ['Machines'],
  operationId: 'Machines_signal',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: SignalRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postAppsAppNameMachinesMachineIdStartRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}/start',
  tags: ['Machines'],
  operationId: 'Machines_start',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const postAppsAppNameMachinesMachineIdStopRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}/stop',
  tags: ['Machines'],
  operationId: 'Machines_stop',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Optional request body',
      content: { 'application/json': { schema: StopRequestSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postAppsAppNameMachinesMachineIdUncordonRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/machines/{machine_id}/uncordon',
  tags: ['Machines'],
  description:
    '“Cordoning” a machine refers to disabling its services, so the proxy won’t route requests to it. In flyctl this is used by blue/green deployments; one set of machines is started up with services disabled, and when they are all healthy, the services are enabled on the new machines and disabled on the old ones.',
  operationId: 'Machines_uncordon',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const getAppsAppNameMachinesMachineIdVersionsRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/machines/{machine_id}/versions',
  tags: ['Machines'],
  operationId: 'Machines_list_versions',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MachineVersionSchema) } },
    },
  },
})

export const getAppsAppNameMachinesMachineIdWaitRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/machines/{machine_id}/wait',
  tags: ['Machines'],
  operationId: 'Machines_wait',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      machine_id: z
        .string()
        .openapi({
          param: {
            description: 'Machine ID',
            in: 'path',
            name: 'machine_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      instance_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'instance? version? TODO',
            in: 'query',
            name: 'instance_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
            description: 'wait timeout. default 60s',
            in: 'query',
            name: 'timeout',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      state: z
        .enum(['started', 'stopped', 'destroyed'])
        .exactOptional()
        .openapi({
          param: {
            description: 'desired state',
            in: 'query',
            name: 'state',
            schema: { enum: ['started', 'stopped', 'destroyed'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getAppsAppNameVolumesRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/volumes',
  tags: ['Volumes'],
  operationId: 'Volumes_list',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(VolumeSchema) } } },
  },
})

export const postAppsAppNameVolumesRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/volumes',
  tags: ['Volumes'],
  operationId: 'Volumes_create',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: CreateVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VolumeSchema } } },
  },
})

export const getAppsAppNameVolumesVolumeIdRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/volumes/{volume_id}',
  tags: ['Volumes'],
  operationId: 'Volumes_get_by_id',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      volume_id: z
        .string()
        .openapi({
          param: {
            description: 'Volume ID',
            in: 'path',
            name: 'volume_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VolumeSchema } } },
  },
})

export const postAppsAppNameVolumesVolumeIdRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/volumes/{volume_id}',
  tags: ['Volumes'],
  operationId: 'Volumes_update',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      volume_id: z
        .string()
        .openapi({
          param: {
            description: 'Volume ID',
            in: 'path',
            name: 'volume_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: UpdateVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VolumeSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteAppsAppNameVolumesVolumeIdRoute = createRoute({
  method: 'delete',
  path: '/apps/{app_name}/volumes/{volume_id}',
  tags: ['Volumes'],
  operationId: 'Volume_delete',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      volume_id: z
        .string()
        .openapi({
          param: {
            description: 'Volume ID',
            in: 'path',
            name: 'volume_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VolumeSchema } } },
  },
})

export const putAppsAppNameVolumesVolumeIdExtendRoute = createRoute({
  method: 'put',
  path: '/apps/{app_name}/volumes/{volume_id}/extend',
  tags: ['Volumes'],
  operationId: 'Volumes_extend',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      volume_id: z
        .string()
        .openapi({
          param: {
            description: 'Volume ID',
            in: 'path',
            name: 'volume_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: ExtendVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ExtendVolumeResponseSchema } },
    },
  },
})

export const getAppsAppNameVolumesVolumeIdSnapshotsRoute = createRoute({
  method: 'get',
  path: '/apps/{app_name}/volumes/{volume_id}/snapshots',
  tags: ['Volumes'],
  operationId: 'Volumes_list_snapshots',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      volume_id: z
        .string()
        .openapi({
          param: {
            description: 'Volume ID',
            in: 'path',
            name: 'volume_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(VolumeSnapshotSchema) } },
    },
  },
})

export const postAppsAppNameVolumesVolumeIdSnapshotsRoute = createRoute({
  method: 'post',
  path: '/apps/{app_name}/volumes/{volume_id}/snapshots',
  tags: ['Volumes'],
  operationId: 'createVolumeSnapshot',
  request: {
    params: z.object({
      app_name: z
        .string()
        .openapi({
          param: {
            description: 'Fly App Name',
            in: 'path',
            name: 'app_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      volume_id: z
        .string()
        .openapi({
          param: {
            description: 'Volume ID',
            in: 'path',
            name: 'volume_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})
