import { createRoute, z } from '@hono/zod-openapi'

const NearMissesResponse = {
  description: 'Near misses matching criteria',
  content: {
    'application/json': {
      schema: z
        .object({
          nearMisses: z
            .array(
              z
                .object({
                  absoluteUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The full URL to match against',
                      example: 'http://localhost:56738/received-request/2',
                    }),
                  body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Body string to match against',
                      example: 'Hello world',
                    }),
                  cookies: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                      example: {},
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                      example: {
                        Connection: 'keep-alive',
                        Host: 'localhost:56738',
                        'User-Agent': 'Apache-HttpClient/4.5.1 (Java/1.7.0_51)',
                      },
                    }),
                  method: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP request method', example: 'GET' }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The path and query to match exactly against',
                      example: '/received-request/2',
                    }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
      example: {
        nearMisses: [
          {
            matchResult: { distance: 0.06944444444444445 },
            request: {
              absoluteUrl: 'http://localhost:8080/nomatch',
              body: '',
              bodyAsBase64: '',
              browserProxyRequest: false,
              clientIp: '0:0:0:0:0:0:0:1',
              cookies: {},
              headers: { Accept: '*/*', Host: 'localhost:8080', 'User-Agent': 'curl/7.30.0' },
              loggedDate: 1467402464520,
              loggedDateString: '2016-07-01T19:47:44Z',
              method: 'GET',
              url: '/nomatch',
            },
            requestPattern: { method: 'GET', url: '/almostmatch' },
          },
        ],
      },
    },
  },
}

const StubMappingResponse = {
  description: 'The stub mapping',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          id: z
            .string()
            .exactOptional()
            .openapi({ description: "This stub mapping's unique identifier" }),
          metadata: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
            }),
          name: z.string().exactOptional().openapi({ description: "The stub mapping's name" }),
          newScenarioState: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The new state for the scenario to be updated to after this stub is served.',
            }),
          persistent: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
            }),
          postServeActions: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'A map of the names of post serve action extensions to trigger and their parameters.',
            }),
          priority: z
            .int()
            .min(1)
            .exactOptional()
            .openapi({
              description: "This stub mapping's priority relative to others. 1 is highest.",
            }),
          request: z
            .object({
              basicAuthCredentials: z
                .object({ password: z.string(), username: z.string() })
                .exactOptional()
                .openapi({
                  description: 'Pre-emptive basic auth credentials to match against',
                  required: ['username', 'password'],
                }),
              bodyPatterns: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description:
                    'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              cookies: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              headers: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              method: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTTP request method e.g. GET' }),
              queryParameters: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPath: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPathPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
            })
            .exactOptional()
            .openapi({
              example: {
                bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                headers: { 'Content-Type': { equalTo: 'application/json' } },
                method: 'POST',
                url: '/some/thing',
              },
              required: [],
            }),
          requiredScenarioState: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The required state of the scenario in order for this stub to be matched.',
            }),
          response: z
            .object({
              additionalProxyRequestHeaders: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Extra request headers to send when proxying to another host.',
                }),
              base64Body: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                }),
              body: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                }),
              bodyFileName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                }),
              delayDistribution: z
                .xor([
                  z
                    .object({
                      median: z.int().exactOptional(),
                      sigma: z.number().exactOptional(),
                      type: z.literal('lognormal').exactOptional(),
                    })
                    .openapi({
                      description: 'Log normal randomly distributed response delay.',
                      title: 'Log normal',
                      required: [],
                    }),
                  z
                    .object({
                      lower: z.int().exactOptional(),
                      type: z.literal('uniform').exactOptional(),
                      upper: z.int().exactOptional(),
                    })
                    .openapi({
                      description: 'Uniformly distributed random response delay.',
                      title: 'Uniform',
                      required: [],
                    }),
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                }),
              fault: z
                .enum([
                  'CONNECTION_RESET_BY_PEER',
                  'EMPTY_RESPONSE',
                  'MALFORMED_RESPONSE_CHUNK',
                  'RANDOM_DATA_THEN_CLOSE',
                ])
                .exactOptional()
                .openapi({
                  description: 'The fault to apply (instead of a full, valid response).',
                }),
              fixedDelayMilliseconds: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of milliseconds to delay be before sending the response.',
                }),
              fromConfiguredStub: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                }),
              headers: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Map of response headers to send' }),
              jsonBody: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                }),
              proxyBaseUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The base URL of the target to proxy matching requests to.',
                }),
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'The HTTP status code to be returned' }),
              statusMessage: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTTP status message to be returned' }),
              transformerParameters: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Parameters to apply to response transformers.' }),
              transformers: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'List of names of transformers to apply to this response.',
                }),
            })
            .openapi({ required: [] })
            .exactOptional(),
          scenarioName: z
            .string()
            .exactOptional()
            .openapi({ description: 'The name of the scenario that this stub mapping is part of' }),
          uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
        })
        .openapi({ required: [] }),
      example: {
        id: '76ada7b0-49ae-4229-91c4-396a36f18e09',
        priority: 3,
        request: {
          headers: { Accept: { equalTo: 'text/plain' } },
          method: 'GET',
          url: '/some/thing',
        },
        response: { body: 'Hello world!', headers: { 'Content-Type': 'text/plain' }, status: 200 },
      },
    },
  },
}

const RequestPatternRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          basicAuthCredentials: z
            .object({ password: z.string(), username: z.string() })
            .exactOptional()
            .openapi({
              description: 'Pre-emptive basic auth credentials to match against',
              required: ['username', 'password'],
            }),
          bodyPatterns: z
            .array(z.object({}))
            .exactOptional()
            .openapi({
              description:
                'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
            }),
          cookies: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
            }),
          headers: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
            }),
          method: z
            .string()
            .exactOptional()
            .openapi({ description: 'The HTTP request method e.g. GET' }),
          queryParameters: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
            }),
          url: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
            }),
          urlPath: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
            }),
          urlPathPattern: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
            }),
          urlPattern: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
            }),
        })
        .openapi({
          example: {
            bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
            headers: { 'Content-Type': { equalTo: 'application/json' } },
            method: 'POST',
            url: '/some/thing',
          },
          required: [],
        }),
      example: {
        headers: { 'Content-Type': { matches: '.*/xml' } },
        method: 'POST',
        url: '/resource',
      },
    },
  },
  required: true,
}

const SnapshotRecordingRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          captureHeaders: z
            .record(
              z.string(),
              z
                .strictObject({ caseInsensitive: z.boolean().exactOptional() })
                .openapi({ required: [] }),
            )
            .exactOptional()
            .openapi({
              description:
                'Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false',
              example: { Accept: {}, 'Content-Type': { caseInsensitive: true } },
            }),
          extractBodyCriteria: z
            .object({
              binarySizeThreshold: z
                .string()
                .default('0')
                .exactOptional()
                .openapi({
                  description:
                    'Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.',
                  example: '18.2 GB',
                }),
              textSizeThreshold: z
                .string()
                .default('0')
                .exactOptional()
                .openapi({
                  description:
                    'Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.',
                  example: '18.2 GB',
                }),
            })
            .exactOptional()
            .openapi({
              description:
                'Criteria for extracting response bodies to a separate file instead of including it in the stub mapping',
              example: [{ binarySizeThreshold: '1 Mb', textSizeThreshold: '2 kb' }],
              required: [],
            }),
          persist: z
            .boolean()
            .default(true)
            .exactOptional()
            .openapi({
              description: 'Whether to save stub mappings to the file system or just return them',
            }),
          repeatsAsScenarios: z
            .boolean()
            .default(true)
            .exactOptional()
            .openapi({
              description:
                'When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded',
            }),
          requestBodyPattern: z
            .xor([
              z
                .object({
                  caseInsensitive: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'If equalTo is used, match body use case-insensitive string comparison',
                    }),
                  ignoreArrayOrder: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description: 'If equalToJson is used, ignore order of array elements',
                    }),
                  ignoreExtraElements: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'If equalToJson is used, matcher ignores extra elements in objects',
                    }),
                  matcher: z.literal('auto').exactOptional(),
                })
                .openapi({
                  description:
                    'Automatically determine matcher based on content type (the default)',
                  required: [],
                }),
              z
                .object({
                  caseInsensitive: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description: 'Match body using case-insensitive string comparison',
                    }),
                  matcher: z.literal('equalTo').exactOptional(),
                })
                .openapi({
                  description: 'Always match request bodies using equalTo',
                  required: [],
                }),
              z
                .object({
                  ignoreArrayOrder: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Ignore order of array elements' }),
                  ignoreExtraElements: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Ignore extra elements in objects' }),
                  matcher: z.literal('equalToJson').exactOptional(),
                })
                .openapi({
                  description: 'Always match request bodies using equalToJson',
                  required: [],
                }),
              z
                .object({ matcher: z.literal('equalToXml').exactOptional() })
                .openapi({
                  description: 'Always match request bodies using equalToXml',
                  required: [],
                }),
            ])
            .exactOptional()
            .openapi({
              description: 'Control the request body matcher used in generated stub mappings',
            }),
          transformerParameters: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'List of names of stub mappings transformers to apply to generated stubs',
            }),
          transformers: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'Parameters to pass to stub mapping transformers' }),
        })
        .openapi({ required: [] })
        .and(
          z
            .object({
              filters: z
                .object({ ids: z.array(z.string()).exactOptional() })
                .openapi({
                  description: 'Filter requests for which to create stub mapping',
                  required: [],
                })
                .and(
                  z
                    .object({
                      basicAuthCredentials: z
                        .object({ password: z.string(), username: z.string() })
                        .exactOptional()
                        .openapi({
                          description: 'Pre-emptive basic auth credentials to match against',
                          required: ['username', 'password'],
                        }),
                      bodyPatterns: z
                        .array(z.object({}))
                        .exactOptional()
                        .openapi({
                          description:
                            'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                        }),
                      cookies: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                        }),
                      headers: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                        }),
                      method: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The HTTP request method e.g. GET' }),
                      queryParameters: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                        }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                        }),
                      urlPath: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                        }),
                      urlPathPattern: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                        }),
                      urlPattern: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                        }),
                    })
                    .openapi({
                      example: {
                        bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                        headers: { 'Content-Type': { equalTo: 'application/json' } },
                        method: 'POST',
                        url: '/some/thing',
                      },
                      required: [],
                    }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        ),
      example: {
        captureHeaders: { Accept: {}, 'Content-Type': { caseInsensitive: true } },
        extractBodyCriteria: { binarySizeThreshold: '1 Mb', textSizeThreshold: '2 kb' },
        filters: {
          ids: ['40a93c4a-d378-4e07-8321-6158d5dbcb29'],
          method: 'GET',
          urlPathPattern: '/api/.*',
        },
        outputFormat: 'FULL',
        persist: false,
        repeatsAsScenarios: false,
        requestBodyPattern: {
          ignoreArrayOrder: false,
          ignoreExtraElements: true,
          matcher: 'equalToJson',
        },
        transformerParameters: { headerValue: '123' },
        transformers: ['modify-response-header'],
      },
    },
  },
  required: true,
}

const StartRecordingRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          captureHeaders: z
            .record(
              z.string(),
              z
                .strictObject({ caseInsensitive: z.boolean().exactOptional() })
                .openapi({ required: [] }),
            )
            .exactOptional()
            .openapi({
              description:
                'Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false',
              example: { Accept: {}, 'Content-Type': { caseInsensitive: true } },
            }),
          extractBodyCriteria: z
            .object({
              binarySizeThreshold: z
                .string()
                .default('0')
                .exactOptional()
                .openapi({
                  description:
                    'Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.',
                  example: '18.2 GB',
                }),
              textSizeThreshold: z
                .string()
                .default('0')
                .exactOptional()
                .openapi({
                  description:
                    'Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.',
                  example: '18.2 GB',
                }),
            })
            .exactOptional()
            .openapi({
              description:
                'Criteria for extracting response bodies to a separate file instead of including it in the stub mapping',
              example: [{ binarySizeThreshold: '1 Mb', textSizeThreshold: '2 kb' }],
              required: [],
            }),
          persist: z
            .boolean()
            .default(true)
            .exactOptional()
            .openapi({
              description: 'Whether to save stub mappings to the file system or just return them',
            }),
          repeatsAsScenarios: z
            .boolean()
            .default(true)
            .exactOptional()
            .openapi({
              description:
                'When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded',
            }),
          requestBodyPattern: z
            .xor([
              z
                .object({
                  caseInsensitive: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'If equalTo is used, match body use case-insensitive string comparison',
                    }),
                  ignoreArrayOrder: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description: 'If equalToJson is used, ignore order of array elements',
                    }),
                  ignoreExtraElements: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'If equalToJson is used, matcher ignores extra elements in objects',
                    }),
                  matcher: z.literal('auto').exactOptional(),
                })
                .openapi({
                  description:
                    'Automatically determine matcher based on content type (the default)',
                  required: [],
                }),
              z
                .object({
                  caseInsensitive: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description: 'Match body using case-insensitive string comparison',
                    }),
                  matcher: z.literal('equalTo').exactOptional(),
                })
                .openapi({
                  description: 'Always match request bodies using equalTo',
                  required: [],
                }),
              z
                .object({
                  ignoreArrayOrder: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Ignore order of array elements' }),
                  ignoreExtraElements: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Ignore extra elements in objects' }),
                  matcher: z.literal('equalToJson').exactOptional(),
                })
                .openapi({
                  description: 'Always match request bodies using equalToJson',
                  required: [],
                }),
              z
                .object({ matcher: z.literal('equalToXml').exactOptional() })
                .openapi({
                  description: 'Always match request bodies using equalToXml',
                  required: [],
                }),
            ])
            .exactOptional()
            .openapi({
              description: 'Control the request body matcher used in generated stub mappings',
            }),
          transformerParameters: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'List of names of stub mappings transformers to apply to generated stubs',
            }),
          transformers: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'Parameters to pass to stub mapping transformers' }),
        })
        .openapi({ required: [] })
        .and(
          z
            .object({
              filters: z
                .object({
                  basicAuthCredentials: z
                    .object({ password: z.string(), username: z.string() })
                    .exactOptional()
                    .openapi({
                      description: 'Pre-emptive basic auth credentials to match against',
                      required: ['username', 'password'],
                    }),
                  bodyPatterns: z
                    .array(z.object({}))
                    .exactOptional()
                    .openapi({
                      description:
                        'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  cookies: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  method: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP request method e.g. GET' }),
                  queryParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPath: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPathPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                })
                .openapi({
                  example: {
                    bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                    headers: { 'Content-Type': { equalTo: 'application/json' } },
                    method: 'POST',
                    url: '/some/thing',
                  },
                  required: [],
                })
                .and(
                  z
                    .any()
                    .openapi({ description: 'Filter requests for which to create stub mapping' }),
                )
                .exactOptional(),
              targetBaseUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Target URL when using the record and playback API',
                  example: 'http://example.mocklab.io',
                }),
            })
            .openapi({ required: [] }),
        ),
      example: {
        captureHeaders: { Accept: {}, 'Content-Type': { caseInsensitive: true } },
        extractBodyCriteria: { binarySizeThreshold: '10240', textSizeThreshold: '2048' },
        filters: { method: 'GET', urlPathPattern: '/api/.*' },
        persist: false,
        repeatsAsScenarios: false,
        requestBodyPattern: {
          ignoreArrayOrder: false,
          ignoreExtraElements: true,
          matcher: 'equalToJson',
        },
        targetBaseUrl: 'http://example.mocklab.io',
        transformerParameters: { headerValue: '123' },
        transformers: ['modify-response-header'],
      },
    },
  },
  required: true,
}

const StubMappingRequestBody = {
  content: {
    'application/json': {
      schema: z
        .strictObject({
          id: z
            .string()
            .exactOptional()
            .openapi({ description: "This stub mapping's unique identifier" }),
          metadata: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
            }),
          name: z.string().exactOptional().openapi({ description: "The stub mapping's name" }),
          newScenarioState: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The new state for the scenario to be updated to after this stub is served.',
            }),
          persistent: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
            }),
          postServeActions: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'A map of the names of post serve action extensions to trigger and their parameters.',
            }),
          priority: z
            .int()
            .min(1)
            .exactOptional()
            .openapi({
              description: "This stub mapping's priority relative to others. 1 is highest.",
            }),
          request: z
            .object({
              basicAuthCredentials: z
                .object({ password: z.string(), username: z.string() })
                .exactOptional()
                .openapi({
                  description: 'Pre-emptive basic auth credentials to match against',
                  required: ['username', 'password'],
                }),
              bodyPatterns: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description:
                    'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              cookies: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              headers: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              method: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTTP request method e.g. GET' }),
              queryParameters: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPath: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPathPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
            })
            .exactOptional()
            .openapi({
              example: {
                bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                headers: { 'Content-Type': { equalTo: 'application/json' } },
                method: 'POST',
                url: '/some/thing',
              },
              required: [],
            }),
          requiredScenarioState: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The required state of the scenario in order for this stub to be matched.',
            }),
          response: z
            .object({
              additionalProxyRequestHeaders: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Extra request headers to send when proxying to another host.',
                }),
              base64Body: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                }),
              body: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                }),
              bodyFileName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                }),
              delayDistribution: z
                .xor([
                  z
                    .object({
                      median: z.int().exactOptional(),
                      sigma: z.number().exactOptional(),
                      type: z.literal('lognormal').exactOptional(),
                    })
                    .openapi({
                      description: 'Log normal randomly distributed response delay.',
                      title: 'Log normal',
                      required: [],
                    }),
                  z
                    .object({
                      lower: z.int().exactOptional(),
                      type: z.literal('uniform').exactOptional(),
                      upper: z.int().exactOptional(),
                    })
                    .openapi({
                      description: 'Uniformly distributed random response delay.',
                      title: 'Uniform',
                      required: [],
                    }),
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                }),
              fault: z
                .enum([
                  'CONNECTION_RESET_BY_PEER',
                  'EMPTY_RESPONSE',
                  'MALFORMED_RESPONSE_CHUNK',
                  'RANDOM_DATA_THEN_CLOSE',
                ])
                .exactOptional()
                .openapi({
                  description: 'The fault to apply (instead of a full, valid response).',
                }),
              fixedDelayMilliseconds: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of milliseconds to delay be before sending the response.',
                }),
              fromConfiguredStub: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                }),
              headers: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Map of response headers to send' }),
              jsonBody: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                }),
              proxyBaseUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The base URL of the target to proxy matching requests to.',
                }),
              status: z
                .int()
                .exactOptional()
                .openapi({ description: 'The HTTP status code to be returned' }),
              statusMessage: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTTP status message to be returned' }),
              transformerParameters: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Parameters to apply to response transformers.' }),
              transformers: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'List of names of transformers to apply to this response.',
                }),
            })
            .openapi({ required: [] })
            .exactOptional(),
          scenarioName: z
            .string()
            .exactOptional()
            .openapi({ description: 'The name of the scenario that this stub mapping is part of' }),
          uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
        })
        .openapi({ required: [] }),
      example: {
        request: { method: 'GET', url: '/some/thing' },
        response: { body: 'Hello world!', headers: { 'Content-Type': 'text/plain' }, status: 200 },
      },
    },
  },
}

export const getAdminMappingsRoute = createRoute({
  method: 'get',
  path: '/__admin/mappings',
  tags: ['Stub Mappings'],
  summary: 'Get all stub mappings',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The start index of the results to return',
            example: 0,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All stub mappings',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              mappings: z
                .array(
                  z
                    .strictObject({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "This stub mapping's unique identifier" }),
                      metadata: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "The stub mapping's name" }),
                      newScenarioState: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The new state for the scenario to be updated to after this stub is served.',
                        }),
                      persistent: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
                        }),
                      postServeActions: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'A map of the names of post serve action extensions to trigger and their parameters.',
                        }),
                      priority: z
                        .int()
                        .min(1)
                        .exactOptional()
                        .openapi({
                          description:
                            "This stub mapping's priority relative to others. 1 is highest.",
                        }),
                      request: z
                        .object({
                          basicAuthCredentials: z
                            .object({ password: z.string(), username: z.string() })
                            .exactOptional()
                            .openapi({
                              description: 'Pre-emptive basic auth credentials to match against',
                              required: ['username', 'password'],
                            }),
                          bodyPatterns: z
                            .array(z.object({}))
                            .exactOptional()
                            .openapi({
                              description:
                                'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          cookies: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          headers: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          method: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The HTTP request method e.g. GET' }),
                          queryParameters: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPath: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPathPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          example: {
                            bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                            headers: { 'Content-Type': { equalTo: 'application/json' } },
                            method: 'POST',
                            url: '/some/thing',
                          },
                          required: [],
                        }),
                      requiredScenarioState: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The required state of the scenario in order for this stub to be matched.',
                        }),
                      response: z
                        .object({
                          additionalProxyRequestHeaders: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Extra request headers to send when proxying to another host.',
                            }),
                          base64Body: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          body: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          bodyFileName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          delayDistribution: z
                            .xor([
                              z
                                .object({
                                  median: z.int().exactOptional(),
                                  sigma: z.number().exactOptional(),
                                  type: z.literal('lognormal').exactOptional(),
                                })
                                .openapi({
                                  description: 'Log normal randomly distributed response delay.',
                                  title: 'Log normal',
                                  required: [],
                                }),
                              z
                                .object({
                                  lower: z.int().exactOptional(),
                                  type: z.literal('uniform').exactOptional(),
                                  upper: z.int().exactOptional(),
                                })
                                .openapi({
                                  description: 'Uniformly distributed random response delay.',
                                  title: 'Uniform',
                                  required: [],
                                }),
                            ])
                            .exactOptional()
                            .openapi({
                              description:
                                'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                            }),
                          fault: z
                            .enum([
                              'CONNECTION_RESET_BY_PEER',
                              'EMPTY_RESPONSE',
                              'MALFORMED_RESPONSE_CHUNK',
                              'RANDOM_DATA_THEN_CLOSE',
                            ])
                            .exactOptional()
                            .openapi({
                              description:
                                'The fault to apply (instead of a full, valid response).',
                            }),
                          fixedDelayMilliseconds: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of milliseconds to delay be before sending the response.',
                            }),
                          fromConfiguredStub: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                            }),
                          headers: z
                            .object({})
                            .exactOptional()
                            .openapi({ description: 'Map of response headers to send' }),
                          jsonBody: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          proxyBaseUrl: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The base URL of the target to proxy matching requests to.',
                            }),
                          status: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'The HTTP status code to be returned' }),
                          statusMessage: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The HTTP status message to be returned' }),
                          transformerParameters: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description: 'Parameters to apply to response transformers.',
                            }),
                          transformers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'List of names of transformers to apply to this response.',
                            }),
                        })
                        .openapi({ required: [] })
                        .exactOptional(),
                      scenarioName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name of the scenario that this stub mapping is part of',
                        }),
                      uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              meta: z
                .object({ total: z.int().openapi({ example: 4 }) })
                .exactOptional()
                .openapi({ required: ['total'] }),
            })
            .openapi({ required: [] }),
          example: {
            mappings: [
              {
                id: '76ada7b0-49ae-4229-91c4-396a36f18e09',
                request: {
                  headers: { Accept: { equalTo: 'application/json' } },
                  method: 'GET',
                  url: '/search?q=things',
                },
                response: {
                  headers: { 'Content-Type': 'application/json' },
                  jsonBody: ['thing1', 'thing2'],
                  status: 200,
                },
                uuid: '76ada7b0-49ae-4229-91c4-396a36f18e09',
              },
              {
                request: {
                  bodyPatterns: [{ equalToXml: '<stuff />' }],
                  method: 'POST',
                  urlPath: '/some/things',
                },
                response: { status: 201 },
              },
            ],
            meta: { total: 2 },
          },
        },
      },
    },
  },
})

