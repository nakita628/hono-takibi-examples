import { createRoute, z } from '@hono/zod-openapi'

type HealthType = {
  description?: string
  details?: { [key: string]: HealthType }
  status?: 'UNKNOWN' | 'UP' | 'DOWN'
}

const LanguageStatsSchema = z
  .object({
    alerts: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of alerts for this language.', example: 628 }),
    'analysis-date': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time the commit was analyzed.' }),
    'commit-date': z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time of the commit.' }),
    'commit-id': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The latest successfully analyzed commit for the language. All statistics refer to this commit.',
        example: '04d7a2300feec9bbcc48185e370e3b5d3ae4da9d',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'The short name for the language.', example: 'javascript' }),
    lines: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of lines of code for this language.', example: 133298 }),
    status: z
      .enum(['success', 'failure', 'pending'])
      .exactOptional()
      .openapi({ description: 'The status of the analysis of this language.', example: 'success' }),
  })
  .openapi({
    example: {
      alerts: 628,
      'analysis-date': '2000-01-23T04:56:07.000+00:00',
      'commit-date': '2000-01-23T04:56:07.000+00:00',
      'commit-id': '04d7a2300feec9bbcc48185e370e3b5d3ae4da9d',
      language: 'javascript',
      lines: 133298,
      status: 'success',
    },
    required: [],
  })
  .openapi('LanguageStats')

const ProjectSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The numeric identifier of the project.',
        example: 1234567,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the project.', example: 'Apache Commons IO' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The full URL of the project on LGTM.',
        example: 'https://lgtm.example.com/projects/g/apache/commons-io',
      }),
    'url-identifier': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL identifier of the project.',
        example: 'g/apache/commons-io',
      }),
  })
  .openapi({
    example: {
      id: 1234567,
      name: 'Apache Commons IO',
      url: 'https://lgtm.example.com/projects/g/apache/commons-io',
      'url-identifier': 'g/apache/commons-io',
    },
    required: [],
  })
  .openapi('Project')

const AnalysisSchema = z
  .object({
    'commit-id': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The commit identifier.\nThe commit identifier is included only if the same commit was successfully analyzed for all languages. A detailed breakdown of which commit was analyzed for each language is provided in the `languages` property.\n',
        example: '04d7a2300feec9bbcc48185e370e3b5d3ae4da9d',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The analysis identifier.',
        example: '2e65208b2f1872634132566a1a0ce6392407297c',
      }),
    languages: z
      .array(LanguageStatsSchema)
      .exactOptional()
      .openapi({ description: 'Per-language information.' }),
    'log-url': z
      .string()
      .exactOptional()
      .openapi({
        description: 'A page on LGTM to view the logs for this analysis.',
        example:
          'https://lgtm.example.com/projects/g/yarnpkg/yarn/logs/analysis/2e65208b2f1872634132566a1a0ce6392407297c',
      }),
    project: ProjectSchema.exactOptional(),
    'results-url': z
      .string()
      .exactOptional()
      .openapi({
        description: 'A page on LGTM to view the results of this analysis.',
        example:
          'https://lgtm.example.com/projects/g/yarnpkg/yarn/analysis/2e65208b2f1872634132566a1a0ce6392407297c/files',
      }),
  })
  .openapi({
    example: {
      'commit-id': '04d7a2300feec9bbcc48185e370e3b5d3ae4da9d',
      id: '2e65208b2f1872634132566a1a0ce6392407297c',
      languages: [
        {
          alerts: 628,
          'analysis-date': '2000-01-23T04:56:07.000+00:00',
          'commit-date': '2000-01-23T04:56:07.000+00:00',
          'commit-id': '04d7a2300feec9bbcc48185e370e3b5d3ae4da9d',
          language: 'javascript',
          lines: 133298,
          status: 'success',
        },
        {
          alerts: 628,
          'analysis-date': '2000-01-23T04:56:07.000+00:00',
          'commit-date': '2000-01-23T04:56:07.000+00:00',
          'commit-id': '04d7a2300feec9bbcc48185e370e3b5d3ae4da9d',
          language: 'javascript',
          lines: 133298,
          status: 'success',
        },
      ],
      'log-url':
        'https://lgtm.example.com/projects/g/yarnpkg/yarn/logs/analysis/2e65208b2f1872634132566a1a0ce6392407297c',
      project: {
        id: 1234567,
        name: 'Apache Commons IO',
        url: 'https://lgtm.example.com/projects/g/apache/commons-io',
        'url-identifier': 'g/apache/commons-io',
      },
      'results-url':
        'https://lgtm.example.com/projects/g/yarnpkg/yarn/analysis/2e65208b2f1872634132566a1a0ce6392407297c/files',
    },
    required: [],
  })
  .openapi('Analysis')

const QueryPropertiesSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The `@id` of the query.', example: 'js/incomplete-sanitization' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `@name` of the query.',
        example: 'Incomplete string escaping or encoding',
      }),
    severity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The severity of the query.', example: 'warning' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The `@tags` associated with the query.',
        example: ['correctness', 'security', 'external/cwe/cwe-116'],
      }),
  })
  .openapi({ required: [] })
  .openapi('QueryProperties')

const QuerySchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The numeric identifier of the query.',
        example: 10000,
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [language code](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported) of the query.',
        example: 'javascript',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The `@name` of the query.',
        example: 'Incomplete string escaping or encoding',
      }),
    pack: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the query pack that contains the query.',
        example: 'com.lgtm/javascript-queries',
      }),
    properties: QueryPropertiesSchema.exactOptional(),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A page on LGTM to view the details of the query.',
        example: 'https://lgtm.example.com/rules/1000774/',
      }),
  })
  .openapi({ required: [] })
  .openapi('Query')

const CodereviewAlertsSchema = z
  .object({
    fixed: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of alerts fixed by the patch for this query.',
        example: 1,
      }),
    new: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of alerts introduced by the patch for this query.',
        example: 0,
      }),
    query: QuerySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CodereviewAlerts')

const CodereviewLanguagesSchema = z
  .object({
    alerts: z
      .array(CodereviewAlertsSchema)
      .exactOptional()
      .openapi({ description: 'The list of added and fixed alerts per query for this language.' }),
    fixed: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of alerts fixed by the patch for this language.',
        example: 1,
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language analyzed.', example: 'javascript' }),
    new: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of alerts introduced by the patch for this language.',
        example: 0,
      }),
    status: z
      .enum(['pending', 'failure', 'success'])
      .exactOptional()
      .openapi({ description: 'The status for analysis of this language.', example: 'success' }),
    'status-message': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current state of analysis of this langauge. When available, a summary of analysis results.',
        example: '1 fixed alert',
      }),
  })
  .openapi({ required: [] })
  .openapi('CodereviewLanguages')

const CodeReviewSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the review.',
        example: 'b45e291e7033460949ec986153c5416d22157d3e',
      }),
    languages: z
      .array(CodereviewLanguagesSchema)
      .exactOptional()
      .openapi({ description: 'Detailed information for each language analyzed.' }),
    'results-url': z
      .string()
      .exactOptional()
      .openapi({
        description: 'A page on LGTM to view the status and results of this code review.',
        example:
          'https://lgtm.example.com/projects/g/yarnpkg/yarn/rev/pr-b45e291e7033460949ec986153c5416d22157d3e',
      }),
    status: z
      .enum(['pending', 'failure', 'success'])
      .exactOptional()
      .openapi({ description: 'The status of the code review.', example: 'success' }),
    'status-message': z
      .string()
      .exactOptional()
      .openapi({
        description: 'A summary of the current status of the code review.',
        example: 'Analysis succeeded',
      }),
  })
  .openapi({
    example: {
      id: 'b45e291e7033460949ec986153c5416d22157d3e',
      languages: [
        {
          alerts: [{ fixed: 1, new: 0, query: { name: 'Incomplete string escaping or encoding' } }],
          fixed: 1,
          language: 'javascript',
          new: 0,
          status: 'success',
          'status-message': '1 fixed alert',
        },
      ],
      'results-url':
        'https://lgtm.example.com/projects/g/yarnpkg/yarn/rev/pr-b45e291e7033460949ec986153c5416d22157d3e',
      status: 'success',
      'status-message': 'Analysis succeeded',
    },
    required: [],
  })
  .openapi('CodeReview')

