import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    {
      const ifOk = z
        .object({ transaction_id: z.string() })
        .openapi({ required: ['transaction_id'] })
        .safeParse(val).success
      if (ifOk) {
        const Schema = z.object({ parent_id: z.string() }).openapi({ required: ['parent_id'] })
        if (!Schema.safeParse(val).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .and(
    z.unknown().superRefine((val, ctx) => {
      {
        const ifOk = z
          .object({ trace_id: z.string() })
          .openapi({ required: ['trace_id'] })
          .safeParse(val).success
        if (ifOk) {
          const Schema = z.object({ parent_id: z.string() }).openapi({ required: ['parent_id'] })
          if (!Schema.safeParse(val).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }),
  )
  .and(
    z.unknown().superRefine((val, ctx) => {
      {
        const ifOk = z
          .object({ transaction_id: z.string() })
          .openapi({ required: ['transaction_id'] })
          .safeParse(val).success
        if (ifOk) {
          const Schema = z.object({ trace_id: z.string() }).openapi({ required: ['trace_id'] })
          if (!Schema.safeParse(val).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }),
  )
  .and(
    z.unknown().superRefine((val, ctx) => {
      {
        const ifOk = z
          .object({ parent_id: z.string() })
          .openapi({ required: ['parent_id'] })
          .safeParse(val).success
        if (ifOk) {
          const Schema = z.object({ trace_id: z.string() }).openapi({ required: ['trace_id'] })
          if (!Schema.safeParse(val).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }),
  )
  .and(
    z
      .object({
        context: z
          .object({
            cloud: z
              .object({
                origin: z
                  .object({
                    account: z
                      .object({
                        id: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              'The cloud account or organization id used to identify different entities in a multi-tenant environment.',
                          }),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The cloud account or organization id used to identify different entities in a multi-tenant environment.',
                        required: [],
                      }),
                    provider: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the cloud provider.' }),
                    region: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Region in which this host, resource, or service is located.',
                      }),
                    service: z
                      .object({
                        name: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              'The cloud service name is intended to distinguish services running on different platforms within a provider.',
                          }),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The cloud service name is intended to distinguish services running on different platforms within a provider.',
                        required: [],
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Origin contains the self-nested field groups for cloud.',
                    required: [],
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Cloud holds fields related to the cloud or infrastructure the events are coming from.',
                required: [],
              }),
            custom: z
              .object({})
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Custom can contain additional metadata to be stored with the event. The format is unspecified and can be deeply nested objects. The information will not be indexed or searchable in Elasticsearch.',
              }),
            message: z
              .object({
                age: z
                  .object({
                    ms: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Age of the message in milliseconds.' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "Age of the message. If the monitored messaging framework provides a timestamp for the message, agents may use it. Otherwise, the sending agent can add a timestamp in milliseconds since the Unix epoch to the message's metadata to be retrieved by the receiving agent. If a timestamp is not available, agents should omit this field.",
                    required: [],
                  }),
                body: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Body of the received message, similar to an HTTP request body',
                  }),
                headers: z
                  .strictObject({})
                  .superRefine((o, ctx) => {
                    const regex = new RegExp('[.*]*$')
                    const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                    for (const [k, val] of Object.entries(o)) {
                      if (!regex.test(k)) {
                        continue
                      }
                      const result = Schema.safeParse(val)
                      if (!result.success) {
                        for (const issue of result.error.issues) {
                          ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                        }
                      }
                    }
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Headers received with the message, similar to HTTP request headers.',
                  }),
                queue: z
                  .object({
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Name holds the name of the message queue where the message is received.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Queue holds information about the message queue where the message is received.',
                    required: [],
                  }),
                routing_key: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'RoutingKey holds the optional routing key of the received message as set on the queuing system, such as in RabbitMQ.',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Message holds details related to message receiving and publishing if the captured event integrates with a messaging system',
                required: [],
              }),
            page: z
              .object({
                referer: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "Referer holds the URL of the page that 'linked' to the current page.",
                  }),
                url: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'URL of the current page' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Page holds information related to the current page and page referers. It is only sent from RUM agents.',
                required: [],
              }),
            request: z
              .object({
                body: z
                  .union([z.string(), z.object({})])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Body only contais the request bod, not the query string information. It can either be a dictionary (for standard HTTP requests) or a raw request body.',
                  }),
                cookies: z
                  .object({})
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Cookies used by the request, parsed as key-value objects.',
                  }),
                env: z
                  .object({})
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Env holds environment variable information passed to the monitored service.',
                  }),
                headers: z
                  .strictObject({})
                  .superRefine((o, ctx) => {
                    const regex = new RegExp('[.*]*$')
                    const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                    for (const [k, val] of Object.entries(o)) {
                      if (!regex.test(k)) {
                        continue
                      }
                      const result = Schema.safeParse(val)
                      if (!result.success) {
                        for (const issue of result.error.issues) {
                          ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                        }
                      }
                    }
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Headers includes any HTTP headers sent by the requester. Cookies will be taken by headers if supplied.',
                  }),
                http_version: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'HTTPVersion holds information about the used HTTP version.',
                  }),
                method: z
                  .string()
                  .max(1024)
                  .openapi({
                    description: 'Method holds information about the method of the HTTP request.',
                  }),
                socket: z
                  .object({
                    encrypted: z
                      .boolean()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Encrypted indicates whether a request was sent as TLS/HTTPS request. DEPRECATED: this field will be removed in a future release.',
                      }),
                    remote_address: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "RemoteAddress holds the network address sending the request. It should be obtained through standard APIs and not be parsed from any headers like 'Forwarded'.",
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Socket holds information related to the recorded request, such as whether or not data were encrypted and the remote address.',
                    required: [],
                  }),
                url: z
                  .object({
                    full: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Full, possibly agent-assembled URL of the request, e.g. https://example.com:443/search?q=elasticsearch#top.',
                      }),
                    hash: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: "Hash of the request URL, e.g. 'top'" }),
                    hostname: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: "Hostname information of the request, e.g. 'example.com'.\"",
                      }),
                    pathname: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: "Path of the request, e.g. '/search'" }),
                    port: z
                      .union([z.string().max(1024), z.int()])
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "Port of the request, e.g. '443'. Can be sent as string or int.",
                      }),
                    protocol: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "Protocol information for the recorded request, e.g. 'https:'.",
                      }),
                    raw: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Raw unparsed URL of the HTTP request line, e.g https://example.com:443/search?q=elasticsearch. This URL may be absolute or relative. For more details, see https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html#sec5.1.2.',
                      }),
                    search: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Search contains the query string information of the request. It is expected to have values delimited by ampersands.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'URL holds information sucha as the raw URL, scheme, host and path.',
                    required: [],
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Request describes the HTTP request information in case the event was created as a result of an HTTP request.',
                required: ['method'],
              }),
            response: z
              .object({
                decoded_body_size: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'DecodedBodySize holds the size of the decoded payload.',
                  }),
                encoded_body_size: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'EncodedBodySize holds the size of the encoded payload.',
                  }),
                finished: z
                  .boolean()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Finished indicates whether the response was finished or not.',
                  }),
                headers: z
                  .strictObject({})
                  .superRefine((o, ctx) => {
                    const regex = new RegExp('[.*]*$')
                    const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                    for (const [k, val] of Object.entries(o)) {
                      if (!regex.test(k)) {
                        continue
                      }
                      const result = Schema.safeParse(val)
                      if (!result.success) {
                        for (const issue of result.error.issues) {
                          ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                        }
                      }
                    }
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Headers holds the http headers sent in the http response.',
                  }),
                headers_sent: z
                  .boolean()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'HeadersSent indicates whether http headers were sent.',
                  }),
                status_code: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'StatusCode sent in the http response.' }),
                transfer_size: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'TransferSize holds the total size of the payload.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Response describes the HTTP response information in case the event was created as a result of an HTTP request.',
                required: [],
              }),
            service: z
              .object({
                agent: z
                  .object({
                    ephemeral_id: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'EphemeralID is a free format ID used for metrics correlation by agents',
                      }),
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the APM agent capturing information.' }),
                    version: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the APM agent capturing information.' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Agent holds information about the APM agent capturing the event.',
                    required: [],
                  }),
                environment: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Environment in which the monitored service is running, e.g. `production` or `staging`.',
                  }),
                framework: z
                  .object({
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the used framework' }),
                    version: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the used framework' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Framework holds information about the framework used in the monitored service.',
                    required: [],
                  }),
                id: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'ID holds a unique identifier for the service.' }),
                language: z
                  .object({
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the used programming language' }),
                    version: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the used programming language' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Language holds information about the programming language of the monitored service.',
                    required: [],
                  }),
                name: z
                  .string()
                  .regex(/^[a-zA-Z0-9 _-]+$/)
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the monitored service.' }),
                node: z
                  .object({
                    configured_name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the service node' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Node must be a unique meaningful name of the service node.',
                    required: [],
                  }),
                origin: z
                  .object({
                    id: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Immutable id of the service emitting this event.' }),
                    name: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Immutable name of the service emitting this event.',
                      }),
                    version: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'The version of the service the data was collected from.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Origin contains the self-nested field groups for service.',
                    required: [],
                  }),
                runtime: z
                  .object({
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the language runtime' }),
                    version: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the language runtime' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Runtime holds information about the language runtime running the monitored service',
                    required: [],
                  }),
                target: z
                  .union([
                    z.object({ type: z.string() }).openapi({ required: ['type'] }),
                    z.object({ name: z.string() }).openapi({ required: ['name'] }),
                  ])
                  .and(
                    z
                      .object({
                        name: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: 'Immutable name of the target service for the event',
                          }),
                        type: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: 'Immutable type of the target service for the event',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Target holds information about the outgoing service in case of an outgoing event',
                  }),
                version: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the monitored service.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Service related information can be sent per event. Information provided here will override the more generic information retrieved from metadata, missing service fields will be retrieved from the metadata information.',
                required: [],
              }),
            tags: z
              .record(
                z.string(),
                z.union([z.string().max(1024), z.boolean(), z.number()]).nullable(),
              )
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Tags are a flat mapping of user-defined tags. On the agent side, tags are called labels. Allowed value types are string, boolean and number values. Tags are indexed and searchable.',
              }),
            user: z
              .object({
                domain: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Domain of the logged in user' }),
                email: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Email of the user.' }),
                id: z
                  .union([z.string().max(1024), z.int()])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'ID identifies the logged in user, e.g. can be the primary key of the user',
                  }),
                username: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the user.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "User holds information about the correlated user for this event. If user data are provided here, all user related information from metadata is ignored, otherwise the metadata's user information will be stored with the event.",
                required: [],
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Context holds arbitrary contextual information for the event.',
            required: [],
          }),
        culprit: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Culprit identifies the function call which was the primary perpetrator of this event.',
          }),
        exception: z
          .union([
            z.object({ message: z.string() }).openapi({ required: ['message'] }),
            z.object({ type: z.string() }).openapi({ required: ['type'] }),
          ])
          .and(
            z
              .object({
                attributes: z
                  .object({})
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Attributes of the exception.' }),
                cause: z
                  .array(z.object({}))
                  .min(0)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Cause can hold a collection of error exceptions representing chained exceptions. The chain starts with the outermost exception, followed by its cause, and so on.',
                  }),
                code: z
                  .union([z.string().max(1024), z.int()])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Code that is set when the error happened, e.g. database error code.',
                  }),
                handled: z
                  .boolean()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Handled indicates whether the error was caught in the code or not.',
                  }),
                message: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Message contains the originally captured error message.',
                  }),
                module: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: "Module describes the exception type's module namespace.",
                  }),
                stacktrace: z
                  .array(
                    z
                      .union([
                        z.object({ classname: z.string() }).openapi({ required: ['classname'] }),
                        z.object({ filename: z.string() }).openapi({ required: ['filename'] }),
                      ])
                      .and(
                        z
                          .object({
                            abs_path: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description: "AbsPath is the absolute path of the frame's file.",
                              }),
                            classname: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({ description: 'Classname of the frame.' }),
                            colno: z
                              .int()
                              .nullable()
                              .exactOptional()
                              .openapi({ description: 'ColumnNumber of the frame.' }),
                            context_line: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description: "ContextLine is the line from the frame's file.",
                              }),
                            filename: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description: "Filename is the relative name of the frame's file.",
                              }),
                            function: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({ description: 'Function represented by the frame.' }),
                            library_frame: z
                              .boolean()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'LibraryFrame indicates whether the frame is from a third party library.',
                              }),
                            lineno: z
                              .int()
                              .nullable()
                              .exactOptional()
                              .openapi({ description: 'LineNumber of the frame.' }),
                            module: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({ description: 'Module to which the frame belongs to.' }),
                            post_context: z
                              .array(z.string())
                              .min(0)
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  "PostContext is a slice of code lines immediately before the line from the frame's file.",
                              }),
                            pre_context: z
                              .array(z.string())
                              .min(0)
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  "PreContext is a slice of code lines immediately after the line from the frame's file.",
                              }),
                            vars: z
                              .object({})
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Vars is a flat mapping of local variables of the frame.',
                              }),
                          })
                          .openapi({ required: [] }),
                      ),
                  )
                  .min(0)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Stacktrace information of the captured exception.' }),
                type: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Type of the exception.' }),
              })
              .openapi({ required: [] }),
          )
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Exception holds information about the original error. The information is language specific.',
          }),
        id: z
          .string()
          .max(1024)
          .openapi({ description: 'ID holds the hex encoded 128 random bits ID of the event.' }),
        log: z
          .object({
            level: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Level represents the severity of the recorded log.' }),
            logger_name: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'LoggerName holds the name of the used logger instance.' }),
            message: z
              .string()
              .openapi({
                description:
                  'Message of the logged error. In case a parameterized message is captured, Message should contain the same information, but with any placeholders being replaced.',
              }),
            param_message: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "ParamMessage should contain the same information as Message, but with placeholders where parameters were logged, e.g. 'error connecting to %s'. The string is not interpreted, allowing differnt placeholders per client languange. The information might be used to group errors together.",
              }),
            stacktrace: z
              .array(
                z
                  .union([
                    z.object({ classname: z.string() }).openapi({ required: ['classname'] }),
                    z.object({ filename: z.string() }).openapi({ required: ['filename'] }),
                  ])
                  .and(
                    z
                      .object({
                        abs_path: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: "AbsPath is the absolute path of the frame's file.",
                          }),
                        classname: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'Classname of the frame.' }),
                        colno: z
                          .int()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ColumnNumber of the frame.' }),
                        context_line: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: "ContextLine is the line from the frame's file.",
                          }),
                        filename: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: "Filename is the relative name of the frame's file.",
                          }),
                        function: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'Function represented by the frame.' }),
                        library_frame: z
                          .boolean()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              'LibraryFrame indicates whether the frame is from a third party library.',
                          }),
                        lineno: z
                          .int()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'LineNumber of the frame.' }),
                        module: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'Module to which the frame belongs to.' }),
                        post_context: z
                          .array(z.string())
                          .min(0)
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              "PostContext is a slice of code lines immediately before the line from the frame's file.",
                          }),
                        pre_context: z
                          .array(z.string())
                          .min(0)
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              "PreContext is a slice of code lines immediately after the line from the frame's file.",
                          }),
                        vars: z
                          .object({})
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: 'Vars is a flat mapping of local variables of the frame.',
                          }),
                      })
                      .openapi({ required: [] }),
                  ),
              )
              .min(0)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Stacktrace information of the captured error.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Log holds additional information added when the error is logged.',
            required: ['message'],
          }),
        parent_id: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.',
          }),
        timestamp: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch.',
          }),
        trace_id: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'TraceID holds the hex encoded 128 random bits ID of the correlated trace.',
          }),
        transaction: z
          .object({
            name: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Name is the generic designation of a transaction in the scope of a single service, eg: 'GET /users/:id'.",
              }),
            sampled: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Sampled indicates whether or not the full information for a transaction is captured. If a transaction is unsampled no spans and less context information will be reported.',
              }),
            type: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Type expresses the correlated transaction's type as keyword that has specific relevance within the service's domain, eg: 'request', 'backgroundjob'.",
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Transaction holds information about the correlated transaction.',
            required: [],
          }),
        transaction_id: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'TransactionID holds the hex encoded 64 random bits ID of the correlated transaction.',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  .openapi({
    $id: 'docs/spec/v2/error',
    description:
      'errorEvent represents an error or a logged error message, captured by an APM agent in a monitored service.',
    required: ['id'],
  })
  .openapi('Error')