export const postAdminMappingsRoute = createRoute({
  method: 'post',
  path: '/__admin/mappings',
  tags: ['Stub Mappings'],
  summary: 'Create a new stub mapping',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: "This stub mapping's unique identifier" }),
              metadata: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
                }),
              name: z.string().exactOptional().openapi({ description: "The stub mapping's name" }),
              newScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The new state for the scenario to be updated to after this stub is served.',
                }),
              persistent: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
                }),
              postServeActions: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'A map of the names of post serve action extensions to trigger and their parameters.',
                }),
              priority: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: "This stub mapping's priority relative to others. 1 is highest.",
                }),
              request: z
                .object({
                  basicAuthCredentials: z
                    .object({ password: z.string(), username: z.string() })
                    .exactOptional()
                    .openapi({
                      description: 'Pre-emptive basic auth credentials to match against',
                      required: ['username', 'password'],
                    }),
                  bodyPatterns: z
                    .array(z.object({}))
                    .exactOptional()
                    .openapi({
                      description:
                        'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  cookies: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  method: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP request method e.g. GET' }),
                  queryParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPath: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPathPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                })
                .exactOptional()
                .openapi({
                  example: {
                    bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                    headers: { 'Content-Type': { equalTo: 'application/json' } },
                    method: 'POST',
                    url: '/some/thing',
                  },
                  required: [],
                }),
              requiredScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The required state of the scenario in order for this stub to be matched.',
                }),
              response: z
                .object({
                  additionalProxyRequestHeaders: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description: 'Extra request headers to send when proxying to another host.',
                    }),
                  base64Body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  bodyFileName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  delayDistribution: z
                    .xor([
                      z
                        .object({
                          median: z.int().exactOptional(),
                          sigma: z.number().exactOptional(),
                          type: z.literal('lognormal').exactOptional(),
                        })
                        .openapi({
                          description: 'Log normal randomly distributed response delay.',
                          title: 'Log normal',
                          required: [],
                        }),
                      z
                        .object({
                          lower: z.int().exactOptional(),
                          type: z.literal('uniform').exactOptional(),
                          upper: z.int().exactOptional(),
                        })
                        .openapi({
                          description: 'Uniformly distributed random response delay.',
                          title: 'Uniform',
                          required: [],
                        }),
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                    }),
                  fault: z
                    .enum([
                      'CONNECTION_RESET_BY_PEER',
                      'EMPTY_RESPONSE',
                      'MALFORMED_RESPONSE_CHUNK',
                      'RANDOM_DATA_THEN_CLOSE',
                    ])
                    .exactOptional()
                    .openapi({
                      description: 'The fault to apply (instead of a full, valid response).',
                    }),
                  fixedDelayMilliseconds: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Number of milliseconds to delay be before sending the response.',
                    }),
                  fromConfiguredStub: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Map of response headers to send' }),
                  jsonBody: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  proxyBaseUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The base URL of the target to proxy matching requests to.',
                    }),
                  status: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status code to be returned' }),
                  statusMessage: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status message to be returned' }),
                  transformerParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Parameters to apply to response transformers.' }),
                  transformers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'List of names of transformers to apply to this response.',
                    }),
                })
                .openapi({ required: [] })
                .exactOptional(),
              scenarioName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the scenario that this stub mapping is part of',
                }),
              uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
            })
            .openapi({ required: [] }),
          example: {
            request: { method: 'GET', url: '/some/thing' },
            response: {
              body: 'Hello world!',
              headers: { 'Content-Type': 'text/plain' },
              status: 200,
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The stub mapping',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: "This stub mapping's unique identifier" }),
              metadata: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
                }),
              name: z.string().exactOptional().openapi({ description: "The stub mapping's name" }),
              newScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The new state for the scenario to be updated to after this stub is served.',
                }),
              persistent: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
                }),
              postServeActions: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'A map of the names of post serve action extensions to trigger and their parameters.',
                }),
              priority: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: "This stub mapping's priority relative to others. 1 is highest.",
                }),
              request: z
                .object({
                  basicAuthCredentials: z
                    .object({ password: z.string(), username: z.string() })
                    .exactOptional()
                    .openapi({
                      description: 'Pre-emptive basic auth credentials to match against',
                      required: ['username', 'password'],
                    }),
                  bodyPatterns: z
                    .array(z.object({}))
                    .exactOptional()
                    .openapi({
                      description:
                        'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  cookies: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  method: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP request method e.g. GET' }),
                  queryParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPath: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPathPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                })
                .exactOptional()
                .openapi({
                  example: {
                    bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                    headers: { 'Content-Type': { equalTo: 'application/json' } },
                    method: 'POST',
                    url: '/some/thing',
                  },
                  required: [],
                }),
              requiredScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The required state of the scenario in order for this stub to be matched.',
                }),
              response: z
                .object({
                  additionalProxyRequestHeaders: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description: 'Extra request headers to send when proxying to another host.',
                    }),
                  base64Body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  bodyFileName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  delayDistribution: z
                    .xor([
                      z
                        .object({
                          median: z.int().exactOptional(),
                          sigma: z.number().exactOptional(),
                          type: z.literal('lognormal').exactOptional(),
                        })
                        .openapi({
                          description: 'Log normal randomly distributed response delay.',
                          title: 'Log normal',
                          required: [],
                        }),
                      z
                        .object({
                          lower: z.int().exactOptional(),
                          type: z.literal('uniform').exactOptional(),
                          upper: z.int().exactOptional(),
                        })
                        .openapi({
                          description: 'Uniformly distributed random response delay.',
                          title: 'Uniform',
                          required: [],
                        }),
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                    }),
                  fault: z
                    .enum([
                      'CONNECTION_RESET_BY_PEER',
                      'EMPTY_RESPONSE',
                      'MALFORMED_RESPONSE_CHUNK',
                      'RANDOM_DATA_THEN_CLOSE',
                    ])
                    .exactOptional()
                    .openapi({
                      description: 'The fault to apply (instead of a full, valid response).',
                    }),
                  fixedDelayMilliseconds: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Number of milliseconds to delay be before sending the response.',
                    }),
                  fromConfiguredStub: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Map of response headers to send' }),
                  jsonBody: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  proxyBaseUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The base URL of the target to proxy matching requests to.',
                    }),
                  status: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status code to be returned' }),
                  statusMessage: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status message to be returned' }),
                  transformerParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Parameters to apply to response transformers.' }),
                  transformers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'List of names of transformers to apply to this response.',
                    }),
                })
                .openapi({ required: [] })
                .exactOptional(),
              scenarioName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the scenario that this stub mapping is part of',
                }),
              uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
            })
            .openapi({ required: [] }),
          example: {
            id: '76ada7b0-49ae-4229-91c4-396a36f18e09',
            priority: 3,
            request: {
              headers: { Accept: { equalTo: 'text/plain' } },
              method: 'GET',
              url: '/some/thing',
            },
            response: {
              body: 'Hello world!',
              headers: { 'Content-Type': 'text/plain' },
              status: 200,
            },
          },
        },
      },
    },
  },
})

export const deleteAdminMappingsRoute = createRoute({
  method: 'delete',
  path: '/__admin/mappings',
  tags: ['Stub Mappings'],
  summary: 'Delete all stub mappings',
  responses: { 200: { description: 'Successfully deleted' } },
})

