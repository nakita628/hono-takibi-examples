import { createRoute, z } from '@hono/zod-openapi'

const AlertSchema = z
  .object({
    uid: z.uuid(),
    dimensions: z.record(z.string(), z.string()),
    startedTimestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        example: '2019-07-29T09:12:33.001Z',
        description: 'Timestamp when the Alert started.',
      }),
    startedValue: z
      .number()
      .openapi({ description: 'Value of the metric that caused the Alert to start.' }),
    lastCheckedTimestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        example: '2019-07-29T09:12:33.001Z',
        description: 'Timestamp when the Alert was last checked.',
      }),
    lastCheckedValue: z
      .number()
      .openapi({ description: 'Value of the metric when the Alert was last checked.' }),
  })
  .openapi({
    title: 'alert',
    required: [
      'uid',
      'dimensions',
      'startedTimestamp',
      'startedValue',
      'lastCheckedTimestamp',
      'lastCheckedValue',
    ],
  })
  .openapi('Alert')

const AlertRuleStatusSchema = z
  .object({
    alertsCount: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of times an Alert for the Alert Rule has been started since creation.',
      }),
    status: z
      .enum(['ok', 'ongoing'])
      .exactOptional()
      .openapi({
        description:
          'Alert Rule status:\n- `ok`: All the Alerts have expired or have never started.\n- `ongoing`: At least one Alert is currently ongoing.\n',
      }),
    lastStartedTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2019-07-29T09:12:33.001Z',
        description: "Timestamp when the Alert Rule transfered from 'ok' to 'ongoing' status.",
      }),
    lastExpiredTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2019-07-29T09:12:33.001Z',
        description: "Timestamp when the Alert Rule transfered from 'ongoing' to 'ok' status.",
      }),
    lastCheckedTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2019-07-29T09:12:33.001Z',
        description: 'Timestamp of the last successful check of the Alert Rule.',
      }),
  })
  .openapi({ title: 'AlertRuleStatus', required: [] })
  .openapi('AlertRuleStatus')

const SelfLinksSchema = z
  .object({
    rel: z
      .string()
      .exactOptional()
      .openapi({
        example: '/api/v1/services/environments/prod',
        description:
          '`rel` contains the complete path fragment of a URI and can be used\nto construct a query to the object.\n',
      }),
  })
  .openapi({
    description:
      'The SelfLinks object contains a link from the resource to itself.\nThis object is used only in responses.\n',
    required: [],
  })
  .openapi('SelfLinks')

const ResourceMetaSchema = z
  .object({
    name: z
      .string()
      .regex(/^[^A-Z\s\x00-\x1f\x60\x7f\;\*\"\[\]\{\}\\\/%\?:=&\~\^|#<>]+$/)
      .min(1)
      .max(1024)
      .refine((val) => !z.enum(['.', '..']).safeParse(val).success)
      .openapi({
        example: 'resource-name',
        description:
          'Resource name is a unique identifier for a resource within the context of a namespace.\nResource names must conform to [RFC 1738 Section 2.2](https://www.ietf.org/rfc/rfc1738.txt) and have a valid syntax for email addresses. The following rules are enforced:\n\n- do not utilize URL encoding;\n- do not include spaces;\n- do not use uppercase characters, for example, \'A-Z\'; extended character sets are supported;\n- do not use the following characters: `"`, `*`, `:`, `;`, `/`, `\\`, `%`, `?`, `hash`, `=`, `&`, `|`, `~`, `^`, `{`, `}`, `[`, `]`, `<`, `>`;\n- cannot start or end with an `@` sign;\n- cannot be only `.` or `..`\n\nFor example: For a collection resource located at\n\n`https://controller.example.com/api/v1/services/apps/shopping_@1`\n\nthe resource name is "shopping_@1".\n',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        example: 'My Display Name',
        description:
          '`displayName` is a user friendly resource name. It can be used to define \na longer, and less constrained, name for a resource.\n\nDisplay names:\n\n- are optional (defaults to an empty string if no value is provided),\n- do not have to be unique, \n- cannot be assigned by the server.\n',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'This is a sample description string. It provides information about the resource.',
        description:
          '`description` is a free-form text property. You can use it to provide information that helps \nto identify the resource.\n\nDescriptions:\n\n- are optional (defaults to an empty string if no value is provided),\n- do not have to be unique, \n- cannot be assigned by the server.\n',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        example: '<collection>-<object>',
        description:
          "Kind is a string representation of an API resource's data type.\nIt is assigned by the server and cannot be changed. \n\nWhen creating a `kind`, the server uses hyphens to connect word segments; \nsingleton and collection item resources are not pluralized.\n",
      }),
    uid: z
      .uuid()
      .exactOptional()
      .openapi({
        example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        description:
          'Unique Identifier (UID)\n\nUID is a unique identifier in time and space for a resource. \nWhen you create a resource, the server assigns a UID to the resource.\n\nRefer to [IETF RFC 4122](https://tools.ietf.org/html/rfc4122) for more information.\n',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: ['production_public', 'dev', 'new_app', 'us-west-1', 'emea'],
        description:
          'You can assign `tags` to a resource as a way to help map, scope, \nand organize resources. \n\nThe system uses tag selectors to specify selection criteria that \nmatch resources that have particular tags.\n',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        example: '/services/environments/prod',
        description: 'The `ref` field contains a reference to another NGINX Controller resource.\n',
      }),
    links: SelfLinksSchema.exactOptional(),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2019-07-29T09:12:33.001Z',
        description:
          'A timestamp that represents the server time when the resource was created.\n\nCreate time is not guaranteed to be set in "happens-before" order\nacross separate operations.\n\nIn JSON format, `create_time` type is encoded as a string in the\n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt).\n\nFor example: 2018-04-01T01:30:15.01Z\n\nCreate Time is assigned by the server and cannot be changed.\n',
      }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2019-07-29T10:12:33.001Z',
        description:
          'A timestamp that represents the server time when the resource was last modified.\n\nResources that have never been updated do not have an `update_time` stamp.\n\nThe default value for resources that have never been updated is the local \nlanguage-specific equivalent of "null".\n\nIn JSON format, `update_time` type is encoded as a string as described in \n[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt).\n',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('ResourceMeta')

const AlertRuleSchema = z
  .object({
    metadata: ResourceMetaSchema,
    userEmail: z
      .email()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Email of the user who created the Alert Rule.' }),
    metric: z
      .string()
      .openapi({
        description: 'A valid metric from the catalog.',
        example: 'upstream.network.latency.max',
      }),
    aggregation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Aggregation of the metric over the configured period of time.',
        readOnly: true,
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The use of filter parameter limits the metrics data samples being taken into account for Alert Rule calculation\nto those matching the filter expression.\nFilter parameter syntax works the same as for `/analytics/metrics` API.\n\n- An empty filter parameter indicates that all collected data is going to be taken into account for Alert Rule calculation\n- `filter=app='myapp' AND (env='prod' or env='dev')` indicates that only samples related to desired app/env will be taken into account\n",
        example:
          "((app!='app1' OR app='app2') AND environment in ('dev', 'prod')) AND (tags!='*tag1*' AND interface='ens*')",
      }),
    groupBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When `groupBy` is provided, alerts will be triggered for each distinct group of provided dimension(s).\nGroupBy parameter syntax works the same as for `/analytics/metrics` API.\n',
        example: 'app,environment',
      }),
    threshold: z
      .number()
      .openapi({ description: 'Threshold to which the metric value will be compared to.' }),
    operator: z
      .enum(['ge', 'le'])
      .openapi({
        description:
          'Operator that defines which metric values will trigger an alert:\n\n- `ge`: metric value must be greater than or equal to the threshold in order to trigger an alert\n- `le`: metric value must be less than or equal to the threshold in order to trigger an alert\n',
      }),
    period: z
      .string()
      .openapi({
        example: '1h',
        description:
          'Period from which the metric aggregated value is calculated.\n\nMust be a valid duration - a string starting with a number followed by a unit of time (`h`, `m` or `s`).\n\n24h is the maximum allowed period.\n',
      }),
    notificationType: z
      .literal('email')
      .exactOptional()
      .openapi({
        description:
          'Defines how notifications about triggered Alerts will be delivered to the user.',
      }),
    emailAddresses: z
      .array(z.email().openapi({ example: 'user@example.com' }))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    mute: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates if the Alert Rule is muted. (Muted Alert Rules will not trigger notifications).',
      }),
    status: AlertRuleStatusSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({
    title: 'AlertRule',
    required: ['metadata', 'metric', 'threshold', 'operator', 'period'],
  })
  .openapi('AlertRule')