const HealthSchema: z.ZodType<HealthType> = z
  .lazy(() =>
    z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'A description of the status of the service.' }),
        details: z
          .record(z.string(), HealthSchema)
          .exactOptional()
          .openapi({
            description:
              'Details of the health of the service. This contains information about the status of the components on which the service depends.',
          }),
        status: z
          .enum(['UNKNOWN', 'UP', 'DOWN'])
          .exactOptional()
          .openapi({ description: 'The status of the service.', example: 'UP' }),
      })
      .openapi({
        example: { description: 'description', details: {}, status: 'UP' },
        required: [],
      }),
  )
  .openapi('Health')

const MeasurementSchema = z
  .object({
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when this metric was computed.' }),
    value: z
      .number()
      .exactOptional()
      .openapi({ description: 'The value of this metric at the timestamp reported.' }),
  })
  .openapi({
    example: { timestamp: '2000-01-23T04:56:07.000+00:00', value: 0.8008281904610115 },
    required: [],
  })
  .openapi('Measurement')

const MetricSchema = z
  .object({
    measurements: z
      .array(MeasurementSchema)
      .exactOptional()
      .openapi({
        description: 'A time series of values taken by the metric at different timestamps.',
      }),
    'metric-id': z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier by which this metric is referenced in the API.' }),
  })
  .openapi({
    example: {
      measurements: [
        { timestamp: '2000-01-23T04:56:07.000+00:00', value: 0.8008281904610115 },
        { timestamp: '2000-01-23T04:56:07.000+00:00', value: 0.8008281904610115 },
      ],
      'metric-id': 'metric-id',
    },
    required: [],
  })
  .openapi('Metric')

const MetricNameSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name by which the metric is listed in the user interface.' }),
    'metric-id': z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier by which this metric is referenced in the API.' }),
  })
  .openapi({ example: { description: 'description', 'metric-id': 'metric-id' }, required: [] })
  .openapi('MetricName')

const MetricsListSchema = z
  .object({
    data: z
      .array(MetricNameSchema)
      .exactOptional()
      .openapi({
        description: 'The list of names and identifiers by which the metrics are referenced.',
      }),
  })
  .openapi({
    example: {
      data: [
        { description: 'description', 'metric-id': 'metric-id' },
        { description: 'description', 'metric-id': 'metric-id' },
      ],
    },
    required: [],
  })
  .openapi('MetricsList')

const QueryjobStatsSchema = z
  .object({
    failed: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of projects for which the query failed.', example: 1 }),
    pending: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of projects scheduled for execution but pending. For very large jobs, not all projects are scheduled at the same time. Therefore, this number might increase as more projects are scheduled. This means that `successful + failed + pending` might be smaller than the total number of project that will be analyzed.\n',
        example: 1,
      }),
    'success-with-result': z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of projects for which the query returned results.',
        example: 3,
      }),
    'success-without-result': z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of projects for which the query was successful but returned no results.',
        example: 5,
      }),
    successful: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of projects for which the query completed succesfully. These are broken down further between the ones that have results (`success-with-result`) and the ones that do not (`success-without-result`): `successful = success-with-result + success-without-result`.\n',
        example: 8,
      }),
  })
  .openapi({
    example: {
      failed: 1,
      pending: 1,
      'success-with-result': 3,
      'success-without-result': 5,
      successful: 8,
    },
    required: [],
  })
  .openapi('QueryjobStats')

const QueryjobSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the QueryJob.',
        example: 'b45e291e7033460949ec986153c5416d22157d3e',
      }),
    'result-url': z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL to view the result of the query job.',
        example: 'https://lgtm.com/api/v1.0/query/b45e291e7033460949ec986153c5416d22157d3e',
      }),
    stats: QueryjobStatsSchema.exactOptional(),
  })
  .openapi({
    example: {
      id: 'b45e291e7033460949ec986153c5416d22157d3e',
      'result-url': 'https://lgtm.com/api/v1.0/query/b45e291e7033460949ec986153c5416d22157d3e',
      stats: {
        failed: 1,
        pending: 1,
        'success-with-result': 3,
        'success-without-result': 5,
        successful: 8,
      },
    },
    required: [],
  })
  .openapi('Queryjob')

const UploadSessionSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the upload session',
        example: '0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d',
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL for uploading file content.',
        example:
          'https://lgtm.example.com/api/v1.0/snapshots/uploads/0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d',
      }),
  })
  .openapi({
    example: {
      id: '0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d',
      url: 'https://lgtm.example.com/api/v1.0/snapshots/uploads/0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d',
    },
    required: [],
  })
  .openapi('UploadSession')

const OperationSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The identifier for the operation.',
        example: 7654321,
      }),
    status: z
      .enum(['pending', 'done'])
      .exactOptional()
      .openapi({ description: 'Status of the operation.', example: 'pending' }),
    'task-result': z.xor([AnalysisSchema, CodeReviewSchema, QueryjobSchema]).exactOptional(),
    'task-result-url': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL for the result of the task. For some operations, included only on completion.',
        example:
          'https://lgtm.example.com/api/v1.0/codereviews/b45e291e7033460949ec986153c5416d22157d3e',
      }),
    'task-type': z.enum(['analysis', 'codereview', 'queryjob']),
    uploads: z.record(z.string(), UploadSessionSchema).exactOptional(),
  })
  .openapi({
    example: {
      id: 7654321,
      status: 'pending',
      'task-result': '',
      'task-result-url':
        'https://lgtm.example.com/api/v1.0/codereviews/b45e291e7033460949ec986153c5416d22157d3e',
      'task-type': 'analysis',
      uploads: {
        key: {
          id: '0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d',
          url: 'https://lgtm.example.com/api/v1.0/snapshots/uploads/0bc9f13977e364395e8527515da9cbfa0e741cb035fe571197e82e0dd549416d',
        },
      },
    },
    required: ['task-type'],
  })
  .openapi('Operation')

const ProjectLanguageStatsSchema = LanguageStatsSchema.and(
  z
    .object({
      grade: z
        .enum(['A+', 'A', 'B', 'C', 'D', 'E'])
        .exactOptional()
        .openapi({ description: 'The grade of the code for this language.', example: 'A+' }),
    })
    .openapi({ required: [] }),
).openapi('ProjectLanguageStats')

const ProjectDetailsSchema = ProjectSchema.and(
  z
    .object({
      languages: z
        .array(ProjectLanguageStatsSchema)
        .exactOptional()
        .openapi({ description: 'Per-language information.' }),
    })
    .openapi({ required: [] }),
).openapi('ProjectDetails')

const ProjectListSchema = z
  .object({
    data: z
      .array(ProjectSchema)
      .exactOptional()
      .openapi({ description: 'A single page of projects.' }),
    nextPageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to retrieve the next page of projects. Omitted if there is no next page.',
        example:
          'https://lgtm.example.com/api/v1.0/projects?start=AVAIySnWtmGBpZjIb27kbrqB2uK2HIU0Zk9Sfh19ya8nxzA4GE5bv9LxVPSjQCwHKThqAADNvp17WuWBuBe8901G-ryeA2tLD6JZh8lue2IM0EuqsqB9Wk5BAM6T0lEnXA',
      }),
  })
  .openapi({
    example: {
      data: [
        {
          id: 1234567,
          name: 'Apache Commons IO',
          url: 'https://lgtm.example.com/projects/g/apache/commons-io',
          'url-identifier': 'g/apache/commons-io',
        },
        {
          id: 1234567,
          name: 'Apache Commons IO',
          url: 'https://lgtm.example.com/projects/g/apache/commons-io',
          'url-identifier': 'g/apache/commons-io',
        },
      ],
      nextPageUrl:
        'https://lgtm.example.com/api/v1.0/projects?start=AVAIySnWtmGBpZjIb27kbrqB2uK2HIU0Zk9Sfh19ya8nxzA4GE5bv9LxVPSjQCwHKThqAADNvp17WuWBuBe8901G-ryeA2tLD6JZh8lue2IM0EuqsqB9Wk5BAM6T0lEnXA',
    },
    required: [],
  })
  .openapi('ProjectList')