export const postAdminMappingsFindByMetadataRoute = createRoute({
  method: 'post',
  path: '/__admin/mappings/find-by-metadata',
  tags: ['Stub Mappings'],
  description: 'Find stubs by matching on their metadata',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ caseInsensitive: z.boolean().exactOptional(), equalTo: z.boolean() })
              .openapi({ required: ['equalTo'], title: 'String equals' }),
            z
              .object({ contains: z.string() })
              .openapi({ required: ['contains'], title: 'String contains' }),
            z
              .object({ matches: z.string() })
              .openapi({ required: ['matches'], title: 'Regular expression match' }),
            z
              .object({ doesNotMatch: z.string() })
              .openapi({ required: ['doesNotMatch'], title: 'Negative regular expression match' }),
            z
              .object({ equalToJson: z.string() })
              .openapi({ required: ['equalToJson'], title: 'JSON equals' }),
            z
              .object({
                ignoreArrayOrder: z.boolean().exactOptional(),
                ignoreExtraElements: z.boolean().exactOptional(),
                matchesJsonPath: z.string(),
              })
              .openapi({ required: ['matchesJsonPath'], title: 'JSONPath match' }),
            z
              .object({ equalToXml: z.string() })
              .openapi({ required: ['equalToXml'], title: 'XML equality' }),
            z
              .object({
                matchesXpath: z.string(),
                namespaces: z.object({}).exactOptional(),
                valuePattern: z.object({}).exactOptional(),
              })
              .openapi({ required: ['matchesXpath'], title: 'XPath match' }),
          ]),
          example: { matchesJsonPath: { equalToJson: '{ "inner": 42 }', expression: '$.outer' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Matched stub mappings',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              mappings: z
                .array(
                  z
                    .strictObject({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "This stub mapping's unique identifier" }),
                      metadata: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "The stub mapping's name" }),
                      newScenarioState: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The new state for the scenario to be updated to after this stub is served.',
                        }),
                      persistent: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
                        }),
                      postServeActions: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'A map of the names of post serve action extensions to trigger and their parameters.',
                        }),
                      priority: z
                        .int()
                        .min(1)
                        .exactOptional()
                        .openapi({
                          description:
                            "This stub mapping's priority relative to others. 1 is highest.",
                        }),
                      request: z
                        .object({
                          basicAuthCredentials: z
                            .object({ password: z.string(), username: z.string() })
                            .exactOptional()
                            .openapi({
                              description: 'Pre-emptive basic auth credentials to match against',
                              required: ['username', 'password'],
                            }),
                          bodyPatterns: z
                            .array(z.object({}))
                            .exactOptional()
                            .openapi({
                              description:
                                'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          cookies: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          headers: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          method: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The HTTP request method e.g. GET' }),
                          queryParameters: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPath: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPathPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          example: {
                            bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                            headers: { 'Content-Type': { equalTo: 'application/json' } },
                            method: 'POST',
                            url: '/some/thing',
                          },
                          required: [],
                        }),
                      requiredScenarioState: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The required state of the scenario in order for this stub to be matched.',
                        }),
                      response: z
                        .object({
                          additionalProxyRequestHeaders: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Extra request headers to send when proxying to another host.',
                            }),
                          base64Body: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          body: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          bodyFileName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          delayDistribution: z
                            .xor([
                              z
                                .object({
                                  median: z.int().exactOptional(),
                                  sigma: z.number().exactOptional(),
                                  type: z.literal('lognormal').exactOptional(),
                                })
                                .openapi({
                                  description: 'Log normal randomly distributed response delay.',
                                  title: 'Log normal',
                                  required: [],
                                }),
                              z
                                .object({
                                  lower: z.int().exactOptional(),
                                  type: z.literal('uniform').exactOptional(),
                                  upper: z.int().exactOptional(),
                                })
                                .openapi({
                                  description: 'Uniformly distributed random response delay.',
                                  title: 'Uniform',
                                  required: [],
                                }),
                            ])
                            .exactOptional()
                            .openapi({
                              description:
                                'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                            }),
                          fault: z
                            .enum([
                              'CONNECTION_RESET_BY_PEER',
                              'EMPTY_RESPONSE',
                              'MALFORMED_RESPONSE_CHUNK',
                              'RANDOM_DATA_THEN_CLOSE',
                            ])
                            .exactOptional()
                            .openapi({
                              description:
                                'The fault to apply (instead of a full, valid response).',
                            }),
                          fixedDelayMilliseconds: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of milliseconds to delay be before sending the response.',
                            }),
                          fromConfiguredStub: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                            }),
                          headers: z
                            .object({})
                            .exactOptional()
                            .openapi({ description: 'Map of response headers to send' }),
                          jsonBody: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          proxyBaseUrl: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The base URL of the target to proxy matching requests to.',
                            }),
                          status: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'The HTTP status code to be returned' }),
                          statusMessage: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The HTTP status message to be returned' }),
                          transformerParameters: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description: 'Parameters to apply to response transformers.',
                            }),
                          transformers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'List of names of transformers to apply to this response.',
                            }),
                        })
                        .openapi({ required: [] })
                        .exactOptional(),
                      scenarioName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name of the scenario that this stub mapping is part of',
                        }),
                      uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              meta: z
                .object({ total: z.int().openapi({ example: 4 }) })
                .exactOptional()
                .openapi({ required: ['total'] }),
            })
            .openapi({ required: [] }),
          example: {
            mappings: [
              {
                id: '76ada7b0-49ae-4229-91c4-396a36f18e09',
                request: {
                  headers: { Accept: { equalTo: 'application/json' } },
                  method: 'GET',
                  url: '/search?q=things',
                },
                response: {
                  headers: { 'Content-Type': 'application/json' },
                  jsonBody: ['thing1', 'thing2'],
                  status: 200,
                },
                uuid: '76ada7b0-49ae-4229-91c4-396a36f18e09',
              },
              {
                request: {
                  bodyPatterns: [{ equalToXml: '<stuff />' }],
                  method: 'POST',
                  urlPath: '/some/things',
                },
                response: { status: 201 },
              },
            ],
            meta: { total: 2 },
          },
        },
      },
    },
  },
})

export const postAdminMappingsImportRoute = createRoute({
  method: 'post',
  path: '/__admin/mappings/import',
  tags: ['Stub Mappings'],
  summary: 'Import stub mappings',
  description: 'Import given stub mappings to the backing store',
  responses: { 200: { description: 'Successfully imported' } },
})

export const postAdminMappingsRemoveByMetadataRoute = createRoute({
  method: 'post',
  path: '/__admin/mappings/remove-by-metadata',
  tags: ['Stub Mappings'],
  summary: 'Delete stub mappings matching metadata',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ caseInsensitive: z.boolean().exactOptional(), equalTo: z.boolean() })
              .openapi({ required: ['equalTo'], title: 'String equals' }),
            z
              .object({ contains: z.string() })
              .openapi({ required: ['contains'], title: 'String contains' }),
            z
              .object({ matches: z.string() })
              .openapi({ required: ['matches'], title: 'Regular expression match' }),
            z
              .object({ doesNotMatch: z.string() })
              .openapi({ required: ['doesNotMatch'], title: 'Negative regular expression match' }),
            z
              .object({ equalToJson: z.string() })
              .openapi({ required: ['equalToJson'], title: 'JSON equals' }),
            z
              .object({
                ignoreArrayOrder: z.boolean().exactOptional(),
                ignoreExtraElements: z.boolean().exactOptional(),
                matchesJsonPath: z.string(),
              })
              .openapi({ required: ['matchesJsonPath'], title: 'JSONPath match' }),
            z
              .object({ equalToXml: z.string() })
              .openapi({ required: ['equalToXml'], title: 'XML equality' }),
            z
              .object({
                matchesXpath: z.string(),
                namespaces: z.object({}).exactOptional(),
                valuePattern: z.object({}).exactOptional(),
              })
              .openapi({ required: ['matchesXpath'], title: 'XPath match' }),
          ]),
          example: { matchesJsonPath: { equalToJson: '{ "inner": 42 }', expression: '$.outer' } },
        },
      },
    },
  },
  responses: { 200: { description: 'The stub mappings were successfully removed' } },
})

export const postAdminMappingsResetRoute = createRoute({
  method: 'post',
  path: '/__admin/mappings/reset',
  tags: ['Stub Mappings'],
  summary: 'Reset stub mappings',
  description: 'Restores stub mappings to the defaults defined back in the backing store',
  responses: { 200: { description: 'Successfully reset' } },
})

export const postAdminMappingsSaveRoute = createRoute({
  method: 'post',
  path: '/__admin/mappings/save',
  tags: ['Stub Mappings'],
  summary: 'Persist stub mappings',
  description: 'Save all persistent stub mappings to the backing store',
  responses: { 200: { description: 'Successfully saved' } },
})

export const getAdminMappingsStubMappingIdRoute = createRoute({
  method: 'get',
  path: '/__admin/mappings/{stubMappingId}',
  tags: ['Stub Mappings'],
  summary: 'Get stub mapping by ID',
  request: {
    params: z.object({
      stubMappingId: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of stub mapping',
            example: '730d3e32-d098-4169-a20c-554c3bedce58',
            in: 'path',
            name: 'stubMappingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The stub mapping',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: "This stub mapping's unique identifier" }),
              metadata: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
                }),
              name: z.string().exactOptional().openapi({ description: "The stub mapping's name" }),
              newScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The new state for the scenario to be updated to after this stub is served.',
                }),
              persistent: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
                }),
              postServeActions: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'A map of the names of post serve action extensions to trigger and their parameters.',
                }),
              priority: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: "This stub mapping's priority relative to others. 1 is highest.",
                }),
              request: z
                .object({
                  basicAuthCredentials: z
                    .object({ password: z.string(), username: z.string() })
                    .exactOptional()
                    .openapi({
                      description: 'Pre-emptive basic auth credentials to match against',
                      required: ['username', 'password'],
                    }),
                  bodyPatterns: z
                    .array(z.object({}))
                    .exactOptional()
                    .openapi({
                      description:
                        'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  cookies: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  method: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP request method e.g. GET' }),
                  queryParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPath: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPathPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                })
                .exactOptional()
                .openapi({
                  example: {
                    bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                    headers: { 'Content-Type': { equalTo: 'application/json' } },
                    method: 'POST',
                    url: '/some/thing',
                  },
                  required: [],
                }),
              requiredScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The required state of the scenario in order for this stub to be matched.',
                }),
              response: z
                .object({
                  additionalProxyRequestHeaders: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description: 'Extra request headers to send when proxying to another host.',
                    }),
                  base64Body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  bodyFileName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  delayDistribution: z
                    .xor([
                      z
                        .object({
                          median: z.int().exactOptional(),
                          sigma: z.number().exactOptional(),
                          type: z.literal('lognormal').exactOptional(),
                        })
                        .openapi({
                          description: 'Log normal randomly distributed response delay.',
                          title: 'Log normal',
                          required: [],
                        }),
                      z
                        .object({
                          lower: z.int().exactOptional(),
                          type: z.literal('uniform').exactOptional(),
                          upper: z.int().exactOptional(),
                        })
                        .openapi({
                          description: 'Uniformly distributed random response delay.',
                          title: 'Uniform',
                          required: [],
                        }),
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                    }),
                  fault: z
                    .enum([
                      'CONNECTION_RESET_BY_PEER',
                      'EMPTY_RESPONSE',
                      'MALFORMED_RESPONSE_CHUNK',
                      'RANDOM_DATA_THEN_CLOSE',
                    ])
                    .exactOptional()
                    .openapi({
                      description: 'The fault to apply (instead of a full, valid response).',
                    }),
                  fixedDelayMilliseconds: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Number of milliseconds to delay be before sending the response.',
                    }),
                  fromConfiguredStub: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Map of response headers to send' }),
                  jsonBody: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  proxyBaseUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The base URL of the target to proxy matching requests to.',
                    }),
                  status: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status code to be returned' }),
                  statusMessage: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status message to be returned' }),
                  transformerParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Parameters to apply to response transformers.' }),
                  transformers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'List of names of transformers to apply to this response.',
                    }),
                })
                .openapi({ required: [] })
                .exactOptional(),
              scenarioName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the scenario that this stub mapping is part of',
                }),
              uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
            })
            .openapi({ required: [] }),
          example: {
            id: '76ada7b0-49ae-4229-91c4-396a36f18e09',
            priority: 3,
            request: {
              headers: { Accept: { equalTo: 'text/plain' } },
              method: 'GET',
              url: '/some/thing',
            },
            response: {
              body: 'Hello world!',
              headers: { 'Content-Type': 'text/plain' },
              status: 200,
            },
          },
        },
      },
    },
    404: { description: 'Stub mapping not found' },
  },
})