const ErrorDetailSchema = z
  .object({
    description: z
      .string()
      .openapi({
        example:
          'Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue.',
        description:
          'A detailed error message returned by the server. \n\nThese messages contain the following information, where applicable:\n\n- What happened.\n- Why it happened.\n- What the consequences are (if any).\n- Recommended action to take to resolve the issue.\n',
      }),
  })
  .openapi({ required: ['description'] })
  .openapi('ErrorDetail')

const ErrorModelSchema = z
  .object({
    message: z
      .string()
      .openapi({
        example: 'Error doing <action>.',
        description: 'A human-readable message, in English, that describes the error.\n',
      }),
    code: z
      .int()
      .openapi({
        example: 1234567,
        description:
          'A numeric error code that can be used to identify errors for support purposes.\n',
      }),
    details: z.array(ErrorDetailSchema).exactOptional(),
  })
  .openapi({ required: ['message', 'code'] })
  .openapi('ErrorModel')

const TimeSchema = z
  .string()
  .openapi({
    description:
      'Indicates a point in time.\n\nYou can provide time using ISO 8601 format or as an offset. An offset is a string that starts with `+` or `-`, followed by a number and a unit of time (`y`, `M`, `w`, `d`, `h`, `m` or `s`).\nExamples: "2019-08-07T09:57:36.088757764Z", "now-3h"\n',
    example: '2019-08-07T09:57:36.088757764Z',
  })
  .openapi('Time')

const MetricQueryMetadataSchema = z
  .object({
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-08-07T09:57:36.088757764Z' }),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-08-07T09:57:36.088757764Z' }),
    resolution: z.string().exactOptional().openapi({ example: '30m' }),
  })
  .openapi({ required: [] })
  .openapi('MetricQueryMetadata')

const SeriesSchema = z
  .object({
    dimensions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ example: { app: 'app1', env: 'prod' } }),
    timestamps: z
      .array(z.iso.datetime({ offset: true }))
      .exactOptional()
      .openapi({ example: ['2019-08-07T09:57:30', '2019-08-07T09:57:35'] }),
    values: z
      .array(z.number())
      .exactOptional()
      .openapi({ example: [4.2, 4.4] }),
  })
  .openapi({ required: [] })
  .openapi('Series')

const MetricSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'plus.upstream.response.count' }),
    aggr: z
      .enum(['AVG', 'COUNT', 'SUM', 'MAX', 'MIN', 'RATE'])
      .exactOptional()
      .openapi({ example: 'AVG' }),
    series: z.array(SeriesSchema).exactOptional(),
  })
  .openapi({
    description:
      'Metrics provide a means of measuring and analyzing the performance of your systems and of NGINX Controller.',
    required: [],
  })
  .openapi('Metric')

const MetricResponseMetadataSchema = z
  .object({ warning: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('MetricResponseMetadata')

const MetricQueryResultSchema = z
  .object({
    queryMetadata: MetricQueryMetadataSchema.exactOptional(),
    metrics: z.array(MetricSchema).exactOptional(),
    responseMetadata: MetricResponseMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetricQueryResult')

const NamedLinksSchema = SelfLinksSchema.and(
  z
    .object({
      name: z
        .string()
        .exactOptional()
        .openapi({ example: 'production', description: 'The name of the linked resource.\n' }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({
          example: 'Production Environment',
          description: 'A user friendly resource name.',
        }),
    })
    .openapi({
      description:
        'Contains information about the object being referred to.\n\nThese are generally details -- like the object name and display name --\nthat are useful to a consumer of the API that performs further\nprocessing. \n\nThis object is only present in responses.\n  \n',
      required: [],
    }),
).openapi('NamedLinks')

const ResourceRefSchema = z
  .object({
    ref: z
      .string()
      .openapi({
        example: '/services/environments/prod',
        description: 'A reference to another NGINX Controller resource.\n',
      }),
    links: NamedLinksSchema.exactOptional(),
  })
  .openapi({ required: ['ref'] })
  .openapi('ResourceRef')

const MetricDescriptionSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'nginx.http.request.bytes_sent' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Number of bytes sent to clients.' }),
    unit: z.string().exactOptional().openapi({ example: 'bytes' }),
    aggregations: z
      .array(z.enum(['AVG', 'COUNT', 'SUM', 'MAX', 'MIN']))
      .exactOptional()
      .openapi({ example: ['AVG', 'SUM'] }),
    type: z
      .enum(['counter', 'gauge', 'incremental'])
      .exactOptional()
      .openapi({ example: 'incremental' }),
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: ['nginx', 'apimgmt_environment', 'apimgmt_definition', 'apimgmt_entry_point'],
        description:
          'An array of freeform strings containing the category(ies) of a Metrics Catalog resource.',
      }),
    dimensions: z
      .array(ResourceRefSchema)
      .exactOptional()
      .openapi({
        description: 'An array of the Dimensions that apply to a Metrics Catalog resource.',
      }),
  })
  .openapi({ description: 'The information record for a Metrics Catalog resource.', required: [] })
  .openapi('MetricDescription')

const MetricDescriptionRecordSchema = z
  .object({ metadata: ResourceMetaSchema, currentStatus: MetricDescriptionSchema })
  .openapi({ required: ['metadata', 'currentStatus'] })
  .openapi('MetricDescriptionRecord')

const ListMetricsDescriptionsResponseSchema = z
  .object({ items: z.array(MetricDescriptionRecordSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ListMetricsDescriptionsResponse')

const MetricDescriptionResponseSchema = MetricDescriptionRecordSchema.openapi(
  'MetricDescriptionResponse',
)

const DimensionDescriptionSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'instance' }),
    description: z.string().exactOptional().openapi({ example: 'Instance name.' }),
    type: z.enum(['string', 'int', 'list']).exactOptional().openapi({ example: 'string' }),
    metrics: z
      .array(ResourceRefSchema)
      .exactOptional()
      .openapi({ description: 'An array of the Metrics that the Dimensions resource applies to.' }),
  })
  .openapi({
    description: 'The information record for a Dimensions Catalog resource.',
    required: [],
  })
  .openapi('DimensionDescription')

