type UnauthorizedError = { status: number; message: string }
type CACertificate = {
  cert?: string | undefined
  cert_digest?: string | undefined
  created_at?: number | undefined
  id?: string | undefined
  tags?: string[] | undefined
}
type Certificate = {
  cert?: string | undefined
  cert_alt?: string | undefined
  created_at?: number | undefined
  id?: string | undefined
  key?: string | undefined
  key_alt?: string | undefined
  tags?: string[] | undefined
  snis?: string[] | undefined
}
type PaginationOffsetResponse = string
type SNI = {
  certificate?: { id?: string | undefined } | undefined
  created_at?: number | undefined
  id?: string | undefined
  name?: string | undefined
  tags?: string[] | undefined
}
type Consumer = {
  created_at?: number | undefined
  custom_id?: string | undefined
  id?: string | undefined
  tags?: string[] | undefined
  username?: string | undefined
}
type Plugin = {
  config?: { [x: string]: unknown } | undefined
  consumer?: { id?: string | undefined } | undefined
  created_at?: number | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  instance_name?: string | undefined
  name?: string | undefined
  protocols?: string[] | undefined
  route?: { id?: string | undefined } | undefined
  service?: { id?: string | undefined } | undefined
  tags?: string[] | undefined
  updated_at?: number | undefined
}
type Key = {
  created_at?: number | undefined
  id?: string | undefined
  jwk?: string | undefined
  kid?: string | undefined
  name?: string | undefined
  pem?: { private_key?: string | undefined; public_key?: string | undefined } | undefined
  set?: { id?: string | undefined } | undefined
  tags?: string[] | undefined
  updated_at?: number | undefined
}
type Route = {
  created_at?: number | undefined
  destinations?: { ''?: { [x: string]: unknown } | undefined }[] | undefined
  headers?: { [x: string]: unknown } | undefined
  hosts?: string[] | undefined
  https_redirect_status_code?: number | undefined
  id?: string | undefined
  methods?: string[] | undefined
  name?: string | undefined
  path_handling?: string | undefined
  paths?: string[] | undefined
  preserve_host?: boolean | undefined
  protocols?: string[] | undefined
  regex_priority?: number | undefined
  request_buffering?: boolean | undefined
  response_buffering?: boolean | undefined
  service?: { id?: string | undefined } | undefined
  expression?: string | undefined
  priority?: number | undefined
  snis?: string[] | undefined
  sources?: { ''?: { [x: string]: unknown } | undefined }[] | undefined
  strip_path?: boolean | undefined
  tags?: string[] | undefined
  updated_at?: number | undefined
}
type Service = {
  ca_certificates?: string[] | undefined
  client_certificate?: { id?: string | undefined } | undefined
  connect_timeout?: number | undefined
  created_at?: number | undefined
  enabled?: boolean | undefined
  host?: string | undefined
  id?: string | undefined
  name?: string | undefined
  path?: string | undefined
  port?: number | undefined
  protocol?: string | undefined
  read_timeout?: number | undefined
  retries?: number | undefined
  tags?: string[] | undefined
  tls_verify?: boolean | undefined
  tls_verify_depth?: number | undefined
  updated_at?: number | undefined
  url?: string | undefined
  write_timeout?: number | undefined
}
type Upstream = {
  algorithm?: string | undefined
  client_certificate?: { id?: string | undefined } | undefined
  created_at?: number | undefined
  hash_fallback?: string | undefined
  hash_fallback_header?: string | undefined
  hash_fallback_query_arg?: string | undefined
  hash_fallback_uri_capture?: string | undefined
  hash_on?: string | undefined
  hash_on_cookie?: string | undefined
  hash_on_cookie_path?: string | undefined
  hash_on_header?: string | undefined
  hash_on_query_arg?: string | undefined
  hash_on_uri_capture?: string | undefined
  healthchecks?:
    | {
        active?:
          | {
              concurrency?: number | undefined
              headers?: { [x: string]: unknown } | undefined
              healthy?:
                | {
                    http_statuses?: number[] | undefined
                    interval?: number | undefined
                    successes?: number | undefined
                  }
                | undefined
              http_path?: string | undefined
              https_sni?: string | undefined
              https_verify_certificate?: boolean | undefined
              timeout?: number | undefined
              type?: string | undefined
              unhealthy?:
                | {
                    http_failures?: number | undefined
                    http_statuses?: number[] | undefined
                    interval?: number | undefined
                    tcp_failures?: number | undefined
                    timeouts?: number | undefined
                  }
                | undefined
            }
          | undefined
        passive?:
          | {
              healthy?:
                | { http_statuses?: number[] | undefined; successes?: number | undefined }
                | undefined
              type?: string | undefined
              unhealthy?:
                | {
                    http_failures?: number | undefined
                    http_statuses?: number[] | undefined
                    tcp_failures?: number | undefined
                    timeouts?: number | undefined
                  }
                | undefined
            }
          | undefined
        threshold?: number | undefined
      }
    | undefined
  host_header?: string | undefined
  id?: string | undefined
  name?: string | undefined
  slots?: number | undefined
  tags?: string[] | undefined
  use_srv_name?: boolean | undefined
}
type Target = {
  created_at?: number | undefined
  id?: string | undefined
  tags?: string[] | undefined
  target?: string | undefined
  upstream?: { id?: string | undefined } | undefined
  weight?: number | undefined
}
type Vault = {
  config?:
    | {
        prefix?:
          | 'vaults.config.resurrect_ttl'
          | 'vaults.config.neg_ttl'
          | 'vaults.config.ttl'
          | undefined
      }
    | undefined
  created_at?: number | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  prefix?: string | undefined
  tags?: string[] | undefined
  updated_at?: number | undefined
}
type FilterChains = {
  id?: string | undefined
  name?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  enabled?: boolean | undefined
  route?: ({ [x: string]: unknown } | null) | undefined
  service?: string | undefined
  filters?:
    | { name?: string | undefined; enabled?: boolean | undefined; config?: string | undefined }[]
    | undefined
  tags?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | {
            input: {}
            output: {
              version?: string | undefined
              edition?: string | undefined
              tagline?: string | undefined
              node_id?: string | undefined
              hostname?: string | undefined
              timers?: { running?: number | undefined; pending?: number | undefined } | undefined
              plugins?:
                | {
                    available_on_server?:
                      | {
                          [x: string]: {
                            version?: string | undefined
                            priority?: number | undefined
                          }
                        }
                      | undefined
                    enabled_in_cluster?: string[] | undefined
                  }
                | undefined
              lua_version?: string | undefined
              configuration?: { [x: string]: unknown } | undefined
              pids?: { master?: number | undefined; workers?: number[] | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/ca_certificates': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: CACertificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: CACertificate
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: CACertificate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ca_certificates/:ca_certificate_id': {
      $delete:
        | {
            input: { param: { ca_certificate_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ca_certificate_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { ca_certificate_id: string } }
            output: CACertificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ca_certificate_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ca_certificate_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { ca_certificate_id: string } } & {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: CACertificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ca_certificate_id: string } } & {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ca_certificate_id: string } } & {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ca_certificate_id: string } } & {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { ca_certificate_id: string } } & {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: CACertificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ca_certificate_id: string } } & {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ca_certificate_id: string } } & {
              json: { cert: string; cert_digest?: string | undefined; tags?: string[] | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/certificates': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: {
              data?: Certificate[] | undefined
              offset?: PaginationOffsetResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/certificates/:certificate_id': {
      $delete:
        | {
            input: { param: { certificate_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificate_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { certificate_id: string } }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificate_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { certificate_id: string } } & {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string } } & {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { certificate_id: string } } & {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificate_id: string } } & {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { certificate_id: string } } & {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string } } & {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificate_id: string } } & {
              json: {
                cert: string
                key: string
                cert_alt?: string | undefined
                key_alt?: string | undefined
                snis?: string[] | undefined
                tags?: string[] | undefined
                passphrase?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/certificates/:certificate_name_or_id/snis': {
      $get:
        | {
            input: {
              param: { certificate_name_or_id: 'a3ad71a8-6685-4b03-a101-980a953544f6' | 'name' }
            } & {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: {
              data?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    created_at?: number | undefined
                    tags?: string[] | undefined
                    certificate?: { id?: string | undefined } | undefined
                  }[]
                | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { certificate_name_or_id: 'a3ad71a8-6685-4b03-a101-980a953544f6' | 'name' }
            } & {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              param: { certificate_name_or_id: 'a3ad71a8-6685-4b03-a101-980a953544f6' | 'name' }
            } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: SNI
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { certificate_name_or_id: 'a3ad71a8-6685-4b03-a101-980a953544f6' | 'name' }
            } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { certificate_name_or_id: 'a3ad71a8-6685-4b03-a101-980a953544f6' | 'name' }
            } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/certificates/:certificate_id/snis/:sni_name_or_id': {
      $delete:
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } }
            output: SNI
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: SNI
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: SNI
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificate_id: string; sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/consumers': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: { data?: Consumer[] | undefined; offset?: PaginationOffsetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: { username: string; custom_id: string; tags?: string[] | undefined } }
            output: Consumer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { username: string; custom_id: string; tags?: string[] | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { username: string; custom_id: string; tags?: string[] | undefined } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/consumers/:consumer_username_or_id': {
      $delete:
        | {
            input: { param: { consumer_username_or_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { consumer_username_or_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { consumer_username_or_id: string } }
            output: Consumer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_username_or_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { consumer_username_or_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: { username: string; custom_id: string; tags?: string[] | undefined }
            }
            output: Consumer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: { username: string; custom_id: string; tags?: string[] | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: { username: string; custom_id: string; tags?: string[] | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: { username: string; custom_id: string; tags?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: { username: string; custom_id: string; tags?: string[] | undefined }
            }
            output: {
              data?:
                | {
                    id?: string | undefined
                    created_at?: number | undefined
                    username?: string | undefined
                    custom_id?: string | undefined
                    tags?: string[] | undefined
                  }[]
                | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: { username: string; custom_id: string; tags?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: { username: string; custom_id: string; tags?: string[] | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: { username: string; custom_id: string; tags?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/consumers/:consumer_username_or_id/plugins': {
      $get: {
        input: { param: { consumer_username_or_id: string } } & {
          query: {
            size?: number | undefined
            offset?: string | undefined
            tags?: string | undefined
          }
        }
        output: {
          id?: string | undefined
          name?: string | undefined
          created_at?: number | undefined
          route?: (string | null) | undefined
          service?: (string | null) | undefined
          consumer?: (string | null) | undefined
          instance_name?: string | undefined
          config?: { hour?: number | undefined; minute?: number | undefined } | undefined
          protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
          enabled?: boolean | undefined
          tags?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consumer_username_or_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/consumers/:consumer_username_or_id/plugins/:plugin_id': {
      $delete:
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              created_at?: number | undefined
              route?: (string | null) | undefined
              service?: (string | null) | undefined
              consumer?: (string | null) | undefined
              instance_name?: string | undefined
              config?: { hour?: number | undefined; minute?: number | undefined } | undefined
              protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
              enabled?: boolean | undefined
              tags?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              created_at?: number | undefined
              route?: (string | null) | undefined
              service?: (string | null) | undefined
              consumer?: (string | null) | undefined
              instance_name?: string | undefined
              config?: { hour?: number | undefined; minute?: number | undefined } | undefined
              protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
              enabled?: boolean | undefined
              tags?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consumer_username_or_id: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/key-sets': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              tags?: string[] | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: { name?: string | undefined; tags?: string[] | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              tags?: string[] | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name?: string | undefined; tags?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { name?: string | undefined; tags?: string[] | undefined } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/key-sets/:key-set_id_or_name': {
      $delete:
        | {
            input: { param: { 'key-set_id_or_name': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'key-set_id_or_name': string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { 'key-set_id_or_name': string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              tags?: string[] | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'key-set_id_or_name': string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { 'key-set_id_or_name': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { 'key-set_id_or_name': string } } & {
              json: { name?: string | undefined; tags?: string[] | undefined }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              tags?: string[] | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'key-set_id_or_name': string } } & {
              json: { name?: string | undefined; tags?: string[] | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { 'key-set_id_or_name': string } } & {
              json: { name?: string | undefined; tags?: string[] | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { 'key-set_id_or_name': string } } & {
              json: { name?: string | undefined; tags?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { 'key-set_id_or_name': string } } & {
              json: { name?: string | undefined; tags?: string[] | undefined }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              tags?: string[] | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'key-set_id_or_name': string } } & {
              json: { name?: string | undefined; tags?: string[] | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { 'key-set_id_or_name': string } } & {
              json: { name?: string | undefined; tags?: string[] | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/keys': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: { data?: Key[] | undefined; offset?: PaginationOffsetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/keys/:key_id_or_name': {
      $delete:
        | {
            input: { param: { key_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { key_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { key_id_or_name: string } }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { key_id_or_name: string } } & {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id_or_name: string } } & {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key_id_or_name: string } } & {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key_id_or_name: string } } & {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { key_id_or_name: string } } & {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id_or_name: string } } & {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key_id_or_name: string } } & {
              json: {
                set?: { id?: string | undefined } | undefined
                name?: string | undefined
                kid: string
                jwk?: string | undefined
                pem?:
                  | { private_key?: string | undefined; public_key?: string | undefined }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/plugins': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              created_at?: number | undefined
              route?: (string | null) | undefined
              service?: (string | null) | undefined
              consumer?: (string | null) | undefined
              instance_name?: string | undefined
              config?: { hour?: number | undefined; minute?: number | undefined } | undefined
              protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
              enabled?: boolean | undefined
              tags?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/plugins/:plugin_id': {
      $delete:
        | { input: { param: { plugin_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { plugin_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { plugin_id: string } }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { plugin_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | { input: { param: { plugin_id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/routes': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: { data?: Route[] | undefined; offset?: PaginationOffsetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: Route
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/routes/:route_id_or_name': {
      $delete:
        | {
            input: { param: { route_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { route_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { route_id_or_name: string } }
            output: Route
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { route_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: Route
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: Route
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/routes/:route_id_or_name/plugins': {
      $get:
        | {
            input: { param: { route_id_or_name: string } } & {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: { data?: Plugin[] | undefined; offset?: PaginationOffsetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/routes/:route_id_or_name/plugins/:plugin_id': {
      $delete:
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/services': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/services/:service_id_or_name': {
      $delete:
        | {
            input: { param: { service_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { service_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { service_id_or_name: string } }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                retries?: number | undefined
                protocol:
                  | 'grpc'
                  | 'grpcs'
                  | 'http'
                  | 'https'
                  | 'tcp'
                  | 'tls '
                  | 'tls_passthrough'
                  | 'udp'
                  | 'ws'
                  | 'wss'
                host: string
                port: number
                path?: string | undefined
                connect_timeout?: number | undefined
                write_timeout?: number | undefined
                read_timeout?: number | undefined
                tags?: string[] | undefined
                client_certificate?: { id?: string | undefined } | undefined
                tls_verify?: boolean | undefined
                tls_verify_depth?: (string | null) | undefined
                ca_certificates?: string[] | undefined
                enabled: boolean
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/services/:service_id_or_nameplugins': {
      $get: {
        input: { param: { service_id_or_name: string } } & {
          query: {
            size?: number | undefined
            offset?: string | undefined
            tags?: string | undefined
          }
        }
        output: { data?: Plugin[] | undefined; offset?: PaginationOffsetResponse | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/services/:service_id_or_name/plugins/:plugin_id': {
      $delete:
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id_or_name: string; plugin_id: string } } & {
              json: {
                name?: string | undefined
                route?: (string | null) | undefined
                service?: (string | null) | undefined
                consumer?: (string | null) | undefined
                instance_name?: string | undefined
                config?: { hour?: number | undefined; minute?: number | undefined } | undefined
                protocols?: ('http' | 'grpc' | 'grpcs' | 'tls' | 'tcp')[] | undefined
                enabled?: boolean | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/services/:service_id_or_name/routes': {
      $get:
        | {
            input: { param: { service_id_or_name: string } } & {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: { data?: Route[] | undefined; offset?: PaginationOffsetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: Route
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/services/:service_id_or_name/routes/:route_id_or_name': {
      $delete:
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } }
            output: Route
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: Route
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: Route
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { service_id_or_name: string; route_id_or_name: string } } & {
              json: {
                name?: string | undefined
                protocols: string[]
                methods?: string[] | undefined
                hosts?: string[] | undefined
                paths?: string[] | undefined
                headers?:
                  | {
                      'x-my-header'?: string[] | undefined
                      'x-another-header'?: string[] | undefined
                    }
                  | undefined
                https_redirect_status_code: 426 | 301 | 302 | 307 | 308
                regex_priority?: number | undefined
                strip_path?: boolean | undefined
                path_handling?: 'v1' | 'v0' | undefined
                preserve_host: boolean
                request_buffering: boolean
                response_buffering: boolean
                snis?: string[] | undefined
                sources?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                destinations?: { ip?: string | undefined; port?: number | undefined }[] | undefined
                tags?: string[] | undefined
                service?: { id?: string | undefined } | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/snis': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: {
              data?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    created_at?: number | undefined
                    tags?: string[] | undefined
                    certificate?: { id?: string | undefined } | undefined
                  }[]
                | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: {
              data?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    created_at?: number | undefined
                    tags?: string[] | undefined
                    certificate?: { id?: string | undefined } | undefined
                  }[]
                | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/snis/:sni_name_or_id': {
      $delete:
        | {
            input: { param: { sni_name_or_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sni_name_or_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { sni_name_or_id: string } }
            output: {
              data?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    created_at?: number | undefined
                    tags?: string[] | undefined
                    certificate?: { id?: string | undefined } | undefined
                  }[]
                | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sni_name_or_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sni_name_or_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: {
              data?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    created_at?: number | undefined
                    tags?: string[] | undefined
                    certificate?: { id?: string | undefined } | undefined
                  }[]
                | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: {
              data?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    created_at?: number | undefined
                    tags?: string[] | undefined
                    certificate?: { id?: string | undefined } | undefined
                  }[]
                | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sni_name_or_id: string } } & {
              json: {
                name: string
                tags?: string[] | undefined
                certificate: { id?: string | undefined }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/upstreams': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: { data?: Upstream[] | undefined; offset?: PaginationOffsetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: Upstream
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/upstreams/:upstream_id_or_name': {
      $delete:
        | {
            input: { param: { upstream_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { upstream_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { upstream_id_or_name: string } }
            output: Upstream
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upstream_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upstream_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: Upstream
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: Upstream
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                name: string
                algorithm?:
                  | 'consistent-hashing'
                  | 'least-connections'
                  | 'round-robin'
                  | 'latency'
                  | undefined
                hash_on?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_fallback?:
                  | 'none'
                  | 'consumer'
                  | 'ip'
                  | 'cookie'
                  | 'uri_capture'
                  | 'path'
                  | 'query_arg'
                  | undefined
                hash_on_header?: string | undefined
                hash_fallback_header?: string | undefined
                hash_on_cookie?: string | undefined
                hash_on_cookie_path?: string | undefined
                hash_on_query_arg?: string | undefined
                hash_fallback_query_arg?: string | undefined
                hash_on_uri_capture?: string | undefined
                hash_fallback_uri_capture?: string | undefined
                slots?: number | undefined
                healthchecks?:
                  | {
                      passive?:
                        | {
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            healthy?:
                              | {
                                  http_statuses?:
                                    | (
                                        | 200
                                        | 201
                                        | 202
                                        | 203
                                        | 204
                                        | 205
                                        | 206
                                        | 207
                                        | 208
                                        | 226
                                        | 300
                                        | 301
                                        | 302
                                        | 303
                                        | 304
                                        | 305
                                        | 306
                                        | 307
                                        | 308
                                      )[]
                                    | undefined
                                  successes?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_statuses?: (429 | 500 | 503)[] | undefined
                                  timeouts?: number | undefined
                                  http_failures?: number | undefined
                                  tcp_failures?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      active?:
                        | {
                            https_verify_certificate?: boolean | undefined
                            healthy?:
                              | {
                                  http_statuses?: number[] | undefined
                                  successes?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            unhealthy?:
                              | {
                                  http_failures?: number | undefined
                                  http_statuses?: number[] | undefined
                                  timeouts?: number | undefined
                                  tcp_failures?: number | undefined
                                  interval?: number | undefined
                                }
                              | undefined
                            type?: 'tcp' | 'http' | 'https' | 'grpc' | 'grpcs' | undefined
                            concurrency?: number | undefined
                            headers?: { [x: string]: unknown } | undefined
                            timeout?: number | undefined
                            http_path?: string | undefined
                            https_sni?: string | undefined
                          }
                        | undefined
                      threshold?: number | undefined
                    }
                  | undefined
                tags?: string[] | undefined
                host_header?: string | undefined
                client_certificate?: { id?: string | undefined } | undefined
                use_srv_name?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/upstreams/:upstream_id_or_name/targets': {
      $get:
        | {
            input: { param: { upstream_id_or_name: string } } & {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: { data?: Target[] | undefined; offset?: PaginationOffsetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upstream_id_or_name: string } } & {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: Target
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upstream_id_or_name: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target': {
      $delete:
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } }
            output: Target
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: Target
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: Target
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upstream_id_or_name: string; target_id_or_target: string } } & {
              json: {
                target?: string | undefined
                weight?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/vaults': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: { data?: Vault[] | undefined; offset?: PaginationOffsetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                offset?: string | undefined
                tags?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: Vault
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/vaults/:vault_id_or_prefix': {
      $delete:
        | {
            input: { param: { vault_id_or_prefix: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { vault_id_or_prefix: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { vault_id_or_prefix: string } }
            output: Vault
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id_or_prefix: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id_or_prefix: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { vault_id_or_prefix: string } } & {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: Vault
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id_or_prefix: string } } & {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id_or_prefix: string } } & {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id_or_prefix: string } } & {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { vault_id_or_prefix: string } } & {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: Vault
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id_or_prefix: string } } & {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id_or_prefix: string } } & {
              json: {
                prefix?: string | undefined
                name?: string | undefined
                description?: string | undefined
                config?: { prefix?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/endpoints': {
      $get:
        | { input: {}; output: { data?: string[] | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/:endpoint': {
      $head:
        | { input: { param: { endpoint: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { endpoint: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | { input: { param: { endpoint: string } }; output: {}; outputFormat: string; status: 404 }
      $options:
        | { input: { param: { endpoint: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { endpoint: string } }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { param: { endpoint: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/schemas/:entity': {
      $get:
        | {
            input: { param: { entity: string } }
            output: {
              fields?:
                | {
                    id?:
                      | {
                          auto?: boolean | undefined
                          type?: string | undefined
                          uuid?: boolean | undefined
                        }
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entity: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/schemas/:entity/validate': {
      $post:
        | {
            input: { param: { entity: string } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entity: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/schemas/filters/:filter_name': {
      $get:
        | {
            input: { param: { filter_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { filter_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/schemas/plugins/:plugin_name': {
      $get:
        | {
            input: { param: { plugin_name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { plugin_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/schemas/plugins/validate': {
      $post:
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/timers': {
      $get:
        | {
            input: {}
            output: {
              stats?:
                | {
                    sys?:
                      | {
                          total?: number | undefined
                          waiting?: number | undefined
                          runs?: number | undefined
                          pending?: number | undefined
                          running?: number | undefined
                        }
                      | undefined
                    flamegraph?:
                      | {
                          pending?: string | undefined
                          running?: string | undefined
                          elapsed_time?: string | undefined
                        }
                      | undefined
                    timers?: { meta?: { name?: string | undefined } | undefined } | undefined
                  }
                | undefined
              worker?: { id?: number | undefined; count?: number | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/status': {
      $get:
        | {
            input: {}
            output: {
              memory?:
                | {
                    lua_shared_dicts?:
                      | {
                          kong_core_db_cache?:
                            | {
                                capacity?: string | undefined
                                allocated_slabs?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    workers_lua_vms?:
                      | { http_allocated_gc?: string | undefined; pid?: number | undefined }[]
                      | undefined
                  }
                | undefined
              database?: { reachable?: boolean | undefined } | undefined
              server?:
                | {
                    connections_reading?: number | undefined
                    connections_writing?: number | undefined
                    total_requests?: number | undefined
                    connections_waiting?: number | undefined
                    connections_handled?: number | undefined
                    connections_active?: number | undefined
                    connections_accepted?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/status/dns': {
      $get:
        | {
            input: {}
            output: {
              worker?: { id?: number | undefined; count?: number | undefined } | undefined
              stats?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 501 }
    }
  } & {
    '/tags': {
      $get:
        | {
            input: {}
            output: {
              data?:
                | {
                    entity_name?: string | undefined
                    entity_id?: string | undefined
                    tag?: string | undefined
                  }[]
                | undefined
              offset?: string | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/tags/:tags': {
      $get:
        | {
            input: { param: { tags: string } }
            output: {
              data?:
                | {
                    entity_name?: string | undefined
                    entity_id?: string | undefined
                    tag?: string | undefined
                  }[]
                | undefined
              offset?: string | undefined
              next?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tags: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/debug/cluster/control-planes-nodes/log-level/:log_level': {
      $put:
        | {
            input: { param: { log_level: 'info' | 'notice' | 'warn' | 'error' | 'crit' } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { log_level: 'info' | 'notice' | 'warn' | 'error' | 'crit' } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/debug/cluster/log-level/:log_level': {
      $put:
        | {
            input: { param: { log_level: 'info' | 'notice' | 'warn' | 'error' | 'crit' } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { log_level: 'info' | 'notice' | 'warn' | 'error' | 'crit' } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/debug/node/log-level': {
      $get:
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/debug/node/log-level/:log_level': {
      $put:
        | {
            input: { param: { log_level: 'info' | 'notice' | 'warn' | 'error' | 'crit' } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { log_level: 'info' | 'notice' | 'warn' | 'error' | 'crit' } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/schemas/vaults/:vault_name': {
      $get:
        | {
            input: { param: { vault_name: string } }
            output: Vault
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { vault_name: string } } & { json: { schemaData?: string | undefined } }
            output: { validation?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_name: string } } & { json: { schemaData?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { vault_name: string } } & { json: { schemaData?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/filter-chains': {
      $post:
        | {
            input: {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: FilterChains
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | { input: {}; output: FilterChains; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/routes/:route_id_or_name/filter-chains': {
      $post:
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: FilterChains
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get: {
        input: { param: { route_id_or_name: string } }
        output: FilterChains
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: FilterChains
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { route_id_or_name: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/services/:service_id_or_name/filter-chains': {
      $post:
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: FilterChains
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { service_id_or_name: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { service_id_or_name: string } }
            output: FilterChains
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/filter-chains/:filter_chain_id': {
      $get: {
        input: { param: { filter_chain_id: string } }
        output: FilterChains
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { filter_chain_id: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: FilterChains
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { filter_chain_id: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { filter_chain_id: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { filter_chain_id: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { filter_chain_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { filter_chain_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/routes/:route_id_or_name/filter-chains/:filter_chain_id': {
      $get:
        | {
            input: { param: { route_id_or_name: string; filter_chain_id: string } }
            output: FilterChains
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string; filter_chain_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { route_id_or_name: string; filter_chain_id: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { route_id_or_name: string; filter_chain_id: string } } & {
              json: {
                enabled?: boolean | undefined
                filters?:
                  | {
                      name?: string | undefined
                      config?: string | undefined
                      enabled?: boolean | undefined
                    }[]
                  | undefined
                id?: string | undefined
                name?: string | undefined
                route?: { id?: string | undefined } | undefined
                service?: { id?: string | undefined } | undefined
                tags?: string[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/routes/:route_id_or_name/:filter_chain_id': {
      $delete:
        | {
            input: { param: { filter_chain_id: string; route_id_or_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { filter_chain_id: string; route_id_or_name: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/services/:service_id_or_name/filter-chains/:filter_chain_id': {
      $delete:
        | {
            input: { param: { service_id_or_name: string; filter_chain_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { service_id_or_name: string; filter_chain_id: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/clustering/data-planes': {
      $get:
        | {
            input: {}
            output: {
              data?:
                | {
                    ip?: string | undefined
                    updated_at?: number | undefined
                    config_hash?: string | undefined
                    sync_status?: string | undefined
                    version?: string | undefined
                    id?: string | undefined
                    hostname?: string | undefined
                    ttl?: number | undefined
                    last_seen?: number | undefined
                    labels?:
                      | { deployment?: string | undefined; region?: string | undefined }
                      | undefined
                    cert_details?: { expiry_timestamp?: number | undefined } | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/clustering/status': {
      $get:
        | {
            input: {}
            output: {
              [x: string]: {
                config_hash?: string | undefined
                hostname?: string | undefined
                ip?: string | undefined
                last_seen?: number | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/cache/:key': {
      $get:
        | {
            input: { param: { key: string } }
            output: { ttl?: number | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete: { input: { param: { key: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & { '/cache': { $delete: { input: {}; output: {}; outputFormat: string; status: 204 } } } & {
    '/config': {
      $post: {
        input: { json: { [x: string]: unknown } } & { form: { config?: File | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {}
        output: { config?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
