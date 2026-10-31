import { createRoute, z } from '@hono/zod-openapi'

const DeleteEventsResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for deleting error events.' })
  .openapi('DeleteEventsResponse')

const HttpRequestContextSchema = z
  .object({
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of HTTP request, such as `GET`, `POST`, etc.' }),
    referrer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The referrer information that is provided with the request.' }),
    remoteIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IP address from which the request originated. This can be IPv4, IPv6, or a token which is derived from the IP address, depending on the data that has been provided in the error report.',
      }),
    responseStatusCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The HTTP response status code for the request.' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the request.' }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user agent information that is provided with the request.' }),
  })
  .openapi({
    description:
      'HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.',
    required: [],
  })
  .openapi('HttpRequestContext')

const SourceLocationSchema = z
  .object({
    filePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source code filename, which can include a truncated relative path, or a full path from a production machine.',
      }),
    functionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable name of a function or method. The value can include optional context like the class or package name. For example, `my.package.MyClass.method` in case of Java.',
      }),
    lineNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: '1-based. 0 indicates that the line number is unknown.' }),
  })
  .openapi({
    description:
      'Indicates a location in the source code of the service for which errors are reported. `functionName` must be provided by the application when reporting an error, unless the error report contains a `message` with a supported exception stack trace. All fields are optional for the later case.',
    required: [],
  })
  .openapi('SourceLocation')

const SourceReferenceSchema = z
  .object({
    repository: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"',
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"',
      }),
  })
  .openapi({
    description:
      'A reference to a particular snapshot of the source tree used to build and deploy an application.',
    required: [],
  })
  .openapi('SourceReference')

const ErrorContextSchema = z
  .object({
    httpRequest: HttpRequestContextSchema.exactOptional().openapi({
      description: 'The HTTP request which was processed when the error was triggered.',
    }),
    reportLocation: SourceLocationSchema.exactOptional().openapi({
      description:
        'The location in the source code where the decision was made to report the error, usually the place where it was logged. For a logged exception this would be the source line where the exception is logged, usually close to the place where it was caught.',
    }),
    sourceReferences: z
      .array(SourceReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'Source code that was used to build the executable which has caused the given error message.',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user who caused or was affected by the crash. This can be a user ID, an email address, or an arbitrary token that uniquely identifies the user. When sending an error report, leave this field empty if the user was not logged in. In this case the Error Reporting system will use other data, such as remote IP address, to distinguish affected users. See `affected_users_count` in `ErrorGroupStats`.',
      }),
  })
  .openapi({
    description:
      'A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.',
    required: [],
  })
  .openapi('ErrorContext')

const ServiceContextSchema = z
  .object({
    resourceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the MonitoredResource. List of possible values: https://cloud.google.com/monitoring/api/resources Value is set automatically for incoming errors and must not be set when reporting errors.',
      }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to `version`, which can be changed whenever new code is deployed. Contains the service name for error reports extracted from Google App Engine logs or `default` if the App Engine default service is used.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app.',
      }),
  })
  .openapi({
    description:
      'Describes a running service that sends errors. Its version changes over time and multiple versions can run in parallel.',
    required: [],
  })
  .openapi('ServiceContext')

const ErrorEventSchema = z
  .object({
    context: ErrorContextSchema.exactOptional().openapi({
      description: 'Data about the context in which the error occurred.',
    }),
    eventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time when the event occurred as provided in the error report. If the report did not contain a timestamp, the time the error was received by the Error Reporting system is used.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The stack trace that was reported or logged by the service.' }),
    serviceContext: ServiceContextSchema.exactOptional().openapi({
      description: 'The `ServiceContext` for which this error was reported.',
    }),
  })
  .openapi({
    description: 'An error event which is returned by the Error Reporting system.',
    required: [],
  })
  .openapi('ErrorEvent')

const TrackingIssueSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL pointing to a related entry in an issue tracking system. Example: `https://github.com/user/project/issues/4`',
      }),
  })
  .openapi({
    description: 'Information related to tracking the progress on resolving the error.',
    required: [],
  })
  .openapi('TrackingIssue')