const QueryResultEntrySchema = z
  .object({
    file: z.string().exactOptional(),
    line: z.int32().exactOptional(),
    url: z.url().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryResultEntry')

const QueryjobProjectResultsSchema = z
  .object({
    columns: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Columns returned by the query.' }),
    data: z
      .array(z.array(QueryResultEntrySchema))
      .exactOptional()
      .openapi({ description: 'Results of the query divided by row.' }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for retrieving the next part of the results (if applicable).' }),
    project: ProjectSchema.exactOptional(),
  })
  .openapi({
    example: {
      columns: ['Column A', 'Column B'],
      data: [
        [
          {
            file: '/path/to/file.txt',
            line: 100,
            url: 'https://lgtm.example.com/projects/g/apache/commons-io/snapshot/271554d09bb63cb546aa5151916588c320533395/files/path/to/file.txt#L100',
            value: 'Alert 1',
          },
          { value: 'Value B' },
        ],
      ],
      next: 'https://lgtm.example.com/api/v1.0/queryjobs/results/1234567?start=AXBe&limit=100',
      project: {
        id: 1234567,
        name: 'Apache Commons IO',
        url: 'https://lgtm.example.com/projects/g/apache/commons-io',
        'url-identifier': 'g/apache/commons-io',
      },
    },
    required: [],
  })
  .openapi('QueryjobProjectResults')

const QueryjobResultsOverviewEntrySchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message. Only applies if `status` is `error`.' }),
    external: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of results that refer to elements outside the source tree (e.g., libraries). Only applies if `status` is `success`.',
        example: 10,
      }),
    internal: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of results that refer to elements within the source tree. Only applies if `status` is `success`.',
        example: 1,
      }),
    project: ProjectSchema.exactOptional(),
    status: z
      .enum(['success', 'error'])
      .exactOptional()
      .openapi({
        description: 'Describes whether the query was sucessfully executed against the project.',
        example: 'success',
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of results returned by the query. This is broken down further into `internal` and `external` results. Only applies if `status` is `success`.\n',
        example: 11,
      }),
  })
  .openapi({ required: [] })
  .openapi('QueryjobResultsOverviewEntry')

const QueryjobResultsOverviewSchema = z
  .object({
    data: z.array(QueryjobResultsOverviewEntrySchema).exactOptional(),
    next: z.string().exactOptional(),
  })
  .openapi({
    example: {
      data: [
        {
          project: {
            id: 1234567,
            name: 'Apache Commons IO',
            url: 'https://lgtm.example.com/projects/g/apache/commons-io',
            'url-identifier': 'g/apache/commons-io',
          },
          results: 10,
          status: 'success',
        },
        {
          error: 'Generic Error',
          project: {
            id: 42530,
            name: 'Apache Maven',
            url: 'https://lgtm.example.com/projects/g/apache/maven',
            'url-identifier': 'g/apache/maven',
          },
          status: 'error',
        },
      ],
      next: 'https://lgtm.example.com/api/v1.0/queryjobs/2123/results?start=AXBe',
    },
    required: [],
  })
  .openapi('QueryjobResultsOverview')

const VersionSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version number of the API.', example: '1.0' }),
  })
  .openapi({ example: { apiVersion: '1.0' }, required: [] })
  .openapi('Version')

const AnalysisExampleExample = {
  description:
    'A summary of the results of analysis. This includes links to the full results in LGTM and also to the log files generated during analysis.',
  summary: 'A successful analysis',
  value: {
    'commit-id': '04d7a2300feec9bbcc48185e370e3b5d3ae4da9d',
    id: '2e65208b2f1872634132566a1a0ce6392407297c',
    languages: [
      { alerts: 139, language: 'java', lines: 101498, status: 'success' },
      { alerts: 9, language: 'javascript', lines: 773, status: 'success' },
    ],
    'log-url':
      'https://lgtm.example.com/projects/g/apache/struts/logs/analysis/2e65208b2f1872634132566a1a0ce6392407297c',
    project: {
      id: 123456789,
      name: 'Apache Struts',
      url: 'https://lgtm.example.com/projects/g/apache/struts',
      'url-identifier': 'g/apache/struts',
    },
    'results-url':
      'https://lgtm.example.com/projects/g/apache/struts/analysis/2e65208b2f1872634132566a1a0ce6392407297c/files',
  },
}

const AnalysisOperationExampleExample = {
  description:
    'Example of the initial response for a request to view the status of an operation. The response includes the task type and a link to the log page for the task.',
  summary: 'A successfully triggered task',
  value: {
    id: 1548841694385,
    status: 'pending',
    'task-result': {
      languages: [
        { language: 'cpp', status: 'pending' },
        { language: 'csharp', status: 'pending' },
        { language: 'java', status: 'pending' },
        { language: 'javascript', status: 'pending' },
        { language: 'python', status: 'pending' },
      ],
      'log-url': 'https://lgtm.com/logs/29a7017f6000333419dbb9829865e5786b91843d',
    },
    'task-type': 'analysis',
  },
}

const AnalysisRequestExampleExample = {
  description: 'An operation entry tracking a running analysis task.',
  summary: 'A request for an analysis of a commit.',
  value: {
    id: 1508906426111,
    status: 'pending',
    'task-result': {
      'commit-id': '559de2c461e94ab636c959149c775bb27111fb48',
      id: '3d5a71d2b87880432aadb8166e79f984b3611fda',
      languages: [
        { language: 'javascript', status: 'pending' },
        { language: 'java', status: 'pending' },
      ],
      'log-url':
        'https://lgtm.com/projects/g/apache/commons-io/logs/analysis/3d5a71d2b87880432aadb8166e79f984b3611fda',
      project: {
        id: 38901173,
        name: 'apache/commons-io',
        url: 'https://lgtm.com/projects/g/apache/commons-io',
        'url-identifier': 'g/apache/commons-io',
      },
      'results-url':
        'https://lgtm.com/projects/g/apache/commons-io/analysis/3d5a71d2b87880432aadb8166e79f984b3611fda/files',
    },
    'task-result-url':
      'https://lgtm.com/api/v1.0/analyses/3d5a71d2b87880432aadb8166e79f984b3611fda',
    'task-type': 'analysis',
  },
}

const ExternalOperationExampleExample = {
  description:
    'Example of the initial response for a task triggered by a request to add a project in `upload` mode for a repository with two languages. This includes the URLs where you should upload the two, externally-generated, databases for the project.',
  summary: 'A successfully triggered task to add a project in `upload` mode.',
  value: {
    id: 1548865134385,
    status: 'pending',
    'task-result': {
      'commit-id': 'c103e89d2151a9f83a1bab59e112a4bc41a8050d',
      languages: [
        { language: 'java', status: 'pending' },
        { language: 'javascript', status: 'pending' },
      ],
      'log-url': 'https://lgtm.example.com/logs/a5cfe527b55cecc91c45dba658775d482177495b',
    },
    'task-type': 'analysis',
    uploads: {
      java: {
        id: '755e8beb6f33c1e7e6a70f8a30dfc0a2d62bbb70e2912e9668a563f21bbcd9fb',
        url: 'https://lgtm.example.com/api/v1.0/snapshots/uploads/755e8beb6f33c1e7e6a70f8a30dfc0a2d62bbb70e2912e9668a563f21bbcd9fb',
      },
      javascript: {
        id: 'a8dcd65757901312f53f55d1cde2461a280309683fe99b0b3982f47e8adb9a49',
        url: 'https://lgtm.example.com/api/v1.0/snapshots/uploads/a8dcd65757901312f53f55d1cde2461a280309683fe99b0b3982f47e8adb9a49',
      },
    },
  },
}

const HealthExampleExample = {
  description:
    'Example of a response for a system where all the core services are running well. Some of the worker services are not currently available to run tasks because  they are being provisioned or are booting up. The system can run `general` tasks but may not be able to run  `query` tasks that users request through the query console.\n',
  summary: 'Response to a request that included an access token with the scope `system:read`.',
  value: {
    details: [
      { database: { status: 'UP' } },
      { file_storage: { status: 'UP' } },
      { queue: { status: 'UP' } },
      { search: { status: 'UP' } },
      {
        workers: {
          description: 'The status of the least healthy worker type is UNKNOWN',
          details: [
            {
              QUERY: {
                description: 'The status of the healthiest of these workers is UNKNOWN',
                details: [{ 'query-001': { description: 'BOOTING', status: 'UNKNOWN' } }],
                status: 'UNKNOWN',
              },
            },
            {
              GENERAL: {
                description: 'The status of the healthiest of these workers is UP',
                details: [
                  { 'general-001': { description: 'EXECUTING', status: 'UP' } },
                  { 'general-002': { description: 'IDLE', status: 'UP' } },
                  { 'general-003': { description: 'EXECUTING', status: 'UP' } },
                  { 'general-004': { description: 'UNKNOWN', status: 'PROVISIONING' } },
                ],
                status: 'UP',
              },
            },
          ],
          status: 'UNKNOWN',
        },
      },
    ],
    status: 'UP',
  },
}