const ErrorEventSchema = z
  .object({ error: ErrorSchema })
  .openapi({
    description:
      'Errors are events that occur in a monitored service and correspond to an error or a logged message captured by an agent.\n',
    required: ['error'],
  })
  .openapi('ErrorEvent')

const MetadataSchema = z
  .object({
    cloud: z
      .object({
        account: z
          .object({
            id: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'ID of the cloud account.' }),
            name: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the cloud account.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Account where the monitored service is running.',
            required: [],
          }),
        availability_zone: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'AvailabilityZone where the monitored service is running, e.g. us-east-1a',
          }),
        instance: z
          .object({
            id: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'ID of the cloud instance.' }),
            name: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the cloud instance.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Instance on which the monitored service is running.',
            required: [],
          }),
        machine: z
          .object({
            type: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'ID of the cloud machine.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Machine on which the monitored service is running.',
            required: [],
          }),
        project: z
          .object({
            id: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'ID of the cloud project.' }),
            name: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the cloud project.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Project in which the monitored service is running.',
            required: [],
          }),
        provider: z
          .string()
          .max(1024)
          .openapi({ description: 'Provider that is used, e.g. aws, azure, gcp, digitalocean.' }),
        region: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Region where the monitored service is running, e.g. us-east-1',
          }),
        service: z
          .object({
            name: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Name of the cloud service, intended to distinguish services running on different platforms within a provider, eg AWS EC2 vs Lambda, GCP GCE vs App Engine, Azure VM vs App Server.',
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({ description: 'Service that is monitored on cloud', required: [] }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Cloud metadata about where the monitored service is running.',
        required: ['provider'],
      }),
    labels: z
      .record(z.string(), z.union([z.string().max(1024), z.boolean(), z.number()]).nullable())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Labels are a flat mapping of user-defined tags. Allowed value types are string, boolean and number values. Labels are indexed and searchable.',
      }),
    network: z
      .object({
        connection: z
          .object({ type: z.string().max(1024).nullable().exactOptional() })
          .nullable()
          .exactOptional()
          .openapi({ required: [] }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Network holds information about the network over which the monitored service is communicating.',
        required: [],
      }),
    process: z
      .object({
        argv: z
          .array(z.string())
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Argv holds the command line arguments used to start this process.',
          }),
        pid: z.int().openapi({ description: 'PID holds the process ID of the service.' }),
        ppid: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Ppid holds the parent process ID of the service.' }),
        title: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Title is the process title. It can be the same as process name.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Process metadata about the monitored service.', required: ['pid'] }),
    service: z
      .object({
        agent: z
          .object({
            activation_method: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'ActivationMethod of the APM agent capturing information.' }),
            ephemeral_id: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'EphemeralID is a free format ID used for metrics correlation by agents',
              }),
            name: z
              .string()
              .min(1)
              .max(1024)
              .openapi({ description: 'Name of the APM agent capturing information.' }),
            version: z
              .string()
              .max(1024)
              .openapi({ description: 'Version of the APM agent capturing information.' }),
          })
          .openapi({
            description: 'Agent holds information about the APM agent capturing the event.',
            required: ['name', 'version'],
          }),
        environment: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Environment in which the monitored service is running, e.g. `production` or `staging`.',
          }),
        framework: z
          .object({
            name: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the used framework' }),
            version: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Version of the used framework' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Framework holds information about the framework used in the monitored service.',
            required: [],
          }),
        id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'ID holds a unique identifier for the running service.' }),
        language: z
          .object({
            name: z
              .string()
              .max(1024)
              .openapi({ description: 'Name of the used programming language' }),
            version: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Version of the used programming language' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Language holds information about the programming language of the monitored service.',
            required: ['name'],
          }),
        name: z
          .string()
          .regex(/^[a-zA-Z0-9 _-]+$/)
          .min(1)
          .max(1024)
          .openapi({ description: 'Name of the monitored service.' }),
        node: z
          .object({
            configured_name: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the service node' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Node must be a unique meaningful name of the service node.',
            required: [],
          }),
        runtime: z
          .object({
            name: z.string().max(1024).openapi({ description: 'Name of the language runtime' }),
            version: z.string().max(1024).openapi({ description: 'Name of the language runtime' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Runtime holds information about the language runtime running the monitored service',
            required: ['name', 'version'],
          }),
        version: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Version of the monitored service.' }),
      })
      .openapi({
        description: 'Service metadata about the monitored service.',
        required: ['agent', 'name'],
      }),
    system: z
      .object({
        architecture: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Architecture of the system the monitored service is running on.',
          }),
        configured_hostname: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "ConfiguredHostname is the configured name of the host the monitored service is running on. It should only be sent when configured by the user. If given, it is used as the event's hostname.",
          }),
        container: z
          .object({
            id: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'ID of the container the monitored service is running in.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: "Container holds the system's container ID if available.",
            required: [],
          }),
        detected_hostname: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "DetectedHostname is the hostname detected by the APM agent. It usually contains what the hostname command returns on the host machine. It will be used as the event's hostname if ConfiguredHostname is not present.",
          }),
        host_id: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The OpenTelemetry semantic conventions compliant "host.id" attribute, if available.',
          }),
        hostname: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Deprecated: Use ConfiguredHostname and DetectedHostname instead. DeprecatedHostname is the host name of the system the service is running on. It does not distinguish between configured and detected hostname and therefore is deprecated and only used if no other hostname information is available.',
          }),
        kubernetes: z
          .object({
            namespace: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Namespace of the Kubernetes resource the monitored service is run on.',
              }),
            node: z
              .object({
                name: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the Kubernetes Node' }),
              })
              .nullable()
              .exactOptional()
              .openapi({ description: 'Node related information', required: [] }),
            pod: z
              .object({
                name: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the Kubernetes Pod' }),
                uid: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'UID is the system-generated string uniquely identifying the Pod.',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({ description: 'Pod related information', required: [] }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Kubernetes system information if the monitored service runs on Kubernetes.',
            required: [],
          }),
        platform: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Platform name of the system platform the monitored service is running on.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'System metadata', required: [] }),
    user: z
      .object({
        domain: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Domain of the logged in user' }),
        email: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Email of the user.' }),
        id: z
          .union([z.string().max(1024), z.int()])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'ID identifies the logged in user, e.g. can be the primary key of the user',
          }),
        username: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Name of the user.' }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'User metadata, which can be overwritten on a per event basis.',
        required: [],
      }),
  })
  .openapi({ $id: 'docs/spec/v2/metadata', required: ['service'] })
  .openapi('Metadata')

const MetadataEventSchema = z
  .object({ metadata: MetadataSchema })
  .openapi({
    description:
      'Every new connection to the APM Server starts with a metadata stanza. This provides general metadata concerning the other objects in the stream. Rather than send this metadata information from the agent multiple times, the APM Server hangs on to this information and applies it to other objects in the stream as necessary. TIP: Metadata is stored under context when viewing documents in Elasticsearch. APM agents automatically read Kubernetes data and send it to the APM Server. In most instances, agents are able to read this data from inside the container. If this is not the case, or if you wish to override this data, you can set environment variables for the agents to read. These environment variable are set via the Kubernetes Downward API. \n',
    required: ['metadata'],
  })
  .openapi('MetadataEvent')

