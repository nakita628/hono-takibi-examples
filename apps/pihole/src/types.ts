declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/auth': {
      $get:
        | {
            input: {}
            output: {
              session: {
                valid: boolean
                totp: boolean
                sid: string | null
                csrf?: (string | null) | undefined
                validity: number
                message: string | null
              }
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              session: {
                valid: boolean
                totp: boolean
                sid: string | null
                csrf?: (string | null) | undefined
                validity: number
                message: string | null
              }
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: { password?: string | undefined; totp?: number | undefined } }
            output: {
              session: {
                valid: boolean
                totp: boolean
                sid: string | null
                csrf?: (string | null) | undefined
                validity: number
                message: string | null
              }
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { password?: string | undefined; totp?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { password?: string | undefined; totp?: number | undefined } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { password?: string | undefined; totp?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | {
            input: {}
            output: {
              session: {
                valid: boolean
                totp: boolean
                sid: string | null
                csrf?: (string | null) | undefined
                validity: number
                message: string | null
              }
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | { input: {}; output: { took?: number | undefined }; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/auth/session/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/auth/sessions': {
      $get:
        | {
            input: {}
            output: {
              sessions?:
                | {
                    id?: number | undefined
                    current_session?: boolean | undefined
                    valid?: boolean | undefined
                    tls?: { login?: boolean | undefined; mixed?: boolean | undefined } | undefined
                    app?: boolean | undefined
                    cli?: boolean | undefined
                    login_at?: number | undefined
                    last_active?: number | undefined
                    valid_until?: number | undefined
                    remote_addr?: string | undefined
                    user_agent?: (string | null) | undefined
                    x_forwarded_for?: (string | null) | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/auth/totp': {
      $get:
        | {
            input: {}
            output: {
              totp?:
                | {
                    type?: string | undefined
                    account?: string | undefined
                    issuer?: string | undefined
                    algorithm?: string | undefined
                    digits?: number | undefined
                    period?: number | undefined
                    offset?: number | undefined
                    secret?: string | undefined
                    codes?: number[] | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/auth/app': {
      $get:
        | {
            input: {}
            output: {
              app?: { password?: string | undefined; hash?: string | undefined } | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/summary': {
      $get:
        | {
            input: {}
            output: {
              queries?:
                | {
                    total?: number | undefined
                    blocked?: number | undefined
                    percent_blocked?: number | undefined
                    unique_domains?: number | undefined
                    forwarded?: number | undefined
                    cached?: number | undefined
                    frequency?: number | undefined
                    types?:
                      | {
                          A?: number | undefined
                          AAAA?: number | undefined
                          ANY?: number | undefined
                          SRV?: number | undefined
                          SOA?: number | undefined
                          PTR?: number | undefined
                          TXT?: number | undefined
                          NAPTR?: number | undefined
                          MX?: number | undefined
                          DS?: number | undefined
                          RRSIG?: number | undefined
                          DNSKEY?: number | undefined
                          NS?: number | undefined
                          SVCB?: number | undefined
                          HTTPS?: number | undefined
                          OTHER?: number | undefined
                        }
                      | undefined
                    status?:
                      | {
                          UNKNOWN?: number | undefined
                          GRAVITY?: number | undefined
                          FORWARDED?: number | undefined
                          CACHE?: number | undefined
                          REGEX?: number | undefined
                          DENYLIST?: number | undefined
                          EXTERNAL_BLOCKED_IP?: number | undefined
                          EXTERNAL_BLOCKED_NULL?: number | undefined
                          EXTERNAL_BLOCKED_NXRA?: number | undefined
                          GRAVITY_CNAME?: number | undefined
                          REGEX_CNAME?: number | undefined
                          DENYLIST_CNAME?: number | undefined
                          RETRIED?: number | undefined
                          RETRIED_DNSSEC?: number | undefined
                          IN_PROGRESS?: number | undefined
                          DBBUSY?: number | undefined
                          SPECIAL_DOMAIN?: number | undefined
                          CACHE_STALE?: number | undefined
                          EXTERNAL_BLOCKED_EDE15?: number | undefined
                        }
                      | undefined
                    replies?:
                      | {
                          UNKNOWN?: number | undefined
                          NODATA?: number | undefined
                          NXDOMAIN?: number | undefined
                          CNAME?: number | undefined
                          IP?: number | undefined
                          DOMAIN?: number | undefined
                          RRNAME?: number | undefined
                          SERVFAIL?: number | undefined
                          REFUSED?: number | undefined
                          NOTIMP?: number | undefined
                          OTHER?: number | undefined
                          DNSSEC?: number | undefined
                          NONE?: number | undefined
                          BLOB?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              clients?: { active?: number | undefined; total?: number | undefined } | undefined
              gravity?:
                | { domains_being_blocked?: number | undefined; last_update?: number | undefined }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/database/summary': {
      $get:
        | {
            input: { query: { from: number; until: number } }
            output: {
              sum_queries?: number | undefined
              sum_blocked?: number | undefined
              percent_blocked?: number | undefined
              total_clients?: number | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: number; until: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/upstreams': {
      $get:
        | {
            input: {}
            output: {
              upstreams?:
                | {
                    ip?: (string | null) | undefined
                    name?: (string | null) | undefined
                    port?: number | undefined
                    count?: number | undefined
                    statistics?:
                      | { response?: number | undefined; variance?: number | undefined }
                      | undefined
                  }[]
                | undefined
              forwarded_queries?: number | undefined
              total_queries?: number | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/database/upstreams': {
      $get:
        | {
            input: { query: { from: number; until: number } }
            output: {
              upstreams?:
                | {
                    ip?: (string | null) | undefined
                    name?: (string | null) | undefined
                    port?: number | undefined
                    count?: number | undefined
                    statistics?:
                      | { response?: number | undefined; variance?: number | undefined }
                      | undefined
                  }[]
                | undefined
              forwarded_queries?: number | undefined
              total_queries?: number | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: number; until: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/top_domains': {
      $get:
        | {
            input: { query: { blocked?: boolean | undefined; count?: number | undefined } }
            output: {
              domains?: { domain?: string | undefined; count?: number | undefined }[] | undefined
              total_queries?: number | undefined
              blocked_queries?: number | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { blocked?: boolean | undefined; count?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/database/top_domains': {
      $get:
        | {
            input: {
              query: {
                from: number
                until: number
                blocked?: boolean | undefined
                count?: number | undefined
              }
            }
            output: {
              domains?: { domain?: string | undefined; count?: number | undefined }[] | undefined
              total_queries?: number | undefined
              blocked_queries?: number | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from: number
                until: number
                blocked?: boolean | undefined
                count?: number | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/top_clients': {
      $get:
        | {
            input: { query: { blocked?: boolean | undefined; count?: number | undefined } }
            output: {
              clients?:
                | {
                    ip?: string | undefined
                    name?: string | undefined
                    count?: number | undefined
                  }[]
                | undefined
              total_queries?: number | undefined
              blocked_queries?: number | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { blocked?: boolean | undefined; count?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/database/top_clients': {
      $get:
        | {
            input: {
              query: {
                from: number
                until: number
                blocked?: boolean | undefined
                count?: number | undefined
              }
            }
            output: {
              clients?:
                | {
                    ip?: string | undefined
                    name?: string | undefined
                    count?: number | undefined
                  }[]
                | undefined
              total_queries?: number | undefined
              blocked_queries?: number | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from: number
                until: number
                blocked?: boolean | undefined
                count?: number | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/query_types': {
      $get:
        | {
            input: {}
            output: {
              types?:
                | {
                    A?: number | undefined
                    AAAA?: number | undefined
                    ANY?: number | undefined
                    SRV?: number | undefined
                    SOA?: number | undefined
                    PTR?: number | undefined
                    TXT?: number | undefined
                    NAPTR?: number | undefined
                    MX?: number | undefined
                    DS?: number | undefined
                    RRSIG?: number | undefined
                    DNSKEY?: number | undefined
                    NS?: number | undefined
                    SVCB?: number | undefined
                    HTTPS?: number | undefined
                    OTHER?: number | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/database/query_types': {
      $get:
        | {
            input: { query: { from: number; until: number } }
            output: {
              types?:
                | {
                    A?: number | undefined
                    AAAA?: number | undefined
                    ANY?: number | undefined
                    SRV?: number | undefined
                    SOA?: number | undefined
                    PTR?: number | undefined
                    TXT?: number | undefined
                    NAPTR?: number | undefined
                    MX?: number | undefined
                    DS?: number | undefined
                    RRSIG?: number | undefined
                    DNSKEY?: number | undefined
                    NS?: number | undefined
                    SVCB?: number | undefined
                    HTTPS?: number | undefined
                    OTHER?: number | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: number; until: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/stats/recent_blocked': {
      $get:
        | {
            input: { query: { count?: number | undefined } }
            output: { blocked?: string[] | undefined; took?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { count?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/history': {
      $get:
        | {
            input: {}
            output: {
              history?:
                | {
                    timestamp?: number | undefined
                    total?: number | undefined
                    cached?: number | undefined
                    blocked?: number | undefined
                    forwarded?: number | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/history/clients': {
      $get:
        | {
            input: { query: { N?: number | undefined } }
            output: {
              clients?:
                | {
                    [x: string]: { name?: (string | null) | undefined; total?: number | undefined }
                  }
                | undefined
              history?:
                | { timestamp?: number | undefined; data?: { [x: string]: number } | undefined }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { N?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/history/database': {
      $get:
        | {
            input: { query: { from: number; until: number } }
            output: {
              history?:
                | {
                    timestamp?: number | undefined
                    total?: number | undefined
                    cached?: number | undefined
                    blocked?: number | undefined
                    forwarded?: number | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: number; until: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/history/database/clients': {
      $get:
        | {
            input: { query: { from: number; until: number } }
            output: {
              clients?:
                | {
                    [x: string]: { name?: (string | null) | undefined; total?: number | undefined }
                  }
                | undefined
              history?:
                | { timestamp?: number | undefined; data?: { [x: string]: number } | undefined }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: number; until: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/queries': {
      $get:
        | {
            input: {
              query: {
                from?: number | undefined
                until?: number | undefined
                length?: number | undefined
                start?: number | undefined
                cursor?: number | undefined
                domain?: string | undefined
                client_ip?: string | undefined
                client_name?: string | undefined
                upstream?: string | undefined
                type?: string | undefined
                status?: string | undefined
                reply?: string | undefined
                dnssec?: string | undefined
                disk?: boolean | undefined
              }
            }
            output: {
              queries?:
                | {
                    id?: number | undefined
                    time?: number | undefined
                    type?: string | undefined
                    domain?: string | undefined
                    cname?: (string | null) | undefined
                    status?: (string | null) | undefined
                    client?:
                      | { ip?: string | undefined; name?: (string | null) | undefined }
                      | undefined
                    dnssec?: (string | null) | undefined
                    reply?:
                      | { type?: (string | null) | undefined; time?: number | undefined }
                      | undefined
                    list_id?: (number | null) | undefined
                    upstream?: (string | null) | undefined
                    ede?:
                      | { code?: number | undefined; text?: (string | null) | undefined }
                      | undefined
                  }[]
                | undefined
              cursor?: (number | null) | undefined
              recordsTotal?: number | undefined
              recordsFiltered?: number | undefined
              draw?: number | undefined
              earliest_timestamp?: number | undefined
              earliest_timestamp_disk?: number | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: number | undefined
                until?: number | undefined
                length?: number | undefined
                start?: number | undefined
                cursor?: number | undefined
                domain?: string | undefined
                client_ip?: string | undefined
                client_name?: string | undefined
                upstream?: string | undefined
                type?: string | undefined
                status?: string | undefined
                reply?: string | undefined
                dnssec?: string | undefined
                disk?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/queries/suggestions': {
      $get:
        | {
            input: {}
            output: {
              suggestions?:
                | {
                    domain?: string[] | undefined
                    client_ip?: string[] | undefined
                    client_name?: string[] | undefined
                    upstream?: string[] | undefined
                    type?: string[] | undefined
                    status?: string[] | undefined
                    reply?: string[] | undefined
                    dnssec?: string[] | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/dns/blocking': {
      $get: {
        input: {}
        output: {
          blocking?: 'enabled' | 'disabled' | 'failed' | 'unknown' | undefined
          timer?: (number | null) | undefined
          took?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { blocking?: boolean | undefined; timer?: (number | null) | undefined } }
            output: {
              blocking?: 'enabled' | 'disabled' | 'failed' | 'unknown' | undefined
              timer?: (number | null) | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { blocking?: boolean | undefined; timer?: (number | null) | undefined } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { blocking?: boolean | undefined; timer?: (number | null) | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/domains/:type/:kind/:domain': {
      $put:
        | {
            input: {
              param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex'; domain: string }
            } & {
              json: {
                type?: 'allow' | 'deny' | undefined
                kind?: 'exact' | 'regex' | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
                took?: number | undefined
              }
            }
            output: {
              domains?:
                | {
                    domain?: string | undefined
                    unicode?: string | undefined
                    type?: 'allow' | 'deny' | undefined
                    kind?: 'exact' | 'regex' | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                  }[]
                | undefined
              processed?:
                | ({
                    success?: { item?: string | undefined }[] | undefined
                    errors?: { item?: string | undefined; error?: string | undefined }[] | undefined
                  } | null)
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex'; domain: string }
            } & {
              json: {
                type?: 'allow' | 'deny' | undefined
                kind?: 'exact' | 'regex' | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
                took?: number | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex'; domain: string }
            } & {
              json: {
                type?: 'allow' | 'deny' | undefined
                kind?: 'exact' | 'regex' | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
                took?: number | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex'; domain: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex'; domain: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex'; domain: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex'; domain: string } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/domains/:type/:kind': {
      $post:
        | {
            input: { param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex' } } & {
              json: {
                domain?: string | string[] | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              domains?:
                | {
                    domain?: string | undefined
                    unicode?: string | undefined
                    type?: 'allow' | 'deny' | undefined
                    kind?: 'exact' | 'regex' | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                  }[]
                | undefined
              processed?:
                | ({
                    success?: { item?: string | undefined }[] | undefined
                    errors?: { item?: string | undefined; error?: string | undefined }[] | undefined
                  } | null)
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex' } } & {
              json: {
                domain?: string | string[] | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: 'allow' | 'deny'; kind: 'exact' | 'regex' } } & {
              json: {
                domain?: string | string[] | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/domains:batchDelete': {
      $post:
        | {
            input: { json: { item: string; type: 'allow' | 'deny'; kind: 'exact' | 'regex' }[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { item: string; type: 'allow' | 'deny'; kind: 'exact' | 'regex' }[] }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { item: string; type: 'allow' | 'deny'; kind: 'exact' | 'regex' }[] }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { item: string; type: 'allow' | 'deny'; kind: 'exact' | 'regex' }[] }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/groups/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: {
              groups?:
                | {
                    name?: string | undefined
                    comment?: (string | null) | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { name: string } } & {
              json: {
                name?: string | undefined
                comment?: (string | null) | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              groups?:
                | {
                    name?: string | undefined
                    comment?: (string | null) | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                  }[]
                | undefined
              processed?:
                | ({
                    success?: { item?: string | undefined }[] | undefined
                    errors?: { item?: string | undefined; error?: string | undefined }[] | undefined
                  } | null)
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              json: {
                name?: string | undefined
                comment?: (string | null) | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              json: {
                name?: string | undefined
                comment?: (string | null) | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { name: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/groups': {
      $get:
        | {
            input: {}
            output: {
              groups?:
                | {
                    name?: string | undefined
                    comment?: (string | null) | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                name?: string | string[] | undefined
                comment?: (string | null) | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              groups?:
                | {
                    name?: string | undefined
                    comment?: (string | null) | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                  }[]
                | undefined
              processed?:
                | ({
                    success?: { item?: string | undefined }[] | undefined
                    errors?: { item?: string | undefined; error?: string | undefined }[] | undefined
                  } | null)
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name?: string | string[] | undefined
                comment?: (string | null) | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name?: string | string[] | undefined
                comment?: (string | null) | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/groups:batchDelete': {
      $post:
        | { input: { json: { item: string }[] }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: { item: string }[] }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { item: string }[] }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { item: string }[] }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/clients/:client': {
      $get:
        | {
            input: { param: { client: string } }
            output: {
              clients?:
                | {
                    client?: string | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                    name?: (string | null) | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { client: string } } & {
              json: {
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                took?: number | undefined
              }
            }
            output: {
              clients?:
                | {
                    client?: string | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                    name?: (string | null) | undefined
                  }[]
                | undefined
              processed?:
                | ({
                    success?: { item?: string | undefined }[] | undefined
                    errors?: { item?: string | undefined; error?: string | undefined }[] | undefined
                  } | null)
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client: string } } & {
              json: {
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                took?: number | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { client: string } } & {
              json: {
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                took?: number | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: { param: { client: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { client: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { client: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client: string } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/clients': {
      $get:
        | {
            input: {}
            output: {
              clients?:
                | {
                    client?: string | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                    name?: (string | null) | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                client?: string | string[] | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                took?: number | undefined
              }
            }
            output: {
              clients?:
                | {
                    client?: string | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                    name?: (string | null) | undefined
                  }[]
                | undefined
              processed?:
                | ({
                    success?: { item?: string | undefined }[] | undefined
                    errors?: { item?: string | undefined; error?: string | undefined }[] | undefined
                  } | null)
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                client?: string | string[] | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                took?: number | undefined
              }
            }
            output: {
              took?: number | undefined
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                client?: string | string[] | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                took?: number | undefined
              }
            }
            output: {
              took?: number | undefined
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/clients:batchDelete': {
      $post:
        | { input: { json: { item: string }[] }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: { item: string }[] }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { item: string }[] }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { item: string }[] }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/clients/_suggestions': {
      $get:
        | {
            input: { query: { count?: number | undefined } }
            output: {
              clients?:
                | {
                    hwaddr?: (string | null) | undefined
                    macVendor?: (string | null) | undefined
                    lastQuery?: number | undefined
                    addresses?: (string | null) | undefined
                    names?: (string | null) | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { count?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/lists/:list': {
      $get:
        | {
            input: { param: { list: string } } & { query: { type?: 'allow' | 'block' | undefined } }
            output: {
              lists?:
                | {
                    address?: string | undefined
                    type?: 'allow' | 'block' | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                    date_updated?: number | undefined
                    number?: number | undefined
                    invalid_domains?: number | undefined
                    abp_entries?: number | undefined
                    status?: number | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { list: string } } & { query: { type?: 'allow' | 'block' | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { list: string } } & { query: { type: 'allow' | 'block' } } & {
              json: {
                comment?: (string | null) | undefined
                type?: 'allow' | 'block' | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              lists?:
                | {
                    address?: string | undefined
                    type?: 'allow' | 'block' | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                    date_updated?: number | undefined
                    number?: number | undefined
                    invalid_domains?: number | undefined
                    abp_entries?: number | undefined
                    status?: number | undefined
                  }[]
                | undefined
              processed?:
                | ({
                    success?: { item?: string | undefined }[] | undefined
                    errors?: { item?: string | undefined; error?: string | undefined }[] | undefined
                  } | null)
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { list: string } } & { query: { type: 'allow' | 'block' } } & {
              json: {
                comment?: (string | null) | undefined
                type?: 'allow' | 'block' | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { list: string } } & { query: { type: 'allow' | 'block' } } & {
              json: {
                comment?: (string | null) | undefined
                type?: 'allow' | 'block' | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { list: string } } & { query: { type: 'allow' | 'block' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { list: string } } & { query: { type: 'allow' | 'block' } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { list: string } } & { query: { type: 'allow' | 'block' } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { list: string } } & { query: { type: 'allow' | 'block' } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/lists': {
      $get:
        | {
            input: { query: { type?: 'allow' | 'block' | undefined } }
            output: {
              lists?:
                | {
                    address?: string | undefined
                    type?: 'allow' | 'block' | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                    date_updated?: number | undefined
                    number?: number | undefined
                    invalid_domains?: number | undefined
                    abp_entries?: number | undefined
                    status?: number | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type?: 'allow' | 'block' | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { query: { type: 'allow' | 'block' } } & {
              json: {
                address?: string | string[] | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              lists?:
                | {
                    address?: string | undefined
                    type?: 'allow' | 'block' | undefined
                    comment?: (string | null) | undefined
                    groups?: number[] | undefined
                    enabled?: boolean | undefined
                    id?: number | undefined
                    date_added?: number | undefined
                    date_modified?: number | undefined
                    date_updated?: number | undefined
                    number?: number | undefined
                    invalid_domains?: number | undefined
                    abp_entries?: number | undefined
                    status?: number | undefined
                  }[]
                | undefined
              processed?:
                | ({
                    success?: { item?: string | undefined }[] | undefined
                    errors?: { item?: string | undefined; error?: string | undefined }[] | undefined
                  } | null)
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { type: 'allow' | 'block' } } & {
              json: {
                address?: string | string[] | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { type: 'allow' | 'block' } } & {
              json: {
                address?: string | string[] | undefined
                comment?: (string | null) | undefined
                groups?: number[] | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/lists:batchDelete': {
      $post:
        | {
            input: { json: { item?: string | undefined; type?: 'allow' | 'block' | undefined }[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { item?: string | undefined; type?: 'allow' | 'block' | undefined }[] }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { item?: string | undefined; type?: 'allow' | 'block' | undefined }[] }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { item?: string | undefined; type?: 'allow' | 'block' | undefined }[] }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/info/client': {
      $get: {
        input: {}
        output: {
          remote_addr?: string | undefined
          http_version?: string | undefined
          method?: string | undefined
          headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
          took?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info/system': {
      $get:
        | {
            input: {}
            output: {
              system?:
                | {
                    uptime?: number | undefined
                    memory?:
                      | {
                          ram?:
                            | {
                                total?: number | undefined
                                free?: number | undefined
                                used?: number | undefined
                                available?: number | undefined
                                '%used'?: number | undefined
                              }
                            | undefined
                          swap?:
                            | {
                                total?: number | undefined
                                used?: number | undefined
                                free?: number | undefined
                                '%used'?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    procs?: number | undefined
                    cpu?:
                      | {
                          nprocs?: number | undefined
                          '%cpu'?: number | undefined
                          load?:
                            | { raw?: number[] | undefined; percent?: number[] | undefined }
                            | undefined
                        }
                      | undefined
                    ftl?: { '%mem'?: number | undefined; '%cpu'?: number | undefined } | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/info/database': {
      $get: {
        input: {}
        output: {
          size?: number | undefined
          type?: string | undefined
          mode?: string | undefined
          atime?: number | undefined
          mtime?: number | undefined
          ctime?: number | undefined
          owner?:
            | {
                user?:
                  | {
                      uid?: number | undefined
                      name?: string | undefined
                      info?: string | undefined
                    }
                  | undefined
                group?: { gid?: number | undefined; name?: string | undefined } | undefined
              }
            | undefined
          queries?: number | undefined
          earliest_timestamp?: number | undefined
          queries_disk?: number | undefined
          earliest_timestamp_disk?: number | undefined
          sqlite_version?: string | undefined
          took?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info/ftl': {
      $get:
        | {
            input: {}
            output: {
              ftl?:
                | {
                    database?:
                      | {
                          gravity?: number | undefined
                          antigravity?: number | undefined
                          groups?: number | undefined
                          lists?: number | undefined
                          clients?: number | undefined
                          domains?:
                            | {
                                allowed?:
                                  | { total?: number | undefined; enabled?: number | undefined }
                                  | undefined
                                denied?:
                                  | { total?: number | undefined; enabled?: number | undefined }
                                  | undefined
                              }
                            | undefined
                          regex?:
                            | {
                                allowed?:
                                  | { total?: number | undefined; enabled?: number | undefined }
                                  | undefined
                                denied?:
                                  | { total?: number | undefined; enabled?: number | undefined }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    privacy_level?: number | undefined
                    query_frequency?: number | undefined
                    clients?:
                      | { total?: number | undefined; active?: number | undefined }
                      | undefined
                    pid?: number | undefined
                    uptime?: number | undefined
                    '%mem'?: number | undefined
                    '%cpu'?: number | undefined
                    allow_destructive?: boolean | undefined
                    dnsmasq?:
                      | {
                          dns_cache_inserted?: number | undefined
                          dns_cache_live_freed?: number | undefined
                          dns_queries_forwarded?: number | undefined
                          dns_auth_answered?: number | undefined
                          dns_local_answered?: number | undefined
                          dns_stale_answered?: number | undefined
                          dns_unanswered?: number | undefined
                          bootp?: number | undefined
                          pxe?: number | undefined
                          dhcp_ack?: number | undefined
                          dhcp_decline?: number | undefined
                          dhcp_discover?: number | undefined
                          dhcp_inform?: number | undefined
                          dhcp_nak?: number | undefined
                          dhcp_offer?: number | undefined
                          dhcp_release?: number | undefined
                          dhcp_request?: number | undefined
                          noanswer?: number | undefined
                          leases_allocated_4?: number | undefined
                          leases_pruned_4?: number | undefined
                          leases_allocated_6?: number | undefined
                          leases_pruned_6?: number | undefined
                          tcp_connections?: number | undefined
                          dhcp_leasequery?: number | undefined
                          dhcp_lease_unassigned?: number | undefined
                          dhcp_lease_actve?: number | undefined
                          dhcp_lease_unknown?: number | undefined
                          dnssec_max_crypto_use?: number | undefined
                          dnssec_max_sig_fail?: number | undefined
                          dnssec_max_work?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/info/host': {
      $get:
        | {
            input: {}
            output: {
              host?:
                | {
                    uname?:
                      | {
                          domainname?: string | undefined
                          machine?: string | undefined
                          nodename?: string | undefined
                          release?: string | undefined
                          sysname?: string | undefined
                          version?: string | undefined
                        }
                      | undefined
                    model?: (string | null) | undefined
                    dmi?:
                      | {
                          bios?: { vendor?: (string | null) | undefined } | undefined
                          board?:
                            | {
                                name?: (string | null) | undefined
                                vendor?: (string | null) | undefined
                                version?: (string | null) | undefined
                              }
                            | undefined
                          product?:
                            | {
                                name?: (string | null) | undefined
                                version?: (string | null) | undefined
                                family?: (string | null) | undefined
                              }
                            | undefined
                          sys?: { vendor?: (string | null) | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/info/sensors': {
      $get:
        | {
            input: {}
            output: {
              sensors?:
                | {
                    list?:
                      | {
                          name?: (string | null) | undefined
                          path?: string | undefined
                          source?: string | undefined
                          temps?:
                            | {
                                name?: (string | null) | undefined
                                value?: number | undefined
                                max?: (number | null) | undefined
                                crit?: (number | null) | undefined
                                sensor?: string | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
                    cpu_temp?: (number | null) | undefined
                    hot_limit?: number | undefined
                    unit?: string | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/info/version': {
      $get: {
        input: {}
        output: {
          version?:
            | {
                core?:
                  | {
                      local?:
                        | {
                            branch?: (string | null) | undefined
                            version?: (string | null) | undefined
                            hash?: (string | null) | undefined
                          }
                        | undefined
                      remote?:
                        | {
                            version?: (string | null) | undefined
                            hash?: (string | null) | undefined
                          }
                        | undefined
                    }
                  | undefined
                web?:
                  | {
                      local?:
                        | {
                            branch?: (string | null) | undefined
                            version?: (string | null) | undefined
                            hash?: (string | null) | undefined
                          }
                        | undefined
                      remote?:
                        | {
                            version?: (string | null) | undefined
                            hash?: (string | null) | undefined
                          }
                        | undefined
                    }
                  | undefined
                ftl?:
                  | {
                      local?:
                        | {
                            branch?: (string | null) | undefined
                            version?: (string | null) | undefined
                            hash?: (string | null) | undefined
                            date?: (string | null) | undefined
                          }
                        | undefined
                      remote?:
                        | {
                            version?: (string | null) | undefined
                            hash?: (string | null) | undefined
                          }
                        | undefined
                    }
                  | undefined
                docker?:
                  | { local?: (string | null) | undefined; remote?: (string | null) | undefined }
                  | undefined
              }
            | undefined
          took?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info/messages': {
      $get: {
        input: {}
        output: {
          messages?:
            | {
                id?: number | undefined
                timestamp?: number | undefined
                type?: string | undefined
                plain?: string | undefined
                html?: string | undefined
              }[]
            | undefined
          took?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info/messages/:message_id': {
      $delete:
        | {
            input: { param: { message_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { message_id: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { message_id: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { message_id: number } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/info/messages/count': {
      $get: {
        input: {}
        output: { count?: number | undefined; took?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info/metrics': {
      $get:
        | {
            input: {}
            output: {
              metrics?:
                | {
                    dns?:
                      | {
                          cache?:
                            | {
                                size?: number | undefined
                                inserted?: number | undefined
                                evicted?: number | undefined
                                expired?: number | undefined
                                immortal?: number | undefined
                                content?:
                                  | {
                                      type?: number | undefined
                                      name?: string | undefined
                                      count?:
                                        | { valid?: number | undefined; stale?: number | undefined }
                                        | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          replies?:
                            | {
                                forwarded?: number | undefined
                                unanswered?: number | undefined
                                local?: number | undefined
                                optimized?: number | undefined
                                auth?: number | undefined
                                sum?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    dhcp?:
                      | {
                          ack?: number | undefined
                          nak?: number | undefined
                          decline?: number | undefined
                          offer?: number | undefined
                          discover?: number | undefined
                          inform?: number | undefined
                          request?: number | undefined
                          release?: number | undefined
                          noanswer?: number | undefined
                          bootp?: number | undefined
                          pxe?: number | undefined
                          leases?:
                            | {
                                allocated_4?: number | undefined
                                pruned_4?: number | undefined
                                allocated_6?: number | undefined
                                pruned_6?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/info/login': {
      $get: {
        input: {}
        output: {
          https_port?: number | undefined
          dns?: boolean | undefined
          took?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/logs/dnsmasq': {
      $get:
        | {
            input: { query: { nextID?: number | undefined } }
            output: {
              log?:
                | {
                    timestamp?: number | undefined
                    message?: string | undefined
                    prio?: (string | null) | undefined
                  }[]
                | undefined
              nextID?: number | undefined
              pid?: number | undefined
              file?: string | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextID?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/logs/ftl': {
      $get:
        | {
            input: { query: { nextID?: number | undefined } }
            output: {
              log?:
                | {
                    timestamp?: number | undefined
                    message?: string | undefined
                    prio?: (string | null) | undefined
                  }[]
                | undefined
              nextID?: number | undefined
              pid?: number | undefined
              file?: string | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextID?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/logs/webserver': {
      $get:
        | {
            input: { query: { nextID?: number | undefined } }
            output: {
              log?:
                | {
                    timestamp?: number | undefined
                    message?: string | undefined
                    prio?: (string | null) | undefined
                  }[]
                | undefined
              nextID?: number | undefined
              pid?: number | undefined
              file?: string | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextID?: number | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/endpoints': {
      $get:
        | {
            input: {}
            output: {
              endpoints?:
                | {
                    get?:
                      | { uri?: string | undefined; parameters?: string | undefined }[]
                      | undefined
                    post?:
                      | { uri?: string | undefined; parameters?: string | undefined }[]
                      | undefined
                    put?:
                      | { uri?: string | undefined; parameters?: string | undefined }[]
                      | undefined
                    patch?:
                      | { uri?: string | undefined; parameters?: string | undefined }[]
                      | undefined
                    delete?:
                      | { uri?: string | undefined; parameters?: string | undefined }[]
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/config': {
      $get:
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {
              config?:
                | {
                    dns?:
                      | {
                          upstreams?: string[] | undefined
                          CNAMEdeepInspect?: boolean | undefined
                          blockESNI?: boolean | undefined
                          EDNS0ECS?: boolean | undefined
                          ignoreLocalhost?: boolean | undefined
                          showDNSSEC?: boolean | undefined
                          analyzeOnlyAandAAAA?: boolean | undefined
                          piholePTR?: string | undefined
                          replyWhenBusy?: string | undefined
                          blockTTL?: number | undefined
                          hosts?: string[] | undefined
                          domainNeeded?: boolean | undefined
                          expandHosts?: boolean | undefined
                          domain?:
                            | { name?: string | undefined; local?: boolean | undefined }
                            | undefined
                          bogusPriv?: boolean | undefined
                          dnssec?: boolean | undefined
                          interface?: string | undefined
                          hostRecord?: string | undefined
                          listeningMode?: string | undefined
                          queryLogging?: boolean | undefined
                          cnameRecords?: string[] | undefined
                          port?: number | undefined
                          localise?: boolean | undefined
                          cache?:
                            | {
                                size?: number | undefined
                                optimizer?: number | undefined
                                upstreamBlockedTTL?: number | undefined
                                rrtype?: string | undefined
                              }
                            | undefined
                          revServers?: string[] | undefined
                          blocking?:
                            | {
                                active?: boolean | undefined
                                mode?: string | undefined
                                edns?: string | undefined
                              }
                            | undefined
                          specialDomains?:
                            | {
                                mozillaCanary?: boolean | undefined
                                iCloudPrivateRelay?: boolean | undefined
                                designatedResolver?: boolean | undefined
                              }
                            | undefined
                          reply?:
                            | {
                                host?:
                                  | {
                                      force4?: boolean | undefined
                                      force6?: boolean | undefined
                                      IPv4?: string | undefined
                                      IPv6?: string | undefined
                                    }
                                  | undefined
                                blocking?:
                                  | {
                                      force4?: boolean | undefined
                                      force6?: boolean | undefined
                                      IPv4?: string | undefined
                                      IPv6?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          rateLimit?:
                            | { count?: number | undefined; interval?: number | undefined }
                            | undefined
                        }
                      | undefined
                    dhcp?:
                      | {
                          active?: boolean | undefined
                          start?: string | undefined
                          end?: string | undefined
                          router?: string | undefined
                          netmask?: string | undefined
                          leaseTime?: string | undefined
                          ipv6?: boolean | undefined
                          rapidCommit?: boolean | undefined
                          multiDNS?: boolean | undefined
                          logging?: boolean | undefined
                          ignoreUnknownClients?: boolean | undefined
                          hosts?: string[] | undefined
                        }
                      | undefined
                    ntp?:
                      | {
                          ipv4?:
                            | { active?: boolean | undefined; address?: string | undefined }
                            | undefined
                          ipv6?:
                            | { active?: boolean | undefined; address?: string | undefined }
                            | undefined
                          sync?:
                            | {
                                active?: boolean | undefined
                                server?: string | undefined
                                interval?: number | undefined
                                count?: number | undefined
                                rtc?:
                                  | {
                                      set?: boolean | undefined
                                      device?: string | undefined
                                      utc?: boolean | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    resolver?:
                      | {
                          resolveIPv4?: boolean | undefined
                          resolveIPv6?: boolean | undefined
                          macNames?: boolean | undefined
                          networkNames?: boolean | undefined
                          refreshNames?: string | undefined
                        }
                      | undefined
                    database?:
                      | {
                          DBimport?: boolean | undefined
                          maxDBdays?: number | undefined
                          DBinterval?: number | undefined
                          useWAL?: boolean | undefined
                          forceDisk?: boolean | undefined
                          network?:
                            | { parseARPcache?: boolean | undefined; expire?: number | undefined }
                            | undefined
                        }
                      | undefined
                    webserver?:
                      | {
                          domain?: string | undefined
                          acl?: string | undefined
                          port?: string | undefined
                          threads?: number | undefined
                          headers?: string[] | undefined
                          serve_all?: boolean | undefined
                          advancedOpts?: string[] | undefined
                          session?:
                            | { timeout?: number | undefined; restore?: boolean | undefined }
                            | undefined
                          tls?:
                            | { cert?: string | undefined; validity?: number | undefined }
                            | undefined
                          paths?:
                            | {
                                webroot?: string | undefined
                                webhome?: string | undefined
                                prefix?: string | undefined
                              }
                            | undefined
                          interface?:
                            | { boxed?: boolean | undefined; theme?: string | undefined }
                            | undefined
                          api?:
                            | {
                                max_sessions?: number | undefined
                                prettyJSON?: boolean | undefined
                                password?: string | undefined
                                pwhash?: string | undefined
                                totp_secret?: string | undefined
                                app_pwhash?: string | undefined
                                app_sudo?: boolean | undefined
                                cli_pw?: boolean | undefined
                                excludeClients?: string[] | undefined
                                excludeDomains?: string[] | undefined
                                maxHistory?: number | undefined
                                maxClients?: number | undefined
                                client_history_global_max?: boolean | undefined
                                allow_destructive?: boolean | undefined
                                temp?:
                                  | { limit?: number | undefined; unit?: string | undefined }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    files?:
                      | {
                          pid?: string | undefined
                          database?: string | undefined
                          tmp_db?: string | undefined
                          gravity?: string | undefined
                          gravity_tmp?: string | undefined
                          macvendor?: string | undefined
                          pcap?: string | undefined
                          log?:
                            | {
                                ftl?: string | undefined
                                dnsmasq?: string | undefined
                                webserver?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    misc?:
                      | {
                          nice?: number | undefined
                          delay_startup?: number | undefined
                          addr2line?: boolean | undefined
                          etc_dnsmasq_d?: boolean | undefined
                          privacylevel?: number | undefined
                          dnsmasq_lines?: string[] | undefined
                          extraLogging?: boolean | undefined
                          readOnly?: boolean | undefined
                          normalizeCPU?: boolean | undefined
                          hide_dnsmasq_warn?: boolean | undefined
                          hide_connection_error?: boolean | undefined
                          check?:
                            | {
                                load?: boolean | undefined
                                shmem?: number | undefined
                                disk?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    debug?:
                      | {
                          database?: boolean | undefined
                          networking?: boolean | undefined
                          locks?: boolean | undefined
                          queries?: boolean | undefined
                          flags?: boolean | undefined
                          shmem?: boolean | undefined
                          gc?: boolean | undefined
                          arp?: boolean | undefined
                          regex?: boolean | undefined
                          api?: boolean | undefined
                          tls?: boolean | undefined
                          overtime?: boolean | undefined
                          status?: boolean | undefined
                          caps?: boolean | undefined
                          dnssec?: boolean | undefined
                          vectors?: boolean | undefined
                          resolver?: boolean | undefined
                          edns0?: boolean | undefined
                          clients?: boolean | undefined
                          aliasclients?: boolean | undefined
                          events?: boolean | undefined
                          helper?: boolean | undefined
                          config?: boolean | undefined
                          inotify?: boolean | undefined
                          webserver?: boolean | undefined
                          extra?: boolean | undefined
                          reserved?: boolean | undefined
                          ntp?: boolean | undefined
                          netlink?: boolean | undefined
                          timing?: boolean | undefined
                          performance?: boolean | undefined
                          all?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { query: { restart?: boolean | undefined } } & {
              json: {
                config?:
                  | {
                      dns?:
                        | {
                            upstreams?: string[] | undefined
                            CNAMEdeepInspect?: boolean | undefined
                            blockESNI?: boolean | undefined
                            EDNS0ECS?: boolean | undefined
                            ignoreLocalhost?: boolean | undefined
                            showDNSSEC?: boolean | undefined
                            analyzeOnlyAandAAAA?: boolean | undefined
                            piholePTR?: string | undefined
                            replyWhenBusy?: string | undefined
                            blockTTL?: number | undefined
                            hosts?: string[] | undefined
                            domainNeeded?: boolean | undefined
                            expandHosts?: boolean | undefined
                            domain?:
                              | { name?: string | undefined; local?: boolean | undefined }
                              | undefined
                            bogusPriv?: boolean | undefined
                            dnssec?: boolean | undefined
                            interface?: string | undefined
                            hostRecord?: string | undefined
                            listeningMode?: string | undefined
                            queryLogging?: boolean | undefined
                            cnameRecords?: string[] | undefined
                            port?: number | undefined
                            localise?: boolean | undefined
                            cache?:
                              | {
                                  size?: number | undefined
                                  optimizer?: number | undefined
                                  upstreamBlockedTTL?: number | undefined
                                  rrtype?: string | undefined
                                }
                              | undefined
                            revServers?: string[] | undefined
                            blocking?:
                              | {
                                  active?: boolean | undefined
                                  mode?: string | undefined
                                  edns?: string | undefined
                                }
                              | undefined
                            specialDomains?:
                              | {
                                  mozillaCanary?: boolean | undefined
                                  iCloudPrivateRelay?: boolean | undefined
                                  designatedResolver?: boolean | undefined
                                }
                              | undefined
                            reply?:
                              | {
                                  host?:
                                    | {
                                        force4?: boolean | undefined
                                        force6?: boolean | undefined
                                        IPv4?: string | undefined
                                        IPv6?: string | undefined
                                      }
                                    | undefined
                                  blocking?:
                                    | {
                                        force4?: boolean | undefined
                                        force6?: boolean | undefined
                                        IPv4?: string | undefined
                                        IPv6?: string | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            rateLimit?:
                              | { count?: number | undefined; interval?: number | undefined }
                              | undefined
                          }
                        | undefined
                      dhcp?:
                        | {
                            active?: boolean | undefined
                            start?: string | undefined
                            end?: string | undefined
                            router?: string | undefined
                            netmask?: string | undefined
                            leaseTime?: string | undefined
                            ipv6?: boolean | undefined
                            rapidCommit?: boolean | undefined
                            multiDNS?: boolean | undefined
                            logging?: boolean | undefined
                            ignoreUnknownClients?: boolean | undefined
                            hosts?: string[] | undefined
                          }
                        | undefined
                      ntp?:
                        | {
                            ipv4?:
                              | { active?: boolean | undefined; address?: string | undefined }
                              | undefined
                            ipv6?:
                              | { active?: boolean | undefined; address?: string | undefined }
                              | undefined
                            sync?:
                              | {
                                  active?: boolean | undefined
                                  server?: string | undefined
                                  interval?: number | undefined
                                  count?: number | undefined
                                  rtc?:
                                    | {
                                        set?: boolean | undefined
                                        device?: string | undefined
                                        utc?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      resolver?:
                        | {
                            resolveIPv4?: boolean | undefined
                            resolveIPv6?: boolean | undefined
                            macNames?: boolean | undefined
                            networkNames?: boolean | undefined
                            refreshNames?: string | undefined
                          }
                        | undefined
                      database?:
                        | {
                            DBimport?: boolean | undefined
                            maxDBdays?: number | undefined
                            DBinterval?: number | undefined
                            useWAL?: boolean | undefined
                            forceDisk?: boolean | undefined
                            network?:
                              | { parseARPcache?: boolean | undefined; expire?: number | undefined }
                              | undefined
                          }
                        | undefined
                      webserver?:
                        | {
                            domain?: string | undefined
                            acl?: string | undefined
                            port?: string | undefined
                            threads?: number | undefined
                            headers?: string[] | undefined
                            serve_all?: boolean | undefined
                            advancedOpts?: string[] | undefined
                            session?:
                              | { timeout?: number | undefined; restore?: boolean | undefined }
                              | undefined
                            tls?:
                              | { cert?: string | undefined; validity?: number | undefined }
                              | undefined
                            paths?:
                              | {
                                  webroot?: string | undefined
                                  webhome?: string | undefined
                                  prefix?: string | undefined
                                }
                              | undefined
                            interface?:
                              | { boxed?: boolean | undefined; theme?: string | undefined }
                              | undefined
                            api?:
                              | {
                                  max_sessions?: number | undefined
                                  prettyJSON?: boolean | undefined
                                  password?: string | undefined
                                  pwhash?: string | undefined
                                  totp_secret?: string | undefined
                                  app_pwhash?: string | undefined
                                  app_sudo?: boolean | undefined
                                  cli_pw?: boolean | undefined
                                  excludeClients?: string[] | undefined
                                  excludeDomains?: string[] | undefined
                                  maxHistory?: number | undefined
                                  maxClients?: number | undefined
                                  client_history_global_max?: boolean | undefined
                                  allow_destructive?: boolean | undefined
                                  temp?:
                                    | { limit?: number | undefined; unit?: string | undefined }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      files?:
                        | {
                            pid?: string | undefined
                            database?: string | undefined
                            tmp_db?: string | undefined
                            gravity?: string | undefined
                            gravity_tmp?: string | undefined
                            macvendor?: string | undefined
                            pcap?: string | undefined
                            log?:
                              | {
                                  ftl?: string | undefined
                                  dnsmasq?: string | undefined
                                  webserver?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                      misc?:
                        | {
                            nice?: number | undefined
                            delay_startup?: number | undefined
                            addr2line?: boolean | undefined
                            etc_dnsmasq_d?: boolean | undefined
                            privacylevel?: number | undefined
                            dnsmasq_lines?: string[] | undefined
                            extraLogging?: boolean | undefined
                            readOnly?: boolean | undefined
                            normalizeCPU?: boolean | undefined
                            hide_dnsmasq_warn?: boolean | undefined
                            hide_connection_error?: boolean | undefined
                            check?:
                              | {
                                  load?: boolean | undefined
                                  shmem?: number | undefined
                                  disk?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      debug?:
                        | {
                            database?: boolean | undefined
                            networking?: boolean | undefined
                            locks?: boolean | undefined
                            queries?: boolean | undefined
                            flags?: boolean | undefined
                            shmem?: boolean | undefined
                            gc?: boolean | undefined
                            arp?: boolean | undefined
                            regex?: boolean | undefined
                            api?: boolean | undefined
                            tls?: boolean | undefined
                            overtime?: boolean | undefined
                            status?: boolean | undefined
                            caps?: boolean | undefined
                            dnssec?: boolean | undefined
                            vectors?: boolean | undefined
                            resolver?: boolean | undefined
                            edns0?: boolean | undefined
                            clients?: boolean | undefined
                            aliasclients?: boolean | undefined
                            events?: boolean | undefined
                            helper?: boolean | undefined
                            config?: boolean | undefined
                            inotify?: boolean | undefined
                            webserver?: boolean | undefined
                            extra?: boolean | undefined
                            reserved?: boolean | undefined
                            ntp?: boolean | undefined
                            netlink?: boolean | undefined
                            timing?: boolean | undefined
                            performance?: boolean | undefined
                            all?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                took?: number | undefined
              }
            }
            output: {
              config?:
                | {
                    dns?:
                      | {
                          upstreams?: string[] | undefined
                          CNAMEdeepInspect?: boolean | undefined
                          blockESNI?: boolean | undefined
                          EDNS0ECS?: boolean | undefined
                          ignoreLocalhost?: boolean | undefined
                          showDNSSEC?: boolean | undefined
                          analyzeOnlyAandAAAA?: boolean | undefined
                          piholePTR?: string | undefined
                          replyWhenBusy?: string | undefined
                          blockTTL?: number | undefined
                          hosts?: string[] | undefined
                          domainNeeded?: boolean | undefined
                          expandHosts?: boolean | undefined
                          domain?:
                            | { name?: string | undefined; local?: boolean | undefined }
                            | undefined
                          bogusPriv?: boolean | undefined
                          dnssec?: boolean | undefined
                          interface?: string | undefined
                          hostRecord?: string | undefined
                          listeningMode?: string | undefined
                          queryLogging?: boolean | undefined
                          cnameRecords?: string[] | undefined
                          port?: number | undefined
                          localise?: boolean | undefined
                          cache?:
                            | {
                                size?: number | undefined
                                optimizer?: number | undefined
                                upstreamBlockedTTL?: number | undefined
                                rrtype?: string | undefined
                              }
                            | undefined
                          revServers?: string[] | undefined
                          blocking?:
                            | {
                                active?: boolean | undefined
                                mode?: string | undefined
                                edns?: string | undefined
                              }
                            | undefined
                          specialDomains?:
                            | {
                                mozillaCanary?: boolean | undefined
                                iCloudPrivateRelay?: boolean | undefined
                                designatedResolver?: boolean | undefined
                              }
                            | undefined
                          reply?:
                            | {
                                host?:
                                  | {
                                      force4?: boolean | undefined
                                      force6?: boolean | undefined
                                      IPv4?: string | undefined
                                      IPv6?: string | undefined
                                    }
                                  | undefined
                                blocking?:
                                  | {
                                      force4?: boolean | undefined
                                      force6?: boolean | undefined
                                      IPv4?: string | undefined
                                      IPv6?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          rateLimit?:
                            | { count?: number | undefined; interval?: number | undefined }
                            | undefined
                        }
                      | undefined
                    dhcp?:
                      | {
                          active?: boolean | undefined
                          start?: string | undefined
                          end?: string | undefined
                          router?: string | undefined
                          netmask?: string | undefined
                          leaseTime?: string | undefined
                          ipv6?: boolean | undefined
                          rapidCommit?: boolean | undefined
                          multiDNS?: boolean | undefined
                          logging?: boolean | undefined
                          ignoreUnknownClients?: boolean | undefined
                          hosts?: string[] | undefined
                        }
                      | undefined
                    ntp?:
                      | {
                          ipv4?:
                            | { active?: boolean | undefined; address?: string | undefined }
                            | undefined
                          ipv6?:
                            | { active?: boolean | undefined; address?: string | undefined }
                            | undefined
                          sync?:
                            | {
                                active?: boolean | undefined
                                server?: string | undefined
                                interval?: number | undefined
                                count?: number | undefined
                                rtc?:
                                  | {
                                      set?: boolean | undefined
                                      device?: string | undefined
                                      utc?: boolean | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    resolver?:
                      | {
                          resolveIPv4?: boolean | undefined
                          resolveIPv6?: boolean | undefined
                          macNames?: boolean | undefined
                          networkNames?: boolean | undefined
                          refreshNames?: string | undefined
                        }
                      | undefined
                    database?:
                      | {
                          DBimport?: boolean | undefined
                          maxDBdays?: number | undefined
                          DBinterval?: number | undefined
                          useWAL?: boolean | undefined
                          forceDisk?: boolean | undefined
                          network?:
                            | { parseARPcache?: boolean | undefined; expire?: number | undefined }
                            | undefined
                        }
                      | undefined
                    webserver?:
                      | {
                          domain?: string | undefined
                          acl?: string | undefined
                          port?: string | undefined
                          threads?: number | undefined
                          headers?: string[] | undefined
                          serve_all?: boolean | undefined
                          advancedOpts?: string[] | undefined
                          session?:
                            | { timeout?: number | undefined; restore?: boolean | undefined }
                            | undefined
                          tls?:
                            | { cert?: string | undefined; validity?: number | undefined }
                            | undefined
                          paths?:
                            | {
                                webroot?: string | undefined
                                webhome?: string | undefined
                                prefix?: string | undefined
                              }
                            | undefined
                          interface?:
                            | { boxed?: boolean | undefined; theme?: string | undefined }
                            | undefined
                          api?:
                            | {
                                max_sessions?: number | undefined
                                prettyJSON?: boolean | undefined
                                password?: string | undefined
                                pwhash?: string | undefined
                                totp_secret?: string | undefined
                                app_pwhash?: string | undefined
                                app_sudo?: boolean | undefined
                                cli_pw?: boolean | undefined
                                excludeClients?: string[] | undefined
                                excludeDomains?: string[] | undefined
                                maxHistory?: number | undefined
                                maxClients?: number | undefined
                                client_history_global_max?: boolean | undefined
                                allow_destructive?: boolean | undefined
                                temp?:
                                  | { limit?: number | undefined; unit?: string | undefined }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    files?:
                      | {
                          pid?: string | undefined
                          database?: string | undefined
                          tmp_db?: string | undefined
                          gravity?: string | undefined
                          gravity_tmp?: string | undefined
                          macvendor?: string | undefined
                          pcap?: string | undefined
                          log?:
                            | {
                                ftl?: string | undefined
                                dnsmasq?: string | undefined
                                webserver?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    misc?:
                      | {
                          nice?: number | undefined
                          delay_startup?: number | undefined
                          addr2line?: boolean | undefined
                          etc_dnsmasq_d?: boolean | undefined
                          privacylevel?: number | undefined
                          dnsmasq_lines?: string[] | undefined
                          extraLogging?: boolean | undefined
                          readOnly?: boolean | undefined
                          normalizeCPU?: boolean | undefined
                          hide_dnsmasq_warn?: boolean | undefined
                          hide_connection_error?: boolean | undefined
                          check?:
                            | {
                                load?: boolean | undefined
                                shmem?: number | undefined
                                disk?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    debug?:
                      | {
                          database?: boolean | undefined
                          networking?: boolean | undefined
                          locks?: boolean | undefined
                          queries?: boolean | undefined
                          flags?: boolean | undefined
                          shmem?: boolean | undefined
                          gc?: boolean | undefined
                          arp?: boolean | undefined
                          regex?: boolean | undefined
                          api?: boolean | undefined
                          tls?: boolean | undefined
                          overtime?: boolean | undefined
                          status?: boolean | undefined
                          caps?: boolean | undefined
                          dnssec?: boolean | undefined
                          vectors?: boolean | undefined
                          resolver?: boolean | undefined
                          edns0?: boolean | undefined
                          clients?: boolean | undefined
                          aliasclients?: boolean | undefined
                          events?: boolean | undefined
                          helper?: boolean | undefined
                          config?: boolean | undefined
                          inotify?: boolean | undefined
                          webserver?: boolean | undefined
                          extra?: boolean | undefined
                          reserved?: boolean | undefined
                          ntp?: boolean | undefined
                          netlink?: boolean | undefined
                          timing?: boolean | undefined
                          performance?: boolean | undefined
                          all?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { restart?: boolean | undefined } } & {
              json: {
                config?:
                  | {
                      dns?:
                        | {
                            upstreams?: string[] | undefined
                            CNAMEdeepInspect?: boolean | undefined
                            blockESNI?: boolean | undefined
                            EDNS0ECS?: boolean | undefined
                            ignoreLocalhost?: boolean | undefined
                            showDNSSEC?: boolean | undefined
                            analyzeOnlyAandAAAA?: boolean | undefined
                            piholePTR?: string | undefined
                            replyWhenBusy?: string | undefined
                            blockTTL?: number | undefined
                            hosts?: string[] | undefined
                            domainNeeded?: boolean | undefined
                            expandHosts?: boolean | undefined
                            domain?:
                              | { name?: string | undefined; local?: boolean | undefined }
                              | undefined
                            bogusPriv?: boolean | undefined
                            dnssec?: boolean | undefined
                            interface?: string | undefined
                            hostRecord?: string | undefined
                            listeningMode?: string | undefined
                            queryLogging?: boolean | undefined
                            cnameRecords?: string[] | undefined
                            port?: number | undefined
                            localise?: boolean | undefined
                            cache?:
                              | {
                                  size?: number | undefined
                                  optimizer?: number | undefined
                                  upstreamBlockedTTL?: number | undefined
                                  rrtype?: string | undefined
                                }
                              | undefined
                            revServers?: string[] | undefined
                            blocking?:
                              | {
                                  active?: boolean | undefined
                                  mode?: string | undefined
                                  edns?: string | undefined
                                }
                              | undefined
                            specialDomains?:
                              | {
                                  mozillaCanary?: boolean | undefined
                                  iCloudPrivateRelay?: boolean | undefined
                                  designatedResolver?: boolean | undefined
                                }
                              | undefined
                            reply?:
                              | {
                                  host?:
                                    | {
                                        force4?: boolean | undefined
                                        force6?: boolean | undefined
                                        IPv4?: string | undefined
                                        IPv6?: string | undefined
                                      }
                                    | undefined
                                  blocking?:
                                    | {
                                        force4?: boolean | undefined
                                        force6?: boolean | undefined
                                        IPv4?: string | undefined
                                        IPv6?: string | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            rateLimit?:
                              | { count?: number | undefined; interval?: number | undefined }
                              | undefined
                          }
                        | undefined
                      dhcp?:
                        | {
                            active?: boolean | undefined
                            start?: string | undefined
                            end?: string | undefined
                            router?: string | undefined
                            netmask?: string | undefined
                            leaseTime?: string | undefined
                            ipv6?: boolean | undefined
                            rapidCommit?: boolean | undefined
                            multiDNS?: boolean | undefined
                            logging?: boolean | undefined
                            ignoreUnknownClients?: boolean | undefined
                            hosts?: string[] | undefined
                          }
                        | undefined
                      ntp?:
                        | {
                            ipv4?:
                              | { active?: boolean | undefined; address?: string | undefined }
                              | undefined
                            ipv6?:
                              | { active?: boolean | undefined; address?: string | undefined }
                              | undefined
                            sync?:
                              | {
                                  active?: boolean | undefined
                                  server?: string | undefined
                                  interval?: number | undefined
                                  count?: number | undefined
                                  rtc?:
                                    | {
                                        set?: boolean | undefined
                                        device?: string | undefined
                                        utc?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      resolver?:
                        | {
                            resolveIPv4?: boolean | undefined
                            resolveIPv6?: boolean | undefined
                            macNames?: boolean | undefined
                            networkNames?: boolean | undefined
                            refreshNames?: string | undefined
                          }
                        | undefined
                      database?:
                        | {
                            DBimport?: boolean | undefined
                            maxDBdays?: number | undefined
                            DBinterval?: number | undefined
                            useWAL?: boolean | undefined
                            forceDisk?: boolean | undefined
                            network?:
                              | { parseARPcache?: boolean | undefined; expire?: number | undefined }
                              | undefined
                          }
                        | undefined
                      webserver?:
                        | {
                            domain?: string | undefined
                            acl?: string | undefined
                            port?: string | undefined
                            threads?: number | undefined
                            headers?: string[] | undefined
                            serve_all?: boolean | undefined
                            advancedOpts?: string[] | undefined
                            session?:
                              | { timeout?: number | undefined; restore?: boolean | undefined }
                              | undefined
                            tls?:
                              | { cert?: string | undefined; validity?: number | undefined }
                              | undefined
                            paths?:
                              | {
                                  webroot?: string | undefined
                                  webhome?: string | undefined
                                  prefix?: string | undefined
                                }
                              | undefined
                            interface?:
                              | { boxed?: boolean | undefined; theme?: string | undefined }
                              | undefined
                            api?:
                              | {
                                  max_sessions?: number | undefined
                                  prettyJSON?: boolean | undefined
                                  password?: string | undefined
                                  pwhash?: string | undefined
                                  totp_secret?: string | undefined
                                  app_pwhash?: string | undefined
                                  app_sudo?: boolean | undefined
                                  cli_pw?: boolean | undefined
                                  excludeClients?: string[] | undefined
                                  excludeDomains?: string[] | undefined
                                  maxHistory?: number | undefined
                                  maxClients?: number | undefined
                                  client_history_global_max?: boolean | undefined
                                  allow_destructive?: boolean | undefined
                                  temp?:
                                    | { limit?: number | undefined; unit?: string | undefined }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      files?:
                        | {
                            pid?: string | undefined
                            database?: string | undefined
                            tmp_db?: string | undefined
                            gravity?: string | undefined
                            gravity_tmp?: string | undefined
                            macvendor?: string | undefined
                            pcap?: string | undefined
                            log?:
                              | {
                                  ftl?: string | undefined
                                  dnsmasq?: string | undefined
                                  webserver?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                      misc?:
                        | {
                            nice?: number | undefined
                            delay_startup?: number | undefined
                            addr2line?: boolean | undefined
                            etc_dnsmasq_d?: boolean | undefined
                            privacylevel?: number | undefined
                            dnsmasq_lines?: string[] | undefined
                            extraLogging?: boolean | undefined
                            readOnly?: boolean | undefined
                            normalizeCPU?: boolean | undefined
                            hide_dnsmasq_warn?: boolean | undefined
                            hide_connection_error?: boolean | undefined
                            check?:
                              | {
                                  load?: boolean | undefined
                                  shmem?: number | undefined
                                  disk?: number | undefined
                                }
                              | undefined
                          }
                        | undefined
                      debug?:
                        | {
                            database?: boolean | undefined
                            networking?: boolean | undefined
                            locks?: boolean | undefined
                            queries?: boolean | undefined
                            flags?: boolean | undefined
                            shmem?: boolean | undefined
                            gc?: boolean | undefined
                            arp?: boolean | undefined
                            regex?: boolean | undefined
                            api?: boolean | undefined
                            tls?: boolean | undefined
                            overtime?: boolean | undefined
                            status?: boolean | undefined
                            caps?: boolean | undefined
                            dnssec?: boolean | undefined
                            vectors?: boolean | undefined
                            resolver?: boolean | undefined
                            edns0?: boolean | undefined
                            clients?: boolean | undefined
                            aliasclients?: boolean | undefined
                            events?: boolean | undefined
                            helper?: boolean | undefined
                            config?: boolean | undefined
                            inotify?: boolean | undefined
                            webserver?: boolean | undefined
                            extra?: boolean | undefined
                            reserved?: boolean | undefined
                            ntp?: boolean | undefined
                            netlink?: boolean | undefined
                            timing?: boolean | undefined
                            performance?: boolean | undefined
                            all?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                took?: number | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/config/_properties': {
      $get:
        | {
            input: {}
            output: {
              config?:
                | {
                    read_only?:
                      | {
                          key?: string | undefined
                          reason?: string | undefined
                          description?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/config/:element': {
      $get:
        | {
            input: { param: { element: string } } & { query: { detailed?: boolean | undefined } }
            output: {
              config?:
                | {
                    dns?:
                      | {
                          upstreams?: string[] | undefined
                          CNAMEdeepInspect?: boolean | undefined
                          blockESNI?: boolean | undefined
                          EDNS0ECS?: boolean | undefined
                          ignoreLocalhost?: boolean | undefined
                          showDNSSEC?: boolean | undefined
                          analyzeOnlyAandAAAA?: boolean | undefined
                          piholePTR?: string | undefined
                          replyWhenBusy?: string | undefined
                          blockTTL?: number | undefined
                          hosts?: string[] | undefined
                          domainNeeded?: boolean | undefined
                          expandHosts?: boolean | undefined
                          domain?:
                            | { name?: string | undefined; local?: boolean | undefined }
                            | undefined
                          bogusPriv?: boolean | undefined
                          dnssec?: boolean | undefined
                          interface?: string | undefined
                          hostRecord?: string | undefined
                          listeningMode?: string | undefined
                          queryLogging?: boolean | undefined
                          cnameRecords?: string[] | undefined
                          port?: number | undefined
                          localise?: boolean | undefined
                          cache?:
                            | {
                                size?: number | undefined
                                optimizer?: number | undefined
                                upstreamBlockedTTL?: number | undefined
                                rrtype?: string | undefined
                              }
                            | undefined
                          revServers?: string[] | undefined
                          blocking?:
                            | {
                                active?: boolean | undefined
                                mode?: string | undefined
                                edns?: string | undefined
                              }
                            | undefined
                          specialDomains?:
                            | {
                                mozillaCanary?: boolean | undefined
                                iCloudPrivateRelay?: boolean | undefined
                                designatedResolver?: boolean | undefined
                              }
                            | undefined
                          reply?:
                            | {
                                host?:
                                  | {
                                      force4?: boolean | undefined
                                      force6?: boolean | undefined
                                      IPv4?: string | undefined
                                      IPv6?: string | undefined
                                    }
                                  | undefined
                                blocking?:
                                  | {
                                      force4?: boolean | undefined
                                      force6?: boolean | undefined
                                      IPv4?: string | undefined
                                      IPv6?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          rateLimit?:
                            | { count?: number | undefined; interval?: number | undefined }
                            | undefined
                        }
                      | undefined
                    dhcp?:
                      | {
                          active?: boolean | undefined
                          start?: string | undefined
                          end?: string | undefined
                          router?: string | undefined
                          netmask?: string | undefined
                          leaseTime?: string | undefined
                          ipv6?: boolean | undefined
                          rapidCommit?: boolean | undefined
                          multiDNS?: boolean | undefined
                          logging?: boolean | undefined
                          ignoreUnknownClients?: boolean | undefined
                          hosts?: string[] | undefined
                        }
                      | undefined
                    ntp?:
                      | {
                          ipv4?:
                            | { active?: boolean | undefined; address?: string | undefined }
                            | undefined
                          ipv6?:
                            | { active?: boolean | undefined; address?: string | undefined }
                            | undefined
                          sync?:
                            | {
                                active?: boolean | undefined
                                server?: string | undefined
                                interval?: number | undefined
                                count?: number | undefined
                                rtc?:
                                  | {
                                      set?: boolean | undefined
                                      device?: string | undefined
                                      utc?: boolean | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    resolver?:
                      | {
                          resolveIPv4?: boolean | undefined
                          resolveIPv6?: boolean | undefined
                          macNames?: boolean | undefined
                          networkNames?: boolean | undefined
                          refreshNames?: string | undefined
                        }
                      | undefined
                    database?:
                      | {
                          DBimport?: boolean | undefined
                          maxDBdays?: number | undefined
                          DBinterval?: number | undefined
                          useWAL?: boolean | undefined
                          forceDisk?: boolean | undefined
                          network?:
                            | { parseARPcache?: boolean | undefined; expire?: number | undefined }
                            | undefined
                        }
                      | undefined
                    webserver?:
                      | {
                          domain?: string | undefined
                          acl?: string | undefined
                          port?: string | undefined
                          threads?: number | undefined
                          headers?: string[] | undefined
                          serve_all?: boolean | undefined
                          advancedOpts?: string[] | undefined
                          session?:
                            | { timeout?: number | undefined; restore?: boolean | undefined }
                            | undefined
                          tls?:
                            | { cert?: string | undefined; validity?: number | undefined }
                            | undefined
                          paths?:
                            | {
                                webroot?: string | undefined
                                webhome?: string | undefined
                                prefix?: string | undefined
                              }
                            | undefined
                          interface?:
                            | { boxed?: boolean | undefined; theme?: string | undefined }
                            | undefined
                          api?:
                            | {
                                max_sessions?: number | undefined
                                prettyJSON?: boolean | undefined
                                password?: string | undefined
                                pwhash?: string | undefined
                                totp_secret?: string | undefined
                                app_pwhash?: string | undefined
                                app_sudo?: boolean | undefined
                                cli_pw?: boolean | undefined
                                excludeClients?: string[] | undefined
                                excludeDomains?: string[] | undefined
                                maxHistory?: number | undefined
                                maxClients?: number | undefined
                                client_history_global_max?: boolean | undefined
                                allow_destructive?: boolean | undefined
                                temp?:
                                  | { limit?: number | undefined; unit?: string | undefined }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    files?:
                      | {
                          pid?: string | undefined
                          database?: string | undefined
                          tmp_db?: string | undefined
                          gravity?: string | undefined
                          gravity_tmp?: string | undefined
                          macvendor?: string | undefined
                          pcap?: string | undefined
                          log?:
                            | {
                                ftl?: string | undefined
                                dnsmasq?: string | undefined
                                webserver?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    misc?:
                      | {
                          nice?: number | undefined
                          delay_startup?: number | undefined
                          addr2line?: boolean | undefined
                          etc_dnsmasq_d?: boolean | undefined
                          privacylevel?: number | undefined
                          dnsmasq_lines?: string[] | undefined
                          extraLogging?: boolean | undefined
                          readOnly?: boolean | undefined
                          normalizeCPU?: boolean | undefined
                          hide_dnsmasq_warn?: boolean | undefined
                          hide_connection_error?: boolean | undefined
                          check?:
                            | {
                                load?: boolean | undefined
                                shmem?: number | undefined
                                disk?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    debug?:
                      | {
                          database?: boolean | undefined
                          networking?: boolean | undefined
                          locks?: boolean | undefined
                          queries?: boolean | undefined
                          flags?: boolean | undefined
                          shmem?: boolean | undefined
                          gc?: boolean | undefined
                          arp?: boolean | undefined
                          regex?: boolean | undefined
                          api?: boolean | undefined
                          tls?: boolean | undefined
                          overtime?: boolean | undefined
                          status?: boolean | undefined
                          caps?: boolean | undefined
                          dnssec?: boolean | undefined
                          vectors?: boolean | undefined
                          resolver?: boolean | undefined
                          edns0?: boolean | undefined
                          clients?: boolean | undefined
                          aliasclients?: boolean | undefined
                          events?: boolean | undefined
                          helper?: boolean | undefined
                          config?: boolean | undefined
                          inotify?: boolean | undefined
                          webserver?: boolean | undefined
                          extra?: boolean | undefined
                          reserved?: boolean | undefined
                          ntp?: boolean | undefined
                          netlink?: boolean | undefined
                          timing?: boolean | undefined
                          performance?: boolean | undefined
                          all?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { element: string } } & { query: { detailed?: boolean | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/config/:element/:value': {
      $put:
        | {
            input: { param: { element: string; value: string } } & {
              query: { restart?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { element: string; value: string } } & {
              query: { restart?: boolean | undefined }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { element: string; value: string } } & {
              query: { restart?: boolean | undefined }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { element: string; value: string } } & {
              query: { restart?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { element: string; value: string } } & {
              query: { restart?: boolean | undefined }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { element: string; value: string } } & {
              query: { restart?: boolean | undefined }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { element: string; value: string } } & {
              query: { restart?: boolean | undefined }
            }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/network/devices': {
      $get:
        | {
            input: {
              query: { max_devices?: number | undefined; max_addresses?: number | undefined }
            }
            output: {
              devices?:
                | {
                    id?: number | undefined
                    hwaddr?: string | undefined
                    interface?: string | undefined
                    firstSeen?: number | undefined
                    lastQuery?: number | undefined
                    numQueries?: number | undefined
                    macVendor?: (string | null) | undefined
                    ips?:
                      | {
                          ip?: string | undefined
                          name?: (string | null) | undefined
                          lastSeen?: number | undefined
                          nameUpdated?: number | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { max_devices?: number | undefined; max_addresses?: number | undefined }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/network/devices/:device_id': {
      $delete:
        | { input: { param: { device_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { device_id: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { device_id: number } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { device_id: number } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/network/gateway': {
      $get:
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {
              gateway?:
                | {
                    family?: string | undefined
                    interface?: (string | null) | undefined
                    address?: (string | null) | undefined
                    local?: string[] | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/network/routes': {
      $get:
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {
              routes?:
                | {
                    gateway?: string | undefined
                    family?: 'inet' | 'inet6' | 'link' | 'mpls' | 'bridge' | '???' | undefined
                    table?: number | undefined
                    protocol?: string | undefined
                    scope?: string | undefined
                    type?: string | undefined
                    flags?: string[] | undefined
                    oif?: string | undefined
                    iif?: string | undefined
                    dst?: string | undefined
                    src?: string | undefined
                    prefsrc?: string | undefined
                    priority?: number | undefined
                    pref?: number | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/network/interfaces': {
      $get:
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {
              interfaces?:
                | {
                    name?: string | undefined
                    speed?: (number | null) | undefined
                    carrier?: boolean | undefined
                    type?: string | undefined
                    flags?: string[] | undefined
                    state?: string | undefined
                    proto_down?: boolean | undefined
                    address?: string | undefined
                    broadcast?: string | undefined
                    perm_address?: string | undefined
                    stats?:
                      | {
                          rx_bytes?:
                            | { value?: number | undefined; unit?: string | undefined }
                            | undefined
                          tx_bytes?:
                            | { value?: number | undefined; unit?: string | undefined }
                            | undefined
                        }
                      | undefined
                    addresses?:
                      | (
                          | {
                              address?: string | undefined
                              address_type?: string | undefined
                              broadcast?: string | undefined
                              broadcast_type?: string | undefined
                              local?: string | undefined
                              local_type?: string | undefined
                              label?: string | undefined
                              family?:
                                | 'inet'
                                | 'inet6'
                                | 'link'
                                | 'mpls'
                                | 'bridge'
                                | '???'
                                | undefined
                              flags?: string[] | undefined
                              prefixlen?: number | undefined
                              scope?: string | undefined
                              prefered?: number | undefined
                              valid?: number | undefined
                              cstamp?: number | undefined
                              tstamp?: number | undefined
                            }[]
                          | null
                        )
                      | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/teleporter': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              form: {
                file?: File | undefined
                import?:
                  | ({
                      config?: boolean | undefined
                      dhcp_leases?: boolean | undefined
                      gravity?:
                        | {
                            group?: boolean | undefined
                            adlist?: boolean | undefined
                            adlist_by_group?: boolean | undefined
                            domainlist?: boolean | undefined
                            domainlist_by_group?: boolean | undefined
                            client?: boolean | undefined
                            client_by_group?: boolean | undefined
                          }
                        | undefined
                    } | null)
                  | undefined
              }
            }
            output: { files?: string[] | undefined; took?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                file?: File | undefined
                import?:
                  | ({
                      config?: boolean | undefined
                      dhcp_leases?: boolean | undefined
                      gravity?:
                        | {
                            group?: boolean | undefined
                            adlist?: boolean | undefined
                            adlist_by_group?: boolean | undefined
                            domainlist?: boolean | undefined
                            domainlist_by_group?: boolean | undefined
                            client?: boolean | undefined
                            client_by_group?: boolean | undefined
                          }
                        | undefined
                    } | null)
                  | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                file?: File | undefined
                import?:
                  | ({
                      config?: boolean | undefined
                      dhcp_leases?: boolean | undefined
                      gravity?:
                        | {
                            group?: boolean | undefined
                            adlist?: boolean | undefined
                            adlist_by_group?: boolean | undefined
                            domainlist?: boolean | undefined
                            domainlist_by_group?: boolean | undefined
                            client?: boolean | undefined
                            client_by_group?: boolean | undefined
                          }
                        | undefined
                    } | null)
                  | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                file?: File | undefined
                import?:
                  | ({
                      config?: boolean | undefined
                      dhcp_leases?: boolean | undefined
                      gravity?:
                        | {
                            group?: boolean | undefined
                            adlist?: boolean | undefined
                            adlist_by_group?: boolean | undefined
                            domainlist?: boolean | undefined
                            domainlist_by_group?: boolean | undefined
                            client?: boolean | undefined
                            client_by_group?: boolean | undefined
                          }
                        | undefined
                    } | null)
                  | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/action/gravity': {
      $post:
        | {
            input: { query: { color?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { color?: boolean | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { color?: boolean | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/action/restartdns': {
      $post:
        | {
            input: {}
            output: { status?: string | undefined; took?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/action/flush/logs': {
      $post:
        | {
            input: {}
            output: { status?: string | undefined; took?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/action/flush/arp': {
      $post:
        | {
            input: {}
            output: { status?: string | undefined; took?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/action/flush/network': {
      $post:
        | {
            input: {}
            output: { status?: string | undefined; took?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/dhcp/leases': {
      $get:
        | {
            input: {}
            output: {
              leases?:
                | {
                    expires?: number | undefined
                    name?: string | undefined
                    hwaddr?: string | undefined
                    ip?: string | undefined
                    clientid?: string | undefined
                  }[]
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/dhcp/leases/:ip': {
      $delete:
        | { input: { param: { ip: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ip: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ip: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ip: string } }
            output: { took?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ip: string } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/search/:domain': {
      $get:
        | {
            input: { param: { domain: string } } & {
              query: {
                partial?: boolean | undefined
                N?: number | undefined
                debug?: boolean | undefined
              }
            }
            output: {
              search?:
                | {
                    domains?:
                      | {
                          domain?: string | undefined
                          comment?: (string | null) | undefined
                          enabled?: boolean | undefined
                          type?: 'allow' | 'deny' | undefined
                          kind?: 'exact' | 'regex' | undefined
                          id?: number | undefined
                          date_added?: number | undefined
                          date_modified?: number | undefined
                          groups?: number[] | undefined
                        }[]
                      | undefined
                    gravity?:
                      | {
                          domain?: string | undefined
                          address?: string | undefined
                          comment?: (string | null) | undefined
                          enabled?: boolean | undefined
                          id?: number | undefined
                          type?: 'allow' | 'block' | undefined
                          date_added?: number | undefined
                          date_modified?: number | undefined
                          date_updated?: number | undefined
                          number?: number | undefined
                          invalid_domains?: number | undefined
                          abp_entries?: number | undefined
                          status?: number | undefined
                          groups?: number[] | undefined
                        }[]
                      | undefined
                    parameters?:
                      | {
                          partial?: boolean | undefined
                          N?: number | undefined
                          domain?: string | undefined
                          debug?: boolean | undefined
                        }
                      | undefined
                    results?:
                      | {
                          domains?:
                            | { exact?: number | undefined; regex?: number | undefined }
                            | undefined
                          gravity?:
                            | { allow?: number | undefined; block?: number | undefined }
                            | undefined
                          total?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                partial?: boolean | undefined
                N?: number | undefined
                debug?: boolean | undefined
              }
            }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & { '/docs': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/padd': {
      $get:
        | {
            input: { query: { full?: boolean | undefined } }
            output: {
              recent_blocked?: (string | null) | undefined
              top_domain?: (string | null) | undefined
              top_blocked?: (string | null) | undefined
              top_client?: (string | null) | undefined
              active_clients?: number | undefined
              gravity_size?: number | undefined
              blocking?: string | undefined
              queries?:
                | {
                    total?: number | undefined
                    blocked?: number | undefined
                    percent_blocked?: number | undefined
                    query_frequency?: number | undefined
                  }
                | undefined
              cache?:
                | {
                    size?: number | undefined
                    inserted?: number | undefined
                    evicted?: number | undefined
                  }
                | undefined
              iface?:
                | {
                    v4?:
                      | {
                          addr?: (string | null) | undefined
                          rx_bytes?:
                            | { value?: number | undefined; unit?: string | undefined }
                            | undefined
                          tx_bytes?:
                            | { value?: number | undefined; unit?: string | undefined }
                            | undefined
                          num_addrs?: number | undefined
                          name?: string | undefined
                          gw_addr?: (string | null) | undefined
                        }
                      | undefined
                    v6?:
                      | {
                          addr?: (string | null) | undefined
                          num_addrs?: number | undefined
                          name?: string | undefined
                          gw_addr?: (string | null) | undefined
                        }
                      | undefined
                  }
                | undefined
              node_name?: string | undefined
              host_model?: (string | null) | undefined
              config?:
                | {
                    dhcp_active?: boolean | undefined
                    dhcp_start?: string | undefined
                    dhcp_end?: string | undefined
                    dhcp_ipv6?: boolean | undefined
                    dns_domain?: string | undefined
                    dns_port?: number | undefined
                    dns_num_upstreams?: number | undefined
                    dns_dnssec?: boolean | undefined
                    dns_revServer_active?: boolean | undefined
                    privacy_level?: number | undefined
                  }
                | undefined
              '%cpu'?: number | undefined
              '%mem'?: number | undefined
              pid?: number | undefined
              sensors?:
                | {
                    cpu_temp?: (number | null) | undefined
                    hot_limit?: number | undefined
                    unit?: string | undefined
                  }
                | undefined
              system?:
                | {
                    uptime?: number | undefined
                    memory?:
                      | {
                          ram?:
                            | {
                                total?: number | undefined
                                free?: number | undefined
                                used?: number | undefined
                                available?: number | undefined
                                '%used'?: number | undefined
                              }
                            | undefined
                          swap?:
                            | {
                                total?: number | undefined
                                used?: number | undefined
                                free?: number | undefined
                                '%used'?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    procs?: number | undefined
                    cpu?:
                      | {
                          nprocs?: number | undefined
                          '%cpu'?: number | undefined
                          load?:
                            | { raw?: number[] | undefined; percent?: number[] | undefined }
                            | undefined
                        }
                      | undefined
                    ftl?: { '%mem'?: number | undefined; '%cpu'?: number | undefined } | undefined
                  }
                | undefined
              version?:
                | {
                    core?:
                      | {
                          local?:
                            | {
                                branch?: (string | null) | undefined
                                version?: (string | null) | undefined
                                hash?: (string | null) | undefined
                              }
                            | undefined
                          remote?:
                            | {
                                version?: (string | null) | undefined
                                hash?: (string | null) | undefined
                              }
                            | undefined
                        }
                      | undefined
                    web?:
                      | {
                          local?:
                            | {
                                branch?: (string | null) | undefined
                                version?: (string | null) | undefined
                                hash?: (string | null) | undefined
                              }
                            | undefined
                          remote?:
                            | {
                                version?: (string | null) | undefined
                                hash?: (string | null) | undefined
                              }
                            | undefined
                        }
                      | undefined
                    ftl?:
                      | {
                          local?:
                            | {
                                branch?: (string | null) | undefined
                                version?: (string | null) | undefined
                                hash?: (string | null) | undefined
                                date?: (string | null) | undefined
                              }
                            | undefined
                          remote?:
                            | {
                                version?: (string | null) | undefined
                                hash?: (string | null) | undefined
                              }
                            | undefined
                        }
                      | undefined
                    docker?:
                      | {
                          local?: (string | null) | undefined
                          remote?: (string | null) | undefined
                        }
                      | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { full?: boolean | undefined } }
            output: {
              error?:
                | {
                    key?: string | undefined
                    message?: string | undefined
                    hint?: (string | null) | undefined
                  }
                | undefined
              took?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
