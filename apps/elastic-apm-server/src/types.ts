type Error = { exception: { [x: string]: unknown } } | { log: { [x: string]: unknown } }
type ErrorEvent = { error: Error }
type Metadata = {
  cloud?:
    | ({
        account?:
          | ({ id?: (string | null) | undefined; name?: (string | null) | undefined } | null)
          | undefined
        availability_zone?: (string | null) | undefined
        instance?:
          | ({ id?: (string | null) | undefined; name?: (string | null) | undefined } | null)
          | undefined
        machine?: ({ type?: (string | null) | undefined } | null) | undefined
        project?:
          | ({ id?: (string | null) | undefined; name?: (string | null) | undefined } | null)
          | undefined
        provider: string
        region?: (string | null) | undefined
        service?: ({ name?: (string | null) | undefined } | null) | undefined
      } | null)
    | undefined
  labels?: ({ [x: string]: string | boolean | number | null } | null) | undefined
  network?:
    | ({ connection?: ({ type?: (string | null) | undefined } | null) | undefined } | null)
    | undefined
  process?:
    | ({
        argv?: (string[] | null) | undefined
        pid: number
        ppid?: (number | null) | undefined
        title?: (string | null) | undefined
      } | null)
    | undefined
  service: {
    agent: {
      activation_method?: (string | null) | undefined
      ephemeral_id?: (string | null) | undefined
      name: string
      version: string
    }
    environment?: (string | null) | undefined
    framework?:
      | ({ name?: (string | null) | undefined; version?: (string | null) | undefined } | null)
      | undefined
    id?: (string | null) | undefined
    language?: ({ name: string; version?: (string | null) | undefined } | null) | undefined
    name: string
    node?: ({ configured_name?: (string | null) | undefined } | null) | undefined
    runtime?: ({ name: string; version: string } | null) | undefined
    version?: (string | null) | undefined
  }
  system?:
    | ({
        architecture?: (string | null) | undefined
        configured_hostname?: (string | null) | undefined
        container?: ({ id?: (string | null) | undefined } | null) | undefined
        detected_hostname?: (string | null) | undefined
        host_id?: (string | null) | undefined
        hostname?: (string | null) | undefined
        kubernetes?:
          | ({
              namespace?: (string | null) | undefined
              node?: ({ name?: (string | null) | undefined } | null) | undefined
              pod?:
                | ({ name?: (string | null) | undefined; uid?: (string | null) | undefined } | null)
                | undefined
            } | null)
          | undefined
        platform?: (string | null) | undefined
      } | null)
    | undefined
  user?:
    | ({
        domain?: (string | null) | undefined
        email?: (string | null) | undefined
        id?: (string | number | null) | undefined
        username?: (string | null) | undefined
      } | null)
    | undefined
}
type MetadataEvent = { metadata: Metadata }
type Metricset = {
  faas?:
    | ({
        coldstart?: (boolean | null) | undefined
        execution?: (string | null) | undefined
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        trigger?:
          | ({
              request_id?: (string | null) | undefined
              type?: (string | null) | undefined
            } | null)
          | undefined
        version?: (string | null) | undefined
      } | null)
    | undefined
  samples: {}
  service?:
    | ({ name?: (string | null) | undefined; version?: (string | null) | undefined } | null)
    | undefined
  span?:
    | ({ subtype?: (string | null) | undefined; type?: (string | null) | undefined } | null)
    | undefined
  tags?: ({ [x: string]: string | boolean | number | null } | null) | undefined
  timestamp?: (number | null) | undefined
  transaction?:
    | ({ name?: (string | null) | undefined; type?: (string | null) | undefined } | null)
    | undefined
}
type MetricSetEvent = { metricset: Metricset }
type Span = { start: number } | { timestamp: number }
type SpanEvent = { span: Span }
type Transaction = {
  context?:
    | ({
        cloud?:
          | ({
              origin?:
                | ({
                    account?: ({ id?: (string | null) | undefined } | null) | undefined
                    provider?: (string | null) | undefined
                    region?: (string | null) | undefined
                    service?: ({ name?: (string | null) | undefined } | null) | undefined
                  } | null)
                | undefined
            } | null)
          | undefined
        custom?: ({ [x: string]: unknown } | null) | undefined
        message?:
          | ({
              age?: ({ ms?: (number | null) | undefined } | null) | undefined
              body?: (string | null) | undefined
              headers?: ({} | null) | undefined
              queue?: ({ name?: (string | null) | undefined } | null) | undefined
              routing_key?: (string | null) | undefined
            } | null)
          | undefined
        page?:
          | ({ referer?: (string | null) | undefined; url?: (string | null) | undefined } | null)
          | undefined
        request?:
          | ({
              body?: (string | { [x: string]: unknown } | null) | undefined
              cookies?: ({ [x: string]: unknown } | null) | undefined
              env?: ({ [x: string]: unknown } | null) | undefined
              headers?: ({} | null) | undefined
              http_version?: (string | null) | undefined
              method: string
              socket?:
                | ({
                    encrypted?: (boolean | null) | undefined
                    remote_address?: (string | null) | undefined
                  } | null)
                | undefined
              url?:
                | ({
                    full?: (string | null) | undefined
                    hash?: (string | null) | undefined
                    hostname?: (string | null) | undefined
                    pathname?: (string | null) | undefined
                    port?: (string | number | null) | undefined
                    protocol?: (string | null) | undefined
                    raw?: (string | null) | undefined
                    search?: (string | null) | undefined
                  } | null)
                | undefined
            } | null)
          | undefined
        response?:
          | ({
              decoded_body_size?: (number | null) | undefined
              encoded_body_size?: (number | null) | undefined
              finished?: (boolean | null) | undefined
              headers?: ({} | null) | undefined
              headers_sent?: (boolean | null) | undefined
              status_code?: (number | null) | undefined
              transfer_size?: (number | null) | undefined
            } | null)
          | undefined
        service?:
          | ({
              agent?:
                | ({
                    ephemeral_id?: (string | null) | undefined
                    name?: (string | null) | undefined
                    version?: (string | null) | undefined
                  } | null)
                | undefined
              environment?: (string | null) | undefined
              framework?:
                | ({
                    name?: (string | null) | undefined
                    version?: (string | null) | undefined
                  } | null)
                | undefined
              id?: (string | null) | undefined
              language?:
                | ({
                    name?: (string | null) | undefined
                    version?: (string | null) | undefined
                  } | null)
                | undefined
              name?: (string | null) | undefined
              node?: ({ configured_name?: (string | null) | undefined } | null) | undefined
              origin?:
                | ({
                    id?: (string | null) | undefined
                    name?: (string | null) | undefined
                    version?: (string | null) | undefined
                  } | null)
                | undefined
              runtime?:
                | ({
                    name?: (string | null) | undefined
                    version?: (string | null) | undefined
                  } | null)
                | undefined
              target?: { type: string } | { name: string } | undefined
              version?: (string | null) | undefined
            } | null)
          | undefined
        tags?: ({ [x: string]: string | boolean | number | null } | null) | undefined
        user?:
          | ({
              domain?: (string | null) | undefined
              email?: (string | null) | undefined
              id?: (string | number | null) | undefined
              username?: (string | null) | undefined
            } | null)
          | undefined
      } | null)
    | undefined
  dropped_spans_stats?:
    | (
        | {
            destination_service_resource?: (string | null) | undefined
            duration?:
              | ({
                  count?: (number | null) | undefined
                  sum?: ({ us?: (number | null) | undefined } | null) | undefined
                } | null)
              | undefined
            outcome?: 'success' | 'failure' | 'unknown' | null | undefined
            service_target_name?: (string | null) | undefined
            service_target_type?: (string | null) | undefined
          }[]
        | null
      )
    | undefined
  duration: number
  experience?:
    | ({
        cls?: (number | null) | undefined
        fid?: (number | null) | undefined
        longtask?: ({ count: number; max: number; sum: number } | null) | undefined
        tbt?: (number | null) | undefined
      } | null)
    | undefined
  faas?:
    | ({
        coldstart?: (boolean | null) | undefined
        execution?: (string | null) | undefined
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        trigger?:
          | ({
              request_id?: (string | null) | undefined
              type?: (string | null) | undefined
            } | null)
          | undefined
        version?: (string | null) | undefined
      } | null)
    | undefined
  id: string
  links?: ({ span_id: string; trace_id: string }[] | null) | undefined
  marks?: ({ [x: string]: { [x: string]: number | null } | null } | null) | undefined
  name?: (string | null) | undefined
  otel?:
    | ({
        attributes?: ({ [x: string]: unknown } | null) | undefined
        span_kind?: (string | null) | undefined
      } | null)
    | undefined
  outcome?: 'success' | 'failure' | 'unknown' | null | undefined
  parent_id?: (string | null) | undefined
  result?: (string | null) | undefined
  sample_rate?: (number | null) | undefined
  sampled?: (boolean | null) | undefined
  session?: ({ id: string; sequence?: (number | null) | undefined } | null) | undefined
  span_count: { dropped?: (number | null) | undefined; started: number }
  timestamp?: (number | null) | undefined
  trace_id: string
  type: string
}
type TransactionEvent = { transaction: Transaction }
type Error_2 = { ex: { [x: string]: unknown } } | { log: { [x: string]: unknown } }
type ErrorEventv3 = { error: Error_2 }
type Metadata_2 = {
  l?: ({ [x: string]: string | boolean | number | null } | null) | undefined
  n?: ({ c?: ({ t?: (string | null) | undefined } | null) | undefined } | null) | undefined
  se: {
    a: { n: string; ve: string }
    en?: (string | null) | undefined
    fw?: ({ n?: (string | null) | undefined; ve?: (string | null) | undefined } | null) | undefined
    la?: ({ n: string; ve?: (string | null) | undefined } | null) | undefined
    n: string
    ru?: ({ n: string; ve: string } | null) | undefined
    ve?: (string | null) | undefined
  }
  u?:
    | ({
        em?: (string | null) | undefined
        id?: (string | number | null) | undefined
        ud?: (string | null) | undefined
        un?: (string | null) | undefined
      } | null)
    | undefined
}
type MetadataEventv3 = { metadata: Metadata_2 }
type Span_2 = {
  ac?: (string | null) | undefined
  c?:
    | ({
        dt?:
          | ({
              ad?: (string | null) | undefined
              po?: (number | null) | undefined
              se?:
                | ({
                    n?: (string | null) | undefined
                    rc: string
                    t?: (string | null) | undefined
                  } | null)
                | undefined
            } | null)
          | undefined
        g?: ({ [x: string]: string | boolean | number | null } | null) | undefined
        h?:
          | ({
              mt?: (string | null) | undefined
              r?:
                | ({
                    dbs?: (number | null) | undefined
                    ebs?: (number | null) | undefined
                    ts?: (number | null) | undefined
                  } | null)
                | undefined
              sc?: (number | null) | undefined
              url?: (string | null) | undefined
            } | null)
          | undefined
        se?:
          | ({
              a?:
                | ({ n?: (string | null) | undefined; ve?: (string | null) | undefined } | null)
                | undefined
              n?: (string | null) | undefined
            } | null)
          | undefined
      } | null)
    | undefined
  d: number
  id: string
  n: string
  o?: 'success' | 'failure' | 'unknown' | null | undefined
  pi?: (number | null) | undefined
  s: number
  sr?: (number | null) | undefined
  st?:
    | (
        | {
            ap?: (string | null) | undefined
            cli?: (string | null) | undefined
            cn?: (string | null) | undefined
            co?: (number | null) | undefined
            f: string
            fn?: (string | null) | undefined
            li?: (number | null) | undefined
            mo?: (string | null) | undefined
            poc?: (string[] | null) | undefined
            prc?: (string[] | null) | undefined
          }[]
        | null
      )
    | undefined
  su?: (string | null) | undefined
  sy?: (boolean | null) | undefined
  t: string
}
type SpanEventv3 = { span: Span_2 }
type Transaction_2 = {
  c?:
    | ({
        cu?: ({ [x: string]: unknown } | null) | undefined
        g?: ({ [x: string]: string | boolean | number | null } | null) | undefined
        p?:
          | ({ rf?: (string | null) | undefined; url?: (string | null) | undefined } | null)
          | undefined
        q?:
          | ({
              en?: ({ [x: string]: unknown } | null) | undefined
              he?: ({} | null) | undefined
              hve?: (string | null) | undefined
              mt: string
            } | null)
          | undefined
        r?:
          | ({
              dbs?: (number | null) | undefined
              ebs?: (number | null) | undefined
              he?: ({} | null) | undefined
              sc?: (number | null) | undefined
              ts?: (number | null) | undefined
            } | null)
          | undefined
        se?:
          | ({
              a?:
                | ({ n?: (string | null) | undefined; ve?: (string | null) | undefined } | null)
                | undefined
              en?: (string | null) | undefined
              fw?:
                | ({ n?: (string | null) | undefined; ve?: (string | null) | undefined } | null)
                | undefined
              la?:
                | ({ n?: (string | null) | undefined; ve?: (string | null) | undefined } | null)
                | undefined
              n?: (string | null) | undefined
              ru?:
                | ({ n?: (string | null) | undefined; ve?: (string | null) | undefined } | null)
                | undefined
              ve?: (string | null) | undefined
            } | null)
          | undefined
        u?:
          | ({
              em?: (string | null) | undefined
              id?: (string | number | null) | undefined
              ud?: (string | null) | undefined
              un?: (string | null) | undefined
            } | null)
          | undefined
      } | null)
    | undefined
  d: number
  exp?:
    | ({
        cls?: (number | null) | undefined
        fid?: (number | null) | undefined
        lt?: ({ count: number; max: number; sum: number } | null) | undefined
        tbt?: (number | null) | undefined
      } | null)
    | undefined
  id: string
  k?: ({ [x: string]: { [x: string]: number | null } | null } | null) | undefined
  me?:
    | (
        | {
            sa: {
              ysc?: ({ v: number } | null) | undefined
              yss?: ({ v: number } | null) | undefined
            }
            y?:
              | ({ su?: (string | null) | undefined; t?: (string | null) | undefined } | null)
              | undefined
          }[]
        | null
      )
    | undefined
  n?: (string | null) | undefined
  o?: 'success' | 'failure' | 'unknown' | null | undefined
  pid?: (string | null) | undefined
  rt?: (string | null) | undefined
  ses?: ({ id: string; seq?: (number | null) | undefined } | null) | undefined
  sm?: (boolean | null) | undefined
  sr?: (number | null) | undefined
  t: string
  tid: string
  y?:
    | (
        | {
            ac?: (string | null) | undefined
            c?:
              | ({
                  dt?:
                    | ({
                        ad?: (string | null) | undefined
                        po?: (number | null) | undefined
                        se?:
                          | ({
                              n?: (string | null) | undefined
                              rc: string
                              t?: (string | null) | undefined
                            } | null)
                          | undefined
                      } | null)
                    | undefined
                  g?: ({ [x: string]: string | boolean | number | null } | null) | undefined
                  h?:
                    | ({
                        mt?: (string | null) | undefined
                        r?:
                          | ({
                              dbs?: (number | null) | undefined
                              ebs?: (number | null) | undefined
                              ts?: (number | null) | undefined
                            } | null)
                          | undefined
                        sc?: (number | null) | undefined
                        url?: (string | null) | undefined
                      } | null)
                    | undefined
                  se?:
                    | ({
                        a?:
                          | ({
                              n?: (string | null) | undefined
                              ve?: (string | null) | undefined
                            } | null)
                          | undefined
                        n?: (string | null) | undefined
                      } | null)
                    | undefined
                } | null)
              | undefined
            d: number
            id: string
            n: string
            o?: 'success' | 'failure' | 'unknown' | null | undefined
            pi?: (number | null) | undefined
            s: number
            sr?: (number | null) | undefined
            st?:
              | (
                  | {
                      ap?: (string | null) | undefined
                      cli?: (string | null) | undefined
                      cn?: (string | null) | undefined
                      co?: (number | null) | undefined
                      f: string
                      fn?: (string | null) | undefined
                      li?: (number | null) | undefined
                      mo?: (string | null) | undefined
                      poc?: (string[] | null) | undefined
                      prc?: (string[] | null) | undefined
                    }[]
                  | null
                )
              | undefined
            su?: (string | null) | undefined
            sy?: (boolean | null) | undefined
            t: string
          }[]
        | null
      )
    | undefined
  yc: { dd?: (number | null) | undefined; sd: number }
}
type TransactionEventv3 = { transaction: Transaction_2 }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: {}
        output: {
          build_date?: string | undefined
          build_sha?: string | undefined
          publish_ready?: boolean | undefined
          version?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {}
        output: {
          build_date?: string | undefined
          build_sha?: string | undefined
          publish_ready?: boolean | undefined
          version?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/config/v1/agents': {
      $get: {
        input: { query: { 'service.name': string; 'service.environment'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                CAPTURE_BODY?: string | undefined
                service: { environment?: string | undefined; name: string }
              }
            }
            output: {
              capture_body?: 'off' | 'errors' | 'transactions' | 'all' | undefined
              transaction_max_spans?: number | undefined
              transaction_sample_rate?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                CAPTURE_BODY?: string | undefined
                service: { environment?: string | undefined; name: string }
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                CAPTURE_BODY?: string | undefined
                service: { environment?: string | undefined; name: string }
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/config/v1/rum/agents': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/intake/v2/events': {
      $post: {
        input: { json: ErrorEvent | MetadataEvent | MetricSetEvent | SpanEvent | TransactionEvent }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/intake/v2/rum/events': {
      $post: {
        input: { json: ErrorEvent | MetadataEvent | MetricSetEvent | SpanEvent | TransactionEvent }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/intake/v3/rum/events': {
      $post: {
        input: { json: ErrorEventv3 | MetadataEventv3 | SpanEventv3 | TransactionEventv3 }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/opentelemetry.proto.collector.metrics.v1.MetricsService/Export': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/opentelemetry.proto.collector.trace.v1.TraceService/Export': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/opentelemetry.proto.collector.logs.v1.LogsService/Export': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/metrics': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/traces': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/logs': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