const DimensionDescriptionRecordSchema = z
  .object({ metadata: ResourceMetaSchema, currentStatus: DimensionDescriptionSchema })
  .openapi({ required: ['metadata', 'currentStatus'] })
  .openapi('DimensionDescriptionRecord')

const ListDimensionsDescriptionsResponseSchema = z
  .object({ items: z.array(DimensionDescriptionRecordSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ListDimensionsDescriptionsResponse')

const GetDimensionDescriptionResponseSchema = DimensionDescriptionRecordSchema.openapi(
  'GetDimensionDescriptionResponse',
)

const PaginationLinksSchema = z
  .object({ next: SelfLinksSchema.exactOptional(), prev: SelfLinksSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PaginationLinks')

const MetadataPaginationSchema = z
  .object({
    pageToken: z.string().openapi({ example: '1594048781' }),
    links: PaginationLinksSchema.exactOptional(),
    total: z.int().exactOptional().openapi({ example: 3600 }),
  })
  .openapi({ required: ['pageToken'] })
  .openapi('MetadataPagination')

const MetadataSchema = z
  .object({ pagination: MetadataPaginationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Metadata')

const EventSchema = z
  .object({
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-08-07T09:57:36.088757764Z' }),
    id: z.uuid().exactOptional().openapi({ example: '00112233-4455-6677-8899-aabbccddeeff' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ example: 'nginx stub_status detected, https://127.0.0.1:443/basic_status' }),
    count: z.int().exactOptional().openapi({ example: 99 }),
    category: z.string().exactOptional(),
    level: z
      .enum(['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'])
      .exactOptional()
      .openapi({ example: 'INFO' }),
    hostname: z.string().exactOptional().openapi({ example: 'd0784771a503' }),
    alias: z.string().exactOptional().openapi({ example: 'my_system' }),
    status: z.string().exactOptional().openapi({ example: 'success' }),
    error: z.string().exactOptional(),
    local_id: z
      .string()
      .exactOptional()
      .openapi({ example: 'd23c85484ee760ee5f4619c0434e1968b5290964487541da0889964eb783613c' }),
    root_uuid: z.string().exactOptional().openapi({ example: '759e842f6b9f51a7803f57da1e9f5ae8' }),
    tags: z.array(z.string()).exactOptional().openapi({ example: '["tag1", "tag2"]' }),
    instance: z.string().exactOptional().openapi({ example: '2' }),
    location: z.string().exactOptional().openapi({ example: 'unspecified' }),
    correlationId: z
      .string()
      .exactOptional()
      .openapi({ example: 'e5f355e4de82edd0afcd74ef6c1ee6aa' }),
    'http.request_endpoint': z
      .string()
      .exactOptional()
      .openapi({ example: '/services/environments/dev/apps/app/components/25' }),
    'http.request_method': z.string().exactOptional().openapi({ example: 'POST' }),
    user: z.string().exactOptional().openapi({ example: 'admin@nginx.test' }),
    environment: z.string().exactOptional().openapi({ example: 'dev-environment' }),
    app: z.string().exactOptional().openapi({ example: 'finance-app' }),
    component: z.string().exactOptional().openapi({ example: 'secure-component' }),
    gateway: z.string().exactOptional().openapi({ example: 'dev-gateway' }),
    request_outcome: z
      .enum(['REJECTED', 'PASSED'])
      .exactOptional()
      .openapi({ example: 'REJECTED' }),
    request_outcome_reason: z
      .enum([
        'SECURITY_WAF_OK',
        'SECURITY_WAF_VIOLATION',
        'SECURITY_WAF_FLAGGED',
        'SECURITY_WAF_BYPASS',
        'SECURITY_NGINX_VIOLATION',
        'SECURITY_WAF_VIOLATION_TRANSPARENT',
      ])
      .exactOptional()
      .openapi({ example: 'SECURITY_WAF_FLAGGED' }),
    'http.response_code': z.int().exactOptional().openapi({ example: 200 }),
    'http.hostname': z.string().exactOptional().openapi({ example: 'itay-108-117.f5net.com' }),
    'http.remote_addr': z.string().exactOptional().openapi({ example: '127.0.0.1' }),
    'http.remote_port': z.int().exactOptional().openapi({ example: 4000 }),
    'http.server_addr': z.string().exactOptional().openapi({ example: '0.0.0.0' }),
    'http.server_port': z.int().exactOptional().openapi({ example: 80 }),
    'http.request': z
      .string()
      .exactOptional()
      .openapi({
        example:
          'GET /test.exe HTTP/1.1\\r\\nUser-Agent: curl/7.29.0\\r\\nHost: localhost\\r\\nAccept: */*\\r\\n',
      }),
    'waf.support_id': z.string().exactOptional().openapi({ example: '161339000577578694' }),
    'waf.signature_ids': z.string().exactOptional().openapi({ example: '200001475,200000098' }),
    'waf.policy': z.string().exactOptional().openapi({ example: '/Common/policy1' }),
    'waf.attack_types': z
      .string()
      .exactOptional()
      .openapi({ example: 'Non-browser Client,Abuse of Functionality,Cross Site Scripting (XSS)' }),
    'waf.violation_rating': z
      .enum(['RISK_COULD_NOT_BE_DETERMINED', 'POSSIBLE_ATTACK', 'MOST_LIKELY_ATTACK'])
      .exactOptional()
      .openapi({ example: 'MOST_LIKELY_ATTACK' }),
    'waf.signature_names': z
      .string()
      .exactOptional()
      .openapi({ example: 'XSS script tag end (Parameter) (2),XSS script tag (Parameter)' }),
    'waf.is_truncated': z.string().exactOptional().openapi({ example: 'true' }),
    'waf.signature_cves': z
      .string()
      .exactOptional()
      .openapi({ example: 'CVE-2017-8759,CVE-2015-1641' }),
    'waf.sub_violations': z
      .string()
      .exactOptional()
      .openapi({ example: 'HTTP protocol compliance failed:Host header contains IP address' }),
    'waf.violations': z
      .string()
      .exactOptional()
      .openapi({
        example:
          'HTTP protocol compliance failed,Illegal meta character in value,Attack signature detected',
      }),
    'waf.x_forwarded_for_header_value': z
      .string()
      .exactOptional()
      .openapi({ example: '87.233.120.158' }),
    'waf.bot_anomalies': z
      .string()
      .exactOptional()
      .openapi({ example: 'Search Engine Verification Failed' }),
    'waf.bot_category': z.string().exactOptional().openapi({ example: 'Search Engine' }),
    'waf.bot_client_class': z.string().exactOptional().openapi({ example: 'Malicious Bot' }),
    'waf.bot_signature_name': z.string().exactOptional().openapi({ example: 'Google' }),
    'waf.enforced_bot_anomalies': z
      .string()
      .exactOptional()
      .openapi({ example: 'Search Engine Verification Failed' }),
    action_type: z.string().exactOptional().openapi({ example: 'login' }),
    action_outcome: z.string().exactOptional().openapi({ example: 'success' }),
    'auth_provider.name': z.string().exactOptional().openapi({ example: 'local' }),
    'auth_provider.type': z.string().exactOptional().openapi({ example: 'BASIC' }),
    resource_name: z.string().exactOptional().openapi({ example: 'datadog-forwarder' }),
    big_ip_address: z.string().exactOptional().openapi({ example: 'https://87.233.120.158' }),
    workload_health_state: z.string().exactOptional().openapi({ example: 'unhealthy' }),
  })
  .openapi({ description: 'An Event is a system message.', required: [] })
  .openapi('Event')

const EventQueryResultSchema = z
  .object({ Metadata: MetadataSchema.exactOptional(), items: z.array(EventSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('EventQueryResult')

const ForwarderStreamSchema = z
  .object({
    outputFormat: z
      .enum(['SPLUNK', 'DATADOG', 'SYSLOG', 'OTLP'])
      .openapi({
        description: 'The format in which you want to send data to the Collector.\n',
        example: 'SPLUNK',
      }),
    inputDataType: z
      .enum(['METRICS', 'EVENTS'])
      .openapi({
        description: 'The type of data that the stream is processing.',
        example: 'METRICS',
      }),
    selector: z
      .string()
      .openapi({
        description:
          "The selector object limits the amount of data sent from NGINX Controller to the desired Collector.\nThe format of this parameter depends on the `inputDataType` value (either `METRICS` or `EVENTS`).\nAn empty selector indicates that all collected data is going to be forwarded to the Collector.\nEnsure sending all your data out of NGINX Controller does not cause additional charges.\n\n\nSelector elements and rules for `inputDataType`=`METRICS`:\nAllowed parameters: `excluded_names`, `names`, `filter`. The `filter` parameter and its behavior is not specific to `METRICS` `inputDataType`.\n\n`excluded_names` parameter consists of zero or more metric names that should not be forwarded\n`names` parameter consists of zero or more metric names that should be forwarded\nThe specific rules for these parameters are as follows:\n- if no value is provided or the only value is a wildcard (`*`), then all metric names will be forwarded.\n- if an explicit list of metric names is provided, all of these metrics will be forwarded.\n- any metric name can contain wildcard (`*`) character(s), in which case it will be resolved to all valid metrics that match the pattern.\n- `excluded_names` can be composed of metrics names and a wildcard (`*`) which should not be forwarded\n- any metric resolved from a `names` wildcard can be removed by an explicit or wildcard metric from `excluded_names`\n- any metric provided explicitly (full name without a wildcard) in the `names` parameter cannot be excluded by\n  a wildcard or an explicit metric from the `excluded_names` parameter. That is, `names=system.cpu.idle&excluded_names=system.*`\n  results in an error\n- `excluded_names` parameter is always applied after the resolution of the metrics from `names` parameter\n\nMake sure that all metrics provided in the `names` and `excluded_names` parameters resolve to an existing catalog metric or metrics.\n\nSample use:\n- `names=http.request.count, http.request.bytes_sent` indicates that only samples of those two metrics will be forwarded\n- `filter=app='myapp' & (env='prod' or env='dev')` indicates that only samples related to desired app/env will be forwarded,\nalso objects that does not contain filtered dimensions won't be sent\n- `names=http.request.count, http.request.bytes_sent&filter=app='myapp' AND (env='prod' or env='dev')` combines both above\n- `excluded_names=nginx.http.request.*` all metrics except matching `http.request.*` will be forwarded\n- `excluded_names=nginx.http.request.time.*&names=nginx.http.request.*` `excluded_names` can be combined\n  with the `names` parameter to exclude metrics that were selected with a wildcard in the `names` parameters\n\n\nFiltering rules for `inputDataType`=`EVENTS`:\nAllowed parameters: `filter`. The `filter` parameter and its behavior is not specific to `EVENTS` `inputDataType`.\n\n\nFilter parameter:\nFilter parameter is shared between all supported data types and has the same behavior when used with any of them.\nIt consists of one or more predicates in the form  `<dimension><operator><dimension value>` where:\n- `<dimension>` is the name of the dimension,\n- `<operator>` is one of the supported operators (`=`, `!=`, `<`, `<=`, `>=` `>`, `in` or `not`),\n- `<dimension value>` is value of the dimension(s) that you want to filter on,\n- `<dimension> and <dimension value>` is case sensitive.\n\nFor example: 'count > 100'.\nPredicates can be combined into logical expressions using `OR`, `AND`, and `(` `)`.\nWrapping predicates in single quotes is recommended to ensure that the full query string is processed correctly.\n\nFor matching values, wildcard (`*`) use is supported.\n\nMake sure that all dimensions provided in the `filter` parameters resolve to an existing catalog dimension.\n\nAny expression with dimension not present in filtered metric/event will evaluate to `false`. This enables user\nto create filter which will forward metric/event with dimension not valid for particular metric/event but as whole filter expression\nwill evaluate to true and only parts will evaluate to false. Example:\n- `filter=file_path='/etc/hosts' OR instance='instance_name'` will forward `http.request.body_bytes_sent` as `file_path` dimension is invalid but whole expression will evaluate to true\n- `filter=file_path='/etc/hosts' AND instance='instance_name'` will not forward `http.request.body_bytes_sent` as `file_path` dimension is invalid and whole expression will always evaluate to false, but will forward `sytem.disk.used` which has both dimensions\n",
        example:
          "names=http.request.count,http.request.*,*latency*&filter=((app!='app1' OR app='app2') AND environment in ('aa', 'bb')) AND (tags!='*tag1*' AND interface='ens*')",
      }),
  })
  .openapi({
    required: ['outputFormat', 'inputDataType', 'selector'],
    description:
      'There is no global limitation on number of streams.\n\nWhen creating a Stream, be sure that the metrics you select are not already included in an existing Stream.\nWhen you add the same metrics to multiple Streams -- which is known as "overlapping Streams" -- you may see significant performance degradation and data duplication. The duplicated data may not be interpreted correctly by the Collector.\n',
  })
  .openapi('ForwarderStream')

const DesiredStateSchema = z
  .object({
    integrationRef: ResourceRefSchema,
    collectorType: z
      .enum(['DATADOG', 'SPLUNK', 'SYSLOG'])
      .openapi({
        description:
          'The type of Collector receiving forwarded data. The parameter sets the communication protocol\nand how the Forwarder monitors the liveness of the Collector.\n',
      }),
    streams: z.array(ForwarderStreamSchema),
  })
  .openapi({ required: ['integrationRef', 'streams', 'collectorType'] })
  .openapi('DesiredState')

const ConfigStateTallySchema = z
  .object({
    isConfigured: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The configuration operation is complete.' }),
    isConfiguring: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The configuration of the resource, or of its child(ren), is in process.',
      }),
    isError: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'An error occurred while configuring the resource or its child(ren).',
      }),
    isDeleting: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A delete operation is in progress for the resource or its child(ren).',
      }),
    total: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The total number of resources to which the configuration operation applies.',
      }),
    configured: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of resources that have a complete and valid configuration.',
      }),
    configuring: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of resources that are in the process of being configured.',
      }),
    error: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of resources that have encountered an error during the configuration process.',
      }),
    deleting: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of resources that are in the process of being deleted.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ConfigStateTally')

const ConfigConditionSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'The condition type.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human-readable message that provides additional information about the configuration operation.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ConfigCondition')

const ConfigStateSchema = z
  .object({
    selfConfigState: ConfigStateTallySchema.exactOptional(),
    childrenConfigState: ConfigStateTallySchema.exactOptional(),
    conditions: z.array(ConfigConditionSchema).exactOptional(),
  })
  .openapi({
    description:
      "A representation of the resource's current configuration state \nthat comprises the status of the resource itself (`selfConfigState`) and any child \nresources (`childrenConfigState`).\n\nThe conditions array provides additional information during configuration changes.\n",
    required: [],
  })
  .openapi('ConfigState')

const CurrentStatusSchema = z
  .object({
    state: ConfigStateSchema,
    integrationRef: ResourceRefSchema,
    collectorType: z
      .enum(['DATADOG', 'SPLUNK', 'SYSLOG', 'OTLP_HTTP', 'OTLP_GRPC'])
      .openapi({
        description:
          'The type of Collector receiving forwarded data. The parameter sets the communication protocol\nand how the Forwarder monitors the liveness of the Collector.\n',
      }),
    streams: z.array(ForwarderStreamSchema),
  })
  .openapi({ required: ['integrationRef', 'streams', 'state', 'collectorType'] })
  .openapi('CurrentStatus')