const MetricsetSchema = z
  .object({
    faas: z
      .object({
        coldstart: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Indicates whether a function invocation was a cold start or not.',
          }),
        execution: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The request id of the function invocation.' }),
        id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'A unique identifier of the invoked serverless function.' }),
        name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The lambda function name.' }),
        trigger: z
          .object({
            request_id: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The id of the origin trigger request.' }),
            type: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The trigger type.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({ description: 'Trigger attributes.', required: [] }),
        version: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The lambda function version.' }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'FAAS holds fields related to Function as a Service events.',
        required: [],
      }),
    samples: z
      .strictObject({})
      .superRefine((o, ctx) => {
        const regex = new RegExp('^[^*"]*$')
        const Schema = z
          .unknown()
          .superRefine((val, ctx) => {
            {
              const ifOk = z
                .object({ counts: z.array(z.any()) })
                .openapi({ required: ['counts'] })
                .safeParse(val).success
              if (ifOk) {
                const Schema = z
                  .object({ values: z.array(z.any()) })
                  .openapi({ required: ['values'] })
                if (!Schema.safeParse(val).success) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            }
          })
          .and(
            z.unknown().superRefine((val, ctx) => {
              {
                const ifOk = z
                  .object({ values: z.array(z.any()) })
                  .openapi({ required: ['values'] })
                  .safeParse(val).success
                if (ifOk) {
                  const Schema = z
                    .object({ counts: z.array(z.any()) })
                    .openapi({ required: ['counts'] })
                  if (!Schema.safeParse(val).success) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              }
            }),
          )
          .and(
            z
              .object({
                counts: z
                  .array(z.int().min(0))
                  .min(0)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Counts holds the bucket counts for histogram metrics.  These numbers must be positive or zero.  If Counts is specified, then Values is expected to be specified with the same number of elements, and with the same order.',
                  }),
                type: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Type holds an optional metric type: gauge, counter, or histogram.  If Type is unknown, it will be ignored.',
                  }),
                unit: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Unit holds an optional unit for the metric.  - "percent" (value is in the range [0,1]) - "byte" - a time unit: "nanos", "micros", "ms", "s", "m", "h", "d"  If Unit is unknown, it will be ignored.',
                  }),
                value: z
                  .number()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Value holds the value of a single metric sample.' }),
                values: z
                  .array(z.number())
                  .min(0)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Values holds the bucket values for histogram metrics.  Values must be provided in ascending order; failure to do so will result in the metric being discarded.',
                  }),
              })
              .openapi({ required: [] }),
          )
          .nullable()
        for (const [k, val] of Object.entries(o)) {
          if (!regex.test(k)) {
            continue
          }
          const result = Schema.safeParse(val)
          if (!result.success) {
            for (const issue of result.error.issues) {
              ctx.addIssue({ ...issue, path: [k, ...issue.path] })
            }
          }
        }
      })
      .openapi({ description: 'Samples hold application metrics collected from the agent.' }),
    service: z
      .object({
        name: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Name of the correlated service.' }),
        version: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Version of the correlated service.' }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Service holds selected information about the correlated service.',
        required: [],
      }),
    span: z
      .object({
        subtype: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Subtype is a further sub-division of the type (e.g. postgresql, elasticsearch)',
          }),
        type: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Type expresses the correlated span's type as keyword that has specific relevance within the service's domain, eg: 'request', 'backgroundjob'.",
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Span holds selected information about the correlated transaction.',
        required: [],
      }),
    tags: z
      .record(z.string(), z.union([z.string().max(1024), z.boolean(), z.number()]).nullable())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Tags are a flat mapping of user-defined tags. On the agent side, tags are called labels. Allowed value types are string, boolean and number values. Tags are indexed and searchable.',
      }),
    timestamp: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch',
      }),
    transaction: z
      .object({
        name: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Name of the correlated transaction.' }),
        type: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Type expresses the correlated transaction's type as keyword that has specific relevance within the service's domain, eg: 'request', 'backgroundjob'.",
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Transaction holds selected information about the correlated transaction.',
        required: [],
      }),
  })
  .openapi({ $id: 'docs/spec/v2/metricset', required: ['samples'] })
  .openapi('Metricset')

const MetricSetEventSchema = z
  .object({ metricset: MetricsetSchema })
  .openapi({
    description:
      'Metric sets are events that contain application metric data captured by an APM agent. \n',
    required: ['metricset'],
  })
  .openapi('MetricSetEvent')

const SpanSchema = z
  .union([
    z.object({ start: z.number() }).openapi({ required: ['start'] }),
    z.object({ timestamp: z.int() }).openapi({ required: ['timestamp'] }),
  ])
  .and(
    z
      .object({
        action: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Action holds the specific kind of event within the sub-type represented by the span (e.g. query, connect)',
          }),
        child_ids: z
          .array(z.string().max(1024))
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'ChildIDs holds a list of successor transactions and/or spans.',
          }),
        composite: z
          .object({
            compression_strategy: z
              .string()
              .openapi({
                description:
                  'A string value indicating which compression strategy was used. The valid values are `exact_match` and `same_kind`.',
              }),
            count: z
              .int()
              .min(2)
              .openapi({
                description:
                  'Count is the number of compressed spans the composite span represents. The minimum count is 2, as a composite span represents at least two spans.',
              }),
            sum: z
              .number()
              .min(0)
              .openapi({
                description:
                  'Sum is the durations of all compressed spans this composite span represents in milliseconds.',
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Composite holds details on a group of spans represented by a single one.',
            required: ['compression_strategy', 'count', 'sum'],
          }),
        context: z
          .object({
            db: z
              .object({
                instance: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Instance name of the database.' }),
                link: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Link to the database server.' }),
                rows_affected: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'RowsAffected shows the number of rows affected by the statement.',
                  }),
                statement: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Statement of the recorded database event, e.g. query.',
                  }),
                type: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Type of the recorded database event., e.g. sql, cassandra, hbase, redis.',
                  }),
                user: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'User is the username with which the database is accessed.',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Database contains contextual data for database spans',
                required: [],
              }),
            destination: z
              .object({
                address: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "Address is the destination network address: hostname (e.g. 'localhost'), FQDN (e.g. 'elastic.co'), IPv4 (e.g. '127.0.0.1') IPv6 (e.g. '::1')",
                  }),
                port: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Port is the destination network port (e.g. 443)' }),
                service: z
                  .object({
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "Name is the identifier for the destination service, e.g. 'http://elastic.co', 'elasticsearch', 'rabbitmq' ( DEPRECATED: this field will be removed in a future release",
                      }),
                    resource: z
                      .string()
                      .max(1024)
                      .openapi({
                        description:
                          "Resource identifies the destination service resource being operated on e.g. 'http://elastic.co:80', 'elasticsearch', 'rabbitmq/queue_name' DEPRECATED: this field will be removed in a future release",
                      }),
                    type: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Type of the destination service, e.g. db, elasticsearch. Should typically be the same as span.type. DEPRECATED: this field will be removed in a future release',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Service describes the destination service',
                    required: ['resource'],
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Destination contains contextual data about the destination of spans',
                required: [],
              }),
            http: z
              .object({
                method: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Method holds information about the method of the HTTP request.',
                  }),
                request: z
                  .object({
                    id: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'ID holds the unique identifier for the http request.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Request describes the HTTP request information.',
                    required: [],
                  }),
                response: z
                  .object({
                    decoded_body_size: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'DecodedBodySize holds the size of the decoded payload.',
                      }),
                    encoded_body_size: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'EncodedBodySize holds the size of the encoded payload.',
                      }),
                    headers: z
                      .strictObject({})
                      .superRefine((o, ctx) => {
                        const regex = new RegExp('[.*]*$')
                        const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                        for (const [k, val] of Object.entries(o)) {
                          if (!regex.test(k)) {
                            continue
                          }
                          const result = Schema.safeParse(val)
                          if (!result.success) {
                            for (const issue of result.error.issues) {
                              ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                            }
                          }
                        }
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Headers holds the http headers sent in the http response.',
                      }),
                    status_code: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'StatusCode sent in the http response.' }),
                    transfer_size: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'TransferSize holds the total size of the payload.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Response describes the HTTP response information in case the event was created as a result of an HTTP request.',
                    required: [],
                  }),
                status_code: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Deprecated: Use Response.StatusCode instead. StatusCode sent in the http response.',
                  }),
                url: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'URL is the raw url of the correlating HTTP request.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'HTTP contains contextual information when the span concerns an HTTP request.',
                required: [],
              }),
            message: z
              .object({
                age: z
                  .object({
                    ms: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Age of the message in milliseconds.' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "Age of the message. If the monitored messaging framework provides a timestamp for the message, agents may use it. Otherwise, the sending agent can add a timestamp in milliseconds since the Unix epoch to the message's metadata to be retrieved by the receiving agent. If a timestamp is not available, agents should omit this field.",
                    required: [],
                  }),
                body: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Body of the received message, similar to an HTTP request body',
                  }),
                headers: z
                  .strictObject({})
                  .superRefine((o, ctx) => {
                    const regex = new RegExp('[.*]*$')
                    const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                    for (const [k, val] of Object.entries(o)) {
                      if (!regex.test(k)) {
                        continue
                      }
                      const result = Schema.safeParse(val)
                      if (!result.success) {
                        for (const issue of result.error.issues) {
                          ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                        }
                      }
                    }
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Headers received with the message, similar to HTTP request headers.',
                  }),
                queue: z
                  .object({
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Name holds the name of the message queue where the message is received.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Queue holds information about the message queue where the message is received.',
                    required: [],
                  }),
                routing_key: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'RoutingKey holds the optional routing key of the received message as set on the queuing system, such as in RabbitMQ.',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Message holds details related to message receiving and publishing if the captured event integrates with a messaging system',
                required: [],
              }),
            service: z
              .object({
                agent: z
                  .object({
                    ephemeral_id: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'EphemeralID is a free format ID used for metrics correlation by agents',
                      }),
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the APM agent capturing information.' }),
                    version: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the APM agent capturing information.' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Agent holds information about the APM agent capturing the event.',
                    required: [],
                  }),
                environment: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Environment in which the monitored service is running, e.g. `production` or `staging`.',
                  }),
                framework: z
                  .object({
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the used framework' }),
                    version: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the used framework' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Framework holds information about the framework used in the monitored service.',
                    required: [],
                  }),
                id: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'ID holds a unique identifier for the service.' }),
                language: z
                  .object({
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the used programming language' }),
                    version: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the used programming language' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Language holds information about the programming language of the monitored service.',
                    required: [],
                  }),
                name: z
                  .string()
                  .regex(/^[a-zA-Z0-9 _-]+$/)
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the monitored service.' }),
                node: z
                  .object({
                    configured_name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the service node' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Node must be a unique meaningful name of the service node.',
                    required: [],
                  }),
                origin: z
                  .object({
                    id: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Immutable id of the service emitting this event.' }),
                    name: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Immutable name of the service emitting this event.',
                      }),
                    version: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'The version of the service the data was collected from.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Origin contains the self-nested field groups for service.',
                    required: [],
                  }),
                runtime: z
                  .object({
                    name: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the language runtime' }),
                    version: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the language runtime' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Runtime holds information about the language runtime running the monitored service',
                    required: [],
                  }),
                target: z
                  .union([
                    z.object({ type: z.string() }).openapi({ required: ['type'] }),
                    z.object({ name: z.string() }).openapi({ required: ['name'] }),
                  ])
                  .and(
                    z
                      .object({
                        name: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: 'Immutable name of the target service for the event',
                          }),
                        type: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: 'Immutable type of the target service for the event',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Target holds information about the outgoing service in case of an outgoing event',
                  }),
                version: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the monitored service.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Service related information can be sent per span. Information provided here will override the more generic information retrieved from metadata, missing service fields will be retrieved from the metadata information.',
                required: [],
              }),
            tags: z
              .record(
                z.string(),
                z.union([z.string().max(1024), z.boolean(), z.number()]).nullable(),
              )
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Tags are a flat mapping of user-defined tags. On the agent side, tags are called labels. Allowed value types are string, boolean and number values. Tags are indexed and searchable.',
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Context holds arbitrary contextual information for the event.',
            required: [],
          }),
        duration: z
          .number()
          .min(0)
          .openapi({
            description:
              'Duration of the span in milliseconds. When the span is a composite one, duration is the gross duration, including "whitespace" in between spans.',
          }),
        id: z
          .string()
          .max(1024)
          .openapi({ description: 'ID holds the hex encoded 64 random bits ID of the event.' }),
        links: z
          .array(
            z
              .object({
                span_id: z
                  .string()
                  .max(1024)
                  .openapi({ description: 'SpanID holds the ID of the linked span.' }),
                trace_id: z
                  .string()
                  .max(1024)
                  .openapi({ description: "TraceID holds the ID of the linked span's trace." }),
              })
              .openapi({ required: ['span_id', 'trace_id'] }),
          )
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Links holds links to other spans, potentially in other traces.',
          }),
        name: z
          .string()
          .max(1024)
          .openapi({
            description: 'Name is the generic designation of a span in the scope of a transaction.',
          }),
        otel: z
          .object({
            attributes: z
              .object({})
              .nullable()
              .exactOptional()
              .openapi({ description: 'Attributes hold the unmapped OpenTelemetry attributes.' }),
            span_kind: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'SpanKind holds the incoming OpenTelemetry span kind.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'OTel contains unmapped OpenTelemetry attributes.',
            required: [],
          }),
        outcome: z
          .union([
            z.literal('success'),
            z.literal('failure'),
            z.literal('unknown'),
            z.literal(null),
          ])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Outcome of the span: success, failure, or unknown. Outcome may be one of a limited set of permitted values describing the success or failure of the span. It can be used for calculating error rates for outgoing requests.',
          }),
        parent_id: z
          .string()
          .max(1024)
          .openapi({
            description:
              'ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.',
          }),
        sample_rate: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'SampleRate applied to the monitored service at the time where this span was recorded.',
          }),
        stacktrace: z
          .array(
            z
              .union([
                z.object({ classname: z.string() }).openapi({ required: ['classname'] }),
                z.object({ filename: z.string() }).openapi({ required: ['filename'] }),
              ])
              .and(
                z
                  .object({
                    abs_path: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: "AbsPath is the absolute path of the frame's file.",
                      }),
                    classname: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Classname of the frame.' }),
                    colno: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'ColumnNumber of the frame.' }),
                    context_line: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: "ContextLine is the line from the frame's file." }),
                    filename: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: "Filename is the relative name of the frame's file.",
                      }),
                    function: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Function represented by the frame.' }),
                    library_frame: z
                      .boolean()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'LibraryFrame indicates whether the frame is from a third party library.',
                      }),
                    lineno: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'LineNumber of the frame.' }),
                    module: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Module to which the frame belongs to.' }),
                    post_context: z
                      .array(z.string())
                      .min(0)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "PostContext is a slice of code lines immediately before the line from the frame's file.",
                      }),
                    pre_context: z
                      .array(z.string())
                      .min(0)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "PreContext is a slice of code lines immediately after the line from the frame's file.",
                      }),
                    vars: z
                      .object({})
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Vars is a flat mapping of local variables of the frame.',
                      }),
                  })
                  .openapi({ required: [] }),
              ),
          )
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Stacktrace connected to this span event.' }),
        start: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Start is the offset relative to the transaction's timestamp identifying the start of the span, in milliseconds.",
          }),
        subtype: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Subtype is a further sub-division of the type (e.g. postgresql, elasticsearch)',
          }),
        sync: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Sync indicates whether the span was executed synchronously or asynchronously.',
          }),
        timestamp: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch',
          }),
        trace_id: z
          .string()
          .max(1024)
          .openapi({
            description:
              'TraceID holds the hex encoded 128 random bits ID of the correlated trace.',
          }),
        transaction_id: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'TransactionID holds the hex encoded 64 random bits ID of the correlated transaction.',
          }),
        type: z
          .string()
          .max(1024)
          .openapi({
            description:
              "Type holds the span's type, and can have specific keywords within the service's domain (eg: 'request', 'backgroundjob', etc)",
          }),
      })
      .openapi({ required: ['id', 'trace_id', 'name', 'parent_id', 'type', 'duration'] }),
  )
  .openapi({
    $id: 'docs/spec/v2/span',
    required: ['id', 'trace_id', 'name', 'parent_id', 'type', 'duration'],
  })
  .openapi('Span')

