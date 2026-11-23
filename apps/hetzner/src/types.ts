declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/actions': {
      $get:
        | {
            input: { query: { id: bigint[] } }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: bigint[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id: bigint[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/certificates': {
      $get:
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                type?: ('uploaded' | 'managed')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              certificates: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                type?: 'uploaded' | 'managed' | undefined
                certificate: string | null
                created: string
                not_valid_before: string | null
                not_valid_after: string | null
                domain_names: string[]
                fingerprint: string | null
                status?:
                  | ({
                      issuance?: 'pending' | 'completed' | 'failed' | undefined
                      renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable' | undefined
                      error?:
                        | ({ code?: string | undefined; message?: string | undefined } | null)
                        | undefined
                    } | null)
                  | undefined
                used_by: { id: bigint; type: string }[]
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                type?: ('uploaded' | 'managed')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                type?: ('uploaded' | 'managed')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                name: string
                labels?: { [x: string]: string } | undefined
                type?: 'uploaded' | 'managed' | undefined
                certificate?: string | undefined
                private_key?: string | undefined
                domain_names?: string[] | undefined
              }
            }
            output: {
              certificate: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                type?: 'uploaded' | 'managed' | undefined
                certificate: string | null
                created: string
                not_valid_before: string | null
                not_valid_after: string | null
                domain_names: string[]
                fingerprint: string | null
                status?:
                  | ({
                      issuance?: 'pending' | 'completed' | 'failed' | undefined
                      renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable' | undefined
                      error?:
                        | ({ code?: string | undefined; message?: string | undefined } | null)
                        | undefined
                    } | null)
                  | undefined
                used_by: { id: bigint; type: string }[]
              }
              action?:
                | ({
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  } | null)
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                labels?: { [x: string]: string } | undefined
                type?: 'uploaded' | 'managed' | undefined
                certificate?: string | undefined
                private_key?: string | undefined
                domain_names?: string[] | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                labels?: { [x: string]: string } | undefined
                type?: 'uploaded' | 'managed' | undefined
                certificate?: string | undefined
                private_key?: string | undefined
                domain_names?: string[] | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/certificates/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/certificates/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/certificates/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              certificate: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                type?: 'uploaded' | 'managed' | undefined
                certificate: string | null
                created: string
                not_valid_before: string | null
                not_valid_after: string | null
                domain_names: string[]
                fingerprint: string | null
                status?:
                  | ({
                      issuance?: 'pending' | 'completed' | 'failed' | undefined
                      renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable' | undefined
                      error?:
                        | ({ code?: string | undefined; message?: string | undefined } | null)
                        | undefined
                    } | null)
                  | undefined
                used_by: { id: bigint; type: string }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              certificate: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                type?: 'uploaded' | 'managed' | undefined
                certificate: string | null
                created: string
                not_valid_before: string | null
                not_valid_after: string | null
                domain_names: string[]
                fingerprint: string | null
                status?:
                  | ({
                      issuance?: 'pending' | 'completed' | 'failed' | undefined
                      renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable' | undefined
                      error?:
                        | ({ code?: string | undefined; message?: string | undefined } | null)
                        | undefined
                    } | null)
                  | undefined
                used_by: { id: bigint; type: string }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/certificates/:id/actions': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/certificates/:id/actions/retry': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/certificates/:id/actions/:action_id': {
      $get:
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datacenters': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              datacenters: {
                id: bigint
                name: string
                description: string
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                server_types: {
                  supported: bigint[]
                  available: bigint[]
                  available_for_migration: bigint[]
                }
              }[]
              recommendation: bigint
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datacenters/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              datacenter: {
                id: bigint
                name: string
                description: string
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                server_types: {
                  supported: bigint[]
                  available: bigint[]
                  available_for_migration: bigint[]
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/firewalls': {
      $get:
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              firewalls: {
                id: bigint
                name: string
                labels?: { [x: string]: string } | undefined
                created: string
                rules: {
                  description?: (string | null) | undefined
                  direction: 'in' | 'out'
                  source_ips: string[]
                  destination_ips: string[]
                  protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                  port: string | null
                }[]
                applied_to: {
                  type: 'server' | 'label_selector'
                  server?: { id: bigint } | undefined
                  label_selector?: { selector: string } | undefined
                  applied_to_resources?:
                    | { type?: 'server' | undefined; server?: { id: bigint } | undefined }[]
                    | undefined
                }[]
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                name: string
                labels?: { [x: string]: string } | undefined
                rules?:
                  | {
                      description?: (string | null) | undefined
                      direction: 'in' | 'out'
                      source_ips?: string[] | undefined
                      destination_ips?: string[] | undefined
                      protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                      port?: string | undefined
                    }[]
                  | undefined
                apply_to?:
                  | {
                      type: 'server' | 'label_selector'
                      server?: { id: bigint } | undefined
                      label_selector?: { selector: string } | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              firewall?:
                | {
                    id: bigint
                    name: string
                    labels?: { [x: string]: string } | undefined
                    created: string
                    rules: {
                      description?: (string | null) | undefined
                      direction: 'in' | 'out'
                      source_ips: string[]
                      destination_ips: string[]
                      protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                      port: string | null
                    }[]
                    applied_to: {
                      type: 'server' | 'label_selector'
                      server?: { id: bigint } | undefined
                      label_selector?: { selector: string } | undefined
                      applied_to_resources?:
                        | { type?: 'server' | undefined; server?: { id: bigint } | undefined }[]
                        | undefined
                    }[]
                  }
                | undefined
              actions?:
                | {
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                labels?: { [x: string]: string } | undefined
                rules?:
                  | {
                      description?: (string | null) | undefined
                      direction: 'in' | 'out'
                      source_ips?: string[] | undefined
                      destination_ips?: string[] | undefined
                      protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                      port?: string | undefined
                    }[]
                  | undefined
                apply_to?:
                  | {
                      type: 'server' | 'label_selector'
                      server?: { id: bigint } | undefined
                      label_selector?: { selector: string } | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                labels?: { [x: string]: string } | undefined
                rules?:
                  | {
                      description?: (string | null) | undefined
                      direction: 'in' | 'out'
                      source_ips?: string[] | undefined
                      destination_ips?: string[] | undefined
                      protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                      port?: string | undefined
                    }[]
                  | undefined
                apply_to?:
                  | {
                      type: 'server' | 'label_selector'
                      server?: { id: bigint } | undefined
                      label_selector?: { selector: string } | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/firewalls/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/firewalls/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/firewalls/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              firewall: {
                id: bigint
                name: string
                labels?: { [x: string]: string } | undefined
                created: string
                rules: {
                  description?: (string | null) | undefined
                  direction: 'in' | 'out'
                  source_ips: string[]
                  destination_ips: string[]
                  protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                  port: string | null
                }[]
                applied_to: {
                  type: 'server' | 'label_selector'
                  server?: { id: bigint } | undefined
                  label_selector?: { selector: string } | undefined
                  applied_to_resources?:
                    | { type?: 'server' | undefined; server?: { id: bigint } | undefined }[]
                    | undefined
                }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              firewall: {
                id: bigint
                name: string
                labels?: { [x: string]: string } | undefined
                created: string
                rules: {
                  description?: (string | null) | undefined
                  direction: 'in' | 'out'
                  source_ips: string[]
                  destination_ips: string[]
                  protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                  port: string | null
                }[]
                applied_to: {
                  type: 'server' | 'label_selector'
                  server?: { id: bigint } | undefined
                  label_selector?: { selector: string } | undefined
                  applied_to_resources?:
                    | { type?: 'server' | undefined; server?: { id: bigint } | undefined }[]
                    | undefined
                }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/firewalls/:id/actions': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/firewalls/:id/actions/apply_to_resources': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                apply_to: {
                  type: 'server' | 'label_selector'
                  server?: { id: bigint } | undefined
                  label_selector?: { selector: string } | undefined
                }[]
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                apply_to: {
                  type: 'server' | 'label_selector'
                  server?: { id: bigint } | undefined
                  label_selector?: { selector: string } | undefined
                }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                apply_to: {
                  type: 'server' | 'label_selector'
                  server?: { id: bigint } | undefined
                  label_selector?: { selector: string } | undefined
                }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/firewalls/:id/actions/remove_from_resources': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                remove_from: {
                  type: 'server' | 'label_selector'
                  server?: { id: bigint } | undefined
                  label_selector?: { selector: string } | undefined
                }[]
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                remove_from: {
                  type: 'server' | 'label_selector'
                  server?: { id: bigint } | undefined
                  label_selector?: { selector: string } | undefined
                }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                remove_from: {
                  type: 'server' | 'label_selector'
                  server?: { id: bigint } | undefined
                  label_selector?: { selector: string } | undefined
                }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/firewalls/:id/actions/set_rules': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                rules: {
                  description?: (string | null) | undefined
                  direction: 'in' | 'out'
                  source_ips?: string[] | undefined
                  destination_ips?: string[] | undefined
                  protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                  port?: string | undefined
                }[]
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                rules: {
                  description?: (string | null) | undefined
                  direction: 'in' | 'out'
                  source_ips?: string[] | undefined
                  destination_ips?: string[] | undefined
                  protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                  port?: string | undefined
                }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                rules: {
                  description?: (string | null) | undefined
                  direction: 'in' | 'out'
                  source_ips?: string[] | undefined
                  destination_ips?: string[] | undefined
                  protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                  port?: string | undefined
                }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/firewalls/:id/actions/:action_id': {
      $get:
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                label_selector?: string | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc')[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              floating_ips: {
                id: bigint
                name: string
                description: string | null
                ip: string
                type: 'ipv4' | 'ipv6'
                server: bigint | null
                dns_ptr: { ip: string; dns_ptr: string }[]
                home_location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                blocked: boolean
                protection: { delete: boolean }
                labels: { [x: string]: string }
                created: string
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                label_selector?: string | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc')[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                label_selector?: string | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc')[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                type: 'ipv4' | 'ipv6'
                server?: (bigint | null) | undefined
                home_location?: string | bigint | undefined
                description?: (string | null) | undefined
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              floating_ip: {
                id: bigint
                name: string
                description: string | null
                ip: string
                type: 'ipv4' | 'ipv6'
                server: bigint | null
                dns_ptr: { ip: string; dns_ptr: string }[]
                home_location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                blocked: boolean
                protection: { delete: boolean }
                labels: { [x: string]: string }
                created: string
              }
              action?:
                | ({
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  } | null)
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                type: 'ipv4' | 'ipv6'
                server?: (bigint | null) | undefined
                home_location?: string | bigint | undefined
                description?: (string | null) | undefined
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                type: 'ipv4' | 'ipv6'
                server?: (bigint | null) | undefined
                home_location?: string | bigint | undefined
                description?: (string | null) | undefined
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              floating_ip: {
                id: bigint
                name: string
                description: string | null
                ip: string
                type: 'ipv4' | 'ipv6'
                server: bigint | null
                dns_ptr: { ip: string; dns_ptr: string }[]
                home_location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                blocked: boolean
                protection: { delete: boolean }
                labels: { [x: string]: string }
                created: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: {
                description?: (string | null) | undefined
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              floating_ip: {
                id: bigint
                name: string
                description: string | null
                ip: string
                type: 'ipv4' | 'ipv6'
                server: bigint | null
                dns_ptr: { ip: string; dns_ptr: string }[]
                home_location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                blocked: boolean
                protection: { delete: boolean }
                labels: { [x: string]: string }
                created: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                description?: (string | null) | undefined
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                description?: (string | null) | undefined
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips/:id/actions': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips/:id/actions/assign': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { server: bigint | null } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { server: bigint | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { server: bigint | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips/:id/actions/change_dns_ptr': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips/:id/actions/change_protection': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { delete: boolean } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { delete: boolean } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { delete: boolean } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips/:id/actions/unassign': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/floating_ips/:id/actions/:action_id': {
      $get:
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images': {
      $get:
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                type?: ('system' | 'app' | 'snapshot' | 'backup')[] | undefined
                status?: ('available' | 'creating' | 'unavailable')[] | undefined
                bound_to?: string[] | undefined
                include_deprecated?: boolean | undefined
                name?: string | undefined
                label_selector?: string | undefined
                architecture?: 'x86' | 'arm' | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              images: {
                id: bigint
                type: 'system' | 'app' | 'snapshot' | 'backup'
                status: 'available' | 'creating' | 'unavailable'
                name: string | null
                description: string
                image_size: number | null
                disk_size: number
                created: string
                created_from: { id: bigint; name: string } | null
                bound_to: bigint | null
                os_flavor:
                  | 'ubuntu'
                  | 'centos'
                  | 'debian'
                  | 'fedora'
                  | 'rocky'
                  | 'alma'
                  | 'opensuse'
                  | 'unknown'
                os_version: string | null
                rapid_deploy?: boolean | undefined
                protection: { delete: boolean }
                deprecation: { unavailable_after: string; announced: string } | null
                deleted: string | null
                labels: { [x: string]: string }
                architecture: 'x86' | 'arm'
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                type?: ('system' | 'app' | 'snapshot' | 'backup')[] | undefined
                status?: ('available' | 'creating' | 'unavailable')[] | undefined
                bound_to?: string[] | undefined
                include_deprecated?: boolean | undefined
                name?: string | undefined
                label_selector?: string | undefined
                architecture?: 'x86' | 'arm' | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                type?: ('system' | 'app' | 'snapshot' | 'backup')[] | undefined
                status?: ('available' | 'creating' | 'unavailable')[] | undefined
                bound_to?: string[] | undefined
                include_deprecated?: boolean | undefined
                name?: string | undefined
                label_selector?: string | undefined
                architecture?: 'x86' | 'arm' | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              image?:
                | {
                    id: bigint
                    type: 'system' | 'app' | 'snapshot' | 'backup'
                    status: 'available' | 'creating' | 'unavailable'
                    name: string | null
                    description: string
                    image_size: number | null
                    disk_size: number
                    created: string
                    created_from: { id: bigint; name: string } | null
                    bound_to: bigint | null
                    os_flavor:
                      | 'ubuntu'
                      | 'centos'
                      | 'debian'
                      | 'fedora'
                      | 'rocky'
                      | 'alma'
                      | 'opensuse'
                      | 'unknown'
                    os_version: string | null
                    rapid_deploy?: boolean | undefined
                    protection: { delete: boolean }
                    deprecation: { unavailable_after: string; announced: string } | null
                    deleted: string | null
                    labels: { [x: string]: string }
                    architecture: 'x86' | 'arm'
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: {
                description?: string | undefined
                type?: 'snapshot' | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              image?:
                | {
                    id: bigint
                    type: 'system' | 'app' | 'snapshot' | 'backup'
                    status: 'available' | 'creating' | 'unavailable'
                    name: string | null
                    description: string
                    image_size: number | null
                    disk_size: number
                    created: string
                    created_from: { id: bigint; name: string } | null
                    bound_to: bigint | null
                    os_flavor:
                      | 'ubuntu'
                      | 'centos'
                      | 'debian'
                      | 'fedora'
                      | 'rocky'
                      | 'alma'
                      | 'opensuse'
                      | 'unknown'
                    os_version: string | null
                    rapid_deploy?: boolean | undefined
                    protection: { delete: boolean }
                    deprecation: { unavailable_after: string; announced: string } | null
                    deleted: string | null
                    labels: { [x: string]: string }
                    architecture: 'x86' | 'arm'
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                description?: string | undefined
                type?: 'snapshot' | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                description?: string | undefined
                type?: 'snapshot' | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:id/actions': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:id/actions/change_protection': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:id/actions/:action_id': {
      $get:
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/isos': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                architecture?: 'x86' | 'arm' | undefined
                include_architecture_wildcard?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
              }
            }
            output: {
              isos: {
                id: bigint
                name: string | null
                description: string
                type: 'public' | 'private'
                deprecation: { unavailable_after: string; announced: string } | null
                architecture: 'x86' | 'arm'
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                architecture?: 'x86' | 'arm' | undefined
                include_architecture_wildcard?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                architecture?: 'x86' | 'arm' | undefined
                include_architecture_wildcard?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/isos/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              iso: {
                id: bigint
                name: string | null
                description: string
                type: 'public' | 'private'
                deprecation: { unavailable_after: string; announced: string } | null
                architecture: 'x86' | 'arm'
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancer_types': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              load_balancer_types: {
                id: bigint
                name: string
                description: string
                max_connections: bigint
                max_services: bigint
                max_targets: bigint
                max_assigned_certificates: bigint
                deprecation: { unavailable_after: string; announced: string } | null
                prices: {
                  location: string
                  price_hourly: { net: string; gross: string }
                  price_monthly: { net: string; gross: string }
                  included_traffic: bigint
                  price_per_tb_traffic: { net: string; gross: string }
                }[]
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancer_types/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              load_balancer_type: {
                id: bigint
                name: string
                description: string
                max_connections: bigint
                max_services: bigint
                max_targets: bigint
                max_assigned_certificates: bigint
                deprecation: { unavailable_after: string; announced: string } | null
                prices: {
                  location: string
                  price_hourly: { net: string; gross: string }
                  price_monthly: { net: string; gross: string }
                  included_traffic: bigint
                  price_per_tb_traffic: { net: string; gross: string }
                }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers': {
      $get:
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              load_balancers: {
                id: bigint
                name: string
                public_net: {
                  enabled: boolean
                  ipv4: {
                    id: bigint | null
                    ip: string | null
                    blocked: boolean
                    dns_ptr: string | null
                  }
                  ipv6: {
                    id: bigint | null
                    ip: string | null
                    blocked: boolean
                    dns_ptr: string | null
                  }
                }
                private_net: { network: bigint; ip: string }[]
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                load_balancer_type: {
                  id: bigint
                  name: string
                  description: string
                  max_connections: bigint
                  max_services: bigint
                  max_targets: bigint
                  max_assigned_certificates: bigint
                  deprecation: { unavailable_after: string; announced: string } | null
                  prices: {
                    location: string
                    price_hourly: { net: string; gross: string }
                    price_monthly: { net: string; gross: string }
                    included_traffic: bigint
                    price_per_tb_traffic: { net: string; gross: string }
                  }[]
                }
                protection: { delete: boolean }
                labels: { [x: string]: string }
                created: string
                services: (
                  | {
                      protocol: 'tcp'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                    }
                  | {
                      protocol: 'http'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                      http: {
                        cookie_name: string
                        cookie_lifetime: number
                        timeout_idle: number
                        sticky_sessions: boolean
                      }
                    }
                  | {
                      protocol: 'https'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                      http: {
                        cookie_name: string
                        cookie_lifetime: number
                        timeout_idle: number
                        certificates: bigint[]
                        redirect_http: boolean
                        sticky_sessions: boolean
                      }
                    }
                )[]
                targets: (
                  | {
                      type: 'server'
                      server: { id: bigint; ip: string }
                      health_status: {
                        listen_port: number
                        status: 'healthy' | 'unhealthy' | 'unknown'
                        detail?:
                          | 'unspecified'
                          | 'layer4_no_connection'
                          | 'layer4_timeout'
                          | 'layer7_timeout'
                          | 'unexpected_http_status'
                          | 'unexpected_http_content'
                          | undefined
                        http_status_code?: number | undefined
                      }[]
                      use_private_ip: boolean
                    }
                  | {
                      type: 'label_selector'
                      label_selector: { selector: string }
                      targets: {
                        type: string
                        server: { id: bigint; ip: string }
                        health_status: {
                          listen_port: number
                          status: 'healthy' | 'unhealthy' | 'unknown'
                          detail?:
                            | 'unspecified'
                            | 'layer4_no_connection'
                            | 'layer4_timeout'
                            | 'layer7_timeout'
                            | 'unexpected_http_status'
                            | 'unexpected_http_content'
                            | undefined
                          http_status_code?: number | undefined
                        }[]
                        use_private_ip: boolean
                      }[]
                      use_private_ip: boolean
                    }
                  | {
                      type: 'ip'
                      ip: { ip: string }
                      health_status: {
                        listen_port: number
                        status: 'healthy' | 'unhealthy' | 'unknown'
                        detail?:
                          | 'unspecified'
                          | 'layer4_no_connection'
                          | 'layer4_timeout'
                          | 'layer7_timeout'
                          | 'unexpected_http_status'
                          | 'unexpected_http_content'
                          | undefined
                        http_status_code?: number | undefined
                      }[]
                    }
                )[]
                algorithm: { type: 'round_robin' | 'least_connections' }
                outgoing_traffic: bigint | null
                ingoing_traffic: bigint | null
                included_traffic: bigint
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                name: string
                load_balancer_type: string
                algorithm?: { type: 'round_robin' | 'least_connections' } | undefined
                services?:
                  | (
                      | {
                          protocol: 'tcp'
                          listen_port: number
                          destination_port: number
                          proxyprotocol: boolean
                          health_check: {
                            protocol: 'tcp' | 'http'
                            port: number
                            interval: number
                            timeout: number
                            retries: number
                            http?:
                              | {
                                  domain: string | null
                                  path: string
                                  response?: string | undefined
                                  status_codes?: string[] | undefined
                                  tls?: boolean | undefined
                                }
                              | undefined
                          }
                        }
                      | {
                          protocol: 'http'
                          listen_port: number
                          destination_port: number
                          proxyprotocol: boolean
                          health_check: {
                            protocol: 'tcp' | 'http'
                            port: number
                            interval: number
                            timeout: number
                            retries: number
                            http?:
                              | {
                                  domain: string | null
                                  path: string
                                  response?: string | undefined
                                  status_codes?: string[] | undefined
                                  tls?: boolean | undefined
                                }
                              | undefined
                          }
                          http: {
                            cookie_name: string
                            cookie_lifetime: number
                            timeout_idle: number
                            sticky_sessions: boolean
                          }
                        }
                      | {
                          protocol: 'https'
                          listen_port: number
                          destination_port: number
                          proxyprotocol: boolean
                          health_check: {
                            protocol: 'tcp' | 'http'
                            port: number
                            interval: number
                            timeout: number
                            retries: number
                            http?:
                              | {
                                  domain: string | null
                                  path: string
                                  response?: string | undefined
                                  status_codes?: string[] | undefined
                                  tls?: boolean | undefined
                                }
                              | undefined
                          }
                          http: {
                            cookie_name: string
                            cookie_lifetime: number
                            timeout_idle: number
                            certificates: bigint[]
                            redirect_http: boolean
                            sticky_sessions: boolean
                          }
                        }
                    )[]
                  | undefined
                targets?:
                  | {
                      type: 'server' | 'label_selector' | 'ip'
                      server?: { id: bigint; ip?: string | undefined } | undefined
                      label_selector?: { selector: string } | undefined
                      ip?: { ip: string } | undefined
                      use_private_ip?: boolean | undefined
                    }[]
                  | undefined
                labels?: { [x: string]: string } | undefined
                public_interface?: boolean | undefined
                public_net?:
                  | { ipv4?: (bigint | null) | undefined; ipv6?: (bigint | null) | undefined }
                  | undefined
                network?: bigint | undefined
                network_zone?: string | undefined
                location?: string | undefined
              }
            }
            output: {
              load_balancer: {
                id: bigint
                name: string
                public_net: {
                  enabled: boolean
                  ipv4: {
                    id: bigint | null
                    ip: string | null
                    blocked: boolean
                    dns_ptr: string | null
                  }
                  ipv6: {
                    id: bigint | null
                    ip: string | null
                    blocked: boolean
                    dns_ptr: string | null
                  }
                }
                private_net: { network: bigint; ip: string }[]
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                load_balancer_type: {
                  id: bigint
                  name: string
                  description: string
                  max_connections: bigint
                  max_services: bigint
                  max_targets: bigint
                  max_assigned_certificates: bigint
                  deprecation: { unavailable_after: string; announced: string } | null
                  prices: {
                    location: string
                    price_hourly: { net: string; gross: string }
                    price_monthly: { net: string; gross: string }
                    included_traffic: bigint
                    price_per_tb_traffic: { net: string; gross: string }
                  }[]
                }
                protection: { delete: boolean }
                labels: { [x: string]: string }
                created: string
                services: (
                  | {
                      protocol: 'tcp'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                    }
                  | {
                      protocol: 'http'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                      http: {
                        cookie_name: string
                        cookie_lifetime: number
                        timeout_idle: number
                        sticky_sessions: boolean
                      }
                    }
                  | {
                      protocol: 'https'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                      http: {
                        cookie_name: string
                        cookie_lifetime: number
                        timeout_idle: number
                        certificates: bigint[]
                        redirect_http: boolean
                        sticky_sessions: boolean
                      }
                    }
                )[]
                targets: (
                  | {
                      type: 'server'
                      server: { id: bigint; ip: string }
                      health_status: {
                        listen_port: number
                        status: 'healthy' | 'unhealthy' | 'unknown'
                        detail?:
                          | 'unspecified'
                          | 'layer4_no_connection'
                          | 'layer4_timeout'
                          | 'layer7_timeout'
                          | 'unexpected_http_status'
                          | 'unexpected_http_content'
                          | undefined
                        http_status_code?: number | undefined
                      }[]
                      use_private_ip: boolean
                    }
                  | {
                      type: 'label_selector'
                      label_selector: { selector: string }
                      targets: {
                        type: string
                        server: { id: bigint; ip: string }
                        health_status: {
                          listen_port: number
                          status: 'healthy' | 'unhealthy' | 'unknown'
                          detail?:
                            | 'unspecified'
                            | 'layer4_no_connection'
                            | 'layer4_timeout'
                            | 'layer7_timeout'
                            | 'unexpected_http_status'
                            | 'unexpected_http_content'
                            | undefined
                          http_status_code?: number | undefined
                        }[]
                        use_private_ip: boolean
                      }[]
                      use_private_ip: boolean
                    }
                  | {
                      type: 'ip'
                      ip: { ip: string }
                      health_status: {
                        listen_port: number
                        status: 'healthy' | 'unhealthy' | 'unknown'
                        detail?:
                          | 'unspecified'
                          | 'layer4_no_connection'
                          | 'layer4_timeout'
                          | 'layer7_timeout'
                          | 'unexpected_http_status'
                          | 'unexpected_http_content'
                          | undefined
                        http_status_code?: number | undefined
                      }[]
                    }
                )[]
                algorithm: { type: 'round_robin' | 'least_connections' }
                outgoing_traffic: bigint | null
                ingoing_traffic: bigint | null
                included_traffic: bigint
              }
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                load_balancer_type: string
                algorithm?: { type: 'round_robin' | 'least_connections' } | undefined
                services?:
                  | (
                      | {
                          protocol: 'tcp'
                          listen_port: number
                          destination_port: number
                          proxyprotocol: boolean
                          health_check: {
                            protocol: 'tcp' | 'http'
                            port: number
                            interval: number
                            timeout: number
                            retries: number
                            http?:
                              | {
                                  domain: string | null
                                  path: string
                                  response?: string | undefined
                                  status_codes?: string[] | undefined
                                  tls?: boolean | undefined
                                }
                              | undefined
                          }
                        }
                      | {
                          protocol: 'http'
                          listen_port: number
                          destination_port: number
                          proxyprotocol: boolean
                          health_check: {
                            protocol: 'tcp' | 'http'
                            port: number
                            interval: number
                            timeout: number
                            retries: number
                            http?:
                              | {
                                  domain: string | null
                                  path: string
                                  response?: string | undefined
                                  status_codes?: string[] | undefined
                                  tls?: boolean | undefined
                                }
                              | undefined
                          }
                          http: {
                            cookie_name: string
                            cookie_lifetime: number
                            timeout_idle: number
                            sticky_sessions: boolean
                          }
                        }
                      | {
                          protocol: 'https'
                          listen_port: number
                          destination_port: number
                          proxyprotocol: boolean
                          health_check: {
                            protocol: 'tcp' | 'http'
                            port: number
                            interval: number
                            timeout: number
                            retries: number
                            http?:
                              | {
                                  domain: string | null
                                  path: string
                                  response?: string | undefined
                                  status_codes?: string[] | undefined
                                  tls?: boolean | undefined
                                }
                              | undefined
                          }
                          http: {
                            cookie_name: string
                            cookie_lifetime: number
                            timeout_idle: number
                            certificates: bigint[]
                            redirect_http: boolean
                            sticky_sessions: boolean
                          }
                        }
                    )[]
                  | undefined
                targets?:
                  | {
                      type: 'server' | 'label_selector' | 'ip'
                      server?: { id: bigint; ip?: string | undefined } | undefined
                      label_selector?: { selector: string } | undefined
                      ip?: { ip: string } | undefined
                      use_private_ip?: boolean | undefined
                    }[]
                  | undefined
                labels?: { [x: string]: string } | undefined
                public_interface?: boolean | undefined
                public_net?:
                  | { ipv4?: (bigint | null) | undefined; ipv6?: (bigint | null) | undefined }
                  | undefined
                network?: bigint | undefined
                network_zone?: string | undefined
                location?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                load_balancer_type: string
                algorithm?: { type: 'round_robin' | 'least_connections' } | undefined
                services?:
                  | (
                      | {
                          protocol: 'tcp'
                          listen_port: number
                          destination_port: number
                          proxyprotocol: boolean
                          health_check: {
                            protocol: 'tcp' | 'http'
                            port: number
                            interval: number
                            timeout: number
                            retries: number
                            http?:
                              | {
                                  domain: string | null
                                  path: string
                                  response?: string | undefined
                                  status_codes?: string[] | undefined
                                  tls?: boolean | undefined
                                }
                              | undefined
                          }
                        }
                      | {
                          protocol: 'http'
                          listen_port: number
                          destination_port: number
                          proxyprotocol: boolean
                          health_check: {
                            protocol: 'tcp' | 'http'
                            port: number
                            interval: number
                            timeout: number
                            retries: number
                            http?:
                              | {
                                  domain: string | null
                                  path: string
                                  response?: string | undefined
                                  status_codes?: string[] | undefined
                                  tls?: boolean | undefined
                                }
                              | undefined
                          }
                          http: {
                            cookie_name: string
                            cookie_lifetime: number
                            timeout_idle: number
                            sticky_sessions: boolean
                          }
                        }
                      | {
                          protocol: 'https'
                          listen_port: number
                          destination_port: number
                          proxyprotocol: boolean
                          health_check: {
                            protocol: 'tcp' | 'http'
                            port: number
                            interval: number
                            timeout: number
                            retries: number
                            http?:
                              | {
                                  domain: string | null
                                  path: string
                                  response?: string | undefined
                                  status_codes?: string[] | undefined
                                  tls?: boolean | undefined
                                }
                              | undefined
                          }
                          http: {
                            cookie_name: string
                            cookie_lifetime: number
                            timeout_idle: number
                            certificates: bigint[]
                            redirect_http: boolean
                            sticky_sessions: boolean
                          }
                        }
                    )[]
                  | undefined
                targets?:
                  | {
                      type: 'server' | 'label_selector' | 'ip'
                      server?: { id: bigint; ip?: string | undefined } | undefined
                      label_selector?: { selector: string } | undefined
                      ip?: { ip: string } | undefined
                      use_private_ip?: boolean | undefined
                    }[]
                  | undefined
                labels?: { [x: string]: string } | undefined
                public_interface?: boolean | undefined
                public_net?:
                  | { ipv4?: (bigint | null) | undefined; ipv6?: (bigint | null) | undefined }
                  | undefined
                network?: bigint | undefined
                network_zone?: string | undefined
                location?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              load_balancer: {
                id: bigint
                name: string
                public_net: {
                  enabled: boolean
                  ipv4: {
                    id: bigint | null
                    ip: string | null
                    blocked: boolean
                    dns_ptr: string | null
                  }
                  ipv6: {
                    id: bigint | null
                    ip: string | null
                    blocked: boolean
                    dns_ptr: string | null
                  }
                }
                private_net: { network: bigint; ip: string }[]
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                load_balancer_type: {
                  id: bigint
                  name: string
                  description: string
                  max_connections: bigint
                  max_services: bigint
                  max_targets: bigint
                  max_assigned_certificates: bigint
                  deprecation: { unavailable_after: string; announced: string } | null
                  prices: {
                    location: string
                    price_hourly: { net: string; gross: string }
                    price_monthly: { net: string; gross: string }
                    included_traffic: bigint
                    price_per_tb_traffic: { net: string; gross: string }
                  }[]
                }
                protection: { delete: boolean }
                labels: { [x: string]: string }
                created: string
                services: (
                  | {
                      protocol: 'tcp'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                    }
                  | {
                      protocol: 'http'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                      http: {
                        cookie_name: string
                        cookie_lifetime: number
                        timeout_idle: number
                        sticky_sessions: boolean
                      }
                    }
                  | {
                      protocol: 'https'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                      http: {
                        cookie_name: string
                        cookie_lifetime: number
                        timeout_idle: number
                        certificates: bigint[]
                        redirect_http: boolean
                        sticky_sessions: boolean
                      }
                    }
                )[]
                targets: (
                  | {
                      type: 'server'
                      server: { id: bigint; ip: string }
                      health_status: {
                        listen_port: number
                        status: 'healthy' | 'unhealthy' | 'unknown'
                        detail?:
                          | 'unspecified'
                          | 'layer4_no_connection'
                          | 'layer4_timeout'
                          | 'layer7_timeout'
                          | 'unexpected_http_status'
                          | 'unexpected_http_content'
                          | undefined
                        http_status_code?: number | undefined
                      }[]
                      use_private_ip: boolean
                    }
                  | {
                      type: 'label_selector'
                      label_selector: { selector: string }
                      targets: {
                        type: string
                        server: { id: bigint; ip: string }
                        health_status: {
                          listen_port: number
                          status: 'healthy' | 'unhealthy' | 'unknown'
                          detail?:
                            | 'unspecified'
                            | 'layer4_no_connection'
                            | 'layer4_timeout'
                            | 'layer7_timeout'
                            | 'unexpected_http_status'
                            | 'unexpected_http_content'
                            | undefined
                          http_status_code?: number | undefined
                        }[]
                        use_private_ip: boolean
                      }[]
                      use_private_ip: boolean
                    }
                  | {
                      type: 'ip'
                      ip: { ip: string }
                      health_status: {
                        listen_port: number
                        status: 'healthy' | 'unhealthy' | 'unknown'
                        detail?:
                          | 'unspecified'
                          | 'layer4_no_connection'
                          | 'layer4_timeout'
                          | 'layer7_timeout'
                          | 'unexpected_http_status'
                          | 'unexpected_http_content'
                          | undefined
                        http_status_code?: number | undefined
                      }[]
                    }
                )[]
                algorithm: { type: 'round_robin' | 'least_connections' }
                outgoing_traffic: bigint | null
                ingoing_traffic: bigint | null
                included_traffic: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              load_balancer: {
                id: bigint
                name: string
                public_net: {
                  enabled: boolean
                  ipv4: {
                    id: bigint | null
                    ip: string | null
                    blocked: boolean
                    dns_ptr: string | null
                  }
                  ipv6: {
                    id: bigint | null
                    ip: string | null
                    blocked: boolean
                    dns_ptr: string | null
                  }
                }
                private_net: { network: bigint; ip: string }[]
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                load_balancer_type: {
                  id: bigint
                  name: string
                  description: string
                  max_connections: bigint
                  max_services: bigint
                  max_targets: bigint
                  max_assigned_certificates: bigint
                  deprecation: { unavailable_after: string; announced: string } | null
                  prices: {
                    location: string
                    price_hourly: { net: string; gross: string }
                    price_monthly: { net: string; gross: string }
                    included_traffic: bigint
                    price_per_tb_traffic: { net: string; gross: string }
                  }[]
                }
                protection: { delete: boolean }
                labels: { [x: string]: string }
                created: string
                services: (
                  | {
                      protocol: 'tcp'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                    }
                  | {
                      protocol: 'http'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                      http: {
                        cookie_name: string
                        cookie_lifetime: number
                        timeout_idle: number
                        sticky_sessions: boolean
                      }
                    }
                  | {
                      protocol: 'https'
                      listen_port: number
                      destination_port: number
                      proxyprotocol: boolean
                      health_check: {
                        protocol: 'tcp' | 'http'
                        port: number
                        interval: number
                        timeout: number
                        retries: number
                        http?:
                          | {
                              domain: string | null
                              path: string
                              response?: string | undefined
                              status_codes?: string[] | undefined
                              tls?: boolean | undefined
                            }
                          | undefined
                      }
                      http: {
                        cookie_name: string
                        cookie_lifetime: number
                        timeout_idle: number
                        certificates: bigint[]
                        redirect_http: boolean
                        sticky_sessions: boolean
                      }
                    }
                )[]
                targets: (
                  | {
                      type: 'server'
                      server: { id: bigint; ip: string }
                      health_status: {
                        listen_port: number
                        status: 'healthy' | 'unhealthy' | 'unknown'
                        detail?:
                          | 'unspecified'
                          | 'layer4_no_connection'
                          | 'layer4_timeout'
                          | 'layer7_timeout'
                          | 'unexpected_http_status'
                          | 'unexpected_http_content'
                          | undefined
                        http_status_code?: number | undefined
                      }[]
                      use_private_ip: boolean
                    }
                  | {
                      type: 'label_selector'
                      label_selector: { selector: string }
                      targets: {
                        type: string
                        server: { id: bigint; ip: string }
                        health_status: {
                          listen_port: number
                          status: 'healthy' | 'unhealthy' | 'unknown'
                          detail?:
                            | 'unspecified'
                            | 'layer4_no_connection'
                            | 'layer4_timeout'
                            | 'layer7_timeout'
                            | 'unexpected_http_status'
                            | 'unexpected_http_content'
                            | undefined
                          http_status_code?: number | undefined
                        }[]
                        use_private_ip: boolean
                      }[]
                      use_private_ip: boolean
                    }
                  | {
                      type: 'ip'
                      ip: { ip: string }
                      health_status: {
                        listen_port: number
                        status: 'healthy' | 'unhealthy' | 'unknown'
                        detail?:
                          | 'unspecified'
                          | 'layer4_no_connection'
                          | 'layer4_timeout'
                          | 'layer7_timeout'
                          | 'unexpected_http_status'
                          | 'unexpected_http_content'
                          | undefined
                        http_status_code?: number | undefined
                      }[]
                    }
                )[]
                algorithm: { type: 'round_robin' | 'least_connections' }
                outgoing_traffic: bigint | null
                ingoing_traffic: bigint | null
                included_traffic: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/add_service': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                protocol?: 'tcp' | 'http' | 'https' | undefined
                listen_port?: number | undefined
                destination_port?: number | undefined
                proxyprotocol?: boolean | undefined
                health_check?:
                  | {
                      protocol?: 'tcp' | 'http' | undefined
                      port?: number | undefined
                      interval?: number | undefined
                      timeout?: number | undefined
                      retries?: number | undefined
                      http?:
                        | {
                            domain?: (string | null) | undefined
                            path?: string | undefined
                            response?: string | undefined
                            status_codes?: string[] | undefined
                            tls?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                http?:
                  | {
                      cookie_name?: string | undefined
                      cookie_lifetime?: number | undefined
                      timeout_idle?: number | undefined
                      certificates?: bigint[] | undefined
                      redirect_http?: boolean | undefined
                      sticky_sessions?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                protocol?: 'tcp' | 'http' | 'https' | undefined
                listen_port?: number | undefined
                destination_port?: number | undefined
                proxyprotocol?: boolean | undefined
                health_check?:
                  | {
                      protocol?: 'tcp' | 'http' | undefined
                      port?: number | undefined
                      interval?: number | undefined
                      timeout?: number | undefined
                      retries?: number | undefined
                      http?:
                        | {
                            domain?: (string | null) | undefined
                            path?: string | undefined
                            response?: string | undefined
                            status_codes?: string[] | undefined
                            tls?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                http?:
                  | {
                      cookie_name?: string | undefined
                      cookie_lifetime?: number | undefined
                      timeout_idle?: number | undefined
                      certificates?: bigint[] | undefined
                      redirect_http?: boolean | undefined
                      sticky_sessions?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                protocol?: 'tcp' | 'http' | 'https' | undefined
                listen_port?: number | undefined
                destination_port?: number | undefined
                proxyprotocol?: boolean | undefined
                health_check?:
                  | {
                      protocol?: 'tcp' | 'http' | undefined
                      port?: number | undefined
                      interval?: number | undefined
                      timeout?: number | undefined
                      retries?: number | undefined
                      http?:
                        | {
                            domain?: (string | null) | undefined
                            path?: string | undefined
                            response?: string | undefined
                            status_codes?: string[] | undefined
                            tls?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                http?:
                  | {
                      cookie_name?: string | undefined
                      cookie_lifetime?: number | undefined
                      timeout_idle?: number | undefined
                      certificates?: bigint[] | undefined
                      redirect_http?: boolean | undefined
                      sticky_sessions?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/add_target': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                type: 'server' | 'label_selector' | 'ip'
                server?: { id: bigint; ip?: string | undefined } | undefined
                label_selector?: { selector: string } | undefined
                ip?: { ip: string } | undefined
                use_private_ip?: boolean | undefined
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                type: 'server' | 'label_selector' | 'ip'
                server?: { id: bigint; ip?: string | undefined } | undefined
                label_selector?: { selector: string } | undefined
                ip?: { ip: string } | undefined
                use_private_ip?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                type: 'server' | 'label_selector' | 'ip'
                server?: { id: bigint; ip?: string | undefined } | undefined
                label_selector?: { selector: string } | undefined
                ip?: { ip: string } | undefined
                use_private_ip?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/attach_to_network': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: { network: bigint; ip?: string | undefined; ip_range?: string | undefined }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: { network: bigint; ip?: string | undefined; ip_range?: string | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { network: bigint; ip?: string | undefined; ip_range?: string | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/change_algorithm': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: { type: 'round_robin' | 'least_connections' }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: { type: 'round_robin' | 'least_connections' }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { type: 'round_robin' | 'least_connections' }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/change_dns_ptr': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/change_protection': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/change_type': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { load_balancer_type: string } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { load_balancer_type: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { load_balancer_type: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/delete_service': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { listen_port: number } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { listen_port: number } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { listen_port: number } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/detach_from_network': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { network: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { network: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { network: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/disable_public_interface': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/enable_public_interface': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/remove_target': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                type: 'server' | 'label_selector' | 'ip'
                server?: { id: bigint; ip?: string | undefined } | undefined
                label_selector?: { selector: string } | undefined
                ip?: { ip: string } | undefined
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                type: 'server' | 'label_selector' | 'ip'
                server?: { id: bigint; ip?: string | undefined } | undefined
                label_selector?: { selector: string } | undefined
                ip?: { ip: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                type: 'server' | 'label_selector' | 'ip'
                server?: { id: bigint; ip?: string | undefined } | undefined
                label_selector?: { selector: string } | undefined
                ip?: { ip: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/update_service': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                protocol?: 'tcp' | 'http' | 'https' | undefined
                listen_port?: number | undefined
                destination_port?: number | undefined
                proxyprotocol?: boolean | undefined
                health_check?:
                  | {
                      protocol?: 'tcp' | 'http' | undefined
                      port?: number | undefined
                      interval?: number | undefined
                      timeout?: number | undefined
                      retries?: number | undefined
                      http?:
                        | {
                            domain?: (string | null) | undefined
                            path?: string | undefined
                            response?: string | undefined
                            status_codes?: string[] | undefined
                            tls?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                http?:
                  | {
                      cookie_name?: string | undefined
                      cookie_lifetime?: number | undefined
                      timeout_idle?: number | undefined
                      certificates?: bigint[] | undefined
                      redirect_http?: boolean | undefined
                      sticky_sessions?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                protocol?: 'tcp' | 'http' | 'https' | undefined
                listen_port?: number | undefined
                destination_port?: number | undefined
                proxyprotocol?: boolean | undefined
                health_check?:
                  | {
                      protocol?: 'tcp' | 'http' | undefined
                      port?: number | undefined
                      interval?: number | undefined
                      timeout?: number | undefined
                      retries?: number | undefined
                      http?:
                        | {
                            domain?: (string | null) | undefined
                            path?: string | undefined
                            response?: string | undefined
                            status_codes?: string[] | undefined
                            tls?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                http?:
                  | {
                      cookie_name?: string | undefined
                      cookie_lifetime?: number | undefined
                      timeout_idle?: number | undefined
                      certificates?: bigint[] | undefined
                      redirect_http?: boolean | undefined
                      sticky_sessions?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                protocol?: 'tcp' | 'http' | 'https' | undefined
                listen_port?: number | undefined
                destination_port?: number | undefined
                proxyprotocol?: boolean | undefined
                health_check?:
                  | {
                      protocol?: 'tcp' | 'http' | undefined
                      port?: number | undefined
                      interval?: number | undefined
                      timeout?: number | undefined
                      retries?: number | undefined
                      http?:
                        | {
                            domain?: (string | null) | undefined
                            path?: string | undefined
                            response?: string | undefined
                            status_codes?: string[] | undefined
                            tls?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                http?:
                  | {
                      cookie_name?: string | undefined
                      cookie_lifetime?: number | undefined
                      timeout_idle?: number | undefined
                      certificates?: bigint[] | undefined
                      redirect_http?: boolean | undefined
                      sticky_sessions?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/actions/:action_id': {
      $get:
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load_balancers/:id/metrics': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                type: (
                  | 'open_connections'
                  | 'connections_per_second'
                  | 'requests_per_second'
                  | 'bandwidth'
                )[]
                start: string
                end: string
                step?: string | undefined
              }
            }
            output: {
              metrics: {
                start: string
                end: string
                step: number
                time_series: { [x: string]: { values: unknown[][] } }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type: (
                  | 'open_connections'
                  | 'connections_per_second'
                  | 'requests_per_second'
                  | 'bandwidth'
                )[]
                start: string
                end: string
                step?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type: (
                  | 'open_connections'
                  | 'connections_per_second'
                  | 'requests_per_second'
                  | 'bandwidth'
                )[]
                start: string
                end: string
                step?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/locations': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              locations: {
                id: bigint
                name: string
                description: string
                country: string
                city: string
                latitude: number
                longitude: number
                network_zone: string
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/locations/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              location: {
                id: bigint
                name: string
                description: string
                country: string
                city: string
                latitude: number
                longitude: number
                network_zone: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks': {
      $get:
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              networks: {
                id: bigint
                name: string
                ip_range: string
                subnets: {
                  type: 'cloud' | 'server' | 'vswitch'
                  ip_range?: string | undefined
                  network_zone: string
                  gateway: string
                  vswitch_id?: (bigint | null) | undefined
                }[]
                routes: { destination: string; gateway: string }[]
                servers: bigint[]
                load_balancers?: bigint[] | undefined
                protection: { delete: boolean }
                labels: { [x: string]: string }
                created: string
                expose_routes_to_vswitch: boolean
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                name: string
                ip_range: string
                labels?: { [x: string]: string } | undefined
                subnets?:
                  | {
                      type: 'cloud' | 'server' | 'vswitch'
                      ip_range?: string | undefined
                      network_zone: string
                      vswitch_id?: bigint | undefined
                    }[]
                  | undefined
                routes?: { destination: string; gateway: string }[] | undefined
                expose_routes_to_vswitch?: boolean | undefined
              }
            }
            output: {
              network?:
                | {
                    id: bigint
                    name: string
                    ip_range: string
                    subnets: {
                      type: 'cloud' | 'server' | 'vswitch'
                      ip_range?: string | undefined
                      network_zone: string
                      gateway: string
                      vswitch_id?: (bigint | null) | undefined
                    }[]
                    routes: { destination: string; gateway: string }[]
                    servers: bigint[]
                    load_balancers?: bigint[] | undefined
                    protection: { delete: boolean }
                    labels: { [x: string]: string }
                    created: string
                    expose_routes_to_vswitch: boolean
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                ip_range: string
                labels?: { [x: string]: string } | undefined
                subnets?:
                  | {
                      type: 'cloud' | 'server' | 'vswitch'
                      ip_range?: string | undefined
                      network_zone: string
                      vswitch_id?: bigint | undefined
                    }[]
                  | undefined
                routes?: { destination: string; gateway: string }[] | undefined
                expose_routes_to_vswitch?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                ip_range: string
                labels?: { [x: string]: string } | undefined
                subnets?:
                  | {
                      type: 'cloud' | 'server' | 'vswitch'
                      ip_range?: string | undefined
                      network_zone: string
                      vswitch_id?: bigint | undefined
                    }[]
                  | undefined
                routes?: { destination: string; gateway: string }[] | undefined
                expose_routes_to_vswitch?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              network?:
                | {
                    id: bigint
                    name: string
                    ip_range: string
                    subnets: {
                      type: 'cloud' | 'server' | 'vswitch'
                      ip_range?: string | undefined
                      network_zone: string
                      gateway: string
                      vswitch_id?: (bigint | null) | undefined
                    }[]
                    routes: { destination: string; gateway: string }[]
                    servers: bigint[]
                    load_balancers?: bigint[] | undefined
                    protection: { delete: boolean }
                    labels: { [x: string]: string }
                    created: string
                    expose_routes_to_vswitch: boolean
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: {
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
                expose_routes_to_vswitch?: boolean | undefined
              }
            }
            output: {
              network?:
                | {
                    id: bigint
                    name: string
                    ip_range: string
                    subnets: {
                      type: 'cloud' | 'server' | 'vswitch'
                      ip_range?: string | undefined
                      network_zone: string
                      gateway: string
                      vswitch_id?: (bigint | null) | undefined
                    }[]
                    routes: { destination: string; gateway: string }[]
                    servers: bigint[]
                    load_balancers?: bigint[] | undefined
                    protection: { delete: boolean }
                    labels: { [x: string]: string }
                    created: string
                    expose_routes_to_vswitch: boolean
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
                expose_routes_to_vswitch?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
                expose_routes_to_vswitch?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id/actions': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id/actions/add_route': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { destination: string; gateway: string } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { destination: string; gateway: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { destination: string; gateway: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id/actions/add_subnet': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                type: 'cloud' | 'server' | 'vswitch'
                ip_range?: string | undefined
                network_zone: string
                vswitch_id?: bigint | undefined
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                type: 'cloud' | 'server' | 'vswitch'
                ip_range?: string | undefined
                network_zone: string
                vswitch_id?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                type: 'cloud' | 'server' | 'vswitch'
                ip_range?: string | undefined
                network_zone: string
                vswitch_id?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id/actions/change_ip_range': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { ip_range: string } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { ip_range: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { ip_range: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id/actions/change_protection': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id/actions/delete_route': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { destination: string; gateway: string } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { destination: string; gateway: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { destination: string; gateway: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id/actions/delete_subnet': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { ip_range: string } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { ip_range: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { ip_range: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id/actions/:action_id': {
      $get:
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networks/:id/members': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: ('server' | 'load_balancer')[] | undefined
                subnet?: string[] | undefined
                status?: ('ok' | 'attaching' | 'detaching' | 'updating' | 'error')[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'type'
                      | 'type:asc'
                      | 'type:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'ip'
                      | 'ip:asc'
                      | 'ip:desc'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              members: {
                type: 'server' | 'load_balancer'
                id: bigint
                ip: string
                status: 'ok' | 'attaching' | 'detaching' | 'updating' | 'error'
                alias_ips: string[]
                subnet: string
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: ('server' | 'load_balancer')[] | undefined
                subnet?: string[] | undefined
                status?: ('ok' | 'attaching' | 'detaching' | 'updating' | 'error')[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'type'
                      | 'type:asc'
                      | 'type:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'ip'
                      | 'ip:asc'
                      | 'ip:desc'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: ('server' | 'load_balancer')[] | undefined
                subnet?: string[] | undefined
                status?: ('ok' | 'attaching' | 'detaching' | 'updating' | 'error')[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'type'
                      | 'type:asc'
                      | 'type:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'ip'
                      | 'ip:asc'
                      | 'ip:desc'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/placement_groups': {
      $get:
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                type?: 'spread'[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              placement_groups: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                type: 'spread'
                created: string
                servers: bigint[]
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                type?: 'spread'[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                type?: 'spread'[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: { name: string; labels?: { [x: string]: string } | undefined; type: 'spread' }
            }
            output: {
              placement_group: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                type: 'spread'
                created: string
                servers: bigint[]
              }
              action?:
                | ({
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  } | null)
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: { name: string; labels?: { [x: string]: string } | undefined; type: 'spread' }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { name: string; labels?: { [x: string]: string } | undefined; type: 'spread' }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/placement_groups/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              placement_group: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                type: 'spread'
                created: string
                servers: bigint[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              placement_group: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                type: 'spread'
                created: string
                servers: bigint[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pricing': {
      $get:
        | {
            input: {}
            output: {
              pricing: {
                currency: string
                vat_rate: string
                primary_ips: {
                  type: 'ipv4' | 'ipv6'
                  prices: {
                    location: string
                    price_hourly: { net: string; gross: string }
                    price_monthly: { net: string; gross: string }
                  }[]
                }[]
                floating_ips: {
                  type: 'ipv4' | 'ipv6'
                  prices: { location: string; price_monthly: { net: string; gross: string } }[]
                }[]
                image: { price_per_gb_month: { net: string; gross: string } }
                volume: { price_per_gb_month: { net: string; gross: string } }
                server_backup: { percentage: string }
                server_types: {
                  id: bigint
                  name: string
                  prices: {
                    location: string
                    price_hourly: { net: string; gross: string }
                    price_monthly: { net: string; gross: string }
                    included_traffic: bigint
                    price_per_tb_traffic: { net: string; gross: string }
                  }[]
                }[]
                load_balancer_types: {
                  id: bigint
                  name: string
                  prices: {
                    location: string
                    price_hourly: { net: string; gross: string }
                    price_monthly: { net: string; gross: string }
                    included_traffic: bigint
                    price_per_tb_traffic: { net: string; gross: string }
                  }[]
                }[]
                floating_ip: { price_monthly: { net: string; gross: string } }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                label_selector?: string | undefined
                ip?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc')[]
                  | undefined
              }
            }
            output: {
              primary_ips: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                created: string
                blocked: boolean
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                ip: string
                dns_ptr: { ip: string; dns_ptr: string }[]
                protection: { delete: boolean }
                type: 'ipv4' | 'ipv6'
                auto_delete: boolean
                assignee_type: 'server' | 'unassigned'
                assignee_id: bigint | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                label_selector?: string | undefined
                ip?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc')[]
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                label_selector?: string | undefined
                ip?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc')[]
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                name: string
                labels?: { [x: string]: string } | undefined
                type: 'ipv4' | 'ipv6'
                location?: string | bigint | undefined
                assignee_type?: 'server' | 'unassigned' | undefined
                assignee_id?: (bigint | null) | undefined
                auto_delete?: boolean | undefined
              }
            }
            output: {
              primary_ip: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                created: string
                blocked: boolean
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                ip: string
                dns_ptr: { ip: string; dns_ptr: string }[]
                protection: { delete: boolean }
                type: 'ipv4' | 'ipv6'
                auto_delete: boolean
                assignee_type: 'server' | 'unassigned'
                assignee_id: bigint | null
              }
              action?:
                | ({
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  } | null)
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                labels?: { [x: string]: string } | undefined
                type: 'ipv4' | 'ipv6'
                location?: string | bigint | undefined
                assignee_type?: 'server' | 'unassigned' | undefined
                assignee_id?: (bigint | null) | undefined
                auto_delete?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                labels?: { [x: string]: string } | undefined
                type: 'ipv4' | 'ipv6'
                location?: string | bigint | undefined
                assignee_type?: 'server' | 'unassigned' | undefined
                assignee_id?: (bigint | null) | undefined
                auto_delete?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips/:id/actions': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips/:id/actions/:action_id': {
      $get:
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              primary_ip: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                created: string
                blocked: boolean
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                ip: string
                dns_ptr: { ip: string; dns_ptr: string }[]
                protection: { delete: boolean }
                type: 'ipv4' | 'ipv6'
                auto_delete: boolean
                assignee_type: 'server' | 'unassigned'
                assignee_id: bigint | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: {
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
                auto_delete?: boolean | undefined
              }
            }
            output: {
              primary_ip: {
                id: bigint
                name: string
                labels: { [x: string]: string }
                created: string
                blocked: boolean
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                ip: string
                dns_ptr: { ip: string; dns_ptr: string }[]
                protection: { delete: boolean }
                type: 'ipv4' | 'ipv6'
                auto_delete: boolean
                assignee_type: 'server' | 'unassigned'
                assignee_id: bigint | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
                auto_delete?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                name?: string | undefined
                labels?: { [x: string]: string } | undefined
                auto_delete?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips/:id/actions/assign': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: { assignee_type: 'server'; assignee_id: bigint }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: { assignee_type: 'server'; assignee_id: bigint }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { assignee_type: 'server'; assignee_id: bigint }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips/:id/actions/change_dns_ptr': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips/:id/actions/change_protection': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { delete: boolean } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { delete: boolean } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { delete: boolean } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/primary_ips/:id/actions/unassign': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/server_types': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
              }
            }
            output: {
              server_types: {
                id: bigint
                name: string
                description: string
                cores: number
                memory: number
                disk: number
                prices: {
                  location: string
                  price_hourly: { net: string; gross: string }
                  price_monthly: { net: string; gross: string }
                  included_traffic: bigint
                  price_per_tb_traffic: { net: string; gross: string }
                }[]
                storage_type: 'local' | 'network'
                cpu_type: 'shared' | 'dedicated'
                category?: string | undefined
                architecture: 'x86' | 'arm'
                deprecation?: ({ unavailable_after: string; announced: string } | null) | undefined
                locations: {
                  id: bigint
                  name: string
                  deprecation: { unavailable_after: string; announced: string } | null
                  recommended: boolean
                  available: boolean
                }[]
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/server_types/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              server_type: {
                id: bigint
                name: string
                description: string
                cores: number
                memory: number
                disk: number
                prices: {
                  location: string
                  price_hourly: { net: string; gross: string }
                  price_monthly: { net: string; gross: string }
                  included_traffic: bigint
                  price_per_tb_traffic: { net: string; gross: string }
                }[]
                storage_type: 'local' | 'network'
                cpu_type: 'shared' | 'dedicated'
                category?: string | undefined
                architecture: 'x86' | 'arm'
                deprecation?: ({ unavailable_after: string; announced: string } | null) | undefined
                locations: {
                  id: bigint
                  name: string
                  deprecation: { unavailable_after: string; announced: string } | null
                  recommended: boolean
                  available: boolean
                }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                label_selector?: string | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                status?:
                  | (
                      | 'running'
                      | 'initializing'
                      | 'starting'
                      | 'stopping'
                      | 'off'
                      | 'deleting'
                      | 'migrating'
                      | 'rebuilding'
                      | 'unknown'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              servers: {
                id: bigint
                name: string
                status:
                  | 'running'
                  | 'initializing'
                  | 'starting'
                  | 'stopping'
                  | 'off'
                  | 'deleting'
                  | 'migrating'
                  | 'rebuilding'
                  | 'unknown'
                created: string
                public_net: {
                  ipv4: {
                    id?: bigint | undefined
                    ip: string
                    blocked: boolean
                    dns_ptr: string
                  } | null
                  ipv6: {
                    id?: bigint | undefined
                    ip: string
                    blocked: boolean
                    dns_ptr: { ip: string; dns_ptr: string }[] | null
                  } | null
                  floating_ips: bigint[]
                  firewalls?:
                    | { id?: bigint | undefined; status?: 'applied' | 'pending' | undefined }[]
                    | undefined
                }
                private_net: {
                  network?: bigint | undefined
                  ip?: string | undefined
                  alias_ips?: string[] | undefined
                  mac_address?: string | undefined
                }[]
                server_type: {
                  id: bigint
                  name: string
                  description: string
                  cores: number
                  memory: number
                  disk: number
                  prices: {
                    location: string
                    price_hourly: { net: string; gross: string }
                    price_monthly: { net: string; gross: string }
                    included_traffic: bigint
                    price_per_tb_traffic: { net: string; gross: string }
                  }[]
                  storage_type: 'local' | 'network'
                  cpu_type: 'shared' | 'dedicated'
                  category?: string | undefined
                  architecture: 'x86' | 'arm'
                  deprecation?:
                    | ({ unavailable_after: string; announced: string } | null)
                    | undefined
                  locations: {
                    id: bigint
                    name: string
                    deprecation: { unavailable_after: string; announced: string } | null
                    recommended: boolean
                    available: boolean
                  }[]
                }
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                image: {
                  id: bigint
                  type: 'system' | 'app' | 'snapshot' | 'backup'
                  status: 'available' | 'creating' | 'unavailable'
                  name: string | null
                  description: string
                  image_size: number | null
                  disk_size: number
                  created: string
                  created_from: { id: bigint; name: string } | null
                  bound_to: bigint | null
                  os_flavor:
                    | 'ubuntu'
                    | 'centos'
                    | 'debian'
                    | 'fedora'
                    | 'rocky'
                    | 'alma'
                    | 'opensuse'
                    | 'unknown'
                  os_version: string | null
                  rapid_deploy?: boolean | undefined
                  protection: { delete: boolean }
                  deprecation: { unavailable_after: string; announced: string } | null
                  deleted: string | null
                  labels: { [x: string]: string }
                  architecture: 'x86' | 'arm'
                } | null
                iso: {
                  id: bigint
                  name: string | null
                  description: string
                  type: 'public' | 'private'
                  deprecation: { unavailable_after: string; announced: string } | null
                  architecture: 'x86' | 'arm'
                } | null
                rescue_enabled: boolean
                locked: boolean
                backup_window: string | null
                outgoing_traffic: bigint | null
                ingoing_traffic: bigint | null
                included_traffic: bigint | null
                protection: { delete: boolean; rebuild: boolean }
                labels: { [x: string]: string }
                volumes?: bigint[] | undefined
                load_balancers?: bigint[] | undefined
                primary_disk_size: number
                placement_group?:
                  | ({
                      id: bigint
                      name: string
                      labels: { [x: string]: string }
                      type: 'spread'
                      created: string
                      servers: bigint[]
                    } | null)
                  | undefined
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                label_selector?: string | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                status?:
                  | (
                      | 'running'
                      | 'initializing'
                      | 'starting'
                      | 'stopping'
                      | 'off'
                      | 'deleting'
                      | 'migrating'
                      | 'rebuilding'
                      | 'unknown'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                label_selector?: string | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                status?:
                  | (
                      | 'running'
                      | 'initializing'
                      | 'starting'
                      | 'stopping'
                      | 'off'
                      | 'deleting'
                      | 'migrating'
                      | 'rebuilding'
                      | 'unknown'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                name: string
                location?: string | undefined
                server_type: string
                start_after_create?: boolean | undefined
                image: string
                placement_group?: bigint | undefined
                ssh_keys?: string[] | undefined
                volumes?: bigint[] | undefined
                networks?: bigint[] | undefined
                firewalls?: { firewall: bigint }[] | undefined
                user_data?: string | undefined
                labels?: { [x: string]: string } | undefined
                automount?: boolean | undefined
                public_net?:
                  | {
                      enable_ipv4?: boolean | undefined
                      enable_ipv6?: boolean | undefined
                      ipv4?: (number | null) | undefined
                      ipv6?: (number | null) | undefined
                    }
                  | undefined
              }
            }
            output: {
              server: {
                id: bigint
                name: string
                status:
                  | 'running'
                  | 'initializing'
                  | 'starting'
                  | 'stopping'
                  | 'off'
                  | 'deleting'
                  | 'migrating'
                  | 'rebuilding'
                  | 'unknown'
                created: string
                public_net: {
                  ipv4: {
                    id?: bigint | undefined
                    ip: string
                    blocked: boolean
                    dns_ptr: string
                  } | null
                  ipv6: {
                    id?: bigint | undefined
                    ip: string
                    blocked: boolean
                    dns_ptr: { ip: string; dns_ptr: string }[] | null
                  } | null
                  floating_ips: bigint[]
                  firewalls?:
                    | { id?: bigint | undefined; status?: 'applied' | 'pending' | undefined }[]
                    | undefined
                }
                private_net: {
                  network?: bigint | undefined
                  ip?: string | undefined
                  alias_ips?: string[] | undefined
                  mac_address?: string | undefined
                }[]
                server_type: {
                  id: bigint
                  name: string
                  description: string
                  cores: number
                  memory: number
                  disk: number
                  prices: {
                    location: string
                    price_hourly: { net: string; gross: string }
                    price_monthly: { net: string; gross: string }
                    included_traffic: bigint
                    price_per_tb_traffic: { net: string; gross: string }
                  }[]
                  storage_type: 'local' | 'network'
                  cpu_type: 'shared' | 'dedicated'
                  category?: string | undefined
                  architecture: 'x86' | 'arm'
                  deprecation?:
                    | ({ unavailable_after: string; announced: string } | null)
                    | undefined
                  locations: {
                    id: bigint
                    name: string
                    deprecation: { unavailable_after: string; announced: string } | null
                    recommended: boolean
                    available: boolean
                  }[]
                }
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                image: {
                  id: bigint
                  type: 'system' | 'app' | 'snapshot' | 'backup'
                  status: 'available' | 'creating' | 'unavailable'
                  name: string | null
                  description: string
                  image_size: number | null
                  disk_size: number
                  created: string
                  created_from: { id: bigint; name: string } | null
                  bound_to: bigint | null
                  os_flavor:
                    | 'ubuntu'
                    | 'centos'
                    | 'debian'
                    | 'fedora'
                    | 'rocky'
                    | 'alma'
                    | 'opensuse'
                    | 'unknown'
                  os_version: string | null
                  rapid_deploy?: boolean | undefined
                  protection: { delete: boolean }
                  deprecation: { unavailable_after: string; announced: string } | null
                  deleted: string | null
                  labels: { [x: string]: string }
                  architecture: 'x86' | 'arm'
                } | null
                iso: {
                  id: bigint
                  name: string | null
                  description: string
                  type: 'public' | 'private'
                  deprecation: { unavailable_after: string; announced: string } | null
                  architecture: 'x86' | 'arm'
                } | null
                rescue_enabled: boolean
                locked: boolean
                backup_window: string | null
                outgoing_traffic: bigint | null
                ingoing_traffic: bigint | null
                included_traffic: bigint | null
                protection: { delete: boolean; rebuild: boolean }
                labels: { [x: string]: string }
                volumes?: bigint[] | undefined
                load_balancers?: bigint[] | undefined
                primary_disk_size: number
                placement_group?:
                  | ({
                      id: bigint
                      name: string
                      labels: { [x: string]: string }
                      type: 'spread'
                      created: string
                      servers: bigint[]
                    } | null)
                  | undefined
              }
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
              next_actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              root_password: string | null
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                location?: string | undefined
                server_type: string
                start_after_create?: boolean | undefined
                image: string
                placement_group?: bigint | undefined
                ssh_keys?: string[] | undefined
                volumes?: bigint[] | undefined
                networks?: bigint[] | undefined
                firewalls?: { firewall: bigint }[] | undefined
                user_data?: string | undefined
                labels?: { [x: string]: string } | undefined
                automount?: boolean | undefined
                public_net?:
                  | {
                      enable_ipv4?: boolean | undefined
                      enable_ipv6?: boolean | undefined
                      ipv4?: (number | null) | undefined
                      ipv6?: (number | null) | undefined
                    }
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                location?: string | undefined
                server_type: string
                start_after_create?: boolean | undefined
                image: string
                placement_group?: bigint | undefined
                ssh_keys?: string[] | undefined
                volumes?: bigint[] | undefined
                networks?: bigint[] | undefined
                firewalls?: { firewall: bigint }[] | undefined
                user_data?: string | undefined
                labels?: { [x: string]: string } | undefined
                automount?: boolean | undefined
                public_net?:
                  | {
                      enable_ipv4?: boolean | undefined
                      enable_ipv6?: boolean | undefined
                      ipv4?: (number | null) | undefined
                      ipv6?: (number | null) | undefined
                    }
                  | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              server?:
                | {
                    id: bigint
                    name: string
                    status:
                      | 'running'
                      | 'initializing'
                      | 'starting'
                      | 'stopping'
                      | 'off'
                      | 'deleting'
                      | 'migrating'
                      | 'rebuilding'
                      | 'unknown'
                    created: string
                    public_net: {
                      ipv4: {
                        id?: bigint | undefined
                        ip: string
                        blocked: boolean
                        dns_ptr: string
                      } | null
                      ipv6: {
                        id?: bigint | undefined
                        ip: string
                        blocked: boolean
                        dns_ptr: { ip: string; dns_ptr: string }[] | null
                      } | null
                      floating_ips: bigint[]
                      firewalls?:
                        | { id?: bigint | undefined; status?: 'applied' | 'pending' | undefined }[]
                        | undefined
                    }
                    private_net: {
                      network?: bigint | undefined
                      ip?: string | undefined
                      alias_ips?: string[] | undefined
                      mac_address?: string | undefined
                    }[]
                    server_type: {
                      id: bigint
                      name: string
                      description: string
                      cores: number
                      memory: number
                      disk: number
                      prices: {
                        location: string
                        price_hourly: { net: string; gross: string }
                        price_monthly: { net: string; gross: string }
                        included_traffic: bigint
                        price_per_tb_traffic: { net: string; gross: string }
                      }[]
                      storage_type: 'local' | 'network'
                      cpu_type: 'shared' | 'dedicated'
                      category?: string | undefined
                      architecture: 'x86' | 'arm'
                      deprecation?:
                        | ({ unavailable_after: string; announced: string } | null)
                        | undefined
                      locations: {
                        id: bigint
                        name: string
                        deprecation: { unavailable_after: string; announced: string } | null
                        recommended: boolean
                        available: boolean
                      }[]
                    }
                    location: {
                      id: bigint
                      name: string
                      description: string
                      country: string
                      city: string
                      latitude: number
                      longitude: number
                      network_zone: string
                    }
                    image: {
                      id: bigint
                      type: 'system' | 'app' | 'snapshot' | 'backup'
                      status: 'available' | 'creating' | 'unavailable'
                      name: string | null
                      description: string
                      image_size: number | null
                      disk_size: number
                      created: string
                      created_from: { id: bigint; name: string } | null
                      bound_to: bigint | null
                      os_flavor:
                        | 'ubuntu'
                        | 'centos'
                        | 'debian'
                        | 'fedora'
                        | 'rocky'
                        | 'alma'
                        | 'opensuse'
                        | 'unknown'
                      os_version: string | null
                      rapid_deploy?: boolean | undefined
                      protection: { delete: boolean }
                      deprecation: { unavailable_after: string; announced: string } | null
                      deleted: string | null
                      labels: { [x: string]: string }
                      architecture: 'x86' | 'arm'
                    } | null
                    iso: {
                      id: bigint
                      name: string | null
                      description: string
                      type: 'public' | 'private'
                      deprecation: { unavailable_after: string; announced: string } | null
                      architecture: 'x86' | 'arm'
                    } | null
                    rescue_enabled: boolean
                    locked: boolean
                    backup_window: string | null
                    outgoing_traffic: bigint | null
                    ingoing_traffic: bigint | null
                    included_traffic: bigint | null
                    protection: { delete: boolean; rebuild: boolean }
                    labels: { [x: string]: string }
                    volumes?: bigint[] | undefined
                    load_balancers?: bigint[] | undefined
                    primary_disk_size: number
                    placement_group?:
                      | ({
                          id: bigint
                          name: string
                          labels: { [x: string]: string }
                          type: 'spread'
                          created: string
                          servers: bigint[]
                        } | null)
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              server?:
                | {
                    id: bigint
                    name: string
                    status:
                      | 'running'
                      | 'initializing'
                      | 'starting'
                      | 'stopping'
                      | 'off'
                      | 'deleting'
                      | 'migrating'
                      | 'rebuilding'
                      | 'unknown'
                    created: string
                    public_net: {
                      ipv4: {
                        id?: bigint | undefined
                        ip: string
                        blocked: boolean
                        dns_ptr: string
                      } | null
                      ipv6: {
                        id?: bigint | undefined
                        ip: string
                        blocked: boolean
                        dns_ptr: { ip: string; dns_ptr: string }[] | null
                      } | null
                      floating_ips: bigint[]
                      firewalls?:
                        | { id?: bigint | undefined; status?: 'applied' | 'pending' | undefined }[]
                        | undefined
                    }
                    private_net: {
                      network?: bigint | undefined
                      ip?: string | undefined
                      alias_ips?: string[] | undefined
                      mac_address?: string | undefined
                    }[]
                    server_type: {
                      id: bigint
                      name: string
                      description: string
                      cores: number
                      memory: number
                      disk: number
                      prices: {
                        location: string
                        price_hourly: { net: string; gross: string }
                        price_monthly: { net: string; gross: string }
                        included_traffic: bigint
                        price_per_tb_traffic: { net: string; gross: string }
                      }[]
                      storage_type: 'local' | 'network'
                      cpu_type: 'shared' | 'dedicated'
                      category?: string | undefined
                      architecture: 'x86' | 'arm'
                      deprecation?:
                        | ({ unavailable_after: string; announced: string } | null)
                        | undefined
                      locations: {
                        id: bigint
                        name: string
                        deprecation: { unavailable_after: string; announced: string } | null
                        recommended: boolean
                        available: boolean
                      }[]
                    }
                    location: {
                      id: bigint
                      name: string
                      description: string
                      country: string
                      city: string
                      latitude: number
                      longitude: number
                      network_zone: string
                    }
                    image: {
                      id: bigint
                      type: 'system' | 'app' | 'snapshot' | 'backup'
                      status: 'available' | 'creating' | 'unavailable'
                      name: string | null
                      description: string
                      image_size: number | null
                      disk_size: number
                      created: string
                      created_from: { id: bigint; name: string } | null
                      bound_to: bigint | null
                      os_flavor:
                        | 'ubuntu'
                        | 'centos'
                        | 'debian'
                        | 'fedora'
                        | 'rocky'
                        | 'alma'
                        | 'opensuse'
                        | 'unknown'
                      os_version: string | null
                      rapid_deploy?: boolean | undefined
                      protection: { delete: boolean }
                      deprecation: { unavailable_after: string; announced: string } | null
                      deleted: string | null
                      labels: { [x: string]: string }
                      architecture: 'x86' | 'arm'
                    } | null
                    iso: {
                      id: bigint
                      name: string | null
                      description: string
                      type: 'public' | 'private'
                      deprecation: { unavailable_after: string; announced: string } | null
                      architecture: 'x86' | 'arm'
                    } | null
                    rescue_enabled: boolean
                    locked: boolean
                    backup_window: string | null
                    outgoing_traffic: bigint | null
                    ingoing_traffic: bigint | null
                    included_traffic: bigint | null
                    protection: { delete: boolean; rebuild: boolean }
                    labels: { [x: string]: string }
                    volumes?: bigint[] | undefined
                    load_balancers?: bigint[] | undefined
                    primary_disk_size: number
                    placement_group?:
                      | ({
                          id: bigint
                          name: string
                          labels: { [x: string]: string }
                          type: 'spread'
                          created: string
                          servers: bigint[]
                        } | null)
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } }
            output: {
              action?:
                | {
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/add_to_placement_group': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { placement_group: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { placement_group: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { placement_group: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/attach_iso': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { iso: string } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { iso: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { iso: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/attach_to_network': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                network: bigint
                ip?: string | undefined
                alias_ips?: string[] | undefined
                ip_range?: string | undefined
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                network: bigint
                ip?: string | undefined
                alias_ips?: string[] | undefined
                ip_range?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                network: bigint
                ip?: string | undefined
                alias_ips?: string[] | undefined
                ip_range?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/change_alias_ips': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { network: bigint; alias_ips: string[] } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { network: bigint; alias_ips: string[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { network: bigint; alias_ips: string[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/change_dns_ptr': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { ip: string; dns_ptr: string | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/change_protection': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: { delete?: boolean | undefined; rebuild?: boolean | undefined }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: { delete?: boolean | undefined; rebuild?: boolean | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { delete?: boolean | undefined; rebuild?: boolean | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/change_type': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: { upgrade_disk: boolean; server_type: string }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: { upgrade_disk: boolean; server_type: string }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { upgrade_disk: boolean; server_type: string }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/create_image': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                description?: string | undefined
                type?: 'snapshot' | 'backup' | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              image?:
                | {
                    id: bigint
                    type: 'system' | 'app' | 'snapshot' | 'backup'
                    status: 'available' | 'creating' | 'unavailable'
                    name: string | null
                    description: string
                    image_size: number | null
                    disk_size: number
                    created: string
                    created_from: { id: bigint; name: string } | null
                    bound_to: bigint | null
                    os_flavor:
                      | 'ubuntu'
                      | 'centos'
                      | 'debian'
                      | 'fedora'
                      | 'rocky'
                      | 'alma'
                      | 'opensuse'
                      | 'unknown'
                    os_version: string | null
                    rapid_deploy?: boolean | undefined
                    protection: { delete: boolean }
                    deprecation: { unavailable_after: string; announced: string } | null
                    deleted: string | null
                    labels: { [x: string]: string }
                    architecture: 'x86' | 'arm'
                  }
                | undefined
              action?:
                | {
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                description?: string | undefined
                type?: 'snapshot' | 'backup' | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                description?: string | undefined
                type?: 'snapshot' | 'backup' | undefined
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/detach_from_network': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { network: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { network: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { network: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/detach_iso': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/disable_backup': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/disable_rescue': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/enable_backup': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/enable_rescue': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: { type?: 'linux64' | undefined; ssh_keys?: bigint[] | undefined }
            }
            output: {
              root_password?: string | undefined
              action?:
                | {
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: { type?: 'linux64' | undefined; ssh_keys?: bigint[] | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { type?: 'linux64' | undefined; ssh_keys?: bigint[] | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/poweroff': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/poweron': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/reboot': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/rebuild': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: { image: string; user_data?: string | undefined }
            }
            output: {
              root_password?: (string | null) | undefined
              action?:
                | {
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: { image: string; user_data?: string | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { image: string; user_data?: string | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/remove_from_placement_group': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/request_console': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              wss_url: string
              password: string
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/reset': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/reset_password': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              root_password?: string | undefined
              action?:
                | {
                    id: bigint
                    command: string
                    status: 'running' | 'success' | 'error'
                    started: string
                    finished: string | null
                    progress: number
                    resources: { id: bigint; type: string }[]
                    error: { code: string; message: string } | null
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/shutdown': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/actions/:action_id': {
      $get:
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/servers/:id/metrics': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                type: ('cpu' | 'disk' | 'network')[]
                start: string
                end: string
                step?: string | undefined
              }
            }
            output: {
              metrics: {
                start: string
                end: string
                step: number
                time_series: { [x: string]: { values: unknown[][] } }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type: ('cpu' | 'disk' | 'network')[]
                start: string
                end: string
                step?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type: ('cpu' | 'disk' | 'network')[]
                start: string
                end: string
                step?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ssh_keys': {
      $get:
        | {
            input: {
              query: {
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
                name?: string | undefined
                fingerprint?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              ssh_keys: {
                id: bigint
                name: string
                fingerprint: string
                public_key: string
                labels: { [x: string]: string }
                created: string
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
                name?: string | undefined
                fingerprint?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sort?:
                  | ('id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc')[]
                  | undefined
                name?: string | undefined
                fingerprint?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                name: string
                public_key: string
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              ssh_key: {
                id: bigint
                name: string
                fingerprint: string
                public_key: string
                labels: { [x: string]: string }
                created: string
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                public_key: string
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                public_key: string
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ssh_keys/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              ssh_key: {
                id: bigint
                name: string
                fingerprint: string
                public_key: string
                labels: { [x: string]: string }
                created: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              ssh_key: {
                id: bigint
                name: string
                fingerprint: string
                public_key: string
                labels: { [x: string]: string }
                created: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes': {
      $get:
        | {
            input: {
              query: {
                status?: ('available' | 'creating')[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              volumes: {
                id: bigint
                created: string
                name: string
                server: bigint | null
                assignee: { id: bigint; type: string } | null
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                size: number
                linux_device: string
                protection: { delete: boolean }
                labels: { [x: string]: string }
                status: 'available' | 'creating'
                format: string | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: ('available' | 'creating')[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                status?: ('available' | 'creating')[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                name?: string | undefined
                label_selector?: string | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                size: number
                name: string
                labels?: { [x: string]: string } | undefined
                automount?: boolean | undefined
                format?: string | undefined
                location?: string | undefined
                server?: bigint | undefined
                assignee?: { id: bigint; type: string } | undefined
              }
            }
            output: {
              volume: {
                id: bigint
                created: string
                name: string
                server: bigint | null
                assignee: { id: bigint; type: string } | null
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                size: number
                linux_device: string
                protection: { delete: boolean }
                labels: { [x: string]: string }
                status: 'available' | 'creating'
                format: string | null
              }
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
              next_actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                size: number
                name: string
                labels?: { [x: string]: string } | undefined
                automount?: boolean | undefined
                format?: string | undefined
                location?: string | undefined
                server?: bigint | undefined
                assignee?: { id: bigint; type: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                size: number
                name: string
                labels?: { [x: string]: string } | undefined
                automount?: boolean | undefined
                format?: string | undefined
                location?: string | undefined
                server?: bigint | undefined
                assignee?: { id: bigint; type: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              volume: {
                id: bigint
                created: string
                name: string
                server: bigint | null
                assignee: { id: bigint; type: string } | null
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                size: number
                linux_device: string
                protection: { delete: boolean }
                labels: { [x: string]: string }
                status: 'available' | 'creating'
                format: string | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              volume: {
                id: bigint
                created: string
                name: string
                server: bigint | null
                assignee: { id: bigint; type: string } | null
                location: {
                  id: bigint
                  name: string
                  description: string
                  country: string
                  city: string
                  latitude: number
                  longitude: number
                  network_zone: string
                }
                size: number
                linux_device: string
                protection: { delete: boolean }
                labels: { [x: string]: string }
                status: 'available' | 'creating'
                format: string | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: { name?: string | undefined; labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes/:id/actions': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes/:id/actions/attach': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                server?: bigint | undefined
                assignee: { id: bigint; type: string }
                automount?: boolean | undefined
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                server?: bigint | undefined
                assignee: { id: bigint; type: string }
                automount?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                server?: bigint | undefined
                assignee: { id: bigint; type: string }
                automount?: boolean | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes/:id/actions/change_protection': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes/:id/actions/detach': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes/:id/actions/resize': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { size: number } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: { size: number } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { size: number } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes/:id/actions/:action_id': {
      $get:
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                mode?: 'primary' | 'secondary' | undefined
                label_selector?: string | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              zones: (
                | {
                    id: bigint
                    name: string
                    created: string
                    primary_nameservers?:
                      | {
                          address: string
                          port?: number | undefined
                          tsig_key?: string | undefined
                          tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                        }[]
                      | undefined
                    labels: { [x: string]: string }
                    protection: { delete: boolean }
                    ttl: number
                    status: 'ok' | 'updating' | 'error'
                    record_count: number
                    authoritative_nameservers: {
                      assigned: string[]
                      delegated: string[]
                      delegation_last_check: string | null
                      delegation_status?:
                        | 'valid'
                        | 'partially-valid'
                        | 'invalid'
                        | 'lame'
                        | 'unregistered'
                        | 'unknown'
                        | undefined
                    }
                    registrar: 'hetzner' | 'other' | 'unknown'
                    mode: 'primary'
                  }
                | {
                    id: bigint
                    name: string
                    created: string
                    primary_nameservers?:
                      | {
                          address: string
                          port?: number | undefined
                          tsig_key?: string | undefined
                          tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                        }[]
                      | undefined
                    labels: { [x: string]: string }
                    protection: { delete: boolean }
                    ttl: number
                    status: 'ok' | 'updating' | 'error'
                    record_count: number
                    authoritative_nameservers: {
                      assigned: string[]
                      delegated: string[]
                      delegation_last_check: string | null
                      delegation_status?:
                        | 'valid'
                        | 'partially-valid'
                        | 'invalid'
                        | 'lame'
                        | 'unregistered'
                        | 'unknown'
                        | undefined
                    }
                    registrar: 'hetzner' | 'other' | 'unknown'
                    mode: 'secondary'
                  }
              )[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                mode?: 'primary' | 'secondary' | undefined
                label_selector?: string | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                mode?: 'primary' | 'secondary' | undefined
                label_selector?: string | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                name: string
                mode: 'primary' | 'secondary'
                ttl?: number | undefined
                labels?: { [x: string]: string } | undefined
                primary_nameservers?:
                  | {
                      address: string
                      port?: number | undefined
                      tsig_key?: string | undefined
                      tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                    }[]
                  | undefined
                rrsets?:
                  | {
                      name: string
                      type:
                        | 'A'
                        | 'AAAA'
                        | 'CAA'
                        | 'CNAME'
                        | 'DS'
                        | 'HINFO'
                        | 'HTTPS'
                        | 'MX'
                        | 'NS'
                        | 'PTR'
                        | 'RP'
                        | 'SOA'
                        | 'SRV'
                        | 'SVCB'
                        | 'TLSA'
                        | 'TXT'
                      ttl?: (number | null) | undefined
                      records: { value: string; comment?: string | undefined }[]
                      labels?: { [x: string]: string } | undefined
                    }[]
                  | undefined
                zonefile?: string | undefined
              }
            }
            output: {
              zone:
                | {
                    id: bigint
                    name: string
                    created: string
                    primary_nameservers?:
                      | {
                          address: string
                          port?: number | undefined
                          tsig_key?: string | undefined
                          tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                        }[]
                      | undefined
                    labels: { [x: string]: string }
                    protection: { delete: boolean }
                    ttl: number
                    status: 'ok' | 'updating' | 'error'
                    record_count: number
                    authoritative_nameservers: {
                      assigned: string[]
                      delegated: string[]
                      delegation_last_check: string | null
                      delegation_status?:
                        | 'valid'
                        | 'partially-valid'
                        | 'invalid'
                        | 'lame'
                        | 'unregistered'
                        | 'unknown'
                        | undefined
                    }
                    registrar: 'hetzner' | 'other' | 'unknown'
                    mode: 'primary'
                  }
                | {
                    id: bigint
                    name: string
                    created: string
                    primary_nameservers?:
                      | {
                          address: string
                          port?: number | undefined
                          tsig_key?: string | undefined
                          tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                        }[]
                      | undefined
                    labels: { [x: string]: string }
                    protection: { delete: boolean }
                    ttl: number
                    status: 'ok' | 'updating' | 'error'
                    record_count: number
                    authoritative_nameservers: {
                      assigned: string[]
                      delegated: string[]
                      delegation_last_check: string | null
                      delegation_status?:
                        | 'valid'
                        | 'partially-valid'
                        | 'invalid'
                        | 'lame'
                        | 'unregistered'
                        | 'unknown'
                        | undefined
                    }
                    registrar: 'hetzner' | 'other' | 'unknown'
                    mode: 'secondary'
                  }
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                mode: 'primary' | 'secondary'
                ttl?: number | undefined
                labels?: { [x: string]: string } | undefined
                primary_nameservers?:
                  | {
                      address: string
                      port?: number | undefined
                      tsig_key?: string | undefined
                      tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                    }[]
                  | undefined
                rrsets?:
                  | {
                      name: string
                      type:
                        | 'A'
                        | 'AAAA'
                        | 'CAA'
                        | 'CNAME'
                        | 'DS'
                        | 'HINFO'
                        | 'HTTPS'
                        | 'MX'
                        | 'NS'
                        | 'PTR'
                        | 'RP'
                        | 'SOA'
                        | 'SRV'
                        | 'SVCB'
                        | 'TLSA'
                        | 'TXT'
                      ttl?: (number | null) | undefined
                      records: { value: string; comment?: string | undefined }[]
                      labels?: { [x: string]: string } | undefined
                    }[]
                  | undefined
                zonefile?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                mode: 'primary' | 'secondary'
                ttl?: number | undefined
                labels?: { [x: string]: string } | undefined
                primary_nameservers?:
                  | {
                      address: string
                      port?: number | undefined
                      tsig_key?: string | undefined
                      tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                    }[]
                  | undefined
                rrsets?:
                  | {
                      name: string
                      type:
                        | 'A'
                        | 'AAAA'
                        | 'CAA'
                        | 'CNAME'
                        | 'DS'
                        | 'HINFO'
                        | 'HTTPS'
                        | 'MX'
                        | 'NS'
                        | 'PTR'
                        | 'RP'
                        | 'SOA'
                        | 'SRV'
                        | 'SVCB'
                        | 'TLSA'
                        | 'TXT'
                      ttl?: (number | null) | undefined
                      records: { value: string; comment?: string | undefined }[]
                      labels?: { [x: string]: string } | undefined
                    }[]
                  | undefined
                zonefile?: string | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name': {
      $get:
        | {
            input: { param: { id_or_name: string } }
            output: {
              zone:
                | {
                    id: bigint
                    name: string
                    created: string
                    primary_nameservers?:
                      | {
                          address: string
                          port?: number | undefined
                          tsig_key?: string | undefined
                          tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                        }[]
                      | undefined
                    labels: { [x: string]: string }
                    protection: { delete: boolean }
                    ttl: number
                    status: 'ok' | 'updating' | 'error'
                    record_count: number
                    authoritative_nameservers: {
                      assigned: string[]
                      delegated: string[]
                      delegation_last_check: string | null
                      delegation_status?:
                        | 'valid'
                        | 'partially-valid'
                        | 'invalid'
                        | 'lame'
                        | 'unregistered'
                        | 'unknown'
                        | undefined
                    }
                    registrar: 'hetzner' | 'other' | 'unknown'
                    mode: 'primary'
                  }
                | {
                    id: bigint
                    name: string
                    created: string
                    primary_nameservers?:
                      | {
                          address: string
                          port?: number | undefined
                          tsig_key?: string | undefined
                          tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                        }[]
                      | undefined
                    labels: { [x: string]: string }
                    protection: { delete: boolean }
                    ttl: number
                    status: 'ok' | 'updating' | 'error'
                    record_count: number
                    authoritative_nameservers: {
                      assigned: string[]
                      delegated: string[]
                      delegation_last_check: string | null
                      delegation_status?:
                        | 'valid'
                        | 'partially-valid'
                        | 'invalid'
                        | 'lame'
                        | 'unregistered'
                        | 'unknown'
                        | undefined
                    }
                    registrar: 'hetzner' | 'other' | 'unknown'
                    mode: 'secondary'
                  }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_name: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id_or_name: string } } & {
              json: { labels?: { [x: string]: string } | undefined }
            }
            output: {
              zone:
                | {
                    id: bigint
                    name: string
                    created: string
                    primary_nameservers?:
                      | {
                          address: string
                          port?: number | undefined
                          tsig_key?: string | undefined
                          tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                        }[]
                      | undefined
                    labels: { [x: string]: string }
                    protection: { delete: boolean }
                    ttl: number
                    status: 'ok' | 'updating' | 'error'
                    record_count: number
                    authoritative_nameservers: {
                      assigned: string[]
                      delegated: string[]
                      delegation_last_check: string | null
                      delegation_status?:
                        | 'valid'
                        | 'partially-valid'
                        | 'invalid'
                        | 'lame'
                        | 'unregistered'
                        | 'unknown'
                        | undefined
                    }
                    registrar: 'hetzner' | 'other' | 'unknown'
                    mode: 'primary'
                  }
                | {
                    id: bigint
                    name: string
                    created: string
                    primary_nameservers?:
                      | {
                          address: string
                          port?: number | undefined
                          tsig_key?: string | undefined
                          tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                        }[]
                      | undefined
                    labels: { [x: string]: string }
                    protection: { delete: boolean }
                    ttl: number
                    status: 'ok' | 'updating' | 'error'
                    record_count: number
                    authoritative_nameservers: {
                      assigned: string[]
                      delegated: string[]
                      delegation_last_check: string | null
                      delegation_status?:
                        | 'valid'
                        | 'partially-valid'
                        | 'invalid'
                        | 'lame'
                        | 'unregistered'
                        | 'unknown'
                        | undefined
                    }
                    registrar: 'hetzner' | 'other' | 'unknown'
                    mode: 'secondary'
                  }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_name: string } } & {
              json: { labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } } & {
              json: { labels?: { [x: string]: string } | undefined }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id_or_name: string } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id_or_name: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/zonefile': {
      $get:
        | {
            input: { param: { id_or_name: string } }
            output: { zonefile: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_name: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/actions': {
      $get:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/actions/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/actions': {
      $get:
        | {
            input: { param: { id_or_name: string } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              actions: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_name: string } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } } & {
              query: {
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'command'
                      | 'command:asc'
                      | 'command:desc'
                      | 'status'
                      | 'status:asc'
                      | 'status:desc'
                      | 'started'
                      | 'started:asc'
                      | 'started:desc'
                      | 'finished'
                      | 'finished:asc'
                      | 'finished:desc'
                    )[]
                  | undefined
                status?: ('running' | 'success' | 'error')[] | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/actions/:action_id': {
      $get:
        | {
            input: { param: { id_or_name: string; action_id: bigint } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_name: string; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string; action_id: bigint } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/actions/change_primary_nameservers': {
      $post:
        | {
            input: { param: { id_or_name: string } } & {
              json: {
                primary_nameservers: {
                  address: string
                  port?: number | undefined
                  tsig_key?: string | undefined
                  tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                }[]
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id_or_name: string } } & {
              json: {
                primary_nameservers: {
                  address: string
                  port?: number | undefined
                  tsig_key?: string | undefined
                  tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } } & {
              json: {
                primary_nameservers: {
                  address: string
                  port?: number | undefined
                  tsig_key?: string | undefined
                  tsig_algorithm?: 'hmac-md5' | 'hmac-sha1' | 'hmac-sha256' | undefined
                }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/actions/change_protection': {
      $post:
        | {
            input: { param: { id_or_name: string } } & { json: { delete?: boolean | undefined } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id_or_name: string } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } } & { json: { delete?: boolean | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/actions/change_ttl': {
      $post:
        | {
            input: { param: { id_or_name: string } } & { json: { ttl: number } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id_or_name: string } } & { json: { ttl: number } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } } & { json: { ttl: number } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/actions/import_zonefile': {
      $post:
        | {
            input: { param: { id_or_name: string } } & { json: { zonefile: string } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id_or_name: string } } & { json: { zonefile: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } } & { json: { zonefile: string } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/rrsets': {
      $get:
        | {
            input: { param: { id_or_name: string } } & {
              query: {
                name?: string | undefined
                type?:
                  | (
                      | 'A'
                      | 'AAAA'
                      | 'CAA'
                      | 'CNAME'
                      | 'DS'
                      | 'HINFO'
                      | 'HTTPS'
                      | 'MX'
                      | 'NS'
                      | 'PTR'
                      | 'RP'
                      | 'SOA'
                      | 'SRV'
                      | 'SVCB'
                      | 'TLSA'
                      | 'TXT'
                    )[]
                  | undefined
                label_selector?: string | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              rrsets: {
                id: string
                name: string
                type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
                ttl: number | null
                labels: { [x: string]: string }
                protection: { change: boolean }
                records: { value: string; comment?: string | undefined }[]
                zone: bigint
              }[]
              meta: {
                pagination: {
                  page: bigint
                  per_page: bigint
                  previous_page: bigint | null
                  next_page: bigint | null
                  last_page: bigint | null
                  total_entries: bigint | null
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_name: string } } & {
              query: {
                name?: string | undefined
                type?:
                  | (
                      | 'A'
                      | 'AAAA'
                      | 'CAA'
                      | 'CNAME'
                      | 'DS'
                      | 'HINFO'
                      | 'HTTPS'
                      | 'MX'
                      | 'NS'
                      | 'PTR'
                      | 'RP'
                      | 'SOA'
                      | 'SRV'
                      | 'SVCB'
                      | 'TLSA'
                      | 'TXT'
                    )[]
                  | undefined
                label_selector?: string | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } } & {
              query: {
                name?: string | undefined
                type?:
                  | (
                      | 'A'
                      | 'AAAA'
                      | 'CAA'
                      | 'CNAME'
                      | 'DS'
                      | 'HINFO'
                      | 'HTTPS'
                      | 'MX'
                      | 'NS'
                      | 'PTR'
                      | 'RP'
                      | 'SOA'
                      | 'SRV'
                      | 'SVCB'
                      | 'TLSA'
                      | 'TXT'
                    )[]
                  | undefined
                label_selector?: string | undefined
                sort?:
                  | (
                      | 'id'
                      | 'id:asc'
                      | 'id:desc'
                      | 'name'
                      | 'name:asc'
                      | 'name:desc'
                      | 'created'
                      | 'created:asc'
                      | 'created:desc'
                    )[]
                  | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { id_or_name: string } } & {
              json: {
                name: string
                type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
                ttl?: (number | null) | undefined
                records: { value: string; comment?: string | undefined }[]
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              rrset: {
                id: string
                name: string
                type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
                ttl: number | null
                labels: { [x: string]: string }
                protection: { change: boolean }
                records: { value: string; comment?: string | undefined }[]
                zone: bigint
              }
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id_or_name: string } } & {
              json: {
                name: string
                type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
                ttl?: (number | null) | undefined
                records: { value: string; comment?: string | undefined }[]
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_name: string } } & {
              json: {
                name: string
                type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
                ttl?: (number | null) | undefined
                records: { value: string; comment?: string | undefined }[]
                labels?: { [x: string]: string } | undefined
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type': {
      $get:
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            }
            output: {
              rrset: {
                id: string
                name: string
                type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
                ttl: number | null
                labels: { [x: string]: string }
                protection: { change: boolean }
                records: { value: string; comment?: string | undefined }[]
                zone: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { labels?: { [x: string]: string } | undefined } }
            output: {
              rrset: {
                id: string
                name: string
                type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
                ttl: number | null
                labels: { [x: string]: string }
                protection: { change: boolean }
                records: { value: string; comment?: string | undefined }[]
                zone: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { labels?: { [x: string]: string } | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { labels?: { [x: string]: string } | undefined } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/change_protection': {
      $post:
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { change: boolean } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { change: boolean } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { change: boolean } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/change_ttl': {
      $post:
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { ttl: number | null } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { ttl: number | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { ttl: number | null } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/set_records': {
      $post:
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { records: { value: string; comment?: string | undefined }[] } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { records: { value: string; comment?: string | undefined }[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { records: { value: string; comment?: string | undefined }[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/add_records': {
      $post:
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & {
              json: {
                ttl?: (number | null) | undefined
                records: { value: string; comment?: string | undefined }[]
              }
            }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & {
              json: {
                ttl?: (number | null) | undefined
                records: { value: string; comment?: string | undefined }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & {
              json: {
                ttl?: (number | null) | undefined
                records: { value: string; comment?: string | undefined }[]
              }
            }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/remove_records': {
      $post:
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { records: { value: string; comment?: string | undefined }[] } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { records: { value: string; comment?: string | undefined }[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { records: { value: string; comment?: string | undefined }[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/update_records': {
      $post:
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { records: { value: string; comment: string }[] } }
            output: {
              action: {
                id: bigint
                command: string
                status: 'running' | 'success' | 'error'
                started: string
                finished: string | null
                progress: number
                resources: { id: bigint; type: string }[]
                error: { code: string; message: string } | null
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { records: { value: string; comment: string }[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id_or_name: string
                rr_name: string
                rr_type:
                  | 'A'
                  | 'AAAA'
                  | 'CAA'
                  | 'CNAME'
                  | 'DS'
                  | 'HINFO'
                  | 'HTTPS'
                  | 'MX'
                  | 'NS'
                  | 'PTR'
                  | 'RP'
                  | 'SOA'
                  | 'SRV'
                  | 'SVCB'
                  | 'TLSA'
                  | 'TXT'
              }
            } & { json: { records: { value: string; comment: string }[] } }
            output: {
              error: {
                code: string
                message: string
                details?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
