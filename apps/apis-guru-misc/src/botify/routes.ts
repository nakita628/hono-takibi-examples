import { createRoute, z } from '@hono/zod-openapi'

const UserSchema = z
  .object({
    company_name: z.string().exactOptional().openapi({ description: '', readOnly: false }),
    date_joined: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '', readOnly: false }),
    email: z.string().exactOptional().openapi({ description: '', readOnly: false }),
    first_name: z.string().exactOptional().openapi({ description: '', readOnly: false }),
    is_organization: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    last_name: z.string().exactOptional().openapi({ description: '', readOnly: false }),
    login: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    status: z.string().exactOptional().openapi({ description: '', readOnly: false }),
    url: z.string().exactOptional().openapi({ description: '', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('User')

const AnalysisSchema = z
  .object({
    config: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    date_created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '', readOnly: false }),
    date_finished: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '', readOnly: false }),
    date_last_modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date of last modified analysis', readOnly: false }),
    date_launched: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '', readOnly: false }),
    features: z.string().exactOptional().openapi({ description: '', readOnly: true }),
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
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: true }),
    name: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    slug: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    status: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    url: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    urls_done: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    urls_in_queue: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    user: UserSchema,
  })
  .openapi({ required: ['user'] })
  .openapi('Analysis')

const AnalysisDetailSchema = z
  .object({
    config: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    date_finished: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '', readOnly: false }),
    date_last_modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date of last modified analysis', readOnly: false }),
    date_launched: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '', readOnly: false }),
    failures: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    features: z.string().exactOptional().openapi({ description: '', readOnly: true }),
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
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: true }),
    name: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    red_button_domain: z.string().exactOptional().openapi({ description: '', readOnly: false }),
    slug: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    url: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    urls_done: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    urls_in_queue: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    user: UserSchema,
  })
  .openapi({ required: ['user'] })
  .openapi('AnalysisDetail')

const CrawlDatamodelFieldSchema = z
  .object({
    group: z.string().openapi({ description: '', readOnly: false }),
    id: z.string().openapi({ description: '', readOnly: false }),
    multiple: z.boolean().openapi({ description: '', readOnly: false }),
    name: z.string().openapi({ description: '', readOnly: false }),
    permissions: z.array(z.string()).openapi({ description: '', readOnly: false }),
    subtype: z.string().openapi({ description: '', readOnly: false }),
    type: z.string().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['multiple', 'name', 'subtype', 'group', 'type', 'id', 'permissions'] })
  .openapi('CrawlDatamodelField')

