import { createRoute, z } from '@hono/zod-openapi'

const _400Schema = z
  .object({
    code: z
      .string()
      .min(1)
      .openapi({ description: 'The error code name', example: 'invalid_parameter' }),
    errors: z
      .array(
        z
          .object({
            code: z
              .string()
              .min(1)
              .exactOptional()
              .openapi({ description: 'The error code name', example: 'rego_unsafe_var_error' }),
            location: z
              .object({
                col: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'The column in the policy module where the error occurred',
                    example: 1,
                  }),
                file: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The policy module name that generated the error',
                    example: 'example1',
                  }),
                row: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'The line number in the policy module where the error occurred',
                    example: 3,
                  }),
              })
              .exactOptional()
              .openapi({ description: 'Where the error occurred', required: [] }),
            message: z
              .string()
              .min(1)
              .exactOptional()
              .openapi({
                description: 'A general description of the error',
                example: 'var x is unsafe',
              }),
          })
          .openapi({ required: [] }),
      )
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
          'Errors that may have been generated during the parse, compile, or installation of a policy module',
      }),
    message: z
      .string()
      .min(1)
      .openapi({
        description: 'The description of the error',
        example: 'error(s) occurred while compiling module(s)',
      }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('_400')

const _404Schema = z
  .object({
    code: z
      .string()
      .min(1)
      .openapi({ description: 'The error code name', example: 'resource_not_found' }),
    message: z
      .string()
      .min(1)
      .openapi({
        description:
          'The description of the error (including the name of any undefined policy module)',
        example: 'storage_not_found_error: policy id \\"partial\\"',
      }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('_404')

const _200ExplanationsSchema = z
  .object({
    explanation: z
      .array(
        z
          .object({
            locals: z
              .array(
                z
                  .object({
                    key: z
                      .object({
                        type: z.string().exactOptional(),
                        value: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    value: z
                      .object({
                        type: z.string().exactOptional(),
                        value: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  "The query's term bindings at the point when the trace event was emitted.",
              }),
            node: z
              .object({
                index: z.number().exactOptional().openapi({ description: 'Node number' }),
                terms: z
                  .array(
                    z
                      .object({
                        type: z.string().exactOptional().openapi({ example: 'var' }),
                        value: z.string().exactOptional().openapi({ example: '$term1' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'The AST element associated with the evaluation step.',
                externalDocs: {
                  description: 'AST',
                  url: 'https://godoc.org/github.com/open-policy-agent/opa/ast',
                },
                required: [],
              }),
            op: z
              .enum(['enter', 'exit', 'eval', 'fail', 'redo'])
              .exactOptional()
              .openapi({
                description:
                  'The kind of *trace event*\n\nEach trace event represents a step in the query evaluation process. Trace events are emitted at the following points:\n- enter - before a body or rule is evaluated\n- exit - after a body or rule has evaluated successfully\n- eval - before an expression is evaluated\n- fail - after an expression has evaluated to false.\n- redo - before evaluation restarts from a body, rule, or expression.\n\nBy default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.',
                example: 'enter',
              }),
            parent_id: z
              .number()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The parent query. Use this field to identify trace events from related queries.\n\nFor example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.',
                example: 0,
              }),
            query_id: z
              .number()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.',
                example: 0,
              }),
            type: z
              .enum(['expr', 'rule', 'body'])
              .exactOptional()
              .openapi({ description: 'The type of the **node** field', example: 'expr' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_200Explanations')

const _200MetricsSchema = z
  .object({
    metrics: z
      .object({
        counter_server_query_cache_hit: z
          .number()
          .exactOptional()
          .openapi({ description: '*Description is forthcoming*', example: 0 }),
        timer_query_compile_stage_build_comprehension_index_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 43000,
          }),
        timer_query_compile_stage_check_safety_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 852000,
          }),
        timer_query_compile_stage_check_types_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 577000,
          }),
        timer_query_compile_stage_check_undefined_funcs_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 426000,
          }),
        timer_query_compile_stage_check_unsafe_builtins_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 14000,
          }),
        timer_query_compile_stage_resolve_refs_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 3000,
          }),
        timer_query_compile_stage_rewrite_comprehension_terms_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 329000,
          }),
        timer_query_compile_stage_rewrite_dynamic_terms_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 27000,
          }),
        timer_query_compile_stage_rewrite_expr_terms_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 40000,
          }),
        timer_query_compile_stage_rewrite_local_vars_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 187000,
          }),
        timer_query_compile_stage_rewrite_to_capture_value_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 1178000,
          }),
        timer_query_compile_stage_rewrite_with_values_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: '(Only returned if `instrument` is true.) *Description is forthcoming*',
            example: 23000,
          }),
        timer_rego_input_parse_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Time taken (in nanonseconds) to parse the input',
            example: 69994,
          }),
        timer_rego_module_compile_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Time taken (in nanonseconds) to compile the loaded policy modules',
            example: 69994,
          }),
        timer_rego_module_parse_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Time taken (in nanoseconds) to parse the input policy module',
            example: 12345,
          }),
        timer_rego_query_compile_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Time taken (in nanoseconds) to compile the query',
            example: 4096,
          }),
        timer_rego_query_eval_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Time taken (in nanonseconds) to evaluate the query',
            example: 69994,
          }),
        timer_rego_query_parse_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Time taken (in nanoseconds) to parse the query',
            example: 4096,
          }),
        timer_server_handler_ns: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Time taken (in nanoseconds) to handle the API request',
            example: 631000,
          }),
        timer_server_read_bytes_ns: z
          .number()
          .exactOptional()
          .openapi({ description: '*Description is forthcoming*', example: 631000 }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('_200Metrics')

const _200ProvenanceSchema = z
  .object({
    provenance: z
      .object({
        build_commit: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Git commit id of this OPA build.', example: '4c6e524' }),
        build_hostname: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The hostname where this instance was built.',
            example: '3bb58334a5a9',
          }),
        build_timestamp: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'When this OPA instance was built (in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime))',
          }),
        bundles: z
          .record(z.string(), z.any())
          .exactOptional()
          .openapi({
            description: 'A set of key-value pairs describing each bundle activated on the server.',
          }),
        version: z
          .string()
          .exactOptional()
          .openapi({ description: 'The version of this OPA instance' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('_200Provenance')

const _200ResultSchema = z
  .object({
    result: z
      .array(
        z
          .object({
            ast: z
              .object({
                package: z
                  .object({
                    path: z
                      .array(
                        z
                          .object({
                            type: z
                              .enum(['import', 'package'])
                              .exactOptional()
                              .openapi({
                                description: 'The type of the path operation',
                                example: 'import',
                              }),
                            value: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The path variable',
                                example: 'data.opa.example',
                              }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: 'The path to the package' }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                rules: z
                  .array(
                    z
                      .object({
                        body: z
                          .array(
                            z
                              .object({
                                index: z
                                  .number()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The location of this term in the list (starts at 0)',
                                    example: 1,
                                  }),
                                terms: z
                                  .array(
                                    z
                                      .object({
                                        type: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description: 'The type of the term variable',
                                            example: 'var',
                                          }),
                                        value: z
                                          .array(
                                            z
                                              .object({
                                                type: z.string().exactOptional(),
                                                value: z.string().exactOptional(),
                                              })
                                              .openapi({ required: [] }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'The list of types and values for the term variable',
                                          }),
                                      })
                                      .openapi({ required: [] }),
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'The type/value pairing for this term' }),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional()
                          .openapi({ description: 'A list of the terms in this rule' }),
                        head: z
                          .object({
                            key: z
                              .object({
                                type: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'The type of the head', example: 'var' }),
                                value: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'The value of the head', example: '$0' }),
                              })
                              .exactOptional()
                              .openapi({
                                description: "The type/value pairing for this rule's head",
                                required: [],
                              }),
                            name: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The head of the rule',
                                example: 'violations',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                      })
                      .openapi({ required: [] }),
                  )
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
                      'When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)',
                    externalDocs: {
                      description: 'Rules',
                      url: 'https://www.openpolicyagent.org/docs/latest/policy-language/#rules',
                    },
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  'The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.',
                externalDocs: {
                  description: 'AST',
                  url: 'https://godoc.org/github.com/open-policy-agent/opa/ast',
                },
                required: [],
              }),
            id: z
              .string()
              .min(1)
              .exactOptional()
              .openapi({ description: 'The name of a policy module', example: 'example2' }),
            raw: z
              .string()
              .min(1)
              .exactOptional()
              .openapi({
                description: 'A string representation of the full Rego policy',
                example:
                  'package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\"http\\"\\n\\tpublic_servers[server]\\n}\\n',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_200Result')

const _200SingleResultSchema = z
  .object({
    result: z
      .object({
        bundles: z
          .object({
            authz: z
              .object({
                service: z
                  .string()
                  .min(1)
                  .exactOptional()
                  .openapi({ description: 'Service', example: 'acmecorp' }),
              })
              .exactOptional()
              .openapi({ description: 'Auth', required: [] }),
          })
          .exactOptional()
          .openapi({ description: 'Bundles', required: [] }),
        decision_logs: z
          .object({
            service: z
              .string()
              .min(1)
              .exactOptional()
              .openapi({ description: 'Service', example: 'acmecorp' }),
          })
          .exactOptional()
          .openapi({ description: 'Logs', required: [] }),
        default_authorization_decision: z
          .string()
          .exactOptional()
          .openapi({ example: '/system/authz/allow' }),
        default_decision: z.string().exactOptional().openapi({ example: '/system/main' }),
        keys: z
          .object({
            'global-key': z
              .object({
                scope: z
                  .string()
                  .min(1)
                  .exactOptional()
                  .openapi({ description: 'Scope', example: 'read' }),
              })
              .exactOptional()
              .openapi({ description: 'Global Key', required: [] }),
          })
          .exactOptional()
          .openapi({ description: 'Keys', required: [] }),
        labels: z
          .object({
            id: z
              .string()
              .min(1)
              .exactOptional()
              .openapi({ description: 'Label ID', example: 'test-id' }),
            version: z
              .string()
              .min(1)
              .exactOptional()
              .openapi({ description: 'Version', example: '0.27.0' }),
          })
          .exactOptional()
          .openapi({ description: 'Labels', required: [] }),
        services: z
          .object({
            acmecorp: z
              .object({
                url: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'https://example.com/control-plane-api/v1' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ description: 'The types of services', required: [] }),
        status: z
          .object({
            service: z
              .string()
              .min(1)
              .exactOptional()
              .openapi({ description: 'Service', example: 'acmecorp' }),
          })
          .exactOptional()
          .openapi({ description: 'Status', required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('_200SingleResult')

const DataSchemaSchema = z
  .any()
  .openapi({ example: '{\n  "users": {\n    "user-id-1": {\n      "isAdmin": true\n    }\n  }\n}' })
  .openapi('DataSchema')

const InputSchemaSchema = z
  .record(z.string(), z.any())
  .openapi({
    example: '{\n  "input": {\n   "example": {\n     "flag": true\n     }\n   }\n }',
    'x-examples': {
      example: '{\n  "input": {\n   "example": {\n     "flag": true\n     }\n   }\n }',
    },
  })
  .openapi('InputSchema')

const PartialQuerySchemaSchema = z
  .record(z.string(), z.any())
  .openapi({
    example:
      '{\n  "query": "data.example.allow == true",\n  "input": {\n    "subject": {\n      "clearance_level": 4\n    }\n  },\n  "unknowns": [\n    "data.reports"\n    ]\n}',
  })
  .openapi('PartialQuerySchema')

const PatchesSchemaSchema = z
  .array(
    z
      .object({
        op: z
          .enum(['add', 'remove', 'replace', 'move', 'copy', 'test'])
          .openapi({ description: 'JSON patch operation type', example: 'add' }),
        path: z
          .string()
          .min(1)
          .openapi({
            description:
              "A [JSON pointer](https://tools.ietf.org/html/rfc6901) to a location within the target document where the operation is performed.\n\nThe *effective path* is this value prefixed with the API call's `path` parameter.\n\nThe server will return a *bad request* (404) response if:\n\n- The *parent* of the effective path does not refer to an existing document\n- For **remove** and **replace** operations, the effective path does not refer to an existing document.",
            example: '-',
          }),
        value: z
          .record(z.string(), z.any())
          .exactOptional()
          .openapi({
            description: 'The value to add, replace or test.',
            example:
              '{\n  "id": "s5",\n  "name": "job",\n  "protocols": ["amqp"],\n  "ports": ["p3"]\n}',
          }),
      })
      .openapi({ description: 'A JSON patch operation', required: ['op', 'path'] }),
  )
  .min(1)
  .openapi({ description: 'A list of one or more [JSON patch operations](http://jsonpatch.com/)' })
  .openapi('PatchesSchema')

const QSchemaSchema = z
  .record(z.string(), z.any())
  .openapi({
    example: '{\n  "query": "data.servers[i].ports[_] = \\"p2\\"; data.servers[i].name = name"\n}',
  })
  .openapi('QSchema')

const QueryInputSchemaSchema = z
  .record(z.string(), z.any())
  .openapi({ example: '{\n  "user": ["alice"]\n}' })
  .openapi('QueryInputSchema')

const WebhookInputSchemaSchema = z
  .record(z.string(), z.any())
  .openapi({ example: '{\n  "example": {\n    "flag": true\n    }\n }' })
  .openapi('WebhookInputSchema')

const BadRequestResponseResponse = {
  description: 'Bad request',
  content: { 'application/json': { schema: _400Schema } },
}

const NotFoundResponseResponse = {
  description: 'Not found (for example, a requested policy module or document does not exist)',
  content: { 'application/json': { schema: _404Schema } },
}

const ServerErrorResponseResponse = {
  description: 'Server error',
  content: { 'application/json': { schema: _400Schema } },
}

const SuccessQueryResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: _200ResultSchema.and(_200MetricsSchema).and(_200ExplanationsSchema),
    },
  },
}

const SuccessResponseResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: _200ResultSchema
        .and(_200ProvenanceSchema)
        .and(_200MetricsSchema)
        .and(_200ExplanationsSchema),
    },
  },
}

const SuccessResultResponse = {
  description: 'Success',
  content: { 'application/json': { schema: _200ResultSchema } },
}

const SuccessSingleResultResponse = {
  description: 'Success',
  content: { 'application/json': { schema: _200SingleResultSchema } },
}

const SuccessZipResponseResponse = {
  description: "Success. You will find a gzip file is in the response's message body",
  content: {
    'application/gzip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
  },
}

const BundlesParameterParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Reports on bundle activation status (useful for 'ready' checks at startup).\n\nThis includes any discovery bundles or bundles defined in the loaded discovery configuration.",
      example: true,
      in: 'query',
      name: 'bundles',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const ExplainParameterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If set to *full*, response will include query explanations in addition to the result.',
      example: 'full',
      in: 'query',
      name: 'explain',
      required: false,
      schema: { type: 'string' },
    },
  })

const IdParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The name of a policy module',
      example: 'example1',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const IfNoneMatchParameterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The server will respect the If-None-Match header if it is set to * (in other words, it will not overwrite an existing document located at the specified `path`).',
      example: '*',
      in: 'header',
      name: 'If-None-Match',
      required: false,
      schema: { type: 'string' },
    },
  })

const InputParameterParamsSchema = z
  .record(z.string(), z.any())
  .exactOptional()
  .openapi({
    param: {
      description:
        'Provide the text for an [input document](https://www.openpolicyagent.org/docs/latest/kubernetes-primer/#input-document) in JSON format',
      in: 'query',
      name: 'input',
      required: false,
      schema: {
        additionalProperties: {},
        example: { input: { example: { flag: true } } },
        type: 'object',
      },
    },
    example: { input: { example: { flag: true } } },
  })

const InstrumentParameterParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If true, response will return additional performance metrics in addition to the result and the standard metrics.\n\n**Caution:** This can add significant overhead to query evaluation. The recommendation is to only use this parameter if you are debugging a performance problem.',
      example: false,
      in: 'query',
      name: 'instrument',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const MetricsParameterParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'If true, compiler performance metrics will be returned in the response.',
      example: false,
      in: 'query',
      name: 'metrics',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const PathParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      allowReserved: true,
      description:
        'A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.',
      example: 'opa/examples/public_servers',
      in: 'path',
      name: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const PluginsParameterParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Reports on plugin status',
      example: false,
      in: 'query',
      name: 'plugins',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const PrettyParameterParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'If true, response will be in a human-readable format.',
      example: true,
      in: 'query',
      name: 'pretty',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const ProvenanceParameterParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If true, response will include build and version information in addition to the result.',
      example: false,
      in: 'query',
      name: 'provenance',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const QParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The [URL-encoded](https://www.w3schools.com/tags/ref_urlencode.ASP) ad-hoc query to execute.',
      example: '{"query": "data.servers[i].ports[_] = \\"p2\\"; data.servers[i].name = name"}',
      in: 'query',
      name: 'q',
      required: true,
      schema: { type: 'string' },
    },
  })

const WebhookPathParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.',
      example: 'opa/examples/allow_request',
      in: 'path',
      name: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Query API'],
  summary: 'Execute a simple query',
  description:
    'This API queries the document at */data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.\nFor example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the */data/system/main* document:\n\n  ```yaml\n  package system\n  main = msg {\n    msg := sprintf("hello, %v", input.user)\n  }\n  ```\n\nThe server will return a *not found* (404) response if */data/system/main* is undefined.',
  operationId: 'postSimpleQuery',
  request: {
    query: z.object({ pretty: PrettyParameterParamsSchema }),
    body: {
      description: 'The text of the input document (in JSON format)',
      content: { 'application/json': { schema: QueryInputSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    400: BadRequestResponseResponse,
    404: NotFoundResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Health API'],
  summary: 'Health',
  description:
    "This API endpoint verifies that the server is operational.\n\nThe response from the server is either 200 or 500:\n- **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.\n- **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.\n\n---\n**Note**\nThis check is only for initial bundle activation. Subsequent downloads will not affect the health check.\n\nUse the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.\n\n---",
  externalDocs: {
    description: 'Bundles',
    url: 'https://www.openpolicyagent.org/docs/latest/management/#bundles',
  },
  operationId: 'getHealth',
  request: {
    query: z.object({
      bundles: BundlesParameterParamsSchema,
      plugins: PluginsParameterParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OPA service is healthy' },
    500: { description: 'OPA service is not healthy' },
  },
})

export const postV0DataPathRoute = createRoute({
  method: 'post',
  path: '/v0/data/{path}',
  tags: ['Data API'],
  summary: 'Get a document (with webhook)',
  description:
    'The example given here assumes you have created a policy (with `PUT /v1/policies/{path}`), such as:\n\n  ```yaml\n  package opa.examples\n  import input.example.flag\n  allow_request { flag == true }\n  ```\n\nThe server will return a *not found* (404) response if the requested document is missing or undefined.\n',
  operationId: 'getDocumentWithWebHook',
  request: {
    params: z.object({ path: WebhookPathParameterParamsSchema }),
    query: z.object({ pretty: PrettyParameterParamsSchema }),
    body: {
      description: 'The input document (in JSON format)',
      content: { 'application/x-yaml': { schema: WebhookInputSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: SuccessResponseResponse,
    400: BadRequestResponseResponse,
    404: NotFoundResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const postV1CompileRoute = createRoute({
  method: 'post',
  path: '/v1/compile',
  tags: ['Compile API'],
  summary: 'Compile',
  description:
    'This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):\n\n```yaml\npackage example\nallow {\n  input.subject.clearance_level >= data.reports[_].clearance_level\n}\n```\nCompile API **request body** so that it contain the following fields:\n\n| Field | Type | Required | Description |\n| --- | --- | --- | --- |\n| `query` | `string` | Yes | The query to partially evaluate and compile. |\n| `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |\n| `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `["input"]`]). |\n\nFor example:\n\n```json\n{\n  "query": "data.example.allow == true",\n  "input": {\n    "subject": {\n      "clearance_level": 4\n    }\n  },\n  "unknowns": [\n    "data.reports"\n    ]\n}\n```\n### Partial evaluation\nIn some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.',
  externalDocs: {
    description: 'Partial evaluation article',
    url: 'https://blog.openpolicyagent.org/partial-evaluation-162750eaf422',
  },
  operationId: 'postCompile',
  request: {
    query: z.object({
      pretty: PrettyParameterParamsSchema,
      explain: ExplainParameterParamsSchema,
      metrics: MetricsParameterParamsSchema,
      instrument: InstrumentParameterParamsSchema,
    }),
    body: {
      description: 'The query (in JSON format)',
      content: { 'application/json': { schema: PartialQuerySchemaSchema } },
    },
  },
  responses: {
    200: SuccessQueryResponse,
    400: BadRequestResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const getV1ConfigRoute = createRoute({
  method: 'get',
  path: '/v1/config',
  tags: ['Config API'],
  summary: 'Get configurations',
  description:
    'This API endpoint responds with active configuration (result response)\n\n---\n**Note**\nThe `credentials` field in the `services` configuration and\n\nThe `private_key` and `key` fields in the `keys` configuration will be omitted from the API response\n\n---',
  operationId: 'getConfig',
  request: { query: z.object({ pretty: PrettyParameterParamsSchema }) },
  responses: { 200: SuccessSingleResultResponse, 500: ServerErrorResponseResponse },
})

export const getV1DataPathRoute = createRoute({
  method: 'get',
  path: '/v1/data/{path}',
  tags: ['Data API'],
  summary: 'Get a document',
  description:
    'This API endpoint returns the document specified by `path`.\n\nThe server will return a *bad request* (400) response if either:\n- The query requires an input document and you do not provide it\n- You provide the input document but the query has already defined it.',
  operationId: 'getDocument',
  request: {
    params: z.object({ path: PathParameterParamsSchema }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['input']
        const taken: string[] = ['pretty', 'provenance', 'explain', 'metrics', 'instrument']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          input: InputParameterParamsSchema,
          pretty: PrettyParameterParamsSchema,
          provenance: ProvenanceParameterParamsSchema,
          explain: ExplainParameterParamsSchema,
          metrics: MetricsParameterParamsSchema,
          instrument: InstrumentParameterParamsSchema,
        }),
      ),
  },
  responses: {
    200: SuccessResponseResponse,
    400: BadRequestResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const putV1DataPathRoute = createRoute({
  method: 'put',
  path: '/v1/data/{path}',
  tags: ['Data API'],
  summary: 'Create or overwrite a document',
  description:
    'If the path does not refer to an existing document (for example *us-west/servers*), the server will attempt to create all the necessary containing documents.\n\nThis behavior is similar to the Unix command [mkdir -p](https://en.wikipedia.org/wiki/Mkdir#Options).',
  operationId: 'putDocument',
  request: {
    params: z.object({ path: PathParameterParamsSchema }),
    headers: z.object({ 'If-None-Match': IfNoneMatchParameterParamsSchema }),
    body: {
      description: 'The JSON document to write to the specified path.',
      content: { 'application/json': { schema: DataSchemaSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    304: { description: 'Document was not modified' },
    400: BadRequestResponseResponse,
    404: NotFoundResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const postV1DataPathRoute = createRoute({
  method: 'post',
  path: '/v1/data/{path}',
  tags: ['Data API'],
  summary: 'Get a document (with input)',
  description:
    'The server will return a *bad request* (400) response if either:\n- The query requires an input document and you do not provide it\n- You provided an input document but the query has already defined it.\n\nIf `path` indexes into an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, a *not found* response (404) will be returned.',
  operationId: 'getDocumentWithPath',
  request: {
    params: z.object({ path: PathParameterParamsSchema }),
    query: z.object({
      pretty: PrettyParameterParamsSchema,
      provenance: ProvenanceParameterParamsSchema,
      explain: ExplainParameterParamsSchema,
      metrics: MetricsParameterParamsSchema,
      instrument: InstrumentParameterParamsSchema,
    }),
    body: {
      description: 'The input document (in JSON format)',
      content: { 'application/x-yaml': { schema: InputSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: SuccessResponseResponse,
    400: BadRequestResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const deleteV1DataPathRoute = createRoute({
  method: 'delete',
  path: '/v1/data/{path}',
  tags: ['Data API'],
  summary: 'Delete a document',
  description: 'This API endpoint deletes an existing document from the server',
  operationId: 'deleteDocument',
  request: { params: z.object({ path: PathParameterParamsSchema }) },
  responses: {
    204: { description: 'Success' },
    404: NotFoundResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const patchV1DataPathRoute = createRoute({
  method: 'patch',
  path: '/v1/data/{path}',
  tags: ['Data API'],
  summary: 'Update a document',
  description:
    'This API endpoint updates an existing document on the server by describing the changes required (using [JSON patch operations](http://jsonpatch.com/))',
  operationId: 'patchDocument',
  request: {
    params: z.object({ path: PathParameterParamsSchema }),
    body: {
      description: 'The list of JSON patch operations.',
      content: { 'application/json': { schema: PatchesSchemaSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    400: BadRequestResponseResponse,
    404: NotFoundResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const getV1PoliciesRoute = createRoute({
  method: 'get',
  path: '/v1/policies',
  tags: ['Policy API'],
  summary: 'List policies',
  description:
    'This API endpoint responds with a list of all policy modules on the server (result response)',
  operationId: 'getPolicies',
  request: { query: z.object({ pretty: PrettyParameterParamsSchema }) },
  responses: { 200: SuccessResultResponse, 500: ServerErrorResponseResponse },
})

export const getV1PoliciesIdRoute = createRoute({
  method: 'get',
  path: '/v1/policies/{id}',
  tags: ['Policy API'],
  summary: 'Get a policy module',
  description: 'This API endpoint returns the details of the specified policy module (`{id}`)',
  operationId: 'getPolicyModule',
  request: {
    params: z.object({ id: IdParameterParamsSchema }),
    query: z.object({ pretty: PrettyParameterParamsSchema }),
  },
  responses: {
    200: SuccessResultResponse,
    404: NotFoundResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const putV1PoliciesIdRoute = createRoute({
  method: 'put',
  path: '/v1/policies/{id}',
  tags: ['Policy API'],
  summary: 'Create or update a policy module',
  description:
    "- If the policy module does not exist, it is created.\n- If the policy module already exists, it is replaced.\n\nIf the policy module isn't correctly defined, a *bad request* (400) response is returned.\n\n### Example policy module\n```yaml\npackage opa.examples\n\nimport data.servers\nimport data.networks\nimport data.ports\n\npublic_servers[server] {\n  some k, m\n  \tserver := servers[_]\n  \tserver.ports[_] == ports[k].id\n  \tports[k].networks[_] == networks[m].id\n  \tnetworks[m].public == true\n}\n```",
  operationId: 'putPolicyModule',
  request: {
    params: z.object({ id: IdParameterParamsSchema }),
    query: z.object({ pretty: PrettyParameterParamsSchema, metrics: MetricsParameterParamsSchema }),
    body: {
      content: {
        'text/plain': {
          schema: z
            .string()
            .openapi({
              example:
                'package opa.examples\n\nimport data.servers\nimport data.networks\nimport data.ports\n\npublic_servers[server] {\n  some k, m\n  \tserver := servers[_]\n  \tserver.ports[_] == ports[k].id\n  \tports[k].networks[_] == networks[m].id\n  \tnetworks[m].public == true\n}',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: SuccessResultResponse,
    400: BadRequestResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const deleteV1PoliciesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/policies/{id}',
  tags: ['Policy API'],
  summary: 'Delete a policy module',
  description: 'This API endpoint removes an existing policy module from the server',
  operationId: 'deletePolicyModule',
  request: {
    params: z.object({ id: IdParameterParamsSchema }),
    query: z.object({ pretty: PrettyParameterParamsSchema }),
  },
  responses: {
    200: SuccessResponseResponse,
    400: BadRequestResponseResponse,
    404: NotFoundResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const getV1QueryRoute = createRoute({
  method: 'get',
  path: '/v1/query',
  tags: ['Query API'],
  summary: 'Execute an ad-hoc query (simple)',
  description:
    'This API endpoint returns bindings for the variables in the query.\n\nFor more complex JSON queries, use `POST /v1/query` instead.',
  operationId: 'getQuery',
  request: {
    query: z.object({
      q: QParameterParamsSchema,
      pretty: PrettyParameterParamsSchema,
      explain: ExplainParameterParamsSchema,
      metrics: MetricsParameterParamsSchema,
    }),
  },
  responses: {
    200: SuccessQueryResponse,
    400: BadRequestResponseResponse,
    500: ServerErrorResponseResponse,
  },
})

export const postV1QueryRoute = createRoute({
  method: 'post',
  path: '/v1/query',
  tags: ['Query API'],
  summary: 'Execute an ad-hoc query (complex)',
  description:
    'This API endpoint returns bindings for the variables in the query.\n\nFor simpler JSON queries, you may use `GET /v1/query` instead.',
  operationId: 'postQuery',
  request: {
    query: z.object({
      pretty: PrettyParameterParamsSchema,
      explain: ExplainParameterParamsSchema,
      metrics: MetricsParameterParamsSchema,
    }),
    body: {
      description: 'The test of the query (in JSON format)',
      content: { 'application/x-yaml': { schema: QSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: SuccessQueryResponse,
    400: BadRequestResponseResponse,
    500: ServerErrorResponseResponse,
    501: { description: 'Streaming not implemented' },
  },
})