const ErrorGroupSchema = z
  .object({
    groupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Group IDs are unique for a given project. If the same kind of error occurs in different service contexts, it will receive the same group ID.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The group resource name. Example: projects/my-project-123/groups/CNSgkpnppqKCUw',
      }),
    resolutionStatus: z
      .enum(['RESOLUTION_STATUS_UNSPECIFIED', 'OPEN', 'ACKNOWLEDGED', 'RESOLVED', 'MUTED'])
      .exactOptional()
      .openapi({
        description:
          "Error group's resolution status. An unspecified resolution status will be interpreted as OPEN",
      }),
    trackingIssues: z
      .array(TrackingIssueSchema)
      .exactOptional()
      .openapi({ description: 'Associated tracking issues.' }),
  })
  .openapi({ description: 'Description of a group of similar error events.', required: [] })
  .openapi('ErrorGroup')

const TimedCountSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Approximate number of occurrences in the given time period.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'End of the time period to which `count` refers (excluded).' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Start of the time period to which `count` refers (included).' }),
  })
  .openapi({
    description:
      'The number of errors in a given time period. All numbers are approximate since the error events are sampled before counting them.',
    required: [],
  })
  .openapi('TimedCount')

const ErrorGroupStatsSchema = z
  .object({
    affectedServices: z
      .array(ServiceContextSchema)
      .exactOptional()
      .openapi({
        description:
          'Service contexts with a non-zero error count for the given filter criteria. This list can be truncated if multiple services are affected. Refer to `num_affected_services` for the total count.',
      }),
    affectedUsersCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Approximate number of affected users in the given group that match the filter criteria. Users are distinguished by data in the ErrorContext of the individual error events, such as their login name or their remote IP address in case of HTTP requests. The number of affected users can be zero even if the number of errors is non-zero if no data was provided from which the affected user could be deduced. Users are counted based on data in the request context that was provided in the error report. If more users are implicitly affected, such as due to a crash of the whole service, this is not reflected here.',
      }),
    count: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Approximate total number of events in the given group that match the filter criteria.',
      }),
    firstSeenTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Approximate first occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request.',
      }),
    group: ErrorGroupSchema.exactOptional().openapi({
      description: 'Group data that is independent of the filter criteria.',
    }),
    lastSeenTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Approximate last occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request.',
      }),
    numAffectedServices: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of services with a non-zero error count for the given filter criteria.',
      }),
    representative: ErrorEventSchema.exactOptional().openapi({
      description:
        'An arbitrary event that is chosen as representative for the whole group. The representative event is intended to be used as a quick preview for the whole group. Events in the group are usually sufficiently similar to each other such that showing an arbitrary representative provides insight into the characteristics of the group as a whole.',
    }),
    timedCounts: z
      .array(TimedCountSchema)
      .exactOptional()
      .openapi({
        description:
          'Approximate number of occurrences over time. Timed counts returned by ListGroups are guaranteed to be: - Inside the requested time interval - Non-overlapping, and - Ordered by ascending time.',
      }),
  })
  .openapi({
    description:
      'Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.',
    required: [],
  })
  .openapi('ErrorGroupStats')

const ListEventsResponseSchema = z
  .object({
    errorEvents: z
      .array(ErrorEventSchema)
      .exactOptional()
      .openapi({ description: 'The error events which match the given request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results.',
      }),
    timeRangeBegin: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The timestamp specifies the start time to which the request was restricted.',
      }),
  })
  .openapi({ description: 'Contains a set of requested error events.', required: [] })
  .openapi('ListEventsResponse')

const ListGroupStatsResponseSchema = z
  .object({
    errorGroupStats: z
      .array(ErrorGroupStatsSchema)
      .exactOptional()
      .openapi({ description: 'The error group stats which match the given request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results.',
      }),
    timeRangeBegin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp specifies the start time to which the request was restricted. The start time is set based on the requested time range. It may be adjusted to a later time if a project has exceeded the storage quota and older data has been deleted.',
      }),
  })
  .openapi({ description: 'Contains a set of requested error group stats.', required: [] })
  .openapi('ListGroupStatsResponse')

const ReportErrorEventResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response for reporting an individual error event. Data may be added to this message in the future.',
  })
  .openapi('ReportErrorEventResponse')

const ReportedErrorEventSchema = z
  .object({
    context: ErrorContextSchema.exactOptional().openapi({
      description: 'Optional. A description of the context in which the error occurred.',
    }),
    eventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Time when the event occurred. If not provided, the time when the event was received by the Error Reporting system is used. If provided, the time must not exceed the [logs retention period](https://cloud.google.com/logging/quotas#logs_retention_periods) in the past, or be more than 24 hours in the future. If an invalid time is provided, then an error is returned.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The error message. If no `context.reportLocation` is provided, the message must contain a header (typically consisting of the exception type name and an error message) and an exception stack trace in one of the supported programming languages and formats. Supported languages are Java, Python, JavaScript, Ruby, C#, PHP, and Go. Supported stack trace formats are: * **Java**: Must be the return value of [`Throwable.printStackTrace()`](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html#printStackTrace%28%29). * **Python**: Must be the return value of [`traceback.format_exc()`](https://docs.python.org/2/library/traceback.html#traceback.format_exc). * **JavaScript**: Must be the value of [`error.stack`](https://github.com/v8/v8/wiki/Stack-Trace-API) as returned by V8. * **Ruby**: Must contain frames returned by [`Exception.backtrace`](https://ruby-doc.org/core-2.2.0/Exception.html#method-i-backtrace). * **C#**: Must be the return value of [`Exception.ToString()`](https://msdn.microsoft.com/en-us/library/system.exception.tostring.aspx). * **PHP**: Must be prefixed with `"PHP (Notice|Parse error|Fatal error|Warning): "` and contain the result of [`(string)$exception`](https://php.net/manual/en/exception.tostring.php). * **Go**: Must be the return value of [`runtime.Stack()`](https://golang.org/pkg/runtime/debug/#Stack).',
      }),
    serviceContext: ServiceContextSchema.exactOptional().openapi({
      description: 'Required. The service context in which this error has occurred.',
    }),
  })
  .openapi({
    description: 'An error event which is reported to the Error Reporting system.',
    required: [],
  })
  .openapi('ReportedErrorEvent')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1GroupNameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{groupName}',
  tags: ['projects'],
  description: 'Get the specified group.',
  operationId: 'clouderrorreporting.projects.groups.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      groupName: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The group resource name. Written as `projects/{projectID}/groups/{group_name}`. Call groupStats.list to return a list of groups belonging to this project. Example: `projects/my-project-123/groups/my-group`',
            in: 'path',
            name: 'groupName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ErrorGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1beta1NameRoute = createRoute({
  method: 'put',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Replace the data for the specified group. Fails if the group does not exist.',
  operationId: 'clouderrorreporting.projects.groups.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The group resource name. Example: projects/my-project-123/groups/CNSgkpnppqKCUw',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ErrorGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ErrorGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ProjectNameEventsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{projectName}/events',
  tags: ['projects'],
  description: 'Lists the specified events.',
  operationId: 'clouderrorreporting.projects.events.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The group for which events shall be returned.',
            in: 'query',
            name: 'groupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'Optional. The maximum number of results to return per response.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. A `next_page_token` provided by a previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'serviceFilter.resourceType': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).',
            in: 'query',
            name: 'serviceFilter.resourceType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'serviceFilter.service': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).',
            in: 'query',
            name: 'serviceFilter.service',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'serviceFilter.version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).',
            in: 'query',
            name: 'serviceFilter.version',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'timeRange.period': z
        .enum([
          'PERIOD_UNSPECIFIED',
          'PERIOD_1_HOUR',
          'PERIOD_6_HOURS',
          'PERIOD_1_DAY',
          'PERIOD_1_WEEK',
          'PERIOD_30_DAYS',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restricts the query to the specified time range.',
            in: 'query',
            name: 'timeRange.period',
            schema: {
              enum: [
                'PERIOD_UNSPECIFIED',
                'PERIOD_1_HOUR',
                'PERIOD_6_HOURS',
                'PERIOD_1_DAY',
                'PERIOD_1_WEEK',
                'PERIOD_30_DAYS',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListEventsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1ProjectNameEventsRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{projectName}/events',
  tags: ['projects'],
  description: 'Deletes all error events of a given project.',
  operationId: 'clouderrorreporting.projects.deleteEvents',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteEventsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ProjectNameEventsReportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{projectName}/events:report',
  tags: ['projects'],
  description:
    "Report an individual error event and record the event to a log. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456` **Note:** [Error Reporting] (https://cloud.google.com/error-reporting) is a global service built on Cloud Logging and doesn't analyze logs stored in regional log buckets or logs routed to other Google Cloud projects.",
  operationId: 'clouderrorreporting.projects.events.report',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectId}`, where `{projectId}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: // `projects/my-project-123`.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportedErrorEventSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportErrorEventResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ProjectNameGroupStatsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{projectName}/groupStats',
  tags: ['projects'],
  description: 'Lists the specified groups.',
  operationId: 'clouderrorreporting.projects.groupStats.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      alignment: z
        .enum([
          'ERROR_COUNT_ALIGNMENT_UNSPECIFIED',
          'ALIGNMENT_EQUAL_ROUNDED',
          'ALIGNMENT_EQUAL_AT_END',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`.',
            in: 'query',
            name: 'alignment',
            schema: {
              enum: [
                'ERROR_COUNT_ALIGNMENT_UNSPECIFIED',
                'ALIGNMENT_EQUAL_ROUNDED',
                'ALIGNMENT_EQUAL_AT_END',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      alignmentTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC.',
            in: 'query',
            name: 'alignmentTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      groupId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. List all ErrorGroupStats with these IDs.',
            explode: true,
            in: 'query',
            name: 'groupId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      order: z
        .enum([
          'GROUP_ORDER_UNSPECIFIED',
          'COUNT_DESC',
          'LAST_SEEN_DESC',
          'CREATED_DESC',
          'AFFECTED_USERS_DESC',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The sort order in which the results are returned. Default is `COUNT_DESC`.',
            in: 'query',
            name: 'order',
            schema: {
              enum: [
                'GROUP_ORDER_UNSPECIFIED',
                'COUNT_DESC',
                'LAST_SEEN_DESC',
                'CREATED_DESC',
                'AFFECTED_USERS_DESC',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'Optional. The maximum number of results to return per response. Default is 20.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A next_page_token provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'serviceFilter.resourceType': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).',
            in: 'query',
            name: 'serviceFilter.resourceType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'serviceFilter.service': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).',
            in: 'query',
            name: 'serviceFilter.service',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'serviceFilter.version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).',
            in: 'query',
            name: 'serviceFilter.version',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'timeRange.period': z
        .enum([
          'PERIOD_UNSPECIFIED',
          'PERIOD_1_HOUR',
          'PERIOD_6_HOURS',
          'PERIOD_1_DAY',
          'PERIOD_1_WEEK',
          'PERIOD_30_DAYS',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restricts the query to the specified time range.',
            in: 'query',
            name: 'timeRange.period',
            schema: {
              enum: [
                'PERIOD_UNSPECIFIED',
                'PERIOD_1_HOUR',
                'PERIOD_6_HOURS',
                'PERIOD_1_DAY',
                'PERIOD_1_WEEK',
                'PERIOD_30_DAYS',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      timedCountDuration: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The preferred duration for a single returned TimedCount. If not set, no timed counts are returned.',
            in: 'query',
            name: 'timedCountDuration',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectNumber}`, where `{projectID}` and `{projectNumber}` can be found in the [Google Cloud console](https://support.google.com/cloud/answer/6158840). Examples: `projects/my-project-123`, `projects/5551234`.',
            in: 'path',
            name: 'projectName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListGroupStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