const CrawlDatamodelGroupSchema = z
  .object({
    id: z.string().openapi({ description: '', readOnly: false }),
    name: z.string().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('CrawlDatamodelGroup')

const CrawlDatamodelSchema = z
  .object({
    fields: z.array(CrawlDatamodelFieldSchema).openapi({ description: '', readOnly: false }),
    groups: z.array(CrawlDatamodelGroupSchema).openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['fields', 'groups'] })
  .openapi('CrawlDatamodel')

const CrawlOrphanURLsSchema = z
  .object({
    url: z.string().openapi({ description: '', readOnly: false }),
    visits: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
  })
  .openapi({ required: ['url', 'visits'] })
  .openapi('CrawlOrphanURLs')

const CrawlStatisticsSchema = z
  .object({
    depth_current: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    last_upd_dt: z.iso.datetime({ offset: true }).openapi({ description: '', readOnly: false }),
    pages_dones: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    pages_dones_2xx: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    pages_dones_3xx: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    pages_dones_4xx: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    pages_dones_5xx: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    pages_dones_networkerror: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    pages_dones_xxx: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    pages_known: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
  })
  .openapi({
    required: [
      'depth_current',
      'pages_dones_networkerror',
      'pages_dones_3xx',
      'pages_dones',
      'pages_dones_2xx',
      'last_upd_dt',
      'pages_dones_5xx',
      'pages_dones_xxx',
      'pages_dones_4xx',
      'pages_known',
    ],
  })
  .openapi('CrawlStatistics')

const CrawlStatisticsTimePointSchema = z
  .object({
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    datetime: z.iso.datetime({ offset: true }).openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['count', 'datetime'] })
  .openapi('CrawlStatisticsTimePoint')

const CrawlStatisticsTimeSchema = z
  .object({
    avg_delay: z
      .array(CrawlStatisticsTimePointSchema)
      .openapi({ description: '', readOnly: false }),
    avg_size: z.array(CrawlStatisticsTimePointSchema).openapi({ description: '', readOnly: false }),
    frequency: z.string().openapi({ description: '', readOnly: false }),
    http_code_2xx: z
      .array(CrawlStatisticsTimePointSchema)
      .openapi({ description: '', readOnly: false }),
    http_code_3xx: z
      .array(CrawlStatisticsTimePointSchema)
      .openapi({ description: '', readOnly: false }),
    http_code_4xx: z
      .array(CrawlStatisticsTimePointSchema)
      .openapi({ description: '', readOnly: false }),
    http_code_5xx: z
      .array(CrawlStatisticsTimePointSchema)
      .openapi({ description: '', readOnly: false }),
    http_code_xxx: z
      .array(CrawlStatisticsTimePointSchema)
      .openapi({ description: '', readOnly: false }),
    last_update_date: z.iso
      .datetime({ offset: true })
      .openapi({ description: '', readOnly: false }),
    new_urls: z.array(CrawlStatisticsTimePointSchema).openapi({ description: '', readOnly: false }),
  })
  .openapi({
    required: [
      'avg_delay',
      'http_code_2xx',
      'http_code_3xx',
      'http_code_4xx',
      'http_code_5xx',
      'http_code_xxx',
      'frequency',
      'last_update_date',
      'avg_size',
      'new_urls',
    ],
  })
  .openapi('CrawlStatisticsTime')

const CrawlStatisticsUrlsSchema = z
  .object({
    content_type: z.string().openapi({ description: '', readOnly: false }),
    date: z.string().openapi({ description: '', readOnly: false }),
    delay_first_byte: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    delay_last_byte: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    gzip: z.boolean().openapi({ description: '', readOnly: false }),
    http: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    redirects_to: z.string().exactOptional().openapi({ description: '', readOnly: false }),
    url: z.string().openapi({ description: '', readOnly: false }),
  })
  .openapi({
    required: [
      'http',
      'url',
      'delay_last_byte',
      'gzip',
      'length',
      'content_type',
      'date',
      'delay_first_byte',
    ],
  })
  .openapi('CrawlStatisticsUrls')

const UrlsQuerySchema = z
  .object({
    fields: z.array(z.string()).exactOptional().openapi({ description: '', readOnly: false }),
    filters: z.object({}).exactOptional().openapi({ description: '', readOnly: false }),
    sort: z.array(z.object({})).exactOptional().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('UrlsQuery')

const CsvExportStatusSchema = z
  .object({
    area: z
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
        default: 'current',
        description: '',
        readOnly: false,
        default: 'current',
      }),
    date_created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '', readOnly: true }),
    job_id: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    job_status: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    job_url: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    nb_results: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 2147483647,
        description: '',
        readOnly: false,
      }),
    query: UrlsQuerySchema,
    results: z.string().exactOptional().openapi({ description: '', readOnly: true }),
  })
  .openapi({ required: ['query'] })
  .openapi('CsvExportStatus')

const DefaultSchema = z.object({}).openapi('Default')