export const putAdminMappingsStubMappingIdRoute = createRoute({
  method: 'put',
  path: '/__admin/mappings/{stubMappingId}',
  tags: ['Stub Mappings'],
  summary: 'Update a stub mapping',
  request: {
    params: z.object({
      stubMappingId: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of stub mapping',
            example: '730d3e32-d098-4169-a20c-554c3bedce58',
            in: 'path',
            name: 'stubMappingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: "This stub mapping's unique identifier" }),
              metadata: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
                }),
              name: z.string().exactOptional().openapi({ description: "The stub mapping's name" }),
              newScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The new state for the scenario to be updated to after this stub is served.',
                }),
              persistent: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
                }),
              postServeActions: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'A map of the names of post serve action extensions to trigger and their parameters.',
                }),
              priority: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: "This stub mapping's priority relative to others. 1 is highest.",
                }),
              request: z
                .object({
                  basicAuthCredentials: z
                    .object({ password: z.string(), username: z.string() })
                    .exactOptional()
                    .openapi({
                      description: 'Pre-emptive basic auth credentials to match against',
                      required: ['username', 'password'],
                    }),
                  bodyPatterns: z
                    .array(z.object({}))
                    .exactOptional()
                    .openapi({
                      description:
                        'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  cookies: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  method: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP request method e.g. GET' }),
                  queryParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPath: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPathPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                })
                .exactOptional()
                .openapi({
                  example: {
                    bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                    headers: { 'Content-Type': { equalTo: 'application/json' } },
                    method: 'POST',
                    url: '/some/thing',
                  },
                  required: [],
                }),
              requiredScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The required state of the scenario in order for this stub to be matched.',
                }),
              response: z
                .object({
                  additionalProxyRequestHeaders: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description: 'Extra request headers to send when proxying to another host.',
                    }),
                  base64Body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  bodyFileName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  delayDistribution: z
                    .xor([
                      z
                        .object({
                          median: z.int().exactOptional(),
                          sigma: z.number().exactOptional(),
                          type: z.literal('lognormal').exactOptional(),
                        })
                        .openapi({
                          description: 'Log normal randomly distributed response delay.',
                          title: 'Log normal',
                          required: [],
                        }),
                      z
                        .object({
                          lower: z.int().exactOptional(),
                          type: z.literal('uniform').exactOptional(),
                          upper: z.int().exactOptional(),
                        })
                        .openapi({
                          description: 'Uniformly distributed random response delay.',
                          title: 'Uniform',
                          required: [],
                        }),
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                    }),
                  fault: z
                    .enum([
                      'CONNECTION_RESET_BY_PEER',
                      'EMPTY_RESPONSE',
                      'MALFORMED_RESPONSE_CHUNK',
                      'RANDOM_DATA_THEN_CLOSE',
                    ])
                    .exactOptional()
                    .openapi({
                      description: 'The fault to apply (instead of a full, valid response).',
                    }),
                  fixedDelayMilliseconds: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Number of milliseconds to delay be before sending the response.',
                    }),
                  fromConfiguredStub: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Map of response headers to send' }),
                  jsonBody: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  proxyBaseUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The base URL of the target to proxy matching requests to.',
                    }),
                  status: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status code to be returned' }),
                  statusMessage: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status message to be returned' }),
                  transformerParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Parameters to apply to response transformers.' }),
                  transformers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'List of names of transformers to apply to this response.',
                    }),
                })
                .openapi({ required: [] })
                .exactOptional(),
              scenarioName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the scenario that this stub mapping is part of',
                }),
              uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
            })
            .openapi({ required: [] }),
          example: {
            request: { method: 'GET', url: '/some/thing' },
            response: {
              body: 'Hello world!',
              headers: { 'Content-Type': 'text/plain' },
              status: 200,
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The stub mapping',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: "This stub mapping's unique identifier" }),
              metadata: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
                }),
              name: z.string().exactOptional().openapi({ description: "The stub mapping's name" }),
              newScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The new state for the scenario to be updated to after this stub is served.',
                }),
              persistent: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
                }),
              postServeActions: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'A map of the names of post serve action extensions to trigger and their parameters.',
                }),
              priority: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: "This stub mapping's priority relative to others. 1 is highest.",
                }),
              request: z
                .object({
                  basicAuthCredentials: z
                    .object({ password: z.string(), username: z.string() })
                    .exactOptional()
                    .openapi({
                      description: 'Pre-emptive basic auth credentials to match against',
                      required: ['username', 'password'],
                    }),
                  bodyPatterns: z
                    .array(z.object({}))
                    .exactOptional()
                    .openapi({
                      description:
                        'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  cookies: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  method: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP request method e.g. GET' }),
                  queryParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                    }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPath: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPathPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                  urlPattern: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                    }),
                })
                .exactOptional()
                .openapi({
                  example: {
                    bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                    headers: { 'Content-Type': { equalTo: 'application/json' } },
                    method: 'POST',
                    url: '/some/thing',
                  },
                  required: [],
                }),
              requiredScenarioState: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The required state of the scenario in order for this stub to be matched.',
                }),
              response: z
                .object({
                  additionalProxyRequestHeaders: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description: 'Extra request headers to send when proxying to another host.',
                    }),
                  base64Body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  body: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  bodyFileName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  delayDistribution: z
                    .xor([
                      z
                        .object({
                          median: z.int().exactOptional(),
                          sigma: z.number().exactOptional(),
                          type: z.literal('lognormal').exactOptional(),
                        })
                        .openapi({
                          description: 'Log normal randomly distributed response delay.',
                          title: 'Log normal',
                          required: [],
                        }),
                      z
                        .object({
                          lower: z.int().exactOptional(),
                          type: z.literal('uniform').exactOptional(),
                          upper: z.int().exactOptional(),
                        })
                        .openapi({
                          description: 'Uniformly distributed random response delay.',
                          title: 'Uniform',
                          required: [],
                        }),
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                    }),
                  fault: z
                    .enum([
                      'CONNECTION_RESET_BY_PEER',
                      'EMPTY_RESPONSE',
                      'MALFORMED_RESPONSE_CHUNK',
                      'RANDOM_DATA_THEN_CLOSE',
                    ])
                    .exactOptional()
                    .openapi({
                      description: 'The fault to apply (instead of a full, valid response).',
                    }),
                  fixedDelayMilliseconds: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Number of milliseconds to delay be before sending the response.',
                    }),
                  fromConfiguredStub: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Map of response headers to send' }),
                  jsonBody: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                    }),
                  proxyBaseUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The base URL of the target to proxy matching requests to.',
                    }),
                  status: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status code to be returned' }),
                  statusMessage: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTTP status message to be returned' }),
                  transformerParameters: z
                    .object({})
                    .exactOptional()
                    .openapi({ description: 'Parameters to apply to response transformers.' }),
                  transformers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'List of names of transformers to apply to this response.',
                    }),
                })
                .openapi({ required: [] })
                .exactOptional(),
              scenarioName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the scenario that this stub mapping is part of',
                }),
              uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
            })
            .openapi({ required: [] }),
          example: {
            id: '76ada7b0-49ae-4229-91c4-396a36f18e09',
            priority: 3,
            request: {
              headers: { Accept: { equalTo: 'text/plain' } },
              method: 'GET',
              url: '/some/thing',
            },
            response: {
              body: 'Hello world!',
              headers: { 'Content-Type': 'text/plain' },
              status: 200,
            },
          },
        },
      },
    },
    404: { description: 'Stub mapping not found' },
  },
})

export const deleteAdminMappingsStubMappingIdRoute = createRoute({
  method: 'delete',
  path: '/__admin/mappings/{stubMappingId}',
  tags: ['Stub Mappings'],
  summary: 'Delete a stub mapping',
  request: {
    params: z.object({
      stubMappingId: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of stub mapping',
            example: '730d3e32-d098-4169-a20c-554c3bedce58',
            in: 'path',
            name: 'stubMappingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' }, 404: { description: 'Stub mapping not found' } },
})

export const postAdminNearMissesRequestRoute = createRoute({
  method: 'post',
  path: '/__admin/near-misses/request',
  tags: ['Near Misses'],
  summary: 'Find near misses matching specific request',
  description: 'Find at most 3 near misses for closest stub mappings to the specified request',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              absoluteUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The full URL to match against',
                  example: 'http://localhost:56738/received-request/2',
                }),
              body: z
                .string()
                .exactOptional()
                .openapi({ description: 'Body string to match against', example: 'Hello world' }),
              cookies: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                  example: {},
                }),
              headers: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                  example: {
                    Connection: 'keep-alive',
                    Host: 'localhost:56738',
                    'User-Agent': 'Apache-HttpClient/4.5.1 (Java/1.7.0_51)',
                  },
                }),
              method: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTTP request method', example: 'GET' }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The path and query to match exactly against',
                  example: '/received-request/2',
                }),
            })
            .openapi({ required: [] }),
          example: {
            absoluteUrl: 'http://localhost:8080/actual',
            body: '',
            bodyAsBase64: '',
            browserProxyRequest: false,
            clientIp: '0:0:0:0:0:0:0:1',
            cookies: {},
            headers: { Accept: '*/*', Host: 'localhost:8080', 'User-Agent': 'curl/7.30.0' },
            loggedDate: 1467402464520,
            loggedDateString: '2016-07-01T19:47:44Z',
            method: 'GET',
            url: '/actual',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Near misses matching criteria',
      content: {
        'application/json': {
          schema: z
            .object({
              nearMisses: z
                .array(
                  z
                    .object({
                      absoluteUrl: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The full URL to match against',
                          example: 'http://localhost:56738/received-request/2',
                        }),
                      body: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Body string to match against',
                          example: 'Hello world',
                        }),
                      cookies: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                          example: {},
                        }),
                      headers: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                          example: {
                            Connection: 'keep-alive',
                            Host: 'localhost:56738',
                            'User-Agent': 'Apache-HttpClient/4.5.1 (Java/1.7.0_51)',
                          },
                        }),
                      method: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The HTTP request method', example: 'GET' }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The path and query to match exactly against',
                          example: '/received-request/2',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          example: {
            nearMisses: [
              {
                matchResult: { distance: 0.06944444444444445 },
                request: {
                  absoluteUrl: 'http://localhost:8080/nomatch',
                  body: '',
                  bodyAsBase64: '',
                  browserProxyRequest: false,
                  clientIp: '0:0:0:0:0:0:0:1',
                  cookies: {},
                  headers: { Accept: '*/*', Host: 'localhost:8080', 'User-Agent': 'curl/7.30.0' },
                  loggedDate: 1467402464520,
                  loggedDateString: '2016-07-01T19:47:44Z',
                  method: 'GET',
                  url: '/nomatch',
                },
                requestPattern: { method: 'GET', url: '/almostmatch' },
              },
            ],
          },
        },
      },
    },
  },
})