const SpanEventSchema = z
  .object({ span: SpanSchema })
  .openapi({
    description: 'Spans are events captured by an agent occurring in a monitored service.\n',
    required: ['span'],
  })
  .openapi('SpanEvent')

const TransactionSchema = z
  .object({
    context: z
      .object({
        cloud: z
          .object({
            origin: z
              .object({
                account: z
                  .object({
                    id: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The cloud account or organization id used to identify different entities in a multi-tenant environment.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'The cloud account or organization id used to identify different entities in a multi-tenant environment.',
                    required: [],
                  }),
                provider: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the cloud provider.' }),
                region: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Region in which this host, resource, or service is located.',
                  }),
                service: z
                  .object({
                    name: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The cloud service name is intended to distinguish services running on different platforms within a provider.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'The cloud service name is intended to distinguish services running on different platforms within a provider.',
                    required: [],
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Origin contains the self-nested field groups for cloud.',
                required: [],
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Cloud holds fields related to the cloud or infrastructure the events are coming from.',
            required: [],
          }),
        custom: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Custom can contain additional metadata to be stored with the event. The format is unspecified and can be deeply nested objects. The information will not be indexed or searchable in Elasticsearch.',
          }),
        message: z
          .object({
            age: z
              .object({
                ms: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Age of the message in milliseconds.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Age of the message. If the monitored messaging framework provides a timestamp for the message, agents may use it. Otherwise, the sending agent can add a timestamp in milliseconds since the Unix epoch to the message's metadata to be retrieved by the receiving agent. If a timestamp is not available, agents should omit this field.",
                required: [],
              }),
            body: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Body of the received message, similar to an HTTP request body',
              }),
            headers: z
              .strictObject({})
              .superRefine((o, ctx) => {
                const regex = new RegExp('[.*]*$')
                const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                for (const [k, val] of Object.entries(o)) {
                  if (!regex.test(k)) {
                    continue
                  }
                  const result = Schema.safeParse(val)
                  if (!result.success) {
                    for (const issue of result.error.issues) {
                      ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                    }
                  }
                }
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Headers received with the message, similar to HTTP request headers.',
              }),
            queue: z
              .object({
                name: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Name holds the name of the message queue where the message is received.',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Queue holds information about the message queue where the message is received.',
                required: [],
              }),
            routing_key: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'RoutingKey holds the optional routing key of the received message as set on the queuing system, such as in RabbitMQ.',
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Message holds details related to message receiving and publishing if the captured event integrates with a messaging system',
            required: [],
          }),
        page: z
          .object({
            referer: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: "Referer holds the URL of the page that 'linked' to the current page.",
              }),
            url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'URL of the current page' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Page holds information related to the current page and page referers. It is only sent from RUM agents.',
            required: [],
          }),
        request: z
          .object({
            body: z
              .union([z.string(), z.object({})])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Body only contais the request bod, not the query string information. It can either be a dictionary (for standard HTTP requests) or a raw request body.',
              }),
            cookies: z
              .object({})
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Cookies used by the request, parsed as key-value objects.',
              }),
            env: z
              .object({})
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Env holds environment variable information passed to the monitored service.',
              }),
            headers: z
              .strictObject({})
              .superRefine((o, ctx) => {
                const regex = new RegExp('[.*]*$')
                const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                for (const [k, val] of Object.entries(o)) {
                  if (!regex.test(k)) {
                    continue
                  }
                  const result = Schema.safeParse(val)
                  if (!result.success) {
                    for (const issue of result.error.issues) {
                      ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                    }
                  }
                }
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Headers includes any HTTP headers sent by the requester. Cookies will be taken by headers if supplied.',
              }),
            http_version: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description: 'HTTPVersion holds information about the used HTTP version.',
              }),
            method: z
              .string()
              .max(1024)
              .openapi({
                description: 'Method holds information about the method of the HTTP request.',
              }),
            socket: z
              .object({
                encrypted: z
                  .boolean()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Encrypted indicates whether a request was sent as TLS/HTTPS request. DEPRECATED: this field will be removed in a future release.',
                  }),
                remote_address: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "RemoteAddress holds the network address sending the request. It should be obtained through standard APIs and not be parsed from any headers like 'Forwarded'.",
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Socket holds information related to the recorded request, such as whether or not data were encrypted and the remote address.',
                required: [],
              }),
            url: z
              .object({
                full: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Full, possibly agent-assembled URL of the request, e.g. https://example.com:443/search?q=elasticsearch#top.',
                  }),
                hash: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: "Hash of the request URL, e.g. 'top'" }),
                hostname: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: "Hostname information of the request, e.g. 'example.com'.\"",
                  }),
                pathname: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: "Path of the request, e.g. '/search'" }),
                port: z
                  .union([z.string().max(1024), z.int()])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: "Port of the request, e.g. '443'. Can be sent as string or int.",
                  }),
                protocol: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: "Protocol information for the recorded request, e.g. 'https:'.",
                  }),
                raw: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Raw unparsed URL of the HTTP request line, e.g https://example.com:443/search?q=elasticsearch. This URL may be absolute or relative. For more details, see https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html#sec5.1.2.',
                  }),
                search: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Search contains the query string information of the request. It is expected to have values delimited by ampersands.',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'URL holds information sucha as the raw URL, scheme, host and path.',
                required: [],
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Request describes the HTTP request information in case the event was created as a result of an HTTP request.',
            required: ['method'],
          }),
        response: z
          .object({
            decoded_body_size: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'DecodedBodySize holds the size of the decoded payload.' }),
            encoded_body_size: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'EncodedBodySize holds the size of the encoded payload.' }),
            finished: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Finished indicates whether the response was finished or not.',
              }),
            headers: z
              .strictObject({})
              .superRefine((o, ctx) => {
                const regex = new RegExp('[.*]*$')
                const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                for (const [k, val] of Object.entries(o)) {
                  if (!regex.test(k)) {
                    continue
                  }
                  const result = Schema.safeParse(val)
                  if (!result.success) {
                    for (const issue of result.error.issues) {
                      ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                    }
                  }
                }
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Headers holds the http headers sent in the http response.',
              }),
            headers_sent: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'HeadersSent indicates whether http headers were sent.' }),
            status_code: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'StatusCode sent in the http response.' }),
            transfer_size: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'TransferSize holds the total size of the payload.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Response describes the HTTP response information in case the event was created as a result of an HTTP request.',
            required: [],
          }),
        service: z
          .object({
            agent: z
              .object({
                ephemeral_id: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'EphemeralID is a free format ID used for metrics correlation by agents',
                  }),
                name: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the APM agent capturing information.' }),
                version: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the APM agent capturing information.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Agent holds information about the APM agent capturing the event.',
                required: [],
              }),
            environment: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Environment in which the monitored service is running, e.g. `production` or `staging`.',
              }),
            framework: z
              .object({
                name: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the used framework' }),
                version: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the used framework' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Framework holds information about the framework used in the monitored service.',
                required: [],
              }),
            id: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'ID holds a unique identifier for the service.' }),
            language: z
              .object({
                name: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the used programming language' }),
                version: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the used programming language' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Language holds information about the programming language of the monitored service.',
                required: [],
              }),
            name: z
              .string()
              .regex(/^[a-zA-Z0-9 _-]+$/)
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the monitored service.' }),
            node: z
              .object({
                configured_name: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the service node' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Node must be a unique meaningful name of the service node.',
                required: [],
              }),
            origin: z
              .object({
                id: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Immutable id of the service emitting this event.' }),
                name: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Immutable name of the service emitting this event.' }),
                version: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'The version of the service the data was collected from.',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Origin contains the self-nested field groups for service.',
                required: [],
              }),
            runtime: z
              .object({
                name: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the language runtime' }),
                version: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the language runtime' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Runtime holds information about the language runtime running the monitored service',
                required: [],
              }),
            target: z
              .union([
                z.object({ type: z.string() }).openapi({ required: ['type'] }),
                z.object({ name: z.string() }).openapi({ required: ['name'] }),
              ])
              .and(
                z
                  .object({
                    name: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Immutable name of the target service for the event',
                      }),
                    type: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Immutable type of the target service for the event',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Target holds information about the outgoing service in case of an outgoing event',
              }),
            version: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Version of the monitored service.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Service related information can be sent per event. Information provided here will override the more generic information retrieved from metadata, missing service fields will be retrieved from the metadata information.',
            required: [],
          }),
        tags: z
          .record(z.string(), z.union([z.string().max(1024), z.boolean(), z.number()]).nullable())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Tags are a flat mapping of user-defined tags. On the agent side, tags are called labels. Allowed value types are string, boolean and number values. Tags are indexed and searchable.',
          }),
        user: z
          .object({
            domain: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Domain of the logged in user' }),
            email: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Email of the user.' }),
            id: z
              .union([z.string().max(1024), z.int()])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'ID identifies the logged in user, e.g. can be the primary key of the user',
              }),
            username: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the user.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "User holds information about the correlated user for this event. If user data are provided here, all user related information from metadata is ignored, otherwise the metadata's user information will be stored with the event.",
            required: [],
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Context holds arbitrary contextual information for the event.',
        required: [],
      }),
    dropped_spans_stats: z
      .array(
        z
          .object({
            destination_service_resource: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "DestinationServiceResource identifies the destination service resource being operated on. e.g. 'http://elastic.co:80', 'elasticsearch', 'rabbitmq/queue_name'.",
              }),
            duration: z
              .object({
                count: z
                  .int()
                  .min(1)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Count holds the number of times the dropped span happened.',
                  }),
                sum: z
                  .object({
                    us: z
                      .int()
                      .min(0)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Us represents the summation of the span duration.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: "Sum holds dimensions about the dropped span's duration.",
                    required: [],
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Duration holds duration aggregations about the dropped span.',
                required: [],
              }),
            outcome: z
              .union([
                z.literal('success'),
                z.literal('failure'),
                z.literal('unknown'),
                z.literal(null),
              ])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Outcome of the span: success, failure, or unknown. Outcome may be one of a limited set of permitted values describing the success or failure of the span. It can be used for calculating error rates for outgoing requests.',
              }),
            service_target_name: z
              .string()
              .max(512)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'ServiceTargetName identifies the instance name of the target service being operated on',
              }),
            service_target_type: z
              .string()
              .max(512)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "ServiceTargetType identifies the type of the target service being operated on e.g. 'oracle', 'rabbitmq'",
              }),
          })
          .openapi({ required: [] }),
      )
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'DroppedSpanStats holds information about spans that were dropped (for example due to transaction_max_spans or exit_span_min_duration).',
      }),
    duration: z
      .number()
      .min(0)
      .openapi({
        description:
          'Duration how long the transaction took to complete, in milliseconds with 3 decimal points.',
      }),
    experience: z
      .object({
        cls: z
          .number()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'CumulativeLayoutShift holds the Cumulative Layout Shift (CLS) metric value, or a negative value if CLS is unknown. See https://web.dev/cls/',
          }),
        fid: z
          .number()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'FirstInputDelay holds the First Input Delay (FID) metric value, or a negative value if FID is unknown. See https://web.dev/fid/',
          }),
        longtask: z
          .object({
            count: z
              .int()
              .min(0)
              .openapi({ description: 'Count is the total number of of longtasks.' }),
            max: z.number().min(0).openapi({ description: 'Max longtask duration' }),
            sum: z.number().min(0).openapi({ description: 'Sum of longtask durations' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Longtask holds longtask duration/count metrics.',
            required: ['count', 'max', 'sum'],
          }),
        tbt: z
          .number()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'TotalBlockingTime holds the Total Blocking Time (TBT) metric value, or a negative value if TBT is unknown. See https://web.dev/tbt/',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'UserExperience holds metrics for measuring real user experience. This information is only sent by RUM agents.',
        required: [],
      }),
    faas: z
      .object({
        coldstart: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Indicates whether a function invocation was a cold start or not.',
          }),
        execution: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The request id of the function invocation.' }),
        id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'A unique identifier of the invoked serverless function.' }),
        name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The lambda function name.' }),
        trigger: z
          .object({
            request_id: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The id of the origin trigger request.' }),
            type: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The trigger type.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({ description: 'Trigger attributes.', required: [] }),
        version: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The lambda function version.' }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'FAAS holds fields related to Function as a Service events.',
        required: [],
      }),
    id: z
      .string()
      .max(1024)
      .openapi({ description: 'ID holds the hex encoded 64 random bits ID of the event.' }),
    links: z
      .array(
        z
          .object({
            span_id: z
              .string()
              .max(1024)
              .openapi({ description: 'SpanID holds the ID of the linked span.' }),
            trace_id: z
              .string()
              .max(1024)
              .openapi({ description: "TraceID holds the ID of the linked span's trace." }),
          })
          .openapi({ required: ['span_id', 'trace_id'] }),
      )
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Links holds links to other spans, potentially in other traces.' }),
    marks: z
      .record(z.string(), z.record(z.string(), z.number().nullable()).nullable())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Marks capture the timing of a significant event during the lifetime of a transaction. Marks are organized into groups and can be set by the user or the agent. Marks are only reported by RUM agents.',
      }),
    name: z
      .string()
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Name is the generic designation of a transaction in the scope of a single service, eg: 'GET /users/:id'.",
      }),
    otel: z
      .object({
        attributes: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({ description: 'Attributes hold the unmapped OpenTelemetry attributes.' }),
        span_kind: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'SpanKind holds the incoming OpenTelemetry span kind.' }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'OTel contains unmapped OpenTelemetry attributes.', required: [] }),
    outcome: z
      .union([z.literal('success'), z.literal('failure'), z.literal('unknown'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Outcome of the transaction with a limited set of permitted values, describing the success or failure of the transaction from the service's perspective. It is used for calculating error rates for incoming requests. Permitted values: success, failure, unknown.",
      }),
    parent_id: z
      .string()
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.',
      }),
    result: z
      .string()
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Result of the transaction. For HTTP-related transactions, this should be the status code formatted like 'HTTP 2xx'.",
      }),
    sample_rate: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'SampleRate applied to the monitored service at the time where this transaction was recorded. Allowed values are [0..1]. A SampleRate <1 indicates that not all spans are recorded.',
      }),
    sampled: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Sampled indicates whether or not the full information for a transaction is captured. If a transaction is unsampled no spans and less context information will be reported.',
      }),
    session: z
      .object({
        id: z
          .string()
          .max(1024)
          .openapi({
            description: 'ID holds a session ID for grouping a set of related transactions.',
          }),
        sequence: z
          .int()
          .min(1)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Sequence holds an optional sequence number for a transaction within a session. It is not meaningful to compare sequences across two different sessions.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Session holds optional transaction session information for RUM.',
        required: ['id'],
      }),
    span_count: z
      .object({
        dropped: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Dropped is the number of correlated spans that have been dropped by the APM agent recording the transaction.',
          }),
        started: z
          .int()
          .openapi({ description: 'Started is the number of correlated spans that are recorded.' }),
      })
      .openapi({ description: 'SpanCount counts correlated spans.', required: ['started'] }),
    timestamp: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch',
      }),
    trace_id: z
      .string()
      .max(1024)
      .openapi({
        description: 'TraceID holds the hex encoded 128 random bits ID of the correlated trace.',
      }),
    type: z
      .string()
      .max(1024)
      .openapi({
        description:
          "Type expresses the transaction's type as keyword that has specific relevance within the service's domain, eg: 'request', 'backgroundjob'.",
      }),
  })
  .openapi({
    $id: 'docs/spec/v2/transaction',
    required: ['trace_id', 'id', 'type', 'span_count', 'duration'],
  })
  .openapi('Transaction')

