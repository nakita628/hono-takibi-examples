type ListApp = {
  id?: string | undefined
  machine_count?: number | undefined
  name?: string | undefined
  network?: { [x: string]: unknown } | undefined
}
type ListAppsResponse = { apps?: ListApp[] | undefined; total_apps?: number | undefined }
type CreateAppRequest = {
  app_name?: string | undefined
  app_role_id?: string | undefined
  network?: string | undefined
  org_slug?: string | undefined
}
type MainStatusCode = 'unknown' | 'insufficient_capacity'
type ErrorResponse = {
  details?: { [x: string]: unknown } | undefined
  error?: string | undefined
  status?: MainStatusCode | undefined
}
type Organization = { name?: string | undefined; slug?: string | undefined }
type App = {
  id?: string | undefined
  name?: string | undefined
  organization?: Organization | undefined
  status?: string | undefined
}
type CheckStatus = {
  name?: string | undefined
  output?: string | undefined
  status?: string | undefined
  updated_at?: string | undefined
}
type ApiMachineHTTPHeader = { name?: string | undefined; values?: string[] | undefined }
type ApiMachineCheck = {
  grace_period?: string | undefined
  headers?: ApiMachineHTTPHeader[] | undefined
  interval?: string | undefined
  method?: string | undefined
  path?: string | undefined
  port?: number | undefined
  protocol?: string | undefined
  timeout?: string | undefined
  tls_server_name?: string | undefined
  tls_skip_verify?: boolean | undefined
  type?: string | undefined
}
type ApiDNSConfig = { skip_registration?: boolean | undefined }
type ApiFile = {
  guest_path?: string | undefined
  raw_value?: string | undefined
  secret_name?: string | undefined
}
type ApiMachineGuest = {
  cpu_kind?: string | undefined
  cpus?: number | undefined
  gpu_kind?: string | undefined
  host_dedication_id?: string | undefined
  kernel_args?: string[] | undefined
  memory_mb?: number | undefined
}
type ApiMachineInit = {
  cmd?: string[] | undefined
  entrypoint?: string[] | undefined
  exec?: string[] | undefined
  kernel_args?: string[] | undefined
  swap_size_mb?: number | undefined
  tty?: boolean | undefined
}
type ApiMachineMetrics = { path?: string | undefined; port?: number | undefined }
type ApiMachineMount = {
  add_size_gb?: number | undefined
  encrypted?: boolean | undefined
  extend_threshold_percent?: number | undefined
  name?: string | undefined
  path?: string | undefined
  size_gb?: number | undefined
  size_gb_limit?: number | undefined
  volume?: string | undefined
}
type ApiMachineProcess = {
  cmd?: string[] | undefined
  entrypoint?: string[] | undefined
  env?: { [x: string]: string } | undefined
  exec?: string[] | undefined
  user?: string | undefined
}
type ApiMachineRestart = {
  max_retries?: number | undefined
  policy?: 'no' | 'always' | 'on-failure' | undefined
}
type ApiMachineServiceConcurrency = {
  hard_limit?: number | undefined
  soft_limit?: number | undefined
  type?: string | undefined
}
type ApiHTTPResponseOptions = { headers?: { [x: string]: { [x: string]: unknown } } | undefined }
type ApiHTTPOptions = {
  compress?: boolean | undefined
  h2_backend?: boolean | undefined
  response?: ApiHTTPResponseOptions | undefined
}
type ApiProxyProtoOptions = { version?: string | undefined }
type ApiTLSOptions = {
  alpn?: string[] | undefined
  default_self_signed?: boolean | undefined
  versions?: string[] | undefined
}
type ApiMachinePort = {
  end_port?: number | undefined
  force_https?: boolean | undefined
  handlers?: string[] | undefined
  http_options?: ApiHTTPOptions | undefined
  port?: number | undefined
  proxy_proto_options?: ApiProxyProtoOptions | undefined
  start_port?: number | undefined
  tls_options?: ApiTLSOptions | undefined
}
type ApiMachineService = {
  autostart?: boolean | undefined
  autostop?: boolean | undefined
  checks?: ApiMachineCheck[] | undefined
  concurrency?: ApiMachineServiceConcurrency | undefined
  force_instance_description?: string | undefined
  force_instance_key?: string | undefined
  internal_port?: number | undefined
  min_machines_running?: number | undefined
  ports?: ApiMachinePort[] | undefined
  protocol?: string | undefined
}
type ApiStatic = { guest_path: string; url_prefix: string }
type ApiStopConfig = { signal?: string | undefined; timeout?: string | undefined }
type ApiMachineConfig = {
  auto_destroy?: boolean | undefined
  checks?: { [x: string]: ApiMachineCheck } | undefined
  disable_machine_autostart?: boolean | undefined
  dns?: ApiDNSConfig | undefined
  env?: { [x: string]: string } | undefined
  files?: ApiFile[] | undefined
  guest?: ApiMachineGuest | undefined
  image?: string | undefined
  init?: ApiMachineInit | undefined
  metadata?: { [x: string]: string } | undefined
  metrics?: ApiMachineMetrics | undefined
  mounts?: ApiMachineMount[] | undefined
  processes?: ApiMachineProcess[] | undefined
  restart?: ApiMachineRestart | undefined
  schedule?: string | undefined
  services?: ApiMachineService[] | undefined
  size?: string | undefined
  standbys?: string[] | undefined
  statics?: ApiStatic[] | undefined
  stop_config?: ApiStopConfig | undefined
}
type MachineEvent = {
  id?: string | undefined
  request?: { [x: string]: unknown } | undefined
  source?: string | undefined
  status?: string | undefined
  timestamp?: number | undefined
  type?: string | undefined
}
type ImageRef = {
  digest?: string | undefined
  labels?: { [x: string]: string } | undefined
  registry?: string | undefined
  repository?: string | undefined
  tag?: string | undefined
}
type Machine = {
  checks?: CheckStatus[] | undefined
  config?: ApiMachineConfig | undefined
  created_at?: string | undefined
  events?: MachineEvent[] | undefined
  id?: string | undefined
  image_ref?: ImageRef | undefined
  instance_id?: string | undefined
  name?: string | undefined
  nonce?: string | undefined
  private_ip?: string | undefined
  region?: string | undefined
  state?: string | undefined
  updated_at?: string | undefined
}
type CreateMachineRequest = {
  config?:
    | {
        auto_destroy?: boolean | undefined
        checks?: { [x: string]: ApiMachineCheck } | undefined
        disable_machine_autostart?: boolean | undefined
        dns?: ApiDNSConfig | undefined
        env?: { [x: string]: string } | undefined
        files?: ApiFile[] | undefined
        guest?: ApiMachineGuest | undefined
        image?: string | undefined
        init?: ApiMachineInit | undefined
        metadata?: { [x: string]: string } | undefined
        metrics?: ApiMachineMetrics | undefined
        mounts?: ApiMachineMount[] | undefined
        processes?: ApiMachineProcess[] | undefined
        restart?: ApiMachineRestart | undefined
        schedule?: string | undefined
        services?: ApiMachineService[] | undefined
        size?: string | undefined
        standbys?: string[] | undefined
        statics?: ApiStatic[] | undefined
        stop_config?: ApiStopConfig | undefined
      }
    | undefined
  lease_ttl?: number | undefined
  lsvd?: boolean | undefined
  name?: string | undefined
  region?: string | undefined
  skip_launch?: boolean | undefined
  skip_service_registration?: boolean | undefined
}
type UpdateMachineRequest = {
  config?:
    | {
        auto_destroy?: boolean | undefined
        checks?: { [x: string]: ApiMachineCheck } | undefined
        disable_machine_autostart?: boolean | undefined
        dns?: ApiDNSConfig | undefined
        env?: { [x: string]: string } | undefined
        files?: ApiFile[] | undefined
        guest?: ApiMachineGuest | undefined
        image?: string | undefined
        init?: ApiMachineInit | undefined
        metadata?: { [x: string]: string } | undefined
        metrics?: ApiMachineMetrics | undefined
        mounts?: ApiMachineMount[] | undefined
        processes?: ApiMachineProcess[] | undefined
        restart?: ApiMachineRestart | undefined
        schedule?: string | undefined
        services?: ApiMachineService[] | undefined
        size?: string | undefined
        standbys?: string[] | undefined
        statics?: ApiStatic[] | undefined
        stop_config?: ApiStopConfig | undefined
      }
    | undefined
  current_version?: string | undefined
  lease_ttl?: number | undefined
  lsvd?: boolean | undefined
  name?: string | undefined
  region?: string | undefined
  skip_launch?: boolean | undefined
  skip_service_registration?: boolean | undefined
}
type MachineExecRequest = {
  cmd?: string | undefined
  command?: string[] | undefined
  timeout?: number | undefined
}
type Lease = {
  description?: string | undefined
  expires_at?: number | undefined
  nonce?: string | undefined
  owner?: string | undefined
  version?: string | undefined
}
type CreateLeaseRequest = { description?: string | undefined; ttl?: number | undefined }
type ListenSocket = { address?: string | undefined; proto?: string | undefined }
type ProcessStat = {
  command?: string | undefined
  cpu?: number | undefined
  directory?: string | undefined
  listen_sockets?: ListenSocket[] | undefined
  pid?: number | undefined
  rss?: number | undefined
  rtime?: number | undefined
  stime?: number | undefined
}
type SignalRequest = {
  signal?:
    | 'SIGABRT'
    | 'SIGALRM'
    | 'SIGFPE'
    | 'SIGHUP'
    | 'SIGILL'
    | 'SIGINT'
    | 'SIGKILL'
    | 'SIGPIPE'
    | 'SIGQUIT'
    | 'SIGSEGV'
    | 'SIGTERM'
    | 'SIGTRAP'
    | 'SIGUSR1'
    | undefined
}
type StopRequest = { signal?: string | undefined; timeout?: string | undefined }
type MachineVersion = { user_config?: ApiMachineConfig | undefined; version?: string | undefined }
type Volume = {
  attached_alloc_id?: string | undefined
  attached_machine_id?: string | undefined
  block_size?: number | undefined
  blocks?: number | undefined
  blocks_avail?: number | undefined
  blocks_free?: number | undefined
  created_at?: string | undefined
  encrypted?: boolean | undefined
  fstype?: string | undefined
  id?: string | undefined
  name?: string | undefined
  region?: string | undefined
  size_gb?: number | undefined
  snapshot_retention?: number | undefined
  state?: string | undefined
  zone?: string | undefined
}
type CreateVolumeRequest = {
  compute?: ApiMachineGuest | undefined
  encrypted?: boolean | undefined
  fstype?: string | undefined
  machines_only?: boolean | undefined
  name?: string | undefined
  region?: string | undefined
  require_unique_zone?: boolean | undefined
  size_gb?: number | undefined
  snapshot_id?: string | undefined
  snapshot_retention?: number | undefined
  source_volume_id?: string | undefined
}
type UpdateVolumeRequest = { snapshot_retention?: number | undefined }
type ExtendVolumeRequest = { size_gb?: number | undefined }
type ExtendVolumeResponse = { needs_restart?: boolean | undefined; volume?: Volume | undefined }
type VolumeSnapshot = {
  created_at?: string | undefined
  digest?: string | undefined
  id?: string | undefined
  size?: number | undefined
  status?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apps': {
      $get: {
        input: { query: { org_slug: string } }
        output: ListAppsResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: CreateAppRequest }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: CreateAppRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name': {
      $delete: {
        input: { param: { app_name: string } }
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { app_name: string } }
        output: App
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:app_name/machines': {
      $get: {
        input: { param: { app_name: string } } & {
          query: { include_deleted?: boolean | undefined; region?: string | undefined }
        }
        output: Machine[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { app_name: string } } & { json: CreateMachineRequest }
        output: Machine
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:app_name/machines/:machine_id': {
      $delete: {
        input: { param: { app_name: string; machine_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { app_name: string; machine_id: string } }
        output: Machine
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              json: UpdateMachineRequest
            }
            output: Machine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              json: UpdateMachineRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/cordon': {
      $post: {
        input: { param: { app_name: string; machine_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/events': {
      $get: {
        input: { param: { app_name: string; machine_id: string } }
        output: MachineEvent[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/exec': {
      $post:
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              json: MachineExecRequest
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              json: MachineExecRequest
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              json: MachineExecRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              json: MachineExecRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/lease': {
      $delete: {
        input: { param: { app_name: string; machine_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { app_name: string; machine_id: string } }
        output: Lease
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { app_name: string; machine_id: string } } & { json: CreateLeaseRequest }
        output: Lease
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/metadata': {
      $get: {
        input: { param: { app_name: string; machine_id: string } }
        output: { [x: string]: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/metadata/:key': {
      $delete: {
        input: { param: { app_name: string; machine_id: string; key: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $post:
        | {
            input: { param: { app_name: string; machine_id: string; key: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_name: string; machine_id: string; key: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/ps': {
      $get:
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              query: { sort_by?: string | undefined; order?: string | undefined }
            }
            output: ProcessStat[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              query: { sort_by?: string | undefined; order?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/restart': {
      $post:
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              query: { timeout?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              query: { timeout?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/signal': {
      $post:
        | {
            input: { param: { app_name: string; machine_id: string } } & { json: SignalRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { app_name: string; machine_id: string } } & { json: SignalRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/start': {
      $post: {
        input: { param: { app_name: string; machine_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/stop': {
      $post:
        | {
            input: { param: { app_name: string; machine_id: string } } & { json: StopRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { app_name: string; machine_id: string } } & { json: StopRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/uncordon': {
      $post: {
        input: { param: { app_name: string; machine_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/versions': {
      $get: {
        input: { param: { app_name: string; machine_id: string } }
        output: MachineVersion[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:app_name/machines/:machine_id/wait': {
      $get:
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              query: {
                instance_id?: string | undefined
                timeout?: number | undefined
                state?: 'started' | 'stopped' | 'destroyed' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { app_name: string; machine_id: string } } & {
              query: {
                instance_id?: string | undefined
                timeout?: number | undefined
                state?: 'started' | 'stopped' | 'destroyed' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name/volumes': {
      $get: {
        input: { param: { app_name: string } }
        output: Volume[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { app_name: string } } & { json: CreateVolumeRequest }
        output: Volume
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:app_name/volumes/:volume_id': {
      $delete: {
        input: { param: { app_name: string; volume_id: string } }
        output: Volume
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { app_name: string; volume_id: string } }
        output: Volume
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { app_name: string; volume_id: string } } & {
              json: UpdateVolumeRequest
            }
            output: Volume
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_name: string; volume_id: string } } & {
              json: UpdateVolumeRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/apps/:app_name/volumes/:volume_id/extend': {
      $put: {
        input: { param: { app_name: string; volume_id: string } } & { json: ExtendVolumeRequest }
        output: ExtendVolumeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:app_name/volumes/:volume_id/snapshots': {
      $get: {
        input: { param: { app_name: string; volume_id: string } }
        output: VolumeSnapshot[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { app_name: string; volume_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