export const postAdminNearMissesRequestPatternRoute = createRoute({
  method: 'post',
  path: '/__admin/near-misses/request-pattern',
  tags: ['Near Misses'],
  summary: 'Find near misses matching request pattern',
  description:
    'Find at most 3 near misses for closest logged requests to the specified request pattern',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              basicAuthCredentials: z
                .object({ password: z.string(), username: z.string() })
                .exactOptional()
                .openapi({
                  description: 'Pre-emptive basic auth credentials to match against',
                  required: ['username', 'password'],
                }),
              bodyPatterns: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description:
                    'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              cookies: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              headers: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              method: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTTP request method e.g. GET' }),
              queryParameters: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPath: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPathPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
            })
            .openapi({
              example: {
                bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                headers: { 'Content-Type': { equalTo: 'application/json' } },
                method: 'POST',
                url: '/some/thing',
              },
              required: [],
            }),
          example: {
            headers: { 'Content-Type': { matches: '.*/xml' } },
            method: 'POST',
            url: '/resource',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Near misses matching criteria',
      content: {
        'application/json': {
          schema: z
            .object({
              nearMisses: z
                .array(
                  z
                    .object({
                      absoluteUrl: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The full URL to match against',
                          example: 'http://localhost:56738/received-request/2',
                        }),
                      body: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Body string to match against',
                          example: 'Hello world',
                        }),
                      cookies: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                          example: {},
                        }),
                      headers: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                          example: {
                            Connection: 'keep-alive',
                            Host: 'localhost:56738',
                            'User-Agent': 'Apache-HttpClient/4.5.1 (Java/1.7.0_51)',
                          },
                        }),
                      method: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The HTTP request method', example: 'GET' }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The path and query to match exactly against',
                          example: '/received-request/2',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          example: {
            nearMisses: [
              {
                matchResult: { distance: 0.06944444444444445 },
                request: {
                  absoluteUrl: 'http://localhost:8080/nomatch',
                  body: '',
                  bodyAsBase64: '',
                  browserProxyRequest: false,
                  clientIp: '0:0:0:0:0:0:0:1',
                  cookies: {},
                  headers: { Accept: '*/*', Host: 'localhost:8080', 'User-Agent': 'curl/7.30.0' },
                  loggedDate: 1467402464520,
                  loggedDateString: '2016-07-01T19:47:44Z',
                  method: 'GET',
                  url: '/nomatch',
                },
                requestPattern: { method: 'GET', url: '/almostmatch' },
              },
            ],
          },
        },
      },
    },
  },
})

export const postAdminRecordingsSnapshotRoute = createRoute({
  method: 'post',
  path: '/__admin/recordings/snapshot',
  tags: ['Recordings'],
  summary: 'Take a snapshot recording',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              captureHeaders: z
                .record(
                  z.string(),
                  z
                    .strictObject({ caseInsensitive: z.boolean().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false',
                  example: { Accept: {}, 'Content-Type': { caseInsensitive: true } },
                }),
              extractBodyCriteria: z
                .object({
                  binarySizeThreshold: z
                    .string()
                    .default('0')
                    .exactOptional()
                    .openapi({
                      description:
                        'Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.',
                      example: '18.2 GB',
                    }),
                  textSizeThreshold: z
                    .string()
                    .default('0')
                    .exactOptional()
                    .openapi({
                      description:
                        'Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.',
                      example: '18.2 GB',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Criteria for extracting response bodies to a separate file instead of including it in the stub mapping',
                  example: [{ binarySizeThreshold: '1 Mb', textSizeThreshold: '2 kb' }],
                  required: [],
                }),
              persist: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to save stub mappings to the file system or just return them',
                }),
              repeatsAsScenarios: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded',
                }),
              requestBodyPattern: z
                .xor([
                  z
                    .object({
                      caseInsensitive: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({
                          description:
                            'If equalTo is used, match body use case-insensitive string comparison',
                        }),
                      ignoreArrayOrder: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({
                          description: 'If equalToJson is used, ignore order of array elements',
                        }),
                      ignoreExtraElements: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({
                          description:
                            'If equalToJson is used, matcher ignores extra elements in objects',
                        }),
                      matcher: z.literal('auto').exactOptional(),
                    })
                    .openapi({
                      description:
                        'Automatically determine matcher based on content type (the default)',
                      required: [],
                    }),
                  z
                    .object({
                      caseInsensitive: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({
                          description: 'Match body using case-insensitive string comparison',
                        }),
                      matcher: z.literal('equalTo').exactOptional(),
                    })
                    .openapi({
                      description: 'Always match request bodies using equalTo',
                      required: [],
                    }),
                  z
                    .object({
                      ignoreArrayOrder: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({ description: 'Ignore order of array elements' }),
                      ignoreExtraElements: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({ description: 'Ignore extra elements in objects' }),
                      matcher: z.literal('equalToJson').exactOptional(),
                    })
                    .openapi({
                      description: 'Always match request bodies using equalToJson',
                      required: [],
                    }),
                  z
                    .object({ matcher: z.literal('equalToXml').exactOptional() })
                    .openapi({
                      description: 'Always match request bodies using equalToXml',
                      required: [],
                    }),
                ])
                .exactOptional()
                .openapi({
                  description: 'Control the request body matcher used in generated stub mappings',
                }),
              transformerParameters: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'List of names of stub mappings transformers to apply to generated stubs',
                }),
              transformers: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Parameters to pass to stub mapping transformers' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  filters: z
                    .object({ ids: z.array(z.string()).exactOptional() })
                    .openapi({
                      description: 'Filter requests for which to create stub mapping',
                      required: [],
                    })
                    .and(
                      z
                        .object({
                          basicAuthCredentials: z
                            .object({ password: z.string(), username: z.string() })
                            .exactOptional()
                            .openapi({
                              description: 'Pre-emptive basic auth credentials to match against',
                              required: ['username', 'password'],
                            }),
                          bodyPatterns: z
                            .array(z.object({}))
                            .exactOptional()
                            .openapi({
                              description:
                                'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          cookies: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          headers: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          method: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The HTTP request method e.g. GET' }),
                          queryParameters: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPath: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPathPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                        })
                        .openapi({
                          example: {
                            bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                            headers: { 'Content-Type': { equalTo: 'application/json' } },
                            method: 'POST',
                            url: '/some/thing',
                          },
                          required: [],
                        }),
                    )
                    .exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          example: {
            captureHeaders: { Accept: {}, 'Content-Type': { caseInsensitive: true } },
            extractBodyCriteria: { binarySizeThreshold: '1 Mb', textSizeThreshold: '2 kb' },
            filters: {
              ids: ['40a93c4a-d378-4e07-8321-6158d5dbcb29'],
              method: 'GET',
              urlPathPattern: '/api/.*',
            },
            outputFormat: 'FULL',
            persist: false,
            repeatsAsScenarios: false,
            requestBodyPattern: {
              ignoreArrayOrder: false,
              ignoreExtraElements: true,
              matcher: 'equalToJson',
            },
            transformerParameters: { headerValue: '123' },
            transformers: ['modify-response-header'],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully took a snapshot recording',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              mappings: z
                .array(
                  z
                    .strictObject({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "This stub mapping's unique identifier" }),
                      metadata: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "The stub mapping's name" }),
                      newScenarioState: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The new state for the scenario to be updated to after this stub is served.',
                        }),
                      persistent: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
                        }),
                      postServeActions: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'A map of the names of post serve action extensions to trigger and their parameters.',
                        }),
                      priority: z
                        .int()
                        .min(1)
                        .exactOptional()
                        .openapi({
                          description:
                            "This stub mapping's priority relative to others. 1 is highest.",
                        }),
                      request: z
                        .object({
                          basicAuthCredentials: z
                            .object({ password: z.string(), username: z.string() })
                            .exactOptional()
                            .openapi({
                              description: 'Pre-emptive basic auth credentials to match against',
                              required: ['username', 'password'],
                            }),
                          bodyPatterns: z
                            .array(z.object({}))
                            .exactOptional()
                            .openapi({
                              description:
                                'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          cookies: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          headers: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          method: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The HTTP request method e.g. GET' }),
                          queryParameters: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPath: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPathPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          example: {
                            bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                            headers: { 'Content-Type': { equalTo: 'application/json' } },
                            method: 'POST',
                            url: '/some/thing',
                          },
                          required: [],
                        }),
                      requiredScenarioState: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The required state of the scenario in order for this stub to be matched.',
                        }),
                      response: z
                        .object({
                          additionalProxyRequestHeaders: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Extra request headers to send when proxying to another host.',
                            }),
                          base64Body: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          body: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          bodyFileName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          delayDistribution: z
                            .xor([
                              z
                                .object({
                                  median: z.int().exactOptional(),
                                  sigma: z.number().exactOptional(),
                                  type: z.literal('lognormal').exactOptional(),
                                })
                                .openapi({
                                  description: 'Log normal randomly distributed response delay.',
                                  title: 'Log normal',
                                  required: [],
                                }),
                              z
                                .object({
                                  lower: z.int().exactOptional(),
                                  type: z.literal('uniform').exactOptional(),
                                  upper: z.int().exactOptional(),
                                })
                                .openapi({
                                  description: 'Uniformly distributed random response delay.',
                                  title: 'Uniform',
                                  required: [],
                                }),
                            ])
                            .exactOptional()
                            .openapi({
                              description:
                                'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                            }),
                          fault: z
                            .enum([
                              'CONNECTION_RESET_BY_PEER',
                              'EMPTY_RESPONSE',
                              'MALFORMED_RESPONSE_CHUNK',
                              'RANDOM_DATA_THEN_CLOSE',
                            ])
                            .exactOptional()
                            .openapi({
                              description:
                                'The fault to apply (instead of a full, valid response).',
                            }),
                          fixedDelayMilliseconds: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of milliseconds to delay be before sending the response.',
                            }),
                          fromConfiguredStub: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                            }),
                          headers: z
                            .object({})
                            .exactOptional()
                            .openapi({ description: 'Map of response headers to send' }),
                          jsonBody: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          proxyBaseUrl: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The base URL of the target to proxy matching requests to.',
                            }),
                          status: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'The HTTP status code to be returned' }),
                          statusMessage: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The HTTP status message to be returned' }),
                          transformerParameters: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description: 'Parameters to apply to response transformers.',
                            }),
                          transformers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'List of names of transformers to apply to this response.',
                            }),
                        })
                        .openapi({ required: [] })
                        .exactOptional(),
                      scenarioName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name of the scenario that this stub mapping is part of',
                        }),
                      uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              meta: z
                .object({ total: z.int().openapi({ example: 4 }) })
                .exactOptional()
                .openapi({ required: ['total'] }),
            })
            .openapi({ required: [] }),
          example: {
            mappings: [
              {
                id: '093f1027-e5e0-4921-9e6d-e619dfd5d2c7',
                name: 'recordables_123',
                persistent: true,
                request: { method: 'GET', url: '/recordables/123' },
                response: {
                  body: '{\n  "message": "Congratulations on your first recording!"\n}',
                  headers: { 'Content-Type': 'application/json' },
                  status: 200,
                },
                uuid: '093f1027-e5e0-4921-9e6d-e619dfd5d2c7',
              },
            ],
          },
        },
      },
    },
  },
})