const ForwarderSchema = z
  .object({
    metadata: ResourceMetaSchema,
    desiredState: DesiredStateSchema,
    currentStatus: CurrentStatusSchema.exactOptional(),
  })
  .openapi({
    required: ['metadata', 'desiredState'],
    example: {
      metadata: {
        name: 'splunk',
        displayName: 'Splunk - Metrics',
        description: 'Metrics forwarder going to Splunk HEC',
        kind: 'forwarder',
        uid: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        links: { rel: '/api/v1/analytics/forwarders/splunk' },
        createTime: '2019-07-29T09:12:33.001Z',
        updateTime: '2019-07-29T10:12:33.001Z',
      },
      desiredState: {
        collectorType: 'SPLUNK',
        integrationRef: { ref: '/platform/integrations/new_splunk_hec' },
        streams: [
          {
            inputDataType: 'METRICS',
            outputFormat: 'SPLUNK',
            selector: "names=http.request.bytes_rcvd&filter=app='myapp'",
          },
          {
            inputDataType: 'METRICS',
            outputFormat: 'SPLUNK',
            selector: "names=http.request.count&filter=app='myapp'",
          },
        ],
      },
      currentStatus: {
        state: {
          selfConfigState: {
            isConfigured: false,
            isConfiguring: true,
            isError: false,
            isDeleting: false,
            total: 1,
            configured: 0,
            configuring: 1,
            error: 0,
            deleting: 0,
          },
        },
        collectorType: 'SPLUNK',
        integrationRef: { ref: '/platform/integrations/splunk_hec' },
        streams: [
          {
            inputDataType: 'METRICS',
            outputFormat: 'SPLUNK',
            selector: "names=http.request.bytes_rcvd&filter=app='myapp'",
          },
          {
            inputDataType: 'METRICS',
            outputFormat: 'SPLUNK',
            selector: "names=http.request.count&filter=app='myapp'",
          },
        ],
      },
    },
  })
  .openapi('Forwarder')

const ForwarderListResponseSchema = z
  .object({
    items: z
      .array(ForwarderSchema)
      .exactOptional()
      .openapi({ description: 'List of Forwarder resources.' }),
  })
  .openapi({ example: {}, required: [] })
  .openapi('ForwarderListResponse')

const BadRequestResponse = {
  description:
    'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.\n',
  content: { 'application/json': { schema: ErrorModelSchema } },
}

const UnauthorizedResponse = {
  description: 'User authentication is invalid or missing.\n',
  content: { 'application/json': { schema: ErrorModelSchema } },
}

const ForbiddenResponse = {
  description: 'The request failed due to insufficient privileges.\n',
  content: { 'application/json': { schema: ErrorModelSchema } },
}

const InternalResponse = {
  description: 'The request cannot be processed because of an internal server error.\n',
  content: { 'application/json': { schema: ErrorModelSchema } },
}

const NotFoundResponse = {
  description: 'The requested resource was not found or is unavailable.\n',
  content: { 'application/json': { schema: ErrorModelSchema } },
}

const ConflictResponse = {
  description: 'The request failed due to a conflict with an existing resource.\n',
  content: { 'application/json': { schema: ErrorModelSchema } },
}

const ForwarderNameParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'forwarderName',
      schema: { type: 'string' },
      required: true,
      description: 'The name of the Forwarder resource.\n',
    },
  })

const CookieAuthSecurityScheme = { type: 'apiKey', in: 'cookie', name: 'session' }