const MetricExampleExample = {
  description: 'A time series of values for the metric.',
  summary: 'A metric',
  value: {
    measurements: [
      { timestamp: '2019-05-02T12:01:23.000+00:00', value: 1357 },
      { timestamp: '2019-05-01T11:35:22.000+00:00', value: 1234 },
    ],
    'metric-id': 'active-users',
  },
}

const MetricsExampleExample = {
  description:
    'The list of identifiers (by which the various usage metrics can be referred to in the API), and their corresponding descriptions.',
  summary: 'A list of metric identifiers and descriptions',
  value: {
    data: [
      {
        description: 'Users who have used the LGTM web application in the past 180 days',
        'metric-id': 'active-users',
      },
      { description: 'Projects with Java analysis', 'metric-id': 'java-projects' },
    ],
  },
}

const ProjectConfigurationExample = {
  description: 'The contents of the LGTM project configuration YAML.',
  summary: 'An LGTM project configuration.',
  value: 'path_classifiers:\n  test:\n    - test',
}

const QueryjobsRequestExampleExample = {
  description: 'An operation entry tracking a query job task.',
  summary: 'Response to a request to run a query.',
  value: {
    id: 1508906426111,
    status: 'pending',
    'task-result': { $ref: '#/components/examples/queryjobsResponseExample' },
    'task-result-url': 'https://lgtm.com/api/v1.0/queryjobs/987654321',
    'task-type': 'queryjobs',
  },
}

const QueryjobsResponseExampleExample = {
  description:
    'Example of the response to a request for the status of a running query job. The `stats` section reports the status for each project included in the query job. Use the `result-url` to see the results.\n',
  summary: 'Status of a query job.',
  value: {
    id: 'b45e291e7033460949ec986153c5416d22157d3e',
    'result-url': 'https://lgtm.com/query/b45e291e7033460949ec986153c5416d22157d3e',
    stats: {
      failed: 1,
      pending: 1,
      'success-with-result': 3,
      'success-without-result': 5,
      successful: 8,
    },
  },
}

const RequestcodeReviewExampleExample = {
  description: 'A code review request, pending analysis for JavaScript.',
  summary: 'A code review request.',
  value: {
    id: 1000013,
    status: 'pending',
    'task-result': {
      id: 'e866b685a22f5d644a3dc1c9c145f56aab7d4350',
      languages: [
        {
          alerts: [],
          fixed: 0,
          language: 'javascript',
          new: 0,
          status: 'pending',
          'status-message': 'Starting up',
        },
      ],
      'results-url':
        'https://lgtm.com/projects/g/Semmle/code/rev/pr-e866b685a22f5d644a3dc1c9c145f56aab7d4350',
      status: 'pending',
      'status-message': 'Starting up',
    },
    'task-result-url':
      'https://lgtm.com/api/v1.0/codereviews/e866b685a22f5d644a3dc1c9c145f56aab7d4350',
    'task-type': 'codereview',
  },
}

const SnapshotPartExample = {
  description:
    'The request body must contain a database part that was generated and prepared for upload to LGTM using the CodeQL CLI or the QL command-line tools.  For more information, see [Preparing snapshots to upload to LGTM](https://help.semmle.com/wiki/display/SD/Preparing+snapshots+to+upload+to+LGTM). \n',
  value: 'The name of database file to upload.',
}