export const postAdminRecordingsStartRoute = createRoute({
  method: 'post',
  path: '/__admin/recordings/start',
  tags: ['Recordings'],
  summary: 'Start recording',
  description: 'Begin recording stub mappings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              captureHeaders: z
                .record(
                  z.string(),
                  z
                    .strictObject({ caseInsensitive: z.boolean().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false',
                  example: { Accept: {}, 'Content-Type': { caseInsensitive: true } },
                }),
              extractBodyCriteria: z
                .object({
                  binarySizeThreshold: z
                    .string()
                    .default('0')
                    .exactOptional()
                    .openapi({
                      description:
                        'Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.',
                      example: '18.2 GB',
                    }),
                  textSizeThreshold: z
                    .string()
                    .default('0')
                    .exactOptional()
                    .openapi({
                      description:
                        'Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.',
                      example: '18.2 GB',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Criteria for extracting response bodies to a separate file instead of including it in the stub mapping',
                  example: [{ binarySizeThreshold: '1 Mb', textSizeThreshold: '2 kb' }],
                  required: [],
                }),
              persist: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to save stub mappings to the file system or just return them',
                }),
              repeatsAsScenarios: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded',
                }),
              requestBodyPattern: z
                .xor([
                  z
                    .object({
                      caseInsensitive: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({
                          description:
                            'If equalTo is used, match body use case-insensitive string comparison',
                        }),
                      ignoreArrayOrder: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({
                          description: 'If equalToJson is used, ignore order of array elements',
                        }),
                      ignoreExtraElements: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({
                          description:
                            'If equalToJson is used, matcher ignores extra elements in objects',
                        }),
                      matcher: z.literal('auto').exactOptional(),
                    })
                    .openapi({
                      description:
                        'Automatically determine matcher based on content type (the default)',
                      required: [],
                    }),
                  z
                    .object({
                      caseInsensitive: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({
                          description: 'Match body using case-insensitive string comparison',
                        }),
                      matcher: z.literal('equalTo').exactOptional(),
                    })
                    .openapi({
                      description: 'Always match request bodies using equalTo',
                      required: [],
                    }),
                  z
                    .object({
                      ignoreArrayOrder: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({ description: 'Ignore order of array elements' }),
                      ignoreExtraElements: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({ description: 'Ignore extra elements in objects' }),
                      matcher: z.literal('equalToJson').exactOptional(),
                    })
                    .openapi({
                      description: 'Always match request bodies using equalToJson',
                      required: [],
                    }),
                  z
                    .object({ matcher: z.literal('equalToXml').exactOptional() })
                    .openapi({
                      description: 'Always match request bodies using equalToXml',
                      required: [],
                    }),
                ])
                .exactOptional()
                .openapi({
                  description: 'Control the request body matcher used in generated stub mappings',
                }),
              transformerParameters: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'List of names of stub mappings transformers to apply to generated stubs',
                }),
              transformers: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Parameters to pass to stub mapping transformers' }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  filters: z
                    .object({
                      basicAuthCredentials: z
                        .object({ password: z.string(), username: z.string() })
                        .exactOptional()
                        .openapi({
                          description: 'Pre-emptive basic auth credentials to match against',
                          required: ['username', 'password'],
                        }),
                      bodyPatterns: z
                        .array(z.object({}))
                        .exactOptional()
                        .openapi({
                          description:
                            'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                        }),
                      cookies: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                        }),
                      headers: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                        }),
                      method: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The HTTP request method e.g. GET' }),
                      queryParameters: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                        }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                        }),
                      urlPath: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                        }),
                      urlPathPattern: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                        }),
                      urlPattern: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                        }),
                    })
                    .openapi({
                      example: {
                        bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                        headers: { 'Content-Type': { equalTo: 'application/json' } },
                        method: 'POST',
                        url: '/some/thing',
                      },
                      required: [],
                    })
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Filter requests for which to create stub mapping',
                        }),
                    )
                    .exactOptional(),
                  targetBaseUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Target URL when using the record and playback API',
                      example: 'http://example.mocklab.io',
                    }),
                })
                .openapi({ required: [] }),
            ),
          example: {
            captureHeaders: { Accept: {}, 'Content-Type': { caseInsensitive: true } },
            extractBodyCriteria: { binarySizeThreshold: '10240', textSizeThreshold: '2048' },
            filters: { method: 'GET', urlPathPattern: '/api/.*' },
            persist: false,
            repeatsAsScenarios: false,
            requestBodyPattern: {
              ignoreArrayOrder: false,
              ignoreExtraElements: true,
              matcher: 'equalToJson',
            },
            targetBaseUrl: 'http://example.mocklab.io',
            transformerParameters: { headerValue: '123' },
            transformers: ['modify-response-header'],
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successfully started recording' } },
})

export const getAdminRecordingsStatusRoute = createRoute({
  method: 'get',
  path: '/__admin/recordings/status',
  tags: ['Recordings'],
  summary: 'Get recording status',
  responses: {
    200: {
      description: 'Successfully got the record status',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['NeverStarted', 'Recording', 'Stopped'])
                .exactOptional()
                .openapi({ example: 'Stopped' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAdminRecordingsStopRoute = createRoute({
  method: 'post',
  path: '/__admin/recordings/stop',
  tags: ['Recordings'],
  summary: 'Stop recording',
  description: 'End recording of stub mappings',
  responses: {
    200: {
      description: 'Successfully stopped recording',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              mappings: z
                .array(
                  z
                    .strictObject({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "This stub mapping's unique identifier" }),
                      metadata: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "The stub mapping's name" }),
                      newScenarioState: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The new state for the scenario to be updated to after this stub is served.',
                        }),
                      persistent: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.',
                        }),
                      postServeActions: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'A map of the names of post serve action extensions to trigger and their parameters.',
                        }),
                      priority: z
                        .int()
                        .min(1)
                        .exactOptional()
                        .openapi({
                          description:
                            "This stub mapping's priority relative to others. 1 is highest.",
                        }),
                      request: z
                        .object({
                          basicAuthCredentials: z
                            .object({ password: z.string(), username: z.string() })
                            .exactOptional()
                            .openapi({
                              description: 'Pre-emptive basic auth credentials to match against',
                              required: ['username', 'password'],
                            }),
                          bodyPatterns: z
                            .array(z.object({}))
                            .exactOptional()
                            .openapi({
                              description:
                                'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          cookies: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          headers: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          method: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The HTTP request method e.g. GET' }),
                          queryParameters: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                            }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPath: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPathPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                          urlPattern: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          example: {
                            bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                            headers: { 'Content-Type': { equalTo: 'application/json' } },
                            method: 'POST',
                            url: '/some/thing',
                          },
                          required: [],
                        }),
                      requiredScenarioState: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The required state of the scenario in order for this stub to be matched.',
                        }),
                      response: z
                        .object({
                          additionalProxyRequestHeaders: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Extra request headers to send when proxying to another host.',
                            }),
                          base64Body: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          body: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          bodyFileName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          delayDistribution: z
                            .xor([
                              z
                                .object({
                                  median: z.int().exactOptional(),
                                  sigma: z.number().exactOptional(),
                                  type: z.literal('lognormal').exactOptional(),
                                })
                                .openapi({
                                  description: 'Log normal randomly distributed response delay.',
                                  title: 'Log normal',
                                  required: [],
                                }),
                              z
                                .object({
                                  lower: z.int().exactOptional(),
                                  type: z.literal('uniform').exactOptional(),
                                  upper: z.int().exactOptional(),
                                })
                                .openapi({
                                  description: 'Uniformly distributed random response delay.',
                                  title: 'Uniform',
                                  required: [],
                                }),
                            ])
                            .exactOptional()
                            .openapi({
                              description:
                                'The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.',
                            }),
                          fault: z
                            .enum([
                              'CONNECTION_RESET_BY_PEER',
                              'EMPTY_RESPONSE',
                              'MALFORMED_RESPONSE_CHUNK',
                              'RANDOM_DATA_THEN_CLOSE',
                            ])
                            .exactOptional()
                            .openapi({
                              description:
                                'The fault to apply (instead of a full, valid response).',
                            }),
                          fixedDelayMilliseconds: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of milliseconds to delay be before sending the response.',
                            }),
                          fromConfiguredStub: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.',
                            }),
                          headers: z
                            .object({})
                            .exactOptional()
                            .openapi({ description: 'Map of response headers to send' }),
                          jsonBody: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description:
                                'The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.',
                            }),
                          proxyBaseUrl: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The base URL of the target to proxy matching requests to.',
                            }),
                          status: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'The HTTP status code to be returned' }),
                          statusMessage: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The HTTP status message to be returned' }),
                          transformerParameters: z
                            .object({})
                            .exactOptional()
                            .openapi({
                              description: 'Parameters to apply to response transformers.',
                            }),
                          transformers: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'List of names of transformers to apply to this response.',
                            }),
                        })
                        .openapi({ required: [] })
                        .exactOptional(),
                      scenarioName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name of the scenario that this stub mapping is part of',
                        }),
                      uuid: z.string().exactOptional().openapi({ description: 'Alias for the id' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              meta: z
                .object({ total: z.int().openapi({ example: 4 }) })
                .exactOptional()
                .openapi({ required: ['total'] }),
            })
            .openapi({ required: [] }),
          example: {
            mappings: [
              {
                id: '093f1027-e5e0-4921-9e6d-e619dfd5d2c7',
                name: 'recordables_123',
                persistent: true,
                request: { method: 'GET', url: '/recordables/123' },
                response: {
                  body: '{\n  "message": "Congratulations on your first recording!"\n}',
                  headers: { 'Content-Type': 'application/json' },
                  status: 200,
                },
                uuid: '093f1027-e5e0-4921-9e6d-e619dfd5d2c7',
              },
            ],
          },
        },
      },
    },
  },
})

export const getAdminRequestsRoute = createRoute({
  method: 'get',
  path: '/__admin/requests',
  tags: ['Requests'],
  summary: 'Get all requests in journal',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return',
            example: 10,
            in: 'query',
            name: 'limit',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return logged requests after this date',
            example: '2016-10-05T12:33:01.000Z',
            in: 'query',
            name: 'since',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of received requests', content: {} } },
})

export const deleteAdminRequestsRoute = createRoute({
  method: 'delete',
  path: '/__admin/requests',
  tags: ['Requests'],
  summary: 'Delete all requests in journal',
  responses: { 200: { description: 'Successfully deleted' } },
})