const DefaultPayloadSchema = z
  .object({
    error: z
      .object({
        error_code: z.string().exactOptional().openapi({ description: 'Error Code' }),
        error_detail: z
          .object({})
          .exactOptional()
          .openapi({ description: 'If available, detailed error' }),
        message: z.string().exactOptional().openapi({ description: 'Error Message' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'default payload for object for all HTTP codes that are not covered individually',
    required: [],
  })
  .openapi('DefaultPayload')

const FieldValuesResultSchema = z
  .object({
    nb_urls: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    value: z.string().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['value', 'nb_urls'] })
  .openapi('FieldValuesResult')

const FieldValuesSchema = z
  .object({
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    results: z.array(FieldValuesResultSchema).openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('FieldValues')

const LinksPercentilesItemSchema = z
  .object({
    avg: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
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
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    max: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    metric_total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    min: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    url_total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
  })
  .openapi({ required: ['min', 'max', 'url_total', 'metric_total', 'avg', 'id'] })
  .openapi('LinksPercentilesItem')

const LinksPercentilesSchema = z
  .object({
    domain: z.string().openapi({ description: '', readOnly: false }),
    percentiles: z.array(LinksPercentilesItemSchema).openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['domain', 'percentiles'] })
  .openapi('LinksPercentiles')

const LinksTopDomainsSamplesSchema = z
  .object({
    sources: z.array(z.string()).openapi({ description: '', readOnly: false }),
    unique_links: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    url: z.string().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['url', 'sources', 'unique_links'] })
  .openapi('LinksTopDomainsSamples')

const LinksTopDomainsSchema = z
  .object({
    domain: z.string().openapi({ description: '', readOnly: false }),
    follow_links: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    follow_samples: z
      .array(LinksTopDomainsSamplesSchema)
      .openapi({ description: '', readOnly: false }),
    nofollow_links: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    nofollow_samples: z
      .array(LinksTopDomainsSamplesSchema)
      .openapi({ description: '', readOnly: false }),
    unique_follow_links: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    unique_nofollow_links: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
  })
  .openapi({
    required: [
      'follow_links',
      'nofollow_links',
      'domain',
      'follow_samples',
      'nofollow_samples',
      'unique_follow_links',
      'unique_nofollow_links',
    ],
  })
  .openapi('LinksTopDomains')

const PageRankLostSchema = z
  .object({
    external: z.float32().openapi({ description: '', readOnly: false }),
    non_crawled: z.float32().openapi({ description: '', readOnly: false }),
    robots_txt: z.float32().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['non_crawled', 'external', 'robots_txt'] })
  .openapi('PageRankLost')

const ProjectSettingsSerializerSchema = z
  .object({
    allowed_domains: z.array(z.string()).openapi({ description: '', readOnly: false }),
    blacklisted_domains: z.array(z.string()).openapi({ description: '', readOnly: false }),
    compare_crawl: z.boolean().exactOptional().openapi({ description: '', readOnly: false }),
    crawl_gzip: z.boolean().exactOptional().openapi({ description: '', readOnly: false }),
    extra_headers: z.string().exactOptional().openapi({ description: '', readOnly: false }),
    google_analytics_account_email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Keep email in case user delete his social auth connection',
        readOnly: false,
      }),
    google_analytics_nb_days: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(90n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 90,
        description: '',
        readOnly: false,
      }),
    google_analytics_site_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-2147483648n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -2147483648,
        maximum: 2147483647,
        description: '',
        readOnly: false,
      }),
    google_social_auth_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-2147483648n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -2147483648,
        maximum: 2147483647,
        description: '',
        readOnly: false,
      }),
    has_robots_txt: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    header_settings: z.array(z.string()).openapi({ description: '', readOnly: false }),
    max_depth: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 2147483647,
        description: '',
        readOnly: false,
      }),
    max_nb_pages: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(2147483647n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 2147483647,
        description: '',
        readOnly: false,
      }),
    max_pages_per_sec: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 2147483647,
        description: '',
        readOnly: false,
      }),
    respect_nofollow: z.boolean().exactOptional().openapi({ description: '', readOnly: false }),
    sitemaps: z.array(z.string()).openapi({ description: '', readOnly: false }),
    start_urls: z.array(z.string()).openapi({ description: '', readOnly: false }),
    user_agent: z.string().exactOptional().openapi({ description: '', readOnly: false }),
  })
  .openapi({
    required: [
      'start_urls',
      'max_nb_pages',
      'blacklisted_domains',
      'allowed_domains',
      'sitemaps',
      'header_settings',
    ],
  })
  .openapi('ProjectSettingsSerializer')

const ProjectSchema = z
  .object({
    active: z.boolean().exactOptional().openapi({ description: '', readOnly: false }),
    current_settings: ProjectSettingsSerializerSchema,
    date_created: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    name: z.string().openapi({ description: '', readOnly: false }),
    slug: z.string().openapi({ description: '', readOnly: false }),
    user: UserSchema,
  })
  .openapi({ required: ['name', 'slug', 'user', 'current_settings'] })
  .openapi('Project')

const ProjectSavedFilterSchema = z
  .object({
    filters: z.object({}).openapi({ description: '', readOnly: false }),
    identifier: z.string().exactOptional().openapi({ description: '', readOnly: true }),
    name: z.string().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['name', 'filters'] })
  .openapi('ProjectSavedFilter')

const RewritingRuleSerializerSchema = z
  .object({
    ignore_case: z.boolean().openapi({ description: '', readOnly: false }),
    regex: z.string().openapi({ description: '', readOnly: false }),
    replace: z.string().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['regex', 'replace', 'ignore_case'] })
  .openapi('RewritingRuleSerializer')

const SitemapsReportSitemapErrorSchema = z
  .object({
    message: z.string().openapi({ description: '', readOnly: false }),
    type: z.string().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['type', 'message'] })
  .openapi('SitemapsReportSitemapError')