const TransactionEventSchema = z
  .object({ transaction: TransactionSchema })
  .openapi({
    description:
      'Transactions are events corresponding to an incoming request or similar task occurring in a monitored service.\n',
    required: ['transaction'],
  })
  .openapi('TransactionEvent')

const Error_2Schema = z
  .unknown()
  .superRefine((val, ctx) => {
    {
      const ifOk = z
        .object({ xid: z.string() })
        .openapi({ required: ['xid'] })
        .safeParse(val).success
      if (ifOk) {
        const Schema = z.object({ pid: z.string() }).openapi({ required: ['pid'] })
        if (!Schema.safeParse(val).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .and(
    z.unknown().superRefine((val, ctx) => {
      {
        const ifOk = z
          .object({ tid: z.string() })
          .openapi({ required: ['tid'] })
          .safeParse(val).success
        if (ifOk) {
          const Schema = z.object({ pid: z.string() }).openapi({ required: ['pid'] })
          if (!Schema.safeParse(val).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }),
  )
  .and(
    z.unknown().superRefine((val, ctx) => {
      {
        const ifOk = z
          .object({ xid: z.string() })
          .openapi({ required: ['xid'] })
          .safeParse(val).success
        if (ifOk) {
          const Schema = z.object({ tid: z.string() }).openapi({ required: ['tid'] })
          if (!Schema.safeParse(val).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }),
  )
  .and(
    z.unknown().superRefine((val, ctx) => {
      {
        const ifOk = z
          .object({ pid: z.string() })
          .openapi({ required: ['pid'] })
          .safeParse(val).success
        if (ifOk) {
          const Schema = z.object({ tid: z.string() }).openapi({ required: ['tid'] })
          if (!Schema.safeParse(val).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }),
  )
  .and(
    z
      .object({
        c: z
          .object({
            cu: z
              .object({})
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Custom can contain additional metadata to be stored with the event. The format is unspecified and can be deeply nested objects. The information will not be indexed or searchable in Elasticsearch.',
              }),
            g: z
              .record(
                z.string(),
                z.union([z.string().max(1024), z.boolean(), z.number()]).nullable(),
              )
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Tags are a flat mapping of user-defined tags. Allowed value types are string, boolean and number values. Tags are indexed and searchable.',
              }),
            p: z
              .object({
                rf: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "Referer holds the URL of the page that 'linked' to the current page.",
                  }),
                url: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'URL of the current page' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Page holds information related to the current page and page referers. It is only sent from RUM agents.',
                required: [],
              }),
            q: z
              .object({
                en: z
                  .object({})
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Env holds environment variable information passed to the monitored service.',
                  }),
                he: z
                  .strictObject({})
                  .superRefine((o, ctx) => {
                    const regex = new RegExp('[.*]*$')
                    const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                    for (const [k, val] of Object.entries(o)) {
                      if (!regex.test(k)) {
                        continue
                      }
                      const result = Schema.safeParse(val)
                      if (!result.success) {
                        for (const issue of result.error.issues) {
                          ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                        }
                      }
                    }
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Headers includes any HTTP headers sent by the requester. Cookies will be taken by headers if supplied.',
                  }),
                hve: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'HTTPVersion holds information about the used HTTP version.',
                  }),
                mt: z
                  .string()
                  .max(1024)
                  .openapi({
                    description: 'Method holds information about the method of the HTTP request.',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Request describes the HTTP request information in case the event was created as a result of an HTTP request.',
                required: ['mt'],
              }),
            r: z
              .object({
                dbs: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'DecodedBodySize holds the size of the decoded payload.',
                  }),
                ebs: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'EncodedBodySize holds the size of the encoded payload.',
                  }),
                he: z
                  .strictObject({})
                  .superRefine((o, ctx) => {
                    const regex = new RegExp('[.*]*$')
                    const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                    for (const [k, val] of Object.entries(o)) {
                      if (!regex.test(k)) {
                        continue
                      }
                      const result = Schema.safeParse(val)
                      if (!result.success) {
                        for (const issue of result.error.issues) {
                          ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                        }
                      }
                    }
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Headers holds the http headers sent in the http response.',
                  }),
                sc: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'StatusCode sent in the http response.' }),
                ts: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'TransferSize holds the total size of the payload.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Response describes the HTTP response information in case the event was created as a result of an HTTP request.',
                required: [],
              }),
            se: z
              .object({
                a: z
                  .object({
                    n: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the APM agent capturing information.' }),
                    ve: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the APM agent capturing information.' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Agent holds information about the APM agent capturing the event.',
                    required: [],
                  }),
                en: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Environment in which the monitored service is running, e.g. `production` or `staging`.',
                  }),
                fw: z
                  .object({
                    n: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the used framework' }),
                    ve: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the used framework' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Framework holds information about the framework used in the monitored service.',
                    required: [],
                  }),
                la: z
                  .object({
                    n: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the used programming language' }),
                    ve: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the used programming language' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Language holds information about the programming language of the monitored service.',
                    required: [],
                  }),
                n: z
                  .string()
                  .regex(/^[a-zA-Z0-9 _-]+$/)
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the monitored service.' }),
                ru: z
                  .object({
                    n: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the language runtime' }),
                    ve: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Version of the language runtime' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Runtime holds information about the language runtime running the monitored service',
                    required: [],
                  }),
                ve: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the monitored service.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Service related information can be sent per event. Information provided here will override the more generic information retrieved from metadata, missing service fields will be retrieved from the metadata information.',
                required: [],
              }),
            u: z
              .object({
                em: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Email of the user.' }),
                id: z
                  .union([z.string().max(1024), z.int()])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'ID identifies the logged in user, e.g. can be the primary key of the user',
                  }),
                ud: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Domain of the user' }),
                un: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the user.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "User holds information about the correlated user for this event. If user data are provided here, all user related information from metadata is ignored, otherwise the metadata's user information will be stored with the event.",
                required: [],
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Context holds arbitrary contextual information for the event.',
            required: [],
          }),
        cl: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Culprit identifies the function call which was the primary perpetrator of this event.',
          }),
        ex: z
          .union([
            z.object({ mg: z.string() }).openapi({ required: ['mg'] }),
            z.object({ t: z.string() }).openapi({ required: ['t'] }),
          ])
          .and(
            z
              .object({
                at: z
                  .object({})
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Attributes of the exception.' }),
                ca: z
                  .array(z.object({}))
                  .min(0)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Cause can hold a collection of error exceptions representing chained exceptions. The chain starts with the outermost exception, followed by its cause, and so on.',
                  }),
                cd: z
                  .union([z.string().max(1024), z.int()])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Code that is set when the error happened, e.g. database error code.',
                  }),
                hd: z
                  .boolean()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Handled indicates whether the error was caught in the code or not.',
                  }),
                mg: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Message contains the originally captured error message.',
                  }),
                mo: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: "Module describes the exception type's module namespace.",
                  }),
                st: z
                  .array(
                    z
                      .object({
                        ap: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: "AbsPath is the absolute path of the frame's file.",
                          }),
                        cli: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: "ContextLine is the line from the frame's file.",
                          }),
                        cn: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'Classname of the frame.' }),
                        co: z
                          .int()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ColumnNumber of the frame.' }),
                        f: z
                          .string()
                          .openapi({
                            description: "Filename is the relative name of the frame's file.",
                          }),
                        fn: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'Function represented by the frame.' }),
                        li: z
                          .int()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'LineNumber of the frame.' }),
                        mo: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'Module to which the frame belongs to.' }),
                        poc: z
                          .array(z.string())
                          .min(0)
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              "PostContext is a slice of code lines immediately before the line from the frame's file.",
                          }),
                        prc: z
                          .array(z.string())
                          .min(0)
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              "PreContext is a slice of code lines immediately after the line from the frame's file.",
                          }),
                      })
                      .openapi({ required: ['f'] }),
                  )
                  .min(0)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Stacktrace information of the captured exception.' }),
                t: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Type of the exception.' }),
              })
              .openapi({ required: [] }),
          )
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Exception holds information about the original error. The information is language specific.',
          }),
        id: z
          .string()
          .max(1024)
          .openapi({ description: 'ID holds the hex encoded 128 random bits ID of the event.' }),
        log: z
          .object({
            ln: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'LoggerName holds the name of the used logger instance.' }),
            lv: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Level represents the severity of the recorded log.' }),
            mg: z
              .string()
              .openapi({
                description:
                  'Message of the logged error. In case a parameterized message is captured, Message should contain the same information, but with any placeholders being replaced.',
              }),
            pmg: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "ParamMessage should contain the same information as Message, but with placeholders where parameters were logged, e.g. 'error connecting to %s'. The string is not interpreted, allowing differnt placeholders per client languange. The information might be used to group errors together.",
              }),
            st: z
              .array(
                z
                  .object({
                    ap: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: "AbsPath is the absolute path of the frame's file.",
                      }),
                    cli: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: "ContextLine is the line from the frame's file." }),
                    cn: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Classname of the frame.' }),
                    co: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'ColumnNumber of the frame.' }),
                    f: z
                      .string()
                      .openapi({
                        description: "Filename is the relative name of the frame's file.",
                      }),
                    fn: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Function represented by the frame.' }),
                    li: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'LineNumber of the frame.' }),
                    mo: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Module to which the frame belongs to.' }),
                    poc: z
                      .array(z.string())
                      .min(0)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "PostContext is a slice of code lines immediately before the line from the frame's file.",
                      }),
                    prc: z
                      .array(z.string())
                      .min(0)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "PreContext is a slice of code lines immediately after the line from the frame's file.",
                      }),
                  })
                  .openapi({ required: ['f'] }),
              )
              .min(0)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Stacktrace information of the captured error.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Log holds additional information added when the error is logged.',
            required: ['mg'],
          }),
        pid: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.',
          }),
        tid: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'TraceID holds the hex encoded 128 random bits ID of the correlated trace.',
          }),
        timestamp: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch.',
          }),
        x: z
          .object({
            n: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Name is the generic designation of a transaction in the scope of a single service, eg: 'GET /users/:id'.",
              }),
            sm: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Sampled indicates whether or not the full information for a transaction is captured. If a transaction is unsampled no spans and less context information will be reported.',
              }),
            t: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Type expresses the correlated transaction's type as keyword that has specific relevance within the service's domain, eg: 'request', 'backgroundjob'.",
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Transaction holds information about the correlated transaction.',
            required: [],
          }),
        xid: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'TransactionID holds the hex encoded 64 random bits ID of the correlated transaction.',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  .openapi({ $id: 'docs/spec/rumv3/error', required: ['id'] })
  .openapi('Error_2')