export const postAdminRequestsCountRoute = createRoute({
  method: 'post',
  path: '/__admin/requests/count',
  tags: ['Requests'],
  summary: 'Count requests by criteria',
  description: 'Count requests logged in the journal matching the specified criteria',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              basicAuthCredentials: z
                .object({ password: z.string(), username: z.string() })
                .exactOptional()
                .openapi({
                  description: 'Pre-emptive basic auth credentials to match against',
                  required: ['username', 'password'],
                }),
              bodyPatterns: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description:
                    'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              cookies: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              headers: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              method: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTTP request method e.g. GET' }),
              queryParameters: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPath: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPathPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
            })
            .openapi({
              example: {
                bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                headers: { 'Content-Type': { equalTo: 'application/json' } },
                method: 'POST',
                url: '/some/thing',
              },
              required: [],
            }),
          example: {
            headers: { 'Content-Type': { matches: '.*/xml' } },
            method: 'POST',
            url: '/resource',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Number of matching requests',
      content: {
        'application/json': {
          schema: z
            .object({ count: z.int().exactOptional().openapi({ example: 4 }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAdminRequestsFindRoute = createRoute({
  method: 'post',
  path: '/__admin/requests/find',
  tags: ['Requests'],
  summary: 'Find requests by criteria',
  description: 'Retrieve details of requests logged in the journal matching the specified criteria',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              basicAuthCredentials: z
                .object({ password: z.string(), username: z.string() })
                .exactOptional()
                .openapi({
                  description: 'Pre-emptive basic auth credentials to match against',
                  required: ['username', 'password'],
                }),
              bodyPatterns: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description:
                    'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              cookies: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              headers: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              method: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTTP request method e.g. GET' }),
              queryParameters: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPath: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPathPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
            })
            .openapi({
              example: {
                bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                headers: { 'Content-Type': { equalTo: 'application/json' } },
                method: 'POST',
                url: '/some/thing',
              },
              required: [],
            }),
          example: {
            headers: { 'Content-Type': { matches: '.*/xml' } },
            method: 'POST',
            url: '/resource',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Matching request details', content: {} } },
})

export const postAdminRequestsRemoveRoute = createRoute({
  method: 'post',
  path: '/__admin/requests/remove',
  tags: ['Requests'],
  summary: 'Remove requests by criteria',
  description: 'Removed requests logged in the journal matching the specified criteria',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              basicAuthCredentials: z
                .object({ password: z.string(), username: z.string() })
                .exactOptional()
                .openapi({
                  description: 'Pre-emptive basic auth credentials to match against',
                  required: ['username', 'password'],
                }),
              bodyPatterns: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  description:
                    'Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              cookies: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              headers: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              method: z
                .string()
                .exactOptional()
                .openapi({ description: 'The HTTP request method e.g. GET' }),
              queryParameters: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPath: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPathPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
              urlPattern: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.',
                }),
            })
            .openapi({
              example: {
                bodyPatterns: [{ equalToJson: '{ "numbers": [1, 2, 3] }' }],
                headers: { 'Content-Type': { equalTo: 'application/json' } },
                method: 'POST',
                url: '/some/thing',
              },
              required: [],
            }),
          example: {
            headers: { 'Content-Type': { matches: '.*/xml' } },
            method: 'POST',
            url: '/resource',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Removed request details', content: {} } },
})

export const postAdminRequestsRemoveByMetadataRoute = createRoute({
  method: 'post',
  path: '/__admin/requests/remove-by-metadata',
  tags: ['Requests'],
  summary: 'Delete requests mappings matching metadata',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ caseInsensitive: z.boolean().exactOptional(), equalTo: z.boolean() })
              .openapi({ required: ['equalTo'], title: 'String equals' }),
            z
              .object({ contains: z.string() })
              .openapi({ required: ['contains'], title: 'String contains' }),
            z
              .object({ matches: z.string() })
              .openapi({ required: ['matches'], title: 'Regular expression match' }),
            z
              .object({ doesNotMatch: z.string() })
              .openapi({ required: ['doesNotMatch'], title: 'Negative regular expression match' }),
            z
              .object({ equalToJson: z.string() })
              .openapi({ required: ['equalToJson'], title: 'JSON equals' }),
            z
              .object({
                ignoreArrayOrder: z.boolean().exactOptional(),
                ignoreExtraElements: z.boolean().exactOptional(),
                matchesJsonPath: z.string(),
              })
              .openapi({ required: ['matchesJsonPath'], title: 'JSONPath match' }),
            z
              .object({ equalToXml: z.string() })
              .openapi({ required: ['equalToXml'], title: 'XML equality' }),
            z
              .object({
                matchesXpath: z.string(),
                namespaces: z.object({}).exactOptional(),
                valuePattern: z.object({}).exactOptional(),
              })
              .openapi({ required: ['matchesXpath'], title: 'XPath match' }),
          ]),
          example: { matchesJsonPath: { equalToJson: '{ "inner": 42 }', expression: '$.outer' } },
        },
      },
    },
  },
  responses: { 200: { description: 'Removed request details', content: {} } },
})

export const postAdminRequestsResetRoute = createRoute({
  method: 'post',
  path: '/__admin/requests/reset',
  tags: ['Requests'],
  summary: 'Empty the request journal',
  responses: { 200: { description: 'Successfully reset' } },
  deprecated: true,
})

export const getAdminRequestsUnmatchedRoute = createRoute({
  method: 'get',
  path: '/__admin/requests/unmatched',
  tags: ['Requests'],
  summary: 'Find unmatched requests',
  description: "Get details of logged requests that weren't matched by any stub mapping",
  responses: { 200: { description: 'Unmatched request details', content: {} } },
})

export const getAdminRequestsUnmatchedNearMissesRoute = createRoute({
  method: 'get',
  path: '/__admin/requests/unmatched/near-misses',
  tags: ['Near Misses'],
  description: 'Retrieve near-misses for all unmatched requests',
  responses: {
    200: {
      description: 'Near misses matching criteria',
      content: {
        'application/json': {
          schema: z
            .object({
              nearMisses: z
                .array(
                  z
                    .object({
                      absoluteUrl: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The full URL to match against',
                          example: 'http://localhost:56738/received-request/2',
                        }),
                      body: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Body string to match against',
                          example: 'Hello world',
                        }),
                      cookies: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                          example: {},
                        }),
                      headers: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Header patterns to match against in the <key>: { "<predicate>": "<value>" } form',
                          example: {
                            Connection: 'keep-alive',
                            Host: 'localhost:56738',
                            'User-Agent': 'Apache-HttpClient/4.5.1 (Java/1.7.0_51)',
                          },
                        }),
                      method: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The HTTP request method', example: 'GET' }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The path and query to match exactly against',
                          example: '/received-request/2',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          example: {
            nearMisses: [
              {
                matchResult: { distance: 0.06944444444444445 },
                request: {
                  absoluteUrl: 'http://localhost:8080/nomatch',
                  body: '',
                  bodyAsBase64: '',
                  browserProxyRequest: false,
                  clientIp: '0:0:0:0:0:0:0:1',
                  cookies: {},
                  headers: { Accept: '*/*', Host: 'localhost:8080', 'User-Agent': 'curl/7.30.0' },
                  loggedDate: 1467402464520,
                  loggedDateString: '2016-07-01T19:47:44Z',
                  method: 'GET',
                  url: '/nomatch',
                },
                requestPattern: { method: 'GET', url: '/almostmatch' },
              },
            ],
          },
        },
      },
    },
  },
})

export const getAdminRequestsRequestIdRoute = createRoute({
  method: 'get',
  path: '/__admin/requests/{requestId}',
  tags: ['Requests'],
  summary: 'Get request by ID',
  request: {
    params: z.object({
      requestId: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of the logged request',
            example: '12fb14bb-600e-4bfa-bd8d-be7f12562c99',
            in: 'path',
            name: 'requestId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} }, 404: { description: 'Request not found' } },
})

export const deleteAdminRequestsRequestIdRoute = createRoute({
  method: 'delete',
  path: '/__admin/requests/{requestId}',
  tags: ['Requests'],
  summary: 'Delete request by ID',
  request: {
    params: z.object({
      requestId: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of the logged request',
            example: '12fb14bb-600e-4bfa-bd8d-be7f12562c99',
            in: 'path',
            name: 'requestId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successfully deleted' } },
})

export const postAdminResetRoute = createRoute({
  method: 'post',
  path: '/__admin/reset',
  tags: ['System'],
  summary: 'Reset mappings and request journal',
  description: 'Reset mappings to the default state and reset the request journal',
  responses: { 200: { description: 'Successfully reset' } },
})

export const getAdminScenariosRoute = createRoute({
  method: 'get',
  path: '/__admin/scenarios',
  tags: ['Scenarios'],
  summary: 'Get all scenarios',
  responses: {
    200: {
      description: 'All scenarios',
      content: {
        'application/json': {
          schema: z
            .object({
              scenarios: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The scenario ID',
                          example: 'c8d249ec-d86d-48b1-88a8-a660e6848042',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The scenario name', example: 'my_scenario' }),
                      possibleStates: z
                        .array(
                          z
                            .string()
                            .default('Started')
                            .openapi({ description: 'All the states this scenario can be in' }),
                        )
                        .exactOptional()
                        .openapi({ example: ['Started', 'state_1', 'state_2'] }),
                      state: z
                        .string()
                        .default('Started')
                        .exactOptional()
                        .openapi({
                          description: 'The current state of this scenario',
                          example: 'state_2',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAdminScenariosResetRoute = createRoute({
  method: 'post',
  path: '/__admin/scenarios/reset',
  tags: ['Scenarios'],
  summary: 'Reset the state of all scenarios',
  responses: { 200: { description: 'Successfully reset' } },
})

export const postAdminSettingsRoute = createRoute({
  method: 'post',
  path: '/__admin/settings',
  tags: ['System'],
  summary: 'Update global settings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([
              z
                .object({
                  median: z.int().exactOptional(),
                  sigma: z.number().exactOptional(),
                  type: z.literal('lognormal').exactOptional(),
                })
                .openapi({
                  description: 'Log normal randomly distributed response delay.',
                  title: 'Log normal',
                  required: [],
                }),
              z
                .object({
                  lower: z.int().exactOptional(),
                  type: z.literal('uniform').exactOptional(),
                  upper: z.int().exactOptional(),
                })
                .openapi({
                  description: 'Uniformly distributed random response delay.',
                  title: 'Uniform',
                  required: [],
                }),
            ])
            .and(
              z
                .object({ fixedDelay: z.number().exactOptional() })
                .openapi({ example: { fixedDelay: 500 }, required: [] }),
            ),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Settings successfully updated' } },
})

export const postAdminShutdownRoute = createRoute({
  method: 'post',
  path: '/__admin/shutdown',
  tags: ['System'],
  description: 'Shutdown the WireMock server',
  responses: { 200: { description: 'Server will be shut down' } },
})