const SitemapsReportSitemapSchema = z
  .object({
    error: SitemapsReportSitemapErrorSchema.exactOptional(),
    file_type: z.string().exactOptional().openapi({ description: '', readOnly: false }),
    invalid_urls: z
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
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    sitemap_indexes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: '', readOnly: false }),
    url: z.string().openapi({ description: '', readOnly: false }),
    valid_urls: z
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
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
  })
  .openapi({ required: ['url'] })
  .openapi('SitemapsReportSitemap')

const SitemapsReportOnlySchema = z
  .object({
    in_configuration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    out_of_configuration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
  })
  .openapi({ required: ['out_of_configuration', 'in_configuration'] })
  .openapi('SitemapsReportOnly')

const SitemapsReportSchema = z
  .object({
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
    errors: z.array(SitemapsReportSitemapSchema).openapi({ description: '', readOnly: false }),
    sitemap_indexes: z
      .array(SitemapsReportSitemapSchema)
      .openapi({ description: '', readOnly: false }),
    sitemap_only: SitemapsReportOnlySchema,
    sitemaps: z.array(SitemapsReportSitemapSchema).openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['count', 'sitemap_only', 'sitemap_indexes', 'sitemaps', 'errors'] })
  .openapi('SitemapsReport')

const URLRewritingRulesSerializerSchema = z
  .object({
    rules: z.array(RewritingRuleSerializerSchema).openapi({ description: '', readOnly: false }),
    urls: z.array(z.string()).openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['urls', 'rules'] })
  .openapi('URLRewritingRulesSerializer')

const UrlDetailSchema = z.object({}).openapi('UrlDetail')

const UrlsAggSchema = z
  .object({
    aggs: z.array(z.object({})).exactOptional().openapi({ description: '', readOnly: false }),
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
  })
  .openapi({ required: ['count'] })
  .openapi('UrlsAgg')

const UrlsErrorAggSchema = z
  .object({
    error_code: z.string().openapi({ description: '', readOnly: false }),
    message: z.string().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: ['message', 'error_code'] })
  .openapi('UrlsErrorAgg')

const UrlsAggsSchema = z
  .object({
    data: UrlsAggSchema.exactOptional(),
    error: UrlsErrorAggSchema.exactOptional(),
    status: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '', readOnly: false }),
  })
  .openapi({ required: ['status'] })
  .openapi('UrlsAggs')

const UrlsAggsQuerySchema = z
  .object({
    aggs: z.array(z.object({})).exactOptional().openapi({ description: '', readOnly: false }),
    filters: z.object({}).exactOptional().openapi({ description: '', readOnly: false }),
  })
  .openapi({ required: [] })
  .openapi('UrlsAggsQuery')

const UrlsAggsQueriesSchema = z.array(UrlsAggsQuerySchema).openapi('UrlsAggsQueries')

const StringSchema = z.object({}).openapi('String')

const UrlsAggsQueriesRequestBody = {
  content: { 'application/json': { schema: UrlsAggsQueriesSchema } },
}

const UrlsQueryRequestBody = { content: { 'application/json': { schema: UrlsQuerySchema } } }

const DjangoRestTokenSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const getAnalysesUsernameProjectSlugRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}',
  tags: ['Project'],
  summary: 'List all analyses for a project',
  description: 'List all analyses for a project',
  operationId: 'getProjectAnalyses',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Page Number',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'Page Size',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              results: z
                .array(AnalysisSchema)
                .exactOptional()
                .openapi({ description: '', readOnly: true }),
              size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}',
  tags: ['Analysis'],
  summary: 'Get an Analysis detail',
  description: 'Get an Analysis detail',
  operationId: 'getAnalysisSummary',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: AnalysisDetailSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics',
  tags: ['Analysis'],
  summary: 'Return global statistics for an analysis',
  description: 'Return global statistics for an analysis',
  operationId: 'getCrawlStatistics',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CrawlStatisticsSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time',
  tags: ['Analysis'],
  summary: 'Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)',
  description:
    'Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis',
  operationId: 'getCrawlStatisticsByFrequency',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            description: 'max number of elements to retrieve',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      frequency: z
        .enum(['1mn', '5mn', '60mn'])
        .openapi({
          param: {
            description: 'Aggregation frequency',
            in: 'query',
            name: 'frequency',
            required: true,
            schema: { enum: ['1mn', '5mn', '60mn'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CrawlStatisticsTimeSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeRoute =
  createRoute({
    method: 'get',
    path: '/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}',
    tags: ['Analysis'],
    summary:
      'Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)',
    description:
      'Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)',
    operationId: 'getCrawlStatisticsUrls',
    request: {
      params: z.object({
        username: z
          .string()
          .openapi({
            param: {
              description: "User's identifier",
              in: 'path',
              name: 'username',
              required: true,
              schema: { type: 'string' },
            },
          }),
        project_slug: z
          .string()
          .openapi({
            param: {
              description: "Project's identifier",
              in: 'path',
              name: 'project_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
        analysis_slug: z
          .string()
          .openapi({
            param: {
              description: "Analysis' identifier",
              in: 'path',
              name: 'analysis_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
        list_type: z
          .enum(['crawled', 'errors'])
          .openapi({
            param: {
              description: 'URLs list type (crawled URLs or error URLs)',
              in: 'path',
              name: 'list_type',
              required: true,
              schema: { enum: ['crawled', 'errors'], type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: {
          'application/json': {
            schema: z.array(
              z
                .any()
                .openapi({
                  description: 'Successful operation',
                  'x-schema': { $ref: '#/components/schemas/CrawlStatisticsUrls' },
                }),
            ),
          },
        },
      },
      default: {
        description: 'error payload',
        content: { 'application/json': { schema: DefaultPayloadSchema } },
      },
    },
  })

export const getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceRoute =
  createRoute({
    method: 'get',
    path: '/analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}',
    tags: ['Analysis'],
    summary: 'List of Orphan URLs',
    description:
      'List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)',
    operationId: 'getGanalyticsOrphanURLs',
    request: {
      params: z.object({
        username: z
          .string()
          .openapi({
            param: {
              description: "User's identifier",
              in: 'path',
              name: 'username',
              required: true,
              schema: { type: 'string' },
            },
          }),
        project_slug: z
          .string()
          .openapi({
            param: {
              description: "Project's identifier",
              in: 'path',
              name: 'project_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
        analysis_slug: z
          .string()
          .openapi({
            param: {
              description: "Analysis' identifier",
              in: 'path',
              name: 'analysis_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
        medium: z
          .enum(['organic', 'social'])
          .openapi({
            param: {
              description:
                "Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)",
              in: 'path',
              name: 'medium',
              required: true,
              schema: { enum: ['organic', 'social'], type: 'string' },
            },
          }),
        source: z
          .enum([
            'all',
            'aol',
            'ask',
            'baidu',
            'bing',
            'facebook',
            'google',
            'google+',
            'linkedin',
            'naver',
            'pinterest',
            'reddit',
            'tumblr',
            'twitter',
            'yahoo',
            'yandex',
          ])
          .openapi({
            param: {
              description: 'Traffic source, value: name of the search engine or social network',
              in: 'path',
              name: 'source',
              required: true,
              schema: {
                enum: [
                  'all',
                  'aol',
                  'ask',
                  'baidu',
                  'bing',
                  'facebook',
                  'google',
                  'google+',
                  'linkedin',
                  'naver',
                  'pinterest',
                  'reddit',
                  'tumblr',
                  'twitter',
                  'yahoo',
                  'yandex',
                ],
                type: 'string',
              },
            },
          }),
      }),
      query: z.object({
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
          .exactOptional()
          .openapi({
            param: {
              description: 'Page Number',
              in: 'query',
              name: 'page',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        size: z
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
              description: 'Page Size',
              in: 'query',
              name: 'size',
              schema: { type: 'integer' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z
              .object({
                count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                results: z
                  .array(CrawlOrphanURLsSchema)
                  .exactOptional()
                  .openapi({ description: '', readOnly: true }),
                size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              })
              .openapi({ required: [] }),
          },
        },
      },
      default: {
        description: 'error payload',
        content: { 'application/json': { schema: DefaultPayloadSchema } },
      },
    },
  })

export const getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles',
  tags: ['Analysis'],
  summary: 'Get inlinks percentiles',
  description: 'Get inlinks percentiles',
  operationId: 'getLinksPercentiles',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: LinksPercentilesSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost',
  tags: ['Analysis'],
  summary: 'Lost pagerank',
  description: 'Lost pagerank',
  operationId: 'getPageRankLost',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PageRankLostSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report',
  tags: ['Analysis'],
  summary:
    'Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc',
  description:
    'Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)',
  operationId: 'getSitemapsReport',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SitemapsReportSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigRoute =
  createRoute({
    method: 'get',
    path: '/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config',
    tags: ['Analysis'],
    summary: 'Sample list of URLs which were found in your sitemaps but outside of the',
    description:
      'Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.',
    operationId: 'getSitemapsSamplesOutOfConfig',
    request: {
      params: z.object({
        username: z
          .string()
          .openapi({
            param: {
              description: "User's identifier",
              in: 'path',
              name: 'username',
              required: true,
              schema: { type: 'string' },
            },
          }),
        project_slug: z
          .string()
          .openapi({
            param: {
              description: "Project's identifier",
              in: 'path',
              name: 'project_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
        analysis_slug: z
          .string()
          .openapi({
            param: {
              description: "Analysis' identifier",
              in: 'path',
              name: 'analysis_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
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
          .exactOptional()
          .openapi({
            param: {
              description: 'Page Number',
              in: 'query',
              name: 'page',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        size: z
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
              description: 'Page Size',
              in: 'query',
              name: 'size',
              schema: { type: 'integer' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z
              .object({
                count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                results: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ description: '', readOnly: true }),
                size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              })
              .openapi({ required: [] }),
          },
        },
      },
      default: {
        description: 'error payload',
        content: { 'application/json': { schema: DefaultPayloadSchema } },
      },
    },
  })

export const getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyRoute =
  createRoute({
    method: 'get',
    path: '/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only',
    tags: ['Analysis'],
    summary: 'Sample list of URLs which were found in your sitemaps, within the project',
    description:
      'Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.',
    operationId: 'getSitemapsSamplesSitemapsOnly',
    request: {
      params: z.object({
        username: z
          .string()
          .openapi({
            param: {
              description: "User's identifier",
              in: 'path',
              name: 'username',
              required: true,
              schema: { type: 'string' },
            },
          }),
        project_slug: z
          .string()
          .openapi({
            param: {
              description: "Project's identifier",
              in: 'path',
              name: 'project_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
        analysis_slug: z
          .string()
          .openapi({
            param: {
              description: "Analysis' identifier",
              in: 'path',
              name: 'analysis_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
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
          .exactOptional()
          .openapi({
            param: {
              description: 'Page Number',
              in: 'query',
              name: 'page',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        size: z
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
              description: 'Page Size',
              in: 'query',
              name: 'size',
              schema: { type: 'integer' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z
              .object({
                count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                results: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ description: '', readOnly: true }),
                size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              })
              .openapi({ required: [] }),
          },
        },
      },
      default: {
        description: 'error payload',
        content: { 'application/json': { schema: DefaultPayloadSchema } },
      },
    },
  })

export const getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsRoute = createRoute(
  {
    method: 'get',
    path: '/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains',
    tags: ['Analysis'],
    summary: 'Top domains',
    description: 'Top domains',
    operationId: 'getLinksTopDomains',
    request: {
      params: z.object({
        username: z
          .string()
          .openapi({
            param: {
              description: "User's identifier",
              in: 'path',
              name: 'username',
              required: true,
              schema: { type: 'string' },
            },
          }),
        project_slug: z
          .string()
          .openapi({
            param: {
              description: "Project's identifier",
              in: 'path',
              name: 'project_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
        analysis_slug: z
          .string()
          .openapi({
            param: {
              description: "Analysis' identifier",
              in: 'path',
              name: 'analysis_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
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
          .exactOptional()
          .openapi({
            param: {
              description: 'Page Number',
              in: 'query',
              name: 'page',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        size: z
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
              description: 'Page Size',
              in: 'query',
              name: 'size',
              schema: { type: 'integer' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z
              .object({
                count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                results: z
                  .array(LinksTopDomainsSchema)
                  .exactOptional()
                  .openapi({ description: '', readOnly: true }),
                size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              })
              .openapi({ required: [] }),
          },
        },
      },
      default: {
        description: 'error payload',
        content: { 'application/json': { schema: DefaultPayloadSchema } },
      },
    },
  },
)

export const getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsRoute =
  createRoute({
    method: 'get',
    path: '/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains',
    tags: ['Analysis'],
    summary: 'Top subddomains',
    description: 'Top subddomains',
    operationId: 'getLinksTopSubdomains',
    request: {
      params: z.object({
        username: z
          .string()
          .openapi({
            param: {
              description: "User's identifier",
              in: 'path',
              name: 'username',
              required: true,
              schema: { type: 'string' },
            },
          }),
        project_slug: z
          .string()
          .openapi({
            param: {
              description: "Project's identifier",
              in: 'path',
              name: 'project_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
        analysis_slug: z
          .string()
          .openapi({
            param: {
              description: "Analysis' identifier",
              in: 'path',
              name: 'analysis_slug',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
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
          .exactOptional()
          .openapi({
            param: {
              description: 'Page Number',
              in: 'query',
              name: 'page',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        size: z
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
              description: 'Page Size',
              in: 'query',
              name: 'size',
              schema: { type: 'integer' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z
              .object({
                count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
                previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
                results: z
                  .array(LinksTopDomainsSchema)
                  .exactOptional()
                  .openapi({ description: '', readOnly: true }),
                size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              })
              .openapi({ required: [] }),
          },
        },
      },
      default: {
        description: 'error payload',
        content: { 'application/json': { schema: DefaultPayloadSchema } },
      },
    },
  })

export const postAnalysesUsernameProjectSlugAnalysisSlugUrlsRoute = createRoute({
  method: 'post',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/urls',
  tags: ['Analysis'],
  summary: 'Executes a query and returns a paginated response',
  description: 'Executes a query and returns a paginated response',
  operationId: 'getUrls',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      area: z
        .enum(['current', 'disappeared', 'new', 'search_engines_orphans'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            description: 'Analysis context to execute the query',
            in: 'query',
            name: 'area',
            required: false,
            schema: {
              default: 'current',
              enum: ['current', 'disappeared', 'new', 'search_engines_orphans'],
              type: 'string',
            },
          },
        }),
      page: z
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
            description: 'Page Number',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      size: z
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
            description: 'Page Size',
            in: 'query',
            name: 'size',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: UrlsQueryRequestBody,
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              results: z
                .array(UrlDetailSchema)
                .exactOptional()
                .openapi({ description: '', readOnly: true }),
              size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const postAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsRoute = createRoute({
  method: 'post',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs',
  tags: ['Analysis'],
  summary: 'Query aggregator',
  description: 'Query aggregator. It accepts multiple queries',
  operationId: 'getUrlsAggs',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      area: z
        .enum(['current', 'disappeared', 'new', 'search_engines_orphans'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'area',
            required: false,
            schema: {
              default: 'current',
              enum: ['current', 'disappeared', 'new', 'search_engines_orphans'],
              type: 'string',
            },
          },
        }),
    }),
    body: UrlsAggsQueriesRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(
            z
              .any()
              .openapi({
                description: 'Successful operation',
                'x-schema': { $ref: '#/components/schemas/UrlsAggs' },
              }),
          ),
        },
      },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel',
  tags: ['Analysis'],
  summary: 'Gets an Analysis datamodel',
  description: 'Gets an Analysis datamodel',
  operationId: 'getUrlsDatamodel',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      area: z
        .enum(['current', 'disappeared', 'new', 'search_engines_orphans'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'area',
            required: false,
            schema: {
              default: 'current',
              enum: ['current', 'disappeared', 'new', 'search_engines_orphans'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CrawlDatamodelSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/urls/export',
  tags: ['Analysis'],
  summary: 'A list of the CSV Exports requests and their current status',
  description: 'A list of the CSV Exports requests and their current status',
  operationId: 'getUrlsExports',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Page Number',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'Page Size',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              results: z
                .array(CsvExportStatusSchema)
                .exactOptional()
                .openapi({ description: '', readOnly: true }),
              size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const postAnalysesUsernameProjectSlugAnalysisSlugUrlsExportRoute = createRoute({
  method: 'post',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/urls/export',
  tags: ['Analysis'],
  summary:
    'Creates a new UrlExport object and starts a task that will export the results into a csv',
  description:
    'Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task',
  operationId: 'createUrlsExport',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      area: z
        .enum(['current', 'disappeared', 'new', 'search_engines_orphans'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'area',
            required: false,
            schema: {
              default: 'current',
              enum: ['current', 'disappeared', 'new', 'search_engines_orphans'],
              type: 'string',
            },
          },
        }),
    }),
    body: UrlsQueryRequestBody,
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CsvExportStatusSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id}',
  tags: ['Analysis'],
  summary: 'Checks the status of an CSVUrlExportJob object',
  description:
    'Checks the status of an CSVUrlExportJob object. Returns json object with the status.',
  operationId: 'getUrlsExportStatus',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      url_export_id: z
        .string()
        .openapi({
          param: {
            description: 'Url Export ID',
            in: 'path',
            name: 'url_export_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CsvExportStatusSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const postAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersRoute = createRoute({
  method: 'post',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/urls/suggested_filters',
  tags: ['Analysis'],
  summary: 'Return most frequent segments (= suggested patterns in the previous version)',
  description:
    'Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.',
  operationId: 'getUrlsSuggestedFilters',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      area: z
        .enum(['current', 'new'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'area',
            required: false,
            schema: { default: 'current', enum: ['current', 'new'], type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UrlsAggsQuerySchema } } },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: { 'application/json': { schema: UrlsAggsQuerySchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlRoute = createRoute({
  method: 'get',
  path: '/analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}',
  tags: ['Analysis'],
  summary: 'Gets the detail of an URL for an analysis',
  description: 'Gets the detail of an URL for an analysis',
  operationId: 'getUrlDetail',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      analysis_slug: z
        .string()
        .openapi({
          param: {
            description: "Analysis' identifier",
            in: 'path',
            name: 'analysis_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      url: z
        .string()
        .openapi({
          param: {
            description: '(Urlencoded) Searched URL',
            in: 'path',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'comma separated list of fields to return (c.f. URLs Datamodel)',
            explode: false,
            in: 'query',
            name: 'fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: UrlDetailSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getProjectsUsernameRoute = createRoute({
  method: 'get',
  path: '/projects/{username}',
  tags: ['User'],
  summary: 'List all active projects for the user',
  description: 'List all active projects for the user',
  operationId: 'getUserProjects',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Page Number',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'Page Size',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              results: z
                .array(ProjectSchema)
                .exactOptional()
                .openapi({ description: '', readOnly: true }),
              size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const postProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorRoute = createRoute({
  method: 'post',
  path: '/projects/{username}/{project_slug}/features/url_rewriting/rules_validator',
  tags: ['Project'],
  summary: 'Match and replace parts of a URL based on rules passed in POST data',
  description: 'Match and replace parts of a URL based on rules passed in POST data.',
  operationId: 'testUrlRewritingRules',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: { 'application/json': { schema: URLRewritingRulesSerializerSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getProjectsUsernameProjectSlugFiltersRoute = createRoute({
  method: 'get',
  path: '/projects/{username}/{project_slug}/filters',
  tags: ['Project'],
  summary: "List all the project's saved filters (each filter's name, ID and filter value)",
  description: "List all the project's saved filters (each filter's name, ID and filter value)",
  operationId: 'getSavedFilters',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Page Number',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'Page Size',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              next: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              page: z.int().exactOptional().openapi({ description: '', readOnly: true }),
              previous: z.string().exactOptional().openapi({ description: '', readOnly: true }),
              results: z
                .array(ProjectSavedFilterSchema)
                .exactOptional()
                .openapi({ description: '', readOnly: true }),
              size: z.int().exactOptional().openapi({ description: '', readOnly: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const getProjectsUsernameProjectSlugFiltersIdentifierRoute = createRoute({
  method: 'get',
  path: '/projects/{username}/{project_slug}/filters/{identifier}',
  tags: ['Project'],
  summary: "Retrieves a specific saved filter's name, ID and filter value",
  description: "Retrieves a specific saved filter's name, ID and filter value",
  operationId: 'getSavedFilter',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
      identifier: z
        .string()
        .openapi({
          param: {
            description: "Saved Filter's identifier",
            in: 'path',
            name: 'identifier',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ProjectSavedFilterSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})

export const postProjectsUsernameProjectSlugUrlsAggsRoute = createRoute({
  method: 'post',
  path: '/projects/{username}/{project_slug}/urls/aggs',
  tags: ['Project'],
  summary: 'Project Query aggregator',
  description:
    'Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project',
  operationId: 'getProjectUrlsAggs',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "User's identifier",
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      project_slug: z
        .string()
        .openapi({
          param: {
            description: "Project's identifier",
            in: 'path',
            name: 'project_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      area: z
        .enum(['current', 'disappeared', 'new'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            description: 'Analysis context to execute the queries',
            in: 'query',
            name: 'area',
            required: false,
            schema: { default: 'current', enum: ['current', 'disappeared', 'new'], type: 'string' },
          },
        }),
      last_analysis_slug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Last analysis on the trend',
            in: 'query',
            name: 'last_analysis_slug',
            required: false,
            schema: { type: 'string' },
          },
        }),
      nb_analyses: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(20),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of analysis to return',
            in: 'query',
            name: 'nb_analyses',
            required: false,
            schema: { default: 20, format: 'int32', maximum: 20, minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: UrlsAggsQueriesRequestBody,
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DefaultSchema } },
    },
    default: {
      description: 'error payload',
      content: { 'application/json': { schema: DefaultPayloadSchema } },
    },
  },
})
