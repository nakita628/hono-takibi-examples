declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/__admin/mappings': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          mappings?:
            | {
                id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: string | undefined
                newScenarioState?: string | undefined
                persistent?: boolean | undefined
                postServeActions?: { [x: string]: unknown } | undefined
                priority?: number | undefined
                request?:
                  | {
                      basicAuthCredentials?: { password: string; username: string } | undefined
                      bodyPatterns?: { [x: string]: unknown }[] | undefined
                      cookies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      method?: string | undefined
                      queryParameters?: { [x: string]: unknown } | undefined
                      url?: string | undefined
                      urlPath?: string | undefined
                      urlPathPattern?: string | undefined
                      urlPattern?: string | undefined
                    }
                  | undefined
                requiredScenarioState?: string | undefined
                response?:
                  | {
                      additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                      base64Body?: string | undefined
                      body?: string | undefined
                      bodyFileName?: string | undefined
                      delayDistribution?:
                        | {
                            median?: number | undefined
                            sigma?: number | undefined
                            type?: 'lognormal' | undefined
                          }
                        | {
                            lower?: number | undefined
                            type?: 'uniform' | undefined
                            upper?: number | undefined
                          }
                        | undefined
                      fault?:
                        | 'CONNECTION_RESET_BY_PEER'
                        | 'EMPTY_RESPONSE'
                        | 'MALFORMED_RESPONSE_CHUNK'
                        | 'RANDOM_DATA_THEN_CLOSE'
                        | undefined
                      fixedDelayMilliseconds?: number | undefined
                      fromConfiguredStub?: boolean | undefined
                      headers?: { [x: string]: unknown } | undefined
                      jsonBody?: { [x: string]: unknown } | undefined
                      proxyBaseUrl?: string | undefined
                      status?: number | undefined
                      statusMessage?: string | undefined
                      transformerParameters?: { [x: string]: unknown } | undefined
                      transformers?: string[] | undefined
                    }
                  | undefined
                scenarioName?: string | undefined
                uuid?: string | undefined
              }[]
            | undefined
          meta?: { total: number } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            id?: string | undefined
            metadata?: { [x: string]: unknown } | undefined
            name?: string | undefined
            newScenarioState?: string | undefined
            persistent?: boolean | undefined
            postServeActions?: { [x: string]: unknown } | undefined
            priority?: number | undefined
            request?:
              | {
                  basicAuthCredentials?: { password: string; username: string } | undefined
                  bodyPatterns?: { [x: string]: unknown }[] | undefined
                  cookies?: { [x: string]: unknown } | undefined
                  headers?: { [x: string]: unknown } | undefined
                  method?: string | undefined
                  queryParameters?: { [x: string]: unknown } | undefined
                  url?: string | undefined
                  urlPath?: string | undefined
                  urlPathPattern?: string | undefined
                  urlPattern?: string | undefined
                }
              | undefined
            requiredScenarioState?: string | undefined
            response?:
              | {
                  additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                  base64Body?: string | undefined
                  body?: string | undefined
                  bodyFileName?: string | undefined
                  delayDistribution?:
                    | {
                        median?: number | undefined
                        sigma?: number | undefined
                        type?: 'lognormal' | undefined
                      }
                    | {
                        lower?: number | undefined
                        type?: 'uniform' | undefined
                        upper?: number | undefined
                      }
                    | undefined
                  fault?:
                    | 'CONNECTION_RESET_BY_PEER'
                    | 'EMPTY_RESPONSE'
                    | 'MALFORMED_RESPONSE_CHUNK'
                    | 'RANDOM_DATA_THEN_CLOSE'
                    | undefined
                  fixedDelayMilliseconds?: number | undefined
                  fromConfiguredStub?: boolean | undefined
                  headers?: { [x: string]: unknown } | undefined
                  jsonBody?: { [x: string]: unknown } | undefined
                  proxyBaseUrl?: string | undefined
                  status?: number | undefined
                  statusMessage?: string | undefined
                  transformerParameters?: { [x: string]: unknown } | undefined
                  transformers?: string[] | undefined
                }
              | undefined
            scenarioName?: string | undefined
            uuid?: string | undefined
          }
        }
        output: {
          id?: string | undefined
          metadata?: { [x: string]: unknown } | undefined
          name?: string | undefined
          newScenarioState?: string | undefined
          persistent?: boolean | undefined
          postServeActions?: { [x: string]: unknown } | undefined
          priority?: number | undefined
          request?:
            | {
                basicAuthCredentials?: { password: string; username: string } | undefined
                bodyPatterns?: { [x: string]: unknown }[] | undefined
                cookies?: { [x: string]: unknown } | undefined
                headers?: { [x: string]: unknown } | undefined
                method?: string | undefined
                queryParameters?: { [x: string]: unknown } | undefined
                url?: string | undefined
                urlPath?: string | undefined
                urlPathPattern?: string | undefined
                urlPattern?: string | undefined
              }
            | undefined
          requiredScenarioState?: string | undefined
          response?:
            | {
                additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                base64Body?: string | undefined
                body?: string | undefined
                bodyFileName?: string | undefined
                delayDistribution?:
                  | {
                      median?: number | undefined
                      sigma?: number | undefined
                      type?: 'lognormal' | undefined
                    }
                  | {
                      lower?: number | undefined
                      type?: 'uniform' | undefined
                      upper?: number | undefined
                    }
                  | undefined
                fault?:
                  | 'CONNECTION_RESET_BY_PEER'
                  | 'EMPTY_RESPONSE'
                  | 'MALFORMED_RESPONSE_CHUNK'
                  | 'RANDOM_DATA_THEN_CLOSE'
                  | undefined
                fixedDelayMilliseconds?: number | undefined
                fromConfiguredStub?: boolean | undefined
                headers?: { [x: string]: unknown } | undefined
                jsonBody?: { [x: string]: unknown } | undefined
                proxyBaseUrl?: string | undefined
                status?: number | undefined
                statusMessage?: string | undefined
                transformerParameters?: { [x: string]: unknown } | undefined
                transformers?: string[] | undefined
              }
            | undefined
          scenarioName?: string | undefined
          uuid?: string | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/__admin/mappings/find-by-metadata': {
      $post: {
        input: {
          json:
            | { caseInsensitive?: boolean | undefined; equalTo: boolean }
            | { contains: string }
            | { matches: string }
            | { doesNotMatch: string }
            | { equalToJson: string }
            | {
                ignoreArrayOrder?: boolean | undefined
                ignoreExtraElements?: boolean | undefined
                matchesJsonPath: string
              }
            | { equalToXml: string }
            | {
                matchesXpath: string
                namespaces?: { [x: string]: unknown } | undefined
                valuePattern?: { [x: string]: unknown } | undefined
              }
        }
        output: {
          mappings?:
            | {
                id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: string | undefined
                newScenarioState?: string | undefined
                persistent?: boolean | undefined
                postServeActions?: { [x: string]: unknown } | undefined
                priority?: number | undefined
                request?:
                  | {
                      basicAuthCredentials?: { password: string; username: string } | undefined
                      bodyPatterns?: { [x: string]: unknown }[] | undefined
                      cookies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      method?: string | undefined
                      queryParameters?: { [x: string]: unknown } | undefined
                      url?: string | undefined
                      urlPath?: string | undefined
                      urlPathPattern?: string | undefined
                      urlPattern?: string | undefined
                    }
                  | undefined
                requiredScenarioState?: string | undefined
                response?:
                  | {
                      additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                      base64Body?: string | undefined
                      body?: string | undefined
                      bodyFileName?: string | undefined
                      delayDistribution?:
                        | {
                            median?: number | undefined
                            sigma?: number | undefined
                            type?: 'lognormal' | undefined
                          }
                        | {
                            lower?: number | undefined
                            type?: 'uniform' | undefined
                            upper?: number | undefined
                          }
                        | undefined
                      fault?:
                        | 'CONNECTION_RESET_BY_PEER'
                        | 'EMPTY_RESPONSE'
                        | 'MALFORMED_RESPONSE_CHUNK'
                        | 'RANDOM_DATA_THEN_CLOSE'
                        | undefined
                      fixedDelayMilliseconds?: number | undefined
                      fromConfiguredStub?: boolean | undefined
                      headers?: { [x: string]: unknown } | undefined
                      jsonBody?: { [x: string]: unknown } | undefined
                      proxyBaseUrl?: string | undefined
                      status?: number | undefined
                      statusMessage?: string | undefined
                      transformerParameters?: { [x: string]: unknown } | undefined
                      transformers?: string[] | undefined
                    }
                  | undefined
                scenarioName?: string | undefined
                uuid?: string | undefined
              }[]
            | undefined
          meta?: { total: number } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__admin/mappings/import': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/__admin/mappings/remove-by-metadata': {
      $post: {
        input: {
          json:
            | { caseInsensitive?: boolean | undefined; equalTo: boolean }
            | { contains: string }
            | { matches: string }
            | { doesNotMatch: string }
            | { equalToJson: string }
            | {
                ignoreArrayOrder?: boolean | undefined
                ignoreExtraElements?: boolean | undefined
                matchesJsonPath: string
              }
            | { equalToXml: string }
            | {
                matchesXpath: string
                namespaces?: { [x: string]: unknown } | undefined
                valuePattern?: { [x: string]: unknown } | undefined
              }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/__admin/mappings/reset': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/__admin/mappings/save': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/__admin/mappings/:stubMappingId': {
      $delete:
        | {
            input: { param: { stubMappingId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { stubMappingId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { stubMappingId: string } }
            output: {
              id?: string | undefined
              metadata?: { [x: string]: unknown } | undefined
              name?: string | undefined
              newScenarioState?: string | undefined
              persistent?: boolean | undefined
              postServeActions?: { [x: string]: unknown } | undefined
              priority?: number | undefined
              request?:
                | {
                    basicAuthCredentials?: { password: string; username: string } | undefined
                    bodyPatterns?: { [x: string]: unknown }[] | undefined
                    cookies?: { [x: string]: unknown } | undefined
                    headers?: { [x: string]: unknown } | undefined
                    method?: string | undefined
                    queryParameters?: { [x: string]: unknown } | undefined
                    url?: string | undefined
                    urlPath?: string | undefined
                    urlPathPattern?: string | undefined
                    urlPattern?: string | undefined
                  }
                | undefined
              requiredScenarioState?: string | undefined
              response?:
                | {
                    additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                    base64Body?: string | undefined
                    body?: string | undefined
                    bodyFileName?: string | undefined
                    delayDistribution?:
                      | {
                          median?: number | undefined
                          sigma?: number | undefined
                          type?: 'lognormal' | undefined
                        }
                      | {
                          lower?: number | undefined
                          type?: 'uniform' | undefined
                          upper?: number | undefined
                        }
                      | undefined
                    fault?:
                      | 'CONNECTION_RESET_BY_PEER'
                      | 'EMPTY_RESPONSE'
                      | 'MALFORMED_RESPONSE_CHUNK'
                      | 'RANDOM_DATA_THEN_CLOSE'
                      | undefined
                    fixedDelayMilliseconds?: number | undefined
                    fromConfiguredStub?: boolean | undefined
                    headers?: { [x: string]: unknown } | undefined
                    jsonBody?: { [x: string]: unknown } | undefined
                    proxyBaseUrl?: string | undefined
                    status?: number | undefined
                    statusMessage?: string | undefined
                    transformerParameters?: { [x: string]: unknown } | undefined
                    transformers?: string[] | undefined
                  }
                | undefined
              scenarioName?: string | undefined
              uuid?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stubMappingId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { stubMappingId: string } } & {
              json: {
                id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: string | undefined
                newScenarioState?: string | undefined
                persistent?: boolean | undefined
                postServeActions?: { [x: string]: unknown } | undefined
                priority?: number | undefined
                request?:
                  | {
                      basicAuthCredentials?: { password: string; username: string } | undefined
                      bodyPatterns?: { [x: string]: unknown }[] | undefined
                      cookies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      method?: string | undefined
                      queryParameters?: { [x: string]: unknown } | undefined
                      url?: string | undefined
                      urlPath?: string | undefined
                      urlPathPattern?: string | undefined
                      urlPattern?: string | undefined
                    }
                  | undefined
                requiredScenarioState?: string | undefined
                response?:
                  | {
                      additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                      base64Body?: string | undefined
                      body?: string | undefined
                      bodyFileName?: string | undefined
                      delayDistribution?:
                        | {
                            median?: number | undefined
                            sigma?: number | undefined
                            type?: 'lognormal' | undefined
                          }
                        | {
                            lower?: number | undefined
                            type?: 'uniform' | undefined
                            upper?: number | undefined
                          }
                        | undefined
                      fault?:
                        | 'CONNECTION_RESET_BY_PEER'
                        | 'EMPTY_RESPONSE'
                        | 'MALFORMED_RESPONSE_CHUNK'
                        | 'RANDOM_DATA_THEN_CLOSE'
                        | undefined
                      fixedDelayMilliseconds?: number | undefined
                      fromConfiguredStub?: boolean | undefined
                      headers?: { [x: string]: unknown } | undefined
                      jsonBody?: { [x: string]: unknown } | undefined
                      proxyBaseUrl?: string | undefined
                      status?: number | undefined
                      statusMessage?: string | undefined
                      transformerParameters?: { [x: string]: unknown } | undefined
                      transformers?: string[] | undefined
                    }
                  | undefined
                scenarioName?: string | undefined
                uuid?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              metadata?: { [x: string]: unknown } | undefined
              name?: string | undefined
              newScenarioState?: string | undefined
              persistent?: boolean | undefined
              postServeActions?: { [x: string]: unknown } | undefined
              priority?: number | undefined
              request?:
                | {
                    basicAuthCredentials?: { password: string; username: string } | undefined
                    bodyPatterns?: { [x: string]: unknown }[] | undefined
                    cookies?: { [x: string]: unknown } | undefined
                    headers?: { [x: string]: unknown } | undefined
                    method?: string | undefined
                    queryParameters?: { [x: string]: unknown } | undefined
                    url?: string | undefined
                    urlPath?: string | undefined
                    urlPathPattern?: string | undefined
                    urlPattern?: string | undefined
                  }
                | undefined
              requiredScenarioState?: string | undefined
              response?:
                | {
                    additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                    base64Body?: string | undefined
                    body?: string | undefined
                    bodyFileName?: string | undefined
                    delayDistribution?:
                      | {
                          median?: number | undefined
                          sigma?: number | undefined
                          type?: 'lognormal' | undefined
                        }
                      | {
                          lower?: number | undefined
                          type?: 'uniform' | undefined
                          upper?: number | undefined
                        }
                      | undefined
                    fault?:
                      | 'CONNECTION_RESET_BY_PEER'
                      | 'EMPTY_RESPONSE'
                      | 'MALFORMED_RESPONSE_CHUNK'
                      | 'RANDOM_DATA_THEN_CLOSE'
                      | undefined
                    fixedDelayMilliseconds?: number | undefined
                    fromConfiguredStub?: boolean | undefined
                    headers?: { [x: string]: unknown } | undefined
                    jsonBody?: { [x: string]: unknown } | undefined
                    proxyBaseUrl?: string | undefined
                    status?: number | undefined
                    statusMessage?: string | undefined
                    transformerParameters?: { [x: string]: unknown } | undefined
                    transformers?: string[] | undefined
                  }
                | undefined
              scenarioName?: string | undefined
              uuid?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stubMappingId: string } } & {
              json: {
                id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: string | undefined
                newScenarioState?: string | undefined
                persistent?: boolean | undefined
                postServeActions?: { [x: string]: unknown } | undefined
                priority?: number | undefined
                request?:
                  | {
                      basicAuthCredentials?: { password: string; username: string } | undefined
                      bodyPatterns?: { [x: string]: unknown }[] | undefined
                      cookies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      method?: string | undefined
                      queryParameters?: { [x: string]: unknown } | undefined
                      url?: string | undefined
                      urlPath?: string | undefined
                      urlPathPattern?: string | undefined
                      urlPattern?: string | undefined
                    }
                  | undefined
                requiredScenarioState?: string | undefined
                response?:
                  | {
                      additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                      base64Body?: string | undefined
                      body?: string | undefined
                      bodyFileName?: string | undefined
                      delayDistribution?:
                        | {
                            median?: number | undefined
                            sigma?: number | undefined
                            type?: 'lognormal' | undefined
                          }
                        | {
                            lower?: number | undefined
                            type?: 'uniform' | undefined
                            upper?: number | undefined
                          }
                        | undefined
                      fault?:
                        | 'CONNECTION_RESET_BY_PEER'
                        | 'EMPTY_RESPONSE'
                        | 'MALFORMED_RESPONSE_CHUNK'
                        | 'RANDOM_DATA_THEN_CLOSE'
                        | undefined
                      fixedDelayMilliseconds?: number | undefined
                      fromConfiguredStub?: boolean | undefined
                      headers?: { [x: string]: unknown } | undefined
                      jsonBody?: { [x: string]: unknown } | undefined
                      proxyBaseUrl?: string | undefined
                      status?: number | undefined
                      statusMessage?: string | undefined
                      transformerParameters?: { [x: string]: unknown } | undefined
                      transformers?: string[] | undefined
                    }
                  | undefined
                scenarioName?: string | undefined
                uuid?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/__admin/near-misses/request': {
      $post: {
        input: {
          json: {
            absoluteUrl?: string | undefined
            body?: string | undefined
            cookies?: { [x: string]: unknown } | undefined
            headers?: { [x: string]: unknown } | undefined
            method?: string | undefined
            url?: string | undefined
          }
        }
        output: {
          nearMisses?:
            | {
                absoluteUrl?: string | undefined
                body?: string | undefined
                cookies?: { [x: string]: unknown } | undefined
                headers?: { [x: string]: unknown } | undefined
                method?: string | undefined
                url?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__admin/near-misses/request-pattern': {
      $post: {
        input: {
          json: {
            basicAuthCredentials?: { password: string; username: string } | undefined
            bodyPatterns?: { [x: string]: unknown }[] | undefined
            cookies?: { [x: string]: unknown } | undefined
            headers?: { [x: string]: unknown } | undefined
            method?: string | undefined
            queryParameters?: { [x: string]: unknown } | undefined
            url?: string | undefined
            urlPath?: string | undefined
            urlPathPattern?: string | undefined
            urlPattern?: string | undefined
          }
        }
        output: {
          nearMisses?:
            | {
                absoluteUrl?: string | undefined
                body?: string | undefined
                cookies?: { [x: string]: unknown } | undefined
                headers?: { [x: string]: unknown } | undefined
                method?: string | undefined
                url?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__admin/recordings/snapshot': {
      $post: {
        input: {
          json: {
            captureHeaders?: { [x: string]: { caseInsensitive?: boolean | undefined } } | undefined
            extractBodyCriteria?:
              | { binarySizeThreshold?: string | undefined; textSizeThreshold?: string | undefined }
              | undefined
            persist?: boolean | undefined
            repeatsAsScenarios?: boolean | undefined
            requestBodyPattern?:
              | {
                  caseInsensitive?: boolean | undefined
                  ignoreArrayOrder?: boolean | undefined
                  ignoreExtraElements?: boolean | undefined
                  matcher?: 'auto' | undefined
                }
              | { caseInsensitive?: boolean | undefined; matcher?: 'equalTo' | undefined }
              | {
                  ignoreArrayOrder?: boolean | undefined
                  ignoreExtraElements?: boolean | undefined
                  matcher?: 'equalToJson' | undefined
                }
              | { matcher?: 'equalToXml' | undefined }
              | undefined
            transformerParameters?: { [x: string]: unknown } | undefined
            transformers?: string[] | undefined
            filters?:
              | {
                  ids?: string[] | undefined
                  basicAuthCredentials?: { password: string; username: string } | undefined
                  bodyPatterns?: { [x: string]: unknown }[] | undefined
                  cookies?: { [x: string]: unknown } | undefined
                  headers?: { [x: string]: unknown } | undefined
                  method?: string | undefined
                  queryParameters?: { [x: string]: unknown } | undefined
                  url?: string | undefined
                  urlPath?: string | undefined
                  urlPathPattern?: string | undefined
                  urlPattern?: string | undefined
                }
              | undefined
          }
        }
        output: {
          mappings?:
            | {
                id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: string | undefined
                newScenarioState?: string | undefined
                persistent?: boolean | undefined
                postServeActions?: { [x: string]: unknown } | undefined
                priority?: number | undefined
                request?:
                  | {
                      basicAuthCredentials?: { password: string; username: string } | undefined
                      bodyPatterns?: { [x: string]: unknown }[] | undefined
                      cookies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      method?: string | undefined
                      queryParameters?: { [x: string]: unknown } | undefined
                      url?: string | undefined
                      urlPath?: string | undefined
                      urlPathPattern?: string | undefined
                      urlPattern?: string | undefined
                    }
                  | undefined
                requiredScenarioState?: string | undefined
                response?:
                  | {
                      additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                      base64Body?: string | undefined
                      body?: string | undefined
                      bodyFileName?: string | undefined
                      delayDistribution?:
                        | {
                            median?: number | undefined
                            sigma?: number | undefined
                            type?: 'lognormal' | undefined
                          }
                        | {
                            lower?: number | undefined
                            type?: 'uniform' | undefined
                            upper?: number | undefined
                          }
                        | undefined
                      fault?:
                        | 'CONNECTION_RESET_BY_PEER'
                        | 'EMPTY_RESPONSE'
                        | 'MALFORMED_RESPONSE_CHUNK'
                        | 'RANDOM_DATA_THEN_CLOSE'
                        | undefined
                      fixedDelayMilliseconds?: number | undefined
                      fromConfiguredStub?: boolean | undefined
                      headers?: { [x: string]: unknown } | undefined
                      jsonBody?: { [x: string]: unknown } | undefined
                      proxyBaseUrl?: string | undefined
                      status?: number | undefined
                      statusMessage?: string | undefined
                      transformerParameters?: { [x: string]: unknown } | undefined
                      transformers?: string[] | undefined
                    }
                  | undefined
                scenarioName?: string | undefined
                uuid?: string | undefined
              }[]
            | undefined
          meta?: { total: number } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__admin/recordings/start': {
      $post: {
        input: {
          json: {
            captureHeaders?: { [x: string]: { caseInsensitive?: boolean | undefined } } | undefined
            extractBodyCriteria?:
              | { binarySizeThreshold?: string | undefined; textSizeThreshold?: string | undefined }
              | undefined
            persist?: boolean | undefined
            repeatsAsScenarios?: boolean | undefined
            requestBodyPattern?:
              | {
                  caseInsensitive?: boolean | undefined
                  ignoreArrayOrder?: boolean | undefined
                  ignoreExtraElements?: boolean | undefined
                  matcher?: 'auto' | undefined
                }
              | { caseInsensitive?: boolean | undefined; matcher?: 'equalTo' | undefined }
              | {
                  ignoreArrayOrder?: boolean | undefined
                  ignoreExtraElements?: boolean | undefined
                  matcher?: 'equalToJson' | undefined
                }
              | { matcher?: 'equalToXml' | undefined }
              | undefined
            transformerParameters?: { [x: string]: unknown } | undefined
            transformers?: string[] | undefined
            filters?:
              | {
                  basicAuthCredentials?: { password: string; username: string } | undefined
                  bodyPatterns?: { [x: string]: unknown }[] | undefined
                  cookies?: { [x: string]: unknown } | undefined
                  headers?: { [x: string]: unknown } | undefined
                  method?: string | undefined
                  queryParameters?: { [x: string]: unknown } | undefined
                  url?: string | undefined
                  urlPath?: string | undefined
                  urlPathPattern?: string | undefined
                  urlPattern?: string | undefined
                }
              | undefined
            targetBaseUrl?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/__admin/recordings/status': {
      $get: {
        input: {}
        output: { status?: 'NeverStarted' | 'Recording' | 'Stopped' | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__admin/recordings/stop': {
      $post: {
        input: {}
        output: {
          mappings?:
            | {
                id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: string | undefined
                newScenarioState?: string | undefined
                persistent?: boolean | undefined
                postServeActions?: { [x: string]: unknown } | undefined
                priority?: number | undefined
                request?:
                  | {
                      basicAuthCredentials?: { password: string; username: string } | undefined
                      bodyPatterns?: { [x: string]: unknown }[] | undefined
                      cookies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      method?: string | undefined
                      queryParameters?: { [x: string]: unknown } | undefined
                      url?: string | undefined
                      urlPath?: string | undefined
                      urlPathPattern?: string | undefined
                      urlPattern?: string | undefined
                    }
                  | undefined
                requiredScenarioState?: string | undefined
                response?:
                  | {
                      additionalProxyRequestHeaders?: { [x: string]: unknown } | undefined
                      base64Body?: string | undefined
                      body?: string | undefined
                      bodyFileName?: string | undefined
                      delayDistribution?:
                        | {
                            median?: number | undefined
                            sigma?: number | undefined
                            type?: 'lognormal' | undefined
                          }
                        | {
                            lower?: number | undefined
                            type?: 'uniform' | undefined
                            upper?: number | undefined
                          }
                        | undefined
                      fault?:
                        | 'CONNECTION_RESET_BY_PEER'
                        | 'EMPTY_RESPONSE'
                        | 'MALFORMED_RESPONSE_CHUNK'
                        | 'RANDOM_DATA_THEN_CLOSE'
                        | undefined
                      fixedDelayMilliseconds?: number | undefined
                      fromConfiguredStub?: boolean | undefined
                      headers?: { [x: string]: unknown } | undefined
                      jsonBody?: { [x: string]: unknown } | undefined
                      proxyBaseUrl?: string | undefined
                      status?: number | undefined
                      statusMessage?: string | undefined
                      transformerParameters?: { [x: string]: unknown } | undefined
                      transformers?: string[] | undefined
                    }
                  | undefined
                scenarioName?: string | undefined
                uuid?: string | undefined
              }[]
            | undefined
          meta?: { total: number } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__admin/requests': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { query: { limit?: string | undefined; since?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/__admin/requests/count': {
      $post: {
        input: {
          json: {
            basicAuthCredentials?: { password: string; username: string } | undefined
            bodyPatterns?: { [x: string]: unknown }[] | undefined
            cookies?: { [x: string]: unknown } | undefined
            headers?: { [x: string]: unknown } | undefined
            method?: string | undefined
            queryParameters?: { [x: string]: unknown } | undefined
            url?: string | undefined
            urlPath?: string | undefined
            urlPathPattern?: string | undefined
            urlPattern?: string | undefined
          }
        }
        output: { count?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__admin/requests/find': {
      $post: {
        input: {
          json: {
            basicAuthCredentials?: { password: string; username: string } | undefined
            bodyPatterns?: { [x: string]: unknown }[] | undefined
            cookies?: { [x: string]: unknown } | undefined
            headers?: { [x: string]: unknown } | undefined
            method?: string | undefined
            queryParameters?: { [x: string]: unknown } | undefined
            url?: string | undefined
            urlPath?: string | undefined
            urlPathPattern?: string | undefined
            urlPattern?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/__admin/requests/remove': {
      $post: {
        input: {
          json: {
            basicAuthCredentials?: { password: string; username: string } | undefined
            bodyPatterns?: { [x: string]: unknown }[] | undefined
            cookies?: { [x: string]: unknown } | undefined
            headers?: { [x: string]: unknown } | undefined
            method?: string | undefined
            queryParameters?: { [x: string]: unknown } | undefined
            url?: string | undefined
            urlPath?: string | undefined
            urlPathPattern?: string | undefined
            urlPattern?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/__admin/requests/remove-by-metadata': {
      $post: {
        input: {
          json:
            | { caseInsensitive?: boolean | undefined; equalTo: boolean }
            | { contains: string }
            | { matches: string }
            | { doesNotMatch: string }
            | { equalToJson: string }
            | {
                ignoreArrayOrder?: boolean | undefined
                ignoreExtraElements?: boolean | undefined
                matchesJsonPath: string
              }
            | { equalToXml: string }
            | {
                matchesXpath: string
                namespaces?: { [x: string]: unknown } | undefined
                valuePattern?: { [x: string]: unknown } | undefined
              }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/__admin/requests/reset': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/__admin/requests/unmatched': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/__admin/requests/unmatched/near-misses': {
      $get: {
        input: {}
        output: {
          nearMisses?:
            | {
                absoluteUrl?: string | undefined
                body?: string | undefined
                cookies?: { [x: string]: unknown } | undefined
                headers?: { [x: string]: unknown } | undefined
                method?: string | undefined
                url?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__admin/requests/:requestId': {
      $delete: {
        input: { param: { requestId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { requestId: string } }
        output: {}
        outputFormat: string
        status: 404
      }
    }
  } & {
    '/__admin/reset': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/__admin/scenarios': {
      $get: {
        input: {}
        output: {
          scenarios?:
            | {
                id?: string | undefined
                name?: string | undefined
                possibleStates?: string[] | undefined
                state?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__admin/scenarios/reset': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/__admin/settings': {
      $post: {
        input: { json: { fixedDelay?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/__admin/shutdown': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  },
  '/'
>
export default routes
