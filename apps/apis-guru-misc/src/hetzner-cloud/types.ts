declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/actions': {
      $get: {
        input: {
          query: {
            id?: number | undefined
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'command'
              | 'command:asc'
              | 'command:desc'
              | 'status'
              | 'status:asc'
              | 'status:desc'
              | 'progress'
              | 'progress:asc'
              | 'progress:desc'
              | 'started'
              | 'started:asc'
              | 'started:desc'
              | 'finished'
              | 'finished:asc'
              | 'finished:desc'
              | undefined
            status?: 'running' | 'success' | 'error' | undefined
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions/:id': {
      $get: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificates': {
      $get: {
        input: {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'name'
              | 'name:asc'
              | 'name:desc'
              | 'created'
              | 'created:asc'
              | 'created:desc'
              | undefined
            name?: string | undefined
            label_selector?: string | undefined
            type?: 'uploaded' | 'managed' | undefined
          }
        }
        output: {
          certificates: {
            certificate: string | null
            created: string
            domain_names: string[]
            fingerprint: string | null
            id: number
            labels: { [x: string]: string }
            name: string
            not_valid_after: string | null
            not_valid_before: string | null
            status?:
              | ({
                  error?:
                    | ({ code?: string | undefined; message?: string | undefined } | null)
                    | undefined
                  issuance?: 'pending' | 'completed' | 'failed' | undefined
                  renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable' | undefined
                } | null)
              | undefined
            type?: 'uploaded' | 'managed' | undefined
            used_by: { id: number; type: string }[]
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            certificate?: string | undefined
            domain_names?: string[] | undefined
            labels?: { [x: string]: unknown } | undefined
            name: string
            private_key?: string | undefined
            type?: 'uploaded' | 'managed' | undefined
          }
        }
        output: {
          action?:
            | ({
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              } | null)
            | undefined
          certificate: {
            certificate: string | null
            created: string
            domain_names: string[]
            fingerprint: string | null
            id: number
            labels: { [x: string]: string }
            name: string
            not_valid_after: string | null
            not_valid_before: string | null
            status?:
              | ({
                  error?:
                    | ({ code?: string | undefined; message?: string | undefined } | null)
                    | undefined
                  issuance?: 'pending' | 'completed' | 'failed' | undefined
                  renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable' | undefined
                } | null)
              | undefined
            type?: 'uploaded' | 'managed' | undefined
            used_by: { id: number; type: string }[]
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/certificates/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          certificate: {
            certificate: string | null
            created: string
            domain_names: string[]
            fingerprint: string | null
            id: number
            labels: { [x: string]: string }
            name: string
            not_valid_after: string | null
            not_valid_before: string | null
            status?:
              | ({
                  error?:
                    | ({ code?: string | undefined; message?: string | undefined } | null)
                    | undefined
                  issuance?: 'pending' | 'completed' | 'failed' | undefined
                  renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable' | undefined
                } | null)
              | undefined
            type?: 'uploaded' | 'managed' | undefined
            used_by: { id: number; type: string }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: { labels?: { [x: string]: unknown } | undefined; name?: string | undefined }
        }
        output: {
          certificate: {
            certificate: string | null
            created: string
            domain_names: string[]
            fingerprint: string | null
            id: number
            labels: { [x: string]: string }
            name: string
            not_valid_after: string | null
            not_valid_before: string | null
            status?:
              | ({
                  error?:
                    | ({ code?: string | undefined; message?: string | undefined } | null)
                    | undefined
                  issuance?: 'pending' | 'completed' | 'failed' | undefined
                  renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable' | undefined
                } | null)
              | undefined
            type?: 'uploaded' | 'managed' | undefined
            used_by: { id: number; type: string }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificates/:id/actions': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'command'
              | 'command:asc'
              | 'command:desc'
              | 'status'
              | 'status:asc'
              | 'status:desc'
              | 'progress'
              | 'progress:asc'
              | 'progress:desc'
              | 'started'
              | 'started:asc'
              | 'started:desc'
              | 'finished'
              | 'finished:asc'
              | 'finished:desc'
              | undefined
            status?: 'running' | 'success' | 'error' | undefined
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificates/:id/actions/retry': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/certificates/:id/actions/:action_id': {
      $get: {
        input: { param: { id: number; action_id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datacenters': {
      $get: {
        input: { query: { name?: string | undefined } }
        output: {
          datacenters: {
            description: string
            id: number
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            server_types: {
              available: number[]
              available_for_migration: number[]
              supported: number[]
            }
          }[]
          recommendation: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datacenters/:id': {
      $get: {
        input: { param: { id: number } }
        output: {
          datacenter: {
            description: string
            id: number
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            server_types: {
              available: number[]
              available_for_migration: number[]
              supported: number[]
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/firewalls': {
      $get: {
        input: {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'name'
              | 'name:asc'
              | 'name:desc'
              | 'created'
              | 'created:asc'
              | 'created:desc'
              | undefined
            name?: string | undefined
            label_selector?: string | undefined
          }
        }
        output: {
          firewalls: {
            applied_to: {
              applied_to_resources?:
                | { server?: { id: number } | undefined; type?: 'server' | undefined }[]
                | undefined
              label_selector?: { selector: string } | undefined
              server?: { id: number } | undefined
              type: 'server' | 'label_selector'
            }[]
            created: string
            id: number
            labels?: { [x: string]: string } | undefined
            name: string
            rules: {
              description?: (string | null) | undefined
              destination_ips?: string[] | undefined
              direction: 'in' | 'out'
              port?: string | undefined
              protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
              source_ips?: string[] | undefined
            }[]
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            apply_to?:
              | {
                  label_selector?: { selector: string } | undefined
                  server?: { id: number } | undefined
                  type: 'server' | 'label_selector'
                }[]
              | undefined
            labels?: { [x: string]: unknown } | undefined
            name: string
            rules?:
              | {
                  description?: (string | null) | undefined
                  destination_ips?: string[] | undefined
                  direction: 'in' | 'out'
                  port?: string | undefined
                  protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                  source_ips?: string[] | undefined
                }[]
              | undefined
          }
        }
        output: {
          actions?:
            | {
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              }[]
            | undefined
          firewall?:
            | {
                applied_to: {
                  applied_to_resources?:
                    | { server?: { id: number } | undefined; type?: 'server' | undefined }[]
                    | undefined
                  label_selector?: { selector: string } | undefined
                  server?: { id: number } | undefined
                  type: 'server' | 'label_selector'
                }[]
                created: string
                id: number
                labels?: { [x: string]: string } | undefined
                name: string
                rules: {
                  description?: (string | null) | undefined
                  destination_ips?: string[] | undefined
                  direction: 'in' | 'out'
                  port?: string | undefined
                  protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
                  source_ips?: string[] | undefined
                }[]
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/firewalls/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          firewall: {
            applied_to: {
              applied_to_resources?:
                | { server?: { id: number } | undefined; type?: 'server' | undefined }[]
                | undefined
              label_selector?: { selector: string } | undefined
              server?: { id: number } | undefined
              type: 'server' | 'label_selector'
            }[]
            created: string
            id: number
            labels?: { [x: string]: string } | undefined
            name: string
            rules: {
              description?: (string | null) | undefined
              destination_ips?: string[] | undefined
              direction: 'in' | 'out'
              port?: string | undefined
              protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
              source_ips?: string[] | undefined
            }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: { labels?: { [x: string]: unknown } | undefined; name?: string | undefined }
        }
        output: {
          firewall: {
            applied_to: {
              applied_to_resources?:
                | { server?: { id: number } | undefined; type?: 'server' | undefined }[]
                | undefined
              label_selector?: { selector: string } | undefined
              server?: { id: number } | undefined
              type: 'server' | 'label_selector'
            }[]
            created: string
            id: number
            labels?: { [x: string]: string } | undefined
            name: string
            rules: {
              description?: (string | null) | undefined
              destination_ips?: string[] | undefined
              direction: 'in' | 'out'
              port?: string | undefined
              protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
              source_ips?: string[] | undefined
            }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/firewalls/:id/actions': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'command'
              | 'command:asc'
              | 'command:desc'
              | 'status'
              | 'status:asc'
              | 'status:desc'
              | 'progress'
              | 'progress:asc'
              | 'progress:desc'
              | 'started'
              | 'started:asc'
              | 'started:desc'
              | 'finished'
              | 'finished:asc'
              | 'finished:desc'
              | undefined
            status?: 'running' | 'success' | 'error' | undefined
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/firewalls/:id/actions/apply_to_resources': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            apply_to: {
              label_selector?: { selector: string } | undefined
              server?: { id: number } | undefined
              type?: 'server' | 'label_selector' | undefined
            }[]
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/firewalls/:id/actions/remove_from_resources': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            remove_from: {
              label_selector?: { selector: string } | undefined
              server?: { id: number } | undefined
              type?: 'server' | 'label_selector' | undefined
            }[]
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/firewalls/:id/actions/set_rules': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            rules: {
              description?: (string | null) | undefined
              destination_ips?: string[] | undefined
              direction: 'in' | 'out'
              port?: string | undefined
              protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre'
              source_ips?: string[] | undefined
            }[]
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/firewalls/:id/actions/:action_id': {
      $get: {
        input: { param: { id: number; action_id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/floating_ips': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            label_selector?: string | undefined
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'created'
              | 'created:asc'
              | 'created:desc'
              | undefined
          }
        }
        output: {
          floating_ips: {
            blocked: boolean
            created: string
            description: string | null
            dns_ptr: { dns_ptr: string; ip: string }[]
            home_location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            id: number
            ip: string
            labels: { [x: string]: string }
            name: string
            protection: { delete: boolean }
            server: number | null
            type: 'ipv4' | 'ipv6'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            description?: string | undefined
            home_location?: string | undefined
            labels?: { [x: string]: unknown } | undefined
            name?: string | undefined
            server?: number | undefined
            type: 'ipv4' | 'ipv6'
          }
        }
        output: {
          action?:
            | {
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              }
            | undefined
          floating_ip: {
            blocked: boolean
            created: string
            description: string | null
            dns_ptr: { dns_ptr: string; ip: string }[]
            home_location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            id: number
            ip: string
            labels: { [x: string]: string }
            name: string
            protection: { delete: boolean }
            server: number | null
            type: 'ipv4' | 'ipv6'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/floating_ips/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          floating_ip: {
            blocked: boolean
            created: string
            description: string | null
            dns_ptr: { dns_ptr: string; ip: string }[]
            home_location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            id: number
            ip: string
            labels: { [x: string]: string }
            name: string
            protection: { delete: boolean }
            server: number | null
            type: 'ipv4' | 'ipv6'
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: {
            description?: string | undefined
            labels?: { [x: string]: unknown } | undefined
            name?: string | undefined
          }
        }
        output: {
          floating_ip: {
            blocked: boolean
            created: string
            description: string | null
            dns_ptr: { dns_ptr: string; ip: string }[]
            home_location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            id: number
            ip: string
            labels: { [x: string]: string }
            name: string
            protection: { delete: boolean }
            server: number | null
            type: 'ipv4' | 'ipv6'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/floating_ips/:id/actions': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'command'
              | 'command:asc'
              | 'command:desc'
              | 'status'
              | 'status:asc'
              | 'status:desc'
              | 'progress'
              | 'progress:asc'
              | 'progress:desc'
              | 'started'
              | 'started:asc'
              | 'started:desc'
              | 'finished'
              | 'finished:asc'
              | 'finished:desc'
              | undefined
            status?: 'running' | 'success' | 'error' | undefined
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/floating_ips/:id/actions/assign': {
      $post: {
        input: { param: { id: number } } & { json: { server: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/floating_ips/:id/actions/change_dns_ptr': {
      $post: {
        input: { param: { id: number } } & { json: { dns_ptr: string | null; ip: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/floating_ips/:id/actions/change_protection': {
      $post: {
        input: { param: { id: number } } & { json: { delete?: boolean | undefined } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/floating_ips/:id/actions/unassign': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/floating_ips/:id/actions/:action_id': {
      $get: {
        input: { param: { id: number; action_id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/images': {
      $get: {
        input: {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'name'
              | 'name:asc'
              | 'name:desc'
              | 'created'
              | 'created:asc'
              | 'created:desc'
              | undefined
            type?: 'system' | 'snapshot' | 'backup' | 'app' | undefined
            status?: 'available' | 'creating' | undefined
            bound_to?: string | undefined
            include_deprecated?: boolean | undefined
            name?: string | undefined
            label_selector?: string | undefined
          }
        }
        output: {
          images: {
            bound_to: number | null
            created: string
            created_from: { id: number; name: string } | null
            deleted: string | null
            deprecated: string | null
            description: string
            disk_size: number
            id: number
            image_size: number | null
            labels: { [x: string]: string }
            name: string | null
            os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'unknown'
            os_version: string | null
            protection: { delete: boolean }
            rapid_deploy?: boolean | undefined
            status: 'available' | 'creating' | 'unavailable'
            type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/images/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          image?:
            | {
                bound_to: number | null
                created: string
                created_from: { id: number; name: string } | null
                deleted: string | null
                deprecated: string | null
                description: string
                disk_size: number
                id: number
                image_size: number | null
                labels: { [x: string]: string }
                name: string | null
                os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'unknown'
                os_version: string | null
                protection: { delete: boolean }
                rapid_deploy?: boolean | undefined
                status: 'available' | 'creating' | 'unavailable'
                type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary'
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: {
            description?: string | undefined
            labels?: { [x: string]: unknown } | undefined
            type?: 'snapshot' | undefined
          }
        }
        output: {
          image?:
            | {
                bound_to: number | null
                created: string
                created_from: { id: number; name: string } | null
                deleted: string | null
                deprecated: string | null
                description: string
                disk_size: number
                id: number
                image_size: number | null
                labels: { [x: string]: string }
                name: string | null
                os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'unknown'
                os_version: string | null
                protection: { delete: boolean }
                rapid_deploy?: boolean | undefined
                status: 'available' | 'creating' | 'unavailable'
                type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary'
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/images/:id/actions': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'command'
              | 'command:asc'
              | 'command:desc'
              | 'status'
              | 'status:asc'
              | 'status:desc'
              | 'progress'
              | 'progress:asc'
              | 'progress:desc'
              | 'started'
              | 'started:asc'
              | 'started:desc'
              | 'finished'
              | 'finished:asc'
              | 'finished:desc'
              | undefined
            status?: 'running' | 'success' | 'error' | undefined
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/images/:id/actions/change_protection': {
      $post: {
        input: { param: { id: number } } & { json: { delete?: boolean | undefined } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/images/:id/actions/:action_id': {
      $get: {
        input: { param: { id: number; action_id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/isos': {
      $get: {
        input: { query: { name?: string | undefined } }
        output: {
          isos: {
            deprecated: string | null
            description: string
            id: number
            name: string | null
            type: 'public' | 'private'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/isos/:id': {
      $get: {
        input: { param: { id: number } }
        output: {
          iso: {
            deprecated: string | null
            description: string
            id: number
            name: string | null
            type: 'public' | 'private'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load_balancer_types': {
      $get: {
        input: { query: { name?: string | undefined } }
        output: {
          load_balancer_types: {
            deprecated: string | null
            description: string
            id: number
            max_assigned_certificates: number
            max_connections: number
            max_services: number
            max_targets: number
            name: string
            prices: {
              location: string
              price_hourly: { gross: string; net: string }
              price_monthly: { gross: string; net: string }
            }[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load_balancer_types/:id': {
      $get: {
        input: { param: { id: number } }
        output: {
          load_balancer_type?:
            | {
                deprecated: string | null
                description: string
                id: number
                max_assigned_certificates: number
                max_connections: number
                max_services: number
                max_targets: number
                name: string
                prices: {
                  location: string
                  price_hourly: { gross: string; net: string }
                  price_monthly: { gross: string; net: string }
                }[]
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load_balancers': {
      $get: {
        input: {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'name'
              | 'name:asc'
              | 'name:desc'
              | 'created'
              | 'created:asc'
              | 'created:desc'
              | undefined
            name?: string | undefined
            label_selector?: string | undefined
          }
        }
        output: {
          load_balancers: {
            algorithm: { type: 'round_robin' | 'least_connections' }
            created: string
            id: number
            included_traffic: number
            ingoing_traffic: number | null
            labels: { [x: string]: string }
            load_balancer_type: {
              deprecated: string | null
              description: string
              id: number
              max_assigned_certificates: number
              max_connections: number
              max_services: number
              max_targets: number
              name: string
              prices: {
                location: string
                price_hourly: { gross: string; net: string }
                price_monthly: { gross: string; net: string }
              }[]
            }
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            outgoing_traffic: number | null
            private_net: { ip?: string | undefined; network?: number | undefined }[]
            protection: { delete: boolean }
            public_net: {
              enabled: boolean
              ipv4: { dns_ptr?: (string | null) | undefined; ip?: (string | null) | undefined }
              ipv6: { dns_ptr?: (string | null) | undefined; ip?: (string | null) | undefined }
            }
            services: {
              destination_port: number
              health_check: {
                http?:
                  | {
                      domain: string | null
                      path: string
                      response?: string | undefined
                      status_codes?: string[] | undefined
                      tls?: boolean | undefined
                    }
                  | undefined
                interval: number
                port: number
                protocol: 'tcp' | 'http'
                retries: number
                timeout: number
              }
              http?:
                | {
                    certificates?: number[] | undefined
                    cookie_lifetime?: number | undefined
                    cookie_name?: string | undefined
                    redirect_http?: boolean | undefined
                    sticky_sessions?: boolean | undefined
                  }
                | undefined
              listen_port: number
              protocol: 'tcp' | 'http' | 'https'
              proxyprotocol: boolean
            }[]
            targets: {
              health_status?:
                | {
                    listen_port?: number | undefined
                    status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                  }[]
                | undefined
              ip?: { ip: string } | undefined
              label_selector?: { selector: string } | undefined
              server?: { id: number } | undefined
              targets?:
                | {
                    health_status?:
                      | {
                          listen_port?: number | undefined
                          status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                        }[]
                      | undefined
                    server?: { id: number } | undefined
                    type?: string | undefined
                    use_private_ip?: boolean | undefined
                  }[]
                | undefined
              type: 'server' | 'label_selector' | 'ip'
              use_private_ip?: boolean | undefined
            }[]
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            algorithm: { type: 'round_robin' | 'least_connections' }
            labels?: { labelkey?: string | undefined } | undefined
            load_balancer_type: string
            location?: string | undefined
            name: string
            network?: number | undefined
            network_zone?: string | undefined
            public_interface?: boolean | undefined
            services?:
              | {
                  destination_port: number
                  health_check: {
                    http?:
                      | {
                          domain: string | null
                          path: string
                          response?: string | undefined
                          status_codes?: string[] | undefined
                          tls?: boolean | undefined
                        }
                      | undefined
                    interval: number
                    port: number
                    protocol: 'tcp' | 'http'
                    retries: number
                    timeout: number
                  }
                  http?:
                    | {
                        certificates?: number[] | undefined
                        cookie_lifetime?: number | undefined
                        cookie_name?: string | undefined
                        redirect_http?: boolean | undefined
                        sticky_sessions?: boolean | undefined
                      }
                    | undefined
                  listen_port: number
                  protocol: 'tcp' | 'http' | 'https'
                  proxyprotocol: boolean
                }[]
              | undefined
            targets?:
              | {
                  health_status?:
                    | {
                        listen_port?: number | undefined
                        status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                      }[]
                    | undefined
                  ip?: { ip: string } | undefined
                  label_selector?: { selector: string } | undefined
                  server?: { id: number } | undefined
                  targets?:
                    | {
                        health_status?:
                          | {
                              listen_port?: number | undefined
                              status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                            }[]
                          | undefined
                        server?: { id: number } | undefined
                        type?: string | undefined
                        use_private_ip?: boolean | undefined
                      }[]
                    | undefined
                  type: 'server' | 'label_selector' | 'ip'
                  use_private_ip?: boolean | undefined
                }[]
              | undefined
          }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
          load_balancer: {
            algorithm: { type: 'round_robin' | 'least_connections' }
            created: string
            id: number
            included_traffic: number
            ingoing_traffic: number | null
            labels: { [x: string]: string }
            load_balancer_type: {
              deprecated: string | null
              description: string
              id: number
              max_assigned_certificates: number
              max_connections: number
              max_services: number
              max_targets: number
              name: string
              prices: {
                location: string
                price_hourly: { gross: string; net: string }
                price_monthly: { gross: string; net: string }
              }[]
            }
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            outgoing_traffic: number | null
            private_net: { ip?: string | undefined; network?: number | undefined }[]
            protection: { delete: boolean }
            public_net: {
              enabled: boolean
              ipv4: { dns_ptr?: (string | null) | undefined; ip?: (string | null) | undefined }
              ipv6: { dns_ptr?: (string | null) | undefined; ip?: (string | null) | undefined }
            }
            services: {
              destination_port: number
              health_check: {
                http?:
                  | {
                      domain: string | null
                      path: string
                      response?: string | undefined
                      status_codes?: string[] | undefined
                      tls?: boolean | undefined
                    }
                  | undefined
                interval: number
                port: number
                protocol: 'tcp' | 'http'
                retries: number
                timeout: number
              }
              http?:
                | {
                    certificates?: number[] | undefined
                    cookie_lifetime?: number | undefined
                    cookie_name?: string | undefined
                    redirect_http?: boolean | undefined
                    sticky_sessions?: boolean | undefined
                  }
                | undefined
              listen_port: number
              protocol: 'tcp' | 'http' | 'https'
              proxyprotocol: boolean
            }[]
            targets: {
              health_status?:
                | {
                    listen_port?: number | undefined
                    status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                  }[]
                | undefined
              ip?: { ip: string } | undefined
              label_selector?: { selector: string } | undefined
              server?: { id: number } | undefined
              targets?:
                | {
                    health_status?:
                      | {
                          listen_port?: number | undefined
                          status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                        }[]
                      | undefined
                    server?: { id: number } | undefined
                    type?: string | undefined
                    use_private_ip?: boolean | undefined
                  }[]
                | undefined
              type: 'server' | 'label_selector' | 'ip'
              use_private_ip?: boolean | undefined
            }[]
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          load_balancer: {
            algorithm: { type: 'round_robin' | 'least_connections' }
            created: string
            id: number
            included_traffic: number
            ingoing_traffic: number | null
            labels: { [x: string]: string }
            load_balancer_type: {
              deprecated: string | null
              description: string
              id: number
              max_assigned_certificates: number
              max_connections: number
              max_services: number
              max_targets: number
              name: string
              prices: {
                location: string
                price_hourly: { gross: string; net: string }
                price_monthly: { gross: string; net: string }
              }[]
            }
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            outgoing_traffic: number | null
            private_net: { ip?: string | undefined; network?: number | undefined }[]
            protection: { delete: boolean }
            public_net: {
              enabled: boolean
              ipv4: { dns_ptr?: (string | null) | undefined; ip?: (string | null) | undefined }
              ipv6: { dns_ptr?: (string | null) | undefined; ip?: (string | null) | undefined }
            }
            services: {
              destination_port: number
              health_check: {
                http?:
                  | {
                      domain: string | null
                      path: string
                      response?: string | undefined
                      status_codes?: string[] | undefined
                      tls?: boolean | undefined
                    }
                  | undefined
                interval: number
                port: number
                protocol: 'tcp' | 'http'
                retries: number
                timeout: number
              }
              http?:
                | {
                    certificates?: number[] | undefined
                    cookie_lifetime?: number | undefined
                    cookie_name?: string | undefined
                    redirect_http?: boolean | undefined
                    sticky_sessions?: boolean | undefined
                  }
                | undefined
              listen_port: number
              protocol: 'tcp' | 'http' | 'https'
              proxyprotocol: boolean
            }[]
            targets: {
              health_status?:
                | {
                    listen_port?: number | undefined
                    status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                  }[]
                | undefined
              ip?: { ip: string } | undefined
              label_selector?: { selector: string } | undefined
              server?: { id: number } | undefined
              targets?:
                | {
                    health_status?:
                      | {
                          listen_port?: number | undefined
                          status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                        }[]
                      | undefined
                    server?: { id: number } | undefined
                    type?: string | undefined
                    use_private_ip?: boolean | undefined
                  }[]
                | undefined
              type: 'server' | 'label_selector' | 'ip'
              use_private_ip?: boolean | undefined
            }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: { labels?: { [x: string]: unknown } | undefined; name?: string | undefined }
        }
        output: {
          load_balancer: {
            algorithm: { type: 'round_robin' | 'least_connections' }
            created: string
            id: number
            included_traffic: number
            ingoing_traffic: number | null
            labels: { [x: string]: string }
            load_balancer_type: {
              deprecated: string | null
              description: string
              id: number
              max_assigned_certificates: number
              max_connections: number
              max_services: number
              max_targets: number
              name: string
              prices: {
                location: string
                price_hourly: { gross: string; net: string }
                price_monthly: { gross: string; net: string }
              }[]
            }
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            outgoing_traffic: number | null
            private_net: { ip?: string | undefined; network?: number | undefined }[]
            protection: { delete: boolean }
            public_net: {
              enabled: boolean
              ipv4: { dns_ptr?: (string | null) | undefined; ip?: (string | null) | undefined }
              ipv6: { dns_ptr?: (string | null) | undefined; ip?: (string | null) | undefined }
            }
            services: {
              destination_port: number
              health_check: {
                http?:
                  | {
                      domain: string | null
                      path: string
                      response?: string | undefined
                      status_codes?: string[] | undefined
                      tls?: boolean | undefined
                    }
                  | undefined
                interval: number
                port: number
                protocol: 'tcp' | 'http'
                retries: number
                timeout: number
              }
              http?:
                | {
                    certificates?: number[] | undefined
                    cookie_lifetime?: number | undefined
                    cookie_name?: string | undefined
                    redirect_http?: boolean | undefined
                    sticky_sessions?: boolean | undefined
                  }
                | undefined
              listen_port: number
              protocol: 'tcp' | 'http' | 'https'
              proxyprotocol: boolean
            }[]
            targets: {
              health_status?:
                | {
                    listen_port?: number | undefined
                    status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                  }[]
                | undefined
              ip?: { ip: string } | undefined
              label_selector?: { selector: string } | undefined
              server?: { id: number } | undefined
              targets?:
                | {
                    health_status?:
                      | {
                          listen_port?: number | undefined
                          status?: 'healthy' | 'unhealthy' | 'unknown' | undefined
                        }[]
                      | undefined
                    server?: { id: number } | undefined
                    type?: string | undefined
                    use_private_ip?: boolean | undefined
                  }[]
                | undefined
              type: 'server' | 'label_selector' | 'ip'
              use_private_ip?: boolean | undefined
            }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load_balancers/:id/actions': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'command'
              | 'command:asc'
              | 'command:desc'
              | 'status'
              | 'status:asc'
              | 'status:desc'
              | 'progress'
              | 'progress:asc'
              | 'progress:desc'
              | 'started'
              | 'started:asc'
              | 'started:desc'
              | 'finished'
              | 'finished:asc'
              | 'finished:desc'
              | undefined
            status?: 'running' | 'success' | 'error' | undefined
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load_balancers/:id/actions/add_service': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            destination_port: number
            health_check: {
              http?:
                | {
                    domain: string | null
                    path: string
                    response?: string | undefined
                    status_codes?: string[] | undefined
                    tls?: boolean | undefined
                  }
                | undefined
              interval: number
              port: number
              protocol: 'tcp' | 'http'
              retries: number
              timeout: number
            }
            http?:
              | {
                  certificates?: number[] | undefined
                  cookie_lifetime?: number | undefined
                  cookie_name?: string | undefined
                  redirect_http?: boolean | undefined
                  sticky_sessions?: boolean | undefined
                }
              | undefined
            listen_port: number
            protocol: 'tcp' | 'http' | 'https'
            proxyprotocol: boolean
          }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/add_target': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            ip?: { ip: string } | undefined
            label_selector?: { selector: string } | undefined
            server?: { id: number } | undefined
            type: 'server' | 'label_selector' | 'ip'
            use_private_ip?: boolean | undefined
          }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/attach_to_network': {
      $post: {
        input: { param: { id: number } } & { json: { ip?: string | undefined; network: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/change_algorithm': {
      $post: {
        input: { param: { id: number } } & { json: { type: 'round_robin' | 'least_connections' } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/change_dns_ptr': {
      $post: {
        input: { param: { id: number } } & { json: { dns_ptr: string | null; ip: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/change_protection': {
      $post: {
        input: { param: { id: number } } & { json: { delete?: boolean | undefined } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/change_type': {
      $post: {
        input: { param: { id: number } } & { json: { load_balancer_type: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/delete_service': {
      $post: {
        input: { param: { id: number } } & { json: { listen_port: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/detach_from_network': {
      $post: {
        input: { param: { id: number } } & { json: { network: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/disable_public_interface': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/enable_public_interface': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/remove_target': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            ip?: { ip: string } | undefined
            label_selector?: { selector: string } | undefined
            server?: { id: number } | undefined
            type: 'server' | 'label_selector' | 'ip'
          }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/update_service': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            destination_port: number
            health_check: {
              http?:
                | {
                    domain: string | null
                    path: string
                    response?: string | undefined
                    status_codes?: string[] | undefined
                    tls?: boolean | undefined
                  }
                | undefined
              interval: number
              port: number
              protocol: 'tcp' | 'http'
              retries: number
              timeout: number
            }
            http?:
              | {
                  certificates?: number[] | undefined
                  cookie_lifetime?: number | undefined
                  cookie_name?: string | undefined
                  redirect_http?: boolean | undefined
                  sticky_sessions?: boolean | undefined
                }
              | undefined
            listen_port: number
            protocol: 'tcp' | 'http' | 'https'
            proxyprotocol: boolean
          }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/load_balancers/:id/actions/:action_id': {
      $get: {
        input: { param: { id: number; action_id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load_balancers/:id/metrics': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            type:
              | 'open_connections'
              | 'connections_per_second'
              | 'requests_per_second'
              | 'bandwidth'
            start: string
            end: string
            step?: string | undefined
          }
        }
        output: {
          metrics: {
            end: string
            start: string
            step: number
            time_series: { [x: string]: { values: (number | string)[][] } }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/locations': {
      $get: {
        input: { query: { name?: string | undefined } }
        output: {
          locations: {
            city: string
            country: string
            description: string
            id: number
            latitude: number
            longitude: number
            name: string
            network_zone: string
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/locations/:id': {
      $get: {
        input: { param: { id: number } }
        output: {
          location: {
            city: string
            country: string
            description: string
            id: number
            latitude: number
            longitude: number
            name: string
            network_zone: string
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks': {
      $get: {
        input: { query: { name?: string | undefined; label_selector?: string | undefined } }
        output: {
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
          networks: {
            created: string
            id: number
            ip_range: string
            labels: { [x: string]: unknown }
            load_balancers?: number[] | undefined
            name: string
            protection: { delete: boolean }
            routes: { destination: string; gateway: string }[]
            servers: number[]
            subnets: {
              gateway: string
              ip_range?: string | undefined
              network_zone: string
              type: 'cloud' | 'server' | 'vswitch'
            }[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            ip_range: string
            labels?: { labelkey?: string | undefined } | undefined
            name: string
            routes?: { destination: string; gateway: string }[] | undefined
            subnets?:
              | {
                  ip_range?: string | undefined
                  network_zone: string
                  type: 'cloud' | 'server' | 'vswitch'
                }[]
              | undefined
          }
        }
        output: {
          network?:
            | {
                created: string
                id: number
                ip_range: string
                labels: { [x: string]: unknown }
                load_balancers?: number[] | undefined
                name: string
                protection: { delete: boolean }
                routes: { destination: string; gateway: string }[]
                servers: number[]
                subnets: {
                  gateway: string
                  ip_range?: string | undefined
                  network_zone: string
                  type: 'cloud' | 'server' | 'vswitch'
                }[]
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          network?:
            | {
                created: string
                id: number
                ip_range: string
                labels: { [x: string]: unknown }
                load_balancers?: number[] | undefined
                name: string
                protection: { delete: boolean }
                routes: { destination: string; gateway: string }[]
                servers: number[]
                subnets: {
                  gateway: string
                  ip_range?: string | undefined
                  network_zone: string
                  type: 'cloud' | 'server' | 'vswitch'
                }[]
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: {
            labels?: { labelkey?: string | undefined } | undefined
            name?: string | undefined
          }
        }
        output: {
          network?:
            | {
                created: string
                id: number
                ip_range: string
                labels: { [x: string]: unknown }
                load_balancers?: number[] | undefined
                name: string
                protection: { delete: boolean }
                routes: { destination: string; gateway: string }[]
                servers: number[]
                subnets: {
                  gateway: string
                  ip_range?: string | undefined
                  network_zone: string
                  type: 'cloud' | 'server' | 'vswitch'
                }[]
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:id/actions': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'command'
              | 'command:asc'
              | 'command:desc'
              | 'status'
              | 'status:asc'
              | 'status:desc'
              | 'progress'
              | 'progress:asc'
              | 'progress:desc'
              | 'started'
              | 'started:asc'
              | 'started:desc'
              | 'finished'
              | 'finished:asc'
              | 'finished:desc'
              | undefined
            status?: 'running' | 'success' | 'error' | undefined
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:id/actions/add_route': {
      $post: {
        input: { param: { id: number } } & { json: { destination: string; gateway: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:id/actions/add_subnet': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            ip_range?: string | undefined
            network_zone: string
            type: 'cloud' | 'server' | 'vswitch'
            vswitch_id?: number | undefined
          }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:id/actions/change_ip_range': {
      $post: {
        input: { param: { id: number } } & { json: { ip_range: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:id/actions/change_protection': {
      $post: {
        input: { param: { id: number } } & { json: { delete?: boolean | undefined } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:id/actions/delete_route': {
      $post: {
        input: { param: { id: number } } & { json: { destination: string; gateway: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:id/actions/delete_subnet': {
      $post: {
        input: { param: { id: number } } & { json: { ip_range: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:id/actions/:action_id': {
      $get: {
        input: { param: { id: number; action_id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/placement_groups': {
      $get: {
        input: {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'name'
              | 'name:asc'
              | 'name:desc'
              | 'created'
              | 'created:asc'
              | 'created:desc'
              | undefined
            name?: string | undefined
            label_selector?: string | undefined
            type?: 'spread' | undefined
          }
        }
        output: {
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
          placement_groups: {
            created: string
            id: number
            labels: { [x: string]: string }
            name: string
            servers: number[]
            type: 'spread'
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: { labels?: { [x: string]: unknown } | undefined; name: string; type: 'spread' }
        }
        output: {
          action?:
            | ({
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              } | null)
            | undefined
          placement_group: {
            created: string
            id: number
            labels: { [x: string]: string }
            name: string
            servers: number[]
            type: 'spread'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/placement_groups/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          placement_group: {
            created: string
            id: number
            labels: { [x: string]: string }
            name: string
            servers: number[]
            type: 'spread'
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: { labels?: { [x: string]: unknown } | undefined; name?: string | undefined }
        }
        output: {
          placement_group: {
            created: string
            id: number
            labels: { [x: string]: string }
            name: string
            servers: number[]
            type: 'spread'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pricing': {
      $get: {
        input: {}
        output: {
          pricing: {
            currency: string
            floating_ip: { price_monthly: { gross: string; net: string } }
            floating_ips: {
              prices: { location: string; price_monthly: { gross: string; net: string } }[]
              type: 'ipv4' | 'ipv6'
            }[]
            image: { price_per_gb_month: { gross: string; net: string } }
            load_balancer_types: {
              id: number
              name: string
              prices: {
                location: string
                price_hourly: { gross: string; net: string }
                price_monthly: { gross: string; net: string }
              }[]
            }[]
            primary_ips: {
              prices: {
                location: string
                price_hourly: { gross: string; net: string }
                price_monthly: { gross: string; net: string }
              }[]
              type: 'ipv4' | 'ipv6'
            }[]
            server_backup: { percentage: string }
            server_types: {
              id: number
              name: string
              prices: {
                location: string
                price_hourly: { gross: string; net: string }
                price_monthly: { gross: string; net: string }
              }[]
            }[]
            traffic: { price_per_tb: { gross: string; net: string } }
            vat_rate: string
            volume: { price_per_gb_month: { gross: string; net: string } }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/primary_ips': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            label_selector?: string | undefined
            ip?: string | undefined
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'created'
              | 'created:asc'
              | 'created:desc'
              | undefined
          }
        }
        output: {
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
          primary_ips: {
            assignee_id: number | null
            assignee_type: 'server'
            auto_delete: boolean
            blocked: boolean
            created: string
            datacenter: {
              description: string
              id: number
              location: {
                city: string
                country: string
                description: string
                id: number
                latitude: number
                longitude: number
                name: string
                network_zone: string
              }
              name: string
              server_types: {
                available: number[]
                available_for_migration: number[]
                supported: number[]
              }
            }
            dns_ptr: { dns_ptr: string; ip: string }[]
            id: number
            ip: string
            labels: { [x: string]: string }
            name: string
            protection: { delete: boolean }
            type: 'ipv4' | 'ipv6'
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            assignee_id?: number | undefined
            assignee_type: 'server'
            auto_delete?: boolean | undefined
            datacenter?: string | undefined
            labels?: { [x: string]: unknown } | undefined
            name: string
            type: 'ipv4' | 'ipv6'
          }
        }
        output: {
          action?:
            | {
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              }
            | undefined
          primary_ip: {
            assignee_id: number | null
            assignee_type: 'server'
            auto_delete: boolean
            blocked: boolean
            created: string
            datacenter: {
              description: string
              id: number
              location: {
                city: string
                country: string
                description: string
                id: number
                latitude: number
                longitude: number
                name: string
                network_zone: string
              }
              name: string
              server_types: {
                available: number[]
                available_for_migration: number[]
                supported: number[]
              }
            }
            dns_ptr: { dns_ptr: string; ip: string }[]
            id: number
            ip: string
            labels: { [x: string]: string }
            name: string
            protection: { delete: boolean }
            type: 'ipv4' | 'ipv6'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/primary_ips/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          primary_ip: {
            assignee_id: number | null
            assignee_type: 'server'
            auto_delete: boolean
            blocked: boolean
            created: string
            datacenter: {
              description: string
              id: number
              location: {
                city: string
                country: string
                description: string
                id: number
                latitude: number
                longitude: number
                name: string
                network_zone: string
              }
              name: string
              server_types: {
                available: number[]
                available_for_migration: number[]
                supported: number[]
              }
            }
            dns_ptr: { dns_ptr: string; ip: string }[]
            id: number
            ip: string
            labels: { [x: string]: string }
            name: string
            protection: { delete: boolean }
            type: 'ipv4' | 'ipv6'
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: {
            auto_delete?: boolean | undefined
            labels?: { [x: string]: unknown } | undefined
            name?: string | undefined
          }
        }
        output: {
          primary_ip: {
            assignee_id: number | null
            assignee_type: 'server'
            auto_delete: boolean
            blocked: boolean
            created: string
            datacenter: {
              description: string
              id: number
              location: {
                city: string
                country: string
                description: string
                id: number
                latitude: number
                longitude: number
                name: string
                network_zone: string
              }
              name: string
              server_types: {
                available: number[]
                available_for_migration: number[]
                supported: number[]
              }
            }
            dns_ptr: { dns_ptr: string; ip: string }[]
            id: number
            ip: string
            labels: { [x: string]: string }
            name: string
            protection: { delete: boolean }
            type: 'ipv4' | 'ipv6'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/primary_ips/:id/actions/assign': {
      $post: {
        input: { param: { id: number } } & {
          json: { assignee_id: number; assignee_type: 'server' }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/primary_ips/:id/actions/change_dns_ptr': {
      $post: {
        input: { param: { id: number } } & { json: { dns_ptr: string | null; ip: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/primary_ips/:id/actions/change_protection': {
      $post: {
        input: { param: { id: number } } & { json: { delete?: boolean | undefined } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/primary_ips/:id/actions/unassign': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/server_types': {
      $get: {
        input: { query: { name?: string | undefined } }
        output: {
          server_types: {
            cores: number
            cpu_type: 'shared' | 'dedicated'
            deprecated: boolean
            description: string
            disk: number
            id: number
            memory: number
            name: string
            prices: {
              location: string
              price_hourly: { gross: string; net: string }
              price_monthly: { gross: string; net: string }
            }[]
            storage_type: 'local' | 'network'
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/server_types/:id': {
      $get: {
        input: { param: { id: number } }
        output: {
          server_type: {
            cores: number
            cpu_type: 'shared' | 'dedicated'
            deprecated: boolean
            description: string
            disk: number
            id: number
            memory: number
            name: string
            prices: {
              location: string
              price_hourly: { gross: string; net: string }
              price_monthly: { gross: string; net: string }
            }[]
            storage_type: 'local' | 'network'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/servers': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            label_selector?: string | undefined
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'name'
              | 'name:asc'
              | 'name:desc'
              | 'created'
              | 'created:asc'
              | 'created:desc'
              | undefined
            status?:
              | 'initializing'
              | 'starting'
              | 'running'
              | 'stopping'
              | 'off'
              | 'deleting'
              | 'rebuilding'
              | 'migrating'
              | 'unknown'
              | undefined
          }
        }
        output: {
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
          servers: {
            backup_window: string | null
            created: string
            datacenter: {
              description: string
              id: number
              location: {
                city: string
                country: string
                description: string
                id: number
                latitude: number
                longitude: number
                name: string
                network_zone: string
              }
              name: string
              server_types: {
                available: number[]
                available_for_migration: number[]
                supported: number[]
              }
            }
            id: number
            image: {
              bound_to: number | null
              created: string
              created_from: { id: number; name: string } | null
              deleted: string | null
              deprecated: string | null
              description: string
              disk_size: number
              id: number
              image_size: number | null
              labels: { [x: string]: string }
              name: string | null
              os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'unknown'
              os_version: string | null
              protection: { delete: boolean }
              rapid_deploy?: boolean | undefined
              status: 'available' | 'creating' | 'unavailable'
              type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary'
            } | null
            included_traffic: number | null
            ingoing_traffic: number | null
            iso: {
              deprecated: string | null
              description: string
              id: number
              name: string | null
              type: 'public' | 'private'
            } | null
            labels: { [x: string]: string }
            load_balancers?: number[] | undefined
            locked: boolean
            name: string
            outgoing_traffic: number | null
            placement_group?:
              | ({
                  created: string
                  id: number
                  labels: { [x: string]: string }
                  name: string
                  servers: number[]
                  type: 'spread'
                } | null)
              | undefined
            primary_disk_size: number
            private_net: {
              alias_ips?: string[] | undefined
              ip?: string | undefined
              mac_address?: string | undefined
              network?: number | undefined
            }[]
            protection: { delete: boolean; rebuild: boolean }
            public_net: {
              firewalls?:
                | { id?: number | undefined; status?: 'applied' | 'pending' | undefined }[]
                | undefined
              floating_ips: number[]
              ipv4: {
                blocked: boolean
                dns_ptr: string
                id?: number | undefined
                ip: string
              } | null
              ipv6: {
                blocked: boolean
                dns_ptr: { dns_ptr: string; ip: string }[] | null
                id?: number | undefined
                ip: string
              } | null
            }
            rescue_enabled: boolean
            server_type: {
              cores: number
              cpu_type: 'shared' | 'dedicated'
              deprecated: boolean
              description: string
              disk: number
              id: number
              memory: number
              name: string
              prices: {
                location: string
                price_hourly: { gross: string; net: string }
                price_monthly: { gross: string; net: string }
              }[]
              storage_type: 'local' | 'network'
            }
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
            volumes?: number[] | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            automount?: boolean | undefined
            datacenter?: string | undefined
            firewalls?: { firewall?: number | undefined }[] | undefined
            image: string
            labels?: { [x: string]: unknown } | undefined
            location?: string | undefined
            name: string
            networks?: number[] | undefined
            placement_group?: number | undefined
            public_net?:
              | {
                  enable_ipv4?: boolean | undefined
                  enable_ipv6?: boolean | undefined
                  ipv4?: (number | null) | undefined
                  ipv6?: (number | null) | undefined
                }
              | undefined
            server_type: string
            ssh_keys?: string[] | undefined
            start_after_create?: boolean | undefined
            user_data?: string | undefined
            volumes?: number[] | undefined
          }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
          next_actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          root_password: string | null
          server: {
            backup_window: string | null
            created: string
            datacenter: {
              description: string
              id: number
              location: {
                city: string
                country: string
                description: string
                id: number
                latitude: number
                longitude: number
                name: string
                network_zone: string
              }
              name: string
              server_types: {
                available: number[]
                available_for_migration: number[]
                supported: number[]
              }
            }
            id: number
            image: {
              bound_to: number | null
              created: string
              created_from: { id: number; name: string } | null
              deleted: string | null
              deprecated: string | null
              description: string
              disk_size: number
              id: number
              image_size: number | null
              labels: { [x: string]: string }
              name: string | null
              os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'unknown'
              os_version: string | null
              protection: { delete: boolean }
              rapid_deploy?: boolean | undefined
              status: 'available' | 'creating' | 'unavailable'
              type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary'
            } | null
            included_traffic: number | null
            ingoing_traffic: number | null
            iso: {
              deprecated: string | null
              description: string
              id: number
              name: string | null
              type: 'public' | 'private'
            } | null
            labels: { [x: string]: string }
            load_balancers?: number[] | undefined
            locked: boolean
            name: string
            outgoing_traffic: number | null
            placement_group?:
              | ({
                  created: string
                  id: number
                  labels: { [x: string]: string }
                  name: string
                  servers: number[]
                  type: 'spread'
                } | null)
              | undefined
            primary_disk_size: number
            private_net: {
              alias_ips?: string[] | undefined
              ip?: string | undefined
              mac_address?: string | undefined
              network?: number | undefined
            }[]
            protection: { delete: boolean; rebuild: boolean }
            public_net: {
              firewalls?:
                | { id?: number | undefined; status?: 'applied' | 'pending' | undefined }[]
                | undefined
              floating_ips: number[]
              ipv4: {
                blocked: boolean
                dns_ptr: string
                id?: number | undefined
                ip: string
              } | null
              ipv6: {
                blocked: boolean
                dns_ptr: { dns_ptr: string; ip: string }[] | null
                id?: number | undefined
                ip: string
              } | null
            }
            rescue_enabled: boolean
            server_type: {
              cores: number
              cpu_type: 'shared' | 'dedicated'
              deprecated: boolean
              description: string
              disk: number
              id: number
              memory: number
              name: string
              prices: {
                location: string
                price_hourly: { gross: string; net: string }
                price_monthly: { gross: string; net: string }
              }[]
              storage_type: 'local' | 'network'
            }
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
            volumes?: number[] | undefined
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id': {
      $delete: {
        input: { param: { id: number } }
        output: {
          action?:
            | {
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } }
        output: {
          server?:
            | {
                backup_window: string | null
                created: string
                datacenter: {
                  description: string
                  id: number
                  location: {
                    city: string
                    country: string
                    description: string
                    id: number
                    latitude: number
                    longitude: number
                    name: string
                    network_zone: string
                  }
                  name: string
                  server_types: {
                    available: number[]
                    available_for_migration: number[]
                    supported: number[]
                  }
                }
                id: number
                image: {
                  bound_to: number | null
                  created: string
                  created_from: { id: number; name: string } | null
                  deleted: string | null
                  deprecated: string | null
                  description: string
                  disk_size: number
                  id: number
                  image_size: number | null
                  labels: { [x: string]: string }
                  name: string | null
                  os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'unknown'
                  os_version: string | null
                  protection: { delete: boolean }
                  rapid_deploy?: boolean | undefined
                  status: 'available' | 'creating' | 'unavailable'
                  type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary'
                } | null
                included_traffic: number | null
                ingoing_traffic: number | null
                iso: {
                  deprecated: string | null
                  description: string
                  id: number
                  name: string | null
                  type: 'public' | 'private'
                } | null
                labels: { [x: string]: string }
                load_balancers?: number[] | undefined
                locked: boolean
                name: string
                outgoing_traffic: number | null
                placement_group?:
                  | ({
                      created: string
                      id: number
                      labels: { [x: string]: string }
                      name: string
                      servers: number[]
                      type: 'spread'
                    } | null)
                  | undefined
                primary_disk_size: number
                private_net: {
                  alias_ips?: string[] | undefined
                  ip?: string | undefined
                  mac_address?: string | undefined
                  network?: number | undefined
                }[]
                protection: { delete: boolean; rebuild: boolean }
                public_net: {
                  firewalls?:
                    | { id?: number | undefined; status?: 'applied' | 'pending' | undefined }[]
                    | undefined
                  floating_ips: number[]
                  ipv4: {
                    blocked: boolean
                    dns_ptr: string
                    id?: number | undefined
                    ip: string
                  } | null
                  ipv6: {
                    blocked: boolean
                    dns_ptr: { dns_ptr: string; ip: string }[] | null
                    id?: number | undefined
                    ip: string
                  } | null
                }
                rescue_enabled: boolean
                server_type: {
                  cores: number
                  cpu_type: 'shared' | 'dedicated'
                  deprecated: boolean
                  description: string
                  disk: number
                  id: number
                  memory: number
                  name: string
                  prices: {
                    location: string
                    price_hourly: { gross: string; net: string }
                    price_monthly: { gross: string; net: string }
                  }[]
                  storage_type: 'local' | 'network'
                }
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
                volumes?: number[] | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: { labels?: { [x: string]: unknown } | undefined; name?: string | undefined }
        }
        output: {
          server?:
            | {
                backup_window: string | null
                created: string
                datacenter: {
                  description: string
                  id: number
                  location: {
                    city: string
                    country: string
                    description: string
                    id: number
                    latitude: number
                    longitude: number
                    name: string
                    network_zone: string
                  }
                  name: string
                  server_types: {
                    available: number[]
                    available_for_migration: number[]
                    supported: number[]
                  }
                }
                id: number
                image: {
                  bound_to: number | null
                  created: string
                  created_from: { id: number; name: string } | null
                  deleted: string | null
                  deprecated: string | null
                  description: string
                  disk_size: number
                  id: number
                  image_size: number | null
                  labels: { [x: string]: string }
                  name: string | null
                  os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'unknown'
                  os_version: string | null
                  protection: { delete: boolean }
                  rapid_deploy?: boolean | undefined
                  status: 'available' | 'creating' | 'unavailable'
                  type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary'
                } | null
                included_traffic: number | null
                ingoing_traffic: number | null
                iso: {
                  deprecated: string | null
                  description: string
                  id: number
                  name: string | null
                  type: 'public' | 'private'
                } | null
                labels: { [x: string]: string }
                load_balancers?: number[] | undefined
                locked: boolean
                name: string
                outgoing_traffic: number | null
                placement_group?:
                  | ({
                      created: string
                      id: number
                      labels: { [x: string]: string }
                      name: string
                      servers: number[]
                      type: 'spread'
                    } | null)
                  | undefined
                primary_disk_size: number
                private_net: {
                  alias_ips?: string[] | undefined
                  ip?: string | undefined
                  mac_address?: string | undefined
                  network?: number | undefined
                }[]
                protection: { delete: boolean; rebuild: boolean }
                public_net: {
                  firewalls?:
                    | { id?: number | undefined; status?: 'applied' | 'pending' | undefined }[]
                    | undefined
                  floating_ips: number[]
                  ipv4: {
                    blocked: boolean
                    dns_ptr: string
                    id?: number | undefined
                    ip: string
                  } | null
                  ipv6: {
                    blocked: boolean
                    dns_ptr: { dns_ptr: string; ip: string }[] | null
                    id?: number | undefined
                    ip: string
                  } | null
                }
                rescue_enabled: boolean
                server_type: {
                  cores: number
                  cpu_type: 'shared' | 'dedicated'
                  deprecated: boolean
                  description: string
                  disk: number
                  id: number
                  memory: number
                  name: string
                  prices: {
                    location: string
                    price_hourly: { gross: string; net: string }
                    price_monthly: { gross: string; net: string }
                  }[]
                  storage_type: 'local' | 'network'
                }
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
                volumes?: number[] | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/servers/:id/actions': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'command'
              | 'command:asc'
              | 'command:desc'
              | 'status'
              | 'status:asc'
              | 'status:desc'
              | 'progress'
              | 'progress:asc'
              | 'progress:desc'
              | 'started'
              | 'started:asc'
              | 'started:desc'
              | 'finished'
              | 'finished:asc'
              | 'finished:desc'
              | undefined
            status?: 'running' | 'success' | 'error' | undefined
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/servers/:id/actions/add_to_placement_group': {
      $post: {
        input: { param: { id: number } } & { json: { placement_group: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/attach_iso': {
      $post: {
        input: { param: { id: number } } & { json: { iso: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/attach_to_network': {
      $post: {
        input: { param: { id: number } } & {
          json: { alias_ips?: string[] | undefined; ip?: string | undefined; network: number }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/change_alias_ips': {
      $post: {
        input: { param: { id: number } } & { json: { alias_ips: string[]; network: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/change_dns_ptr': {
      $post: {
        input: { param: { id: number } } & { json: { dns_ptr: string | null; ip: string } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/change_protection': {
      $post: {
        input: { param: { id: number } } & {
          json: { delete?: boolean | undefined; rebuild?: boolean | undefined }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/change_type': {
      $post: {
        input: { param: { id: number } } & { json: { server_type: string; upgrade_disk: boolean } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/create_image': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            description?: string | undefined
            labels?: { labelkey?: string | undefined } | undefined
            type?: 'snapshot' | 'backup' | undefined
          }
        }
        output: {
          action?:
            | {
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              }
            | undefined
          image?:
            | {
                bound_to: number | null
                created: string
                created_from: { id: number; name: string } | null
                deleted: string | null
                deprecated: string | null
                description: string
                disk_size: number
                id: number
                image_size: number | null
                labels: { [x: string]: string }
                name: string | null
                os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'unknown'
                os_version: string | null
                protection: { delete: boolean }
                rapid_deploy?: boolean | undefined
                status: 'available' | 'creating' | 'unavailable'
                type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary'
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/detach_from_network': {
      $post: {
        input: { param: { id: number } } & { json: { network: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/detach_iso': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/disable_backup': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/disable_rescue': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/enable_backup': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/enable_rescue': {
      $post: {
        input: { param: { id: number } } & {
          json: { ssh_keys?: number[] | undefined; type?: 'linux64' | 'linux32' | undefined }
        }
        output: {
          action?:
            | {
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              }
            | undefined
          root_password?: string | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/poweroff': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/poweron': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/reboot': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/rebuild': {
      $post: {
        input: { param: { id: number } } & { json: { image: string } }
        output: {
          action?:
            | {
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              }
            | undefined
          root_password?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/remove_from_placement_group': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/request_console': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
          password: string
          wss_url: string
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/reset': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/reset_password': {
      $post: {
        input: { param: { id: number } }
        output: {
          action?:
            | {
                command: string
                error: { code: string; message: string } | null
                finished: string | null
                id: number
                progress: number
                resources: { id: number; type: string }[]
                started: string
                status: 'success' | 'running' | 'error'
              }
            | undefined
          root_password?: string | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/shutdown': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/servers/:id/actions/:action_id': {
      $get: {
        input: { param: { id: number; action_id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/servers/:id/metrics': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            type: 'cpu' | 'disk' | 'network'
            start: string
            end: string
            step?: string | undefined
          }
        }
        output: {
          metrics: {
            end: string
            start: string
            step: number
            time_series: { [x: string]: { values: (number | string)[][] } }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ssh_keys': {
      $get: {
        input: {
          query: {
            sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | undefined
            name?: string | undefined
            fingerprint?: string | undefined
            label_selector?: string | undefined
          }
        }
        output: {
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
          ssh_keys: {
            created: string
            fingerprint: string
            id: number
            labels: { [x: string]: string }
            name: string
            public_key: string
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: { labels?: { [x: string]: unknown } | undefined; name: string; public_key: string }
        }
        output: {
          ssh_key: {
            created: string
            fingerprint: string
            id: number
            labels: { [x: string]: string }
            name: string
            public_key: string
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ssh_keys/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          ssh_key: {
            created: string
            fingerprint: string
            id: number
            labels: { [x: string]: string }
            name: string
            public_key: string
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: { labels?: { [x: string]: unknown } | undefined; name?: string | undefined }
        }
        output: {
          ssh_key: {
            created: string
            fingerprint: string
            id: number
            labels: { [x: string]: string }
            name: string
            public_key: string
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/volumes': {
      $get: {
        input: {
          query: {
            status?: 'available' | 'creating' | undefined
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'name'
              | 'name:asc'
              | 'name:desc'
              | 'created'
              | 'created:asc'
              | 'created:desc'
              | undefined
            name?: string | undefined
            label_selector?: string | undefined
          }
        }
        output: {
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
          volumes: {
            created: string
            format: string | null
            id: number
            labels: { [x: string]: string }
            linux_device: string
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            protection: { delete: boolean }
            server: number | null
            size: number
            status: 'creating' | 'available'
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            automount?: boolean | undefined
            format?: string | undefined
            labels?: { [x: string]: unknown } | undefined
            location?: string | undefined
            name: string
            server?: number | undefined
            size: number
          }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
          next_actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          volume: {
            created: string
            format: string | null
            id: number
            labels: { [x: string]: string }
            linux_device: string
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            protection: { delete: boolean }
            server: number | null
            size: number
            status: 'creating' | 'available'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/volumes/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: {
          volume: {
            created: string
            format: string | null
            id: number
            labels: { [x: string]: string }
            linux_device: string
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            protection: { delete: boolean }
            server: number | null
            size: number
            status: 'creating' | 'available'
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: { labels?: { labelkey?: string | undefined } | undefined; name: string }
        }
        output: {
          volume: {
            created: string
            format: string | null
            id: number
            labels: { [x: string]: string }
            linux_device: string
            location: {
              city: string
              country: string
              description: string
              id: number
              latitude: number
              longitude: number
              name: string
              network_zone: string
            }
            name: string
            protection: { delete: boolean }
            server: number | null
            size: number
            status: 'creating' | 'available'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/volumes/:id/actions': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            sort?:
              | 'id'
              | 'id:asc'
              | 'id:desc'
              | 'command'
              | 'command:asc'
              | 'command:desc'
              | 'status'
              | 'status:asc'
              | 'status:desc'
              | 'progress'
              | 'progress:asc'
              | 'progress:desc'
              | 'started'
              | 'started:asc'
              | 'started:desc'
              | 'finished'
              | 'finished:asc'
              | 'finished:desc'
              | undefined
            status?: 'running' | 'success' | 'error' | undefined
          }
        }
        output: {
          actions: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }[]
          meta?:
            | {
                pagination: {
                  last_page: number | null
                  next_page: number | null
                  page: number
                  per_page: number
                  previous_page: number | null
                  total_entries: number | null
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/volumes/:id/actions/attach': {
      $post: {
        input: { param: { id: number } } & {
          json: { automount?: boolean | undefined; server: number }
        }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/volumes/:id/actions/change_protection': {
      $post: {
        input: { param: { id: number } } & { json: { delete?: boolean | undefined } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/volumes/:id/actions/detach': {
      $post: {
        input: { param: { id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/volumes/:id/actions/resize': {
      $post: {
        input: { param: { id: number } } & { json: { size: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/volumes/:id/actions/:action_id': {
      $get: {
        input: { param: { id: number; action_id: number } }
        output: {
          action: {
            command: string
            error: { code: string; message: string } | null
            finished: string | null
            id: number
            progress: number
            resources: { id: number; type: string }[]
            started: string
            status: 'success' | 'running' | 'error'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