const ErrorEventv3Schema = z
  .object({ error: Error_2Schema })
  .openapi({ required: ['error'] })
  .openapi('ErrorEventv3')

const Metadata_2Schema = z
  .object({
    l: z
      .record(z.string(), z.union([z.string().max(1024), z.boolean(), z.number()]).nullable())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Labels are a flat mapping of user-defined tags. Allowed value types are string, boolean and number values. Labels are indexed and searchable.',
      }),
    n: z
      .object({
        c: z
          .object({ t: z.string().max(1024).nullable().exactOptional() })
          .nullable()
          .exactOptional()
          .openapi({ required: [] }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Network holds information about the network over which the monitored service is communicating.',
        required: [],
      }),
    se: z
      .object({
        a: z
          .object({
            n: z
              .string()
              .min(1)
              .max(1024)
              .openapi({ description: 'Name of the APM agent capturing information.' }),
            ve: z
              .string()
              .max(1024)
              .openapi({ description: 'Version of the APM agent capturing information.' }),
          })
          .openapi({
            description: 'Agent holds information about the APM agent capturing the event.',
            required: ['n', 've'],
          }),
        en: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Environment in which the monitored service is running, e.g. `production` or `staging`.',
          }),
        fw: z
          .object({
            n: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the used framework' }),
            ve: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Version of the used framework' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Framework holds information about the framework used in the monitored service.',
            required: [],
          }),
        la: z
          .object({
            n: z
              .string()
              .max(1024)
              .openapi({ description: 'Name of the used programming language' }),
            ve: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Version of the used programming language' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Language holds information about the programming language of the monitored service.',
            required: ['n'],
          }),
        n: z
          .string()
          .regex(/^[a-zA-Z0-9 _-]+$/)
          .min(1)
          .max(1024)
          .openapi({ description: 'Name of the monitored service.' }),
        ru: z
          .object({
            n: z.string().max(1024).openapi({ description: 'Name of the language runtime' }),
            ve: z.string().max(1024).openapi({ description: 'Name of the language runtime' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Runtime holds information about the language runtime running the monitored service',
            required: ['n', 've'],
          }),
        ve: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Version of the monitored service.' }),
      })
      .openapi({
        description: 'Service metadata about the monitored service.',
        required: ['a', 'n'],
      }),
    u: z
      .object({
        em: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Email of the user.' }),
        id: z
          .union([z.string().max(1024), z.int()])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'ID identifies the logged in user, e.g. can be the primary key of the user',
          }),
        ud: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Domain of the user' }),
        un: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Name of the user.' }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'User metadata, which can be overwritten on a per event basis.',
        required: [],
      }),
  })
  .openapi({ $id: 'docs/spec/rumv3/metadata', required: ['se'] })
  .openapi('Metadata_2')

const MetadataEventv3Schema = z
  .object({ metadata: Metadata_2Schema })
  .openapi({ required: ['metadata'] })
  .openapi('MetadataEventv3')

const Span_2Schema = z
  .object({
    ac: z
      .string()
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Action holds the specific kind of event within the sub-type represented by the span (e.g. query, connect)',
      }),
    c: z
      .object({
        dt: z
          .object({
            ad: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Address is the destination network address: hostname (e.g. 'localhost'), FQDN (e.g. 'elastic.co'), IPv4 (e.g. '127.0.0.1') IPv6 (e.g. '::1')",
              }),
            po: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Port is the destination network port (e.g. 443)' }),
            se: z
              .object({
                n: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "Name is the identifier for the destination service, e.g. 'http://elastic.co', 'elasticsearch', 'rabbitmq' DEPRECATED: this field will be removed in a future release",
                  }),
                rc: z
                  .string()
                  .max(1024)
                  .openapi({
                    description:
                      "Resource identifies the destination service resource being operated on e.g. 'http://elastic.co:80', 'elasticsearch', 'rabbitmq/queue_name' DEPRECATED: this field will be removed in a future release",
                  }),
                t: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Type of the destination service, e.g. db, elasticsearch. Should typically be the same as span.type. DEPRECATED: this field will be removed in a future release',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Service describes the destination service',
                required: ['rc'],
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Destination contains contextual data about the destination of spans',
            required: [],
          }),
        g: z
          .record(z.string(), z.union([z.string().max(1024), z.boolean(), z.number()]).nullable())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Tags are a flat mapping of user-defined tags. Allowed value types are string, boolean and number values. Tags are indexed and searchable.',
          }),
        h: z
          .object({
            mt: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Method holds information about the method of the HTTP request.',
              }),
            r: z
              .object({
                dbs: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'DecodedBodySize holds the size of the decoded payload.',
                  }),
                ebs: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'EncodedBodySize holds the size of the encoded payload.',
                  }),
                ts: z
                  .int()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'TransferSize holds the total size of the payload.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Response describes the HTTP response information in case the event was created as a result of an HTTP request.',
                required: [],
              }),
            sc: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Deprecated: Use Response.StatusCode instead. StatusCode sent in the http response.',
              }),
            url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'URL is the raw url of the correlating HTTP request.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'HTTP contains contextual information when the span concerns an HTTP request.',
            required: [],
          }),
        se: z
          .object({
            a: z
              .object({
                n: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the APM agent capturing information.' }),
                ve: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the APM agent capturing information.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Agent holds information about the APM agent capturing the event.',
                required: [],
              }),
            n: z
              .string()
              .regex(/^[a-zA-Z0-9 _-]+$/)
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the monitored service.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Service related information can be sent per span. Information provided here will override the more generic information retrieved from metadata, missing service fields will be retrieved from the metadata information.',
            required: [],
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Context holds arbitrary contextual information for the event.',
        required: [],
      }),
    d: z.number().min(0).openapi({ description: 'Duration of the span in milliseconds' }),
    id: z
      .string()
      .max(1024)
      .openapi({ description: 'ID holds the hex encoded 64 random bits ID of the event.' }),
    n: z
      .string()
      .max(1024)
      .openapi({
        description: 'Name is the generic designation of a span in the scope of a transaction.',
      }),
    o: z
      .union([z.literal('success'), z.literal('failure'), z.literal('unknown'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Outcome of the span: success, failure, or unknown. Outcome may be one of a limited set of permitted values describing the success or failure of the span. It can be used for calculating error rates for outgoing requests.',
      }),
    pi: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ParentIndex is the index of the parent span in the list. Absent when the parent is a transaction.',
      }),
    s: z
      .number()
      .openapi({
        description:
          "Start is the offset relative to the transaction's timestamp identifying the start of the span, in milliseconds.",
      }),
    sr: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'SampleRate applied to the monitored service at the time where this span was recorded.',
      }),
    st: z
      .array(
        z
          .object({
            ap: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: "AbsPath is the absolute path of the frame's file." }),
            cli: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: "ContextLine is the line from the frame's file." }),
            cn: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Classname of the frame.' }),
            co: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'ColumnNumber of the frame.' }),
            f: z
              .string()
              .openapi({ description: "Filename is the relative name of the frame's file." }),
            fn: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Function represented by the frame.' }),
            li: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'LineNumber of the frame.' }),
            mo: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Module to which the frame belongs to.' }),
            poc: z
              .array(z.string())
              .min(0)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "PostContext is a slice of code lines immediately before the line from the frame's file.",
              }),
            prc: z
              .array(z.string())
              .min(0)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "PreContext is a slice of code lines immediately after the line from the frame's file.",
              }),
          })
          .openapi({ required: ['f'] }),
      )
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Stacktrace connected to this span event.' }),
    su: z
      .string()
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Subtype is a further sub-division of the type (e.g. postgresql, elasticsearch)',
      }),
    sy: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Sync indicates whether the span was executed synchronously or asynchronously.',
      }),
    t: z
      .string()
      .max(1024)
      .openapi({
        description:
          "Type holds the span's type, and can have specific keywords within the service's domain (eg: 'request', 'backgroundjob', etc)",
      }),
  })
  .openapi({ $id: 'docs/spec/rumv3/span', required: ['n', 't', 'id', 's', 'd'] })
  .openapi('Span_2')

const SpanEventv3Schema = z
  .object({ span: Span_2Schema })
  .openapi({ required: ['span'] })
  .openapi('SpanEventv3')