const AccessTokenSecurityScheme = {
  description:
    '\n\nLGTM Enterprise users need to create and use an access token to authenticate with this API. This is optional for LGTM.com users unless they want to submit a CodeQL query for analysis of one or more projects, or to request the analysis of a patch or commit. LGTM.com users also need an access token to  check on the progress of long running tasks using the `/operations` endpoint.\nLog in to LGTM and use the **Create token** option in your Account settings page. For more detailed information, see [Authentication with the API](https://lgtm.com/help/lgtm/api/authentication-api) and [Managing access tokens](https://lgtm.com/help/lgtm/api/managing-access-tokens).\nIf you include an access token in the header of a request to the API  for data, it must have the scopes required by that endpoint. Access tokens are shown in the examples as: `Authorization: Bearer {access-token}`\n',
  scheme: 'bearer',
  type: 'http',
}

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['API root'],
  summary: 'Version information',
  description: 'Get the version information of this API.',
  operationId: 'getVersion',
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: { 'application/json': { schema: VersionSchema } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getAnalysesAnalysisIdRoute = createRoute({
  method: 'get',
  path: '/analyses/{analysis-id}',
  tags: ['Analyses'],
  summary: 'Get analysis summary',
  description:
    'Get a summary of the analysis results for a specific analysis identifier.\n\nTo find the analysis identifier for a commit, use the `/analyses/{project-id}/commits/{commit-id}` endpoint. For more information, see [Get analysis summary for a specific commit](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAnalysisForCommit).\n\nThis endpoint reports the commit analyzed and a summary of the results for each language. Alternatively, you can use this identifier to download full details  of all the alerts found by the analysis. For more information, see [Get detailed alert information](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAlerts).\n',
  operationId: 'getAnalysis',
  request: {
    params: z.object({
      'analysis-id': z
        .string()
        .regex(/[a-f0-9]+/)
        .length(40)
        .openapi({
          param: {
            description: 'The analysis identifier.',
            explode: false,
            in: 'path',
            name: 'analysis-id',
            required: true,
            schema: { maxLength: 40, minLength: 40, pattern: '[a-f0-9]+', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: {
        'application/json': {
          schema: AnalysisSchema,
          examples: { analysisExample: AnalysisExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getAnalysesAnalysisIdAlertsRoute = createRoute({
  method: 'get',
  path: '/analyses/{analysis-id}/alerts',
  tags: ['Analyses'],
  summary: 'Get detailed alert information',
  description:
    'Download all the alerts found by an analysis.\nUse the `Accept:` request header to specify the output media type as either CSV or [SARIF](https://lgtm.com/help/lgtm/sarif-results-file): \n\n- `application/sarif+json`: Alerts in SARIF format. If no version is specified the latest supported SARIF version is used.\n- `application/json`: Alerts in SARIF format (*deprecated*). \n  If no version is specified, [SARIF 2.0.0](http://docs.oasis-open.org/sarif/sarif/v2.0/sarif-v2.0.html) \n  is used for backwards compatibility.\n\n- `text/csv`: Alerts in CSV format. The `text/csv` media type has two optional parameters:\n   - `charset`: determines the character encoding of the text, by default UTF-8.\n   - `header`: determines whether a header row with column names is `present` or `absent`.\n      The default value for this parameter is `present`.\n      For example, an Accept header with value `text/csv; header=absent` \n      would result in CSV output without a header row.\n    \n\n\n\nTo find the analysis identifier for a commit, use the `/analyses/{project-id}/commits/{commit-id}`  endpoint. For more information, see [Get analysis summary for a specific commit](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAnalysisForCommit). \n',
  operationId: 'getAlerts',
  request: {
    params: z.object({
      'analysis-id': z
        .string()
        .openapi({
          param: {
            description: 'The analysis identifier.',
            explode: false,
            in: 'path',
            name: 'analysis-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      'sarif-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The desired version of the SARIF format. Currently supported versions are `1.0.0`, `2.0.0`, and `2.1.0`.',
            explode: true,
            in: 'query',
            name: 'sarif-version',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      'excluded-files': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `true` to include results in files that are excluded from the output by default. This includes results in test code and generated files. For more information, see [File classification](https://lgtm.com/help/lgtm/file-classification).',
            explode: true,
            in: 'query',
            name: 'excluded-files',
            required: false,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: {
        'application/json': { schema: z.object({}).openapi({ deprecated: true }), examples: {} },
        'application/sarif+json': { schema: z.object({}), examples: {} },
        'text/csv': { schema: z.string(), examples: {} },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const postAnalysesProjectIdRoute = createRoute({
  method: 'post',
  path: '/analyses/{project-id}',
  tags: ['Analyses'],
  summary: 'Run analysis of a specific commit',
  description:
    "Trigger the analysis of a specific commit to a project. If a previous attempt to analyze that commit failed, this triggers a fresh analysis.  This is supported for all LGTM projects, regardless of repository type or host. The commit must be available in the main repository, but can be on a branch that isn't tracked by LGTM. For both LGTM.com and LGTM Enterprise, you must include an access token with the `analyses:write` scope.\n\nWhen you request the analysis of a commit, the API returns:\n- `operation-id`: used to track the status of the task using the `/operations` endpoint. For more information, see [Get operation status](https://lgtm.com/help/lgtm/api/api-v1#opIdgetOperation).\n- `status`: initially pending.\n- `task-result`: containing information about the progress and results of the analysis.\n",
  operationId: 'requestAnalysis',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The numeric project identifier.',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      commit: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the commit to analyze.',
            explode: true,
            in: 'query',
            name: 'commit',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      language: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The language codes of the languages to analyze.\nFor a list of available languages, see [Supported languages](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported). To specify more than one language, this parameter can be repeated. If no language is specified, all the project's languages will be analyzed.\n",
            explode: true,
            in: 'query',
            name: 'language',
            required: false,
            schema: { items: { type: 'string' }, maxItems: 10, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Accepted. Analysis triggered. Tracking data returned.',
      content: {
        'application/json': {
          schema: OperationSchema,
          examples: { analysisRequestExample: AnalysisRequestExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getAnalysesProjectIdCommitsCommitIdRoute = createRoute({
  method: 'get',
  path: '/analyses/{project-id}/commits/{commit-id}',
  tags: ['Analyses'],
  summary: 'Get analysis summary for a specific commit',
  description:
    'Get a summary of the analysis results for a specific commit, or the latest commit, to a project. (For projects configured for sparse or upload analysis, only `latest` is supported.) \n\nThis endpoint reports a summary of results for each language, and also the analysis identifier. You can use the analysis identifier to download full details of all the alerts  found by the analysis. For more information, see [Get detailed alert information](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAlerts).\n',
  operationId: 'getAnalysisForCommit',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The numeric project identifier.',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      'commit-id': z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of a specific commit. Alternatively, use `latest` for the most recent analyzed commit.',
            explode: false,
            in: 'path',
            name: 'commit-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Data returned.',
      content: {
        'application/json': {
          schema: AnalysisSchema,
          examples: { analysisExample: AnalysisExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const postCodereviewsProjectIdRoute = createRoute({
  method: 'post',
  path: '/codereviews/{project-id}',
  tags: ['Code reviews'],
  summary: 'Run code review for a patch',
  description:
    "Trigger the code review of a patch. This is available for projects with Git repositories.\n\nYour request must include:\n\n  * Identifier for the base commit\n  * Patch generated using `git diff --binary` (see [git diff](https://git-scm.com/docs/git-diff))\n  * Header `Content-Type: application/octet-stream`\n  * For both LGTM.com and LGTM Enterprise, an access token with the `codereviews:write` scope\n\nNote that if you make a request using Curl, you'll also need to add `--data-binary` to the request to ensure that the patch you supply in the body is sent with newlines unchanged.\nYou can track the progress of the review using the task result URL returned on creation of the task, or by calling the `/operations` endpoint with the operations identifier returned by the request. For more information, see [Get operation status](https://lgtm.com/help/lgtm/api/api-v1#opIdgetOperation). Alternatively, if you supply a callback URL you'll get a post-back automatically on completion of the review.\n\nWhen the review is complete, you can access the results using the task result URL.\n",
  operationId: 'requestReview',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The numeric project identifier.',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      base: z
        .string()
        .openapi({
          param: {
            description: 'The identifier for the base commit.',
            explode: true,
            in: 'query',
            name: 'base',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      'external-id': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Your reference number for the code review.',
            example: 'integer',
            explode: true,
            in: 'query',
            name: 'external-id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      'review-url': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An informative back-link to an external system.',
            explode: true,
            in: 'query',
            name: 'review-url',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      'callback-url': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The callback URL for LGTM to post to on completion of the review.\nWhen the code review is complete, the API sends an HTTP POST request to the callback URL with the result of the code review in the request body. The code review results in the request body are identical to the results accessed through the [`/codereviews/{review-id}`](https://lgtm.com/help/lgtm/api/api-v1#opIdgetCodeReview) end-point.\nIf you specify a `callback-secret`, the request also includes an `x-lgtm-signature` header with a digital signature of the request's contents.\n",
            explode: true,
            in: 'query',
            name: 'callback-url',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      'callback-secret': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The `callback-secret` is used to compute a signature which is included in the `x-lgtm-signature` header of the callback response.\nThe receiver of the callback can check the validity of the response by computing the signature using HMAC-SHA1 and verifying that it matches the `x-lgtm-signature` header value.\nThe HMAC algorithm requires byte sequences as inputs for both the secret and the message. The callback secret string must be converted to bytes using UTF-8 encoding. The response body should ideally be read as a plain byte sequence. Conversion to, for example a JSON object, and back to a byte sequence might change the formatting, and would invalidate the signature.\n',
            explode: true,
            in: 'query',
            name: 'callback-secret',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
    body: {
      description: 'The patch containing the code changes for review.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
          examples: {
            patchFile: {
              description:
                'The request body must contain a patch file generated using `git diff --binary`, see [git diff](https://git-scm.com/docs/git-diff), for example:\n```text\n  diff --git a/describe.c b/describe.c\n  index db827ffaba..510eaf4866 100644\n  --- a/describe.c\n  +++ b/describe.c\n  @@ -132,7 +132,8 @@ void describe(char *arg)\n      if (n) {\n        printf("%s-g%s\\n", n->path,\n              find(cmit->key, abbrev));\n  -     clear(cmit, SEEN);\n  +     if (!last_one)\n  +       clear(cmit, SEEN);\n        return;\n      }\n    }\n```\n',
              value: 'The contents of a binary patch file',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Accepted. Code review triggered. Tracking data returned.',
      content: {
        'application/json': {
          schema: OperationSchema,
          examples: { 'requestcode-reviewExample': RequestcodeReviewExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getCodereviewsReviewIdRoute = createRoute({
  method: 'get',
  path: '/codereviews/{review-id}',
  tags: ['Code reviews'],
  summary: 'Get results of code review',
  description:
    "Get the results of a code review using the review identifier for the task.\n\nWhen you request a code review, the response includes a task result URL of the form: `/codereviews/{review-id}`.\n\nThis endpoint reports the results of a complete code review, or the status of a review  that's still in progress.\n",
  operationId: 'getCodeReview',
  request: {
    params: z.object({
      'review-id': z
        .string()
        .openapi({
          param: {
            description: 'The identifier for the review (from the `task-result-url`).',
            explode: false,
            in: 'path',
            name: 'review-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: {
        'application/json': {
          schema: z.array(CodeReviewSchema),
          examples: {
            'code-review': {
              summary: 'A successful code review',
              description: 'A successful code review with 1 fixed alert.',
              value: {
                id: 'b45e291e7033460949ec986153c5416d22157d3e',
                languages: [
                  {
                    alerts: [
                      {
                        fixed: 1,
                        new: 0,
                        query: {
                          id: 3717280014,
                          language: 'javascript',
                          name: 'Duplicate switch case',
                          pack: 'com.lgtm/javascript-queries',
                          properties: {
                            id: 'js/duplicate-switch-case',
                            name: 'Duplicate switch case',
                            severity: 'warning',
                            tags: ['maintainability', 'correctness', 'external/cwe/cwe-561'],
                          },
                          url: 'https://lgtm.example.com/rules/3717280014/',
                        },
                      },
                    ],
                    fixed: 1,
                    language: 'javascript',
                    new: 0,
                    status: 'success',
                    'status-message': '1 fixed alert',
                  },
                ],
                'results-url':
                  'https://lgtm.example.com/projects/g/yarnpkg/yarn/rev/pr-b45e291e7033460949ec986153c5416d22157d3e',
                status: 'success',
                'status-message': 'Analysis succeeded',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getIssuesProjectIdAlertKeyRoute = createRoute({
  method: 'get',
  path: '/issues/{project-id}/{alert-key}',
  tags: ['Issues'],
  summary: 'Get detailed alert information for an issue',
  description:
    'Fetch the alert information for an issue in [SARIF](https://lgtm.com/help/lgtm/sarif-results-file) format.\n',
  operationId: 'getIssue',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The numeric project identifier.',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      'alert-key': z
        .string()
        .openapi({
          param: {
            description:
              "The alert key is generated by LGTM when it posts an issue `create` webhook request \n to an external system using the [issue tracker Webhook API](https://lgtm.com/admin/help/issuetracker-webhook-api).\n This key is an opaque identifier that tracks the alert's location over time. For example, if a file containing the alert\n is modified, the SARIF data will reflect the updated location of the alert.\n Note that the key needs to be URL encoded as it may contain characters that are not web-safe.  \n",
            example: '+ja0cf6+84AGgat15W1jooeMfUY=',
            explode: false,
            in: 'path',
            name: 'alert-key',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: { 'application/sarif+json': { schema: z.object({}), examples: {} } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getOpenapiRoute = createRoute({
  method: 'get',
  path: '/openapi',
  tags: ['API root'],
  summary: 'API specification',
  description:
    'Get the specification of this API in [OpenAPI](https://github.com/OAI/OpenAPI-Specification) format. This endpoint does not require an access token. This makes it easier for you to use the specification with third-party tools.',
  operationId: 'getSpec',
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: { 'application/json': { schema: z.object({}), examples: {} } },
    },
  },
})

export const getOperationsOperationIdRoute = createRoute({
  method: 'get',
  path: '/operations/{operation-id}',
  tags: ['Operations'],
  summary: 'Get operation status',
  description:
    'Track progress of a long-running operation using the operations identifier returned when you  created the operation. For example, by triggering the analysis of a commit, or the code review of a patch. For both LGTM.com and LGTM Enterprise, you must include an access token with the `operations:read` scope.\n',
  operationId: 'getOperation',
  request: {
    params: z.object({
      'operation-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The operation identifier returned on creating the task.',
            explode: false,
            in: 'path',
            name: 'operation-id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: {
        'application/json': {
          schema: OperationSchema,
          examples: { analysisOperationExample: AnalysisOperationExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  tags: ['Projects'],
  summary: 'List projects',
  description:
    'List all the projects the current user has authorization to view. \n\nA maximum of 100 projects are returned in each response. When further results are available, the response includes the URL you need to request the next page of results.\n\nUse the optional parameter, `limit`, to change the number of results reported in each response (range of 1&mdash;100). If you supply an invalid value for this  parameter, the default value of 100 is used.\n\nWhen more than one page of results is available, each response includes a `nextPageUrl` response parameter. You can use this URL to request the next page of results. The `nextPageUrl` includes an automatically generated `start` parameter, which specifies the projects to return in the next page of results.\n',
  operationId: 'getProjects',
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
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of projects to return in each response (1-100).',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An opaque identifier generated by the API.',
            explode: true,
            in: 'query',
            name: 'start',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  tags: ['Projects'],
  summary: 'Add a project to LGTM',
  description:
    "LGTM administrators can add a new project to LGTM by providing a repository URL. By default, LGTM tries to build and analyze the project in the same way as for projects added through the user interface. If at least one language is successfully analyzed, and the repository doesn't already exist on LGTM, a new project is created. If the project already exists but your API call triggers a successful analysis  of additional languages, LGTM adds those languages to the project.\n\nYou can configure how LGTM processes the project using query parameters to:\n  * Specify the languages to analyze.\n  * Create a new project in [sparse mode](https://help.semmle.com/lgtm-enterprise/user/help/analysis-faqs.html#what-is-sparse-analysis).\n  * Create a new project in [upload mode](https://help.semmle.com/lgtm-enterprise/user/help/analysis-faqs.html#what-is-upload-analysis) to analyze externally-generated databases. Each database represents a snapshot of the codebase. \n  Use this option when you want to upload databases that were generated by the CodeQL CLI (or the QL command-line tools).\n  The version of the command line used to generate the database\n  must be the same version as LGTM Enterprise. \n\nWith any of these options, you can also include an `lgtm.yml` in the body of the request to [customize extraction](https://lgtm.com/help/lgtm/customizing-code-extraction).\n",
  operationId: 'addProject',
  request: {
    query: z.object({
      repository: z
        .url()
        .openapi({
          param: {
            description:
              "The URL of the repository to analyze.\nLGTM tests this against the [repository providers](https://lgtm.com/admin/help/adding-repository-providers) defined for the system. If it doesn't match any of them, the request fails.",
            explode: true,
            in: 'query',
            name: 'repository',
            required: true,
            schema: { format: 'uri', type: 'string' },
            style: 'form',
          },
        }),
      language: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, a [language code](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported) to specify which language to analyze.\nTo request the analysis of more than one language, specify a query parameter for each language. By default, LGTM tries to analyze all supported languages.\n',
            explode: true,
            in: 'query',
            name: 'language',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      mode: z
        .enum(['full', 'sparse', 'upload'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The analysis mode of the new project.\nWhen set to `full` all commits of the project are analyzed; when set to `sparse` the latest commit of the project is analyzed periodically; when set to `upload`,  no automatic analysis is performed, instead externally-generated databases should be uploaded.\nFor new projects the default value is `full`. The `mode` parameter cannot be used to change the analysis mode of existing projects. Therefore, for existing projects, it should either be left blank or set to match the analysis mode of the project.\n',
            explode: true,
            in: 'query',
            name: 'mode',
            required: false,
            schema: { enum: ['full', 'sparse', 'upload'], type: 'string' },
            style: 'form',
          },
        }),
      commit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required when `mode=upload`, specify the identifier of the commit used to generate the database.',
            explode: true,
            in: 'query',
            name: 'commit',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional when `mode=upload`, specify the date and time of the commit used to generate the database; defaults to the current time.',
            explode: true,
            in: 'query',
            name: 'date',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      'worker-label': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, any [labels](https://lgtm.com/admin/help/defining-worker-labels) required by workers to analyze this project. \nTo specify more than one label, repeat the query parameter.\n',
            explode: true,
            in: 'query',
            name: 'worker-label',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: {
      description:
        'An optional [lgtm.yml project configuration](https://lgtm.com/help/lgtm/lgtm.yml-configuration-file) file to customize the LGTM code analysis and results display for the project.',
      content: {
        'application/x-yaml': {
          schema: z.string(),
          examples: {
            lgtm_yml: {
              description:
                'An optional [lgtm.yml project configuration](https://lgtm.com/help/lgtm/lgtm.yml-configuration-file) file to customize the LGTM code analysis and results display for the project.\n',
              value: { extraction: { java: { index: { build_command: './build.sh' } } } },
            },
          },
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Accepted. Analysis attempts triggered or upload URLs returned.',
      content: {
        'application/json': {
          schema: OperationSchema,
          examples: { externalOperationExample: ExternalOperationExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/projects/{project-id}',
  tags: ['Projects'],
  summary: 'Get project by numeric identifier',
  description:
    'Get the latest summary for a specific project using the numeric project identifier.\n\nTo find the LGTM identifier for a project, list all projects using the `/projects`  endpoint and look up the project by name. Alternatively, use the `/projects/{provider}/{org}/{name}` endpoint. If you have administration access, the project identifier is also displayed in  the administration page for the project.\n',
  operationId: 'getProject',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'The numeric project identifier',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: { 'application/json': { schema: ProjectDetailsSchema } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const deleteProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project-id}',
  tags: ['Projects'],
  summary: 'Delete project by numeric identifier',
  description:
    'Delete a project with a particular numeric project identifier.\nIn addition to access to the project, administrative access to LGTM or the LGTM Enterprise instance is required to delete projects.\n',
  operationId: 'deleteProject',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            description: 'The numeric project identifier',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', minimum: 1, type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Details of the deleted project returned.',
      content: { 'application/json': { schema: ProjectDetailsSchema } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getProjectsProjectIdSettingsAnalysisConfigurationRoute = createRoute({
  method: 'get',
  path: '/projects/{project-id}/settings/analysis-configuration',
  tags: ['Projects'],
  summary: 'Get configuration for a project identified by numeric identifier',
  description:
    'Get the latest configuration for a specific project using the numeric project identifier.',
  operationId: 'getProjectConfig',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The numeric project identifier',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      source: z
        .enum(['repository', 'administrator'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "The type of project configuration to retrieve.\nIf this parameter isn't specified, the request retrieves the effective configuration. That is, the configuration that is actually applied to the project, which may be from:\n* the repository\n* the administrator-set, project configuration\n* the global configuration.\n\nIf you do specify this value, it must be one of:\n\n * `repository` to retrieve the configuration specified by a YAML file in the repository. A 404 status is returned if there is no repository configuration. \n\n * `administrator` to retrieve the administrator-set, project configuration. A 404 status is returned if there is no administrator configuration.\n",
            explode: true,
            in: 'query',
            name: 'source',
            required: false,
            schema: { enum: ['repository', 'administrator'], type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: { 'application/x-yaml': { schema: z.object({}) } },
    },
    400: {
      description: 'Only YAML is supported.',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const putProjectsProjectIdSettingsAnalysisConfigurationRoute = createRoute({
  method: 'put',
  path: '/projects/{project-id}/settings/analysis-configuration',
  tags: ['Projects'],
  summary: 'Set the administrator configuration for a project identified by numeric identifier',
  description:
    'Set the administrator configuration for a specific project using the numeric project identifier.',
  operationId: 'setProjectConfig',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The numeric project identifier',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description:
        'The project configuration to set. Note that this only sets the administrator project configuration. It can be overridden by the repository configuration.\nIn addition to access to the project, administrative access to LGTM or the LGTM Enterprise instance is required to set administrator project configurations.\n',
      content: {
        'application/x-yaml': {
          schema: z.string(),
          examples: { snapshotPart: ProjectConfigurationExample },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success. The new effective project configuration is returned.',
      content: { 'application/x-yaml': { schema: z.object({}) } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getProjectsProviderOrgNameRoute = createRoute({
  method: 'get',
  path: '/projects/{provider}/{org}/{name}',
  tags: ['Projects'],
  summary: 'Get project by URL identifier',
  description:
    "Get the latest summary for a specific project using the project's URL identifier `{provider}/{org}/{name}`.\n\nTo find the URL identifier for a project, view the project overview page in LGTM. The URL identifier follows after `/projects`. For example, for a project with the URL `https://lgtm.example.com/projects/g/apache/commons-io` the URL identifier is `g/apache/commons-io`. In the example, `g` represents the `provider` (repository host), `apache` is the `organization` and `commons-io` is the `name` of the repository.\n",
  operationId: 'getProjectByUrlIdentifier',
  request: {
    params: z.object({
      provider: z
        .string()
        .openapi({
          param: {
            description:
              'The first part of the URL identifier of a project, which represents the repository host.',
            explode: false,
            in: 'path',
            name: 'provider',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      org: z
        .string()
        .openapi({
          param: {
            description: 'The second part of the URL identifier of a project, the organization.',
            explode: false,
            in: 'path',
            name: 'org',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'The third part of the URL identifier of a project, the repository name.',
            explode: false,
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: { 'application/json': { schema: ProjectDetailsSchema } },
    },
    307: {
      description:
        'Redirect. The project has been renamed. Request redirected to numeric identifier for the project.\n',
    },
  },
  security: [{ 'access-token': [] }],
})

export const postQueryjobsRoute = createRoute({
  method: 'post',
  path: '/queryjobs',
  tags: ['Query jobs'],
  summary: 'Run a CodeQL query on one or more projects',
  description:
    'Submit a query to run on one or more projects on LGTM. The query is included in the body of the request.\n',
  operationId: 'createQueryJob',
  request: {
    query: z.object({
      language: z
        .string()
        .openapi({
          param: {
            description:
              'The [language](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported) you want to analyze.\n',
            explode: true,
            in: 'query',
            name: 'language',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      'project-id': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .openapi({ type: 'integer', format: 'int64' }),
            )
            .min(0)
            .max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The identifier of the project to analyze. Either `project-id` or `projects-list` must be specified.',
            explode: true,
            in: 'query',
            name: 'project-id',
            required: false,
            schema: {
              items: { format: 'int64', type: 'integer' },
              maxItems: 200,
              minItems: 0,
              type: 'array',
            },
            style: 'form',
          },
        }),
      'projects-list': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Name of the list containing the projects to analyze. Either `project-id` or `projects-list` must be specified.',
            explode: true,
            in: 'query',
            name: 'projects-list',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
    body: {
      description: 'The query to run.',
      content: {
        'text/plain': {
          schema: z.string().openapi({ description: 'The CodeQL query text' }),
          examples: {
            HelloWorld: { description: 'A CodeQL query', value: 'select "hello", "world"' },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Accepted. Query submitted. Tracking data returned.',
      content: {
        'application/json': {
          schema: OperationSchema,
          examples: { runqueryExample: QueryjobsRequestExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getQueryjobsQueryjobIdRoute = createRoute({
  method: 'get',
  path: '/queryjobs/{queryjob-id}',
  tags: ['Query jobs'],
  summary: 'Get the status of a query job',
  description:
    'Get the status of a query job using the query job identifier for the task.\n\nWhen you create a query job, the response includes a task result URL of the form: `/queryjobs/{queryjob-id}`.\n',
  operationId: 'getQueryJob',
  request: {
    params: z.object({
      'queryjob-id': z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the query job, from the `task-result` given in the response to the initial `POST /queryjobs` request.',
            explode: false,
            in: 'path',
            name: 'queryjob-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: {
        'application/json': {
          schema: QueryjobSchema,
          examples: { getqueryjobExample: QueryjobsResponseExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getQueryjobsQueryjobIdResultsRoute = createRoute({
  method: 'get',
  path: '/queryjobs/{queryjob-id}/results',
  tags: ['Query jobs'],
  summary: 'Provide a summary of results for the projects in the query job',
  description:
    'This endpoint provides a summary of the results generated by completed query runs for each  project specified in the the POST /queryjobs endpoint.  For completed query jobs, the summary includes:\n\n  * The number of results for successful query runs.\n  * Error information for failed query runs.\n\nNo information is included in the response for any project for which the query  run is still in progress.\n',
  operationId: 'getQueryJobResultsOverview',
  request: {
    params: z.object({
      'queryjob-id': z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the query job, from the `task-result` given in the response to the initial `POST /queryjobs` request.',
            explode: false,
            in: 'path',
            name: 'queryjob-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An opaque identifier generated by the API used for pagination. \nThis identifier will be included as part of the response for this endpoint whenever more than one page of results is available. \n',
            explode: true,
            in: 'query',
            name: 'start',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return. Useful for pagination.',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return a subset of results. Legal values are `w-results`, `wo-results`, `error`.',
            explode: true,
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: { 'application/json': { schema: QueryjobResultsOverviewSchema } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getQueryjobsQueryjobIdResultsProjectIdRoute = createRoute({
  method: 'get',
  path: '/queryjobs/{queryjob-id}/results/{project-id}',
  tags: ['Query jobs'],
  summary: 'Fetch the results of a query job for a specific project',
  description:
    'Fetch the results for a specific project. The endpoint succeeds only if the query was successful,  and returns a `404` error otherwise.  By default, the endpoint provides only results that are within the source tree. To obtain all results, specify the `nofilter` parameter.\n',
  operationId: 'getQueryJobResultsForProject',
  request: {
    params: z.object({
      'queryjob-id': z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the query job, from the `task-result` given in the response to the initial `POST /queryjobs` request.',
            explode: false,
            in: 'path',
            name: 'queryjob-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'project-id': z
        .string()
        .openapi({
          param: {
            description: 'The identifier for the project.',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start point for the page of results.',
            explode: true,
            in: 'query',
            name: 'start',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to display (less than 100).',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      nofilter: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include results that are not part of the source tree. These results are filtered out by default.',
            explode: true,
            in: 'query',
            name: 'nofilter',
            required: false,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success. The result contains three items: column headers, data, and pagination information.',
      content: { 'application/json': { schema: QueryjobProjectResultsSchema } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const putSnapshotsUploadsSessionIdRoute = createRoute({
  method: 'put',
  path: '/snapshots/uploads/{session-id}',
  tags: ['Snapshots'],
  summary: 'Upload snapshot',
  description:
    "Upload a database representing a snapshot of a codebase.  The database is sent in one or more parts. Each part is sent in the request body. \nUse the [`POST /snapshots/{project-id}/{language}`](https://lgtm.com/help/lgtm/api/api-v1#opIdinitSnapshotUpload) endpoint  to start an upload session before uploading a database part. Database parts must have been generated and prepared for upload using the CodeQL CLI or the QL command-line tools. For further information on exporting externally-built databases,  see [Preparing snapshots to upload to LGTM](https://help.semmle.com/wiki/display/SD/Preparing+snapshots+to+upload+to+LGTM).\n\nSplit large databases into multiple parts. Upload the parts by making a separate request for each part.  Don't upload the next part until you've successfully uploaded the previous part.\n\nIf the upload fails you should retry it with the same data.\n",
  operationId: 'uploadPart',
  request: {
    params: z.object({
      'session-id': z
        .string()
        .openapi({
          param: {
            description: 'The id of the upload session.',
            explode: false,
            in: 'path',
            name: 'session-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'The database or database part to upload.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
          examples: { snapshotPart: SnapshotPartExample },
        },
        'application/zip': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
          examples: { snapshotPart: SnapshotPartExample },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success.' } },
  security: [{ 'access-token': [] }],
})

export const postSnapshotsUploadsSessionIdRoute = createRoute({
  method: 'post',
  path: '/snapshots/uploads/{session-id}',
  tags: ['Snapshots'],
  summary: 'Complete snapshot upload session',
  description:
    'Completes the database upload by closing the upload session, upgrading the database if appropriate, and scheduling analysis of that snapshot of the codebase.\n\nYou can view the analysis progress and access the results using the `task-result-url`.\n',
  operationId: 'completeUpload',
  request: {
    params: z.object({
      'session-id': z
        .string()
        .openapi({
          param: {
            description: 'The id of the upload session.',
            explode: false,
            in: 'path',
            name: 'session-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Accepted. Analysis triggered. Tracking data returned.',
      content: {
        'application/json': {
          schema: OperationSchema,
          examples: { analysisRequestExample: AnalysisRequestExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const deleteSnapshotsUploadsSessionIdRoute = createRoute({
  method: 'delete',
  path: '/snapshots/uploads/{session-id}',
  tags: ['Snapshots'],
  summary: 'Abort database upload process',
  description:
    'Aborts the specified upload session and deletes any uploaded parts. After the session is aborted it cannot be restarted.\nIf any part uploads are in progress when the session is aborted, their data may not be deleted. To ensure that uploaded parts are deleted correctly, you should only abort an upload session after all part uploads have completed.\n',
  operationId: 'abortUpload',
  request: {
    params: z.object({
      'session-id': z
        .string()
        .openapi({
          param: {
            description: 'The id of the upload session.',
            explode: false,
            in: 'path',
            name: 'session-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Aborted.',
      content: {
        'application/json': {
          schema: OperationSchema,
          examples: {
            abortUploadoperation: {
              summary: 'An aborted upload session.',
              description:
                'A summary of the aborted upload session. Aborted sessions have an analysis status of `failure` in the API response and in LGTM.',
              value: {
                'commit-id': '04d7a2300feec9bbcc48185e370e3b5d3ae4da9d',
                id: 'ec741d71eeb55250ddca33800f0ee06e77ccfd7f',
                languages: [{ language: 'java', status: 'failure' }],
                'log-url':
                  'https://lgtm.example.com/projects/g/apache/commons-io/logs/analysis/ec741d71eeb55250ddca33800f0ee06e77ccfd7f',
                project: {
                  id: 1548859144386,
                  name: 'apache/commons-io',
                  url: 'https://lgtm.example.com/projects/g/apache/commons-io',
                  'url-identifier': 'g/apache/commons-io',
                },
                'results-url':
                  'https://lgtm.example.com/projects/g/apache/commons-io/analysis/ec741d71eeb55250ddca33800f0ee06e77ccfd7f/files',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getSnapshotsProjectIdLanguageRoute = createRoute({
  method: 'get',
  path: '/snapshots/{project-id}/{language}',
  tags: ['Snapshots'],
  summary: 'Download a snapshot',
  description:
    'Download a CodeQL database from LGTM, representing a snapshot of the codebase, to run queries in your IDE.\n\nThis endpoint works for projects that have been successfully analyzed for the language specified in the request.  A successful request redirects you to a URL for downloading a database that represents the code snapshot, as specified in the `Location:` header in the response. Therefore, your HTTP client should be configured to follow redirects. For example, if you are using `curl`, you can add the`-L` flag to the command.\n\nThe database is downloaded as a zip file that can be imported into an IDE equipped with a  CodeQL extension. The extension must be up to date to analyze databases downloaded from LGTM. For more information on running queries locally in your IDE, see [Runnning queries in your IDE](https://lgtm.com/help/lgtm/running-queries-ide). \n',
  operationId: 'getSnapshot',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The numeric project identifier.',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: 'The language of the database to download.',
            explode: false,
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    303: {
      description:
        'Redirects to a URL for downloading the CodeQL database as indicated by the `Location:` header.',
      headers: z.object({
        Location: {
          style: 'simple',
          schema: z
            .url()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ 'access-token': [] }],
})

export const postSnapshotsProjectIdLanguageRoute = createRoute({
  method: 'post',
  path: '/snapshots/{project-id}/{language}',
  tags: ['Snapshots'],
  summary: 'Start snapshot upload session',
  description:
    "Start a session to upload an externally-built database (which represents a snapshot of a codebase) to a project on LGTM. \n\nThis endpoint works for projects that are already on LGTM, and the selected language of  the database must already be configured. The project must be configured with 'upload' analysis mode. You can upload a \"bundled\" CodeQL database or a database exported by  the QL command-line tools (`odasa`).\n\nIf your database was generated using a version of the  command line that is older than LGTM,  LGTM will try to upgrade and analyze it when the upload is complete. You can include cached predicates in the upload, but they are ignored as the cache is  repopulated after the database has been upgraded and analyzed. However, if you want to include results with your database, make sure the database is  compatible before you start the upload session.  Incompatible databases with results won't be upgraded and therefore cannot be uploaded.  For further information on externally-built databases,  see [Preparing snapshots to upload to LGTM using the QL command-line tools](https://help.semmle.com/wiki/display/SD/Preparing+snapshots+to+upload+to+LGTM).\n\n    \nWhen the upload session has been successfully started, upload the database to the  upload URL returned in the response. The database can be uploaded to the upload URL in parts using  the [`PUT /snapshots/uploads/{session-id}`](https://lgtm.com/help/lgtm/api/api-v1#opIduploadPart) endpoint. After uploading all the parts you must call  the [`POST /snapshots/uploads/{session-id}`](https://lgtm.com/help/lgtm/api/api-v1#opIdcompleteUpload) endpoint to complete the upload session.\n",
  operationId: 'initSnapshotUpload',
  request: {
    params: z.object({
      'project-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The numeric project identifier.',
            explode: false,
            in: 'path',
            name: 'project-id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: 'The language of the database to upload.',
            explode: false,
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      commit: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the analyzed commit.',
            explode: true,
            in: 'query',
            name: 'commit',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'The date and time of the analyzed commit (default the current time).',
            explode: true,
            in: 'query',
            name: 'date',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: UploadSessionSchema } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getSystemHealthRoute = createRoute({
  method: 'get',
  path: '/system/health',
  tags: ['System'],
  summary: "Get a summary of the application's health",
  description:
    'Return an indication of whether the application is working as expected (up) or needs  attention (down). \n\\> The `description` and `details` fields are reported only if the request includes an access token for a user account that has administration rights for this LGTM server.\n',
  operationId: 'getHealth',
  responses: {
    200: {
      description: 'The application is up.',
      content: {
        'application/json': {
          schema: HealthSchema,
          examples: { healthExample: HealthExampleExample },
        },
      },
    },
    503: {
      description: 'The application is down.',
      content: { 'application/json': { schema: HealthSchema } },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getSystemMetricsRoute = createRoute({
  method: 'get',
  path: '/system/metrics',
  tags: ['System'],
  summary: 'Get the identifiers and descriptions of the usage metrics',
  description:
    'LGTM administrators can use this endpoint to list the usage metrics that are available to download.\n',
  operationId: 'getMetrics',
  responses: {
    200: {
      description: 'The metric identifiers and descriptions are returned.',
      content: {
        'application/json': {
          schema: MetricsListSchema,
          examples: { metricsExample: MetricsExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})

export const getSystemMetricsMetricIdRoute = createRoute({
  method: 'get',
  path: '/system/metrics/{metric-id}',
  tags: ['System'],
  summary: 'Get the computed values of the specified metric',
  description:
    'LGTM administrators can download usage data using this endpoint. The response includes up to 1000 values for the specified metric and reports the date-time that each value was calculated. There is normally one value per day.\n',
  operationId: 'getMetric',
  request: {
    params: z.object({
      'metric-id': z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the metric.',
            explode: false,
            in: 'path',
            name: 'metric-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. Requested data returned.',
      content: {
        'application/json': {
          schema: MetricSchema,
          examples: { metricExample: MetricExampleExample },
        },
      },
    },
  },
  security: [{ 'access-token': [] }],
})