export const getAnalyticsAlertsRulesRoute = createRoute({
  method: 'get',
  path: '/analytics/alerts/rules',
  tags: ['Alerts'],
  summary: 'List all Alert Rules',
  description: 'Returns a list of all the Alert Rule resources.',
  operationId: 'listAlertRules',
  responses: {
    200: {
      description: 'Successfully retrieved a list of all the Alert Rule resources.',
      content: { 'application/json': { schema: z.array(AlertRuleSchema) } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    500: {
      description: 'The request cannot be processed because of an internal server error.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const postAnalyticsAlertsRulesRoute = createRoute({
  method: 'post',
  path: '/analytics/alerts/rules',
  tags: ['Alerts'],
  summary: 'Create an Alert Rule',
  description: 'Creates a new Alert Rule resource.',
  operationId: 'createAlertRule',
  request: {
    body: {
      description: 'Defines the Alert Rule resource to create.',
      content: { 'application/json': { schema: AlertRuleSchema } },
    },
  },
  responses: {
    201: {
      description: 'Successfully created the specified Alert Rule resource.',
      content: { 'application/json': { schema: AlertRuleSchema } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    409: {
      description: 'The request failed due to a naming conflict with an existing resource.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    500: {
      description: 'The request cannot be processed because of an internal server error.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getAnalyticsAlertsRulesAlertRuleNameRoute = createRoute({
  method: 'get',
  path: '/analytics/alerts/rules/{alertRuleName}',
  tags: ['Alerts'],
  summary: 'Get an Alert Rule',
  description: 'Returns information for the specified Alert Rule.',
  operationId: 'getAlertRule',
  request: {
    params: z.object({
      alertRuleName: z
        .string()
        .openapi({
          param: {
            name: 'alertRuleName',
            description: 'Identifies the Alert Rule resource.',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the requested Alert Rule resource.',
      content: { 'application/json': { schema: AlertRuleSchema } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    404: {
      description:
        'The resource defined in the URI could not be found. Check the URI for errors and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    500: {
      description: 'The request cannot be processed because of an internal server error.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const putAnalyticsAlertsRulesAlertRuleNameRoute = createRoute({
  method: 'put',
  path: '/analytics/alerts/rules/{alertRuleName}',
  tags: ['Alerts'],
  summary: 'Upsert an Alert Rule',
  description: 'Creates a new Alert Rule or updates an existing Alert Rule resource.',
  operationId: 'updateAlertRule',
  request: {
    params: z.object({
      alertRuleName: z
        .string()
        .openapi({
          param: {
            name: 'alertRuleName',
            description: 'Identifies the Alert Rule resource.',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Defines the Alert Rule resource to create or the updates to make.',
      content: { 'application/json': { schema: AlertRuleSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the specified Alert Rule resource.',
      content: { 'application/json': { schema: AlertRuleSchema } },
    },
    201: {
      description: 'Successfully created the specified Alert Rule resource.',
      content: { 'application/json': { schema: AlertRuleSchema } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    500: {
      description: 'The request cannot be processed because of an internal server error.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const deleteAnalyticsAlertsRulesAlertRuleNameRoute = createRoute({
  method: 'delete',
  path: '/analytics/alerts/rules/{alertRuleName}',
  tags: ['Alerts'],
  summary: 'Delete an Alert Rule',
  description: 'Deletes the specified Alert Rule resource.',
  operationId: 'deleteAlertRule',
  request: {
    params: z.object({
      alertRuleName: z
        .string()
        .openapi({
          param: {
            name: 'alertRuleName',
            description: 'Identifies the Alert Rule resource.',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully deleted the specified Alert Rule resource.' },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    404: {
      description:
        'The resource defined in the URI could not be found. Check the URI for errors and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    500: {
      description: 'The request cannot be processed because of an internal server error.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getAnalyticsAlertsRulesAlertRuleNameAlertsRoute = createRoute({
  method: 'get',
  path: '/analytics/alerts/rules/{alertRuleName}/alerts',
  tags: ['Alerts'],
  summary: 'Get ongoing Alerts',
  description: 'Returns information about Alerts for the specified Alert Rule.',
  operationId: 'getAlerts',
  request: {
    params: z.object({
      alertRuleName: z
        .string()
        .openapi({
          param: {
            name: 'alertRuleName',
            description: 'Identifies the Alert Rule resource.',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the requested Alerts.',
      content: { 'application/json': { schema: z.array(AlertSchema) } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    404: {
      description:
        'The resource defined in the URI could not be found. Check the URI for errors and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    500: {
      description: 'The request cannot be processed because of an internal server error.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdRoute = createRoute({
  method: 'get',
  path: '/analytics/alerts/rules/{alertRuleName}/alerts/{alertId}',
  tags: ['Alerts'],
  summary: 'Get Alert',
  description: 'Returns information about the requested Alert for the specified Alert Rule.',
  operationId: 'getAlert',
  request: {
    params: z.object({
      alertRuleName: z
        .string()
        .openapi({
          param: {
            name: 'alertRuleName',
            description: 'Identifies the Alert Rule resource.',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alertId: z
        .uuid()
        .openapi({
          param: {
            name: 'alertId',
            description: 'Identifies the Alert resource.',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the requested Alert.',
      content: { 'application/json': { schema: AlertSchema } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    404: {
      description:
        'The resource defined in the URI could not be found. Check the URI for errors and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    500: {
      description: 'The request cannot be processed because of an internal server error.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getAnalyticsCatalogsMetricsRoute = createRoute({
  method: 'get',
  path: '/analytics/catalogs/metrics',
  tags: ['Catalogs'],
  summary: 'List the Metrics Catalog',
  description:
    'Lists all of the Metric resources in the Catalog.\n\nThe Metrics Catalog contains the definitions for all of the available NGINX and NGINX Controller Agent metrics.\nYou can use the Catalogs API to find information about the available Metrics, then use those Metrics to refine your Analytics data queries.\n',
  operationId: 'listMetricsDescriptions',
  responses: {
    200: {
      description: 'Successfully returned the Metrics Catalog list.',
      content: { 'application/json': { schema: ListMetricsDescriptionsResponseSchema } },
    },
  },
})

export const getAnalyticsCatalogsMetricsMetricNameRoute = createRoute({
  method: 'get',
  path: '/analytics/catalogs/metrics/{metricName}',
  tags: ['Catalogs'],
  summary: 'Get a Metric Description',
  description: 'Gets the description of the specified Metric.\n',
  operationId: 'getMetricDescription',
  request: {
    params: z.object({
      metricName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'metricName',
            description: 'Name of the Metric resource.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the requested Metric resource.',
      content: { 'application/json': { schema: MetricDescriptionRecordSchema } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    404: {
      description: 'The specified Metric resource was not found.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getAnalyticsCatalogsDimensionsRoute = createRoute({
  method: 'get',
  path: '/analytics/catalogs/dimensions',
  tags: ['Catalogs'],
  summary: 'List the Dimensions Catalog',
  description:
    'Lists all of the Dimension resources in the Catalog.\n\nDimensions provide a means of refining the data returned by metrics and events queries.\nYou can use the List Dimensions Catalog endpoint to find out what Dimensions are available.\nThen, use the Get a Dimension endpoint to find out more about a specific dimension.\n',
  operationId: 'listDimensionsDescriptions',
  responses: {
    200: {
      description: 'Successfully returned the requested Dimension resource.',
      content: { 'application/json': { schema: ListDimensionsDescriptionsResponseSchema } },
    },
  },
})

export const getAnalyticsCatalogsDimensionsDimensionNameRoute = createRoute({
  method: 'get',
  path: '/analytics/catalogs/dimensions/{dimensionName}',
  tags: ['Catalogs'],
  summary: 'Get a Dimension Description',
  description: 'Gets the description of the specified Dimension resource.\n',
  operationId: 'getDimensionDescription',
  request: {
    params: z.object({
      dimensionName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'dimensionName',
            description: 'Name of the Dimension',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the requested Dimension resource.',
      content: { 'application/json': { schema: DimensionDescriptionRecordSchema } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
    404: {
      description: 'The specified Dimension resource was not found.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getAnalyticsEventsRoute = createRoute({
  method: 'get',
  path: '/analytics/events',
  tags: ['Events'],
  summary: 'Get Events',
  description: 'Returns a list of system Events.',
  operationId: 'queryEvents',
  request: {
    query: z.object({
      startTime: TimeSchema.openapi({
        param: {
          name: 'startTime',
          in: 'query',
          description:
            "Indicates the start of the time window to include Events from (inclusive).\n\n- Must be provided if `endTime` was specified.\n- If you do not set 'startTime`, the most recent 100 Events will be returned.\n- `startTime` and `endTime` can be formatted as Event IDs (UUID format). If you use this format for any boundary, the validity of that boundary (for example, if endTime is greater than startTime) will not be checked.\n",
          schema: { $ref: '#/components/schemas/Time' },
          required: false,
        },
      }).exactOptional(),
      endTime: TimeSchema.openapi({
        param: {
          name: 'endTime',
          in: 'query',
          description:
            'Indicates the end of the time window to include Events from (non-inclusive).\n\n- Must be greater than `startTime`.\n- Must be provided if `startTime` was specified.\n',
          schema: { $ref: '#/components/schemas/Time' },
          required: false,
        },
      }).exactOptional(),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              "Filters results based on dimension values.\n\nConsists of one or more predicates in the form  `<dimension><operator><dimension value>` where:\n- `<dimension>` is the name of the dimension,\n- `<operator>` is one of the supported operators (`=`, `!=`, `<`, `<=`, `>=` `>`, `in` or `not`)\n- `<dimension value>` is the value of the dimension(s) that you want to filter on,\n- `<dimension> and <dimension value>` are case sensitive.\n\nFor example: 'count > 100'\n\nPredicates can be combined into logical expressions using `OR`, `AND`, and `(` `)`.\nFor matching values, wildcard (`*`) use is supported.\n\nWrapping predicates in single quotes is recommended to ensure that the full query string is processed correctly.\n",
            schema: {
              type: 'string',
              example: "category IN ('agent','controller') AND level='debug' AND count > 100",
            },
            allowReserved: true,
            required: false,
          },
          example: "category IN ('agent','controller') AND level='debug' AND count > 100",
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            description:
              'Indicates how the results will be ordered.\n\nConsists of at most three comma-separated clauses in the form `<dimension><single space><sort order>` or `<dimension>` where:\n- `<dimension>` is the name of the dimension.\n- `<sort order>` is the order by which the specified dimension will be sorted. Valid sort order is either "ASC" for ascending order, or "DESC" for descending order. If no sort order is provided, the default one ("ASC") will be used.\n\nNote that if no orderBy is provided, the default combination of descending "timestamp" and ascending "id" will be used regardless. If you provide different order for "timestamp" or "id" in orderBy, the default one will be overwritten.\n',
            schema: { type: 'string', example: 'name ASC,timestamp DESC' },
            required: false,
          },
          example: 'name ASC,timestamp DESC',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'page number',
            required: false,
            schema: { type: 'integer', default: 1, example: 1 },
          },
          example: 1,
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Transactional token used for pagination.\n\nThe token ensures consistency of the query results across requests for various pages of data. It provides a snapshot of the database contents from the time at which the query was received.\n\nIf `pageToken` is not provided with a page request, a token is automatically generated and will be returned in the response metadata. You should include the token in subsequent requests for pages in the query results.\n\nSending a query without a `pageToken` refreshes the query results.\n',
            schema: { type: 'string', example: '1573653786' },
            required: false,
          },
          example: '1573653786',
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Defines the number of returned items per page.\n\n- The maximum value is 100. If value is greater, it is automatically set down to 100.\n- If `pageSize`=0, pagination is disabled and all Events will be returned in response.\n- The response size is limited to 10,000 results. If the number of results exceeds 10,000 a warning is returned.\n',
            schema: { type: 'integer', default: 100, example: 10 },
            required: false,
          },
          example: 10,
        }),
      includeTotal: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeTotal',
            in: 'query',
            description: 'Defines if the Metadata should include the total count of events.\n',
            schema: { type: 'boolean', default: false, example: true },
            required: false,
          },
          example: true,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the requested Events.',
      content: { 'application/json': { schema: EventQueryResultSchema } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getAnalyticsEventsIdRoute = createRoute({
  method: 'get',
  path: '/analytics/events/{id}',
  tags: ['Events'],
  summary: 'Get an Event',
  description: 'Returns the specified Event.',
  operationId: 'queryEventsById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Identifies the Event that you want to retrieve.',
            required: true,
            schema: { type: 'string', example: '00112233-4455-6677-8899-aabbccddeeff' },
          },
          example: '00112233-4455-6677-8899-aabbccddeeff',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the requested Event.',
      content: { 'application/json': { schema: EventSchema } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getAnalyticsForwardersRoute = createRoute({
  method: 'get',
  path: '/analytics/forwarders',
  tags: ['Forwarders'],
  summary: 'Get a list of Forwarders.',
  description: 'Returns a list of all Forwarder resources.',
  operationId: 'listForwarders',
  responses: {
    200: {
      description: 'Successfully retrieved a list of all Forwarder resources.',
      content: { 'application/json': { schema: ForwarderListResponseSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: InternalResponse,
  },
})

export const postAnalyticsForwardersRoute = createRoute({
  method: 'post',
  path: '/analytics/forwarders',
  tags: ['Forwarders'],
  summary: 'Create a Forwarder',
  description: 'Creates a new Forwarder resource.',
  operationId: 'createForwarder',
  request: {
    body: {
      description: 'Contains the desired settings for the Forwarder resource.',
      content: { 'application/json': { schema: ForwarderSchema } },
    },
  },
  responses: {
    202: {
      description:
        'The request to create a Forwarder resource succeeded. The resource will be created when the configuration is complete.',
      content: { 'application/json': { schema: ForwarderSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: ConflictResponse,
    500: InternalResponse,
  },
})

export const getAnalyticsForwardersForwarderNameRoute = createRoute({
  method: 'get',
  path: '/analytics/forwarders/{forwarderName}',
  tags: ['Forwarders'],
  summary: 'Get a Forwarder',
  description: 'Gets information about an existing Forwarder resource.',
  operationId: 'getForwarder',
  request: { params: z.object({ forwarderName: ForwarderNameParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully retrieved the requested Forwarder resource.',
      content: { 'application/json': { schema: ForwarderSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalResponse,
  },
})

export const putAnalyticsForwardersForwarderNameRoute = createRoute({
  method: 'put',
  path: '/analytics/forwarders/{forwarderName}',
  tags: ['Forwarders'],
  summary: 'Create or update a Forwarder',
  description: 'Creates new or updates an existing Forwarder resource.',
  operationId: 'updateForwarder',
  request: {
    params: z.object({ forwarderName: ForwarderNameParamsSchema }),
    body: {
      description: 'Contains the desired settings for the Forwarder resource.',
      content: { 'application/json': { schema: ForwarderSchema } },
    },
  },
  responses: {
    202: {
      description: 'Successfully initialized the update process of a Forwarder resource.',
      content: { 'application/json': { schema: ForwarderSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: InternalResponse,
  },
})

export const deleteAnalyticsForwardersForwarderNameRoute = createRoute({
  method: 'delete',
  path: '/analytics/forwarders/{forwarderName}',
  tags: ['Forwarders'],
  summary: 'Delete a Forwarder',
  description: 'Deletes a Forwarder resource.',
  operationId: 'deleteForwarder',
  request: { params: z.object({ forwarderName: ForwarderNameParamsSchema }) },
  responses: {
    202: {
      description:
        'The request to delete a Forwarder resource succeeded. The resource is marked for deletion.',
      content: { 'application/json': { schema: ForwarderSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: InternalResponse,
  },
})

export const getAnalyticsMetricsRoute = createRoute({
  method: 'get',
  path: '/analytics/metrics',
  tags: ['Metrics'],
  summary: 'Get Metrics',
  description:
    'Returns system Metrics data based on the query parameters provided.\n\nSupports filtering based on name and/or timestamp; aggregation over a configurable time span; and grouping by dimension.\n',
  operationId: 'queryMetrics',
  request: {
    query: z.object({
      names: z
        .string()
        .openapi({
          param: {
            name: 'names',
            in: 'query',
            description:
              'Identifies the Metrics data that you want to receive.\n\n- Provide multiple names as a comma-separated list.\n- You can provide an aggregate function for each Metric (`AVG`, `SUM`, `COUNT`, `MAX`, `MIN`, or `RATE`).\n- Combining non-aggregated and aggregated Metrics in a single query would apply any `groupBy` clause to only the latter.\n- Metrics with aggregates require the `startTime` parameter.\n',
            required: true,
            schema: {
              type: 'string',
              example: 'AVG(controller.agent.cpu.system),SUM(plus.upstream.bytes_rcvd)',
            },
          },
          example: 'AVG(controller.agent.cpu.system),SUM(plus.upstream.bytes_rcvd)',
        }),
      startTime: TimeSchema.openapi({
        param: {
          name: 'startTime',
          in: 'query',
          description:
            'Indicates the start of the time window to include Metrics from (inclusive).\n\n- If `startTime` is omitted, the last recorded value for the queried Metrics will be returned.\n- For aggregated Metrics, you must provide `startTime` in order to calculate the resolution.\n',
          schema: { $ref: '#/components/schemas/Time' },
          example: 'now-5h',
          required: false,
        },
      }).exactOptional(),
      endTime: TimeSchema.openapi({
        param: {
          name: 'endTime',
          in: 'query',
          description:
            'Indicates the end of the time window to include Metrics from (non-inclusive).\n\n- Must be greater than `startTime`.\n- If `endTime` is not specified when `startTime` is present, `endTime` defaults to the current time.\n',
          schema: { $ref: '#/components/schemas/Time' },
          required: false,
        },
      }).exactOptional(),
      resolution: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resolution',
            in: 'query',
            description:
              'Changes the granularity of the returned data.\n\n- Must be a valid duration -- a string starting with a number followed by a unit of time (`y`, `M`, `w`, `d`, `h`, `m` or `s`).\n- When using a resolution, you must provide an aggregate function (or functions) in the `names` parameter and `startTime`.\n- If you do not provide a resolution, the maximum available resolution will be returned (`endTime` - `startTime`).\n',
            schema: { type: 'string', example: '30s' },
            required: false,
          },
          example: '30s',
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              "Filters results based on dimension values.\n\nConsists of one or more predicates in the form  `<dimension><operator><dimension value>` where:\n- `<dimension>` is the name of the dimension.\n- `<operator>` is one of the supported operators (`=`, `!=`, `<`, `<=`, `>=` `>`, `in` or `not`).\n- `<dimension value>` is value of the dimension(s) that you want to filter on.\n- `<dimension> and <dimension value>` is case sensitive.\n\nFor example: 'count > 100'\n\nPredicates can be combined into logical expressions using `OR`, `AND`, and `(` `)`.\nFor matching values, wildcard (`*`) use is supported.\n\nWrapping predicates in single quotes is recommended to ensure that the full query string is processed correctly.\n\nSee the Dimensions [Catalog](#/tags/catalogs) to find out more about Dimensions.\n",
            schema: {
              type: 'string',
              example:
                "((app!='app1' OR app='app2') AND environment in ('aa', 'bb')) AND (tags!='*tag1*' AND interface='ens*')",
            },
            required: false,
          },
          example:
            "((app!='app1' OR app='app2') AND environment in ('aa', 'bb')) AND (tags!='*tag1*' AND interface='ens*')",
        }),
      groupBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'groupBy',
            in: 'query',
            description:
              'Groups the results according to the specified dimension(s).\n\n- Provide multiple dimension names as a comma-separated list.\n- All Metric names that you pass into the `names` parameter must be aggregated for the `groupBy` to work.\n',
            schema: { type: 'string', example: 'app,environment' },
            required: false,
          },
          example: 'app,environment',
        }),
      seriesLimit: z
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
            name: 'seriesLimit',
            in: 'query',
            description:
              'Sets an upper limit on the number of series returned.\nAlways returns additional series with dimension value named `all` (aggregating the values of all the metrics included in the results).\nIf the result does not include `all` stored dimensions values, the Metrics query returns series with dimension value named `other` (aggregating the values of all the metrics not included in the results).\nHas to be used along with the `orderSeriesBy` parameter.\n\n- Exactly one groupBy parameter must be provided in the query\n- Cannot be used along with `dimensions` parameter.\n',
            schema: { type: 'integer', example: 25 },
            required: false,
          },
          example: 25,
        }),
      orderSeriesBy: z
        .string()
        .default('SUM DESC')
        .exactOptional()
        .openapi({
          param: {
            name: 'orderSeriesBy',
            in: 'query',
            description:
              'Sorts the results according to the order specified. \n\nUsed along with the `seriesLimit` parameter.\n',
            schema: { type: 'string', example: 'MAX DESC', default: 'SUM DESC' },
            required: false,
          },
          example: 'MAX DESC',
        }),
      dimensions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dimensions',
            in: 'query',
            description:
              'List of dimensions that should be returned in the response for each metric series.\n\nDimensions not specified in this parameter will be hidden in the results.\nThis might result in series having exact same dimension set, but being visible as separate.\n\nIf the `aggregation` and `groupBy` parameters are provided for a metric, any dimension provided in\nthe `dimensions` query parameter also has to be provided in the `groupBy` parameter.\n\nDimensions provided in the `groupBy` query parameter do not have to be provided in the `dimensions` query parameter.\n\n- To get a single series, provide the metric name with aggregation and the dimensions parameter with an empty value.\n- Cannot be used along with `seriesLimit`.\n',
            schema: { type: 'string', example: 'app,environment' },
            required: false,
          },
          example: 'app,environment',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned the requested Metrics data.',
      content: { 'application/json': { schema: MetricQueryResultSchema } },
    },
    400: {
      description:
        'Bad input parameter, or possibly a bad URI. Check the input for typos and try again.',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})