const Transaction_2Schema = z
  .object({
    c: z
      .object({
        cu: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Custom can contain additional metadata to be stored with the event. The format is unspecified and can be deeply nested objects. The information will not be indexed or searchable in Elasticsearch.',
          }),
        g: z
          .record(z.string(), z.union([z.string().max(1024), z.boolean(), z.number()]).nullable())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Tags are a flat mapping of user-defined tags. Allowed value types are string, boolean and number values. Tags are indexed and searchable.',
          }),
        p: z
          .object({
            rf: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: "Referer holds the URL of the page that 'linked' to the current page.",
              }),
            url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'URL of the current page' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Page holds information related to the current page and page referers. It is only sent from RUM agents.',
            required: [],
          }),
        q: z
          .object({
            en: z
              .object({})
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Env holds environment variable information passed to the monitored service.',
              }),
            he: z
              .strictObject({})
              .superRefine((o, ctx) => {
                const regex = new RegExp('[.*]*$')
                const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                for (const [k, val] of Object.entries(o)) {
                  if (!regex.test(k)) {
                    continue
                  }
                  const result = Schema.safeParse(val)
                  if (!result.success) {
                    for (const issue of result.error.issues) {
                      ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                    }
                  }
                }
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Headers includes any HTTP headers sent by the requester. Cookies will be taken by headers if supplied.',
              }),
            hve: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description: 'HTTPVersion holds information about the used HTTP version.',
              }),
            mt: z
              .string()
              .max(1024)
              .openapi({
                description: 'Method holds information about the method of the HTTP request.',
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Request describes the HTTP request information in case the event was created as a result of an HTTP request.',
            required: ['mt'],
          }),
        r: z
          .object({
            dbs: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'DecodedBodySize holds the size of the decoded payload.' }),
            ebs: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'EncodedBodySize holds the size of the encoded payload.' }),
            he: z
              .strictObject({})
              .superRefine((o, ctx) => {
                const regex = new RegExp('[.*]*$')
                const Schema = z.union([z.array(z.string()), z.string()]).nullable()
                for (const [k, val] of Object.entries(o)) {
                  if (!regex.test(k)) {
                    continue
                  }
                  const result = Schema.safeParse(val)
                  if (!result.success) {
                    for (const issue of result.error.issues) {
                      ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                    }
                  }
                }
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Headers holds the http headers sent in the http response.',
              }),
            sc: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'StatusCode sent in the http response.' }),
            ts: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'TransferSize holds the total size of the payload.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Response describes the HTTP response information in case the event was created as a result of an HTTP request.',
            required: [],
          }),
        se: z
          .object({
            a: z
              .object({
                n: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the APM agent capturing information.' }),
                ve: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the APM agent capturing information.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Agent holds information about the APM agent capturing the event.',
                required: [],
              }),
            en: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Environment in which the monitored service is running, e.g. `production` or `staging`.',
              }),
            fw: z
              .object({
                n: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the used framework' }),
                ve: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the used framework' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Framework holds information about the framework used in the monitored service.',
                required: [],
              }),
            la: z
              .object({
                n: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the used programming language' }),
                ve: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the used programming language' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Language holds information about the programming language of the monitored service.',
                required: [],
              }),
            n: z
              .string()
              .regex(/^[a-zA-Z0-9 _-]+$/)
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the monitored service.' }),
            ru: z
              .object({
                n: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Name of the language runtime' }),
                ve: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Version of the language runtime' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Runtime holds information about the language runtime running the monitored service',
                required: [],
              }),
            ve: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Version of the monitored service.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Service related information can be sent per event. Information provided here will override the more generic information retrieved from metadata, missing service fields will be retrieved from the metadata information.',
            required: [],
          }),
        u: z
          .object({
            em: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Email of the user.' }),
            id: z
              .union([z.string().max(1024), z.int()])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'ID identifies the logged in user, e.g. can be the primary key of the user',
              }),
            ud: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Domain of the user' }),
            un: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Name of the user.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "User holds information about the correlated user for this event. If user data are provided here, all user related information from metadata is ignored, otherwise the metadata's user information will be stored with the event.",
            required: [],
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Context holds arbitrary contextual information for the event.',
        required: [],
      }),
    d: z
      .number()
      .min(0)
      .openapi({
        description:
          'Duration how long the transaction took to complete, in milliseconds with 3 decimal points.',
      }),
    exp: z
      .object({
        cls: z
          .number()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'CumulativeLayoutShift holds the Cumulative Layout Shift (CLS) metric value, or a negative value if CLS is unknown. See https://web.dev/cls/',
          }),
        fid: z
          .number()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'FirstInputDelay holds the First Input Delay (FID) metric value, or a negative value if FID is unknown. See https://web.dev/fid/',
          }),
        lt: z
          .object({
            count: z
              .int()
              .min(0)
              .openapi({ description: 'Count is the total number of of longtasks.' }),
            max: z.number().min(0).openapi({ description: 'Max longtask duration' }),
            sum: z.number().min(0).openapi({ description: 'Sum of longtask durations' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Longtask holds longtask duration/count metrics.',
            required: ['count', 'max', 'sum'],
          }),
        tbt: z
          .number()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'TotalBlockingTime holds the Total Blocking Time (TBT) metric value, or a negative value if TBT is unknown. See https://web.dev/tbt/',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'UserExperience holds metrics for measuring real user experience. This information is only sent by RUM agents.',
        required: [],
      }),
    id: z
      .string()
      .max(1024)
      .openapi({ description: 'ID holds the hex encoded 64 random bits ID of the event.' }),
    k: z
      .record(z.string(), z.record(z.string(), z.number().nullable()).nullable())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Marks capture the timing of a significant event during the lifetime of a transaction. Marks are organized into groups and can be set by the user or the agent. Marks are only reported by RUM agents.',
      }),
    me: z
      .array(
        z
          .object({
            sa: z
              .object({
                ysc: z
                  .object({
                    v: z
                      .number()
                      .openapi({ description: 'Value holds the value of a single metric sample.' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "SpanSelfTimeCount holds the count of the related spans' self_time.",
                    required: ['v'],
                  }),
                yss: z
                  .object({
                    v: z
                      .number()
                      .openapi({ description: 'Value holds the value of a single metric sample.' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: "SpanSelfTimeSum holds the sum of the related spans' self_time.",
                    required: ['v'],
                  }),
              })
              .openapi({
                description: 'Samples hold application metrics collected from the agent.',
                required: [],
              }),
            y: z
              .object({
                su: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Subtype is a further sub-division of the type (e.g. postgresql, elasticsearch)',
                  }),
                t: z
                  .string()
                  .max(1024)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "Type expresses the correlated span's type as keyword that has specific relevance within the service's domain, eg: 'request', 'backgroundjob'.",
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Span holds selected information about the correlated transaction.',
                required: [],
              }),
          })
          .openapi({ required: ['sa'] }),
      )
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Metricsets is a collection metrics related to this transaction.' }),
    n: z
      .string()
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Name is the generic designation of a transaction in the scope of a single service, eg: 'GET /users/:id'.",
      }),
    o: z
      .union([z.literal('success'), z.literal('failure'), z.literal('unknown'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Outcome of the transaction with a limited set of permitted values, describing the success or failure of the transaction from the service's perspective. It is used for calculating error rates for incoming requests. Permitted values: success, failure, unknown.",
      }),
    pid: z
      .string()
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.',
      }),
    rt: z
      .string()
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Result of the transaction. For HTTP-related transactions, this should be the status code formatted like 'HTTP 2xx'.",
      }),
    ses: z
      .object({
        id: z
          .string()
          .openapi({
            description: 'ID holds a session ID for grouping a set of related transactions.',
          }),
        seq: z
          .int()
          .min(1)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Sequence holds an optional sequence number for a transaction within a session. It is not meaningful to compare sequences across two different sessions.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Session holds optional transaction session information for RUM.',
        required: ['id'],
      }),
    sm: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Sampled indicates whether or not the full information for a transaction is captured. If a transaction is unsampled no spans and less context information will be reported.',
      }),
    sr: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'SampleRate applied to the monitored service at the time where this transaction was recorded. Allowed values are [0..1]. A SampleRate <1 indicates that not all spans are recorded.',
      }),
    t: z
      .string()
      .max(1024)
      .openapi({
        description:
          "Type expresses the transaction's type as keyword that has specific relevance within the service's domain, eg: 'request', 'backgroundjob'.",
      }),
    tid: z
      .string()
      .max(1024)
      .openapi({
        description: 'TraceID holds the hex encoded 128 random bits ID of the correlated trace.',
      }),
    y: z
      .array(
        z
          .object({
            ac: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Action holds the specific kind of event within the sub-type represented by the span (e.g. query, connect)',
              }),
            c: z
              .object({
                dt: z
                  .object({
                    ad: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "Address is the destination network address: hostname (e.g. 'localhost'), FQDN (e.g. 'elastic.co'), IPv4 (e.g. '127.0.0.1') IPv6 (e.g. '::1')",
                      }),
                    po: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Port is the destination network port (e.g. 443)' }),
                    se: z
                      .object({
                        n: z
                          .string()
                          .max(1024)
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              "Name is the identifier for the destination service, e.g. 'http://elastic.co', 'elasticsearch', 'rabbitmq' DEPRECATED: this field will be removed in a future release",
                          }),
                        rc: z
                          .string()
                          .max(1024)
                          .openapi({
                            description:
                              "Resource identifies the destination service resource being operated on e.g. 'http://elastic.co:80', 'elasticsearch', 'rabbitmq/queue_name' DEPRECATED: this field will be removed in a future release",
                          }),
                        t: z
                          .string()
                          .max(1024)
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              'Type of the destination service, e.g. db, elasticsearch. Should typically be the same as span.type. DEPRECATED: this field will be removed in a future release',
                          }),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'Service describes the destination service',
                        required: ['rc'],
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Destination contains contextual data about the destination of spans',
                    required: [],
                  }),
                g: z
                  .record(
                    z.string(),
                    z.union([z.string().max(1024), z.boolean(), z.number()]).nullable(),
                  )
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Tags are a flat mapping of user-defined tags. Allowed value types are string, boolean and number values. Tags are indexed and searchable.',
                  }),
                h: z
                  .object({
                    mt: z
                      .string()
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Method holds information about the method of the HTTP request.',
                      }),
                    r: z
                      .object({
                        dbs: z
                          .int()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: 'DecodedBodySize holds the size of the decoded payload.',
                          }),
                        ebs: z
                          .int()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: 'EncodedBodySize holds the size of the encoded payload.',
                          }),
                        ts: z
                          .int()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: 'TransferSize holds the total size of the payload.',
                          }),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Response describes the HTTP response information in case the event was created as a result of an HTTP request.',
                        required: [],
                      }),
                    sc: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Deprecated: Use Response.StatusCode instead. StatusCode sent in the http response.',
                      }),
                    url: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'URL is the raw url of the correlating HTTP request.',
                      }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'HTTP contains contextual information when the span concerns an HTTP request.',
                    required: [],
                  }),
                se: z
                  .object({
                    a: z
                      .object({
                        n: z
                          .string()
                          .max(1024)
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'Name of the APM agent capturing information.' }),
                        ve: z
                          .string()
                          .max(1024)
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description: 'Version of the APM agent capturing information.',
                          }),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Agent holds information about the APM agent capturing the event.',
                        required: [],
                      }),
                    n: z
                      .string()
                      .regex(/^[a-zA-Z0-9 _-]+$/)
                      .max(1024)
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Name of the monitored service.' }),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Service related information can be sent per span. Information provided here will override the more generic information retrieved from metadata, missing service fields will be retrieved from the metadata information.',
                    required: [],
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Context holds arbitrary contextual information for the event.',
                required: [],
              }),
            d: z.number().min(0).openapi({ description: 'Duration of the span in milliseconds' }),
            id: z
              .string()
              .max(1024)
              .openapi({ description: 'ID holds the hex encoded 64 random bits ID of the event.' }),
            n: z
              .string()
              .max(1024)
              .openapi({
                description:
                  'Name is the generic designation of a span in the scope of a transaction.',
              }),
            o: z
              .union([
                z.literal('success'),
                z.literal('failure'),
                z.literal('unknown'),
                z.literal(null),
              ])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Outcome of the span: success, failure, or unknown. Outcome may be one of a limited set of permitted values describing the success or failure of the span. It can be used for calculating error rates for outgoing requests.',
              }),
            pi: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'ParentIndex is the index of the parent span in the list. Absent when the parent is a transaction.',
              }),
            s: z
              .number()
              .openapi({
                description:
                  "Start is the offset relative to the transaction's timestamp identifying the start of the span, in milliseconds.",
              }),
            sr: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'SampleRate applied to the monitored service at the time where this span was recorded.',
              }),
            st: z
              .array(
                z
                  .object({
                    ap: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: "AbsPath is the absolute path of the frame's file.",
                      }),
                    cli: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: "ContextLine is the line from the frame's file." }),
                    cn: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Classname of the frame.' }),
                    co: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'ColumnNumber of the frame.' }),
                    f: z
                      .string()
                      .openapi({
                        description: "Filename is the relative name of the frame's file.",
                      }),
                    fn: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Function represented by the frame.' }),
                    li: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'LineNumber of the frame.' }),
                    mo: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Module to which the frame belongs to.' }),
                    poc: z
                      .array(z.string())
                      .min(0)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "PostContext is a slice of code lines immediately before the line from the frame's file.",
                      }),
                    prc: z
                      .array(z.string())
                      .min(0)
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          "PreContext is a slice of code lines immediately after the line from the frame's file.",
                      }),
                  })
                  .openapi({ required: ['f'] }),
              )
              .min(0)
              .nullable()
              .exactOptional()
              .openapi({ description: 'Stacktrace connected to this span event.' }),
            su: z
              .string()
              .max(1024)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Subtype is a further sub-division of the type (e.g. postgresql, elasticsearch)',
              }),
            sy: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Sync indicates whether the span was executed synchronously or asynchronously.',
              }),
            t: z
              .string()
              .max(1024)
              .openapi({
                description:
                  "Type holds the span's type, and can have specific keywords within the service's domain (eg: 'request', 'backgroundjob', etc)",
              }),
          })
          .openapi({ required: ['n', 't', 'id', 's', 'd'] }),
      )
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Spans is a collection of spans related to this transaction.' }),
    yc: z
      .object({
        dd: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Dropped is the number of correlated spans that have been dropped by the APM agent recording the transaction.',
          }),
        sd: z
          .int()
          .openapi({ description: 'Started is the number of correlated spans that are recorded.' }),
      })
      .openapi({ description: 'SpanCount counts correlated spans.', required: ['sd'] }),
  })
  .openapi({ $id: 'docs/spec/rumv3/transaction', required: ['tid', 't', 'id', 'yc', 'd'] })
  .openapi('Transaction_2')

const TransactionEventv3Schema = z
  .object({ transaction: Transaction_2Schema })
  .openapi({ required: ['transaction'] })
  .openapi('TransactionEventv3')

const _200ServerInfoResponse = {
  description: 'A successful response indicates that the server is up.',
  content: {
    'application/json': {
      schema: z
        .object({
          build_date: z.string().exactOptional(),
          build_sha: z.string().exactOptional(),
          publish_ready: z.boolean().exactOptional(),
          version: z.string().exactOptional(),
        })
        .openapi({
          description:
            'If an API key or a secret token is passed along with the request, the response payload includes some information about the APM server.',
          required: [],
        }),
      examples: {
        getServerHealthAuthResponse: {
          summary: 'Example APM Server information request with a secret token',
          value: {
            build_date: '2021-12-18T19:59:06Z',
            build_sha: '24fe620eeff5a19e2133c940c7e5ce1ceddb1445',
            publish_ready: true,
            version: '8.12.2',
          },
        },
      },
    },
  },
}

const MetadataEventIntakeRequestExampleExample = {
  summary: 'A request body example for the metadata event type.',
  value: {
    metadata: {
      process: {
        pid: 1234,
        title: '/usr/lib/jvm/java-10-openjdk-amd64/bin/java',
        ppid: 1,
        argv: ['-v'],
      },
      system: {
        architecture: 'amd64',
        detected_hostname: '8ec7ceb99074',
        configured_hostname: 'host1',
        platform: 'Linux',
        container: { id: '8ec7ceb990749e79b37f6dc6cd3628633618d6ce412553a552a0fa6b69419ad4' },
        kubernetes: {
          namespace: 'default',
          pod: {
            uid: 'b17f231da0ad128dc6c6c0b2e82f6f303d3893e3',
            name: 'instrumented-java-service',
          },
          node: { name: 'node-name' },
        },
      },
      service: {
        name: '1234_service-12a3',
        version: '4.3.0',
        node: {
          configured_name: '8ec7ceb990749e79b37f6dc6cd3628633618d6ce412553a552a0fa6b69419ad4',
        },
        environment: 'production',
        language: { name: 'Java', version: '10.0.2' },
        agent: {
          version: '1.10.0',
          name: 'java',
          ephemeral_id: 'e71be9ac-93b0-44b9-a997-5638f6ccfc36',
        },
        framework: { name: 'spring', version: '5.0.0' },
        runtime: { name: 'Java', version: '10.0.2' },
      },
      labels: { group: 'experimental', ab_testing: true, segment: 5 },
    },
  },
}

const MetricSetEventIntakeRequestExampleExample = {
  summary: 'A request body example for the metricset event type.',
  value: {
    metricset: {
      samples: {
        'transaction.breakdown.count': { value: 12 },
        'transaction.duration.sum.us': { value: 12 },
        'transaction.duration.count': { value: 2 },
        'transaction.self_time.sum.us': { value: 10 },
        'transaction.self_time.count': { value: 2 },
        'span.self_time.count': { value: 1 },
        'span.self_time.sum.us': { value: 633.288 },
        byte_counter: { value: 1 },
        short_counter: { value: 227 },
        integer_gauge: { value: 42767 },
        long_gauge: { value: 3147483648 },
        float_gauge: { value: 9.16 },
        double_gauge: { value: 3.141592653589793 },
        'dotted.float.gauge': { value: 6.12 },
        'negative.d.o.t.t.e.d': { value: -1022 },
      },
      tags: { code: 200, success: true },
      transaction: { type: 'request', name: 'GET/' },
      span: { type: 'db', subtype: 'mysql' },
      timestamp: 1571657444929001,
    },
  },
}

const ApiKeyAuthSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'Authorization',
  description: 'e.g. Authorization: ApiKey base64AccessApiKey',
}

const SecretTokenSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'Secret token' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['server info'],
  summary: 'Get general server information',
  description:
    'This lightweight endpoint is useful as a server up/down health check.\nTo configure authenticated access to the APM server, the instructions at [APM API key](https://www.elastic.co/guide/en/observability/current/api-key.html) or [APM Secret Token](https://www.elastic.co/guide/en/observability/current/secret-token.html) must be followed to configure the correct permissions for APM access.\n',
  operationId: 'getServerHealth',
  responses: { 200: _200ServerInfoResponse },
})

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['server info'],
  summary: 'Get general server information',
  operationId: 'postServerHealth',
  responses: { 200: _200ServerInfoResponse },
})

export const getConfigV1AgentsRoute = createRoute({
  method: 'get',
  path: '/config/v1/agents',
  tags: ['agent config'],
  summary: 'Get agent configuration changes',
  description:
    'To configure authenticated access to the APM server, the instructions at [APM API key](https://www.elastic.co/guide/en/observability/current/api-key.html) or [APM Secret Token](https://www.elastic.co/guide/en/observability/current/secret-token.html) must be followed to configure the correct permissions for APM access.\n',
  operationId: 'getAgentConfig',
  request: {
    query: z.object({
      'service.name': z
        .string()
        .openapi({
          param: { in: 'query', name: 'service.name', required: true, schema: { type: 'string' } },
        }),
      'service.environment': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'service.environment',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
})

export const postConfigV1AgentsRoute = createRoute({
  method: 'post',
  path: '/config/v1/agents',
  tags: ['agent config'],
  summary: 'Get agent configuration changes',
  description:
    'To configure authenticated access to the APM server, the instructions at [APM API key](https://www.elastic.co/guide/en/observability/current/api-key.html) or [APM Secret Token](https://www.elastic.co/guide/en/observability/current/secret-token.html) must be followed to configure the correct permissions for APM access.\n',
  operationId: 'postAgentConfig',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .looseObject({
              CAPTURE_BODY: z.string().exactOptional().openapi({ example: 'off' }),
              service: z
                .object({
                  environment: z.string().exactOptional().openapi({ example: 'all' }),
                  name: z.string().openapi({ example: 'test-service' }),
                })
                .openapi({ required: ['name'] }),
            })
            .openapi({ required: ['service'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              capture_body: z
                .enum(['off', 'errors', 'transactions', 'all'])
                .exactOptional()
                .openapi({
                  description:
                    'For transactions that are HTTP requests, the agent can optionally capture the request body (for example, POST variables). For transactions that are initiated by receiving a message from a message broker, the agent can capture the textual message body.\n',
                  example: 'off',
                }),
              transaction_max_spans: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of spans that are recorded per transaction.',
                  example: 500,
                }),
              transaction_sample_rate: z
                .float32()
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description: 'The agent samples transactions at this rate.',
                  example: 0.3,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description:
        'APM Server is configured to fetch agent configuration from Elasticsearch but the configuration is invalid.',
    },
    503: { description: 'APM Server is starting up or Elasticsearch is unreachable.' },
  },
})

export const getConfigV1RumAgentsRoute = createRoute({
  method: 'get',
  path: '/config/v1/rum/agents',
  tags: ['agent config'],
  summary: 'Get RUM agent configuration changes',
  description:
    'To configure authenticated access to the APM server, the instructions at [APM API key](https://www.elastic.co/guide/en/observability/current/api-key.html) or [APM Secret Token](https://www.elastic.co/guide/en/observability/current/secret-token.html) must be followed to configure the correct permissions for APM access.\n',
  operationId: 'getRumAgentConfig',
  responses: { 200: { description: 'Successful response.' } },
})

export const postIntakeV2EventsRoute = createRoute({
  method: 'post',
  path: '/intake/v2/events',
  tags: ['event intake'],
  summary: 'Send APM agent events',
  description:
    'NOTE: Most users do not need to interact directly with the events intake API. Agents communicate with the APM Server by sending events--captured pieces of information--in an HTTP request. Events can be transactions, spans, errors, or metrics. Each event is sent as its own line in the HTTP request body, which is known as newline delimited JSON (NDJSON). With NDJSON, agents can open an HTTP POST request and use chunked encoding to stream events to the APM Server as soon as they are recorded in the agent. This makes it simple for agents to serialize each event to a stream of newline delimited JSON. The APM Server also treats the HTTP body as a compressed stream and thus reads and handles each event independently. See the [APM data model](https://www.elastic.co/guide/en/observability/current/apm-data-model.html) to learn more about the different types of events.\n',
  operationId: 'postEventIntake',
  request: {
    body: {
      content: {
        'application/ndjson': {
          schema: z.union([
            ErrorEventSchema,
            MetadataEventSchema,
            MetricSetEventSchema,
            SpanEventSchema,
            TransactionEventSchema,
          ]),
          examples: {
            postMetadataEventIntakeExample: MetadataEventIntakeRequestExampleExample,
            postMetricSetEventIntakeExample: MetricSetEventIntakeRequestExampleExample,
          },
        },
      },
    },
  },
  responses: { 202: { description: 'Successful response; all events succeeded.' } },
})

export const postIntakeV2RumEventsRoute = createRoute({
  method: 'post',
  path: '/intake/v2/rum/events',
  tags: ['event intake'],
  summary: 'Send RUM events',
  description: 'NOTE: Most users do not need to interact directly with the events intake API.\n',
  operationId: 'postRumEventIntakeV2',
  request: {
    body: {
      content: {
        'application/ndjson': {
          schema: z.union([
            ErrorEventSchema,
            MetadataEventSchema,
            MetricSetEventSchema,
            SpanEventSchema,
            TransactionEventSchema,
          ]),
        },
      },
    },
  },
  responses: { 202: { description: 'Successful response; all events succeeded.' } },
})

export const postIntakeV3RumEventsRoute = createRoute({
  method: 'post',
  path: '/intake/v3/rum/events',
  tags: ['event intake'],
  summary: 'Send RUM events',
  description: 'NOTE: Most users do not need to interact directly with the events intake API.\n',
  operationId: 'postRumEventIntakeV3',
  request: {
    body: {
      content: {
        'application/ndjson': {
          schema: z.union([
            ErrorEventv3Schema,
            MetadataEventv3Schema,
            SpanEventv3Schema,
            TransactionEventv3Schema,
          ]),
        },
      },
    },
  },
  responses: { 202: { description: 'Successful response; all events succeeded.' } },
})

export const postOpentelemetryProtoCollectorMetricsV1MetricsServiceExportRoute = createRoute({
  method: 'post',
  path: '/opentelemetry.proto.collector.metrics.v1.MetricsService/Export',
  tags: ['opentelemetry intake'],
  summary: 'Send OTLP metrics',
  description:
    'APM Server supports receiving metrics over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/gRPC communication protocol.\n',
  operationId: 'postOtlpGrpcMetrics',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: { 200: { description: 'OK' } },
})

export const postOpentelemetryProtoCollectorTraceV1TraceServiceExportRoute = createRoute({
  method: 'post',
  path: '/opentelemetry.proto.collector.trace.v1.TraceService/Export',
  tags: ['opentelemetry intake'],
  summary: 'Send OTLP traces',
  description:
    'APM Server supports receiving traces over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/gRPC communication protocol.\n',
  operationId: 'postOtlpGrpcTraces',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: { 200: { description: 'OK' } },
})

export const postOpentelemetryProtoCollectorLogsV1LogsServiceExportRoute = createRoute({
  method: 'post',
  path: '/opentelemetry.proto.collector.logs.v1.LogsService/Export',
  tags: ['opentelemetry intake'],
  summary: 'Send OTLP logs',
  description:
    'APM Server supports receiving logs over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/gRPC communication protocol.\n',
  operationId: 'postOtlpGrpcLogs',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: { 200: { description: 'OK' } },
})

export const postV1MetricsRoute = createRoute({
  method: 'post',
  path: '/v1/metrics',
  tags: ['opentelemetry intake'],
  summary: 'Send OTLP metrics',
  description:
    'APM Server supports receiving metrics over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/HTTP (protobuf) communication protocol.\n',
  operationId: 'postOtlpHttpMetrics',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: { 200: { description: 'OK' } },
})

export const postV1TracesRoute = createRoute({
  method: 'post',
  path: '/v1/traces',
  tags: ['opentelemetry intake'],
  summary: 'Send OTLP traces',
  description:
    'APM Server supports receiving traces over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/HTTP (protobuf) communication protocol.\n',
  operationId: 'postOtlpHttpTraces',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: { 200: { description: 'OK' } },
})

export const postV1LogsRoute = createRoute({
  method: 'post',
  path: '/v1/logs',
  tags: ['opentelemetry intake'],
  summary: 'Send OTLP logs',
  description:
    'APM Server supports receiving logs over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/HTTP (protobuf) communication protocol.\n',
  operationId: 'postOtlpHttpLogs',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: { 200: { description: 'OK' } },
})
